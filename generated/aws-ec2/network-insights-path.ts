// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkInsightsPathProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination CcNetworkInsightsPath#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination_ip CcNetworkInsightsPath#destination_ip}
    */
    readonly destinationIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination_port CcNetworkInsightsPath#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#filter_at_destination CcNetworkInsightsPath#filter_at_destination}
    */
    readonly filterAtDestination?: CcNetworkInsightsPath.PathFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#filter_at_source CcNetworkInsightsPath#filter_at_source}
    */
    readonly filterAtSource?: CcNetworkInsightsPath.FilterAtSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#protocol CcNetworkInsightsPath#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#source CcNetworkInsightsPath#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#source_ip CcNetworkInsightsPath#source_ip}
    */
    readonly sourceIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#tags CcNetworkInsightsPath#tags}
    */
    readonly tags?: CcNetworkInsightsPath.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path awscc_ec2_network_insights_path}
*/
export class CcNetworkInsightsPath extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_network_insights_path";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkInsightsPath resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkInsightsPath to import
    * @param importFromId The id of the existing CcNetworkInsightsPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkInsightsPath to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_path", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path awscc_ec2_network_insights_path} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkInsightsPathProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkInsightsPathProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_network_insights_path',
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
        this._destination = config.destination;
        this._destinationIp = config.destinationIp;
        this._destinationPort = config.destinationPort;
        this._filterAtDestination.internalValue = config.filterAtDestination;
        this._filterAtSource.internalValue = config.filterAtSource;
        this._protocol = config.protocol;
        this._source = config.source;
        this._sourceIp = config.sourceIp;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
        return this.getStringAttribute('created_date');
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // destination_arn - computed: true, optional: false, required: false
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }

    // destination_ip - computed: true, optional: true, required: false
    private _destinationIp?: string; 
    public get destinationIp() {
        return this.getStringAttribute('destination_ip');
    }
    public set destinationIp(value: string) {
        this._destinationIp = value;
    }
    public resetDestinationIp() {
        this._destinationIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIpInput() {
        return this._destinationIp;
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

    // filter_at_destination - computed: true, optional: true, required: false
    private _filterAtDestination = new CcNetworkInsightsPath.PathFilterPropertyOutputReference(this, "filter_at_destination");
    public get filterAtDestination() {
        return this._filterAtDestination;
    }
    public putFilterAtDestination(value: CcNetworkInsightsPath.PathFilterProperty) {
        this._filterAtDestination.internalValue = value;
    }
    public resetFilterAtDestination() {
        this._filterAtDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterAtDestinationInput() {
        return this._filterAtDestination.internalValue;
    }

    // filter_at_source - computed: true, optional: true, required: false
    private _filterAtSource = new CcNetworkInsightsPath.FilterAtSourcePropertyOutputReference(this, "filter_at_source");
    public get filterAtSource() {
        return this._filterAtSource;
    }
    public putFilterAtSource(value: CcNetworkInsightsPath.FilterAtSourceProperty) {
        this._filterAtSource.internalValue = value;
    }
    public resetFilterAtSource() {
        this._filterAtSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterAtSourceInput() {
        return this._filterAtSource.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // network_insights_path_arn - computed: true, optional: false, required: false
    public get networkInsightsPathArn() {
        return this.getStringAttribute('network_insights_path_arn');
    }

    // network_insights_path_id - computed: true, optional: false, required: false
    public get networkInsightsPathId() {
        return this.getStringAttribute('network_insights_path_id');
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // source_arn - computed: true, optional: false, required: false
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }

    // source_ip - computed: true, optional: true, required: false
    private _sourceIp?: string; 
    public get sourceIp() {
        return this.getStringAttribute('source_ip');
    }
    public set sourceIp(value: string) {
        this._sourceIp = value;
    }
    public resetSourceIp() {
        this._sourceIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIpInput() {
        return this._sourceIp;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkInsightsPath.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkInsightsPath.TagProperty[] | cdktn.IResolvable) {
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
            destination: cdktn.stringToTerraform(this._destination),
            destination_ip: cdktn.stringToTerraform(this._destinationIp),
            destination_port: cdktn.numberToTerraform(this._destinationPort),
            filter_at_destination: ccNetworkInsightsPathPathFilterPropertyToTerraform(this._filterAtDestination.internalValue),
            filter_at_source: ccNetworkInsightsPathFilterAtSourcePropertyToTerraform(this._filterAtSource.internalValue),
            protocol: cdktn.stringToTerraform(this._protocol),
            source: cdktn.stringToTerraform(this._source),
            source_ip: cdktn.stringToTerraform(this._sourceIp),
            tags: cdktn.listMapper(ccNetworkInsightsPathTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination: {
                value: cdktn.stringToHclTerraform(this._destination),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_ip: {
                value: cdktn.stringToHclTerraform(this._destinationIp),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_port: {
                value: cdktn.numberToHclTerraform(this._destinationPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            filter_at_destination: {
                value: ccNetworkInsightsPathPathFilterPropertyToHclTerraform(this._filterAtDestination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkInsightsPath.PathFilterProperty",
            },
            filter_at_source: {
                value: ccNetworkInsightsPathFilterAtSourcePropertyToHclTerraform(this._filterAtSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkInsightsPath.FilterAtSourceProperty",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_ip: {
                value: cdktn.stringToHclTerraform(this._sourceIp),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkInsightsPathTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInsightsPath.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkInsightsPathFilterPortRangePropertyToTerraform(struct?: CcNetworkInsightsPath.FilterPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccNetworkInsightsPathFilterPortRangePropertyToHclTerraform(struct?: CcNetworkInsightsPath.FilterPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToTerraform(struct?: CcNetworkInsightsPath.FilterAtDestinationSourcePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccNetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsPath.FilterAtDestinationSourcePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsPathPathFilterPropertyToTerraform(struct?: CcNetworkInsightsPath.PathFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_port_range: ccNetworkInsightsPathFilterPortRangePropertyToTerraform(struct!.destinationPortRange),
        source_address: cdktn.stringToTerraform(struct!.sourceAddress),
        source_port_range: ccNetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToTerraform(struct!.sourcePortRange),
    }
}


export function ccNetworkInsightsPathPathFilterPropertyToHclTerraform(struct?: CcNetworkInsightsPath.PathFilterProperty | cdktn.IResolvable): any {
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
        destination_port_range: {
            value: ccNetworkInsightsPathFilterPortRangePropertyToHclTerraform(struct!.destinationPortRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterPortRangeProperty",
        },
        source_address: {
            value: cdktn.stringToHclTerraform(struct!.sourceAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port_range: {
            value: ccNetworkInsightsPathFilterAtDestinationSourcePortRangePropertyToHclTerraform(struct!.sourcePortRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterAtDestinationSourcePortRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsPathDestinationPortRangePropertyToTerraform(struct?: CcNetworkInsightsPath.DestinationPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccNetworkInsightsPathDestinationPortRangePropertyToHclTerraform(struct?: CcNetworkInsightsPath.DestinationPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsPathFilterAtSourceSourcePortRangePropertyToTerraform(struct?: CcNetworkInsightsPath.FilterAtSourceSourcePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccNetworkInsightsPathFilterAtSourceSourcePortRangePropertyToHclTerraform(struct?: CcNetworkInsightsPath.FilterAtSourceSourcePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsPathFilterAtSourcePropertyToTerraform(struct?: CcNetworkInsightsPath.FilterAtSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
        destination_port_range: ccNetworkInsightsPathDestinationPortRangePropertyToTerraform(struct!.destinationPortRange),
        source_address: cdktn.stringToTerraform(struct!.sourceAddress),
        source_port_range: ccNetworkInsightsPathFilterAtSourceSourcePortRangePropertyToTerraform(struct!.sourcePortRange),
    }
}


export function ccNetworkInsightsPathFilterAtSourcePropertyToHclTerraform(struct?: CcNetworkInsightsPath.FilterAtSourceProperty | cdktn.IResolvable): any {
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
        destination_port_range: {
            value: ccNetworkInsightsPathDestinationPortRangePropertyToHclTerraform(struct!.destinationPortRange),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationPortRangeProperty",
        },
        source_address: {
            value: cdktn.stringToHclTerraform(struct!.sourceAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port_range: {
            value: ccNetworkInsightsPathFilterAtSourceSourcePortRangePropertyToHclTerraform(struct!.sourcePortRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterAtSourceSourcePortRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsPathTagPropertyToTerraform(struct?: CcNetworkInsightsPath.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkInsightsPathTagPropertyToHclTerraform(struct?: CcNetworkInsightsPath.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNetworkInsightsPath {
export interface FilterPortRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#from_port CcNetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#to_port CcNetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export class FilterPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterPortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterPortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}
export interface FilterAtDestinationSourcePortRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#from_port CcNetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#to_port CcNetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export class FilterAtDestinationSourcePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterAtDestinationSourcePortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterAtDestinationSourcePortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}
export interface PathFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination_address CcNetworkInsightsPath#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination_port_range CcNetworkInsightsPath#destination_port_range}
    */
    readonly destinationPortRange?: FilterPortRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#source_address CcNetworkInsightsPath#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#source_port_range CcNetworkInsightsPath#source_port_range}
    */
    readonly sourcePortRange?: FilterAtDestinationSourcePortRangeProperty;
}
export class PathFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PathFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._destinationPortRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPortRange = this._destinationPortRange?.internalValue;
        }
        if (this._sourceAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddress = this._sourceAddress;
        }
        if (this._sourcePortRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddress = undefined;
            this._destinationPortRange.internalValue = undefined;
            this._sourceAddress = undefined;
            this._sourcePortRange.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddress = value.destinationAddress;
            this._destinationPortRange.internalValue = value.destinationPortRange;
            this._sourceAddress = value.sourceAddress;
            this._sourcePortRange.internalValue = value.sourcePortRange;
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

    // destination_port_range - computed: true, optional: true, required: false
    private _destinationPortRange = new FilterPortRangePropertyOutputReference(this, "destination_port_range");
    public get destinationPortRange() {
        return this._destinationPortRange;
    }
    public putDestinationPortRange(value: FilterPortRangeProperty) {
        this._destinationPortRange.internalValue = value;
    }
    public resetDestinationPortRange() {
        this._destinationPortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortRangeInput() {
        return this._destinationPortRange.internalValue;
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

    // source_port_range - computed: true, optional: true, required: false
    private _sourcePortRange = new FilterAtDestinationSourcePortRangePropertyOutputReference(this, "source_port_range");
    public get sourcePortRange() {
        return this._sourcePortRange;
    }
    public putSourcePortRange(value: FilterAtDestinationSourcePortRangeProperty) {
        this._sourcePortRange.internalValue = value;
    }
    public resetSourcePortRange() {
        this._sourcePortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortRangeInput() {
        return this._sourcePortRange.internalValue;
    }
}
export interface DestinationPortRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#from_port CcNetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#to_port CcNetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export class DestinationPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationPortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationPortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}
export interface FilterAtSourceSourcePortRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#from_port CcNetworkInsightsPath#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#to_port CcNetworkInsightsPath#to_port}
    */
    readonly toPort?: number;
}
export class FilterAtSourceSourcePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterAtSourceSourcePortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterAtSourceSourcePortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}
export interface FilterAtSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination_address CcNetworkInsightsPath#destination_address}
    */
    readonly destinationAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#destination_port_range CcNetworkInsightsPath#destination_port_range}
    */
    readonly destinationPortRange?: DestinationPortRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#source_address CcNetworkInsightsPath#source_address}
    */
    readonly sourceAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#source_port_range CcNetworkInsightsPath#source_port_range}
    */
    readonly sourcePortRange?: FilterAtSourceSourcePortRangeProperty;
}
export class FilterAtSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterAtSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._destinationPortRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPortRange = this._destinationPortRange?.internalValue;
        }
        if (this._sourceAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddress = this._sourceAddress;
        }
        if (this._sourcePortRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePortRange = this._sourcePortRange?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterAtSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddress = undefined;
            this._destinationPortRange.internalValue = undefined;
            this._sourceAddress = undefined;
            this._sourcePortRange.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddress = value.destinationAddress;
            this._destinationPortRange.internalValue = value.destinationPortRange;
            this._sourceAddress = value.sourceAddress;
            this._sourcePortRange.internalValue = value.sourcePortRange;
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

    // destination_port_range - computed: true, optional: true, required: false
    private _destinationPortRange = new DestinationPortRangePropertyOutputReference(this, "destination_port_range");
    public get destinationPortRange() {
        return this._destinationPortRange;
    }
    public putDestinationPortRange(value: DestinationPortRangeProperty) {
        this._destinationPortRange.internalValue = value;
    }
    public resetDestinationPortRange() {
        this._destinationPortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortRangeInput() {
        return this._destinationPortRange.internalValue;
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

    // source_port_range - computed: true, optional: true, required: false
    private _sourcePortRange = new FilterAtSourceSourcePortRangePropertyOutputReference(this, "source_port_range");
    public get sourcePortRange() {
        return this._sourcePortRange;
    }
    public putSourcePortRange(value: FilterAtSourceSourcePortRangeProperty) {
        this._sourcePortRange.internalValue = value;
    }
    public resetSourcePortRange() {
        this._sourcePortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortRangeInput() {
        return this._sourcePortRange.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#key CcNetworkInsightsPath#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_insights_path#value CcNetworkInsightsPath#value}
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
