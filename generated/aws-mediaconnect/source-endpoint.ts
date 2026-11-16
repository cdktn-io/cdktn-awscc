// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSourceEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration settings for a source endpoint. This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#configuration CcSourceEndpoint#configuration}
    */
    readonly configuration: CcSourceEndpoint.ConfigurationProperty;
    /**
    * The description of the source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#description CcSourceEndpoint#description}
    */
    readonly description?: string;
    /**
    * The name of the Amazon Web Services Region in which the source endpoint is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#region_name CcSourceEndpoint#region_name}
    */
    readonly regionName?: string;
    /**
    * The tags associated with the source endpoint. Each tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#tags CcSourceEndpoint#tags}
    */
    readonly tags?: CcSourceEndpoint.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint}
*/
export class CcSourceEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_source_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSourceEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSourceEndpoint to import
    * @param importFromId The id of the existing CcSourceEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSourceEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_source_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSourceEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcSourceEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_source_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._configuration.internalValue = config.configuration;
        this._description = config.description;
        this._regionName = config.regionName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associated_resource_details - computed: true, optional: false, required: false
    private _associatedResourceDetails = new CcSourceEndpoint.AssociatedResourceDetailsPropertyOutputReference(this, "associated_resource_details");
    public get associatedResourceDetails() {
        return this._associatedResourceDetails;
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }

    // availability_zone_id - computed: true, optional: false, required: false
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcSourceEndpoint.ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcSourceEndpoint.ConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // connection_state - computed: true, optional: false, required: false
    public get connectionState() {
        return this.getStringAttribute('connection_state');
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

    // lifecycle_management - computed: true, optional: false, required: false
    public get lifecycleManagement() {
        return this.getStringAttribute('lifecycle_management');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
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

    // registration_state - computed: true, optional: false, required: false
    public get registrationState() {
        return this.getStringAttribute('registration_state');
    }

    // source_endpoint_id - computed: true, optional: false, required: false
    public get sourceEndpointId() {
        return this.getStringAttribute('source_endpoint_id');
    }

    // source_type - computed: true, optional: false, required: false
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSourceEndpoint.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSourceEndpoint.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            configuration: ccSourceEndpointConfigurationPropertyToTerraform(this._configuration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            region_name: cdktn.stringToTerraform(this._regionName),
            tags: cdktn.listMapper(ccSourceEndpointTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccSourceEndpointConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSourceEndpoint.ConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            tags: {
                value: cdktn.listMapperHcl(ccSourceEndpointTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSourceEndpoint.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSourceEndpointAssociatedResourceDetailsRouterOutputPropertyToTerraform(struct?: CcSourceEndpoint.AssociatedResourceDetailsRouterOutputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSourceEndpointAssociatedResourceDetailsRouterOutputPropertyToHclTerraform(struct?: CcSourceEndpoint.AssociatedResourceDetailsRouterOutputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccSourceEndpointAssociatedResourceDetailsPropertyToTerraform(struct?: CcSourceEndpoint.AssociatedResourceDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSourceEndpointAssociatedResourceDetailsPropertyToHclTerraform(struct?: CcSourceEndpoint.AssociatedResourceDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccSourceEndpointConfigurationRouterOutputPropertyToTerraform(struct?: CcSourceEndpoint.ConfigurationRouterOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        router_output_arn: cdktn.stringToTerraform(struct!.routerOutputArn),
    }
}


export function ccSourceEndpointConfigurationRouterOutputPropertyToHclTerraform(struct?: CcSourceEndpoint.ConfigurationRouterOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        router_output_arn: {
            value: cdktn.stringToHclTerraform(struct!.routerOutputArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointRistPropertyToTerraform(struct?: CcSourceEndpoint.RistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
        recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
    }
}


export function ccSourceEndpointRistPropertyToHclTerraform(struct?: CcSourceEndpoint.RistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_ingest_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
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


export function ccSourceEndpointRtpPropertyToTerraform(struct?: CcSourceEndpoint.RtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
        forward_error_correction_state: cdktn.stringToTerraform(struct!.forwardErrorCorrectionState),
    }
}


export function ccSourceEndpointRtpPropertyToHclTerraform(struct?: CcSourceEndpoint.RtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_ingest_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        forward_error_correction_state: {
            value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrectionState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToTerraform(struct?: CcSourceEndpoint.ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToHclTerraform(struct?: CcSourceEndpoint.ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccSourceEndpointSrtCallerPropertyToTerraform(struct?: CcSourceEndpoint.SrtCallerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
        encryption_passphrase: ccSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToTerraform(struct!.encryptionPassphrase),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    }
}


export function ccSourceEndpointSrtCallerPropertyToHclTerraform(struct?: CcSourceEndpoint.SrtCallerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_ingest_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        encryption_passphrase: {
            value: ccSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToHclTerraform(struct!.encryptionPassphrase),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty",
        },
        minimum_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToTerraform(struct?: CcSourceEndpoint.ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToHclTerraform(struct?: CcSourceEndpoint.ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccSourceEndpointSrtListenerPropertyToTerraform(struct?: CcSourceEndpoint.SrtListenerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_passphrase: ccSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToTerraform(struct!.encryptionPassphrase),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        source_address: cdktn.stringToTerraform(struct!.sourceAddress),
        source_listener_port: cdktn.numberToTerraform(struct!.sourceListenerPort),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccSourceEndpointSrtListenerPropertyToHclTerraform(struct?: CcSourceEndpoint.SrtListenerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_passphrase: {
            value: ccSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToHclTerraform(struct!.encryptionPassphrase),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty",
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
        source_listener_port: {
            value: cdktn.numberToHclTerraform(struct!.sourceListenerPort),
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


export function ccSourceEndpointProtocolConfigurationPropertyToTerraform(struct?: CcSourceEndpoint.ProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rist: ccSourceEndpointRistPropertyToTerraform(struct!.rist),
        rtp: ccSourceEndpointRtpPropertyToTerraform(struct!.rtp),
        srt_caller: ccSourceEndpointSrtCallerPropertyToTerraform(struct!.srtCaller),
        srt_listener: ccSourceEndpointSrtListenerPropertyToTerraform(struct!.srtListener),
    }
}


export function ccSourceEndpointProtocolConfigurationPropertyToHclTerraform(struct?: CcSourceEndpoint.ProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rist: {
            value: ccSourceEndpointRistPropertyToHclTerraform(struct!.rist),
            isBlock: true,
            type: "struct",
            storageClassType: "RistProperty",
        },
        rtp: {
            value: ccSourceEndpointRtpPropertyToHclTerraform(struct!.rtp),
            isBlock: true,
            type: "struct",
            storageClassType: "RtpProperty",
        },
        srt_caller: {
            value: ccSourceEndpointSrtCallerPropertyToHclTerraform(struct!.srtCaller),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtCallerProperty",
        },
        srt_listener: {
            value: ccSourceEndpointSrtListenerPropertyToHclTerraform(struct!.srtListener),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointSourceAllowRulesPropertyToTerraform(struct?: CcSourceEndpoint.SourceAllowRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccSourceEndpointSourceAllowRulesPropertyToHclTerraform(struct?: CcSourceEndpoint.SourceAllowRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointPublicPropertyToTerraform(struct?: CcSourceEndpoint.PublicProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_allow_rules: cdktn.listMapper(ccSourceEndpointSourceAllowRulesPropertyToTerraform, false)(struct!.sourceAllowRules),
    }
}


export function ccSourceEndpointPublicPropertyToHclTerraform(struct?: CcSourceEndpoint.PublicProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_allow_rules: {
            value: cdktn.listMapperHcl(ccSourceEndpointSourceAllowRulesPropertyToHclTerraform, false)(struct!.sourceAllowRules),
            isBlock: true,
            type: "list",
            storageClassType: "SourceAllowRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointVpcPropertyToTerraform(struct?: CcSourceEndpoint.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccSourceEndpointVpcPropertyToHclTerraform(struct?: CcSourceEndpoint.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointSourceNetworkingConfigurationPropertyToTerraform(struct?: CcSourceEndpoint.SourceNetworkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        public: ccSourceEndpointPublicPropertyToTerraform(struct!.public),
        vpc: ccSourceEndpointVpcPropertyToTerraform(struct!.vpc),
    }
}


export function ccSourceEndpointSourceNetworkingConfigurationPropertyToHclTerraform(struct?: CcSourceEndpoint.SourceNetworkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        public: {
            value: ccSourceEndpointPublicPropertyToHclTerraform(struct!.public),
            isBlock: true,
            type: "struct",
            storageClassType: "PublicProperty",
        },
        vpc: {
            value: ccSourceEndpointVpcPropertyToHclTerraform(struct!.vpc),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointStandardPropertyToTerraform(struct?: CcSourceEndpoint.StandardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        protocol_configuration: ccSourceEndpointProtocolConfigurationPropertyToTerraform(struct!.protocolConfiguration),
        source_networking_configuration: ccSourceEndpointSourceNetworkingConfigurationPropertyToTerraform(struct!.sourceNetworkingConfiguration),
        source_networking_type: cdktn.stringToTerraform(struct!.sourceNetworkingType),
    }
}


export function ccSourceEndpointStandardPropertyToHclTerraform(struct?: CcSourceEndpoint.StandardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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
            value: ccSourceEndpointProtocolConfigurationPropertyToHclTerraform(struct!.protocolConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ProtocolConfigurationProperty",
        },
        source_networking_configuration: {
            value: ccSourceEndpointSourceNetworkingConfigurationPropertyToHclTerraform(struct!.sourceNetworkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceNetworkingConfigurationProperty",
        },
        source_networking_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceNetworkingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointConfigurationPropertyToTerraform(struct?: CcSourceEndpoint.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        router_output: ccSourceEndpointConfigurationRouterOutputPropertyToTerraform(struct!.routerOutput),
        standard: ccSourceEndpointStandardPropertyToTerraform(struct!.standard),
    }
}


export function ccSourceEndpointConfigurationPropertyToHclTerraform(struct?: CcSourceEndpoint.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        router_output: {
            value: ccSourceEndpointConfigurationRouterOutputPropertyToHclTerraform(struct!.routerOutput),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationRouterOutputProperty",
        },
        standard: {
            value: ccSourceEndpointStandardPropertyToHclTerraform(struct!.standard),
            isBlock: true,
            type: "struct",
            storageClassType: "StandardProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceEndpointTagsPropertyToTerraform(struct?: CcSourceEndpoint.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSourceEndpointTagsPropertyToHclTerraform(struct?: CcSourceEndpoint.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSourceEndpoint {
export interface AssociatedResourceDetailsRouterOutputProperty {
}
export class AssociatedResourceDetailsRouterOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssociatedResourceDetailsRouterOutputProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociatedResourceDetailsRouterOutputProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // maximum_bitrate - computed: true, optional: false, required: false
    public get maximumBitrate() {
        return this.getNumberAttribute('maximum_bitrate');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }
}
export interface AssociatedResourceDetailsProperty {
}
export class AssociatedResourceDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssociatedResourceDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociatedResourceDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // router_output - computed: true, optional: false, required: false
    private _routerOutput = new AssociatedResourceDetailsRouterOutputPropertyOutputReference(this, "router_output");
    public get routerOutput() {
        return this._routerOutput;
    }

    // standard - computed: true, optional: false, required: false
    public get standard() {
        return this.getStringAttribute('standard');
    }
}
export interface ConfigurationRouterOutputProperty {
    /**
    * The Amazon Resource Name (ARN) of the router output that the source endpoint represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#router_output_arn CcSourceEndpoint#router_output_arn}
    */
    readonly routerOutputArn?: string;
}
export class ConfigurationRouterOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationRouterOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._routerOutputArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.routerOutputArn = this._routerOutputArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationRouterOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._routerOutputArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._routerOutputArn = value.routerOutputArn;
        }
    }

    // router_output_arn - computed: true, optional: true, required: false
    private _routerOutputArn?: string; 
    public get routerOutputArn() {
        return this.getStringAttribute('router_output_arn');
    }
    public set routerOutputArn(value: string) {
        this._routerOutputArn = value;
    }
    public resetRouterOutputArn() {
        this._routerOutputArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerOutputArnInput() {
        return this._routerOutputArn;
    }
}
export interface RistProperty {
    /**
    * The port on the destination that receives the content. The valid range is 3000 to 30000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port CcSourceEndpoint#destination_ingest_port}
    */
    readonly destinationIngestPort?: number;
    /**
    * The amount of time, in milliseconds, that the source endpoint allows for recovering lost packets. The valid range is 10 to 10000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#recovery_latency_milliseconds CcSourceEndpoint#recovery_latency_milliseconds}
    */
    readonly recoveryLatencyMilliseconds?: number;
}
export class RistPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RistProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationIngestPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationIngestPort = this._destinationIngestPort;
        }
        if (this._recoveryLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RistProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationIngestPort = undefined;
            this._recoveryLatencyMilliseconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationIngestPort = value.destinationIngestPort;
            this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
        }
    }

    // destination_ingest_port - computed: true, optional: true, required: false
    private _destinationIngestPort?: number; 
    public get destinationIngestPort() {
        return this.getNumberAttribute('destination_ingest_port');
    }
    public set destinationIngestPort(value: number) {
        this._destinationIngestPort = value;
    }
    public resetDestinationIngestPort() {
        this._destinationIngestPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIngestPortInput() {
        return this._destinationIngestPort;
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
export interface RtpProperty {
    /**
    * The port on the destination that receives the content. The valid range is 3000 to 30000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port CcSourceEndpoint#destination_ingest_port}
    */
    readonly destinationIngestPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#forward_error_correction_state CcSourceEndpoint#forward_error_correction_state}
    */
    readonly forwardErrorCorrectionState?: string;
}
export class RtpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RtpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationIngestPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationIngestPort = this._destinationIngestPort;
        }
        if (this._forwardErrorCorrectionState !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardErrorCorrectionState = this._forwardErrorCorrectionState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RtpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationIngestPort = undefined;
            this._forwardErrorCorrectionState = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationIngestPort = value.destinationIngestPort;
            this._forwardErrorCorrectionState = value.forwardErrorCorrectionState;
        }
    }

    // destination_ingest_port - computed: true, optional: true, required: false
    private _destinationIngestPort?: number; 
    public get destinationIngestPort() {
        return this.getNumberAttribute('destination_ingest_port');
    }
    public set destinationIngestPort(value: number) {
        this._destinationIngestPort = value;
    }
    public resetDestinationIngestPort() {
        this._destinationIngestPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIngestPortInput() {
        return this._destinationIngestPort;
    }

    // forward_error_correction_state - computed: true, optional: true, required: false
    private _forwardErrorCorrectionState?: string; 
    public get forwardErrorCorrectionState() {
        return this.getStringAttribute('forward_error_correction_state');
    }
    public set forwardErrorCorrectionState(value: string) {
        this._forwardErrorCorrectionState = value;
    }
    public resetForwardErrorCorrectionState() {
        this._forwardErrorCorrectionState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardErrorCorrectionStateInput() {
        return this._forwardErrorCorrectionState;
    }
}
export interface ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty {
    /**
    * The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#secret_arn CcSourceEndpoint#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretArn = value.secretArn;
        }
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
export interface SrtCallerProperty {
    /**
    * The port on which the destination listens for the connection. The valid range is 3000 to 30000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port CcSourceEndpoint#destination_ingest_port}
    */
    readonly destinationIngestPort?: number;
    /**
    * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#encryption_passphrase CcSourceEndpoint#encryption_passphrase}
    */
    readonly encryptionPassphrase?: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty;
    /**
    * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#minimum_latency_milliseconds CcSourceEndpoint#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
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
        if (this._destinationIngestPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationIngestPort = this._destinationIngestPort;
        }
        if (this._encryptionPassphrase?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionPassphrase = this._encryptionPassphrase?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtCallerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationIngestPort = undefined;
            this._encryptionPassphrase.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationIngestPort = value.destinationIngestPort;
            this._encryptionPassphrase.internalValue = value.encryptionPassphrase;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
        }
    }

    // destination_ingest_port - computed: true, optional: true, required: false
    private _destinationIngestPort?: number; 
    public get destinationIngestPort() {
        return this.getNumberAttribute('destination_ingest_port');
    }
    public set destinationIngestPort(value: number) {
        this._destinationIngestPort = value;
    }
    public resetDestinationIngestPort() {
        this._destinationIngestPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIngestPortInput() {
        return this._destinationIngestPort;
    }

    // encryption_passphrase - computed: true, optional: true, required: false
    private _encryptionPassphrase = new ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyOutputReference(this, "encryption_passphrase");
    public get encryptionPassphrase() {
        return this._encryptionPassphrase;
    }
    public putEncryptionPassphrase(value: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty) {
        this._encryptionPassphrase.internalValue = value;
    }
    public resetEncryptionPassphrase() {
        this._encryptionPassphrase.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionPassphraseInput() {
        return this._encryptionPassphrase.internalValue;
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
}
export interface ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty {
    /**
    * The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#secret_arn CcSourceEndpoint#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretArn = value.secretArn;
        }
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
export interface SrtListenerProperty {
    /**
    * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#encryption_passphrase CcSourceEndpoint#encryption_passphrase}
    */
    readonly encryptionPassphrase?: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty;
    /**
    * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#minimum_latency_milliseconds CcSourceEndpoint#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The IP address that the source endpoint listens on for incoming connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_address CcSourceEndpoint#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * The port that the source endpoint listens on for incoming connections. The valid range is 1024 to 65535.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_listener_port CcSourceEndpoint#source_listener_port}
    */
    readonly sourceListenerPort?: number;
    /**
    * The stream ID that identifies the content for the SRT connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#stream_id CcSourceEndpoint#stream_id}
    */
    readonly streamId?: string;
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
        if (this._encryptionPassphrase?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionPassphrase = this._encryptionPassphrase?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        if (this._sourceAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddress = this._sourceAddress;
        }
        if (this._sourceListenerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceListenerPort = this._sourceListenerPort;
        }
        if (this._streamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamId = this._streamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtListenerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionPassphrase.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._sourceAddress = undefined;
            this._sourceListenerPort = undefined;
            this._streamId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionPassphrase.internalValue = value.encryptionPassphrase;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._sourceAddress = value.sourceAddress;
            this._sourceListenerPort = value.sourceListenerPort;
            this._streamId = value.streamId;
        }
    }

    // encryption_passphrase - computed: true, optional: true, required: false
    private _encryptionPassphrase = new ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyOutputReference(this, "encryption_passphrase");
    public get encryptionPassphrase() {
        return this._encryptionPassphrase;
    }
    public putEncryptionPassphrase(value: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty) {
        this._encryptionPassphrase.internalValue = value;
    }
    public resetEncryptionPassphrase() {
        this._encryptionPassphrase.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionPassphraseInput() {
        return this._encryptionPassphrase.internalValue;
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

    // source_listener_port - computed: true, optional: true, required: false
    private _sourceListenerPort?: number; 
    public get sourceListenerPort() {
        return this.getNumberAttribute('source_listener_port');
    }
    public set sourceListenerPort(value: number) {
        this._sourceListenerPort = value;
    }
    public resetSourceListenerPort() {
        this._sourceListenerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceListenerPortInput() {
        return this._sourceListenerPort;
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
export interface ProtocolConfigurationProperty {
    /**
    * The configuration settings for a source endpoint that uses the RIST protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#rist CcSourceEndpoint#rist}
    */
    readonly rist?: RistProperty;
    /**
    * The configuration settings for a source endpoint that uses the RTP protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#rtp CcSourceEndpoint#rtp}
    */
    readonly rtp?: RtpProperty;
    /**
    * The configuration settings for a source endpoint that uses SRT in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#srt_caller CcSourceEndpoint#srt_caller}
    */
    readonly srtCaller?: SrtCallerProperty;
    /**
    * The configuration settings for a source endpoint that uses SRT in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#srt_listener CcSourceEndpoint#srt_listener}
    */
    readonly srtListener?: SrtListenerProperty;
}
export class ProtocolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProtocolConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ProtocolConfigurationProperty | cdktn.IResolvable | undefined) {
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
    private _rist = new RistPropertyOutputReference(this, "rist");
    public get rist() {
        return this._rist;
    }
    public putRist(value: RistProperty) {
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
    private _rtp = new RtpPropertyOutputReference(this, "rtp");
    public get rtp() {
        return this._rtp;
    }
    public putRtp(value: RtpProperty) {
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
export interface SourceAllowRulesProperty {
    /**
    * The CIDR block that is allowed to connect to the source endpoint, in CIDR notation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#cidr CcSourceEndpoint#cidr}
    */
    readonly cidr?: string;
}
export class SourceAllowRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceAllowRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceAllowRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class SourceAllowRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceAllowRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceAllowRulesPropertyOutputReference {
        return new SourceAllowRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PublicProperty {
    /**
    * The rules that specify which CIDR blocks can connect to the source endpoint. You can specify up to 10 rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_allow_rules CcSourceEndpoint#source_allow_rules}
    */
    readonly sourceAllowRules?: SourceAllowRulesProperty[] | cdktn.IResolvable;
}
export class PublicPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceAllowRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAllowRules = this._sourceAllowRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceAllowRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceAllowRules.internalValue = value.sourceAllowRules;
        }
    }

    // source_allow_rules - computed: true, optional: true, required: false
    private _sourceAllowRules = new SourceAllowRulesPropertyList(this, "source_allow_rules", false);
    public get sourceAllowRules() {
        return this._sourceAllowRules;
    }
    public putSourceAllowRules(value: SourceAllowRulesProperty[] | cdktn.IResolvable) {
        this._sourceAllowRules.internalValue = value;
    }
    public resetSourceAllowRules() {
        this._sourceAllowRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAllowRulesInput() {
        return this._sourceAllowRules.internalValue;
    }
}
export interface VpcProperty {
    /**
    * The IDs of the security groups to associate with the source endpoint. You can specify from 1 to 5 security groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#security_group_ids CcSourceEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnet to use for the source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#subnet_id CcSourceEndpoint#subnet_id}
    */
    readonly subnetId?: string;
}
export class VpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetId = value.subnetId;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}
export interface SourceNetworkingConfigurationProperty {
    /**
    * The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#public CcSourceEndpoint#public}
    */
    readonly public?: PublicProperty;
    /**
    * The networking configuration for a source endpoint in a virtual private cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#vpc CcSourceEndpoint#vpc}
    */
    readonly vpc?: VpcProperty;
}
export class SourceNetworkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceNetworkingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._public?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.public = this._public?.internalValue;
        }
        if (this._vpc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpc = this._vpc?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceNetworkingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._public.internalValue = undefined;
            this._vpc.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._public.internalValue = value.public;
            this._vpc.internalValue = value.vpc;
        }
    }

    // public - computed: true, optional: true, required: false
    private _public = new PublicPropertyOutputReference(this, "public");
    public get public() {
        return this._public;
    }
    public putPublic(value: PublicProperty) {
        this._public.internalValue = value;
    }
    public resetPublic() {
        this._public.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicInput() {
        return this._public.internalValue;
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc = new VpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
    public putVpc(value: VpcProperty) {
        this._vpc.internalValue = value;
    }
    public resetVpc() {
        this._vpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc.internalValue;
    }
}
export interface StandardProperty {
    /**
    * The name of the source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#name CcSourceEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol CcSourceEndpoint#protocol}
    */
    readonly protocol?: string;
    /**
    * The protocol configuration for a standard source endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the source endpoint uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol_configuration CcSourceEndpoint#protocol_configuration}
    */
    readonly protocolConfiguration?: ProtocolConfigurationProperty;
    /**
    * The networking configuration for a standard source endpoint. This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_configuration CcSourceEndpoint#source_networking_configuration}
    */
    readonly sourceNetworkingConfiguration?: SourceNetworkingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_type CcSourceEndpoint#source_networking_type}
    */
    readonly sourceNetworkingType?: string;
}
export class StandardPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StandardProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._protocolConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocolConfiguration = this._protocolConfiguration?.internalValue;
        }
        if (this._sourceNetworkingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceNetworkingConfiguration = this._sourceNetworkingConfiguration?.internalValue;
        }
        if (this._sourceNetworkingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceNetworkingType = this._sourceNetworkingType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StandardProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._protocol = undefined;
            this._protocolConfiguration.internalValue = undefined;
            this._sourceNetworkingConfiguration.internalValue = undefined;
            this._sourceNetworkingType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._protocol = value.protocol;
            this._protocolConfiguration.internalValue = value.protocolConfiguration;
            this._sourceNetworkingConfiguration.internalValue = value.sourceNetworkingConfiguration;
            this._sourceNetworkingType = value.sourceNetworkingType;
        }
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
    private _protocolConfiguration = new ProtocolConfigurationPropertyOutputReference(this, "protocol_configuration");
    public get protocolConfiguration() {
        return this._protocolConfiguration;
    }
    public putProtocolConfiguration(value: ProtocolConfigurationProperty) {
        this._protocolConfiguration.internalValue = value;
    }
    public resetProtocolConfiguration() {
        this._protocolConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolConfigurationInput() {
        return this._protocolConfiguration.internalValue;
    }

    // source_networking_configuration - computed: true, optional: true, required: false
    private _sourceNetworkingConfiguration = new SourceNetworkingConfigurationPropertyOutputReference(this, "source_networking_configuration");
    public get sourceNetworkingConfiguration() {
        return this._sourceNetworkingConfiguration;
    }
    public putSourceNetworkingConfiguration(value: SourceNetworkingConfigurationProperty) {
        this._sourceNetworkingConfiguration.internalValue = value;
    }
    public resetSourceNetworkingConfiguration() {
        this._sourceNetworkingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNetworkingConfigurationInput() {
        return this._sourceNetworkingConfiguration.internalValue;
    }

    // source_networking_type - computed: true, optional: true, required: false
    private _sourceNetworkingType?: string; 
    public get sourceNetworkingType() {
        return this.getStringAttribute('source_networking_type');
    }
    public set sourceNetworkingType(value: string) {
        this._sourceNetworkingType = value;
    }
    public resetSourceNetworkingType() {
        this._sourceNetworkingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNetworkingTypeInput() {
        return this._sourceNetworkingType;
    }
}
export interface ConfigurationProperty {
    /**
    * The configuration settings for a source endpoint that represents a router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#router_output CcSourceEndpoint#router_output}
    */
    readonly routerOutput?: ConfigurationRouterOutputProperty;
    /**
    * The configuration settings for a standard source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#standard CcSourceEndpoint#standard}
    */
    readonly standard?: StandardProperty;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._routerOutput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routerOutput = this._routerOutput?.internalValue;
        }
        if (this._standard?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.standard = this._standard?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._routerOutput.internalValue = undefined;
            this._standard.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._routerOutput.internalValue = value.routerOutput;
            this._standard.internalValue = value.standard;
        }
    }

    // router_output - computed: true, optional: true, required: false
    private _routerOutput = new ConfigurationRouterOutputPropertyOutputReference(this, "router_output");
    public get routerOutput() {
        return this._routerOutput;
    }
    public putRouterOutput(value: ConfigurationRouterOutputProperty) {
        this._routerOutput.internalValue = value;
    }
    public resetRouterOutput() {
        this._routerOutput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerOutputInput() {
        return this._routerOutput.internalValue;
    }

    // standard - computed: true, optional: true, required: false
    private _standard = new StandardPropertyOutputReference(this, "standard");
    public get standard() {
        return this._standard;
    }
    public putStandard(value: StandardProperty) {
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
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#key CcSourceEndpoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#value CcSourceEndpoint#value}
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
}
