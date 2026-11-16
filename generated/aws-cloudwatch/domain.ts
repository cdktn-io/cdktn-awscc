// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * Identity provider configuration for the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#identity_provider_configuration CcDomain#identity_provider_configuration}
    */
    readonly identityProviderConfiguration?: CcDomain.IdentityProviderConfigurationProperty;
    /**
    * The identity providers configured for the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#identity_providers CcDomain#identity_providers}
    */
    readonly identityProviders: string[];
    /**
    * A name that identifies the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#name CcDomain#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#tags CcDomain#tags}
    */
    readonly tags?: CcDomain.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain awscc_cloudwatch_domain}
*/
export class CcDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomain to import
    * @param importFromId The id of the existing CcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain awscc_cloudwatch_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_domain',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._identityProviderConfiguration.internalValue = config.identityProviderConfiguration;
        this._identityProviders = config.identityProviders;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // custom_endpoint_urls - computed: true, optional: false, required: false
    public get customEndpointUrls() {
        return this.getListAttribute('custom_endpoint_urls');
    }

    // domain_endpoint_url - computed: true, optional: false, required: false
    public get domainEndpointUrl() {
        return this.getStringAttribute('domain_endpoint_url');
    }

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_center_application_arn - computed: true, optional: false, required: false
    public get identityCenterApplicationArn() {
        return this.getStringAttribute('identity_center_application_arn');
    }

    // identity_provider_configuration - computed: true, optional: true, required: false
    private _identityProviderConfiguration = new CcDomain.IdentityProviderConfigurationPropertyOutputReference(this, "identity_provider_configuration");
    public get identityProviderConfiguration() {
        return this._identityProviderConfiguration;
    }
    public putIdentityProviderConfiguration(value: CcDomain.IdentityProviderConfigurationProperty) {
        this._identityProviderConfiguration.internalValue = value;
    }
    public resetIdentityProviderConfiguration() {
        this._identityProviderConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderConfigurationInput() {
        return this._identityProviderConfiguration.internalValue;
    }

    // identity_providers - computed: false, optional: false, required: true
    private _identityProviders?: string[]; 
    public get identityProviders() {
        return this.getListAttribute('identity_providers');
    }
    public set identityProviders(value: string[]) {
        this._identityProviders = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProvidersInput() {
        return this._identityProviders;
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

    // region - computed: true, optional: false, required: false
    public get region() {
        return this.getStringAttribute('region');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomain.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomain.TagsProperty[] | cdktn.IResolvable) {
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
            identity_provider_configuration: ccDomainIdentityProviderConfigurationPropertyToTerraform(this._identityProviderConfiguration.internalValue),
            identity_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identityProviders),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccDomainTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identity_provider_configuration: {
                value: ccDomainIdentityProviderConfigurationPropertyToHclTerraform(this._identityProviderConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.IdentityProviderConfigurationProperty",
            },
            identity_providers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identityProviders),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDomain.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainIdentityCenterConfigurationPropertyToTerraform(struct?: CcDomain.IdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_center_instance_arn: cdktn.stringToTerraform(struct!.identityCenterInstanceArn),
    }
}


export function ccDomainIdentityCenterConfigurationPropertyToHclTerraform(struct?: CcDomain.IdentityCenterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_center_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.identityCenterInstanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainIdentityProviderConfigurationPropertyToTerraform(struct?: CcDomain.IdentityProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identity_center_configuration: ccDomainIdentityCenterConfigurationPropertyToTerraform(struct!.identityCenterConfiguration),
    }
}


export function ccDomainIdentityProviderConfigurationPropertyToHclTerraform(struct?: CcDomain.IdentityProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identity_center_configuration: {
            value: ccDomainIdentityCenterConfigurationPropertyToHclTerraform(struct!.identityCenterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IdentityCenterConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainTagsPropertyToTerraform(struct?: CcDomain.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainTagsPropertyToHclTerraform(struct?: CcDomain.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcDomain {
export interface IdentityCenterConfigurationProperty {
    /**
    * Identity Center instance ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#identity_center_instance_arn CcDomain#identity_center_instance_arn}
    */
    readonly identityCenterInstanceArn?: string;
}
export class IdentityCenterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityCenterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityCenterInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterInstanceArn = this._identityCenterInstanceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityCenterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityCenterInstanceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityCenterInstanceArn = value.identityCenterInstanceArn;
        }
    }

    // identity_center_instance_arn - computed: true, optional: true, required: false
    private _identityCenterInstanceArn?: string; 
    public get identityCenterInstanceArn() {
        return this.getStringAttribute('identity_center_instance_arn');
    }
    public set identityCenterInstanceArn(value: string) {
        this._identityCenterInstanceArn = value;
    }
    public resetIdentityCenterInstanceArn() {
        this._identityCenterInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterInstanceArnInput() {
        return this._identityCenterInstanceArn;
    }
}
export interface IdentityProviderConfigurationProperty {
    /**
    * Identity Center configuration. Required when identityProviders includes IDC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#identity_center_configuration CcDomain#identity_center_configuration}
    */
    readonly identityCenterConfiguration?: IdentityCenterConfigurationProperty;
}
export class IdentityProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identityCenterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
        }
    }

    // identity_center_configuration - computed: true, optional: true, required: false
    private _identityCenterConfiguration = new IdentityCenterConfigurationPropertyOutputReference(this, "identity_center_configuration");
    public get identityCenterConfiguration() {
        return this._identityCenterConfiguration;
    }
    public putIdentityCenterConfiguration(value: IdentityCenterConfigurationProperty) {
        this._identityCenterConfiguration.internalValue = value;
    }
    public resetIdentityCenterConfiguration() {
        this._identityCenterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterConfigurationInput() {
        return this._identityCenterConfiguration.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#key CcDomain#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_domain#value CcDomain#value}
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
