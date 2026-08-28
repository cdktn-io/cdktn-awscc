// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#description CcEndpoint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#event_buses CcEndpoint#event_buses}
    */
    readonly eventBuses: CcEndpoint.EndpointEventBusProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#name CcEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#replication_config CcEndpoint#replication_config}
    */
    readonly replicationConfig?: CcEndpoint.ReplicationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#role_arn CcEndpoint#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#routing_config CcEndpoint#routing_config}
    */
    readonly routingConfig: CcEndpoint.RoutingConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint awscc_events_endpoint}
*/
export class CcEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_events_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpoint to import
    * @param importFromId The id of the existing CcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint awscc_events_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_events_endpoint',
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
        this._description = config.description;
        this._eventBuses.internalValue = config.eventBuses;
        this._name = config.name;
        this._replicationConfig.internalValue = config.replicationConfig;
        this._roleArn = config.roleArn;
        this._routingConfig.internalValue = config.routingConfig;
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

    // endpoint_id - computed: true, optional: false, required: false
    public get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }

    // endpoint_url - computed: true, optional: false, required: false
    public get endpointUrl() {
        return this.getStringAttribute('endpoint_url');
    }

    // event_buses - computed: false, optional: false, required: true
    private _eventBuses = new CcEndpoint.EndpointEventBusPropertyList(this, "event_buses", false);
    public get eventBuses() {
        return this._eventBuses;
    }
    public putEventBuses(value: CcEndpoint.EndpointEventBusProperty[] | cdktn.IResolvable) {
        this._eventBuses.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusesInput() {
        return this._eventBuses.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // replication_config - computed: true, optional: true, required: false
    private _replicationConfig = new CcEndpoint.ReplicationConfigPropertyOutputReference(this, "replication_config");
    public get replicationConfig() {
        return this._replicationConfig;
    }
    public putReplicationConfig(value: CcEndpoint.ReplicationConfigProperty) {
        this._replicationConfig.internalValue = value;
    }
    public resetReplicationConfig() {
        this._replicationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigInput() {
        return this._replicationConfig.internalValue;
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

    // routing_config - computed: false, optional: false, required: true
    private _routingConfig = new CcEndpoint.RoutingConfigPropertyOutputReference(this, "routing_config");
    public get routingConfig() {
        return this._routingConfig;
    }
    public putRoutingConfig(value: CcEndpoint.RoutingConfigProperty) {
        this._routingConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigInput() {
        return this._routingConfig.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            event_buses: cdktn.listMapper(ccEndpointEndpointEventBusPropertyToTerraform, false)(this._eventBuses.internalValue),
            name: cdktn.stringToTerraform(this._name),
            replication_config: ccEndpointReplicationConfigPropertyToTerraform(this._replicationConfig.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            routing_config: ccEndpointRoutingConfigPropertyToTerraform(this._routingConfig.internalValue),
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
            event_buses: {
                value: cdktn.listMapperHcl(ccEndpointEndpointEventBusPropertyToHclTerraform, false)(this._eventBuses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpoint.EndpointEventBusPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_config: {
                value: ccEndpointReplicationConfigPropertyToHclTerraform(this._replicationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.ReplicationConfigProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing_config: {
                value: ccEndpointRoutingConfigPropertyToHclTerraform(this._routingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.RoutingConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointEndpointEventBusPropertyToTerraform(struct?: CcEndpoint.EndpointEventBusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
    }
}


export function ccEndpointEndpointEventBusPropertyToHclTerraform(struct?: CcEndpoint.EndpointEventBusProperty | cdktn.IResolvable): any {
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


export function ccEndpointReplicationConfigPropertyToTerraform(struct?: CcEndpoint.ReplicationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccEndpointReplicationConfigPropertyToHclTerraform(struct?: CcEndpoint.ReplicationConfigProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointPrimaryPropertyToTerraform(struct?: CcEndpoint.PrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        health_check: cdktn.stringToTerraform(struct!.healthCheck),
    }
}


export function ccEndpointPrimaryPropertyToHclTerraform(struct?: CcEndpoint.PrimaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        health_check: {
            value: cdktn.stringToHclTerraform(struct!.healthCheck),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointSecondaryPropertyToTerraform(struct?: CcEndpoint.SecondaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        route: cdktn.stringToTerraform(struct!.route),
    }
}


export function ccEndpointSecondaryPropertyToHclTerraform(struct?: CcEndpoint.SecondaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        route: {
            value: cdktn.stringToHclTerraform(struct!.route),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointFailoverConfigPropertyToTerraform(struct?: CcEndpoint.FailoverConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: ccEndpointPrimaryPropertyToTerraform(struct!.primary),
        secondary: ccEndpointSecondaryPropertyToTerraform(struct!.secondary),
    }
}


export function ccEndpointFailoverConfigPropertyToHclTerraform(struct?: CcEndpoint.FailoverConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary: {
            value: ccEndpointPrimaryPropertyToHclTerraform(struct!.primary),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryProperty",
        },
        secondary: {
            value: ccEndpointSecondaryPropertyToHclTerraform(struct!.secondary),
            isBlock: true,
            type: "struct",
            storageClassType: "SecondaryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointRoutingConfigPropertyToTerraform(struct?: CcEndpoint.RoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failover_config: ccEndpointFailoverConfigPropertyToTerraform(struct!.failoverConfig),
    }
}


export function ccEndpointRoutingConfigPropertyToHclTerraform(struct?: CcEndpoint.RoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failover_config: {
            value: ccEndpointFailoverConfigPropertyToHclTerraform(struct!.failoverConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FailoverConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEndpoint {
export interface EndpointEventBusProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#event_bus_arn CcEndpoint#event_bus_arn}
    */
    readonly eventBusArn: string;
}
export class EndpointEventBusPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EndpointEventBusProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndpointEventBusProperty | cdktn.IResolvable | undefined) {
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
}

export class EndpointEventBusPropertyList extends cdktn.ComplexList {
    public internalValue? : EndpointEventBusProperty[] | cdktn.IResolvable

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
    public get(index: number): EndpointEventBusPropertyOutputReference {
        return new EndpointEventBusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#state CcEndpoint#state}
    */
    readonly state?: string;
}
export class ReplicationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
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
}
export interface PrimaryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#health_check CcEndpoint#health_check}
    */
    readonly healthCheck: string;
}
export class PrimaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthCheck !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthCheck = this._healthCheck;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthCheck = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthCheck = value.healthCheck;
        }
    }

    // health_check - computed: false, optional: false, required: true
    private _healthCheck?: string; 
    public get healthCheck() {
        return this.getStringAttribute('health_check');
    }
    public set healthCheck(value: string) {
        this._healthCheck = value;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
        return this._healthCheck;
    }
}
export interface SecondaryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#route CcEndpoint#route}
    */
    readonly route: string;
}
export class SecondaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecondaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._route !== undefined) {
            hasAnyValues = true;
            internalValueResult.route = this._route;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecondaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._route = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._route = value.route;
        }
    }

    // route - computed: false, optional: false, required: true
    private _route?: string; 
    public get route() {
        return this.getStringAttribute('route');
    }
    public set route(value: string) {
        this._route = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeInput() {
        return this._route;
    }
}
export interface FailoverConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#primary CcEndpoint#primary}
    */
    readonly primary: PrimaryProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#secondary CcEndpoint#secondary}
    */
    readonly secondary: SecondaryProperty;
}
export class FailoverConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FailoverConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary?.internalValue;
        }
        if (this._secondary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondary = this._secondary?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailoverConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primary.internalValue = undefined;
            this._secondary.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primary.internalValue = value.primary;
            this._secondary.internalValue = value.secondary;
        }
    }

    // primary - computed: false, optional: false, required: true
    private _primary = new PrimaryPropertyOutputReference(this, "primary");
    public get primary() {
        return this._primary;
    }
    public putPrimary(value: PrimaryProperty) {
        this._primary.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary.internalValue;
    }

    // secondary - computed: false, optional: false, required: true
    private _secondary = new SecondaryPropertyOutputReference(this, "secondary");
    public get secondary() {
        return this._secondary;
    }
    public putSecondary(value: SecondaryProperty) {
        this._secondary.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryInput() {
        return this._secondary.internalValue;
    }
}
export interface RoutingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_endpoint#failover_config CcEndpoint#failover_config}
    */
    readonly failoverConfig: FailoverConfigProperty;
}
export class RoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failoverConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.failoverConfig = this._failoverConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failoverConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failoverConfig.internalValue = value.failoverConfig;
        }
    }

    // failover_config - computed: false, optional: false, required: true
    private _failoverConfig = new FailoverConfigPropertyOutputReference(this, "failover_config");
    public get failoverConfig() {
        return this._failoverConfig;
    }
    public putFailoverConfig(value: FailoverConfigProperty) {
        this._failoverConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get failoverConfigInput() {
        return this._failoverConfig.internalValue;
    }
}
}
