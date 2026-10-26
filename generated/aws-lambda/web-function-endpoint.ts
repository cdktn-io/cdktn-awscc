// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWebFunctionEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The authentication type for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#auth_type CcWebFunctionEndpoint#auth_type}
    */
    readonly authType: string;
    /**
    * A description of the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#description CcWebFunctionEndpoint#description}
    */
    readonly description?: string;
    /**
    * The name of the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#endpoint_name CcWebFunctionEndpoint#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * The type of the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#endpoint_type CcWebFunctionEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * The name of the web function this endpoint belongs to. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#function_name CcWebFunctionEndpoint#function_name}
    */
    readonly functionName: string;
    /**
    * The list of AWS Regions for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#regions CcWebFunctionEndpoint#regions}
    */
    readonly regions?: string[];
    /**
    * List of revision routing entries. 1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#revision_weights CcWebFunctionEndpoint#revision_weights}
    */
    readonly revisionWeights?: CcWebFunctionEndpoint.RevisionWeightsProperty[] | cdktn.IResolvable;
    /**
    * The scaling configuration for the endpoint. Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#scaling_config CcWebFunctionEndpoint#scaling_config}
    */
    readonly scalingConfig?: CcWebFunctionEndpoint.ScalingConfigProperty;
    /**
    * The throttling configuration for the endpoint. Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#throttle_config CcWebFunctionEndpoint#throttle_config}
    */
    readonly throttleConfig?: CcWebFunctionEndpoint.ThrottleConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint}
*/
export class CcWebFunctionEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_web_function_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWebFunctionEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWebFunctionEndpoint to import
    * @param importFromId The id of the existing CcWebFunctionEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWebFunctionEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_web_function_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWebFunctionEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcWebFunctionEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_web_function_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._authType = config.authType;
        this._description = config.description;
        this._endpointName = config.endpointName;
        this._endpointType = config.endpointType;
        this._functionName = config.functionName;
        this._regions = config.regions;
        this._revisionWeights.internalValue = config.revisionWeights;
        this._scalingConfig.internalValue = config.scalingConfig;
        this._throttleConfig.internalValue = config.throttleConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auth_type - computed: false, optional: false, required: true
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }

    // endpoint_arn - computed: true, optional: false, required: false
    public get endpointArn() {
        return this.getStringAttribute('endpoint_arn');
    }

    // endpoint_name - computed: false, optional: false, required: true
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // endpoint_type - computed: false, optional: false, required: true
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
    }

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // regional_endpoints - computed: true, optional: false, required: false
    private _regionalEndpoints = new CcWebFunctionEndpoint.RegionalEndpointsPropertyMap(this, "regional_endpoints");
    public get regionalEndpoints() {
        return this._regionalEndpoints;
    }

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // revision_weights - computed: true, optional: true, required: false
    private _revisionWeights = new CcWebFunctionEndpoint.RevisionWeightsPropertyList(this, "revision_weights", false);
    public get revisionWeights() {
        return this._revisionWeights;
    }
    public putRevisionWeights(value: CcWebFunctionEndpoint.RevisionWeightsProperty[] | cdktn.IResolvable) {
        this._revisionWeights.internalValue = value;
    }
    public resetRevisionWeights() {
        this._revisionWeights.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionWeightsInput() {
        return this._revisionWeights.internalValue;
    }

    // scaling_config - computed: true, optional: true, required: false
    private _scalingConfig = new CcWebFunctionEndpoint.ScalingConfigPropertyOutputReference(this, "scaling_config");
    public get scalingConfig() {
        return this._scalingConfig;
    }
    public putScalingConfig(value: CcWebFunctionEndpoint.ScalingConfigProperty) {
        this._scalingConfig.internalValue = value;
    }
    public resetScalingConfig() {
        this._scalingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigInput() {
        return this._scalingConfig.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }

    // throttle_config - computed: true, optional: true, required: false
    private _throttleConfig = new CcWebFunctionEndpoint.ThrottleConfigPropertyOutputReference(this, "throttle_config");
    public get throttleConfig() {
        return this._throttleConfig;
    }
    public putThrottleConfig(value: CcWebFunctionEndpoint.ThrottleConfigProperty) {
        this._throttleConfig.internalValue = value;
    }
    public resetThrottleConfig() {
        this._throttleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttleConfigInput() {
        return this._throttleConfig.internalValue;
    }

    // update_status - computed: true, optional: false, required: false
    public get updateStatus() {
        return this.getStringAttribute('update_status');
    }

    // update_status_reason - computed: true, optional: false, required: false
    public get updateStatusReason() {
        return this.getStringAttribute('update_status_reason');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth_type: cdktn.stringToTerraform(this._authType),
            description: cdktn.stringToTerraform(this._description),
            endpoint_name: cdktn.stringToTerraform(this._endpointName),
            endpoint_type: cdktn.stringToTerraform(this._endpointType),
            function_name: cdktn.stringToTerraform(this._functionName),
            regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
            revision_weights: cdktn.listMapper(ccWebFunctionEndpointRevisionWeightsPropertyToTerraform, false)(this._revisionWeights.internalValue),
            scaling_config: ccWebFunctionEndpointScalingConfigPropertyToTerraform(this._scalingConfig.internalValue),
            throttle_config: ccWebFunctionEndpointThrottleConfigPropertyToTerraform(this._throttleConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auth_type: {
                value: cdktn.stringToHclTerraform(this._authType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_name: {
                value: cdktn.stringToHclTerraform(this._endpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_type: {
                value: cdktn.stringToHclTerraform(this._endpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            revision_weights: {
                value: cdktn.listMapperHcl(ccWebFunctionEndpointRevisionWeightsPropertyToHclTerraform, false)(this._revisionWeights.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWebFunctionEndpoint.RevisionWeightsPropertyList",
            },
            scaling_config: {
                value: ccWebFunctionEndpointScalingConfigPropertyToHclTerraform(this._scalingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebFunctionEndpoint.ScalingConfigProperty",
            },
            throttle_config: {
                value: ccWebFunctionEndpointThrottleConfigPropertyToHclTerraform(this._throttleConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebFunctionEndpoint.ThrottleConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWebFunctionEndpointRegionalEndpointsRevisionWeightsPropertyToTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsRevisionWeightsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWebFunctionEndpointRegionalEndpointsRevisionWeightsPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsRevisionWeightsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccWebFunctionEndpointRegionalEndpointsScalingConfigPropertyToTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsScalingConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWebFunctionEndpointRegionalEndpointsScalingConfigPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsScalingConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccWebFunctionEndpointRegionalEndpointsThrottleConfigPropertyToTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsThrottleConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWebFunctionEndpointRegionalEndpointsThrottleConfigPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsThrottleConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccWebFunctionEndpointRegionalEndpointsPropertyToTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWebFunctionEndpointRegionalEndpointsPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.RegionalEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccWebFunctionEndpointRevisionWeightsPropertyToTerraform(struct?: CcWebFunctionEndpoint.RevisionWeightsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        revision_id: cdktn.stringToTerraform(struct!.revisionId),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccWebFunctionEndpointRevisionWeightsPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.RevisionWeightsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        revision_id: {
            value: cdktn.stringToHclTerraform(struct!.revisionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionEndpointScalingConfigPropertyToTerraform(struct?: CcWebFunctionEndpoint.ScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_environments: cdktn.numberToTerraform(struct!.maxEnvironments),
    }
}


export function ccWebFunctionEndpointScalingConfigPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.ScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_environments: {
            value: cdktn.numberToHclTerraform(struct!.maxEnvironments),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionEndpointThrottleConfigPropertyToTerraform(struct?: CcWebFunctionEndpoint.ThrottleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
    }
}


export function ccWebFunctionEndpointThrottleConfigPropertyToHclTerraform(struct?: CcWebFunctionEndpoint.ThrottleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rate_limit: {
            value: cdktn.numberToHclTerraform(struct!.rateLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWebFunctionEndpoint {
export interface RegionalEndpointsRevisionWeightsProperty {
}
export class RegionalEndpointsRevisionWeightsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegionalEndpointsRevisionWeightsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionalEndpointsRevisionWeightsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // revision_id - computed: true, optional: false, required: false
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }

    // weight - computed: true, optional: false, required: false
    public get weight() {
        return this.getNumberAttribute('weight');
    }
}

export class RegionalEndpointsRevisionWeightsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): RegionalEndpointsRevisionWeightsPropertyOutputReference {
        return new RegionalEndpointsRevisionWeightsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RegionalEndpointsScalingConfigProperty {
}
export class RegionalEndpointsScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegionalEndpointsScalingConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionalEndpointsScalingConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // max_environments - computed: true, optional: false, required: false
    public get maxEnvironments() {
        return this.getNumberAttribute('max_environments');
    }
}
export interface RegionalEndpointsThrottleConfigProperty {
}
export class RegionalEndpointsThrottleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegionalEndpointsThrottleConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionalEndpointsThrottleConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // rate_limit - computed: true, optional: false, required: false
    public get rateLimit() {
        return this.getNumberAttribute('rate_limit');
    }
}
export interface RegionalEndpointsProperty {
}
export class RegionalEndpointsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): RegionalEndpointsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionalEndpointsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // auth_type - computed: true, optional: false, required: false
    public get authType() {
        return this.getStringAttribute('auth_type');
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }

    // revision_weights - computed: true, optional: false, required: false
    private _revisionWeights = new RegionalEndpointsRevisionWeightsPropertyList(this, "revision_weights", false);
    public get revisionWeights() {
        return this._revisionWeights;
    }

    // scaling_config - computed: true, optional: false, required: false
    private _scalingConfig = new RegionalEndpointsScalingConfigPropertyOutputReference(this, "scaling_config");
    public get scalingConfig() {
        return this._scalingConfig;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }

    // throttle_config - computed: true, optional: false, required: false
    private _throttleConfig = new RegionalEndpointsThrottleConfigPropertyOutputReference(this, "throttle_config");
    public get throttleConfig() {
        return this._throttleConfig;
    }

    // update_status - computed: true, optional: false, required: false
    public get updateStatus() {
        return this.getStringAttribute('update_status');
    }

    // update_status_reason - computed: true, optional: false, required: false
    public get updateStatusReason() {
        return this.getStringAttribute('update_status_reason');
    }
}

export class RegionalEndpointsPropertyMap extends cdktn.ComplexMap {

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): RegionalEndpointsPropertyOutputReference {
        return new RegionalEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface RevisionWeightsProperty {
    /**
    * The revision identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#revision_id CcWebFunctionEndpoint#revision_id}
    */
    readonly revisionId?: string;
    /**
    * The traffic weight for this revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#weight CcWebFunctionEndpoint#weight}
    */
    readonly weight?: number;
}
export class RevisionWeightsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RevisionWeightsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._revisionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.revisionId = this._revisionId;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RevisionWeightsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._revisionId = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._revisionId = value.revisionId;
            this._weight = value.weight;
        }
    }

    // revision_id - computed: true, optional: true, required: false
    private _revisionId?: string; 
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }
    public set revisionId(value: string) {
        this._revisionId = value;
    }
    public resetRevisionId() {
        this._revisionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionIdInput() {
        return this._revisionId;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class RevisionWeightsPropertyList extends cdktn.ComplexList {
    public internalValue? : RevisionWeightsProperty[] | cdktn.IResolvable

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
    public get(index: number): RevisionWeightsPropertyOutputReference {
        return new RevisionWeightsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScalingConfigProperty {
    /**
    * The maximum number of concurrent execution environments for the endpoint. This optional limit further constrains the endpoint's scaling. When omitted, the endpoint's scaling is limited only by your account's vCPU quota.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#max_environments CcWebFunctionEndpoint#max_environments}
    */
    readonly maxEnvironments?: number;
}
export class ScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxEnvironments = this._maxEnvironments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxEnvironments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxEnvironments = value.maxEnvironments;
        }
    }

    // max_environments - computed: true, optional: true, required: false
    private _maxEnvironments?: number; 
    public get maxEnvironments() {
        return this.getNumberAttribute('max_environments');
    }
    public set maxEnvironments(value: number) {
        this._maxEnvironments = value;
    }
    public resetMaxEnvironments() {
        this._maxEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEnvironmentsInput() {
        return this._maxEnvironments;
    }
}
export interface ThrottleConfigProperty {
    /**
    * The maximum request rate per second for the endpoint, up to a maximum of 10000. This optional limit further constrains the endpoint's request rate. When omitted, the endpoint's request rate is limited only by your account's rate limit quota. Specify 0 to reject all new requests. Other supported values are 100 through 1000 in increments of 100, and 2000 through 10000 in increments of 1000. Supported values can vary by Region; if you specify an unsupported value, the error lists the values available in that Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/lambda_web_function_endpoint#rate_limit CcWebFunctionEndpoint#rate_limit}
    */
    readonly rateLimit?: number;
}
export class ThrottleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThrottleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateLimit = this._rateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThrottleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rateLimit = value.rateLimit;
        }
    }

    // rate_limit - computed: true, optional: true, required: false
    private _rateLimit?: number; 
    public get rateLimit() {
        return this.getNumberAttribute('rate_limit');
    }
    public set rateLimit(value: number) {
        this._rateLimit = value;
    }
    public resetRateLimit() {
        this._rateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateLimitInput() {
        return this._rateLimit;
    }
}
}
