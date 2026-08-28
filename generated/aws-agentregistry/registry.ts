// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRegistryProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration for the registry's record approval workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#approval_configuration CcRegistry#approval_configuration}
    */
    readonly approvalConfiguration?: CcRegistry.ApprovalConfigurationProperty;
    /**
    * The type of authorizer that controls how consumers access the registry's search and MCP invoke operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#authorizer_type CcRegistry#authorizer_type}
    */
    readonly authorizerType?: string;
    /**
    * The description of the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#description CcRegistry#description}
    */
    readonly description?: string;
    /**
    * Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#discovery_configuration CcRegistry#discovery_configuration}
    */
    readonly discoveryConfiguration?: CcRegistry.DiscoveryConfigurationProperty;
    /**
    * The name of the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#name CcRegistry#name}
    */
    readonly name: string;
    /**
    * Tags to assign to the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#tags CcRegistry#tags}
    */
    readonly tags?: CcRegistry.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry awscc_agentregistry_registry}
*/
export class CcRegistry extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_agentregistry_registry";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRegistry resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRegistry to import
    * @param importFromId The id of the existing CcRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRegistry to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_agentregistry_registry", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry awscc_agentregistry_registry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRegistryProps
    */
    public constructor(scope: Construct, id: string, config: CcRegistryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_agentregistry_registry',
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
        this._approvalConfiguration.internalValue = config.approvalConfiguration;
        this._authorizerType = config.authorizerType;
        this._description = config.description;
        this._discoveryConfiguration.internalValue = config.discoveryConfiguration;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // approval_configuration - computed: true, optional: true, required: false
    private _approvalConfiguration = new CcRegistry.ApprovalConfigurationPropertyOutputReference(this, "approval_configuration");
    public get approvalConfiguration() {
        return this._approvalConfiguration;
    }
    public putApprovalConfiguration(value: CcRegistry.ApprovalConfigurationProperty) {
        this._approvalConfiguration.internalValue = value;
    }
    public resetApprovalConfiguration() {
        this._approvalConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvalConfigurationInput() {
        return this._approvalConfiguration.internalValue;
    }

    // authorizer_type - computed: true, optional: true, required: false
    private _authorizerType?: string; 
    public get authorizerType() {
        return this.getStringAttribute('authorizer_type');
    }
    public set authorizerType(value: string) {
        this._authorizerType = value;
    }
    public resetAuthorizerType() {
        this._authorizerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerTypeInput() {
        return this._authorizerType;
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

    // discovery_configuration - computed: true, optional: true, required: false
    private _discoveryConfiguration = new CcRegistry.DiscoveryConfigurationPropertyOutputReference(this, "discovery_configuration");
    public get discoveryConfiguration() {
        return this._discoveryConfiguration;
    }
    public putDiscoveryConfiguration(value: CcRegistry.DiscoveryConfigurationProperty) {
        this._discoveryConfiguration.internalValue = value;
    }
    public resetDiscoveryConfiguration() {
        this._discoveryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get discoveryConfigurationInput() {
        return this._discoveryConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // registry_arn - computed: true, optional: false, required: false
    public get registryArn() {
        return this.getStringAttribute('registry_arn');
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
        return this.getStringAttribute('registry_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRegistry.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRegistry.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            approval_configuration: ccRegistryApprovalConfigurationPropertyToTerraform(this._approvalConfiguration.internalValue),
            authorizer_type: cdktn.stringToTerraform(this._authorizerType),
            description: cdktn.stringToTerraform(this._description),
            discovery_configuration: ccRegistryDiscoveryConfigurationPropertyToTerraform(this._discoveryConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccRegistryTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            approval_configuration: {
                value: ccRegistryApprovalConfigurationPropertyToHclTerraform(this._approvalConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRegistry.ApprovalConfigurationProperty",
            },
            authorizer_type: {
                value: cdktn.stringToHclTerraform(this._authorizerType),
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
            discovery_configuration: {
                value: ccRegistryDiscoveryConfigurationPropertyToHclTerraform(this._discoveryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRegistry.DiscoveryConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRegistryTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRegistry.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRegistryApprovalConfigurationPropertyToTerraform(struct?: CcRegistry.ApprovalConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_approval_rules: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.autoApprovalRules),
    }
}


export function ccRegistryApprovalConfigurationPropertyToHclTerraform(struct?: CcRegistry.ApprovalConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_approval_rules: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.autoApprovalRules),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryClaimMatchValueTypePropertyToTerraform(struct?: CcRegistry.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
        match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
    }
}


export function ccRegistryClaimMatchValueTypePropertyToHclTerraform(struct?: CcRegistry.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
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


export function ccRegistryAuthorizingClaimMatchValueTypePropertyToTerraform(struct?: CcRegistry.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
        claim_match_value: ccRegistryClaimMatchValueTypePropertyToTerraform(struct!.claimMatchValue),
    }
}


export function ccRegistryAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct?: CcRegistry.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
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
            value: ccRegistryClaimMatchValueTypePropertyToHclTerraform(struct!.claimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "ClaimMatchValueTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryCustomClaimValidationTypePropertyToTerraform(struct?: CcRegistry.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizing_claim_match_value: ccRegistryAuthorizingClaimMatchValueTypePropertyToTerraform(struct!.authorizingClaimMatchValue),
        inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
        inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    }
}


export function ccRegistryCustomClaimValidationTypePropertyToHclTerraform(struct?: CcRegistry.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizing_claim_match_value: {
            value: ccRegistryAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct!.authorizingClaimMatchValue),
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


export function ccRegistryCustomJWTAuthorizerConfigurationPropertyToTerraform(struct?: CcRegistry.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
        allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
        allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
        custom_claims: cdktn.listMapper(ccRegistryCustomClaimValidationTypePropertyToTerraform, false)(struct!.customClaims),
        discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    }
}


export function ccRegistryCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct?: CcRegistry.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
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
        custom_claims: {
            value: cdktn.listMapperHcl(ccRegistryCustomClaimValidationTypePropertyToHclTerraform, false)(struct!.customClaims),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryAuthorizerConfigurationPropertyToTerraform(struct?: CcRegistry.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_jwt_authorizer: ccRegistryCustomJWTAuthorizerConfigurationPropertyToTerraform(struct!.customJwtAuthorizer),
    }
}


export function ccRegistryAuthorizerConfigurationPropertyToHclTerraform(struct?: CcRegistry.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_jwt_authorizer: {
            value: ccRegistryCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct!.customJwtAuthorizer),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomJWTAuthorizerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryDiscoveryConfigurationPropertyToTerraform(struct?: CcRegistry.DiscoveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizer_configuration: ccRegistryAuthorizerConfigurationPropertyToTerraform(struct!.authorizerConfiguration),
    }
}


export function ccRegistryDiscoveryConfigurationPropertyToHclTerraform(struct?: CcRegistry.DiscoveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizer_configuration: {
            value: ccRegistryAuthorizerConfigurationPropertyToHclTerraform(struct!.authorizerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryTagPropertyToTerraform(struct?: CcRegistry.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRegistryTagPropertyToHclTerraform(struct?: CcRegistry.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRegistry {
export interface ApprovalConfigurationProperty {
    /**
    * The rules that determine which registry records are automatically approved on submission. When omitted or empty, submitted records require manual review.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#auto_approval_rules CcRegistry#auto_approval_rules}
    */
    readonly autoApprovalRules?: string[];
}
export class ApprovalConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApprovalConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoApprovalRules !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoApprovalRules = this._autoApprovalRules;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApprovalConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoApprovalRules = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoApprovalRules = value.autoApprovalRules;
        }
    }

    // auto_approval_rules - computed: true, optional: true, required: false
    private _autoApprovalRules?: string[]; 
    public get autoApprovalRules() {
        return this.getListAttribute('auto_approval_rules');
    }
    public set autoApprovalRules(value: string[]) {
        this._autoApprovalRules = value;
    }
    public resetAutoApprovalRules() {
        this._autoApprovalRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoApprovalRulesInput() {
        return this._autoApprovalRules;
    }
}
export interface ClaimMatchValueTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#match_value_string CcRegistry#match_value_string}
    */
    readonly matchValueString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#match_value_string_list CcRegistry#match_value_string_list}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#claim_match_operator CcRegistry#claim_match_operator}
    */
    readonly claimMatchOperator?: string;
    /**
    * The expected value used to match a claim. Exactly one member is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#claim_match_value CcRegistry#claim_match_value}
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
    * The value and match operator used to authorize a claim during JWT validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#authorizing_claim_match_value CcRegistry#authorizing_claim_match_value}
    */
    readonly authorizingClaimMatchValue?: AuthorizingClaimMatchValueTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#inbound_token_claim_name CcRegistry#inbound_token_claim_name}
    */
    readonly inboundTokenClaimName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#inbound_token_claim_value_type CcRegistry#inbound_token_claim_value_type}
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
export interface CustomJWTAuthorizerConfigurationProperty {
    /**
    * The audience values accepted during JWT validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#allowed_audience CcRegistry#allowed_audience}
    */
    readonly allowedAudience?: string[];
    /**
    * The client identifiers accepted during JWT validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#allowed_clients CcRegistry#allowed_clients}
    */
    readonly allowedClients?: string[];
    /**
    * The scopes accepted during JWT validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#allowed_scopes CcRegistry#allowed_scopes}
    */
    readonly allowedScopes?: string[];
    /**
    * Additional custom claim validations applied to the inbound JWT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#custom_claims CcRegistry#custom_claims}
    */
    readonly customClaims?: CustomClaimValidationTypeProperty[] | cdktn.IResolvable;
    /**
    * The OpenID Connect discovery URL used to retrieve the identity provider's metadata and signing keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#discovery_url CcRegistry#discovery_url}
    */
    readonly discoveryUrl?: string;
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
        if (this._customClaims?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customClaims = this._customClaims?.internalValue;
        }
        if (this._discoveryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.discoveryUrl = this._discoveryUrl;
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
            this._customClaims.internalValue = undefined;
            this._discoveryUrl = undefined;
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
            this._customClaims.internalValue = value.customClaims;
            this._discoveryUrl = value.discoveryUrl;
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
}
export interface AuthorizerConfigurationProperty {
    /**
    * Configuration for a custom JWT authorizer that validates inbound bearer tokens against an OpenID Connect identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#custom_jwt_authorizer CcRegistry#custom_jwt_authorizer}
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
export interface DiscoveryConfigurationProperty {
    /**
    * The authorizer configuration for the registry. This is a union - specify exactly one member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#authorizer_configuration CcRegistry#authorizer_configuration}
    */
    readonly authorizerConfiguration?: AuthorizerConfigurationProperty;
}
export class DiscoveryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DiscoveryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerConfiguration = this._authorizerConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DiscoveryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizerConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizerConfiguration.internalValue = value.authorizerConfiguration;
        }
    }

    // authorizer_configuration - computed: true, optional: true, required: false
    private _authorizerConfiguration = new AuthorizerConfigurationPropertyOutputReference(this, "authorizer_configuration");
    public get authorizerConfiguration() {
        return this._authorizerConfiguration;
    }
    public putAuthorizerConfiguration(value: AuthorizerConfigurationProperty) {
        this._authorizerConfiguration.internalValue = value;
    }
    public resetAuthorizerConfiguration() {
        this._authorizerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerConfigurationInput() {
        return this._authorizerConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#key CcRegistry#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/agentregistry_registry#value CcRegistry#value}
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
