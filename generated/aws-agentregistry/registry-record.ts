// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRegistryRecordProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the registry record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#description CcRegistryRecord#description}
    */
    readonly description?: string;
    /**
    * The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#descriptors CcRegistryRecord#descriptors}
    */
    readonly descriptors: CcRegistryRecord.DescriptorsProperty;
    /**
    * The human-readable display name of the registry record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#display_name CcRegistryRecord#display_name}
    */
    readonly displayName?: string;
    /**
    * The name of the registry record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#name CcRegistryRecord#name}
    */
    readonly name: string;
    /**
    * The type of the registry record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#record_type CcRegistryRecord#record_type}
    */
    readonly recordType: string;
    /**
    * The version of the registry record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#record_version CcRegistryRecord#record_version}
    */
    readonly recordVersion?: string;
    /**
    * The identifier of the registry containing the record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#registry_id CcRegistryRecord#registry_id}
    */
    readonly registryId: string;
    /**
    * Tags to assign to the registry record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#tags CcRegistryRecord#tags}
    */
    readonly tags?: CcRegistryRecord.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record awscc_agentregistry_registry_record}
*/
export class CcRegistryRecord extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_agentregistry_registry_record";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRegistryRecord resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRegistryRecord to import
    * @param importFromId The id of the existing CcRegistryRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRegistryRecord to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_agentregistry_registry_record", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record awscc_agentregistry_registry_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRegistryRecordProps
    */
    public constructor(scope: Construct, id: string, config: CcRegistryRecordProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_agentregistry_registry_record',
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
        this._description = config.description;
        this._descriptors.internalValue = config.descriptors;
        this._displayName = config.displayName;
        this._name = config.name;
        this._recordType = config.recordType;
        this._recordVersion = config.recordVersion;
        this._registryId = config.registryId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // descriptors - computed: false, optional: false, required: true
    private _descriptors = new CcRegistryRecord.DescriptorsPropertyOutputReference(this, "descriptors");
    public get descriptors() {
        return this._descriptors;
    }
    public putDescriptors(value: CcRegistryRecord.DescriptorsProperty) {
        this._descriptors.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptorsInput() {
        return this._descriptors.internalValue;
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
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

    // record_arn - computed: true, optional: false, required: false
    public get recordArn() {
        return this.getStringAttribute('record_arn');
    }

    // record_id - computed: true, optional: false, required: false
    public get recordId() {
        return this.getStringAttribute('record_id');
    }

    // record_type - computed: false, optional: false, required: true
    private _recordType?: string; 
    public get recordType() {
        return this.getStringAttribute('record_type');
    }
    public set recordType(value: string) {
        this._recordType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordTypeInput() {
        return this._recordType;
    }

    // record_version - computed: true, optional: true, required: false
    private _recordVersion?: string; 
    public get recordVersion() {
        return this.getStringAttribute('record_version');
    }
    public set recordVersion(value: string) {
        this._recordVersion = value;
    }
    public resetRecordVersion() {
        this._recordVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordVersionInput() {
        return this._recordVersion;
    }

    // registry_arn - computed: true, optional: false, required: false
    public get registryArn() {
        return this.getStringAttribute('registry_arn');
    }

    // registry_id - computed: false, optional: false, required: true
    private _registryId?: string; 
    public get registryId() {
        return this.getStringAttribute('registry_id');
    }
    public set registryId(value: string) {
        this._registryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get registryIdInput() {
        return this._registryId;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRegistryRecord.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRegistryRecord.TagProperty[] | cdktn.IResolvable) {
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
            descriptors: ccRegistryRecordDescriptorsPropertyToTerraform(this._descriptors.internalValue),
            display_name: cdktn.stringToTerraform(this._displayName),
            name: cdktn.stringToTerraform(this._name),
            record_type: cdktn.stringToTerraform(this._recordType),
            record_version: cdktn.stringToTerraform(this._recordVersion),
            registry_id: cdktn.stringToTerraform(this._registryId),
            tags: cdktn.listMapper(ccRegistryRecordTagPropertyToTerraform, false)(this._tags.internalValue),
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
            descriptors: {
                value: ccRegistryRecordDescriptorsPropertyToHclTerraform(this._descriptors.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRegistryRecord.DescriptorsProperty",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
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
            record_type: {
                value: cdktn.stringToHclTerraform(this._recordType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            record_version: {
                value: cdktn.stringToHclTerraform(this._recordVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            registry_id: {
                value: cdktn.stringToHclTerraform(this._registryId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRegistryRecordTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRegistryRecord.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRegistryRecordRegistryRecordIamCredentialProviderPropertyToTerraform(struct?: CcRegistryRecord.RegistryRecordIamCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        service: cdktn.stringToTerraform(struct!.service),
    }
}


export function ccRegistryRecordRegistryRecordIamCredentialProviderPropertyToHclTerraform(struct?: CcRegistryRecord.RegistryRecordIamCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktn.stringToHclTerraform(struct!.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordRegistryRecordOAuthCredentialProviderPropertyToTerraform(struct?: CcRegistryRecord.RegistryRecordOAuthCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
        grant_type: cdktn.stringToTerraform(struct!.grantType),
        provider_arn: cdktn.stringToTerraform(struct!.providerArn),
        scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    }
}


export function ccRegistryRecordRegistryRecordOAuthCredentialProviderPropertyToHclTerraform(struct?: CcRegistryRecord.RegistryRecordOAuthCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        grant_type: {
            value: cdktn.stringToHclTerraform(struct!.grantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.providerArn),
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


export function ccRegistryRecordRegistryRecordCredentialProviderUnionPropertyToTerraform(struct?: CcRegistryRecord.RegistryRecordCredentialProviderUnionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam_credential_provider: ccRegistryRecordRegistryRecordIamCredentialProviderPropertyToTerraform(struct!.iamCredentialProvider),
        oauth_credential_provider: ccRegistryRecordRegistryRecordOAuthCredentialProviderPropertyToTerraform(struct!.oauthCredentialProvider),
    }
}


export function ccRegistryRecordRegistryRecordCredentialProviderUnionPropertyToHclTerraform(struct?: CcRegistryRecord.RegistryRecordCredentialProviderUnionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam_credential_provider: {
            value: ccRegistryRecordRegistryRecordIamCredentialProviderPropertyToHclTerraform(struct!.iamCredentialProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "RegistryRecordIamCredentialProviderProperty",
        },
        oauth_credential_provider: {
            value: ccRegistryRecordRegistryRecordOAuthCredentialProviderPropertyToHclTerraform(struct!.oauthCredentialProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "RegistryRecordOAuthCredentialProviderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordRegistryRecordCredentialProviderConfigurationPropertyToTerraform(struct?: CcRegistryRecord.RegistryRecordCredentialProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_provider: ccRegistryRecordRegistryRecordCredentialProviderUnionPropertyToTerraform(struct!.credentialProvider),
        credential_provider_type: cdktn.stringToTerraform(struct!.credentialProviderType),
    }
}


export function ccRegistryRecordRegistryRecordCredentialProviderConfigurationPropertyToHclTerraform(struct?: CcRegistryRecord.RegistryRecordCredentialProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_provider: {
            value: ccRegistryRecordRegistryRecordCredentialProviderUnionPropertyToHclTerraform(struct!.credentialProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "RegistryRecordCredentialProviderUnionProperty",
        },
        credential_provider_type: {
            value: cdktn.stringToHclTerraform(struct!.credentialProviderType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordDescriptorSourceFromUrlPropertyToTerraform(struct?: CcRegistryRecord.DescriptorSourceFromUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_provider_configurations: cdktn.listMapper(ccRegistryRecordRegistryRecordCredentialProviderConfigurationPropertyToTerraform, false)(struct!.credentialProviderConfigurations),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccRegistryRecordDescriptorSourceFromUrlPropertyToHclTerraform(struct?: CcRegistryRecord.DescriptorSourceFromUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_provider_configurations: {
            value: cdktn.listMapperHcl(ccRegistryRecordRegistryRecordCredentialProviderConfigurationPropertyToHclTerraform, false)(struct!.credentialProviderConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "RegistryRecordCredentialProviderConfigurationPropertyList",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordDescriptorSourcePropertyToTerraform(struct?: CcRegistryRecord.DescriptorSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_url: ccRegistryRecordDescriptorSourceFromUrlPropertyToTerraform(struct!.fromUrl),
    }
}


export function ccRegistryRecordDescriptorSourcePropertyToHclTerraform(struct?: CcRegistryRecord.DescriptorSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_url: {
            value: ccRegistryRecordDescriptorSourceFromUrlPropertyToHclTerraform(struct!.fromUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "DescriptorSourceFromUrlProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordA2aAgentCardDescriptorPropertyToTerraform(struct?: CcRegistryRecord.A2aAgentCardDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data: cdktn.stringToTerraform(struct!.data),
        data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
        source: ccRegistryRecordDescriptorSourcePropertyToTerraform(struct!.source),
    }
}


export function ccRegistryRecordA2aAgentCardDescriptorPropertyToHclTerraform(struct?: CcRegistryRecord.A2aAgentCardDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data: {
            value: cdktn.stringToHclTerraform(struct!.data),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: ccRegistryRecordDescriptorSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "DescriptorSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordSkillMdSourceFromUrlPropertyToTerraform(struct?: CcRegistryRecord.SkillMdSourceFromUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccRegistryRecordSkillMdSourceFromUrlPropertyToHclTerraform(struct?: CcRegistryRecord.SkillMdSourceFromUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordSkillMdSourcePropertyToTerraform(struct?: CcRegistryRecord.SkillMdSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_url: ccRegistryRecordSkillMdSourceFromUrlPropertyToTerraform(struct!.fromUrl),
    }
}


export function ccRegistryRecordSkillMdSourcePropertyToHclTerraform(struct?: CcRegistryRecord.SkillMdSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_url: {
            value: ccRegistryRecordSkillMdSourceFromUrlPropertyToHclTerraform(struct!.fromUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "SkillMdSourceFromUrlProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordAgentSkillsMdDescriptorPropertyToTerraform(struct?: CcRegistryRecord.AgentSkillsMdDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data: cdktn.stringToTerraform(struct!.data),
        data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
        source: ccRegistryRecordSkillMdSourcePropertyToTerraform(struct!.source),
    }
}


export function ccRegistryRecordAgentSkillsMdDescriptorPropertyToHclTerraform(struct?: CcRegistryRecord.AgentSkillsMdDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data: {
            value: cdktn.stringToHclTerraform(struct!.data),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: ccRegistryRecordSkillMdSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "SkillMdSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordAgentSkillsAdditionalDataPropertyToTerraform(struct?: CcRegistryRecord.AgentSkillsAdditionalDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        skill_md: ccRegistryRecordAgentSkillsMdDescriptorPropertyToTerraform(struct!.skillMd),
    }
}


export function ccRegistryRecordAgentSkillsAdditionalDataPropertyToHclTerraform(struct?: CcRegistryRecord.AgentSkillsAdditionalDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        skill_md: {
            value: ccRegistryRecordAgentSkillsMdDescriptorPropertyToHclTerraform(struct!.skillMd),
            isBlock: true,
            type: "struct",
            storageClassType: "AgentSkillsMdDescriptorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordAgentSkillsDefinitionDescriptorPropertyToTerraform(struct?: CcRegistryRecord.AgentSkillsDefinitionDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_data: ccRegistryRecordAgentSkillsAdditionalDataPropertyToTerraform(struct!.additionalData),
        data: cdktn.stringToTerraform(struct!.data),
        data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
    }
}


export function ccRegistryRecordAgentSkillsDefinitionDescriptorPropertyToHclTerraform(struct?: CcRegistryRecord.AgentSkillsDefinitionDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_data: {
            value: ccRegistryRecordAgentSkillsAdditionalDataPropertyToHclTerraform(struct!.additionalData),
            isBlock: true,
            type: "struct",
            storageClassType: "AgentSkillsAdditionalDataProperty",
        },
        data: {
            value: cdktn.stringToHclTerraform(struct!.data),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordCustomDescriptorPropertyToTerraform(struct?: CcRegistryRecord.CustomDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data: cdktn.stringToTerraform(struct!.data),
    }
}


export function ccRegistryRecordCustomDescriptorPropertyToHclTerraform(struct?: CcRegistryRecord.CustomDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data: {
            value: cdktn.stringToHclTerraform(struct!.data),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordMcpToolsDescriptorPropertyToTerraform(struct?: CcRegistryRecord.McpToolsDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data: cdktn.stringToTerraform(struct!.data),
        data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
    }
}


export function ccRegistryRecordMcpToolsDescriptorPropertyToHclTerraform(struct?: CcRegistryRecord.McpToolsDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data: {
            value: cdktn.stringToHclTerraform(struct!.data),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordMcpServerAdditionalDataPropertyToTerraform(struct?: CcRegistryRecord.McpServerAdditionalDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tools: ccRegistryRecordMcpToolsDescriptorPropertyToTerraform(struct!.tools),
    }
}


export function ccRegistryRecordMcpServerAdditionalDataPropertyToHclTerraform(struct?: CcRegistryRecord.McpServerAdditionalDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tools: {
            value: ccRegistryRecordMcpToolsDescriptorPropertyToHclTerraform(struct!.tools),
            isBlock: true,
            type: "struct",
            storageClassType: "McpToolsDescriptorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordIamCredentialProviderPropertyToTerraform(struct?: CcRegistryRecord.IamCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        service: cdktn.stringToTerraform(struct!.service),
    }
}


export function ccRegistryRecordIamCredentialProviderPropertyToHclTerraform(struct?: CcRegistryRecord.IamCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktn.stringToHclTerraform(struct!.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordOauthCredentialProviderPropertyToTerraform(struct?: CcRegistryRecord.OauthCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
        grant_type: cdktn.stringToTerraform(struct!.grantType),
        provider_arn: cdktn.stringToTerraform(struct!.providerArn),
        scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    }
}


export function ccRegistryRecordOauthCredentialProviderPropertyToHclTerraform(struct?: CcRegistryRecord.OauthCredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        grant_type: {
            value: cdktn.stringToHclTerraform(struct!.grantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.providerArn),
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


export function ccRegistryRecordCredentialProviderPropertyToTerraform(struct?: CcRegistryRecord.CredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam_credential_provider: ccRegistryRecordIamCredentialProviderPropertyToTerraform(struct!.iamCredentialProvider),
        oauth_credential_provider: ccRegistryRecordOauthCredentialProviderPropertyToTerraform(struct!.oauthCredentialProvider),
    }
}


export function ccRegistryRecordCredentialProviderPropertyToHclTerraform(struct?: CcRegistryRecord.CredentialProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam_credential_provider: {
            value: ccRegistryRecordIamCredentialProviderPropertyToHclTerraform(struct!.iamCredentialProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "IamCredentialProviderProperty",
        },
        oauth_credential_provider: {
            value: ccRegistryRecordOauthCredentialProviderPropertyToHclTerraform(struct!.oauthCredentialProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "OauthCredentialProviderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordCredentialProviderConfigurationsPropertyToTerraform(struct?: CcRegistryRecord.CredentialProviderConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_provider: ccRegistryRecordCredentialProviderPropertyToTerraform(struct!.credentialProvider),
        credential_provider_type: cdktn.stringToTerraform(struct!.credentialProviderType),
    }
}


export function ccRegistryRecordCredentialProviderConfigurationsPropertyToHclTerraform(struct?: CcRegistryRecord.CredentialProviderConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_provider: {
            value: ccRegistryRecordCredentialProviderPropertyToHclTerraform(struct!.credentialProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialProviderProperty",
        },
        credential_provider_type: {
            value: cdktn.stringToHclTerraform(struct!.credentialProviderType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordFromUrlPropertyToTerraform(struct?: CcRegistryRecord.FromUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_provider_configurations: cdktn.listMapper(ccRegistryRecordCredentialProviderConfigurationsPropertyToTerraform, false)(struct!.credentialProviderConfigurations),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccRegistryRecordFromUrlPropertyToHclTerraform(struct?: CcRegistryRecord.FromUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_provider_configurations: {
            value: cdktn.listMapperHcl(ccRegistryRecordCredentialProviderConfigurationsPropertyToHclTerraform, false)(struct!.credentialProviderConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "CredentialProviderConfigurationsPropertyList",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordSourcePropertyToTerraform(struct?: CcRegistryRecord.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_url: ccRegistryRecordFromUrlPropertyToTerraform(struct!.fromUrl),
    }
}


export function ccRegistryRecordSourcePropertyToHclTerraform(struct?: CcRegistryRecord.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_url: {
            value: ccRegistryRecordFromUrlPropertyToHclTerraform(struct!.fromUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "FromUrlProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordMcpServerDescriptorPropertyToTerraform(struct?: CcRegistryRecord.McpServerDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_data: ccRegistryRecordMcpServerAdditionalDataPropertyToTerraform(struct!.additionalData),
        data: cdktn.stringToTerraform(struct!.data),
        data_schema_version: cdktn.stringToTerraform(struct!.dataSchemaVersion),
        source: ccRegistryRecordSourcePropertyToTerraform(struct!.source),
    }
}


export function ccRegistryRecordMcpServerDescriptorPropertyToHclTerraform(struct?: CcRegistryRecord.McpServerDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_data: {
            value: ccRegistryRecordMcpServerAdditionalDataPropertyToHclTerraform(struct!.additionalData),
            isBlock: true,
            type: "struct",
            storageClassType: "McpServerAdditionalDataProperty",
        },
        data: {
            value: cdktn.stringToHclTerraform(struct!.data),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.dataSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: ccRegistryRecordSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordDescriptorsPropertyToTerraform(struct?: CcRegistryRecord.DescriptorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        a2_a_agent_card: ccRegistryRecordA2aAgentCardDescriptorPropertyToTerraform(struct!.a2AAgentCard),
        agent_skills_definition: ccRegistryRecordAgentSkillsDefinitionDescriptorPropertyToTerraform(struct!.agentSkillsDefinition),
        custom: ccRegistryRecordCustomDescriptorPropertyToTerraform(struct!.custom),
        mcp_server: ccRegistryRecordMcpServerDescriptorPropertyToTerraform(struct!.mcpServer),
    }
}


export function ccRegistryRecordDescriptorsPropertyToHclTerraform(struct?: CcRegistryRecord.DescriptorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        a2_a_agent_card: {
            value: ccRegistryRecordA2aAgentCardDescriptorPropertyToHclTerraform(struct!.a2AAgentCard),
            isBlock: true,
            type: "struct",
            storageClassType: "A2aAgentCardDescriptorProperty",
        },
        agent_skills_definition: {
            value: ccRegistryRecordAgentSkillsDefinitionDescriptorPropertyToHclTerraform(struct!.agentSkillsDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "AgentSkillsDefinitionDescriptorProperty",
        },
        custom: {
            value: ccRegistryRecordCustomDescriptorPropertyToHclTerraform(struct!.custom),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomDescriptorProperty",
        },
        mcp_server: {
            value: ccRegistryRecordMcpServerDescriptorPropertyToHclTerraform(struct!.mcpServer),
            isBlock: true,
            type: "struct",
            storageClassType: "McpServerDescriptorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRegistryRecordTagPropertyToTerraform(struct?: CcRegistryRecord.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRegistryRecordTagPropertyToHclTerraform(struct?: CcRegistryRecord.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRegistryRecord {
export interface RegistryRecordIamCredentialProviderProperty {
    /**
    * The SigV4 signing region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#region CcRegistryRecord#region}
    */
    readonly region?: string;
    /**
    * The ARN of the IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#role_arn CcRegistryRecord#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The SigV4 signing service name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#service CcRegistryRecord#service}
    */
    readonly service?: string;
}
export class RegistryRecordIamCredentialProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegistryRecordIamCredentialProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegistryRecordIamCredentialProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._service = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._service = value.service;
        }
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // service - computed: true, optional: true, required: false
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    public resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }
}
export interface RegistryRecordOAuthCredentialProviderProperty {
    /**
    * Additional custom parameters for the OAuth flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#custom_parameters CcRegistryRecord#custom_parameters}
    */
    readonly customParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#grant_type CcRegistryRecord#grant_type}
    */
    readonly grantType?: string;
    /**
    * The ARN of the OAuth credential provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#provider_arn CcRegistryRecord#provider_arn}
    */
    readonly providerArn?: string;
    /**
    * OAuth scopes to request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#scopes CcRegistryRecord#scopes}
    */
    readonly scopes?: string[];
}
export class RegistryRecordOAuthCredentialProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegistryRecordOAuthCredentialProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.customParameters = this._customParameters;
        }
        if (this._grantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantType = this._grantType;
        }
        if (this._providerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerArn = this._providerArn;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegistryRecordOAuthCredentialProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customParameters = undefined;
            this._grantType = undefined;
            this._providerArn = undefined;
            this._scopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customParameters = value.customParameters;
            this._grantType = value.grantType;
            this._providerArn = value.providerArn;
            this._scopes = value.scopes;
        }
    }

    // custom_parameters - computed: true, optional: true, required: false
    private _customParameters?: { [key: string]: string }; 
    public get customParameters() {
        return this.getStringMapAttribute('custom_parameters');
    }
    public set customParameters(value: { [key: string]: string }) {
        this._customParameters = value;
    }
    public resetCustomParameters() {
        this._customParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customParametersInput() {
        return this._customParameters;
    }

    // grant_type - computed: true, optional: true, required: false
    private _grantType?: string; 
    public get grantType() {
        return this.getStringAttribute('grant_type');
    }
    public set grantType(value: string) {
        this._grantType = value;
    }
    public resetGrantType() {
        this._grantType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantTypeInput() {
        return this._grantType;
    }

    // provider_arn - computed: true, optional: true, required: false
    private _providerArn?: string; 
    public get providerArn() {
        return this.getStringAttribute('provider_arn');
    }
    public set providerArn(value: string) {
        this._providerArn = value;
    }
    public resetProviderArn() {
        this._providerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerArnInput() {
        return this._providerArn;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    public resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }
}
export interface RegistryRecordCredentialProviderUnionProperty {
    /**
    * IAM credential provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#iam_credential_provider CcRegistryRecord#iam_credential_provider}
    */
    readonly iamCredentialProvider?: RegistryRecordIamCredentialProviderProperty;
    /**
    * OAuth credential provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#oauth_credential_provider CcRegistryRecord#oauth_credential_provider}
    */
    readonly oauthCredentialProvider?: RegistryRecordOAuthCredentialProviderProperty;
}
export class RegistryRecordCredentialProviderUnionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegistryRecordCredentialProviderUnionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iamCredentialProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamCredentialProvider = this._iamCredentialProvider?.internalValue;
        }
        if (this._oauthCredentialProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oauthCredentialProvider = this._oauthCredentialProvider?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegistryRecordCredentialProviderUnionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iamCredentialProvider.internalValue = undefined;
            this._oauthCredentialProvider.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iamCredentialProvider.internalValue = value.iamCredentialProvider;
            this._oauthCredentialProvider.internalValue = value.oauthCredentialProvider;
        }
    }

    // iam_credential_provider - computed: true, optional: true, required: false
    private _iamCredentialProvider = new RegistryRecordIamCredentialProviderPropertyOutputReference(this, "iam_credential_provider");
    public get iamCredentialProvider() {
        return this._iamCredentialProvider;
    }
    public putIamCredentialProvider(value: RegistryRecordIamCredentialProviderProperty) {
        this._iamCredentialProvider.internalValue = value;
    }
    public resetIamCredentialProvider() {
        this._iamCredentialProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamCredentialProviderInput() {
        return this._iamCredentialProvider.internalValue;
    }

    // oauth_credential_provider - computed: true, optional: true, required: false
    private _oauthCredentialProvider = new RegistryRecordOAuthCredentialProviderPropertyOutputReference(this, "oauth_credential_provider");
    public get oauthCredentialProvider() {
        return this._oauthCredentialProvider;
    }
    public putOauthCredentialProvider(value: RegistryRecordOAuthCredentialProviderProperty) {
        this._oauthCredentialProvider.internalValue = value;
    }
    public resetOauthCredentialProvider() {
        this._oauthCredentialProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthCredentialProviderInput() {
        return this._oauthCredentialProvider.internalValue;
    }
}
export interface RegistryRecordCredentialProviderConfigurationProperty {
    /**
    * The credential provider details. Specify exactly one member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#credential_provider CcRegistryRecord#credential_provider}
    */
    readonly credentialProvider?: RegistryRecordCredentialProviderUnionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#credential_provider_type CcRegistryRecord#credential_provider_type}
    */
    readonly credentialProviderType?: string;
}
export class RegistryRecordCredentialProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegistryRecordCredentialProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProvider = this._credentialProvider?.internalValue;
        }
        if (this._credentialProviderType !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderType = this._credentialProviderType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegistryRecordCredentialProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialProvider.internalValue = undefined;
            this._credentialProviderType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialProvider.internalValue = value.credentialProvider;
            this._credentialProviderType = value.credentialProviderType;
        }
    }

    // credential_provider - computed: true, optional: true, required: false
    private _credentialProvider = new RegistryRecordCredentialProviderUnionPropertyOutputReference(this, "credential_provider");
    public get credentialProvider() {
        return this._credentialProvider;
    }
    public putCredentialProvider(value: RegistryRecordCredentialProviderUnionProperty) {
        this._credentialProvider.internalValue = value;
    }
    public resetCredentialProvider() {
        this._credentialProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderInput() {
        return this._credentialProvider.internalValue;
    }

    // credential_provider_type - computed: true, optional: true, required: false
    private _credentialProviderType?: string; 
    public get credentialProviderType() {
        return this.getStringAttribute('credential_provider_type');
    }
    public set credentialProviderType(value: string) {
        this._credentialProviderType = value;
    }
    public resetCredentialProviderType() {
        this._credentialProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderTypeInput() {
        return this._credentialProviderType;
    }
}

export class RegistryRecordCredentialProviderConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : RegistryRecordCredentialProviderConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): RegistryRecordCredentialProviderConfigurationPropertyOutputReference {
        return new RegistryRecordCredentialProviderConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DescriptorSourceFromUrlProperty {
    /**
    * The credential providers used to authenticate when fetching descriptor content from the source URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#credential_provider_configurations CcRegistryRecord#credential_provider_configurations}
    */
    readonly credentialProviderConfigurations?: RegistryRecordCredentialProviderConfigurationProperty[] | cdktn.IResolvable;
    /**
    * URL source for descriptor content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#url CcRegistryRecord#url}
    */
    readonly url?: string;
}
export class DescriptorSourceFromUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DescriptorSourceFromUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialProviderConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderConfigurations = this._credentialProviderConfigurations?.internalValue;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DescriptorSourceFromUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialProviderConfigurations.internalValue = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialProviderConfigurations.internalValue = value.credentialProviderConfigurations;
            this._url = value.url;
        }
    }

    // credential_provider_configurations - computed: true, optional: true, required: false
    private _credentialProviderConfigurations = new RegistryRecordCredentialProviderConfigurationPropertyList(this, "credential_provider_configurations", false);
    public get credentialProviderConfigurations() {
        return this._credentialProviderConfigurations;
    }
    public putCredentialProviderConfigurations(value: RegistryRecordCredentialProviderConfigurationProperty[] | cdktn.IResolvable) {
        this._credentialProviderConfigurations.internalValue = value;
    }
    public resetCredentialProviderConfigurations() {
        this._credentialProviderConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderConfigurationsInput() {
        return this._credentialProviderConfigurations.internalValue;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface DescriptorSourceProperty {
    /**
    * URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#from_url CcRegistryRecord#from_url}
    */
    readonly fromUrl?: DescriptorSourceFromUrlProperty;
}
export class DescriptorSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DescriptorSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromUrl = this._fromUrl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DescriptorSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromUrl.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromUrl.internalValue = value.fromUrl;
        }
    }

    // from_url - computed: true, optional: true, required: false
    private _fromUrl = new DescriptorSourceFromUrlPropertyOutputReference(this, "from_url");
    public get fromUrl() {
        return this._fromUrl;
    }
    public putFromUrl(value: DescriptorSourceFromUrlProperty) {
        this._fromUrl.internalValue = value;
    }
    public resetFromUrl() {
        this._fromUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromUrlInput() {
        return this._fromUrl.internalValue;
    }
}
export interface A2aAgentCardDescriptorProperty {
    /**
    * Descriptor payload data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data CcRegistryRecord#data}
    */
    readonly data?: string;
    /**
    * Version of the descriptor type schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data_schema_version CcRegistryRecord#data_schema_version}
    */
    readonly dataSchemaVersion?: string;
    /**
    * The source configuration that defines where descriptor content is retrieved from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#source CcRegistryRecord#source}
    */
    readonly source?: DescriptorSourceProperty;
}
export class A2aAgentCardDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): A2aAgentCardDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._data !== undefined) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        if (this._dataSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: A2aAgentCardDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._data = undefined;
            this._dataSchemaVersion = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._data = value.data;
            this._dataSchemaVersion = value.dataSchemaVersion;
            this._source.internalValue = value.source;
        }
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
    }

    // data_schema_version - computed: true, optional: true, required: false
    private _dataSchemaVersion?: string; 
    public get dataSchemaVersion() {
        return this.getStringAttribute('data_schema_version');
    }
    public set dataSchemaVersion(value: string) {
        this._dataSchemaVersion = value;
    }
    public resetDataSchemaVersion() {
        this._dataSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSchemaVersionInput() {
        return this._dataSchemaVersion;
    }

    // source - computed: true, optional: true, required: false
    private _source = new DescriptorSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: DescriptorSourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}
export interface SkillMdSourceFromUrlProperty {
    /**
    * URL source for the SkillMd document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#url CcRegistryRecord#url}
    */
    readonly url?: string;
}
export class SkillMdSourceFromUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SkillMdSourceFromUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SkillMdSourceFromUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._url = value.url;
        }
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface SkillMdSourceProperty {
    /**
    * URL-based source for SkillMd content (sync is skipped; content is provided inline via Data).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#from_url CcRegistryRecord#from_url}
    */
    readonly fromUrl?: SkillMdSourceFromUrlProperty;
}
export class SkillMdSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SkillMdSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromUrl = this._fromUrl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SkillMdSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromUrl.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromUrl.internalValue = value.fromUrl;
        }
    }

    // from_url - computed: true, optional: true, required: false
    private _fromUrl = new SkillMdSourceFromUrlPropertyOutputReference(this, "from_url");
    public get fromUrl() {
        return this._fromUrl;
    }
    public putFromUrl(value: SkillMdSourceFromUrlProperty) {
        this._fromUrl.internalValue = value;
    }
    public resetFromUrl() {
        this._fromUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromUrlInput() {
        return this._fromUrl.internalValue;
    }
}
export interface AgentSkillsMdDescriptorProperty {
    /**
    * Descriptor payload data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data CcRegistryRecord#data}
    */
    readonly data?: string;
    /**
    * Version of the descriptor type schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data_schema_version CcRegistryRecord#data_schema_version}
    */
    readonly dataSchemaVersion?: string;
    /**
    * Source configuration for a SkillMd document. Unlike MCP/A2A sources, SkillMd does not support credential providers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#source CcRegistryRecord#source}
    */
    readonly source?: SkillMdSourceProperty;
}
export class AgentSkillsMdDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentSkillsMdDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._data !== undefined) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        if (this._dataSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentSkillsMdDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._data = undefined;
            this._dataSchemaVersion = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._data = value.data;
            this._dataSchemaVersion = value.dataSchemaVersion;
            this._source.internalValue = value.source;
        }
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
    }

    // data_schema_version - computed: true, optional: true, required: false
    private _dataSchemaVersion?: string; 
    public get dataSchemaVersion() {
        return this.getStringAttribute('data_schema_version');
    }
    public set dataSchemaVersion(value: string) {
        this._dataSchemaVersion = value;
    }
    public resetDataSchemaVersion() {
        this._dataSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSchemaVersionInput() {
        return this._dataSchemaVersion;
    }

    // source - computed: true, optional: true, required: false
    private _source = new SkillMdSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: SkillMdSourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}
export interface AgentSkillsAdditionalDataProperty {
    /**
    * Markdown-format descriptor containing an agent skills document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#skill_md CcRegistryRecord#skill_md}
    */
    readonly skillMd?: AgentSkillsMdDescriptorProperty;
}
export class AgentSkillsAdditionalDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentSkillsAdditionalDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._skillMd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.skillMd = this._skillMd?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentSkillsAdditionalDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._skillMd.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._skillMd.internalValue = value.skillMd;
        }
    }

    // skill_md - computed: true, optional: true, required: false
    private _skillMd = new AgentSkillsMdDescriptorPropertyOutputReference(this, "skill_md");
    public get skillMd() {
        return this._skillMd;
    }
    public putSkillMd(value: AgentSkillsMdDescriptorProperty) {
        this._skillMd.internalValue = value;
    }
    public resetSkillMd() {
        this._skillMd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skillMdInput() {
        return this._skillMd.internalValue;
    }
}
export interface AgentSkillsDefinitionDescriptorProperty {
    /**
    * Additional data associated with an agent skills definition descriptor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#additional_data CcRegistryRecord#additional_data}
    */
    readonly additionalData?: AgentSkillsAdditionalDataProperty;
    /**
    * Descriptor payload data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data CcRegistryRecord#data}
    */
    readonly data?: string;
    /**
    * Version of the descriptor type schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data_schema_version CcRegistryRecord#data_schema_version}
    */
    readonly dataSchemaVersion?: string;
}
export class AgentSkillsDefinitionDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentSkillsDefinitionDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalData = this._additionalData?.internalValue;
        }
        if (this._data !== undefined) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        if (this._dataSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentSkillsDefinitionDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalData.internalValue = undefined;
            this._data = undefined;
            this._dataSchemaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalData.internalValue = value.additionalData;
            this._data = value.data;
            this._dataSchemaVersion = value.dataSchemaVersion;
        }
    }

    // additional_data - computed: true, optional: true, required: false
    private _additionalData = new AgentSkillsAdditionalDataPropertyOutputReference(this, "additional_data");
    public get additionalData() {
        return this._additionalData;
    }
    public putAdditionalData(value: AgentSkillsAdditionalDataProperty) {
        this._additionalData.internalValue = value;
    }
    public resetAdditionalData() {
        this._additionalData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalDataInput() {
        return this._additionalData.internalValue;
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
    }

    // data_schema_version - computed: true, optional: true, required: false
    private _dataSchemaVersion?: string; 
    public get dataSchemaVersion() {
        return this.getStringAttribute('data_schema_version');
    }
    public set dataSchemaVersion(value: string) {
        this._dataSchemaVersion = value;
    }
    public resetDataSchemaVersion() {
        this._dataSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSchemaVersionInput() {
        return this._dataSchemaVersion;
    }
}
export interface CustomDescriptorProperty {
    /**
    * Descriptor payload data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data CcRegistryRecord#data}
    */
    readonly data?: string;
}
export class CustomDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._data !== undefined) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._data = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._data = value.data;
        }
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
    }
}
export interface McpToolsDescriptorProperty {
    /**
    * Descriptor payload data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data CcRegistryRecord#data}
    */
    readonly data?: string;
    /**
    * Version of the tools descriptor schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data_schema_version CcRegistryRecord#data_schema_version}
    */
    readonly dataSchemaVersion?: string;
}
export class McpToolsDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpToolsDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._data !== undefined) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        if (this._dataSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpToolsDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._data = undefined;
            this._dataSchemaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._data = value.data;
            this._dataSchemaVersion = value.dataSchemaVersion;
        }
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
    }

    // data_schema_version - computed: true, optional: true, required: false
    private _dataSchemaVersion?: string; 
    public get dataSchemaVersion() {
        return this.getStringAttribute('data_schema_version');
    }
    public set dataSchemaVersion(value: string) {
        this._dataSchemaVersion = value;
    }
    public resetDataSchemaVersion() {
        this._dataSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSchemaVersionInput() {
        return this._dataSchemaVersion;
    }
}
export interface McpServerAdditionalDataProperty {
    /**
    * The MCP tools descriptor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#tools CcRegistryRecord#tools}
    */
    readonly tools?: McpToolsDescriptorProperty;
}
export class McpServerAdditionalDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerAdditionalDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tools?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tools = this._tools?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerAdditionalDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tools.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tools.internalValue = value.tools;
        }
    }

    // tools - computed: true, optional: true, required: false
    private _tools = new McpToolsDescriptorPropertyOutputReference(this, "tools");
    public get tools() {
        return this._tools;
    }
    public putTools(value: McpToolsDescriptorProperty) {
        this._tools.internalValue = value;
    }
    public resetTools() {
        this._tools.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolsInput() {
        return this._tools.internalValue;
    }
}
export interface IamCredentialProviderProperty {
    /**
    * The SigV4 signing region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#region CcRegistryRecord#region}
    */
    readonly region?: string;
    /**
    * The ARN of the IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#role_arn CcRegistryRecord#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The SigV4 signing service name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#service CcRegistryRecord#service}
    */
    readonly service?: string;
}
export class IamCredentialProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamCredentialProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamCredentialProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._service = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._service = value.service;
        }
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // service - computed: true, optional: true, required: false
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    public resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }
}
export interface OauthCredentialProviderProperty {
    /**
    * Additional custom parameters for the OAuth flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#custom_parameters CcRegistryRecord#custom_parameters}
    */
    readonly customParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#grant_type CcRegistryRecord#grant_type}
    */
    readonly grantType?: string;
    /**
    * The ARN of the OAuth credential provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#provider_arn CcRegistryRecord#provider_arn}
    */
    readonly providerArn?: string;
    /**
    * OAuth scopes to request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#scopes CcRegistryRecord#scopes}
    */
    readonly scopes?: string[];
}
export class OauthCredentialProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OauthCredentialProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.customParameters = this._customParameters;
        }
        if (this._grantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantType = this._grantType;
        }
        if (this._providerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerArn = this._providerArn;
        }
        if (this._scopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopes = this._scopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OauthCredentialProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customParameters = undefined;
            this._grantType = undefined;
            this._providerArn = undefined;
            this._scopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customParameters = value.customParameters;
            this._grantType = value.grantType;
            this._providerArn = value.providerArn;
            this._scopes = value.scopes;
        }
    }

    // custom_parameters - computed: true, optional: true, required: false
    private _customParameters?: { [key: string]: string }; 
    public get customParameters() {
        return this.getStringMapAttribute('custom_parameters');
    }
    public set customParameters(value: { [key: string]: string }) {
        this._customParameters = value;
    }
    public resetCustomParameters() {
        this._customParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customParametersInput() {
        return this._customParameters;
    }

    // grant_type - computed: true, optional: true, required: false
    private _grantType?: string; 
    public get grantType() {
        return this.getStringAttribute('grant_type');
    }
    public set grantType(value: string) {
        this._grantType = value;
    }
    public resetGrantType() {
        this._grantType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantTypeInput() {
        return this._grantType;
    }

    // provider_arn - computed: true, optional: true, required: false
    private _providerArn?: string; 
    public get providerArn() {
        return this.getStringAttribute('provider_arn');
    }
    public set providerArn(value: string) {
        this._providerArn = value;
    }
    public resetProviderArn() {
        this._providerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerArnInput() {
        return this._providerArn;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    public resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }
}
export interface CredentialProviderProperty {
    /**
    * IAM credential provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#iam_credential_provider CcRegistryRecord#iam_credential_provider}
    */
    readonly iamCredentialProvider?: IamCredentialProviderProperty;
    /**
    * OAuth credential provider configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#oauth_credential_provider CcRegistryRecord#oauth_credential_provider}
    */
    readonly oauthCredentialProvider?: OauthCredentialProviderProperty;
}
export class CredentialProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iamCredentialProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamCredentialProvider = this._iamCredentialProvider?.internalValue;
        }
        if (this._oauthCredentialProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oauthCredentialProvider = this._oauthCredentialProvider?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iamCredentialProvider.internalValue = undefined;
            this._oauthCredentialProvider.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iamCredentialProvider.internalValue = value.iamCredentialProvider;
            this._oauthCredentialProvider.internalValue = value.oauthCredentialProvider;
        }
    }

    // iam_credential_provider - computed: true, optional: true, required: false
    private _iamCredentialProvider = new IamCredentialProviderPropertyOutputReference(this, "iam_credential_provider");
    public get iamCredentialProvider() {
        return this._iamCredentialProvider;
    }
    public putIamCredentialProvider(value: IamCredentialProviderProperty) {
        this._iamCredentialProvider.internalValue = value;
    }
    public resetIamCredentialProvider() {
        this._iamCredentialProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamCredentialProviderInput() {
        return this._iamCredentialProvider.internalValue;
    }

    // oauth_credential_provider - computed: true, optional: true, required: false
    private _oauthCredentialProvider = new OauthCredentialProviderPropertyOutputReference(this, "oauth_credential_provider");
    public get oauthCredentialProvider() {
        return this._oauthCredentialProvider;
    }
    public putOauthCredentialProvider(value: OauthCredentialProviderProperty) {
        this._oauthCredentialProvider.internalValue = value;
    }
    public resetOauthCredentialProvider() {
        this._oauthCredentialProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthCredentialProviderInput() {
        return this._oauthCredentialProvider.internalValue;
    }
}
export interface CredentialProviderConfigurationsProperty {
    /**
    * The credential provider details. Specify exactly one member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#credential_provider CcRegistryRecord#credential_provider}
    */
    readonly credentialProvider?: CredentialProviderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#credential_provider_type CcRegistryRecord#credential_provider_type}
    */
    readonly credentialProviderType?: string;
}
export class CredentialProviderConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CredentialProviderConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProvider = this._credentialProvider?.internalValue;
        }
        if (this._credentialProviderType !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderType = this._credentialProviderType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialProviderConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialProvider.internalValue = undefined;
            this._credentialProviderType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialProvider.internalValue = value.credentialProvider;
            this._credentialProviderType = value.credentialProviderType;
        }
    }

    // credential_provider - computed: true, optional: true, required: false
    private _credentialProvider = new CredentialProviderPropertyOutputReference(this, "credential_provider");
    public get credentialProvider() {
        return this._credentialProvider;
    }
    public putCredentialProvider(value: CredentialProviderProperty) {
        this._credentialProvider.internalValue = value;
    }
    public resetCredentialProvider() {
        this._credentialProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderInput() {
        return this._credentialProvider.internalValue;
    }

    // credential_provider_type - computed: true, optional: true, required: false
    private _credentialProviderType?: string; 
    public get credentialProviderType() {
        return this.getStringAttribute('credential_provider_type');
    }
    public set credentialProviderType(value: string) {
        this._credentialProviderType = value;
    }
    public resetCredentialProviderType() {
        this._credentialProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderTypeInput() {
        return this._credentialProviderType;
    }
}

export class CredentialProviderConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : CredentialProviderConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): CredentialProviderConfigurationsPropertyOutputReference {
        return new CredentialProviderConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FromUrlProperty {
    /**
    * The credential providers used to authenticate when fetching descriptor content from the source URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#credential_provider_configurations CcRegistryRecord#credential_provider_configurations}
    */
    readonly credentialProviderConfigurations?: CredentialProviderConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * URL source for descriptor content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#url CcRegistryRecord#url}
    */
    readonly url?: string;
}
export class FromUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FromUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialProviderConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderConfigurations = this._credentialProviderConfigurations?.internalValue;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FromUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialProviderConfigurations.internalValue = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialProviderConfigurations.internalValue = value.credentialProviderConfigurations;
            this._url = value.url;
        }
    }

    // credential_provider_configurations - computed: true, optional: true, required: false
    private _credentialProviderConfigurations = new CredentialProviderConfigurationsPropertyList(this, "credential_provider_configurations", false);
    public get credentialProviderConfigurations() {
        return this._credentialProviderConfigurations;
    }
    public putCredentialProviderConfigurations(value: CredentialProviderConfigurationsProperty[] | cdktn.IResolvable) {
        this._credentialProviderConfigurations.internalValue = value;
    }
    public resetCredentialProviderConfigurations() {
        this._credentialProviderConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderConfigurationsInput() {
        return this._credentialProviderConfigurations.internalValue;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface SourceProperty {
    /**
    * URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#from_url CcRegistryRecord#from_url}
    */
    readonly fromUrl?: FromUrlProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromUrl = this._fromUrl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromUrl.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromUrl.internalValue = value.fromUrl;
        }
    }

    // from_url - computed: true, optional: true, required: false
    private _fromUrl = new FromUrlPropertyOutputReference(this, "from_url");
    public get fromUrl() {
        return this._fromUrl;
    }
    public putFromUrl(value: FromUrlProperty) {
        this._fromUrl.internalValue = value;
    }
    public resetFromUrl() {
        this._fromUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromUrlInput() {
        return this._fromUrl.internalValue;
    }
}
export interface McpServerDescriptorProperty {
    /**
    * Additional data associated with an MCP server descriptor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#additional_data CcRegistryRecord#additional_data}
    */
    readonly additionalData?: McpServerAdditionalDataProperty;
    /**
    * Descriptor payload data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data CcRegistryRecord#data}
    */
    readonly data?: string;
    /**
    * Version of the descriptor type schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#data_schema_version CcRegistryRecord#data_schema_version}
    */
    readonly dataSchemaVersion?: string;
    /**
    * The source configuration that defines where descriptor content is retrieved from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#source CcRegistryRecord#source}
    */
    readonly source?: SourceProperty;
}
export class McpServerDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): McpServerDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalData = this._additionalData?.internalValue;
        }
        if (this._data !== undefined) {
            hasAnyValues = true;
            internalValueResult.data = this._data;
        }
        if (this._dataSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSchemaVersion = this._dataSchemaVersion;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: McpServerDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalData.internalValue = undefined;
            this._data = undefined;
            this._dataSchemaVersion = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalData.internalValue = value.additionalData;
            this._data = value.data;
            this._dataSchemaVersion = value.dataSchemaVersion;
            this._source.internalValue = value.source;
        }
    }

    // additional_data - computed: true, optional: true, required: false
    private _additionalData = new McpServerAdditionalDataPropertyOutputReference(this, "additional_data");
    public get additionalData() {
        return this._additionalData;
    }
    public putAdditionalData(value: McpServerAdditionalDataProperty) {
        this._additionalData.internalValue = value;
    }
    public resetAdditionalData() {
        this._additionalData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalDataInput() {
        return this._additionalData.internalValue;
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
    }

    // data_schema_version - computed: true, optional: true, required: false
    private _dataSchemaVersion?: string; 
    public get dataSchemaVersion() {
        return this.getStringAttribute('data_schema_version');
    }
    public set dataSchemaVersion(value: string) {
        this._dataSchemaVersion = value;
    }
    public resetDataSchemaVersion() {
        this._dataSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSchemaVersionInput() {
        return this._dataSchemaVersion;
    }

    // source - computed: true, optional: true, required: false
    private _source = new SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: SourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}
export interface DescriptorsProperty {
    /**
    * The A2A agent card descriptor, populated when the record type is AGENT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#a2_a_agent_card CcRegistryRecord#a2_a_agent_card}
    */
    readonly a2AAgentCard?: A2aAgentCardDescriptorProperty;
    /**
    * The agent skills definition descriptor, populated when the record type is SKILL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#agent_skills_definition CcRegistryRecord#agent_skills_definition}
    */
    readonly agentSkillsDefinition?: AgentSkillsDefinitionDescriptorProperty;
    /**
    * The custom descriptor, populated when the record type is CUSTOM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#custom CcRegistryRecord#custom}
    */
    readonly custom?: CustomDescriptorProperty;
    /**
    * The MCP server descriptor, populated when the record type is MCP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#mcp_server CcRegistryRecord#mcp_server}
    */
    readonly mcpServer?: McpServerDescriptorProperty;
}
export class DescriptorsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DescriptorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._a2AAgentCard?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.a2AAgentCard = this._a2AAgentCard?.internalValue;
        }
        if (this._agentSkillsDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentSkillsDefinition = this._agentSkillsDefinition?.internalValue;
        }
        if (this._custom?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.custom = this._custom?.internalValue;
        }
        if (this._mcpServer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpServer = this._mcpServer?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DescriptorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._a2AAgentCard.internalValue = undefined;
            this._agentSkillsDefinition.internalValue = undefined;
            this._custom.internalValue = undefined;
            this._mcpServer.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._a2AAgentCard.internalValue = value.a2AAgentCard;
            this._agentSkillsDefinition.internalValue = value.agentSkillsDefinition;
            this._custom.internalValue = value.custom;
            this._mcpServer.internalValue = value.mcpServer;
        }
    }

    // a2_a_agent_card - computed: true, optional: true, required: false
    private _a2AAgentCard = new A2aAgentCardDescriptorPropertyOutputReference(this, "a2_a_agent_card");
    public get a2AAgentCard() {
        return this._a2AAgentCard;
    }
    public putA2AAgentCard(value: A2aAgentCardDescriptorProperty) {
        this._a2AAgentCard.internalValue = value;
    }
    public resetA2AAgentCard() {
        this._a2AAgentCard.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get a2AAgentCardInput() {
        return this._a2AAgentCard.internalValue;
    }

    // agent_skills_definition - computed: true, optional: true, required: false
    private _agentSkillsDefinition = new AgentSkillsDefinitionDescriptorPropertyOutputReference(this, "agent_skills_definition");
    public get agentSkillsDefinition() {
        return this._agentSkillsDefinition;
    }
    public putAgentSkillsDefinition(value: AgentSkillsDefinitionDescriptorProperty) {
        this._agentSkillsDefinition.internalValue = value;
    }
    public resetAgentSkillsDefinition() {
        this._agentSkillsDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentSkillsDefinitionInput() {
        return this._agentSkillsDefinition.internalValue;
    }

    // custom - computed: true, optional: true, required: false
    private _custom = new CustomDescriptorPropertyOutputReference(this, "custom");
    public get custom() {
        return this._custom;
    }
    public putCustom(value: CustomDescriptorProperty) {
        this._custom.internalValue = value;
    }
    public resetCustom() {
        this._custom.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInput() {
        return this._custom.internalValue;
    }

    // mcp_server - computed: true, optional: true, required: false
    private _mcpServer = new McpServerDescriptorPropertyOutputReference(this, "mcp_server");
    public get mcpServer() {
        return this._mcpServer;
    }
    public putMcpServer(value: McpServerDescriptorProperty) {
        this._mcpServer.internalValue = value;
    }
    public resetMcpServer() {
        this._mcpServer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpServerInput() {
        return this._mcpServer.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#key CcRegistryRecord#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/agentregistry_registry_record#value CcRegistryRecord#value}
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
