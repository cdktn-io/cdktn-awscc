// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDestinationEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration settings for a destination endpoint. This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#configuration CcDestinationEndpoint#configuration}
    */
    readonly configuration: CcDestinationEndpoint.ConfigurationProperty;
    /**
    * The description of the destination endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#description CcDestinationEndpoint#description}
    */
    readonly description?: string;
    /**
    * The name of the Amazon Web Services Region in which the destination endpoint is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#region_name CcDestinationEndpoint#region_name}
    */
    readonly regionName?: string;
    /**
    * The tags associated with the destination endpoint. Each tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#tags CcDestinationEndpoint#tags}
    */
    readonly tags?: CcDestinationEndpoint.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint}
*/
export class CcDestinationEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_destination_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDestinationEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDestinationEndpoint to import
    * @param importFromId The id of the existing CcDestinationEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDestinationEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_destination_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDestinationEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcDestinationEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_destination_endpoint',
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
    private _associatedResourceDetails = new CcDestinationEndpoint.AssociatedResourceDetailsPropertyOutputReference(this, "associated_resource_details");
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
    private _configuration = new CcDestinationEndpoint.ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcDestinationEndpoint.ConfigurationProperty) {
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

    // destination_endpoint_id - computed: true, optional: false, required: false
    public get destinationEndpointId() {
        return this.getStringAttribute('destination_endpoint_id');
    }

    // destination_type - computed: true, optional: false, required: false
    public get destinationType() {
        return this.getStringAttribute('destination_type');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDestinationEndpoint.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDestinationEndpoint.TagsProperty[] | cdktn.IResolvable) {
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
            configuration: ccDestinationEndpointConfigurationPropertyToTerraform(this._configuration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            region_name: cdktn.stringToTerraform(this._regionName),
            tags: cdktn.listMapper(ccDestinationEndpointTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccDestinationEndpointConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDestinationEndpoint.ConfigurationProperty",
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
                value: cdktn.listMapperHcl(ccDestinationEndpointTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDestinationEndpoint.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDestinationEndpointAssociatedResourceDetailsRouterInputPropertyToTerraform(struct?: CcDestinationEndpoint.AssociatedResourceDetailsRouterInputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDestinationEndpointAssociatedResourceDetailsRouterInputPropertyToHclTerraform(struct?: CcDestinationEndpoint.AssociatedResourceDetailsRouterInputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDestinationEndpointAssociatedResourceDetailsPropertyToTerraform(struct?: CcDestinationEndpoint.AssociatedResourceDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDestinationEndpointAssociatedResourceDetailsPropertyToHclTerraform(struct?: CcDestinationEndpoint.AssociatedResourceDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDestinationEndpointConfigurationRouterInputPropertyToTerraform(struct?: CcDestinationEndpoint.ConfigurationRouterInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        router_input_arn: cdktn.stringToTerraform(struct!.routerInputArn),
    }
}


export function ccDestinationEndpointConfigurationRouterInputPropertyToHclTerraform(struct?: CcDestinationEndpoint.ConfigurationRouterInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        router_input_arn: {
            value: cdktn.stringToHclTerraform(struct!.routerInputArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointDestinationAllowRulesPropertyToTerraform(struct?: CcDestinationEndpoint.DestinationAllowRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccDestinationEndpointDestinationAllowRulesPropertyToHclTerraform(struct?: CcDestinationEndpoint.DestinationAllowRulesProperty | cdktn.IResolvable): any {
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


export function ccDestinationEndpointPublicPropertyToTerraform(struct?: CcDestinationEndpoint.PublicProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_allow_rules: cdktn.listMapper(ccDestinationEndpointDestinationAllowRulesPropertyToTerraform, false)(struct!.destinationAllowRules),
    }
}


export function ccDestinationEndpointPublicPropertyToHclTerraform(struct?: CcDestinationEndpoint.PublicProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_allow_rules: {
            value: cdktn.listMapperHcl(ccDestinationEndpointDestinationAllowRulesPropertyToHclTerraform, false)(struct!.destinationAllowRules),
            isBlock: true,
            type: "list",
            storageClassType: "DestinationAllowRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointVpcPropertyToTerraform(struct?: CcDestinationEndpoint.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccDestinationEndpointVpcPropertyToHclTerraform(struct?: CcDestinationEndpoint.VpcProperty | cdktn.IResolvable): any {
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


export function ccDestinationEndpointDestinationNetworkingConfigurationPropertyToTerraform(struct?: CcDestinationEndpoint.DestinationNetworkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        public: ccDestinationEndpointPublicPropertyToTerraform(struct!.public),
        vpc: ccDestinationEndpointVpcPropertyToTerraform(struct!.vpc),
    }
}


export function ccDestinationEndpointDestinationNetworkingConfigurationPropertyToHclTerraform(struct?: CcDestinationEndpoint.DestinationNetworkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        public: {
            value: ccDestinationEndpointPublicPropertyToHclTerraform(struct!.public),
            isBlock: true,
            type: "struct",
            storageClassType: "PublicProperty",
        },
        vpc: {
            value: ccDestinationEndpointVpcPropertyToHclTerraform(struct!.vpc),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointRistPropertyToTerraform(struct?: CcDestinationEndpoint.RistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
    }
}


export function ccDestinationEndpointRistPropertyToHclTerraform(struct?: CcDestinationEndpoint.RistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_address: {
            value: cdktn.stringToHclTerraform(struct!.destinationAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_ingest_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointRtpPropertyToTerraform(struct?: CcDestinationEndpoint.RtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
        forward_error_correction_state: cdktn.stringToTerraform(struct!.forwardErrorCorrectionState),
    }
}


export function ccDestinationEndpointRtpPropertyToHclTerraform(struct?: CcDestinationEndpoint.RtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_address: {
            value: cdktn.stringToHclTerraform(struct!.destinationAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToTerraform(struct?: CcDestinationEndpoint.ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToHclTerraform(struct?: CcDestinationEndpoint.ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty | cdktn.IResolvable): any {
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


export function ccDestinationEndpointSrtCallerPropertyToTerraform(struct?: CcDestinationEndpoint.SrtCallerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_passphrase: ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToTerraform(struct!.encryptionPassphrase),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        source_listener_port: cdktn.numberToTerraform(struct!.sourceListenerPort),
    }
}


export function ccDestinationEndpointSrtCallerPropertyToHclTerraform(struct?: CcDestinationEndpoint.SrtCallerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_passphrase: {
            value: ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrasePropertyToHclTerraform(struct!.encryptionPassphrase),
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
        source_listener_port: {
            value: cdktn.numberToHclTerraform(struct!.sourceListenerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToTerraform(struct?: CcDestinationEndpoint.ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToHclTerraform(struct?: CcDestinationEndpoint.ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty | cdktn.IResolvable): any {
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


export function ccDestinationEndpointSrtListenerPropertyToTerraform(struct?: CcDestinationEndpoint.SrtListenerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_ingest_port: cdktn.numberToTerraform(struct!.destinationIngestPort),
        encryption_passphrase: ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToTerraform(struct!.encryptionPassphrase),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccDestinationEndpointSrtListenerPropertyToHclTerraform(struct?: CcDestinationEndpoint.SrtListenerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_address: {
            value: cdktn.stringToHclTerraform(struct!.destinationAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_ingest_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationIngestPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        encryption_passphrase: {
            value: ccDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrasePropertyToHclTerraform(struct!.encryptionPassphrase),
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


export function ccDestinationEndpointProtocolConfigurationPropertyToTerraform(struct?: CcDestinationEndpoint.ProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rist: ccDestinationEndpointRistPropertyToTerraform(struct!.rist),
        rtp: ccDestinationEndpointRtpPropertyToTerraform(struct!.rtp),
        srt_caller: ccDestinationEndpointSrtCallerPropertyToTerraform(struct!.srtCaller),
        srt_listener: ccDestinationEndpointSrtListenerPropertyToTerraform(struct!.srtListener),
    }
}


export function ccDestinationEndpointProtocolConfigurationPropertyToHclTerraform(struct?: CcDestinationEndpoint.ProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rist: {
            value: ccDestinationEndpointRistPropertyToHclTerraform(struct!.rist),
            isBlock: true,
            type: "struct",
            storageClassType: "RistProperty",
        },
        rtp: {
            value: ccDestinationEndpointRtpPropertyToHclTerraform(struct!.rtp),
            isBlock: true,
            type: "struct",
            storageClassType: "RtpProperty",
        },
        srt_caller: {
            value: ccDestinationEndpointSrtCallerPropertyToHclTerraform(struct!.srtCaller),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtCallerProperty",
        },
        srt_listener: {
            value: ccDestinationEndpointSrtListenerPropertyToHclTerraform(struct!.srtListener),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointStandardPropertyToTerraform(struct?: CcDestinationEndpoint.StandardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_networking_configuration: ccDestinationEndpointDestinationNetworkingConfigurationPropertyToTerraform(struct!.destinationNetworkingConfiguration),
        destination_networking_type: cdktn.stringToTerraform(struct!.destinationNetworkingType),
        name: cdktn.stringToTerraform(struct!.name),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        protocol_configuration: ccDestinationEndpointProtocolConfigurationPropertyToTerraform(struct!.protocolConfiguration),
    }
}


export function ccDestinationEndpointStandardPropertyToHclTerraform(struct?: CcDestinationEndpoint.StandardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_networking_configuration: {
            value: ccDestinationEndpointDestinationNetworkingConfigurationPropertyToHclTerraform(struct!.destinationNetworkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationNetworkingConfigurationProperty",
        },
        destination_networking_type: {
            value: cdktn.stringToHclTerraform(struct!.destinationNetworkingType),
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
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol_configuration: {
            value: ccDestinationEndpointProtocolConfigurationPropertyToHclTerraform(struct!.protocolConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ProtocolConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointConfigurationPropertyToTerraform(struct?: CcDestinationEndpoint.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        router_input: ccDestinationEndpointConfigurationRouterInputPropertyToTerraform(struct!.routerInput),
        standard: ccDestinationEndpointStandardPropertyToTerraform(struct!.standard),
    }
}


export function ccDestinationEndpointConfigurationPropertyToHclTerraform(struct?: CcDestinationEndpoint.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        router_input: {
            value: ccDestinationEndpointConfigurationRouterInputPropertyToHclTerraform(struct!.routerInput),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationRouterInputProperty",
        },
        standard: {
            value: ccDestinationEndpointStandardPropertyToHclTerraform(struct!.standard),
            isBlock: true,
            type: "struct",
            storageClassType: "StandardProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDestinationEndpointTagsPropertyToTerraform(struct?: CcDestinationEndpoint.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDestinationEndpointTagsPropertyToHclTerraform(struct?: CcDestinationEndpoint.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcDestinationEndpoint {
export interface AssociatedResourceDetailsRouterInputProperty {
}
export class AssociatedResourceDetailsRouterInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssociatedResourceDetailsRouterInputProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociatedResourceDetailsRouterInputProperty | undefined) {
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

    // router_input - computed: true, optional: false, required: false
    private _routerInput = new AssociatedResourceDetailsRouterInputPropertyOutputReference(this, "router_input");
    public get routerInput() {
        return this._routerInput;
    }

    // standard - computed: true, optional: false, required: false
    public get standard() {
        return this.getStringAttribute('standard');
    }
}
export interface ConfigurationRouterInputProperty {
    /**
    * The Amazon Resource Name (ARN) of the router input that the destination endpoint represents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input_arn CcDestinationEndpoint#router_input_arn}
    */
    readonly routerInputArn?: string;
}
export class ConfigurationRouterInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationRouterInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._routerInputArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.routerInputArn = this._routerInputArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationRouterInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._routerInputArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._routerInputArn = value.routerInputArn;
        }
    }

    // router_input_arn - computed: true, optional: true, required: false
    private _routerInputArn?: string; 
    public get routerInputArn() {
        return this.getStringAttribute('router_input_arn');
    }
    public set routerInputArn(value: string) {
        this._routerInputArn = value;
    }
    public resetRouterInputArn() {
        this._routerInputArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerInputArnInput() {
        return this._routerInputArn;
    }
}
export interface DestinationAllowRulesProperty {
    /**
    * The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#cidr CcDestinationEndpoint#cidr}
    */
    readonly cidr?: string;
}
export class DestinationAllowRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DestinationAllowRulesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DestinationAllowRulesProperty | cdktn.IResolvable | undefined) {
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

export class DestinationAllowRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : DestinationAllowRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): DestinationAllowRulesPropertyOutputReference {
        return new DestinationAllowRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PublicProperty {
    /**
    * The rules that specify which CIDR blocks can connect to the destination endpoint. You can specify up to 10 rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_allow_rules CcDestinationEndpoint#destination_allow_rules}
    */
    readonly destinationAllowRules?: DestinationAllowRulesProperty[] | cdktn.IResolvable;
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
        if (this._destinationAllowRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAllowRules = this._destinationAllowRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAllowRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAllowRules.internalValue = value.destinationAllowRules;
        }
    }

    // destination_allow_rules - computed: true, optional: true, required: false
    private _destinationAllowRules = new DestinationAllowRulesPropertyList(this, "destination_allow_rules", false);
    public get destinationAllowRules() {
        return this._destinationAllowRules;
    }
    public putDestinationAllowRules(value: DestinationAllowRulesProperty[] | cdktn.IResolvable) {
        this._destinationAllowRules.internalValue = value;
    }
    public resetDestinationAllowRules() {
        this._destinationAllowRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAllowRulesInput() {
        return this._destinationAllowRules.internalValue;
    }
}
export interface VpcProperty {
    /**
    * The IDs of the security groups to associate with the destination endpoint. You can specify from 1 to 5 security groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#security_group_ids CcDestinationEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnet to use for the destination endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#subnet_id CcDestinationEndpoint#subnet_id}
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
export interface DestinationNetworkingConfigurationProperty {
    /**
    * The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#public CcDestinationEndpoint#public}
    */
    readonly public?: PublicProperty;
    /**
    * The networking configuration for a destination endpoint in a virtual private cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#vpc CcDestinationEndpoint#vpc}
    */
    readonly vpc?: VpcProperty;
}
export class DestinationNetworkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationNetworkingConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DestinationNetworkingConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface RistProperty {
    /**
    * The IP address on which the destination endpoint receives content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address CcDestinationEndpoint#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The port on which the destination endpoint receives content. The valid range is 1024 to 65531.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port CcDestinationEndpoint#destination_ingest_port}
    */
    readonly destinationIngestPort?: number;
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
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._destinationIngestPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationIngestPort = this._destinationIngestPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RistProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddress = undefined;
            this._destinationIngestPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddress = value.destinationAddress;
            this._destinationIngestPort = value.destinationIngestPort;
        }
    }

    // destination_address - computed: true, optional: true, required: false
    private _destinationAddress?: string; 
    public get destinationAddress() {
        return this.getStringAttribute('destination_address');
    }
    public set destinationAddress(value: string) {
        this._destinationAddress = value;
    }
    public resetDestinationAddress() {
        this._destinationAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressInput() {
        return this._destinationAddress;
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
}
export interface RtpProperty {
    /**
    * The IP address on which the destination endpoint receives content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address CcDestinationEndpoint#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The port on which the destination endpoint receives content. The valid range is 1024 to 65531.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port CcDestinationEndpoint#destination_ingest_port}
    */
    readonly destinationIngestPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#forward_error_correction_state CcDestinationEndpoint#forward_error_correction_state}
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
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
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
            this._destinationAddress = undefined;
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
            this._destinationAddress = value.destinationAddress;
            this._destinationIngestPort = value.destinationIngestPort;
            this._forwardErrorCorrectionState = value.forwardErrorCorrectionState;
        }
    }

    // destination_address - computed: true, optional: true, required: false
    private _destinationAddress?: string; 
    public get destinationAddress() {
        return this.getStringAttribute('destination_address');
    }
    public set destinationAddress(value: string) {
        this._destinationAddress = value;
    }
    public resetDestinationAddress() {
        this._destinationAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressInput() {
        return this._destinationAddress;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn CcDestinationEndpoint#secret_arn}
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
    * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase CcDestinationEndpoint#encryption_passphrase}
    */
    readonly encryptionPassphrase?: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseProperty;
    /**
    * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds CcDestinationEndpoint#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The port on which the source listens for the connection. The valid range is 3000 to 30000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#source_listener_port CcDestinationEndpoint#source_listener_port}
    */
    readonly sourceListenerPort?: number;
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
        if (this._encryptionPassphrase?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionPassphrase = this._encryptionPassphrase?.internalValue;
        }
        if (this._minimumLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
        }
        if (this._sourceListenerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceListenerPort = this._sourceListenerPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtCallerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionPassphrase.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._sourceListenerPort = undefined;
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
            this._sourceListenerPort = value.sourceListenerPort;
        }
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
}
export interface ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty {
    /**
    * The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#secret_arn CcDestinationEndpoint#secret_arn}
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
    * The IP address on which the destination endpoint listens for incoming connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_address CcDestinationEndpoint#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_ingest_port CcDestinationEndpoint#destination_ingest_port}
    */
    readonly destinationIngestPort?: number;
    /**
    * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#encryption_passphrase CcDestinationEndpoint#encryption_passphrase}
    */
    readonly encryptionPassphrase?: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseProperty;
    /**
    * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#minimum_latency_milliseconds CcDestinationEndpoint#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The stream ID that identifies the content for the SRT connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#stream_id CcDestinationEndpoint#stream_id}
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
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
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
            this._destinationAddress = undefined;
            this._destinationIngestPort = undefined;
            this._encryptionPassphrase.internalValue = undefined;
            this._minimumLatencyMilliseconds = undefined;
            this._streamId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddress = value.destinationAddress;
            this._destinationIngestPort = value.destinationIngestPort;
            this._encryptionPassphrase.internalValue = value.encryptionPassphrase;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._streamId = value.streamId;
        }
    }

    // destination_address - computed: true, optional: true, required: false
    private _destinationAddress?: string; 
    public get destinationAddress() {
        return this.getStringAttribute('destination_address');
    }
    public set destinationAddress(value: string) {
        this._destinationAddress = value;
    }
    public resetDestinationAddress() {
        this._destinationAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressInput() {
        return this._destinationAddress;
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
    * The configuration settings for a destination endpoint that uses the RIST protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rist CcDestinationEndpoint#rist}
    */
    readonly rist?: RistProperty;
    /**
    * The configuration settings for a destination endpoint that uses the RTP protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#rtp CcDestinationEndpoint#rtp}
    */
    readonly rtp?: RtpProperty;
    /**
    * The configuration settings for a destination endpoint that uses SRT in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_caller CcDestinationEndpoint#srt_caller}
    */
    readonly srtCaller?: SrtCallerProperty;
    /**
    * The configuration settings for a destination endpoint that uses SRT in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#srt_listener CcDestinationEndpoint#srt_listener}
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
export interface StandardProperty {
    /**
    * The networking configuration for a standard destination endpoint. This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_configuration CcDestinationEndpoint#destination_networking_configuration}
    */
    readonly destinationNetworkingConfiguration?: DestinationNetworkingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#destination_networking_type CcDestinationEndpoint#destination_networking_type}
    */
    readonly destinationNetworkingType?: string;
    /**
    * The name of the destination endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#name CcDestinationEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol CcDestinationEndpoint#protocol}
    */
    readonly protocol?: string;
    /**
    * The protocol configuration for a standard destination endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the destination endpoint uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#protocol_configuration CcDestinationEndpoint#protocol_configuration}
    */
    readonly protocolConfiguration?: ProtocolConfigurationProperty;
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
        if (this._destinationNetworkingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationNetworkingConfiguration = this._destinationNetworkingConfiguration?.internalValue;
        }
        if (this._destinationNetworkingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationNetworkingType = this._destinationNetworkingType;
        }
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StandardProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationNetworkingConfiguration.internalValue = undefined;
            this._destinationNetworkingType = undefined;
            this._name = undefined;
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
            this._destinationNetworkingConfiguration.internalValue = value.destinationNetworkingConfiguration;
            this._destinationNetworkingType = value.destinationNetworkingType;
            this._name = value.name;
            this._protocol = value.protocol;
            this._protocolConfiguration.internalValue = value.protocolConfiguration;
        }
    }

    // destination_networking_configuration - computed: true, optional: true, required: false
    private _destinationNetworkingConfiguration = new DestinationNetworkingConfigurationPropertyOutputReference(this, "destination_networking_configuration");
    public get destinationNetworkingConfiguration() {
        return this._destinationNetworkingConfiguration;
    }
    public putDestinationNetworkingConfiguration(value: DestinationNetworkingConfigurationProperty) {
        this._destinationNetworkingConfiguration.internalValue = value;
    }
    public resetDestinationNetworkingConfiguration() {
        this._destinationNetworkingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationNetworkingConfigurationInput() {
        return this._destinationNetworkingConfiguration.internalValue;
    }

    // destination_networking_type - computed: true, optional: true, required: false
    private _destinationNetworkingType?: string; 
    public get destinationNetworkingType() {
        return this.getStringAttribute('destination_networking_type');
    }
    public set destinationNetworkingType(value: string) {
        this._destinationNetworkingType = value;
    }
    public resetDestinationNetworkingType() {
        this._destinationNetworkingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationNetworkingTypeInput() {
        return this._destinationNetworkingType;
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
}
export interface ConfigurationProperty {
    /**
    * The configuration settings for a destination endpoint that represents a router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#router_input CcDestinationEndpoint#router_input}
    */
    readonly routerInput?: ConfigurationRouterInputProperty;
    /**
    * The configuration settings for a standard destination endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#standard CcDestinationEndpoint#standard}
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
        if (this._routerInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routerInput = this._routerInput?.internalValue;
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
            this._routerInput.internalValue = undefined;
            this._standard.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._routerInput.internalValue = value.routerInput;
            this._standard.internalValue = value.standard;
        }
    }

    // router_input - computed: true, optional: true, required: false
    private _routerInput = new ConfigurationRouterInputPropertyOutputReference(this, "router_input");
    public get routerInput() {
        return this._routerInput;
    }
    public putRouterInput(value: ConfigurationRouterInputProperty) {
        this._routerInput.internalValue = value;
    }
    public resetRouterInput() {
        this._routerInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerInputInput() {
        return this._routerInput.internalValue;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#key CcDestinationEndpoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_destination_endpoint#value CcDestinationEndpoint#value}
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
