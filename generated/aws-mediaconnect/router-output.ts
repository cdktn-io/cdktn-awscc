// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouterOutputProps extends cdktn.TerraformMetaArguments {
    /**
    * The Availability Zone where you want to create the router output. This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#availability_zone CcRouterOutput#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The configuration settings for a router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#configuration CcRouterOutput#configuration}
    */
    readonly configuration: CcRouterOutput.RouterOutputConfigurationProperty;
    /**
    * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#maintenance_configuration CcRouterOutput#maintenance_configuration}
    */
    readonly maintenanceConfiguration?: CcRouterOutput.MaintenanceConfigurationProperty;
    /**
    * The maximum bitrate for the router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#maximum_bitrate CcRouterOutput#maximum_bitrate}
    */
    readonly maximumBitrate: number;
    /**
    * The name of the router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#name CcRouterOutput#name}
    */
    readonly name: string;
    /**
    * The Amazon Web Services Region for the router output. Defaults to the current region if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#region_name CcRouterOutput#region_name}
    */
    readonly regionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#routing_scope CcRouterOutput#routing_scope}
    */
    readonly routingScope: string;
    /**
    * Key-value pairs that can be used to tag this router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tags CcRouterOutput#tags}
    */
    readonly tags?: CcRouterOutput.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tier CcRouterOutput#tier}
    */
    readonly tier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output awscc_mediaconnect_router_output}
*/
export class CcRouterOutput extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_router_output";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRouterOutput resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRouterOutput to import
    * @param importFromId The id of the existing CcRouterOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRouterOutput to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_output", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output awscc_mediaconnect_router_output} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouterOutputProps
    */
    public constructor(scope: Construct, id: string, config: CcRouterOutputProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_router_output',
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
        this._availabilityZone = config.availabilityZone;
        this._configuration.internalValue = config.configuration;
        this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
        this._maximumBitrate = config.maximumBitrate;
        this._name = config.name;
        this._regionName = config.regionName;
        this._routingScope = config.routingScope;
        this._tags.internalValue = config.tags;
        this._tier = config.tier;
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
    private _configuration = new CcRouterOutput.RouterOutputConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcRouterOutput.RouterOutputConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }

    // maintenance_configuration - computed: true, optional: true, required: false
    private _maintenanceConfiguration = new CcRouterOutput.MaintenanceConfigurationPropertyOutputReference(this, "maintenance_configuration");
    public get maintenanceConfiguration() {
        return this._maintenanceConfiguration;
    }
    public putMaintenanceConfiguration(value: CcRouterOutput.MaintenanceConfigurationProperty) {
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

    // output_type - computed: true, optional: false, required: false
    public get outputType() {
        return this.getStringAttribute('output_type');
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

    // routed_state - computed: true, optional: false, required: false
    public get routedState() {
        return this.getStringAttribute('routed_state');
    }

    // router_output_id - computed: true, optional: false, required: false
    public get routerOutputId() {
        return this.getStringAttribute('router_output_id');
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
    private _tags = new CcRouterOutput.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRouterOutput.TagProperty[] | cdktn.IResolvable) {
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
            configuration: ccRouterOutputRouterOutputConfigurationPropertyToTerraform(this._configuration.internalValue),
            maintenance_configuration: ccRouterOutputMaintenanceConfigurationPropertyToTerraform(this._maintenanceConfiguration.internalValue),
            maximum_bitrate: cdktn.numberToTerraform(this._maximumBitrate),
            name: cdktn.stringToTerraform(this._name),
            region_name: cdktn.stringToTerraform(this._regionName),
            routing_scope: cdktn.stringToTerraform(this._routingScope),
            tags: cdktn.listMapper(ccRouterOutputTagPropertyToTerraform, false)(this._tags.internalValue),
            tier: cdktn.stringToTerraform(this._tier),
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
                value: ccRouterOutputRouterOutputConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouterOutput.RouterOutputConfigurationProperty",
            },
            maintenance_configuration: {
                value: ccRouterOutputMaintenanceConfigurationPropertyToHclTerraform(this._maintenanceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouterOutput.MaintenanceConfigurationProperty",
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
                value: cdktn.listMapperHcl(ccRouterOutputTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRouterOutput.TagPropertyList",
            },
            tier: {
                value: cdktn.stringToHclTerraform(this._tier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRouterOutputSecretsManagerEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterOutput.SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterOutputSecretsManagerEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
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


export function ccRouterOutputFlowTransitEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterOutput.FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatic: cdktn.stringToTerraform(struct!.automatic),
        secrets_manager: ccRouterOutputSecretsManagerEncryptionKeyConfigurationPropertyToTerraform(struct!.secretsManager),
    }
}


export function ccRouterOutputFlowTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
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
            value: ccRouterOutputSecretsManagerEncryptionKeyConfigurationPropertyToHclTerraform(struct!.secretsManager),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretsManagerEncryptionKeyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputFlowTransitEncryptionPropertyToTerraform(struct?: CcRouterOutput.FlowTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key_configuration: ccRouterOutputFlowTransitEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKeyConfiguration),
        encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
    }
}


export function ccRouterOutputFlowTransitEncryptionPropertyToHclTerraform(struct?: CcRouterOutput.FlowTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key_configuration: {
            value: ccRouterOutputFlowTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKeyConfiguration),
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


export function ccRouterOutputMediaConnectFlowRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.MediaConnectFlowRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_transit_encryption: ccRouterOutputFlowTransitEncryptionPropertyToTerraform(struct!.destinationTransitEncryption),
        flow_arn: cdktn.stringToTerraform(struct!.flowArn),
        flow_source_arn: cdktn.stringToTerraform(struct!.flowSourceArn),
    }
}


export function ccRouterOutputMediaConnectFlowRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.MediaConnectFlowRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_transit_encryption: {
            value: ccRouterOutputFlowTransitEncryptionPropertyToHclTerraform(struct!.destinationTransitEncryption),
            isBlock: true,
            type: "struct",
            storageClassType: "FlowTransitEncryptionProperty",
        },
        flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.flowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        flow_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.flowSourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputSecretsManagerPropertyToTerraform(struct?: CcRouterOutput.SecretsManagerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterOutputSecretsManagerPropertyToHclTerraform(struct?: CcRouterOutput.SecretsManagerProperty | cdktn.IResolvable): any {
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


export function ccRouterOutputMediaLiveTransitEncryptionKeyConfigurationPropertyToTerraform(struct?: CcRouterOutput.MediaLiveTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatic: cdktn.stringToTerraform(struct!.automatic),
        secrets_manager: ccRouterOutputSecretsManagerPropertyToTerraform(struct!.secretsManager),
    }
}


export function ccRouterOutputMediaLiveTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.MediaLiveTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
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
            value: ccRouterOutputSecretsManagerPropertyToHclTerraform(struct!.secretsManager),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretsManagerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputMediaLiveTransitEncryptionPropertyToTerraform(struct?: CcRouterOutput.MediaLiveTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key_configuration: ccRouterOutputMediaLiveTransitEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKeyConfiguration),
        encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
    }
}


export function ccRouterOutputMediaLiveTransitEncryptionPropertyToHclTerraform(struct?: CcRouterOutput.MediaLiveTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key_configuration: {
            value: ccRouterOutputMediaLiveTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKeyConfiguration),
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


export function ccRouterOutputMediaLiveInputRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.MediaLiveInputRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_transit_encryption: ccRouterOutputMediaLiveTransitEncryptionPropertyToTerraform(struct!.destinationTransitEncryption),
        media_live_input_arn: cdktn.stringToTerraform(struct!.mediaLiveInputArn),
        media_live_pipeline_id: cdktn.stringToTerraform(struct!.mediaLivePipelineId),
    }
}


export function ccRouterOutputMediaLiveInputRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.MediaLiveInputRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_transit_encryption: {
            value: ccRouterOutputMediaLiveTransitEncryptionPropertyToHclTerraform(struct!.destinationTransitEncryption),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaLiveTransitEncryptionProperty",
        },
        media_live_input_arn: {
            value: cdktn.stringToHclTerraform(struct!.mediaLiveInputArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputRistRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.RistRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_port: cdktn.numberToTerraform(struct!.destinationPort),
    }
}


export function ccRouterOutputRistRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.RistRouterOutputConfigurationProperty | cdktn.IResolvable): any {
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
        destination_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputRtpRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.RtpRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_port: cdktn.numberToTerraform(struct!.destinationPort),
        forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
    }
}


export function ccRouterOutputRtpRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.RtpRouterOutputConfigurationProperty | cdktn.IResolvable): any {
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
        destination_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        forward_error_correction: {
            value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyPropertyToTerraform(struct?: CcRouterOutput.ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct?: CcRouterOutput.ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
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


export function ccRouterOutputSrtEncryptionConfigurationPropertyToTerraform(struct?: CcRouterOutput.SrtEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
    }
}


export function ccRouterOutputSrtEncryptionConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.SrtEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputSrtCallerRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.SrtCallerRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_port: cdktn.numberToTerraform(struct!.destinationPort),
        encryption_configuration: ccRouterOutputSrtEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccRouterOutputSrtCallerRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.SrtCallerRouterOutputConfigurationProperty | cdktn.IResolvable): any {
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
        destination_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        encryption_configuration: {
            value: ccRouterOutputSrtEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtEncryptionConfigurationProperty",
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


export function ccRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyPropertyToTerraform(struct?: CcRouterOutput.ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct?: CcRouterOutput.ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable): any {
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


export function ccRouterOutputEncryptionConfigurationPropertyToTerraform(struct?: CcRouterOutput.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
    }
}


export function ccRouterOutputEncryptionConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputSrtListenerRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.SrtListenerRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_configuration: ccRouterOutputEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
        minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccRouterOutputSrtListenerRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.SrtListenerRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_configuration: {
            value: ccRouterOutputEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionConfigurationProperty",
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


export function ccRouterOutputRouterOutputProtocolConfigurationPropertyToTerraform(struct?: CcRouterOutput.RouterOutputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rist: ccRouterOutputRistRouterOutputConfigurationPropertyToTerraform(struct!.rist),
        rtp: ccRouterOutputRtpRouterOutputConfigurationPropertyToTerraform(struct!.rtp),
        srt_caller: ccRouterOutputSrtCallerRouterOutputConfigurationPropertyToTerraform(struct!.srtCaller),
        srt_listener: ccRouterOutputSrtListenerRouterOutputConfigurationPropertyToTerraform(struct!.srtListener),
    }
}


export function ccRouterOutputRouterOutputProtocolConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.RouterOutputProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rist: {
            value: ccRouterOutputRistRouterOutputConfigurationPropertyToHclTerraform(struct!.rist),
            isBlock: true,
            type: "struct",
            storageClassType: "RistRouterOutputConfigurationProperty",
        },
        rtp: {
            value: ccRouterOutputRtpRouterOutputConfigurationPropertyToHclTerraform(struct!.rtp),
            isBlock: true,
            type: "struct",
            storageClassType: "RtpRouterOutputConfigurationProperty",
        },
        srt_caller: {
            value: ccRouterOutputSrtCallerRouterOutputConfigurationPropertyToHclTerraform(struct!.srtCaller),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtCallerRouterOutputConfigurationProperty",
        },
        srt_listener: {
            value: ccRouterOutputSrtListenerRouterOutputConfigurationPropertyToHclTerraform(struct!.srtListener),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerRouterOutputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputStandardRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.StandardRouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        protocol_configuration: ccRouterOutputRouterOutputProtocolConfigurationPropertyToTerraform(struct!.protocolConfiguration),
    }
}


export function ccRouterOutputStandardRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.StandardRouterOutputConfigurationProperty | cdktn.IResolvable): any {
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
            value: ccRouterOutputRouterOutputProtocolConfigurationPropertyToHclTerraform(struct!.protocolConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RouterOutputProtocolConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputRouterOutputConfigurationPropertyToTerraform(struct?: CcRouterOutput.RouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        media_connect_flow: ccRouterOutputMediaConnectFlowRouterOutputConfigurationPropertyToTerraform(struct!.mediaConnectFlow),
        media_live_input: ccRouterOutputMediaLiveInputRouterOutputConfigurationPropertyToTerraform(struct!.mediaLiveInput),
        standard: ccRouterOutputStandardRouterOutputConfigurationPropertyToTerraform(struct!.standard),
    }
}


export function ccRouterOutputRouterOutputConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.RouterOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        media_connect_flow: {
            value: ccRouterOutputMediaConnectFlowRouterOutputConfigurationPropertyToHclTerraform(struct!.mediaConnectFlow),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaConnectFlowRouterOutputConfigurationProperty",
        },
        media_live_input: {
            value: ccRouterOutputMediaLiveInputRouterOutputConfigurationPropertyToHclTerraform(struct!.mediaLiveInput),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaLiveInputRouterOutputConfigurationProperty",
        },
        standard: {
            value: ccRouterOutputStandardRouterOutputConfigurationPropertyToHclTerraform(struct!.standard),
            isBlock: true,
            type: "struct",
            storageClassType: "StandardRouterOutputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputPreferredDayTimeMaintenanceConfigurationPropertyToTerraform(struct?: CcRouterOutput.PreferredDayTimeMaintenanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day: cdktn.stringToTerraform(struct!.day),
        time: cdktn.stringToTerraform(struct!.time),
    }
}


export function ccRouterOutputPreferredDayTimeMaintenanceConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.PreferredDayTimeMaintenanceConfigurationProperty | cdktn.IResolvable): any {
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


export function ccRouterOutputMaintenanceConfigurationPropertyToTerraform(struct?: CcRouterOutput.MaintenanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default: cdktn.stringToTerraform(struct!.default),
        preferred_day_time: ccRouterOutputPreferredDayTimeMaintenanceConfigurationPropertyToTerraform(struct!.preferredDayTime),
    }
}


export function ccRouterOutputMaintenanceConfigurationPropertyToHclTerraform(struct?: CcRouterOutput.MaintenanceConfigurationProperty | cdktn.IResolvable): any {
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
            value: ccRouterOutputPreferredDayTimeMaintenanceConfigurationPropertyToHclTerraform(struct!.preferredDayTime),
            isBlock: true,
            type: "struct",
            storageClassType: "PreferredDayTimeMaintenanceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouterOutputTagPropertyToTerraform(struct?: CcRouterOutput.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRouterOutputTagPropertyToHclTerraform(struct?: CcRouterOutput.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRouterOutput {
export interface SecretsManagerEncryptionKeyConfigurationProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn CcRouterOutput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn CcRouterOutput#secret_arn}
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
export interface FlowTransitEncryptionKeyConfigurationProperty {
    /**
    * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#automatic CcRouterOutput#automatic}
    */
    readonly automatic?: string;
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secrets_manager CcRouterOutput#secrets_manager}
    */
    readonly secretsManager?: SecretsManagerEncryptionKeyConfigurationProperty;
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
    private _secretsManager = new SecretsManagerEncryptionKeyConfigurationPropertyOutputReference(this, "secrets_manager");
    public get secretsManager() {
        return this._secretsManager;
    }
    public putSecretsManager(value: SecretsManagerEncryptionKeyConfigurationProperty) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_configuration CcRouterOutput#encryption_key_configuration}
    */
    readonly encryptionKeyConfiguration?: FlowTransitEncryptionKeyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_type CcRouterOutput#encryption_key_type}
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
export interface MediaConnectFlowRouterOutputConfigurationProperty {
    /**
    * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_transit_encryption CcRouterOutput#destination_transit_encryption}
    */
    readonly destinationTransitEncryption?: FlowTransitEncryptionProperty;
    /**
    * The ARN of the flow to connect to this router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#flow_arn CcRouterOutput#flow_arn}
    */
    readonly flowArn?: string;
    /**
    * The ARN of the flow source to connect to this router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#flow_source_arn CcRouterOutput#flow_source_arn}
    */
    readonly flowSourceArn?: string;
}
export class MediaConnectFlowRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaConnectFlowRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationTransitEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationTransitEncryption = this._destinationTransitEncryption?.internalValue;
        }
        if (this._flowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowArn = this._flowArn;
        }
        if (this._flowSourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowSourceArn = this._flowSourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaConnectFlowRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationTransitEncryption.internalValue = undefined;
            this._flowArn = undefined;
            this._flowSourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationTransitEncryption.internalValue = value.destinationTransitEncryption;
            this._flowArn = value.flowArn;
            this._flowSourceArn = value.flowSourceArn;
        }
    }

    // destination_transit_encryption - computed: true, optional: true, required: false
    private _destinationTransitEncryption = new FlowTransitEncryptionPropertyOutputReference(this, "destination_transit_encryption");
    public get destinationTransitEncryption() {
        return this._destinationTransitEncryption;
    }
    public putDestinationTransitEncryption(value: FlowTransitEncryptionProperty) {
        this._destinationTransitEncryption.internalValue = value;
    }
    public resetDestinationTransitEncryption() {
        this._destinationTransitEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTransitEncryptionInput() {
        return this._destinationTransitEncryption.internalValue;
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

    // flow_source_arn - computed: true, optional: true, required: false
    private _flowSourceArn?: string; 
    public get flowSourceArn() {
        return this.getStringAttribute('flow_source_arn');
    }
    public set flowSourceArn(value: string) {
        this._flowSourceArn = value;
    }
    public resetFlowSourceArn() {
        this._flowSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowSourceArnInput() {
        return this._flowSourceArn;
    }
}
export interface SecretsManagerProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn CcRouterOutput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn CcRouterOutput#secret_arn}
    */
    readonly secretArn?: string;
}
export class SecretsManagerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecretsManagerProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SecretsManagerProperty | cdktn.IResolvable | undefined) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#automatic CcRouterOutput#automatic}
    */
    readonly automatic?: string;
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secrets_manager CcRouterOutput#secrets_manager}
    */
    readonly secretsManager?: SecretsManagerProperty;
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
    private _secretsManager = new SecretsManagerPropertyOutputReference(this, "secrets_manager");
    public get secretsManager() {
        return this._secretsManager;
    }
    public putSecretsManager(value: SecretsManagerProperty) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_configuration CcRouterOutput#encryption_key_configuration}
    */
    readonly encryptionKeyConfiguration?: MediaLiveTransitEncryptionKeyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_type CcRouterOutput#encryption_key_type}
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
export interface MediaLiveInputRouterOutputConfigurationProperty {
    /**
    * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_transit_encryption CcRouterOutput#destination_transit_encryption}
    */
    readonly destinationTransitEncryption?: MediaLiveTransitEncryptionProperty;
    /**
    * The ARN of the MediaLive input to connect to this router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_input_arn CcRouterOutput#media_live_input_arn}
    */
    readonly mediaLiveInputArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_pipeline_id CcRouterOutput#media_live_pipeline_id}
    */
    readonly mediaLivePipelineId?: string;
}
export class MediaLiveInputRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaLiveInputRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationTransitEncryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationTransitEncryption = this._destinationTransitEncryption?.internalValue;
        }
        if (this._mediaLiveInputArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLiveInputArn = this._mediaLiveInputArn;
        }
        if (this._mediaLivePipelineId !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLivePipelineId = this._mediaLivePipelineId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaLiveInputRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationTransitEncryption.internalValue = undefined;
            this._mediaLiveInputArn = undefined;
            this._mediaLivePipelineId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationTransitEncryption.internalValue = value.destinationTransitEncryption;
            this._mediaLiveInputArn = value.mediaLiveInputArn;
            this._mediaLivePipelineId = value.mediaLivePipelineId;
        }
    }

    // destination_transit_encryption - computed: true, optional: true, required: false
    private _destinationTransitEncryption = new MediaLiveTransitEncryptionPropertyOutputReference(this, "destination_transit_encryption");
    public get destinationTransitEncryption() {
        return this._destinationTransitEncryption;
    }
    public putDestinationTransitEncryption(value: MediaLiveTransitEncryptionProperty) {
        this._destinationTransitEncryption.internalValue = value;
    }
    public resetDestinationTransitEncryption() {
        this._destinationTransitEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTransitEncryptionInput() {
        return this._destinationTransitEncryption.internalValue;
    }

    // media_live_input_arn - computed: true, optional: true, required: false
    private _mediaLiveInputArn?: string; 
    public get mediaLiveInputArn() {
        return this.getStringAttribute('media_live_input_arn');
    }
    public set mediaLiveInputArn(value: string) {
        this._mediaLiveInputArn = value;
    }
    public resetMediaLiveInputArn() {
        this._mediaLiveInputArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaLiveInputArnInput() {
        return this._mediaLiveInputArn;
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
}
export interface RistRouterOutputConfigurationProperty {
    /**
    * The destination IP address for the RIST protocol in the router output configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_address CcRouterOutput#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The destination port number for the RIST protocol in the router output configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_port CcRouterOutput#destination_port}
    */
    readonly destinationPort?: number;
}
export class RistRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RistRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._destinationPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RistRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddress = undefined;
            this._destinationPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddress = value.destinationAddress;
            this._destinationPort = value.destinationPort;
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

    // destination_port - computed: true, optional: true, required: false
    private _destinationPort?: number; 
    public get destinationPort() {
        return this.getNumberAttribute('destination_port');
    }
    public set destinationPort(value: number) {
        this._destinationPort = value;
    }
    public resetDestinationPort() {
        this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
        return this._destinationPort;
    }
}
export interface RtpRouterOutputConfigurationProperty {
    /**
    * The destination IP address for the RTP protocol in the router output configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_address CcRouterOutput#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The destination port number for the RTP protocol in the router output configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_port CcRouterOutput#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#forward_error_correction CcRouterOutput#forward_error_correction}
    */
    readonly forwardErrorCorrection?: string;
}
export class RtpRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RtpRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._destinationPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._forwardErrorCorrection !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RtpRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddress = undefined;
            this._destinationPort = undefined;
            this._forwardErrorCorrection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddress = value.destinationAddress;
            this._destinationPort = value.destinationPort;
            this._forwardErrorCorrection = value.forwardErrorCorrection;
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

    // destination_port - computed: true, optional: true, required: false
    private _destinationPort?: number; 
    public get destinationPort() {
        return this.getNumberAttribute('destination_port');
    }
    public set destinationPort(value: number) {
        this._destinationPort = value;
    }
    public resetDestinationPort() {
        this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
        return this._destinationPort;
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
}
export interface ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn CcRouterOutput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn CcRouterOutput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined) {
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
export interface SrtEncryptionConfigurationProperty {
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key CcRouterOutput#encryption_key}
    */
    readonly encryptionKey?: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty;
}
export class SrtEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SrtEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
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
    private _encryptionKey = new ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: ConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyProperty) {
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
export interface SrtCallerRouterOutputConfigurationProperty {
    /**
    * The destination IP address for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_address CcRouterOutput#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * The destination port number for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_port CcRouterOutput#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_configuration CcRouterOutput#encryption_configuration}
    */
    readonly encryptionConfiguration?: SrtEncryptionConfigurationProperty;
    /**
    * The minimum latency in milliseconds for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds CcRouterOutput#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The stream ID for the SRT protocol in caller mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#stream_id CcRouterOutput#stream_id}
    */
    readonly streamId?: string;
}
export class SrtCallerRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtCallerRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._destinationPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
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

    public set internalValue(value: SrtCallerRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddress = undefined;
            this._destinationPort = undefined;
            this._encryptionConfiguration.internalValue = undefined;
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
            this._destinationPort = value.destinationPort;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
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

    // destination_port - computed: true, optional: true, required: false
    private _destinationPort?: number; 
    public get destinationPort() {
        return this.getNumberAttribute('destination_port');
    }
    public set destinationPort(value: number) {
        this._destinationPort = value;
    }
    public resetDestinationPort() {
        this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
        return this._destinationPort;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new SrtEncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: SrtEncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
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
export interface ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty {
    /**
    * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn CcRouterOutput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the Secrets Manager secret used for transit encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn CcRouterOutput#secret_arn}
    */
    readonly secretArn?: string;
}
export class ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty | cdktn.IResolvable | undefined) {
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
export interface EncryptionConfigurationProperty {
    /**
    * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key CcRouterOutput#encryption_key}
    */
    readonly encryptionKey?: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
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
    private _encryptionKey = new ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: ConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyProperty) {
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
export interface SrtListenerRouterOutputConfigurationProperty {
    /**
    * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_configuration CcRouterOutput#encryption_configuration}
    */
    readonly encryptionConfiguration?: EncryptionConfigurationProperty;
    /**
    * The minimum latency in milliseconds for the SRT protocol in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds CcRouterOutput#minimum_latency_milliseconds}
    */
    readonly minimumLatencyMilliseconds?: number;
    /**
    * The port number for the SRT protocol in listener mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#port CcRouterOutput#port}
    */
    readonly port?: number;
}
export class SrtListenerRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtListenerRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
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

    public set internalValue(value: SrtListenerRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionConfiguration.internalValue = undefined;
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
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
            this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
            this._port = value.port;
        }
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
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
export interface RouterOutputProtocolConfigurationProperty {
    /**
    * The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#rist CcRouterOutput#rist}
    */
    readonly rist?: RistRouterOutputConfigurationProperty;
    /**
    * The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#rtp CcRouterOutput#rtp}
    */
    readonly rtp?: RtpRouterOutputConfigurationProperty;
    /**
    * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#srt_caller CcRouterOutput#srt_caller}
    */
    readonly srtCaller?: SrtCallerRouterOutputConfigurationProperty;
    /**
    * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#srt_listener CcRouterOutput#srt_listener}
    */
    readonly srtListener?: SrtListenerRouterOutputConfigurationProperty;
}
export class RouterOutputProtocolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterOutputProtocolConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RouterOutputProtocolConfigurationProperty | cdktn.IResolvable | undefined) {
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
    private _rist = new RistRouterOutputConfigurationPropertyOutputReference(this, "rist");
    public get rist() {
        return this._rist;
    }
    public putRist(value: RistRouterOutputConfigurationProperty) {
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
    private _rtp = new RtpRouterOutputConfigurationPropertyOutputReference(this, "rtp");
    public get rtp() {
        return this._rtp;
    }
    public putRtp(value: RtpRouterOutputConfigurationProperty) {
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
    private _srtCaller = new SrtCallerRouterOutputConfigurationPropertyOutputReference(this, "srt_caller");
    public get srtCaller() {
        return this._srtCaller;
    }
    public putSrtCaller(value: SrtCallerRouterOutputConfigurationProperty) {
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
    private _srtListener = new SrtListenerRouterOutputConfigurationPropertyOutputReference(this, "srt_listener");
    public get srtListener() {
        return this._srtListener;
    }
    public putSrtListener(value: SrtListenerRouterOutputConfigurationProperty) {
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
export interface StandardRouterOutputConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the network interface associated with the standard router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#network_interface_arn CcRouterOutput#network_interface_arn}
    */
    readonly networkInterfaceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#protocol CcRouterOutput#protocol}
    */
    readonly protocol?: string;
    /**
    * The protocol configuration settings for a router output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#protocol_configuration CcRouterOutput#protocol_configuration}
    */
    readonly protocolConfiguration?: RouterOutputProtocolConfigurationProperty;
}
export class StandardRouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StandardRouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: StandardRouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
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
    private _protocolConfiguration = new RouterOutputProtocolConfigurationPropertyOutputReference(this, "protocol_configuration");
    public get protocolConfiguration() {
        return this._protocolConfiguration;
    }
    public putProtocolConfiguration(value: RouterOutputProtocolConfigurationProperty) {
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
export interface RouterOutputConfigurationProperty {
    /**
    * Configuration settings for connecting a router output to a MediaConnect flow source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_connect_flow CcRouterOutput#media_connect_flow}
    */
    readonly mediaConnectFlow?: MediaConnectFlowRouterOutputConfigurationProperty;
    /**
    * Configuration settings for connecting a router output to a MediaLive input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_input CcRouterOutput#media_live_input}
    */
    readonly mediaLiveInput?: MediaLiveInputRouterOutputConfigurationProperty;
    /**
    * The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#standard CcRouterOutput#standard}
    */
    readonly standard?: StandardRouterOutputConfigurationProperty;
}
export class RouterOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mediaConnectFlow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaConnectFlow = this._mediaConnectFlow?.internalValue;
        }
        if (this._mediaLiveInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaLiveInput = this._mediaLiveInput?.internalValue;
        }
        if (this._standard?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.standard = this._standard?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mediaConnectFlow.internalValue = undefined;
            this._mediaLiveInput.internalValue = undefined;
            this._standard.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mediaConnectFlow.internalValue = value.mediaConnectFlow;
            this._mediaLiveInput.internalValue = value.mediaLiveInput;
            this._standard.internalValue = value.standard;
        }
    }

    // media_connect_flow - computed: true, optional: true, required: false
    private _mediaConnectFlow = new MediaConnectFlowRouterOutputConfigurationPropertyOutputReference(this, "media_connect_flow");
    public get mediaConnectFlow() {
        return this._mediaConnectFlow;
    }
    public putMediaConnectFlow(value: MediaConnectFlowRouterOutputConfigurationProperty) {
        this._mediaConnectFlow.internalValue = value;
    }
    public resetMediaConnectFlow() {
        this._mediaConnectFlow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaConnectFlowInput() {
        return this._mediaConnectFlow.internalValue;
    }

    // media_live_input - computed: true, optional: true, required: false
    private _mediaLiveInput = new MediaLiveInputRouterOutputConfigurationPropertyOutputReference(this, "media_live_input");
    public get mediaLiveInput() {
        return this._mediaLiveInput;
    }
    public putMediaLiveInput(value: MediaLiveInputRouterOutputConfigurationProperty) {
        this._mediaLiveInput.internalValue = value;
    }
    public resetMediaLiveInput() {
        this._mediaLiveInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaLiveInputInput() {
        return this._mediaLiveInput.internalValue;
    }

    // standard - computed: true, optional: true, required: false
    private _standard = new StandardRouterOutputConfigurationPropertyOutputReference(this, "standard");
    public get standard() {
        return this._standard;
    }
    public putStandard(value: StandardRouterOutputConfigurationProperty) {
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
export interface PreferredDayTimeMaintenanceConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#day CcRouterOutput#day}
    */
    readonly day?: string;
    /**
    * The preferred time for maintenance operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#time CcRouterOutput#time}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#default CcRouterOutput#default}
    */
    readonly default?: string;
    /**
    * Configuration for preferred day and time maintenance settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#preferred_day_time CcRouterOutput#preferred_day_time}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#key CcRouterOutput#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#value CcRouterOutput#value}
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
