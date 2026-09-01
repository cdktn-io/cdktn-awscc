// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouterInputProps extends cdktn.TerraformMetaArguments {
    /**
    * The Availability Zone where you want to create the router input. This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#availability_zone CcRouterInput#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The configuration settings for a router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#configuration CcRouterInput#configuration}
    */
    readonly configuration: CcRouterInput.RouterInputConfigurationProperty;
    /**
    * The content quality analysis configuration for the router input. The content quality analysis feature only monitors the first video stream and the first audio stream it encounters within the router input source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#content_quality_analysis_configuration CcRouterInput#content_quality_analysis_configuration}
    */
    readonly contentQualityAnalysisConfiguration?: CcRouterInput.RouterContentQualityAnalysisConfigurationProperty;
    /**
    * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#maintenance_configuration CcRouterInput#maintenance_configuration}
    */
    readonly maintenanceConfiguration?: CcRouterInput.MaintenanceConfigurationProperty;
    /**
    * The maximum bitrate for the router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#maximum_bitrate CcRouterInput#maximum_bitrate}
    */
    readonly maximumBitrate: number;
    /**
    * The name of the router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#name CcRouterInput#name}
    */
    readonly name: string;
    /**
    * The Amazon Web Services Region for the router input. Defaults to the current region if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#region_name CcRouterInput#region_name}
    */
    readonly regionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#routing_scope CcRouterInput#routing_scope}
    */
    readonly routingScope: string;
    /**
    * Key-value pairs that can be used to tag and organize this router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#tags CcRouterInput#tags}
    */
    readonly tags?: CcRouterInput.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#tier CcRouterInput#tier}
    */
    readonly tier: string;
    /**
    * The transit encryption settings for a router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#transit_encryption CcRouterInput#transit_encryption}
    */
    readonly transitEncryption?: CcRouterInput.RouterInputTransitEncryptionProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input awscc_mediaconnect_router_input}
*/
export class CcRouterInput extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_router_input";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRouterInput resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRouterInput to import
    * @param importFromId The id of the existing CcRouterInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRouterInput to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_input", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input awscc_mediaconnect_router_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouterInputProps
    */
    public constructor(scope: Construct, id: string, config: CcRouterInputProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_router_input',
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
        this._availabilityZone = config.availabilityZone;
        this._configuration.internalValue = config.configuration;
        this._contentQualityAnalysisConfiguration.internalValue = config.contentQualityAnalysisConfiguration;
        this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
        this._maximumBitrate = config.maximumBitrate;
        this._name = config.name;
        this._regionName = config.regionName;
        this._routingScope = config.routingScope;
        this._tags.internalValue = config.tags;
        this._tier = config.tier;
        this._transitEncryption.internalValue = config.transitEncryption;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcRouterInput.RouterInputConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcRouterInput.RouterInputConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // content_quality_analysis_configuration - computed: true, optional: true, required: false
    private _contentQualityAnalysisConfiguration = new CcRouterInput.RouterContentQualityAnalysisConfigurationPropertyOutputReference(this, "content_quality_analysis_configuration");
    public get contentQualityAnalysisConfiguration() {
        return this._contentQualityAnalysisConfiguration;
    }
    public putContentQualityAnalysisConfiguration(value: CcRouterInput.RouterContentQualityAnalysisConfigurationProperty) {
        this._contentQualityAnalysisConfiguration.internalValue = value;
    }
    public resetContentQualityAnalysisConfiguration() {
        this._contentQualityAnalysisConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentQualityAnalysisConfigurationInput() {
        return this._contentQualityAnalysisConfiguration.internalValue;
    }

    // content_quality_analysis_type - computed: true, optional: false, required: false
    public get contentQualityAnalysisType() {
        return this.getStringAttribute('content_quality_analysis_type');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_type - computed: true, optional: false, required: false
    public get inputType() {
        return this.getStringAttribute('input_type');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }

    // maintenance_configuration - computed: true, optional: true, required: false
    private _maintenanceConfiguration = new CcRouterInput.MaintenanceConfigurationPropertyOutputReference(this, "maintenance_configuration");
    public get maintenanceConfiguration() {
        return this._maintenanceConfiguration;
    }
    public putMaintenanceConfiguration(value: CcRouterInput.MaintenanceConfigurationProperty) {
        this._maintenanceConfiguration.internalValue = value;
    }
    public resetMaintenanceConfiguration() {
        this._maintenanceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceConfigurationInput() {
        return this._maintenanceConfiguration.internalValue;
    }

    // maintenance_type - computed: true, optional: false, required: false
    public get maintenanceType() {
        return this.getStringAttribute('maintenance_type');
    }

    // maximum_bitrate - computed: false, optional: false, required: true
    private _maximumBitrate?: number; 
    public get maximumBitrate() {
        return this.getNumberAttribute('maximum_bitrate');
    }
    public set maximumBitrate(value: number) {
        this._maximumBitrate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBitrateInput() {
        return this._maximumBitrate;
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

    // region_name - computed: true, optional: true, required: false
    private _regionName?: string; 
    public get regionName() {
        return this.getStringAttribute('region_name');
    }
    public set regionName(value: string) {
        this._regionName = value;
    }
    public resetRegionName() {
        this._regionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionNameInput() {
        return this._regionName;
    }

    // routed_outputs - computed: true, optional: false, required: false
    public get routedOutputs() {
        return this.getNumberAttribute('routed_outputs');
    }

    // router_input_id - computed: true, optional: false, required: false
    public get routerInputId() {
        return this.getStringAttribute('router_input_id');
    }

    // routing_scope - computed: false, optional: false, required: true
    private _routingScope?: string; 
    public get routingScope() {
        return this.getStringAttribute('routing_scope');
    }
    public set routingScope(value: string) {
        this._routingScope = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routingScopeInput() {
        return this._routingScope;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRouterInput.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRouterInput.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tier - computed: false, optional: false, required: true
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }

    // transit_encryption - computed: true, optional: true, required: false
    private _transitEncryption = new CcRouterInput.RouterInputTransitEncryptionPropertyOutputReference(this, "transit_encryption");
    public get transitEncryption() {
        return this._transitEncryption;
    }
    public putTransitEncryption(value: CcRouterInput.RouterInputTransitEncryptionProperty) {
        this._transitEncryption.internalValue = value;
    }
    public resetTransitEncryption() {
        this._transitEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionInput() {
        return this._transitEncryption.internalValue;
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
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            configuration: ccRouterInputRouterInputConfigurationPropertyToTerraform(this._configuration.internalValue),
            content_quality_analysis_configuration: ccRouterInputRouterContentQualityAnalysisConfigurationPropertyToTerraform(this._contentQualityAnalysisConfiguration.internalValue),
            maintenance_configuration: ccRouterInputMaintenanceConfigurationPropertyToTerraform(this._maintenanceConfiguration.internalValue),
            maximum_bitrate: cdktn.numberToTerraform(this._maximumBitrate),
            name: cdktn.stringToTerraform(this._name),
            region_name: cdktn.stringToTerraform(this._regionName),
            routing_scope: cdktn.stringToTerraform(this._routingScope),
            tags: cdktn.listMapper(ccRouterInputTagPropertyToTerraform, false)(this._tags.internalValue),
            tier: cdktn.stringToTerraform(this._tier),
            transit_encryption: ccRouterInputRouterInputTransitEncryptionPropertyToTerraform(this._transitEncryption.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: ccRouterInputRouterInputConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouterInput.RouterInputConfigurationProperty",
            },
            content_quality_analysis_configuration: {
                value: ccRouterInputRouterContentQualityAnalysisConfigurationPropertyToHclTerraform(this._contentQualityAnalysisConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouterInput.RouterContentQualityAnalysisConfigurationProperty",
            },
            maintenance_configuration: {
                value: ccRouterInputMaintenanceConfigurationPropertyToHclTerraform(this._maintenanceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouterInput.MaintenanceConfigurationProperty",
            },
            maximum_bitrate: {
                value: cdktn.numberToHclTerraform(this._maximumBitrate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region_name: {
                value: cdktn.stringToHclTerraform(this._regionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing_scope: {
                value: cdktn.stringToHclTerraform(this._routingScope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRouterInputTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRouterInput.TagPropertyList",
            },
            tier: {
                value: cdktn.stringToHclTerraform(this._tier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_encryption: {
                value: ccRouterInputRouterInputTransitEncryptionPropertyToHclTerraform(this._transitEncryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouterInput.RouterInputTransitEncryptionProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRouterInputRistRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.RistRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port: cdktn.numberToTerraform(struct!.port),
        recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
    }
}


export function ccRouterInputRistRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.RistRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        recovery_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputRtpRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.RtpRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccRouterInputRtpRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.RtpRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        forward_error_correction: {
            value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSecretsManagerEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterInput.SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputSecretsManagerEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterInput.SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSrtDecryptionConfigurationPropertyToTerraform(struct?: CcRouterInput.SrtDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccRouterInputSecretsManagerEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKey),
    }
}


export function ccRouterInputSrtDecryptionConfigurationPropertyToHclTerraform(struct?: CcRouterInput.SrtDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccRouterInputSecretsManagerEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretsManagerEncryptionKeyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSrtCallerRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.SrtCallerRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decryption_configuration: ccRouterInputSrtDecryptionConfigurationPropertyToTerraform(struct!.decryptionConfiguration),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        source_address: cdktn.stringToTerraform(struct!.sourceAddress),
        source_port: cdktn.numberToTerraform(struct!.sourcePort),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccRouterInputSrtCallerRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.SrtCallerRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decryption_configuration: {
            value: ccRouterInputSrtDecryptionConfigurationPropertyToHclTerraform(struct!.decryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtDecryptionConfigurationProperty",
        },
        minimum_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        source_address: {
            value: cdktn.stringToHclTerraform(struct!.sourceAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port: {
            value: cdktn.numberToHclTerraform(struct!.sourcePort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stream_id: {
            value: cdktn.stringToHclTerraform(struct!.streamId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyPropertyToTerraform(struct?: CcRouterInput.ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationPropertyToTerraform(struct?: CcRouterInput.ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
    }
}


export function ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSrtListenerRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.SrtListenerRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decryption_configuration: ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationPropertyToTerraform(struct!.decryptionConfiguration),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccRouterInputSrtListenerRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.SrtListenerRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decryption_configuration: {
            value: ccRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationPropertyToHclTerraform(struct!.decryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty",
        },
        minimum_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputFailoverRouterInputProtocolConfigurationPropertyToTerraform(struct?: CcRouterInput.FailoverRouterInputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rist: ccRouterInputRistRouterInputConfigurationPropertyToTerraform(struct!.rist),
        rtp: ccRouterInputRtpRouterInputConfigurationPropertyToTerraform(struct!.rtp),
        srt_caller: ccRouterInputSrtCallerRouterInputConfigurationPropertyToTerraform(struct!.srtCaller),
        srt_listener: ccRouterInputSrtListenerRouterInputConfigurationPropertyToTerraform(struct!.srtListener),
    }
}


export function ccRouterInputFailoverRouterInputProtocolConfigurationPropertyToHclTerraform(struct?: CcRouterInput.FailoverRouterInputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rist: {
            value: ccRouterInputRistRouterInputConfigurationPropertyToHclTerraform(struct!.rist),
            isBlock: true,
            type: "struct",
            storageClassType: "RistRouterInputConfigurationProperty",
        },
        rtp: {
            value: ccRouterInputRtpRouterInputConfigurationPropertyToHclTerraform(struct!.rtp),
            isBlock: true,
            type: "struct",
            storageClassType: "RtpRouterInputConfigurationProperty",
        },
        srt_caller: {
            value: ccRouterInputSrtCallerRouterInputConfigurationPropertyToHclTerraform(struct!.srtCaller),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtCallerRouterInputConfigurationProperty",
        },
        srt_listener: {
            value: ccRouterInputSrtListenerRouterInputConfigurationPropertyToHclTerraform(struct!.srtListener),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerRouterInputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputFailoverRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.FailoverRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
        primary_source_index: cdktn.numberToTerraform(struct!.primarySourceIndex),
        protocol_configurations: cdktn.listMapper(ccRouterInputFailoverRouterInputProtocolConfigurationPropertyToTerraform, false)(struct!.protocolConfigurations),
        source_priority_mode: cdktn.stringToTerraform(struct!.sourcePriorityMode),
    }
}


export function ccRouterInputFailoverRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.FailoverRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_interface_arn: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_source_index: {
            value: cdktn.numberToHclTerraform(struct!.primarySourceIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol_configurations: {
            value: cdktn.listMapperHcl(ccRouterInputFailoverRouterInputProtocolConfigurationPropertyToHclTerraform, false)(struct!.protocolConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "FailoverRouterInputProtocolConfigurationPropertyList",
        },
        source_priority_mode: {
            value: cdktn.stringToHclTerraform(struct!.sourcePriorityMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToTerraform(struct?: CcRouterInput.ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputFlowTransitEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterInput.FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatic: cdktn.stringToTerraform(struct!.automatic),
        secrets_manager: ccRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToTerraform(struct!.secretsManager),
    }
}


export function ccRouterInputFlowTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterInput.FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        automatic: {
            value: cdktn.stringToHclTerraform(struct!.automatic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager: {
            value: ccRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToHclTerraform(struct!.secretsManager),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputFlowTransitEncryptionPropertyToTerraform(struct?: CcRouterInput.FlowTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key_configuration: ccRouterInputFlowTransitEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKeyConfiguration),
        encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
    }
}


export function ccRouterInputFlowTransitEncryptionPropertyToHclTerraform(struct?: CcRouterInput.FlowTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key_configuration: {
            value: ccRouterInputFlowTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKeyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FlowTransitEncryptionKeyConfigurationProperty",
        },
        encryption_key_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMediaConnectFlowRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.MediaConnectFlowRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_arn: cdktn.stringToTerraform(struct!.flowArn),
        flow_output_arn: cdktn.stringToTerraform(struct!.flowOutputArn),
        source_transit_decryption: ccRouterInputFlowTransitEncryptionPropertyToTerraform(struct!.sourceTransitDecryption),
    }
}


export function ccRouterInputMediaConnectFlowRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.MediaConnectFlowRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.flowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        flow_output_arn: {
            value: cdktn.stringToHclTerraform(struct!.flowOutputArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_transit_decryption: {
            value: ccRouterInputFlowTransitEncryptionPropertyToHclTerraform(struct!.sourceTransitDecryption),
            isBlock: true,
            type: "struct",
            storageClassType: "FlowTransitEncryptionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToTerraform(struct?: CcRouterInput.ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMediaLiveTransitEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterInput.MediaLiveTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatic: cdktn.stringToTerraform(struct!.automatic),
        secrets_manager: ccRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToTerraform(struct!.secretsManager),
    }
}


export function ccRouterInputMediaLiveTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterInput.MediaLiveTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        automatic: {
            value: cdktn.stringToHclTerraform(struct!.automatic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager: {
            value: ccRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyToHclTerraform(struct!.secretsManager),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMediaLiveTransitEncryptionPropertyToTerraform(struct?: CcRouterInput.MediaLiveTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key_configuration: ccRouterInputMediaLiveTransitEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKeyConfiguration),
        encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
    }
}


export function ccRouterInputMediaLiveTransitEncryptionPropertyToHclTerraform(struct?: CcRouterInput.MediaLiveTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key_configuration: {
            value: ccRouterInputMediaLiveTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKeyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaLiveTransitEncryptionKeyConfigurationProperty",
        },
        encryption_key_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMediaLiveChannelRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.MediaLiveChannelRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        media_live_channel_arn: cdktn.stringToTerraform(struct!.mediaLiveChannelArn),
        media_live_channel_output_name: cdktn.stringToTerraform(struct!.mediaLiveChannelOutputName),
        media_live_pipeline_id: cdktn.stringToTerraform(struct!.mediaLivePipelineId),
        source_transit_decryption: ccRouterInputMediaLiveTransitEncryptionPropertyToTerraform(struct!.sourceTransitDecryption),
    }
}


export function ccRouterInputMediaLiveChannelRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.MediaLiveChannelRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        media_live_channel_arn: {
            value: cdktn.stringToHclTerraform(struct!.mediaLiveChannelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        media_live_channel_output_name: {
            value: cdktn.stringToHclTerraform(struct!.mediaLiveChannelOutputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        media_live_pipeline_id: {
            value: cdktn.stringToHclTerraform(struct!.mediaLivePipelineId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_transit_decryption: {
            value: ccRouterInputMediaLiveTransitEncryptionPropertyToHclTerraform(struct!.sourceTransitDecryption),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaLiveTransitEncryptionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationMergeProtocolConfigurationsRistPropertyToTerraform(struct?: CcRouterInput.ConfigurationMergeProtocolConfigurationsRistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port: cdktn.numberToTerraform(struct!.port),
        recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
    }
}


export function ccRouterInputConfigurationMergeProtocolConfigurationsRistPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationMergeProtocolConfigurationsRistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        recovery_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationMergeProtocolConfigurationsRtpPropertyToTerraform(struct?: CcRouterInput.ConfigurationMergeProtocolConfigurationsRtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccRouterInputConfigurationMergeProtocolConfigurationsRtpPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationMergeProtocolConfigurationsRtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        forward_error_correction: {
            value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMergeRouterInputProtocolConfigurationPropertyToTerraform(struct?: CcRouterInput.MergeRouterInputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rist: ccRouterInputConfigurationMergeProtocolConfigurationsRistPropertyToTerraform(struct!.rist),
        rtp: ccRouterInputConfigurationMergeProtocolConfigurationsRtpPropertyToTerraform(struct!.rtp),
    }
}


export function ccRouterInputMergeRouterInputProtocolConfigurationPropertyToHclTerraform(struct?: CcRouterInput.MergeRouterInputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rist: {
            value: ccRouterInputConfigurationMergeProtocolConfigurationsRistPropertyToHclTerraform(struct!.rist),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationMergeProtocolConfigurationsRistProperty",
        },
        rtp: {
            value: ccRouterInputConfigurationMergeProtocolConfigurationsRtpPropertyToHclTerraform(struct!.rtp),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationMergeProtocolConfigurationsRtpProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMergeRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.MergeRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        merge_recovery_window_milliseconds: cdktn.numberToTerraform(struct!.mergeRecoveryWindowMilliseconds),
        network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
        protocol_configurations: cdktn.listMapper(ccRouterInputMergeRouterInputProtocolConfigurationPropertyToTerraform, false)(struct!.protocolConfigurations),
    }
}


export function ccRouterInputMergeRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.MergeRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        merge_recovery_window_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.mergeRecoveryWindowMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_interface_arn: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol_configurations: {
            value: cdktn.listMapperHcl(ccRouterInputMergeRouterInputProtocolConfigurationPropertyToHclTerraform, false)(struct!.protocolConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "MergeRouterInputProtocolConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationStandardProtocolConfigurationRistPropertyToTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationRistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port: cdktn.numberToTerraform(struct!.port),
        recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
    }
}


export function ccRouterInputConfigurationStandardProtocolConfigurationRistPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationRistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        recovery_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationStandardProtocolConfigurationRtpPropertyToTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationRtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccRouterInputConfigurationStandardProtocolConfigurationRtpPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationRtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        forward_error_correction: {
            value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyPropertyToTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationPropertyToTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
    }
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSrtCallerPropertyToTerraform(struct?: CcRouterInput.SrtCallerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decryption_configuration: ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationPropertyToTerraform(struct!.decryptionConfiguration),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        source_address: cdktn.stringToTerraform(struct!.sourceAddress),
        source_port: cdktn.numberToTerraform(struct!.sourcePort),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccRouterInputSrtCallerPropertyToHclTerraform(struct?: CcRouterInput.SrtCallerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decryption_configuration: {
            value: ccRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationPropertyToHclTerraform(struct!.decryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty",
        },
        minimum_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        source_address: {
            value: cdktn.stringToHclTerraform(struct!.sourceAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port: {
            value: cdktn.numberToHclTerraform(struct!.sourcePort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stream_id: {
            value: cdktn.stringToHclTerraform(struct!.streamId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyPropertyToTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationPropertyToTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
    }
}


export function ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationPropertyToHclTerraform(struct?: CcRouterInput.ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSrtListenerPropertyToTerraform(struct?: CcRouterInput.SrtListenerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decryption_configuration: ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationPropertyToTerraform(struct!.decryptionConfiguration),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccRouterInputSrtListenerPropertyToHclTerraform(struct?: CcRouterInput.SrtListenerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decryption_configuration: {
            value: ccRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationPropertyToHclTerraform(struct!.decryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty",
        },
        minimum_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputRouterInputProtocolConfigurationPropertyToTerraform(struct?: CcRouterInput.RouterInputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rist: ccRouterInputConfigurationStandardProtocolConfigurationRistPropertyToTerraform(struct!.rist),
        rtp: ccRouterInputConfigurationStandardProtocolConfigurationRtpPropertyToTerraform(struct!.rtp),
        srt_caller: ccRouterInputSrtCallerPropertyToTerraform(struct!.srtCaller),
        srt_listener: ccRouterInputSrtListenerPropertyToTerraform(struct!.srtListener),
    }
}


export function ccRouterInputRouterInputProtocolConfigurationPropertyToHclTerraform(struct?: CcRouterInput.RouterInputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rist: {
            value: ccRouterInputConfigurationStandardProtocolConfigurationRistPropertyToHclTerraform(struct!.rist),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationRistProperty",
        },
        rtp: {
            value: ccRouterInputConfigurationStandardProtocolConfigurationRtpPropertyToHclTerraform(struct!.rtp),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationRtpProperty",
        },
        srt_caller: {
            value: ccRouterInputSrtCallerPropertyToHclTerraform(struct!.srtCaller),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtCallerProperty",
        },
        srt_listener: {
            value: ccRouterInputSrtListenerPropertyToHclTerraform(struct!.srtListener),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputStandardRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.StandardRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        protocol_configuration: ccRouterInputRouterInputProtocolConfigurationPropertyToTerraform(struct!.protocolConfiguration),
    }
}


export function ccRouterInputStandardRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.StandardRouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_interface_arn: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol_configuration: {
            value: ccRouterInputRouterInputProtocolConfigurationPropertyToHclTerraform(struct!.protocolConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RouterInputProtocolConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputRouterInputConfigurationPropertyToTerraform(struct?: CcRouterInput.RouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failover: ccRouterInputFailoverRouterInputConfigurationPropertyToTerraform(struct!.failover),
        media_connect_flow: ccRouterInputMediaConnectFlowRouterInputConfigurationPropertyToTerraform(struct!.mediaConnectFlow),
        media_live_channel: ccRouterInputMediaLiveChannelRouterInputConfigurationPropertyToTerraform(struct!.mediaLiveChannel),
        merge: ccRouterInputMergeRouterInputConfigurationPropertyToTerraform(struct!.merge),
        standard: ccRouterInputStandardRouterInputConfigurationPropertyToTerraform(struct!.standard),
    }
}


export function ccRouterInputRouterInputConfigurationPropertyToHclTerraform(struct?: CcRouterInput.RouterInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failover: {
            value: ccRouterInputFailoverRouterInputConfigurationPropertyToHclTerraform(struct!.failover),
            isBlock: true,
            type: "struct",
            storageClassType: "FailoverRouterInputConfigurationProperty",
        },
        media_connect_flow: {
            value: ccRouterInputMediaConnectFlowRouterInputConfigurationPropertyToHclTerraform(struct!.mediaConnectFlow),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaConnectFlowRouterInputConfigurationProperty",
        },
        media_live_channel: {
            value: ccRouterInputMediaLiveChannelRouterInputConfigurationPropertyToHclTerraform(struct!.mediaLiveChannel),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaLiveChannelRouterInputConfigurationProperty",
        },
        merge: {
            value: ccRouterInputMergeRouterInputConfigurationPropertyToHclTerraform(struct!.merge),
            isBlock: true,
            type: "struct",
            storageClassType: "MergeRouterInputConfigurationProperty",
        },
        standard: {
            value: ccRouterInputStandardRouterInputConfigurationPropertyToHclTerraform(struct!.standard),
            isBlock: true,
            type: "struct",
            storageClassType: "StandardRouterInputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputBlackFramesConfigurationPropertyToTerraform(struct?: CcRouterInput.BlackFramesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        threshold_seconds: cdktn.numberToTerraform(struct!.thresholdSeconds),
    }
}


export function ccRouterInputBlackFramesConfigurationPropertyToHclTerraform(struct?: CcRouterInput.BlackFramesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        threshold_seconds: {
            value: cdktn.numberToHclTerraform(struct!.thresholdSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputFrozenFramesConfigurationPropertyToTerraform(struct?: CcRouterInput.FrozenFramesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        threshold_seconds: cdktn.numberToTerraform(struct!.thresholdSeconds),
    }
}


export function ccRouterInputFrozenFramesConfigurationPropertyToHclTerraform(struct?: CcRouterInput.FrozenFramesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        threshold_seconds: {
            value: cdktn.numberToHclTerraform(struct!.thresholdSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputSilentAudioConfigurationPropertyToTerraform(struct?: CcRouterInput.SilentAudioConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        threshold_seconds: cdktn.numberToTerraform(struct!.thresholdSeconds),
    }
}


export function ccRouterInputSilentAudioConfigurationPropertyToHclTerraform(struct?: CcRouterInput.SilentAudioConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        threshold_seconds: {
            value: cdktn.numberToHclTerraform(struct!.thresholdSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputContentQualityAnalysisFeatureConfigurationPropertyToTerraform(struct?: CcRouterInput.ContentQualityAnalysisFeatureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        black_frames: ccRouterInputBlackFramesConfigurationPropertyToTerraform(struct!.blackFrames),
        frozen_frames: ccRouterInputFrozenFramesConfigurationPropertyToTerraform(struct!.frozenFrames),
        silent_audio: ccRouterInputSilentAudioConfigurationPropertyToTerraform(struct!.silentAudio),
    }
}


export function ccRouterInputContentQualityAnalysisFeatureConfigurationPropertyToHclTerraform(struct?: CcRouterInput.ContentQualityAnalysisFeatureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        black_frames: {
            value: ccRouterInputBlackFramesConfigurationPropertyToHclTerraform(struct!.blackFrames),
            isBlock: true,
            type: "struct",
            storageClassType: "BlackFramesConfigurationProperty",
        },
        frozen_frames: {
            value: ccRouterInputFrozenFramesConfigurationPropertyToHclTerraform(struct!.frozenFrames),
            isBlock: true,
            type: "struct",
            storageClassType: "FrozenFramesConfigurationProperty",
        },
        silent_audio: {
            value: ccRouterInputSilentAudioConfigurationPropertyToHclTerraform(struct!.silentAudio),
            isBlock: true,
            type: "struct",
            storageClassType: "SilentAudioConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputRouterContentQualityAnalysisConfigurationPropertyToTerraform(struct?: CcRouterInput.RouterContentQualityAnalysisConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_level: ccRouterInputContentQualityAnalysisFeatureConfigurationPropertyToTerraform(struct!.contentLevel),
    }
}


export function ccRouterInputRouterContentQualityAnalysisConfigurationPropertyToHclTerraform(struct?: CcRouterInput.RouterContentQualityAnalysisConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_level: {
            value: ccRouterInputContentQualityAnalysisFeatureConfigurationPropertyToHclTerraform(struct!.contentLevel),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentQualityAnalysisFeatureConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputPreferredDayTimeMaintenanceConfigurationPropertyToTerraform(struct?: CcRouterInput.PreferredDayTimeMaintenanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day: cdktn.stringToTerraform(struct!.day),
        time: cdktn.stringToTerraform(struct!.time),
    }
}


export function ccRouterInputPreferredDayTimeMaintenanceConfigurationPropertyToHclTerraform(struct?: CcRouterInput.PreferredDayTimeMaintenanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day: {
            value: cdktn.stringToHclTerraform(struct!.day),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time: {
            value: cdktn.stringToHclTerraform(struct!.time),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputMaintenanceConfigurationPropertyToTerraform(struct?: CcRouterInput.MaintenanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default: cdktn.stringToTerraform(struct!.default),
        preferred_day_time: ccRouterInputPreferredDayTimeMaintenanceConfigurationPropertyToTerraform(struct!.preferredDayTime),
    }
}


export function ccRouterInputMaintenanceConfigurationPropertyToHclTerraform(struct?: CcRouterInput.MaintenanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default: {
            value: cdktn.stringToHclTerraform(struct!.default),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preferred_day_time: {
            value: ccRouterInputPreferredDayTimeMaintenanceConfigurationPropertyToHclTerraform(struct!.preferredDayTime),
            isBlock: true,
            type: "struct",
            storageClassType: "PreferredDayTimeMaintenanceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputTagPropertyToTerraform(struct?: CcRouterInput.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRouterInputTagPropertyToHclTerraform(struct?: CcRouterInput.TagProperty | cdktn.IResolvable): any {
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


export function ccRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerPropertyToTerraform(struct?: CcRouterInput.TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerPropertyToHclTerraform(struct?: CcRouterInput.TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputRouterInputTransitEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterInput.RouterInputTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatic: cdktn.stringToTerraform(struct!.automatic),
        secrets_manager: ccRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerPropertyToTerraform(struct!.secretsManager),
    }
}


export function ccRouterInputRouterInputTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterInput.RouterInputTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        automatic: {
            value: cdktn.stringToHclTerraform(struct!.automatic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager: {
            value: ccRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerPropertyToHclTerraform(struct!.secretsManager),
            isBlock: true,
            type: "struct",
            storageClassType: "TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterInputRouterInputTransitEncryptionPropertyToTerraform(struct?: CcRouterInput.RouterInputTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key_configuration: ccRouterInputRouterInputTransitEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKeyConfiguration),
        encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
    }
}


export function ccRouterInputRouterInputTransitEncryptionPropertyToHclTerraform(struct?: CcRouterInput.RouterInputTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key_configuration: {
            value: ccRouterInputRouterInputTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKeyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RouterInputTransitEncryptionKeyConfigurationProperty",
        },
        encryption_key_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRouterInput {
export interface RistRouterInputConfigurationProperty {
    /**
    * The port number used for the RIST protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
    /**
    * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#recovery_latency_milliseconds CcRouterInput#recovery_latency_milliseconds}
    */
    readonly recoveryLatencyMilliseconds?: number;
}
export class RistRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RistRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._recoveryLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RistRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._recoveryLatencyMilliseconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
        }
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // recovery_latency_milliseconds - computed: true, optional: true, required: false
    private _recoveryLatencyMilliseconds?: number; 
    public get recoveryLatencyMilliseconds() {
        return this.getNumberAttribute('recovery_latency_milliseconds');
    }
    public set recoveryLatencyMilliseconds(value: number) {
        this._recoveryLatencyMilliseconds = value;
    }
    public resetRecoveryLatencyMilliseconds() {
        this._recoveryLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryLatencyMillisecondsInput() {
        return this._recoveryLatencyMilliseconds;
    }
}
export interface RtpRouterInputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#forward_error_correction CcRouterInput#forward_error_correction}
    */
    readonly forwardErrorCorrection?: string;
    /**
    * The port number used for the RTP protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
}
export class RtpRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RtpRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._forwardErrorCorrection !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RtpRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._forwardErrorCorrection = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._forwardErrorCorrection = value.forwardErrorCorrection;
            this._port = value.port;
        }
    }

    // forward_error_correction - computed: true, optional: true, required: false
    private _forwardErrorCorrection?: string; 
    public get forwardErrorCorrection() {
        return this.getStringAttribute('forward_error_correction');
    }
    public set forwardErrorCorrection(value: string) {
        this._forwardErrorCorrection = value;
    }
    public resetForwardErrorCorrection() {
        this._forwardErrorCorrection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardErrorCorrectionInput() {
        return this._forwardErrorCorrection;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface SecretsManagerEncryptionKeyConfigurationProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class SecretsManagerEncryptionKeyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface SrtDecryptionConfigurationProperty {
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key CcRouterInput#encryption_key}
    */
    readonly encryptionKey?: SecretsManagerEncryptionKeyConfigurationProperty;
}
export class SrtDecryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtDecryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtDecryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = value.encryptionKey;
        }
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new SecretsManagerEncryptionKeyConfigurationPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: SecretsManagerEncryptionKeyConfigurationProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }
}
export interface SrtCallerRouterInputConfigurationProperty {
    /**
    * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#decryption_configuration CcRouterInput#decryption_configuration}
    */
    readonly decryptionConfiguration?: SrtDecryptionConfigurationProperty;
    /**
    * The minimum latency in milliseconds for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds CcRouterInput#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The source IP address for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_address CcRouterInput#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * The source port number for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_port CcRouterInput#source_port}
    */
    readonly sourcePort?: number;
    /**
    * The stream ID for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#stream_id CcRouterInput#stream_id}
    */
    readonly streamId?: string;
}
export class SrtCallerRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtCallerRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        if (this._sourceAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddress = this._sourceAddress;
        }
        if (this._sourcePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort;
        }
        if (this._streamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamId = this._streamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtCallerRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._sourceAddress = undefined;
            this._sourcePort = undefined;
            this._streamId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._sourceAddress = value.sourceAddress;
            this._sourcePort = value.sourcePort;
            this._streamId = value.streamId;
        }
    }

    // decryption_configuration - computed: true, optional: true, required: false
    private _decryptionConfiguration = new SrtDecryptionConfigurationPropertyOutputReference(this, "decryption_configuration");
    public get decryptionConfiguration() {
        return this._decryptionConfiguration;
    }
    public putDecryptionConfiguration(value: SrtDecryptionConfigurationProperty) {
        this._decryptionConfiguration.internalValue = value;
    }
    public resetDecryptionConfiguration() {
        this._decryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionConfigurationInput() {
        return this._decryptionConfiguration.internalValue;
    }

    // minimum_latency_milliseconds - computed: true, optional: true, required: false
    private _minimumLatencyMilliseconds?: number; 
    public get minimumLatencyMilliseconds() {
        return this.getNumberAttribute('minimum_latency_milliseconds');
    }
    public set minimumLatencyMilliseconds(value: number) {
        this._minimumLatencyMilliseconds = value;
    }
    public resetMinimumLatencyMilliseconds() {
        this._minimumLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLatencyMillisecondsInput() {
        return this._minimumLatencyMilliseconds;
    }

    // source_address - computed: true, optional: true, required: false
    private _sourceAddress?: string; 
    public get sourceAddress() {
        return this.getStringAttribute('source_address');
    }
    public set sourceAddress(value: string) {
        this._sourceAddress = value;
    }
    public resetSourceAddress() {
        this._sourceAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAddressInput() {
        return this._sourceAddress;
    }

    // source_port - computed: true, optional: true, required: false
    private _sourcePort?: number; 
    public get sourcePort() {
        return this.getNumberAttribute('source_port');
    }
    public set sourcePort(value: number) {
        this._sourcePort = value;
    }
    public resetSourcePort() {
        this._sourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortInput() {
        return this._sourcePort;
    }

    // stream_id - computed: true, optional: true, required: false
    private _streamId?: string; 
    public get streamId() {
        return this.getStringAttribute('stream_id');
    }
    public set streamId(value: string) {
        this._streamId = value;
    }
    public resetStreamId() {
        this._streamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamIdInput() {
        return this._streamId;
    }
}
export interface ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty {
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key CcRouterInput#encryption_key}
    */
    readonly encryptionKey?: ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty;
}
export class ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = value.encryptionKey;
        }
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }
}
export interface SrtListenerRouterInputConfigurationProperty {
    /**
    * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#decryption_configuration CcRouterInput#decryption_configuration}
    */
    readonly decryptionConfiguration?: ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty;
    /**
    * The minimum latency in milliseconds for the SRT protocol in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds CcRouterInput#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The port number for the SRT protocol in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
}
export class SrtListenerRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtListenerRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtListenerRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._port = value.port;
        }
    }

    // decryption_configuration - computed: true, optional: true, required: false
    private _decryptionConfiguration = new ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationPropertyOutputReference(this, "decryption_configuration");
    public get decryptionConfiguration() {
        return this._decryptionConfiguration;
    }
    public putDecryptionConfiguration(value: ConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationProperty) {
        this._decryptionConfiguration.internalValue = value;
    }
    public resetDecryptionConfiguration() {
        this._decryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionConfigurationInput() {
        return this._decryptionConfiguration.internalValue;
    }

    // minimum_latency_milliseconds - computed: true, optional: true, required: false
    private _minimumLatencyMilliseconds?: number; 
    public get minimumLatencyMilliseconds() {
        return this.getNumberAttribute('minimum_latency_milliseconds');
    }
    public set minimumLatencyMilliseconds(value: number) {
        this._minimumLatencyMilliseconds = value;
    }
    public resetMinimumLatencyMilliseconds() {
        this._minimumLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLatencyMillisecondsInput() {
        return this._minimumLatencyMilliseconds;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface FailoverRouterInputProtocolConfigurationProperty {
    /**
    * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#rist CcRouterInput#rist}
    */
    readonly rist?: RistRouterInputConfigurationProperty;
    /**
    * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#rtp CcRouterInput#rtp}
    */
    readonly rtp?: RtpRouterInputConfigurationProperty;
    /**
    * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#srt_caller CcRouterInput#srt_caller}
    */
    readonly srtCaller?: SrtCallerRouterInputConfigurationProperty;
    /**
    * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#srt_listener CcRouterInput#srt_listener}
    */
    readonly srtListener?: SrtListenerRouterInputConfigurationProperty;
}
export class FailoverRouterInputProtocolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FailoverRouterInputProtocolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rist?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rist = this._rist?.internalValue;
        }
        if (this._rtp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtp = this._rtp?.internalValue;
        }
        if (this._srtCaller?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtCaller = this._srtCaller?.internalValue;
        }
        if (this._srtListener?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtListener = this._srtListener?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailoverRouterInputProtocolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rist.internalValue = undefined;
            this._rtp.internalValue = undefined;
            this._srtCaller.internalValue = undefined;
            this._srtListener.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rist.internalValue = value.rist;
            this._rtp.internalValue = value.rtp;
            this._srtCaller.internalValue = value.srtCaller;
            this._srtListener.internalValue = value.srtListener;
        }
    }

    // rist - computed: true, optional: true, required: false
    private _rist = new RistRouterInputConfigurationPropertyOutputReference(this, "rist");
    public get rist() {
        return this._rist;
    }
    public putRist(value: RistRouterInputConfigurationProperty) {
        this._rist.internalValue = value;
    }
    public resetRist() {
        this._rist.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ristInput() {
        return this._rist.internalValue;
    }

    // rtp - computed: true, optional: true, required: false
    private _rtp = new RtpRouterInputConfigurationPropertyOutputReference(this, "rtp");
    public get rtp() {
        return this._rtp;
    }
    public putRtp(value: RtpRouterInputConfigurationProperty) {
        this._rtp.internalValue = value;
    }
    public resetRtp() {
        this._rtp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rtpInput() {
        return this._rtp.internalValue;
    }

    // srt_caller - computed: true, optional: true, required: false
    private _srtCaller = new SrtCallerRouterInputConfigurationPropertyOutputReference(this, "srt_caller");
    public get srtCaller() {
        return this._srtCaller;
    }
    public putSrtCaller(value: SrtCallerRouterInputConfigurationProperty) {
        this._srtCaller.internalValue = value;
    }
    public resetSrtCaller() {
        this._srtCaller.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtCallerInput() {
        return this._srtCaller.internalValue;
    }

    // srt_listener - computed: true, optional: true, required: false
    private _srtListener = new SrtListenerRouterInputConfigurationPropertyOutputReference(this, "srt_listener");
    public get srtListener() {
        return this._srtListener;
    }
    public putSrtListener(value: SrtListenerRouterInputConfigurationProperty) {
        this._srtListener.internalValue = value;
    }
    public resetSrtListener() {
        this._srtListener.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtListenerInput() {
        return this._srtListener.internalValue;
    }
}

export class FailoverRouterInputProtocolConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : FailoverRouterInputProtocolConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): FailoverRouterInputProtocolConfigurationPropertyOutputReference {
        return new FailoverRouterInputProtocolConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FailoverRouterInputConfigurationProperty {
    /**
    * The ARN of the network interface to use for this failover router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#network_interface_arn CcRouterInput#network_interface_arn}
    */
    readonly networkInterfaceArn?: string;
    /**
    * The index (0 or 1) that specifies which source in the protocol configurations list is currently active. Used to control which of the two failover sources is currently selected. This field is ignored when sourcePriorityMode is set to NO_PRIORITY
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#primary_source_index CcRouterInput#primary_source_index}
    */
    readonly primarySourceIndex?: number;
    /**
    * A list of exactly two protocol configurations for the failover input sources. Both must use the same protocol type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#protocol_configurations CcRouterInput#protocol_configurations}
    */
    readonly protocolConfigurations?: FailoverRouterInputProtocolConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_priority_mode CcRouterInput#source_priority_mode}
    */
    readonly sourcePriorityMode?: string;
}
export class FailoverRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FailoverRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkInterfaceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceArn = this._networkInterfaceArn;
        }
        if (this._primarySourceIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.primarySourceIndex = this._primarySourceIndex;
        }
        if (this._protocolConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocolConfigurations = this._protocolConfigurations?.internalValue;
        }
        if (this._sourcePriorityMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePriorityMode = this._sourcePriorityMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailoverRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkInterfaceArn = undefined;
            this._primarySourceIndex = undefined;
            this._protocolConfigurations.internalValue = undefined;
            this._sourcePriorityMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkInterfaceArn = value.networkInterfaceArn;
            this._primarySourceIndex = value.primarySourceIndex;
            this._protocolConfigurations.internalValue = value.protocolConfigurations;
            this._sourcePriorityMode = value.sourcePriorityMode;
        }
    }

    // network_interface_arn - computed: true, optional: true, required: false
    private _networkInterfaceArn?: string; 
    public get networkInterfaceArn() {
        return this.getStringAttribute('network_interface_arn');
    }
    public set networkInterfaceArn(value: string) {
        this._networkInterfaceArn = value;
    }
    public resetNetworkInterfaceArn() {
        this._networkInterfaceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceArnInput() {
        return this._networkInterfaceArn;
    }

    // primary_source_index - computed: true, optional: true, required: false
    private _primarySourceIndex?: number; 
    public get primarySourceIndex() {
        return this.getNumberAttribute('primary_source_index');
    }
    public set primarySourceIndex(value: number) {
        this._primarySourceIndex = value;
    }
    public resetPrimarySourceIndex() {
        this._primarySourceIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primarySourceIndexInput() {
        return this._primarySourceIndex;
    }

    // protocol_configurations - computed: true, optional: true, required: false
    private _protocolConfigurations = new FailoverRouterInputProtocolConfigurationPropertyList(this, "protocol_configurations", false);
    public get protocolConfigurations() {
        return this._protocolConfigurations;
    }
    public putProtocolConfigurations(value: FailoverRouterInputProtocolConfigurationProperty[] | cdktn.IResolvable) {
        this._protocolConfigurations.internalValue = value;
    }
    public resetProtocolConfigurations() {
        this._protocolConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolConfigurationsInput() {
        return this._protocolConfigurations.internalValue;
    }

    // source_priority_mode - computed: true, optional: true, required: false
    private _sourcePriorityMode?: string; 
    public get sourcePriorityMode() {
        return this.getStringAttribute('source_priority_mode');
    }
    public set sourcePriorityMode(value: string) {
        this._sourcePriorityMode = value;
    }
    public resetSourcePriorityMode() {
        this._sourcePriorityMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePriorityModeInput() {
        return this._sourcePriorityMode;
    }
}
export interface ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface FlowTransitEncryptionKeyConfigurationProperty {
    /**
    * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#automatic CcRouterInput#automatic}
    */
    readonly automatic?: string;
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secrets_manager CcRouterInput#secrets_manager}
    */
    readonly secretsManager?: ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty;
}
export class FlowTransitEncryptionKeyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._automatic !== undefined) {
            hasAnyValues = true;
            internalValueResult.automatic = this._automatic;
        }
        if (this._secretsManager?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManager = this._secretsManager?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._automatic = undefined;
            this._secretsManager.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._automatic = value.automatic;
            this._secretsManager.internalValue = value.secretsManager;
        }
    }

    // automatic - computed: true, optional: true, required: false
    private _automatic?: string; 
    public get automatic() {
        return this.getStringAttribute('automatic');
    }
    public set automatic(value: string) {
        this._automatic = value;
    }
    public resetAutomatic() {
        this._automatic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticInput() {
        return this._automatic;
    }

    // secrets_manager - computed: true, optional: true, required: false
    private _secretsManager = new ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyOutputReference(this, "secrets_manager");
    public get secretsManager() {
        return this._secretsManager;
    }
    public putSecretsManager(value: ConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty) {
        this._secretsManager.internalValue = value;
    }
    public resetSecretsManager() {
        this._secretsManager.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerInput() {
        return this._secretsManager.internalValue;
    }
}
export interface FlowTransitEncryptionProperty {
    /**
    * Configuration settings for flow transit encryption keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key_configuration CcRouterInput#encryption_key_configuration}
    */
    readonly encryptionKeyConfiguration?: FlowTransitEncryptionKeyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key_type CcRouterInput#encryption_key_type}
    */
    readonly encryptionKeyType?: string;
}
export class FlowTransitEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowTransitEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
        }
        if (this._encryptionKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyType = this._encryptionKeyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowTransitEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = undefined;
            this._encryptionKeyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
            this._encryptionKeyType = value.encryptionKeyType;
        }
    }

    // encryption_key_configuration - computed: true, optional: true, required: false
    private _encryptionKeyConfiguration = new FlowTransitEncryptionKeyConfigurationPropertyOutputReference(this, "encryption_key_configuration");
    public get encryptionKeyConfiguration() {
        return this._encryptionKeyConfiguration;
    }
    public putEncryptionKeyConfiguration(value: FlowTransitEncryptionKeyConfigurationProperty) {
        this._encryptionKeyConfiguration.internalValue = value;
    }
    public resetEncryptionKeyConfiguration() {
        this._encryptionKeyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyConfigurationInput() {
        return this._encryptionKeyConfiguration.internalValue;
    }

    // encryption_key_type - computed: true, optional: true, required: false
    private _encryptionKeyType?: string; 
    public get encryptionKeyType() {
        return this.getStringAttribute('encryption_key_type');
    }
    public set encryptionKeyType(value: string) {
        this._encryptionKeyType = value;
    }
    public resetEncryptionKeyType() {
        this._encryptionKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyTypeInput() {
        return this._encryptionKeyType;
    }
}
export interface MediaConnectFlowRouterInputConfigurationProperty {
    /**
    * The ARN of the flow to connect to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#flow_arn CcRouterInput#flow_arn}
    */
    readonly flowArn?: string;
    /**
    * The ARN of the flow output to connect to this router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#flow_output_arn CcRouterInput#flow_output_arn}
    */
    readonly flowOutputArn?: string;
    /**
    * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_transit_decryption CcRouterInput#source_transit_decryption}
    */
    readonly sourceTransitDecryption?: FlowTransitEncryptionProperty;
}
export class MediaConnectFlowRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaConnectFlowRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowArn = this._flowArn;
        }
        if (this._flowOutputArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowOutputArn = this._flowOutputArn;
        }
        if (this._sourceTransitDecryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceTransitDecryption = this._sourceTransitDecryption?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaConnectFlowRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowArn = undefined;
            this._flowOutputArn = undefined;
            this._sourceTransitDecryption.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowArn = value.flowArn;
            this._flowOutputArn = value.flowOutputArn;
            this._sourceTransitDecryption.internalValue = value.sourceTransitDecryption;
        }
    }

    // flow_arn - computed: true, optional: true, required: false
    private _flowArn?: string; 
    public get flowArn() {
        return this.getStringAttribute('flow_arn');
    }
    public set flowArn(value: string) {
        this._flowArn = value;
    }
    public resetFlowArn() {
        this._flowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowArnInput() {
        return this._flowArn;
    }

    // flow_output_arn - computed: true, optional: true, required: false
    private _flowOutputArn?: string; 
    public get flowOutputArn() {
        return this.getStringAttribute('flow_output_arn');
    }
    public set flowOutputArn(value: string) {
        this._flowOutputArn = value;
    }
    public resetFlowOutputArn() {
        this._flowOutputArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowOutputArnInput() {
        return this._flowOutputArn;
    }

    // source_transit_decryption - computed: true, optional: true, required: false
    private _sourceTransitDecryption = new FlowTransitEncryptionPropertyOutputReference(this, "source_transit_decryption");
    public get sourceTransitDecryption() {
        return this._sourceTransitDecryption;
    }
    public putSourceTransitDecryption(value: FlowTransitEncryptionProperty) {
        this._sourceTransitDecryption.internalValue = value;
    }
    public resetSourceTransitDecryption() {
        this._sourceTransitDecryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTransitDecryptionInput() {
        return this._sourceTransitDecryption.internalValue;
    }
}
export interface ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface MediaLiveTransitEncryptionKeyConfigurationProperty {
    /**
    * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#automatic CcRouterInput#automatic}
    */
    readonly automatic?: string;
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secrets_manager CcRouterInput#secrets_manager}
    */
    readonly secretsManager?: ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty;
}
export class MediaLiveTransitEncryptionKeyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaLiveTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._automatic !== undefined) {
            hasAnyValues = true;
            internalValueResult.automatic = this._automatic;
        }
        if (this._secretsManager?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManager = this._secretsManager?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaLiveTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._automatic = undefined;
            this._secretsManager.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._automatic = value.automatic;
            this._secretsManager.internalValue = value.secretsManager;
        }
    }

    // automatic - computed: true, optional: true, required: false
    private _automatic?: string; 
    public get automatic() {
        return this.getStringAttribute('automatic');
    }
    public set automatic(value: string) {
        this._automatic = value;
    }
    public resetAutomatic() {
        this._automatic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticInput() {
        return this._automatic;
    }

    // secrets_manager - computed: true, optional: true, required: false
    private _secretsManager = new ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerPropertyOutputReference(this, "secrets_manager");
    public get secretsManager() {
        return this._secretsManager;
    }
    public putSecretsManager(value: ConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerProperty) {
        this._secretsManager.internalValue = value;
    }
    public resetSecretsManager() {
        this._secretsManager.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerInput() {
        return this._secretsManager.internalValue;
    }
}
export interface MediaLiveTransitEncryptionProperty {
    /**
    * Configuration settings for the MediaLive transit encryption key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key_configuration CcRouterInput#encryption_key_configuration}
    */
    readonly encryptionKeyConfiguration?: MediaLiveTransitEncryptionKeyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key_type CcRouterInput#encryption_key_type}
    */
    readonly encryptionKeyType?: string;
}
export class MediaLiveTransitEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaLiveTransitEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
        }
        if (this._encryptionKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyType = this._encryptionKeyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaLiveTransitEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = undefined;
            this._encryptionKeyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
            this._encryptionKeyType = value.encryptionKeyType;
        }
    }

    // encryption_key_configuration - computed: true, optional: true, required: false
    private _encryptionKeyConfiguration = new MediaLiveTransitEncryptionKeyConfigurationPropertyOutputReference(this, "encryption_key_configuration");
    public get encryptionKeyConfiguration() {
        return this._encryptionKeyConfiguration;
    }
    public putEncryptionKeyConfiguration(value: MediaLiveTransitEncryptionKeyConfigurationProperty) {
        this._encryptionKeyConfiguration.internalValue = value;
    }
    public resetEncryptionKeyConfiguration() {
        this._encryptionKeyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyConfigurationInput() {
        return this._encryptionKeyConfiguration.internalValue;
    }

    // encryption_key_type - computed: true, optional: true, required: false
    private _encryptionKeyType?: string; 
    public get encryptionKeyType() {
        return this.getStringAttribute('encryption_key_type');
    }
    public set encryptionKeyType(value: string) {
        this._encryptionKeyType = value;
    }
    public resetEncryptionKeyType() {
        this._encryptionKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyTypeInput() {
        return this._encryptionKeyType;
    }
}
export interface MediaLiveChannelRouterInputConfigurationProperty {
    /**
    * The ARN of the MediaLive channel to connect to this router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#media_live_channel_arn CcRouterInput#media_live_channel_arn}
    */
    readonly mediaLiveChannelArn?: string;
    /**
    * The name of the MediaLive channel output to connect to this router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#media_live_channel_output_name CcRouterInput#media_live_channel_output_name}
    */
    readonly mediaLiveChannelOutputName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#media_live_pipeline_id CcRouterInput#media_live_pipeline_id}
    */
    readonly mediaLivePipelineId?: string;
    /**
    * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_transit_decryption CcRouterInput#source_transit_decryption}
    */
    readonly sourceTransitDecryption?: MediaLiveTransitEncryptionProperty;
}
export class MediaLiveChannelRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaLiveChannelRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mediaLiveChannelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLiveChannelArn = this._mediaLiveChannelArn;
        }
        if (this._mediaLiveChannelOutputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLiveChannelOutputName = this._mediaLiveChannelOutputName;
        }
        if (this._mediaLivePipelineId !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLivePipelineId = this._mediaLivePipelineId;
        }
        if (this._sourceTransitDecryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceTransitDecryption = this._sourceTransitDecryption?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaLiveChannelRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mediaLiveChannelArn = undefined;
            this._mediaLiveChannelOutputName = undefined;
            this._mediaLivePipelineId = undefined;
            this._sourceTransitDecryption.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mediaLiveChannelArn = value.mediaLiveChannelArn;
            this._mediaLiveChannelOutputName = value.mediaLiveChannelOutputName;
            this._mediaLivePipelineId = value.mediaLivePipelineId;
            this._sourceTransitDecryption.internalValue = value.sourceTransitDecryption;
        }
    }

    // media_live_channel_arn - computed: true, optional: true, required: false
    private _mediaLiveChannelArn?: string; 
    public get mediaLiveChannelArn() {
        return this.getStringAttribute('media_live_channel_arn');
    }
    public set mediaLiveChannelArn(value: string) {
        this._mediaLiveChannelArn = value;
    }
    public resetMediaLiveChannelArn() {
        this._mediaLiveChannelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaLiveChannelArnInput() {
        return this._mediaLiveChannelArn;
    }

    // media_live_channel_output_name - computed: true, optional: true, required: false
    private _mediaLiveChannelOutputName?: string; 
    public get mediaLiveChannelOutputName() {
        return this.getStringAttribute('media_live_channel_output_name');
    }
    public set mediaLiveChannelOutputName(value: string) {
        this._mediaLiveChannelOutputName = value;
    }
    public resetMediaLiveChannelOutputName() {
        this._mediaLiveChannelOutputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaLiveChannelOutputNameInput() {
        return this._mediaLiveChannelOutputName;
    }

    // media_live_pipeline_id - computed: true, optional: true, required: false
    private _mediaLivePipelineId?: string; 
    public get mediaLivePipelineId() {
        return this.getStringAttribute('media_live_pipeline_id');
    }
    public set mediaLivePipelineId(value: string) {
        this._mediaLivePipelineId = value;
    }
    public resetMediaLivePipelineId() {
        this._mediaLivePipelineId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaLivePipelineIdInput() {
        return this._mediaLivePipelineId;
    }

    // source_transit_decryption - computed: true, optional: true, required: false
    private _sourceTransitDecryption = new MediaLiveTransitEncryptionPropertyOutputReference(this, "source_transit_decryption");
    public get sourceTransitDecryption() {
        return this._sourceTransitDecryption;
    }
    public putSourceTransitDecryption(value: MediaLiveTransitEncryptionProperty) {
        this._sourceTransitDecryption.internalValue = value;
    }
    public resetSourceTransitDecryption() {
        this._sourceTransitDecryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTransitDecryptionInput() {
        return this._sourceTransitDecryption.internalValue;
    }
}
export interface ConfigurationMergeProtocolConfigurationsRistProperty {
    /**
    * The port number used for the RIST protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
    /**
    * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#recovery_latency_milliseconds CcRouterInput#recovery_latency_milliseconds}
    */
    readonly recoveryLatencyMilliseconds?: number;
}
export class ConfigurationMergeProtocolConfigurationsRistPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationMergeProtocolConfigurationsRistProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._recoveryLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationMergeProtocolConfigurationsRistProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._recoveryLatencyMilliseconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
        }
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // recovery_latency_milliseconds - computed: true, optional: true, required: false
    private _recoveryLatencyMilliseconds?: number; 
    public get recoveryLatencyMilliseconds() {
        return this.getNumberAttribute('recovery_latency_milliseconds');
    }
    public set recoveryLatencyMilliseconds(value: number) {
        this._recoveryLatencyMilliseconds = value;
    }
    public resetRecoveryLatencyMilliseconds() {
        this._recoveryLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryLatencyMillisecondsInput() {
        return this._recoveryLatencyMilliseconds;
    }
}
export interface ConfigurationMergeProtocolConfigurationsRtpProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#forward_error_correction CcRouterInput#forward_error_correction}
    */
    readonly forwardErrorCorrection?: string;
    /**
    * The port number used for the RTP protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
}
export class ConfigurationMergeProtocolConfigurationsRtpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationMergeProtocolConfigurationsRtpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._forwardErrorCorrection !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationMergeProtocolConfigurationsRtpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._forwardErrorCorrection = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._forwardErrorCorrection = value.forwardErrorCorrection;
            this._port = value.port;
        }
    }

    // forward_error_correction - computed: true, optional: true, required: false
    private _forwardErrorCorrection?: string; 
    public get forwardErrorCorrection() {
        return this.getStringAttribute('forward_error_correction');
    }
    public set forwardErrorCorrection(value: string) {
        this._forwardErrorCorrection = value;
    }
    public resetForwardErrorCorrection() {
        this._forwardErrorCorrection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardErrorCorrectionInput() {
        return this._forwardErrorCorrection;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface MergeRouterInputProtocolConfigurationProperty {
    /**
    * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#rist CcRouterInput#rist}
    */
    readonly rist?: ConfigurationMergeProtocolConfigurationsRistProperty;
    /**
    * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#rtp CcRouterInput#rtp}
    */
    readonly rtp?: ConfigurationMergeProtocolConfigurationsRtpProperty;
}
export class MergeRouterInputProtocolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MergeRouterInputProtocolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rist?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rist = this._rist?.internalValue;
        }
        if (this._rtp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtp = this._rtp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MergeRouterInputProtocolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rist.internalValue = undefined;
            this._rtp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rist.internalValue = value.rist;
            this._rtp.internalValue = value.rtp;
        }
    }

    // rist - computed: true, optional: true, required: false
    private _rist = new ConfigurationMergeProtocolConfigurationsRistPropertyOutputReference(this, "rist");
    public get rist() {
        return this._rist;
    }
    public putRist(value: ConfigurationMergeProtocolConfigurationsRistProperty) {
        this._rist.internalValue = value;
    }
    public resetRist() {
        this._rist.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ristInput() {
        return this._rist.internalValue;
    }

    // rtp - computed: true, optional: true, required: false
    private _rtp = new ConfigurationMergeProtocolConfigurationsRtpPropertyOutputReference(this, "rtp");
    public get rtp() {
        return this._rtp;
    }
    public putRtp(value: ConfigurationMergeProtocolConfigurationsRtpProperty) {
        this._rtp.internalValue = value;
    }
    public resetRtp() {
        this._rtp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rtpInput() {
        return this._rtp.internalValue;
    }
}

export class MergeRouterInputProtocolConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : MergeRouterInputProtocolConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): MergeRouterInputProtocolConfigurationPropertyOutputReference {
        return new MergeRouterInputProtocolConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MergeRouterInputConfigurationProperty {
    /**
    * The time window in milliseconds for merging the two input sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#merge_recovery_window_milliseconds CcRouterInput#merge_recovery_window_milliseconds}
    */
    readonly mergeRecoveryWindowMilliseconds?: number;
    /**
    * The ARN of the network interface to use for this merge router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#network_interface_arn CcRouterInput#network_interface_arn}
    */
    readonly networkInterfaceArn?: string;
    /**
    * A list of exactly two protocol configurations for the merge input sources. Both must use the same protocol type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#protocol_configurations CcRouterInput#protocol_configurations}
    */
    readonly protocolConfigurations?: MergeRouterInputProtocolConfigurationProperty[] | cdktn.IResolvable;
}
export class MergeRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MergeRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mergeRecoveryWindowMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.mergeRecoveryWindowMilliseconds = this._mergeRecoveryWindowMilliseconds;
        }
        if (this._networkInterfaceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceArn = this._networkInterfaceArn;
        }
        if (this._protocolConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocolConfigurations = this._protocolConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MergeRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mergeRecoveryWindowMilliseconds = undefined;
            this._networkInterfaceArn = undefined;
            this._protocolConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mergeRecoveryWindowMilliseconds = value.mergeRecoveryWindowMilliseconds;
            this._networkInterfaceArn = value.networkInterfaceArn;
            this._protocolConfigurations.internalValue = value.protocolConfigurations;
        }
    }

    // merge_recovery_window_milliseconds - computed: true, optional: true, required: false
    private _mergeRecoveryWindowMilliseconds?: number; 
    public get mergeRecoveryWindowMilliseconds() {
        return this.getNumberAttribute('merge_recovery_window_milliseconds');
    }
    public set mergeRecoveryWindowMilliseconds(value: number) {
        this._mergeRecoveryWindowMilliseconds = value;
    }
    public resetMergeRecoveryWindowMilliseconds() {
        this._mergeRecoveryWindowMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergeRecoveryWindowMillisecondsInput() {
        return this._mergeRecoveryWindowMilliseconds;
    }

    // network_interface_arn - computed: true, optional: true, required: false
    private _networkInterfaceArn?: string; 
    public get networkInterfaceArn() {
        return this.getStringAttribute('network_interface_arn');
    }
    public set networkInterfaceArn(value: string) {
        this._networkInterfaceArn = value;
    }
    public resetNetworkInterfaceArn() {
        this._networkInterfaceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceArnInput() {
        return this._networkInterfaceArn;
    }

    // protocol_configurations - computed: true, optional: true, required: false
    private _protocolConfigurations = new MergeRouterInputProtocolConfigurationPropertyList(this, "protocol_configurations", false);
    public get protocolConfigurations() {
        return this._protocolConfigurations;
    }
    public putProtocolConfigurations(value: MergeRouterInputProtocolConfigurationProperty[] | cdktn.IResolvable) {
        this._protocolConfigurations.internalValue = value;
    }
    public resetProtocolConfigurations() {
        this._protocolConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolConfigurationsInput() {
        return this._protocolConfigurations.internalValue;
    }
}
export interface ConfigurationStandardProtocolConfigurationRistProperty {
    /**
    * The port number used for the RIST protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
    /**
    * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#recovery_latency_milliseconds CcRouterInput#recovery_latency_milliseconds}
    */
    readonly recoveryLatencyMilliseconds?: number;
}
export class ConfigurationStandardProtocolConfigurationRistPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationRistProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._recoveryLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationRistProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._recoveryLatencyMilliseconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
        }
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // recovery_latency_milliseconds - computed: true, optional: true, required: false
    private _recoveryLatencyMilliseconds?: number; 
    public get recoveryLatencyMilliseconds() {
        return this.getNumberAttribute('recovery_latency_milliseconds');
    }
    public set recoveryLatencyMilliseconds(value: number) {
        this._recoveryLatencyMilliseconds = value;
    }
    public resetRecoveryLatencyMilliseconds() {
        this._recoveryLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryLatencyMillisecondsInput() {
        return this._recoveryLatencyMilliseconds;
    }
}
export interface ConfigurationStandardProtocolConfigurationRtpProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#forward_error_correction CcRouterInput#forward_error_correction}
    */
    readonly forwardErrorCorrection?: string;
    /**
    * The port number used for the RTP protocol in the router input configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
}
export class ConfigurationStandardProtocolConfigurationRtpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationRtpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._forwardErrorCorrection !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationRtpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._forwardErrorCorrection = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._forwardErrorCorrection = value.forwardErrorCorrection;
            this._port = value.port;
        }
    }

    // forward_error_correction - computed: true, optional: true, required: false
    private _forwardErrorCorrection?: string; 
    public get forwardErrorCorrection() {
        return this.getStringAttribute('forward_error_correction');
    }
    public set forwardErrorCorrection(value: string) {
        this._forwardErrorCorrection = value;
    }
    public resetForwardErrorCorrection() {
        this._forwardErrorCorrection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardErrorCorrectionInput() {
        return this._forwardErrorCorrection;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty {
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key CcRouterInput#encryption_key}
    */
    readonly encryptionKey?: ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty;
}
export class ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = value.encryptionKey;
        }
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }
}
export interface SrtCallerProperty {
    /**
    * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#decryption_configuration CcRouterInput#decryption_configuration}
    */
    readonly decryptionConfiguration?: ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty;
    /**
    * The minimum latency in milliseconds for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds CcRouterInput#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The source IP address for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_address CcRouterInput#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * The source port number for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#source_port CcRouterInput#source_port}
    */
    readonly sourcePort?: number;
    /**
    * The stream ID for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#stream_id CcRouterInput#stream_id}
    */
    readonly streamId?: string;
}
export class SrtCallerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtCallerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        if (this._sourceAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddress = this._sourceAddress;
        }
        if (this._sourcePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort;
        }
        if (this._streamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamId = this._streamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtCallerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._sourceAddress = undefined;
            this._sourcePort = undefined;
            this._streamId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._sourceAddress = value.sourceAddress;
            this._sourcePort = value.sourcePort;
            this._streamId = value.streamId;
        }
    }

    // decryption_configuration - computed: true, optional: true, required: false
    private _decryptionConfiguration = new ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationPropertyOutputReference(this, "decryption_configuration");
    public get decryptionConfiguration() {
        return this._decryptionConfiguration;
    }
    public putDecryptionConfiguration(value: ConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationProperty) {
        this._decryptionConfiguration.internalValue = value;
    }
    public resetDecryptionConfiguration() {
        this._decryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionConfigurationInput() {
        return this._decryptionConfiguration.internalValue;
    }

    // minimum_latency_milliseconds - computed: true, optional: true, required: false
    private _minimumLatencyMilliseconds?: number; 
    public get minimumLatencyMilliseconds() {
        return this.getNumberAttribute('minimum_latency_milliseconds');
    }
    public set minimumLatencyMilliseconds(value: number) {
        this._minimumLatencyMilliseconds = value;
    }
    public resetMinimumLatencyMilliseconds() {
        this._minimumLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLatencyMillisecondsInput() {
        return this._minimumLatencyMilliseconds;
    }

    // source_address - computed: true, optional: true, required: false
    private _sourceAddress?: string; 
    public get sourceAddress() {
        return this.getStringAttribute('source_address');
    }
    public set sourceAddress(value: string) {
        this._sourceAddress = value;
    }
    public resetSourceAddress() {
        this._sourceAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAddressInput() {
        return this._sourceAddress;
    }

    // source_port - computed: true, optional: true, required: false
    private _sourcePort?: number; 
    public get sourcePort() {
        return this.getNumberAttribute('source_port');
    }
    public set sourcePort(value: number) {
        this._sourcePort = value;
    }
    public resetSourcePort() {
        this._sourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortInput() {
        return this._sourcePort;
    }

    // stream_id - computed: true, optional: true, required: false
    private _streamId?: string; 
    public get streamId() {
        return this.getStringAttribute('stream_id');
    }
    public set streamId(value: string) {
        this._streamId = value;
    }
    public resetStreamId() {
        this._streamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamIdInput() {
        return this._streamId;
    }
}
export interface ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty {
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key CcRouterInput#encryption_key}
    */
    readonly encryptionKey?: ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty;
}
export class ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = value.encryptionKey;
        }
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }
}
export interface SrtListenerProperty {
    /**
    * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#decryption_configuration CcRouterInput#decryption_configuration}
    */
    readonly decryptionConfiguration?: ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty;
    /**
    * The minimum latency in milliseconds for the SRT protocol in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds CcRouterInput#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The port number for the SRT protocol in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#port CcRouterInput#port}
    */
    readonly port?: number;
}
export class SrtListenerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtListenerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtListenerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._port = value.port;
        }
    }

    // decryption_configuration - computed: true, optional: true, required: false
    private _decryptionConfiguration = new ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationPropertyOutputReference(this, "decryption_configuration");
    public get decryptionConfiguration() {
        return this._decryptionConfiguration;
    }
    public putDecryptionConfiguration(value: ConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationProperty) {
        this._decryptionConfiguration.internalValue = value;
    }
    public resetDecryptionConfiguration() {
        this._decryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionConfigurationInput() {
        return this._decryptionConfiguration.internalValue;
    }

    // minimum_latency_milliseconds - computed: true, optional: true, required: false
    private _minimumLatencyMilliseconds?: number; 
    public get minimumLatencyMilliseconds() {
        return this.getNumberAttribute('minimum_latency_milliseconds');
    }
    public set minimumLatencyMilliseconds(value: number) {
        this._minimumLatencyMilliseconds = value;
    }
    public resetMinimumLatencyMilliseconds() {
        this._minimumLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLatencyMillisecondsInput() {
        return this._minimumLatencyMilliseconds;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}
export interface RouterInputProtocolConfigurationProperty {
    /**
    * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#rist CcRouterInput#rist}
    */
    readonly rist?: ConfigurationStandardProtocolConfigurationRistProperty;
    /**
    * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#rtp CcRouterInput#rtp}
    */
    readonly rtp?: ConfigurationStandardProtocolConfigurationRtpProperty;
    /**
    * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#srt_caller CcRouterInput#srt_caller}
    */
    readonly srtCaller?: SrtCallerProperty;
    /**
    * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#srt_listener CcRouterInput#srt_listener}
    */
    readonly srtListener?: SrtListenerProperty;
}
export class RouterInputProtocolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterInputProtocolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rist?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rist = this._rist?.internalValue;
        }
        if (this._rtp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtp = this._rtp?.internalValue;
        }
        if (this._srtCaller?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtCaller = this._srtCaller?.internalValue;
        }
        if (this._srtListener?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtListener = this._srtListener?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterInputProtocolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rist.internalValue = undefined;
            this._rtp.internalValue = undefined;
            this._srtCaller.internalValue = undefined;
            this._srtListener.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rist.internalValue = value.rist;
            this._rtp.internalValue = value.rtp;
            this._srtCaller.internalValue = value.srtCaller;
            this._srtListener.internalValue = value.srtListener;
        }
    }

    // rist - computed: true, optional: true, required: false
    private _rist = new ConfigurationStandardProtocolConfigurationRistPropertyOutputReference(this, "rist");
    public get rist() {
        return this._rist;
    }
    public putRist(value: ConfigurationStandardProtocolConfigurationRistProperty) {
        this._rist.internalValue = value;
    }
    public resetRist() {
        this._rist.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ristInput() {
        return this._rist.internalValue;
    }

    // rtp - computed: true, optional: true, required: false
    private _rtp = new ConfigurationStandardProtocolConfigurationRtpPropertyOutputReference(this, "rtp");
    public get rtp() {
        return this._rtp;
    }
    public putRtp(value: ConfigurationStandardProtocolConfigurationRtpProperty) {
        this._rtp.internalValue = value;
    }
    public resetRtp() {
        this._rtp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rtpInput() {
        return this._rtp.internalValue;
    }

    // srt_caller - computed: true, optional: true, required: false
    private _srtCaller = new SrtCallerPropertyOutputReference(this, "srt_caller");
    public get srtCaller() {
        return this._srtCaller;
    }
    public putSrtCaller(value: SrtCallerProperty) {
        this._srtCaller.internalValue = value;
    }
    public resetSrtCaller() {
        this._srtCaller.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtCallerInput() {
        return this._srtCaller.internalValue;
    }

    // srt_listener - computed: true, optional: true, required: false
    private _srtListener = new SrtListenerPropertyOutputReference(this, "srt_listener");
    public get srtListener() {
        return this._srtListener;
    }
    public putSrtListener(value: SrtListenerProperty) {
        this._srtListener.internalValue = value;
    }
    public resetSrtListener() {
        this._srtListener.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtListenerInput() {
        return this._srtListener.internalValue;
    }
}
export interface StandardRouterInputConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the network interface associated with the standard router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#network_interface_arn CcRouterInput#network_interface_arn}
    */
    readonly networkInterfaceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#protocol CcRouterInput#protocol}
    */
    readonly protocol?: string;
    /**
    * The protocol configuration settings for a router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#protocol_configuration CcRouterInput#protocol_configuration}
    */
    readonly protocolConfiguration?: RouterInputProtocolConfigurationProperty;
}
export class StandardRouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StandardRouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkInterfaceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceArn = this._networkInterfaceArn;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._protocolConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocolConfiguration = this._protocolConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StandardRouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkInterfaceArn = undefined;
            this._protocol = undefined;
            this._protocolConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkInterfaceArn = value.networkInterfaceArn;
            this._protocol = value.protocol;
            this._protocolConfiguration.internalValue = value.protocolConfiguration;
        }
    }

    // network_interface_arn - computed: true, optional: true, required: false
    private _networkInterfaceArn?: string; 
    public get networkInterfaceArn() {
        return this.getStringAttribute('network_interface_arn');
    }
    public set networkInterfaceArn(value: string) {
        this._networkInterfaceArn = value;
    }
    public resetNetworkInterfaceArn() {
        this._networkInterfaceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceArnInput() {
        return this._networkInterfaceArn;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // protocol_configuration - computed: true, optional: true, required: false
    private _protocolConfiguration = new RouterInputProtocolConfigurationPropertyOutputReference(this, "protocol_configuration");
    public get protocolConfiguration() {
        return this._protocolConfiguration;
    }
    public putProtocolConfiguration(value: RouterInputProtocolConfigurationProperty) {
        this._protocolConfiguration.internalValue = value;
    }
    public resetProtocolConfiguration() {
        this._protocolConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolConfigurationInput() {
        return this._protocolConfiguration.internalValue;
    }
}
export interface RouterInputConfigurationProperty {
    /**
    * Configuration settings for a failover router input that allows switching between two input sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#failover CcRouterInput#failover}
    */
    readonly failover?: FailoverRouterInputConfigurationProperty;
    /**
    * Configuration settings for connecting a router input to a flow output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#media_connect_flow CcRouterInput#media_connect_flow}
    */
    readonly mediaConnectFlow?: MediaConnectFlowRouterInputConfigurationProperty;
    /**
    * Configuration settings for connecting a router input to a MediaLive channel output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#media_live_channel CcRouterInput#media_live_channel}
    */
    readonly mediaLiveChannel?: MediaLiveChannelRouterInputConfigurationProperty;
    /**
    * Configuration settings for a merge router input that combines two input sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#merge CcRouterInput#merge}
    */
    readonly merge?: MergeRouterInputConfigurationProperty;
    /**
    * The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#standard CcRouterInput#standard}
    */
    readonly standard?: StandardRouterInputConfigurationProperty;
}
export class RouterInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failover?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.failover = this._failover?.internalValue;
        }
        if (this._mediaConnectFlow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaConnectFlow = this._mediaConnectFlow?.internalValue;
        }
        if (this._mediaLiveChannel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLiveChannel = this._mediaLiveChannel?.internalValue;
        }
        if (this._merge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.merge = this._merge?.internalValue;
        }
        if (this._standard?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.standard = this._standard?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failover.internalValue = undefined;
            this._mediaConnectFlow.internalValue = undefined;
            this._mediaLiveChannel.internalValue = undefined;
            this._merge.internalValue = undefined;
            this._standard.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failover.internalValue = value.failover;
            this._mediaConnectFlow.internalValue = value.mediaConnectFlow;
            this._mediaLiveChannel.internalValue = value.mediaLiveChannel;
            this._merge.internalValue = value.merge;
            this._standard.internalValue = value.standard;
        }
    }

    // failover - computed: true, optional: true, required: false
    private _failover = new FailoverRouterInputConfigurationPropertyOutputReference(this, "failover");
    public get failover() {
        return this._failover;
    }
    public putFailover(value: FailoverRouterInputConfigurationProperty) {
        this._failover.internalValue = value;
    }
    public resetFailover() {
        this._failover.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failoverInput() {
        return this._failover.internalValue;
    }

    // media_connect_flow - computed: true, optional: true, required: false
    private _mediaConnectFlow = new MediaConnectFlowRouterInputConfigurationPropertyOutputReference(this, "media_connect_flow");
    public get mediaConnectFlow() {
        return this._mediaConnectFlow;
    }
    public putMediaConnectFlow(value: MediaConnectFlowRouterInputConfigurationProperty) {
        this._mediaConnectFlow.internalValue = value;
    }
    public resetMediaConnectFlow() {
        this._mediaConnectFlow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaConnectFlowInput() {
        return this._mediaConnectFlow.internalValue;
    }

    // media_live_channel - computed: true, optional: true, required: false
    private _mediaLiveChannel = new MediaLiveChannelRouterInputConfigurationPropertyOutputReference(this, "media_live_channel");
    public get mediaLiveChannel() {
        return this._mediaLiveChannel;
    }
    public putMediaLiveChannel(value: MediaLiveChannelRouterInputConfigurationProperty) {
        this._mediaLiveChannel.internalValue = value;
    }
    public resetMediaLiveChannel() {
        this._mediaLiveChannel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaLiveChannelInput() {
        return this._mediaLiveChannel.internalValue;
    }

    // merge - computed: true, optional: true, required: false
    private _merge = new MergeRouterInputConfigurationPropertyOutputReference(this, "merge");
    public get merge() {
        return this._merge;
    }
    public putMerge(value: MergeRouterInputConfigurationProperty) {
        this._merge.internalValue = value;
    }
    public resetMerge() {
        this._merge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergeInput() {
        return this._merge.internalValue;
    }

    // standard - computed: true, optional: true, required: false
    private _standard = new StandardRouterInputConfigurationPropertyOutputReference(this, "standard");
    public get standard() {
        return this._standard;
    }
    public putStandard(value: StandardRouterInputConfigurationProperty) {
        this._standard.internalValue = value;
    }
    public resetStandard() {
        this._standard.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standardInput() {
        return this._standard.internalValue;
    }
}
export interface BlackFramesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#state CcRouterInput#state}
    */
    readonly state?: string;
    /**
    * The number of consecutive seconds of black frames that MediaConnect must detect before it reports an issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#threshold_seconds CcRouterInput#threshold_seconds}
    */
    readonly thresholdSeconds?: number;
}
export class BlackFramesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlackFramesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._thresholdSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdSeconds = this._thresholdSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlackFramesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._thresholdSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._thresholdSeconds = value.thresholdSeconds;
        }
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

    // threshold_seconds - computed: true, optional: true, required: false
    private _thresholdSeconds?: number; 
    public get thresholdSeconds() {
        return this.getNumberAttribute('threshold_seconds');
    }
    public set thresholdSeconds(value: number) {
        this._thresholdSeconds = value;
    }
    public resetThresholdSeconds() {
        this._thresholdSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdSecondsInput() {
        return this._thresholdSeconds;
    }
}
export interface FrozenFramesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#state CcRouterInput#state}
    */
    readonly state?: string;
    /**
    * The number of consecutive seconds of a frozen frame that MediaConnect must detect before it reports an issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#threshold_seconds CcRouterInput#threshold_seconds}
    */
    readonly thresholdSeconds?: number;
}
export class FrozenFramesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FrozenFramesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._thresholdSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdSeconds = this._thresholdSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FrozenFramesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._thresholdSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._thresholdSeconds = value.thresholdSeconds;
        }
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

    // threshold_seconds - computed: true, optional: true, required: false
    private _thresholdSeconds?: number; 
    public get thresholdSeconds() {
        return this.getNumberAttribute('threshold_seconds');
    }
    public set thresholdSeconds(value: number) {
        this._thresholdSeconds = value;
    }
    public resetThresholdSeconds() {
        this._thresholdSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdSecondsInput() {
        return this._thresholdSeconds;
    }
}
export interface SilentAudioConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#state CcRouterInput#state}
    */
    readonly state?: string;
    /**
    * The number of consecutive seconds of silence that MediaConnect must detect before it reports an issue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#threshold_seconds CcRouterInput#threshold_seconds}
    */
    readonly thresholdSeconds?: number;
}
export class SilentAudioConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SilentAudioConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._thresholdSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdSeconds = this._thresholdSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SilentAudioConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._thresholdSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._thresholdSeconds = value.thresholdSeconds;
        }
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

    // threshold_seconds - computed: true, optional: true, required: false
    private _thresholdSeconds?: number; 
    public get thresholdSeconds() {
        return this.getNumberAttribute('threshold_seconds');
    }
    public set thresholdSeconds(value: number) {
        this._thresholdSeconds = value;
    }
    public resetThresholdSeconds() {
        this._thresholdSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdSecondsInput() {
        return this._thresholdSeconds;
    }
}
export interface ContentQualityAnalysisFeatureConfigurationProperty {
    /**
    * Detects black frames in the router input's source content and reports them through a CloudWatch metric, an EventBridge event, and a router input message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#black_frames CcRouterInput#black_frames}
    */
    readonly blackFrames?: BlackFramesConfigurationProperty;
    /**
    * Detects frozen video frames in the router input's source content and reports them through a CloudWatch metric, an EventBridge event, and a router input message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#frozen_frames CcRouterInput#frozen_frames}
    */
    readonly frozenFrames?: FrozenFramesConfigurationProperty;
    /**
    * Detects silent audio in the router input's source content and reports it through a CloudWatch metric, an EventBridge event, and a router input message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#silent_audio CcRouterInput#silent_audio}
    */
    readonly silentAudio?: SilentAudioConfigurationProperty;
}
export class ContentQualityAnalysisFeatureConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentQualityAnalysisFeatureConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blackFrames?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blackFrames = this._blackFrames?.internalValue;
        }
        if (this._frozenFrames?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.frozenFrames = this._frozenFrames?.internalValue;
        }
        if (this._silentAudio?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.silentAudio = this._silentAudio?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentQualityAnalysisFeatureConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blackFrames.internalValue = undefined;
            this._frozenFrames.internalValue = undefined;
            this._silentAudio.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blackFrames.internalValue = value.blackFrames;
            this._frozenFrames.internalValue = value.frozenFrames;
            this._silentAudio.internalValue = value.silentAudio;
        }
    }

    // black_frames - computed: true, optional: true, required: false
    private _blackFrames = new BlackFramesConfigurationPropertyOutputReference(this, "black_frames");
    public get blackFrames() {
        return this._blackFrames;
    }
    public putBlackFrames(value: BlackFramesConfigurationProperty) {
        this._blackFrames.internalValue = value;
    }
    public resetBlackFrames() {
        this._blackFrames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blackFramesInput() {
        return this._blackFrames.internalValue;
    }

    // frozen_frames - computed: true, optional: true, required: false
    private _frozenFrames = new FrozenFramesConfigurationPropertyOutputReference(this, "frozen_frames");
    public get frozenFrames() {
        return this._frozenFrames;
    }
    public putFrozenFrames(value: FrozenFramesConfigurationProperty) {
        this._frozenFrames.internalValue = value;
    }
    public resetFrozenFrames() {
        this._frozenFrames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frozenFramesInput() {
        return this._frozenFrames.internalValue;
    }

    // silent_audio - computed: true, optional: true, required: false
    private _silentAudio = new SilentAudioConfigurationPropertyOutputReference(this, "silent_audio");
    public get silentAudio() {
        return this._silentAudio;
    }
    public putSilentAudio(value: SilentAudioConfigurationProperty) {
        this._silentAudio.internalValue = value;
    }
    public resetSilentAudio() {
        this._silentAudio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get silentAudioInput() {
        return this._silentAudio.internalValue;
    }
}
export interface RouterContentQualityAnalysisConfigurationProperty {
    /**
    * Configures the content quality analysis features for the router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#content_level CcRouterInput#content_level}
    */
    readonly contentLevel?: ContentQualityAnalysisFeatureConfigurationProperty;
}
export class RouterContentQualityAnalysisConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterContentQualityAnalysisConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentLevel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentLevel = this._contentLevel?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterContentQualityAnalysisConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentLevel.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentLevel.internalValue = value.contentLevel;
        }
    }

    // content_level - computed: true, optional: true, required: false
    private _contentLevel = new ContentQualityAnalysisFeatureConfigurationPropertyOutputReference(this, "content_level");
    public get contentLevel() {
        return this._contentLevel;
    }
    public putContentLevel(value: ContentQualityAnalysisFeatureConfigurationProperty) {
        this._contentLevel.internalValue = value;
    }
    public resetContentLevel() {
        this._contentLevel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentLevelInput() {
        return this._contentLevel.internalValue;
    }
}
export interface PreferredDayTimeMaintenanceConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#day CcRouterInput#day}
    */
    readonly day?: string;
    /**
    * The preferred time for maintenance operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#time CcRouterInput#time}
    */
    readonly time?: string;
}
export class PreferredDayTimeMaintenanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PreferredDayTimeMaintenanceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._day !== undefined) {
            hasAnyValues = true;
            internalValueResult.day = this._day;
        }
        if (this._time !== undefined) {
            hasAnyValues = true;
            internalValueResult.time = this._time;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PreferredDayTimeMaintenanceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._day = undefined;
            this._time = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._day = value.day;
            this._time = value.time;
        }
    }

    // day - computed: true, optional: true, required: false
    private _day?: string; 
    public get day() {
        return this.getStringAttribute('day');
    }
    public set day(value: string) {
        this._day = value;
    }
    public resetDay() {
        this._day = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayInput() {
        return this._day;
    }

    // time - computed: true, optional: true, required: false
    private _time?: string; 
    public get time() {
        return this.getStringAttribute('time');
    }
    public set time(value: string) {
        this._time = value;
    }
    public resetTime() {
        this._time = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInput() {
        return this._time;
    }
}
export interface MaintenanceConfigurationProperty {
    /**
    * Configuration settings for default maintenance scheduling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#default CcRouterInput#default}
    */
    readonly default?: string;
    /**
    * Configuration for preferred day and time maintenance settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#preferred_day_time CcRouterInput#preferred_day_time}
    */
    readonly preferredDayTime?: PreferredDayTimeMaintenanceConfigurationProperty;
}
export class MaintenanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        if (this._preferredDayTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredDayTime = this._preferredDayTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaintenanceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._default = undefined;
            this._preferredDayTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._default = value.default;
            this._preferredDayTime.internalValue = value.preferredDayTime;
        }
    }

    // default - computed: true, optional: true, required: false
    private _default?: string; 
    public get default() {
        return this.getStringAttribute('default');
    }
    public set default(value: string) {
        this._default = value;
    }
    public resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
        return this._default;
    }

    // preferred_day_time - computed: true, optional: true, required: false
    private _preferredDayTime = new PreferredDayTimeMaintenanceConfigurationPropertyOutputReference(this, "preferred_day_time");
    public get preferredDayTime() {
        return this._preferredDayTime;
    }
    public putPreferredDayTime(value: PreferredDayTimeMaintenanceConfigurationProperty) {
        this._preferredDayTime.internalValue = value;
    }
    public resetPreferredDayTime() {
        this._preferredDayTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredDayTimeInput() {
        return this._preferredDayTime.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#key CcRouterInput#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#value CcRouterInput#value}
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
export interface TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#role_arn CcRouterInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secret_arn CcRouterInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class TransitEncryptionEncryptionKeyConfigurationSecretsManagerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface RouterInputTransitEncryptionKeyConfigurationProperty {
    /**
    * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#automatic CcRouterInput#automatic}
    */
    readonly automatic?: string;
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#secrets_manager CcRouterInput#secrets_manager}
    */
    readonly secretsManager?: TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty;
}
export class RouterInputTransitEncryptionKeyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterInputTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._automatic !== undefined) {
            hasAnyValues = true;
            internalValueResult.automatic = this._automatic;
        }
        if (this._secretsManager?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManager = this._secretsManager?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterInputTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._automatic = undefined;
            this._secretsManager.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._automatic = value.automatic;
            this._secretsManager.internalValue = value.secretsManager;
        }
    }

    // automatic - computed: true, optional: true, required: false
    private _automatic?: string; 
    public get automatic() {
        return this.getStringAttribute('automatic');
    }
    public set automatic(value: string) {
        this._automatic = value;
    }
    public resetAutomatic() {
        this._automatic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticInput() {
        return this._automatic;
    }

    // secrets_manager - computed: true, optional: true, required: false
    private _secretsManager = new TransitEncryptionEncryptionKeyConfigurationSecretsManagerPropertyOutputReference(this, "secrets_manager");
    public get secretsManager() {
        return this._secretsManager;
    }
    public putSecretsManager(value: TransitEncryptionEncryptionKeyConfigurationSecretsManagerProperty) {
        this._secretsManager.internalValue = value;
    }
    public resetSecretsManager() {
        this._secretsManager.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerInput() {
        return this._secretsManager.internalValue;
    }
}
export interface RouterInputTransitEncryptionProperty {
    /**
    * Defines the configuration settings for transit encryption keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key_configuration CcRouterInput#encryption_key_configuration}
    */
    readonly encryptionKeyConfiguration?: RouterInputTransitEncryptionKeyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_router_input#encryption_key_type CcRouterInput#encryption_key_type}
    */
    readonly encryptionKeyType?: string;
}
export class RouterInputTransitEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterInputTransitEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
        }
        if (this._encryptionKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyType = this._encryptionKeyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterInputTransitEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = undefined;
            this._encryptionKeyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
            this._encryptionKeyType = value.encryptionKeyType;
        }
    }

    // encryption_key_configuration - computed: true, optional: true, required: false
    private _encryptionKeyConfiguration = new RouterInputTransitEncryptionKeyConfigurationPropertyOutputReference(this, "encryption_key_configuration");
    public get encryptionKeyConfiguration() {
        return this._encryptionKeyConfiguration;
    }
    public putEncryptionKeyConfiguration(value: RouterInputTransitEncryptionKeyConfigurationProperty) {
        this._encryptionKeyConfiguration.internalValue = value;
    }
    public resetEncryptionKeyConfiguration() {
        this._encryptionKeyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyConfigurationInput() {
        return this._encryptionKeyConfiguration.internalValue;
    }

    // encryption_key_type - computed: true, optional: true, required: false
    private _encryptionKeyType?: string; 
    public get encryptionKeyType() {
        return this.getStringAttribute('encryption_key_type');
    }
    public set encryptionKeyType(value: string) {
        this._encryptionKeyType = value;
    }
    public resetEncryptionKeyType() {
        this._encryptionKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyTypeInput() {
        return this._encryptionKeyType;
    }
}
}
