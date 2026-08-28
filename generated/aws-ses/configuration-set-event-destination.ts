// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationSetEventDestinationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the configuration set that contains the event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name CcConfigurationSetEventDestination#configuration_set_name}
    */
    readonly configurationSetName: string;
    /**
    * The event destination object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_destination CcConfigurationSetEventDestination#event_destination}
    */
    readonly eventDestination: CcConfigurationSetEventDestination.EventDestinationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}
*/
export class CcConfigurationSetEventDestination extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_configuration_set_event_destination";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationSetEventDestination to import
    * @param importFromId The id of the existing CcConfigurationSetEventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationSetEventDestination to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_configuration_set_event_destination", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationSetEventDestinationProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationSetEventDestinationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_configuration_set_event_destination',
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
        this._configurationSetName = config.configurationSetName;
        this._eventDestination.internalValue = config.eventDestination;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration_set_event_destination_id - computed: true, optional: false, required: false
    public get configurationSetEventDestinationId() {
        return this.getStringAttribute('configuration_set_event_destination_id');
    }

    // configuration_set_name - computed: false, optional: false, required: true
    private _configurationSetName?: string; 
    public get configurationSetName() {
        return this.getStringAttribute('configuration_set_name');
    }
    public set configurationSetName(value: string) {
        this._configurationSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetNameInput() {
        return this._configurationSetName;
    }

    // event_destination - computed: false, optional: false, required: true
    private _eventDestination = new CcConfigurationSetEventDestination.EventDestinationPropertyOutputReference(this, "event_destination");
    public get eventDestination() {
        return this._eventDestination;
    }
    public putEventDestination(value: CcConfigurationSetEventDestination.EventDestinationProperty) {
        this._eventDestination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventDestinationInput() {
        return this._eventDestination.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
            event_destination: ccConfigurationSetEventDestinationEventDestinationPropertyToTerraform(this._eventDestination.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration_set_name: {
                value: cdktn.stringToHclTerraform(this._configurationSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_destination: {
                value: ccConfigurationSetEventDestinationEventDestinationPropertyToHclTerraform(this._eventDestination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationSetEventDestination.EventDestinationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationSetEventDestinationDimensionConfigurationPropertyToTerraform(struct?: CcConfigurationSetEventDestination.DimensionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_dimension_value: cdktn.stringToTerraform(struct!.defaultDimensionValue),
        dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
        dimension_value_source: cdktn.stringToTerraform(struct!.dimensionValueSource),
    }
}


export function ccConfigurationSetEventDestinationDimensionConfigurationPropertyToHclTerraform(struct?: CcConfigurationSetEventDestination.DimensionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_dimension_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultDimensionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimension_name: {
            value: cdktn.stringToHclTerraform(struct!.dimensionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimension_value_source: {
            value: cdktn.stringToHclTerraform(struct!.dimensionValueSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetEventDestinationCloudWatchDestinationPropertyToTerraform(struct?: CcConfigurationSetEventDestination.CloudWatchDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_configurations: cdktn.listMapper(ccConfigurationSetEventDestinationDimensionConfigurationPropertyToTerraform, false)(struct!.dimensionConfigurations),
    }
}


export function ccConfigurationSetEventDestinationCloudWatchDestinationPropertyToHclTerraform(struct?: CcConfigurationSetEventDestination.CloudWatchDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_configurations: {
            value: cdktn.listMapperHcl(ccConfigurationSetEventDestinationDimensionConfigurationPropertyToHclTerraform, false)(struct!.dimensionConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetEventDestinationEventBridgeDestinationPropertyToTerraform(struct?: CcConfigurationSetEventDestination.EventBridgeDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
    }
}


export function ccConfigurationSetEventDestinationEventBridgeDestinationPropertyToHclTerraform(struct?: CcConfigurationSetEventDestination.EventBridgeDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_bus_arn: {
            value: cdktn.stringToHclTerraform(struct!.eventBusArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToTerraform(struct?: CcConfigurationSetEventDestination.KinesisFirehoseDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
        iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    }
}


export function ccConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToHclTerraform(struct?: CcConfigurationSetEventDestination.KinesisFirehoseDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetEventDestinationSnsDestinationPropertyToTerraform(struct?: CcConfigurationSetEventDestination.SnsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccConfigurationSetEventDestinationSnsDestinationPropertyToHclTerraform(struct?: CcConfigurationSetEventDestination.SnsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetEventDestinationEventDestinationPropertyToTerraform(struct?: CcConfigurationSetEventDestination.EventDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_destination: ccConfigurationSetEventDestinationCloudWatchDestinationPropertyToTerraform(struct!.cloudwatchDestination),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        event_bridge_destination: ccConfigurationSetEventDestinationEventBridgeDestinationPropertyToTerraform(struct!.eventBridgeDestination),
        kinesis_firehose_destination: ccConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToTerraform(struct!.kinesisFirehoseDestination),
        matching_event_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingEventTypes),
        name: cdktn.stringToTerraform(struct!.name),
        sns_destination: ccConfigurationSetEventDestinationSnsDestinationPropertyToTerraform(struct!.snsDestination),
    }
}


export function ccConfigurationSetEventDestinationEventDestinationPropertyToHclTerraform(struct?: CcConfigurationSetEventDestination.EventDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_destination: {
            value: ccConfigurationSetEventDestinationCloudWatchDestinationPropertyToHclTerraform(struct!.cloudwatchDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchDestinationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        event_bridge_destination: {
            value: ccConfigurationSetEventDestinationEventBridgeDestinationPropertyToHclTerraform(struct!.eventBridgeDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "EventBridgeDestinationProperty",
        },
        kinesis_firehose_destination: {
            value: ccConfigurationSetEventDestinationKinesisFirehoseDestinationPropertyToHclTerraform(struct!.kinesisFirehoseDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisFirehoseDestinationProperty",
        },
        matching_event_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchingEventTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sns_destination: {
            value: ccConfigurationSetEventDestinationSnsDestinationPropertyToHclTerraform(struct!.snsDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConfigurationSetEventDestination {
export interface DimensionConfigurationProperty {
    /**
    * The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#default_dimension_value CcConfigurationSetEventDestination#default_dimension_value}
    */
    readonly defaultDimensionValue?: string;
    /**
    * The name of an Amazon CloudWatch dimension associated with an email sending metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#dimension_name CcConfigurationSetEventDestination#dimension_name}
    */
    readonly dimensionName?: string;
    /**
    * The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#dimension_value_source CcConfigurationSetEventDestination#dimension_value_source}
    */
    readonly dimensionValueSource?: string;
}
export class DimensionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultDimensionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultDimensionValue = this._defaultDimensionValue;
        }
        if (this._dimensionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionName = this._dimensionName;
        }
        if (this._dimensionValueSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionValueSource = this._dimensionValueSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultDimensionValue = undefined;
            this._dimensionName = undefined;
            this._dimensionValueSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultDimensionValue = value.defaultDimensionValue;
            this._dimensionName = value.dimensionName;
            this._dimensionValueSource = value.dimensionValueSource;
        }
    }

    // default_dimension_value - computed: true, optional: true, required: false
    private _defaultDimensionValue?: string; 
    public get defaultDimensionValue() {
        return this.getStringAttribute('default_dimension_value');
    }
    public set defaultDimensionValue(value: string) {
        this._defaultDimensionValue = value;
    }
    public resetDefaultDimensionValue() {
        this._defaultDimensionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultDimensionValueInput() {
        return this._defaultDimensionValue;
    }

    // dimension_name - computed: true, optional: true, required: false
    private _dimensionName?: string; 
    public get dimensionName() {
        return this.getStringAttribute('dimension_name');
    }
    public set dimensionName(value: string) {
        this._dimensionName = value;
    }
    public resetDimensionName() {
        this._dimensionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionNameInput() {
        return this._dimensionName;
    }

    // dimension_value_source - computed: true, optional: true, required: false
    private _dimensionValueSource?: string; 
    public get dimensionValueSource() {
        return this.getStringAttribute('dimension_value_source');
    }
    public set dimensionValueSource(value: string) {
        this._dimensionValueSource = value;
    }
    public resetDimensionValueSource() {
        this._dimensionValueSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionValueSourceInput() {
        return this._dimensionValueSource;
    }
}

export class DimensionConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionConfigurationPropertyOutputReference {
        return new DimensionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CloudWatchDestinationProperty {
    /**
    * A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#dimension_configurations CcConfigurationSetEventDestination#dimension_configurations}
    */
    readonly dimensionConfigurations?: DimensionConfigurationProperty[] | cdktn.IResolvable;
}
export class CloudWatchDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionConfigurations = this._dimensionConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionConfigurations.internalValue = value.dimensionConfigurations;
        }
    }

    // dimension_configurations - computed: true, optional: true, required: false
    private _dimensionConfigurations = new DimensionConfigurationPropertyList(this, "dimension_configurations", false);
    public get dimensionConfigurations() {
        return this._dimensionConfigurations;
    }
    public putDimensionConfigurations(value: DimensionConfigurationProperty[] | cdktn.IResolvable) {
        this._dimensionConfigurations.internalValue = value;
    }
    public resetDimensionConfigurations() {
        this._dimensionConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionConfigurationsInput() {
        return this._dimensionConfigurations.internalValue;
    }
}
export interface EventBridgeDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn CcConfigurationSetEventDestination#event_bus_arn}
    */
    readonly eventBusArn?: string;
}
export class EventBridgeDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBridgeDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventBusArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBusArn = this._eventBusArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBridgeDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventBusArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventBusArn = value.eventBusArn;
        }
    }

    // event_bus_arn - computed: true, optional: true, required: false
    private _eventBusArn?: string; 
    public get eventBusArn() {
        return this.getStringAttribute('event_bus_arn');
    }
    public set eventBusArn(value: string) {
        this._eventBusArn = value;
    }
    public resetEventBusArn() {
        this._eventBusArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusArnInput() {
        return this._eventBusArn;
    }
}
export interface KinesisFirehoseDestinationProperty {
    /**
    * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#delivery_stream_arn CcConfigurationSetEventDestination#delivery_stream_arn}
    */
    readonly deliveryStreamArn?: string;
    /**
    * The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#iam_role_arn CcConfigurationSetEventDestination#iam_role_arn}
    */
    readonly iamRoleArn?: string;
}
export class KinesisFirehoseDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisFirehoseDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
        }
        if (this._iamRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamRoleArn = this._iamRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisFirehoseDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamArn = undefined;
            this._iamRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamArn = value.deliveryStreamArn;
            this._iamRoleArn = value.iamRoleArn;
        }
    }

    // delivery_stream_arn - computed: true, optional: true, required: false
    private _deliveryStreamArn?: string; 
    public get deliveryStreamArn() {
        return this.getStringAttribute('delivery_stream_arn');
    }
    public set deliveryStreamArn(value: string) {
        this._deliveryStreamArn = value;
    }
    public resetDeliveryStreamArn() {
        this._deliveryStreamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamArnInput() {
        return this._deliveryStreamArn;
    }

    // iam_role_arn - computed: true, optional: true, required: false
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
        this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }
}
export interface SnsDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#topic_arn CcConfigurationSetEventDestination#topic_arn}
    */
    readonly topicArn?: string;
}
export class SnsDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._topicArn = value.topicArn;
        }
    }

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}
export interface EventDestinationProperty {
    /**
    * An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#cloudwatch_destination CcConfigurationSetEventDestination#cloudwatch_destination}
    */
    readonly cloudwatchDestination?: CloudWatchDestinationProperty;
    /**
    * Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.   
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#enabled CcConfigurationSetEventDestination#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * An object that contains Event bus ARN associated with the event bridge destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#event_bridge_destination CcConfigurationSetEventDestination#event_bridge_destination}
    */
    readonly eventBridgeDestination?: EventBridgeDestinationProperty;
    /**
    * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#kinesis_firehose_destination CcConfigurationSetEventDestination#kinesis_firehose_destination}
    */
    readonly kinesisFirehoseDestination?: KinesisFirehoseDestinationProperty;
    /**
    * The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#matching_event_types CcConfigurationSetEventDestination#matching_event_types}
    */
    readonly matchingEventTypes: string[];
    /**
    * The name of the event destination set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#name CcConfigurationSetEventDestination#name}
    */
    readonly name?: string;
    /**
    * An object that contains SNS topic ARN associated event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_configuration_set_event_destination#sns_destination CcConfigurationSetEventDestination#sns_destination}
    */
    readonly snsDestination?: SnsDestinationProperty;
}
export class EventDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchDestination = this._cloudwatchDestination?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._eventBridgeDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBridgeDestination = this._eventBridgeDestination?.internalValue;
        }
        if (this._kinesisFirehoseDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehoseDestination = this._kinesisFirehoseDestination?.internalValue;
        }
        if (this._matchingEventTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingEventTypes = this._matchingEventTypes;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._snsDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsDestination = this._snsDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchDestination.internalValue = undefined;
            this._enabled = undefined;
            this._eventBridgeDestination.internalValue = undefined;
            this._kinesisFirehoseDestination.internalValue = undefined;
            this._matchingEventTypes = undefined;
            this._name = undefined;
            this._snsDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchDestination.internalValue = value.cloudwatchDestination;
            this._enabled = value.enabled;
            this._eventBridgeDestination.internalValue = value.eventBridgeDestination;
            this._kinesisFirehoseDestination.internalValue = value.kinesisFirehoseDestination;
            this._matchingEventTypes = value.matchingEventTypes;
            this._name = value.name;
            this._snsDestination.internalValue = value.snsDestination;
        }
    }

    // cloudwatch_destination - computed: true, optional: true, required: false
    private _cloudwatchDestination = new CloudWatchDestinationPropertyOutputReference(this, "cloudwatch_destination");
    public get cloudwatchDestination() {
        return this._cloudwatchDestination;
    }
    public putCloudwatchDestination(value: CloudWatchDestinationProperty) {
        this._cloudwatchDestination.internalValue = value;
    }
    public resetCloudwatchDestination() {
        this._cloudwatchDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchDestinationInput() {
        return this._cloudwatchDestination.internalValue;
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

    // event_bridge_destination - computed: true, optional: true, required: false
    private _eventBridgeDestination = new EventBridgeDestinationPropertyOutputReference(this, "event_bridge_destination");
    public get eventBridgeDestination() {
        return this._eventBridgeDestination;
    }
    public putEventBridgeDestination(value: EventBridgeDestinationProperty) {
        this._eventBridgeDestination.internalValue = value;
    }
    public resetEventBridgeDestination() {
        this._eventBridgeDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeDestinationInput() {
        return this._eventBridgeDestination.internalValue;
    }

    // kinesis_firehose_destination - computed: true, optional: true, required: false
    private _kinesisFirehoseDestination = new KinesisFirehoseDestinationPropertyOutputReference(this, "kinesis_firehose_destination");
    public get kinesisFirehoseDestination() {
        return this._kinesisFirehoseDestination;
    }
    public putKinesisFirehoseDestination(value: KinesisFirehoseDestinationProperty) {
        this._kinesisFirehoseDestination.internalValue = value;
    }
    public resetKinesisFirehoseDestination() {
        this._kinesisFirehoseDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisFirehoseDestinationInput() {
        return this._kinesisFirehoseDestination.internalValue;
    }

    // matching_event_types - computed: false, optional: false, required: true
    private _matchingEventTypes?: string[]; 
    public get matchingEventTypes() {
        return this.getListAttribute('matching_event_types');
    }
    public set matchingEventTypes(value: string[]) {
        this._matchingEventTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingEventTypesInput() {
        return this._matchingEventTypes;
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

    // sns_destination - computed: true, optional: true, required: false
    private _snsDestination = new SnsDestinationPropertyOutputReference(this, "sns_destination");
    public get snsDestination() {
        return this._snsDestination;
    }
    public putSnsDestination(value: SnsDestinationProperty) {
        this._snsDestination.internalValue = value;
    }
    public resetSnsDestination() {
        this._snsDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsDestinationInput() {
        return this._snsDestination.internalValue;
    }
}
}
