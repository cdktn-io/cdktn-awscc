// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkAnalyzerConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the new resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#description CcNetworkAnalyzerConfiguration#description}
    */
    readonly description?: string;
    /**
    * Name of the network analyzer configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#name CcNetworkAnalyzerConfiguration#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#tags CcNetworkAnalyzerConfiguration#tags}
    */
    readonly tags?: CcNetworkAnalyzerConfiguration.TagProperty[] | cdktn.IResolvable;
    /**
    * Trace content for your wireless gateway and wireless device resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#trace_content CcNetworkAnalyzerConfiguration#trace_content}
    */
    readonly traceContent?: CcNetworkAnalyzerConfiguration.TraceContentProperty;
    /**
    * List of wireless gateway resources that have been added to the network analyzer configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices CcNetworkAnalyzerConfiguration#wireless_devices}
    */
    readonly wirelessDevices?: string[];
    /**
    * List of wireless gateway resources that have been added to the network analyzer configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways CcNetworkAnalyzerConfiguration#wireless_gateways}
    */
    readonly wirelessGateways?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}
*/
export class CcNetworkAnalyzerConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_network_analyzer_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkAnalyzerConfiguration to import
    * @param importFromId The id of the existing CcNetworkAnalyzerConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkAnalyzerConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_network_analyzer_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkAnalyzerConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkAnalyzerConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_network_analyzer_configuration',
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
        this._description = config.description;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._traceContent.internalValue = config.traceContent;
        this._wirelessDevices = config.wirelessDevices;
        this._wirelessGateways = config.wirelessGateways;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkAnalyzerConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkAnalyzerConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trace_content - computed: true, optional: true, required: false
    private _traceContent = new CcNetworkAnalyzerConfiguration.TraceContentPropertyOutputReference(this, "trace_content");
    public get traceContent() {
        return this._traceContent;
    }
    public putTraceContent(value: CcNetworkAnalyzerConfiguration.TraceContentProperty) {
        this._traceContent.internalValue = value;
    }
    public resetTraceContent() {
        this._traceContent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get traceContentInput() {
        return this._traceContent.internalValue;
    }

    // wireless_devices - computed: true, optional: true, required: false
    private _wirelessDevices?: string[]; 
    public get wirelessDevices() {
        return this.getListAttribute('wireless_devices');
    }
    public set wirelessDevices(value: string[]) {
        this._wirelessDevices = value;
    }
    public resetWirelessDevices() {
        this._wirelessDevices = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wirelessDevicesInput() {
        return this._wirelessDevices;
    }

    // wireless_gateways - computed: true, optional: true, required: false
    private _wirelessGateways?: string[]; 
    public get wirelessGateways() {
        return this.getListAttribute('wireless_gateways');
    }
    public set wirelessGateways(value: string[]) {
        this._wirelessGateways = value;
    }
    public resetWirelessGateways() {
        this._wirelessGateways = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wirelessGatewaysInput() {
        return this._wirelessGateways;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccNetworkAnalyzerConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
            trace_content: ccNetworkAnalyzerConfigurationTraceContentPropertyToTerraform(this._traceContent.internalValue),
            wireless_devices: cdktn.listMapper(cdktn.stringToTerraform, false)(this._wirelessDevices),
            wireless_gateways: cdktn.listMapper(cdktn.stringToTerraform, false)(this._wirelessGateways),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkAnalyzerConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcNetworkAnalyzerConfiguration.TagPropertyList",
            },
            trace_content: {
                value: ccNetworkAnalyzerConfigurationTraceContentPropertyToHclTerraform(this._traceContent.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkAnalyzerConfiguration.TraceContentProperty",
            },
            wireless_devices: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._wirelessDevices),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            wireless_gateways: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._wirelessGateways),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkAnalyzerConfigurationTagPropertyToTerraform(struct?: CcNetworkAnalyzerConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkAnalyzerConfigurationTagPropertyToHclTerraform(struct?: CcNetworkAnalyzerConfiguration.TagProperty | cdktn.IResolvable): any {
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


export function ccNetworkAnalyzerConfigurationTraceContentPropertyToTerraform(struct?: CcNetworkAnalyzerConfiguration.TraceContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_level: cdktn.stringToTerraform(struct!.logLevel),
        wireless_device_frame_info: cdktn.stringToTerraform(struct!.wirelessDeviceFrameInfo),
    }
}


export function ccNetworkAnalyzerConfigurationTraceContentPropertyToHclTerraform(struct?: CcNetworkAnalyzerConfiguration.TraceContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wireless_device_frame_info: {
            value: cdktn.stringToHclTerraform(struct!.wirelessDeviceFrameInfo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcNetworkAnalyzerConfiguration {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#key CcNetworkAnalyzerConfiguration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#value CcNetworkAnalyzerConfiguration#value}
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
export interface TraceContentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#log_level CcNetworkAnalyzerConfiguration#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info CcNetworkAnalyzerConfiguration#wireless_device_frame_info}
    */
    readonly wirelessDeviceFrameInfo?: string;
}
export class TraceContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TraceContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        if (this._wirelessDeviceFrameInfo !== undefined) {
            hasAnyValues = true;
            internalValueResult.wirelessDeviceFrameInfo = this._wirelessDeviceFrameInfo;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TraceContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logLevel = undefined;
            this._wirelessDeviceFrameInfo = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logLevel = value.logLevel;
            this._wirelessDeviceFrameInfo = value.wirelessDeviceFrameInfo;
        }
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }

    // wireless_device_frame_info - computed: true, optional: true, required: false
    private _wirelessDeviceFrameInfo?: string; 
    public get wirelessDeviceFrameInfo() {
        return this.getStringAttribute('wireless_device_frame_info');
    }
    public set wirelessDeviceFrameInfo(value: string) {
        this._wirelessDeviceFrameInfo = value;
    }
    public resetWirelessDeviceFrameInfo() {
        this._wirelessDeviceFrameInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wirelessDeviceFrameInfoInput() {
        return this._wirelessDeviceFrameInfo;
    }
}
}
