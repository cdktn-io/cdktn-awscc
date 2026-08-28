// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocalGatewayRouteTableVirtualInterfaceGroupAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the local gateway route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_route_table_id CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId: string;
    /**
    * The ID of the local gateway route table virtual interface group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#local_gateway_virtual_interface_group_id CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation#local_gateway_virtual_interface_group_id}
    */
    readonly localGatewayVirtualInterfaceGroupId: string;
    /**
    * The tags for the local gateway route table virtual interface group association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#tags CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation#tags}
    */
    readonly tags?: CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association awscc_ec2_local_gateway_route_table_virtual_interface_group_association}
*/
export class CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_local_gateway_route_table_virtual_interface_group_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation to import
    * @param importFromId The id of the existing CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_local_gateway_route_table_virtual_interface_group_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association awscc_ec2_local_gateway_route_table_virtual_interface_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocalGatewayRouteTableVirtualInterfaceGroupAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcLocalGatewayRouteTableVirtualInterfaceGroupAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_local_gateway_route_table_virtual_interface_group_association',
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
        this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // local_gateway_id - computed: true, optional: false, required: false
    public get localGatewayId() {
        return this.getStringAttribute('local_gateway_id');
    }

    // local_gateway_route_table_arn - computed: true, optional: false, required: false
    public get localGatewayRouteTableArn() {
        return this.getStringAttribute('local_gateway_route_table_arn');
    }

    // local_gateway_route_table_id - computed: false, optional: false, required: true
    private _localGatewayRouteTableId?: string; 
    public get localGatewayRouteTableId() {
        return this.getStringAttribute('local_gateway_route_table_id');
    }
    public set localGatewayRouteTableId(value: string) {
        this._localGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayRouteTableIdInput() {
        return this._localGatewayRouteTableId;
    }

    // local_gateway_route_table_virtual_interface_group_association_id - computed: true, optional: false, required: false
    public get localGatewayRouteTableVirtualInterfaceGroupAssociationId() {
        return this.getStringAttribute('local_gateway_route_table_virtual_interface_group_association_id');
    }

    // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
    private _localGatewayVirtualInterfaceGroupId?: string; 
    public get localGatewayVirtualInterfaceGroupId() {
        return this.getStringAttribute('local_gateway_virtual_interface_group_id');
    }
    public set localGatewayVirtualInterfaceGroupId(value: string) {
        this._localGatewayVirtualInterfaceGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayVirtualInterfaceGroupIdInput() {
        return this._localGatewayVirtualInterfaceGroupId;
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            local_gateway_route_table_id: cdktn.stringToTerraform(this._localGatewayRouteTableId),
            local_gateway_virtual_interface_group_id: cdktn.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
            tags: cdktn.listMapper(ccLocalGatewayRouteTableVirtualInterfaceGroupAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            local_gateway_route_table_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayRouteTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_gateway_virtual_interface_group_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayVirtualInterfaceGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocalGatewayRouteTableVirtualInterfaceGroupAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocalGatewayRouteTableVirtualInterfaceGroupAssociationTagPropertyToTerraform(struct?: CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocalGatewayRouteTableVirtualInterfaceGroupAssociationTagPropertyToHclTerraform(struct?: CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#key CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_route_table_virtual_interface_group_association#value CcLocalGatewayRouteTableVirtualInterfaceGroupAssociation#value}
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
