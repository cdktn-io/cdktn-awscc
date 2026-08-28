// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventSubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#enabled CcEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * A list of event categories for a SourceType that you want to subscribe to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#event_categories CcEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#sns_topic_arn CcEventSubscription#sns_topic_arn}
    */
    readonly snsTopicArn: string;
    /**
    * The list of identifiers of the event sources for which events are returned
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#source_ids CcEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * The type of source that is generating the events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#source_type CcEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * The name of the subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#subscription_name CcEventSubscription#subscription_name}
    */
    readonly subscriptionName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription awscc_docdb_event_subscription}
*/
export class CcEventSubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_docdb_event_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventSubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventSubscription to import
    * @param importFromId The id of the existing CcEventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventSubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_docdb_event_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdb_event_subscription awscc_docdb_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventSubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcEventSubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_docdb_event_subscription',
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
        this._snsTopicArn = config.snsTopicArn;
        this._sourceIds = config.sourceIds;
        this._sourceType = config.sourceType;
        this._subscriptionName = config.subscriptionName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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
        return this.getListAttribute('event_categories');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // sns_topic_arn - computed: false, optional: false, required: true
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
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

    // subscription_name - computed: true, optional: true, required: false
    private _subscriptionName?: string; 
    public get subscriptionName() {
        return this.getStringAttribute('subscription_name');
    }
    public set subscriptionName(value: string) {
        this._subscriptionName = value;
    }
    public resetSubscriptionName() {
        this._subscriptionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionNameInput() {
        return this._subscriptionName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            enabled: cdktn.booleanToTerraform(this._enabled),
            event_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(this._eventCategories),
            sns_topic_arn: cdktn.stringToTerraform(this._snsTopicArn),
            source_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sourceIds),
            source_type: cdktn.stringToTerraform(this._sourceType),
            subscription_name: cdktn.stringToTerraform(this._subscriptionName),
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
                type: "list",
                storageClassType: "stringList",
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcEventSubscription {
}
