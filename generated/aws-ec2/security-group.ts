// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#group_description CcSecurityGroup#group_description}
    */
    readonly groupDescription: string;
    /**
    * The name of the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#group_name CcSecurityGroup#group_name}
    */
    readonly groupName?: string;
    /**
    * [VPC only] The outbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#security_group_egress CcSecurityGroup#security_group_egress}
    */
    readonly securityGroupEgress?: CcSecurityGroup.EgressProperty[] | cdktn.IResolvable;
    /**
    * The inbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#security_group_ingress CcSecurityGroup#security_group_ingress}
    */
    readonly securityGroupIngress?: CcSecurityGroup.IngressProperty[] | cdktn.IResolvable;
    /**
    * Any tags assigned to the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#tags CcSecurityGroup#tags}
    */
    readonly tags?: CcSecurityGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the VPC for the security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#vpc_id CcSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group awscc_ec2_security_group}
*/
export class CcSecurityGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_security_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityGroup to import
    * @param importFromId The id of the existing CcSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_security_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group awscc_ec2_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_security_group',
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
        this._groupDescription = config.groupDescription;
        this._groupName = config.groupName;
        this._securityGroupEgress.internalValue = config.securityGroupEgress;
        this._securityGroupIngress.internalValue = config.securityGroupIngress;
        this._tags.internalValue = config.tags;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group_description - computed: false, optional: false, required: true
    private _groupDescription?: string; 
    public get groupDescription() {
        return this.getStringAttribute('group_description');
    }
    public set groupDescription(value: string) {
        this._groupDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupDescriptionInput() {
        return this._groupDescription;
    }

    // group_id - computed: true, optional: false, required: false
    public get groupId() {
        return this.getStringAttribute('group_id');
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

    // security_group_egress - computed: true, optional: true, required: false
    private _securityGroupEgress = new CcSecurityGroup.EgressPropertyList(this, "security_group_egress", false);
    public get securityGroupEgress() {
        return this._securityGroupEgress;
    }
    public putSecurityGroupEgress(value: CcSecurityGroup.EgressProperty[] | cdktn.IResolvable) {
        this._securityGroupEgress.internalValue = value;
    }
    public resetSecurityGroupEgress() {
        this._securityGroupEgress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupEgressInput() {
        return this._securityGroupEgress.internalValue;
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }

    // security_group_ingress - computed: true, optional: true, required: false
    private _securityGroupIngress = new CcSecurityGroup.IngressPropertyList(this, "security_group_ingress", false);
    public get securityGroupIngress() {
        return this._securityGroupIngress;
    }
    public putSecurityGroupIngress(value: CcSecurityGroup.IngressProperty[] | cdktn.IResolvable) {
        this._securityGroupIngress.internalValue = value;
    }
    public resetSecurityGroupIngress() {
        this._securityGroupIngress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIngressInput() {
        return this._securityGroupIngress.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSecurityGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSecurityGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            group_description: cdktn.stringToTerraform(this._groupDescription),
            group_name: cdktn.stringToTerraform(this._groupName),
            security_group_egress: cdktn.listMapper(ccSecurityGroupEgressPropertyToTerraform, false)(this._securityGroupEgress.internalValue),
            security_group_ingress: cdktn.listMapper(ccSecurityGroupIngressPropertyToTerraform, false)(this._securityGroupIngress.internalValue),
            tags: cdktn.listMapper(ccSecurityGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            group_description: {
                value: cdktn.stringToHclTerraform(this._groupDescription),
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
            security_group_egress: {
                value: cdktn.listMapperHcl(ccSecurityGroupEgressPropertyToHclTerraform, false)(this._securityGroupEgress.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecurityGroup.EgressPropertyList",
            },
            security_group_ingress: {
                value: cdktn.listMapperHcl(ccSecurityGroupIngressPropertyToHclTerraform, false)(this._securityGroupIngress.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecurityGroup.IngressPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSecurityGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecurityGroup.TagPropertyList",
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

export function ccSecurityGroupEgressPropertyToTerraform(struct?: CcSecurityGroup.EgressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr_ip: cdktn.stringToTerraform(struct!.cidrIp),
        cidr_ipv_6: cdktn.stringToTerraform(struct!.cidrIpv6),
        description: cdktn.stringToTerraform(struct!.description),
        destination_prefix_list_id: cdktn.stringToTerraform(struct!.destinationPrefixListId),
        destination_security_group_id: cdktn.stringToTerraform(struct!.destinationSecurityGroupId),
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccSecurityGroupEgressPropertyToHclTerraform(struct?: CcSecurityGroup.EgressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr_ip: {
            value: cdktn.stringToHclTerraform(struct!.cidrIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cidr_ipv_6: {
            value: cdktn.stringToHclTerraform(struct!.cidrIpv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_prefix_list_id: {
            value: cdktn.stringToHclTerraform(struct!.destinationPrefixListId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_security_group_id: {
            value: cdktn.stringToHclTerraform(struct!.destinationSecurityGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip_protocol: {
            value: cdktn.stringToHclTerraform(struct!.ipProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityGroupIngressPropertyToTerraform(struct?: CcSecurityGroup.IngressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr_ip: cdktn.stringToTerraform(struct!.cidrIp),
        cidr_ipv_6: cdktn.stringToTerraform(struct!.cidrIpv6),
        description: cdktn.stringToTerraform(struct!.description),
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
        source_prefix_list_id: cdktn.stringToTerraform(struct!.sourcePrefixListId),
        source_security_group_id: cdktn.stringToTerraform(struct!.sourceSecurityGroupId),
        source_security_group_name: cdktn.stringToTerraform(struct!.sourceSecurityGroupName),
        source_security_group_owner_id: cdktn.stringToTerraform(struct!.sourceSecurityGroupOwnerId),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccSecurityGroupIngressPropertyToHclTerraform(struct?: CcSecurityGroup.IngressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr_ip: {
            value: cdktn.stringToHclTerraform(struct!.cidrIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cidr_ipv_6: {
            value: cdktn.stringToHclTerraform(struct!.cidrIpv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip_protocol: {
            value: cdktn.stringToHclTerraform(struct!.ipProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_prefix_list_id: {
            value: cdktn.stringToHclTerraform(struct!.sourcePrefixListId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_security_group_id: {
            value: cdktn.stringToHclTerraform(struct!.sourceSecurityGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_security_group_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceSecurityGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_security_group_owner_id: {
            value: cdktn.stringToHclTerraform(struct!.sourceSecurityGroupOwnerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityGroupTagPropertyToTerraform(struct?: CcSecurityGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSecurityGroupTagPropertyToHclTerraform(struct?: CcSecurityGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSecurityGroup {
export interface EgressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#cidr_ip CcSecurityGroup#cidr_ip}
    */
    readonly cidrIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#cidr_ipv_6 CcSecurityGroup#cidr_ipv_6}
    */
    readonly cidrIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#description CcSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#destination_prefix_list_id CcSecurityGroup#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#destination_security_group_id CcSecurityGroup#destination_security_group_id}
    */
    readonly destinationSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#from_port CcSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#ip_protocol CcSecurityGroup#ip_protocol}
    */
    readonly ipProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#to_port CcSecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export class EgressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EgressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrIp = this._cidrIp;
        }
        if (this._cidrIpv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrIpv6 = this._cidrIpv6;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._destinationPrefixListId !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPrefixListId = this._destinationPrefixListId;
        }
        if (this._destinationSecurityGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationSecurityGroupId = this._destinationSecurityGroupId;
        }
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._ipProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipProtocol = this._ipProtocol;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EgressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrIp = undefined;
            this._cidrIpv6 = undefined;
            this._description = undefined;
            this._destinationPrefixListId = undefined;
            this._destinationSecurityGroupId = undefined;
            this._fromPort = undefined;
            this._ipProtocol = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrIp = value.cidrIp;
            this._cidrIpv6 = value.cidrIpv6;
            this._description = value.description;
            this._destinationPrefixListId = value.destinationPrefixListId;
            this._destinationSecurityGroupId = value.destinationSecurityGroupId;
            this._fromPort = value.fromPort;
            this._ipProtocol = value.ipProtocol;
            this._toPort = value.toPort;
        }
    }

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

    // ip_protocol - computed: true, optional: true, required: false
    private _ipProtocol?: string; 
    public get ipProtocol() {
        return this.getStringAttribute('ip_protocol');
    }
    public set ipProtocol(value: string) {
        this._ipProtocol = value;
    }
    public resetIpProtocol() {
        this._ipProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipProtocolInput() {
        return this._ipProtocol;
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
}

export class EgressPropertyList extends cdktn.ComplexList {
    public internalValue? : EgressProperty[] | cdktn.IResolvable

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
    public get(index: number): EgressPropertyOutputReference {
        return new EgressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IngressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#cidr_ip CcSecurityGroup#cidr_ip}
    */
    readonly cidrIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#cidr_ipv_6 CcSecurityGroup#cidr_ipv_6}
    */
    readonly cidrIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#description CcSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#from_port CcSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#ip_protocol CcSecurityGroup#ip_protocol}
    */
    readonly ipProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#source_prefix_list_id CcSecurityGroup#source_prefix_list_id}
    */
    readonly sourcePrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#source_security_group_id CcSecurityGroup#source_security_group_id}
    */
    readonly sourceSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#source_security_group_name CcSecurityGroup#source_security_group_name}
    */
    readonly sourceSecurityGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#source_security_group_owner_id CcSecurityGroup#source_security_group_owner_id}
    */
    readonly sourceSecurityGroupOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#to_port CcSecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export class IngressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IngressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrIp = this._cidrIp;
        }
        if (this._cidrIpv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrIpv6 = this._cidrIpv6;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._ipProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipProtocol = this._ipProtocol;
        }
        if (this._sourcePrefixListId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePrefixListId = this._sourcePrefixListId;
        }
        if (this._sourceSecurityGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceSecurityGroupId = this._sourceSecurityGroupId;
        }
        if (this._sourceSecurityGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceSecurityGroupName = this._sourceSecurityGroupName;
        }
        if (this._sourceSecurityGroupOwnerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceSecurityGroupOwnerId = this._sourceSecurityGroupOwnerId;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrIp = undefined;
            this._cidrIpv6 = undefined;
            this._description = undefined;
            this._fromPort = undefined;
            this._ipProtocol = undefined;
            this._sourcePrefixListId = undefined;
            this._sourceSecurityGroupId = undefined;
            this._sourceSecurityGroupName = undefined;
            this._sourceSecurityGroupOwnerId = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrIp = value.cidrIp;
            this._cidrIpv6 = value.cidrIpv6;
            this._description = value.description;
            this._fromPort = value.fromPort;
            this._ipProtocol = value.ipProtocol;
            this._sourcePrefixListId = value.sourcePrefixListId;
            this._sourceSecurityGroupId = value.sourceSecurityGroupId;
            this._sourceSecurityGroupName = value.sourceSecurityGroupName;
            this._sourceSecurityGroupOwnerId = value.sourceSecurityGroupOwnerId;
            this._toPort = value.toPort;
        }
    }

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

    // ip_protocol - computed: true, optional: true, required: false
    private _ipProtocol?: string; 
    public get ipProtocol() {
        return this.getStringAttribute('ip_protocol');
    }
    public set ipProtocol(value: string) {
        this._ipProtocol = value;
    }
    public resetIpProtocol() {
        this._ipProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipProtocolInput() {
        return this._ipProtocol;
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
}

export class IngressPropertyList extends cdktn.ComplexList {
    public internalValue? : IngressProperty[] | cdktn.IResolvable

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
    public get(index: number): IngressPropertyOutputReference {
        return new IngressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#key CcSecurityGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_security_group#value CcSecurityGroup#value}
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
