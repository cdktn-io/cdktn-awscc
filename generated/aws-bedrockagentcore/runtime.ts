// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuntimeProps extends cdktn.TerraformMetaArguments {
    /**
    * The artifact of the agent
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#agent_runtime_artifact CcRuntime#agent_runtime_artifact}
    */
    readonly agentRuntimeArtifact: CcRuntime.AgentRuntimeArtifactProperty;
    /**
    * Name for a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#agent_runtime_name CcRuntime#agent_runtime_name}
    */
    readonly agentRuntimeName: string;
    /**
    * Authorizer configuration for the agent runtime
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#authorizer_configuration CcRuntime#authorizer_configuration}
    */
    readonly authorizerConfiguration?: CcRuntime.AuthorizerConfigurationProperty;
    /**
    * Description of the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#description CcRuntime#description}
    */
    readonly description?: string;
    /**
    * Environment variables for the agent runtime
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#environment_variables CcRuntime#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * Filesystem configurations for the agent runtime
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#filesystem_configurations CcRuntime#filesystem_configurations}
    */
    readonly filesystemConfigurations?: CcRuntime.FilesystemConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Lifecycle configuration for managing runtime sessions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#lifecycle_configuration CcRuntime#lifecycle_configuration}
    */
    readonly lifecycleConfiguration?: CcRuntime.LifecycleConfigurationProperty;
    /**
    * Network access configuration for the Agent
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#network_configuration CcRuntime#network_configuration}
    */
    readonly networkConfiguration: CcRuntime.NetworkConfigurationProperty;
    /**
    * Protocol configuration for the agent runtime
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#protocol_configuration CcRuntime#protocol_configuration}
    */
    readonly protocolConfiguration?: string;
    /**
    * Configuration for HTTP request headers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#request_header_configuration CcRuntime#request_header_configuration}
    */
    readonly requestHeaderConfiguration?: CcRuntime.RequestHeaderConfigurationProperty;
    /**
    * Amazon Resource Name (ARN) of an IAM role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#role_arn CcRuntime#role_arn}
    */
    readonly roleArn: string;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#tags CcRuntime#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime}
*/
export class CcRuntime extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_runtime";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRuntime resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRuntime to import
    * @param importFromId The id of the existing CcRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRuntime to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_runtime", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuntimeProps
    */
    public constructor(scope: Construct, id: string, config: CcRuntimeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_runtime',
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
        this._agentRuntimeArtifact.internalValue = config.agentRuntimeArtifact;
        this._agentRuntimeName = config.agentRuntimeName;
        this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
        this._description = config.description;
        this._environmentVariables = config.environmentVariables;
        this._filesystemConfigurations.internalValue = config.filesystemConfigurations;
        this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
        this._networkConfiguration.internalValue = config.networkConfiguration;
        this._protocolConfiguration = config.protocolConfiguration;
        this._requestHeaderConfiguration.internalValue = config.requestHeaderConfiguration;
        this._roleArn = config.roleArn;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_runtime_arn - computed: true, optional: false, required: false
    public get agentRuntimeArn() {
        return this.getStringAttribute('agent_runtime_arn');
    }

    // agent_runtime_artifact - computed: false, optional: false, required: true
    private _agentRuntimeArtifact = new CcRuntime.AgentRuntimeArtifactPropertyOutputReference(this, "agent_runtime_artifact");
    public get agentRuntimeArtifact() {
        return this._agentRuntimeArtifact;
    }
    public putAgentRuntimeArtifact(value: CcRuntime.AgentRuntimeArtifactProperty) {
        this._agentRuntimeArtifact.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentRuntimeArtifactInput() {
        return this._agentRuntimeArtifact.internalValue;
    }

    // agent_runtime_id - computed: true, optional: false, required: false
    public get agentRuntimeId() {
        return this.getStringAttribute('agent_runtime_id');
    }

    // agent_runtime_name - computed: false, optional: false, required: true
    private _agentRuntimeName?: string; 
    public get agentRuntimeName() {
        return this.getStringAttribute('agent_runtime_name');
    }
    public set agentRuntimeName(value: string) {
        this._agentRuntimeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentRuntimeNameInput() {
        return this._agentRuntimeName;
    }

    // agent_runtime_version - computed: true, optional: false, required: false
    public get agentRuntimeVersion() {
        return this.getStringAttribute('agent_runtime_version');
    }

    // authorizer_configuration - computed: true, optional: true, required: false
    private _authorizerConfiguration = new CcRuntime.AuthorizerConfigurationPropertyOutputReference(this, "authorizer_configuration");
    public get authorizerConfiguration() {
        return this._authorizerConfiguration;
    }
    public putAuthorizerConfiguration(value: CcRuntime.AuthorizerConfigurationProperty) {
        this._authorizerConfiguration.internalValue = value;
    }
    public resetAuthorizerConfiguration() {
        this._authorizerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerConfigurationInput() {
        return this._authorizerConfiguration.internalValue;
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

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }

    // filesystem_configurations - computed: true, optional: true, required: false
    private _filesystemConfigurations = new CcRuntime.FilesystemConfigurationPropertyList(this, "filesystem_configurations", false);
    public get filesystemConfigurations() {
        return this._filesystemConfigurations;
    }
    public putFilesystemConfigurations(value: CcRuntime.FilesystemConfigurationProperty[] | cdktn.IResolvable) {
        this._filesystemConfigurations.internalValue = value;
    }
    public resetFilesystemConfigurations() {
        this._filesystemConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesystemConfigurationsInput() {
        return this._filesystemConfigurations.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // lifecycle_configuration - computed: true, optional: true, required: false
    private _lifecycleConfiguration = new CcRuntime.LifecycleConfigurationPropertyOutputReference(this, "lifecycle_configuration");
    public get lifecycleConfiguration() {
        return this._lifecycleConfiguration;
    }
    public putLifecycleConfiguration(value: CcRuntime.LifecycleConfigurationProperty) {
        this._lifecycleConfiguration.internalValue = value;
    }
    public resetLifecycleConfiguration() {
        this._lifecycleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigurationInput() {
        return this._lifecycleConfiguration.internalValue;
    }

    // network_configuration - computed: false, optional: false, required: true
    private _networkConfiguration = new CcRuntime.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: CcRuntime.NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // protocol_configuration - computed: true, optional: true, required: false
    private _protocolConfiguration?: string; 
    public get protocolConfiguration() {
        return this.getStringAttribute('protocol_configuration');
    }
    public set protocolConfiguration(value: string) {
        this._protocolConfiguration = value;
    }
    public resetProtocolConfiguration() {
        this._protocolConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolConfigurationInput() {
        return this._protocolConfiguration;
    }

    // request_header_configuration - computed: true, optional: true, required: false
    private _requestHeaderConfiguration = new CcRuntime.RequestHeaderConfigurationPropertyOutputReference(this, "request_header_configuration");
    public get requestHeaderConfiguration() {
        return this._requestHeaderConfiguration;
    }
    public putRequestHeaderConfiguration(value: CcRuntime.RequestHeaderConfigurationProperty) {
        this._requestHeaderConfiguration.internalValue = value;
    }
    public resetRequestHeaderConfiguration() {
        this._requestHeaderConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestHeaderConfigurationInput() {
        return this._requestHeaderConfiguration.internalValue;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
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

    // workload_identity_details - computed: true, optional: false, required: false
    private _workloadIdentityDetails = new CcRuntime.WorkloadIdentityDetailsPropertyOutputReference(this, "workload_identity_details");
    public get workloadIdentityDetails() {
        return this._workloadIdentityDetails;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            agent_runtime_artifact: ccRuntimeAgentRuntimeArtifactPropertyToTerraform(this._agentRuntimeArtifact.internalValue),
            agent_runtime_name: cdktn.stringToTerraform(this._agentRuntimeName),
            authorizer_configuration: ccRuntimeAuthorizerConfigurationPropertyToTerraform(this._authorizerConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
            filesystem_configurations: cdktn.listMapper(ccRuntimeFilesystemConfigurationPropertyToTerraform, false)(this._filesystemConfigurations.internalValue),
            lifecycle_configuration: ccRuntimeLifecycleConfigurationPropertyToTerraform(this._lifecycleConfiguration.internalValue),
            network_configuration: ccRuntimeNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
            protocol_configuration: cdktn.stringToTerraform(this._protocolConfiguration),
            request_header_configuration: ccRuntimeRequestHeaderConfigurationPropertyToTerraform(this._requestHeaderConfiguration.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_runtime_artifact: {
                value: ccRuntimeAgentRuntimeArtifactPropertyToHclTerraform(this._agentRuntimeArtifact.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuntime.AgentRuntimeArtifactProperty",
            },
            agent_runtime_name: {
                value: cdktn.stringToHclTerraform(this._agentRuntimeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_configuration: {
                value: ccRuntimeAuthorizerConfigurationPropertyToHclTerraform(this._authorizerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuntime.AuthorizerConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_variables: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            filesystem_configurations: {
                value: cdktn.listMapperHcl(ccRuntimeFilesystemConfigurationPropertyToHclTerraform, false)(this._filesystemConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRuntime.FilesystemConfigurationPropertyList",
            },
            lifecycle_configuration: {
                value: ccRuntimeLifecycleConfigurationPropertyToHclTerraform(this._lifecycleConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuntime.LifecycleConfigurationProperty",
            },
            network_configuration: {
                value: ccRuntimeNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuntime.NetworkConfigurationProperty",
            },
            protocol_configuration: {
                value: cdktn.stringToHclTerraform(this._protocolConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_header_configuration: {
                value: ccRuntimeRequestHeaderConfigurationPropertyToHclTerraform(this._requestHeaderConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuntime.RequestHeaderConfigurationProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccRuntimeS3LocationPropertyToTerraform(struct?: CcRuntime.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        version_id: cdktn.stringToTerraform(struct!.versionId),
    }
}


export function ccRuntimeS3LocationPropertyToHclTerraform(struct?: CcRuntime.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_id: {
            value: cdktn.stringToHclTerraform(struct!.versionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeCodePropertyToTerraform(struct?: CcRuntime.CodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3: ccRuntimeS3LocationPropertyToTerraform(struct!.s3),
    }
}


export function ccRuntimeCodePropertyToHclTerraform(struct?: CcRuntime.CodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccRuntimeS3LocationPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeCodeConfigurationPropertyToTerraform(struct?: CcRuntime.CodeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: ccRuntimeCodePropertyToTerraform(struct!.code),
        entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
        runtime: cdktn.stringToTerraform(struct!.runtime),
    }
}


export function ccRuntimeCodeConfigurationPropertyToHclTerraform(struct?: CcRuntime.CodeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: ccRuntimeCodePropertyToHclTerraform(struct!.code),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeProperty",
        },
        entry_point: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeContainerConfigurationPropertyToTerraform(struct?: CcRuntime.ContainerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_uri: cdktn.stringToTerraform(struct!.containerUri),
    }
}


export function ccRuntimeContainerConfigurationPropertyToHclTerraform(struct?: CcRuntime.ContainerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_uri: {
            value: cdktn.stringToHclTerraform(struct!.containerUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAgentRuntimeArtifactPropertyToTerraform(struct?: CcRuntime.AgentRuntimeArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_configuration: ccRuntimeCodeConfigurationPropertyToTerraform(struct!.codeConfiguration),
        container_configuration: ccRuntimeContainerConfigurationPropertyToTerraform(struct!.containerConfiguration),
    }
}


export function ccRuntimeAgentRuntimeArtifactPropertyToHclTerraform(struct?: CcRuntime.AgentRuntimeArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_configuration: {
            value: ccRuntimeCodeConfigurationPropertyToHclTerraform(struct!.codeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeConfigurationProperty",
        },
        container_configuration: {
            value: ccRuntimeContainerConfigurationPropertyToHclTerraform(struct!.containerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ContainerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeHostingEnvironmentPropertyToTerraform(struct?: CcRuntime.HostingEnvironmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccRuntimeHostingEnvironmentPropertyToHclTerraform(struct?: CcRuntime.HostingEnvironmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAllowedWorkloadConfigurationPropertyToTerraform(struct?: CcRuntime.AllowedWorkloadConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hosting_environments: cdktn.listMapper(ccRuntimeHostingEnvironmentPropertyToTerraform, false)(struct!.hostingEnvironments),
        workload_identities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workloadIdentities),
    }
}


export function ccRuntimeAllowedWorkloadConfigurationPropertyToHclTerraform(struct?: CcRuntime.AllowedWorkloadConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hosting_environments: {
            value: cdktn.listMapperHcl(ccRuntimeHostingEnvironmentPropertyToHclTerraform, false)(struct!.hostingEnvironments),
            isBlock: true,
            type: "set",
            storageClassType: "HostingEnvironmentPropertyList",
        },
        workload_identities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workloadIdentities),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeClaimMatchValueTypePropertyToTerraform(struct?: CcRuntime.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
        match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
    }
}


export function ccRuntimeClaimMatchValueTypePropertyToHclTerraform(struct?: CcRuntime.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_value_string: {
            value: cdktn.stringToHclTerraform(struct!.matchValueString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match_value_string_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAuthorizingClaimMatchValueTypePropertyToTerraform(struct?: CcRuntime.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
        claim_match_value: ccRuntimeClaimMatchValueTypePropertyToTerraform(struct!.claimMatchValue),
    }
}


export function ccRuntimeAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct?: CcRuntime.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        claim_match_operator: {
            value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claim_match_value: {
            value: ccRuntimeClaimMatchValueTypePropertyToHclTerraform(struct!.claimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "ClaimMatchValueTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeCustomClaimValidationTypePropertyToTerraform(struct?: CcRuntime.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizing_claim_match_value: ccRuntimeAuthorizingClaimMatchValueTypePropertyToTerraform(struct!.authorizingClaimMatchValue),
        inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
        inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    }
}


export function ccRuntimeCustomClaimValidationTypePropertyToHclTerraform(struct?: CcRuntime.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizing_claim_match_value: {
            value: ccRuntimeAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct!.authorizingClaimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizingClaimMatchValueTypeProperty",
        },
        inbound_token_claim_name: {
            value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inbound_token_claim_value_type: {
            value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeManagedVpcResourcePropertyToTerraform(struct?: CcRuntime.ManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
        routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
        vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
    }
}


export function ccRuntimeManagedVpcResourcePropertyToHclTerraform(struct?: CcRuntime.ManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_domain: {
            value: cdktn.stringToHclTerraform(struct!.routingDomain),
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
        tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        vpc_identifier: {
            value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeSelfManagedLatticeResourcePropertyToTerraform(struct?: CcRuntime.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
    }
}


export function ccRuntimeSelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcRuntime.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_identifier: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimePrivateEndpointPropertyToTerraform(struct?: CcRuntime.PrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_vpc_resource: ccRuntimeManagedVpcResourcePropertyToTerraform(struct!.managedVpcResource),
        self_managed_lattice_resource: ccRuntimeSelfManagedLatticeResourcePropertyToTerraform(struct!.selfManagedLatticeResource),
    }
}


export function ccRuntimePrivateEndpointPropertyToHclTerraform(struct?: CcRuntime.PrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_vpc_resource: {
            value: ccRuntimeManagedVpcResourcePropertyToHclTerraform(struct!.managedVpcResource),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedVpcResourceProperty",
        },
        self_managed_lattice_resource: {
            value: ccRuntimeSelfManagedLatticeResourcePropertyToHclTerraform(struct!.selfManagedLatticeResource),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedLatticeResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform(struct?: CcRuntime.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
        routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
        vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
    }
}


export function ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct?: CcRuntime.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_domain: {
            value: cdktn.stringToHclTerraform(struct!.routingDomain),
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
        tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        vpc_identifier: {
            value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct?: CcRuntime.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
    }
}


export function ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcRuntime.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_identifier: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToTerraform(struct?: CcRuntime.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_vpc_resource: ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform(struct!.managedVpcResource),
        self_managed_lattice_resource: ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct!.selfManagedLatticeResource),
    }
}


export function ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform(struct?: CcRuntime.AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_vpc_resource: {
            value: ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct!.managedVpcResource),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty",
        },
        self_managed_lattice_resource: {
            value: ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct!.selfManagedLatticeResource),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimePrivateEndpointOverridePropertyToTerraform(struct?: CcRuntime.PrivateEndpointOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
        private_endpoint: ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToTerraform(struct!.privateEndpoint),
    }
}


export function ccRuntimePrivateEndpointOverridePropertyToHclTerraform(struct?: CcRuntime.PrivateEndpointOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_endpoint: {
            value: ccRuntimeAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform(struct!.privateEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeCustomJWTAuthorizerConfigurationPropertyToTerraform(struct?: CcRuntime.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
        allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
        allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
        allowed_workload_configuration: ccRuntimeAllowedWorkloadConfigurationPropertyToTerraform(struct!.allowedWorkloadConfiguration),
        custom_claims: cdktn.listMapper(ccRuntimeCustomClaimValidationTypePropertyToTerraform, false)(struct!.customClaims),
        discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
        private_endpoint: ccRuntimePrivateEndpointPropertyToTerraform(struct!.privateEndpoint),
        private_endpoint_overrides: cdktn.listMapper(ccRuntimePrivateEndpointOverridePropertyToTerraform, false)(struct!.privateEndpointOverrides),
    }
}


export function ccRuntimeCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct?: CcRuntime.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_audience: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_clients: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_workload_configuration: {
            value: ccRuntimeAllowedWorkloadConfigurationPropertyToHclTerraform(struct!.allowedWorkloadConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AllowedWorkloadConfigurationProperty",
        },
        custom_claims: {
            value: cdktn.listMapperHcl(ccRuntimeCustomClaimValidationTypePropertyToHclTerraform, false)(struct!.customClaims),
            isBlock: true,
            type: "list",
            storageClassType: "CustomClaimValidationTypePropertyList",
        },
        discovery_url: {
            value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_endpoint: {
            value: ccRuntimePrivateEndpointPropertyToHclTerraform(struct!.privateEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateEndpointProperty",
        },
        private_endpoint_overrides: {
            value: cdktn.listMapperHcl(ccRuntimePrivateEndpointOverridePropertyToHclTerraform, false)(struct!.privateEndpointOverrides),
            isBlock: true,
            type: "list",
            storageClassType: "PrivateEndpointOverridePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeAuthorizerConfigurationPropertyToTerraform(struct?: CcRuntime.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_jwt_authorizer: ccRuntimeCustomJWTAuthorizerConfigurationPropertyToTerraform(struct!.customJwtAuthorizer),
    }
}


export function ccRuntimeAuthorizerConfigurationPropertyToHclTerraform(struct?: CcRuntime.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_jwt_authorizer: {
            value: ccRuntimeCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct!.customJwtAuthorizer),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomJWTAuthorizerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeEfsAccessPointConfigurationPropertyToTerraform(struct?: CcRuntime.EfsAccessPointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccRuntimeEfsAccessPointConfigurationPropertyToHclTerraform(struct?: CcRuntime.EfsAccessPointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_point_arn: {
            value: cdktn.stringToHclTerraform(struct!.accessPointArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeS3FilesAccessPointConfigurationPropertyToTerraform(struct?: CcRuntime.S3FilesAccessPointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccRuntimeS3FilesAccessPointConfigurationPropertyToHclTerraform(struct?: CcRuntime.S3FilesAccessPointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_point_arn: {
            value: cdktn.stringToHclTerraform(struct!.accessPointArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeSessionStorageConfigurationPropertyToTerraform(struct?: CcRuntime.SessionStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccRuntimeSessionStorageConfigurationPropertyToHclTerraform(struct?: CcRuntime.SessionStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeFilesystemConfigurationPropertyToTerraform(struct?: CcRuntime.FilesystemConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        efs_access_point: ccRuntimeEfsAccessPointConfigurationPropertyToTerraform(struct!.efsAccessPoint),
        s3_files_access_point: ccRuntimeS3FilesAccessPointConfigurationPropertyToTerraform(struct!.s3FilesAccessPoint),
        session_storage: ccRuntimeSessionStorageConfigurationPropertyToTerraform(struct!.sessionStorage),
    }
}


export function ccRuntimeFilesystemConfigurationPropertyToHclTerraform(struct?: CcRuntime.FilesystemConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        efs_access_point: {
            value: ccRuntimeEfsAccessPointConfigurationPropertyToHclTerraform(struct!.efsAccessPoint),
            isBlock: true,
            type: "struct",
            storageClassType: "EfsAccessPointConfigurationProperty",
        },
        s3_files_access_point: {
            value: ccRuntimeS3FilesAccessPointConfigurationPropertyToHclTerraform(struct!.s3FilesAccessPoint),
            isBlock: true,
            type: "struct",
            storageClassType: "S3FilesAccessPointConfigurationProperty",
        },
        session_storage: {
            value: ccRuntimeSessionStorageConfigurationPropertyToHclTerraform(struct!.sessionStorage),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeLifecycleConfigurationPropertyToTerraform(struct?: CcRuntime.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_runtime_session_timeout: cdktn.numberToTerraform(struct!.idleRuntimeSessionTimeout),
        max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
    }
}


export function ccRuntimeLifecycleConfigurationPropertyToHclTerraform(struct?: CcRuntime.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_runtime_session_timeout: {
            value: cdktn.numberToHclTerraform(struct!.idleRuntimeSessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_lifetime: {
            value: cdktn.numberToHclTerraform(struct!.maxLifetime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeVpcConfigPropertyToTerraform(struct?: CcRuntime.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccRuntimeVpcConfigPropertyToHclTerraform(struct?: CcRuntime.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeNetworkConfigurationPropertyToTerraform(struct?: CcRuntime.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_mode: cdktn.stringToTerraform(struct!.networkMode),
        network_mode_config: ccRuntimeVpcConfigPropertyToTerraform(struct!.networkModeConfig),
    }
}


export function ccRuntimeNetworkConfigurationPropertyToHclTerraform(struct?: CcRuntime.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_mode: {
            value: cdktn.stringToHclTerraform(struct!.networkMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_mode_config: {
            value: ccRuntimeVpcConfigPropertyToHclTerraform(struct!.networkModeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeRequestHeaderConfigurationPropertyToTerraform(struct?: CcRuntime.RequestHeaderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        request_header_allowlist: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeaderAllowlist),
    }
}


export function ccRuntimeRequestHeaderConfigurationPropertyToHclTerraform(struct?: CcRuntime.RequestHeaderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        request_header_allowlist: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeaderAllowlist),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuntimeWorkloadIdentityDetailsPropertyToTerraform(struct?: CcRuntime.WorkloadIdentityDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRuntimeWorkloadIdentityDetailsPropertyToHclTerraform(struct?: CcRuntime.WorkloadIdentityDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcRuntime {
export interface S3LocationProperty {
    /**
    * S3 bucket name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#bucket CcRuntime#bucket}
    */
    readonly bucket?: string;
    /**
    * S3 object key prefix
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#prefix CcRuntime#prefix}
    */
    readonly prefix?: string;
    /**
    * S3 object version ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#version_id CcRuntime#version_id}
    */
    readonly versionId?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._versionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionId = this._versionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._prefix = undefined;
            this._versionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._prefix = value.prefix;
            this._versionId = value.versionId;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string; 
    public get versionId() {
        return this.getStringAttribute('version_id');
    }
    public set versionId(value: string) {
        this._versionId = value;
    }
    public resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
        return this._versionId;
    }
}
export interface CodeProperty {
    /**
    * S3 Location Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#s3 CcRuntime#s3}
    */
    readonly s3?: S3LocationProperty;
}
export class CodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3LocationPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3LocationProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface CodeConfigurationProperty {
    /**
    * Object represents source code from zip file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#code CcRuntime#code}
    */
    readonly code?: CodeProperty;
    /**
    * List of entry points
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#entry_point CcRuntime#entry_point}
    */
    readonly entryPoint?: string[];
    /**
    * Managed runtime types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#runtime CcRuntime#runtime}
    */
    readonly runtime?: string;
}
export class CodeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code?.internalValue;
        }
        if (this._entryPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryPoint = this._entryPoint;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code.internalValue = undefined;
            this._entryPoint = undefined;
            this._runtime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code.internalValue = value.code;
            this._entryPoint = value.entryPoint;
            this._runtime = value.runtime;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code = new CodePropertyOutputReference(this, "code");
    public get code() {
        return this._code;
    }
    public putCode(value: CodeProperty) {
        this._code.internalValue = value;
    }
    public resetCode() {
        this._code.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code.internalValue;
    }

    // entry_point - computed: true, optional: true, required: false
    private _entryPoint?: string[]; 
    public get entryPoint() {
        return this.getListAttribute('entry_point');
    }
    public set entryPoint(value: string[]) {
        this._entryPoint = value;
    }
    public resetEntryPoint() {
        this._entryPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryPointInput() {
        return this._entryPoint;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }
}
export interface ContainerConfigurationProperty {
    /**
    * The ECR URI of the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#container_uri CcRuntime#container_uri}
    */
    readonly containerUri?: string;
}
export class ContainerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerUri = this._containerUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerUri = value.containerUri;
        }
    }

    // container_uri - computed: true, optional: true, required: false
    private _containerUri?: string; 
    public get containerUri() {
        return this.getStringAttribute('container_uri');
    }
    public set containerUri(value: string) {
        this._containerUri = value;
    }
    public resetContainerUri() {
        this._containerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerUriInput() {
        return this._containerUri;
    }
}
export interface AgentRuntimeArtifactProperty {
    /**
    * Representation of a code configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#code_configuration CcRuntime#code_configuration}
    */
    readonly codeConfiguration?: CodeConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#container_configuration CcRuntime#container_configuration}
    */
    readonly containerConfiguration?: ContainerConfigurationProperty;
}
export class AgentRuntimeArtifactPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentRuntimeArtifactProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
        }
        if (this._containerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentRuntimeArtifactProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeConfiguration.internalValue = undefined;
            this._containerConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeConfiguration.internalValue = value.codeConfiguration;
            this._containerConfiguration.internalValue = value.containerConfiguration;
        }
    }

    // code_configuration - computed: true, optional: true, required: false
    private _codeConfiguration = new CodeConfigurationPropertyOutputReference(this, "code_configuration");
    public get codeConfiguration() {
        return this._codeConfiguration;
    }
    public putCodeConfiguration(value: CodeConfigurationProperty) {
        this._codeConfiguration.internalValue = value;
    }
    public resetCodeConfiguration() {
        this._codeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeConfigurationInput() {
        return this._codeConfiguration.internalValue;
    }

    // container_configuration - computed: true, optional: true, required: false
    private _containerConfiguration = new ContainerConfigurationPropertyOutputReference(this, "container_configuration");
    public get containerConfiguration() {
        return this._containerConfiguration;
    }
    public putContainerConfiguration(value: ContainerConfigurationProperty) {
        this._containerConfiguration.internalValue = value;
    }
    public resetContainerConfiguration() {
        this._containerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerConfigurationInput() {
        return this._containerConfiguration.internalValue;
    }
}
export interface HostingEnvironmentProperty {
    /**
    * The ARN of the bedrock-agentcore hosting environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#arn CcRuntime#arn}
    */
    readonly arn?: string;
}
export class HostingEnvironmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HostingEnvironmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostingEnvironmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}

export class HostingEnvironmentPropertyList extends cdktn.ComplexList {
    public internalValue? : HostingEnvironmentProperty[] | cdktn.IResolvable

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
    public get(index: number): HostingEnvironmentPropertyOutputReference {
        return new HostingEnvironmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AllowedWorkloadConfigurationProperty {
    /**
    * List of allow-listed hosting environments
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#hosting_environments CcRuntime#hosting_environments}
    */
    readonly hostingEnvironments?: HostingEnvironmentProperty[] | cdktn.IResolvable;
    /**
    * List of allow-listed workload identity names
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#workload_identities CcRuntime#workload_identities}
    */
    readonly workloadIdentities?: string[];
}
export class AllowedWorkloadConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AllowedWorkloadConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostingEnvironments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostingEnvironments = this._hostingEnvironments?.internalValue;
        }
        if (this._workloadIdentities !== undefined) {
            hasAnyValues = true;
            internalValueResult.workloadIdentities = this._workloadIdentities;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AllowedWorkloadConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostingEnvironments.internalValue = undefined;
            this._workloadIdentities = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostingEnvironments.internalValue = value.hostingEnvironments;
            this._workloadIdentities = value.workloadIdentities;
        }
    }

    // hosting_environments - computed: true, optional: true, required: false
    private _hostingEnvironments = new HostingEnvironmentPropertyList(this, "hosting_environments", true);
    public get hostingEnvironments() {
        return this._hostingEnvironments;
    }
    public putHostingEnvironments(value: HostingEnvironmentProperty[] | cdktn.IResolvable) {
        this._hostingEnvironments.internalValue = value;
    }
    public resetHostingEnvironments() {
        this._hostingEnvironments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostingEnvironmentsInput() {
        return this._hostingEnvironments.internalValue;
    }

    // workload_identities - computed: true, optional: true, required: false
    private _workloadIdentities?: string[]; 
    public get workloadIdentities() {
        return cdktn.Fn.tolist(this.getListAttribute('workload_identities'));
    }
    public set workloadIdentities(value: string[]) {
        this._workloadIdentities = value;
    }
    public resetWorkloadIdentities() {
        this._workloadIdentities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workloadIdentitiesInput() {
        return this._workloadIdentities;
    }
}
export interface ClaimMatchValueTypeProperty {
    /**
    * The string value to match for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#match_value_string CcRuntime#match_value_string}
    */
    readonly matchValueString?: string;
    /**
    * The list of strings to check for a match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#match_value_string_list CcRuntime#match_value_string_list}
    */
    readonly matchValueStringList?: string[];
}
export class ClaimMatchValueTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClaimMatchValueTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchValueString !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchValueString = this._matchValueString;
        }
        if (this._matchValueStringList !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchValueStringList = this._matchValueStringList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClaimMatchValueTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchValueString = undefined;
            this._matchValueStringList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchValueString = value.matchValueString;
            this._matchValueStringList = value.matchValueStringList;
        }
    }

    // match_value_string - computed: true, optional: true, required: false
    private _matchValueString?: string; 
    public get matchValueString() {
        return this.getStringAttribute('match_value_string');
    }
    public set matchValueString(value: string) {
        this._matchValueString = value;
    }
    public resetMatchValueString() {
        this._matchValueString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchValueStringInput() {
        return this._matchValueString;
    }

    // match_value_string_list - computed: true, optional: true, required: false
    private _matchValueStringList?: string[]; 
    public get matchValueStringList() {
        return this.getListAttribute('match_value_string_list');
    }
    public set matchValueStringList(value: string[]) {
        this._matchValueStringList = value;
    }
    public resetMatchValueStringList() {
        this._matchValueStringList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchValueStringListInput() {
        return this._matchValueStringList;
    }
}
export interface AuthorizingClaimMatchValueTypeProperty {
    /**
    * The relationship between the claim field value and the value or values being matched
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#claim_match_operator CcRuntime#claim_match_operator}
    */
    readonly claimMatchOperator?: string;
    /**
    * The value or values in the custom claim to match for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#claim_match_value CcRuntime#claim_match_value}
    */
    readonly claimMatchValue?: ClaimMatchValueTypeProperty;
}
export class AuthorizingClaimMatchValueTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._claimMatchOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimMatchOperator = this._claimMatchOperator;
        }
        if (this._claimMatchValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimMatchOperator = undefined;
            this._claimMatchValue.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimMatchOperator = value.claimMatchOperator;
            this._claimMatchValue.internalValue = value.claimMatchValue;
        }
    }

    // claim_match_operator - computed: true, optional: true, required: false
    private _claimMatchOperator?: string; 
    public get claimMatchOperator() {
        return this.getStringAttribute('claim_match_operator');
    }
    public set claimMatchOperator(value: string) {
        this._claimMatchOperator = value;
    }
    public resetClaimMatchOperator() {
        this._claimMatchOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get claimMatchOperatorInput() {
        return this._claimMatchOperator;
    }

    // claim_match_value - computed: true, optional: true, required: false
    private _claimMatchValue = new ClaimMatchValueTypePropertyOutputReference(this, "claim_match_value");
    public get claimMatchValue() {
        return this._claimMatchValue;
    }
    public putClaimMatchValue(value: ClaimMatchValueTypeProperty) {
        this._claimMatchValue.internalValue = value;
    }
    public resetClaimMatchValue() {
        this._claimMatchValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get claimMatchValueInput() {
        return this._claimMatchValue.internalValue;
    }
}
export interface CustomClaimValidationTypeProperty {
    /**
    * The value or values in the custom claim to match and relationship of match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#authorizing_claim_match_value CcRuntime#authorizing_claim_match_value}
    */
    readonly authorizingClaimMatchValue?: AuthorizingClaimMatchValueTypeProperty;
    /**
    * The name of the custom claim to validate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#inbound_token_claim_name CcRuntime#inbound_token_claim_name}
    */
    readonly inboundTokenClaimName?: string;
    /**
    * Token claim data type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#inbound_token_claim_value_type CcRuntime#inbound_token_claim_value_type}
    */
    readonly inboundTokenClaimValueType?: string;
}
export class CustomClaimValidationTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomClaimValidationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
        }
        if (this._inboundTokenClaimName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
        }
        if (this._inboundTokenClaimValueType !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomClaimValidationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizingClaimMatchValue.internalValue = undefined;
            this._inboundTokenClaimName = undefined;
            this._inboundTokenClaimValueType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
            this._inboundTokenClaimName = value.inboundTokenClaimName;
            this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
        }
    }

    // authorizing_claim_match_value - computed: true, optional: true, required: false
    private _authorizingClaimMatchValue = new AuthorizingClaimMatchValueTypePropertyOutputReference(this, "authorizing_claim_match_value");
    public get authorizingClaimMatchValue() {
        return this._authorizingClaimMatchValue;
    }
    public putAuthorizingClaimMatchValue(value: AuthorizingClaimMatchValueTypeProperty) {
        this._authorizingClaimMatchValue.internalValue = value;
    }
    public resetAuthorizingClaimMatchValue() {
        this._authorizingClaimMatchValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizingClaimMatchValueInput() {
        return this._authorizingClaimMatchValue.internalValue;
    }

    // inbound_token_claim_name - computed: true, optional: true, required: false
    private _inboundTokenClaimName?: string; 
    public get inboundTokenClaimName() {
        return this.getStringAttribute('inbound_token_claim_name');
    }
    public set inboundTokenClaimName(value: string) {
        this._inboundTokenClaimName = value;
    }
    public resetInboundTokenClaimName() {
        this._inboundTokenClaimName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundTokenClaimNameInput() {
        return this._inboundTokenClaimName;
    }

    // inbound_token_claim_value_type - computed: true, optional: true, required: false
    private _inboundTokenClaimValueType?: string; 
    public get inboundTokenClaimValueType() {
        return this.getStringAttribute('inbound_token_claim_value_type');
    }
    public set inboundTokenClaimValueType(value: string) {
        this._inboundTokenClaimValueType = value;
    }
    public resetInboundTokenClaimValueType() {
        this._inboundTokenClaimValueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundTokenClaimValueTypeInput() {
        return this._inboundTokenClaimValueType;
    }
}

export class CustomClaimValidationTypePropertyList extends cdktn.ComplexList {
    public internalValue? : CustomClaimValidationTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomClaimValidationTypePropertyOutputReference {
        return new CustomClaimValidationTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ManagedVpcResourceProperty {
    /**
    * The IP address type for the endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#endpoint_ip_address_type CcRuntime#endpoint_ip_address_type}
    */
    readonly endpointIpAddressType?: string;
    /**
    * An intermediate domain to use as the resource configuration endpoint instead of the actual target domain
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#routing_domain CcRuntime#routing_domain}
    */
    readonly routingDomain?: string;
    /**
    * The security group IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#security_group_ids CcRuntime#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The subnet IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#subnet_ids CcRuntime#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Tags to apply to the managed VPC Lattice resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#tags CcRuntime#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The VPC identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#vpc_identifier CcRuntime#vpc_identifier}
    */
    readonly vpcIdentifier?: string;
}
export class ManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedVpcResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointIpAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
        }
        if (this._routingDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingDomain = this._routingDomain;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._vpcIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcIdentifier = this._vpcIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = undefined;
            this._routingDomain = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._tags = undefined;
            this._vpcIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = value.endpointIpAddressType;
            this._routingDomain = value.routingDomain;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._tags = value.tags;
            this._vpcIdentifier = value.vpcIdentifier;
        }
    }

    // endpoint_ip_address_type - computed: true, optional: true, required: false
    private _endpointIpAddressType?: string; 
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }
    public set endpointIpAddressType(value: string) {
        this._endpointIpAddressType = value;
    }
    public resetEndpointIpAddressType() {
        this._endpointIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIpAddressTypeInput() {
        return this._endpointIpAddressType;
    }

    // routing_domain - computed: true, optional: true, required: false
    private _routingDomain?: string; 
    public get routingDomain() {
        return this.getStringAttribute('routing_domain');
    }
    public set routingDomain(value: string) {
        this._routingDomain = value;
    }
    public resetRoutingDomain() {
        this._routingDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingDomainInput() {
        return this._routingDomain;
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

    // vpc_identifier - computed: true, optional: true, required: false
    private _vpcIdentifier?: string; 
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
    public set vpcIdentifier(value: string) {
        this._vpcIdentifier = value;
    }
    public resetVpcIdentifier() {
        this._vpcIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdentifierInput() {
        return this._vpcIdentifier;
    }
}
export interface SelfManagedLatticeResourceProperty {
    /**
    * The identifier of the VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#resource_configuration_identifier CcRuntime#resource_configuration_identifier}
    */
    readonly resourceConfigurationIdentifier?: string;
}
export class SelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
        }
    }

    // resource_configuration_identifier - computed: true, optional: true, required: false
    private _resourceConfigurationIdentifier?: string; 
    public get resourceConfigurationIdentifier() {
        return this.getStringAttribute('resource_configuration_identifier');
    }
    public set resourceConfigurationIdentifier(value: string) {
        this._resourceConfigurationIdentifier = value;
    }
    public resetResourceConfigurationIdentifier() {
        this._resourceConfigurationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationIdentifierInput() {
        return this._resourceConfigurationIdentifier;
    }
}
export interface PrivateEndpointProperty {
    /**
    * Managed VPC resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#managed_vpc_resource CcRuntime#managed_vpc_resource}
    */
    readonly managedVpcResource?: ManagedVpcResourceProperty;
    /**
    * Self-managed VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#self_managed_lattice_resource CcRuntime#self_managed_lattice_resource}
    */
    readonly selfManagedLatticeResource?: SelfManagedLatticeResourceProperty;
}
export class PrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedVpcResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
        }
        if (this._selfManagedLatticeResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = undefined;
            this._selfManagedLatticeResource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = value.managedVpcResource;
            this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
        }
    }

    // managed_vpc_resource - computed: true, optional: true, required: false
    private _managedVpcResource = new ManagedVpcResourcePropertyOutputReference(this, "managed_vpc_resource");
    public get managedVpcResource() {
        return this._managedVpcResource;
    }
    public putManagedVpcResource(value: ManagedVpcResourceProperty) {
        this._managedVpcResource.internalValue = value;
    }
    public resetManagedVpcResource() {
        this._managedVpcResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedVpcResourceInput() {
        return this._managedVpcResource.internalValue;
    }

    // self_managed_lattice_resource - computed: true, optional: true, required: false
    private _selfManagedLatticeResource = new SelfManagedLatticeResourcePropertyOutputReference(this, "self_managed_lattice_resource");
    public get selfManagedLatticeResource() {
        return this._selfManagedLatticeResource;
    }
    public putSelfManagedLatticeResource(value: SelfManagedLatticeResourceProperty) {
        this._selfManagedLatticeResource.internalValue = value;
    }
    public resetSelfManagedLatticeResource() {
        this._selfManagedLatticeResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedLatticeResourceInput() {
        return this._selfManagedLatticeResource.internalValue;
    }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty {
    /**
    * The IP address type for the endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#endpoint_ip_address_type CcRuntime#endpoint_ip_address_type}
    */
    readonly endpointIpAddressType?: string;
    /**
    * An intermediate domain to use as the resource configuration endpoint instead of the actual target domain
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#routing_domain CcRuntime#routing_domain}
    */
    readonly routingDomain?: string;
    /**
    * The security group IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#security_group_ids CcRuntime#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The subnet IDs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#subnet_ids CcRuntime#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Tags to apply to the managed VPC Lattice resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#tags CcRuntime#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The VPC identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#vpc_identifier CcRuntime#vpc_identifier}
    */
    readonly vpcIdentifier?: string;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointIpAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
        }
        if (this._routingDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingDomain = this._routingDomain;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._vpcIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcIdentifier = this._vpcIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = undefined;
            this._routingDomain = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._tags = undefined;
            this._vpcIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = value.endpointIpAddressType;
            this._routingDomain = value.routingDomain;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._tags = value.tags;
            this._vpcIdentifier = value.vpcIdentifier;
        }
    }

    // endpoint_ip_address_type - computed: true, optional: true, required: false
    private _endpointIpAddressType?: string; 
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }
    public set endpointIpAddressType(value: string) {
        this._endpointIpAddressType = value;
    }
    public resetEndpointIpAddressType() {
        this._endpointIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIpAddressTypeInput() {
        return this._endpointIpAddressType;
    }

    // routing_domain - computed: true, optional: true, required: false
    private _routingDomain?: string; 
    public get routingDomain() {
        return this.getStringAttribute('routing_domain');
    }
    public set routingDomain(value: string) {
        this._routingDomain = value;
    }
    public resetRoutingDomain() {
        this._routingDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingDomainInput() {
        return this._routingDomain;
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

    // vpc_identifier - computed: true, optional: true, required: false
    private _vpcIdentifier?: string; 
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
    public set vpcIdentifier(value: string) {
        this._vpcIdentifier = value;
    }
    public resetVpcIdentifier() {
        this._vpcIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdentifierInput() {
        return this._vpcIdentifier;
    }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty {
    /**
    * The identifier of the VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#resource_configuration_identifier CcRuntime#resource_configuration_identifier}
    */
    readonly resourceConfigurationIdentifier?: string;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
        }
    }

    // resource_configuration_identifier - computed: true, optional: true, required: false
    private _resourceConfigurationIdentifier?: string; 
    public get resourceConfigurationIdentifier() {
        return this.getStringAttribute('resource_configuration_identifier');
    }
    public set resourceConfigurationIdentifier(value: string) {
        this._resourceConfigurationIdentifier = value;
    }
    public resetResourceConfigurationIdentifier() {
        this._resourceConfigurationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationIdentifierInput() {
        return this._resourceConfigurationIdentifier;
    }
}
export interface AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty {
    /**
    * Managed VPC resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#managed_vpc_resource CcRuntime#managed_vpc_resource}
    */
    readonly managedVpcResource?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty;
    /**
    * Self-managed VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#self_managed_lattice_resource CcRuntime#self_managed_lattice_resource}
    */
    readonly selfManagedLatticeResource?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty;
}
export class AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedVpcResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
        }
        if (this._selfManagedLatticeResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = undefined;
            this._selfManagedLatticeResource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = value.managedVpcResource;
            this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
        }
    }

    // managed_vpc_resource - computed: true, optional: true, required: false
    private _managedVpcResource = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference(this, "managed_vpc_resource");
    public get managedVpcResource() {
        return this._managedVpcResource;
    }
    public putManagedVpcResource(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty) {
        this._managedVpcResource.internalValue = value;
    }
    public resetManagedVpcResource() {
        this._managedVpcResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedVpcResourceInput() {
        return this._managedVpcResource.internalValue;
    }

    // self_managed_lattice_resource - computed: true, optional: true, required: false
    private _selfManagedLatticeResource = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference(this, "self_managed_lattice_resource");
    public get selfManagedLatticeResource() {
        return this._selfManagedLatticeResource;
    }
    public putSelfManagedLatticeResource(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty) {
        this._selfManagedLatticeResource.internalValue = value;
    }
    public resetSelfManagedLatticeResource() {
        this._selfManagedLatticeResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedLatticeResourceInput() {
        return this._selfManagedLatticeResource.internalValue;
    }
}
export interface PrivateEndpointOverrideProperty {
    /**
    * The domain to override
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#domain CcRuntime#domain}
    */
    readonly domain?: string;
    /**
    * Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#private_endpoint CcRuntime#private_endpoint}
    */
    readonly privateEndpoint?: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty;
}
export class PrivateEndpointOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrivateEndpointOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._privateEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateEndpointOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
            this._privateEndpoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
            this._privateEndpoint.internalValue = value.privateEndpoint;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // private_endpoint - computed: true, optional: true, required: false
    private _privateEndpoint = new AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointPropertyOutputReference(this, "private_endpoint");
    public get privateEndpoint() {
        return this._privateEndpoint;
    }
    public putPrivateEndpoint(value: AuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointProperty) {
        this._privateEndpoint.internalValue = value;
    }
    public resetPrivateEndpoint() {
        this._privateEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateEndpointInput() {
        return this._privateEndpoint.internalValue;
    }
}

export class PrivateEndpointOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : PrivateEndpointOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): PrivateEndpointOverridePropertyOutputReference {
        return new PrivateEndpointOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomJWTAuthorizerConfigurationProperty {
    /**
    * List of allowed audiences
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#allowed_audience CcRuntime#allowed_audience}
    */
    readonly allowedAudience?: string[];
    /**
    * List of allowed clients
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#allowed_clients CcRuntime#allowed_clients}
    */
    readonly allowedClients?: string[];
    /**
    * List of allowed scopes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#allowed_scopes CcRuntime#allowed_scopes}
    */
    readonly allowedScopes?: string[];
    /**
    * Allow-list of upstream workloads permitted to reach this resource via the workload identity chain. When set, the data plane enforces that the introspected workload chain's caller matches one of the configured hosting environments or workload identities; absent means no chain enforcement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#allowed_workload_configuration CcRuntime#allowed_workload_configuration}
    */
    readonly allowedWorkloadConfiguration?: AllowedWorkloadConfigurationProperty;
    /**
    * List of required custom claims
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#custom_claims CcRuntime#custom_claims}
    */
    readonly customClaims?: CustomClaimValidationTypeProperty[] | cdktn.IResolvable;
    /**
    * OpenID Connect discovery URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#discovery_url CcRuntime#discovery_url}
    */
    readonly discoveryUrl?: string;
    /**
    * Private endpoint configuration. Exactly one of SelfManagedLatticeResource or ManagedVpcResource must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#private_endpoint CcRuntime#private_endpoint}
    */
    readonly privateEndpoint?: PrivateEndpointProperty;
    /**
    * List of private endpoint overrides
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#private_endpoint_overrides CcRuntime#private_endpoint_overrides}
    */
    readonly privateEndpointOverrides?: PrivateEndpointOverrideProperty[] | cdktn.IResolvable;
}
export class CustomJWTAuthorizerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAudience !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAudience = this._allowedAudience;
        }
        if (this._allowedClients !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedClients = this._allowedClients;
        }
        if (this._allowedScopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedScopes = this._allowedScopes;
        }
        if (this._allowedWorkloadConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedWorkloadConfiguration = this._allowedWorkloadConfiguration?.internalValue;
        }
        if (this._customClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customClaims = this._customClaims?.internalValue;
        }
        if (this._discoveryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.discoveryUrl = this._discoveryUrl;
        }
        if (this._privateEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
        }
        if (this._privateEndpointOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpointOverrides = this._privateEndpointOverrides?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAudience = undefined;
            this._allowedClients = undefined;
            this._allowedScopes = undefined;
            this._allowedWorkloadConfiguration.internalValue = undefined;
            this._customClaims.internalValue = undefined;
            this._discoveryUrl = undefined;
            this._privateEndpoint.internalValue = undefined;
            this._privateEndpointOverrides.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAudience = value.allowedAudience;
            this._allowedClients = value.allowedClients;
            this._allowedScopes = value.allowedScopes;
            this._allowedWorkloadConfiguration.internalValue = value.allowedWorkloadConfiguration;
            this._customClaims.internalValue = value.customClaims;
            this._discoveryUrl = value.discoveryUrl;
            this._privateEndpoint.internalValue = value.privateEndpoint;
            this._privateEndpointOverrides.internalValue = value.privateEndpointOverrides;
        }
    }

    // allowed_audience - computed: true, optional: true, required: false
    private _allowedAudience?: string[]; 
    public get allowedAudience() {
        return this.getListAttribute('allowed_audience');
    }
    public set allowedAudience(value: string[]) {
        this._allowedAudience = value;
    }
    public resetAllowedAudience() {
        this._allowedAudience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAudienceInput() {
        return this._allowedAudience;
    }

    // allowed_clients - computed: true, optional: true, required: false
    private _allowedClients?: string[]; 
    public get allowedClients() {
        return this.getListAttribute('allowed_clients');
    }
    public set allowedClients(value: string[]) {
        this._allowedClients = value;
    }
    public resetAllowedClients() {
        this._allowedClients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedClientsInput() {
        return this._allowedClients;
    }

    // allowed_scopes - computed: true, optional: true, required: false
    private _allowedScopes?: string[]; 
    public get allowedScopes() {
        return this.getListAttribute('allowed_scopes');
    }
    public set allowedScopes(value: string[]) {
        this._allowedScopes = value;
    }
    public resetAllowedScopes() {
        this._allowedScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedScopesInput() {
        return this._allowedScopes;
    }

    // allowed_workload_configuration - computed: true, optional: true, required: false
    private _allowedWorkloadConfiguration = new AllowedWorkloadConfigurationPropertyOutputReference(this, "allowed_workload_configuration");
    public get allowedWorkloadConfiguration() {
        return this._allowedWorkloadConfiguration;
    }
    public putAllowedWorkloadConfiguration(value: AllowedWorkloadConfigurationProperty) {
        this._allowedWorkloadConfiguration.internalValue = value;
    }
    public resetAllowedWorkloadConfiguration() {
        this._allowedWorkloadConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedWorkloadConfigurationInput() {
        return this._allowedWorkloadConfiguration.internalValue;
    }

    // custom_claims - computed: true, optional: true, required: false
    private _customClaims = new CustomClaimValidationTypePropertyList(this, "custom_claims", false);
    public get customClaims() {
        return this._customClaims;
    }
    public putCustomClaims(value: CustomClaimValidationTypeProperty[] | cdktn.IResolvable) {
        this._customClaims.internalValue = value;
    }
    public resetCustomClaims() {
        this._customClaims.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customClaimsInput() {
        return this._customClaims.internalValue;
    }

    // discovery_url - computed: true, optional: true, required: false
    private _discoveryUrl?: string; 
    public get discoveryUrl() {
        return this.getStringAttribute('discovery_url');
    }
    public set discoveryUrl(value: string) {
        this._discoveryUrl = value;
    }
    public resetDiscoveryUrl() {
        this._discoveryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get discoveryUrlInput() {
        return this._discoveryUrl;
    }

    // private_endpoint - computed: true, optional: true, required: false
    private _privateEndpoint = new PrivateEndpointPropertyOutputReference(this, "private_endpoint");
    public get privateEndpoint() {
        return this._privateEndpoint;
    }
    public putPrivateEndpoint(value: PrivateEndpointProperty) {
        this._privateEndpoint.internalValue = value;
    }
    public resetPrivateEndpoint() {
        this._privateEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateEndpointInput() {
        return this._privateEndpoint.internalValue;
    }

    // private_endpoint_overrides - computed: true, optional: true, required: false
    private _privateEndpointOverrides = new PrivateEndpointOverridePropertyList(this, "private_endpoint_overrides", false);
    public get privateEndpointOverrides() {
        return this._privateEndpointOverrides;
    }
    public putPrivateEndpointOverrides(value: PrivateEndpointOverrideProperty[] | cdktn.IResolvable) {
        this._privateEndpointOverrides.internalValue = value;
    }
    public resetPrivateEndpointOverrides() {
        this._privateEndpointOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateEndpointOverridesInput() {
        return this._privateEndpointOverrides.internalValue;
    }
}
export interface AuthorizerConfigurationProperty {
    /**
    * Configuration for custom JWT authorizer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#custom_jwt_authorizer CcRuntime#custom_jwt_authorizer}
    */
    readonly customJwtAuthorizer?: CustomJWTAuthorizerConfigurationProperty;
}
export class AuthorizerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customJwtAuthorizer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customJwtAuthorizer.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
        }
    }

    // custom_jwt_authorizer - computed: true, optional: true, required: false
    private _customJwtAuthorizer = new CustomJWTAuthorizerConfigurationPropertyOutputReference(this, "custom_jwt_authorizer");
    public get customJwtAuthorizer() {
        return this._customJwtAuthorizer;
    }
    public putCustomJwtAuthorizer(value: CustomJWTAuthorizerConfigurationProperty) {
        this._customJwtAuthorizer.internalValue = value;
    }
    public resetCustomJwtAuthorizer() {
        this._customJwtAuthorizer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customJwtAuthorizerInput() {
        return this._customJwtAuthorizer.internalValue;
    }
}
export interface EfsAccessPointConfigurationProperty {
    /**
    * ARN of the EFS access point
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#access_point_arn CcRuntime#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * Mount path for filesystem configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#mount_path CcRuntime#mount_path}
    */
    readonly mountPath?: string;
}
export class EfsAccessPointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EfsAccessPointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessPointArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointArn = this._accessPointArn;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EfsAccessPointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessPointArn = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessPointArn = value.accessPointArn;
            this._mountPath = value.mountPath;
        }
    }

    // access_point_arn - computed: true, optional: true, required: false
    private _accessPointArn?: string; 
    public get accessPointArn() {
        return this.getStringAttribute('access_point_arn');
    }
    public set accessPointArn(value: string) {
        this._accessPointArn = value;
    }
    public resetAccessPointArn() {
        this._accessPointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointArnInput() {
        return this._accessPointArn;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface S3FilesAccessPointConfigurationProperty {
    /**
    * ARN of the S3 Files access point
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#access_point_arn CcRuntime#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * Mount path for filesystem configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#mount_path CcRuntime#mount_path}
    */
    readonly mountPath?: string;
}
export class S3FilesAccessPointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3FilesAccessPointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessPointArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointArn = this._accessPointArn;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3FilesAccessPointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessPointArn = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessPointArn = value.accessPointArn;
            this._mountPath = value.mountPath;
        }
    }

    // access_point_arn - computed: true, optional: true, required: false
    private _accessPointArn?: string; 
    public get accessPointArn() {
        return this.getStringAttribute('access_point_arn');
    }
    public set accessPointArn(value: string) {
        this._accessPointArn = value;
    }
    public resetAccessPointArn() {
        this._accessPointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointArnInput() {
        return this._accessPointArn;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface SessionStorageConfigurationProperty {
    /**
    * Mount path for filesystem configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#mount_path CcRuntime#mount_path}
    */
    readonly mountPath?: string;
}
export class SessionStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mountPath = value.mountPath;
        }
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface FilesystemConfigurationProperty {
    /**
    * Configuration for EFS access point filesystem
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#efs_access_point CcRuntime#efs_access_point}
    */
    readonly efsAccessPoint?: EfsAccessPointConfigurationProperty;
    /**
    * Configuration for S3 Files access point filesystem
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#s3_files_access_point CcRuntime#s3_files_access_point}
    */
    readonly s3FilesAccessPoint?: S3FilesAccessPointConfigurationProperty;
    /**
    * Configuration for session storage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#session_storage CcRuntime#session_storage}
    */
    readonly sessionStorage?: SessionStorageConfigurationProperty;
}
export class FilesystemConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilesystemConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._efsAccessPoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsAccessPoint = this._efsAccessPoint?.internalValue;
        }
        if (this._s3FilesAccessPoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FilesAccessPoint = this._s3FilesAccessPoint?.internalValue;
        }
        if (this._sessionStorage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionStorage = this._sessionStorage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilesystemConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._efsAccessPoint.internalValue = undefined;
            this._s3FilesAccessPoint.internalValue = undefined;
            this._sessionStorage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._efsAccessPoint.internalValue = value.efsAccessPoint;
            this._s3FilesAccessPoint.internalValue = value.s3FilesAccessPoint;
            this._sessionStorage.internalValue = value.sessionStorage;
        }
    }

    // efs_access_point - computed: true, optional: true, required: false
    private _efsAccessPoint = new EfsAccessPointConfigurationPropertyOutputReference(this, "efs_access_point");
    public get efsAccessPoint() {
        return this._efsAccessPoint;
    }
    public putEfsAccessPoint(value: EfsAccessPointConfigurationProperty) {
        this._efsAccessPoint.internalValue = value;
    }
    public resetEfsAccessPoint() {
        this._efsAccessPoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get efsAccessPointInput() {
        return this._efsAccessPoint.internalValue;
    }

    // s3_files_access_point - computed: true, optional: true, required: false
    private _s3FilesAccessPoint = new S3FilesAccessPointConfigurationPropertyOutputReference(this, "s3_files_access_point");
    public get s3FilesAccessPoint() {
        return this._s3FilesAccessPoint;
    }
    public putS3FilesAccessPoint(value: S3FilesAccessPointConfigurationProperty) {
        this._s3FilesAccessPoint.internalValue = value;
    }
    public resetS3FilesAccessPoint() {
        this._s3FilesAccessPoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FilesAccessPointInput() {
        return this._s3FilesAccessPoint.internalValue;
    }

    // session_storage - computed: true, optional: true, required: false
    private _sessionStorage = new SessionStorageConfigurationPropertyOutputReference(this, "session_storage");
    public get sessionStorage() {
        return this._sessionStorage;
    }
    public putSessionStorage(value: SessionStorageConfigurationProperty) {
        this._sessionStorage.internalValue = value;
    }
    public resetSessionStorage() {
        this._sessionStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionStorageInput() {
        return this._sessionStorage.internalValue;
    }
}

export class FilesystemConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : FilesystemConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): FilesystemConfigurationPropertyOutputReference {
        return new FilesystemConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LifecycleConfigurationProperty {
    /**
    * Timeout in seconds for idle runtime sessions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#idle_runtime_session_timeout CcRuntime#idle_runtime_session_timeout}
    */
    readonly idleRuntimeSessionTimeout?: number;
    /**
    * Maximum lifetime in seconds for runtime sessions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#max_lifetime CcRuntime#max_lifetime}
    */
    readonly maxLifetime?: number;
}
export class LifecycleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LifecycleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleRuntimeSessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleRuntimeSessionTimeout = this._idleRuntimeSessionTimeout;
        }
        if (this._maxLifetime !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLifetime = this._maxLifetime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LifecycleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleRuntimeSessionTimeout = undefined;
            this._maxLifetime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleRuntimeSessionTimeout = value.idleRuntimeSessionTimeout;
            this._maxLifetime = value.maxLifetime;
        }
    }

    // idle_runtime_session_timeout - computed: true, optional: true, required: false
    private _idleRuntimeSessionTimeout?: number; 
    public get idleRuntimeSessionTimeout() {
        return this.getNumberAttribute('idle_runtime_session_timeout');
    }
    public set idleRuntimeSessionTimeout(value: number) {
        this._idleRuntimeSessionTimeout = value;
    }
    public resetIdleRuntimeSessionTimeout() {
        this._idleRuntimeSessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleRuntimeSessionTimeoutInput() {
        return this._idleRuntimeSessionTimeout;
    }

    // max_lifetime - computed: true, optional: true, required: false
    private _maxLifetime?: number; 
    public get maxLifetime() {
        return this.getNumberAttribute('max_lifetime');
    }
    public set maxLifetime(value: number) {
        this._maxLifetime = value;
    }
    public resetMaxLifetime() {
        this._maxLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLifetimeInput() {
        return this._maxLifetime;
    }
}
export interface VpcConfigProperty {
    /**
    * Security groups for VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#security_groups CcRuntime#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Subnets for VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#subnets CcRuntime#subnets}
    */
    readonly subnets?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * Network mode configuration type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#network_mode CcRuntime#network_mode}
    */
    readonly networkMode: string;
    /**
    * Network mode configuration for VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#network_mode_config CcRuntime#network_mode_config}
    */
    readonly networkModeConfig?: VpcConfigProperty;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkMode = this._networkMode;
        }
        if (this._networkModeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkModeConfig = this._networkModeConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkMode = undefined;
            this._networkModeConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkMode = value.networkMode;
            this._networkModeConfig.internalValue = value.networkModeConfig;
        }
    }

    // network_mode - computed: false, optional: false, required: true
    private _networkMode?: string; 
    public get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    public set networkMode(value: string) {
        this._networkMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeInput() {
        return this._networkMode;
    }

    // network_mode_config - computed: true, optional: true, required: false
    private _networkModeConfig = new VpcConfigPropertyOutputReference(this, "network_mode_config");
    public get networkModeConfig() {
        return this._networkModeConfig;
    }
    public putNetworkModeConfig(value: VpcConfigProperty) {
        this._networkModeConfig.internalValue = value;
    }
    public resetNetworkModeConfig() {
        this._networkModeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeConfigInput() {
        return this._networkModeConfig.internalValue;
    }
}
export interface RequestHeaderConfigurationProperty {
    /**
    * List of allowed HTTP headers for agent runtime requests
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime#request_header_allowlist CcRuntime#request_header_allowlist}
    */
    readonly requestHeaderAllowlist?: string[];
}
export class RequestHeaderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestHeaderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._requestHeaderAllowlist !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestHeaderAllowlist = this._requestHeaderAllowlist;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequestHeaderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._requestHeaderAllowlist = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._requestHeaderAllowlist = value.requestHeaderAllowlist;
        }
    }

    // request_header_allowlist - computed: true, optional: true, required: false
    private _requestHeaderAllowlist?: string[]; 
    public get requestHeaderAllowlist() {
        return cdktn.Fn.tolist(this.getListAttribute('request_header_allowlist'));
    }
    public set requestHeaderAllowlist(value: string[]) {
        this._requestHeaderAllowlist = value;
    }
    public resetRequestHeaderAllowlist() {
        this._requestHeaderAllowlist = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestHeaderAllowlistInput() {
        return this._requestHeaderAllowlist;
    }
}
export interface WorkloadIdentityDetailsProperty {
}
export class WorkloadIdentityDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkloadIdentityDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkloadIdentityDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // workload_identity_arn - computed: true, optional: false, required: false
    public get workloadIdentityArn() {
        return this.getStringAttribute('workload_identity_arn');
    }
}
}
