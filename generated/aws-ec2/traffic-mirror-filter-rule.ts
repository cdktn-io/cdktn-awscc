// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrafficMirrorFilterRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the Traffic Mirror Filter rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#description CcTrafficMirrorFilterRule#description}
    */
    readonly description?: string;
    /**
    * The destination CIDR block to assign to the Traffic Mirror rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#destination_cidr_block CcTrafficMirrorFilterRule#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * The destination port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#destination_port_range CcTrafficMirrorFilterRule#destination_port_range}
    */
    readonly destinationPortRange?: CcTrafficMirrorFilterRule.TrafficMirrorPortRangeProperty;
    /**
    * The number of protocol, for example 17 (UDP), to assign to the Traffic Mirror rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#protocol CcTrafficMirrorFilterRule#protocol}
    */
    readonly protocol?: number;
    /**
    * The action to take on the filtered traffic (accept/reject).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#rule_action CcTrafficMirrorFilterRule#rule_action}
    */
    readonly ruleAction: string;
    /**
    * The number of the Traffic Mirror rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#rule_number CcTrafficMirrorFilterRule#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * The source CIDR block to assign to the Traffic Mirror Filter rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#source_cidr_block CcTrafficMirrorFilterRule#source_cidr_block}
    */
    readonly sourceCidrBlock: string;
    /**
    * The source port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#source_port_range CcTrafficMirrorFilterRule#source_port_range}
    */
    readonly sourcePortRange?: CcTrafficMirrorFilterRule.SourcePortRangeProperty;
    /**
    * Any tags assigned to the Traffic Mirror Filter rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#tags CcTrafficMirrorFilterRule#tags}
    */
    readonly tags?: CcTrafficMirrorFilterRule.TagProperty[] | cdktn.IResolvable;
    /**
    * The direction of traffic (ingress/egress).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#traffic_direction CcTrafficMirrorFilterRule#traffic_direction}
    */
    readonly trafficDirection: string;
    /**
    * The ID of the filter that this rule is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#traffic_mirror_filter_id CcTrafficMirrorFilterRule#traffic_mirror_filter_id}
    */
    readonly trafficMirrorFilterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule awscc_ec2_traffic_mirror_filter_rule}
*/
export class CcTrafficMirrorFilterRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_traffic_mirror_filter_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrafficMirrorFilterRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrafficMirrorFilterRule to import
    * @param importFromId The id of the existing CcTrafficMirrorFilterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrafficMirrorFilterRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_traffic_mirror_filter_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule awscc_ec2_traffic_mirror_filter_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrafficMirrorFilterRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcTrafficMirrorFilterRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_traffic_mirror_filter_rule',
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
        this._description = config.description;
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._destinationPortRange.internalValue = config.destinationPortRange;
        this._protocol = config.protocol;
        this._ruleAction = config.ruleAction;
        this._ruleNumber = config.ruleNumber;
        this._sourceCidrBlock = config.sourceCidrBlock;
        this._sourcePortRange.internalValue = config.sourcePortRange;
        this._tags.internalValue = config.tags;
        this._trafficDirection = config.trafficDirection;
        this._trafficMirrorFilterId = config.trafficMirrorFilterId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
        this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }

    // destination_port_range - computed: true, optional: true, required: false
    private _destinationPortRange = new CcTrafficMirrorFilterRule.TrafficMirrorPortRangePropertyOutputReference(this, "destination_port_range");
    public get destinationPortRange() {
        return this._destinationPortRange;
    }
    public putDestinationPortRange(value: CcTrafficMirrorFilterRule.TrafficMirrorPortRangeProperty) {
        this._destinationPortRange.internalValue = value;
    }
    public resetDestinationPortRange() {
        this._destinationPortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortRangeInput() {
        return this._destinationPortRange.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: number; 
    public get protocol() {
        return this.getNumberAttribute('protocol');
    }
    public set protocol(value: number) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // rule_action - computed: false, optional: false, required: true
    private _ruleAction?: string; 
    public get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    public set ruleAction(value: string) {
        this._ruleAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleActionInput() {
        return this._ruleAction;
    }

    // rule_number - computed: false, optional: false, required: true
    private _ruleNumber?: number; 
    public get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
    public set ruleNumber(value: number) {
        this._ruleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNumberInput() {
        return this._ruleNumber;
    }

    // source_cidr_block - computed: false, optional: false, required: true
    private _sourceCidrBlock?: string; 
    public get sourceCidrBlock() {
        return this.getStringAttribute('source_cidr_block');
    }
    public set sourceCidrBlock(value: string) {
        this._sourceCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCidrBlockInput() {
        return this._sourceCidrBlock;
    }

    // source_port_range - computed: true, optional: true, required: false
    private _sourcePortRange = new CcTrafficMirrorFilterRule.SourcePortRangePropertyOutputReference(this, "source_port_range");
    public get sourcePortRange() {
        return this._sourcePortRange;
    }
    public putSourcePortRange(value: CcTrafficMirrorFilterRule.SourcePortRangeProperty) {
        this._sourcePortRange.internalValue = value;
    }
    public resetSourcePortRange() {
        this._sourcePortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortRangeInput() {
        return this._sourcePortRange.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTrafficMirrorFilterRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTrafficMirrorFilterRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // traffic_direction - computed: false, optional: false, required: true
    private _trafficDirection?: string; 
    public get trafficDirection() {
        return this.getStringAttribute('traffic_direction');
    }
    public set trafficDirection(value: string) {
        this._trafficDirection = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficDirectionInput() {
        return this._trafficDirection;
    }

    // traffic_mirror_filter_id - computed: false, optional: false, required: true
    private _trafficMirrorFilterId?: string; 
    public get trafficMirrorFilterId() {
        return this.getStringAttribute('traffic_mirror_filter_id');
    }
    public set trafficMirrorFilterId(value: string) {
        this._trafficMirrorFilterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficMirrorFilterIdInput() {
        return this._trafficMirrorFilterId;
    }

    // traffic_mirror_filter_rule_id - computed: true, optional: false, required: false
    public get trafficMirrorFilterRuleId() {
        return this.getStringAttribute('traffic_mirror_filter_rule_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            destination_port_range: ccTrafficMirrorFilterRuleTrafficMirrorPortRangePropertyToTerraform(this._destinationPortRange.internalValue),
            protocol: cdktn.numberToTerraform(this._protocol),
            rule_action: cdktn.stringToTerraform(this._ruleAction),
            rule_number: cdktn.numberToTerraform(this._ruleNumber),
            source_cidr_block: cdktn.stringToTerraform(this._sourceCidrBlock),
            source_port_range: ccTrafficMirrorFilterRuleSourcePortRangePropertyToTerraform(this._sourcePortRange.internalValue),
            tags: cdktn.listMapper(ccTrafficMirrorFilterRuleTagPropertyToTerraform, false)(this._tags.internalValue),
            traffic_direction: cdktn.stringToTerraform(this._trafficDirection),
            traffic_mirror_filter_id: cdktn.stringToTerraform(this._trafficMirrorFilterId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_cidr_block: {
                value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_port_range: {
                value: ccTrafficMirrorFilterRuleTrafficMirrorPortRangePropertyToHclTerraform(this._destinationPortRange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrafficMirrorFilterRule.TrafficMirrorPortRangeProperty",
            },
            protocol: {
                value: cdktn.numberToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rule_action: {
                value: cdktn.stringToHclTerraform(this._ruleAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_number: {
                value: cdktn.numberToHclTerraform(this._ruleNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            source_cidr_block: {
                value: cdktn.stringToHclTerraform(this._sourceCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_port_range: {
                value: ccTrafficMirrorFilterRuleSourcePortRangePropertyToHclTerraform(this._sourcePortRange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrafficMirrorFilterRule.SourcePortRangeProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTrafficMirrorFilterRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrafficMirrorFilterRule.TagPropertyList",
            },
            traffic_direction: {
                value: cdktn.stringToHclTerraform(this._trafficDirection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            traffic_mirror_filter_id: {
                value: cdktn.stringToHclTerraform(this._trafficMirrorFilterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrafficMirrorFilterRuleTrafficMirrorPortRangePropertyToTerraform(struct?: CcTrafficMirrorFilterRule.TrafficMirrorPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccTrafficMirrorFilterRuleTrafficMirrorPortRangePropertyToHclTerraform(struct?: CcTrafficMirrorFilterRule.TrafficMirrorPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccTrafficMirrorFilterRuleSourcePortRangePropertyToTerraform(struct?: CcTrafficMirrorFilterRule.SourcePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccTrafficMirrorFilterRuleSourcePortRangePropertyToHclTerraform(struct?: CcTrafficMirrorFilterRule.SourcePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccTrafficMirrorFilterRuleTagPropertyToTerraform(struct?: CcTrafficMirrorFilterRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTrafficMirrorFilterRuleTagPropertyToHclTerraform(struct?: CcTrafficMirrorFilterRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTrafficMirrorFilterRule {
export interface TrafficMirrorPortRangeProperty {
    /**
    * The first port in the Traffic Mirror port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#from_port CcTrafficMirrorFilterRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * The last port in the Traffic Mirror port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#to_port CcTrafficMirrorFilterRule#to_port}
    */
    readonly toPort?: number;
}
export class TrafficMirrorPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrafficMirrorPortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficMirrorPortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
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
export interface SourcePortRangeProperty {
    /**
    * The first port in the Traffic Mirror port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#from_port CcTrafficMirrorFilterRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * The last port in the Traffic Mirror port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#to_port CcTrafficMirrorFilterRule#to_port}
    */
    readonly toPort?: number;
}
export class SourcePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourcePortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcePortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#key CcTrafficMirrorFilterRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_traffic_mirror_filter_rule#value CcTrafficMirrorFilterRule#value}
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
