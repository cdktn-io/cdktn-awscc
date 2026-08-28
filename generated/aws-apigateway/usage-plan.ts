// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUsagePlanProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#api_stages CcUsagePlan#api_stages}
    */
    readonly apiStages?: CcUsagePlan.ApiStageProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#description CcUsagePlan#description}
    */
    readonly description?: string;
    /**
    * ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.
    *  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#quota CcUsagePlan#quota}
    */
    readonly quota?: CcUsagePlan.QuotaSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#tags CcUsagePlan#tags}
    */
    readonly tags?: CcUsagePlan.TagProperty[] | cdktn.IResolvable;
    /**
    * ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#throttle CcUsagePlan#throttle}
    */
    readonly throttle?: CcUsagePlan.ThrottleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#usage_plan_name CcUsagePlan#usage_plan_name}
    */
    readonly usagePlanName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan awscc_apigateway_usage_plan}
*/
export class CcUsagePlan extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_usage_plan";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUsagePlan resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUsagePlan to import
    * @param importFromId The id of the existing CcUsagePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUsagePlan to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_usage_plan", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan awscc_apigateway_usage_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUsagePlanProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcUsagePlanProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_usage_plan',
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
        this._apiStages.internalValue = config.apiStages;
        this._description = config.description;
        this._quota.internalValue = config.quota;
        this._tags.internalValue = config.tags;
        this._throttle.internalValue = config.throttle;
        this._usagePlanName = config.usagePlanName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_stages - computed: true, optional: true, required: false
    private _apiStages = new CcUsagePlan.ApiStagePropertyList(this, "api_stages", false);
    public get apiStages() {
        return this._apiStages;
    }
    public putApiStages(value: CcUsagePlan.ApiStageProperty[] | cdktn.IResolvable) {
        this._apiStages.internalValue = value;
    }
    public resetApiStages() {
        this._apiStages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiStagesInput() {
        return this._apiStages.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // quota - computed: true, optional: true, required: false
    private _quota = new CcUsagePlan.QuotaSettingsPropertyOutputReference(this, "quota");
    public get quota() {
        return this._quota;
    }
    public putQuota(value: CcUsagePlan.QuotaSettingsProperty) {
        this._quota.internalValue = value;
    }
    public resetQuota() {
        this._quota.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quotaInput() {
        return this._quota.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcUsagePlan.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcUsagePlan.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // throttle - computed: true, optional: true, required: false
    private _throttle = new CcUsagePlan.ThrottlePropertyOutputReference(this, "throttle");
    public get throttle() {
        return this._throttle;
    }
    public putThrottle(value: CcUsagePlan.ThrottleProperty) {
        this._throttle.internalValue = value;
    }
    public resetThrottle() {
        this._throttle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttleInput() {
        return this._throttle.internalValue;
    }

    // usage_plan_id - computed: true, optional: false, required: false
    public get usagePlanId() {
        return this.getStringAttribute('usage_plan_id');
    }

    // usage_plan_name - computed: true, optional: true, required: false
    private _usagePlanName?: string; 
    public get usagePlanName() {
        return this.getStringAttribute('usage_plan_name');
    }
    public set usagePlanName(value: string) {
        this._usagePlanName = value;
    }
    public resetUsagePlanName() {
        this._usagePlanName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usagePlanNameInput() {
        return this._usagePlanName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_stages: cdktn.listMapper(ccUsagePlanApiStagePropertyToTerraform, false)(this._apiStages.internalValue),
            description: cdktn.stringToTerraform(this._description),
            quota: ccUsagePlanQuotaSettingsPropertyToTerraform(this._quota.internalValue),
            tags: cdktn.listMapper(ccUsagePlanTagPropertyToTerraform, false)(this._tags.internalValue),
            throttle: ccUsagePlanThrottlePropertyToTerraform(this._throttle.internalValue),
            usage_plan_name: cdktn.stringToTerraform(this._usagePlanName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_stages: {
                value: cdktn.listMapperHcl(ccUsagePlanApiStagePropertyToHclTerraform, false)(this._apiStages.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUsagePlan.ApiStagePropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            quota: {
                value: ccUsagePlanQuotaSettingsPropertyToHclTerraform(this._quota.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUsagePlan.QuotaSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccUsagePlanTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUsagePlan.TagPropertyList",
            },
            throttle: {
                value: ccUsagePlanThrottlePropertyToHclTerraform(this._throttle.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUsagePlan.ThrottleProperty",
            },
            usage_plan_name: {
                value: cdktn.stringToHclTerraform(this._usagePlanName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUsagePlanThrottleSettingsPropertyToTerraform(struct?: CcUsagePlan.ThrottleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        burst_limit: cdktn.numberToTerraform(struct!.burstLimit),
        rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
    }
}


export function ccUsagePlanThrottleSettingsPropertyToHclTerraform(struct?: CcUsagePlan.ThrottleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        burst_limit: {
            value: cdktn.numberToHclTerraform(struct!.burstLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccUsagePlanApiStagePropertyToTerraform(struct?: CcUsagePlan.ApiStageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_id: cdktn.stringToTerraform(struct!.apiId),
        stage: cdktn.stringToTerraform(struct!.stage),
        throttle: cdktn.hashMapper(ccUsagePlanThrottleSettingsPropertyToTerraform)(struct!.throttle),
    }
}


export function ccUsagePlanApiStagePropertyToHclTerraform(struct?: CcUsagePlan.ApiStageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_id: {
            value: cdktn.stringToHclTerraform(struct!.apiId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stage: {
            value: cdktn.stringToHclTerraform(struct!.stage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        throttle: {
            value: cdktn.hashMapperHcl(ccUsagePlanThrottleSettingsPropertyToHclTerraform)(struct!.throttle),
            isBlock: true,
            type: "map",
            storageClassType: "ThrottleSettingsPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUsagePlanQuotaSettingsPropertyToTerraform(struct?: CcUsagePlan.QuotaSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        limit: cdktn.numberToTerraform(struct!.limit),
        offset: cdktn.numberToTerraform(struct!.offset),
        period: cdktn.stringToTerraform(struct!.period),
    }
}


export function ccUsagePlanQuotaSettingsPropertyToHclTerraform(struct?: CcUsagePlan.QuotaSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        limit: {
            value: cdktn.numberToHclTerraform(struct!.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        offset: {
            value: cdktn.numberToHclTerraform(struct!.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period: {
            value: cdktn.stringToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUsagePlanTagPropertyToTerraform(struct?: CcUsagePlan.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUsagePlanTagPropertyToHclTerraform(struct?: CcUsagePlan.TagProperty | cdktn.IResolvable): any {
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


export function ccUsagePlanThrottlePropertyToTerraform(struct?: CcUsagePlan.ThrottleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        burst_limit: cdktn.numberToTerraform(struct!.burstLimit),
        rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
    }
}


export function ccUsagePlanThrottlePropertyToHclTerraform(struct?: CcUsagePlan.ThrottleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        burst_limit: {
            value: cdktn.numberToHclTerraform(struct!.burstLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export namespace CcUsagePlan {
export interface ThrottleSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#burst_limit CcUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#rate_limit CcUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
}
export class ThrottleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ThrottleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._burstLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.burstLimit = this._burstLimit;
        }
        if (this._rateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateLimit = this._rateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThrottleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._burstLimit = undefined;
            this._rateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._burstLimit = value.burstLimit;
            this._rateLimit = value.rateLimit;
        }
    }

    // burst_limit - computed: true, optional: true, required: false
    private _burstLimit?: number; 
    public get burstLimit() {
        return this.getNumberAttribute('burst_limit');
    }
    public set burstLimit(value: number) {
        this._burstLimit = value;
    }
    public resetBurstLimit() {
        this._burstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get burstLimitInput() {
        return this._burstLimit;
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

export class ThrottleSettingsPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ThrottleSettingsProperty } | cdktn.IResolvable

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
    public get(key: string): ThrottleSettingsPropertyOutputReference {
        return new ThrottleSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface ApiStageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#api_id CcUsagePlan#api_id}
    */
    readonly apiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#stage CcUsagePlan#stage}
    */
    readonly stage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#throttle CcUsagePlan#throttle}
    */
    readonly throttle?: { [key: string]: ThrottleSettingsProperty } | cdktn.IResolvable;
}
export class ApiStagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ApiStageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiId !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiId = this._apiId;
        }
        if (this._stage !== undefined) {
            hasAnyValues = true;
            internalValueResult.stage = this._stage;
        }
        if (this._throttle?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttle = this._throttle?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiStageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiId = undefined;
            this._stage = undefined;
            this._throttle.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiId = value.apiId;
            this._stage = value.stage;
            this._throttle.internalValue = value.throttle;
        }
    }

    // api_id - computed: true, optional: true, required: false
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    public resetApiId() {
        this._apiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // stage - computed: true, optional: true, required: false
    private _stage?: string; 
    public get stage() {
        return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
        this._stage = value;
    }
    public resetStage() {
        this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
        return this._stage;
    }

    // throttle - computed: true, optional: true, required: false
    private _throttle = new ThrottleSettingsPropertyMap(this, "throttle");
    public get throttle() {
        return this._throttle;
    }
    public putThrottle(value: { [key: string]: ThrottleSettingsProperty } | cdktn.IResolvable) {
        this._throttle.internalValue = value;
    }
    public resetThrottle() {
        this._throttle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttleInput() {
        return this._throttle.internalValue;
    }
}

export class ApiStagePropertyList extends cdktn.ComplexList {
    public internalValue? : ApiStageProperty[] | cdktn.IResolvable

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
    public get(index: number): ApiStagePropertyOutputReference {
        return new ApiStagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QuotaSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#limit CcUsagePlan#limit}
    */
    readonly limit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#offset CcUsagePlan#offset}
    */
    readonly offset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#period CcUsagePlan#period}
    */
    readonly period?: string;
}
export class QuotaSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QuotaSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._limit !== undefined) {
            hasAnyValues = true;
            internalValueResult.limit = this._limit;
        }
        if (this._offset !== undefined) {
            hasAnyValues = true;
            internalValueResult.offset = this._offset;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QuotaSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limit = undefined;
            this._offset = undefined;
            this._period = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limit = value.limit;
            this._offset = value.offset;
            this._period = value.period;
        }
    }

    // limit - computed: true, optional: true, required: false
    private _limit?: number; 
    public get limit() {
        return this.getNumberAttribute('limit');
    }
    public set limit(value: number) {
        this._limit = value;
    }
    public resetLimit() {
        this._limit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitInput() {
        return this._limit;
    }

    // offset - computed: true, optional: true, required: false
    private _offset?: number; 
    public get offset() {
        return this.getNumberAttribute('offset');
    }
    public set offset(value: number) {
        this._offset = value;
    }
    public resetOffset() {
        this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInput() {
        return this._offset;
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
}
export interface TagProperty {
    /**
    * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#key CcUsagePlan#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#value CcUsagePlan#value}
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
export interface ThrottleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#burst_limit CcUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_usage_plan#rate_limit CcUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
}
export class ThrottlePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThrottleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._burstLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.burstLimit = this._burstLimit;
        }
        if (this._rateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateLimit = this._rateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThrottleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._burstLimit = undefined;
            this._rateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._burstLimit = value.burstLimit;
            this._rateLimit = value.rateLimit;
        }
    }

    // burst_limit - computed: true, optional: true, required: false
    private _burstLimit?: number; 
    public get burstLimit() {
        return this.getNumberAttribute('burst_limit');
    }
    public set burstLimit(value: number) {
        this._burstLimit = value;
    }
    public resetBurstLimit() {
        this._burstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get burstLimitInput() {
        return this._burstLimit;
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
