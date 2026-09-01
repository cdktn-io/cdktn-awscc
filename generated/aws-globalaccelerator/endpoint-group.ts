// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The list of endpoint objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configurations CcEndpointGroup#endpoint_configurations}
    */
    readonly endpointConfigurations?: CcEndpointGroup.EndpointConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The name of the AWS Region where the endpoint group is located
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region CcEndpointGroup#endpoint_group_region}
    */
    readonly endpointGroupRegion: string;
    /**
    * The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds CcEndpointGroup#health_check_interval_seconds}
    */
    readonly healthCheckIntervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#health_check_path CcEndpointGroup#health_check_path}
    */
    readonly healthCheckPath?: string;
    /**
    * The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#health_check_port CcEndpointGroup#health_check_port}
    */
    readonly healthCheckPort?: number;
    /**
    * The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol CcEndpointGroup#health_check_protocol}
    */
    readonly healthCheckProtocol?: string;
    /**
    * The Amazon Resource Name (ARN) of the listener
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#listener_arn CcEndpointGroup#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#port_overrides CcEndpointGroup#port_overrides}
    */
    readonly portOverrides?: CcEndpointGroup.PortOverrideProperty[] | cdktn.IResolvable;
    /**
    * The number of consecutive health checks required to set the state of the endpoint to unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#threshold_count CcEndpointGroup#threshold_count}
    */
    readonly thresholdCount?: number;
    /**
    * The percentage of traffic to sent to an AWS Region
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage CcEndpointGroup#traffic_dial_percentage}
    */
    readonly trafficDialPercentage?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}
*/
export class CcEndpointGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_globalaccelerator_endpoint_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpointGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpointGroup to import
    * @param importFromId The id of the existing CcEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpointGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_globalaccelerator_endpoint_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_globalaccelerator_endpoint_group',
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
        this._endpointConfigurations.internalValue = config.endpointConfigurations;
        this._endpointGroupRegion = config.endpointGroupRegion;
        this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
        this._healthCheckPath = config.healthCheckPath;
        this._healthCheckPort = config.healthCheckPort;
        this._healthCheckProtocol = config.healthCheckProtocol;
        this._listenerArn = config.listenerArn;
        this._portOverrides.internalValue = config.portOverrides;
        this._thresholdCount = config.thresholdCount;
        this._trafficDialPercentage = config.trafficDialPercentage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // endpoint_configurations - computed: true, optional: true, required: false
    private _endpointConfigurations = new CcEndpointGroup.EndpointConfigurationPropertyList(this, "endpoint_configurations", false);
    public get endpointConfigurations() {
        return this._endpointConfigurations;
    }
    public putEndpointConfigurations(value: CcEndpointGroup.EndpointConfigurationProperty[] | cdktn.IResolvable) {
        this._endpointConfigurations.internalValue = value;
    }
    public resetEndpointConfigurations() {
        this._endpointConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigurationsInput() {
        return this._endpointConfigurations.internalValue;
    }

    // endpoint_group_arn - computed: true, optional: false, required: false
    public get endpointGroupArn() {
        return this.getStringAttribute('endpoint_group_arn');
    }

    // endpoint_group_region - computed: false, optional: false, required: true
    private _endpointGroupRegion?: string; 
    public get endpointGroupRegion() {
        return this.getStringAttribute('endpoint_group_region');
    }
    public set endpointGroupRegion(value: string) {
        this._endpointGroupRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointGroupRegionInput() {
        return this._endpointGroupRegion;
    }

    // health_check_interval_seconds - computed: true, optional: true, required: false
    private _healthCheckIntervalSeconds?: number; 
    public get healthCheckIntervalSeconds() {
        return this.getNumberAttribute('health_check_interval_seconds');
    }
    public set healthCheckIntervalSeconds(value: number) {
        this._healthCheckIntervalSeconds = value;
    }
    public resetHealthCheckIntervalSeconds() {
        this._healthCheckIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckIntervalSecondsInput() {
        return this._healthCheckIntervalSeconds;
    }

    // health_check_path - computed: true, optional: true, required: false
    private _healthCheckPath?: string; 
    public get healthCheckPath() {
        return this.getStringAttribute('health_check_path');
    }
    public set healthCheckPath(value: string) {
        this._healthCheckPath = value;
    }
    public resetHealthCheckPath() {
        this._healthCheckPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPathInput() {
        return this._healthCheckPath;
    }

    // health_check_port - computed: true, optional: true, required: false
    private _healthCheckPort?: number; 
    public get healthCheckPort() {
        return this.getNumberAttribute('health_check_port');
    }
    public set healthCheckPort(value: number) {
        this._healthCheckPort = value;
    }
    public resetHealthCheckPort() {
        this._healthCheckPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPortInput() {
        return this._healthCheckPort;
    }

    // health_check_protocol - computed: true, optional: true, required: false
    private _healthCheckProtocol?: string; 
    public get healthCheckProtocol() {
        return this.getStringAttribute('health_check_protocol');
    }
    public set healthCheckProtocol(value: string) {
        this._healthCheckProtocol = value;
    }
    public resetHealthCheckProtocol() {
        this._healthCheckProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckProtocolInput() {
        return this._healthCheckProtocol;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // listener_arn - computed: false, optional: false, required: true
    private _listenerArn?: string; 
    public get listenerArn() {
        return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
        this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
        return this._listenerArn;
    }

    // port_overrides - computed: true, optional: true, required: false
    private _portOverrides = new CcEndpointGroup.PortOverridePropertyList(this, "port_overrides", false);
    public get portOverrides() {
        return this._portOverrides;
    }
    public putPortOverrides(value: CcEndpointGroup.PortOverrideProperty[] | cdktn.IResolvable) {
        this._portOverrides.internalValue = value;
    }
    public resetPortOverrides() {
        this._portOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portOverridesInput() {
        return this._portOverrides.internalValue;
    }

    // threshold_count - computed: true, optional: true, required: false
    private _thresholdCount?: number; 
    public get thresholdCount() {
        return this.getNumberAttribute('threshold_count');
    }
    public set thresholdCount(value: number) {
        this._thresholdCount = value;
    }
    public resetThresholdCount() {
        this._thresholdCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdCountInput() {
        return this._thresholdCount;
    }

    // traffic_dial_percentage - computed: true, optional: true, required: false
    private _trafficDialPercentage?: number; 
    public get trafficDialPercentage() {
        return this.getNumberAttribute('traffic_dial_percentage');
    }
    public set trafficDialPercentage(value: number) {
        this._trafficDialPercentage = value;
    }
    public resetTrafficDialPercentage() {
        this._trafficDialPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficDialPercentageInput() {
        return this._trafficDialPercentage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            endpoint_configurations: cdktn.listMapper(ccEndpointGroupEndpointConfigurationPropertyToTerraform, false)(this._endpointConfigurations.internalValue),
            endpoint_group_region: cdktn.stringToTerraform(this._endpointGroupRegion),
            health_check_interval_seconds: cdktn.numberToTerraform(this._healthCheckIntervalSeconds),
            health_check_path: cdktn.stringToTerraform(this._healthCheckPath),
            health_check_port: cdktn.numberToTerraform(this._healthCheckPort),
            health_check_protocol: cdktn.stringToTerraform(this._healthCheckProtocol),
            listener_arn: cdktn.stringToTerraform(this._listenerArn),
            port_overrides: cdktn.listMapper(ccEndpointGroupPortOverridePropertyToTerraform, false)(this._portOverrides.internalValue),
            threshold_count: cdktn.numberToTerraform(this._thresholdCount),
            traffic_dial_percentage: cdktn.numberToTerraform(this._trafficDialPercentage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            endpoint_configurations: {
                value: cdktn.listMapperHcl(ccEndpointGroupEndpointConfigurationPropertyToHclTerraform, false)(this._endpointConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpointGroup.EndpointConfigurationPropertyList",
            },
            endpoint_group_region: {
                value: cdktn.stringToHclTerraform(this._endpointGroupRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check_interval_seconds: {
                value: cdktn.numberToHclTerraform(this._healthCheckIntervalSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            health_check_path: {
                value: cdktn.stringToHclTerraform(this._healthCheckPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check_port: {
                value: cdktn.numberToHclTerraform(this._healthCheckPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            health_check_protocol: {
                value: cdktn.stringToHclTerraform(this._healthCheckProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            listener_arn: {
                value: cdktn.stringToHclTerraform(this._listenerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port_overrides: {
                value: cdktn.listMapperHcl(ccEndpointGroupPortOverridePropertyToHclTerraform, false)(this._portOverrides.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpointGroup.PortOverridePropertyList",
            },
            threshold_count: {
                value: cdktn.numberToHclTerraform(this._thresholdCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            traffic_dial_percentage: {
                value: cdktn.numberToHclTerraform(this._trafficDialPercentage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointGroupEndpointConfigurationPropertyToTerraform(struct?: CcEndpointGroup.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachment_arn: cdktn.stringToTerraform(struct!.attachmentArn),
        client_ip_preservation_enabled: cdktn.booleanToTerraform(struct!.clientIpPreservationEnabled),
        endpoint_id: cdktn.stringToTerraform(struct!.endpointId),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccEndpointGroupEndpointConfigurationPropertyToHclTerraform(struct?: CcEndpointGroup.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attachment_arn: {
            value: cdktn.stringToHclTerraform(struct!.attachmentArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_ip_preservation_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.clientIpPreservationEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        endpoint_id: {
            value: cdktn.stringToHclTerraform(struct!.endpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointGroupPortOverridePropertyToTerraform(struct?: CcEndpointGroup.PortOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_port: cdktn.numberToTerraform(struct!.endpointPort),
        listener_port: cdktn.numberToTerraform(struct!.listenerPort),
    }
}


export function ccEndpointGroupPortOverridePropertyToHclTerraform(struct?: CcEndpointGroup.PortOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_port: {
            value: cdktn.numberToHclTerraform(struct!.endpointPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        listener_port: {
            value: cdktn.numberToHclTerraform(struct!.listenerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEndpointGroup {
export interface EndpointConfigurationProperty {
    /**
    * Attachment ARN that provides access control to the cross account endpoint. Not required for resources hosted in the same account as the endpoint group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#attachment_arn CcEndpointGroup#attachment_arn}
    */
    readonly attachmentArn?: string;
    /**
    * true if client ip should be preserved
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#client_ip_preservation_enabled CcEndpointGroup#client_ip_preservation_enabled}
    */
    readonly clientIpPreservationEnabled?: boolean | cdktn.IResolvable;
    /**
    * Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#endpoint_id CcEndpointGroup#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * The weight for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#weight CcEndpointGroup#weight}
    */
    readonly weight?: number;
}
export class EndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EndpointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachmentArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentArn = this._attachmentArn;
        }
        if (this._clientIpPreservationEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientIpPreservationEnabled = this._clientIpPreservationEnabled;
        }
        if (this._endpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointId = this._endpointId;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachmentArn = undefined;
            this._clientIpPreservationEnabled = undefined;
            this._endpointId = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachmentArn = value.attachmentArn;
            this._clientIpPreservationEnabled = value.clientIpPreservationEnabled;
            this._endpointId = value.endpointId;
            this._weight = value.weight;
        }
    }

    // attachment_arn - computed: true, optional: true, required: false
    private _attachmentArn?: string; 
    public get attachmentArn() {
        return this.getStringAttribute('attachment_arn');
    }
    public set attachmentArn(value: string) {
        this._attachmentArn = value;
    }
    public resetAttachmentArn() {
        this._attachmentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentArnInput() {
        return this._attachmentArn;
    }

    // client_ip_preservation_enabled - computed: true, optional: true, required: false
    private _clientIpPreservationEnabled?: boolean | cdktn.IResolvable; 
    public get clientIpPreservationEnabled() {
        return this.getBooleanAttribute('client_ip_preservation_enabled');
    }
    public set clientIpPreservationEnabled(value: boolean | cdktn.IResolvable) {
        this._clientIpPreservationEnabled = value;
    }
    public resetClientIpPreservationEnabled() {
        this._clientIpPreservationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIpPreservationEnabledInput() {
        return this._clientIpPreservationEnabled;
    }

    // endpoint_id - computed: true, optional: true, required: false
    private _endpointId?: string; 
    public get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }
    public set endpointId(value: string) {
        this._endpointId = value;
    }
    public resetEndpointId() {
        this._endpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIdInput() {
        return this._endpointId;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class EndpointConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : EndpointConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): EndpointConfigurationPropertyOutputReference {
        return new EndpointConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PortOverrideProperty {
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#endpoint_port CcEndpointGroup#endpoint_port}
    */
    readonly endpointPort?: number;
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_endpoint_group#listener_port CcEndpointGroup#listener_port}
    */
    readonly listenerPort?: number;
}
export class PortOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointPort = this._endpointPort;
        }
        if (this._listenerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.listenerPort = this._listenerPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointPort = undefined;
            this._listenerPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointPort = value.endpointPort;
            this._listenerPort = value.listenerPort;
        }
    }

    // endpoint_port - computed: true, optional: true, required: false
    private _endpointPort?: number; 
    public get endpointPort() {
        return this.getNumberAttribute('endpoint_port');
    }
    public set endpointPort(value: number) {
        this._endpointPort = value;
    }
    public resetEndpointPort() {
        this._endpointPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointPortInput() {
        return this._endpointPort;
    }

    // listener_port - computed: true, optional: true, required: false
    private _listenerPort?: number; 
    public get listenerPort() {
        return this.getNumberAttribute('listener_port');
    }
    public set listenerPort(value: number) {
        this._listenerPort = value;
    }
    public resetListenerPort() {
        this._listenerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerPortInput() {
        return this._listenerPort;
    }
}

export class PortOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : PortOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): PortOverridePropertyOutputReference {
        return new PortOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
