// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataflowEndpointGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#contact_post_pass_duration_seconds CcDataflowEndpointGroup#contact_post_pass_duration_seconds}
    */
    readonly contactPostPassDurationSeconds?: number;
    /**
    * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#contact_pre_pass_duration_seconds CcDataflowEndpointGroup#contact_pre_pass_duration_seconds}
    */
    readonly contactPrePassDurationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details CcDataflowEndpointGroup#endpoint_details}
    */
    readonly endpointDetails: CcDataflowEndpointGroup.EndpointDetailsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#tags CcDataflowEndpointGroup#tags}
    */
    readonly tags?: CcDataflowEndpointGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}
*/
export class CcDataflowEndpointGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_groundstation_dataflow_endpoint_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataflowEndpointGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataflowEndpointGroup to import
    * @param importFromId The id of the existing CcDataflowEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataflowEndpointGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_dataflow_endpoint_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataflowEndpointGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcDataflowEndpointGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group',
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
        this._contactPostPassDurationSeconds = config.contactPostPassDurationSeconds;
        this._contactPrePassDurationSeconds = config.contactPrePassDurationSeconds;
        this._endpointDetails.internalValue = config.endpointDetails;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // contact_post_pass_duration_seconds - computed: true, optional: true, required: false
    private _contactPostPassDurationSeconds?: number; 
    public get contactPostPassDurationSeconds() {
        return this.getNumberAttribute('contact_post_pass_duration_seconds');
    }
    public set contactPostPassDurationSeconds(value: number) {
        this._contactPostPassDurationSeconds = value;
    }
    public resetContactPostPassDurationSeconds() {
        this._contactPostPassDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactPostPassDurationSecondsInput() {
        return this._contactPostPassDurationSeconds;
    }

    // contact_pre_pass_duration_seconds - computed: true, optional: true, required: false
    private _contactPrePassDurationSeconds?: number; 
    public get contactPrePassDurationSeconds() {
        return this.getNumberAttribute('contact_pre_pass_duration_seconds');
    }
    public set contactPrePassDurationSeconds(value: number) {
        this._contactPrePassDurationSeconds = value;
    }
    public resetContactPrePassDurationSeconds() {
        this._contactPrePassDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactPrePassDurationSecondsInput() {
        return this._contactPrePassDurationSeconds;
    }

    // dataflow_endpoint_group_id - computed: true, optional: false, required: false
    public get dataflowEndpointGroupId() {
        return this.getStringAttribute('dataflow_endpoint_group_id');
    }

    // endpoint_details - computed: false, optional: false, required: true
    private _endpointDetails = new CcDataflowEndpointGroup.EndpointDetailsPropertyList(this, "endpoint_details", false);
    public get endpointDetails() {
        return this._endpointDetails;
    }
    public putEndpointDetails(value: CcDataflowEndpointGroup.EndpointDetailsProperty[] | cdktn.IResolvable) {
        this._endpointDetails.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointDetailsInput() {
        return this._endpointDetails.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataflowEndpointGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataflowEndpointGroup.TagProperty[] | cdktn.IResolvable) {
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
            contact_post_pass_duration_seconds: cdktn.numberToTerraform(this._contactPostPassDurationSeconds),
            contact_pre_pass_duration_seconds: cdktn.numberToTerraform(this._contactPrePassDurationSeconds),
            endpoint_details: cdktn.listMapper(ccDataflowEndpointGroupEndpointDetailsPropertyToTerraform, false)(this._endpointDetails.internalValue),
            tags: cdktn.listMapper(ccDataflowEndpointGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_post_pass_duration_seconds: {
                value: cdktn.numberToHclTerraform(this._contactPostPassDurationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            contact_pre_pass_duration_seconds: {
                value: cdktn.numberToHclTerraform(this._contactPrePassDurationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            endpoint_details: {
                value: cdktn.listMapperHcl(ccDataflowEndpointGroupEndpointDetailsPropertyToHclTerraform, false)(this._endpointDetails.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataflowEndpointGroup.EndpointDetailsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataflowEndpointGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataflowEndpointGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataflowEndpointGroupSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroup.SocketAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataflowEndpointGroupSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.SocketAddressProperty | cdktn.IResolvable): any {
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


export function ccDataflowEndpointGroupConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroup.ConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtu: cdktn.numberToTerraform(struct!.mtu),
        socket_address: ccDataflowEndpointGroupSocketAddressPropertyToTerraform(struct!.socketAddress),
    }
}


export function ccDataflowEndpointGroupConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.ConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mtu: {
            value: cdktn.numberToHclTerraform(struct!.mtu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        socket_address: {
            value: ccDataflowEndpointGroupSocketAddressPropertyToHclTerraform(struct!.socketAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "SocketAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupIntegerRangePropertyToTerraform(struct?: CcDataflowEndpointGroup.IntegerRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum: cdktn.numberToTerraform(struct!.maximum),
        minimum: cdktn.numberToTerraform(struct!.minimum),
    }
}


export function ccDataflowEndpointGroupIntegerRangePropertyToHclTerraform(struct?: CcDataflowEndpointGroup.IntegerRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum: {
            value: cdktn.numberToHclTerraform(struct!.maximum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum: {
            value: cdktn.numberToHclTerraform(struct!.minimum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupRangedSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroup.RangedSocketAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port_range: ccDataflowEndpointGroupIntegerRangePropertyToTerraform(struct!.portRange),
    }
}


export function ccDataflowEndpointGroupRangedSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.RangedSocketAddressProperty | cdktn.IResolvable): any {
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
        port_range: {
            value: ccDataflowEndpointGroupIntegerRangePropertyToHclTerraform(struct!.portRange),
            isBlock: true,
            type: "struct",
            storageClassType: "IntegerRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupRangedConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroup.RangedConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtu: cdktn.numberToTerraform(struct!.mtu),
        socket_address: ccDataflowEndpointGroupRangedSocketAddressPropertyToTerraform(struct!.socketAddress),
    }
}


export function ccDataflowEndpointGroupRangedConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.RangedConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mtu: {
            value: cdktn.numberToHclTerraform(struct!.mtu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        socket_address: {
            value: ccDataflowEndpointGroupRangedSocketAddressPropertyToHclTerraform(struct!.socketAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "RangedSocketAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupAwsGroundStationAgentEndpointPropertyToTerraform(struct?: CcDataflowEndpointGroup.AwsGroundStationAgentEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_status: cdktn.stringToTerraform(struct!.agentStatus),
        audit_results: cdktn.stringToTerraform(struct!.auditResults),
        egress_address: ccDataflowEndpointGroupConnectionDetailsPropertyToTerraform(struct!.egressAddress),
        ingress_address: ccDataflowEndpointGroupRangedConnectionDetailsPropertyToTerraform(struct!.ingressAddress),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDataflowEndpointGroupAwsGroundStationAgentEndpointPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.AwsGroundStationAgentEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_status: {
            value: cdktn.stringToHclTerraform(struct!.agentStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        audit_results: {
            value: cdktn.stringToHclTerraform(struct!.auditResults),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        egress_address: {
            value: ccDataflowEndpointGroupConnectionDetailsPropertyToHclTerraform(struct!.egressAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectionDetailsProperty",
        },
        ingress_address: {
            value: ccDataflowEndpointGroupRangedConnectionDetailsPropertyToHclTerraform(struct!.ingressAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "RangedConnectionDetailsProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupAddressPropertyToTerraform(struct?: CcDataflowEndpointGroup.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataflowEndpointGroupAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.AddressProperty | cdktn.IResolvable): any {
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


export function ccDataflowEndpointGroupDataflowEndpointPropertyToTerraform(struct?: CcDataflowEndpointGroup.DataflowEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address: ccDataflowEndpointGroupAddressPropertyToTerraform(struct!.address),
        mtu: cdktn.numberToTerraform(struct!.mtu),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDataflowEndpointGroupDataflowEndpointPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.DataflowEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address: {
            value: ccDataflowEndpointGroupAddressPropertyToHclTerraform(struct!.address),
            isBlock: true,
            type: "struct",
            storageClassType: "AddressProperty",
        },
        mtu: {
            value: cdktn.numberToHclTerraform(struct!.mtu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupSecurityDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroup.SecurityDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccDataflowEndpointGroupSecurityDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.SecurityDetailsProperty | cdktn.IResolvable): any {
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
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupEndpointDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroup.EndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_ground_station_agent_endpoint: ccDataflowEndpointGroupAwsGroundStationAgentEndpointPropertyToTerraform(struct!.awsGroundStationAgentEndpoint),
        endpoint: ccDataflowEndpointGroupDataflowEndpointPropertyToTerraform(struct!.endpoint),
        security_details: ccDataflowEndpointGroupSecurityDetailsPropertyToTerraform(struct!.securityDetails),
    }
}


export function ccDataflowEndpointGroupEndpointDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.EndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_ground_station_agent_endpoint: {
            value: ccDataflowEndpointGroupAwsGroundStationAgentEndpointPropertyToHclTerraform(struct!.awsGroundStationAgentEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsGroundStationAgentEndpointProperty",
        },
        endpoint: {
            value: ccDataflowEndpointGroupDataflowEndpointPropertyToHclTerraform(struct!.endpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "DataflowEndpointProperty",
        },
        security_details: {
            value: ccDataflowEndpointGroupSecurityDetailsPropertyToHclTerraform(struct!.securityDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "SecurityDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupTagPropertyToTerraform(struct?: CcDataflowEndpointGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataflowEndpointGroupTagPropertyToHclTerraform(struct?: CcDataflowEndpointGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataflowEndpointGroup {
export interface SocketAddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name CcDataflowEndpointGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port CcDataflowEndpointGroup#port}
    */
    readonly port?: number;
}
export class SocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SocketAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SocketAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._port = value.port;
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
export interface ConnectionDetailsProperty {
    /**
    * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu CcDataflowEndpointGroup#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address CcDataflowEndpointGroup#socket_address}
    */
    readonly socketAddress?: SocketAddressProperty;
}
export class ConnectionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mtu !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtu = this._mtu;
        }
        if (this._socketAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.socketAddress = this._socketAddress?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mtu = undefined;
            this._socketAddress.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mtu = value.mtu;
            this._socketAddress.internalValue = value.socketAddress;
        }
    }

    // mtu - computed: true, optional: true, required: false
    private _mtu?: number; 
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number) {
        this._mtu = value;
    }
    public resetMtu() {
        this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
        return this._mtu;
    }

    // socket_address - computed: true, optional: true, required: false
    private _socketAddress = new SocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
    public putSocketAddress(value: SocketAddressProperty) {
        this._socketAddress.internalValue = value;
    }
    public resetSocketAddress() {
        this._socketAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get socketAddressInput() {
        return this._socketAddress.internalValue;
    }
}
export interface IntegerRangeProperty {
    /**
    * A maximum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#maximum CcDataflowEndpointGroup#maximum}
    */
    readonly maximum?: number;
    /**
    * A minimum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#minimum CcDataflowEndpointGroup#minimum}
    */
    readonly minimum?: number;
}
export class IntegerRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntegerRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximum !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximum = this._maximum;
        }
        if (this._minimum !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimum = this._minimum;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegerRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximum = undefined;
            this._minimum = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximum = value.maximum;
            this._minimum = value.minimum;
        }
    }

    // maximum - computed: true, optional: true, required: false
    private _maximum?: number; 
    public get maximum() {
        return this.getNumberAttribute('maximum');
    }
    public set maximum(value: number) {
        this._maximum = value;
    }
    public resetMaximum() {
        this._maximum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumInput() {
        return this._maximum;
    }

    // minimum - computed: true, optional: true, required: false
    private _minimum?: number; 
    public get minimum() {
        return this.getNumberAttribute('minimum');
    }
    public set minimum(value: number) {
        this._minimum = value;
    }
    public resetMinimum() {
        this._minimum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumInput() {
        return this._minimum;
    }
}
export interface RangedSocketAddressProperty {
    /**
    * IPv4 socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name CcDataflowEndpointGroup#name}
    */
    readonly name?: string;
    /**
    * Port range of a socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port_range CcDataflowEndpointGroup#port_range}
    */
    readonly portRange?: IntegerRangeProperty;
}
export class RangedSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RangedSocketAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._portRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRange = this._portRange?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RangedSocketAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._portRange.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._portRange.internalValue = value.portRange;
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

    // port_range - computed: true, optional: true, required: false
    private _portRange = new IntegerRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }
    public putPortRange(value: IntegerRangeProperty) {
        this._portRange.internalValue = value;
    }
    public resetPortRange() {
        this._portRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangeInput() {
        return this._portRange.internalValue;
    }
}
export interface RangedConnectionDetailsProperty {
    /**
    * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu CcDataflowEndpointGroup#mtu}
    */
    readonly mtu?: number;
    /**
    * A socket address with a port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address CcDataflowEndpointGroup#socket_address}
    */
    readonly socketAddress?: RangedSocketAddressProperty;
}
export class RangedConnectionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RangedConnectionDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mtu !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtu = this._mtu;
        }
        if (this._socketAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.socketAddress = this._socketAddress?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RangedConnectionDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mtu = undefined;
            this._socketAddress.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mtu = value.mtu;
            this._socketAddress.internalValue = value.socketAddress;
        }
    }

    // mtu - computed: true, optional: true, required: false
    private _mtu?: number; 
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number) {
        this._mtu = value;
    }
    public resetMtu() {
        this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
        return this._mtu;
    }

    // socket_address - computed: true, optional: true, required: false
    private _socketAddress = new RangedSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
    public putSocketAddress(value: RangedSocketAddressProperty) {
        this._socketAddress.internalValue = value;
    }
    public resetSocketAddress() {
        this._socketAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get socketAddressInput() {
        return this._socketAddress.internalValue;
    }
}
export interface AwsGroundStationAgentEndpointProperty {
    /**
    * The status of AgentEndpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#agent_status CcDataflowEndpointGroup#agent_status}
    */
    readonly agentStatus?: string;
    /**
    * The results of the audit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#audit_results CcDataflowEndpointGroup#audit_results}
    */
    readonly auditResults?: string;
    /**
    * Egress address of AgentEndpoint with an optional mtu.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#egress_address CcDataflowEndpointGroup#egress_address}
    */
    readonly egressAddress?: ConnectionDetailsProperty;
    /**
    * Ingress address of AgentEndpoint with a port range and an optional mtu.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#ingress_address CcDataflowEndpointGroup#ingress_address}
    */
    readonly ingressAddress?: RangedConnectionDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name CcDataflowEndpointGroup#name}
    */
    readonly name?: string;
}
export class AwsGroundStationAgentEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsGroundStationAgentEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentStatus = this._agentStatus;
        }
        if (this._auditResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.auditResults = this._auditResults;
        }
        if (this._egressAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressAddress = this._egressAddress?.internalValue;
        }
        if (this._ingressAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingressAddress = this._ingressAddress?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsGroundStationAgentEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentStatus = undefined;
            this._auditResults = undefined;
            this._egressAddress.internalValue = undefined;
            this._ingressAddress.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentStatus = value.agentStatus;
            this._auditResults = value.auditResults;
            this._egressAddress.internalValue = value.egressAddress;
            this._ingressAddress.internalValue = value.ingressAddress;
            this._name = value.name;
        }
    }

    // agent_status - computed: true, optional: true, required: false
    private _agentStatus?: string; 
    public get agentStatus() {
        return this.getStringAttribute('agent_status');
    }
    public set agentStatus(value: string) {
        this._agentStatus = value;
    }
    public resetAgentStatus() {
        this._agentStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentStatusInput() {
        return this._agentStatus;
    }

    // audit_results - computed: true, optional: true, required: false
    private _auditResults?: string; 
    public get auditResults() {
        return this.getStringAttribute('audit_results');
    }
    public set auditResults(value: string) {
        this._auditResults = value;
    }
    public resetAuditResults() {
        this._auditResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditResultsInput() {
        return this._auditResults;
    }

    // egress_address - computed: true, optional: true, required: false
    private _egressAddress = new ConnectionDetailsPropertyOutputReference(this, "egress_address");
    public get egressAddress() {
        return this._egressAddress;
    }
    public putEgressAddress(value: ConnectionDetailsProperty) {
        this._egressAddress.internalValue = value;
    }
    public resetEgressAddress() {
        this._egressAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressAddressInput() {
        return this._egressAddress.internalValue;
    }

    // ingress_address - computed: true, optional: true, required: false
    private _ingressAddress = new RangedConnectionDetailsPropertyOutputReference(this, "ingress_address");
    public get ingressAddress() {
        return this._ingressAddress;
    }
    public putIngressAddress(value: RangedConnectionDetailsProperty) {
        this._ingressAddress.internalValue = value;
    }
    public resetIngressAddress() {
        this._ingressAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressAddressInput() {
        return this._ingressAddress.internalValue;
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
}
export interface AddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name CcDataflowEndpointGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port CcDataflowEndpointGroup#port}
    */
    readonly port?: number;
}
export class AddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._port = value.port;
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
export interface DataflowEndpointProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#address CcDataflowEndpointGroup#address}
    */
    readonly address?: AddressProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu CcDataflowEndpointGroup#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name CcDataflowEndpointGroup#name}
    */
    readonly name?: string;
}
export class DataflowEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataflowEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._address?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address?.internalValue;
        }
        if (this._mtu !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtu = this._mtu;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataflowEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address.internalValue = undefined;
            this._mtu = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address.internalValue = value.address;
            this._mtu = value.mtu;
            this._name = value.name;
        }
    }

    // address - computed: true, optional: true, required: false
    private _address = new AddressPropertyOutputReference(this, "address");
    public get address() {
        return this._address;
    }
    public putAddress(value: AddressProperty) {
        this._address.internalValue = value;
    }
    public resetAddress() {
        this._address.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address.internalValue;
    }

    // mtu - computed: true, optional: true, required: false
    private _mtu?: number; 
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number) {
        this._mtu = value;
    }
    public resetMtu() {
        this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
        return this._mtu;
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
}
export interface SecurityDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn CcDataflowEndpointGroup#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids CcDataflowEndpointGroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids CcDataflowEndpointGroup#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class SecurityDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
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

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface EndpointDetailsProperty {
    /**
    * Information about AwsGroundStationAgentEndpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#aws_ground_station_agent_endpoint CcDataflowEndpointGroup#aws_ground_station_agent_endpoint}
    */
    readonly awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpointProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint CcDataflowEndpointGroup#endpoint}
    */
    readonly endpoint?: DataflowEndpointProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#security_details CcDataflowEndpointGroup#security_details}
    */
    readonly securityDetails?: SecurityDetailsProperty;
}
export class EndpointDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EndpointDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsGroundStationAgentEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsGroundStationAgentEndpoint = this._awsGroundStationAgentEndpoint?.internalValue;
        }
        if (this._endpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint?.internalValue;
        }
        if (this._securityDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityDetails = this._securityDetails?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsGroundStationAgentEndpoint.internalValue = undefined;
            this._endpoint.internalValue = undefined;
            this._securityDetails.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsGroundStationAgentEndpoint.internalValue = value.awsGroundStationAgentEndpoint;
            this._endpoint.internalValue = value.endpoint;
            this._securityDetails.internalValue = value.securityDetails;
        }
    }

    // aws_ground_station_agent_endpoint - computed: true, optional: true, required: false
    private _awsGroundStationAgentEndpoint = new AwsGroundStationAgentEndpointPropertyOutputReference(this, "aws_ground_station_agent_endpoint");
    public get awsGroundStationAgentEndpoint() {
        return this._awsGroundStationAgentEndpoint;
    }
    public putAwsGroundStationAgentEndpoint(value: AwsGroundStationAgentEndpointProperty) {
        this._awsGroundStationAgentEndpoint.internalValue = value;
    }
    public resetAwsGroundStationAgentEndpoint() {
        this._awsGroundStationAgentEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsGroundStationAgentEndpointInput() {
        return this._awsGroundStationAgentEndpoint.internalValue;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint = new DataflowEndpointPropertyOutputReference(this, "endpoint");
    public get endpoint() {
        return this._endpoint;
    }
    public putEndpoint(value: DataflowEndpointProperty) {
        this._endpoint.internalValue = value;
    }
    public resetEndpoint() {
        this._endpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint.internalValue;
    }

    // security_details - computed: true, optional: true, required: false
    private _securityDetails = new SecurityDetailsPropertyOutputReference(this, "security_details");
    public get securityDetails() {
        return this._securityDetails;
    }
    public putSecurityDetails(value: SecurityDetailsProperty) {
        this._securityDetails.internalValue = value;
    }
    public resetSecurityDetails() {
        this._securityDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityDetailsInput() {
        return this._securityDetails.internalValue;
    }
}

export class EndpointDetailsPropertyList extends cdktn.ComplexList {
    public internalValue? : EndpointDetailsProperty[] | cdktn.IResolvable

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
    public get(index: number): EndpointDetailsPropertyOutputReference {
        return new EndpointDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#key CcDataflowEndpointGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#value CcDataflowEndpointGroup#value}
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
