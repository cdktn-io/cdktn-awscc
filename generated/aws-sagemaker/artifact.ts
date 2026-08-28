// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcArtifactProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the artifact. Must be unique to your account in an AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#artifact_name CcArtifact#artifact_name}
    */
    readonly artifactName?: string;
    /**
    * The artifact type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#artifact_type CcArtifact#artifact_type}
    */
    readonly artifactType: string;
    /**
    * Metadata properties of the tracking entity, trial, or trial component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#metadata_properties CcArtifact#metadata_properties}
    */
    readonly metadataProperties?: CcArtifact.MetadataPropertiesProperty;
    /**
    * A list of properties to add to the artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#properties CcArtifact#properties}
    */
    readonly properties?: { [key: string]: string };
    /**
    * The source of the artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#source CcArtifact#source}
    */
    readonly source: CcArtifact.ArtifactSourceProperty;
    /**
    * A list of tags to apply to the artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#tags CcArtifact#tags}
    */
    readonly tags?: CcArtifact.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact awscc_sagemaker_artifact}
*/
export class CcArtifact extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_artifact";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcArtifact resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcArtifact to import
    * @param importFromId The id of the existing CcArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcArtifact to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_artifact", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact awscc_sagemaker_artifact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcArtifactProps
    */
    public constructor(scope: Construct, id: string, config: CcArtifactProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_artifact',
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
        this._artifactName = config.artifactName;
        this._artifactType = config.artifactType;
        this._metadataProperties.internalValue = config.metadataProperties;
        this._properties = config.properties;
        this._source.internalValue = config.source;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // artifact_name - computed: true, optional: true, required: false
    private _artifactName?: string; 
    public get artifactName() {
        return this.getStringAttribute('artifact_name');
    }
    public set artifactName(value: string) {
        this._artifactName = value;
    }
    public resetArtifactName() {
        this._artifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactNameInput() {
        return this._artifactName;
    }

    // artifact_type - computed: false, optional: false, required: true
    private _artifactType?: string; 
    public get artifactType() {
        return this.getStringAttribute('artifact_type');
    }
    public set artifactType(value: string) {
        this._artifactType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactTypeInput() {
        return this._artifactType;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // metadata_properties - computed: true, optional: true, required: false
    private _metadataProperties = new CcArtifact.MetadataPropertiesPropertyOutputReference(this, "metadata_properties");
    public get metadataProperties() {
        return this._metadataProperties;
    }
    public putMetadataProperties(value: CcArtifact.MetadataPropertiesProperty) {
        this._metadataProperties.internalValue = value;
    }
    public resetMetadataProperties() {
        this._metadataProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataPropertiesInput() {
        return this._metadataProperties.internalValue;
    }

    // properties - computed: true, optional: true, required: false
    private _properties?: { [key: string]: string }; 
    public get properties() {
        return this.getStringMapAttribute('properties');
    }
    public set properties(value: { [key: string]: string }) {
        this._properties = value;
    }
    public resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties;
    }

    // source - computed: false, optional: false, required: true
    private _source = new CcArtifact.ArtifactSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcArtifact.ArtifactSourceProperty) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcArtifact.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcArtifact.TagProperty[] | cdktn.IResolvable) {
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
            artifact_name: cdktn.stringToTerraform(this._artifactName),
            artifact_type: cdktn.stringToTerraform(this._artifactType),
            metadata_properties: ccArtifactMetadataPropertiesPropertyToTerraform(this._metadataProperties.internalValue),
            properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._properties),
            source: ccArtifactArtifactSourcePropertyToTerraform(this._source.internalValue),
            tags: cdktn.listMapper(ccArtifactTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            artifact_name: {
                value: cdktn.stringToHclTerraform(this._artifactName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            artifact_type: {
                value: cdktn.stringToHclTerraform(this._artifactType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata_properties: {
                value: ccArtifactMetadataPropertiesPropertyToHclTerraform(this._metadataProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcArtifact.MetadataPropertiesProperty",
            },
            properties: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._properties),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            source: {
                value: ccArtifactArtifactSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcArtifact.ArtifactSourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccArtifactTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcArtifact.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccArtifactMetadataPropertiesPropertyToTerraform(struct?: CcArtifact.MetadataPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        commit_id: cdktn.stringToTerraform(struct!.commitId),
        generated_by: cdktn.stringToTerraform(struct!.generatedBy),
        project_id: cdktn.stringToTerraform(struct!.projectId),
        repository: cdktn.stringToTerraform(struct!.repository),
    }
}


export function ccArtifactMetadataPropertiesPropertyToHclTerraform(struct?: CcArtifact.MetadataPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        commit_id: {
            value: cdktn.stringToHclTerraform(struct!.commitId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        generated_by: {
            value: cdktn.stringToHclTerraform(struct!.generatedBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_id: {
            value: cdktn.stringToHclTerraform(struct!.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository: {
            value: cdktn.stringToHclTerraform(struct!.repository),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccArtifactArtifactSourceTypePropertyToTerraform(struct?: CcArtifact.ArtifactSourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_id_type: cdktn.stringToTerraform(struct!.sourceIdType),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccArtifactArtifactSourceTypePropertyToHclTerraform(struct?: CcArtifact.ArtifactSourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_id_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceIdType),
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


export function ccArtifactArtifactSourcePropertyToTerraform(struct?: CcArtifact.ArtifactSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_types: cdktn.listMapper(ccArtifactArtifactSourceTypePropertyToTerraform, false)(struct!.sourceTypes),
        source_uri: cdktn.stringToTerraform(struct!.sourceUri),
    }
}


export function ccArtifactArtifactSourcePropertyToHclTerraform(struct?: CcArtifact.ArtifactSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_types: {
            value: cdktn.listMapperHcl(ccArtifactArtifactSourceTypePropertyToHclTerraform, false)(struct!.sourceTypes),
            isBlock: true,
            type: "list",
            storageClassType: "ArtifactSourceTypePropertyList",
        },
        source_uri: {
            value: cdktn.stringToHclTerraform(struct!.sourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccArtifactTagPropertyToTerraform(struct?: CcArtifact.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccArtifactTagPropertyToHclTerraform(struct?: CcArtifact.TagProperty | cdktn.IResolvable): any {
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


export namespace CcArtifact {
export interface MetadataPropertiesProperty {
    /**
    * The commit ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#commit_id CcArtifact#commit_id}
    */
    readonly commitId?: string;
    /**
    * The entity this entity was generated by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#generated_by CcArtifact#generated_by}
    */
    readonly generatedBy?: string;
    /**
    * The project ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#project_id CcArtifact#project_id}
    */
    readonly projectId?: string;
    /**
    * The repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#repository CcArtifact#repository}
    */
    readonly repository?: string;
}
export class MetadataPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commitId !== undefined) {
            hasAnyValues = true;
            internalValueResult.commitId = this._commitId;
        }
        if (this._generatedBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.generatedBy = this._generatedBy;
        }
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        if (this._repository !== undefined) {
            hasAnyValues = true;
            internalValueResult.repository = this._repository;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commitId = undefined;
            this._generatedBy = undefined;
            this._projectId = undefined;
            this._repository = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commitId = value.commitId;
            this._generatedBy = value.generatedBy;
            this._projectId = value.projectId;
            this._repository = value.repository;
        }
    }

    // commit_id - computed: true, optional: true, required: false
    private _commitId?: string; 
    public get commitId() {
        return this.getStringAttribute('commit_id');
    }
    public set commitId(value: string) {
        this._commitId = value;
    }
    public resetCommitId() {
        this._commitId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commitIdInput() {
        return this._commitId;
    }

    // generated_by - computed: true, optional: true, required: false
    private _generatedBy?: string; 
    public get generatedBy() {
        return this.getStringAttribute('generated_by');
    }
    public set generatedBy(value: string) {
        this._generatedBy = value;
    }
    public resetGeneratedBy() {
        this._generatedBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generatedByInput() {
        return this._generatedBy;
    }

    // project_id - computed: true, optional: true, required: false
    private _projectId?: string; 
    public get projectId() {
        return this.getStringAttribute('project_id');
    }
    public set projectId(value: string) {
        this._projectId = value;
    }
    public resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdInput() {
        return this._projectId;
    }

    // repository - computed: true, optional: true, required: false
    private _repository?: string; 
    public get repository() {
        return this.getStringAttribute('repository');
    }
    public set repository(value: string) {
        this._repository = value;
    }
    public resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
        return this._repository;
    }
}
export interface ArtifactSourceTypeProperty {
    /**
    * The type of ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#source_id_type CcArtifact#source_id_type}
    */
    readonly sourceIdType?: string;
    /**
    * The ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#value CcArtifact#value}
    */
    readonly value?: string;
}
export class ArtifactSourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ArtifactSourceTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceIdType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceIdType = this._sourceIdType;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArtifactSourceTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceIdType = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceIdType = value.sourceIdType;
            this._value = value.value;
        }
    }

    // source_id_type - computed: true, optional: true, required: false
    private _sourceIdType?: string; 
    public get sourceIdType() {
        return this.getStringAttribute('source_id_type');
    }
    public set sourceIdType(value: string) {
        this._sourceIdType = value;
    }
    public resetSourceIdType() {
        this._sourceIdType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdTypeInput() {
        return this._sourceIdType;
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

export class ArtifactSourceTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ArtifactSourceTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ArtifactSourceTypePropertyOutputReference {
        return new ArtifactSourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ArtifactSourceProperty {
    /**
    * A list of source types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#source_types CcArtifact#source_types}
    */
    readonly sourceTypes?: ArtifactSourceTypeProperty[] | cdktn.IResolvable;
    /**
    * The URI of the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#source_uri CcArtifact#source_uri}
    */
    readonly sourceUri: string;
}
export class ArtifactSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArtifactSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceTypes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceTypes = this._sourceTypes?.internalValue;
        }
        if (this._sourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceUri = this._sourceUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArtifactSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceTypes.internalValue = undefined;
            this._sourceUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceTypes.internalValue = value.sourceTypes;
            this._sourceUri = value.sourceUri;
        }
    }

    // source_types - computed: true, optional: true, required: false
    private _sourceTypes = new ArtifactSourceTypePropertyList(this, "source_types", false);
    public get sourceTypes() {
        return this._sourceTypes;
    }
    public putSourceTypes(value: ArtifactSourceTypeProperty[] | cdktn.IResolvable) {
        this._sourceTypes.internalValue = value;
    }
    public resetSourceTypes() {
        this._sourceTypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypesInput() {
        return this._sourceTypes.internalValue;
    }

    // source_uri - computed: false, optional: false, required: true
    private _sourceUri?: string; 
    public get sourceUri() {
        return this.getStringAttribute('source_uri');
    }
    public set sourceUri(value: string) {
        this._sourceUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceUriInput() {
        return this._sourceUri;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#key CcArtifact#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_artifact#value CcArtifact#value}
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
