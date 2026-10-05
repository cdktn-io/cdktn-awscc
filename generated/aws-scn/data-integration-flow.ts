// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataIntegrationFlowProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Web Services Supply Chain instance identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#instance_id CcDataIntegrationFlow#instance_id}
    */
    readonly instanceId: string;
    /**
    * The name of the DataIntegrationFlow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#name CcDataIntegrationFlow#name}
    */
    readonly name: string;
    /**
    * The source configurations for the DataIntegrationFlow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sources CcDataIntegrationFlow#sources}
    */
    readonly sources: CcDataIntegrationFlow.SourcesProperty[] | cdktn.IResolvable;
    /**
    * The tags for the DataIntegrationFlow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#tags CcDataIntegrationFlow#tags}
    */
    readonly tags?: CcDataIntegrationFlow.TagsProperty[] | cdktn.IResolvable;
    /**
    * The DataIntegrationFlow target parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#target CcDataIntegrationFlow#target}
    */
    readonly target: CcDataIntegrationFlow.TargetProperty;
    /**
    * The DataIntegrationFlow transformation parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#transformation CcDataIntegrationFlow#transformation}
    */
    readonly transformation: CcDataIntegrationFlow.TransformationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow awscc_scn_data_integration_flow}
*/
export class CcDataIntegrationFlow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_scn_data_integration_flow";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataIntegrationFlow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataIntegrationFlow to import
    * @param importFromId The id of the existing CcDataIntegrationFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataIntegrationFlow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_scn_data_integration_flow", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow awscc_scn_data_integration_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataIntegrationFlowProps
    */
    public constructor(scope: Construct, id: string, config: CcDataIntegrationFlowProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_scn_data_integration_flow',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._instanceId = config.instanceId;
        this._name = config.name;
        this._sources.internalValue = config.sources;
        this._tags.internalValue = config.tags;
        this._target.internalValue = config.target;
        this._transformation.internalValue = config.transformation;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
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

    // sources - computed: false, optional: false, required: true
    private _sources = new CcDataIntegrationFlow.SourcesPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: CcDataIntegrationFlow.SourcesProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataIntegrationFlow.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataIntegrationFlow.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target - computed: false, optional: false, required: true
    private _target = new CcDataIntegrationFlow.TargetPropertyOutputReference(this, "target");
    public get target() {
        return this._target;
    }
    public putTarget(value: CcDataIntegrationFlow.TargetProperty) {
        this._target.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target.internalValue;
    }

    // transformation - computed: false, optional: false, required: true
    private _transformation = new CcDataIntegrationFlow.TransformationPropertyOutputReference(this, "transformation");
    public get transformation() {
        return this._transformation;
    }
    public putTransformation(value: CcDataIntegrationFlow.TransformationProperty) {
        this._transformation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transformationInput() {
        return this._transformation.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_id: cdktn.stringToTerraform(this._instanceId),
            name: cdktn.stringToTerraform(this._name),
            sources: cdktn.listMapper(ccDataIntegrationFlowSourcesPropertyToTerraform, false)(this._sources.internalValue),
            tags: cdktn.listMapper(ccDataIntegrationFlowTagsPropertyToTerraform, false)(this._tags.internalValue),
            target: ccDataIntegrationFlowTargetPropertyToTerraform(this._target.internalValue),
            transformation: ccDataIntegrationFlowTransformationPropertyToTerraform(this._transformation.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
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
            sources: {
                value: cdktn.listMapperHcl(ccDataIntegrationFlowSourcesPropertyToHclTerraform, false)(this._sources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataIntegrationFlow.SourcesPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataIntegrationFlowTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDataIntegrationFlow.TagsPropertyList",
            },
            target: {
                value: ccDataIntegrationFlowTargetPropertyToHclTerraform(this._target.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataIntegrationFlow.TargetProperty",
            },
            transformation: {
                value: ccDataIntegrationFlowTransformationPropertyToHclTerraform(this._transformation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataIntegrationFlow.TransformationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyToTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        sort_order: cdktn.stringToTerraform(struct!.sortOrder),
    }
}


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable): any {
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
        sort_order: {
            value: cdktn.stringToHclTerraform(struct!.sortOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityPropertyToTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fields: cdktn.listMapper(ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyToTerraform, false)(struct!.fields),
    }
}


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fields: {
            value: cdktn.listMapperHcl(ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyToHclTerraform, false)(struct!.fields),
            isBlock: true,
            type: "list",
            storageClassType: "SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyPropertyToTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsDedupeStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_priority: ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityPropertyToTerraform(struct!.fieldPriority),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsDedupeStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_priority: {
            value: ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityPropertyToHclTerraform(struct!.fieldPriority),
            isBlock: true,
            type: "struct",
            storageClassType: "SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty",
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


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsPropertyToTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dedupe_records: cdktn.booleanToTerraform(struct!.dedupeRecords),
        dedupe_strategy: ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyPropertyToTerraform(struct!.dedupeStrategy),
        load_type: cdktn.stringToTerraform(struct!.loadType),
    }
}


export function ccDataIntegrationFlowSourcesDatasetSourceOptionsPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SourcesDatasetSourceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dedupe_records: {
            value: cdktn.booleanToHclTerraform(struct!.dedupeRecords),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dedupe_strategy: {
            value: ccDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyPropertyToHclTerraform(struct!.dedupeStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "SourcesDatasetSourceOptionsDedupeStrategyProperty",
        },
        load_type: {
            value: cdktn.stringToHclTerraform(struct!.loadType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowDatasetSourcePropertyToTerraform(struct?: CcDataIntegrationFlow.DatasetSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataset_identifier: cdktn.stringToTerraform(struct!.datasetIdentifier),
        options: ccDataIntegrationFlowSourcesDatasetSourceOptionsPropertyToTerraform(struct!.options),
    }
}


export function ccDataIntegrationFlowDatasetSourcePropertyToHclTerraform(struct?: CcDataIntegrationFlow.DatasetSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataset_identifier: {
            value: cdktn.stringToHclTerraform(struct!.datasetIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: ccDataIntegrationFlowSourcesDatasetSourceOptionsPropertyToHclTerraform(struct!.options),
            isBlock: true,
            type: "struct",
            storageClassType: "SourcesDatasetSourceOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowSourcesS3SourceOptionsPropertyToTerraform(struct?: CcDataIntegrationFlow.SourcesS3SourceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_type: cdktn.stringToTerraform(struct!.fileType),
    }
}


export function ccDataIntegrationFlowSourcesS3SourceOptionsPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SourcesS3SourceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_type: {
            value: cdktn.stringToHclTerraform(struct!.fileType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowS3SourcePropertyToTerraform(struct?: CcDataIntegrationFlow.S3SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        options: ccDataIntegrationFlowSourcesS3SourceOptionsPropertyToTerraform(struct!.options),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccDataIntegrationFlowS3SourcePropertyToHclTerraform(struct?: CcDataIntegrationFlow.S3SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: ccDataIntegrationFlowSourcesS3SourceOptionsPropertyToHclTerraform(struct!.options),
            isBlock: true,
            type: "struct",
            storageClassType: "SourcesS3SourceOptionsProperty",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowSourcesPropertyToTerraform(struct?: CcDataIntegrationFlow.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataset_source: ccDataIntegrationFlowDatasetSourcePropertyToTerraform(struct!.datasetSource),
        s3_source: ccDataIntegrationFlowS3SourcePropertyToTerraform(struct!.s3Source),
        source_name: cdktn.stringToTerraform(struct!.sourceName),
        source_type: cdktn.stringToTerraform(struct!.sourceType),
    }
}


export function ccDataIntegrationFlowSourcesPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataset_source: {
            value: ccDataIntegrationFlowDatasetSourcePropertyToHclTerraform(struct!.datasetSource),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetSourceProperty",
        },
        s3_source: {
            value: ccDataIntegrationFlowS3SourcePropertyToHclTerraform(struct!.s3Source),
            isBlock: true,
            type: "struct",
            storageClassType: "S3SourceProperty",
        },
        source_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowTagsPropertyToTerraform(struct?: CcDataIntegrationFlow.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataIntegrationFlowTagsPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TagsProperty | cdktn.IResolvable): any {
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


export function ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyToTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        sort_order: cdktn.stringToTerraform(struct!.sortOrder),
    }
}


export function ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable): any {
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
        sort_order: {
            value: cdktn.stringToHclTerraform(struct!.sortOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityPropertyToTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fields: cdktn.listMapper(ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyToTerraform, false)(struct!.fields),
    }
}


export function ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fields: {
            value: cdktn.listMapperHcl(ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyToHclTerraform, false)(struct!.fields),
            isBlock: true,
            type: "list",
            storageClassType: "TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyPropertyToTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsDedupeStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_priority: ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityPropertyToTerraform(struct!.fieldPriority),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsDedupeStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_priority: {
            value: ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityPropertyToHclTerraform(struct!.fieldPriority),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty",
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


export function ccDataIntegrationFlowTargetDatasetTargetOptionsPropertyToTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dedupe_records: cdktn.booleanToTerraform(struct!.dedupeRecords),
        dedupe_strategy: ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyPropertyToTerraform(struct!.dedupeStrategy),
        load_type: cdktn.stringToTerraform(struct!.loadType),
    }
}


export function ccDataIntegrationFlowTargetDatasetTargetOptionsPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TargetDatasetTargetOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dedupe_records: {
            value: cdktn.booleanToHclTerraform(struct!.dedupeRecords),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dedupe_strategy: {
            value: ccDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyPropertyToHclTerraform(struct!.dedupeStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetDatasetTargetOptionsDedupeStrategyProperty",
        },
        load_type: {
            value: cdktn.stringToHclTerraform(struct!.loadType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowDatasetTargetPropertyToTerraform(struct?: CcDataIntegrationFlow.DatasetTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataset_identifier: cdktn.stringToTerraform(struct!.datasetIdentifier),
        options: ccDataIntegrationFlowTargetDatasetTargetOptionsPropertyToTerraform(struct!.options),
    }
}


export function ccDataIntegrationFlowDatasetTargetPropertyToHclTerraform(struct?: CcDataIntegrationFlow.DatasetTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataset_identifier: {
            value: cdktn.stringToHclTerraform(struct!.datasetIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: ccDataIntegrationFlowTargetDatasetTargetOptionsPropertyToHclTerraform(struct!.options),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetDatasetTargetOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowTargetPropertyToTerraform(struct?: CcDataIntegrationFlow.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataset_target: ccDataIntegrationFlowDatasetTargetPropertyToTerraform(struct!.datasetTarget),
        target_type: cdktn.stringToTerraform(struct!.targetType),
    }
}


export function ccDataIntegrationFlowTargetPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataset_target: {
            value: ccDataIntegrationFlowDatasetTargetPropertyToHclTerraform(struct!.datasetTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetTargetProperty",
        },
        target_type: {
            value: cdktn.stringToHclTerraform(struct!.targetType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowSqlTransformationPropertyToTerraform(struct?: CcDataIntegrationFlow.SqlTransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query: cdktn.stringToTerraform(struct!.query),
    }
}


export function ccDataIntegrationFlowSqlTransformationPropertyToHclTerraform(struct?: CcDataIntegrationFlow.SqlTransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query: {
            value: cdktn.stringToHclTerraform(struct!.query),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationFlowTransformationPropertyToTerraform(struct?: CcDataIntegrationFlow.TransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sql_transformation: ccDataIntegrationFlowSqlTransformationPropertyToTerraform(struct!.sqlTransformation),
        transformation_type: cdktn.stringToTerraform(struct!.transformationType),
    }
}


export function ccDataIntegrationFlowTransformationPropertyToHclTerraform(struct?: CcDataIntegrationFlow.TransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sql_transformation: {
            value: ccDataIntegrationFlowSqlTransformationPropertyToHclTerraform(struct!.sqlTransformation),
            isBlock: true,
            type: "struct",
            storageClassType: "SqlTransformationProperty",
        },
        transformation_type: {
            value: cdktn.stringToHclTerraform(struct!.transformationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataIntegrationFlow {
export interface SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty {
    /**
    * The name of the deduplication field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#name CcDataIntegrationFlow#name}
    */
    readonly name?: string;
    /**
    * The sort order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sort_order CcDataIntegrationFlow#sort_order}
    */
    readonly sortOrder?: string;
}
export class SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sortOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortOrder = this._sortOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sortOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sortOrder = value.sortOrder;
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

    // sort_order - computed: true, optional: true, required: false
    private _sortOrder?: string; 
    public get sortOrder() {
        return this.getStringAttribute('sort_order');
    }
    public set sortOrder(value: string) {
        this._sortOrder = value;
    }
    public resetSortOrder() {
        this._sortOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortOrderInput() {
        return this._sortOrder;
    }
}

export class SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyList extends cdktn.ComplexList {
    public internalValue? : SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty[] | cdktn.IResolvable

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
    public get(index: number): SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyOutputReference {
        return new SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty {
    /**
    * The list of field names and their sort order for deduplication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#fields CcDataIntegrationFlow#fields}
    */
    readonly fields?: SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty[] | cdktn.IResolvable;
}
export class SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
        }
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }
}
export interface SourcesDatasetSourceOptionsDedupeStrategyProperty {
    /**
    * The field priority deduplication strategy configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#field_priority CcDataIntegrationFlow#field_priority}
    */
    readonly fieldPriority?: SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty;
    /**
    * The deduplication strategy type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#type CcDataIntegrationFlow#type}
    */
    readonly type?: string;
}
export class SourcesDatasetSourceOptionsDedupeStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourcesDatasetSourceOptionsDedupeStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldPriority?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldPriority = this._fieldPriority?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesDatasetSourceOptionsDedupeStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldPriority.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldPriority.internalValue = value.fieldPriority;
            this._type = value.type;
        }
    }

    // field_priority - computed: true, optional: true, required: false
    private _fieldPriority = new SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityPropertyOutputReference(this, "field_priority");
    public get fieldPriority() {
        return this._fieldPriority;
    }
    public putFieldPriority(value: SourcesDatasetSourceOptionsDedupeStrategyFieldPriorityProperty) {
        this._fieldPriority.internalValue = value;
    }
    public resetFieldPriority() {
        this._fieldPriority.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldPriorityInput() {
        return this._fieldPriority.internalValue;
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
export interface SourcesDatasetSourceOptionsProperty {
    /**
    * The option to perform deduplication on data records sharing same primary key values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_records CcDataIntegrationFlow#dedupe_records}
    */
    readonly dedupeRecords?: boolean | cdktn.IResolvable;
    /**
    * The deduplication strategy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_strategy CcDataIntegrationFlow#dedupe_strategy}
    */
    readonly dedupeStrategy?: SourcesDatasetSourceOptionsDedupeStrategyProperty;
    /**
    * The load type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#load_type CcDataIntegrationFlow#load_type}
    */
    readonly loadType?: string;
}
export class SourcesDatasetSourceOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourcesDatasetSourceOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dedupeRecords !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedupeRecords = this._dedupeRecords;
        }
        if (this._dedupeStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedupeStrategy = this._dedupeStrategy?.internalValue;
        }
        if (this._loadType !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadType = this._loadType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesDatasetSourceOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dedupeRecords = undefined;
            this._dedupeStrategy.internalValue = undefined;
            this._loadType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dedupeRecords = value.dedupeRecords;
            this._dedupeStrategy.internalValue = value.dedupeStrategy;
            this._loadType = value.loadType;
        }
    }

    // dedupe_records - computed: true, optional: true, required: false
    private _dedupeRecords?: boolean | cdktn.IResolvable; 
    public get dedupeRecords() {
        return this.getBooleanAttribute('dedupe_records');
    }
    public set dedupeRecords(value: boolean | cdktn.IResolvable) {
        this._dedupeRecords = value;
    }
    public resetDedupeRecords() {
        this._dedupeRecords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedupeRecordsInput() {
        return this._dedupeRecords;
    }

    // dedupe_strategy - computed: true, optional: true, required: false
    private _dedupeStrategy = new SourcesDatasetSourceOptionsDedupeStrategyPropertyOutputReference(this, "dedupe_strategy");
    public get dedupeStrategy() {
        return this._dedupeStrategy;
    }
    public putDedupeStrategy(value: SourcesDatasetSourceOptionsDedupeStrategyProperty) {
        this._dedupeStrategy.internalValue = value;
    }
    public resetDedupeStrategy() {
        this._dedupeStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedupeStrategyInput() {
        return this._dedupeStrategy.internalValue;
    }

    // load_type - computed: true, optional: true, required: false
    private _loadType?: string; 
    public get loadType() {
        return this.getStringAttribute('load_type');
    }
    public set loadType(value: string) {
        this._loadType = value;
    }
    public resetLoadType() {
        this._loadType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadTypeInput() {
        return this._loadType;
    }
}
export interface DatasetSourceProperty {
    /**
    * The ARN of the dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_identifier CcDataIntegrationFlow#dataset_identifier}
    */
    readonly datasetIdentifier?: string;
    /**
    * The dataset options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#options CcDataIntegrationFlow#options}
    */
    readonly options?: SourcesDatasetSourceOptionsProperty;
}
export class DatasetSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._datasetIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetIdentifier = this._datasetIdentifier;
        }
        if (this._options?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datasetIdentifier = undefined;
            this._options.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datasetIdentifier = value.datasetIdentifier;
            this._options.internalValue = value.options;
        }
    }

    // dataset_identifier - computed: true, optional: true, required: false
    private _datasetIdentifier?: string; 
    public get datasetIdentifier() {
        return this.getStringAttribute('dataset_identifier');
    }
    public set datasetIdentifier(value: string) {
        this._datasetIdentifier = value;
    }
    public resetDatasetIdentifier() {
        this._datasetIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetIdentifierInput() {
        return this._datasetIdentifier;
    }

    // options - computed: true, optional: true, required: false
    private _options = new SourcesDatasetSourceOptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: SourcesDatasetSourceOptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }
}
export interface SourcesS3SourceOptionsProperty {
    /**
    * The file type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#file_type CcDataIntegrationFlow#file_type}
    */
    readonly fileType?: string;
}
export class SourcesS3SourceOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourcesS3SourceOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileType !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileType = this._fileType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesS3SourceOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileType = value.fileType;
        }
    }

    // file_type - computed: true, optional: true, required: false
    private _fileType?: string; 
    public get fileType() {
        return this.getStringAttribute('file_type');
    }
    public set fileType(value: string) {
        this._fileType = value;
    }
    public resetFileType() {
        this._fileType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileTypeInput() {
        return this._fileType;
    }
}
export interface S3SourceProperty {
    /**
    * The S3 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#bucket_name CcDataIntegrationFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The Amazon S3 options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#options CcDataIntegrationFlow#options}
    */
    readonly options?: SourcesS3SourceOptionsProperty;
    /**
    * The S3 prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#prefix CcDataIntegrationFlow#prefix}
    */
    readonly prefix?: string;
}
export class S3SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._options?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options?.internalValue;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._options.internalValue = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._options.internalValue = value.options;
            this._prefix = value.prefix;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // options - computed: true, optional: true, required: false
    private _options = new SourcesS3SourceOptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: SourcesS3SourceOptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface SourcesProperty {
    /**
    * The dataset source configuration parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_source CcDataIntegrationFlow#dataset_source}
    */
    readonly datasetSource?: DatasetSourceProperty;
    /**
    * The S3 source configuration parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#s3_source CcDataIntegrationFlow#s3_source}
    */
    readonly s3Source?: S3SourceProperty;
    /**
    * The source name that can be used as table alias in SQL transformation query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#source_name CcDataIntegrationFlow#source_name}
    */
    readonly sourceName: string;
    /**
    * The source type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#source_type CcDataIntegrationFlow#source_type}
    */
    readonly sourceType: string;
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
        if (this._datasetSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetSource = this._datasetSource?.internalValue;
        }
        if (this._s3Source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Source = this._s3Source?.internalValue;
        }
        if (this._sourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceName = this._sourceName;
        }
        if (this._sourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceType = this._sourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datasetSource.internalValue = undefined;
            this._s3Source.internalValue = undefined;
            this._sourceName = undefined;
            this._sourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datasetSource.internalValue = value.datasetSource;
            this._s3Source.internalValue = value.s3Source;
            this._sourceName = value.sourceName;
            this._sourceType = value.sourceType;
        }
    }

    // dataset_source - computed: true, optional: true, required: false
    private _datasetSource = new DatasetSourcePropertyOutputReference(this, "dataset_source");
    public get datasetSource() {
        return this._datasetSource;
    }
    public putDatasetSource(value: DatasetSourceProperty) {
        this._datasetSource.internalValue = value;
    }
    public resetDatasetSource() {
        this._datasetSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetSourceInput() {
        return this._datasetSource.internalValue;
    }

    // s3_source - computed: true, optional: true, required: false
    private _s3Source = new S3SourcePropertyOutputReference(this, "s3_source");
    public get s3Source() {
        return this._s3Source;
    }
    public putS3Source(value: S3SourceProperty) {
        this._s3Source.internalValue = value;
    }
    public resetS3Source() {
        this._s3Source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SourceInput() {
        return this._s3Source.internalValue;
    }

    // source_name - computed: false, optional: false, required: true
    private _sourceName?: string; 
    public get sourceName() {
        return this.getStringAttribute('source_name');
    }
    public set sourceName(value: string) {
        this._sourceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNameInput() {
        return this._sourceName;
    }

    // source_type - computed: false, optional: false, required: true
    private _sourceType?: string; 
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string) {
        this._sourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
        return this._sourceType;
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
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#key CcDataIntegrationFlow#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#value CcDataIntegrationFlow#value}
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
export interface TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty {
    /**
    * The name of the deduplication field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#name CcDataIntegrationFlow#name}
    */
    readonly name?: string;
    /**
    * The sort order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sort_order CcDataIntegrationFlow#sort_order}
    */
    readonly sortOrder?: string;
}
export class TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sortOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortOrder = this._sortOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._sortOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._sortOrder = value.sortOrder;
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

    // sort_order - computed: true, optional: true, required: false
    private _sortOrder?: string; 
    public get sortOrder() {
        return this.getStringAttribute('sort_order');
    }
    public set sortOrder(value: string) {
        this._sortOrder = value;
    }
    public resetSortOrder() {
        this._sortOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortOrderInput() {
        return this._sortOrder;
    }
}

export class TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyOutputReference {
        return new TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty {
    /**
    * The list of field names and their sort order for deduplication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#fields CcDataIntegrationFlow#fields}
    */
    readonly fields?: TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty[] | cdktn.IResolvable;
}
export class TargetDatasetTargetOptionsDedupeStrategyFieldPriorityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
        }
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: TargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }
}
export interface TargetDatasetTargetOptionsDedupeStrategyProperty {
    /**
    * The field priority deduplication strategy configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#field_priority CcDataIntegrationFlow#field_priority}
    */
    readonly fieldPriority?: TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty;
    /**
    * The deduplication strategy type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#type CcDataIntegrationFlow#type}
    */
    readonly type?: string;
}
export class TargetDatasetTargetOptionsDedupeStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetDatasetTargetOptionsDedupeStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldPriority?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldPriority = this._fieldPriority?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetDatasetTargetOptionsDedupeStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldPriority.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldPriority.internalValue = value.fieldPriority;
            this._type = value.type;
        }
    }

    // field_priority - computed: true, optional: true, required: false
    private _fieldPriority = new TargetDatasetTargetOptionsDedupeStrategyFieldPriorityPropertyOutputReference(this, "field_priority");
    public get fieldPriority() {
        return this._fieldPriority;
    }
    public putFieldPriority(value: TargetDatasetTargetOptionsDedupeStrategyFieldPriorityProperty) {
        this._fieldPriority.internalValue = value;
    }
    public resetFieldPriority() {
        this._fieldPriority.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldPriorityInput() {
        return this._fieldPriority.internalValue;
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
export interface TargetDatasetTargetOptionsProperty {
    /**
    * The option to perform deduplication on data records sharing same primary key values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_records CcDataIntegrationFlow#dedupe_records}
    */
    readonly dedupeRecords?: boolean | cdktn.IResolvable;
    /**
    * The deduplication strategy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dedupe_strategy CcDataIntegrationFlow#dedupe_strategy}
    */
    readonly dedupeStrategy?: TargetDatasetTargetOptionsDedupeStrategyProperty;
    /**
    * The load type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#load_type CcDataIntegrationFlow#load_type}
    */
    readonly loadType?: string;
}
export class TargetDatasetTargetOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetDatasetTargetOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dedupeRecords !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedupeRecords = this._dedupeRecords;
        }
        if (this._dedupeStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedupeStrategy = this._dedupeStrategy?.internalValue;
        }
        if (this._loadType !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadType = this._loadType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetDatasetTargetOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dedupeRecords = undefined;
            this._dedupeStrategy.internalValue = undefined;
            this._loadType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dedupeRecords = value.dedupeRecords;
            this._dedupeStrategy.internalValue = value.dedupeStrategy;
            this._loadType = value.loadType;
        }
    }

    // dedupe_records - computed: true, optional: true, required: false
    private _dedupeRecords?: boolean | cdktn.IResolvable; 
    public get dedupeRecords() {
        return this.getBooleanAttribute('dedupe_records');
    }
    public set dedupeRecords(value: boolean | cdktn.IResolvable) {
        this._dedupeRecords = value;
    }
    public resetDedupeRecords() {
        this._dedupeRecords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedupeRecordsInput() {
        return this._dedupeRecords;
    }

    // dedupe_strategy - computed: true, optional: true, required: false
    private _dedupeStrategy = new TargetDatasetTargetOptionsDedupeStrategyPropertyOutputReference(this, "dedupe_strategy");
    public get dedupeStrategy() {
        return this._dedupeStrategy;
    }
    public putDedupeStrategy(value: TargetDatasetTargetOptionsDedupeStrategyProperty) {
        this._dedupeStrategy.internalValue = value;
    }
    public resetDedupeStrategy() {
        this._dedupeStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedupeStrategyInput() {
        return this._dedupeStrategy.internalValue;
    }

    // load_type - computed: true, optional: true, required: false
    private _loadType?: string; 
    public get loadType() {
        return this.getStringAttribute('load_type');
    }
    public set loadType(value: string) {
        this._loadType = value;
    }
    public resetLoadType() {
        this._loadType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadTypeInput() {
        return this._loadType;
    }
}
export interface DatasetTargetProperty {
    /**
    * The dataset ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_identifier CcDataIntegrationFlow#dataset_identifier}
    */
    readonly datasetIdentifier?: string;
    /**
    * The dataset options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#options CcDataIntegrationFlow#options}
    */
    readonly options?: TargetDatasetTargetOptionsProperty;
}
export class DatasetTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._datasetIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetIdentifier = this._datasetIdentifier;
        }
        if (this._options?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datasetIdentifier = undefined;
            this._options.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datasetIdentifier = value.datasetIdentifier;
            this._options.internalValue = value.options;
        }
    }

    // dataset_identifier - computed: true, optional: true, required: false
    private _datasetIdentifier?: string; 
    public get datasetIdentifier() {
        return this.getStringAttribute('dataset_identifier');
    }
    public set datasetIdentifier(value: string) {
        this._datasetIdentifier = value;
    }
    public resetDatasetIdentifier() {
        this._datasetIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetIdentifierInput() {
        return this._datasetIdentifier;
    }

    // options - computed: true, optional: true, required: false
    private _options = new TargetDatasetTargetOptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: TargetDatasetTargetOptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }
}
export interface TargetProperty {
    /**
    * The dataset target configuration parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#dataset_target CcDataIntegrationFlow#dataset_target}
    */
    readonly datasetTarget?: DatasetTargetProperty;
    /**
    * The target type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#target_type CcDataIntegrationFlow#target_type}
    */
    readonly targetType: string;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._datasetTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetTarget = this._datasetTarget?.internalValue;
        }
        if (this._targetType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetType = this._targetType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datasetTarget.internalValue = undefined;
            this._targetType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datasetTarget.internalValue = value.datasetTarget;
            this._targetType = value.targetType;
        }
    }

    // dataset_target - computed: true, optional: true, required: false
    private _datasetTarget = new DatasetTargetPropertyOutputReference(this, "dataset_target");
    public get datasetTarget() {
        return this._datasetTarget;
    }
    public putDatasetTarget(value: DatasetTargetProperty) {
        this._datasetTarget.internalValue = value;
    }
    public resetDatasetTarget() {
        this._datasetTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetTargetInput() {
        return this._datasetTarget.internalValue;
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }
}
export interface SqlTransformationProperty {
    /**
    * The transformation SQL query body based on SparkSQL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#query CcDataIntegrationFlow#query}
    */
    readonly query?: string;
}
export class SqlTransformationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqlTransformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._query !== undefined) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqlTransformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._query = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._query = value.query;
        }
    }

    // query - computed: true, optional: true, required: false
    private _query?: string; 
    public get query() {
        return this.getStringAttribute('query');
    }
    public set query(value: string) {
        this._query = value;
    }
    public resetQuery() {
        this._query = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryInput() {
        return this._query;
    }
}
export interface TransformationProperty {
    /**
    * The SQL transformation configuration parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#sql_transformation CcDataIntegrationFlow#sql_transformation}
    */
    readonly sqlTransformation?: SqlTransformationProperty;
    /**
    * The transformation type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/scn_data_integration_flow#transformation_type CcDataIntegrationFlow#transformation_type}
    */
    readonly transformationType: string;
}
export class TransformationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sqlTransformation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlTransformation = this._sqlTransformation?.internalValue;
        }
        if (this._transformationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformationType = this._transformationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sqlTransformation.internalValue = undefined;
            this._transformationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sqlTransformation.internalValue = value.sqlTransformation;
            this._transformationType = value.transformationType;
        }
    }

    // sql_transformation - computed: true, optional: true, required: false
    private _sqlTransformation = new SqlTransformationPropertyOutputReference(this, "sql_transformation");
    public get sqlTransformation() {
        return this._sqlTransformation;
    }
    public putSqlTransformation(value: SqlTransformationProperty) {
        this._sqlTransformation.internalValue = value;
    }
    public resetSqlTransformation() {
        this._sqlTransformation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlTransformationInput() {
        return this._sqlTransformation.internalValue;
    }

    // transformation_type - computed: false, optional: false, required: true
    private _transformationType?: string; 
    public get transformationType() {
        return this.getStringAttribute('transformation_type');
    }
    public set transformationType(value: string) {
        this._transformationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transformationTypeInput() {
        return this._transformationType;
    }
}
}
