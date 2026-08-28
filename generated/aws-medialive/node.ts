// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNodeProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the Cluster that the Node belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#cluster_id CcNode#cluster_id}
    */
    readonly clusterId: string;
    /**
    * The user-specified name of the Node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#name CcNode#name}
    */
    readonly name?: string;
    /**
    * An array of interface mappings for the Node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#node_interface_mappings CcNode#node_interface_mappings}
    */
    readonly nodeInterfaceMappings?: CcNode.NodeInterfaceMappingProperty[] | cdktn.IResolvable;
    /**
    * The role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#role CcNode#role}
    */
    readonly role?: string;
    /**
    * An array of SDI source mappings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#sdi_source_mappings CcNode#sdi_source_mappings}
    */
    readonly sdiSourceMappings?: CcNode.SdiSourceMappingProperty[] | cdktn.IResolvable;
    /**
    * A collection of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#tags CcNode#tags}
    */
    readonly tags?: CcNode.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node awscc_medialive_node}
*/
export class CcNode extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_medialive_node";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNode resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNode to import
    * @param importFromId The id of the existing CcNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNode to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_node", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node awscc_medialive_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNodeProps
    */
    public constructor(scope: Construct, id: string, config: CcNodeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_medialive_node',
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
        this._clusterId = config.clusterId;
        this._name = config.name;
        this._nodeInterfaceMappings.internalValue = config.nodeInterfaceMappings;
        this._role = config.role;
        this._sdiSourceMappings.internalValue = config.sdiSourceMappings;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_placement_groups - computed: true, optional: false, required: false
    public get channelPlacementGroups() {
        return this.getListAttribute('channel_placement_groups');
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
        return this._clusterId;
    }

    // connection_state - computed: true, optional: false, required: false
    public get connectionState() {
        return this.getStringAttribute('connection_state');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: true, optional: false, required: false
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
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

    // node_id - computed: true, optional: false, required: false
    public get nodeId() {
        return this.getStringAttribute('node_id');
    }

    // node_interface_mappings - computed: true, optional: true, required: false
    private _nodeInterfaceMappings = new CcNode.NodeInterfaceMappingPropertyList(this, "node_interface_mappings", false);
    public get nodeInterfaceMappings() {
        return this._nodeInterfaceMappings;
    }
    public putNodeInterfaceMappings(value: CcNode.NodeInterfaceMappingProperty[] | cdktn.IResolvable) {
        this._nodeInterfaceMappings.internalValue = value;
    }
    public resetNodeInterfaceMappings() {
        this._nodeInterfaceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeInterfaceMappingsInput() {
        return this._nodeInterfaceMappings.internalValue;
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // sdi_source_mappings - computed: true, optional: true, required: false
    private _sdiSourceMappings = new CcNode.SdiSourceMappingPropertyList(this, "sdi_source_mappings", false);
    public get sdiSourceMappings() {
        return this._sdiSourceMappings;
    }
    public putSdiSourceMappings(value: CcNode.SdiSourceMappingProperty[] | cdktn.IResolvable) {
        this._sdiSourceMappings.internalValue = value;
    }
    public resetSdiSourceMappings() {
        this._sdiSourceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdiSourceMappingsInput() {
        return this._sdiSourceMappings.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNode.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNode.TagProperty[] | cdktn.IResolvable) {
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
            cluster_id: cdktn.stringToTerraform(this._clusterId),
            name: cdktn.stringToTerraform(this._name),
            node_interface_mappings: cdktn.listMapper(ccNodeNodeInterfaceMappingPropertyToTerraform, false)(this._nodeInterfaceMappings.internalValue),
            role: cdktn.stringToTerraform(this._role),
            sdi_source_mappings: cdktn.listMapper(ccNodeSdiSourceMappingPropertyToTerraform, false)(this._sdiSourceMappings.internalValue),
            tags: cdktn.listMapper(ccNodeTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_id: {
                value: cdktn.stringToHclTerraform(this._clusterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_interface_mappings: {
                value: cdktn.listMapperHcl(ccNodeNodeInterfaceMappingPropertyToHclTerraform, false)(this._nodeInterfaceMappings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNode.NodeInterfaceMappingPropertyList",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sdi_source_mappings: {
                value: cdktn.listMapperHcl(ccNodeSdiSourceMappingPropertyToHclTerraform, false)(this._sdiSourceMappings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNode.SdiSourceMappingPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNodeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNode.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNodeNodeInterfaceMappingPropertyToTerraform(struct?: CcNode.NodeInterfaceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        logical_interface_name: cdktn.stringToTerraform(struct!.logicalInterfaceName),
        network_interface_mode: cdktn.stringToTerraform(struct!.networkInterfaceMode),
        physical_interface_name: cdktn.stringToTerraform(struct!.physicalInterfaceName),
    }
}


export function ccNodeNodeInterfaceMappingPropertyToHclTerraform(struct?: CcNode.NodeInterfaceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        logical_interface_name: {
            value: cdktn.stringToHclTerraform(struct!.logicalInterfaceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_interface_mode: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        physical_interface_name: {
            value: cdktn.stringToHclTerraform(struct!.physicalInterfaceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNodeSdiSourceMappingPropertyToTerraform(struct?: CcNode.SdiSourceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        card_number: cdktn.numberToTerraform(struct!.cardNumber),
        channel_number: cdktn.numberToTerraform(struct!.channelNumber),
        sdi_source: cdktn.stringToTerraform(struct!.sdiSource),
    }
}


export function ccNodeSdiSourceMappingPropertyToHclTerraform(struct?: CcNode.SdiSourceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        card_number: {
            value: cdktn.numberToHclTerraform(struct!.cardNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        channel_number: {
            value: cdktn.numberToHclTerraform(struct!.channelNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sdi_source: {
            value: cdktn.stringToHclTerraform(struct!.sdiSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNodeTagPropertyToTerraform(struct?: CcNode.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNodeTagPropertyToHclTerraform(struct?: CcNode.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNode {
export interface NodeInterfaceMappingProperty {
    /**
    * The logical name for this interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#logical_interface_name CcNode#logical_interface_name}
    */
    readonly logicalInterfaceName?: string;
    /**
    * The network interface mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#network_interface_mode CcNode#network_interface_mode}
    */
    readonly networkInterfaceMode?: string;
    /**
    * The physical interface name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#physical_interface_name CcNode#physical_interface_name}
    */
    readonly physicalInterfaceName?: string;
}
export class NodeInterfaceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NodeInterfaceMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logicalInterfaceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logicalInterfaceName = this._logicalInterfaceName;
        }
        if (this._networkInterfaceMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceMode = this._networkInterfaceMode;
        }
        if (this._physicalInterfaceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.physicalInterfaceName = this._physicalInterfaceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeInterfaceMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logicalInterfaceName = undefined;
            this._networkInterfaceMode = undefined;
            this._physicalInterfaceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logicalInterfaceName = value.logicalInterfaceName;
            this._networkInterfaceMode = value.networkInterfaceMode;
            this._physicalInterfaceName = value.physicalInterfaceName;
        }
    }

    // logical_interface_name - computed: true, optional: true, required: false
    private _logicalInterfaceName?: string; 
    public get logicalInterfaceName() {
        return this.getStringAttribute('logical_interface_name');
    }
    public set logicalInterfaceName(value: string) {
        this._logicalInterfaceName = value;
    }
    public resetLogicalInterfaceName() {
        this._logicalInterfaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalInterfaceNameInput() {
        return this._logicalInterfaceName;
    }

    // network_interface_mode - computed: true, optional: true, required: false
    private _networkInterfaceMode?: string; 
    public get networkInterfaceMode() {
        return this.getStringAttribute('network_interface_mode');
    }
    public set networkInterfaceMode(value: string) {
        this._networkInterfaceMode = value;
    }
    public resetNetworkInterfaceMode() {
        this._networkInterfaceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceModeInput() {
        return this._networkInterfaceMode;
    }

    // physical_interface_name - computed: true, optional: true, required: false
    private _physicalInterfaceName?: string; 
    public get physicalInterfaceName() {
        return this.getStringAttribute('physical_interface_name');
    }
    public set physicalInterfaceName(value: string) {
        this._physicalInterfaceName = value;
    }
    public resetPhysicalInterfaceName() {
        this._physicalInterfaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get physicalInterfaceNameInput() {
        return this._physicalInterfaceName;
    }
}

export class NodeInterfaceMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : NodeInterfaceMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): NodeInterfaceMappingPropertyOutputReference {
        return new NodeInterfaceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SdiSourceMappingProperty {
    /**
    * The card number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#card_number CcNode#card_number}
    */
    readonly cardNumber?: number;
    /**
    * The channel number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#channel_number CcNode#channel_number}
    */
    readonly channelNumber?: number;
    /**
    * The SDI source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#sdi_source CcNode#sdi_source}
    */
    readonly sdiSource?: string;
}
export class SdiSourceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SdiSourceMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cardNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.cardNumber = this._cardNumber;
        }
        if (this._channelNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelNumber = this._channelNumber;
        }
        if (this._sdiSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sdiSource = this._sdiSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SdiSourceMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cardNumber = undefined;
            this._channelNumber = undefined;
            this._sdiSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cardNumber = value.cardNumber;
            this._channelNumber = value.channelNumber;
            this._sdiSource = value.sdiSource;
        }
    }

    // card_number - computed: true, optional: true, required: false
    private _cardNumber?: number; 
    public get cardNumber() {
        return this.getNumberAttribute('card_number');
    }
    public set cardNumber(value: number) {
        this._cardNumber = value;
    }
    public resetCardNumber() {
        this._cardNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cardNumberInput() {
        return this._cardNumber;
    }

    // channel_number - computed: true, optional: true, required: false
    private _channelNumber?: number; 
    public get channelNumber() {
        return this.getNumberAttribute('channel_number');
    }
    public set channelNumber(value: number) {
        this._channelNumber = value;
    }
    public resetChannelNumber() {
        this._channelNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNumberInput() {
        return this._channelNumber;
    }

    // sdi_source - computed: true, optional: true, required: false
    private _sdiSource?: string; 
    public get sdiSource() {
        return this.getStringAttribute('sdi_source');
    }
    public set sdiSource(value: string) {
        this._sdiSource = value;
    }
    public resetSdiSource() {
        this._sdiSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdiSourceInput() {
        return this._sdiSource;
    }
}

export class SdiSourceMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : SdiSourceMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): SdiSourceMappingPropertyOutputReference {
        return new SdiSourceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#key CcNode#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_node#value CcNode#value}
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
