// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier of the AgentSpace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#agent_space_id CcAssociation#agent_space_id}
    */
    readonly agentSpaceId: string;
    /**
    * The configuration that directs how AgentSpace interacts with the given service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#configuration CcAssociation#configuration}
    */
    readonly configuration: CcAssociation.ServiceConfigurationProperty;
    /**
    * Set of linked association IDs for parent-child relationships
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#linked_association_ids CcAssociation#linked_association_ids}
    */
    readonly linkedAssociationIds?: string[];
    /**
    * The identifier for the associated service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#service_id CcAssociation#service_id}
    */
    readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association awscc_devopsagent_association}
*/
export class CcAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsagent_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssociation to import
    * @param importFromId The id of the existing CcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association awscc_devopsagent_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsagent_association',
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
        this._agentSpaceId = config.agentSpaceId;
        this._configuration.internalValue = config.configuration;
        this._linkedAssociationIds = config.linkedAssociationIds;
        this._serviceId = config.serviceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_space_id - computed: false, optional: false, required: true
    private _agentSpaceId?: string; 
    public get agentSpaceId() {
        return this.getStringAttribute('agent_space_id');
    }
    public set agentSpaceId(value: string) {
        this._agentSpaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentSpaceIdInput() {
        return this._agentSpaceId;
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcAssociation.ServiceConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcAssociation.ServiceConfigurationProperty) {
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

    // linked_association_ids - computed: true, optional: true, required: false
    private _linkedAssociationIds?: string[]; 
    public get linkedAssociationIds() {
        return this.getListAttribute('linked_association_ids');
    }
    public set linkedAssociationIds(value: string[]) {
        this._linkedAssociationIds = value;
    }
    public resetLinkedAssociationIds() {
        this._linkedAssociationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkedAssociationIdsInput() {
        return this._linkedAssociationIds;
    }

    // service_id - computed: false, optional: false, required: true
    private _serviceId?: string; 
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }
    public set serviceId(value: string) {
        this._serviceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdInput() {
        return this._serviceId;
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
            agent_space_id: cdktn.stringToTerraform(this._agentSpaceId),
            configuration: ccAssociationServiceConfigurationPropertyToTerraform(this._configuration.internalValue),
            linked_association_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._linkedAssociationIds),
            service_id: cdktn.stringToTerraform(this._serviceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_space_id: {
                value: cdktn.stringToHclTerraform(this._agentSpaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: ccAssociationServiceConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAssociation.ServiceConfigurationProperty",
            },
            linked_association_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._linkedAssociationIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            service_id: {
                value: cdktn.stringToHclTerraform(this._serviceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssociationAWSResourcePropertyToTerraform(struct?: CcAssociation.AWSResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        resource_metadata: cdktn.stringToTerraform(struct!.resourceMetadata),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
    }
}


export function ccAssociationAWSResourcePropertyToHclTerraform(struct?: CcAssociation.AWSResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_metadata: {
            value: cdktn.stringToHclTerraform(struct!.resourceMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationKeyValuePairPropertyToTerraform(struct?: CcAssociation.KeyValuePairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssociationKeyValuePairPropertyToHclTerraform(struct?: CcAssociation.KeyValuePairProperty | cdktn.IResolvable): any {
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


export function ccAssociationAWSConfigurationPropertyToTerraform(struct?: CcAssociation.AWSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        account_type: cdktn.stringToTerraform(struct!.accountType),
        assumable_role_arn: cdktn.stringToTerraform(struct!.assumableRoleArn),
        resources: cdktn.listMapper(ccAssociationAWSResourcePropertyToTerraform, false)(struct!.resources),
        tags: cdktn.listMapper(ccAssociationKeyValuePairPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccAssociationAWSConfigurationPropertyToHclTerraform(struct?: CcAssociation.AWSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        account_type: {
            value: cdktn.stringToHclTerraform(struct!.accountType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        assumable_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.assumableRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resources: {
            value: cdktn.listMapperHcl(ccAssociationAWSResourcePropertyToHclTerraform, false)(struct!.resources),
            isBlock: true,
            type: "list",
            storageClassType: "AWSResourcePropertyList",
        },
        tags: {
            value: cdktn.listMapperHcl(ccAssociationKeyValuePairPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "KeyValuePairPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationAzureConfigurationPropertyToTerraform(struct?: CcAssociation.AzureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
    }
}


export function ccAssociationAzureConfigurationPropertyToHclTerraform(struct?: CcAssociation.AzureConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        subscription_id: {
            value: cdktn.stringToHclTerraform(struct!.subscriptionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationDynatraceConfigurationPropertyToTerraform(struct?: CcAssociation.DynatraceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        env_id: cdktn.stringToTerraform(struct!.envId),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccAssociationDynatraceConfigurationPropertyToHclTerraform(struct?: CcAssociation.DynatraceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        env_id: {
            value: cdktn.stringToHclTerraform(struct!.envId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccAssociationEventChannelConfigurationPropertyToTerraform(struct?: CcAssociation.EventChannelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    }
}


export function ccAssociationEventChannelConfigurationPropertyToHclTerraform(struct?: CcAssociation.EventChannelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationGitHubConfigurationPropertyToTerraform(struct?: CcAssociation.GitHubConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        owner: cdktn.stringToTerraform(struct!.owner),
        owner_type: cdktn.stringToTerraform(struct!.ownerType),
        repo_id: cdktn.stringToTerraform(struct!.repoId),
        repo_name: cdktn.stringToTerraform(struct!.repoName),
    }
}


export function ccAssociationGitHubConfigurationPropertyToHclTerraform(struct?: CcAssociation.GitHubConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner_type: {
            value: cdktn.stringToHclTerraform(struct!.ownerType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repo_id: {
            value: cdktn.stringToHclTerraform(struct!.repoId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repo_name: {
            value: cdktn.stringToHclTerraform(struct!.repoName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationGitLabConfigurationPropertyToTerraform(struct?: CcAssociation.GitLabConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        instance_identifier: cdktn.stringToTerraform(struct!.instanceIdentifier),
        project_id: cdktn.stringToTerraform(struct!.projectId),
        project_path: cdktn.stringToTerraform(struct!.projectPath),
    }
}


export function ccAssociationGitLabConfigurationPropertyToHclTerraform(struct?: CcAssociation.GitLabConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_identifier: {
            value: cdktn.stringToHclTerraform(struct!.instanceIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_id: {
            value: cdktn.stringToHclTerraform(struct!.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_path: {
            value: cdktn.stringToHclTerraform(struct!.projectPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationMCPServerConfigurationPropertyToTerraform(struct?: CcAssociation.MCPServerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
        tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
    }
}


export function ccAssociationMCPServerConfigurationPropertyToHclTerraform(struct?: CcAssociation.MCPServerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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
        tools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationMCPServerDatadogConfigurationPropertyToTerraform(struct?: CcAssociation.MCPServerDatadogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssociationMCPServerDatadogConfigurationPropertyToHclTerraform(struct?: CcAssociation.MCPServerDatadogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationMCPServerGrafanaConfigurationPropertyToTerraform(struct?: CcAssociation.MCPServerGrafanaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
    }
}


export function ccAssociationMCPServerGrafanaConfigurationPropertyToHclTerraform(struct?: CcAssociation.MCPServerGrafanaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationMCPServerNewRelicConfigurationPropertyToTerraform(struct?: CcAssociation.MCPServerNewRelicConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
    }
}


export function ccAssociationMCPServerNewRelicConfigurationPropertyToHclTerraform(struct?: CcAssociation.MCPServerNewRelicConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationMCPServerSigV4ConfigurationPropertyToTerraform(struct?: CcAssociation.MCPServerSigV4ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
    }
}


export function ccAssociationMCPServerSigV4ConfigurationPropertyToHclTerraform(struct?: CcAssociation.MCPServerSigV4ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationMCPServerSplunkConfigurationPropertyToTerraform(struct?: CcAssociation.MCPServerSplunkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssociationMCPServerSplunkConfigurationPropertyToHclTerraform(struct?: CcAssociation.MCPServerSplunkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationPagerDutyConfigurationPropertyToTerraform(struct?: CcAssociation.PagerDutyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_email: cdktn.stringToTerraform(struct!.customerEmail),
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        services: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.services),
    }
}


export function ccAssociationPagerDutyConfigurationPropertyToHclTerraform(struct?: CcAssociation.PagerDutyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_email: {
            value: cdktn.stringToHclTerraform(struct!.customerEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        services: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.services),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationServiceNowConfigurationPropertyToTerraform(struct?: CcAssociation.ServiceNowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
        instance_id: cdktn.stringToTerraform(struct!.instanceId),
    }
}


export function ccAssociationServiceNowConfigurationPropertyToHclTerraform(struct?: CcAssociation.ServiceNowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_webhook_updates: {
            value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_id: {
            value: cdktn.stringToHclTerraform(struct!.instanceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationSlackChannelPropertyToTerraform(struct?: CcAssociation.SlackChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_id: cdktn.stringToTerraform(struct!.channelId),
        channel_name: cdktn.stringToTerraform(struct!.channelName),
    }
}


export function ccAssociationSlackChannelPropertyToHclTerraform(struct?: CcAssociation.SlackChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_id: {
            value: cdktn.stringToHclTerraform(struct!.channelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        channel_name: {
            value: cdktn.stringToHclTerraform(struct!.channelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationSlackTransmissionTargetPropertyToTerraform(struct?: CcAssociation.SlackTransmissionTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        incident_response_target: ccAssociationSlackChannelPropertyToTerraform(struct!.incidentResponseTarget),
    }
}


export function ccAssociationSlackTransmissionTargetPropertyToHclTerraform(struct?: CcAssociation.SlackTransmissionTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        incident_response_target: {
            value: ccAssociationSlackChannelPropertyToHclTerraform(struct!.incidentResponseTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackChannelProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationSlackConfigurationPropertyToTerraform(struct?: CcAssociation.SlackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transmission_target: ccAssociationSlackTransmissionTargetPropertyToTerraform(struct!.transmissionTarget),
        workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
        workspace_name: cdktn.stringToTerraform(struct!.workspaceName),
    }
}


export function ccAssociationSlackConfigurationPropertyToHclTerraform(struct?: CcAssociation.SlackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transmission_target: {
            value: ccAssociationSlackTransmissionTargetPropertyToHclTerraform(struct!.transmissionTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackTransmissionTargetProperty",
        },
        workspace_id: {
            value: cdktn.stringToHclTerraform(struct!.workspaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workspace_name: {
            value: cdktn.stringToHclTerraform(struct!.workspaceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationResourcesPropertyToTerraform(struct?: CcAssociation.ResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        resource_metadata: cdktn.stringToTerraform(struct!.resourceMetadata),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
    }
}


export function ccAssociationResourcesPropertyToHclTerraform(struct?: CcAssociation.ResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_metadata: {
            value: cdktn.stringToHclTerraform(struct!.resourceMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationTagsPropertyToTerraform(struct?: CcAssociation.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssociationTagsPropertyToHclTerraform(struct?: CcAssociation.TagsProperty | cdktn.IResolvable): any {
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


export function ccAssociationSourceAwsConfigurationPropertyToTerraform(struct?: CcAssociation.SourceAwsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        account_type: cdktn.stringToTerraform(struct!.accountType),
        assumable_role_arn: cdktn.stringToTerraform(struct!.assumableRoleArn),
        resources: cdktn.listMapper(ccAssociationResourcesPropertyToTerraform, false)(struct!.resources),
        tags: cdktn.listMapper(ccAssociationTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccAssociationSourceAwsConfigurationPropertyToHclTerraform(struct?: CcAssociation.SourceAwsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        account_type: {
            value: cdktn.stringToHclTerraform(struct!.accountType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        assumable_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.assumableRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resources: {
            value: cdktn.listMapperHcl(ccAssociationResourcesPropertyToHclTerraform, false)(struct!.resources),
            isBlock: true,
            type: "list",
            storageClassType: "ResourcesPropertyList",
        },
        tags: {
            value: cdktn.listMapperHcl(ccAssociationTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssociationServiceConfigurationPropertyToTerraform(struct?: CcAssociation.ServiceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws: ccAssociationAWSConfigurationPropertyToTerraform(struct!.aws),
        azure: ccAssociationAzureConfigurationPropertyToTerraform(struct!.azure),
        dynatrace: ccAssociationDynatraceConfigurationPropertyToTerraform(struct!.dynatrace),
        event_channel: ccAssociationEventChannelConfigurationPropertyToTerraform(struct!.eventChannel),
        git_hub: ccAssociationGitHubConfigurationPropertyToTerraform(struct!.gitHub),
        git_lab: ccAssociationGitLabConfigurationPropertyToTerraform(struct!.gitLab),
        mcp_server: ccAssociationMCPServerConfigurationPropertyToTerraform(struct!.mcpServer),
        mcp_server_datadog: ccAssociationMCPServerDatadogConfigurationPropertyToTerraform(struct!.mcpServerDatadog),
        mcp_server_grafana: ccAssociationMCPServerGrafanaConfigurationPropertyToTerraform(struct!.mcpServerGrafana),
        mcp_server_new_relic: ccAssociationMCPServerNewRelicConfigurationPropertyToTerraform(struct!.mcpServerNewRelic),
        mcp_server_sig_v4: ccAssociationMCPServerSigV4ConfigurationPropertyToTerraform(struct!.mcpServerSigV4),
        mcp_server_splunk: ccAssociationMCPServerSplunkConfigurationPropertyToTerraform(struct!.mcpServerSplunk),
        pager_duty: ccAssociationPagerDutyConfigurationPropertyToTerraform(struct!.pagerDuty),
        service_now: ccAssociationServiceNowConfigurationPropertyToTerraform(struct!.serviceNow),
        slack: ccAssociationSlackConfigurationPropertyToTerraform(struct!.slack),
        source_aws: ccAssociationSourceAwsConfigurationPropertyToTerraform(struct!.sourceAws),
    }
}


export function ccAssociationServiceConfigurationPropertyToHclTerraform(struct?: CcAssociation.ServiceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws: {
            value: ccAssociationAWSConfigurationPropertyToHclTerraform(struct!.aws),
            isBlock: true,
            type: "struct",
            storageClassType: "AWSConfigurationProperty",
        },
        azure: {
            value: ccAssociationAzureConfigurationPropertyToHclTerraform(struct!.azure),
            isBlock: true,
            type: "struct",
            storageClassType: "AzureConfigurationProperty",
        },
        dynatrace: {
            value: ccAssociationDynatraceConfigurationPropertyToHclTerraform(struct!.dynatrace),
            isBlock: true,
            type: "struct",
            storageClassType: "DynatraceConfigurationProperty",
        },
        event_channel: {
            value: ccAssociationEventChannelConfigurationPropertyToHclTerraform(struct!.eventChannel),
            isBlock: true,
            type: "struct",
            storageClassType: "EventChannelConfigurationProperty",
        },
        git_hub: {
            value: ccAssociationGitHubConfigurationPropertyToHclTerraform(struct!.gitHub),
            isBlock: true,
            type: "struct",
            storageClassType: "GitHubConfigurationProperty",
        },
        git_lab: {
            value: ccAssociationGitLabConfigurationPropertyToHclTerraform(struct!.gitLab),
            isBlock: true,
            type: "struct",
            storageClassType: "GitLabConfigurationProperty",
        },
        mcp_server: {
            value: ccAssociationMCPServerConfigurationPropertyToHclTerraform(struct!.mcpServer),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerConfigurationProperty",
        },
        mcp_server_datadog: {
            value: ccAssociationMCPServerDatadogConfigurationPropertyToHclTerraform(struct!.mcpServerDatadog),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerDatadogConfigurationProperty",
        },
        mcp_server_grafana: {
            value: ccAssociationMCPServerGrafanaConfigurationPropertyToHclTerraform(struct!.mcpServerGrafana),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerGrafanaConfigurationProperty",
        },
        mcp_server_new_relic: {
            value: ccAssociationMCPServerNewRelicConfigurationPropertyToHclTerraform(struct!.mcpServerNewRelic),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerNewRelicConfigurationProperty",
        },
        mcp_server_sig_v4: {
            value: ccAssociationMCPServerSigV4ConfigurationPropertyToHclTerraform(struct!.mcpServerSigV4),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerSigV4ConfigurationProperty",
        },
        mcp_server_splunk: {
            value: ccAssociationMCPServerSplunkConfigurationPropertyToHclTerraform(struct!.mcpServerSplunk),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPServerSplunkConfigurationProperty",
        },
        pager_duty: {
            value: ccAssociationPagerDutyConfigurationPropertyToHclTerraform(struct!.pagerDuty),
            isBlock: true,
            type: "struct",
            storageClassType: "PagerDutyConfigurationProperty",
        },
        service_now: {
            value: ccAssociationServiceNowConfigurationPropertyToHclTerraform(struct!.serviceNow),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowConfigurationProperty",
        },
        slack: {
            value: ccAssociationSlackConfigurationPropertyToHclTerraform(struct!.slack),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackConfigurationProperty",
        },
        source_aws: {
            value: ccAssociationSourceAwsConfigurationPropertyToHclTerraform(struct!.sourceAws),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceAwsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAssociation {
export interface AWSResourceProperty {
    /**
    * The Amazon Resource Name (ARN) of the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resource_arn CcAssociation#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * Additional metadata for the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resource_metadata CcAssociation#resource_metadata}
    */
    readonly resourceMetadata?: string;
    /**
    * Resource type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resource_type CcAssociation#resource_type}
    */
    readonly resourceType?: string;
}
export class AWSResourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AWSResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._resourceMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceMetadata = this._resourceMetadata;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AWSResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceArn = undefined;
            this._resourceMetadata = undefined;
            this._resourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceArn = value.resourceArn;
            this._resourceMetadata = value.resourceMetadata;
            this._resourceType = value.resourceType;
        }
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // resource_metadata - computed: true, optional: true, required: false
    private _resourceMetadata?: string; 
    public get resourceMetadata() {
        return this.getStringAttribute('resource_metadata');
    }
    public set resourceMetadata(value: string) {
        this._resourceMetadata = value;
    }
    public resetResourceMetadata() {
        this._resourceMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceMetadataInput() {
        return this._resourceMetadata;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }
}

export class AWSResourcePropertyList extends cdktn.ComplexList {
    public internalValue? : AWSResourceProperty[] | cdktn.IResolvable

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
    public get(index: number): AWSResourcePropertyOutputReference {
        return new AWSResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KeyValuePairProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#key CcAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#value CcAssociation#value}
    */
    readonly value?: string;
}
export class KeyValuePairPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyValuePairProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: KeyValuePairProperty | cdktn.IResolvable | undefined) {
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

export class KeyValuePairPropertyList extends cdktn.ComplexList {
    public internalValue? : KeyValuePairProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyValuePairPropertyOutputReference {
        return new KeyValuePairPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AWSConfigurationProperty {
    /**
    * AWS Account Id corresponding to provided resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#account_id CcAssociation#account_id}
    */
    readonly accountId?: string;
    /**
    * Account Type 'monitor' for DevOpsAgent monitoring
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#account_type CcAssociation#account_type}
    */
    readonly accountType?: string;
    /**
    * Role ARN to be assumed by DevOpsAgent to operate on behalf of customer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#assumable_role_arn CcAssociation#assumable_role_arn}
    */
    readonly assumableRoleArn?: string;
    /**
    * List of AWS resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resources CcAssociation#resources}
    */
    readonly resources?: AWSResourceProperty[] | cdktn.IResolvable;
    /**
    * List of AWS tags as key-value pairs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#tags CcAssociation#tags}
    */
    readonly tags?: KeyValuePairProperty[] | cdktn.IResolvable;
}
export class AWSConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AWSConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._accountType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountType = this._accountType;
        }
        if (this._assumableRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.assumableRoleArn = this._assumableRoleArn;
        }
        if (this._resources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources?.internalValue;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AWSConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._accountType = undefined;
            this._assumableRoleArn = undefined;
            this._resources.internalValue = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._accountType = value.accountType;
            this._assumableRoleArn = value.assumableRoleArn;
            this._resources.internalValue = value.resources;
            this._tags.internalValue = value.tags;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // account_type - computed: true, optional: true, required: false
    private _accountType?: string; 
    public get accountType() {
        return this.getStringAttribute('account_type');
    }
    public set accountType(value: string) {
        this._accountType = value;
    }
    public resetAccountType() {
        this._accountType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountTypeInput() {
        return this._accountType;
    }

    // assumable_role_arn - computed: true, optional: true, required: false
    private _assumableRoleArn?: string; 
    public get assumableRoleArn() {
        return this.getStringAttribute('assumable_role_arn');
    }
    public set assumableRoleArn(value: string) {
        this._assumableRoleArn = value;
    }
    public resetAssumableRoleArn() {
        this._assumableRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assumableRoleArnInput() {
        return this._assumableRoleArn;
    }

    // resources - computed: true, optional: true, required: false
    private _resources = new AWSResourcePropertyList(this, "resources", false);
    public get resources() {
        return this._resources;
    }
    public putResources(value: AWSResourceProperty[] | cdktn.IResolvable) {
        this._resources.internalValue = value;
    }
    public resetResources() {
        this._resources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new KeyValuePairPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: KeyValuePairProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface AzureConfigurationProperty {
    /**
    * Azure subscription ID corresponding to provided resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#subscription_id CcAssociation#subscription_id}
    */
    readonly subscriptionId?: string;
}
export class AzureConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AzureConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subscriptionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscriptionId = this._subscriptionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AzureConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subscriptionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subscriptionId = value.subscriptionId;
        }
    }

    // subscription_id - computed: true, optional: true, required: false
    private _subscriptionId?: string; 
    public get subscriptionId() {
        return this.getStringAttribute('subscription_id');
    }
    public set subscriptionId(value: string) {
        this._subscriptionId = value;
    }
    public resetSubscriptionId() {
        this._subscriptionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionIdInput() {
        return this._subscriptionId;
    }
}
export interface DynatraceConfigurationProperty {
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * Dynatrace environment id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#env_id CcAssociation#env_id}
    */
    readonly envId?: string;
    /**
    * List of Dynatrace resources to monitor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resources CcAssociation#resources}
    */
    readonly resources?: string[];
}
export class DynatraceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._envId !== undefined) {
            hasAnyValues = true;
            internalValueResult.envId = this._envId;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = undefined;
            this._envId = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._envId = value.envId;
            this._resources = value.resources;
        }
    }

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // env_id - computed: true, optional: true, required: false
    private _envId?: string; 
    public get envId() {
        return this.getStringAttribute('env_id');
    }
    public set envId(value: string) {
        this._envId = value;
    }
    public resetEnvId() {
        this._envId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get envIdInput() {
        return this._envId;
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
export interface EventChannelConfigurationProperty {
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
}
export class EventChannelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventChannelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventChannelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
        }
    }

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }
}
export interface GitHubConfigurationProperty {
    /**
    * Repository owner
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#owner CcAssociation#owner}
    */
    readonly owner?: string;
    /**
    * Type of repository owner
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#owner_type CcAssociation#owner_type}
    */
    readonly ownerType?: string;
    /**
    * Associated Github repo ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#repo_id CcAssociation#repo_id}
    */
    readonly repoId?: string;
    /**
    * Associated Github repo name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#repo_name CcAssociation#repo_name}
    */
    readonly repoName?: string;
}
export class GitHubConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitHubConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._ownerType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ownerType = this._ownerType;
        }
        if (this._repoId !== undefined) {
            hasAnyValues = true;
            internalValueResult.repoId = this._repoId;
        }
        if (this._repoName !== undefined) {
            hasAnyValues = true;
            internalValueResult.repoName = this._repoName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitHubConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._owner = undefined;
            this._ownerType = undefined;
            this._repoId = undefined;
            this._repoName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._owner = value.owner;
            this._ownerType = value.ownerType;
            this._repoId = value.repoId;
            this._repoName = value.repoName;
        }
    }

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // owner_type - computed: true, optional: true, required: false
    private _ownerType?: string; 
    public get ownerType() {
        return this.getStringAttribute('owner_type');
    }
    public set ownerType(value: string) {
        this._ownerType = value;
    }
    public resetOwnerType() {
        this._ownerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerTypeInput() {
        return this._ownerType;
    }

    // repo_id - computed: true, optional: true, required: false
    private _repoId?: string; 
    public get repoId() {
        return this.getStringAttribute('repo_id');
    }
    public set repoId(value: string) {
        this._repoId = value;
    }
    public resetRepoId() {
        this._repoId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repoIdInput() {
        return this._repoId;
    }

    // repo_name - computed: true, optional: true, required: false
    private _repoName?: string; 
    public get repoName() {
        return this.getStringAttribute('repo_name');
    }
    public set repoName(value: string) {
        this._repoName = value;
    }
    public resetRepoName() {
        this._repoName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repoNameInput() {
        return this._repoName;
    }
}
export interface GitLabConfigurationProperty {
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * GitLab instance identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#instance_identifier CcAssociation#instance_identifier}
    */
    readonly instanceIdentifier?: string;
    /**
    * GitLab numeric project ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#project_id CcAssociation#project_id}
    */
    readonly projectId?: string;
    /**
    * Full GitLab project path (e.g., namespace/project-name)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#project_path CcAssociation#project_path}
    */
    readonly projectPath?: string;
}
export class GitLabConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitLabConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._instanceIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceIdentifier = this._instanceIdentifier;
        }
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        if (this._projectPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectPath = this._projectPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitLabConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = undefined;
            this._instanceIdentifier = undefined;
            this._projectId = undefined;
            this._projectPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._instanceIdentifier = value.instanceIdentifier;
            this._projectId = value.projectId;
            this._projectPath = value.projectPath;
        }
    }

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // instance_identifier - computed: true, optional: true, required: false
    private _instanceIdentifier?: string; 
    public get instanceIdentifier() {
        return this.getStringAttribute('instance_identifier');
    }
    public set instanceIdentifier(value: string) {
        this._instanceIdentifier = value;
    }
    public resetInstanceIdentifier() {
        this._instanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdentifierInput() {
        return this._instanceIdentifier;
    }

    // project_id - computed: true, optional: true, required: false
    private _projectId?: string; 
    public get projectId() {
        return this.getStringAttribute('project_id');
    }
    public set projectId(value: string) {
        this._projectId = value;
    }
    public resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdInput() {
        return this._projectId;
    }

    // project_path - computed: true, optional: true, required: false
    private _projectPath?: string; 
    public get projectPath() {
        return this.getStringAttribute('project_path');
    }
    public set projectPath(value: string) {
        this._projectPath = value;
    }
    public resetProjectPath() {
        this._projectPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectPathInput() {
        return this._projectPath;
    }
}
export interface MCPServerConfigurationProperty {
    /**
    * The description of the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#description CcAssociation#description}
    */
    readonly description?: string;
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#endpoint CcAssociation#endpoint}
    */
    readonly endpoint?: string;
    /**
    * The name of the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#name CcAssociation#name}
    */
    readonly name?: string;
    /**
    * List of MCP tools that can be used with the association
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#tools CcAssociation#tools}
    */
    readonly tools?: string[];
}
export class MCPServerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._tools !== undefined) {
            hasAnyValues = true;
            internalValueResult.tools = this._tools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._enableWebhookUpdates = undefined;
            this._endpoint = undefined;
            this._name = undefined;
            this._tools = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._endpoint = value.endpoint;
            this._name = value.name;
            this._tools = value.tools;
        }
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

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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

    // tools - computed: true, optional: true, required: false
    private _tools?: string[]; 
    public get tools() {
        return this.getListAttribute('tools');
    }
    public set tools(value: string[]) {
        this._tools = value;
    }
    public resetTools() {
        this._tools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolsInput() {
        return this._tools;
    }
}
export interface MCPServerDatadogConfigurationProperty {
    /**
    * The description of the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#description CcAssociation#description}
    */
    readonly description?: string;
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#endpoint CcAssociation#endpoint}
    */
    readonly endpoint?: string;
    /**
    * The name of the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#name CcAssociation#name}
    */
    readonly name?: string;
}
export class MCPServerDatadogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerDatadogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerDatadogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._enableWebhookUpdates = undefined;
            this._endpoint = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._endpoint = value.endpoint;
            this._name = value.name;
        }
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

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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
export interface MCPServerGrafanaConfigurationProperty {
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#endpoint CcAssociation#endpoint}
    */
    readonly endpoint?: string;
    /**
    * List of tool categories to enable for the Grafana MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#tools CcAssociation#tools}
    */
    readonly tools?: string[];
}
export class MCPServerGrafanaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerGrafanaConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._tools !== undefined) {
            hasAnyValues = true;
            internalValueResult.tools = this._tools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerGrafanaConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = undefined;
            this._endpoint = undefined;
            this._tools = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._endpoint = value.endpoint;
            this._tools = value.tools;
        }
    }

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }

    // tools - computed: true, optional: true, required: false
    private _tools?: string[]; 
    public get tools() {
        return this.getListAttribute('tools');
    }
    public set tools(value: string[]) {
        this._tools = value;
    }
    public resetTools() {
        this._tools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolsInput() {
        return this._tools;
    }
}
export interface MCPServerNewRelicConfigurationProperty {
    /**
    * New Relic Account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#account_id CcAssociation#account_id}
    */
    readonly accountId?: string;
    /**
    * MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#endpoint CcAssociation#endpoint}
    */
    readonly endpoint?: string;
}
export class MCPServerNewRelicConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerNewRelicConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerNewRelicConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._endpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._endpoint = value.endpoint;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }
}
export interface MCPServerSigV4ConfigurationProperty {
    /**
    * List of MCP tools available for the association
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#tools CcAssociation#tools}
    */
    readonly tools?: string[];
}
export class MCPServerSigV4ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerSigV4ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tools !== undefined) {
            hasAnyValues = true;
            internalValueResult.tools = this._tools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerSigV4ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tools = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tools = value.tools;
        }
    }

    // tools - computed: true, optional: true, required: false
    private _tools?: string[]; 
    public get tools() {
        return this.getListAttribute('tools');
    }
    public set tools(value: string[]) {
        this._tools = value;
    }
    public resetTools() {
        this._tools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolsInput() {
        return this._tools;
    }
}
export interface MCPServerSplunkConfigurationProperty {
    /**
    * The description of the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#description CcAssociation#description}
    */
    readonly description?: string;
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * MCP server endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#endpoint CcAssociation#endpoint}
    */
    readonly endpoint?: string;
    /**
    * The name of the MCP server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#name CcAssociation#name}
    */
    readonly name?: string;
}
export class MCPServerSplunkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPServerSplunkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPServerSplunkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._enableWebhookUpdates = undefined;
            this._endpoint = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._endpoint = value.endpoint;
            this._name = value.name;
        }
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

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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
export interface PagerDutyConfigurationProperty {
    /**
    * Email to be used in PagerDuty API header
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#customer_email CcAssociation#customer_email}
    */
    readonly customerEmail?: string;
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * List of PagerDuty service IDs available for the association
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#services CcAssociation#services}
    */
    readonly services?: string[];
}
export class PagerDutyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PagerDutyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerEmail = this._customerEmail;
        }
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._services !== undefined) {
            hasAnyValues = true;
            internalValueResult.services = this._services;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PagerDutyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerEmail = undefined;
            this._enableWebhookUpdates = undefined;
            this._services = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerEmail = value.customerEmail;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._services = value.services;
        }
    }

    // customer_email - computed: true, optional: true, required: false
    private _customerEmail?: string; 
    public get customerEmail() {
        return this.getStringAttribute('customer_email');
    }
    public set customerEmail(value: string) {
        this._customerEmail = value;
    }
    public resetCustomerEmail() {
        this._customerEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerEmailInput() {
        return this._customerEmail;
    }

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // services - computed: true, optional: true, required: false
    private _services?: string[]; 
    public get services() {
        return this.getListAttribute('services');
    }
    public set services(value: string[]) {
        this._services = value;
    }
    public resetServices() {
        this._services = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get servicesInput() {
        return this._services;
    }
}
export interface ServiceNowConfigurationProperty {
    /**
    * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#enable_webhook_updates CcAssociation#enable_webhook_updates}
    */
    readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
    /**
    * ServiceNow instance ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#instance_id CcAssociation#instance_id}
    */
    readonly instanceId?: string;
}
export class ServiceNowConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableWebhookUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
        }
        if (this._instanceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceId = this._instanceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = undefined;
            this._instanceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableWebhookUpdates = value.enableWebhookUpdates;
            this._instanceId = value.instanceId;
        }
    }

    // enable_webhook_updates - computed: true, optional: true, required: false
    private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
    public get enableWebhookUpdates() {
        return this.getBooleanAttribute('enable_webhook_updates');
    }
    public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
        this._enableWebhookUpdates = value;
    }
    public resetEnableWebhookUpdates() {
        this._enableWebhookUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWebhookUpdatesInput() {
        return this._enableWebhookUpdates;
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }
}
export interface SlackChannelProperty {
    /**
    * Slack channel ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#channel_id CcAssociation#channel_id}
    */
    readonly channelId?: string;
    /**
    * Slack channel name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#channel_name CcAssociation#channel_name}
    */
    readonly channelName?: string;
}
export class SlackChannelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackChannelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelId = this._channelId;
        }
        if (this._channelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelName = this._channelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackChannelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelId = undefined;
            this._channelName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelId = value.channelId;
            this._channelName = value.channelName;
        }
    }

    // channel_id - computed: true, optional: true, required: false
    private _channelId?: string; 
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }
    public set channelId(value: string) {
        this._channelId = value;
    }
    public resetChannelId() {
        this._channelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelIdInput() {
        return this._channelId;
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }
}
export interface SlackTransmissionTargetProperty {
    /**
    * Destination for IncidentResponse agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#incident_response_target CcAssociation#incident_response_target}
    */
    readonly incidentResponseTarget?: SlackChannelProperty;
}
export class SlackTransmissionTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackTransmissionTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._incidentResponseTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.incidentResponseTarget = this._incidentResponseTarget?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackTransmissionTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._incidentResponseTarget.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._incidentResponseTarget.internalValue = value.incidentResponseTarget;
        }
    }

    // incident_response_target - computed: true, optional: true, required: false
    private _incidentResponseTarget = new SlackChannelPropertyOutputReference(this, "incident_response_target");
    public get incidentResponseTarget() {
        return this._incidentResponseTarget;
    }
    public putIncidentResponseTarget(value: SlackChannelProperty) {
        this._incidentResponseTarget.internalValue = value;
    }
    public resetIncidentResponseTarget() {
        this._incidentResponseTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incidentResponseTargetInput() {
        return this._incidentResponseTarget.internalValue;
    }
}
export interface SlackConfigurationProperty {
    /**
    * Transmission targets for agent notifications
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#transmission_target CcAssociation#transmission_target}
    */
    readonly transmissionTarget?: SlackTransmissionTargetProperty;
    /**
    * Associated Slack workspace ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#workspace_id CcAssociation#workspace_id}
    */
    readonly workspaceId?: string;
    /**
    * Associated Slack workspace name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#workspace_name CcAssociation#workspace_name}
    */
    readonly workspaceName?: string;
}
export class SlackConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transmissionTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transmissionTarget = this._transmissionTarget?.internalValue;
        }
        if (this._workspaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.workspaceId = this._workspaceId;
        }
        if (this._workspaceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.workspaceName = this._workspaceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transmissionTarget.internalValue = undefined;
            this._workspaceId = undefined;
            this._workspaceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transmissionTarget.internalValue = value.transmissionTarget;
            this._workspaceId = value.workspaceId;
            this._workspaceName = value.workspaceName;
        }
    }

    // transmission_target - computed: true, optional: true, required: false
    private _transmissionTarget = new SlackTransmissionTargetPropertyOutputReference(this, "transmission_target");
    public get transmissionTarget() {
        return this._transmissionTarget;
    }
    public putTransmissionTarget(value: SlackTransmissionTargetProperty) {
        this._transmissionTarget.internalValue = value;
    }
    public resetTransmissionTarget() {
        this._transmissionTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transmissionTargetInput() {
        return this._transmissionTarget.internalValue;
    }

    // workspace_id - computed: true, optional: true, required: false
    private _workspaceId?: string; 
    public get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }
    public set workspaceId(value: string) {
        this._workspaceId = value;
    }
    public resetWorkspaceId() {
        this._workspaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceIdInput() {
        return this._workspaceId;
    }

    // workspace_name - computed: true, optional: true, required: false
    private _workspaceName?: string; 
    public get workspaceName() {
        return this.getStringAttribute('workspace_name');
    }
    public set workspaceName(value: string) {
        this._workspaceName = value;
    }
    public resetWorkspaceName() {
        this._workspaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceNameInput() {
        return this._workspaceName;
    }
}
export interface ResourcesProperty {
    /**
    * The Amazon Resource Name (ARN) of the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resource_arn CcAssociation#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * Additional metadata for the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resource_metadata CcAssociation#resource_metadata}
    */
    readonly resourceMetadata?: string;
    /**
    * Resource type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resource_type CcAssociation#resource_type}
    */
    readonly resourceType?: string;
}
export class ResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._resourceMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceMetadata = this._resourceMetadata;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceArn = undefined;
            this._resourceMetadata = undefined;
            this._resourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceArn = value.resourceArn;
            this._resourceMetadata = value.resourceMetadata;
            this._resourceType = value.resourceType;
        }
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // resource_metadata - computed: true, optional: true, required: false
    private _resourceMetadata?: string; 
    public get resourceMetadata() {
        return this.getStringAttribute('resource_metadata');
    }
    public set resourceMetadata(value: string) {
        this._resourceMetadata = value;
    }
    public resetResourceMetadata() {
        this._resourceMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceMetadataInput() {
        return this._resourceMetadata;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }
}

export class ResourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcesPropertyOutputReference {
        return new ResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#key CcAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#value CcAssociation#value}
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
export interface SourceAwsConfigurationProperty {
    /**
    * AWS Account Id corresponding to provided resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#account_id CcAssociation#account_id}
    */
    readonly accountId?: string;
    /**
    * Account Type 'source' for DevOpsAgent monitoring
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#account_type CcAssociation#account_type}
    */
    readonly accountType?: string;
    /**
    * Role ARN to be assumed by DevOpsAgent to operate on behalf of customer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#assumable_role_arn CcAssociation#assumable_role_arn}
    */
    readonly assumableRoleArn?: string;
    /**
    * List of AWS resources
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#resources CcAssociation#resources}
    */
    readonly resources?: ResourcesProperty[] | cdktn.IResolvable;
    /**
    * List of AWS tags as key-value pairs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#tags CcAssociation#tags}
    */
    readonly tags?: TagsProperty[] | cdktn.IResolvable;
}
export class SourceAwsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceAwsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._accountType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountType = this._accountType;
        }
        if (this._assumableRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.assumableRoleArn = this._assumableRoleArn;
        }
        if (this._resources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources?.internalValue;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceAwsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._accountType = undefined;
            this._assumableRoleArn = undefined;
            this._resources.internalValue = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._accountType = value.accountType;
            this._assumableRoleArn = value.assumableRoleArn;
            this._resources.internalValue = value.resources;
            this._tags.internalValue = value.tags;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // account_type - computed: true, optional: true, required: false
    private _accountType?: string; 
    public get accountType() {
        return this.getStringAttribute('account_type');
    }
    public set accountType(value: string) {
        this._accountType = value;
    }
    public resetAccountType() {
        this._accountType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountTypeInput() {
        return this._accountType;
    }

    // assumable_role_arn - computed: true, optional: true, required: false
    private _assumableRoleArn?: string; 
    public get assumableRoleArn() {
        return this.getStringAttribute('assumable_role_arn');
    }
    public set assumableRoleArn(value: string) {
        this._assumableRoleArn = value;
    }
    public resetAssumableRoleArn() {
        this._assumableRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assumableRoleArnInput() {
        return this._assumableRoleArn;
    }

    // resources - computed: true, optional: true, required: false
    private _resources = new ResourcesPropertyList(this, "resources", false);
    public get resources() {
        return this._resources;
    }
    public putResources(value: ResourcesProperty[] | cdktn.IResolvable) {
        this._resources.internalValue = value;
    }
    public resetResources() {
        this._resources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface ServiceConfigurationProperty {
    /**
    * AWS association for 'monitor' account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#aws CcAssociation#aws}
    */
    readonly aws?: AWSConfigurationProperty;
    /**
    * Azure subscription integration configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#azure CcAssociation#azure}
    */
    readonly azure?: AzureConfigurationProperty;
    /**
    * Dynatrace monitoring configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#dynatrace CcAssociation#dynatrace}
    */
    readonly dynatrace?: DynatraceConfigurationProperty;
    /**
    * EventChannelconfiguration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#event_channel CcAssociation#event_channel}
    */
    readonly eventChannel?: EventChannelConfigurationProperty;
    /**
    * GitHub repository integration configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#git_hub CcAssociation#git_hub}
    */
    readonly gitHub?: GitHubConfigurationProperty;
    /**
    * GitLab project integration configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#git_lab CcAssociation#git_lab}
    */
    readonly gitLab?: GitLabConfigurationProperty;
    /**
    * MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#mcp_server CcAssociation#mcp_server}
    */
    readonly mcpServer?: MCPServerConfigurationProperty;
    /**
    * Datadog MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#mcp_server_datadog CcAssociation#mcp_server_datadog}
    */
    readonly mcpServerDatadog?: MCPServerDatadogConfigurationProperty;
    /**
    * Grafana MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#mcp_server_grafana CcAssociation#mcp_server_grafana}
    */
    readonly mcpServerGrafana?: MCPServerGrafanaConfigurationProperty;
    /**
    * NewRelic MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#mcp_server_new_relic CcAssociation#mcp_server_new_relic}
    */
    readonly mcpServerNewRelic?: MCPServerNewRelicConfigurationProperty;
    /**
    * SigV4-authenticated MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#mcp_server_sig_v4 CcAssociation#mcp_server_sig_v4}
    */
    readonly mcpServerSigV4?: MCPServerSigV4ConfigurationProperty;
    /**
    * Splunk MCP server configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#mcp_server_splunk CcAssociation#mcp_server_splunk}
    */
    readonly mcpServerSplunk?: MCPServerSplunkConfigurationProperty;
    /**
    * PagerDuty integration configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#pager_duty CcAssociation#pager_duty}
    */
    readonly pagerDuty?: PagerDutyConfigurationProperty;
    /**
    * ServiceNow integration configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#service_now CcAssociation#service_now}
    */
    readonly serviceNow?: ServiceNowConfigurationProperty;
    /**
    * Slack workspace integration configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#slack CcAssociation#slack}
    */
    readonly slack?: SlackConfigurationProperty;
    /**
    * AWS association for 'source' account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_association#source_aws CcAssociation#source_aws}
    */
    readonly sourceAws?: SourceAwsConfigurationProperty;
}
export class ServiceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aws?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aws = this._aws?.internalValue;
        }
        if (this._azure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.azure = this._azure?.internalValue;
        }
        if (this._dynatrace?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynatrace = this._dynatrace?.internalValue;
        }
        if (this._eventChannel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventChannel = this._eventChannel?.internalValue;
        }
        if (this._gitHub?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitHub = this._gitHub?.internalValue;
        }
        if (this._gitLab?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitLab = this._gitLab?.internalValue;
        }
        if (this._mcpServer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServer = this._mcpServer?.internalValue;
        }
        if (this._mcpServerDatadog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerDatadog = this._mcpServerDatadog?.internalValue;
        }
        if (this._mcpServerGrafana?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerGrafana = this._mcpServerGrafana?.internalValue;
        }
        if (this._mcpServerNewRelic?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerNewRelic = this._mcpServerNewRelic?.internalValue;
        }
        if (this._mcpServerSigV4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerSigV4 = this._mcpServerSigV4?.internalValue;
        }
        if (this._mcpServerSplunk?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServerSplunk = this._mcpServerSplunk?.internalValue;
        }
        if (this._pagerDuty?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerDuty = this._pagerDuty?.internalValue;
        }
        if (this._serviceNow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow?.internalValue;
        }
        if (this._slack?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slack = this._slack?.internalValue;
        }
        if (this._sourceAws?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAws = this._sourceAws?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aws.internalValue = undefined;
            this._azure.internalValue = undefined;
            this._dynatrace.internalValue = undefined;
            this._eventChannel.internalValue = undefined;
            this._gitHub.internalValue = undefined;
            this._gitLab.internalValue = undefined;
            this._mcpServer.internalValue = undefined;
            this._mcpServerDatadog.internalValue = undefined;
            this._mcpServerGrafana.internalValue = undefined;
            this._mcpServerNewRelic.internalValue = undefined;
            this._mcpServerSigV4.internalValue = undefined;
            this._mcpServerSplunk.internalValue = undefined;
            this._pagerDuty.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
            this._slack.internalValue = undefined;
            this._sourceAws.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aws.internalValue = value.aws;
            this._azure.internalValue = value.azure;
            this._dynatrace.internalValue = value.dynatrace;
            this._eventChannel.internalValue = value.eventChannel;
            this._gitHub.internalValue = value.gitHub;
            this._gitLab.internalValue = value.gitLab;
            this._mcpServer.internalValue = value.mcpServer;
            this._mcpServerDatadog.internalValue = value.mcpServerDatadog;
            this._mcpServerGrafana.internalValue = value.mcpServerGrafana;
            this._mcpServerNewRelic.internalValue = value.mcpServerNewRelic;
            this._mcpServerSigV4.internalValue = value.mcpServerSigV4;
            this._mcpServerSplunk.internalValue = value.mcpServerSplunk;
            this._pagerDuty.internalValue = value.pagerDuty;
            this._serviceNow.internalValue = value.serviceNow;
            this._slack.internalValue = value.slack;
            this._sourceAws.internalValue = value.sourceAws;
        }
    }

    // aws - computed: true, optional: true, required: false
    private _aws = new AWSConfigurationPropertyOutputReference(this, "aws");
    public get aws() {
        return this._aws;
    }
    public putAws(value: AWSConfigurationProperty) {
        this._aws.internalValue = value;
    }
    public resetAws() {
        this._aws.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsInput() {
        return this._aws.internalValue;
    }

    // azure - computed: true, optional: true, required: false
    private _azure = new AzureConfigurationPropertyOutputReference(this, "azure");
    public get azure() {
        return this._azure;
    }
    public putAzure(value: AzureConfigurationProperty) {
        this._azure.internalValue = value;
    }
    public resetAzure() {
        this._azure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azureInput() {
        return this._azure.internalValue;
    }

    // dynatrace - computed: true, optional: true, required: false
    private _dynatrace = new DynatraceConfigurationPropertyOutputReference(this, "dynatrace");
    public get dynatrace() {
        return this._dynatrace;
    }
    public putDynatrace(value: DynatraceConfigurationProperty) {
        this._dynatrace.internalValue = value;
    }
    public resetDynatrace() {
        this._dynatrace.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynatraceInput() {
        return this._dynatrace.internalValue;
    }

    // event_channel - computed: true, optional: true, required: false
    private _eventChannel = new EventChannelConfigurationPropertyOutputReference(this, "event_channel");
    public get eventChannel() {
        return this._eventChannel;
    }
    public putEventChannel(value: EventChannelConfigurationProperty) {
        this._eventChannel.internalValue = value;
    }
    public resetEventChannel() {
        this._eventChannel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventChannelInput() {
        return this._eventChannel.internalValue;
    }

    // git_hub - computed: true, optional: true, required: false
    private _gitHub = new GitHubConfigurationPropertyOutputReference(this, "git_hub");
    public get gitHub() {
        return this._gitHub;
    }
    public putGitHub(value: GitHubConfigurationProperty) {
        this._gitHub.internalValue = value;
    }
    public resetGitHub() {
        this._gitHub.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitHubInput() {
        return this._gitHub.internalValue;
    }

    // git_lab - computed: true, optional: true, required: false
    private _gitLab = new GitLabConfigurationPropertyOutputReference(this, "git_lab");
    public get gitLab() {
        return this._gitLab;
    }
    public putGitLab(value: GitLabConfigurationProperty) {
        this._gitLab.internalValue = value;
    }
    public resetGitLab() {
        this._gitLab.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitLabInput() {
        return this._gitLab.internalValue;
    }

    // mcp_server - computed: true, optional: true, required: false
    private _mcpServer = new MCPServerConfigurationPropertyOutputReference(this, "mcp_server");
    public get mcpServer() {
        return this._mcpServer;
    }
    public putMcpServer(value: MCPServerConfigurationProperty) {
        this._mcpServer.internalValue = value;
    }
    public resetMcpServer() {
        this._mcpServer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerInput() {
        return this._mcpServer.internalValue;
    }

    // mcp_server_datadog - computed: true, optional: true, required: false
    private _mcpServerDatadog = new MCPServerDatadogConfigurationPropertyOutputReference(this, "mcp_server_datadog");
    public get mcpServerDatadog() {
        return this._mcpServerDatadog;
    }
    public putMcpServerDatadog(value: MCPServerDatadogConfigurationProperty) {
        this._mcpServerDatadog.internalValue = value;
    }
    public resetMcpServerDatadog() {
        this._mcpServerDatadog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerDatadogInput() {
        return this._mcpServerDatadog.internalValue;
    }

    // mcp_server_grafana - computed: true, optional: true, required: false
    private _mcpServerGrafana = new MCPServerGrafanaConfigurationPropertyOutputReference(this, "mcp_server_grafana");
    public get mcpServerGrafana() {
        return this._mcpServerGrafana;
    }
    public putMcpServerGrafana(value: MCPServerGrafanaConfigurationProperty) {
        this._mcpServerGrafana.internalValue = value;
    }
    public resetMcpServerGrafana() {
        this._mcpServerGrafana.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerGrafanaInput() {
        return this._mcpServerGrafana.internalValue;
    }

    // mcp_server_new_relic - computed: true, optional: true, required: false
    private _mcpServerNewRelic = new MCPServerNewRelicConfigurationPropertyOutputReference(this, "mcp_server_new_relic");
    public get mcpServerNewRelic() {
        return this._mcpServerNewRelic;
    }
    public putMcpServerNewRelic(value: MCPServerNewRelicConfigurationProperty) {
        this._mcpServerNewRelic.internalValue = value;
    }
    public resetMcpServerNewRelic() {
        this._mcpServerNewRelic.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerNewRelicInput() {
        return this._mcpServerNewRelic.internalValue;
    }

    // mcp_server_sig_v4 - computed: true, optional: true, required: false
    private _mcpServerSigV4 = new MCPServerSigV4ConfigurationPropertyOutputReference(this, "mcp_server_sig_v4");
    public get mcpServerSigV4() {
        return this._mcpServerSigV4;
    }
    public putMcpServerSigV4(value: MCPServerSigV4ConfigurationProperty) {
        this._mcpServerSigV4.internalValue = value;
    }
    public resetMcpServerSigV4() {
        this._mcpServerSigV4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerSigV4Input() {
        return this._mcpServerSigV4.internalValue;
    }

    // mcp_server_splunk - computed: true, optional: true, required: false
    private _mcpServerSplunk = new MCPServerSplunkConfigurationPropertyOutputReference(this, "mcp_server_splunk");
    public get mcpServerSplunk() {
        return this._mcpServerSplunk;
    }
    public putMcpServerSplunk(value: MCPServerSplunkConfigurationProperty) {
        this._mcpServerSplunk.internalValue = value;
    }
    public resetMcpServerSplunk() {
        this._mcpServerSplunk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerSplunkInput() {
        return this._mcpServerSplunk.internalValue;
    }

    // pager_duty - computed: true, optional: true, required: false
    private _pagerDuty = new PagerDutyConfigurationPropertyOutputReference(this, "pager_duty");
    public get pagerDuty() {
        return this._pagerDuty;
    }
    public putPagerDuty(value: PagerDutyConfigurationProperty) {
        this._pagerDuty.internalValue = value;
    }
    public resetPagerDuty() {
        this._pagerDuty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pagerDutyInput() {
        return this._pagerDuty.internalValue;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow = new ServiceNowConfigurationPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
    public putServiceNow(value: ServiceNowConfigurationProperty) {
        this._serviceNow.internalValue = value;
    }
    public resetServiceNow() {
        this._serviceNow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
        return this._serviceNow.internalValue;
    }

    // slack - computed: true, optional: true, required: false
    private _slack = new SlackConfigurationPropertyOutputReference(this, "slack");
    public get slack() {
        return this._slack;
    }
    public putSlack(value: SlackConfigurationProperty) {
        this._slack.internalValue = value;
    }
    public resetSlack() {
        this._slack.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackInput() {
        return this._slack.internalValue;
    }

    // source_aws - computed: true, optional: true, required: false
    private _sourceAws = new SourceAwsConfigurationPropertyOutputReference(this, "source_aws");
    public get sourceAws() {
        return this._sourceAws;
    }
    public putSourceAws(value: SourceAwsConfigurationProperty) {
        this._sourceAws.internalValue = value;
    }
    public resetSourceAws() {
        this._sourceAws.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAwsInput() {
        return this._sourceAws.internalValue;
    }
}
}
