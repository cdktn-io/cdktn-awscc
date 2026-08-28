// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#channel_group_name CcChannel#channel_group_name}
    */
    readonly channelGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#channel_name CcChannel#channel_name}
    */
    readonly channelName: string;
    /**
    * <p>Enter any descriptive text that helps you to identify the channel.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#description CcChannel#description}
    */
    readonly description?: string;
    /**
    * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#input_switch_configuration CcChannel#input_switch_configuration}
    */
    readonly inputSwitchConfiguration?: CcChannel.InputSwitchConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#input_type CcChannel#input_type}
    */
    readonly inputType?: string;
    /**
    * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#output_header_configuration CcChannel#output_header_configuration}
    */
    readonly outputHeaderConfiguration?: CcChannel.OutputHeaderConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#output_locking_mode CcChannel#output_locking_mode}
    */
    readonly outputLockingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#tags CcChannel#tags}
    */
    readonly tags?: CcChannel.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel awscc_mediapackagev2_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediapackagev2_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackagev2_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel awscc_mediapackagev2_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediapackagev2_channel',
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
        this._channelGroupName = config.channelGroupName;
        this._channelName = config.channelName;
        this._description = config.description;
        this._inputSwitchConfiguration.internalValue = config.inputSwitchConfiguration;
        this._inputType = config.inputType;
        this._outputHeaderConfiguration.internalValue = config.outputHeaderConfiguration;
        this._outputLockingMode = config.outputLockingMode;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_group_name - computed: false, optional: false, required: true
    private _channelGroupName?: string; 
    public get channelGroupName() {
        return this.getStringAttribute('channel_group_name');
    }
    public set channelGroupName(value: string) {
        this._channelGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelGroupNameInput() {
        return this._channelGroupName;
    }

    // channel_name - computed: false, optional: false, required: true
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingest_endpoint_urls - computed: true, optional: false, required: false
    public get ingestEndpointUrls() {
        return this.getListAttribute('ingest_endpoint_urls');
    }

    // ingest_endpoints - computed: true, optional: false, required: false
    private _ingestEndpoints = new CcChannel.IngestEndpointsPropertyList(this, "ingest_endpoints", false);
    public get ingestEndpoints() {
        return this._ingestEndpoints;
    }

    // input_switch_configuration - computed: true, optional: true, required: false
    private _inputSwitchConfiguration = new CcChannel.InputSwitchConfigurationPropertyOutputReference(this, "input_switch_configuration");
    public get inputSwitchConfiguration() {
        return this._inputSwitchConfiguration;
    }
    public putInputSwitchConfiguration(value: CcChannel.InputSwitchConfigurationProperty) {
        this._inputSwitchConfiguration.internalValue = value;
    }
    public resetInputSwitchConfiguration() {
        this._inputSwitchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSwitchConfigurationInput() {
        return this._inputSwitchConfiguration.internalValue;
    }

    // input_type - computed: true, optional: true, required: false
    private _inputType?: string; 
    public get inputType() {
        return this.getStringAttribute('input_type');
    }
    public set inputType(value: string) {
        this._inputType = value;
    }
    public resetInputType() {
        this._inputType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTypeInput() {
        return this._inputType;
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }

    // output_header_configuration - computed: true, optional: true, required: false
    private _outputHeaderConfiguration = new CcChannel.OutputHeaderConfigurationPropertyOutputReference(this, "output_header_configuration");
    public get outputHeaderConfiguration() {
        return this._outputHeaderConfiguration;
    }
    public putOutputHeaderConfiguration(value: CcChannel.OutputHeaderConfigurationProperty) {
        this._outputHeaderConfiguration.internalValue = value;
    }
    public resetOutputHeaderConfiguration() {
        this._outputHeaderConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputHeaderConfigurationInput() {
        return this._outputHeaderConfiguration.internalValue;
    }

    // output_locking_mode - computed: true, optional: true, required: false
    private _outputLockingMode?: string; 
    public get outputLockingMode() {
        return this.getStringAttribute('output_locking_mode');
    }
    public set outputLockingMode(value: string) {
        this._outputLockingMode = value;
    }
    public resetOutputLockingMode() {
        this._outputLockingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLockingModeInput() {
        return this._outputLockingMode;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChannel.TagProperty[] | cdktn.IResolvable) {
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
            channel_group_name: cdktn.stringToTerraform(this._channelGroupName),
            channel_name: cdktn.stringToTerraform(this._channelName),
            description: cdktn.stringToTerraform(this._description),
            input_switch_configuration: ccChannelInputSwitchConfigurationPropertyToTerraform(this._inputSwitchConfiguration.internalValue),
            input_type: cdktn.stringToTerraform(this._inputType),
            output_header_configuration: ccChannelOutputHeaderConfigurationPropertyToTerraform(this._outputHeaderConfiguration.internalValue),
            output_locking_mode: cdktn.stringToTerraform(this._outputLockingMode),
            tags: cdktn.listMapper(ccChannelTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_group_name: {
                value: cdktn.stringToHclTerraform(this._channelGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
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
            input_switch_configuration: {
                value: ccChannelInputSwitchConfigurationPropertyToHclTerraform(this._inputSwitchConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.InputSwitchConfigurationProperty",
            },
            input_type: {
                value: cdktn.stringToHclTerraform(this._inputType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            output_header_configuration: {
                value: ccChannelOutputHeaderConfigurationPropertyToHclTerraform(this._outputHeaderConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.OutputHeaderConfigurationProperty",
            },
            output_locking_mode: {
                value: cdktn.stringToHclTerraform(this._outputLockingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelIngestEndpointsPropertyToTerraform(struct?: CcChannel.IngestEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccChannelIngestEndpointsPropertyToHclTerraform(struct?: CcChannel.IngestEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccChannelInputSwitchConfigurationPropertyToTerraform(struct?: CcChannel.InputSwitchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqcs_input_switching: cdktn.booleanToTerraform(struct!.mqcsInputSwitching),
        preferred_input: cdktn.numberToTerraform(struct!.preferredInput),
    }
}


export function ccChannelInputSwitchConfigurationPropertyToHclTerraform(struct?: CcChannel.InputSwitchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqcs_input_switching: {
            value: cdktn.booleanToHclTerraform(struct!.mqcsInputSwitching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preferred_input: {
            value: cdktn.numberToHclTerraform(struct!.preferredInput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelOutputHeaderConfigurationPropertyToTerraform(struct?: CcChannel.OutputHeaderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        publish_mqcs: cdktn.booleanToTerraform(struct!.publishMqcs),
    }
}


export function ccChannelOutputHeaderConfigurationPropertyToHclTerraform(struct?: CcChannel.OutputHeaderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        publish_mqcs: {
            value: cdktn.booleanToHclTerraform(struct!.publishMqcs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTagPropertyToTerraform(struct?: CcChannel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChannelTagPropertyToHclTerraform(struct?: CcChannel.TagProperty | cdktn.IResolvable): any {
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


export namespace CcChannel {
export interface IngestEndpointsProperty {
}
export class IngestEndpointsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IngestEndpointsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngestEndpointsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // url - computed: true, optional: false, required: false
    public get url() {
        return this.getStringAttribute('url');
    }
}

export class IngestEndpointsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): IngestEndpointsPropertyOutputReference {
        return new IngestEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputSwitchConfigurationProperty {
    /**
    * <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#mqcs_input_switching CcChannel#mqcs_input_switching}
    */
    readonly mqcsInputSwitching?: boolean | cdktn.IResolvable;
    /**
    * <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#preferred_input CcChannel#preferred_input}
    */
    readonly preferredInput?: number;
}
export class InputSwitchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputSwitchConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqcsInputSwitching !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqcsInputSwitching = this._mqcsInputSwitching;
        }
        if (this._preferredInput !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredInput = this._preferredInput;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputSwitchConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqcsInputSwitching = undefined;
            this._preferredInput = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqcsInputSwitching = value.mqcsInputSwitching;
            this._preferredInput = value.preferredInput;
        }
    }

    // mqcs_input_switching - computed: true, optional: true, required: false
    private _mqcsInputSwitching?: boolean | cdktn.IResolvable; 
    public get mqcsInputSwitching() {
        return this.getBooleanAttribute('mqcs_input_switching');
    }
    public set mqcsInputSwitching(value: boolean | cdktn.IResolvable) {
        this._mqcsInputSwitching = value;
    }
    public resetMqcsInputSwitching() {
        this._mqcsInputSwitching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqcsInputSwitchingInput() {
        return this._mqcsInputSwitching;
    }

    // preferred_input - computed: true, optional: true, required: false
    private _preferredInput?: number; 
    public get preferredInput() {
        return this.getNumberAttribute('preferred_input');
    }
    public set preferredInput(value: number) {
        this._preferredInput = value;
    }
    public resetPreferredInput() {
        this._preferredInput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredInputInput() {
        return this._preferredInput;
    }
}
export interface OutputHeaderConfigurationProperty {
    /**
    * <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#publish_mqcs CcChannel#publish_mqcs}
    */
    readonly publishMqcs?: boolean | cdktn.IResolvable;
}
export class OutputHeaderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputHeaderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._publishMqcs !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishMqcs = this._publishMqcs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputHeaderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._publishMqcs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._publishMqcs = value.publishMqcs;
        }
    }

    // publish_mqcs - computed: true, optional: true, required: false
    private _publishMqcs?: boolean | cdktn.IResolvable; 
    public get publishMqcs() {
        return this.getBooleanAttribute('publish_mqcs');
    }
    public set publishMqcs(value: boolean | cdktn.IResolvable) {
        this._publishMqcs = value;
    }
    public resetPublishMqcs() {
        this._publishMqcs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishMqcsInput() {
        return this._publishMqcs;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#key CcChannel#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_channel#value CcChannel#value}
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
