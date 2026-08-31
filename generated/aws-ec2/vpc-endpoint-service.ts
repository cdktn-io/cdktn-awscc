// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCEndpointServiceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#acceptance_required CcVPCEndpointService#acceptance_required}
    */
    readonly acceptanceRequired?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#contributor_insights_enabled CcVPCEndpointService#contributor_insights_enabled}
    */
    readonly contributorInsightsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#gateway_load_balancer_arns CcVPCEndpointService#gateway_load_balancer_arns}
    */
    readonly gatewayLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#network_load_balancer_arns CcVPCEndpointService#network_load_balancer_arns}
    */
    readonly networkLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#payer_responsibility CcVPCEndpointService#payer_responsibility}
    */
    readonly payerResponsibility?: string;
    /**
    * Specify which Ip Address types are supported for VPC endpoint service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#supported_ip_address_types CcVPCEndpointService#supported_ip_address_types}
    */
    readonly supportedIpAddressTypes?: string[];
    /**
    * The Regions from which service consumers can access the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#supported_regions CcVPCEndpointService#supported_regions}
    */
    readonly supportedRegions?: string[];
    /**
    * The tags to add to the VPC endpoint service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#tags CcVPCEndpointService#tags}
    */
    readonly tags?: CcVPCEndpointService.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service awscc_ec2_vpc_endpoint_service}
*/
export class CcVPCEndpointService extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_endpoint_service";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCEndpointService resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCEndpointService to import
    * @param importFromId The id of the existing CcVPCEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCEndpointService to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_endpoint_service", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service awscc_ec2_vpc_endpoint_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCEndpointServiceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcVPCEndpointServiceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_endpoint_service',
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
        this._acceptanceRequired = config.acceptanceRequired;
        this._contributorInsightsEnabled = config.contributorInsightsEnabled;
        this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
        this._networkLoadBalancerArns = config.networkLoadBalancerArns;
        this._payerResponsibility = config.payerResponsibility;
        this._supportedIpAddressTypes = config.supportedIpAddressTypes;
        this._supportedRegions = config.supportedRegions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acceptance_required - computed: true, optional: true, required: false
    private _acceptanceRequired?: boolean | cdktn.IResolvable; 
    public get acceptanceRequired() {
        return this.getBooleanAttribute('acceptance_required');
    }
    public set acceptanceRequired(value: boolean | cdktn.IResolvable) {
        this._acceptanceRequired = value;
    }
    public resetAcceptanceRequired() {
        this._acceptanceRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptanceRequiredInput() {
        return this._acceptanceRequired;
    }

    // contributor_insights_enabled - computed: true, optional: true, required: false
    private _contributorInsightsEnabled?: boolean | cdktn.IResolvable; 
    public get contributorInsightsEnabled() {
        return this.getBooleanAttribute('contributor_insights_enabled');
    }
    public set contributorInsightsEnabled(value: boolean | cdktn.IResolvable) {
        this._contributorInsightsEnabled = value;
    }
    public resetContributorInsightsEnabled() {
        this._contributorInsightsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contributorInsightsEnabledInput() {
        return this._contributorInsightsEnabled;
    }

    // gateway_load_balancer_arns - computed: true, optional: true, required: false
    private _gatewayLoadBalancerArns?: string[]; 
    public get gatewayLoadBalancerArns() {
        return this.getListAttribute('gateway_load_balancer_arns');
    }
    public set gatewayLoadBalancerArns(value: string[]) {
        this._gatewayLoadBalancerArns = value;
    }
    public resetGatewayLoadBalancerArns() {
        this._gatewayLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayLoadBalancerArnsInput() {
        return this._gatewayLoadBalancerArns;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // network_load_balancer_arns - computed: true, optional: true, required: false
    private _networkLoadBalancerArns?: string[]; 
    public get networkLoadBalancerArns() {
        return this.getListAttribute('network_load_balancer_arns');
    }
    public set networkLoadBalancerArns(value: string[]) {
        this._networkLoadBalancerArns = value;
    }
    public resetNetworkLoadBalancerArns() {
        this._networkLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkLoadBalancerArnsInput() {
        return this._networkLoadBalancerArns;
    }

    // payer_responsibility - computed: true, optional: true, required: false
    private _payerResponsibility?: string; 
    public get payerResponsibility() {
        return this.getStringAttribute('payer_responsibility');
    }
    public set payerResponsibility(value: string) {
        this._payerResponsibility = value;
    }
    public resetPayerResponsibility() {
        this._payerResponsibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payerResponsibilityInput() {
        return this._payerResponsibility;
    }

    // service_id - computed: true, optional: false, required: false
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }

    // supported_ip_address_types - computed: true, optional: true, required: false
    private _supportedIpAddressTypes?: string[]; 
    public get supportedIpAddressTypes() {
        return this.getListAttribute('supported_ip_address_types');
    }
    public set supportedIpAddressTypes(value: string[]) {
        this._supportedIpAddressTypes = value;
    }
    public resetSupportedIpAddressTypes() {
        this._supportedIpAddressTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedIpAddressTypesInput() {
        return this._supportedIpAddressTypes;
    }

    // supported_regions - computed: true, optional: true, required: false
    private _supportedRegions?: string[]; 
    public get supportedRegions() {
        return cdktn.Fn.tolist(this.getListAttribute('supported_regions'));
    }
    public set supportedRegions(value: string[]) {
        this._supportedRegions = value;
    }
    public resetSupportedRegions() {
        this._supportedRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedRegionsInput() {
        return this._supportedRegions;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVPCEndpointService.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVPCEndpointService.TagProperty[] | cdktn.IResolvable) {
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
            acceptance_required: cdktn.booleanToTerraform(this._acceptanceRequired),
            contributor_insights_enabled: cdktn.booleanToTerraform(this._contributorInsightsEnabled),
            gateway_load_balancer_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._gatewayLoadBalancerArns),
            network_load_balancer_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._networkLoadBalancerArns),
            payer_responsibility: cdktn.stringToTerraform(this._payerResponsibility),
            supported_ip_address_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedIpAddressTypes),
            supported_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedRegions),
            tags: cdktn.listMapper(ccVPCEndpointServiceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            acceptance_required: {
                value: cdktn.booleanToHclTerraform(this._acceptanceRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            contributor_insights_enabled: {
                value: cdktn.booleanToHclTerraform(this._contributorInsightsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            gateway_load_balancer_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._gatewayLoadBalancerArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            network_load_balancer_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._networkLoadBalancerArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            payer_responsibility: {
                value: cdktn.stringToHclTerraform(this._payerResponsibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            supported_ip_address_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedIpAddressTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            supported_regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedRegions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVPCEndpointServiceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVPCEndpointService.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVPCEndpointServiceTagPropertyToTerraform(struct?: CcVPCEndpointService.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVPCEndpointServiceTagPropertyToHclTerraform(struct?: CcVPCEndpointService.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVPCEndpointService {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#key CcVPCEndpointService#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint_service#value CcVPCEndpointService#value}
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
