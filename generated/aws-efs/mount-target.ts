// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMountTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the file system for which to create the mount target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#file_system_id CcMountTarget#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * If the ``IpAddressType`` for the mount target is IPv4 ( ``IPV4_ONLY`` or ``DUAL_STACK``), then specify the IPv4 address to use. If you do not specify an ``IpAddress``, then Amazon EFS selects an unused IP address from the subnet specified for ``SubnetId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#ip_address CcMountTarget#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * The IP address type for the mount target. The possible values are ``IPV4_ONLY`` (only IPv4 addresses), ``IPV6_ONLY`` (only IPv6 addresses), and ``DUAL_STACK`` (dual-stack, both IPv4 and IPv6 addresses). If you don?t specify an ``IpAddressType``, then ``IPV4_ONLY`` is used.
    *   The ``IPAddressType`` must match the IP type of the subnet. Additionally, the ``IPAddressType`` parameter overrides the value set as the default IP address for the subnet in the VPC. For example, if the ``IPAddressType`` is ``IPV4_ONLY`` and ``AssignIpv6AddressOnCreation`` is ``true``, then IPv4 is used for the mount target. For more information, see [Modify the IP addressing attributes of your subnet](https://docs.aws.amazon.com/vpc/latest/userguide/subnet-public-ip.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#ip_address_type CcMountTarget#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * If the ``IPAddressType`` for the mount target is IPv6 (``IPV6_ONLY`` or ``DUAL_STACK``), then specify the IPv6 address to use. If you do not specify an ``Ipv6Address``, then Amazon EFS selects an unused IP address from the subnet specified for ``SubnetId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#ipv_6_address CcMountTarget#ipv_6_address}
    */
    readonly ipv6Address?: string;
    /**
    * VPC security group IDs, of the form ``sg-xxxxxxxx``. These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the *Security Groups* table). If you don't specify a security group, then Amazon EFS uses the default security group for the subnet's VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#security_groups CcMountTarget#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone. The subnet type must be the same type as the ``IpAddressType``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#subnet_id CcMountTarget#subnet_id}
    */
    readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target awscc_efs_mount_target}
*/
export class CcMountTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_efs_mount_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMountTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMountTarget to import
    * @param importFromId The id of the existing CcMountTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMountTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_efs_mount_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/efs_mount_target awscc_efs_mount_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMountTargetProps
    */
    public constructor(scope: Construct, id: string, config: CcMountTargetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_efs_mount_target',
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
        this._fileSystemId = config.fileSystemId;
        this._ipAddress = config.ipAddress;
        this._ipAddressType = config.ipAddressType;
        this._ipv6Address = config.ipv6Address;
        this._securityGroups = config.securityGroups;
        this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: true, required: false
    private _ipAddress?: string; 
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
        this._ipAddress = value;
    }
    public resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
        return this._ipAddress;
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

    // ipv_6_address - computed: true, optional: true, required: false
    private _ipv6Address?: string; 
    public get ipv6Address() {
        return this.getStringAttribute('ipv_6_address');
    }
    public set ipv6Address(value: string) {
        this._ipv6Address = value;
    }
    public resetIpv6Address() {
        this._ipv6Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressInput() {
        return this._ipv6Address;
    }

    // mount_target_id - computed: true, optional: false, required: false
    public get mountTargetId() {
        return this.getStringAttribute('mount_target_id');
    }

    // security_groups - computed: false, optional: false, required: true
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            file_system_id: cdktn.stringToTerraform(this._fileSystemId),
            ip_address: cdktn.stringToTerraform(this._ipAddress),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            ipv_6_address: cdktn.stringToTerraform(this._ipv6Address),
            security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            file_system_id: {
                value: cdktn.stringToHclTerraform(this._fileSystemId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_address: {
                value: cdktn.stringToHclTerraform(this._ipAddress),
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
            ipv_6_address: {
                value: cdktn.stringToHclTerraform(this._ipv6Address),
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
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcMountTarget {
}
