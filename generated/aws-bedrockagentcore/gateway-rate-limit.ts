// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayRateLimitProps extends cdktn.TerraformMetaArguments {
    /**
    * Optional human-readable description for this limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#description CcGatewayRateLimit#description}
    */
    readonly description?: string;
    /**
    * Ordered list of dimension names defining the scope of this limit.
    * Unique per gateway — no two limits can share the same dimensionKeys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys CcGatewayRateLimit#dimension_keys}
    */
    readonly dimensionKeys: string[];
    /**
    * Rule entries mapping dimension values to rate configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries CcGatewayRateLimit#entries}
    */
    readonly entries: CcGatewayRateLimit.LimitEntryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier CcGatewayRateLimit#gateway_identifier}
    */
    readonly gatewayIdentifier?: string;
    /**
    * Limit identifier. Optional on Create (system-generates if not provided by customer).
    * Always present in responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id CcGatewayRateLimit#rate_limit_id}
    */
    readonly rateLimitId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}
*/
export class CcGatewayRateLimit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_gateway_rate_limit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGatewayRateLimit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGatewayRateLimit to import
    * @param importFromId The id of the existing CcGatewayRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGatewayRateLimit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_gateway_rate_limit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayRateLimitProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayRateLimitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_gateway_rate_limit',
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
        this._description = config.description;
        this._dimensionKeys = config.dimensionKeys;
        this._entries.internalValue = config.entries;
        this._gatewayIdentifier = config.gatewayIdentifier;
        this._rateLimitId = config.rateLimitId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // dimension_keys - computed: false, optional: false, required: true
    private _dimensionKeys?: string[]; 
    public get dimensionKeys() {
        return this.getListAttribute('dimension_keys');
    }
    public set dimensionKeys(value: string[]) {
        this._dimensionKeys = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionKeysInput() {
        return this._dimensionKeys;
    }

    // entries - computed: false, optional: false, required: true
    private _entries = new CcGatewayRateLimit.LimitEntryPropertyList(this, "entries", false);
    public get entries() {
        return this._entries;
    }
    public putEntries(value: CcGatewayRateLimit.LimitEntryProperty[] | cdktn.IResolvable) {
        this._entries.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entriesInput() {
        return this._entries.internalValue;
    }

    // gateway_identifier - computed: true, optional: true, required: false
    private _gatewayIdentifier?: string; 
    public get gatewayIdentifier() {
        return this.getStringAttribute('gateway_identifier');
    }
    public set gatewayIdentifier(value: string) {
        this._gatewayIdentifier = value;
    }
    public resetGatewayIdentifier() {
        this._gatewayIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIdentifierInput() {
        return this._gatewayIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rate_limit_id - computed: true, optional: true, required: false
    private _rateLimitId?: string; 
    public get rateLimitId() {
        return this.getStringAttribute('rate_limit_id');
    }
    public set rateLimitId(value: string) {
        this._rateLimitId = value;
    }
    public resetRateLimitId() {
        this._rateLimitId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateLimitIdInput() {
        return this._rateLimitId;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
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
            description: cdktn.stringToTerraform(this._description),
            dimension_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dimensionKeys),
            entries: cdktn.listMapper(ccGatewayRateLimitLimitEntryPropertyToTerraform, false)(this._entries.internalValue),
            gateway_identifier: cdktn.stringToTerraform(this._gatewayIdentifier),
            rate_limit_id: cdktn.stringToTerraform(this._rateLimitId),
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
            dimension_keys: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dimensionKeys),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            entries: {
                value: cdktn.listMapperHcl(ccGatewayRateLimitLimitEntryPropertyToHclTerraform, false)(this._entries.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGatewayRateLimit.LimitEntryPropertyList",
            },
            gateway_identifier: {
                value: cdktn.stringToHclTerraform(this._gatewayIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rate_limit_id: {
                value: cdktn.stringToHclTerraform(this._rateLimitId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGatewayRateLimitRateConfigPropertyToTerraform(struct?: CcGatewayRateLimit.RateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.stringToTerraform(struct!.period),
        rate: cdktn.numberToTerraform(struct!.rate),
    }
}


export function ccGatewayRateLimitRateConfigPropertyToHclTerraform(struct?: CcGatewayRateLimit.RateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.stringToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktn.numberToHclTerraform(struct!.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRateLimitRequestsPropertyToTerraform(struct?: CcGatewayRateLimit.RequestsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.stringToTerraform(struct!.period),
        rate: cdktn.numberToTerraform(struct!.rate),
    }
}


export function ccGatewayRateLimitRequestsPropertyToHclTerraform(struct?: CcGatewayRateLimit.RequestsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.stringToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktn.numberToHclTerraform(struct!.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRateLimitTokensPropertyToTerraform(struct?: CcGatewayRateLimit.TokensProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.stringToTerraform(struct!.period),
        rate: cdktn.numberToTerraform(struct!.rate),
    }
}


export function ccGatewayRateLimitTokensPropertyToHclTerraform(struct?: CcGatewayRateLimit.TokensProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.stringToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktn.numberToHclTerraform(struct!.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayRateLimitLimitEntryPropertyToTerraform(struct?: CcGatewayRateLimit.LimitEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connections: cdktn.listMapper(ccGatewayRateLimitRateConfigPropertyToTerraform, false)(struct!.connections),
        dimensions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dimensions),
        requests: cdktn.listMapper(ccGatewayRateLimitRequestsPropertyToTerraform, false)(struct!.requests),
        tokens: cdktn.listMapper(ccGatewayRateLimitTokensPropertyToTerraform, false)(struct!.tokens),
    }
}


export function ccGatewayRateLimitLimitEntryPropertyToHclTerraform(struct?: CcGatewayRateLimit.LimitEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connections: {
            value: cdktn.listMapperHcl(ccGatewayRateLimitRateConfigPropertyToHclTerraform, false)(struct!.connections),
            isBlock: true,
            type: "list",
            storageClassType: "RateConfigPropertyList",
        },
        dimensions: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dimensions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        requests: {
            value: cdktn.listMapperHcl(ccGatewayRateLimitRequestsPropertyToHclTerraform, false)(struct!.requests),
            isBlock: true,
            type: "list",
            storageClassType: "RequestsPropertyList",
        },
        tokens: {
            value: cdktn.listMapperHcl(ccGatewayRateLimitTokensPropertyToHclTerraform, false)(struct!.tokens),
            isBlock: true,
            type: "list",
            storageClassType: "TokensPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGatewayRateLimit {
export interface RateConfigProperty {
    /**
    * Time period for rate limiting
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#period CcGatewayRateLimit#period}
    */
    readonly period?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate CcGatewayRateLimit#rate}
    */
    readonly rate?: number;
}
export class RateConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RateConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RateConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._rate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._rate = value.rate;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: string; 
    public get period() {
        return this.getStringAttribute('period');
    }
    public set period(value: string) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // rate - computed: true, optional: true, required: false
    private _rate?: number; 
    public get rate() {
        return this.getNumberAttribute('rate');
    }
    public set rate(value: number) {
        this._rate = value;
    }
    public resetRate() {
        this._rate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateInput() {
        return this._rate;
    }
}

export class RateConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : RateConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): RateConfigPropertyOutputReference {
        return new RateConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RequestsProperty {
    /**
    * Time period for rate limiting
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#period CcGatewayRateLimit#period}
    */
    readonly period?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate CcGatewayRateLimit#rate}
    */
    readonly rate?: number;
}
export class RequestsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RequestsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequestsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._rate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._rate = value.rate;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: string; 
    public get period() {
        return this.getStringAttribute('period');
    }
    public set period(value: string) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // rate - computed: true, optional: true, required: false
    private _rate?: number; 
    public get rate() {
        return this.getNumberAttribute('rate');
    }
    public set rate(value: number) {
        this._rate = value;
    }
    public resetRate() {
        this._rate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateInput() {
        return this._rate;
    }
}

export class RequestsPropertyList extends cdktn.ComplexList {
    public internalValue? : RequestsProperty[] | cdktn.IResolvable

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
    public get(index: number): RequestsPropertyOutputReference {
        return new RequestsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TokensProperty {
    /**
    * Time period for rate limiting
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#period CcGatewayRateLimit#period}
    */
    readonly period?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate CcGatewayRateLimit#rate}
    */
    readonly rate?: number;
}
export class TokensPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TokensProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._rate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rate = this._rate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TokensProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._rate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._rate = value.rate;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: string; 
    public get period() {
        return this.getStringAttribute('period');
    }
    public set period(value: string) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // rate - computed: true, optional: true, required: false
    private _rate?: number; 
    public get rate() {
        return this.getNumberAttribute('rate');
    }
    public set rate(value: number) {
        this._rate = value;
    }
    public resetRate() {
        this._rate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateInput() {
        return this._rate;
    }
}

export class TokensPropertyList extends cdktn.ComplexList {
    public internalValue? : TokensProperty[] | cdktn.IResolvable

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
    public get(index: number): TokensPropertyOutputReference {
        return new TokensPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LimitEntryProperty {
    /**
    * Connection rate limits (per second only). Limited to 1 entry for now. — P2
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#connections CcGatewayRateLimit#connections}
    */
    readonly connections?: RateConfigProperty[] | cdktn.IResolvable;
    /**
    * Map of dimension name to dimension value for a rule entry
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimensions CcGatewayRateLimit#dimensions}
    */
    readonly dimensions: { [key: string]: string };
    /**
    * Request rate limits (RPS or RPM). Limited to 1 entry for now.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#requests CcGatewayRateLimit#requests}
    */
    readonly requests?: RequestsProperty[] | cdktn.IResolvable;
    /**
    * Token rate limits (TPM). Limited to 1 entry for now. — P1
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_gateway_rate_limit#tokens CcGatewayRateLimit#tokens}
    */
    readonly tokens?: TokensProperty[] | cdktn.IResolvable;
}
export class LimitEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LimitEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connections?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connections = this._connections?.internalValue;
        }
        if (this._dimensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
        if (this._requests?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requests = this._requests?.internalValue;
        }
        if (this._tokens?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokens = this._tokens?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LimitEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connections.internalValue = undefined;
            this._dimensions = undefined;
            this._requests.internalValue = undefined;
            this._tokens.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connections.internalValue = value.connections;
            this._dimensions = value.dimensions;
            this._requests.internalValue = value.requests;
            this._tokens.internalValue = value.tokens;
        }
    }

    // connections - computed: true, optional: true, required: false
    private _connections = new RateConfigPropertyList(this, "connections", false);
    public get connections() {
        return this._connections;
    }
    public putConnections(value: RateConfigProperty[] | cdktn.IResolvable) {
        this._connections.internalValue = value;
    }
    public resetConnections() {
        this._connections.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsInput() {
        return this._connections.internalValue;
    }

    // dimensions - computed: false, optional: false, required: true
    private _dimensions?: { [key: string]: string }; 
    public get dimensions() {
        return this.getStringMapAttribute('dimensions');
    }
    public set dimensions(value: { [key: string]: string }) {
        this._dimensions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions;
    }

    // requests - computed: true, optional: true, required: false
    private _requests = new RequestsPropertyList(this, "requests", false);
    public get requests() {
        return this._requests;
    }
    public putRequests(value: RequestsProperty[] | cdktn.IResolvable) {
        this._requests.internalValue = value;
    }
    public resetRequests() {
        this._requests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestsInput() {
        return this._requests.internalValue;
    }

    // tokens - computed: true, optional: true, required: false
    private _tokens = new TokensPropertyList(this, "tokens", false);
    public get tokens() {
        return this._tokens;
    }
    public putTokens(value: TokensProperty[] | cdktn.IResolvable) {
        this._tokens.internalValue = value;
    }
    public resetTokens() {
        this._tokens.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokensInput() {
        return this._tokens.internalValue;
    }
}

export class LimitEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : LimitEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): LimitEntryPropertyOutputReference {
        return new LimitEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
