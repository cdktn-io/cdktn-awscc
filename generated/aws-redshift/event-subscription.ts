// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventSubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#enabled CcEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the Amazon Redshift event categories to be published by the event notification subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#event_categories CcEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * Specifies the Amazon Redshift event severity to be published by the event notification subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#severity CcEventSubscription#severity}
    */
    readonly severity?: string;
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#sns_topic_arn CcEventSubscription#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * A list of one or more identifiers of Amazon Redshift source objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#source_ids CcEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * The type of source that will be generating the events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#source_type CcEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * The name of the Amazon Redshift event notification subscription
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#subscription_name CcEventSubscription#subscription_name}
    */
    readonly subscriptionName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#tags CcEventSubscription#tags}
    */
    readonly tags?: CcEventSubscription.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription awscc_redshift_event_subscription}
*/
export class CcEventSubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_event_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventSubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventSubscription to import
    * @param importFromId The id of the existing CcEventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventSubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_event_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription awscc_redshift_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventSubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcEventSubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_event_subscription',
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
        this._enabled = config.enabled;
        this._eventCategories = config.eventCategories;
        this._severity = config.severity;
        this._snsTopicArn = config.snsTopicArn;
        this._sourceIds = config.sourceIds;
        this._sourceType = config.sourceType;
        this._subscriptionName = config.subscriptionName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cust_subscription_id - computed: true, optional: false, required: false
    public get custSubscriptionId() {
        return this.getStringAttribute('cust_subscription_id');
    }

    // customer_aws_id - computed: true, optional: false, required: false
    public get customerAwsId() {
        return this.getStringAttribute('customer_aws_id');
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // event_categories - computed: true, optional: true, required: false
    private _eventCategories?: string[]; 
    public get eventCategories() {
        return cdktn.Fn.tolist(this.getListAttribute('event_categories'));
    }
    public set eventCategories(value: string[]) {
        this._eventCategories = value;
    }
    public resetEventCategories() {
        this._eventCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventCategoriesInput() {
        return this._eventCategories;
    }

    // event_categories_list - computed: true, optional: false, required: false
    public get eventCategoriesList() {
        return cdktn.Fn.tolist(this.getListAttribute('event_categories_list'));
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // severity - computed: true, optional: true, required: false
    private _severity?: string; 
    public get severity() {
        return this.getStringAttribute('severity');
    }
    public set severity(value: string) {
        this._severity = value;
    }
    public resetSeverity() {
        this._severity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
        return this._severity;
    }

    // sns_topic_arn - computed: true, optional: true, required: false
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }

    // source_ids - computed: true, optional: true, required: false
    private _sourceIds?: string[]; 
    public get sourceIds() {
        return this.getListAttribute('source_ids');
    }
    public set sourceIds(value: string[]) {
        this._sourceIds = value;
    }
    public resetSourceIds() {
        this._sourceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdsInput() {
        return this._sourceIds;
    }

    // source_ids_list - computed: true, optional: false, required: false
    public get sourceIdsList() {
        return this.getListAttribute('source_ids_list');
    }

    // source_type - computed: true, optional: true, required: false
    private _sourceType?: string; 
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string) {
        this._sourceType = value;
    }
    public resetSourceType() {
        this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
        return this._sourceType;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // subscription_creation_time - computed: true, optional: false, required: false
    public get subscriptionCreationTime() {
        return this.getStringAttribute('subscription_creation_time');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventSubscription.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventSubscription.TagProperty[] | cdktn.IResolvable) {
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
            enabled: cdktn.booleanToTerraform(this._enabled),
            event_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(this._eventCategories),
            severity: cdktn.stringToTerraform(this._severity),
            sns_topic_arn: cdktn.stringToTerraform(this._snsTopicArn),
            source_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sourceIds),
            source_type: cdktn.stringToTerraform(this._sourceType),
            subscription_name: cdktn.stringToTerraform(this._subscriptionName),
            tags: cdktn.listMapper(ccEventSubscriptionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            event_categories: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._eventCategories),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            severity: {
                value: cdktn.stringToHclTerraform(this._severity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sns_topic_arn: {
                value: cdktn.stringToHclTerraform(this._snsTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sourceIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            source_type: {
                value: cdktn.stringToHclTerraform(this._sourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subscription_name: {
                value: cdktn.stringToHclTerraform(this._subscriptionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventSubscriptionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventSubscription.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventSubscriptionTagPropertyToTerraform(struct?: CcEventSubscription.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventSubscriptionTagPropertyToHclTerraform(struct?: CcEventSubscription.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEventSubscription {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#key CcEventSubscription#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_event_subscription#value CcEventSubscription#value}
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
