// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConsentPortalProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#description CcConsentPortal#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#execution_role_arn CcConsentPortal#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#idp_config CcConsentPortal#idp_config}
    */
    readonly idpConfig: CcConsentPortal.IdpConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#name CcConsentPortal#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#sources CcConsentPortal#sources}
    */
    readonly sources: CcConsentPortal.SourcesProperty[] | cdktn.IResolvable;
    /**
    * Tags to assign to the consent portal
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#tags CcConsentPortal#tags}
    */
    readonly tags?: CcConsentPortal.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal awscc_bedrockagentcore_consent_portal}
*/
export class CcConsentPortal extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_consent_portal";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConsentPortal resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConsentPortal to import
    * @param importFromId The id of the existing CcConsentPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConsentPortal to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_consent_portal", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal awscc_bedrockagentcore_consent_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConsentPortalProps
    */
    public constructor(scope: Construct, id: string, config: CcConsentPortalProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_consent_portal',
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
        this._description = config.description;
        this._executionRoleArn = config.executionRoleArn;
        this._idpConfig.internalValue = config.idpConfig;
        this._name = config.name;
        this._sources.internalValue = config.sources;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // consent_portal_arn - computed: true, optional: false, required: false
    public get consentPortalArn() {
        return this.getStringAttribute('consent_portal_arn');
    }

    // consent_portal_id - computed: true, optional: false, required: false
    public get consentPortalId() {
        return this.getStringAttribute('consent_portal_id');
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

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idp_config - computed: false, optional: false, required: true
    private _idpConfig = new CcConsentPortal.IdpConfigPropertyOutputReference(this, "idp_config");
    public get idpConfig() {
        return this._idpConfig;
    }
    public putIdpConfig(value: CcConsentPortal.IdpConfigProperty) {
        this._idpConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idpConfigInput() {
        return this._idpConfig.internalValue;
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

    // portal_url - computed: true, optional: false, required: false
    public get portalUrl() {
        return this.getStringAttribute('portal_url');
    }

    // sources - computed: false, optional: false, required: true
    private _sources = new CcConsentPortal.SourcesPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: CcConsentPortal.SourcesProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConsentPortal.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConsentPortal.TagsProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            idp_config: ccConsentPortalIdpConfigPropertyToTerraform(this._idpConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            sources: cdktn.listMapper(ccConsentPortalSourcesPropertyToTerraform, false)(this._sources.internalValue),
            tags: cdktn.listMapper(ccConsentPortalTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idp_config: {
                value: ccConsentPortalIdpConfigPropertyToHclTerraform(this._idpConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConsentPortal.IdpConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sources: {
                value: cdktn.listMapperHcl(ccConsentPortalSourcesPropertyToHclTerraform, false)(this._sources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConsentPortal.SourcesPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConsentPortalTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConsentPortal.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConsentPortalIdpConfigPropertyToTerraform(struct?: CcConsentPortal.IdpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audience: cdktn.stringToTerraform(struct!.audience),
        credential_provider_arn: cdktn.stringToTerraform(struct!.credentialProviderArn),
        scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    }
}


export function ccConsentPortalIdpConfigPropertyToHclTerraform(struct?: CcConsentPortal.IdpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audience: {
            value: cdktn.stringToHclTerraform(struct!.audience),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credential_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConsentPortalSourcesPropertyToTerraform(struct?: CcConsentPortal.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identifier: cdktn.stringToTerraform(struct!.identifier),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccConsentPortalSourcesPropertyToHclTerraform(struct?: CcConsentPortal.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identifier: {
            value: cdktn.stringToHclTerraform(struct!.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConsentPortalTagsPropertyToTerraform(struct?: CcConsentPortal.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConsentPortalTagsPropertyToHclTerraform(struct?: CcConsentPortal.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcConsentPortal {
export interface IdpConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#audience CcConsentPortal#audience}
    */
    readonly audience?: string;
    /**
    * The ARN of an AWS::BedrockAgentCore::OAuth2CredentialProvider resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#credential_provider_arn CcConsentPortal#credential_provider_arn}
    */
    readonly credentialProviderArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#scopes CcConsentPortal#scopes}
    */
    readonly scopes: string[];
}
export class IdpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audience !== undefined) {
            hasAnyValues = true;
            internalValueResult.audience = this._audience;
        }
        if (this._credentialProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderArn = this._credentialProviderArn;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audience = undefined;
            this._credentialProviderArn = undefined;
            this._scopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audience = value.audience;
            this._credentialProviderArn = value.credentialProviderArn;
            this._scopes = value.scopes;
        }
    }

    // audience - computed: true, optional: true, required: false
    private _audience?: string; 
    public get audience() {
        return this.getStringAttribute('audience');
    }
    public set audience(value: string) {
        this._audience = value;
    }
    public resetAudience() {
        this._audience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audienceInput() {
        return this._audience;
    }

    // credential_provider_arn - computed: false, optional: false, required: true
    private _credentialProviderArn?: string; 
    public get credentialProviderArn() {
        return this.getStringAttribute('credential_provider_arn');
    }
    public set credentialProviderArn(value: string) {
        this._credentialProviderArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderArnInput() {
        return this._credentialProviderArn;
    }

    // scopes - computed: false, optional: false, required: true
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }
}
export interface SourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#identifier CcConsentPortal#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#type CcConsentPortal#type}
    */
    readonly type: string;
}
export class SourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifier = this._identifier;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identifier = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identifier = value.identifier;
            this._type = value.type;
        }
    }

    // identifier - computed: false, optional: false, required: true
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class SourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : SourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): SourcesPropertyOutputReference {
        return new SourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#key CcConsentPortal#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#value CcConsentPortal#value}
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
