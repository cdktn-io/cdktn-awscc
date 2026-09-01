// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayPolicyTableEntryProps extends cdktn.TerraformMetaArguments {
    /**
    * The policy rule associated with the entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule CcTransitGatewayPolicyTableEntry#policy_rule}
    */
    readonly policyRule: CcTransitGatewayPolicyTableEntry.TransitGatewayPolicyRuleProperty;
    /**
    * The rule number for the policy table entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule_number CcTransitGatewayPolicyTableEntry#policy_rule_number}
    */
    readonly policyRuleNumber: string;
    /**
    * The ID of the target route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#target_route_table_id CcTransitGatewayPolicyTableEntry#target_route_table_id}
    */
    readonly targetRouteTableId: string;
    /**
    * The ID of the transit gateway policy table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#transit_gateway_policy_table_id CcTransitGatewayPolicyTableEntry#transit_gateway_policy_table_id}
    */
    readonly transitGatewayPolicyTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry awscc_ec2_transit_gateway_policy_table_entry}
*/
export class CcTransitGatewayPolicyTableEntry extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_policy_table_entry";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayPolicyTableEntry to import
    * @param importFromId The id of the existing CcTransitGatewayPolicyTableEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayPolicyTableEntry to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_policy_table_entry", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry awscc_ec2_transit_gateway_policy_table_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayPolicyTableEntryProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayPolicyTableEntryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_policy_table_entry',
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
        this._policyRule.internalValue = config.policyRule;
        this._policyRuleNumber = config.policyRuleNumber;
        this._targetRouteTableId = config.targetRouteTableId;
        this._transitGatewayPolicyTableId = config.transitGatewayPolicyTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_rule - computed: false, optional: false, required: true
    private _policyRule = new CcTransitGatewayPolicyTableEntry.TransitGatewayPolicyRulePropertyOutputReference(this, "policy_rule");
    public get policyRule() {
        return this._policyRule;
    }
    public putPolicyRule(value: CcTransitGatewayPolicyTableEntry.TransitGatewayPolicyRuleProperty) {
        this._policyRule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRuleInput() {
        return this._policyRule.internalValue;
    }

    // policy_rule_number - computed: false, optional: false, required: true
    private _policyRuleNumber?: string; 
    public get policyRuleNumber() {
        return this.getStringAttribute('policy_rule_number');
    }
    public set policyRuleNumber(value: string) {
        this._policyRuleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRuleNumberInput() {
        return this._policyRuleNumber;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // target_route_table_id - computed: false, optional: false, required: true
    private _targetRouteTableId?: string; 
    public get targetRouteTableId() {
        return this.getStringAttribute('target_route_table_id');
    }
    public set targetRouteTableId(value: string) {
        this._targetRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRouteTableIdInput() {
        return this._targetRouteTableId;
    }

    // transit_gateway_policy_table_id - computed: false, optional: false, required: true
    private _transitGatewayPolicyTableId?: string; 
    public get transitGatewayPolicyTableId() {
        return this.getStringAttribute('transit_gateway_policy_table_id');
    }
    public set transitGatewayPolicyTableId(value: string) {
        this._transitGatewayPolicyTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayPolicyTableIdInput() {
        return this._transitGatewayPolicyTableId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy_rule: ccTransitGatewayPolicyTableEntryTransitGatewayPolicyRulePropertyToTerraform(this._policyRule.internalValue),
            policy_rule_number: cdktn.stringToTerraform(this._policyRuleNumber),
            target_route_table_id: cdktn.stringToTerraform(this._targetRouteTableId),
            transit_gateway_policy_table_id: cdktn.stringToTerraform(this._transitGatewayPolicyTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy_rule: {
                value: ccTransitGatewayPolicyTableEntryTransitGatewayPolicyRulePropertyToHclTerraform(this._policyRule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransitGatewayPolicyTableEntry.TransitGatewayPolicyRuleProperty",
            },
            policy_rule_number: {
                value: cdktn.stringToHclTerraform(this._policyRuleNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_route_table_id: {
                value: cdktn.stringToHclTerraform(this._targetRouteTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_policy_table_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayPolicyTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransitGatewayPolicyTableEntryTransitGatewayPolicyRulePropertyToTerraform(struct?: CcTransitGatewayPolicyTableEntry.TransitGatewayPolicyRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_cidr_block: cdktn.stringToTerraform(struct!.destinationCidrBlock),
        destination_port_range: cdktn.stringToTerraform(struct!.destinationPortRange),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        source_cidr_block: cdktn.stringToTerraform(struct!.sourceCidrBlock),
        source_port_range: cdktn.stringToTerraform(struct!.sourcePortRange),
    }
}


export function ccTransitGatewayPolicyTableEntryTransitGatewayPolicyRulePropertyToHclTerraform(struct?: CcTransitGatewayPolicyTableEntry.TransitGatewayPolicyRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.destinationCidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_port_range: {
            value: cdktn.stringToHclTerraform(struct!.destinationPortRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.sourceCidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port_range: {
            value: cdktn.stringToHclTerraform(struct!.sourcePortRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTransitGatewayPolicyTableEntry {
export interface TransitGatewayPolicyRuleProperty {
    /**
    * The destination CIDR block for the transit gateway policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_cidr_block CcTransitGatewayPolicyTableEntry#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * The destination port range for the transit gateway policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_port_range CcTransitGatewayPolicyTableEntry#destination_port_range}
    */
    readonly destinationPortRange?: string;
    /**
    * The protocol for the transit gateway policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#protocol CcTransitGatewayPolicyTableEntry#protocol}
    */
    readonly protocol?: string;
    /**
    * The source CIDR block for the transit gateway policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_cidr_block CcTransitGatewayPolicyTableEntry#source_cidr_block}
    */
    readonly sourceCidrBlock?: string;
    /**
    * The source port range for the transit gateway policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_port_range CcTransitGatewayPolicyTableEntry#source_port_range}
    */
    readonly sourcePortRange?: string;
}
export class TransitGatewayPolicyRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransitGatewayPolicyRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationCidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationCidrBlock = this._destinationCidrBlock;
        }
        if (this._destinationPortRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPortRange = this._destinationPortRange;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._sourceCidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceCidrBlock = this._sourceCidrBlock;
        }
        if (this._sourcePortRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePortRange = this._sourcePortRange;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitGatewayPolicyRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationCidrBlock = undefined;
            this._destinationPortRange = undefined;
            this._protocol = undefined;
            this._sourceCidrBlock = undefined;
            this._sourcePortRange = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationCidrBlock = value.destinationCidrBlock;
            this._destinationPortRange = value.destinationPortRange;
            this._protocol = value.protocol;
            this._sourceCidrBlock = value.sourceCidrBlock;
            this._sourcePortRange = value.sourcePortRange;
        }
    }

    // destination_cidr_block - computed: true, optional: true, required: false
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
        this._destinationCidrBlock = value;
    }
    public resetDestinationCidrBlock() {
        this._destinationCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }

    // destination_port_range - computed: true, optional: true, required: false
    private _destinationPortRange?: string; 
    public get destinationPortRange() {
        return this.getStringAttribute('destination_port_range');
    }
    public set destinationPortRange(value: string) {
        this._destinationPortRange = value;
    }
    public resetDestinationPortRange() {
        this._destinationPortRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortRangeInput() {
        return this._destinationPortRange;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // source_cidr_block - computed: true, optional: true, required: false
    private _sourceCidrBlock?: string; 
    public get sourceCidrBlock() {
        return this.getStringAttribute('source_cidr_block');
    }
    public set sourceCidrBlock(value: string) {
        this._sourceCidrBlock = value;
    }
    public resetSourceCidrBlock() {
        this._sourceCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCidrBlockInput() {
        return this._sourceCidrBlock;
    }

    // source_port_range - computed: true, optional: true, required: false
    private _sourcePortRange?: string; 
    public get sourcePortRange() {
        return this.getStringAttribute('source_port_range');
    }
    public set sourcePortRange(value: string) {
        this._sourcePortRange = value;
    }
    public resetSourcePortRange() {
        this._sourcePortRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortRangeInput() {
        return this._sourcePortRange;
    }
}
}
