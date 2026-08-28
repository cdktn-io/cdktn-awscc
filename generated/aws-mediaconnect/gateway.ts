// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway#egress_cidr_blocks CcGateway#egress_cidr_blocks}
    */
    readonly egressCidrBlocks: string[];
    /**
    * The name of the gateway. This name can not be modified after the gateway is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway#name CcGateway#name}
    */
    readonly name: string;
    /**
    * The list of networks in the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway#networks CcGateway#networks}
    */
    readonly networks: CcGateway.GatewayNetworkProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway awscc_mediaconnect_gateway}
*/
export class CcGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGateway to import
    * @param importFromId The id of the existing CcGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway awscc_mediaconnect_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_gateway',
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
        this._egressCidrBlocks = config.egressCidrBlocks;
        this._name = config.name;
        this._networks.internalValue = config.networks;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // egress_cidr_blocks - computed: false, optional: false, required: true
    private _egressCidrBlocks?: string[]; 
    public get egressCidrBlocks() {
        return this.getListAttribute('egress_cidr_blocks');
    }
    public set egressCidrBlocks(value: string[]) {
        this._egressCidrBlocks = value;
    }
    // Temporarily expose input value. Use with caution.
    public get egressCidrBlocksInput() {
        return this._egressCidrBlocks;
    }

    // gateway_arn - computed: true, optional: false, required: false
    public get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
    }

    // gateway_state - computed: true, optional: false, required: false
    public get gatewayState() {
        return this.getStringAttribute('gateway_state');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // networks - computed: false, optional: false, required: true
    private _networks = new CcGateway.GatewayNetworkPropertyList(this, "networks", false);
    public get networks() {
        return this._networks;
    }
    public putNetworks(value: CcGateway.GatewayNetworkProperty[] | cdktn.IResolvable) {
        this._networks.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networksInput() {
        return this._networks.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            egress_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._egressCidrBlocks),
            name: cdktn.stringToTerraform(this._name),
            networks: cdktn.listMapper(ccGatewayGatewayNetworkPropertyToTerraform, false)(this._networks.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            egress_cidr_blocks: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._egressCidrBlocks),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            networks: {
                value: cdktn.listMapperHcl(ccGatewayGatewayNetworkPropertyToHclTerraform, false)(this._networks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGateway.GatewayNetworkPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGatewayGatewayNetworkPropertyToTerraform(struct?: CcGateway.GatewayNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccGatewayGatewayNetworkPropertyToHclTerraform(struct?: CcGateway.GatewayNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.cidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGateway {
export interface GatewayNetworkProperty {
    /**
    * A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway#cidr_block CcGateway#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * The name of the network. This name is used to reference the network and must be unique among networks in this gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_gateway#name CcGateway#name}
    */
    readonly name: string;
}
export class GatewayNetworkPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GatewayNetworkProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrBlock = this._cidrBlock;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GatewayNetworkProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrBlock = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrBlock = value.cidrBlock;
            this._name = value.name;
        }
    }

    // cidr_block - computed: false, optional: false, required: true
    private _cidrBlock?: string; 
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
        this._cidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
        return this._cidrBlock;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}

export class GatewayNetworkPropertyList extends cdktn.ComplexList {
    public internalValue? : GatewayNetworkProperty[] | cdktn.IResolvable

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
    public get(index: number): GatewayNetworkPropertyOutputReference {
        return new GatewayNetworkPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
