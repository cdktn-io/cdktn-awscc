// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkInsightsAnalysisProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis#filter_in_arns CcNetworkInsightsAnalysis#filter_in_arns}
    */
    readonly filterInArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis#network_insights_path_id CcNetworkInsightsAnalysis#network_insights_path_id}
    */
    readonly networkInsightsPathId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis#tags CcNetworkInsightsAnalysis#tags}
    */
    readonly tags?: CcNetworkInsightsAnalysis.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis awscc_ec2_network_insights_analysis}
*/
export class CcNetworkInsightsAnalysis extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_network_insights_analysis";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkInsightsAnalysis resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkInsightsAnalysis to import
    * @param importFromId The id of the existing CcNetworkInsightsAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkInsightsAnalysis to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_analysis", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis awscc_ec2_network_insights_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkInsightsAnalysisProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkInsightsAnalysisProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_network_insights_analysis',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._filterInArns = config.filterInArns;
        this._networkInsightsPathId = config.networkInsightsPathId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alternate_path_hints - computed: true, optional: false, required: false
    private _alternatePathHints = new CcNetworkInsightsAnalysis.AlternatePathHintsPropertyList(this, "alternate_path_hints", false);
    public get alternatePathHints() {
        return this._alternatePathHints;
    }

    // explanations - computed: true, optional: false, required: false
    private _explanations = new CcNetworkInsightsAnalysis.ExplanationsPropertyList(this, "explanations", false);
    public get explanations() {
        return this._explanations;
    }

    // filter_in_arns - computed: true, optional: true, required: false
    private _filterInArns?: string[]; 
    public get filterInArns() {
        return this.getListAttribute('filter_in_arns');
    }
    public set filterInArns(value: string[]) {
        this._filterInArns = value;
    }
    public resetFilterInArns() {
        this._filterInArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInArnsInput() {
        return this._filterInArns;
    }

    // forward_path_components - computed: true, optional: false, required: false
    private _forwardPathComponents = new CcNetworkInsightsAnalysis.ForwardPathComponentsPropertyList(this, "forward_path_components", false);
    public get forwardPathComponents() {
        return this._forwardPathComponents;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // network_insights_analysis_arn - computed: true, optional: false, required: false
    public get networkInsightsAnalysisArn() {
        return this.getStringAttribute('network_insights_analysis_arn');
    }

    // network_insights_analysis_id - computed: true, optional: false, required: false
    public get networkInsightsAnalysisId() {
        return this.getStringAttribute('network_insights_analysis_id');
    }

    // network_insights_path_id - computed: false, optional: false, required: true
    private _networkInsightsPathId?: string; 
    public get networkInsightsPathId() {
        return this.getStringAttribute('network_insights_path_id');
    }
    public set networkInsightsPathId(value: string) {
        this._networkInsightsPathId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInsightsPathIdInput() {
        return this._networkInsightsPathId;
    }

    // network_path_found - computed: true, optional: false, required: false
    public get networkPathFound() {
        return this.getBooleanAttribute('network_path_found');
    }

    // return_path_components - computed: true, optional: false, required: false
    private _returnPathComponents = new CcNetworkInsightsAnalysis.ReturnPathComponentsPropertyList(this, "return_path_components", false);
    public get returnPathComponents() {
        return this._returnPathComponents;
    }

    // start_date - computed: true, optional: false, required: false
    public get startDate() {
        return this.getStringAttribute('start_date');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkInsightsAnalysis.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkInsightsAnalysis.TagProperty[] | cdktn.IResolvable) {
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
            filter_in_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._filterInArns),
            network_insights_path_id: cdktn.stringToTerraform(this._networkInsightsPathId),
            tags: cdktn.listMapper(ccNetworkInsightsAnalysisTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            filter_in_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._filterInArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            network_insights_path_id: {
                value: cdktn.stringToHclTerraform(this._networkInsightsPathId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkInsightsAnalysisTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInsightsAnalysis.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkInsightsAnalysisAlternatePathHintsPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.AlternatePathHintsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisAlternatePathHintsPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.AlternatePathHintsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisAclPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.AclProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisAclPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.AclProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsAclRulePortRangePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsAclRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsAclRulePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsAclRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsAclRulePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsAclRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsAclRulePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsAclRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisAttachedToPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.AttachedToProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisAttachedToPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.AttachedToProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisClassicLoadBalancerListenerPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ClassicLoadBalancerListenerProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisClassicLoadBalancerListenerPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ClassicLoadBalancerListenerProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsComponentPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsComponentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsComponentPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsComponentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisCustomerGatewayPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.CustomerGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisCustomerGatewayPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.CustomerGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisDestinationPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.DestinationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisDestinationPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.DestinationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsDestinationVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsDestinationVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsDestinationVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsDestinationVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisElasticLoadBalancerListenerPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ElasticLoadBalancerListenerProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisElasticLoadBalancerListenerPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ElasticLoadBalancerListenerProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisIngressRouteTablePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.IngressRouteTableProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisIngressRouteTablePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.IngressRouteTableProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisInternetGatewayPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.InternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisInternetGatewayPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.InternetGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisInstancePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.InstanceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisInstancePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.InstanceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisLoadBalancerTargetPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.LoadBalancerTargetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisLoadBalancerTargetPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.LoadBalancerTargetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisLoadBalancerTargetGroupPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.LoadBalancerTargetGroupProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisLoadBalancerTargetGroupPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.LoadBalancerTargetGroupProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisLoadBalancerTargetGroupsPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.LoadBalancerTargetGroupsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisLoadBalancerTargetGroupsPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.LoadBalancerTargetGroupsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisNatGatewayPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.NatGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisNatGatewayPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.NatGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisNetworkInterfacePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.NetworkInterfaceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisNetworkInterfacePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.NetworkInterfaceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisPortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.PortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisPortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.PortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisPrefixListPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.PrefixListProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisPrefixListPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.PrefixListProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisRouteTablePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.RouteTableProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisRouteTablePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.RouteTableProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsRouteTableRoutePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsRouteTableRouteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsRouteTableRoutePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsRouteTableRouteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisSecurityGroupPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.SecurityGroupProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisSecurityGroupPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.SecurityGroupProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSecurityGroupRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSecurityGroupRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsSecurityGroupRulePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSecurityGroupRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsSecurityGroupRulePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSecurityGroupRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisSecurityGroupsPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.SecurityGroupsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisSecurityGroupsPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.SecurityGroupsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsSourceVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSourceVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsSourceVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSourceVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsSubnetPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSubnetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsSubnetPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsSubnetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisSubnetRouteTablePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.SubnetRouteTableProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisSubnetRouteTablePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.SubnetRouteTableProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisVpcEndpointPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.VpcEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisVpcEndpointPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.VpcEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisVpcPeeringConnectionPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.VpcPeeringConnectionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisVpcPeeringConnectionPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.VpcPeeringConnectionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisVpnConnectionPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.VpnConnectionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisVpnConnectionPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.VpnConnectionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisVpnGatewayPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.VpnGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisVpnGatewayPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.VpnGatewayProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisExplanationsPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisExplanationsPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ExplanationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsAclRulePortRangePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsAclRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsAclRulePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsAclRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsAclRulePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsAclRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsAclRulePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsAclRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsComponentPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsComponentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsComponentPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsComponentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsDestinationVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsDestinationVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsDestinationVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsDestinationVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsInboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsInboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsInboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsInboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsInboundHeaderPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsInboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsInboundHeaderPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsInboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsOutboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsOutboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsOutboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsOutboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsOutboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsOutboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsRouteTableRoutePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsRouteTableRouteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsRouteTableRoutePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsRouteTableRouteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSecurityGroupRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSecurityGroupRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSecurityGroupRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSecurityGroupRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSourceVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSourceVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSourceVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSourceVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSubnetPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSubnetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsSubnetPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsSubnetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisForwardPathComponentsPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisForwardPathComponentsPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ForwardPathComponentsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsAclRulePortRangePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsAclRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsAclRulePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsAclRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsAclRulePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsAclRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsAclRulePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsAclRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsComponentPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsComponentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsComponentPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsComponentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsDestinationVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsDestinationVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsDestinationVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsDestinationVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsInboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsInboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsInboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsInboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsInboundHeaderPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsInboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsInboundHeaderPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsInboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsOutboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsOutboundHeaderDestinationPortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsOutboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsOutboundHeaderSourcePortRangesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsOutboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsOutboundHeaderProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsRouteTableRoutePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsRouteTableRouteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsRouteTableRoutePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsRouteTableRouteProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSecurityGroupRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSecurityGroupRulePortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSecurityGroupRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSecurityGroupRuleProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSourceVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSourceVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSourceVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSourceVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSubnetPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSubnetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsSubnetPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsSubnetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsVpcPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsVpcPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsVpcProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisReturnPathComponentsPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInsightsAnalysisReturnPathComponentsPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.ReturnPathComponentsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInsightsAnalysisTagPropertyToTerraform(struct?: CcNetworkInsightsAnalysis.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkInsightsAnalysisTagPropertyToHclTerraform(struct?: CcNetworkInsightsAnalysis.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNetworkInsightsAnalysis {
export interface AlternatePathHintsProperty {
}
export class AlternatePathHintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): AlternatePathHintsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlternatePathHintsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // component_arn - computed: true, optional: false, required: false
    public get componentArn() {
        return this.getStringAttribute('component_arn');
    }

    // component_id - computed: true, optional: false, required: false
    public get componentId() {
        return this.getStringAttribute('component_id');
    }
}

export class AlternatePathHintsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): AlternatePathHintsPropertyOutputReference {
        return new AlternatePathHintsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AclProperty {
}
export class AclPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AclProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AclProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsAclRulePortRangeProperty {
}
export class ExplanationsAclRulePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsAclRulePortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsAclRulePortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}
export interface ExplanationsAclRuleProperty {
}
export class ExplanationsAclRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsAclRuleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsAclRuleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
        return this.getStringAttribute('cidr');
    }

    // egress - computed: true, optional: false, required: false
    public get egress() {
        return this.getBooleanAttribute('egress');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new ExplanationsAclRulePortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // rule_action - computed: true, optional: false, required: false
    public get ruleAction() {
        return this.getStringAttribute('rule_action');
    }

    // rule_number - computed: true, optional: false, required: false
    public get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
}
export interface AttachedToProperty {
}
export class AttachedToPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttachedToProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttachedToProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ClassicLoadBalancerListenerProperty {
}
export class ClassicLoadBalancerListenerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClassicLoadBalancerListenerProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClassicLoadBalancerListenerProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // instance_port - computed: true, optional: false, required: false
    public get instancePort() {
        return this.getNumberAttribute('instance_port');
    }

    // load_balancer_port - computed: true, optional: false, required: false
    public get loadBalancerPort() {
        return this.getNumberAttribute('load_balancer_port');
    }
}
export interface ExplanationsComponentProperty {
}
export class ExplanationsComponentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsComponentProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsComponentProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface CustomerGatewayProperty {
}
export class CustomerGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerGatewayProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerGatewayProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface DestinationProperty {
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsDestinationVpcProperty {
}
export class ExplanationsDestinationVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsDestinationVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsDestinationVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ElasticLoadBalancerListenerProperty {
}
export class ElasticLoadBalancerListenerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticLoadBalancerListenerProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticLoadBalancerListenerProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface IngressRouteTableProperty {
}
export class IngressRouteTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressRouteTableProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressRouteTableProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface InstanceProperty {
}
export class InstancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface LoadBalancerTargetProperty {
}
export class LoadBalancerTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoadBalancerTargetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerTargetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }

    // instance - computed: true, optional: false, required: false
    private _instance = new InstancePropertyOutputReference(this, "instance");
    public get instance() {
        return this._instance;
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }
}
export interface LoadBalancerTargetGroupProperty {
}
export class LoadBalancerTargetGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoadBalancerTargetGroupProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerTargetGroupProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface LoadBalancerTargetGroupsProperty {
}
export class LoadBalancerTargetGroupsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): LoadBalancerTargetGroupsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancerTargetGroupsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}

export class LoadBalancerTargetGroupsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): LoadBalancerTargetGroupsPropertyOutputReference {
        return new LoadBalancerTargetGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface NetworkInterfaceProperty {
}
export class NetworkInterfacePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkInterfaceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface PortRangesProperty {
}
export class PortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): PortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class PortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): PortRangesPropertyOutputReference {
        return new PortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrefixListProperty {
}
export class PrefixListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrefixListProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrefixListProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface RouteTableProperty {
}
export class RouteTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouteTableProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouteTableProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsRouteTableRouteProperty {
}
export class ExplanationsRouteTableRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsRouteTableRouteProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsRouteTableRouteProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_cidr - computed: true, optional: false, required: false
    public get destinationCidr() {
        return this.getStringAttribute('destination_cidr');
    }

    // destination_prefix_list_id - computed: true, optional: false, required: false
    public get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }

    // egress_only_internet_gateway_id - computed: true, optional: false, required: false
    public get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }

    // gateway_id - computed: true, optional: false, required: false
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }

    // nat_gateway_id - computed: true, optional: false, required: false
    public get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }

    // origin - computed: true, optional: false, required: false
    public get origin() {
        return this.getStringAttribute('origin');
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }

    // vpc_peering_connection_id - computed: true, optional: false, required: false
    public get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
}
export interface SecurityGroupProperty {
}
export class SecurityGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityGroupProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityGroupProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsSecurityGroupRulePortRangeProperty {
}
export class ExplanationsSecurityGroupRulePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsSecurityGroupRulePortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsSecurityGroupRulePortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}
export interface ExplanationsSecurityGroupRuleProperty {
}
export class ExplanationsSecurityGroupRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsSecurityGroupRuleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsSecurityGroupRuleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
        return this.getStringAttribute('cidr');
    }

    // direction - computed: true, optional: false, required: false
    public get direction() {
        return this.getStringAttribute('direction');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new ExplanationsSecurityGroupRulePortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }

    // prefix_list_id - computed: true, optional: false, required: false
    public get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
}
export interface SecurityGroupsProperty {
}
export class SecurityGroupsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): SecurityGroupsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityGroupsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}

export class SecurityGroupsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): SecurityGroupsPropertyOutputReference {
        return new SecurityGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExplanationsSourceVpcProperty {
}
export class ExplanationsSourceVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsSourceVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsSourceVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsSubnetProperty {
}
export class ExplanationsSubnetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsSubnetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsSubnetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface SubnetRouteTableProperty {
}
export class SubnetRouteTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubnetRouteTableProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubnetRouteTableProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsVpcProperty {
}
export class ExplanationsVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplanationsVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface VpcEndpointProperty {
}
export class VpcEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface VpcPeeringConnectionProperty {
}
export class VpcPeeringConnectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcPeeringConnectionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcPeeringConnectionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface VpnConnectionProperty {
}
export class VpnConnectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpnConnectionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpnConnectionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface VpnGatewayProperty {
}
export class VpnGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpnGatewayProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpnGatewayProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ExplanationsProperty {
}
export class ExplanationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ExplanationsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplanationsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // acl - computed: true, optional: false, required: false
    private _acl = new AclPropertyOutputReference(this, "acl");
    public get acl() {
        return this._acl;
    }

    // acl_rule - computed: true, optional: false, required: false
    private _aclRule = new ExplanationsAclRulePropertyOutputReference(this, "acl_rule");
    public get aclRule() {
        return this._aclRule;
    }

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // addresses - computed: true, optional: false, required: false
    public get addresses() {
        return this.getListAttribute('addresses');
    }

    // attached_to - computed: true, optional: false, required: false
    private _attachedTo = new AttachedToPropertyOutputReference(this, "attached_to");
    public get attachedTo() {
        return this._attachedTo;
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }

    // cidrs - computed: true, optional: false, required: false
    public get cidrs() {
        return this.getListAttribute('cidrs');
    }

    // classic_load_balancer_listener - computed: true, optional: false, required: false
    private _classicLoadBalancerListener = new ClassicLoadBalancerListenerPropertyOutputReference(this, "classic_load_balancer_listener");
    public get classicLoadBalancerListener() {
        return this._classicLoadBalancerListener;
    }

    // component - computed: true, optional: false, required: false
    private _component = new ExplanationsComponentPropertyOutputReference(this, "component");
    public get component() {
        return this._component;
    }

    // customer_gateway - computed: true, optional: false, required: false
    private _customerGateway = new CustomerGatewayPropertyOutputReference(this, "customer_gateway");
    public get customerGateway() {
        return this._customerGateway;
    }

    // destination - computed: true, optional: false, required: false
    private _destination = new DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }

    // destination_vpc - computed: true, optional: false, required: false
    private _destinationVpc = new ExplanationsDestinationVpcPropertyOutputReference(this, "destination_vpc");
    public get destinationVpc() {
        return this._destinationVpc;
    }

    // direction - computed: true, optional: false, required: false
    public get direction() {
        return this.getStringAttribute('direction');
    }

    // elastic_load_balancer_listener - computed: true, optional: false, required: false
    private _elasticLoadBalancerListener = new ElasticLoadBalancerListenerPropertyOutputReference(this, "elastic_load_balancer_listener");
    public get elasticLoadBalancerListener() {
        return this._elasticLoadBalancerListener;
    }

    // explanation_code - computed: true, optional: false, required: false
    public get explanationCode() {
        return this.getStringAttribute('explanation_code');
    }

    // ingress_route_table - computed: true, optional: false, required: false
    private _ingressRouteTable = new IngressRouteTablePropertyOutputReference(this, "ingress_route_table");
    public get ingressRouteTable() {
        return this._ingressRouteTable;
    }

    // internet_gateway - computed: true, optional: false, required: false
    private _internetGateway = new InternetGatewayPropertyOutputReference(this, "internet_gateway");
    public get internetGateway() {
        return this._internetGateway;
    }

    // load_balancer_arn - computed: true, optional: false, required: false
    public get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }

    // load_balancer_listener_port - computed: true, optional: false, required: false
    public get loadBalancerListenerPort() {
        return this.getNumberAttribute('load_balancer_listener_port');
    }

    // load_balancer_target - computed: true, optional: false, required: false
    private _loadBalancerTarget = new LoadBalancerTargetPropertyOutputReference(this, "load_balancer_target");
    public get loadBalancerTarget() {
        return this._loadBalancerTarget;
    }

    // load_balancer_target_group - computed: true, optional: false, required: false
    private _loadBalancerTargetGroup = new LoadBalancerTargetGroupPropertyOutputReference(this, "load_balancer_target_group");
    public get loadBalancerTargetGroup() {
        return this._loadBalancerTargetGroup;
    }

    // load_balancer_target_groups - computed: true, optional: false, required: false
    private _loadBalancerTargetGroups = new LoadBalancerTargetGroupsPropertyList(this, "load_balancer_target_groups", false);
    public get loadBalancerTargetGroups() {
        return this._loadBalancerTargetGroups;
    }

    // load_balancer_target_port - computed: true, optional: false, required: false
    public get loadBalancerTargetPort() {
        return this.getNumberAttribute('load_balancer_target_port');
    }

    // missing_component - computed: true, optional: false, required: false
    public get missingComponent() {
        return this.getStringAttribute('missing_component');
    }

    // nat_gateway - computed: true, optional: false, required: false
    private _natGateway = new NatGatewayPropertyOutputReference(this, "nat_gateway");
    public get natGateway() {
        return this._natGateway;
    }

    // network_interface - computed: true, optional: false, required: false
    private _networkInterface = new NetworkInterfacePropertyOutputReference(this, "network_interface");
    public get networkInterface() {
        return this._networkInterface;
    }

    // packet_field - computed: true, optional: false, required: false
    public get packetField() {
        return this.getStringAttribute('packet_field');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // port_ranges - computed: true, optional: false, required: false
    private _portRanges = new PortRangesPropertyList(this, "port_ranges", false);
    public get portRanges() {
        return this._portRanges;
    }

    // prefix_list - computed: true, optional: false, required: false
    private _prefixList = new PrefixListPropertyOutputReference(this, "prefix_list");
    public get prefixList() {
        return this._prefixList;
    }

    // protocols - computed: true, optional: false, required: false
    public get protocols() {
        return this.getListAttribute('protocols');
    }

    // route_table - computed: true, optional: false, required: false
    private _routeTable = new RouteTablePropertyOutputReference(this, "route_table");
    public get routeTable() {
        return this._routeTable;
    }

    // route_table_route - computed: true, optional: false, required: false
    private _routeTableRoute = new ExplanationsRouteTableRoutePropertyOutputReference(this, "route_table_route");
    public get routeTableRoute() {
        return this._routeTableRoute;
    }

    // security_group - computed: true, optional: false, required: false
    private _securityGroup = new SecurityGroupPropertyOutputReference(this, "security_group");
    public get securityGroup() {
        return this._securityGroup;
    }

    // security_group_rule - computed: true, optional: false, required: false
    private _securityGroupRule = new ExplanationsSecurityGroupRulePropertyOutputReference(this, "security_group_rule");
    public get securityGroupRule() {
        return this._securityGroupRule;
    }

    // security_groups - computed: true, optional: false, required: false
    private _securityGroups = new SecurityGroupsPropertyList(this, "security_groups", false);
    public get securityGroups() {
        return this._securityGroups;
    }

    // source_vpc - computed: true, optional: false, required: false
    private _sourceVpc = new ExplanationsSourceVpcPropertyOutputReference(this, "source_vpc");
    public get sourceVpc() {
        return this._sourceVpc;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // subnet - computed: true, optional: false, required: false
    private _subnet = new ExplanationsSubnetPropertyOutputReference(this, "subnet");
    public get subnet() {
        return this._subnet;
    }

    // subnet_route_table - computed: true, optional: false, required: false
    private _subnetRouteTable = new SubnetRouteTablePropertyOutputReference(this, "subnet_route_table");
    public get subnetRouteTable() {
        return this._subnetRouteTable;
    }

    // vpc - computed: true, optional: false, required: false
    private _vpc = new ExplanationsVpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }

    // vpc_endpoint - computed: true, optional: false, required: false
    private _vpcEndpoint = new VpcEndpointPropertyOutputReference(this, "vpc_endpoint");
    public get vpcEndpoint() {
        return this._vpcEndpoint;
    }

    // vpc_peering_connection - computed: true, optional: false, required: false
    private _vpcPeeringConnection = new VpcPeeringConnectionPropertyOutputReference(this, "vpc_peering_connection");
    public get vpcPeeringConnection() {
        return this._vpcPeeringConnection;
    }

    // vpn_connection - computed: true, optional: false, required: false
    private _vpnConnection = new VpnConnectionPropertyOutputReference(this, "vpn_connection");
    public get vpnConnection() {
        return this._vpnConnection;
    }

    // vpn_gateway - computed: true, optional: false, required: false
    private _vpnGateway = new VpnGatewayPropertyOutputReference(this, "vpn_gateway");
    public get vpnGateway() {
        return this._vpnGateway;
    }
}

export class ExplanationsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ExplanationsPropertyOutputReference {
        return new ExplanationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardPathComponentsAclRulePortRangeProperty {
}
export class ForwardPathComponentsAclRulePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsAclRulePortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsAclRulePortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}
export interface ForwardPathComponentsAclRuleProperty {
}
export class ForwardPathComponentsAclRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsAclRuleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsAclRuleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
        return this.getStringAttribute('cidr');
    }

    // egress - computed: true, optional: false, required: false
    public get egress() {
        return this.getBooleanAttribute('egress');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new ForwardPathComponentsAclRulePortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // rule_action - computed: true, optional: false, required: false
    public get ruleAction() {
        return this.getStringAttribute('rule_action');
    }

    // rule_number - computed: true, optional: false, required: false
    public get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
}
export interface ForwardPathComponentsComponentProperty {
}
export class ForwardPathComponentsComponentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsComponentProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsComponentProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ForwardPathComponentsDestinationVpcProperty {
}
export class ForwardPathComponentsDestinationVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsDestinationVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsDestinationVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ForwardPathComponentsInboundHeaderDestinationPortRangesProperty {
}
export class ForwardPathComponentsInboundHeaderDestinationPortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ForwardPathComponentsInboundHeaderDestinationPortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsInboundHeaderDestinationPortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ForwardPathComponentsInboundHeaderDestinationPortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ForwardPathComponentsInboundHeaderDestinationPortRangesPropertyOutputReference {
        return new ForwardPathComponentsInboundHeaderDestinationPortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardPathComponentsInboundHeaderSourcePortRangesProperty {
}
export class ForwardPathComponentsInboundHeaderSourcePortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ForwardPathComponentsInboundHeaderSourcePortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsInboundHeaderSourcePortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ForwardPathComponentsInboundHeaderSourcePortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ForwardPathComponentsInboundHeaderSourcePortRangesPropertyOutputReference {
        return new ForwardPathComponentsInboundHeaderSourcePortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardPathComponentsInboundHeaderProperty {
}
export class ForwardPathComponentsInboundHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsInboundHeaderProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsInboundHeaderProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_addresses - computed: true, optional: false, required: false
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }

    // destination_port_ranges - computed: true, optional: false, required: false
    private _destinationPortRanges = new ForwardPathComponentsInboundHeaderDestinationPortRangesPropertyList(this, "destination_port_ranges", false);
    public get destinationPortRanges() {
        return this._destinationPortRanges;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // source_addresses - computed: true, optional: false, required: false
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }

    // source_port_ranges - computed: true, optional: false, required: false
    private _sourcePortRanges = new ForwardPathComponentsInboundHeaderSourcePortRangesPropertyList(this, "source_port_ranges", false);
    public get sourcePortRanges() {
        return this._sourcePortRanges;
    }
}
export interface ForwardPathComponentsOutboundHeaderDestinationPortRangesProperty {
}
export class ForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ForwardPathComponentsOutboundHeaderDestinationPortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsOutboundHeaderDestinationPortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyOutputReference {
        return new ForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardPathComponentsOutboundHeaderSourcePortRangesProperty {
}
export class ForwardPathComponentsOutboundHeaderSourcePortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ForwardPathComponentsOutboundHeaderSourcePortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsOutboundHeaderSourcePortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ForwardPathComponentsOutboundHeaderSourcePortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ForwardPathComponentsOutboundHeaderSourcePortRangesPropertyOutputReference {
        return new ForwardPathComponentsOutboundHeaderSourcePortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForwardPathComponentsOutboundHeaderProperty {
}
export class ForwardPathComponentsOutboundHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsOutboundHeaderProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsOutboundHeaderProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_addresses - computed: true, optional: false, required: false
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }

    // destination_port_ranges - computed: true, optional: false, required: false
    private _destinationPortRanges = new ForwardPathComponentsOutboundHeaderDestinationPortRangesPropertyList(this, "destination_port_ranges", false);
    public get destinationPortRanges() {
        return this._destinationPortRanges;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // source_addresses - computed: true, optional: false, required: false
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }

    // source_port_ranges - computed: true, optional: false, required: false
    private _sourcePortRanges = new ForwardPathComponentsOutboundHeaderSourcePortRangesPropertyList(this, "source_port_ranges", false);
    public get sourcePortRanges() {
        return this._sourcePortRanges;
    }
}
export interface ForwardPathComponentsRouteTableRouteProperty {
}
export class ForwardPathComponentsRouteTableRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsRouteTableRouteProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsRouteTableRouteProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_cidr - computed: true, optional: false, required: false
    public get destinationCidr() {
        return this.getStringAttribute('destination_cidr');
    }

    // destination_prefix_list_id - computed: true, optional: false, required: false
    public get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }

    // egress_only_internet_gateway_id - computed: true, optional: false, required: false
    public get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }

    // gateway_id - computed: true, optional: false, required: false
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }

    // nat_gateway_id - computed: true, optional: false, required: false
    public get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }

    // origin - computed: true, optional: false, required: false
    public get origin() {
        return this.getStringAttribute('origin');
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }

    // vpc_peering_connection_id - computed: true, optional: false, required: false
    public get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
}
export interface ForwardPathComponentsSecurityGroupRulePortRangeProperty {
}
export class ForwardPathComponentsSecurityGroupRulePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsSecurityGroupRulePortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsSecurityGroupRulePortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}
export interface ForwardPathComponentsSecurityGroupRuleProperty {
}
export class ForwardPathComponentsSecurityGroupRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsSecurityGroupRuleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsSecurityGroupRuleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
        return this.getStringAttribute('cidr');
    }

    // direction - computed: true, optional: false, required: false
    public get direction() {
        return this.getStringAttribute('direction');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new ForwardPathComponentsSecurityGroupRulePortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }

    // prefix_list_id - computed: true, optional: false, required: false
    public get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
}
export interface ForwardPathComponentsSourceVpcProperty {
}
export class ForwardPathComponentsSourceVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsSourceVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsSourceVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ForwardPathComponentsSubnetProperty {
}
export class ForwardPathComponentsSubnetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsSubnetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsSubnetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ForwardPathComponentsVpcProperty {
}
export class ForwardPathComponentsVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForwardPathComponentsVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ForwardPathComponentsProperty {
}
export class ForwardPathComponentsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ForwardPathComponentsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForwardPathComponentsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // acl_rule - computed: true, optional: false, required: false
    private _aclRule = new ForwardPathComponentsAclRulePropertyOutputReference(this, "acl_rule");
    public get aclRule() {
        return this._aclRule;
    }

    // component - computed: true, optional: false, required: false
    private _component = new ForwardPathComponentsComponentPropertyOutputReference(this, "component");
    public get component() {
        return this._component;
    }

    // destination_vpc - computed: true, optional: false, required: false
    private _destinationVpc = new ForwardPathComponentsDestinationVpcPropertyOutputReference(this, "destination_vpc");
    public get destinationVpc() {
        return this._destinationVpc;
    }

    // inbound_header - computed: true, optional: false, required: false
    private _inboundHeader = new ForwardPathComponentsInboundHeaderPropertyOutputReference(this, "inbound_header");
    public get inboundHeader() {
        return this._inboundHeader;
    }

    // outbound_header - computed: true, optional: false, required: false
    private _outboundHeader = new ForwardPathComponentsOutboundHeaderPropertyOutputReference(this, "outbound_header");
    public get outboundHeader() {
        return this._outboundHeader;
    }

    // route_table_route - computed: true, optional: false, required: false
    private _routeTableRoute = new ForwardPathComponentsRouteTableRoutePropertyOutputReference(this, "route_table_route");
    public get routeTableRoute() {
        return this._routeTableRoute;
    }

    // security_group_rule - computed: true, optional: false, required: false
    private _securityGroupRule = new ForwardPathComponentsSecurityGroupRulePropertyOutputReference(this, "security_group_rule");
    public get securityGroupRule() {
        return this._securityGroupRule;
    }

    // sequence_number - computed: true, optional: false, required: false
    public get sequenceNumber() {
        return this.getNumberAttribute('sequence_number');
    }

    // source_vpc - computed: true, optional: false, required: false
    private _sourceVpc = new ForwardPathComponentsSourceVpcPropertyOutputReference(this, "source_vpc");
    public get sourceVpc() {
        return this._sourceVpc;
    }

    // subnet - computed: true, optional: false, required: false
    private _subnet = new ForwardPathComponentsSubnetPropertyOutputReference(this, "subnet");
    public get subnet() {
        return this._subnet;
    }

    // vpc - computed: true, optional: false, required: false
    private _vpc = new ForwardPathComponentsVpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
}

export class ForwardPathComponentsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ForwardPathComponentsPropertyOutputReference {
        return new ForwardPathComponentsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReturnPathComponentsAclRulePortRangeProperty {
}
export class ReturnPathComponentsAclRulePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsAclRulePortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsAclRulePortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}
export interface ReturnPathComponentsAclRuleProperty {
}
export class ReturnPathComponentsAclRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsAclRuleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsAclRuleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
        return this.getStringAttribute('cidr');
    }

    // egress - computed: true, optional: false, required: false
    public get egress() {
        return this.getBooleanAttribute('egress');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new ReturnPathComponentsAclRulePortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // rule_action - computed: true, optional: false, required: false
    public get ruleAction() {
        return this.getStringAttribute('rule_action');
    }

    // rule_number - computed: true, optional: false, required: false
    public get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
}
export interface ReturnPathComponentsComponentProperty {
}
export class ReturnPathComponentsComponentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsComponentProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsComponentProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ReturnPathComponentsDestinationVpcProperty {
}
export class ReturnPathComponentsDestinationVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsDestinationVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsDestinationVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ReturnPathComponentsInboundHeaderDestinationPortRangesProperty {
}
export class ReturnPathComponentsInboundHeaderDestinationPortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ReturnPathComponentsInboundHeaderDestinationPortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsInboundHeaderDestinationPortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ReturnPathComponentsInboundHeaderDestinationPortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ReturnPathComponentsInboundHeaderDestinationPortRangesPropertyOutputReference {
        return new ReturnPathComponentsInboundHeaderDestinationPortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReturnPathComponentsInboundHeaderSourcePortRangesProperty {
}
export class ReturnPathComponentsInboundHeaderSourcePortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ReturnPathComponentsInboundHeaderSourcePortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsInboundHeaderSourcePortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ReturnPathComponentsInboundHeaderSourcePortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ReturnPathComponentsInboundHeaderSourcePortRangesPropertyOutputReference {
        return new ReturnPathComponentsInboundHeaderSourcePortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReturnPathComponentsInboundHeaderProperty {
}
export class ReturnPathComponentsInboundHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsInboundHeaderProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsInboundHeaderProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_addresses - computed: true, optional: false, required: false
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }

    // destination_port_ranges - computed: true, optional: false, required: false
    private _destinationPortRanges = new ReturnPathComponentsInboundHeaderDestinationPortRangesPropertyList(this, "destination_port_ranges", false);
    public get destinationPortRanges() {
        return this._destinationPortRanges;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // source_addresses - computed: true, optional: false, required: false
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }

    // source_port_ranges - computed: true, optional: false, required: false
    private _sourcePortRanges = new ReturnPathComponentsInboundHeaderSourcePortRangesPropertyList(this, "source_port_ranges", false);
    public get sourcePortRanges() {
        return this._sourcePortRanges;
    }
}
export interface ReturnPathComponentsOutboundHeaderDestinationPortRangesProperty {
}
export class ReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ReturnPathComponentsOutboundHeaderDestinationPortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsOutboundHeaderDestinationPortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyOutputReference {
        return new ReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReturnPathComponentsOutboundHeaderSourcePortRangesProperty {
}
export class ReturnPathComponentsOutboundHeaderSourcePortRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ReturnPathComponentsOutboundHeaderSourcePortRangesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsOutboundHeaderSourcePortRangesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}

export class ReturnPathComponentsOutboundHeaderSourcePortRangesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ReturnPathComponentsOutboundHeaderSourcePortRangesPropertyOutputReference {
        return new ReturnPathComponentsOutboundHeaderSourcePortRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReturnPathComponentsOutboundHeaderProperty {
}
export class ReturnPathComponentsOutboundHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsOutboundHeaderProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsOutboundHeaderProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_addresses - computed: true, optional: false, required: false
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }

    // destination_port_ranges - computed: true, optional: false, required: false
    private _destinationPortRanges = new ReturnPathComponentsOutboundHeaderDestinationPortRangesPropertyList(this, "destination_port_ranges", false);
    public get destinationPortRanges() {
        return this._destinationPortRanges;
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // source_addresses - computed: true, optional: false, required: false
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }

    // source_port_ranges - computed: true, optional: false, required: false
    private _sourcePortRanges = new ReturnPathComponentsOutboundHeaderSourcePortRangesPropertyList(this, "source_port_ranges", false);
    public get sourcePortRanges() {
        return this._sourcePortRanges;
    }
}
export interface ReturnPathComponentsRouteTableRouteProperty {
}
export class ReturnPathComponentsRouteTableRoutePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsRouteTableRouteProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsRouteTableRouteProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // destination_cidr - computed: true, optional: false, required: false
    public get destinationCidr() {
        return this.getStringAttribute('destination_cidr');
    }

    // destination_prefix_list_id - computed: true, optional: false, required: false
    public get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }

    // egress_only_internet_gateway_id - computed: true, optional: false, required: false
    public get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }

    // gateway_id - computed: true, optional: false, required: false
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }

    // nat_gateway_id - computed: true, optional: false, required: false
    public get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }

    // origin - computed: true, optional: false, required: false
    public get origin() {
        return this.getStringAttribute('origin');
    }

    // transit_gateway_id - computed: true, optional: false, required: false
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }

    // vpc_peering_connection_id - computed: true, optional: false, required: false
    public get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
}
export interface ReturnPathComponentsSecurityGroupRulePortRangeProperty {
}
export class ReturnPathComponentsSecurityGroupRulePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsSecurityGroupRulePortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsSecurityGroupRulePortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // from - computed: true, optional: false, required: false
    public get from() {
        return this.getNumberAttribute('from');
    }

    // to - computed: true, optional: false, required: false
    public get to() {
        return this.getNumberAttribute('to');
    }
}
export interface ReturnPathComponentsSecurityGroupRuleProperty {
}
export class ReturnPathComponentsSecurityGroupRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsSecurityGroupRuleProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsSecurityGroupRuleProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cidr - computed: true, optional: false, required: false
    public get cidr() {
        return this.getStringAttribute('cidr');
    }

    // direction - computed: true, optional: false, required: false
    public get direction() {
        return this.getStringAttribute('direction');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new ReturnPathComponentsSecurityGroupRulePortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }

    // prefix_list_id - computed: true, optional: false, required: false
    public get prefixListId() {
        return this.getStringAttribute('prefix_list_id');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }

    // security_group_id - computed: true, optional: false, required: false
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
}
export interface ReturnPathComponentsSourceVpcProperty {
}
export class ReturnPathComponentsSourceVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsSourceVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsSourceVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ReturnPathComponentsSubnetProperty {
}
export class ReturnPathComponentsSubnetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsSubnetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsSubnetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ReturnPathComponentsVpcProperty {
}
export class ReturnPathComponentsVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReturnPathComponentsVpcProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsVpcProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }
}
export interface ReturnPathComponentsProperty {
}
export class ReturnPathComponentsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ReturnPathComponentsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReturnPathComponentsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // acl_rule - computed: true, optional: false, required: false
    private _aclRule = new ReturnPathComponentsAclRulePropertyOutputReference(this, "acl_rule");
    public get aclRule() {
        return this._aclRule;
    }

    // component - computed: true, optional: false, required: false
    private _component = new ReturnPathComponentsComponentPropertyOutputReference(this, "component");
    public get component() {
        return this._component;
    }

    // destination_vpc - computed: true, optional: false, required: false
    private _destinationVpc = new ReturnPathComponentsDestinationVpcPropertyOutputReference(this, "destination_vpc");
    public get destinationVpc() {
        return this._destinationVpc;
    }

    // inbound_header - computed: true, optional: false, required: false
    private _inboundHeader = new ReturnPathComponentsInboundHeaderPropertyOutputReference(this, "inbound_header");
    public get inboundHeader() {
        return this._inboundHeader;
    }

    // outbound_header - computed: true, optional: false, required: false
    private _outboundHeader = new ReturnPathComponentsOutboundHeaderPropertyOutputReference(this, "outbound_header");
    public get outboundHeader() {
        return this._outboundHeader;
    }

    // route_table_route - computed: true, optional: false, required: false
    private _routeTableRoute = new ReturnPathComponentsRouteTableRoutePropertyOutputReference(this, "route_table_route");
    public get routeTableRoute() {
        return this._routeTableRoute;
    }

    // security_group_rule - computed: true, optional: false, required: false
    private _securityGroupRule = new ReturnPathComponentsSecurityGroupRulePropertyOutputReference(this, "security_group_rule");
    public get securityGroupRule() {
        return this._securityGroupRule;
    }

    // sequence_number - computed: true, optional: false, required: false
    public get sequenceNumber() {
        return this.getNumberAttribute('sequence_number');
    }

    // source_vpc - computed: true, optional: false, required: false
    private _sourceVpc = new ReturnPathComponentsSourceVpcPropertyOutputReference(this, "source_vpc");
    public get sourceVpc() {
        return this._sourceVpc;
    }

    // subnet - computed: true, optional: false, required: false
    private _subnet = new ReturnPathComponentsSubnetPropertyOutputReference(this, "subnet");
    public get subnet() {
        return this._subnet;
    }

    // vpc - computed: true, optional: false, required: false
    private _vpc = new ReturnPathComponentsVpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
}

export class ReturnPathComponentsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ReturnPathComponentsPropertyOutputReference {
        return new ReturnPathComponentsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis#key CcNetworkInsightsAnalysis#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_analysis#value CcNetworkInsightsAnalysis#value}
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
