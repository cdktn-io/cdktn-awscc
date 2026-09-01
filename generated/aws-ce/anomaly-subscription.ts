// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnomalySubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * The frequency at which anomaly reports are sent over email. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#frequency CcAnomalySubscription#frequency}
    */
    readonly frequency: string;
    /**
    * A list of cost anomaly monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#monitor_arn_list CcAnomalySubscription#monitor_arn_list}
    */
    readonly monitorArnList: string[];
    /**
    * Tags to assign to subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#resource_tags CcAnomalySubscription#resource_tags}
    */
    readonly resourceTags?: CcAnomalySubscription.ResourceTagProperty[] | cdktn.IResolvable;
    /**
    * A list of subscriber
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#subscribers CcAnomalySubscription#subscribers}
    */
    readonly subscribers: CcAnomalySubscription.SubscriberProperty[] | cdktn.IResolvable;
    /**
    * The name of the subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#subscription_name CcAnomalySubscription#subscription_name}
    */
    readonly subscriptionName: string;
    /**
    * The dollar value that triggers a notification if the threshold is exceeded. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#threshold CcAnomalySubscription#threshold}
    */
    readonly threshold?: number;
    /**
    * An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#threshold_expression CcAnomalySubscription#threshold_expression}
    */
    readonly thresholdExpression?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription awscc_ce_anomaly_subscription}
*/
export class CcAnomalySubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ce_anomaly_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnomalySubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnomalySubscription to import
    * @param importFromId The id of the existing CcAnomalySubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnomalySubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ce_anomaly_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription awscc_ce_anomaly_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnomalySubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcAnomalySubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ce_anomaly_subscription',
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
        this._frequency = config.frequency;
        this._monitorArnList = config.monitorArnList;
        this._resourceTags.internalValue = config.resourceTags;
        this._subscribers.internalValue = config.subscribers;
        this._subscriptionName = config.subscriptionName;
        this._threshold = config.threshold;
        this._thresholdExpression = config.thresholdExpression;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // frequency - computed: false, optional: false, required: true
    private _frequency?: string; 
    public get frequency() {
        return this.getStringAttribute('frequency');
    }
    public set frequency(value: string) {
        this._frequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // monitor_arn_list - computed: false, optional: false, required: true
    private _monitorArnList?: string[]; 
    public get monitorArnList() {
        return this.getListAttribute('monitor_arn_list');
    }
    public set monitorArnList(value: string[]) {
        this._monitorArnList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorArnListInput() {
        return this._monitorArnList;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcAnomalySubscription.ResourceTagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcAnomalySubscription.ResourceTagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // subscribers - computed: false, optional: false, required: true
    private _subscribers = new CcAnomalySubscription.SubscriberPropertyList(this, "subscribers", false);
    public get subscribers() {
        return this._subscribers;
    }
    public putSubscribers(value: CcAnomalySubscription.SubscriberProperty[] | cdktn.IResolvable) {
        this._subscribers.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscribersInput() {
        return this._subscribers.internalValue;
    }

    // subscription_arn - computed: true, optional: false, required: false
    public get subscriptionArn() {
        return this.getStringAttribute('subscription_arn');
    }

    // subscription_name - computed: false, optional: false, required: true
    private _subscriptionName?: string; 
    public get subscriptionName() {
        return this.getStringAttribute('subscription_name');
    }
    public set subscriptionName(value: string) {
        this._subscriptionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionNameInput() {
        return this._subscriptionName;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }

    // threshold_expression - computed: true, optional: true, required: false
    private _thresholdExpression?: string; 
    public get thresholdExpression() {
        return this.getStringAttribute('threshold_expression');
    }
    public set thresholdExpression(value: string) {
        this._thresholdExpression = value;
    }
    public resetThresholdExpression() {
        this._thresholdExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdExpressionInput() {
        return this._thresholdExpression;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            frequency: cdktn.stringToTerraform(this._frequency),
            monitor_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._monitorArnList),
            resource_tags: cdktn.listMapper(ccAnomalySubscriptionResourceTagPropertyToTerraform, false)(this._resourceTags.internalValue),
            subscribers: cdktn.listMapper(ccAnomalySubscriptionSubscriberPropertyToTerraform, false)(this._subscribers.internalValue),
            subscription_name: cdktn.stringToTerraform(this._subscriptionName),
            threshold: cdktn.numberToTerraform(this._threshold),
            threshold_expression: cdktn.stringToTerraform(this._thresholdExpression),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            frequency: {
                value: cdktn.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_arn_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._monitorArnList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccAnomalySubscriptionResourceTagPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnomalySubscription.ResourceTagPropertyList",
            },
            subscribers: {
                value: cdktn.listMapperHcl(ccAnomalySubscriptionSubscriberPropertyToHclTerraform, false)(this._subscribers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnomalySubscription.SubscriberPropertyList",
            },
            subscription_name: {
                value: cdktn.stringToHclTerraform(this._subscriptionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            threshold: {
                value: cdktn.numberToHclTerraform(this._threshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            threshold_expression: {
                value: cdktn.stringToHclTerraform(this._thresholdExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnomalySubscriptionResourceTagPropertyToTerraform(struct?: CcAnomalySubscription.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalySubscriptionResourceTagPropertyToHclTerraform(struct?: CcAnomalySubscription.ResourceTagProperty | cdktn.IResolvable): any {
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


export function ccAnomalySubscriptionSubscriberPropertyToTerraform(struct?: CcAnomalySubscription.SubscriberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address: cdktn.stringToTerraform(struct!.address),
        status: cdktn.stringToTerraform(struct!.status),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAnomalySubscriptionSubscriberPropertyToHclTerraform(struct?: CcAnomalySubscription.SubscriberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address: {
            value: cdktn.stringToHclTerraform(struct!.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export namespace CcAnomalySubscription {
export interface ResourceTagProperty {
    /**
    * The key name for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#key CcAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#value CcAnomalySubscription#value}
    */
    readonly value?: string;
}
export class ResourceTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
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

export class ResourceTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagPropertyOutputReference {
        return new ResourceTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SubscriberProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#address CcAnomalySubscription#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#status CcAnomalySubscription#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_subscription#type CcAnomalySubscription#type}
    */
    readonly type: string;
}
export class SubscriberPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubscriberProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubscriberProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._status = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._status = value.status;
            this._type = value.type;
        }
    }

    // address - computed: false, optional: false, required: true
    private _address?: string; 
    public get address() {
        return this.getStringAttribute('address');
    }
    public set address(value: string) {
        this._address = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class SubscriberPropertyList extends cdktn.ComplexList {
    public internalValue? : SubscriberProperty[] | cdktn.IResolvable

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
    public get(index: number): SubscriberPropertyOutputReference {
        return new SubscriberPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
