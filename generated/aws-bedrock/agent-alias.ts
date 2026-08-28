// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * Name for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#agent_alias_name CcAgentAlias#agent_alias_name}
    */
    readonly agentAliasName: string;
    /**
    * Identifier for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#agent_id CcAgentAlias#agent_id}
    */
    readonly agentId: string;
    /**
    * Description of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#description CcAgentAlias#description}
    */
    readonly description?: string;
    /**
    * Routing configuration for an Agent alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#routing_configuration CcAgentAlias#routing_configuration}
    */
    readonly routingConfiguration?: CcAgentAlias.AgentAliasRoutingConfigurationListItemProperty[] | cdktn.IResolvable;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#tags CcAgentAlias#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias awscc_bedrock_agent_alias}
*/
export class CcAgentAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_agent_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentAlias to import
    * @param importFromId The id of the existing CcAgentAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_agent_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias awscc_bedrock_agent_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_agent_alias',
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
        this._agentAliasName = config.agentAliasName;
        this._agentId = config.agentId;
        this._description = config.description;
        this._routingConfiguration.internalValue = config.routingConfiguration;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_alias_arn - computed: true, optional: false, required: false
    public get agentAliasArn() {
        return this.getStringAttribute('agent_alias_arn');
    }

    // agent_alias_history_events - computed: true, optional: false, required: false
    private _agentAliasHistoryEvents = new CcAgentAlias.AgentAliasHistoryEventsPropertyList(this, "agent_alias_history_events", false);
    public get agentAliasHistoryEvents() {
        return this._agentAliasHistoryEvents;
    }

    // agent_alias_id - computed: true, optional: false, required: false
    public get agentAliasId() {
        return this.getStringAttribute('agent_alias_id');
    }

    // agent_alias_name - computed: false, optional: false, required: true
    private _agentAliasName?: string; 
    public get agentAliasName() {
        return this.getStringAttribute('agent_alias_name');
    }
    public set agentAliasName(value: string) {
        this._agentAliasName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentAliasNameInput() {
        return this._agentAliasName;
    }

    // agent_alias_status - computed: true, optional: false, required: false
    public get agentAliasStatus() {
        return this.getStringAttribute('agent_alias_status');
    }

    // agent_id - computed: false, optional: false, required: true
    private _agentId?: string; 
    public get agentId() {
        return this.getStringAttribute('agent_id');
    }
    public set agentId(value: string) {
        this._agentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentIdInput() {
        return this._agentId;
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

    // routing_configuration - computed: true, optional: true, required: false
    private _routingConfiguration = new CcAgentAlias.AgentAliasRoutingConfigurationListItemPropertyList(this, "routing_configuration", false);
    public get routingConfiguration() {
        return this._routingConfiguration;
    }
    public putRoutingConfiguration(value: CcAgentAlias.AgentAliasRoutingConfigurationListItemProperty[] | cdktn.IResolvable) {
        this._routingConfiguration.internalValue = value;
    }
    public resetRoutingConfiguration() {
        this._routingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigurationInput() {
        return this._routingConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
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
            agent_alias_name: cdktn.stringToTerraform(this._agentAliasName),
            agent_id: cdktn.stringToTerraform(this._agentId),
            description: cdktn.stringToTerraform(this._description),
            routing_configuration: cdktn.listMapper(ccAgentAliasAgentAliasRoutingConfigurationListItemPropertyToTerraform, false)(this._routingConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_alias_name: {
                value: cdktn.stringToHclTerraform(this._agentAliasName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_id: {
                value: cdktn.stringToHclTerraform(this._agentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing_configuration: {
                value: cdktn.listMapperHcl(ccAgentAliasAgentAliasRoutingConfigurationListItemPropertyToHclTerraform, false)(this._routingConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgentAlias.AgentAliasRoutingConfigurationListItemPropertyList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentAliasRoutingConfigurationPropertyToTerraform(struct?: CcAgentAlias.RoutingConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAgentAliasRoutingConfigurationPropertyToHclTerraform(struct?: CcAgentAlias.RoutingConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAgentAliasAgentAliasHistoryEventsPropertyToTerraform(struct?: CcAgentAlias.AgentAliasHistoryEventsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAgentAliasAgentAliasHistoryEventsPropertyToHclTerraform(struct?: CcAgentAlias.AgentAliasHistoryEventsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAgentAliasAgentAliasRoutingConfigurationListItemPropertyToTerraform(struct?: CcAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_version: cdktn.stringToTerraform(struct!.agentVersion),
    }
}


export function ccAgentAliasAgentAliasRoutingConfigurationListItemPropertyToHclTerraform(struct?: CcAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_version: {
            value: cdktn.stringToHclTerraform(struct!.agentVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAgentAlias {
export interface RoutingConfigurationProperty {
}
export class RoutingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RoutingConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // agent_version - computed: true, optional: false, required: false
    public get agentVersion() {
        return this.getStringAttribute('agent_version');
    }
}

export class RoutingConfigurationPropertyList extends cdktn.ComplexList {

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
    public get(index: number): RoutingConfigurationPropertyOutputReference {
        return new RoutingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AgentAliasHistoryEventsProperty {
}
export class AgentAliasHistoryEventsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentAliasHistoryEventsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentAliasHistoryEventsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // end_date - computed: true, optional: false, required: false
    public get endDate() {
        return this.getStringAttribute('end_date');
    }

    // routing_configuration - computed: true, optional: false, required: false
    private _routingConfiguration = new RoutingConfigurationPropertyList(this, "routing_configuration", false);
    public get routingConfiguration() {
        return this._routingConfiguration;
    }

    // start_date - computed: true, optional: false, required: false
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
}

export class AgentAliasHistoryEventsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): AgentAliasHistoryEventsPropertyOutputReference {
        return new AgentAliasHistoryEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AgentAliasRoutingConfigurationListItemProperty {
    /**
    * Agent Version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_agent_alias#agent_version CcAgentAlias#agent_version}
    */
    readonly agentVersion?: string;
}
export class AgentAliasRoutingConfigurationListItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AgentAliasRoutingConfigurationListItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentVersion = this._agentVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentAliasRoutingConfigurationListItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentVersion = value.agentVersion;
        }
    }

    // agent_version - computed: true, optional: true, required: false
    private _agentVersion?: string; 
    public get agentVersion() {
        return this.getStringAttribute('agent_version');
    }
    public set agentVersion(value: string) {
        this._agentVersion = value;
    }
    public resetAgentVersion() {
        this._agentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentVersionInput() {
        return this._agentVersion;
    }
}

export class AgentAliasRoutingConfigurationListItemPropertyList extends cdktn.ComplexList {
    public internalValue? : AgentAliasRoutingConfigurationListItemProperty[] | cdktn.IResolvable

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
    public get(index: number): AgentAliasRoutingConfigurationListItemPropertyOutputReference {
        return new AgentAliasRoutingConfigurationListItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
