// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayMeteringPolicyEntryProps extends cdktn.TerraformMetaArguments {
    /**
    * The list of IP addresses of the instances receiving traffic from the transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block CcTransitGatewayMeteringPolicyEntry#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * The list of ports on destination instances receiving traffic from the transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range CcTransitGatewayMeteringPolicyEntry#destination_port_range}
    */
    readonly destinationPortRange?: string;
    /**
    * The ID of the source attachment through which traffic leaves a transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id CcTransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}
    */
    readonly destinationTransitGatewayAttachmentId?: string;
    /**
    * The type of the attachment through which traffic leaves a transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type CcTransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}
    */
    readonly destinationTransitGatewayAttachmentType?: string;
    /**
    * The resource owner information responsible for paying default billable charges for the traffic flow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account CcTransitGatewayMeteringPolicyEntry#metered_account}
    */
    readonly meteredAccount: string;
    /**
    * The rule number of the metering policy entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number CcTransitGatewayMeteringPolicyEntry#policy_rule_number}
    */
    readonly policyRuleNumber: number;
    /**
    * The protocol of the traffic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol CcTransitGatewayMeteringPolicyEntry#protocol}
    */
    readonly protocol?: string;
    /**
    * The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block CcTransitGatewayMeteringPolicyEntry#source_cidr_block}
    */
    readonly sourceCidrBlock?: string;
    /**
    * The list of ports on source instances sending traffic to the transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range CcTransitGatewayMeteringPolicyEntry#source_port_range}
    */
    readonly sourcePortRange?: string;
    /**
    * The ID of the source attachment through which traffic enters a transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id CcTransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}
    */
    readonly sourceTransitGatewayAttachmentId?: string;
    /**
    * The type of the attachment through which traffic enters a  transit gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type CcTransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}
    */
    readonly sourceTransitGatewayAttachmentType?: string;
    /**
    * The ID of the transit gateway metering policy for which the entry is being created
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id CcTransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}
    */
    readonly transitGatewayMeteringPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry}
*/
export class CcTransitGatewayMeteringPolicyEntry extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_metering_policy_entry";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayMeteringPolicyEntry to import
    * @param importFromId The id of the existing CcTransitGatewayMeteringPolicyEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayMeteringPolicyEntry to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_metering_policy_entry", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayMeteringPolicyEntryProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayMeteringPolicyEntryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_metering_policy_entry',
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
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._destinationPortRange = config.destinationPortRange;
        this._destinationTransitGatewayAttachmentId = config.destinationTransitGatewayAttachmentId;
        this._destinationTransitGatewayAttachmentType = config.destinationTransitGatewayAttachmentType;
        this._meteredAccount = config.meteredAccount;
        this._policyRuleNumber = config.policyRuleNumber;
        this._protocol = config.protocol;
        this._sourceCidrBlock = config.sourceCidrBlock;
        this._sourcePortRange = config.sourcePortRange;
        this._sourceTransitGatewayAttachmentId = config.sourceTransitGatewayAttachmentId;
        this._sourceTransitGatewayAttachmentType = config.sourceTransitGatewayAttachmentType;
        this._transitGatewayMeteringPolicyId = config.transitGatewayMeteringPolicyId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // destination_transit_gateway_attachment_id - computed: true, optional: true, required: false
    private _destinationTransitGatewayAttachmentId?: string; 
    public get destinationTransitGatewayAttachmentId() {
        return this.getStringAttribute('destination_transit_gateway_attachment_id');
    }
    public set destinationTransitGatewayAttachmentId(value: string) {
        this._destinationTransitGatewayAttachmentId = value;
    }
    public resetDestinationTransitGatewayAttachmentId() {
        this._destinationTransitGatewayAttachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTransitGatewayAttachmentIdInput() {
        return this._destinationTransitGatewayAttachmentId;
    }

    // destination_transit_gateway_attachment_type - computed: true, optional: true, required: false
    private _destinationTransitGatewayAttachmentType?: string; 
    public get destinationTransitGatewayAttachmentType() {
        return this.getStringAttribute('destination_transit_gateway_attachment_type');
    }
    public set destinationTransitGatewayAttachmentType(value: string) {
        this._destinationTransitGatewayAttachmentType = value;
    }
    public resetDestinationTransitGatewayAttachmentType() {
        this._destinationTransitGatewayAttachmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTransitGatewayAttachmentTypeInput() {
        return this._destinationTransitGatewayAttachmentType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metered_account - computed: false, optional: false, required: true
    private _meteredAccount?: string; 
    public get meteredAccount() {
        return this.getStringAttribute('metered_account');
    }
    public set meteredAccount(value: string) {
        this._meteredAccount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meteredAccountInput() {
        return this._meteredAccount;
    }

    // policy_rule_number - computed: false, optional: false, required: true
    private _policyRuleNumber?: number; 
    public get policyRuleNumber() {
        return this.getNumberAttribute('policy_rule_number');
    }
    public set policyRuleNumber(value: number) {
        this._policyRuleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRuleNumberInput() {
        return this._policyRuleNumber;
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

    // source_transit_gateway_attachment_id - computed: true, optional: true, required: false
    private _sourceTransitGatewayAttachmentId?: string; 
    public get sourceTransitGatewayAttachmentId() {
        return this.getStringAttribute('source_transit_gateway_attachment_id');
    }
    public set sourceTransitGatewayAttachmentId(value: string) {
        this._sourceTransitGatewayAttachmentId = value;
    }
    public resetSourceTransitGatewayAttachmentId() {
        this._sourceTransitGatewayAttachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTransitGatewayAttachmentIdInput() {
        return this._sourceTransitGatewayAttachmentId;
    }

    // source_transit_gateway_attachment_type - computed: true, optional: true, required: false
    private _sourceTransitGatewayAttachmentType?: string; 
    public get sourceTransitGatewayAttachmentType() {
        return this.getStringAttribute('source_transit_gateway_attachment_type');
    }
    public set sourceTransitGatewayAttachmentType(value: string) {
        this._sourceTransitGatewayAttachmentType = value;
    }
    public resetSourceTransitGatewayAttachmentType() {
        this._sourceTransitGatewayAttachmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTransitGatewayAttachmentTypeInput() {
        return this._sourceTransitGatewayAttachmentType;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // transit_gateway_metering_policy_id - computed: false, optional: false, required: true
    private _transitGatewayMeteringPolicyId?: string; 
    public get transitGatewayMeteringPolicyId() {
        return this.getStringAttribute('transit_gateway_metering_policy_id');
    }
    public set transitGatewayMeteringPolicyId(value: string) {
        this._transitGatewayMeteringPolicyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayMeteringPolicyIdInput() {
        return this._transitGatewayMeteringPolicyId;
    }

    // update_effective_at - computed: true, optional: false, required: false
    public get updateEffectiveAt() {
        return this.getStringAttribute('update_effective_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            destination_port_range: cdktn.stringToTerraform(this._destinationPortRange),
            destination_transit_gateway_attachment_id: cdktn.stringToTerraform(this._destinationTransitGatewayAttachmentId),
            destination_transit_gateway_attachment_type: cdktn.stringToTerraform(this._destinationTransitGatewayAttachmentType),
            metered_account: cdktn.stringToTerraform(this._meteredAccount),
            policy_rule_number: cdktn.numberToTerraform(this._policyRuleNumber),
            protocol: cdktn.stringToTerraform(this._protocol),
            source_cidr_block: cdktn.stringToTerraform(this._sourceCidrBlock),
            source_port_range: cdktn.stringToTerraform(this._sourcePortRange),
            source_transit_gateway_attachment_id: cdktn.stringToTerraform(this._sourceTransitGatewayAttachmentId),
            source_transit_gateway_attachment_type: cdktn.stringToTerraform(this._sourceTransitGatewayAttachmentType),
            transit_gateway_metering_policy_id: cdktn.stringToTerraform(this._transitGatewayMeteringPolicyId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination_cidr_block: {
                value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_port_range: {
                value: cdktn.stringToHclTerraform(this._destinationPortRange),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_transit_gateway_attachment_id: {
                value: cdktn.stringToHclTerraform(this._destinationTransitGatewayAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_transit_gateway_attachment_type: {
                value: cdktn.stringToHclTerraform(this._destinationTransitGatewayAttachmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metered_account: {
                value: cdktn.stringToHclTerraform(this._meteredAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_rule_number: {
                value: cdktn.numberToHclTerraform(this._policyRuleNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_cidr_block: {
                value: cdktn.stringToHclTerraform(this._sourceCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_port_range: {
                value: cdktn.stringToHclTerraform(this._sourcePortRange),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_transit_gateway_attachment_id: {
                value: cdktn.stringToHclTerraform(this._sourceTransitGatewayAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_transit_gateway_attachment_type: {
                value: cdktn.stringToHclTerraform(this._sourceTransitGatewayAttachmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_metering_policy_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayMeteringPolicyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransitGatewayMeteringPolicyEntry {
}
