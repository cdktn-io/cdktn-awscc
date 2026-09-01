// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCEncryptionControlProps extends cdktn.TerraformMetaArguments {
    /**
    * Used to enable or disable EIGW exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#egress_only_internet_gateway_exclusion_input CcVPCEncryptionControl#egress_only_internet_gateway_exclusion_input}
    */
    readonly egressOnlyInternetGatewayExclusionInput?: string;
    /**
    * Used to enable or disable EFS exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#elastic_file_system_exclusion_input CcVPCEncryptionControl#elastic_file_system_exclusion_input}
    */
    readonly elasticFileSystemExclusionInput?: string;
    /**
    * Used to enable or disable IGW exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#internet_gateway_exclusion_input CcVPCEncryptionControl#internet_gateway_exclusion_input}
    */
    readonly internetGatewayExclusionInput?: string;
    /**
    * Used to enable or disable Lambda exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#lambda_exclusion_input CcVPCEncryptionControl#lambda_exclusion_input}
    */
    readonly lambdaExclusionInput?: string;
    /**
    * The VPC encryption control mode, either monitor or enforce.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#mode CcVPCEncryptionControl#mode}
    */
    readonly mode?: string;
    /**
    * Used to enable or disable Nat gateway exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#nat_gateway_exclusion_input CcVPCEncryptionControl#nat_gateway_exclusion_input}
    */
    readonly natGatewayExclusionInput?: string;
    /**
    * The tags to assign to the VPC encryption control.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#tags CcVPCEncryptionControl#tags}
    */
    readonly tags?: CcVPCEncryptionControl.TagProperty[] | cdktn.IResolvable;
    /**
    * Used to enable or disable VGW exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#virtual_private_gateway_exclusion_input CcVPCEncryptionControl#virtual_private_gateway_exclusion_input}
    */
    readonly virtualPrivateGatewayExclusionInput?: string;
    /**
    * The VPC on which this VPC encryption control is applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#vpc_id CcVPCEncryptionControl#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * Used to enable or disable Vpc Lattice exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#vpc_lattice_exclusion_input CcVPCEncryptionControl#vpc_lattice_exclusion_input}
    */
    readonly vpcLatticeExclusionInput?: string;
    /**
    * Used to enable or disable VPC peering exclusion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#vpc_peering_exclusion_input CcVPCEncryptionControl#vpc_peering_exclusion_input}
    */
    readonly vpcPeeringExclusionInput?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control}
*/
export class CcVPCEncryptionControl extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_encryption_control";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCEncryptionControl resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCEncryptionControl to import
    * @param importFromId The id of the existing CcVPCEncryptionControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCEncryptionControl to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_encryption_control", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCEncryptionControlProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcVPCEncryptionControlProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_encryption_control',
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
        this._egressOnlyInternetGatewayExclusionInput = config.egressOnlyInternetGatewayExclusionInput;
        this._elasticFileSystemExclusionInput = config.elasticFileSystemExclusionInput;
        this._internetGatewayExclusionInput = config.internetGatewayExclusionInput;
        this._lambdaExclusionInput = config.lambdaExclusionInput;
        this._mode = config.mode;
        this._natGatewayExclusionInput = config.natGatewayExclusionInput;
        this._tags.internalValue = config.tags;
        this._virtualPrivateGatewayExclusionInput = config.virtualPrivateGatewayExclusionInput;
        this._vpcId = config.vpcId;
        this._vpcLatticeExclusionInput = config.vpcLatticeExclusionInput;
        this._vpcPeeringExclusionInput = config.vpcPeeringExclusionInput;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // egress_only_internet_gateway_exclusion_input - computed: true, optional: true, required: false
    private _egressOnlyInternetGatewayExclusionInput?: string; 
    public get egressOnlyInternetGatewayExclusionInput() {
        return this.getStringAttribute('egress_only_internet_gateway_exclusion_input');
    }
    public set egressOnlyInternetGatewayExclusionInput(value: string) {
        this._egressOnlyInternetGatewayExclusionInput = value;
    }
    public resetEgressOnlyInternetGatewayExclusionInput() {
        this._egressOnlyInternetGatewayExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressOnlyInternetGatewayExclusionInputInput() {
        return this._egressOnlyInternetGatewayExclusionInput;
    }

    // elastic_file_system_exclusion_input - computed: true, optional: true, required: false
    private _elasticFileSystemExclusionInput?: string; 
    public get elasticFileSystemExclusionInput() {
        return this.getStringAttribute('elastic_file_system_exclusion_input');
    }
    public set elasticFileSystemExclusionInput(value: string) {
        this._elasticFileSystemExclusionInput = value;
    }
    public resetElasticFileSystemExclusionInput() {
        this._elasticFileSystemExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticFileSystemExclusionInputInput() {
        return this._elasticFileSystemExclusionInput;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // internet_gateway_exclusion_input - computed: true, optional: true, required: false
    private _internetGatewayExclusionInput?: string; 
    public get internetGatewayExclusionInput() {
        return this.getStringAttribute('internet_gateway_exclusion_input');
    }
    public set internetGatewayExclusionInput(value: string) {
        this._internetGatewayExclusionInput = value;
    }
    public resetInternetGatewayExclusionInput() {
        this._internetGatewayExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetGatewayExclusionInputInput() {
        return this._internetGatewayExclusionInput;
    }

    // lambda_exclusion_input - computed: true, optional: true, required: false
    private _lambdaExclusionInput?: string; 
    public get lambdaExclusionInput() {
        return this.getStringAttribute('lambda_exclusion_input');
    }
    public set lambdaExclusionInput(value: string) {
        this._lambdaExclusionInput = value;
    }
    public resetLambdaExclusionInput() {
        this._lambdaExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaExclusionInputInput() {
        return this._lambdaExclusionInput;
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

    // nat_gateway_exclusion_input - computed: true, optional: true, required: false
    private _natGatewayExclusionInput?: string; 
    public get natGatewayExclusionInput() {
        return this.getStringAttribute('nat_gateway_exclusion_input');
    }
    public set natGatewayExclusionInput(value: string) {
        this._natGatewayExclusionInput = value;
    }
    public resetNatGatewayExclusionInput() {
        this._natGatewayExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewayExclusionInputInput() {
        return this._natGatewayExclusionInput;
    }

    // resource_exclusions - computed: true, optional: false, required: false
    private _resourceExclusions = new CcVPCEncryptionControl.ResourceExclusionsPropertyOutputReference(this, "resource_exclusions");
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVPCEncryptionControl.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVPCEncryptionControl.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // virtual_private_gateway_exclusion_input - computed: true, optional: true, required: false
    private _virtualPrivateGatewayExclusionInput?: string; 
    public get virtualPrivateGatewayExclusionInput() {
        return this.getStringAttribute('virtual_private_gateway_exclusion_input');
    }
    public set virtualPrivateGatewayExclusionInput(value: string) {
        this._virtualPrivateGatewayExclusionInput = value;
    }
    public resetVirtualPrivateGatewayExclusionInput() {
        this._virtualPrivateGatewayExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualPrivateGatewayExclusionInputInput() {
        return this._virtualPrivateGatewayExclusionInput;
    }

    // vpc_encryption_control_id - computed: true, optional: false, required: false
    public get vpcEncryptionControlId() {
        return this.getStringAttribute('vpc_encryption_control_id');
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

    // vpc_lattice_exclusion_input - computed: true, optional: true, required: false
    private _vpcLatticeExclusionInput?: string; 
    public get vpcLatticeExclusionInput() {
        return this.getStringAttribute('vpc_lattice_exclusion_input');
    }
    public set vpcLatticeExclusionInput(value: string) {
        this._vpcLatticeExclusionInput = value;
    }
    public resetVpcLatticeExclusionInput() {
        this._vpcLatticeExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcLatticeExclusionInputInput() {
        return this._vpcLatticeExclusionInput;
    }

    // vpc_peering_exclusion_input - computed: true, optional: true, required: false
    private _vpcPeeringExclusionInput?: string; 
    public get vpcPeeringExclusionInput() {
        return this.getStringAttribute('vpc_peering_exclusion_input');
    }
    public set vpcPeeringExclusionInput(value: string) {
        this._vpcPeeringExclusionInput = value;
    }
    public resetVpcPeeringExclusionInput() {
        this._vpcPeeringExclusionInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringExclusionInputInput() {
        return this._vpcPeeringExclusionInput;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            egress_only_internet_gateway_exclusion_input: cdktn.stringToTerraform(this._egressOnlyInternetGatewayExclusionInput),
            elastic_file_system_exclusion_input: cdktn.stringToTerraform(this._elasticFileSystemExclusionInput),
            internet_gateway_exclusion_input: cdktn.stringToTerraform(this._internetGatewayExclusionInput),
            lambda_exclusion_input: cdktn.stringToTerraform(this._lambdaExclusionInput),
            mode: cdktn.stringToTerraform(this._mode),
            nat_gateway_exclusion_input: cdktn.stringToTerraform(this._natGatewayExclusionInput),
            tags: cdktn.listMapper(ccVPCEncryptionControlTagPropertyToTerraform, false)(this._tags.internalValue),
            virtual_private_gateway_exclusion_input: cdktn.stringToTerraform(this._virtualPrivateGatewayExclusionInput),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
            vpc_lattice_exclusion_input: cdktn.stringToTerraform(this._vpcLatticeExclusionInput),
            vpc_peering_exclusion_input: cdktn.stringToTerraform(this._vpcPeeringExclusionInput),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            egress_only_internet_gateway_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._egressOnlyInternetGatewayExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            elastic_file_system_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._elasticFileSystemExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            internet_gateway_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._internetGatewayExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._lambdaExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mode: {
                value: cdktn.stringToHclTerraform(this._mode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nat_gateway_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._natGatewayExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVPCEncryptionControlTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVPCEncryptionControl.TagPropertyList",
            },
            virtual_private_gateway_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._virtualPrivateGatewayExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_lattice_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._vpcLatticeExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_peering_exclusion_input: {
                value: cdktn.stringToHclTerraform(this._vpcPeeringExclusionInput),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVPCEncryptionControlEgressOnlyInternetGatewayPropertyToTerraform(struct?: CcVPCEncryptionControl.EgressOnlyInternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlEgressOnlyInternetGatewayPropertyToHclTerraform(struct?: CcVPCEncryptionControl.EgressOnlyInternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlElasticFileSystemPropertyToTerraform(struct?: CcVPCEncryptionControl.ElasticFileSystemProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlElasticFileSystemPropertyToHclTerraform(struct?: CcVPCEncryptionControl.ElasticFileSystemProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlInternetGatewayPropertyToTerraform(struct?: CcVPCEncryptionControl.InternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlInternetGatewayPropertyToHclTerraform(struct?: CcVPCEncryptionControl.InternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlLambdaPropertyToTerraform(struct?: CcVPCEncryptionControl.LambdaProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlLambdaPropertyToHclTerraform(struct?: CcVPCEncryptionControl.LambdaProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlNatGatewayPropertyToTerraform(struct?: CcVPCEncryptionControl.NatGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlNatGatewayPropertyToHclTerraform(struct?: CcVPCEncryptionControl.NatGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlVirtualPrivateGatewayPropertyToTerraform(struct?: CcVPCEncryptionControl.VirtualPrivateGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlVirtualPrivateGatewayPropertyToHclTerraform(struct?: CcVPCEncryptionControl.VirtualPrivateGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlVpcLatticePropertyToTerraform(struct?: CcVPCEncryptionControl.VpcLatticeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlVpcLatticePropertyToHclTerraform(struct?: CcVPCEncryptionControl.VpcLatticeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlVpcPeeringPropertyToTerraform(struct?: CcVPCEncryptionControl.VpcPeeringProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlVpcPeeringPropertyToHclTerraform(struct?: CcVPCEncryptionControl.VpcPeeringProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlResourceExclusionsPropertyToTerraform(struct?: CcVPCEncryptionControl.ResourceExclusionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccVPCEncryptionControlResourceExclusionsPropertyToHclTerraform(struct?: CcVPCEncryptionControl.ResourceExclusionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccVPCEncryptionControlTagPropertyToTerraform(struct?: CcVPCEncryptionControl.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPCEncryptionControlTagPropertyToHclTerraform(struct?: CcVPCEncryptionControl.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVPCEncryptionControl {
export interface EgressOnlyInternetGatewayProperty {
}
export class EgressOnlyInternetGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EgressOnlyInternetGatewayProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EgressOnlyInternetGatewayProperty | undefined) {
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
export interface ResourceExclusionsProperty {
}
export class ResourceExclusionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceExclusionsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceExclusionsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // egress_only_internet_gateway - computed: true, optional: false, required: false
    private _egressOnlyInternetGateway = new EgressOnlyInternetGatewayPropertyOutputReference(this, "egress_only_internet_gateway");
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#key CcVPCEncryptionControl#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_encryption_control#value CcVPCEncryptionControl#value}
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
