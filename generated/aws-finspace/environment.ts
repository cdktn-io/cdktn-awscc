// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * ARNs of FinSpace Data Bundles to install
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#data_bundles CcEnvironment#data_bundles}
    */
    readonly dataBundles?: string[];
    /**
    * Description of the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#description CcEnvironment#description}
    */
    readonly description?: string;
    /**
    * Federation mode used with the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#federation_mode CcEnvironment#federation_mode}
    */
    readonly federationMode?: string;
    /**
    * Additional parameters to identify Federation mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#federation_parameters CcEnvironment#federation_parameters}
    */
    readonly federationParameters?: CcEnvironment.FederationParametersProperty;
    /**
    * KMS key used to encrypt customer data within FinSpace Environment infrastructure
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#kms_key_id CcEnvironment#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Name of the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#name CcEnvironment#name}
    */
    readonly name: string;
    /**
    * Parameters of the first Superuser for the FinSpace Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#superuser_parameters CcEnvironment#superuser_parameters}
    */
    readonly superuserParameters?: CcEnvironment.SuperuserParametersProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#tags CcEnvironment#tags}
    */
    readonly tags?: CcEnvironment.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment awscc_finspace_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_finspace_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_finspace_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment awscc_finspace_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_finspace_environment',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dataBundles = config.dataBundles;
        this._description = config.description;
        this._federationMode = config.federationMode;
        this._federationParameters.internalValue = config.federationParameters;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._superuserParameters.internalValue = config.superuserParameters;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // data_bundles - computed: true, optional: true, required: false
    private _dataBundles?: string[]; 
    public get dataBundles() {
        return this.getListAttribute('data_bundles');
    }
    public set dataBundles(value: string[]) {
        this._dataBundles = value;
    }
    public resetDataBundles() {
        this._dataBundles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataBundlesInput() {
        return this._dataBundles;
    }

    // dedicated_service_account_id - computed: true, optional: false, required: false
    public get dedicatedServiceAccountId() {
        return this.getStringAttribute('dedicated_service_account_id');
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

    // environment_arn - computed: true, optional: false, required: false
    public get environmentArn() {
        return this.getStringAttribute('environment_arn');
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_url - computed: true, optional: false, required: false
    public get environmentUrl() {
        return this.getStringAttribute('environment_url');
    }

    // federation_mode - computed: true, optional: true, required: false
    private _federationMode?: string; 
    public get federationMode() {
        return this.getStringAttribute('federation_mode');
    }
    public set federationMode(value: string) {
        this._federationMode = value;
    }
    public resetFederationMode() {
        this._federationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federationModeInput() {
        return this._federationMode;
    }

    // federation_parameters - computed: true, optional: true, required: false
    private _federationParameters = new CcEnvironment.FederationParametersPropertyOutputReference(this, "federation_parameters");
    public get federationParameters() {
        return this._federationParameters;
    }
    public putFederationParameters(value: CcEnvironment.FederationParametersProperty) {
        this._federationParameters.internalValue = value;
    }
    public resetFederationParameters() {
        this._federationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federationParametersInput() {
        return this._federationParameters.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // sage_maker_studio_domain_url - computed: true, optional: false, required: false
    public get sageMakerStudioDomainUrl() {
        return this.getStringAttribute('sage_maker_studio_domain_url');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // superuser_parameters - computed: true, optional: true, required: false
    private _superuserParameters = new CcEnvironment.SuperuserParametersPropertyOutputReference(this, "superuser_parameters");
    public get superuserParameters() {
        return this._superuserParameters;
    }
    public putSuperuserParameters(value: CcEnvironment.SuperuserParametersProperty) {
        this._superuserParameters.internalValue = value;
    }
    public resetSuperuserParameters() {
        this._superuserParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get superuserParametersInput() {
        return this._superuserParameters.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_bundles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dataBundles),
            description: cdktn.stringToTerraform(this._description),
            federation_mode: cdktn.stringToTerraform(this._federationMode),
            federation_parameters: ccEnvironmentFederationParametersPropertyToTerraform(this._federationParameters.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            superuser_parameters: ccEnvironmentSuperuserParametersPropertyToTerraform(this._superuserParameters.internalValue),
            tags: cdktn.listMapper(ccEnvironmentTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_bundles: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dataBundles),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            federation_mode: {
                value: cdktn.stringToHclTerraform(this._federationMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            federation_parameters: {
                value: ccEnvironmentFederationParametersPropertyToHclTerraform(this._federationParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.FederationParametersProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            superuser_parameters: {
                value: ccEnvironmentSuperuserParametersPropertyToHclTerraform(this._superuserParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.SuperuserParametersProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentAttributeMapItemsPropertyToTerraform(struct?: CcEnvironment.AttributeMapItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentAttributeMapItemsPropertyToHclTerraform(struct?: CcEnvironment.AttributeMapItemsProperty | cdktn.IResolvable): any {
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


export function ccEnvironmentFederationParametersPropertyToTerraform(struct?: CcEnvironment.FederationParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_call_back_url: cdktn.stringToTerraform(struct!.applicationCallBackUrl),
        attribute_map: cdktn.listMapper(ccEnvironmentAttributeMapItemsPropertyToTerraform, false)(struct!.attributeMap),
        federation_provider_name: cdktn.stringToTerraform(struct!.federationProviderName),
        federation_urn: cdktn.stringToTerraform(struct!.federationUrn),
        saml_metadata_document: cdktn.stringToTerraform(struct!.samlMetadataDocument),
        saml_metadata_url: cdktn.stringToTerraform(struct!.samlMetadataUrl),
    }
}


export function ccEnvironmentFederationParametersPropertyToHclTerraform(struct?: CcEnvironment.FederationParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_call_back_url: {
            value: cdktn.stringToHclTerraform(struct!.applicationCallBackUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_map: {
            value: cdktn.listMapperHcl(ccEnvironmentAttributeMapItemsPropertyToHclTerraform, false)(struct!.attributeMap),
            isBlock: true,
            type: "list",
            storageClassType: "AttributeMapItemsPropertyList",
        },
        federation_provider_name: {
            value: cdktn.stringToHclTerraform(struct!.federationProviderName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        federation_urn: {
            value: cdktn.stringToHclTerraform(struct!.federationUrn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        saml_metadata_document: {
            value: cdktn.stringToHclTerraform(struct!.samlMetadataDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        saml_metadata_url: {
            value: cdktn.stringToHclTerraform(struct!.samlMetadataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentSuperuserParametersPropertyToTerraform(struct?: CcEnvironment.SuperuserParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_address: cdktn.stringToTerraform(struct!.emailAddress),
        first_name: cdktn.stringToTerraform(struct!.firstName),
        last_name: cdktn.stringToTerraform(struct!.lastName),
    }
}


export function ccEnvironmentSuperuserParametersPropertyToHclTerraform(struct?: CcEnvironment.SuperuserParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_address: {
            value: cdktn.stringToHclTerraform(struct!.emailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        first_name: {
            value: cdktn.stringToHclTerraform(struct!.firstName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_name: {
            value: cdktn.stringToHclTerraform(struct!.lastName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentTagPropertyToTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentTagPropertyToHclTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironment {
export interface AttributeMapItemsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#value CcEnvironment#value}
    */
    readonly value?: string;
}
export class AttributeMapItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributeMapItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AttributeMapItemsProperty | cdktn.IResolvable | undefined) {
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

export class AttributeMapItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : AttributeMapItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): AttributeMapItemsPropertyOutputReference {
        return new AttributeMapItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FederationParametersProperty {
    /**
    * SAML metadata URL to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#application_call_back_url CcEnvironment#application_call_back_url}
    */
    readonly applicationCallBackUrl?: string;
    /**
    * Attribute map for SAML configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#attribute_map CcEnvironment#attribute_map}
    */
    readonly attributeMap?: AttributeMapItemsProperty[] | cdktn.IResolvable;
    /**
    * Federation provider name to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#federation_provider_name CcEnvironment#federation_provider_name}
    */
    readonly federationProviderName?: string;
    /**
    * SAML metadata URL to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#federation_urn CcEnvironment#federation_urn}
    */
    readonly federationUrn?: string;
    /**
    * SAML metadata document to link the federation provider to the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#saml_metadata_document CcEnvironment#saml_metadata_document}
    */
    readonly samlMetadataDocument?: string;
    /**
    * SAML metadata URL to link with the Environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#saml_metadata_url CcEnvironment#saml_metadata_url}
    */
    readonly samlMetadataUrl?: string;
}
export class FederationParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FederationParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationCallBackUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationCallBackUrl = this._applicationCallBackUrl;
        }
        if (this._attributeMap?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeMap = this._attributeMap?.internalValue;
        }
        if (this._federationProviderName !== undefined) {
            hasAnyValues = true;
            internalValueResult.federationProviderName = this._federationProviderName;
        }
        if (this._federationUrn !== undefined) {
            hasAnyValues = true;
            internalValueResult.federationUrn = this._federationUrn;
        }
        if (this._samlMetadataDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.samlMetadataDocument = this._samlMetadataDocument;
        }
        if (this._samlMetadataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.samlMetadataUrl = this._samlMetadataUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FederationParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationCallBackUrl = undefined;
            this._attributeMap.internalValue = undefined;
            this._federationProviderName = undefined;
            this._federationUrn = undefined;
            this._samlMetadataDocument = undefined;
            this._samlMetadataUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationCallBackUrl = value.applicationCallBackUrl;
            this._attributeMap.internalValue = value.attributeMap;
            this._federationProviderName = value.federationProviderName;
            this._federationUrn = value.federationUrn;
            this._samlMetadataDocument = value.samlMetadataDocument;
            this._samlMetadataUrl = value.samlMetadataUrl;
        }
    }

    // application_call_back_url - computed: true, optional: true, required: false
    private _applicationCallBackUrl?: string; 
    public get applicationCallBackUrl() {
        return this.getStringAttribute('application_call_back_url');
    }
    public set applicationCallBackUrl(value: string) {
        this._applicationCallBackUrl = value;
    }
    public resetApplicationCallBackUrl() {
        this._applicationCallBackUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationCallBackUrlInput() {
        return this._applicationCallBackUrl;
    }

    // attribute_map - computed: true, optional: true, required: false
    private _attributeMap = new AttributeMapItemsPropertyList(this, "attribute_map", false);
    public get attributeMap() {
        return this._attributeMap;
    }
    public putAttributeMap(value: AttributeMapItemsProperty[] | cdktn.IResolvable) {
        this._attributeMap.internalValue = value;
    }
    public resetAttributeMap() {
        this._attributeMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeMapInput() {
        return this._attributeMap.internalValue;
    }

    // federation_provider_name - computed: true, optional: true, required: false
    private _federationProviderName?: string; 
    public get federationProviderName() {
        return this.getStringAttribute('federation_provider_name');
    }
    public set federationProviderName(value: string) {
        this._federationProviderName = value;
    }
    public resetFederationProviderName() {
        this._federationProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federationProviderNameInput() {
        return this._federationProviderName;
    }

    // federation_urn - computed: true, optional: true, required: false
    private _federationUrn?: string; 
    public get federationUrn() {
        return this.getStringAttribute('federation_urn');
    }
    public set federationUrn(value: string) {
        this._federationUrn = value;
    }
    public resetFederationUrn() {
        this._federationUrn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federationUrnInput() {
        return this._federationUrn;
    }

    // saml_metadata_document - computed: true, optional: true, required: false
    private _samlMetadataDocument?: string; 
    public get samlMetadataDocument() {
        return this.getStringAttribute('saml_metadata_document');
    }
    public set samlMetadataDocument(value: string) {
        this._samlMetadataDocument = value;
    }
    public resetSamlMetadataDocument() {
        this._samlMetadataDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlMetadataDocumentInput() {
        return this._samlMetadataDocument;
    }

    // saml_metadata_url - computed: true, optional: true, required: false
    private _samlMetadataUrl?: string; 
    public get samlMetadataUrl() {
        return this.getStringAttribute('saml_metadata_url');
    }
    public set samlMetadataUrl(value: string) {
        this._samlMetadataUrl = value;
    }
    public resetSamlMetadataUrl() {
        this._samlMetadataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlMetadataUrlInput() {
        return this._samlMetadataUrl;
    }
}
export interface SuperuserParametersProperty {
    /**
    * Email address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#email_address CcEnvironment#email_address}
    */
    readonly emailAddress?: string;
    /**
    * First name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#first_name CcEnvironment#first_name}
    */
    readonly firstName?: string;
    /**
    * Last name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#last_name CcEnvironment#last_name}
    */
    readonly lastName?: string;
}
export class SuperuserParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuperuserParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddress = this._emailAddress;
        }
        if (this._firstName !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstName = this._firstName;
        }
        if (this._lastName !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastName = this._lastName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuperuserParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailAddress = undefined;
            this._firstName = undefined;
            this._lastName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailAddress = value.emailAddress;
            this._firstName = value.firstName;
            this._lastName = value.lastName;
        }
    }

    // email_address - computed: true, optional: true, required: false
    private _emailAddress?: string; 
    public get emailAddress() {
        return this.getStringAttribute('email_address');
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }
    public resetEmailAddress() {
        this._emailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress;
    }

    // first_name - computed: true, optional: true, required: false
    private _firstName?: string; 
    public get firstName() {
        return this.getStringAttribute('first_name');
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public resetFirstName() {
        this._firstName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstNameInput() {
        return this._firstName;
    }

    // last_name - computed: true, optional: true, required: false
    private _lastName?: string; 
    public get lastName() {
        return this.getStringAttribute('last_name');
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public resetLastName() {
        this._lastName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastNameInput() {
        return this._lastName;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/finspace_environment#value CcEnvironment#value}
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
