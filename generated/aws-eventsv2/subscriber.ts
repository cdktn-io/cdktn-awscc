// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubscriberProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration for batching events into a single delivery to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#batch_configuration CcSubscriber#batch_configuration}
    */
    readonly batchConfiguration?: CcSubscriber.BatchConfigurationProperty;
    /**
    * A description of the subscriber. Control characters and Unicode line separators are not allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#description CcSubscriber#description}
    */
    readonly description?: string;
    /**
    * The ARN of the event bus this subscriber belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_arn CcSubscriber#event_bus_arn}
    */
    readonly eventBusArn: string;
    /**
    * Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filter_configuration CcSubscriber#filter_configuration}
    */
    readonly filterConfiguration?: CcSubscriber.FilterConfigurationProperty;
    /**
    * Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invoke_configuration CcSubscriber#invoke_configuration}
    */
    readonly invokeConfiguration: CcSubscriber.InvokeConfigurationProperty;
    /**
    * Delivery logging configuration for the subscriber.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#log_configuration CcSubscriber#log_configuration}
    */
    readonly logConfiguration?: CcSubscriber.LogConfigurationProperty;
    /**
    * The name of the subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name CcSubscriber#name}
    */
    readonly name: string;
    /**
    * The destination for events that could not be delivered to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#on_failure_configuration CcSubscriber#on_failure_configuration}
    */
    readonly onFailureConfiguration?: CcSubscriber.OnFailureConfigurationProperty;
    /**
    * The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_in_time_configuration CcSubscriber#point_in_time_configuration}
    */
    readonly pointInTimeConfiguration?: CcSubscriber.PointInTimeConfigurationProperty;
    /**
    * Resume-time control, never returned by the service. Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#resume_position CcSubscriber#resume_position}
    */
    readonly resumePosition?: string;
    /**
    * The retry policy for failed deliveries to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_policy CcSubscriber#retry_policy}
    */
    readonly retryPolicy?: CcSubscriber.RetryPolicyProperty;
    /**
    * Where the subscriber starts reading events: LATEST starts from the newest events; POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_position CcSubscriber#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * The run state of the subscriber. Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#state CcSubscriber#state}
    */
    readonly state?: string;
    /**
    * The tags assigned to the subscriber.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tags CcSubscriber#tags}
    */
    readonly tags?: CcSubscriber.TagsProperty[] | cdktn.IResolvable;
    /**
    * Configuration for transforming events before delivery to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#transformer CcSubscriber#transformer}
    */
    readonly transformer?: CcSubscriber.TransformerProperty;
    /**
    * The delivery ordering mode of the subscriber. FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type CcSubscriber#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber awscc_eventsv2_subscriber}
*/
export class CcSubscriber extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eventsv2_subscriber";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubscriber resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubscriber to import
    * @param importFromId The id of the existing CcSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubscriber to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_subscriber", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber awscc_eventsv2_subscriber} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubscriberProps
    */
    public constructor(scope: Construct, id: string, config: CcSubscriberProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eventsv2_subscriber',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._batchConfiguration.internalValue = config.batchConfiguration;
        this._description = config.description;
        this._eventBusArn = config.eventBusArn;
        this._filterConfiguration.internalValue = config.filterConfiguration;
        this._invokeConfiguration.internalValue = config.invokeConfiguration;
        this._logConfiguration.internalValue = config.logConfiguration;
        this._name = config.name;
        this._onFailureConfiguration.internalValue = config.onFailureConfiguration;
        this._pointInTimeConfiguration.internalValue = config.pointInTimeConfiguration;
        this._resumePosition = config.resumePosition;
        this._retryPolicy.internalValue = config.retryPolicy;
        this._startingPosition = config.startingPosition;
        this._state = config.state;
        this._tags.internalValue = config.tags;
        this._transformer.internalValue = config.transformer;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // batch_configuration - computed: true, optional: true, required: false
    private _batchConfiguration = new CcSubscriber.BatchConfigurationPropertyOutputReference(this, "batch_configuration");
    public get batchConfiguration() {
        return this._batchConfiguration;
    }
    public putBatchConfiguration(value: CcSubscriber.BatchConfigurationProperty) {
        this._batchConfiguration.internalValue = value;
    }
    public resetBatchConfiguration() {
        this._batchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchConfigurationInput() {
        return this._batchConfiguration.internalValue;
    }

    // bus_name - computed: true, optional: false, required: false
    public get busName() {
        return this.getStringAttribute('bus_name');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // event_bus_arn - computed: false, optional: false, required: true
    private _eventBusArn?: string; 
    public get eventBusArn() {
        return this.getStringAttribute('event_bus_arn');
    }
    public set eventBusArn(value: string) {
        this._eventBusArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusArnInput() {
        return this._eventBusArn;
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new CcSubscriber.FilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: CcSubscriber.FilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invoke_configuration - computed: false, optional: false, required: true
    private _invokeConfiguration = new CcSubscriber.InvokeConfigurationPropertyOutputReference(this, "invoke_configuration");
    public get invokeConfiguration() {
        return this._invokeConfiguration;
    }
    public putInvokeConfiguration(value: CcSubscriber.InvokeConfigurationProperty) {
        this._invokeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeConfigurationInput() {
        return this._invokeConfiguration.internalValue;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new CcSubscriber.LogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: CcSubscriber.LogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // on_failure_configuration - computed: true, optional: true, required: false
    private _onFailureConfiguration = new CcSubscriber.OnFailureConfigurationPropertyOutputReference(this, "on_failure_configuration");
    public get onFailureConfiguration() {
        return this._onFailureConfiguration;
    }
    public putOnFailureConfiguration(value: CcSubscriber.OnFailureConfigurationProperty) {
        this._onFailureConfiguration.internalValue = value;
    }
    public resetOnFailureConfiguration() {
        this._onFailureConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureConfigurationInput() {
        return this._onFailureConfiguration.internalValue;
    }

    // point_in_time_configuration - computed: true, optional: true, required: false
    private _pointInTimeConfiguration = new CcSubscriber.PointInTimeConfigurationPropertyOutputReference(this, "point_in_time_configuration");
    public get pointInTimeConfiguration() {
        return this._pointInTimeConfiguration;
    }
    public putPointInTimeConfiguration(value: CcSubscriber.PointInTimeConfigurationProperty) {
        this._pointInTimeConfiguration.internalValue = value;
    }
    public resetPointInTimeConfiguration() {
        this._pointInTimeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointInTimeConfigurationInput() {
        return this._pointInTimeConfiguration.internalValue;
    }

    // resume_position - computed: true, optional: true, required: false
    private _resumePosition?: string; 
    public get resumePosition() {
        return this.getStringAttribute('resume_position');
    }
    public set resumePosition(value: string) {
        this._resumePosition = value;
    }
    public resetResumePosition() {
        this._resumePosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resumePositionInput() {
        return this._resumePosition;
    }

    // retry_policy - computed: true, optional: true, required: false
    private _retryPolicy = new CcSubscriber.RetryPolicyPropertyOutputReference(this, "retry_policy");
    public get retryPolicy() {
        return this._retryPolicy;
    }
    public putRetryPolicy(value: CcSubscriber.RetryPolicyProperty) {
        this._retryPolicy.internalValue = value;
    }
    public resetRetryPolicy() {
        this._retryPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
        return this._retryPolicy.internalValue;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition?: string; 
    public get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string) {
        this._startingPosition = value;
    }
    public resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // subscriber_arn - computed: true, optional: false, required: false
    public get subscriberArn() {
        return this.getStringAttribute('subscriber_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSubscriber.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSubscriber.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transformer - computed: true, optional: true, required: false
    private _transformer = new CcSubscriber.TransformerPropertyOutputReference(this, "transformer");
    public get transformer() {
        return this._transformer;
    }
    public putTransformer(value: CcSubscriber.TransformerProperty) {
        this._transformer.internalValue = value;
    }
    public resetTransformer() {
        this._transformer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformerInput() {
        return this._transformer.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            batch_configuration: ccSubscriberBatchConfigurationPropertyToTerraform(this._batchConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            event_bus_arn: cdktn.stringToTerraform(this._eventBusArn),
            filter_configuration: ccSubscriberFilterConfigurationPropertyToTerraform(this._filterConfiguration.internalValue),
            invoke_configuration: ccSubscriberInvokeConfigurationPropertyToTerraform(this._invokeConfiguration.internalValue),
            log_configuration: ccSubscriberLogConfigurationPropertyToTerraform(this._logConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            on_failure_configuration: ccSubscriberOnFailureConfigurationPropertyToTerraform(this._onFailureConfiguration.internalValue),
            point_in_time_configuration: ccSubscriberPointInTimeConfigurationPropertyToTerraform(this._pointInTimeConfiguration.internalValue),
            resume_position: cdktn.stringToTerraform(this._resumePosition),
            retry_policy: ccSubscriberRetryPolicyPropertyToTerraform(this._retryPolicy.internalValue),
            starting_position: cdktn.stringToTerraform(this._startingPosition),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.listMapper(ccSubscriberTagsPropertyToTerraform, false)(this._tags.internalValue),
            transformer: ccSubscriberTransformerPropertyToTerraform(this._transformer.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            batch_configuration: {
                value: ccSubscriberBatchConfigurationPropertyToHclTerraform(this._batchConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.BatchConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_bus_arn: {
                value: cdktn.stringToHclTerraform(this._eventBusArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_configuration: {
                value: ccSubscriberFilterConfigurationPropertyToHclTerraform(this._filterConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.FilterConfigurationProperty",
            },
            invoke_configuration: {
                value: ccSubscriberInvokeConfigurationPropertyToHclTerraform(this._invokeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.InvokeConfigurationProperty",
            },
            log_configuration: {
                value: ccSubscriberLogConfigurationPropertyToHclTerraform(this._logConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.LogConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            on_failure_configuration: {
                value: ccSubscriberOnFailureConfigurationPropertyToHclTerraform(this._onFailureConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.OnFailureConfigurationProperty",
            },
            point_in_time_configuration: {
                value: ccSubscriberPointInTimeConfigurationPropertyToHclTerraform(this._pointInTimeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.PointInTimeConfigurationProperty",
            },
            resume_position: {
                value: cdktn.stringToHclTerraform(this._resumePosition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retry_policy: {
                value: ccSubscriberRetryPolicyPropertyToHclTerraform(this._retryPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.RetryPolicyProperty",
            },
            starting_position: {
                value: cdktn.stringToHclTerraform(this._startingPosition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSubscriberTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSubscriber.TagsPropertyList",
            },
            transformer: {
                value: ccSubscriberTransformerPropertyToHclTerraform(this._transformer.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriber.TransformerProperty",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSubscriberBatchConfigurationPropertyToTerraform(struct?: CcSubscriber.BatchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_batch_size: cdktn.numberToTerraform(struct!.maxBatchSize),
        max_batch_window_in_seconds: cdktn.numberToTerraform(struct!.maxBatchWindowInSeconds),
    }
}


export function ccSubscriberBatchConfigurationPropertyToHclTerraform(struct?: CcSubscriber.BatchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_batch_size: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_batch_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberFiltersPropertyToTerraform(struct?: CcSubscriber.FiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern: cdktn.stringToTerraform(struct!.pattern),
        scope: cdktn.stringToTerraform(struct!.scope),
    }
}


export function ccSubscriberFiltersPropertyToHclTerraform(struct?: CcSubscriber.FiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberFilterConfigurationPropertyToTerraform(struct?: CcSubscriber.FilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccSubscriberFiltersPropertyToTerraform, false)(struct!.filters),
        language: cdktn.stringToTerraform(struct!.language),
    }
}


export function ccSubscriberFilterConfigurationPropertyToHclTerraform(struct?: CcSubscriber.FilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccSubscriberFiltersPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "FiltersPropertyList",
        },
        language: {
            value: cdktn.stringToHclTerraform(struct!.language),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberDeduplicationConfigurationPropertyToTerraform(struct?: CcSubscriber.DeduplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deduplication_type: cdktn.stringToTerraform(struct!.deduplicationType),
    }
}


export function ccSubscriberDeduplicationConfigurationPropertyToHclTerraform(struct?: CcSubscriber.DeduplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deduplication_type: {
            value: cdktn.stringToHclTerraform(struct!.deduplicationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberSystemMetadataPropertyToTerraform(struct?: CcSubscriber.SystemMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deduplication_id: cdktn.stringToTerraform(struct!.deduplicationId),
        event_group_id: cdktn.stringToTerraform(struct!.eventGroupId),
    }
}


export function ccSubscriberSystemMetadataPropertyToHclTerraform(struct?: CcSubscriber.SystemMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deduplication_id: {
            value: cdktn.stringToHclTerraform(struct!.deduplicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_group_id: {
            value: cdktn.stringToHclTerraform(struct!.eventGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberEventBusV2ParametersPropertyToTerraform(struct?: CcSubscriber.EventBusV2ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deduplication_configuration: ccSubscriberDeduplicationConfigurationPropertyToTerraform(struct!.deduplicationConfiguration),
        metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
        system_metadata: ccSubscriberSystemMetadataPropertyToTerraform(struct!.systemMetadata),
    }
}


export function ccSubscriberEventBusV2ParametersPropertyToHclTerraform(struct?: CcSubscriber.EventBusV2ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deduplication_configuration: {
            value: ccSubscriberDeduplicationConfigurationPropertyToHclTerraform(struct!.deduplicationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DeduplicationConfigurationProperty",
        },
        metadata: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        system_metadata: {
            value: ccSubscriberSystemMetadataPropertyToHclTerraform(struct!.systemMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "SystemMetadataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberHttpParametersPropertyToTerraform(struct?: CcSubscriber.HttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
        invocation_timeout_seconds: cdktn.stringToTerraform(struct!.invocationTimeoutSeconds),
        path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
        query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
    }
}


export function ccSubscriberHttpParametersPropertyToHclTerraform(struct?: CcSubscriber.HttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        invocation_timeout_seconds: {
            value: cdktn.stringToHclTerraform(struct!.invocationTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path_parameter_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_string_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberKinesisParametersPropertyToTerraform(struct?: CcSubscriber.KinesisParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        explicit_hash_key: cdktn.stringToTerraform(struct!.explicitHashKey),
        partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    }
}


export function ccSubscriberKinesisParametersPropertyToHclTerraform(struct?: CcSubscriber.KinesisParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        explicit_hash_key: {
            value: cdktn.stringToHclTerraform(struct!.explicitHashKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_key: {
            value: cdktn.stringToHclTerraform(struct!.partitionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberLambdaParametersPropertyToTerraform(struct?: CcSubscriber.LambdaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        durable_execution_name: cdktn.stringToTerraform(struct!.durableExecutionName),
        invocation_timeout_seconds: cdktn.stringToTerraform(struct!.invocationTimeoutSeconds),
        invocation_type: cdktn.stringToTerraform(struct!.invocationType),
        qualifier: cdktn.stringToTerraform(struct!.qualifier),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    }
}


export function ccSubscriberLambdaParametersPropertyToHclTerraform(struct?: CcSubscriber.LambdaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        durable_execution_name: {
            value: cdktn.stringToHclTerraform(struct!.durableExecutionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_timeout_seconds: {
            value: cdktn.stringToHclTerraform(struct!.invocationTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_type: {
            value: cdktn.stringToHclTerraform(struct!.invocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifier: {
            value: cdktn.stringToHclTerraform(struct!.qualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_id: {
            value: cdktn.stringToHclTerraform(struct!.tenantId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberInvokeConfigurationSnsParametersMessageAttributesPropertyToTerraform(struct?: CcSubscriber.InvokeConfigurationSnsParametersMessageAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        binary_value: cdktn.stringToTerraform(struct!.binaryValue),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccSubscriberInvokeConfigurationSnsParametersMessageAttributesPropertyToHclTerraform(struct?: CcSubscriber.InvokeConfigurationSnsParametersMessageAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        binary_value: {
            value: cdktn.stringToHclTerraform(struct!.binaryValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberSnsParametersPropertyToTerraform(struct?: CcSubscriber.SnsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_attributes: cdktn.hashMapper(ccSubscriberInvokeConfigurationSnsParametersMessageAttributesPropertyToTerraform)(struct!.messageAttributes),
        message_deduplication_id: cdktn.stringToTerraform(struct!.messageDeduplicationId),
        message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
        message_structure: cdktn.stringToTerraform(struct!.messageStructure),
        subject: cdktn.stringToTerraform(struct!.subject),
    }
}


export function ccSubscriberSnsParametersPropertyToHclTerraform(struct?: CcSubscriber.SnsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_attributes: {
            value: cdktn.hashMapperHcl(ccSubscriberInvokeConfigurationSnsParametersMessageAttributesPropertyToHclTerraform)(struct!.messageAttributes),
            isBlock: true,
            type: "map",
            storageClassType: "InvokeConfigurationSnsParametersMessageAttributesPropertyMap",
        },
        message_deduplication_id: {
            value: cdktn.stringToHclTerraform(struct!.messageDeduplicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_group_id: {
            value: cdktn.stringToHclTerraform(struct!.messageGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_structure: {
            value: cdktn.stringToHclTerraform(struct!.messageStructure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject: {
            value: cdktn.stringToHclTerraform(struct!.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberInvokeConfigurationSqsParametersMessageAttributesPropertyToTerraform(struct?: CcSubscriber.InvokeConfigurationSqsParametersMessageAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        binary_value: cdktn.stringToTerraform(struct!.binaryValue),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccSubscriberInvokeConfigurationSqsParametersMessageAttributesPropertyToHclTerraform(struct?: CcSubscriber.InvokeConfigurationSqsParametersMessageAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        binary_value: {
            value: cdktn.stringToHclTerraform(struct!.binaryValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberMessageSystemAttributesPropertyToTerraform(struct?: CcSubscriber.MessageSystemAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        binary_value: cdktn.stringToTerraform(struct!.binaryValue),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccSubscriberMessageSystemAttributesPropertyToHclTerraform(struct?: CcSubscriber.MessageSystemAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        binary_value: {
            value: cdktn.stringToHclTerraform(struct!.binaryValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberSqsParametersPropertyToTerraform(struct?: CcSubscriber.SqsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delay_seconds: cdktn.stringToTerraform(struct!.delaySeconds),
        message_attributes: cdktn.hashMapper(ccSubscriberInvokeConfigurationSqsParametersMessageAttributesPropertyToTerraform)(struct!.messageAttributes),
        message_deduplication_id: cdktn.stringToTerraform(struct!.messageDeduplicationId),
        message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
        message_system_attributes: cdktn.hashMapper(ccSubscriberMessageSystemAttributesPropertyToTerraform)(struct!.messageSystemAttributes),
    }
}


export function ccSubscriberSqsParametersPropertyToHclTerraform(struct?: CcSubscriber.SqsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delay_seconds: {
            value: cdktn.stringToHclTerraform(struct!.delaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_attributes: {
            value: cdktn.hashMapperHcl(ccSubscriberInvokeConfigurationSqsParametersMessageAttributesPropertyToHclTerraform)(struct!.messageAttributes),
            isBlock: true,
            type: "map",
            storageClassType: "InvokeConfigurationSqsParametersMessageAttributesPropertyMap",
        },
        message_deduplication_id: {
            value: cdktn.stringToHclTerraform(struct!.messageDeduplicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_group_id: {
            value: cdktn.stringToHclTerraform(struct!.messageGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_system_attributes: {
            value: cdktn.hashMapperHcl(ccSubscriberMessageSystemAttributesPropertyToHclTerraform)(struct!.messageSystemAttributes),
            isBlock: true,
            type: "map",
            storageClassType: "MessageSystemAttributesPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberStepFunctionsParametersPropertyToTerraform(struct?: CcSubscriber.StepFunctionsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invocation_timeout_seconds: cdktn.stringToTerraform(struct!.invocationTimeoutSeconds),
        invocation_type: cdktn.stringToTerraform(struct!.invocationType),
        name: cdktn.stringToTerraform(struct!.name),
        trace_header: cdktn.stringToTerraform(struct!.traceHeader),
    }
}


export function ccSubscriberStepFunctionsParametersPropertyToHclTerraform(struct?: CcSubscriber.StepFunctionsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invocation_timeout_seconds: {
            value: cdktn.stringToHclTerraform(struct!.invocationTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_type: {
            value: cdktn.stringToHclTerraform(struct!.invocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trace_header: {
            value: cdktn.stringToHclTerraform(struct!.traceHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberUniversalTargetParametersPropertyToTerraform(struct?: CcSubscriber.UniversalTargetParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input: cdktn.stringToTerraform(struct!.input),
        invocation_timeout_seconds: cdktn.stringToTerraform(struct!.invocationTimeoutSeconds),
    }
}


export function ccSubscriberUniversalTargetParametersPropertyToHclTerraform(struct?: CcSubscriber.UniversalTargetParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input: {
            value: cdktn.stringToHclTerraform(struct!.input),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_timeout_seconds: {
            value: cdktn.stringToHclTerraform(struct!.invocationTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberInvokeConfigurationPropertyToTerraform(struct?: CcSubscriber.InvokeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_bus_v2_parameters: ccSubscriberEventBusV2ParametersPropertyToTerraform(struct!.eventBusV2Parameters),
        http_parameters: ccSubscriberHttpParametersPropertyToTerraform(struct!.httpParameters),
        kinesis_parameters: ccSubscriberKinesisParametersPropertyToTerraform(struct!.kinesisParameters),
        lambda_parameters: ccSubscriberLambdaParametersPropertyToTerraform(struct!.lambdaParameters),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        sns_parameters: ccSubscriberSnsParametersPropertyToTerraform(struct!.snsParameters),
        sqs_parameters: ccSubscriberSqsParametersPropertyToTerraform(struct!.sqsParameters),
        step_functions_parameters: ccSubscriberStepFunctionsParametersPropertyToTerraform(struct!.stepFunctionsParameters),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
        universal_target_parameters: ccSubscriberUniversalTargetParametersPropertyToTerraform(struct!.universalTargetParameters),
    }
}


export function ccSubscriberInvokeConfigurationPropertyToHclTerraform(struct?: CcSubscriber.InvokeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_bus_v2_parameters: {
            value: ccSubscriberEventBusV2ParametersPropertyToHclTerraform(struct!.eventBusV2Parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "EventBusV2ParametersProperty",
        },
        http_parameters: {
            value: ccSubscriberHttpParametersPropertyToHclTerraform(struct!.httpParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpParametersProperty",
        },
        kinesis_parameters: {
            value: ccSubscriberKinesisParametersPropertyToHclTerraform(struct!.kinesisParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisParametersProperty",
        },
        lambda_parameters: {
            value: ccSubscriberLambdaParametersPropertyToHclTerraform(struct!.lambdaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaParametersProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sns_parameters: {
            value: ccSubscriberSnsParametersPropertyToHclTerraform(struct!.snsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsParametersProperty",
        },
        sqs_parameters: {
            value: ccSubscriberSqsParametersPropertyToHclTerraform(struct!.sqsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsParametersProperty",
        },
        step_functions_parameters: {
            value: ccSubscriberStepFunctionsParametersPropertyToHclTerraform(struct!.stepFunctionsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "StepFunctionsParametersProperty",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        universal_target_parameters: {
            value: ccSubscriberUniversalTargetParametersPropertyToHclTerraform(struct!.universalTargetParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "UniversalTargetParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberLogConfigurationPropertyToTerraform(struct?: CcSubscriber.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_payload: cdktn.stringToTerraform(struct!.includePayload),
        level: cdktn.stringToTerraform(struct!.level),
    }
}


export function ccSubscriberLogConfigurationPropertyToHclTerraform(struct?: CcSubscriber.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_payload: {
            value: cdktn.stringToHclTerraform(struct!.includePayload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        level: {
            value: cdktn.stringToHclTerraform(struct!.level),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberOnFailureConfigurationPropertyToTerraform(struct?: CcSubscriber.OnFailureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccSubscriberOnFailureConfigurationPropertyToHclTerraform(struct?: CcSubscriber.OnFailureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberPointInTimeConfigurationPropertyToTerraform(struct?: CcSubscriber.PointInTimeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_point: cdktn.numberToTerraform(struct!.endPoint),
        point_type: cdktn.stringToTerraform(struct!.pointType),
        starting_point: cdktn.numberToTerraform(struct!.startingPoint),
    }
}


export function ccSubscriberPointInTimeConfigurationPropertyToHclTerraform(struct?: CcSubscriber.PointInTimeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_point: {
            value: cdktn.numberToHclTerraform(struct!.endPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        point_type: {
            value: cdktn.stringToHclTerraform(struct!.pointType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        starting_point: {
            value: cdktn.numberToHclTerraform(struct!.startingPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberRetryPolicyPropertyToTerraform(struct?: CcSubscriber.RetryPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_event_age_in_seconds: cdktn.numberToTerraform(struct!.maxEventAgeInSeconds),
        max_retry_attempts: cdktn.numberToTerraform(struct!.maxRetryAttempts),
        retry_strategy: cdktn.stringToTerraform(struct!.retryStrategy),
    }
}


export function ccSubscriberRetryPolicyPropertyToHclTerraform(struct?: CcSubscriber.RetryPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_event_age_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxEventAgeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_retry_attempts: {
            value: cdktn.numberToHclTerraform(struct!.maxRetryAttempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retry_strategy: {
            value: cdktn.stringToHclTerraform(struct!.retryStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberTagsPropertyToTerraform(struct?: CcSubscriber.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSubscriberTagsPropertyToHclTerraform(struct?: CcSubscriber.TagsProperty | cdktn.IResolvable): any {
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


export function ccSubscriberJsonataConfigurationPropertyToTerraform(struct?: CcSubscriber.JsonataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
    }
}


export function ccSubscriberJsonataConfigurationPropertyToHclTerraform(struct?: CcSubscriber.JsonataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberTransformerPropertyToTerraform(struct?: CcSubscriber.TransformerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        jsonata_configuration: ccSubscriberJsonataConfigurationPropertyToTerraform(struct!.jsonataConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSubscriberTransformerPropertyToHclTerraform(struct?: CcSubscriber.TransformerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        jsonata_configuration: {
            value: ccSubscriberJsonataConfigurationPropertyToHclTerraform(struct!.jsonataConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "JsonataConfigurationProperty",
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


export namespace CcSubscriber {
export interface BatchConfigurationProperty {
    /**
    * The maximum number of events in a single batch delivered to the target. The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_size CcSubscriber#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * The maximum time in seconds to wait for a batch to fill before delivering it, 0-300. The default is 0 (no wait). The resolved value applied by the service is returned on read.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_window_in_seconds CcSubscriber#max_batch_window_in_seconds}
    */
    readonly maxBatchWindowInSeconds?: number;
}
export class BatchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxBatchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchSize = this._maxBatchSize;
        }
        if (this._maxBatchWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchWindowInSeconds = this._maxBatchWindowInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxBatchSize = undefined;
            this._maxBatchWindowInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxBatchSize = value.maxBatchSize;
            this._maxBatchWindowInSeconds = value.maxBatchWindowInSeconds;
        }
    }

    // max_batch_size - computed: true, optional: true, required: false
    private _maxBatchSize?: number; 
    public get maxBatchSize() {
        return this.getNumberAttribute('max_batch_size');
    }
    public set maxBatchSize(value: number) {
        this._maxBatchSize = value;
    }
    public resetMaxBatchSize() {
        this._maxBatchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchSizeInput() {
        return this._maxBatchSize;
    }

    // max_batch_window_in_seconds - computed: true, optional: true, required: false
    private _maxBatchWindowInSeconds?: number; 
    public get maxBatchWindowInSeconds() {
        return this.getNumberAttribute('max_batch_window_in_seconds');
    }
    public set maxBatchWindowInSeconds(value: number) {
        this._maxBatchWindowInSeconds = value;
    }
    public resetMaxBatchWindowInSeconds() {
        this._maxBatchWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchWindowInSecondsInput() {
        return this._maxBatchWindowInSeconds;
    }
}
export interface FiltersProperty {
    /**
    * The event pattern, as a JSON string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#pattern CcSubscriber#pattern}
    */
    readonly pattern?: string;
    /**
    * Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#scope CcSubscriber#scope}
    */
    readonly scope?: string;
}
export class FiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pattern = undefined;
            this._scope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pattern = value.pattern;
            this._scope = value.scope;
        }
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }
}

export class FiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : FiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): FiltersPropertyOutputReference {
        return new FiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterConfigurationProperty {
    /**
    * The list of filters, 1-50 entries. An event must match every filter to be delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filters CcSubscriber#filters}
    */
    readonly filters?: FiltersProperty[] | cdktn.IResolvable;
    /**
    * The filter language. The default is EVENT_BRIDGE_PATTERN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#language CcSubscriber#language}
    */
    readonly language?: string;
}
export class FilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        if (this._language !== undefined) {
            hasAnyValues = true;
            internalValueResult.language = this._language;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
            this._language = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
            this._language = value.language;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new FiltersPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: FiltersProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }

    // language - computed: true, optional: true, required: false
    private _language?: string; 
    public get language() {
        return this.getStringAttribute('language');
    }
    public set language(value: string) {
        this._language = value;
    }
    public resetLanguage() {
        this._language = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageInput() {
        return this._language;
    }
}
export interface DeduplicationConfigurationProperty {
    /**
    * How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content. To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_type CcSubscriber#deduplication_type}
    */
    readonly deduplicationType?: string;
}
export class DeduplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeduplicationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deduplicationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deduplicationType = this._deduplicationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeduplicationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deduplicationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deduplicationType = value.deduplicationType;
        }
    }

    // deduplication_type - computed: true, optional: true, required: false
    private _deduplicationType?: string; 
    public get deduplicationType() {
        return this.getStringAttribute('deduplication_type');
    }
    public set deduplicationType(value: string) {
        this._deduplicationType = value;
    }
    public resetDeduplicationType() {
        this._deduplicationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deduplicationTypeInput() {
        return this._deduplicationType;
    }
}
export interface SystemMetadataProperty {
    /**
    * The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_id CcSubscriber#deduplication_id}
    */
    readonly deduplicationId?: string;
    /**
    * The event group ID for FIFO ordering on the downstream event bus. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_group_id CcSubscriber#event_group_id}
    */
    readonly eventGroupId?: string;
}
export class SystemMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SystemMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deduplicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deduplicationId = this._deduplicationId;
        }
        if (this._eventGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventGroupId = this._eventGroupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deduplicationId = undefined;
            this._eventGroupId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deduplicationId = value.deduplicationId;
            this._eventGroupId = value.eventGroupId;
        }
    }

    // deduplication_id - computed: true, optional: true, required: false
    private _deduplicationId?: string; 
    public get deduplicationId() {
        return this.getStringAttribute('deduplication_id');
    }
    public set deduplicationId(value: string) {
        this._deduplicationId = value;
    }
    public resetDeduplicationId() {
        this._deduplicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deduplicationIdInput() {
        return this._deduplicationId;
    }

    // event_group_id - computed: true, optional: true, required: false
    private _eventGroupId?: string; 
    public get eventGroupId() {
        return this.getStringAttribute('event_group_id');
    }
    public set eventGroupId(value: string) {
        this._eventGroupId = value;
    }
    public resetEventGroupId() {
        this._eventGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventGroupIdInput() {
        return this._eventGroupId;
    }
}
export interface EventBusV2ParametersProperty {
    /**
    * Deduplication settings applied to the forwarded events on the downstream event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_configuration CcSubscriber#deduplication_configuration}
    */
    readonly deduplicationConfiguration?: DeduplicationConfigurationProperty;
    /**
    * Metadata forwarded with each event, as key-value string pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#metadata CcSubscriber#metadata}
    */
    readonly metadata?: { [key: string]: string };
    /**
    * System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#system_metadata CcSubscriber#system_metadata}
    */
    readonly systemMetadata?: SystemMetadataProperty;
}
export class EventBusV2ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBusV2ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deduplicationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deduplicationConfiguration = this._deduplicationConfiguration?.internalValue;
        }
        if (this._metadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        if (this._systemMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemMetadata = this._systemMetadata?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBusV2ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deduplicationConfiguration.internalValue = undefined;
            this._metadata = undefined;
            this._systemMetadata.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deduplicationConfiguration.internalValue = value.deduplicationConfiguration;
            this._metadata = value.metadata;
            this._systemMetadata.internalValue = value.systemMetadata;
        }
    }

    // deduplication_configuration - computed: true, optional: true, required: false
    private _deduplicationConfiguration = new DeduplicationConfigurationPropertyOutputReference(this, "deduplication_configuration");
    public get deduplicationConfiguration() {
        return this._deduplicationConfiguration;
    }
    public putDeduplicationConfiguration(value: DeduplicationConfigurationProperty) {
        this._deduplicationConfiguration.internalValue = value;
    }
    public resetDeduplicationConfiguration() {
        this._deduplicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deduplicationConfigurationInput() {
        return this._deduplicationConfiguration.internalValue;
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: { [key: string]: string }; 
    public get metadata() {
        return this.getStringMapAttribute('metadata');
    }
    public set metadata(value: { [key: string]: string }) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
    }

    // system_metadata - computed: true, optional: true, required: false
    private _systemMetadata = new SystemMetadataPropertyOutputReference(this, "system_metadata");
    public get systemMetadata() {
        return this._systemMetadata;
    }
    public putSystemMetadata(value: SystemMetadataProperty) {
        this._systemMetadata.internalValue = value;
    }
    public resetSystemMetadata() {
        this._systemMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemMetadataInput() {
        return this._systemMetadata.internalValue;
    }
}
export interface HttpParametersProperty {
    /**
    * HTTP headers to add to the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#header_parameters CcSubscriber#header_parameters}
    */
    readonly headerParameters?: { [key: string]: string };
    /**
    * The timeout in seconds for each invocation of the target, written as a string. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds CcSubscriber#invocation_timeout_seconds}
    */
    readonly invocationTimeoutSeconds?: string;
    /**
    * Values for the path parameters (wildcards) in the target URL, in order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#path_parameter_values CcSubscriber#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Query string parameters to add to the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#query_string_parameters CcSubscriber#query_string_parameters}
    */
    readonly queryStringParameters?: { [key: string]: string };
}
export class HttpParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters;
        }
        if (this._invocationTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationTimeoutSeconds = this._invocationTimeoutSeconds;
        }
        if (this._pathParameterValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathParameterValues = this._pathParameterValues;
        }
        if (this._queryStringParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerParameters = undefined;
            this._invocationTimeoutSeconds = undefined;
            this._pathParameterValues = undefined;
            this._queryStringParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerParameters = value.headerParameters;
            this._invocationTimeoutSeconds = value.invocationTimeoutSeconds;
            this._pathParameterValues = value.pathParameterValues;
            this._queryStringParameters = value.queryStringParameters;
        }
    }

    // header_parameters - computed: true, optional: true, required: false
    private _headerParameters?: { [key: string]: string }; 
    public get headerParameters() {
        return this.getStringMapAttribute('header_parameters');
    }
    public set headerParameters(value: { [key: string]: string }) {
        this._headerParameters = value;
    }
    public resetHeaderParameters() {
        this._headerParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
        return this._headerParameters;
    }

    // invocation_timeout_seconds - computed: true, optional: true, required: false
    private _invocationTimeoutSeconds?: string; 
    public get invocationTimeoutSeconds() {
        return this.getStringAttribute('invocation_timeout_seconds');
    }
    public set invocationTimeoutSeconds(value: string) {
        this._invocationTimeoutSeconds = value;
    }
    public resetInvocationTimeoutSeconds() {
        this._invocationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTimeoutSecondsInput() {
        return this._invocationTimeoutSeconds;
    }

    // path_parameter_values - computed: true, optional: true, required: false
    private _pathParameterValues?: string[]; 
    public get pathParameterValues() {
        return this.getListAttribute('path_parameter_values');
    }
    public set pathParameterValues(value: string[]) {
        this._pathParameterValues = value;
    }
    public resetPathParameterValues() {
        this._pathParameterValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathParameterValuesInput() {
        return this._pathParameterValues;
    }

    // query_string_parameters - computed: true, optional: true, required: false
    private _queryStringParameters?: { [key: string]: string }; 
    public get queryStringParameters() {
        return this.getStringMapAttribute('query_string_parameters');
    }
    public set queryStringParameters(value: { [key: string]: string }) {
        this._queryStringParameters = value;
    }
    public resetQueryStringParameters() {
        this._queryStringParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
        return this._queryStringParameters;
    }
}
export interface KinesisParametersProperty {
    /**
    * An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#explicit_hash_key CcSubscriber#explicit_hash_key}
    */
    readonly explicitHashKey?: string;
    /**
    * The partition key that determines which shard each record is written to. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#partition_key CcSubscriber#partition_key}
    */
    readonly partitionKey?: string;
}
export class KinesisParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._explicitHashKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.explicitHashKey = this._explicitHashKey;
        }
        if (this._partitionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKey = this._partitionKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._explicitHashKey = undefined;
            this._partitionKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._explicitHashKey = value.explicitHashKey;
            this._partitionKey = value.partitionKey;
        }
    }

    // explicit_hash_key - computed: true, optional: true, required: false
    private _explicitHashKey?: string; 
    public get explicitHashKey() {
        return this.getStringAttribute('explicit_hash_key');
    }
    public set explicitHashKey(value: string) {
        this._explicitHashKey = value;
    }
    public resetExplicitHashKey() {
        this._explicitHashKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explicitHashKeyInput() {
        return this._explicitHashKey;
    }

    // partition_key - computed: true, optional: true, required: false
    private _partitionKey?: string; 
    public get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    public set partitionKey(value: string) {
        this._partitionKey = value;
    }
    public resetPartitionKey() {
        this._partitionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyInput() {
        return this._partitionKey;
    }
}
export interface LambdaParametersProperty {
    /**
    * A unique name for a durable function execution. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#durable_execution_name CcSubscriber#durable_execution_name}
    */
    readonly durableExecutionName?: string;
    /**
    * The timeout in seconds for each invocation of the target, written as a string. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds CcSubscriber#invocation_timeout_seconds}
    */
    readonly invocationTimeoutSeconds?: string;
    /**
    * How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type CcSubscriber#invocation_type}
    */
    readonly invocationType?: string;
    /**
    * The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#qualifier CcSubscriber#qualifier}
    */
    readonly qualifier?: string;
    /**
    * The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tenant_id CcSubscriber#tenant_id}
    */
    readonly tenantId?: string;
}
export class LambdaParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durableExecutionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.durableExecutionName = this._durableExecutionName;
        }
        if (this._invocationTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationTimeoutSeconds = this._invocationTimeoutSeconds;
        }
        if (this._invocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationType = this._invocationType;
        }
        if (this._qualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.qualifier = this._qualifier;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durableExecutionName = undefined;
            this._invocationTimeoutSeconds = undefined;
            this._invocationType = undefined;
            this._qualifier = undefined;
            this._tenantId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durableExecutionName = value.durableExecutionName;
            this._invocationTimeoutSeconds = value.invocationTimeoutSeconds;
            this._invocationType = value.invocationType;
            this._qualifier = value.qualifier;
            this._tenantId = value.tenantId;
        }
    }

    // durable_execution_name - computed: true, optional: true, required: false
    private _durableExecutionName?: string; 
    public get durableExecutionName() {
        return this.getStringAttribute('durable_execution_name');
    }
    public set durableExecutionName(value: string) {
        this._durableExecutionName = value;
    }
    public resetDurableExecutionName() {
        this._durableExecutionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durableExecutionNameInput() {
        return this._durableExecutionName;
    }

    // invocation_timeout_seconds - computed: true, optional: true, required: false
    private _invocationTimeoutSeconds?: string; 
    public get invocationTimeoutSeconds() {
        return this.getStringAttribute('invocation_timeout_seconds');
    }
    public set invocationTimeoutSeconds(value: string) {
        this._invocationTimeoutSeconds = value;
    }
    public resetInvocationTimeoutSeconds() {
        this._invocationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTimeoutSecondsInput() {
        return this._invocationTimeoutSeconds;
    }

    // invocation_type - computed: true, optional: true, required: false
    private _invocationType?: string; 
    public get invocationType() {
        return this.getStringAttribute('invocation_type');
    }
    public set invocationType(value: string) {
        this._invocationType = value;
    }
    public resetInvocationType() {
        this._invocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTypeInput() {
        return this._invocationType;
    }

    // qualifier - computed: true, optional: true, required: false
    private _qualifier?: string; 
    public get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string) {
        this._qualifier = value;
    }
    public resetQualifier() {
        this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
        return this._qualifier;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }
}
export interface InvokeConfigurationSnsParametersMessageAttributesProperty {
    /**
    * The attribute value for the Binary data type, Base64-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value CcSubscriber#binary_value}
    */
    readonly binaryValue?: string;
    /**
    * The attribute data type. For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type CcSubscriber#data_type}
    */
    readonly dataType?: string;
    /**
    * The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value CcSubscriber#string_value}
    */
    readonly stringValue?: string;
}
export class InvokeConfigurationSnsParametersMessageAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InvokeConfigurationSnsParametersMessageAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._binaryValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.binaryValue = this._binaryValue;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvokeConfigurationSnsParametersMessageAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._binaryValue = undefined;
            this._dataType = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._binaryValue = value.binaryValue;
            this._dataType = value.dataType;
            this._stringValue = value.stringValue;
        }
    }

    // binary_value - computed: true, optional: true, required: false
    private _binaryValue?: string; 
    public get binaryValue() {
        return this.getStringAttribute('binary_value');
    }
    public set binaryValue(value: string) {
        this._binaryValue = value;
    }
    public resetBinaryValue() {
        this._binaryValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get binaryValueInput() {
        return this._binaryValue;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}

export class InvokeConfigurationSnsParametersMessageAttributesPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: InvokeConfigurationSnsParametersMessageAttributesProperty } | cdktn.IResolvable

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
    public get(key: string): InvokeConfigurationSnsParametersMessageAttributesPropertyOutputReference {
        return new InvokeConfigurationSnsParametersMessageAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface SnsParametersProperty {
    /**
    * Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes CcSubscriber#message_attributes}
    */
    readonly messageAttributes?: { [key: string]: InvokeConfigurationSnsParametersMessageAttributesProperty } | cdktn.IResolvable;
    /**
    * The message deduplication ID to use when the target is a FIFO topic. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id CcSubscriber#message_deduplication_id}
    */
    readonly messageDeduplicationId?: string;
    /**
    * The message group ID to use when the target is a FIFO topic. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id CcSubscriber#message_group_id}
    */
    readonly messageGroupId?: string;
    /**
    * Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_structure CcSubscriber#message_structure}
    */
    readonly messageStructure?: string;
    /**
    * The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#subject CcSubscriber#subject}
    */
    readonly subject?: string;
}
export class SnsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageAttributes = this._messageAttributes?.internalValue;
        }
        if (this._messageDeduplicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageDeduplicationId = this._messageDeduplicationId;
        }
        if (this._messageGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageGroupId = this._messageGroupId;
        }
        if (this._messageStructure !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageStructure = this._messageStructure;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageAttributes.internalValue = undefined;
            this._messageDeduplicationId = undefined;
            this._messageGroupId = undefined;
            this._messageStructure = undefined;
            this._subject = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageAttributes.internalValue = value.messageAttributes;
            this._messageDeduplicationId = value.messageDeduplicationId;
            this._messageGroupId = value.messageGroupId;
            this._messageStructure = value.messageStructure;
            this._subject = value.subject;
        }
    }

    // message_attributes - computed: true, optional: true, required: false
    private _messageAttributes = new InvokeConfigurationSnsParametersMessageAttributesPropertyMap(this, "message_attributes");
    public get messageAttributes() {
        return this._messageAttributes;
    }
    public putMessageAttributes(value: { [key: string]: InvokeConfigurationSnsParametersMessageAttributesProperty } | cdktn.IResolvable) {
        this._messageAttributes.internalValue = value;
    }
    public resetMessageAttributes() {
        this._messageAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageAttributesInput() {
        return this._messageAttributes.internalValue;
    }

    // message_deduplication_id - computed: true, optional: true, required: false
    private _messageDeduplicationId?: string; 
    public get messageDeduplicationId() {
        return this.getStringAttribute('message_deduplication_id');
    }
    public set messageDeduplicationId(value: string) {
        this._messageDeduplicationId = value;
    }
    public resetMessageDeduplicationId() {
        this._messageDeduplicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageDeduplicationIdInput() {
        return this._messageDeduplicationId;
    }

    // message_group_id - computed: true, optional: true, required: false
    private _messageGroupId?: string; 
    public get messageGroupId() {
        return this.getStringAttribute('message_group_id');
    }
    public set messageGroupId(value: string) {
        this._messageGroupId = value;
    }
    public resetMessageGroupId() {
        this._messageGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageGroupIdInput() {
        return this._messageGroupId;
    }

    // message_structure - computed: true, optional: true, required: false
    private _messageStructure?: string; 
    public get messageStructure() {
        return this.getStringAttribute('message_structure');
    }
    public set messageStructure(value: string) {
        this._messageStructure = value;
    }
    public resetMessageStructure() {
        this._messageStructure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageStructureInput() {
        return this._messageStructure;
    }

    // subject - computed: true, optional: true, required: false
    private _subject?: string; 
    public get subject() {
        return this.getStringAttribute('subject');
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public resetSubject() {
        this._subject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectInput() {
        return this._subject;
    }
}
export interface InvokeConfigurationSqsParametersMessageAttributesProperty {
    /**
    * The attribute value for the Binary data type, Base64-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value CcSubscriber#binary_value}
    */
    readonly binaryValue?: string;
    /**
    * The attribute data type. For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type CcSubscriber#data_type}
    */
    readonly dataType?: string;
    /**
    * The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value CcSubscriber#string_value}
    */
    readonly stringValue?: string;
}
export class InvokeConfigurationSqsParametersMessageAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InvokeConfigurationSqsParametersMessageAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._binaryValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.binaryValue = this._binaryValue;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvokeConfigurationSqsParametersMessageAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._binaryValue = undefined;
            this._dataType = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._binaryValue = value.binaryValue;
            this._dataType = value.dataType;
            this._stringValue = value.stringValue;
        }
    }

    // binary_value - computed: true, optional: true, required: false
    private _binaryValue?: string; 
    public get binaryValue() {
        return this.getStringAttribute('binary_value');
    }
    public set binaryValue(value: string) {
        this._binaryValue = value;
    }
    public resetBinaryValue() {
        this._binaryValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get binaryValueInput() {
        return this._binaryValue;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}

export class InvokeConfigurationSqsParametersMessageAttributesPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: InvokeConfigurationSqsParametersMessageAttributesProperty } | cdktn.IResolvable

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
    public get(key: string): InvokeConfigurationSqsParametersMessageAttributesPropertyOutputReference {
        return new InvokeConfigurationSqsParametersMessageAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface MessageSystemAttributesProperty {
    /**
    * The attribute value for the Binary data type, Base64-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value CcSubscriber#binary_value}
    */
    readonly binaryValue?: string;
    /**
    * The attribute data type. For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type CcSubscriber#data_type}
    */
    readonly dataType?: string;
    /**
    * The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value CcSubscriber#string_value}
    */
    readonly stringValue?: string;
}
export class MessageSystemAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MessageSystemAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._binaryValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.binaryValue = this._binaryValue;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageSystemAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._binaryValue = undefined;
            this._dataType = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._binaryValue = value.binaryValue;
            this._dataType = value.dataType;
            this._stringValue = value.stringValue;
        }
    }

    // binary_value - computed: true, optional: true, required: false
    private _binaryValue?: string; 
    public get binaryValue() {
        return this.getStringAttribute('binary_value');
    }
    public set binaryValue(value: string) {
        this._binaryValue = value;
    }
    public resetBinaryValue() {
        this._binaryValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get binaryValueInput() {
        return this._binaryValue;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}

export class MessageSystemAttributesPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: MessageSystemAttributesProperty } | cdktn.IResolvable

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
    public get(key: string): MessageSystemAttributesPropertyOutputReference {
        return new MessageSystemAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface SqsParametersProperty {
    /**
    * The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#delay_seconds CcSubscriber#delay_seconds}
    */
    readonly delaySeconds?: string;
    /**
    * Custom message attributes to attach to each message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes CcSubscriber#message_attributes}
    */
    readonly messageAttributes?: { [key: string]: InvokeConfigurationSqsParametersMessageAttributesProperty } | cdktn.IResolvable;
    /**
    * The message deduplication ID to use when the target is a FIFO queue. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id CcSubscriber#message_deduplication_id}
    */
    readonly messageDeduplicationId?: string;
    /**
    * The message group ID to use when the target is a FIFO queue. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id CcSubscriber#message_group_id}
    */
    readonly messageGroupId?: string;
    /**
    * Message system attributes to attach to each message, such as AWSTraceHeader.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_system_attributes CcSubscriber#message_system_attributes}
    */
    readonly messageSystemAttributes?: { [key: string]: MessageSystemAttributesProperty } | cdktn.IResolvable;
}
export class SqsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._delaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.delaySeconds = this._delaySeconds;
        }
        if (this._messageAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageAttributes = this._messageAttributes?.internalValue;
        }
        if (this._messageDeduplicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageDeduplicationId = this._messageDeduplicationId;
        }
        if (this._messageGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageGroupId = this._messageGroupId;
        }
        if (this._messageSystemAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageSystemAttributes = this._messageSystemAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delaySeconds = undefined;
            this._messageAttributes.internalValue = undefined;
            this._messageDeduplicationId = undefined;
            this._messageGroupId = undefined;
            this._messageSystemAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delaySeconds = value.delaySeconds;
            this._messageAttributes.internalValue = value.messageAttributes;
            this._messageDeduplicationId = value.messageDeduplicationId;
            this._messageGroupId = value.messageGroupId;
            this._messageSystemAttributes.internalValue = value.messageSystemAttributes;
        }
    }

    // delay_seconds - computed: true, optional: true, required: false
    private _delaySeconds?: string; 
    public get delaySeconds() {
        return this.getStringAttribute('delay_seconds');
    }
    public set delaySeconds(value: string) {
        this._delaySeconds = value;
    }
    public resetDelaySeconds() {
        this._delaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delaySecondsInput() {
        return this._delaySeconds;
    }

    // message_attributes - computed: true, optional: true, required: false
    private _messageAttributes = new InvokeConfigurationSqsParametersMessageAttributesPropertyMap(this, "message_attributes");
    public get messageAttributes() {
        return this._messageAttributes;
    }
    public putMessageAttributes(value: { [key: string]: InvokeConfigurationSqsParametersMessageAttributesProperty } | cdktn.IResolvable) {
        this._messageAttributes.internalValue = value;
    }
    public resetMessageAttributes() {
        this._messageAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageAttributesInput() {
        return this._messageAttributes.internalValue;
    }

    // message_deduplication_id - computed: true, optional: true, required: false
    private _messageDeduplicationId?: string; 
    public get messageDeduplicationId() {
        return this.getStringAttribute('message_deduplication_id');
    }
    public set messageDeduplicationId(value: string) {
        this._messageDeduplicationId = value;
    }
    public resetMessageDeduplicationId() {
        this._messageDeduplicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageDeduplicationIdInput() {
        return this._messageDeduplicationId;
    }

    // message_group_id - computed: true, optional: true, required: false
    private _messageGroupId?: string; 
    public get messageGroupId() {
        return this.getStringAttribute('message_group_id');
    }
    public set messageGroupId(value: string) {
        this._messageGroupId = value;
    }
    public resetMessageGroupId() {
        this._messageGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageGroupIdInput() {
        return this._messageGroupId;
    }

    // message_system_attributes - computed: true, optional: true, required: false
    private _messageSystemAttributes = new MessageSystemAttributesPropertyMap(this, "message_system_attributes");
    public get messageSystemAttributes() {
        return this._messageSystemAttributes;
    }
    public putMessageSystemAttributes(value: { [key: string]: MessageSystemAttributesProperty } | cdktn.IResolvable) {
        this._messageSystemAttributes.internalValue = value;
    }
    public resetMessageSystemAttributes() {
        this._messageSystemAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageSystemAttributesInput() {
        return this._messageSystemAttributes.internalValue;
    }
}
export interface StepFunctionsParametersProperty {
    /**
    * The timeout in seconds for each invocation of the target, written as a string. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds CcSubscriber#invocation_timeout_seconds}
    */
    readonly invocationTimeoutSeconds?: string;
    /**
    * How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type CcSubscriber#invocation_type}
    */
    readonly invocationType?: string;
    /**
    * A name for the execution. Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name CcSubscriber#name}
    */
    readonly name?: string;
    /**
    * The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#trace_header CcSubscriber#trace_header}
    */
    readonly traceHeader?: string;
}
export class StepFunctionsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepFunctionsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invocationTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationTimeoutSeconds = this._invocationTimeoutSeconds;
        }
        if (this._invocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationType = this._invocationType;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._traceHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.traceHeader = this._traceHeader;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepFunctionsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invocationTimeoutSeconds = undefined;
            this._invocationType = undefined;
            this._name = undefined;
            this._traceHeader = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invocationTimeoutSeconds = value.invocationTimeoutSeconds;
            this._invocationType = value.invocationType;
            this._name = value.name;
            this._traceHeader = value.traceHeader;
        }
    }

    // invocation_timeout_seconds - computed: true, optional: true, required: false
    private _invocationTimeoutSeconds?: string; 
    public get invocationTimeoutSeconds() {
        return this.getStringAttribute('invocation_timeout_seconds');
    }
    public set invocationTimeoutSeconds(value: string) {
        this._invocationTimeoutSeconds = value;
    }
    public resetInvocationTimeoutSeconds() {
        this._invocationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTimeoutSecondsInput() {
        return this._invocationTimeoutSeconds;
    }

    // invocation_type - computed: true, optional: true, required: false
    private _invocationType?: string; 
    public get invocationType() {
        return this.getStringAttribute('invocation_type');
    }
    public set invocationType(value: string) {
        this._invocationType = value;
    }
    public resetInvocationType() {
        this._invocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTypeInput() {
        return this._invocationType;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // trace_header - computed: true, optional: true, required: false
    private _traceHeader?: string; 
    public get traceHeader() {
        return this.getStringAttribute('trace_header');
    }
    public set traceHeader(value: string) {
        this._traceHeader = value;
    }
    public resetTraceHeader() {
        this._traceHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get traceHeaderInput() {
        return this._traceHeader;
    }
}
export interface UniversalTargetParametersProperty {
    /**
    * JSON string or JSONata expression that produces the API request. Supports {% ... %} JSONata expressions for dynamic values from the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#input CcSubscriber#input}
    */
    readonly input?: string;
    /**
    * Timeout in seconds for each invocation of the target (1-30, default 30). Must be a literal integer written as a string; JSONata expressions are not supported for this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds CcSubscriber#invocation_timeout_seconds}
    */
    readonly invocationTimeoutSeconds?: string;
}
export class UniversalTargetParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UniversalTargetParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._input !== undefined) {
            hasAnyValues = true;
            internalValueResult.input = this._input;
        }
        if (this._invocationTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationTimeoutSeconds = this._invocationTimeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UniversalTargetParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._input = undefined;
            this._invocationTimeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._input = value.input;
            this._invocationTimeoutSeconds = value.invocationTimeoutSeconds;
        }
    }

    // input - computed: true, optional: true, required: false
    private _input?: string; 
    public get input() {
        return this.getStringAttribute('input');
    }
    public set input(value: string) {
        this._input = value;
    }
    public resetInput() {
        this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
        return this._input;
    }

    // invocation_timeout_seconds - computed: true, optional: true, required: false
    private _invocationTimeoutSeconds?: string; 
    public get invocationTimeoutSeconds() {
        return this.getStringAttribute('invocation_timeout_seconds');
    }
    public set invocationTimeoutSeconds(value: string) {
        this._invocationTimeoutSeconds = value;
    }
    public resetInvocationTimeoutSeconds() {
        this._invocationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTimeoutSecondsInput() {
        return this._invocationTimeoutSeconds;
    }
}
export interface InvokeConfigurationProperty {
    /**
    * Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_v2_parameters CcSubscriber#event_bus_v2_parameters}
    */
    readonly eventBusV2Parameters?: EventBusV2ParametersProperty;
    /**
    * Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#http_parameters CcSubscriber#http_parameters}
    */
    readonly httpParameters?: HttpParametersProperty;
    /**
    * Parameters for writing events to an Amazon Kinesis Data Streams target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#kinesis_parameters CcSubscriber#kinesis_parameters}
    */
    readonly kinesisParameters?: KinesisParametersProperty;
    /**
    * Parameters for invoking an AWS Lambda function target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#lambda_parameters CcSubscriber#lambda_parameters}
    */
    readonly lambdaParameters?: LambdaParametersProperty;
    /**
    * The ARN of the IAM role the service assumes to invoke the target. The role must belong to the same account as the subscriber.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#role_arn CcSubscriber#role_arn}
    */
    readonly roleArn: string;
    /**
    * Parameters for publishing events to an Amazon SNS topic target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sns_parameters CcSubscriber#sns_parameters}
    */
    readonly snsParameters?: SnsParametersProperty;
    /**
    * Parameters for sending events to an Amazon SQS queue target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sqs_parameters CcSubscriber#sqs_parameters}
    */
    readonly sqsParameters?: SqsParametersProperty;
    /**
    * Parameters for starting an AWS Step Functions state machine execution target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#step_functions_parameters CcSubscriber#step_functions_parameters}
    */
    readonly stepFunctionsParameters?: StepFunctionsParametersProperty;
    /**
    * The Amazon Resource Name (ARN) of the target that the subscriber invokes. For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#target_arn CcSubscriber#target_arn}
    */
    readonly targetArn: string;
    /**
    * Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#universal_target_parameters CcSubscriber#universal_target_parameters}
    */
    readonly universalTargetParameters?: UniversalTargetParametersProperty;
}
export class InvokeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InvokeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventBusV2Parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBusV2Parameters = this._eventBusV2Parameters?.internalValue;
        }
        if (this._httpParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpParameters = this._httpParameters?.internalValue;
        }
        if (this._kinesisParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisParameters = this._kinesisParameters?.internalValue;
        }
        if (this._lambdaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaParameters = this._lambdaParameters?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._snsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsParameters = this._snsParameters?.internalValue;
        }
        if (this._sqsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqsParameters = this._sqsParameters?.internalValue;
        }
        if (this._stepFunctionsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepFunctionsParameters = this._stepFunctionsParameters?.internalValue;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        if (this._universalTargetParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.universalTargetParameters = this._universalTargetParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvokeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventBusV2Parameters.internalValue = undefined;
            this._httpParameters.internalValue = undefined;
            this._kinesisParameters.internalValue = undefined;
            this._lambdaParameters.internalValue = undefined;
            this._roleArn = undefined;
            this._snsParameters.internalValue = undefined;
            this._sqsParameters.internalValue = undefined;
            this._stepFunctionsParameters.internalValue = undefined;
            this._targetArn = undefined;
            this._universalTargetParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventBusV2Parameters.internalValue = value.eventBusV2Parameters;
            this._httpParameters.internalValue = value.httpParameters;
            this._kinesisParameters.internalValue = value.kinesisParameters;
            this._lambdaParameters.internalValue = value.lambdaParameters;
            this._roleArn = value.roleArn;
            this._snsParameters.internalValue = value.snsParameters;
            this._sqsParameters.internalValue = value.sqsParameters;
            this._stepFunctionsParameters.internalValue = value.stepFunctionsParameters;
            this._targetArn = value.targetArn;
            this._universalTargetParameters.internalValue = value.universalTargetParameters;
        }
    }

    // event_bus_v2_parameters - computed: true, optional: true, required: false
    private _eventBusV2Parameters = new EventBusV2ParametersPropertyOutputReference(this, "event_bus_v2_parameters");
    public get eventBusV2Parameters() {
        return this._eventBusV2Parameters;
    }
    public putEventBusV2Parameters(value: EventBusV2ParametersProperty) {
        this._eventBusV2Parameters.internalValue = value;
    }
    public resetEventBusV2Parameters() {
        this._eventBusV2Parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusV2ParametersInput() {
        return this._eventBusV2Parameters.internalValue;
    }

    // http_parameters - computed: true, optional: true, required: false
    private _httpParameters = new HttpParametersPropertyOutputReference(this, "http_parameters");
    public get httpParameters() {
        return this._httpParameters;
    }
    public putHttpParameters(value: HttpParametersProperty) {
        this._httpParameters.internalValue = value;
    }
    public resetHttpParameters() {
        this._httpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpParametersInput() {
        return this._httpParameters.internalValue;
    }

    // kinesis_parameters - computed: true, optional: true, required: false
    private _kinesisParameters = new KinesisParametersPropertyOutputReference(this, "kinesis_parameters");
    public get kinesisParameters() {
        return this._kinesisParameters;
    }
    public putKinesisParameters(value: KinesisParametersProperty) {
        this._kinesisParameters.internalValue = value;
    }
    public resetKinesisParameters() {
        this._kinesisParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisParametersInput() {
        return this._kinesisParameters.internalValue;
    }

    // lambda_parameters - computed: true, optional: true, required: false
    private _lambdaParameters = new LambdaParametersPropertyOutputReference(this, "lambda_parameters");
    public get lambdaParameters() {
        return this._lambdaParameters;
    }
    public putLambdaParameters(value: LambdaParametersProperty) {
        this._lambdaParameters.internalValue = value;
    }
    public resetLambdaParameters() {
        this._lambdaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaParametersInput() {
        return this._lambdaParameters.internalValue;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // sns_parameters - computed: true, optional: true, required: false
    private _snsParameters = new SnsParametersPropertyOutputReference(this, "sns_parameters");
    public get snsParameters() {
        return this._snsParameters;
    }
    public putSnsParameters(value: SnsParametersProperty) {
        this._snsParameters.internalValue = value;
    }
    public resetSnsParameters() {
        this._snsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsParametersInput() {
        return this._snsParameters.internalValue;
    }

    // sqs_parameters - computed: true, optional: true, required: false
    private _sqsParameters = new SqsParametersPropertyOutputReference(this, "sqs_parameters");
    public get sqsParameters() {
        return this._sqsParameters;
    }
    public putSqsParameters(value: SqsParametersProperty) {
        this._sqsParameters.internalValue = value;
    }
    public resetSqsParameters() {
        this._sqsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsParametersInput() {
        return this._sqsParameters.internalValue;
    }

    // step_functions_parameters - computed: true, optional: true, required: false
    private _stepFunctionsParameters = new StepFunctionsParametersPropertyOutputReference(this, "step_functions_parameters");
    public get stepFunctionsParameters() {
        return this._stepFunctionsParameters;
    }
    public putStepFunctionsParameters(value: StepFunctionsParametersProperty) {
        this._stepFunctionsParameters.internalValue = value;
    }
    public resetStepFunctionsParameters() {
        this._stepFunctionsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepFunctionsParametersInput() {
        return this._stepFunctionsParameters.internalValue;
    }

    // target_arn - computed: false, optional: false, required: true
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }

    // universal_target_parameters - computed: true, optional: true, required: false
    private _universalTargetParameters = new UniversalTargetParametersPropertyOutputReference(this, "universal_target_parameters");
    public get universalTargetParameters() {
        return this._universalTargetParameters;
    }
    public putUniversalTargetParameters(value: UniversalTargetParametersProperty) {
        this._universalTargetParameters.internalValue = value;
    }
    public resetUniversalTargetParameters() {
        this._universalTargetParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get universalTargetParametersInput() {
        return this._universalTargetParameters.internalValue;
    }
}
export interface LogConfigurationProperty {
    /**
    * Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. The default is ON_ERROR_ONLY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#include_payload CcSubscriber#include_payload}
    */
    readonly includePayload?: string;
    /**
    * The minimum log level: OFF (no logging), ERROR, or INFO. Records below this level are not emitted. The default is OFF.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#level CcSubscriber#level}
    */
    readonly level?: string;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includePayload !== undefined) {
            hasAnyValues = true;
            internalValueResult.includePayload = this._includePayload;
        }
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includePayload = undefined;
            this._level = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includePayload = value.includePayload;
            this._level = value.level;
        }
    }

    // include_payload - computed: true, optional: true, required: false
    private _includePayload?: string; 
    public get includePayload() {
        return this.getStringAttribute('include_payload');
    }
    public set includePayload(value: string) {
        this._includePayload = value;
    }
    public resetIncludePayload() {
        this._includePayload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includePayloadInput() {
        return this._includePayload;
    }

    // level - computed: true, optional: true, required: false
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }
}
export interface OnFailureConfigurationProperty {
    /**
    * The ARN of the destination that receives events that could not be delivered. An Amazon SQS queue is the supported destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#arn CcSubscriber#arn}
    */
    readonly arn?: string;
}
export class OnFailureConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnFailureConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnFailureConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}
export interface PointInTimeConfigurationProperty {
    /**
    * An optional time to stop delivering events at, in seconds since the Unix epoch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#end_point CcSubscriber#end_point}
    */
    readonly endPoint?: number;
    /**
    * Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_type CcSubscriber#point_type}
    */
    readonly pointType?: string;
    /**
    * The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_point CcSubscriber#starting_point}
    */
    readonly startingPoint?: number;
}
export class PointInTimeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PointInTimeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endPoint = this._endPoint;
        }
        if (this._pointType !== undefined) {
            hasAnyValues = true;
            internalValueResult.pointType = this._pointType;
        }
        if (this._startingPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPoint = this._startingPoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PointInTimeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endPoint = undefined;
            this._pointType = undefined;
            this._startingPoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endPoint = value.endPoint;
            this._pointType = value.pointType;
            this._startingPoint = value.startingPoint;
        }
    }

    // end_point - computed: true, optional: true, required: false
    private _endPoint?: number; 
    public get endPoint() {
        return this.getNumberAttribute('end_point');
    }
    public set endPoint(value: number) {
        this._endPoint = value;
    }
    public resetEndPoint() {
        this._endPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endPointInput() {
        return this._endPoint;
    }

    // point_type - computed: true, optional: true, required: false
    private _pointType?: string; 
    public get pointType() {
        return this.getStringAttribute('point_type');
    }
    public set pointType(value: string) {
        this._pointType = value;
    }
    public resetPointType() {
        this._pointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointTypeInput() {
        return this._pointType;
    }

    // starting_point - computed: true, optional: true, required: false
    private _startingPoint?: number; 
    public get startingPoint() {
        return this.getNumberAttribute('starting_point');
    }
    public set startingPoint(value: number) {
        this._startingPoint = value;
    }
    public resetStartingPoint() {
        this._startingPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPointInput() {
        return this._startingPoint;
    }
}
export interface RetryPolicyProperty {
    /**
    * The maximum age of an event in seconds, 60-86400 (24 hours). When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_event_age_in_seconds CcSubscriber#max_event_age_in_seconds}
    */
    readonly maxEventAgeInSeconds?: number;
    /**
    * The maximum number of retry attempts, 0-185. When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_retry_attempts CcSubscriber#max_retry_attempts}
    */
    readonly maxRetryAttempts?: number;
    /**
    * Which errors are retried. ALL retries all errors. The default is ALL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_strategy CcSubscriber#retry_strategy}
    */
    readonly retryStrategy?: string;
}
export class RetryPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetryPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxEventAgeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxEventAgeInSeconds = this._maxEventAgeInSeconds;
        }
        if (this._maxRetryAttempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRetryAttempts = this._maxRetryAttempts;
        }
        if (this._retryStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryStrategy = this._retryStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetryPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxEventAgeInSeconds = undefined;
            this._maxRetryAttempts = undefined;
            this._retryStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxEventAgeInSeconds = value.maxEventAgeInSeconds;
            this._maxRetryAttempts = value.maxRetryAttempts;
            this._retryStrategy = value.retryStrategy;
        }
    }

    // max_event_age_in_seconds - computed: true, optional: true, required: false
    private _maxEventAgeInSeconds?: number; 
    public get maxEventAgeInSeconds() {
        return this.getNumberAttribute('max_event_age_in_seconds');
    }
    public set maxEventAgeInSeconds(value: number) {
        this._maxEventAgeInSeconds = value;
    }
    public resetMaxEventAgeInSeconds() {
        this._maxEventAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEventAgeInSecondsInput() {
        return this._maxEventAgeInSeconds;
    }

    // max_retry_attempts - computed: true, optional: true, required: false
    private _maxRetryAttempts?: number; 
    public get maxRetryAttempts() {
        return this.getNumberAttribute('max_retry_attempts');
    }
    public set maxRetryAttempts(value: number) {
        this._maxRetryAttempts = value;
    }
    public resetMaxRetryAttempts() {
        this._maxRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetryAttemptsInput() {
        return this._maxRetryAttempts;
    }

    // retry_strategy - computed: true, optional: true, required: false
    private _retryStrategy?: string; 
    public get retryStrategy() {
        return this.getStringAttribute('retry_strategy');
    }
    public set retryStrategy(value: string) {
        this._retryStrategy = value;
    }
    public resetRetryStrategy() {
        this._retryStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryStrategyInput() {
        return this._retryStrategy;
    }
}
export interface TagsProperty {
    /**
    * The tag key. For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#key CcSubscriber#key}
    */
    readonly key?: string;
    /**
    * The tag value. May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#value CcSubscriber#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JsonataConfigurationProperty {
    /**
    * The JSONata expression that transforms the event, enclosed in {% %} delimiters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#expression CcSubscriber#expression}
    */
    readonly expression?: string;
}
export class JsonataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }
}
export interface TransformerProperty {
    /**
    * The JSONata expression configuration. Required when Type is JSONATA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#jsonata_configuration CcSubscriber#jsonata_configuration}
    */
    readonly jsonataConfiguration?: JsonataConfigurationProperty;
    /**
    * The transform type: RAW delivers the event payload only; WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type CcSubscriber#type}
    */
    readonly type?: string;
}
export class TransformerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonataConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonataConfiguration = this._jsonataConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonataConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonataConfiguration.internalValue = value.jsonataConfiguration;
            this._type = value.type;
        }
    }

    // jsonata_configuration - computed: true, optional: true, required: false
    private _jsonataConfiguration = new JsonataConfigurationPropertyOutputReference(this, "jsonata_configuration");
    public get jsonataConfiguration() {
        return this._jsonataConfiguration;
    }
    public putJsonataConfiguration(value: JsonataConfigurationProperty) {
        this._jsonataConfiguration.internalValue = value;
    }
    public resetJsonataConfiguration() {
        this._jsonataConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonataConfigurationInput() {
        return this._jsonataConfiguration.internalValue;
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
