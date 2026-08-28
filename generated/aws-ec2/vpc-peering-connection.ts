// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCPeeringConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#assume_role_region CcVPCPeeringConnection#assume_role_region}
    */
    readonly assumeRoleRegion?: string;
    /**
    * The AWS account ID of the owner of the accepter VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#peer_owner_id CcVPCPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#peer_region CcVPCPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#peer_role_arn CcVPCPeeringConnection#peer_role_arn}
    */
    readonly peerRoleArn?: string;
    /**
    * The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#peer_vpc_id CcVPCPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#tags CcVPCPeeringConnection#tags}
    */
    readonly tags?: CcVPCPeeringConnection.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#vpc_id CcVPCPeeringConnection#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection awscc_ec2_vpc_peering_connection}
*/
export class CcVPCPeeringConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_peering_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCPeeringConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCPeeringConnection to import
    * @param importFromId The id of the existing CcVPCPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCPeeringConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_peering_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection awscc_ec2_vpc_peering_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCPeeringConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCPeeringConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_peering_connection',
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
        this._assumeRoleRegion = config.assumeRoleRegion;
        this._peerOwnerId = config.peerOwnerId;
        this._peerRegion = config.peerRegion;
        this._peerRoleArn = config.peerRoleArn;
        this._peerVpcId = config.peerVpcId;
        this._tags.internalValue = config.tags;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // assume_role_region - computed: true, optional: true, required: false
    private _assumeRoleRegion?: string; 
    public get assumeRoleRegion() {
        return this.getStringAttribute('assume_role_region');
    }
    public set assumeRoleRegion(value: string) {
        this._assumeRoleRegion = value;
    }
    public resetAssumeRoleRegion() {
        this._assumeRoleRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assumeRoleRegionInput() {
        return this._assumeRoleRegion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // peer_owner_id - computed: true, optional: true, required: false
    private _peerOwnerId?: string; 
    public get peerOwnerId() {
        return this.getStringAttribute('peer_owner_id');
    }
    public set peerOwnerId(value: string) {
        this._peerOwnerId = value;
    }
    public resetPeerOwnerId() {
        this._peerOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerOwnerIdInput() {
        return this._peerOwnerId;
    }

    // peer_region - computed: true, optional: true, required: false
    private _peerRegion?: string; 
    public get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    public set peerRegion(value: string) {
        this._peerRegion = value;
    }
    public resetPeerRegion() {
        this._peerRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerRegionInput() {
        return this._peerRegion;
    }

    // peer_role_arn - computed: true, optional: true, required: false
    private _peerRoleArn?: string; 
    public get peerRoleArn() {
        return this.getStringAttribute('peer_role_arn');
    }
    public set peerRoleArn(value: string) {
        this._peerRoleArn = value;
    }
    public resetPeerRoleArn() {
        this._peerRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerRoleArnInput() {
        return this._peerRoleArn;
    }

    // peer_vpc_id - computed: false, optional: false, required: true
    private _peerVpcId?: string; 
    public get peerVpcId() {
        return this.getStringAttribute('peer_vpc_id');
    }
    public set peerVpcId(value: string) {
        this._peerVpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerVpcIdInput() {
        return this._peerVpcId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVPCPeeringConnection.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVPCPeeringConnection.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // vpc_peering_connection_id - computed: true, optional: false, required: false
    public get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            assume_role_region: cdktn.stringToTerraform(this._assumeRoleRegion),
            peer_owner_id: cdktn.stringToTerraform(this._peerOwnerId),
            peer_region: cdktn.stringToTerraform(this._peerRegion),
            peer_role_arn: cdktn.stringToTerraform(this._peerRoleArn),
            peer_vpc_id: cdktn.stringToTerraform(this._peerVpcId),
            tags: cdktn.listMapper(ccVPCPeeringConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assume_role_region: {
                value: cdktn.stringToHclTerraform(this._assumeRoleRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_owner_id: {
                value: cdktn.stringToHclTerraform(this._peerOwnerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_region: {
                value: cdktn.stringToHclTerraform(this._peerRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_role_arn: {
                value: cdktn.stringToHclTerraform(this._peerRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_vpc_id: {
                value: cdktn.stringToHclTerraform(this._peerVpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVPCPeeringConnectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVPCPeeringConnection.TagPropertyList",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVPCPeeringConnectionTagPropertyToTerraform(struct?: CcVPCPeeringConnection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPCPeeringConnectionTagPropertyToHclTerraform(struct?: CcVPCPeeringConnection.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVPCPeeringConnection {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#key CcVPCPeeringConnection#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_peering_connection#value CcVPCPeeringConnection#value}
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
