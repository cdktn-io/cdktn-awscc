// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#authorizer_configuration CcGateway#authorizer_configuration}
    */
    readonly authorizerConfiguration?: CcGateway.AuthorizerConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#authorizer_type CcGateway#authorizer_type}
    */
    readonly authorizerType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#description CcGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#exception_level CcGateway#exception_level}
    */
    readonly exceptionLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#interceptor_configurations CcGateway#interceptor_configurations}
    */
    readonly interceptorConfigurations?: CcGateway.GatewayInterceptorConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#kms_key_arn CcGateway#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#name CcGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#policy_engine_configuration CcGateway#policy_engine_configuration}
    */
    readonly policyEngineConfiguration?: CcGateway.GatewayPolicyEngineConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#protocol_configuration CcGateway#protocol_configuration}
    */
    readonly protocolConfiguration?: CcGateway.GatewayProtocolConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#protocol_type CcGateway#protocol_type}
    */
    readonly protocolType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#role_arn CcGateway#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#tags CcGateway#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway awscc_bedrockagentcore_gateway}
*/
export class CcGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGateway to import
    * @param importFromId The id of the existing CcGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway awscc_bedrockagentcore_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_gateway',
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
        this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
        this._authorizerType = config.authorizerType;
        this._description = config.description;
        this._exceptionLevel = config.exceptionLevel;
        this._interceptorConfigurations.internalValue = config.interceptorConfigurations;
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._policyEngineConfiguration.internalValue = config.policyEngineConfiguration;
        this._protocolConfiguration.internalValue = config.protocolConfiguration;
        this._protocolType = config.protocolType;
        this._roleArn = config.roleArn;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authorizer_configuration - computed: true, optional: true, required: false
    private _authorizerConfiguration = new CcGateway.AuthorizerConfigurationPropertyOutputReference(this, "authorizer_configuration");
    public get authorizerConfiguration() {
        return this._authorizerConfiguration;
    }
    public putAuthorizerConfiguration(value: CcGateway.AuthorizerConfigurationProperty) {
        this._authorizerConfiguration.internalValue = value;
    }
    public resetAuthorizerConfiguration() {
        this._authorizerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerConfigurationInput() {
        return this._authorizerConfiguration.internalValue;
    }

    // authorizer_type - computed: false, optional: false, required: true
    private _authorizerType?: string; 
    public get authorizerType() {
        return this.getStringAttribute('authorizer_type');
    }
    public set authorizerType(value: string) {
        this._authorizerType = value;
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

    // exception_level - computed: true, optional: true, required: false
    private _exceptionLevel?: string; 
    public get exceptionLevel() {
        return this.getStringAttribute('exception_level');
    }
    public set exceptionLevel(value: string) {
        this._exceptionLevel = value;
    }
    public resetExceptionLevel() {
        this._exceptionLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exceptionLevelInput() {
        return this._exceptionLevel;
    }

    // gateway_arn - computed: true, optional: false, required: false
    public get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
    }

    // gateway_identifier - computed: true, optional: false, required: false
    public get gatewayIdentifier() {
        return this.getStringAttribute('gateway_identifier');
    }

    // gateway_url - computed: true, optional: false, required: false
    public get gatewayUrl() {
        return this.getStringAttribute('gateway_url');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // interceptor_configurations - computed: true, optional: true, required: false
    private _interceptorConfigurations = new CcGateway.GatewayInterceptorConfigurationPropertyList(this, "interceptor_configurations", false);
    public get interceptorConfigurations() {
        return this._interceptorConfigurations;
    }
    public putInterceptorConfigurations(value: CcGateway.GatewayInterceptorConfigurationProperty[] | cdktn.IResolvable) {
        this._interceptorConfigurations.internalValue = value;
    }
    public resetInterceptorConfigurations() {
        this._interceptorConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interceptorConfigurationsInput() {
        return this._interceptorConfigurations.internalValue;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
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

    // policy_engine_configuration - computed: true, optional: true, required: false
    private _policyEngineConfiguration = new CcGateway.GatewayPolicyEngineConfigurationPropertyOutputReference(this, "policy_engine_configuration");
    public get policyEngineConfiguration() {
        return this._policyEngineConfiguration;
    }
    public putPolicyEngineConfiguration(value: CcGateway.GatewayPolicyEngineConfigurationProperty) {
        this._policyEngineConfiguration.internalValue = value;
    }
    public resetPolicyEngineConfiguration() {
        this._policyEngineConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyEngineConfigurationInput() {
        return this._policyEngineConfiguration.internalValue;
    }

    // protocol_configuration - computed: true, optional: true, required: false
    private _protocolConfiguration = new CcGateway.GatewayProtocolConfigurationPropertyOutputReference(this, "protocol_configuration");
    public get protocolConfiguration() {
        return this._protocolConfiguration;
    }
    public putProtocolConfiguration(value: CcGateway.GatewayProtocolConfigurationProperty) {
        this._protocolConfiguration.internalValue = value;
    }
    public resetProtocolConfiguration() {
        this._protocolConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolConfigurationInput() {
        return this._protocolConfiguration.internalValue;
    }

    // protocol_type - computed: true, optional: true, required: false
    private _protocolType?: string; 
    public get protocolType() {
        return this.getStringAttribute('protocol_type');
    }
    public set protocolType(value: string) {
        this._protocolType = value;
    }
    public resetProtocolType() {
        this._protocolType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolTypeInput() {
        return this._protocolType;
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

    // status_reasons - computed: true, optional: false, required: false
    public get statusReasons() {
        return this.getListAttribute('status_reasons');
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

    // workload_identity_details - computed: true, optional: false, required: false
    private _workloadIdentityDetails = new CcGateway.WorkloadIdentityDetailsPropertyOutputReference(this, "workload_identity_details");
    public get workloadIdentityDetails() {
        return this._workloadIdentityDetails;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            authorizer_configuration: ccGatewayAuthorizerConfigurationPropertyToTerraform(this._authorizerConfiguration.internalValue),
            authorizer_type: cdktn.stringToTerraform(this._authorizerType),
            description: cdktn.stringToTerraform(this._description),
            exception_level: cdktn.stringToTerraform(this._exceptionLevel),
            interceptor_configurations: cdktn.listMapper(ccGatewayGatewayInterceptorConfigurationPropertyToTerraform, false)(this._interceptorConfigurations.internalValue),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            name: cdktn.stringToTerraform(this._name),
            policy_engine_configuration: ccGatewayGatewayPolicyEngineConfigurationPropertyToTerraform(this._policyEngineConfiguration.internalValue),
            protocol_configuration: ccGatewayGatewayProtocolConfigurationPropertyToTerraform(this._protocolConfiguration.internalValue),
            protocol_type: cdktn.stringToTerraform(this._protocolType),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authorizer_configuration: {
                value: ccGatewayAuthorizerConfigurationPropertyToHclTerraform(this._authorizerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGateway.AuthorizerConfigurationProperty",
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
            exception_level: {
                value: cdktn.stringToHclTerraform(this._exceptionLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            interceptor_configurations: {
                value: cdktn.listMapperHcl(ccGatewayGatewayInterceptorConfigurationPropertyToHclTerraform, false)(this._interceptorConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGateway.GatewayInterceptorConfigurationPropertyList",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_engine_configuration: {
                value: ccGatewayGatewayPolicyEngineConfigurationPropertyToHclTerraform(this._policyEngineConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGateway.GatewayPolicyEngineConfigurationProperty",
            },
            protocol_configuration: {
                value: ccGatewayGatewayProtocolConfigurationPropertyToHclTerraform(this._protocolConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGateway.GatewayProtocolConfigurationProperty",
            },
            protocol_type: {
                value: cdktn.stringToHclTerraform(this._protocolType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccGatewayClaimMatchValueTypePropertyToTerraform(struct?: CcGateway.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
        match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
    }
}


export function ccGatewayClaimMatchValueTypePropertyToHclTerraform(struct?: CcGateway.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
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


export function ccGatewayAuthorizingClaimMatchValueTypePropertyToTerraform(struct?: CcGateway.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
        claim_match_value: ccGatewayClaimMatchValueTypePropertyToTerraform(struct!.claimMatchValue),
    }
}


export function ccGatewayAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct?: CcGateway.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
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
            value: ccGatewayClaimMatchValueTypePropertyToHclTerraform(struct!.claimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "ClaimMatchValueTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayCustomClaimValidationTypePropertyToTerraform(struct?: CcGateway.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizing_claim_match_value: ccGatewayAuthorizingClaimMatchValueTypePropertyToTerraform(struct!.authorizingClaimMatchValue),
        inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
        inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    }
}


export function ccGatewayCustomClaimValidationTypePropertyToHclTerraform(struct?: CcGateway.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizing_claim_match_value: {
            value: ccGatewayAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct!.authorizingClaimMatchValue),
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


export function ccGatewayManagedVpcResourcePropertyToTerraform(struct?: CcGateway.ManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
        routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
    }
}


export function ccGatewayManagedVpcResourcePropertyToHclTerraform(struct?: CcGateway.ManagedVpcResourceProperty | cdktn.IResolvable): any {
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


export function ccGatewaySelfManagedLatticeResourcePropertyToTerraform(struct?: CcGateway.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
    }
}


export function ccGatewaySelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcGateway.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
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


export function ccGatewayPrivateEndpointPropertyToTerraform(struct?: CcGateway.PrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_vpc_resource: ccGatewayManagedVpcResourcePropertyToTerraform(struct!.managedVpcResource),
        self_managed_lattice_resource: ccGatewaySelfManagedLatticeResourcePropertyToTerraform(struct!.selfManagedLatticeResource),
    }
}


export function ccGatewayPrivateEndpointPropertyToHclTerraform(struct?: CcGateway.PrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_vpc_resource: {
            value: ccGatewayManagedVpcResourcePropertyToHclTerraform(struct!.managedVpcResource),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedVpcResourceProperty",
        },
        self_managed_lattice_resource: {
            value: ccGatewaySelfManagedLatticeResourcePropertyToHclTerraform(struct!.selfManagedLatticeResource),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedLatticeResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayCustomJWTAuthorizerConfigurationPropertyToTerraform(struct?: CcGateway.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        advertised_scope_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.advertisedScopeMapping),
        allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
        allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
        allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
        custom_claims: cdktn.listMapper(ccGatewayCustomClaimValidationTypePropertyToTerraform, false)(struct!.customClaims),
        discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
        private_endpoint: ccGatewayPrivateEndpointPropertyToTerraform(struct!.privateEndpoint),
    }
}


export function ccGatewayCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct?: CcGateway.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        advertised_scope_mapping: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.advertisedScopeMapping),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
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
            value: cdktn.listMapperHcl(ccGatewayCustomClaimValidationTypePropertyToHclTerraform, false)(struct!.customClaims),
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
            value: ccGatewayPrivateEndpointPropertyToHclTerraform(struct!.privateEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateEndpointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayAuthorizerConfigurationPropertyToTerraform(struct?: CcGateway.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_jwt_authorizer: ccGatewayCustomJWTAuthorizerConfigurationPropertyToTerraform(struct!.customJwtAuthorizer),
    }
}


export function ccGatewayAuthorizerConfigurationPropertyToHclTerraform(struct?: CcGateway.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_jwt_authorizer: {
            value: ccGatewayCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct!.customJwtAuthorizer),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomJWTAuthorizerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayInterceptorPayloadExclusionSelectorPropertyToTerraform(struct?: CcGateway.InterceptorPayloadExclusionSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field: cdktn.stringToTerraform(struct!.field),
    }
}


export function ccGatewayInterceptorPayloadExclusionSelectorPropertyToHclTerraform(struct?: CcGateway.InterceptorPayloadExclusionSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field: {
            value: cdktn.stringToHclTerraform(struct!.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayInterceptorPayloadFilterPropertyToTerraform(struct?: CcGateway.InterceptorPayloadFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude: cdktn.listMapper(ccGatewayInterceptorPayloadExclusionSelectorPropertyToTerraform, false)(struct!.exclude),
    }
}


export function ccGatewayInterceptorPayloadFilterPropertyToHclTerraform(struct?: CcGateway.InterceptorPayloadFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude: {
            value: cdktn.listMapperHcl(ccGatewayInterceptorPayloadExclusionSelectorPropertyToHclTerraform, false)(struct!.exclude),
            isBlock: true,
            type: "list",
            storageClassType: "InterceptorPayloadExclusionSelectorPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayInterceptorInputConfigurationPropertyToTerraform(struct?: CcGateway.InterceptorInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pass_request_headers: cdktn.booleanToTerraform(struct!.passRequestHeaders),
        payload_filter: ccGatewayInterceptorPayloadFilterPropertyToTerraform(struct!.payloadFilter),
    }
}


export function ccGatewayInterceptorInputConfigurationPropertyToHclTerraform(struct?: CcGateway.InterceptorInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pass_request_headers: {
            value: cdktn.booleanToHclTerraform(struct!.passRequestHeaders),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        payload_filter: {
            value: ccGatewayInterceptorPayloadFilterPropertyToHclTerraform(struct!.payloadFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "InterceptorPayloadFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayLambdaInterceptorConfigurationPropertyToTerraform(struct?: CcGateway.LambdaInterceptorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccGatewayLambdaInterceptorConfigurationPropertyToHclTerraform(struct?: CcGateway.LambdaInterceptorConfigurationProperty | cdktn.IResolvable): any {
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


export function ccGatewayInterceptorConfigurationPropertyToTerraform(struct?: CcGateway.InterceptorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda: ccGatewayLambdaInterceptorConfigurationPropertyToTerraform(struct!.lambda),
    }
}


export function ccGatewayInterceptorConfigurationPropertyToHclTerraform(struct?: CcGateway.InterceptorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda: {
            value: ccGatewayLambdaInterceptorConfigurationPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaInterceptorConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayGatewayInterceptorConfigurationPropertyToTerraform(struct?: CcGateway.GatewayInterceptorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_configuration: ccGatewayInterceptorInputConfigurationPropertyToTerraform(struct!.inputConfiguration),
        interception_points: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.interceptionPoints),
        interceptor: ccGatewayInterceptorConfigurationPropertyToTerraform(struct!.interceptor),
    }
}


export function ccGatewayGatewayInterceptorConfigurationPropertyToHclTerraform(struct?: CcGateway.GatewayInterceptorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_configuration: {
            value: ccGatewayInterceptorInputConfigurationPropertyToHclTerraform(struct!.inputConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InterceptorInputConfigurationProperty",
        },
        interception_points: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.interceptionPoints),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        interceptor: {
            value: ccGatewayInterceptorConfigurationPropertyToHclTerraform(struct!.interceptor),
            isBlock: true,
            type: "struct",
            storageClassType: "InterceptorConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayGatewayPolicyEngineConfigurationPropertyToTerraform(struct?: CcGateway.GatewayPolicyEngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccGatewayGatewayPolicyEngineConfigurationPropertyToHclTerraform(struct?: CcGateway.GatewayPolicyEngineConfigurationProperty | cdktn.IResolvable): any {
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
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewaySessionConfigurationPropertyToTerraform(struct?: CcGateway.SessionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        session_timeout_in_seconds: cdktn.numberToTerraform(struct!.sessionTimeoutInSeconds),
    }
}


export function ccGatewaySessionConfigurationPropertyToHclTerraform(struct?: CcGateway.SessionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        session_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.sessionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayStreamingConfigurationPropertyToTerraform(struct?: CcGateway.StreamingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_response_streaming: cdktn.booleanToTerraform(struct!.enableResponseStreaming),
    }
}


export function ccGatewayStreamingConfigurationPropertyToHclTerraform(struct?: CcGateway.StreamingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_response_streaming: {
            value: cdktn.booleanToHclTerraform(struct!.enableResponseStreaming),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayMCPGatewayConfigurationPropertyToTerraform(struct?: CcGateway.MCPGatewayConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instructions: cdktn.stringToTerraform(struct!.instructions),
        search_type: cdktn.stringToTerraform(struct!.searchType),
        session_configuration: ccGatewaySessionConfigurationPropertyToTerraform(struct!.sessionConfiguration),
        streaming_configuration: ccGatewayStreamingConfigurationPropertyToTerraform(struct!.streamingConfiguration),
        supported_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedVersions),
    }
}


export function ccGatewayMCPGatewayConfigurationPropertyToHclTerraform(struct?: CcGateway.MCPGatewayConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instructions: {
            value: cdktn.stringToHclTerraform(struct!.instructions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search_type: {
            value: cdktn.stringToHclTerraform(struct!.searchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_configuration: {
            value: ccGatewaySessionConfigurationPropertyToHclTerraform(struct!.sessionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionConfigurationProperty",
        },
        streaming_configuration: {
            value: ccGatewayStreamingConfigurationPropertyToHclTerraform(struct!.streamingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "StreamingConfigurationProperty",
        },
        supported_versions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedVersions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayGatewayProtocolConfigurationPropertyToTerraform(struct?: CcGateway.GatewayProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mcp: ccGatewayMCPGatewayConfigurationPropertyToTerraform(struct!.mcp),
    }
}


export function ccGatewayGatewayProtocolConfigurationPropertyToHclTerraform(struct?: CcGateway.GatewayProtocolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mcp: {
            value: ccGatewayMCPGatewayConfigurationPropertyToHclTerraform(struct!.mcp),
            isBlock: true,
            type: "struct",
            storageClassType: "MCPGatewayConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGatewayWorkloadIdentityDetailsPropertyToTerraform(struct?: CcGateway.WorkloadIdentityDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccGatewayWorkloadIdentityDetailsPropertyToHclTerraform(struct?: CcGateway.WorkloadIdentityDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcGateway {
export interface ClaimMatchValueTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#match_value_string CcGateway#match_value_string}
    */
    readonly matchValueString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#match_value_string_list CcGateway#match_value_string_list}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#claim_match_operator CcGateway#claim_match_operator}
    */
    readonly claimMatchOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#claim_match_value CcGateway#claim_match_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#authorizing_claim_match_value CcGateway#authorizing_claim_match_value}
    */
    readonly authorizingClaimMatchValue?: AuthorizingClaimMatchValueTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#inbound_token_claim_name CcGateway#inbound_token_claim_name}
    */
    readonly inboundTokenClaimName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#inbound_token_claim_value_type CcGateway#inbound_token_claim_value_type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#endpoint_ip_address_type CcGateway#endpoint_ip_address_type}
    */
    readonly endpointIpAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#routing_domain CcGateway#routing_domain}
    */
    readonly routingDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#security_group_ids CcGateway#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#subnet_ids CcGateway#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#vpc_identifier CcGateway#vpc_identifier}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#resource_configuration_identifier CcGateway#resource_configuration_identifier}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#managed_vpc_resource CcGateway#managed_vpc_resource}
    */
    readonly managedVpcResource?: ManagedVpcResourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#self_managed_lattice_resource CcGateway#self_managed_lattice_resource}
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
export interface CustomJWTAuthorizerConfigurationProperty {
    /**
    * Maps an originalScope (from allowedScopes) to an advertisedScope
    * exposed in WWW-Authenticate / Protected Resource Metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#advertised_scope_mapping CcGateway#advertised_scope_mapping}
    */
    readonly advertisedScopeMapping?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#allowed_audience CcGateway#allowed_audience}
    */
    readonly allowedAudience?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#allowed_clients CcGateway#allowed_clients}
    */
    readonly allowedClients?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#allowed_scopes CcGateway#allowed_scopes}
    */
    readonly allowedScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#custom_claims CcGateway#custom_claims}
    */
    readonly customClaims?: CustomClaimValidationTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#discovery_url CcGateway#discovery_url}
    */
    readonly discoveryUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#private_endpoint CcGateway#private_endpoint}
    */
    readonly privateEndpoint?: PrivateEndpointProperty;
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
        if (this._advertisedScopeMapping !== undefined) {
            hasAnyValues = true;
            internalValueResult.advertisedScopeMapping = this._advertisedScopeMapping;
        }
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
        if (this._privateEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._advertisedScopeMapping = undefined;
            this._allowedAudience = undefined;
            this._allowedClients = undefined;
            this._allowedScopes = undefined;
            this._customClaims.internalValue = undefined;
            this._discoveryUrl = undefined;
            this._privateEndpoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._advertisedScopeMapping = value.advertisedScopeMapping;
            this._allowedAudience = value.allowedAudience;
            this._allowedClients = value.allowedClients;
            this._allowedScopes = value.allowedScopes;
            this._customClaims.internalValue = value.customClaims;
            this._discoveryUrl = value.discoveryUrl;
            this._privateEndpoint.internalValue = value.privateEndpoint;
        }
    }

    // advertised_scope_mapping - computed: true, optional: true, required: false
    private _advertisedScopeMapping?: { [key: string]: string }; 
    public get advertisedScopeMapping() {
        return this.getStringMapAttribute('advertised_scope_mapping');
    }
    public set advertisedScopeMapping(value: { [key: string]: string }) {
        this._advertisedScopeMapping = value;
    }
    public resetAdvertisedScopeMapping() {
        this._advertisedScopeMapping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advertisedScopeMappingInput() {
        return this._advertisedScopeMapping;
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
}
export interface AuthorizerConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer CcGateway#custom_jwt_authorizer}
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
export interface InterceptorPayloadExclusionSelectorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#field CcGateway#field}
    */
    readonly field?: string;
}
export class InterceptorPayloadExclusionSelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InterceptorPayloadExclusionSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterceptorPayloadExclusionSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._field = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._field = value.field;
        }
    }

    // field - computed: true, optional: true, required: false
    private _field?: string; 
    public get field() {
        return this.getStringAttribute('field');
    }
    public set field(value: string) {
        this._field = value;
    }
    public resetField() {
        this._field = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
        return this._field;
    }
}

export class InterceptorPayloadExclusionSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : InterceptorPayloadExclusionSelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): InterceptorPayloadExclusionSelectorPropertyOutputReference {
        return new InterceptorPayloadExclusionSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InterceptorPayloadFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#exclude CcGateway#exclude}
    */
    readonly exclude?: InterceptorPayloadExclusionSelectorProperty[] | cdktn.IResolvable;
}
export class InterceptorPayloadFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InterceptorPayloadFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclude?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterceptorPayloadFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclude.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclude.internalValue = value.exclude;
        }
    }

    // exclude - computed: true, optional: true, required: false
    private _exclude = new InterceptorPayloadExclusionSelectorPropertyList(this, "exclude", false);
    public get exclude() {
        return this._exclude;
    }
    public putExclude(value: InterceptorPayloadExclusionSelectorProperty[] | cdktn.IResolvable) {
        this._exclude.internalValue = value;
    }
    public resetExclude() {
        this._exclude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeInput() {
        return this._exclude.internalValue;
    }
}
export interface InterceptorInputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#pass_request_headers CcGateway#pass_request_headers}
    */
    readonly passRequestHeaders?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#payload_filter CcGateway#payload_filter}
    */
    readonly payloadFilter?: InterceptorPayloadFilterProperty;
}
export class InterceptorInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InterceptorInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._passRequestHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.passRequestHeaders = this._passRequestHeaders;
        }
        if (this._payloadFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadFilter = this._payloadFilter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterceptorInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._passRequestHeaders = undefined;
            this._payloadFilter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._passRequestHeaders = value.passRequestHeaders;
            this._payloadFilter.internalValue = value.payloadFilter;
        }
    }

    // pass_request_headers - computed: true, optional: true, required: false
    private _passRequestHeaders?: boolean | cdktn.IResolvable; 
    public get passRequestHeaders() {
        return this.getBooleanAttribute('pass_request_headers');
    }
    public set passRequestHeaders(value: boolean | cdktn.IResolvable) {
        this._passRequestHeaders = value;
    }
    public resetPassRequestHeaders() {
        this._passRequestHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passRequestHeadersInput() {
        return this._passRequestHeaders;
    }

    // payload_filter - computed: true, optional: true, required: false
    private _payloadFilter = new InterceptorPayloadFilterPropertyOutputReference(this, "payload_filter");
    public get payloadFilter() {
        return this._payloadFilter;
    }
    public putPayloadFilter(value: InterceptorPayloadFilterProperty) {
        this._payloadFilter.internalValue = value;
    }
    public resetPayloadFilter() {
        this._payloadFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFilterInput() {
        return this._payloadFilter.internalValue;
    }
}
export interface LambdaInterceptorConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#arn CcGateway#arn}
    */
    readonly arn?: string;
}
export class LambdaInterceptorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaInterceptorConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LambdaInterceptorConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface InterceptorConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#lambda CcGateway#lambda}
    */
    readonly lambda?: LambdaInterceptorConfigurationProperty;
}
export class InterceptorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InterceptorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterceptorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambda.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambda.internalValue = value.lambda;
        }
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new LambdaInterceptorConfigurationPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: LambdaInterceptorConfigurationProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }
}
export interface GatewayInterceptorConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#input_configuration CcGateway#input_configuration}
    */
    readonly inputConfiguration?: InterceptorInputConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#interception_points CcGateway#interception_points}
    */
    readonly interceptionPoints?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#interceptor CcGateway#interceptor}
    */
    readonly interceptor?: InterceptorConfigurationProperty;
}
export class GatewayInterceptorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GatewayInterceptorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputConfiguration = this._inputConfiguration?.internalValue;
        }
        if (this._interceptionPoints !== undefined) {
            hasAnyValues = true;
            internalValueResult.interceptionPoints = this._interceptionPoints;
        }
        if (this._interceptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.interceptor = this._interceptor?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GatewayInterceptorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputConfiguration.internalValue = undefined;
            this._interceptionPoints = undefined;
            this._interceptor.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputConfiguration.internalValue = value.inputConfiguration;
            this._interceptionPoints = value.interceptionPoints;
            this._interceptor.internalValue = value.interceptor;
        }
    }

    // input_configuration - computed: true, optional: true, required: false
    private _inputConfiguration = new InterceptorInputConfigurationPropertyOutputReference(this, "input_configuration");
    public get inputConfiguration() {
        return this._inputConfiguration;
    }
    public putInputConfiguration(value: InterceptorInputConfigurationProperty) {
        this._inputConfiguration.internalValue = value;
    }
    public resetInputConfiguration() {
        this._inputConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputConfigurationInput() {
        return this._inputConfiguration.internalValue;
    }

    // interception_points - computed: true, optional: true, required: false
    private _interceptionPoints?: string[]; 
    public get interceptionPoints() {
        return this.getListAttribute('interception_points');
    }
    public set interceptionPoints(value: string[]) {
        this._interceptionPoints = value;
    }
    public resetInterceptionPoints() {
        this._interceptionPoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interceptionPointsInput() {
        return this._interceptionPoints;
    }

    // interceptor - computed: true, optional: true, required: false
    private _interceptor = new InterceptorConfigurationPropertyOutputReference(this, "interceptor");
    public get interceptor() {
        return this._interceptor;
    }
    public putInterceptor(value: InterceptorConfigurationProperty) {
        this._interceptor.internalValue = value;
    }
    public resetInterceptor() {
        this._interceptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interceptorInput() {
        return this._interceptor.internalValue;
    }
}

export class GatewayInterceptorConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : GatewayInterceptorConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): GatewayInterceptorConfigurationPropertyOutputReference {
        return new GatewayInterceptorConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GatewayPolicyEngineConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#arn CcGateway#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#mode CcGateway#mode}
    */
    readonly mode?: string;
}
export class GatewayPolicyEngineConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GatewayPolicyEngineConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GatewayPolicyEngineConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._mode = value.mode;
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

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface SessionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds CcGateway#session_timeout_in_seconds}
    */
    readonly sessionTimeoutInSeconds?: number;
}
export class SessionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sessionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeoutInSeconds = this._sessionTimeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sessionTimeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sessionTimeoutInSeconds = value.sessionTimeoutInSeconds;
        }
    }

    // session_timeout_in_seconds - computed: true, optional: true, required: false
    private _sessionTimeoutInSeconds?: number; 
    public get sessionTimeoutInSeconds() {
        return this.getNumberAttribute('session_timeout_in_seconds');
    }
    public set sessionTimeoutInSeconds(value: number) {
        this._sessionTimeoutInSeconds = value;
    }
    public resetSessionTimeoutInSeconds() {
        this._sessionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutInSecondsInput() {
        return this._sessionTimeoutInSeconds;
    }
}
export interface StreamingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#enable_response_streaming CcGateway#enable_response_streaming}
    */
    readonly enableResponseStreaming?: boolean | cdktn.IResolvable;
}
export class StreamingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableResponseStreaming !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableResponseStreaming = this._enableResponseStreaming;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableResponseStreaming = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableResponseStreaming = value.enableResponseStreaming;
        }
    }

    // enable_response_streaming - computed: true, optional: true, required: false
    private _enableResponseStreaming?: boolean | cdktn.IResolvable; 
    public get enableResponseStreaming() {
        return this.getBooleanAttribute('enable_response_streaming');
    }
    public set enableResponseStreaming(value: boolean | cdktn.IResolvable) {
        this._enableResponseStreaming = value;
    }
    public resetEnableResponseStreaming() {
        this._enableResponseStreaming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableResponseStreamingInput() {
        return this._enableResponseStreaming;
    }
}
export interface MCPGatewayConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#instructions CcGateway#instructions}
    */
    readonly instructions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#search_type CcGateway#search_type}
    */
    readonly searchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#session_configuration CcGateway#session_configuration}
    */
    readonly sessionConfiguration?: SessionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#streaming_configuration CcGateway#streaming_configuration}
    */
    readonly streamingConfiguration?: StreamingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#supported_versions CcGateway#supported_versions}
    */
    readonly supportedVersions?: string[];
}
export class MCPGatewayConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MCPGatewayConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instructions !== undefined) {
            hasAnyValues = true;
            internalValueResult.instructions = this._instructions;
        }
        if (this._searchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.searchType = this._searchType;
        }
        if (this._sessionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionConfiguration = this._sessionConfiguration?.internalValue;
        }
        if (this._streamingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamingConfiguration = this._streamingConfiguration?.internalValue;
        }
        if (this._supportedVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedVersions = this._supportedVersions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MCPGatewayConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instructions = undefined;
            this._searchType = undefined;
            this._sessionConfiguration.internalValue = undefined;
            this._streamingConfiguration.internalValue = undefined;
            this._supportedVersions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instructions = value.instructions;
            this._searchType = value.searchType;
            this._sessionConfiguration.internalValue = value.sessionConfiguration;
            this._streamingConfiguration.internalValue = value.streamingConfiguration;
            this._supportedVersions = value.supportedVersions;
        }
    }

    // instructions - computed: true, optional: true, required: false
    private _instructions?: string; 
    public get instructions() {
        return this.getStringAttribute('instructions');
    }
    public set instructions(value: string) {
        this._instructions = value;
    }
    public resetInstructions() {
        this._instructions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instructionsInput() {
        return this._instructions;
    }

    // search_type - computed: true, optional: true, required: false
    private _searchType?: string; 
    public get searchType() {
        return this.getStringAttribute('search_type');
    }
    public set searchType(value: string) {
        this._searchType = value;
    }
    public resetSearchType() {
        this._searchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get searchTypeInput() {
        return this._searchType;
    }

    // session_configuration - computed: true, optional: true, required: false
    private _sessionConfiguration = new SessionConfigurationPropertyOutputReference(this, "session_configuration");
    public get sessionConfiguration() {
        return this._sessionConfiguration;
    }
    public putSessionConfiguration(value: SessionConfigurationProperty) {
        this._sessionConfiguration.internalValue = value;
    }
    public resetSessionConfiguration() {
        this._sessionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionConfigurationInput() {
        return this._sessionConfiguration.internalValue;
    }

    // streaming_configuration - computed: true, optional: true, required: false
    private _streamingConfiguration = new StreamingConfigurationPropertyOutputReference(this, "streaming_configuration");
    public get streamingConfiguration() {
        return this._streamingConfiguration;
    }
    public putStreamingConfiguration(value: StreamingConfigurationProperty) {
        this._streamingConfiguration.internalValue = value;
    }
    public resetStreamingConfiguration() {
        this._streamingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamingConfigurationInput() {
        return this._streamingConfiguration.internalValue;
    }

    // supported_versions - computed: true, optional: true, required: false
    private _supportedVersions?: string[]; 
    public get supportedVersions() {
        return this.getListAttribute('supported_versions');
    }
    public set supportedVersions(value: string[]) {
        this._supportedVersions = value;
    }
    public resetSupportedVersions() {
        this._supportedVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedVersionsInput() {
        return this._supportedVersions;
    }
}
export interface GatewayProtocolConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_gateway#mcp CcGateway#mcp}
    */
    readonly mcp?: MCPGatewayConfigurationProperty;
}
export class GatewayProtocolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GatewayProtocolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mcp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcp = this._mcp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GatewayProtocolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mcp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mcp.internalValue = value.mcp;
        }
    }

    // mcp - computed: true, optional: true, required: false
    private _mcp = new MCPGatewayConfigurationPropertyOutputReference(this, "mcp");
    public get mcp() {
        return this._mcp;
    }
    public putMcp(value: MCPGatewayConfigurationProperty) {
        this._mcp.internalValue = value;
    }
    public resetMcp() {
        this._mcp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpInput() {
        return this._mcp.internalValue;
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
