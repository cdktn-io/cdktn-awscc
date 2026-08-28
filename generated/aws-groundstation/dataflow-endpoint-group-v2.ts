// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataflowEndpointGroupV2Props extends cdktn.TerraformMetaArguments {
    /**
    * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_post_pass_duration_seconds CcDataflowEndpointGroupV2#contact_post_pass_duration_seconds}
    */
    readonly contactPostPassDurationSeconds?: number;
    /**
    * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_pre_pass_duration_seconds CcDataflowEndpointGroupV2#contact_pre_pass_duration_seconds}
    */
    readonly contactPrePassDurationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints CcDataflowEndpointGroupV2#endpoints}
    */
    readonly endpoints?: CcDataflowEndpointGroupV2.CreateEndpointDetailsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags CcDataflowEndpointGroupV2#tags}
    */
    readonly tags?: CcDataflowEndpointGroupV2.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2}
*/
export class CcDataflowEndpointGroupV2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_groundstation_dataflow_endpoint_group_v2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataflowEndpointGroupV2 to import
    * @param importFromId The id of the existing CcDataflowEndpointGroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataflowEndpointGroupV2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_dataflow_endpoint_group_v2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataflowEndpointGroupV2Props = {}
    */
    public constructor(scope: Construct, id: string, config: CcDataflowEndpointGroupV2Props = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group_v2',
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
        this._endpoints.internalValue = config.endpoints;
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

    // dataflow_endpoint_group_v2_id - computed: true, optional: false, required: false
    public get dataflowEndpointGroupV2Id() {
        return this.getStringAttribute('dataflow_endpoint_group_v2_id');
    }

    // endpoint_details - computed: true, optional: false, required: false
    private _endpointDetails = new CcDataflowEndpointGroupV2.EndpointDetailsPropertyList(this, "endpoint_details", false);
    public get endpointDetails() {
        return this._endpointDetails;
    }

    // endpoints - computed: true, optional: true, required: false
    private _endpoints = new CcDataflowEndpointGroupV2.CreateEndpointDetailsPropertyList(this, "endpoints", false);
    public get endpoints() {
        return this._endpoints;
    }
    public putEndpoints(value: CcDataflowEndpointGroupV2.CreateEndpointDetailsProperty[] | cdktn.IResolvable) {
        this._endpoints.internalValue = value;
    }
    public resetEndpoints() {
        this._endpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointsInput() {
        return this._endpoints.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataflowEndpointGroupV2.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataflowEndpointGroupV2.TagProperty[] | cdktn.IResolvable) {
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
            endpoints: cdktn.listMapper(ccDataflowEndpointGroupV2CreateEndpointDetailsPropertyToTerraform, false)(this._endpoints.internalValue),
            tags: cdktn.listMapper(ccDataflowEndpointGroupV2TagPropertyToTerraform, false)(this._tags.internalValue),
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
            endpoints: {
                value: cdktn.listMapperHcl(ccDataflowEndpointGroupV2CreateEndpointDetailsPropertyToHclTerraform, false)(this._endpoints.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataflowEndpointGroupV2.CreateEndpointDetailsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataflowEndpointGroupV2TagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataflowEndpointGroupV2.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EgressAddressAndPortPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EgressAddressAndPortProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EgressAddressAndPortPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EgressAddressAndPortProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsDownlinkAwsGroundStationAgentEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsUplinkAwsGroundStationAgentEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2EndpointDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataflowEndpointGroupV2EndpointDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataflowEndpointGroupV2IntegerRangePropertyToTerraform(struct?: CcDataflowEndpointGroupV2.IntegerRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum: cdktn.numberToTerraform(struct!.maximum),
        minimum: cdktn.numberToTerraform(struct!.minimum),
    }
}


export function ccDataflowEndpointGroupV2IntegerRangePropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.IntegerRangeProperty | cdktn.IResolvable): any {
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


export function ccDataflowEndpointGroupV2RangedSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.RangedSocketAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port_range: ccDataflowEndpointGroupV2IntegerRangePropertyToTerraform(struct!.portRange),
    }
}


export function ccDataflowEndpointGroupV2RangedSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.RangedSocketAddressProperty | cdktn.IResolvable): any {
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
            value: ccDataflowEndpointGroupV2IntegerRangePropertyToHclTerraform(struct!.portRange),
            isBlock: true,
            type: "struct",
            storageClassType: "IntegerRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2RangedConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.RangedConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtu: cdktn.numberToTerraform(struct!.mtu),
        socket_address: ccDataflowEndpointGroupV2RangedSocketAddressPropertyToTerraform(struct!.socketAddress),
    }
}


export function ccDataflowEndpointGroupV2RangedConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.RangedConnectionDetailsProperty | cdktn.IResolvable): any {
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
            value: ccDataflowEndpointGroupV2RangedSocketAddressPropertyToHclTerraform(struct!.socketAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "RangedSocketAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2SocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.SocketAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataflowEndpointGroupV2SocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.SocketAddressProperty | cdktn.IResolvable): any {
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


export function ccDataflowEndpointGroupV2ConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.ConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtu: cdktn.numberToTerraform(struct!.mtu),
        socket_address: ccDataflowEndpointGroupV2SocketAddressPropertyToTerraform(struct!.socketAddress),
    }
}


export function ccDataflowEndpointGroupV2ConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.ConnectionDetailsProperty | cdktn.IResolvable): any {
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
            value: ccDataflowEndpointGroupV2SocketAddressPropertyToHclTerraform(struct!.socketAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "SocketAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2DownlinkConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.DownlinkConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_ip_and_port_address: ccDataflowEndpointGroupV2RangedConnectionDetailsPropertyToTerraform(struct!.agentIpAndPortAddress),
        egress_address_and_port: ccDataflowEndpointGroupV2ConnectionDetailsPropertyToTerraform(struct!.egressAddressAndPort),
    }
}


export function ccDataflowEndpointGroupV2DownlinkConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.DownlinkConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_ip_and_port_address: {
            value: ccDataflowEndpointGroupV2RangedConnectionDetailsPropertyToHclTerraform(struct!.agentIpAndPortAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "RangedConnectionDetailsProperty",
        },
        egress_address_and_port: {
            value: ccDataflowEndpointGroupV2ConnectionDetailsPropertyToHclTerraform(struct!.egressAddressAndPort),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectionDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2DownlinkDataflowDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.DownlinkDataflowDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_connection_details: ccDataflowEndpointGroupV2DownlinkConnectionDetailsPropertyToTerraform(struct!.agentConnectionDetails),
    }
}


export function ccDataflowEndpointGroupV2DownlinkDataflowDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.DownlinkDataflowDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_connection_details: {
            value: ccDataflowEndpointGroupV2DownlinkConnectionDetailsPropertyToHclTerraform(struct!.agentConnectionDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "DownlinkConnectionDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2DownlinkAwsGroundStationAgentEndpointPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.DownlinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataflow_details: ccDataflowEndpointGroupV2DownlinkDataflowDetailsPropertyToTerraform(struct!.dataflowDetails),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDataflowEndpointGroupV2DownlinkAwsGroundStationAgentEndpointPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.DownlinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataflow_details: {
            value: ccDataflowEndpointGroupV2DownlinkDataflowDetailsPropertyToHclTerraform(struct!.dataflowDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "DownlinkDataflowDetailsProperty",
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


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum: cdktn.numberToTerraform(struct!.maximum),
        minimum: cdktn.numberToTerraform(struct!.minimum),
    }
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | cdktn.IResolvable): any {
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


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port_range: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToTerraform(struct!.portRange),
    }
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | cdktn.IResolvable): any {
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
            value: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyToHclTerraform(struct!.portRange),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtu: cdktn.numberToTerraform(struct!.mtu),
        socket_address: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToTerraform(struct!.socketAddress),
    }
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | cdktn.IResolvable): any {
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
            value: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyToHclTerraform(struct!.socketAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty | cdktn.IResolvable): any {
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


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtu: cdktn.numberToTerraform(struct!.mtu),
        socket_address: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyToTerraform(struct!.socketAddress),
    }
}


export function ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty | cdktn.IResolvable): any {
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
            value: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyToHclTerraform(struct!.socketAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2UplinkConnectionDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.UplinkConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_ip_and_port_address: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToTerraform(struct!.agentIpAndPortAddress),
        ingress_address_and_port: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyToTerraform(struct!.ingressAddressAndPort),
    }
}


export function ccDataflowEndpointGroupV2UplinkConnectionDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.UplinkConnectionDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_ip_and_port_address: {
            value: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyToHclTerraform(struct!.agentIpAndPortAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty",
        },
        ingress_address_and_port: {
            value: ccDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyToHclTerraform(struct!.ingressAddressAndPort),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2UplinkDataflowDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.UplinkDataflowDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_connection_details: ccDataflowEndpointGroupV2UplinkConnectionDetailsPropertyToTerraform(struct!.agentConnectionDetails),
    }
}


export function ccDataflowEndpointGroupV2UplinkDataflowDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.UplinkDataflowDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_connection_details: {
            value: ccDataflowEndpointGroupV2UplinkConnectionDetailsPropertyToHclTerraform(struct!.agentConnectionDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "UplinkConnectionDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2UplinkAwsGroundStationAgentEndpointPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.UplinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataflow_details: ccDataflowEndpointGroupV2UplinkDataflowDetailsPropertyToTerraform(struct!.dataflowDetails),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDataflowEndpointGroupV2UplinkAwsGroundStationAgentEndpointPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.UplinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataflow_details: {
            value: ccDataflowEndpointGroupV2UplinkDataflowDetailsPropertyToHclTerraform(struct!.dataflowDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "UplinkDataflowDetailsProperty",
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


export function ccDataflowEndpointGroupV2CreateEndpointDetailsPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.CreateEndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        downlink_aws_ground_station_agent_endpoint: ccDataflowEndpointGroupV2DownlinkAwsGroundStationAgentEndpointPropertyToTerraform(struct!.downlinkAwsGroundStationAgentEndpoint),
        uplink_aws_ground_station_agent_endpoint: ccDataflowEndpointGroupV2UplinkAwsGroundStationAgentEndpointPropertyToTerraform(struct!.uplinkAwsGroundStationAgentEndpoint),
    }
}


export function ccDataflowEndpointGroupV2CreateEndpointDetailsPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.CreateEndpointDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        downlink_aws_ground_station_agent_endpoint: {
            value: ccDataflowEndpointGroupV2DownlinkAwsGroundStationAgentEndpointPropertyToHclTerraform(struct!.downlinkAwsGroundStationAgentEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "DownlinkAwsGroundStationAgentEndpointProperty",
        },
        uplink_aws_ground_station_agent_endpoint: {
            value: ccDataflowEndpointGroupV2UplinkAwsGroundStationAgentEndpointPropertyToHclTerraform(struct!.uplinkAwsGroundStationAgentEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "UplinkAwsGroundStationAgentEndpointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataflowEndpointGroupV2TagPropertyToTerraform(struct?: CcDataflowEndpointGroupV2.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataflowEndpointGroupV2TagPropertyToHclTerraform(struct?: CcDataflowEndpointGroupV2.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataflowEndpointGroupV2 {
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // maximum - computed: true, optional: false, required: false
    public get maximum() {
        return this.getNumberAttribute('maximum');
    }

    // minimum - computed: true, optional: false, required: false
    public get minimum() {
        return this.getNumberAttribute('minimum');
    }
}
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }
}
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // mtu - computed: true, optional: false, required: false
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }

    // socket_address - computed: true, optional: false, required: false
    private _socketAddress = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
}
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }
}
export interface EgressAddressAndPortProperty {
}
export class EgressAddressAndPortPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EgressAddressAndPortProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EgressAddressAndPortProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // mtu - computed: true, optional: false, required: false
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }

    // socket_address - computed: true, optional: false, required: false
    private _socketAddress = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
}
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_ip_and_port_address - computed: true, optional: false, required: false
    private _agentIpAndPortAddress = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyOutputReference(this, "agent_ip_and_port_address");
    public get agentIpAndPortAddress() {
        return this._agentIpAndPortAddress;
    }

    // egress_address_and_port - computed: true, optional: false, required: false
    private _egressAddressAndPort = new EgressAddressAndPortPropertyOutputReference(this, "egress_address_and_port");
    public get egressAddressAndPort() {
        return this._egressAddressAndPort;
    }
}
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_connection_details - computed: true, optional: false, required: false
    private _agentConnectionDetails = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyOutputReference(this, "agent_connection_details");
    public get agentConnectionDetails() {
        return this._agentConnectionDetails;
    }
}
export interface EndpointDetailsDownlinkAwsGroundStationAgentEndpointProperty {
}
export class EndpointDetailsDownlinkAwsGroundStationAgentEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsDownlinkAwsGroundStationAgentEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsDownlinkAwsGroundStationAgentEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_status - computed: true, optional: false, required: false
    public get agentStatus() {
        return this.getStringAttribute('agent_status');
    }

    // audit_results - computed: true, optional: false, required: false
    public get auditResults() {
        return this.getStringAttribute('audit_results');
    }

    // dataflow_details - computed: true, optional: false, required: false
    private _dataflowDetails = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsPropertyOutputReference(this, "dataflow_details");
    public get dataflowDetails() {
        return this._dataflowDetails;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // maximum - computed: true, optional: false, required: false
    public get maximum() {
        return this.getNumberAttribute('maximum');
    }

    // minimum - computed: true, optional: false, required: false
    public get minimum() {
        return this.getNumberAttribute('minimum');
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // port_range - computed: true, optional: false, required: false
    private _portRange = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // mtu - computed: true, optional: false, required: false
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }

    // socket_address - computed: true, optional: false, required: false
    private _socketAddress = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // mtu - computed: true, optional: false, required: false
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }

    // socket_address - computed: true, optional: false, required: false
    private _socketAddress = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_ip_and_port_address - computed: true, optional: false, required: false
    private _agentIpAndPortAddress = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyOutputReference(this, "agent_ip_and_port_address");
    public get agentIpAndPortAddress() {
        return this._agentIpAndPortAddress;
    }

    // ingress_address_and_port - computed: true, optional: false, required: false
    private _ingressAddressAndPort = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyOutputReference(this, "ingress_address_and_port");
    public get ingressAddressAndPort() {
        return this._ingressAddressAndPort;
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_connection_details - computed: true, optional: false, required: false
    private _agentConnectionDetails = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsPropertyOutputReference(this, "agent_connection_details");
    public get agentConnectionDetails() {
        return this._agentConnectionDetails;
    }
}
export interface EndpointDetailsUplinkAwsGroundStationAgentEndpointProperty {
}
export class EndpointDetailsUplinkAwsGroundStationAgentEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointDetailsUplinkAwsGroundStationAgentEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsUplinkAwsGroundStationAgentEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_status - computed: true, optional: false, required: false
    public get agentStatus() {
        return this.getStringAttribute('agent_status');
    }

    // audit_results - computed: true, optional: false, required: false
    public get auditResults() {
        return this.getStringAttribute('audit_results');
    }

    // dataflow_details - computed: true, optional: false, required: false
    private _dataflowDetails = new EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsPropertyOutputReference(this, "dataflow_details");
    public get dataflowDetails() {
        return this._dataflowDetails;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface EndpointDetailsProperty {
}
export class EndpointDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EndpointDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // downlink_aws_ground_station_agent_endpoint - computed: true, optional: false, required: false
    private _downlinkAwsGroundStationAgentEndpoint = new EndpointDetailsDownlinkAwsGroundStationAgentEndpointPropertyOutputReference(this, "downlink_aws_ground_station_agent_endpoint");
    public get downlinkAwsGroundStationAgentEndpoint() {
        return this._downlinkAwsGroundStationAgentEndpoint;
    }

    // uplink_aws_ground_station_agent_endpoint - computed: true, optional: false, required: false
    private _uplinkAwsGroundStationAgentEndpoint = new EndpointDetailsUplinkAwsGroundStationAgentEndpointPropertyOutputReference(this, "uplink_aws_ground_station_agent_endpoint");
    public get uplinkAwsGroundStationAgentEndpoint() {
        return this._uplinkAwsGroundStationAgentEndpoint;
    }
}

export class EndpointDetailsPropertyList extends cdktn.ComplexList {

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
export interface IntegerRangeProperty {
    /**
    * A maximum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum CcDataflowEndpointGroupV2#maximum}
    */
    readonly maximum?: number;
    /**
    * A minimum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum CcDataflowEndpointGroupV2#minimum}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name CcDataflowEndpointGroupV2#name}
    */
    readonly name?: string;
    /**
    * Port range of a socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range CcDataflowEndpointGroupV2#port_range}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu CcDataflowEndpointGroupV2#mtu}
    */
    readonly mtu?: number;
    /**
    * A socket address with a port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address CcDataflowEndpointGroupV2#socket_address}
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
export interface SocketAddressProperty {
    /**
    * IPv4 socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name CcDataflowEndpointGroupV2#name}
    */
    readonly name?: string;
    /**
    * Port of a socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port CcDataflowEndpointGroupV2#port}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu CcDataflowEndpointGroupV2#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address CcDataflowEndpointGroupV2#socket_address}
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
export interface DownlinkConnectionDetailsProperty {
    /**
    * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address CcDataflowEndpointGroupV2#agent_ip_and_port_address}
    */
    readonly agentIpAndPortAddress?: RangedConnectionDetailsProperty;
    /**
    * Socket address of an uplink or downlink agent endpoint with an optional mtu.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#egress_address_and_port CcDataflowEndpointGroupV2#egress_address_and_port}
    */
    readonly egressAddressAndPort?: ConnectionDetailsProperty;
}
export class DownlinkConnectionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DownlinkConnectionDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentIpAndPortAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentIpAndPortAddress = this._agentIpAndPortAddress?.internalValue;
        }
        if (this._egressAddressAndPort?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressAddressAndPort = this._egressAddressAndPort?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DownlinkConnectionDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentIpAndPortAddress.internalValue = undefined;
            this._egressAddressAndPort.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentIpAndPortAddress.internalValue = value.agentIpAndPortAddress;
            this._egressAddressAndPort.internalValue = value.egressAddressAndPort;
        }
    }

    // agent_ip_and_port_address - computed: true, optional: true, required: false
    private _agentIpAndPortAddress = new RangedConnectionDetailsPropertyOutputReference(this, "agent_ip_and_port_address");
    public get agentIpAndPortAddress() {
        return this._agentIpAndPortAddress;
    }
    public putAgentIpAndPortAddress(value: RangedConnectionDetailsProperty) {
        this._agentIpAndPortAddress.internalValue = value;
    }
    public resetAgentIpAndPortAddress() {
        this._agentIpAndPortAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentIpAndPortAddressInput() {
        return this._agentIpAndPortAddress.internalValue;
    }

    // egress_address_and_port - computed: true, optional: true, required: false
    private _egressAddressAndPort = new ConnectionDetailsPropertyOutputReference(this, "egress_address_and_port");
    public get egressAddressAndPort() {
        return this._egressAddressAndPort;
    }
    public putEgressAddressAndPort(value: ConnectionDetailsProperty) {
        this._egressAddressAndPort.internalValue = value;
    }
    public resetEgressAddressAndPort() {
        this._egressAddressAndPort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressAddressAndPortInput() {
        return this._egressAddressAndPort.internalValue;
    }
}
export interface DownlinkDataflowDetailsProperty {
    /**
    * Connection details for downlink, from ground station to agent, and customer to agent
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details CcDataflowEndpointGroupV2#agent_connection_details}
    */
    readonly agentConnectionDetails?: DownlinkConnectionDetailsProperty;
}
export class DownlinkDataflowDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DownlinkDataflowDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentConnectionDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentConnectionDetails = this._agentConnectionDetails?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DownlinkDataflowDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentConnectionDetails.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentConnectionDetails.internalValue = value.agentConnectionDetails;
        }
    }

    // agent_connection_details - computed: true, optional: true, required: false
    private _agentConnectionDetails = new DownlinkConnectionDetailsPropertyOutputReference(this, "agent_connection_details");
    public get agentConnectionDetails() {
        return this._agentConnectionDetails;
    }
    public putAgentConnectionDetails(value: DownlinkConnectionDetailsProperty) {
        this._agentConnectionDetails.internalValue = value;
    }
    public resetAgentConnectionDetails() {
        this._agentConnectionDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentConnectionDetailsInput() {
        return this._agentConnectionDetails.internalValue;
    }
}
export interface DownlinkAwsGroundStationAgentEndpointProperty {
    /**
    * Dataflow details for downlink
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details CcDataflowEndpointGroupV2#dataflow_details}
    */
    readonly dataflowDetails?: DownlinkDataflowDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name CcDataflowEndpointGroupV2#name}
    */
    readonly name?: string;
}
export class DownlinkAwsGroundStationAgentEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DownlinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataflowDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataflowDetails = this._dataflowDetails?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DownlinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataflowDetails.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataflowDetails.internalValue = value.dataflowDetails;
            this._name = value.name;
        }
    }

    // dataflow_details - computed: true, optional: true, required: false
    private _dataflowDetails = new DownlinkDataflowDetailsPropertyOutputReference(this, "dataflow_details");
    public get dataflowDetails() {
        return this._dataflowDetails;
    }
    public putDataflowDetails(value: DownlinkDataflowDetailsProperty) {
        this._dataflowDetails.internalValue = value;
    }
    public resetDataflowDetails() {
        this._dataflowDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataflowDetailsInput() {
        return this._dataflowDetails.internalValue;
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
export interface EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty {
    /**
    * A maximum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum CcDataflowEndpointGroupV2#maximum}
    */
    readonly maximum?: number;
    /**
    * A minimum value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum CcDataflowEndpointGroupV2#minimum}
    */
    readonly minimum?: number;
}
export class EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty | cdktn.IResolvable | undefined) {
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
export interface EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty {
    /**
    * IPv4 socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name CcDataflowEndpointGroupV2#name}
    */
    readonly name?: string;
    /**
    * Port range of a socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range CcDataflowEndpointGroupV2#port_range}
    */
    readonly portRange?: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty;
}
export class EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty | cdktn.IResolvable | undefined) {
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
    private _portRange = new EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }
    public putPortRange(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeProperty) {
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
export interface EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty {
    /**
    * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu CcDataflowEndpointGroupV2#mtu}
    */
    readonly mtu?: number;
    /**
    * A socket address with a port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address CcDataflowEndpointGroupV2#socket_address}
    */
    readonly socketAddress?: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty;
}
export class EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty | cdktn.IResolvable | undefined) {
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
    private _socketAddress = new EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
    public putSocketAddress(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressProperty) {
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
export interface EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty {
    /**
    * IPv4 socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name CcDataflowEndpointGroupV2#name}
    */
    readonly name?: string;
    /**
    * Port of a socket address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port CcDataflowEndpointGroupV2#port}
    */
    readonly port?: number;
}
export class EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty | cdktn.IResolvable | undefined) {
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
export interface EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty {
    /**
    * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu CcDataflowEndpointGroupV2#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address CcDataflowEndpointGroupV2#socket_address}
    */
    readonly socketAddress?: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty;
}
export class EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty | cdktn.IResolvable | undefined) {
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
    private _socketAddress = new EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressPropertyOutputReference(this, "socket_address");
    public get socketAddress() {
        return this._socketAddress;
    }
    public putSocketAddress(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressProperty) {
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
export interface UplinkConnectionDetailsProperty {
    /**
    * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address CcDataflowEndpointGroupV2#agent_ip_and_port_address}
    */
    readonly agentIpAndPortAddress?: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty;
    /**
    * Socket address of an uplink or downlink agent endpoint with an optional mtu.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#ingress_address_and_port CcDataflowEndpointGroupV2#ingress_address_and_port}
    */
    readonly ingressAddressAndPort?: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty;
}
export class UplinkConnectionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UplinkConnectionDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentIpAndPortAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentIpAndPortAddress = this._agentIpAndPortAddress?.internalValue;
        }
        if (this._ingressAddressAndPort?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingressAddressAndPort = this._ingressAddressAndPort?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UplinkConnectionDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentIpAndPortAddress.internalValue = undefined;
            this._ingressAddressAndPort.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentIpAndPortAddress.internalValue = value.agentIpAndPortAddress;
            this._ingressAddressAndPort.internalValue = value.ingressAddressAndPort;
        }
    }

    // agent_ip_and_port_address - computed: true, optional: true, required: false
    private _agentIpAndPortAddress = new EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressPropertyOutputReference(this, "agent_ip_and_port_address");
    public get agentIpAndPortAddress() {
        return this._agentIpAndPortAddress;
    }
    public putAgentIpAndPortAddress(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressProperty) {
        this._agentIpAndPortAddress.internalValue = value;
    }
    public resetAgentIpAndPortAddress() {
        this._agentIpAndPortAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentIpAndPortAddressInput() {
        return this._agentIpAndPortAddress.internalValue;
    }

    // ingress_address_and_port - computed: true, optional: true, required: false
    private _ingressAddressAndPort = new EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortPropertyOutputReference(this, "ingress_address_and_port");
    public get ingressAddressAndPort() {
        return this._ingressAddressAndPort;
    }
    public putIngressAddressAndPort(value: EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortProperty) {
        this._ingressAddressAndPort.internalValue = value;
    }
    public resetIngressAddressAndPort() {
        this._ingressAddressAndPort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressAddressAndPortInput() {
        return this._ingressAddressAndPort.internalValue;
    }
}
export interface UplinkDataflowDetailsProperty {
    /**
    * Connection details for uplink, from ground station to agent, and customer to agent
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details CcDataflowEndpointGroupV2#agent_connection_details}
    */
    readonly agentConnectionDetails?: UplinkConnectionDetailsProperty;
}
export class UplinkDataflowDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UplinkDataflowDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentConnectionDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentConnectionDetails = this._agentConnectionDetails?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UplinkDataflowDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentConnectionDetails.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentConnectionDetails.internalValue = value.agentConnectionDetails;
        }
    }

    // agent_connection_details - computed: true, optional: true, required: false
    private _agentConnectionDetails = new UplinkConnectionDetailsPropertyOutputReference(this, "agent_connection_details");
    public get agentConnectionDetails() {
        return this._agentConnectionDetails;
    }
    public putAgentConnectionDetails(value: UplinkConnectionDetailsProperty) {
        this._agentConnectionDetails.internalValue = value;
    }
    public resetAgentConnectionDetails() {
        this._agentConnectionDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentConnectionDetailsInput() {
        return this._agentConnectionDetails.internalValue;
    }
}
export interface UplinkAwsGroundStationAgentEndpointProperty {
    /**
    * Dataflow details for uplink
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details CcDataflowEndpointGroupV2#dataflow_details}
    */
    readonly dataflowDetails?: UplinkDataflowDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name CcDataflowEndpointGroupV2#name}
    */
    readonly name?: string;
}
export class UplinkAwsGroundStationAgentEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UplinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataflowDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataflowDetails = this._dataflowDetails?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UplinkAwsGroundStationAgentEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataflowDetails.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataflowDetails.internalValue = value.dataflowDetails;
            this._name = value.name;
        }
    }

    // dataflow_details - computed: true, optional: true, required: false
    private _dataflowDetails = new UplinkDataflowDetailsPropertyOutputReference(this, "dataflow_details");
    public get dataflowDetails() {
        return this._dataflowDetails;
    }
    public putDataflowDetails(value: UplinkDataflowDetailsProperty) {
        this._dataflowDetails.internalValue = value;
    }
    public resetDataflowDetails() {
        this._dataflowDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataflowDetailsInput() {
        return this._dataflowDetails.internalValue;
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
export interface CreateEndpointDetailsProperty {
    /**
    * Information about DownlinkAwsGroundStationAgentEndpoint used for create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#downlink_aws_ground_station_agent_endpoint CcDataflowEndpointGroupV2#downlink_aws_ground_station_agent_endpoint}
    */
    readonly downlinkAwsGroundStationAgentEndpoint?: DownlinkAwsGroundStationAgentEndpointProperty;
    /**
    * Information about UplinkAwsGroundStationAgentEndpoint used for create
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#uplink_aws_ground_station_agent_endpoint CcDataflowEndpointGroupV2#uplink_aws_ground_station_agent_endpoint}
    */
    readonly uplinkAwsGroundStationAgentEndpoint?: UplinkAwsGroundStationAgentEndpointProperty;
}
export class CreateEndpointDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CreateEndpointDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._downlinkAwsGroundStationAgentEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.downlinkAwsGroundStationAgentEndpoint = this._downlinkAwsGroundStationAgentEndpoint?.internalValue;
        }
        if (this._uplinkAwsGroundStationAgentEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.uplinkAwsGroundStationAgentEndpoint = this._uplinkAwsGroundStationAgentEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateEndpointDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._downlinkAwsGroundStationAgentEndpoint.internalValue = undefined;
            this._uplinkAwsGroundStationAgentEndpoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._downlinkAwsGroundStationAgentEndpoint.internalValue = value.downlinkAwsGroundStationAgentEndpoint;
            this._uplinkAwsGroundStationAgentEndpoint.internalValue = value.uplinkAwsGroundStationAgentEndpoint;
        }
    }

    // downlink_aws_ground_station_agent_endpoint - computed: true, optional: true, required: false
    private _downlinkAwsGroundStationAgentEndpoint = new DownlinkAwsGroundStationAgentEndpointPropertyOutputReference(this, "downlink_aws_ground_station_agent_endpoint");
    public get downlinkAwsGroundStationAgentEndpoint() {
        return this._downlinkAwsGroundStationAgentEndpoint;
    }
    public putDownlinkAwsGroundStationAgentEndpoint(value: DownlinkAwsGroundStationAgentEndpointProperty) {
        this._downlinkAwsGroundStationAgentEndpoint.internalValue = value;
    }
    public resetDownlinkAwsGroundStationAgentEndpoint() {
        this._downlinkAwsGroundStationAgentEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get downlinkAwsGroundStationAgentEndpointInput() {
        return this._downlinkAwsGroundStationAgentEndpoint.internalValue;
    }

    // uplink_aws_ground_station_agent_endpoint - computed: true, optional: true, required: false
    private _uplinkAwsGroundStationAgentEndpoint = new UplinkAwsGroundStationAgentEndpointPropertyOutputReference(this, "uplink_aws_ground_station_agent_endpoint");
    public get uplinkAwsGroundStationAgentEndpoint() {
        return this._uplinkAwsGroundStationAgentEndpoint;
    }
    public putUplinkAwsGroundStationAgentEndpoint(value: UplinkAwsGroundStationAgentEndpointProperty) {
        this._uplinkAwsGroundStationAgentEndpoint.internalValue = value;
    }
    public resetUplinkAwsGroundStationAgentEndpoint() {
        this._uplinkAwsGroundStationAgentEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uplinkAwsGroundStationAgentEndpointInput() {
        return this._uplinkAwsGroundStationAgentEndpoint.internalValue;
    }
}

export class CreateEndpointDetailsPropertyList extends cdktn.ComplexList {
    public internalValue? : CreateEndpointDetailsProperty[] | cdktn.IResolvable

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
    public get(index: number): CreateEndpointDetailsPropertyOutputReference {
        return new CreateEndpointDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key CcDataflowEndpointGroupV2#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value CcDataflowEndpointGroupV2#value}
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
