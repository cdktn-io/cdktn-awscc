// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkInsightsAccessScopeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#exclude_paths CcNetworkInsightsAccessScope#exclude_paths}
    */
    readonly excludePaths?: CcNetworkInsightsAccessScope.AccessScopePathRequestProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#match_paths CcNetworkInsightsAccessScope#match_paths}
    */
    readonly matchPaths?: CcNetworkInsightsAccessScope.MatchPathsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#tags CcNetworkInsightsAccessScope#tags}
    */
    readonly tags?: CcNetworkInsightsAccessScope.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope}
*/
export class CcNetworkInsightsAccessScope extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_network_insights_access_scope";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkInsightsAccessScope to import
    * @param importFromId The id of the existing CcNetworkInsightsAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkInsightsAccessScope to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_access_scope", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkInsightsAccessScopeProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcNetworkInsightsAccessScopeProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_network_insights_access_scope',
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
        this._excludePaths.internalValue = config.excludePaths;
        this._matchPaths.internalValue = config.matchPaths;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
        return this.getStringAttribute('created_date');
    }

    // exclude_paths - computed: true, optional: true, required: false
    private _excludePaths = new CcNetworkInsightsAccessScope.AccessScopePathRequestPropertyList(this, "exclude_paths", false);
    public get excludePaths() {
        return this._excludePaths;
    }
    public putExcludePaths(value: CcNetworkInsightsAccessScope.AccessScopePathRequestProperty[] | cdktn.IResolvable) {
        this._excludePaths.internalValue = value;
    }
    public resetExcludePaths() {
        this._excludePaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludePathsInput() {
        return this._excludePaths.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // match_paths - computed: true, optional: true, required: false
    private _matchPaths = new CcNetworkInsightsAccessScope.MatchPathsPropertyList(this, "match_paths", false);
    public get matchPaths() {
        return this._matchPaths;
    }
    public putMatchPaths(value: CcNetworkInsightsAccessScope.MatchPathsProperty[] | cdktn.IResolvable) {
        this._matchPaths.internalValue = value;
    }
    public resetMatchPaths() {
        this._matchPaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchPathsInput() {
        return this._matchPaths.internalValue;
    }

    // network_insights_access_scope_arn - computed: true, optional: false, required: false
    public get networkInsightsAccessScopeArn() {
        return this.getStringAttribute('network_insights_access_scope_arn');
    }

    // network_insights_access_scope_id - computed: true, optional: false, required: false
    public get networkInsightsAccessScopeId() {
        return this.getStringAttribute('network_insights_access_scope_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkInsightsAccessScope.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkInsightsAccessScope.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_date - computed: true, optional: false, required: false
    public get updatedDate() {
        return this.getStringAttribute('updated_date');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            exclude_paths: cdktn.listMapper(ccNetworkInsightsAccessScopeAccessScopePathRequestPropertyToTerraform, false)(this._excludePaths.internalValue),
            match_paths: cdktn.listMapper(ccNetworkInsightsAccessScopeMatchPathsPropertyToTerraform, false)(this._matchPaths.internalValue),
            tags: cdktn.listMapper(ccNetworkInsightsAccessScopeTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            exclude_paths: {
                value: cdktn.listMapperHcl(ccNetworkInsightsAccessScopeAccessScopePathRequestPropertyToHclTerraform, false)(this._excludePaths.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInsightsAccessScope.AccessScopePathRequestPropertyList",
            },
            match_paths: {
                value: cdktn.listMapperHcl(ccNetworkInsightsAccessScopeMatchPathsPropertyToHclTerraform, false)(this._matchPaths.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInsightsAccessScope.MatchPathsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkInsightsAccessScopeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInsightsAccessScope.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkInsightsAccessScopePacketHeaderStatementRequestPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.PacketHeaderStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
        destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
        destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
        protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
        source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
        source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
        source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
    }
}


export function ccNetworkInsightsAccessScopePacketHeaderStatementRequestPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.PacketHeaderStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeResourceStatementRequestPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ResourceStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccNetworkInsightsAccessScopeResourceStatementRequestPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ResourceStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopePathStatementRequestPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.PathStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        packet_header_statement: ccNetworkInsightsAccessScopePacketHeaderStatementRequestPropertyToTerraform(struct!.packetHeaderStatement),
        resource_statement: ccNetworkInsightsAccessScopeResourceStatementRequestPropertyToTerraform(struct!.resourceStatement),
    }
}


export function ccNetworkInsightsAccessScopePathStatementRequestPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.PathStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        packet_header_statement: {
            value: ccNetworkInsightsAccessScopePacketHeaderStatementRequestPropertyToHclTerraform(struct!.packetHeaderStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "PacketHeaderStatementRequestProperty",
        },
        resource_statement: {
            value: ccNetworkInsightsAccessScopeResourceStatementRequestPropertyToHclTerraform(struct!.resourceStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceStatementRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
        destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
        destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
        protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
        source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
        source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
        source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
    }
}


export function ccNetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccNetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeExcludePathsSourcePropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        packet_header_statement: ccNetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToTerraform(struct!.packetHeaderStatement),
        resource_statement: ccNetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToTerraform(struct!.resourceStatement),
    }
}


export function ccNetworkInsightsAccessScopeExcludePathsSourcePropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        packet_header_statement: {
            value: ccNetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementPropertyToHclTerraform(struct!.packetHeaderStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "ExcludePathsSourcePacketHeaderStatementProperty",
        },
        resource_statement: {
            value: ccNetworkInsightsAccessScopeExcludePathsSourceResourceStatementPropertyToHclTerraform(struct!.resourceStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "ExcludePathsSourceResourceStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccNetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeThroughResourcesStatementRequestPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ThroughResourcesStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_statement: ccNetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToTerraform(struct!.resourceStatement),
    }
}


export function ccNetworkInsightsAccessScopeThroughResourcesStatementRequestPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ThroughResourcesStatementRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_statement: {
            value: ccNetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementPropertyToHclTerraform(struct!.resourceStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "ExcludePathsThroughResourcesResourceStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeAccessScopePathRequestPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.AccessScopePathRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccNetworkInsightsAccessScopePathStatementRequestPropertyToTerraform(struct!.destination),
        source: ccNetworkInsightsAccessScopeExcludePathsSourcePropertyToTerraform(struct!.source),
        through_resources: cdktn.listMapper(ccNetworkInsightsAccessScopeThroughResourcesStatementRequestPropertyToTerraform, false)(struct!.throughResources),
    }
}


export function ccNetworkInsightsAccessScopeAccessScopePathRequestPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.AccessScopePathRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccNetworkInsightsAccessScopePathStatementRequestPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "PathStatementRequestProperty",
        },
        source: {
            value: ccNetworkInsightsAccessScopeExcludePathsSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "ExcludePathsSourceProperty",
        },
        through_resources: {
            value: cdktn.listMapperHcl(ccNetworkInsightsAccessScopeThroughResourcesStatementRequestPropertyToHclTerraform, false)(struct!.throughResources),
            isBlock: true,
            type: "list",
            storageClassType: "ThroughResourcesStatementRequestPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
        destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
        destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
        protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
        source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
        source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
        source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeDestinationPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        packet_header_statement: ccNetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToTerraform(struct!.packetHeaderStatement),
        resource_statement: ccNetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToTerraform(struct!.resourceStatement),
    }
}


export function ccNetworkInsightsAccessScopeDestinationPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        packet_header_statement: {
            value: ccNetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementPropertyToHclTerraform(struct!.packetHeaderStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsDestinationPacketHeaderStatementProperty",
        },
        resource_statement: {
            value: ccNetworkInsightsAccessScopeMatchPathsDestinationResourceStatementPropertyToHclTerraform(struct!.resourceStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsDestinationResourceStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
        destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
        destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
        protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
        source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
        source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
        source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        destination_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source_prefix_lists: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsSourceResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsSourceResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsSourcePropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        packet_header_statement: ccNetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToTerraform(struct!.packetHeaderStatement),
        resource_statement: ccNetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToTerraform(struct!.resourceStatement),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsSourcePropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        packet_header_statement: {
            value: ccNetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementPropertyToHclTerraform(struct!.packetHeaderStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsSourcePacketHeaderStatementProperty",
        },
        resource_statement: {
            value: ccNetworkInsightsAccessScopeMatchPathsSourceResourceStatementPropertyToHclTerraform(struct!.resourceStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsSourceResourceStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsThroughResourcesResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsThroughResourcesResourceStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeThroughResourcesPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.ThroughResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_statement: ccNetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementPropertyToTerraform(struct!.resourceStatement),
    }
}


export function ccNetworkInsightsAccessScopeThroughResourcesPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.ThroughResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_statement: {
            value: ccNetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementPropertyToHclTerraform(struct!.resourceStatement),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsThroughResourcesResourceStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeMatchPathsPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccNetworkInsightsAccessScopeDestinationPropertyToTerraform(struct!.destination),
        source: ccNetworkInsightsAccessScopeMatchPathsSourcePropertyToTerraform(struct!.source),
        through_resources: cdktn.listMapper(ccNetworkInsightsAccessScopeThroughResourcesPropertyToTerraform, false)(struct!.throughResources),
    }
}


export function ccNetworkInsightsAccessScopeMatchPathsPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.MatchPathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccNetworkInsightsAccessScopeDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationProperty",
        },
        source: {
            value: ccNetworkInsightsAccessScopeMatchPathsSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchPathsSourceProperty",
        },
        through_resources: {
            value: cdktn.listMapperHcl(ccNetworkInsightsAccessScopeThroughResourcesPropertyToHclTerraform, false)(struct!.throughResources),
            isBlock: true,
            type: "list",
            storageClassType: "ThroughResourcesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInsightsAccessScopeTagPropertyToTerraform(struct?: CcNetworkInsightsAccessScope.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkInsightsAccessScopeTagPropertyToHclTerraform(struct?: CcNetworkInsightsAccessScope.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNetworkInsightsAccessScope {
export interface PacketHeaderStatementRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_addresses CcNetworkInsightsAccessScope#destination_addresses}
    */
    readonly destinationAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_ports CcNetworkInsightsAccessScope#destination_ports}
    */
    readonly destinationPorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists CcNetworkInsightsAccessScope#destination_prefix_lists}
    */
    readonly destinationPrefixLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#protocols CcNetworkInsightsAccessScope#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_addresses CcNetworkInsightsAccessScope#source_addresses}
    */
    readonly sourceAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_ports CcNetworkInsightsAccessScope#source_ports}
    */
    readonly sourcePorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_prefix_lists CcNetworkInsightsAccessScope#source_prefix_lists}
    */
    readonly sourcePrefixLists?: string[];
}
export class PacketHeaderStatementRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PacketHeaderStatementRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddresses = this._destinationAddresses;
        }
        if (this._destinationPorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPorts = this._destinationPorts;
        }
        if (this._destinationPrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
        }
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._sourceAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddresses = this._sourceAddresses;
        }
        if (this._sourcePorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePorts = this._sourcePorts;
        }
        if (this._sourcePrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PacketHeaderStatementRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddresses = undefined;
            this._destinationPorts = undefined;
            this._destinationPrefixLists = undefined;
            this._protocols = undefined;
            this._sourceAddresses = undefined;
            this._sourcePorts = undefined;
            this._sourcePrefixLists = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddresses = value.destinationAddresses;
            this._destinationPorts = value.destinationPorts;
            this._destinationPrefixLists = value.destinationPrefixLists;
            this._protocols = value.protocols;
            this._sourceAddresses = value.sourceAddresses;
            this._sourcePorts = value.sourcePorts;
            this._sourcePrefixLists = value.sourcePrefixLists;
        }
    }

    // destination_addresses - computed: true, optional: true, required: false
    private _destinationAddresses?: string[]; 
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    public set destinationAddresses(value: string[]) {
        this._destinationAddresses = value;
    }
    public resetDestinationAddresses() {
        this._destinationAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressesInput() {
        return this._destinationAddresses;
    }

    // destination_ports - computed: true, optional: true, required: false
    private _destinationPorts?: string[]; 
    public get destinationPorts() {
        return this.getListAttribute('destination_ports');
    }
    public set destinationPorts(value: string[]) {
        this._destinationPorts = value;
    }
    public resetDestinationPorts() {
        this._destinationPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortsInput() {
        return this._destinationPorts;
    }

    // destination_prefix_lists - computed: true, optional: true, required: false
    private _destinationPrefixLists?: string[]; 
    public get destinationPrefixLists() {
        return this.getListAttribute('destination_prefix_lists');
    }
    public set destinationPrefixLists(value: string[]) {
        this._destinationPrefixLists = value;
    }
    public resetDestinationPrefixLists() {
        this._destinationPrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListsInput() {
        return this._destinationPrefixLists;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // source_addresses - computed: true, optional: true, required: false
    private _sourceAddresses?: string[]; 
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    public set sourceAddresses(value: string[]) {
        this._sourceAddresses = value;
    }
    public resetSourceAddresses() {
        this._sourceAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAddressesInput() {
        return this._sourceAddresses;
    }

    // source_ports - computed: true, optional: true, required: false
    private _sourcePorts?: string[]; 
    public get sourcePorts() {
        return this.getListAttribute('source_ports');
    }
    public set sourcePorts(value: string[]) {
        this._sourcePorts = value;
    }
    public resetSourcePorts() {
        this._sourcePorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortsInput() {
        return this._sourcePorts;
    }

    // source_prefix_lists - computed: true, optional: true, required: false
    private _sourcePrefixLists?: string[]; 
    public get sourcePrefixLists() {
        return this.getListAttribute('source_prefix_lists');
    }
    public set sourcePrefixLists(value: string[]) {
        this._sourcePrefixLists = value;
    }
    public resetSourcePrefixLists() {
        this._sourcePrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePrefixListsInput() {
        return this._sourcePrefixLists;
    }
}
export interface ResourceStatementRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_types CcNetworkInsightsAccessScope#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resources CcNetworkInsightsAccessScope#resources}
    */
    readonly resources?: string[];
}
export class ResourceStatementRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceStatementRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceStatementRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTypes = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTypes = value.resourceTypes;
            this._resources = value.resources;
        }
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface PathStatementRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#packet_header_statement CcNetworkInsightsAccessScope#packet_header_statement}
    */
    readonly packetHeaderStatement?: PacketHeaderStatementRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_statement CcNetworkInsightsAccessScope#resource_statement}
    */
    readonly resourceStatement?: ResourceStatementRequestProperty;
}
export class PathStatementRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PathStatementRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._packetHeaderStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
        }
        if (this._resourceStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathStatementRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = undefined;
            this._resourceStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
            this._resourceStatement.internalValue = value.resourceStatement;
        }
    }

    // packet_header_statement - computed: true, optional: true, required: false
    private _packetHeaderStatement = new PacketHeaderStatementRequestPropertyOutputReference(this, "packet_header_statement");
    public get packetHeaderStatement() {
        return this._packetHeaderStatement;
    }
    public putPacketHeaderStatement(value: PacketHeaderStatementRequestProperty) {
        this._packetHeaderStatement.internalValue = value;
    }
    public resetPacketHeaderStatement() {
        this._packetHeaderStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetHeaderStatementInput() {
        return this._packetHeaderStatement.internalValue;
    }

    // resource_statement - computed: true, optional: true, required: false
    private _resourceStatement = new ResourceStatementRequestPropertyOutputReference(this, "resource_statement");
    public get resourceStatement() {
        return this._resourceStatement;
    }
    public putResourceStatement(value: ResourceStatementRequestProperty) {
        this._resourceStatement.internalValue = value;
    }
    public resetResourceStatement() {
        this._resourceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceStatementInput() {
        return this._resourceStatement.internalValue;
    }
}
export interface ExcludePathsSourcePacketHeaderStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_addresses CcNetworkInsightsAccessScope#destination_addresses}
    */
    readonly destinationAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_ports CcNetworkInsightsAccessScope#destination_ports}
    */
    readonly destinationPorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists CcNetworkInsightsAccessScope#destination_prefix_lists}
    */
    readonly destinationPrefixLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#protocols CcNetworkInsightsAccessScope#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_addresses CcNetworkInsightsAccessScope#source_addresses}
    */
    readonly sourceAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_ports CcNetworkInsightsAccessScope#source_ports}
    */
    readonly sourcePorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_prefix_lists CcNetworkInsightsAccessScope#source_prefix_lists}
    */
    readonly sourcePrefixLists?: string[];
}
export class ExcludePathsSourcePacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddresses = this._destinationAddresses;
        }
        if (this._destinationPorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPorts = this._destinationPorts;
        }
        if (this._destinationPrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
        }
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._sourceAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddresses = this._sourceAddresses;
        }
        if (this._sourcePorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePorts = this._sourcePorts;
        }
        if (this._sourcePrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExcludePathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddresses = undefined;
            this._destinationPorts = undefined;
            this._destinationPrefixLists = undefined;
            this._protocols = undefined;
            this._sourceAddresses = undefined;
            this._sourcePorts = undefined;
            this._sourcePrefixLists = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddresses = value.destinationAddresses;
            this._destinationPorts = value.destinationPorts;
            this._destinationPrefixLists = value.destinationPrefixLists;
            this._protocols = value.protocols;
            this._sourceAddresses = value.sourceAddresses;
            this._sourcePorts = value.sourcePorts;
            this._sourcePrefixLists = value.sourcePrefixLists;
        }
    }

    // destination_addresses - computed: true, optional: true, required: false
    private _destinationAddresses?: string[]; 
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    public set destinationAddresses(value: string[]) {
        this._destinationAddresses = value;
    }
    public resetDestinationAddresses() {
        this._destinationAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressesInput() {
        return this._destinationAddresses;
    }

    // destination_ports - computed: true, optional: true, required: false
    private _destinationPorts?: string[]; 
    public get destinationPorts() {
        return this.getListAttribute('destination_ports');
    }
    public set destinationPorts(value: string[]) {
        this._destinationPorts = value;
    }
    public resetDestinationPorts() {
        this._destinationPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortsInput() {
        return this._destinationPorts;
    }

    // destination_prefix_lists - computed: true, optional: true, required: false
    private _destinationPrefixLists?: string[]; 
    public get destinationPrefixLists() {
        return this.getListAttribute('destination_prefix_lists');
    }
    public set destinationPrefixLists(value: string[]) {
        this._destinationPrefixLists = value;
    }
    public resetDestinationPrefixLists() {
        this._destinationPrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListsInput() {
        return this._destinationPrefixLists;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // source_addresses - computed: true, optional: true, required: false
    private _sourceAddresses?: string[]; 
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    public set sourceAddresses(value: string[]) {
        this._sourceAddresses = value;
    }
    public resetSourceAddresses() {
        this._sourceAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAddressesInput() {
        return this._sourceAddresses;
    }

    // source_ports - computed: true, optional: true, required: false
    private _sourcePorts?: string[]; 
    public get sourcePorts() {
        return this.getListAttribute('source_ports');
    }
    public set sourcePorts(value: string[]) {
        this._sourcePorts = value;
    }
    public resetSourcePorts() {
        this._sourcePorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortsInput() {
        return this._sourcePorts;
    }

    // source_prefix_lists - computed: true, optional: true, required: false
    private _sourcePrefixLists?: string[]; 
    public get sourcePrefixLists() {
        return this.getListAttribute('source_prefix_lists');
    }
    public set sourcePrefixLists(value: string[]) {
        this._sourcePrefixLists = value;
    }
    public resetSourcePrefixLists() {
        this._sourcePrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePrefixListsInput() {
        return this._sourcePrefixLists;
    }
}
export interface ExcludePathsSourceResourceStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_types CcNetworkInsightsAccessScope#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resources CcNetworkInsightsAccessScope#resources}
    */
    readonly resources?: string[];
}
export class ExcludePathsSourceResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExcludePathsSourceResourceStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTypes = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTypes = value.resourceTypes;
            this._resources = value.resources;
        }
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface ExcludePathsSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#packet_header_statement CcNetworkInsightsAccessScope#packet_header_statement}
    */
    readonly packetHeaderStatement?: ExcludePathsSourcePacketHeaderStatementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_statement CcNetworkInsightsAccessScope#resource_statement}
    */
    readonly resourceStatement?: ExcludePathsSourceResourceStatementProperty;
}
export class ExcludePathsSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExcludePathsSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._packetHeaderStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
        }
        if (this._resourceStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExcludePathsSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = undefined;
            this._resourceStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
            this._resourceStatement.internalValue = value.resourceStatement;
        }
    }

    // packet_header_statement - computed: true, optional: true, required: false
    private _packetHeaderStatement = new ExcludePathsSourcePacketHeaderStatementPropertyOutputReference(this, "packet_header_statement");
    public get packetHeaderStatement() {
        return this._packetHeaderStatement;
    }
    public putPacketHeaderStatement(value: ExcludePathsSourcePacketHeaderStatementProperty) {
        this._packetHeaderStatement.internalValue = value;
    }
    public resetPacketHeaderStatement() {
        this._packetHeaderStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetHeaderStatementInput() {
        return this._packetHeaderStatement.internalValue;
    }

    // resource_statement - computed: true, optional: true, required: false
    private _resourceStatement = new ExcludePathsSourceResourceStatementPropertyOutputReference(this, "resource_statement");
    public get resourceStatement() {
        return this._resourceStatement;
    }
    public putResourceStatement(value: ExcludePathsSourceResourceStatementProperty) {
        this._resourceStatement.internalValue = value;
    }
    public resetResourceStatement() {
        this._resourceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceStatementInput() {
        return this._resourceStatement.internalValue;
    }
}
export interface ExcludePathsThroughResourcesResourceStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_types CcNetworkInsightsAccessScope#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resources CcNetworkInsightsAccessScope#resources}
    */
    readonly resources?: string[];
}
export class ExcludePathsThroughResourcesResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExcludePathsThroughResourcesResourceStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTypes = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTypes = value.resourceTypes;
            this._resources = value.resources;
        }
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface ThroughResourcesStatementRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_statement CcNetworkInsightsAccessScope#resource_statement}
    */
    readonly resourceStatement?: ExcludePathsThroughResourcesResourceStatementProperty;
}
export class ThroughResourcesStatementRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThroughResourcesStatementRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThroughResourcesStatementRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceStatement.internalValue = value.resourceStatement;
        }
    }

    // resource_statement - computed: true, optional: true, required: false
    private _resourceStatement = new ExcludePathsThroughResourcesResourceStatementPropertyOutputReference(this, "resource_statement");
    public get resourceStatement() {
        return this._resourceStatement;
    }
    public putResourceStatement(value: ExcludePathsThroughResourcesResourceStatementProperty) {
        this._resourceStatement.internalValue = value;
    }
    public resetResourceStatement() {
        this._resourceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceStatementInput() {
        return this._resourceStatement.internalValue;
    }
}

export class ThroughResourcesStatementRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : ThroughResourcesStatementRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): ThroughResourcesStatementRequestPropertyOutputReference {
        return new ThroughResourcesStatementRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AccessScopePathRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination CcNetworkInsightsAccessScope#destination}
    */
    readonly destination?: PathStatementRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source CcNetworkInsightsAccessScope#source}
    */
    readonly source?: ExcludePathsSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#through_resources CcNetworkInsightsAccessScope#through_resources}
    */
    readonly throughResources?: ThroughResourcesStatementRequestProperty[] | cdktn.IResolvable;
}
export class AccessScopePathRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessScopePathRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        if (this._throughResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughResources = this._throughResources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessScopePathRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
            this._source.internalValue = undefined;
            this._throughResources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
            this._source.internalValue = value.source;
            this._throughResources.internalValue = value.throughResources;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination = new PathStatementRequestPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: PathStatementRequestProperty) {
        this._destination.internalValue = value;
    }
    public resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source = new ExcludePathsSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: ExcludePathsSourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // through_resources - computed: true, optional: true, required: false
    private _throughResources = new ThroughResourcesStatementRequestPropertyList(this, "through_resources", false);
    public get throughResources() {
        return this._throughResources;
    }
    public putThroughResources(value: ThroughResourcesStatementRequestProperty[] | cdktn.IResolvable) {
        this._throughResources.internalValue = value;
    }
    public resetThroughResources() {
        this._throughResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughResourcesInput() {
        return this._throughResources.internalValue;
    }
}

export class AccessScopePathRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessScopePathRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessScopePathRequestPropertyOutputReference {
        return new AccessScopePathRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MatchPathsDestinationPacketHeaderStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_addresses CcNetworkInsightsAccessScope#destination_addresses}
    */
    readonly destinationAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_ports CcNetworkInsightsAccessScope#destination_ports}
    */
    readonly destinationPorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists CcNetworkInsightsAccessScope#destination_prefix_lists}
    */
    readonly destinationPrefixLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#protocols CcNetworkInsightsAccessScope#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_addresses CcNetworkInsightsAccessScope#source_addresses}
    */
    readonly sourceAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_ports CcNetworkInsightsAccessScope#source_ports}
    */
    readonly sourcePorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_prefix_lists CcNetworkInsightsAccessScope#source_prefix_lists}
    */
    readonly sourcePrefixLists?: string[];
}
export class MatchPathsDestinationPacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddresses = this._destinationAddresses;
        }
        if (this._destinationPorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPorts = this._destinationPorts;
        }
        if (this._destinationPrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
        }
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._sourceAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddresses = this._sourceAddresses;
        }
        if (this._sourcePorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePorts = this._sourcePorts;
        }
        if (this._sourcePrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsDestinationPacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddresses = undefined;
            this._destinationPorts = undefined;
            this._destinationPrefixLists = undefined;
            this._protocols = undefined;
            this._sourceAddresses = undefined;
            this._sourcePorts = undefined;
            this._sourcePrefixLists = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddresses = value.destinationAddresses;
            this._destinationPorts = value.destinationPorts;
            this._destinationPrefixLists = value.destinationPrefixLists;
            this._protocols = value.protocols;
            this._sourceAddresses = value.sourceAddresses;
            this._sourcePorts = value.sourcePorts;
            this._sourcePrefixLists = value.sourcePrefixLists;
        }
    }

    // destination_addresses - computed: true, optional: true, required: false
    private _destinationAddresses?: string[]; 
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    public set destinationAddresses(value: string[]) {
        this._destinationAddresses = value;
    }
    public resetDestinationAddresses() {
        this._destinationAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressesInput() {
        return this._destinationAddresses;
    }

    // destination_ports - computed: true, optional: true, required: false
    private _destinationPorts?: string[]; 
    public get destinationPorts() {
        return this.getListAttribute('destination_ports');
    }
    public set destinationPorts(value: string[]) {
        this._destinationPorts = value;
    }
    public resetDestinationPorts() {
        this._destinationPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortsInput() {
        return this._destinationPorts;
    }

    // destination_prefix_lists - computed: true, optional: true, required: false
    private _destinationPrefixLists?: string[]; 
    public get destinationPrefixLists() {
        return this.getListAttribute('destination_prefix_lists');
    }
    public set destinationPrefixLists(value: string[]) {
        this._destinationPrefixLists = value;
    }
    public resetDestinationPrefixLists() {
        this._destinationPrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListsInput() {
        return this._destinationPrefixLists;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // source_addresses - computed: true, optional: true, required: false
    private _sourceAddresses?: string[]; 
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    public set sourceAddresses(value: string[]) {
        this._sourceAddresses = value;
    }
    public resetSourceAddresses() {
        this._sourceAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAddressesInput() {
        return this._sourceAddresses;
    }

    // source_ports - computed: true, optional: true, required: false
    private _sourcePorts?: string[]; 
    public get sourcePorts() {
        return this.getListAttribute('source_ports');
    }
    public set sourcePorts(value: string[]) {
        this._sourcePorts = value;
    }
    public resetSourcePorts() {
        this._sourcePorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortsInput() {
        return this._sourcePorts;
    }

    // source_prefix_lists - computed: true, optional: true, required: false
    private _sourcePrefixLists?: string[]; 
    public get sourcePrefixLists() {
        return this.getListAttribute('source_prefix_lists');
    }
    public set sourcePrefixLists(value: string[]) {
        this._sourcePrefixLists = value;
    }
    public resetSourcePrefixLists() {
        this._sourcePrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePrefixListsInput() {
        return this._sourcePrefixLists;
    }
}
export interface MatchPathsDestinationResourceStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_types CcNetworkInsightsAccessScope#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resources CcNetworkInsightsAccessScope#resources}
    */
    readonly resources?: string[];
}
export class MatchPathsDestinationResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsDestinationResourceStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTypes = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTypes = value.resourceTypes;
            this._resources = value.resources;
        }
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface DestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#packet_header_statement CcNetworkInsightsAccessScope#packet_header_statement}
    */
    readonly packetHeaderStatement?: MatchPathsDestinationPacketHeaderStatementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_statement CcNetworkInsightsAccessScope#resource_statement}
    */
    readonly resourceStatement?: MatchPathsDestinationResourceStatementProperty;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._packetHeaderStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
        }
        if (this._resourceStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = undefined;
            this._resourceStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
            this._resourceStatement.internalValue = value.resourceStatement;
        }
    }

    // packet_header_statement - computed: true, optional: true, required: false
    private _packetHeaderStatement = new MatchPathsDestinationPacketHeaderStatementPropertyOutputReference(this, "packet_header_statement");
    public get packetHeaderStatement() {
        return this._packetHeaderStatement;
    }
    public putPacketHeaderStatement(value: MatchPathsDestinationPacketHeaderStatementProperty) {
        this._packetHeaderStatement.internalValue = value;
    }
    public resetPacketHeaderStatement() {
        this._packetHeaderStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetHeaderStatementInput() {
        return this._packetHeaderStatement.internalValue;
    }

    // resource_statement - computed: true, optional: true, required: false
    private _resourceStatement = new MatchPathsDestinationResourceStatementPropertyOutputReference(this, "resource_statement");
    public get resourceStatement() {
        return this._resourceStatement;
    }
    public putResourceStatement(value: MatchPathsDestinationResourceStatementProperty) {
        this._resourceStatement.internalValue = value;
    }
    public resetResourceStatement() {
        this._resourceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceStatementInput() {
        return this._resourceStatement.internalValue;
    }
}
export interface MatchPathsSourcePacketHeaderStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_addresses CcNetworkInsightsAccessScope#destination_addresses}
    */
    readonly destinationAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_ports CcNetworkInsightsAccessScope#destination_ports}
    */
    readonly destinationPorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists CcNetworkInsightsAccessScope#destination_prefix_lists}
    */
    readonly destinationPrefixLists?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#protocols CcNetworkInsightsAccessScope#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_addresses CcNetworkInsightsAccessScope#source_addresses}
    */
    readonly sourceAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_ports CcNetworkInsightsAccessScope#source_ports}
    */
    readonly sourcePorts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source_prefix_lists CcNetworkInsightsAccessScope#source_prefix_lists}
    */
    readonly sourcePrefixLists?: string[];
}
export class MatchPathsSourcePacketHeaderStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddresses = this._destinationAddresses;
        }
        if (this._destinationPorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPorts = this._destinationPorts;
        }
        if (this._destinationPrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
        }
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._sourceAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAddresses = this._sourceAddresses;
        }
        if (this._sourcePorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePorts = this._sourcePorts;
        }
        if (this._sourcePrefixLists !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsSourcePacketHeaderStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationAddresses = undefined;
            this._destinationPorts = undefined;
            this._destinationPrefixLists = undefined;
            this._protocols = undefined;
            this._sourceAddresses = undefined;
            this._sourcePorts = undefined;
            this._sourcePrefixLists = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationAddresses = value.destinationAddresses;
            this._destinationPorts = value.destinationPorts;
            this._destinationPrefixLists = value.destinationPrefixLists;
            this._protocols = value.protocols;
            this._sourceAddresses = value.sourceAddresses;
            this._sourcePorts = value.sourcePorts;
            this._sourcePrefixLists = value.sourcePrefixLists;
        }
    }

    // destination_addresses - computed: true, optional: true, required: false
    private _destinationAddresses?: string[]; 
    public get destinationAddresses() {
        return this.getListAttribute('destination_addresses');
    }
    public set destinationAddresses(value: string[]) {
        this._destinationAddresses = value;
    }
    public resetDestinationAddresses() {
        this._destinationAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationAddressesInput() {
        return this._destinationAddresses;
    }

    // destination_ports - computed: true, optional: true, required: false
    private _destinationPorts?: string[]; 
    public get destinationPorts() {
        return this.getListAttribute('destination_ports');
    }
    public set destinationPorts(value: string[]) {
        this._destinationPorts = value;
    }
    public resetDestinationPorts() {
        this._destinationPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortsInput() {
        return this._destinationPorts;
    }

    // destination_prefix_lists - computed: true, optional: true, required: false
    private _destinationPrefixLists?: string[]; 
    public get destinationPrefixLists() {
        return this.getListAttribute('destination_prefix_lists');
    }
    public set destinationPrefixLists(value: string[]) {
        this._destinationPrefixLists = value;
    }
    public resetDestinationPrefixLists() {
        this._destinationPrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListsInput() {
        return this._destinationPrefixLists;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // source_addresses - computed: true, optional: true, required: false
    private _sourceAddresses?: string[]; 
    public get sourceAddresses() {
        return this.getListAttribute('source_addresses');
    }
    public set sourceAddresses(value: string[]) {
        this._sourceAddresses = value;
    }
    public resetSourceAddresses() {
        this._sourceAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAddressesInput() {
        return this._sourceAddresses;
    }

    // source_ports - computed: true, optional: true, required: false
    private _sourcePorts?: string[]; 
    public get sourcePorts() {
        return this.getListAttribute('source_ports');
    }
    public set sourcePorts(value: string[]) {
        this._sourcePorts = value;
    }
    public resetSourcePorts() {
        this._sourcePorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortsInput() {
        return this._sourcePorts;
    }

    // source_prefix_lists - computed: true, optional: true, required: false
    private _sourcePrefixLists?: string[]; 
    public get sourcePrefixLists() {
        return this.getListAttribute('source_prefix_lists');
    }
    public set sourcePrefixLists(value: string[]) {
        this._sourcePrefixLists = value;
    }
    public resetSourcePrefixLists() {
        this._sourcePrefixLists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePrefixListsInput() {
        return this._sourcePrefixLists;
    }
}
export interface MatchPathsSourceResourceStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_types CcNetworkInsightsAccessScope#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resources CcNetworkInsightsAccessScope#resources}
    */
    readonly resources?: string[];
}
export class MatchPathsSourceResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsSourceResourceStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsSourceResourceStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTypes = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTypes = value.resourceTypes;
            this._resources = value.resources;
        }
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface MatchPathsSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#packet_header_statement CcNetworkInsightsAccessScope#packet_header_statement}
    */
    readonly packetHeaderStatement?: MatchPathsSourcePacketHeaderStatementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_statement CcNetworkInsightsAccessScope#resource_statement}
    */
    readonly resourceStatement?: MatchPathsSourceResourceStatementProperty;
}
export class MatchPathsSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._packetHeaderStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
        }
        if (this._resourceStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = undefined;
            this._resourceStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
            this._resourceStatement.internalValue = value.resourceStatement;
        }
    }

    // packet_header_statement - computed: true, optional: true, required: false
    private _packetHeaderStatement = new MatchPathsSourcePacketHeaderStatementPropertyOutputReference(this, "packet_header_statement");
    public get packetHeaderStatement() {
        return this._packetHeaderStatement;
    }
    public putPacketHeaderStatement(value: MatchPathsSourcePacketHeaderStatementProperty) {
        this._packetHeaderStatement.internalValue = value;
    }
    public resetPacketHeaderStatement() {
        this._packetHeaderStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetHeaderStatementInput() {
        return this._packetHeaderStatement.internalValue;
    }

    // resource_statement - computed: true, optional: true, required: false
    private _resourceStatement = new MatchPathsSourceResourceStatementPropertyOutputReference(this, "resource_statement");
    public get resourceStatement() {
        return this._resourceStatement;
    }
    public putResourceStatement(value: MatchPathsSourceResourceStatementProperty) {
        this._resourceStatement.internalValue = value;
    }
    public resetResourceStatement() {
        this._resourceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceStatementInput() {
        return this._resourceStatement.internalValue;
    }
}
export interface MatchPathsThroughResourcesResourceStatementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_types CcNetworkInsightsAccessScope#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resources CcNetworkInsightsAccessScope#resources}
    */
    readonly resources?: string[];
}
export class MatchPathsThroughResourcesResourceStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchPathsThroughResourcesResourceStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsThroughResourcesResourceStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceTypes = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceTypes = value.resourceTypes;
            this._resources = value.resources;
        }
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface ThroughResourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#resource_statement CcNetworkInsightsAccessScope#resource_statement}
    */
    readonly resourceStatement?: MatchPathsThroughResourcesResourceStatementProperty;
}
export class ThroughResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThroughResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceStatement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThroughResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceStatement.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceStatement.internalValue = value.resourceStatement;
        }
    }

    // resource_statement - computed: true, optional: true, required: false
    private _resourceStatement = new MatchPathsThroughResourcesResourceStatementPropertyOutputReference(this, "resource_statement");
    public get resourceStatement() {
        return this._resourceStatement;
    }
    public putResourceStatement(value: MatchPathsThroughResourcesResourceStatementProperty) {
        this._resourceStatement.internalValue = value;
    }
    public resetResourceStatement() {
        this._resourceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceStatementInput() {
        return this._resourceStatement.internalValue;
    }
}

export class ThroughResourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : ThroughResourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): ThroughResourcesPropertyOutputReference {
        return new ThroughResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MatchPathsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#destination CcNetworkInsightsAccessScope#destination}
    */
    readonly destination?: DestinationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#source CcNetworkInsightsAccessScope#source}
    */
    readonly source?: MatchPathsSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#through_resources CcNetworkInsightsAccessScope#through_resources}
    */
    readonly throughResources?: ThroughResourcesProperty[] | cdktn.IResolvable;
}
export class MatchPathsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MatchPathsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        if (this._throughResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughResources = this._throughResources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchPathsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
            this._source.internalValue = undefined;
            this._throughResources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
            this._source.internalValue = value.source;
            this._throughResources.internalValue = value.throughResources;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination = new DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: DestinationProperty) {
        this._destination.internalValue = value;
    }
    public resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source = new MatchPathsSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: MatchPathsSourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // through_resources - computed: true, optional: true, required: false
    private _throughResources = new ThroughResourcesPropertyList(this, "through_resources", false);
    public get throughResources() {
        return this._throughResources;
    }
    public putThroughResources(value: ThroughResourcesProperty[] | cdktn.IResolvable) {
        this._throughResources.internalValue = value;
    }
    public resetThroughResources() {
        this._throughResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughResourcesInput() {
        return this._throughResources.internalValue;
    }
}

export class MatchPathsPropertyList extends cdktn.ComplexList {
    public internalValue? : MatchPathsProperty[] | cdktn.IResolvable

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
    public get(index: number): MatchPathsPropertyOutputReference {
        return new MatchPathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#key CcNetworkInsightsAccessScope#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_insights_access_scope#value CcNetworkInsightsAccessScope#value}
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
