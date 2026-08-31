// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExperimentTrialComponentProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the component as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#display_name CcExperimentTrialComponent#display_name}
    */
    readonly displayName?: string;
    /**
    * When the component ended.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#end_time CcExperimentTrialComponent#end_time}
    */
    readonly endTime?: string;
    /**
    * Metadata properties of the tracking entity, trial, or trial component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties CcExperimentTrialComponent#metadata_properties}
    */
    readonly metadataProperties?: CcExperimentTrialComponent.MetadataPropertiesProperty;
    /**
    * When the component started.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#start_time CcExperimentTrialComponent#start_time}
    */
    readonly startTime?: string;
    /**
    * The status of the trial component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#status CcExperimentTrialComponent#status}
    */
    readonly status?: CcExperimentTrialComponent.StatusProperty;
    /**
    * A list of tags to associate with the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#tags CcExperimentTrialComponent#tags}
    */
    readonly tags?: CcExperimentTrialComponent.TagsItemsProperty[] | cdktn.IResolvable;
    /**
    * The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name CcExperimentTrialComponent#trial_component_name}
    */
    readonly trialComponentName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component}
*/
export class CcExperimentTrialComponent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_experiment_trial_component";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExperimentTrialComponent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExperimentTrialComponent to import
    * @param importFromId The id of the existing CcExperimentTrialComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExperimentTrialComponent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_experiment_trial_component", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExperimentTrialComponentProps
    */
    public constructor(scope: Construct, id: string, config: CcExperimentTrialComponentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_experiment_trial_component',
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
        this._displayName = config.displayName;
        this._endTime = config.endTime;
        this._metadataProperties.internalValue = config.metadataProperties;
        this._startTime = config.startTime;
        this._status.internalValue = config.status;
        this._tags.internalValue = config.tags;
        this._trialComponentName = config.trialComponentName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // lineage_group_arn - computed: true, optional: false, required: false
    public get lineageGroupArn() {
        return this.getStringAttribute('lineage_group_arn');
    }

    // metadata_properties - computed: true, optional: true, required: false
    private _metadataProperties = new CcExperimentTrialComponent.MetadataPropertiesPropertyOutputReference(this, "metadata_properties");
    public get metadataProperties() {
        return this._metadataProperties;
    }
    public putMetadataProperties(value: CcExperimentTrialComponent.MetadataPropertiesProperty) {
        this._metadataProperties.internalValue = value;
    }
    public resetMetadataProperties() {
        this._metadataProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataPropertiesInput() {
        return this._metadataProperties.internalValue;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }

    // status - computed: true, optional: true, required: false
    private _status = new CcExperimentTrialComponent.StatusPropertyOutputReference(this, "status");
    public get status() {
        return this._status;
    }
    public putStatus(value: CcExperimentTrialComponent.StatusProperty) {
        this._status.internalValue = value;
    }
    public resetStatus() {
        this._status.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcExperimentTrialComponent.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcExperimentTrialComponent.TagsItemsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trial_component_name - computed: false, optional: false, required: true
    private _trialComponentName?: string; 
    public get trialComponentName() {
        return this.getStringAttribute('trial_component_name');
    }
    public set trialComponentName(value: string) {
        this._trialComponentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trialComponentNameInput() {
        return this._trialComponentName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            display_name: cdktn.stringToTerraform(this._displayName),
            end_time: cdktn.stringToTerraform(this._endTime),
            metadata_properties: ccExperimentTrialComponentMetadataPropertiesPropertyToTerraform(this._metadataProperties.internalValue),
            start_time: cdktn.stringToTerraform(this._startTime),
            status: ccExperimentTrialComponentStatusPropertyToTerraform(this._status.internalValue),
            tags: cdktn.listMapper(ccExperimentTrialComponentTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
            trial_component_name: cdktn.stringToTerraform(this._trialComponentName),
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
            end_time: {
                value: cdktn.stringToHclTerraform(this._endTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata_properties: {
                value: ccExperimentTrialComponentMetadataPropertiesPropertyToHclTerraform(this._metadataProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperimentTrialComponent.MetadataPropertiesProperty",
            },
            start_time: {
                value: cdktn.stringToHclTerraform(this._startTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: ccExperimentTrialComponentStatusPropertyToHclTerraform(this._status.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperimentTrialComponent.StatusProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccExperimentTrialComponentTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcExperimentTrialComponent.TagsItemsPropertyList",
            },
            trial_component_name: {
                value: cdktn.stringToHclTerraform(this._trialComponentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExperimentTrialComponentMetadataPropertiesPropertyToTerraform(struct?: CcExperimentTrialComponent.MetadataPropertiesProperty | cdktn.IResolvable): any {
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


export function ccExperimentTrialComponentMetadataPropertiesPropertyToHclTerraform(struct?: CcExperimentTrialComponent.MetadataPropertiesProperty | cdktn.IResolvable): any {
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


export function ccExperimentTrialComponentStatusPropertyToTerraform(struct?: CcExperimentTrialComponent.StatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message: cdktn.stringToTerraform(struct!.message),
        primary_status: cdktn.stringToTerraform(struct!.primaryStatus),
    }
}


export function ccExperimentTrialComponentStatusPropertyToHclTerraform(struct?: CcExperimentTrialComponent.StatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message: {
            value: cdktn.stringToHclTerraform(struct!.message),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_status: {
            value: cdktn.stringToHclTerraform(struct!.primaryStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTrialComponentTagsItemsPropertyToTerraform(struct?: CcExperimentTrialComponent.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExperimentTrialComponentTagsItemsPropertyToHclTerraform(struct?: CcExperimentTrialComponent.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcExperimentTrialComponent {
export interface MetadataPropertiesProperty {
    /**
    * The commit ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#commit_id CcExperimentTrialComponent#commit_id}
    */
    readonly commitId?: string;
    /**
    * The entity this entity was generated by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#generated_by CcExperimentTrialComponent#generated_by}
    */
    readonly generatedBy?: string;
    /**
    * The project ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#project_id CcExperimentTrialComponent#project_id}
    */
    readonly projectId?: string;
    /**
    * The repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#repository CcExperimentTrialComponent#repository}
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
export interface StatusProperty {
    /**
    * If the component failed, a message describing why.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#message CcExperimentTrialComponent#message}
    */
    readonly message?: string;
    /**
    * The status of the trial component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#primary_status CcExperimentTrialComponent#primary_status}
    */
    readonly primaryStatus?: string;
}
export class StatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._message !== undefined) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        if (this._primaryStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryStatus = this._primaryStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._message = undefined;
            this._primaryStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._message = value.message;
            this._primaryStatus = value.primaryStatus;
        }
    }

    // message - computed: true, optional: true, required: false
    private _message?: string; 
    public get message() {
        return this.getStringAttribute('message');
    }
    public set message(value: string) {
        this._message = value;
    }
    public resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
        return this._message;
    }

    // primary_status - computed: true, optional: true, required: false
    private _primaryStatus?: string; 
    public get primaryStatus() {
        return this.getStringAttribute('primary_status');
    }
    public set primaryStatus(value: string) {
        this._primaryStatus = value;
    }
    public resetPrimaryStatus() {
        this._primaryStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryStatusInput() {
        return this._primaryStatus;
    }
}
export interface TagsItemsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#key CcExperimentTrialComponent#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_experiment_trial_component#value CcExperimentTrialComponent#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
