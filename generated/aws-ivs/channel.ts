// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether the channel is authorized.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#authorized CcChannel#authorized}
    */
    readonly authorized?: boolean | cdktn.IResolvable;
    /**
    * Indicates which content-packaging format is used (MPEG-TS or fMP4). If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#container_format CcChannel#container_format}
    */
    readonly containerFormat?: string;
    /**
    * Whether the channel allows insecure ingest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#insecure_ingest CcChannel#insecure_ingest}
    */
    readonly insecureIngest?: boolean | cdktn.IResolvable;
    /**
    * Channel latency mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#latency_mode CcChannel#latency_mode}
    */
    readonly latencyMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#multitrack_input_configuration CcChannel#multitrack_input_configuration}
    */
    readonly multitrackInputConfiguration?: CcChannel.MultitrackInputConfigurationProperty;
    /**
    * Channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#name CcChannel#name}
    */
    readonly name?: string;
    /**
    * Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#preset CcChannel#preset}
    */
    readonly preset?: string;
    /**
    * Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#recording_configuration_arn CcChannel#recording_configuration_arn}
    */
    readonly recordingConfigurationArn?: string;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#tags CcChannel#tags}
    */
    readonly tags?: CcChannel.TagProperty[] | cdktn.IResolvable;
    /**
    * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#type CcChannel#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel awscc_ivs_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivs_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel awscc_ivs_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivs_channel',
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
        this._authorized = config.authorized;
        this._containerFormat = config.containerFormat;
        this._insecureIngest = config.insecureIngest;
        this._latencyMode = config.latencyMode;
        this._multitrackInputConfiguration.internalValue = config.multitrackInputConfiguration;
        this._name = config.name;
        this._preset = config.preset;
        this._recordingConfigurationArn = config.recordingConfigurationArn;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authorized - computed: true, optional: true, required: false
    private _authorized?: boolean | cdktn.IResolvable; 
    public get authorized() {
        return this.getBooleanAttribute('authorized');
    }
    public set authorized(value: boolean | cdktn.IResolvable) {
        this._authorized = value;
    }
    public resetAuthorized() {
        this._authorized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizedInput() {
        return this._authorized;
    }

    // container_format - computed: true, optional: true, required: false
    private _containerFormat?: string; 
    public get containerFormat() {
        return this.getStringAttribute('container_format');
    }
    public set containerFormat(value: string) {
        this._containerFormat = value;
    }
    public resetContainerFormat() {
        this._containerFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerFormatInput() {
        return this._containerFormat;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingest_endpoint - computed: true, optional: false, required: false
    public get ingestEndpoint() {
        return this.getStringAttribute('ingest_endpoint');
    }

    // insecure_ingest - computed: true, optional: true, required: false
    private _insecureIngest?: boolean | cdktn.IResolvable; 
    public get insecureIngest() {
        return this.getBooleanAttribute('insecure_ingest');
    }
    public set insecureIngest(value: boolean | cdktn.IResolvable) {
        this._insecureIngest = value;
    }
    public resetInsecureIngest() {
        this._insecureIngest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insecureIngestInput() {
        return this._insecureIngest;
    }

    // latency_mode - computed: true, optional: true, required: false
    private _latencyMode?: string; 
    public get latencyMode() {
        return this.getStringAttribute('latency_mode');
    }
    public set latencyMode(value: string) {
        this._latencyMode = value;
    }
    public resetLatencyMode() {
        this._latencyMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latencyModeInput() {
        return this._latencyMode;
    }

    // multitrack_input_configuration - computed: true, optional: true, required: false
    private _multitrackInputConfiguration = new CcChannel.MultitrackInputConfigurationPropertyOutputReference(this, "multitrack_input_configuration");
    public get multitrackInputConfiguration() {
        return this._multitrackInputConfiguration;
    }
    public putMultitrackInputConfiguration(value: CcChannel.MultitrackInputConfigurationProperty) {
        this._multitrackInputConfiguration.internalValue = value;
    }
    public resetMultitrackInputConfiguration() {
        this._multitrackInputConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multitrackInputConfigurationInput() {
        return this._multitrackInputConfiguration.internalValue;
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

    // playback_url - computed: true, optional: false, required: false
    public get playbackUrl() {
        return this.getStringAttribute('playback_url');
    }

    // preset - computed: true, optional: true, required: false
    private _preset?: string; 
    public get preset() {
        return this.getStringAttribute('preset');
    }
    public set preset(value: string) {
        this._preset = value;
    }
    public resetPreset() {
        this._preset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get presetInput() {
        return this._preset;
    }

    // recording_configuration_arn - computed: true, optional: true, required: false
    private _recordingConfigurationArn?: string; 
    public get recordingConfigurationArn() {
        return this.getStringAttribute('recording_configuration_arn');
    }
    public set recordingConfigurationArn(value: string) {
        this._recordingConfigurationArn = value;
    }
    public resetRecordingConfigurationArn() {
        this._recordingConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordingConfigurationArnInput() {
        return this._recordingConfigurationArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannel.TagPropertyList(this, "tags", true);
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
            authorized: cdktn.booleanToTerraform(this._authorized),
            container_format: cdktn.stringToTerraform(this._containerFormat),
            insecure_ingest: cdktn.booleanToTerraform(this._insecureIngest),
            latency_mode: cdktn.stringToTerraform(this._latencyMode),
            multitrack_input_configuration: ccChannelMultitrackInputConfigurationPropertyToTerraform(this._multitrackInputConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            preset: cdktn.stringToTerraform(this._preset),
            recording_configuration_arn: cdktn.stringToTerraform(this._recordingConfigurationArn),
            tags: cdktn.listMapper(ccChannelTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authorized: {
                value: cdktn.booleanToHclTerraform(this._authorized),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            container_format: {
                value: cdktn.stringToHclTerraform(this._containerFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insecure_ingest: {
                value: cdktn.booleanToHclTerraform(this._insecureIngest),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            latency_mode: {
                value: cdktn.stringToHclTerraform(this._latencyMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multitrack_input_configuration: {
                value: ccChannelMultitrackInputConfigurationPropertyToHclTerraform(this._multitrackInputConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.MultitrackInputConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preset: {
                value: cdktn.stringToHclTerraform(this._preset),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recording_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._recordingConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcChannel.TagPropertyList",
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

export function ccChannelMultitrackInputConfigurationPropertyToTerraform(struct?: CcChannel.MultitrackInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        maximum_resolution: cdktn.stringToTerraform(struct!.maximumResolution),
        policy: cdktn.stringToTerraform(struct!.policy),
    }
}


export function ccChannelMultitrackInputConfigurationPropertyToHclTerraform(struct?: CcChannel.MultitrackInputConfigurationProperty | cdktn.IResolvable): any {
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
        maximum_resolution: {
            value: cdktn.stringToHclTerraform(struct!.maximumResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy: {
            value: cdktn.stringToHclTerraform(struct!.policy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
export interface MultitrackInputConfigurationProperty {
    /**
    * Indicates whether multitrack input is enabled. Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#enabled CcChannel#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Maximum resolution for multitrack input. Required if enabled is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#maximum_resolution CcChannel#maximum_resolution}
    */
    readonly maximumResolution?: string;
    /**
    * Indicates whether multitrack input is allowed or required. Required if enabled is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#policy CcChannel#policy}
    */
    readonly policy?: string;
}
export class MultitrackInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultitrackInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._maximumResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumResolution = this._maximumResolution;
        }
        if (this._policy !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultitrackInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._maximumResolution = undefined;
            this._policy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._maximumResolution = value.maximumResolution;
            this._policy = value.policy;
        }
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

    // maximum_resolution - computed: true, optional: true, required: false
    private _maximumResolution?: string; 
    public get maximumResolution() {
        return this.getStringAttribute('maximum_resolution');
    }
    public set maximumResolution(value: string) {
        this._maximumResolution = value;
    }
    public resetMaximumResolution() {
        this._maximumResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumResolutionInput() {
        return this._maximumResolution;
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#key CcChannel#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_channel#value CcChannel#value}
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
