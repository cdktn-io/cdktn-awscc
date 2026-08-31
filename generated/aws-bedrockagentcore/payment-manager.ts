// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPaymentManagerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration CcPaymentManager#authorizer_configuration}
    */
    readonly authorizerConfiguration?: CcPaymentManager.AuthorizerConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type CcPaymentManager#authorizer_type}
    */
    readonly authorizerType: string;
    /**
    * A description of the payment manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#description CcPaymentManager#description}
    */
    readonly description?: string;
    /**
    * The name of the payment manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#name CcPaymentManager#name}
    */
    readonly name: string;
    /**
    * The ARN of the IAM role for the payment manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#role_arn CcPaymentManager#role_arn}
    */
    readonly roleArn: string;
    /**
    * Tags to assign to the payment manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#tags CcPaymentManager#tags}
    */
    readonly tags?: CcPaymentManager.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager awscc_bedrockagentcore_payment_manager}
*/
export class CcPaymentManager extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_payment_manager";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPaymentManager resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPaymentManager to import
    * @param importFromId The id of the existing CcPaymentManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPaymentManager to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_payment_manager", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager awscc_bedrockagentcore_payment_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPaymentManagerProps
    */
    public constructor(scope: Construct, id: string, config: CcPaymentManagerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_payment_manager',
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
        this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
        this._authorizerType = config.authorizerType;
        this._description = config.description;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authorizer_configuration - computed: true, optional: true, required: false
    private _authorizerConfiguration = new CcPaymentManager.AuthorizerConfigurationPropertyOutputReference(this, "authorizer_configuration");
    public get authorizerConfiguration() {
        return this._authorizerConfiguration;
    }
    public putAuthorizerConfiguration(value: CcPaymentManager.AuthorizerConfigurationProperty) {
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
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

    // payment_manager_arn - computed: true, optional: false, required: false
    public get paymentManagerArn() {
        return this.getStringAttribute('payment_manager_arn');
    }

    // payment_manager_id - computed: true, optional: false, required: false
    public get paymentManagerId() {
        return this.getStringAttribute('payment_manager_id');
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
    private _tags = new CcPaymentManager.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPaymentManager.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workload_identity_details - computed: true, optional: false, required: false
    private _workloadIdentityDetails = new CcPaymentManager.WorkloadIdentityDetailsPropertyOutputReference(this, "workload_identity_details");
    public get workloadIdentityDetails() {
        return this._workloadIdentityDetails;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            authorizer_configuration: ccPaymentManagerAuthorizerConfigurationPropertyToTerraform(this._authorizerConfiguration.internalValue),
            authorizer_type: cdktn.stringToTerraform(this._authorizerType),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccPaymentManagerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authorizer_configuration: {
                value: ccPaymentManagerAuthorizerConfigurationPropertyToHclTerraform(this._authorizerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPaymentManager.AuthorizerConfigurationProperty",
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
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
                value: cdktn.listMapperHcl(ccPaymentManagerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPaymentManager.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPaymentManagerClaimMatchValueTypePropertyToTerraform(struct?: CcPaymentManager.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
        match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
    }
}


export function ccPaymentManagerClaimMatchValueTypePropertyToHclTerraform(struct?: CcPaymentManager.ClaimMatchValueTypeProperty | cdktn.IResolvable): any {
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


export function ccPaymentManagerAuthorizingClaimMatchValueTypePropertyToTerraform(struct?: CcPaymentManager.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
        claim_match_value: ccPaymentManagerClaimMatchValueTypePropertyToTerraform(struct!.claimMatchValue),
    }
}


export function ccPaymentManagerAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct?: CcPaymentManager.AuthorizingClaimMatchValueTypeProperty | cdktn.IResolvable): any {
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
            value: ccPaymentManagerClaimMatchValueTypePropertyToHclTerraform(struct!.claimMatchValue),
            isBlock: true,
            type: "struct",
            storageClassType: "ClaimMatchValueTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentManagerCustomClaimValidationTypePropertyToTerraform(struct?: CcPaymentManager.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizing_claim_match_value: ccPaymentManagerAuthorizingClaimMatchValueTypePropertyToTerraform(struct!.authorizingClaimMatchValue),
        inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
        inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    }
}


export function ccPaymentManagerCustomClaimValidationTypePropertyToHclTerraform(struct?: CcPaymentManager.CustomClaimValidationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizing_claim_match_value: {
            value: ccPaymentManagerAuthorizingClaimMatchValueTypePropertyToHclTerraform(struct!.authorizingClaimMatchValue),
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


export function ccPaymentManagerCustomJWTAuthorizerConfigurationPropertyToTerraform(struct?: CcPaymentManager.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
        allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
        allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
        custom_claims: cdktn.listMapper(ccPaymentManagerCustomClaimValidationTypePropertyToTerraform, false)(struct!.customClaims),
        discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    }
}


export function ccPaymentManagerCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct?: CcPaymentManager.CustomJWTAuthorizerConfigurationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccPaymentManagerCustomClaimValidationTypePropertyToHclTerraform, false)(struct!.customClaims),
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


export function ccPaymentManagerAuthorizerConfigurationPropertyToTerraform(struct?: CcPaymentManager.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_jwt_authorizer: ccPaymentManagerCustomJWTAuthorizerConfigurationPropertyToTerraform(struct!.customJwtAuthorizer),
    }
}


export function ccPaymentManagerAuthorizerConfigurationPropertyToHclTerraform(struct?: CcPaymentManager.AuthorizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_jwt_authorizer: {
            value: ccPaymentManagerCustomJWTAuthorizerConfigurationPropertyToHclTerraform(struct!.customJwtAuthorizer),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomJWTAuthorizerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentManagerTagPropertyToTerraform(struct?: CcPaymentManager.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPaymentManagerTagPropertyToHclTerraform(struct?: CcPaymentManager.TagProperty | cdktn.IResolvable): any {
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


export function ccPaymentManagerWorkloadIdentityDetailsPropertyToTerraform(struct?: CcPaymentManager.WorkloadIdentityDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentManagerWorkloadIdentityDetailsPropertyToHclTerraform(struct?: CcPaymentManager.WorkloadIdentityDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcPaymentManager {
export interface ClaimMatchValueTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#match_value_string CcPaymentManager#match_value_string}
    */
    readonly matchValueString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#match_value_string_list CcPaymentManager#match_value_string_list}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#claim_match_operator CcPaymentManager#claim_match_operator}
    */
    readonly claimMatchOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#claim_match_value CcPaymentManager#claim_match_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#authorizing_claim_match_value CcPaymentManager#authorizing_claim_match_value}
    */
    readonly authorizingClaimMatchValue?: AuthorizingClaimMatchValueTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_name CcPaymentManager#inbound_token_claim_name}
    */
    readonly inboundTokenClaimName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_value_type CcPaymentManager#inbound_token_claim_value_type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#allowed_audience CcPaymentManager#allowed_audience}
    */
    readonly allowedAudience?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#allowed_clients CcPaymentManager#allowed_clients}
    */
    readonly allowedClients?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#allowed_scopes CcPaymentManager#allowed_scopes}
    */
    readonly allowedScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#custom_claims CcPaymentManager#custom_claims}
    */
    readonly customClaims?: CustomClaimValidationTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#discovery_url CcPaymentManager#discovery_url}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#custom_jwt_authorizer CcPaymentManager#custom_jwt_authorizer}
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#key CcPaymentManager#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_payment_manager#value CcPaymentManager#value}
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
