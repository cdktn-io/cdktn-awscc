// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIndexProps extends cdktn.TerraformMetaArguments {
    /**
    * Capacity units
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#capacity_units CcIndex#capacity_units}
    */
    readonly capacityUnits?: CcIndex.CapacityUnitsConfigurationProperty;
    /**
    * A description for the index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#description CcIndex#description}
    */
    readonly description?: string;
    /**
    * Document metadata configurations
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#document_metadata_configurations CcIndex#document_metadata_configurations}
    */
    readonly documentMetadataConfigurations?: CcIndex.DocumentMetadataConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Edition of index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#edition CcIndex#edition}
    */
    readonly edition: string;
    /**
    * Name of index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#name CcIndex#name}
    */
    readonly name: string;
    /**
    * Role Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#role_arn CcIndex#role_arn}
    */
    readonly roleArn: string;
    /**
    * Server side encryption configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#server_side_encryption_configuration CcIndex#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: CcIndex.ServerSideEncryptionConfigurationProperty;
    /**
    * Tags for labeling the index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#tags CcIndex#tags}
    */
    readonly tags?: CcIndex.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#user_context_policy CcIndex#user_context_policy}
    */
    readonly userContextPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#user_token_configurations CcIndex#user_token_configurations}
    */
    readonly userTokenConfigurations?: CcIndex.UserTokenConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index awscc_kendra_index}
*/
export class CcIndex extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_kendra_index";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIndex resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIndex to import
    * @param importFromId The id of the existing CcIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIndex to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kendra_index", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index awscc_kendra_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIndexProps
    */
    public constructor(scope: Construct, id: string, config: CcIndexProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_kendra_index',
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
        this._capacityUnits.internalValue = config.capacityUnits;
        this._description = config.description;
        this._documentMetadataConfigurations.internalValue = config.documentMetadataConfigurations;
        this._edition = config.edition;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
        this._tags.internalValue = config.tags;
        this._userContextPolicy = config.userContextPolicy;
        this._userTokenConfigurations.internalValue = config.userTokenConfigurations;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_units - computed: true, optional: true, required: false
    private _capacityUnits = new CcIndex.CapacityUnitsConfigurationPropertyOutputReference(this, "capacity_units");
    public get capacityUnits() {
        return this._capacityUnits;
    }
    public putCapacityUnits(value: CcIndex.CapacityUnitsConfigurationProperty) {
        this._capacityUnits.internalValue = value;
    }
    public resetCapacityUnits() {
        this._capacityUnits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityUnitsInput() {
        return this._capacityUnits.internalValue;
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

    // document_metadata_configurations - computed: true, optional: true, required: false
    private _documentMetadataConfigurations = new CcIndex.DocumentMetadataConfigurationPropertyList(this, "document_metadata_configurations", false);
    public get documentMetadataConfigurations() {
        return this._documentMetadataConfigurations;
    }
    public putDocumentMetadataConfigurations(value: CcIndex.DocumentMetadataConfigurationProperty[] | cdktn.IResolvable) {
        this._documentMetadataConfigurations.internalValue = value;
    }
    public resetDocumentMetadataConfigurations() {
        this._documentMetadataConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentMetadataConfigurationsInput() {
        return this._documentMetadataConfigurations.internalValue;
    }

    // edition - computed: false, optional: false, required: true
    private _edition?: string; 
    public get edition() {
        return this.getStringAttribute('edition');
    }
    public set edition(value: string) {
        this._edition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get editionInput() {
        return this._edition;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // index_id - computed: true, optional: false, required: false
    public get indexId() {
        return this.getStringAttribute('index_id');
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

    // server_side_encryption_configuration - computed: true, optional: true, required: false
    private _serverSideEncryptionConfiguration = new CcIndex.ServerSideEncryptionConfigurationPropertyOutputReference(this, "server_side_encryption_configuration");
    public get serverSideEncryptionConfiguration() {
        return this._serverSideEncryptionConfiguration;
    }
    public putServerSideEncryptionConfiguration(value: CcIndex.ServerSideEncryptionConfigurationProperty) {
        this._serverSideEncryptionConfiguration.internalValue = value;
    }
    public resetServerSideEncryptionConfiguration() {
        this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionConfigurationInput() {
        return this._serverSideEncryptionConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIndex.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIndex.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_context_policy - computed: true, optional: true, required: false
    private _userContextPolicy?: string; 
    public get userContextPolicy() {
        return this.getStringAttribute('user_context_policy');
    }
    public set userContextPolicy(value: string) {
        this._userContextPolicy = value;
    }
    public resetUserContextPolicy() {
        this._userContextPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userContextPolicyInput() {
        return this._userContextPolicy;
    }

    // user_token_configurations - computed: true, optional: true, required: false
    private _userTokenConfigurations = new CcIndex.UserTokenConfigurationPropertyList(this, "user_token_configurations", false);
    public get userTokenConfigurations() {
        return this._userTokenConfigurations;
    }
    public putUserTokenConfigurations(value: CcIndex.UserTokenConfigurationProperty[] | cdktn.IResolvable) {
        this._userTokenConfigurations.internalValue = value;
    }
    public resetUserTokenConfigurations() {
        this._userTokenConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userTokenConfigurationsInput() {
        return this._userTokenConfigurations.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_units: ccIndexCapacityUnitsConfigurationPropertyToTerraform(this._capacityUnits.internalValue),
            description: cdktn.stringToTerraform(this._description),
            document_metadata_configurations: cdktn.listMapper(ccIndexDocumentMetadataConfigurationPropertyToTerraform, false)(this._documentMetadataConfigurations.internalValue),
            edition: cdktn.stringToTerraform(this._edition),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            server_side_encryption_configuration: ccIndexServerSideEncryptionConfigurationPropertyToTerraform(this._serverSideEncryptionConfiguration.internalValue),
            tags: cdktn.listMapper(ccIndexTagPropertyToTerraform, false)(this._tags.internalValue),
            user_context_policy: cdktn.stringToTerraform(this._userContextPolicy),
            user_token_configurations: cdktn.listMapper(ccIndexUserTokenConfigurationPropertyToTerraform, false)(this._userTokenConfigurations.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_units: {
                value: ccIndexCapacityUnitsConfigurationPropertyToHclTerraform(this._capacityUnits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIndex.CapacityUnitsConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            document_metadata_configurations: {
                value: cdktn.listMapperHcl(ccIndexDocumentMetadataConfigurationPropertyToHclTerraform, false)(this._documentMetadataConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIndex.DocumentMetadataConfigurationPropertyList",
            },
            edition: {
                value: cdktn.stringToHclTerraform(this._edition),
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
            server_side_encryption_configuration: {
                value: ccIndexServerSideEncryptionConfigurationPropertyToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIndex.ServerSideEncryptionConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIndexTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIndex.TagPropertyList",
            },
            user_context_policy: {
                value: cdktn.stringToHclTerraform(this._userContextPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_token_configurations: {
                value: cdktn.listMapperHcl(ccIndexUserTokenConfigurationPropertyToHclTerraform, false)(this._userTokenConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIndex.UserTokenConfigurationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIndexCapacityUnitsConfigurationPropertyToTerraform(struct?: CcIndex.CapacityUnitsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_capacity_units: cdktn.numberToTerraform(struct!.queryCapacityUnits),
        storage_capacity_units: cdktn.numberToTerraform(struct!.storageCapacityUnits),
    }
}


export function ccIndexCapacityUnitsConfigurationPropertyToHclTerraform(struct?: CcIndex.CapacityUnitsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.queryCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.storageCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexValueImportanceItemPropertyToTerraform(struct?: CcIndex.ValueImportanceItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccIndexValueImportanceItemPropertyToHclTerraform(struct?: CcIndex.ValueImportanceItemProperty | cdktn.IResolvable): any {
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
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexRelevancePropertyToTerraform(struct?: CcIndex.RelevanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration: cdktn.stringToTerraform(struct!.duration),
        freshness: cdktn.booleanToTerraform(struct!.freshness),
        importance: cdktn.numberToTerraform(struct!.importance),
        rank_order: cdktn.stringToTerraform(struct!.rankOrder),
        value_importance_items: cdktn.listMapper(ccIndexValueImportanceItemPropertyToTerraform, false)(struct!.valueImportanceItems),
    }
}


export function ccIndexRelevancePropertyToHclTerraform(struct?: CcIndex.RelevanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration: {
            value: cdktn.stringToHclTerraform(struct!.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        freshness: {
            value: cdktn.booleanToHclTerraform(struct!.freshness),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        importance: {
            value: cdktn.numberToHclTerraform(struct!.importance),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rank_order: {
            value: cdktn.stringToHclTerraform(struct!.rankOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_importance_items: {
            value: cdktn.listMapperHcl(ccIndexValueImportanceItemPropertyToHclTerraform, false)(struct!.valueImportanceItems),
            isBlock: true,
            type: "list",
            storageClassType: "ValueImportanceItemPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexSearchPropertyToTerraform(struct?: CcIndex.SearchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        displayable: cdktn.booleanToTerraform(struct!.displayable),
        facetable: cdktn.booleanToTerraform(struct!.facetable),
        searchable: cdktn.booleanToTerraform(struct!.searchable),
        sortable: cdktn.booleanToTerraform(struct!.sortable),
    }
}


export function ccIndexSearchPropertyToHclTerraform(struct?: CcIndex.SearchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        displayable: {
            value: cdktn.booleanToHclTerraform(struct!.displayable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        facetable: {
            value: cdktn.booleanToHclTerraform(struct!.facetable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        searchable: {
            value: cdktn.booleanToHclTerraform(struct!.searchable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sortable: {
            value: cdktn.booleanToHclTerraform(struct!.sortable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexDocumentMetadataConfigurationPropertyToTerraform(struct?: CcIndex.DocumentMetadataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        relevance: ccIndexRelevancePropertyToTerraform(struct!.relevance),
        search: ccIndexSearchPropertyToTerraform(struct!.search),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccIndexDocumentMetadataConfigurationPropertyToHclTerraform(struct?: CcIndex.DocumentMetadataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relevance: {
            value: ccIndexRelevancePropertyToHclTerraform(struct!.relevance),
            isBlock: true,
            type: "struct",
            storageClassType: "RelevanceProperty",
        },
        search: {
            value: ccIndexSearchPropertyToHclTerraform(struct!.search),
            isBlock: true,
            type: "struct",
            storageClassType: "SearchProperty",
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


export function ccIndexServerSideEncryptionConfigurationPropertyToTerraform(struct?: CcIndex.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccIndexServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: CcIndex.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexTagPropertyToTerraform(struct?: CcIndex.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIndexTagPropertyToHclTerraform(struct?: CcIndex.TagProperty | cdktn.IResolvable): any {
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


export function ccIndexJsonTokenTypeConfigurationPropertyToTerraform(struct?: CcIndex.JsonTokenTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_attribute_field: cdktn.stringToTerraform(struct!.groupAttributeField),
        user_name_attribute_field: cdktn.stringToTerraform(struct!.userNameAttributeField),
    }
}


export function ccIndexJsonTokenTypeConfigurationPropertyToHclTerraform(struct?: CcIndex.JsonTokenTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_attribute_field: {
            value: cdktn.stringToHclTerraform(struct!.groupAttributeField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name_attribute_field: {
            value: cdktn.stringToHclTerraform(struct!.userNameAttributeField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexJwtTokenTypeConfigurationPropertyToTerraform(struct?: CcIndex.JwtTokenTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim_regex: cdktn.stringToTerraform(struct!.claimRegex),
        group_attribute_field: cdktn.stringToTerraform(struct!.groupAttributeField),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        key_location: cdktn.stringToTerraform(struct!.keyLocation),
        secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
        url: cdktn.stringToTerraform(struct!.url),
        user_name_attribute_field: cdktn.stringToTerraform(struct!.userNameAttributeField),
    }
}


export function ccIndexJwtTokenTypeConfigurationPropertyToHclTerraform(struct?: CcIndex.JwtTokenTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        claim_regex: {
            value: cdktn.stringToHclTerraform(struct!.claimRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_attribute_field: {
            value: cdktn.stringToHclTerraform(struct!.groupAttributeField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_location: {
            value: cdktn.stringToHclTerraform(struct!.keyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_manager_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name_attribute_field: {
            value: cdktn.stringToHclTerraform(struct!.userNameAttributeField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexUserTokenConfigurationPropertyToTerraform(struct?: CcIndex.UserTokenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_token_type_configuration: ccIndexJsonTokenTypeConfigurationPropertyToTerraform(struct!.jsonTokenTypeConfiguration),
        jwt_token_type_configuration: ccIndexJwtTokenTypeConfigurationPropertyToTerraform(struct!.jwtTokenTypeConfiguration),
    }
}


export function ccIndexUserTokenConfigurationPropertyToHclTerraform(struct?: CcIndex.UserTokenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_token_type_configuration: {
            value: ccIndexJsonTokenTypeConfigurationPropertyToHclTerraform(struct!.jsonTokenTypeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "JsonTokenTypeConfigurationProperty",
        },
        jwt_token_type_configuration: {
            value: ccIndexJwtTokenTypeConfigurationPropertyToHclTerraform(struct!.jwtTokenTypeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtTokenTypeConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcIndex {
export interface CapacityUnitsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#query_capacity_units CcIndex#query_capacity_units}
    */
    readonly queryCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#storage_capacity_units CcIndex#storage_capacity_units}
    */
    readonly storageCapacityUnits?: number;
}
export class CapacityUnitsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityUnitsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryCapacityUnits = this._queryCapacityUnits;
        }
        if (this._storageCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageCapacityUnits = this._storageCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityUnitsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryCapacityUnits = undefined;
            this._storageCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryCapacityUnits = value.queryCapacityUnits;
            this._storageCapacityUnits = value.storageCapacityUnits;
        }
    }

    // query_capacity_units - computed: true, optional: true, required: false
    private _queryCapacityUnits?: number; 
    public get queryCapacityUnits() {
        return this.getNumberAttribute('query_capacity_units');
    }
    public set queryCapacityUnits(value: number) {
        this._queryCapacityUnits = value;
    }
    public resetQueryCapacityUnits() {
        this._queryCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryCapacityUnitsInput() {
        return this._queryCapacityUnits;
    }

    // storage_capacity_units - computed: true, optional: true, required: false
    private _storageCapacityUnits?: number; 
    public get storageCapacityUnits() {
        return this.getNumberAttribute('storage_capacity_units');
    }
    public set storageCapacityUnits(value: number) {
        this._storageCapacityUnits = value;
    }
    public resetStorageCapacityUnits() {
        this._storageCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityUnitsInput() {
        return this._storageCapacityUnits;
    }
}
export interface ValueImportanceItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#key CcIndex#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#value CcIndex#value}
    */
    readonly value?: number;
}
export class ValueImportanceItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ValueImportanceItemProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ValueImportanceItemProperty | cdktn.IResolvable | undefined) {
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
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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

export class ValueImportanceItemPropertyList extends cdktn.ComplexList {
    public internalValue? : ValueImportanceItemProperty[] | cdktn.IResolvable

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
    public get(index: number): ValueImportanceItemPropertyOutputReference {
        return new ValueImportanceItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelevanceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#duration CcIndex#duration}
    */
    readonly duration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#freshness CcIndex#freshness}
    */
    readonly freshness?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#importance CcIndex#importance}
    */
    readonly importance?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#rank_order CcIndex#rank_order}
    */
    readonly rankOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#value_importance_items CcIndex#value_importance_items}
    */
    readonly valueImportanceItems?: ValueImportanceItemProperty[] | cdktn.IResolvable;
}
export class RelevancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RelevanceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._freshness !== undefined) {
            hasAnyValues = true;
            internalValueResult.freshness = this._freshness;
        }
        if (this._importance !== undefined) {
            hasAnyValues = true;
            internalValueResult.importance = this._importance;
        }
        if (this._rankOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.rankOrder = this._rankOrder;
        }
        if (this._valueImportanceItems?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueImportanceItems = this._valueImportanceItems?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelevanceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._freshness = undefined;
            this._importance = undefined;
            this._rankOrder = undefined;
            this._valueImportanceItems.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._freshness = value.freshness;
            this._importance = value.importance;
            this._rankOrder = value.rankOrder;
            this._valueImportanceItems.internalValue = value.valueImportanceItems;
        }
    }

    // duration - computed: true, optional: true, required: false
    private _duration?: string; 
    public get duration() {
        return this.getStringAttribute('duration');
    }
    public set duration(value: string) {
        this._duration = value;
    }
    public resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // freshness - computed: true, optional: true, required: false
    private _freshness?: boolean | cdktn.IResolvable; 
    public get freshness() {
        return this.getBooleanAttribute('freshness');
    }
    public set freshness(value: boolean | cdktn.IResolvable) {
        this._freshness = value;
    }
    public resetFreshness() {
        this._freshness = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get freshnessInput() {
        return this._freshness;
    }

    // importance - computed: true, optional: true, required: false
    private _importance?: number; 
    public get importance() {
        return this.getNumberAttribute('importance');
    }
    public set importance(value: number) {
        this._importance = value;
    }
    public resetImportance() {
        this._importance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importanceInput() {
        return this._importance;
    }

    // rank_order - computed: true, optional: true, required: false
    private _rankOrder?: string; 
    public get rankOrder() {
        return this.getStringAttribute('rank_order');
    }
    public set rankOrder(value: string) {
        this._rankOrder = value;
    }
    public resetRankOrder() {
        this._rankOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rankOrderInput() {
        return this._rankOrder;
    }

    // value_importance_items - computed: true, optional: true, required: false
    private _valueImportanceItems = new ValueImportanceItemPropertyList(this, "value_importance_items", false);
    public get valueImportanceItems() {
        return this._valueImportanceItems;
    }
    public putValueImportanceItems(value: ValueImportanceItemProperty[] | cdktn.IResolvable) {
        this._valueImportanceItems.internalValue = value;
    }
    public resetValueImportanceItems() {
        this._valueImportanceItems.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueImportanceItemsInput() {
        return this._valueImportanceItems.internalValue;
    }
}
export interface SearchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#displayable CcIndex#displayable}
    */
    readonly displayable?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#facetable CcIndex#facetable}
    */
    readonly facetable?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#searchable CcIndex#searchable}
    */
    readonly searchable?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#sortable CcIndex#sortable}
    */
    readonly sortable?: boolean | cdktn.IResolvable;
}
export class SearchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SearchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._displayable !== undefined) {
            hasAnyValues = true;
            internalValueResult.displayable = this._displayable;
        }
        if (this._facetable !== undefined) {
            hasAnyValues = true;
            internalValueResult.facetable = this._facetable;
        }
        if (this._searchable !== undefined) {
            hasAnyValues = true;
            internalValueResult.searchable = this._searchable;
        }
        if (this._sortable !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortable = this._sortable;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SearchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._displayable = undefined;
            this._facetable = undefined;
            this._searchable = undefined;
            this._sortable = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._displayable = value.displayable;
            this._facetable = value.facetable;
            this._searchable = value.searchable;
            this._sortable = value.sortable;
        }
    }

    // displayable - computed: true, optional: true, required: false
    private _displayable?: boolean | cdktn.IResolvable; 
    public get displayable() {
        return this.getBooleanAttribute('displayable');
    }
    public set displayable(value: boolean | cdktn.IResolvable) {
        this._displayable = value;
    }
    public resetDisplayable() {
        this._displayable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayableInput() {
        return this._displayable;
    }

    // facetable - computed: true, optional: true, required: false
    private _facetable?: boolean | cdktn.IResolvable; 
    public get facetable() {
        return this.getBooleanAttribute('facetable');
    }
    public set facetable(value: boolean | cdktn.IResolvable) {
        this._facetable = value;
    }
    public resetFacetable() {
        this._facetable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get facetableInput() {
        return this._facetable;
    }

    // searchable - computed: true, optional: true, required: false
    private _searchable?: boolean | cdktn.IResolvable; 
    public get searchable() {
        return this.getBooleanAttribute('searchable');
    }
    public set searchable(value: boolean | cdktn.IResolvable) {
        this._searchable = value;
    }
    public resetSearchable() {
        this._searchable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get searchableInput() {
        return this._searchable;
    }

    // sortable - computed: true, optional: true, required: false
    private _sortable?: boolean | cdktn.IResolvable; 
    public get sortable() {
        return this.getBooleanAttribute('sortable');
    }
    public set sortable(value: boolean | cdktn.IResolvable) {
        this._sortable = value;
    }
    public resetSortable() {
        this._sortable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortableInput() {
        return this._sortable;
    }
}
export interface DocumentMetadataConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#name CcIndex#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#relevance CcIndex#relevance}
    */
    readonly relevance?: RelevanceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#search CcIndex#search}
    */
    readonly search?: SearchProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#type CcIndex#type}
    */
    readonly type?: string;
}
export class DocumentMetadataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DocumentMetadataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._relevance?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relevance = this._relevance?.internalValue;
        }
        if (this._search?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.search = this._search?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentMetadataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._relevance.internalValue = undefined;
            this._search.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._relevance.internalValue = value.relevance;
            this._search.internalValue = value.search;
            this._type = value.type;
        }
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

    // relevance - computed: true, optional: true, required: false
    private _relevance = new RelevancePropertyOutputReference(this, "relevance");
    public get relevance() {
        return this._relevance;
    }
    public putRelevance(value: RelevanceProperty) {
        this._relevance.internalValue = value;
    }
    public resetRelevance() {
        this._relevance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relevanceInput() {
        return this._relevance.internalValue;
    }

    // search - computed: true, optional: true, required: false
    private _search = new SearchPropertyOutputReference(this, "search");
    public get search() {
        return this._search;
    }
    public putSearch(value: SearchProperty) {
        this._search.internalValue = value;
    }
    public resetSearch() {
        this._search.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get searchInput() {
        return this._search.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class DocumentMetadataConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : DocumentMetadataConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): DocumentMetadataConfigurationPropertyOutputReference {
        return new DocumentMetadataConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerSideEncryptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#kms_key_id CcIndex#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class ServerSideEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
        }
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
}
export interface TagProperty {
    /**
    * A string used to identify this tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#key CcIndex#key}
    */
    readonly key?: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#value CcIndex#value}
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
export interface JsonTokenTypeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#group_attribute_field CcIndex#group_attribute_field}
    */
    readonly groupAttributeField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#user_name_attribute_field CcIndex#user_name_attribute_field}
    */
    readonly userNameAttributeField?: string;
}
export class JsonTokenTypeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonTokenTypeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupAttributeField !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupAttributeField = this._groupAttributeField;
        }
        if (this._userNameAttributeField !== undefined) {
            hasAnyValues = true;
            internalValueResult.userNameAttributeField = this._userNameAttributeField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonTokenTypeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupAttributeField = undefined;
            this._userNameAttributeField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupAttributeField = value.groupAttributeField;
            this._userNameAttributeField = value.userNameAttributeField;
        }
    }

    // group_attribute_field - computed: true, optional: true, required: false
    private _groupAttributeField?: string; 
    public get groupAttributeField() {
        return this.getStringAttribute('group_attribute_field');
    }
    public set groupAttributeField(value: string) {
        this._groupAttributeField = value;
    }
    public resetGroupAttributeField() {
        this._groupAttributeField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupAttributeFieldInput() {
        return this._groupAttributeField;
    }

    // user_name_attribute_field - computed: true, optional: true, required: false
    private _userNameAttributeField?: string; 
    public get userNameAttributeField() {
        return this.getStringAttribute('user_name_attribute_field');
    }
    public set userNameAttributeField(value: string) {
        this._userNameAttributeField = value;
    }
    public resetUserNameAttributeField() {
        this._userNameAttributeField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameAttributeFieldInput() {
        return this._userNameAttributeField;
    }
}
export interface JwtTokenTypeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#claim_regex CcIndex#claim_regex}
    */
    readonly claimRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#group_attribute_field CcIndex#group_attribute_field}
    */
    readonly groupAttributeField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#issuer CcIndex#issuer}
    */
    readonly issuer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#key_location CcIndex#key_location}
    */
    readonly keyLocation?: string;
    /**
    * Role Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#secret_manager_arn CcIndex#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#url CcIndex#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#user_name_attribute_field CcIndex#user_name_attribute_field}
    */
    readonly userNameAttributeField?: string;
}
export class JwtTokenTypeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtTokenTypeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._claimRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.claimRegex = this._claimRegex;
        }
        if (this._groupAttributeField !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupAttributeField = this._groupAttributeField;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._keyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyLocation = this._keyLocation;
        }
        if (this._secretManagerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretManagerArn = this._secretManagerArn;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if (this._userNameAttributeField !== undefined) {
            hasAnyValues = true;
            internalValueResult.userNameAttributeField = this._userNameAttributeField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtTokenTypeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claimRegex = undefined;
            this._groupAttributeField = undefined;
            this._issuer = undefined;
            this._keyLocation = undefined;
            this._secretManagerArn = undefined;
            this._url = undefined;
            this._userNameAttributeField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claimRegex = value.claimRegex;
            this._groupAttributeField = value.groupAttributeField;
            this._issuer = value.issuer;
            this._keyLocation = value.keyLocation;
            this._secretManagerArn = value.secretManagerArn;
            this._url = value.url;
            this._userNameAttributeField = value.userNameAttributeField;
        }
    }

    // claim_regex - computed: true, optional: true, required: false
    private _claimRegex?: string; 
    public get claimRegex() {
        return this.getStringAttribute('claim_regex');
    }
    public set claimRegex(value: string) {
        this._claimRegex = value;
    }
    public resetClaimRegex() {
        this._claimRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get claimRegexInput() {
        return this._claimRegex;
    }

    // group_attribute_field - computed: true, optional: true, required: false
    private _groupAttributeField?: string; 
    public get groupAttributeField() {
        return this.getStringAttribute('group_attribute_field');
    }
    public set groupAttributeField(value: string) {
        this._groupAttributeField = value;
    }
    public resetGroupAttributeField() {
        this._groupAttributeField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupAttributeFieldInput() {
        return this._groupAttributeField;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // key_location - computed: true, optional: true, required: false
    private _keyLocation?: string; 
    public get keyLocation() {
        return this.getStringAttribute('key_location');
    }
    public set keyLocation(value: string) {
        this._keyLocation = value;
    }
    public resetKeyLocation() {
        this._keyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyLocationInput() {
        return this._keyLocation;
    }

    // secret_manager_arn - computed: true, optional: true, required: false
    private _secretManagerArn?: string; 
    public get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    public set secretManagerArn(value: string) {
        this._secretManagerArn = value;
    }
    public resetSecretManagerArn() {
        this._secretManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretManagerArnInput() {
        return this._secretManagerArn;
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

    // user_name_attribute_field - computed: true, optional: true, required: false
    private _userNameAttributeField?: string; 
    public get userNameAttributeField() {
        return this.getStringAttribute('user_name_attribute_field');
    }
    public set userNameAttributeField(value: string) {
        this._userNameAttributeField = value;
    }
    public resetUserNameAttributeField() {
        this._userNameAttributeField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameAttributeFieldInput() {
        return this._userNameAttributeField;
    }
}
export interface UserTokenConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#json_token_type_configuration CcIndex#json_token_type_configuration}
    */
    readonly jsonTokenTypeConfiguration?: JsonTokenTypeConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kendra_index#jwt_token_type_configuration CcIndex#jwt_token_type_configuration}
    */
    readonly jwtTokenTypeConfiguration?: JwtTokenTypeConfigurationProperty;
}
export class UserTokenConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserTokenConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonTokenTypeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonTokenTypeConfiguration = this._jsonTokenTypeConfiguration?.internalValue;
        }
        if (this._jwtTokenTypeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtTokenTypeConfiguration = this._jwtTokenTypeConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserTokenConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonTokenTypeConfiguration.internalValue = undefined;
            this._jwtTokenTypeConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonTokenTypeConfiguration.internalValue = value.jsonTokenTypeConfiguration;
            this._jwtTokenTypeConfiguration.internalValue = value.jwtTokenTypeConfiguration;
        }
    }

    // json_token_type_configuration - computed: true, optional: true, required: false
    private _jsonTokenTypeConfiguration = new JsonTokenTypeConfigurationPropertyOutputReference(this, "json_token_type_configuration");
    public get jsonTokenTypeConfiguration() {
        return this._jsonTokenTypeConfiguration;
    }
    public putJsonTokenTypeConfiguration(value: JsonTokenTypeConfigurationProperty) {
        this._jsonTokenTypeConfiguration.internalValue = value;
    }
    public resetJsonTokenTypeConfiguration() {
        this._jsonTokenTypeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonTokenTypeConfigurationInput() {
        return this._jsonTokenTypeConfiguration.internalValue;
    }

    // jwt_token_type_configuration - computed: true, optional: true, required: false
    private _jwtTokenTypeConfiguration = new JwtTokenTypeConfigurationPropertyOutputReference(this, "jwt_token_type_configuration");
    public get jwtTokenTypeConfiguration() {
        return this._jwtTokenTypeConfiguration;
    }
    public putJwtTokenTypeConfiguration(value: JwtTokenTypeConfigurationProperty) {
        this._jwtTokenTypeConfiguration.internalValue = value;
    }
    public resetJwtTokenTypeConfiguration() {
        this._jwtTokenTypeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtTokenTypeConfigurationInput() {
        return this._jwtTokenTypeConfiguration.internalValue;
    }
}

export class UserTokenConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : UserTokenConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): UserTokenConfigurationPropertyOutputReference {
        return new UserTokenConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
