// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContinuousDeploymentPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Contains the configuration for a continuous deployment policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#continuous_deployment_policy_config CcContinuousDeploymentPolicy#continuous_deployment_policy_config}
    */
    readonly continuousDeploymentPolicyConfig: CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy}
*/
export class CcContinuousDeploymentPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_continuous_deployment_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContinuousDeploymentPolicy to import
    * @param importFromId The id of the existing CcContinuousDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContinuousDeploymentPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_continuous_deployment_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContinuousDeploymentPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcContinuousDeploymentPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_continuous_deployment_policy',
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
        this._continuousDeploymentPolicyConfig.internalValue = config.continuousDeploymentPolicyConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // continuous_deployment_policy_config - computed: false, optional: false, required: true
    private _continuousDeploymentPolicyConfig = new CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigPropertyOutputReference(this, "continuous_deployment_policy_config");
    public get continuousDeploymentPolicyConfig() {
        return this._continuousDeploymentPolicyConfig;
    }
    public putContinuousDeploymentPolicyConfig(value: CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigProperty) {
        this._continuousDeploymentPolicyConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get continuousDeploymentPolicyConfigInput() {
        return this._continuousDeploymentPolicyConfig.internalValue;
    }

    // continuous_deployment_policy_id - computed: true, optional: false, required: false
    public get continuousDeploymentPolicyId() {
        return this.getStringAttribute('continuous_deployment_policy_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            continuous_deployment_policy_config: ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigPropertyToTerraform(this._continuousDeploymentPolicyConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            continuous_deployment_policy_config: {
                value: ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigPropertyToHclTerraform(this._continuousDeploymentPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContinuousDeploymentPolicySingleHeaderPolicyConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.SingleHeaderPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.stringToTerraform(struct!.header),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContinuousDeploymentPolicySingleHeaderPolicyConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.SingleHeaderPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.stringToHclTerraform(struct!.header),
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


export function ccContinuousDeploymentPolicySessionStickinessConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.SessionStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_ttl: cdktn.numberToTerraform(struct!.idleTtl),
        maximum_ttl: cdktn.numberToTerraform(struct!.maximumTtl),
    }
}


export function ccContinuousDeploymentPolicySessionStickinessConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.SessionStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_ttl: {
            value: cdktn.numberToHclTerraform(struct!.idleTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_ttl: {
            value: cdktn.numberToHclTerraform(struct!.maximumTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContinuousDeploymentPolicySingleWeightPolicyConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.SingleWeightPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        session_stickiness_config: ccContinuousDeploymentPolicySessionStickinessConfigPropertyToTerraform(struct!.sessionStickinessConfig),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccContinuousDeploymentPolicySingleWeightPolicyConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.SingleWeightPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        session_stickiness_config: {
            value: ccContinuousDeploymentPolicySessionStickinessConfigPropertyToHclTerraform(struct!.sessionStickinessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionStickinessConfigProperty",
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


export function ccContinuousDeploymentPolicySingleHeaderConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.SingleHeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.stringToTerraform(struct!.header),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContinuousDeploymentPolicySingleHeaderConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.SingleHeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.stringToHclTerraform(struct!.header),
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


export function ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_ttl: cdktn.numberToTerraform(struct!.idleTtl),
        maximum_ttl: cdktn.numberToTerraform(struct!.maximumTtl),
    }
}


export function ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_ttl: {
            value: cdktn.numberToHclTerraform(struct!.idleTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_ttl: {
            value: cdktn.numberToHclTerraform(struct!.maximumTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContinuousDeploymentPolicySingleWeightConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.SingleWeightConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        session_stickiness_config: ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigPropertyToTerraform(struct!.sessionStickinessConfig),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccContinuousDeploymentPolicySingleWeightConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.SingleWeightConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        session_stickiness_config: {
            value: ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigPropertyToHclTerraform(struct!.sessionStickinessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty",
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


export function ccContinuousDeploymentPolicyTrafficConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.TrafficConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        single_header_config: ccContinuousDeploymentPolicySingleHeaderConfigPropertyToTerraform(struct!.singleHeaderConfig),
        single_weight_config: ccContinuousDeploymentPolicySingleWeightConfigPropertyToTerraform(struct!.singleWeightConfig),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccContinuousDeploymentPolicyTrafficConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.TrafficConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        single_header_config: {
            value: ccContinuousDeploymentPolicySingleHeaderConfigPropertyToHclTerraform(struct!.singleHeaderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SingleHeaderConfigProperty",
        },
        single_weight_config: {
            value: ccContinuousDeploymentPolicySingleWeightConfigPropertyToHclTerraform(struct!.singleWeightConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SingleWeightConfigProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigPropertyToTerraform(struct?: CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        single_header_policy_config: ccContinuousDeploymentPolicySingleHeaderPolicyConfigPropertyToTerraform(struct!.singleHeaderPolicyConfig),
        single_weight_policy_config: ccContinuousDeploymentPolicySingleWeightPolicyConfigPropertyToTerraform(struct!.singleWeightPolicyConfig),
        staging_distribution_dns_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stagingDistributionDnsNames),
        traffic_config: ccContinuousDeploymentPolicyTrafficConfigPropertyToTerraform(struct!.trafficConfig),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccContinuousDeploymentPolicyContinuousDeploymentPolicyConfigPropertyToHclTerraform(struct?: CcContinuousDeploymentPolicy.ContinuousDeploymentPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        single_header_policy_config: {
            value: ccContinuousDeploymentPolicySingleHeaderPolicyConfigPropertyToHclTerraform(struct!.singleHeaderPolicyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SingleHeaderPolicyConfigProperty",
        },
        single_weight_policy_config: {
            value: ccContinuousDeploymentPolicySingleWeightPolicyConfigPropertyToHclTerraform(struct!.singleWeightPolicyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SingleWeightPolicyConfigProperty",
        },
        staging_distribution_dns_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stagingDistributionDnsNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        traffic_config: {
            value: ccContinuousDeploymentPolicyTrafficConfigPropertyToHclTerraform(struct!.trafficConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TrafficConfigProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcContinuousDeploymentPolicy {
export interface SingleHeaderPolicyConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#header CcContinuousDeploymentPolicy#header}
    */
    readonly header?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#value CcContinuousDeploymentPolicy#value}
    */
    readonly value?: string;
}
export class SingleHeaderPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleHeaderPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleHeaderPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
            this._value = value.value;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: string; 
    public get header() {
        return this.getStringAttribute('header');
    }
    public set header(value: string) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
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
export interface SessionStickinessConfigProperty {
    /**
    * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300?3600 seconds (5?60 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CcContinuousDeploymentPolicy#idle_ttl}
    */
    readonly idleTtl?: number;
    /**
    * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300?3600 seconds (5?60 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CcContinuousDeploymentPolicy#maximum_ttl}
    */
    readonly maximumTtl?: number;
}
export class SessionStickinessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionStickinessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTtl = this._idleTtl;
        }
        if (this._maximumTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumTtl = this._maximumTtl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionStickinessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTtl = undefined;
            this._maximumTtl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTtl = value.idleTtl;
            this._maximumTtl = value.maximumTtl;
        }
    }

    // idle_ttl - computed: true, optional: true, required: false
    private _idleTtl?: number; 
    public get idleTtl() {
        return this.getNumberAttribute('idle_ttl');
    }
    public set idleTtl(value: number) {
        this._idleTtl = value;
    }
    public resetIdleTtl() {
        this._idleTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTtlInput() {
        return this._idleTtl;
    }

    // maximum_ttl - computed: true, optional: true, required: false
    private _maximumTtl?: number; 
    public get maximumTtl() {
        return this.getNumberAttribute('maximum_ttl');
    }
    public set maximumTtl(value: number) {
        this._maximumTtl = value;
    }
    public resetMaximumTtl() {
        this._maximumTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumTtlInput() {
        return this._maximumTtl;
    }
}
export interface SingleWeightPolicyConfigProperty {
    /**
    * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CcContinuousDeploymentPolicy#session_stickiness_config}
    */
    readonly sessionStickinessConfig?: SessionStickinessConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#weight CcContinuousDeploymentPolicy#weight}
    */
    readonly weight?: number;
}
export class SingleWeightPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleWeightPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sessionStickinessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionStickinessConfig = this._sessionStickinessConfig?.internalValue;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleWeightPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sessionStickinessConfig.internalValue = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sessionStickinessConfig.internalValue = value.sessionStickinessConfig;
            this._weight = value.weight;
        }
    }

    // session_stickiness_config - computed: true, optional: true, required: false
    private _sessionStickinessConfig = new SessionStickinessConfigPropertyOutputReference(this, "session_stickiness_config");
    public get sessionStickinessConfig() {
        return this._sessionStickinessConfig;
    }
    public putSessionStickinessConfig(value: SessionStickinessConfigProperty) {
        this._sessionStickinessConfig.internalValue = value;
    }
    public resetSessionStickinessConfig() {
        this._sessionStickinessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionStickinessConfigInput() {
        return this._sessionStickinessConfig.internalValue;
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
export interface SingleHeaderConfigProperty {
    /**
    * The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix ``aws-cf-cd-``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#header CcContinuousDeploymentPolicy#header}
    */
    readonly header?: string;
    /**
    * The request header value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#value CcContinuousDeploymentPolicy#value}
    */
    readonly value?: string;
}
export class SingleHeaderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleHeaderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleHeaderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
            this._value = value.value;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: string; 
    public get header() {
        return this.getStringAttribute('header');
    }
    public set header(value: string) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
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
export interface ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty {
    /**
    * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300?3600 seconds (5?60 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CcContinuousDeploymentPolicy#idle_ttl}
    */
    readonly idleTtl?: number;
    /**
    * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300?3600 seconds (5?60 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CcContinuousDeploymentPolicy#maximum_ttl}
    */
    readonly maximumTtl?: number;
}
export class ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTtl = this._idleTtl;
        }
        if (this._maximumTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumTtl = this._maximumTtl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTtl = undefined;
            this._maximumTtl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTtl = value.idleTtl;
            this._maximumTtl = value.maximumTtl;
        }
    }

    // idle_ttl - computed: true, optional: true, required: false
    private _idleTtl?: number; 
    public get idleTtl() {
        return this.getNumberAttribute('idle_ttl');
    }
    public set idleTtl(value: number) {
        this._idleTtl = value;
    }
    public resetIdleTtl() {
        this._idleTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTtlInput() {
        return this._idleTtl;
    }

    // maximum_ttl - computed: true, optional: true, required: false
    private _maximumTtl?: number; 
    public get maximumTtl() {
        return this.getNumberAttribute('maximum_ttl');
    }
    public set maximumTtl(value: number) {
        this._maximumTtl = value;
    }
    public resetMaximumTtl() {
        this._maximumTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumTtlInput() {
        return this._maximumTtl;
    }
}
export interface SingleWeightConfigProperty {
    /**
    * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CcContinuousDeploymentPolicy#session_stickiness_config}
    */
    readonly sessionStickinessConfig?: ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty;
    /**
    * The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#weight CcContinuousDeploymentPolicy#weight}
    */
    readonly weight?: number;
}
export class SingleWeightConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleWeightConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sessionStickinessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionStickinessConfig = this._sessionStickinessConfig?.internalValue;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleWeightConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sessionStickinessConfig.internalValue = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sessionStickinessConfig.internalValue = value.sessionStickinessConfig;
            this._weight = value.weight;
        }
    }

    // session_stickiness_config - computed: true, optional: true, required: false
    private _sessionStickinessConfig = new ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigPropertyOutputReference(this, "session_stickiness_config");
    public get sessionStickinessConfig() {
        return this._sessionStickinessConfig;
    }
    public putSessionStickinessConfig(value: ContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigProperty) {
        this._sessionStickinessConfig.internalValue = value;
    }
    public resetSessionStickinessConfig() {
        this._sessionStickinessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionStickinessConfigInput() {
        return this._sessionStickinessConfig.internalValue;
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
export interface TrafficConfigProperty {
    /**
    * Determines which HTTP requests are sent to the staging distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CcContinuousDeploymentPolicy#single_header_config}
    */
    readonly singleHeaderConfig?: SingleHeaderConfigProperty;
    /**
    * Contains the percentage of traffic to send to the staging distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CcContinuousDeploymentPolicy#single_weight_config}
    */
    readonly singleWeightConfig?: SingleWeightConfigProperty;
    /**
    * The type of traffic configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#type CcContinuousDeploymentPolicy#type}
    */
    readonly type?: string;
}
export class TrafficConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrafficConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._singleHeaderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleHeaderConfig = this._singleHeaderConfig?.internalValue;
        }
        if (this._singleWeightConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleWeightConfig = this._singleWeightConfig?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._singleHeaderConfig.internalValue = undefined;
            this._singleWeightConfig.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._singleHeaderConfig.internalValue = value.singleHeaderConfig;
            this._singleWeightConfig.internalValue = value.singleWeightConfig;
            this._type = value.type;
        }
    }

    // single_header_config - computed: true, optional: true, required: false
    private _singleHeaderConfig = new SingleHeaderConfigPropertyOutputReference(this, "single_header_config");
    public get singleHeaderConfig() {
        return this._singleHeaderConfig;
    }
    public putSingleHeaderConfig(value: SingleHeaderConfigProperty) {
        this._singleHeaderConfig.internalValue = value;
    }
    public resetSingleHeaderConfig() {
        this._singleHeaderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleHeaderConfigInput() {
        return this._singleHeaderConfig.internalValue;
    }

    // single_weight_config - computed: true, optional: true, required: false
    private _singleWeightConfig = new SingleWeightConfigPropertyOutputReference(this, "single_weight_config");
    public get singleWeightConfig() {
        return this._singleWeightConfig;
    }
    public putSingleWeightConfig(value: SingleWeightConfigProperty) {
        this._singleWeightConfig.internalValue = value;
    }
    public resetSingleWeightConfig() {
        this._singleWeightConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleWeightConfigInput() {
        return this._singleWeightConfig.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface ContinuousDeploymentPolicyConfigProperty {
    /**
    * A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is ``true``, this policy is enabled and in effect. When this value is ``false``, this policy is not enabled and has no effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CcContinuousDeploymentPolicy#enabled}
    */
    readonly enabled: boolean | cdktn.IResolvable;
    /**
    * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_policy_config CcContinuousDeploymentPolicy#single_header_policy_config}
    */
    readonly singleHeaderPolicyConfig?: SingleHeaderPolicyConfigProperty;
    /**
    * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_policy_config CcContinuousDeploymentPolicy#single_weight_policy_config}
    */
    readonly singleWeightPolicyConfig?: SingleWeightPolicyConfigProperty;
    /**
    * The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CcContinuousDeploymentPolicy#staging_distribution_dns_names}
    */
    readonly stagingDistributionDnsNames: string[];
    /**
    * Contains the parameters for routing production traffic from your primary to staging distributions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CcContinuousDeploymentPolicy#traffic_config}
    */
    readonly trafficConfig?: TrafficConfigProperty;
    /**
    * The type of traffic configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_continuous_deployment_policy#type CcContinuousDeploymentPolicy#type}
    */
    readonly type?: string;
}
export class ContinuousDeploymentPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContinuousDeploymentPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._singleHeaderPolicyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleHeaderPolicyConfig = this._singleHeaderPolicyConfig?.internalValue;
        }
        if (this._singleWeightPolicyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleWeightPolicyConfig = this._singleWeightPolicyConfig?.internalValue;
        }
        if (this._stagingDistributionDnsNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.stagingDistributionDnsNames = this._stagingDistributionDnsNames;
        }
        if (this._trafficConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trafficConfig = this._trafficConfig?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContinuousDeploymentPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._singleHeaderPolicyConfig.internalValue = undefined;
            this._singleWeightPolicyConfig.internalValue = undefined;
            this._stagingDistributionDnsNames = undefined;
            this._trafficConfig.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._singleHeaderPolicyConfig.internalValue = value.singleHeaderPolicyConfig;
            this._singleWeightPolicyConfig.internalValue = value.singleWeightPolicyConfig;
            this._stagingDistributionDnsNames = value.stagingDistributionDnsNames;
            this._trafficConfig.internalValue = value.trafficConfig;
            this._type = value.type;
        }
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // single_header_policy_config - computed: true, optional: true, required: false
    private _singleHeaderPolicyConfig = new SingleHeaderPolicyConfigPropertyOutputReference(this, "single_header_policy_config");
    public get singleHeaderPolicyConfig() {
        return this._singleHeaderPolicyConfig;
    }
    public putSingleHeaderPolicyConfig(value: SingleHeaderPolicyConfigProperty) {
        this._singleHeaderPolicyConfig.internalValue = value;
    }
    public resetSingleHeaderPolicyConfig() {
        this._singleHeaderPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleHeaderPolicyConfigInput() {
        return this._singleHeaderPolicyConfig.internalValue;
    }

    // single_weight_policy_config - computed: true, optional: true, required: false
    private _singleWeightPolicyConfig = new SingleWeightPolicyConfigPropertyOutputReference(this, "single_weight_policy_config");
    public get singleWeightPolicyConfig() {
        return this._singleWeightPolicyConfig;
    }
    public putSingleWeightPolicyConfig(value: SingleWeightPolicyConfigProperty) {
        this._singleWeightPolicyConfig.internalValue = value;
    }
    public resetSingleWeightPolicyConfig() {
        this._singleWeightPolicyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleWeightPolicyConfigInput() {
        return this._singleWeightPolicyConfig.internalValue;
    }

    // staging_distribution_dns_names - computed: false, optional: false, required: true
    private _stagingDistributionDnsNames?: string[]; 
    public get stagingDistributionDnsNames() {
        return this.getListAttribute('staging_distribution_dns_names');
    }
    public set stagingDistributionDnsNames(value: string[]) {
        this._stagingDistributionDnsNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stagingDistributionDnsNamesInput() {
        return this._stagingDistributionDnsNames;
    }

    // traffic_config - computed: true, optional: true, required: false
    private _trafficConfig = new TrafficConfigPropertyOutputReference(this, "traffic_config");
    public get trafficConfig() {
        return this._trafficConfig;
    }
    public putTrafficConfig(value: TrafficConfigProperty) {
        this._trafficConfig.internalValue = value;
    }
    public resetTrafficConfig() {
        this._trafficConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficConfigInput() {
        return this._trafficConfig.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
}
