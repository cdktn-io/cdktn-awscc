// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntegrationProps extends cdktn.TerraformMetaArguments {
    /**
    * The display name for the integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#display_name CcIntegration#display_name}
    */
    readonly displayName: string;
    /**
    * The identifier of the AWS KMS key to use for encrypting data associated with the integration. Can be a key ID, key ARN, alias name, or alias ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#kms_key_id CcIntegration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of an active private connection used to reach a self-hosted provider instance over private networking.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#private_connection_name CcIntegration#private_connection_name}
    */
    readonly privateConnectionName?: string;
    /**
    * The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_input CcIntegration#provider_input}
    */
    readonly providerInput?: CcIntegration.ProviderInputProperty;
    /**
    * The integration provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#provider_name CcIntegration#provider_name}
    */
    readonly providerName: string;
    /**
    * The tags to associate with the integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#tags CcIntegration#tags}
    */
    readonly tags?: CcIntegration.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration awscc_securityagent_integration}
*/
export class CcIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityagent_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntegration to import
    * @param importFromId The id of the existing CcIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration awscc_securityagent_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntegrationProps
    */
    public constructor(scope: Construct, id: string, config: CcIntegrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityagent_integration',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._displayName = config.displayName;
        this._kmsKeyId = config.kmsKeyId;
        this._privateConnectionName = config.privateConnectionName;
        this._providerInput.internalValue = config.providerInput;
        this._providerName = config.providerName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // installation_id - computed: true, optional: false, required: false
    public get installationId() {
        return this.getStringAttribute('installation_id');
    }

    // integration_id - computed: true, optional: false, required: false
    public get integrationId() {
        return this.getStringAttribute('integration_id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // private_connection_name - computed: true, optional: true, required: false
    private _privateConnectionName?: string; 
    public get privateConnectionName() {
        return this.getStringAttribute('private_connection_name');
    }
    public set privateConnectionName(value: string) {
        this._privateConnectionName = value;
    }
    public resetPrivateConnectionName() {
        this._privateConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateConnectionNameInput() {
        return this._privateConnectionName;
    }

    // provider_input - computed: true, optional: true, required: false
    private _providerInput = new CcIntegration.ProviderInputPropertyOutputReference(this, "provider_input");
    public get providerInput() {
        return this._providerInput;
    }
    public putProviderInput(value: CcIntegration.ProviderInputProperty) {
        this._providerInput.internalValue = value;
    }
    public resetProviderInput() {
        this._providerInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInputInput() {
        return this._providerInput.internalValue;
    }

    // provider_name - computed: false, optional: false, required: true
    private _providerName?: string; 
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
        this._providerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName;
    }

    // provider_type - computed: true, optional: false, required: false
    public get providerType() {
        return this.getStringAttribute('provider_type');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIntegration.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIntegration.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_url - computed: true, optional: false, required: false
    public get targetUrl() {
        return this.getStringAttribute('target_url');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            display_name: cdktn.stringToTerraform(this._displayName),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            private_connection_name: cdktn.stringToTerraform(this._privateConnectionName),
            provider_input: ccIntegrationProviderInputPropertyToTerraform(this._providerInput.internalValue),
            provider_name: cdktn.stringToTerraform(this._providerName),
            tags: cdktn.listMapper(ccIntegrationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_connection_name: {
                value: cdktn.stringToHclTerraform(this._privateConnectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provider_input: {
                value: ccIntegrationProviderInputPropertyToHclTerraform(this._providerInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntegration.ProviderInputProperty",
            },
            provider_name: {
                value: cdktn.stringToHclTerraform(this._providerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIntegrationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIntegration.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntegrationBitbucketPropertyToTerraform(struct?: CcIntegration.BitbucketProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: cdktn.stringToTerraform(struct!.code),
        installation_id: cdktn.stringToTerraform(struct!.installationId),
        state: cdktn.stringToTerraform(struct!.state),
        workspace: cdktn.stringToTerraform(struct!.workspace),
    }
}


export function ccIntegrationBitbucketPropertyToHclTerraform(struct?: CcIntegration.BitbucketProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: cdktn.stringToHclTerraform(struct!.code),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        installation_id: {
            value: cdktn.stringToHclTerraform(struct!.installationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workspace: {
            value: cdktn.stringToHclTerraform(struct!.workspace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationConfluencePropertyToTerraform(struct?: CcIntegration.ConfluenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: cdktn.stringToTerraform(struct!.code),
        installation_id: cdktn.stringToTerraform(struct!.installationId),
        site_url: cdktn.stringToTerraform(struct!.siteUrl),
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccIntegrationConfluencePropertyToHclTerraform(struct?: CcIntegration.ConfluenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: cdktn.stringToHclTerraform(struct!.code),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        installation_id: {
            value: cdktn.stringToHclTerraform(struct!.installationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        site_url: {
            value: cdktn.stringToHclTerraform(struct!.siteUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationGithubPropertyToTerraform(struct?: CcIntegration.GithubProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: cdktn.stringToTerraform(struct!.code),
        installation_id: cdktn.stringToTerraform(struct!.installationId),
        organization_name: cdktn.stringToTerraform(struct!.organizationName),
        state: cdktn.stringToTerraform(struct!.state),
        target_url: cdktn.stringToTerraform(struct!.targetUrl),
    }
}


export function ccIntegrationGithubPropertyToHclTerraform(struct?: CcIntegration.GithubProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: cdktn.stringToHclTerraform(struct!.code),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        installation_id: {
            value: cdktn.stringToHclTerraform(struct!.installationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization_name: {
            value: cdktn.stringToHclTerraform(struct!.organizationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_url: {
            value: cdktn.stringToHclTerraform(struct!.targetUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationGitlabPropertyToTerraform(struct?: CcIntegration.GitlabProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        group_id: cdktn.stringToTerraform(struct!.groupId),
        target_url: cdktn.stringToTerraform(struct!.targetUrl),
        token_type: cdktn.stringToTerraform(struct!.tokenType),
    }
}


export function ccIntegrationGitlabPropertyToHclTerraform(struct?: CcIntegration.GitlabProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_token: {
            value: cdktn.stringToHclTerraform(struct!.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_id: {
            value: cdktn.stringToHclTerraform(struct!.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_url: {
            value: cdktn.stringToHclTerraform(struct!.targetUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_type: {
            value: cdktn.stringToHclTerraform(struct!.tokenType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationProviderInputPropertyToTerraform(struct?: CcIntegration.ProviderInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bitbucket: ccIntegrationBitbucketPropertyToTerraform(struct!.bitbucket),
        confluence: ccIntegrationConfluencePropertyToTerraform(struct!.confluence),
        github: ccIntegrationGithubPropertyToTerraform(struct!.github),
        gitlab: ccIntegrationGitlabPropertyToTerraform(struct!.gitlab),
    }
}


export function ccIntegrationProviderInputPropertyToHclTerraform(struct?: CcIntegration.ProviderInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bitbucket: {
            value: ccIntegrationBitbucketPropertyToHclTerraform(struct!.bitbucket),
            isBlock: true,
            type: "struct",
            storageClassType: "BitbucketProperty",
        },
        confluence: {
            value: ccIntegrationConfluencePropertyToHclTerraform(struct!.confluence),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfluenceProperty",
        },
        github: {
            value: ccIntegrationGithubPropertyToHclTerraform(struct!.github),
            isBlock: true,
            type: "struct",
            storageClassType: "GithubProperty",
        },
        gitlab: {
            value: ccIntegrationGitlabPropertyToHclTerraform(struct!.gitlab),
            isBlock: true,
            type: "struct",
            storageClassType: "GitlabProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationTagsPropertyToTerraform(struct?: CcIntegration.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIntegrationTagsPropertyToHclTerraform(struct?: CcIntegration.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcIntegration {
export interface BitbucketProperty {
    /**
    * The OAuth 2.0 authorization code returned from the consent redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code CcIntegration#code}
    */
    readonly code?: string;
    /**
    * The Atlassian installation identifier, available from the Atlassian administration console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id CcIntegration#installation_id}
    */
    readonly installationId?: string;
    /**
    * The CSRF state token echoed back from the OAuth redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state CcIntegration#state}
    */
    readonly state?: string;
    /**
    * The Bitbucket workspace slug that identifies the workspace to integrate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#workspace CcIntegration#workspace}
    */
    readonly workspace?: string;
}
export class BitbucketPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BitbucketProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code;
        }
        if (this._installationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.installationId = this._installationId;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._workspace !== undefined) {
            hasAnyValues = true;
            internalValueResult.workspace = this._workspace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BitbucketProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code = undefined;
            this._installationId = undefined;
            this._state = undefined;
            this._workspace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code = value.code;
            this._installationId = value.installationId;
            this._state = value.state;
            this._workspace = value.workspace;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code?: string; 
    public get code() {
        return this.getStringAttribute('code');
    }
    public set code(value: string) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // installation_id - computed: true, optional: true, required: false
    private _installationId?: string; 
    public get installationId() {
        return this.getStringAttribute('installation_id');
    }
    public set installationId(value: string) {
        this._installationId = value;
    }
    public resetInstallationId() {
        this._installationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installationIdInput() {
        return this._installationId;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // workspace - computed: true, optional: true, required: false
    private _workspace?: string; 
    public get workspace() {
        return this.getStringAttribute('workspace');
    }
    public set workspace(value: string) {
        this._workspace = value;
    }
    public resetWorkspace() {
        this._workspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceInput() {
        return this._workspace;
    }
}
export interface ConfluenceProperty {
    /**
    * The OAuth 2.0 authorization code returned from the consent redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code CcIntegration#code}
    */
    readonly code?: string;
    /**
    * The Atlassian installation identifier, available from the Atlassian administration console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id CcIntegration#installation_id}
    */
    readonly installationId?: string;
    /**
    * The Confluence Cloud site URL, for example https://mysite.atlassian.net.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#site_url CcIntegration#site_url}
    */
    readonly siteUrl?: string;
    /**
    * The CSRF state token echoed back from the OAuth redirect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state CcIntegration#state}
    */
    readonly state?: string;
}
export class ConfluencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfluenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code;
        }
        if (this._installationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.installationId = this._installationId;
        }
        if (this._siteUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.siteUrl = this._siteUrl;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfluenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code = undefined;
            this._installationId = undefined;
            this._siteUrl = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code = value.code;
            this._installationId = value.installationId;
            this._siteUrl = value.siteUrl;
            this._state = value.state;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code?: string; 
    public get code() {
        return this.getStringAttribute('code');
    }
    public set code(value: string) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // installation_id - computed: true, optional: true, required: false
    private _installationId?: string; 
    public get installationId() {
        return this.getStringAttribute('installation_id');
    }
    public set installationId(value: string) {
        this._installationId = value;
    }
    public resetInstallationId() {
        this._installationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installationIdInput() {
        return this._installationId;
    }

    // site_url - computed: true, optional: true, required: false
    private _siteUrl?: string; 
    public get siteUrl() {
        return this.getStringAttribute('site_url');
    }
    public set siteUrl(value: string) {
        this._siteUrl = value;
    }
    public resetSiteUrl() {
        this._siteUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get siteUrlInput() {
        return this._siteUrl;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface GithubProperty {
    /**
    * The OAuth authorization code received from GitHub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#code CcIntegration#code}
    */
    readonly code?: string;
    /**
    * The installation identifier provided by GitHub Enterprise Server on the install callback. Required for GitHub Enterprise Server integrations and ignored for GitHub.com.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#installation_id CcIntegration#installation_id}
    */
    readonly installationId?: string;
    /**
    * The name of the GitHub organization to integrate with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#organization_name CcIntegration#organization_name}
    */
    readonly organizationName?: string;
    /**
    * The CSRF state token for validating the OAuth flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#state CcIntegration#state}
    */
    readonly state?: string;
    /**
    * The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url CcIntegration#target_url}
    */
    readonly targetUrl?: string;
}
export class GithubPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GithubProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code;
        }
        if (this._installationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.installationId = this._installationId;
        }
        if (this._organizationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationName = this._organizationName;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._targetUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GithubProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code = undefined;
            this._installationId = undefined;
            this._organizationName = undefined;
            this._state = undefined;
            this._targetUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code = value.code;
            this._installationId = value.installationId;
            this._organizationName = value.organizationName;
            this._state = value.state;
            this._targetUrl = value.targetUrl;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code?: string; 
    public get code() {
        return this.getStringAttribute('code');
    }
    public set code(value: string) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // installation_id - computed: true, optional: true, required: false
    private _installationId?: string; 
    public get installationId() {
        return this.getStringAttribute('installation_id');
    }
    public set installationId(value: string) {
        this._installationId = value;
    }
    public resetInstallationId() {
        this._installationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installationIdInput() {
        return this._installationId;
    }

    // organization_name - computed: true, optional: true, required: false
    private _organizationName?: string; 
    public get organizationName() {
        return this.getStringAttribute('organization_name');
    }
    public set organizationName(value: string) {
        this._organizationName = value;
    }
    public resetOrganizationName() {
        this._organizationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationNameInput() {
        return this._organizationName;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // target_url - computed: true, optional: true, required: false
    private _targetUrl?: string; 
    public get targetUrl() {
        return this.getStringAttribute('target_url');
    }
    public set targetUrl(value: string) {
        this._targetUrl = value;
    }
    public resetTargetUrl() {
        this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetUrlInput() {
        return this._targetUrl;
    }
}
export interface GitlabProperty {
    /**
    * The GitLab access token used to authenticate. This can be a personal access token or a group access token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#access_token CcIntegration#access_token}
    */
    readonly accessToken?: string;
    /**
    * The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#group_id CcIntegration#group_id}
    */
    readonly groupId?: string;
    /**
    * The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#target_url CcIntegration#target_url}
    */
    readonly targetUrl?: string;
    /**
    * The type of GitLab access token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#token_type CcIntegration#token_type}
    */
    readonly tokenType?: string;
}
export class GitlabPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitlabProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._targetUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetUrl = this._targetUrl;
        }
        if (this._tokenType !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenType = this._tokenType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitlabProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._groupId = undefined;
            this._targetUrl = undefined;
            this._tokenType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._groupId = value.groupId;
            this._targetUrl = value.targetUrl;
            this._tokenType = value.tokenType;
        }
    }

    // access_token - computed: true, optional: true, required: false
    private _accessToken?: string; 
    public get accessToken() {
        return this.getStringAttribute('access_token');
    }
    public set accessToken(value: string) {
        this._accessToken = value;
    }
    public resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenInput() {
        return this._accessToken;
    }

    // group_id - computed: true, optional: true, required: false
    private _groupId?: string; 
    public get groupId() {
        return this.getStringAttribute('group_id');
    }
    public set groupId(value: string) {
        this._groupId = value;
    }
    public resetGroupId() {
        this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
        return this._groupId;
    }

    // target_url - computed: true, optional: true, required: false
    private _targetUrl?: string; 
    public get targetUrl() {
        return this.getStringAttribute('target_url');
    }
    public set targetUrl(value: string) {
        this._targetUrl = value;
    }
    public resetTargetUrl() {
        this._targetUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetUrlInput() {
        return this._targetUrl;
    }

    // token_type - computed: true, optional: true, required: false
    private _tokenType?: string; 
    public get tokenType() {
        return this.getStringAttribute('token_type');
    }
    public set tokenType(value: string) {
        this._tokenType = value;
    }
    public resetTokenType() {
        this._tokenType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenTypeInput() {
        return this._tokenType;
    }
}
export interface ProviderInputProperty {
    /**
    * The input required to create a Bitbucket integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#bitbucket CcIntegration#bitbucket}
    */
    readonly bitbucket?: BitbucketProperty;
    /**
    * The input required to create a Confluence integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#confluence CcIntegration#confluence}
    */
    readonly confluence?: ConfluenceProperty;
    /**
    * The input required to create a GitHub integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#github CcIntegration#github}
    */
    readonly github?: GithubProperty;
    /**
    * The input required to create a GitLab integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#gitlab CcIntegration#gitlab}
    */
    readonly gitlab?: GitlabProperty;
}
export class ProviderInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bitbucket?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitbucket = this._bitbucket?.internalValue;
        }
        if (this._confluence?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.confluence = this._confluence?.internalValue;
        }
        if (this._github?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.github = this._github?.internalValue;
        }
        if (this._gitlab?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitlab = this._gitlab?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bitbucket.internalValue = undefined;
            this._confluence.internalValue = undefined;
            this._github.internalValue = undefined;
            this._gitlab.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bitbucket.internalValue = value.bitbucket;
            this._confluence.internalValue = value.confluence;
            this._github.internalValue = value.github;
            this._gitlab.internalValue = value.gitlab;
        }
    }

    // bitbucket - computed: true, optional: true, required: false
    private _bitbucket = new BitbucketPropertyOutputReference(this, "bitbucket");
    public get bitbucket() {
        return this._bitbucket;
    }
    public putBitbucket(value: BitbucketProperty) {
        this._bitbucket.internalValue = value;
    }
    public resetBitbucket() {
        this._bitbucket.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitbucketInput() {
        return this._bitbucket.internalValue;
    }

    // confluence - computed: true, optional: true, required: false
    private _confluence = new ConfluencePropertyOutputReference(this, "confluence");
    public get confluence() {
        return this._confluence;
    }
    public putConfluence(value: ConfluenceProperty) {
        this._confluence.internalValue = value;
    }
    public resetConfluence() {
        this._confluence.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confluenceInput() {
        return this._confluence.internalValue;
    }

    // github - computed: true, optional: true, required: false
    private _github = new GithubPropertyOutputReference(this, "github");
    public get github() {
        return this._github;
    }
    public putGithub(value: GithubProperty) {
        this._github.internalValue = value;
    }
    public resetGithub() {
        this._github.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get githubInput() {
        return this._github.internalValue;
    }

    // gitlab - computed: true, optional: true, required: false
    private _gitlab = new GitlabPropertyOutputReference(this, "gitlab");
    public get gitlab() {
        return this._gitlab;
    }
    public putGitlab(value: GitlabProperty) {
        this._gitlab.internalValue = value;
    }
    public resetGitlab() {
        this._gitlab.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitlabInput() {
        return this._gitlab.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#key CcIntegration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityagent_integration#value CcIntegration#value}
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
}
