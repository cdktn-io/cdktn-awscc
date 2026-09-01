// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPipelineProps extends cdktn.TerraformMetaArguments {
    /**
    * The S3 bucket where artifacts for the pipeline are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#artifact_store CcPipeline#artifact_store}
    */
    readonly artifactStore?: CcPipeline.ArtifactStoreProperty;
    /**
    * A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#artifact_stores CcPipeline#artifact_stores}
    */
    readonly artifactStores?: CcPipeline.ArtifactStoreMapProperty[] | cdktn.IResolvable;
    /**
    * Represents the input of a DisableStageTransition action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#disable_inbound_stage_transitions CcPipeline#disable_inbound_stage_transitions}
    */
    readonly disableInboundStageTransitions?: CcPipeline.StageTransitionProperty[] | cdktn.IResolvable;
    /**
    * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#execution_mode CcPipeline#execution_mode}
    */
    readonly executionMode?: string;
    /**
    * The name of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
    /**
    * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#pipeline_type CcPipeline#pipeline_type}
    */
    readonly pipelineType?: string;
    /**
    * Indicates whether to rerun the CodePipeline pipeline after you update it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#restart_execution_on_update CcPipeline#restart_execution_on_update}
    */
    readonly restartExecutionOnUpdate?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#role_arn CcPipeline#role_arn}
    */
    readonly roleArn: string;
    /**
    * Represents information about a stage and its definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#stages CcPipeline#stages}
    */
    readonly stages: CcPipeline.StageDeclarationProperty[] | cdktn.IResolvable;
    /**
    * Specifies the tags applied to the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#tags CcPipeline#tags}
    */
    readonly tags?: CcPipeline.TagProperty[] | cdktn.IResolvable;
    /**
    * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#triggers CcPipeline#triggers}
    */
    readonly triggers?: CcPipeline.PipelineTriggerDeclarationProperty[] | cdktn.IResolvable;
    /**
    * A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9@\-_]+.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#variables CcPipeline#variables}
    */
    readonly variables?: CcPipeline.VariableDeclarationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline awscc_codepipeline_pipeline}
*/
export class CcPipeline extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codepipeline_pipeline";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPipeline resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPipeline to import
    * @param importFromId The id of the existing CcPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPipeline to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codepipeline_pipeline", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline awscc_codepipeline_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPipelineProps
    */
    public constructor(scope: Construct, id: string, config: CcPipelineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codepipeline_pipeline',
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
        this._artifactStore.internalValue = config.artifactStore;
        this._artifactStores.internalValue = config.artifactStores;
        this._disableInboundStageTransitions.internalValue = config.disableInboundStageTransitions;
        this._executionMode = config.executionMode;
        this._name = config.name;
        this._pipelineType = config.pipelineType;
        this._restartExecutionOnUpdate = config.restartExecutionOnUpdate;
        this._roleArn = config.roleArn;
        this._stages.internalValue = config.stages;
        this._tags.internalValue = config.tags;
        this._triggers.internalValue = config.triggers;
        this._variables.internalValue = config.variables;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // artifact_store - computed: true, optional: true, required: false
    private _artifactStore = new CcPipeline.ArtifactStorePropertyOutputReference(this, "artifact_store");
    public get artifactStore() {
        return this._artifactStore;
    }
    public putArtifactStore(value: CcPipeline.ArtifactStoreProperty) {
        this._artifactStore.internalValue = value;
    }
    public resetArtifactStore() {
        this._artifactStore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactStoreInput() {
        return this._artifactStore.internalValue;
    }

    // artifact_stores - computed: true, optional: true, required: false
    private _artifactStores = new CcPipeline.ArtifactStoreMapPropertyList(this, "artifact_stores", false);
    public get artifactStores() {
        return this._artifactStores;
    }
    public putArtifactStores(value: CcPipeline.ArtifactStoreMapProperty[] | cdktn.IResolvable) {
        this._artifactStores.internalValue = value;
    }
    public resetArtifactStores() {
        this._artifactStores.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactStoresInput() {
        return this._artifactStores.internalValue;
    }

    // disable_inbound_stage_transitions - computed: true, optional: true, required: false
    private _disableInboundStageTransitions = new CcPipeline.StageTransitionPropertyList(this, "disable_inbound_stage_transitions", false);
    public get disableInboundStageTransitions() {
        return this._disableInboundStageTransitions;
    }
    public putDisableInboundStageTransitions(value: CcPipeline.StageTransitionProperty[] | cdktn.IResolvable) {
        this._disableInboundStageTransitions.internalValue = value;
    }
    public resetDisableInboundStageTransitions() {
        this._disableInboundStageTransitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableInboundStageTransitionsInput() {
        return this._disableInboundStageTransitions.internalValue;
    }

    // execution_mode - computed: true, optional: true, required: false
    private _executionMode?: string; 
    public get executionMode() {
        return this.getStringAttribute('execution_mode');
    }
    public set executionMode(value: string) {
        this._executionMode = value;
    }
    public resetExecutionMode() {
        this._executionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionModeInput() {
        return this._executionMode;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // pipeline_type - computed: true, optional: true, required: false
    private _pipelineType?: string; 
    public get pipelineType() {
        return this.getStringAttribute('pipeline_type');
    }
    public set pipelineType(value: string) {
        this._pipelineType = value;
    }
    public resetPipelineType() {
        this._pipelineType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineTypeInput() {
        return this._pipelineType;
    }

    // restart_execution_on_update - computed: true, optional: true, required: false
    private _restartExecutionOnUpdate?: boolean | cdktn.IResolvable; 
    public get restartExecutionOnUpdate() {
        return this.getBooleanAttribute('restart_execution_on_update');
    }
    public set restartExecutionOnUpdate(value: boolean | cdktn.IResolvable) {
        this._restartExecutionOnUpdate = value;
    }
    public resetRestartExecutionOnUpdate() {
        this._restartExecutionOnUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restartExecutionOnUpdateInput() {
        return this._restartExecutionOnUpdate;
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

    // stages - computed: false, optional: false, required: true
    private _stages = new CcPipeline.StageDeclarationPropertyList(this, "stages", false);
    public get stages() {
        return this._stages;
    }
    public putStages(value: CcPipeline.StageDeclarationProperty[] | cdktn.IResolvable) {
        this._stages.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stagesInput() {
        return this._stages.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPipeline.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPipeline.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // triggers - computed: true, optional: true, required: false
    private _triggers = new CcPipeline.PipelineTriggerDeclarationPropertyList(this, "triggers", false);
    public get triggers() {
        return this._triggers;
    }
    public putTriggers(value: CcPipeline.PipelineTriggerDeclarationProperty[] | cdktn.IResolvable) {
        this._triggers.internalValue = value;
    }
    public resetTriggers() {
        this._triggers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggersInput() {
        return this._triggers.internalValue;
    }

    // variables - computed: true, optional: true, required: false
    private _variables = new CcPipeline.VariableDeclarationPropertyList(this, "variables", false);
    public get variables() {
        return this._variables;
    }
    public putVariables(value: CcPipeline.VariableDeclarationProperty[] | cdktn.IResolvable) {
        this._variables.internalValue = value;
    }
    public resetVariables() {
        this._variables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            artifact_store: ccPipelineArtifactStorePropertyToTerraform(this._artifactStore.internalValue),
            artifact_stores: cdktn.listMapper(ccPipelineArtifactStoreMapPropertyToTerraform, false)(this._artifactStores.internalValue),
            disable_inbound_stage_transitions: cdktn.listMapper(ccPipelineStageTransitionPropertyToTerraform, false)(this._disableInboundStageTransitions.internalValue),
            execution_mode: cdktn.stringToTerraform(this._executionMode),
            name: cdktn.stringToTerraform(this._name),
            pipeline_type: cdktn.stringToTerraform(this._pipelineType),
            restart_execution_on_update: cdktn.booleanToTerraform(this._restartExecutionOnUpdate),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            stages: cdktn.listMapper(ccPipelineStageDeclarationPropertyToTerraform, false)(this._stages.internalValue),
            tags: cdktn.listMapper(ccPipelineTagPropertyToTerraform, false)(this._tags.internalValue),
            triggers: cdktn.listMapper(ccPipelinePipelineTriggerDeclarationPropertyToTerraform, false)(this._triggers.internalValue),
            variables: cdktn.listMapper(ccPipelineVariableDeclarationPropertyToTerraform, false)(this._variables.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            artifact_store: {
                value: ccPipelineArtifactStorePropertyToHclTerraform(this._artifactStore.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipeline.ArtifactStoreProperty",
            },
            artifact_stores: {
                value: cdktn.listMapperHcl(ccPipelineArtifactStoreMapPropertyToHclTerraform, false)(this._artifactStores.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.ArtifactStoreMapPropertyList",
            },
            disable_inbound_stage_transitions: {
                value: cdktn.listMapperHcl(ccPipelineStageTransitionPropertyToHclTerraform, false)(this._disableInboundStageTransitions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.StageTransitionPropertyList",
            },
            execution_mode: {
                value: cdktn.stringToHclTerraform(this._executionMode),
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
            pipeline_type: {
                value: cdktn.stringToHclTerraform(this._pipelineType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restart_execution_on_update: {
                value: cdktn.booleanToHclTerraform(this._restartExecutionOnUpdate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stages: {
                value: cdktn.listMapperHcl(ccPipelineStageDeclarationPropertyToHclTerraform, false)(this._stages.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.StageDeclarationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPipelineTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.TagPropertyList",
            },
            triggers: {
                value: cdktn.listMapperHcl(ccPipelinePipelineTriggerDeclarationPropertyToHclTerraform, false)(this._triggers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.PipelineTriggerDeclarationPropertyList",
            },
            variables: {
                value: cdktn.listMapperHcl(ccPipelineVariableDeclarationPropertyToHclTerraform, false)(this._variables.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.VariableDeclarationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPipelineEncryptionKeyPropertyToTerraform(struct?: CcPipeline.EncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipelineEncryptionKeyPropertyToHclTerraform(struct?: CcPipeline.EncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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


export function ccPipelineArtifactStorePropertyToTerraform(struct?: CcPipeline.ArtifactStoreProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccPipelineEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
        location: cdktn.stringToTerraform(struct!.location),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipelineArtifactStorePropertyToHclTerraform(struct?: CcPipeline.ArtifactStoreProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccPipelineEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionKeyProperty",
        },
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
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


export function ccPipelineArtifactStoresArtifactStoreEncryptionKeyPropertyToTerraform(struct?: CcPipeline.ArtifactStoresArtifactStoreEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipelineArtifactStoresArtifactStoreEncryptionKeyPropertyToHclTerraform(struct?: CcPipeline.ArtifactStoresArtifactStoreEncryptionKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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


export function ccPipelineArtifactStoresArtifactStorePropertyToTerraform(struct?: CcPipeline.ArtifactStoresArtifactStoreProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key: ccPipelineArtifactStoresArtifactStoreEncryptionKeyPropertyToTerraform(struct!.encryptionKey),
        location: cdktn.stringToTerraform(struct!.location),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipelineArtifactStoresArtifactStorePropertyToHclTerraform(struct?: CcPipeline.ArtifactStoresArtifactStoreProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key: {
            value: ccPipelineArtifactStoresArtifactStoreEncryptionKeyPropertyToHclTerraform(struct!.encryptionKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ArtifactStoresArtifactStoreEncryptionKeyProperty",
        },
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
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


export function ccPipelineArtifactStoreMapPropertyToTerraform(struct?: CcPipeline.ArtifactStoreMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        artifact_store: ccPipelineArtifactStoresArtifactStorePropertyToTerraform(struct!.artifactStore),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccPipelineArtifactStoreMapPropertyToHclTerraform(struct?: CcPipeline.ArtifactStoreMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        artifact_store: {
            value: ccPipelineArtifactStoresArtifactStorePropertyToHclTerraform(struct!.artifactStore),
            isBlock: true,
            type: "struct",
            storageClassType: "ArtifactStoresArtifactStoreProperty",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStageTransitionPropertyToTerraform(struct?: CcPipeline.StageTransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reason: cdktn.stringToTerraform(struct!.reason),
        stage_name: cdktn.stringToTerraform(struct!.stageName),
    }
}


export function ccPipelineStageTransitionPropertyToHclTerraform(struct?: CcPipeline.StageTransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reason: {
            value: cdktn.stringToHclTerraform(struct!.reason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stage_name: {
            value: cdktn.stringToHclTerraform(struct!.stageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineActionTypeIdPropertyToTerraform(struct?: CcPipeline.ActionTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: cdktn.stringToTerraform(struct!.category),
        owner: cdktn.stringToTerraform(struct!.owner),
        provider: cdktn.stringToTerraform(struct!.provider),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccPipelineActionTypeIdPropertyToHclTerraform(struct?: CcPipeline.ActionTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider: {
            value: cdktn.stringToHclTerraform(struct!.provider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineEnvironmentVariablePropertyToTerraform(struct?: CcPipeline.EnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipelineEnvironmentVariablePropertyToHclTerraform(struct?: CcPipeline.EnvironmentVariableProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccPipelineInputArtifactPropertyToTerraform(struct?: CcPipeline.InputArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelineInputArtifactPropertyToHclTerraform(struct?: CcPipeline.InputArtifactProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineOutputArtifactPropertyToTerraform(struct?: CcPipeline.OutputArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        files: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.files),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelineOutputArtifactPropertyToHclTerraform(struct?: CcPipeline.OutputArtifactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        files: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.files),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineActionDeclarationPropertyToTerraform(struct?: CcPipeline.ActionDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_type_id: ccPipelineActionTypeIdPropertyToTerraform(struct!.actionTypeId),
        commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
        configuration: cdktn.stringToTerraform(struct!.configuration),
        environment_variables: cdktn.listMapper(ccPipelineEnvironmentVariablePropertyToTerraform, false)(struct!.environmentVariables),
        input_artifacts: cdktn.listMapper(ccPipelineInputArtifactPropertyToTerraform, false)(struct!.inputArtifacts),
        name: cdktn.stringToTerraform(struct!.name),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        output_artifacts: cdktn.listMapper(ccPipelineOutputArtifactPropertyToTerraform, false)(struct!.outputArtifacts),
        output_variables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputVariables),
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        run_order: cdktn.numberToTerraform(struct!.runOrder),
        timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    }
}


export function ccPipelineActionDeclarationPropertyToHclTerraform(struct?: CcPipeline.ActionDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_type_id: {
            value: ccPipelineActionTypeIdPropertyToHclTerraform(struct!.actionTypeId),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionTypeIdProperty",
        },
        commands: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        configuration: {
            value: cdktn.stringToHclTerraform(struct!.configuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment_variables: {
            value: cdktn.listMapperHcl(ccPipelineEnvironmentVariablePropertyToHclTerraform, false)(struct!.environmentVariables),
            isBlock: true,
            type: "list",
            storageClassType: "EnvironmentVariablePropertyList",
        },
        input_artifacts: {
            value: cdktn.listMapperHcl(ccPipelineInputArtifactPropertyToHclTerraform, false)(struct!.inputArtifacts),
            isBlock: true,
            type: "list",
            storageClassType: "InputArtifactPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_artifacts: {
            value: cdktn.listMapperHcl(ccPipelineOutputArtifactPropertyToHclTerraform, false)(struct!.outputArtifacts),
            isBlock: true,
            type: "list",
            storageClassType: "OutputArtifactPropertyList",
        },
        output_variables: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputVariables),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
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
        run_order: {
            value: cdktn.numberToHclTerraform(struct!.runOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesBeforeEntryConditionsRulesInputArtifactsPropertyToTerraform(struct?: CcPipeline.StagesBeforeEntryConditionsRulesInputArtifactsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelineStagesBeforeEntryConditionsRulesInputArtifactsPropertyToHclTerraform(struct?: CcPipeline.StagesBeforeEntryConditionsRulesInputArtifactsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineRuleTypeIdPropertyToTerraform(struct?: CcPipeline.RuleTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: cdktn.stringToTerraform(struct!.category),
        owner: cdktn.stringToTerraform(struct!.owner),
        provider: cdktn.stringToTerraform(struct!.provider),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccPipelineRuleTypeIdPropertyToHclTerraform(struct?: CcPipeline.RuleTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider: {
            value: cdktn.stringToHclTerraform(struct!.provider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineRuleDeclarationPropertyToTerraform(struct?: CcPipeline.RuleDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
        configuration: cdktn.stringToTerraform(struct!.configuration),
        input_artifacts: cdktn.listMapper(ccPipelineStagesBeforeEntryConditionsRulesInputArtifactsPropertyToTerraform, false)(struct!.inputArtifacts),
        name: cdktn.stringToTerraform(struct!.name),
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        rule_type_id: ccPipelineRuleTypeIdPropertyToTerraform(struct!.ruleTypeId),
    }
}


export function ccPipelineRuleDeclarationPropertyToHclTerraform(struct?: CcPipeline.RuleDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        commands: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        configuration: {
            value: cdktn.stringToHclTerraform(struct!.configuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_artifacts: {
            value: cdktn.listMapperHcl(ccPipelineStagesBeforeEntryConditionsRulesInputArtifactsPropertyToHclTerraform, false)(struct!.inputArtifacts),
            isBlock: true,
            type: "list",
            storageClassType: "StagesBeforeEntryConditionsRulesInputArtifactsPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        rule_type_id: {
            value: ccPipelineRuleTypeIdPropertyToHclTerraform(struct!.ruleTypeId),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleTypeIdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineConditionPropertyToTerraform(struct?: CcPipeline.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        result: cdktn.stringToTerraform(struct!.result),
        rules: cdktn.listMapper(ccPipelineRuleDeclarationPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccPipelineConditionPropertyToHclTerraform(struct?: CcPipeline.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        result: {
            value: cdktn.stringToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules: {
            value: cdktn.listMapperHcl(ccPipelineRuleDeclarationPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RuleDeclarationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineBeforeEntryConditionsPropertyToTerraform(struct?: CcPipeline.BeforeEntryConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccPipelineConditionPropertyToTerraform, false)(struct!.conditions),
    }
}


export function ccPipelineBeforeEntryConditionsPropertyToHclTerraform(struct?: CcPipeline.BeforeEntryConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccPipelineConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConditionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineBlockerDeclarationPropertyToTerraform(struct?: CcPipeline.BlockerDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipelineBlockerDeclarationPropertyToHclTerraform(struct?: CcPipeline.BlockerDeclarationProperty | cdktn.IResolvable): any {
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


export function ccPipelineStagesOnFailureConditionsRulesInputArtifactsPropertyToTerraform(struct?: CcPipeline.StagesOnFailureConditionsRulesInputArtifactsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelineStagesOnFailureConditionsRulesInputArtifactsPropertyToHclTerraform(struct?: CcPipeline.StagesOnFailureConditionsRulesInputArtifactsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnFailureConditionsRulesRuleTypeIdPropertyToTerraform(struct?: CcPipeline.StagesOnFailureConditionsRulesRuleTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: cdktn.stringToTerraform(struct!.category),
        owner: cdktn.stringToTerraform(struct!.owner),
        provider: cdktn.stringToTerraform(struct!.provider),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccPipelineStagesOnFailureConditionsRulesRuleTypeIdPropertyToHclTerraform(struct?: CcPipeline.StagesOnFailureConditionsRulesRuleTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider: {
            value: cdktn.stringToHclTerraform(struct!.provider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnFailureConditionsRulesPropertyToTerraform(struct?: CcPipeline.StagesOnFailureConditionsRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
        configuration: cdktn.stringToTerraform(struct!.configuration),
        input_artifacts: cdktn.listMapper(ccPipelineStagesOnFailureConditionsRulesInputArtifactsPropertyToTerraform, false)(struct!.inputArtifacts),
        name: cdktn.stringToTerraform(struct!.name),
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        rule_type_id: ccPipelineStagesOnFailureConditionsRulesRuleTypeIdPropertyToTerraform(struct!.ruleTypeId),
    }
}


export function ccPipelineStagesOnFailureConditionsRulesPropertyToHclTerraform(struct?: CcPipeline.StagesOnFailureConditionsRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        commands: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        configuration: {
            value: cdktn.stringToHclTerraform(struct!.configuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_artifacts: {
            value: cdktn.listMapperHcl(ccPipelineStagesOnFailureConditionsRulesInputArtifactsPropertyToHclTerraform, false)(struct!.inputArtifacts),
            isBlock: true,
            type: "list",
            storageClassType: "StagesOnFailureConditionsRulesInputArtifactsPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        rule_type_id: {
            value: ccPipelineStagesOnFailureConditionsRulesRuleTypeIdPropertyToHclTerraform(struct!.ruleTypeId),
            isBlock: true,
            type: "struct",
            storageClassType: "StagesOnFailureConditionsRulesRuleTypeIdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnFailureConditionsPropertyToTerraform(struct?: CcPipeline.StagesOnFailureConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        result: cdktn.stringToTerraform(struct!.result),
        rules: cdktn.listMapper(ccPipelineStagesOnFailureConditionsRulesPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccPipelineStagesOnFailureConditionsPropertyToHclTerraform(struct?: CcPipeline.StagesOnFailureConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        result: {
            value: cdktn.stringToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules: {
            value: cdktn.listMapperHcl(ccPipelineStagesOnFailureConditionsRulesPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "StagesOnFailureConditionsRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineRetryConfigurationPropertyToTerraform(struct?: CcPipeline.RetryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retry_mode: cdktn.stringToTerraform(struct!.retryMode),
    }
}


export function ccPipelineRetryConfigurationPropertyToHclTerraform(struct?: CcPipeline.RetryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retry_mode: {
            value: cdktn.stringToHclTerraform(struct!.retryMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineFailureConditionsPropertyToTerraform(struct?: CcPipeline.FailureConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccPipelineStagesOnFailureConditionsPropertyToTerraform, false)(struct!.conditions),
        result: cdktn.stringToTerraform(struct!.result),
        retry_configuration: ccPipelineRetryConfigurationPropertyToTerraform(struct!.retryConfiguration),
    }
}


export function ccPipelineFailureConditionsPropertyToHclTerraform(struct?: CcPipeline.FailureConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccPipelineStagesOnFailureConditionsPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "StagesOnFailureConditionsPropertyList",
        },
        result: {
            value: cdktn.stringToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retry_configuration: {
            value: ccPipelineRetryConfigurationPropertyToHclTerraform(struct!.retryConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RetryConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnSuccessConditionsRulesInputArtifactsPropertyToTerraform(struct?: CcPipeline.StagesOnSuccessConditionsRulesInputArtifactsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelineStagesOnSuccessConditionsRulesInputArtifactsPropertyToHclTerraform(struct?: CcPipeline.StagesOnSuccessConditionsRulesInputArtifactsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnSuccessConditionsRulesRuleTypeIdPropertyToTerraform(struct?: CcPipeline.StagesOnSuccessConditionsRulesRuleTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: cdktn.stringToTerraform(struct!.category),
        owner: cdktn.stringToTerraform(struct!.owner),
        provider: cdktn.stringToTerraform(struct!.provider),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccPipelineStagesOnSuccessConditionsRulesRuleTypeIdPropertyToHclTerraform(struct?: CcPipeline.StagesOnSuccessConditionsRulesRuleTypeIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider: {
            value: cdktn.stringToHclTerraform(struct!.provider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnSuccessConditionsRulesPropertyToTerraform(struct?: CcPipeline.StagesOnSuccessConditionsRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
        configuration: cdktn.stringToTerraform(struct!.configuration),
        input_artifacts: cdktn.listMapper(ccPipelineStagesOnSuccessConditionsRulesInputArtifactsPropertyToTerraform, false)(struct!.inputArtifacts),
        name: cdktn.stringToTerraform(struct!.name),
        region: cdktn.stringToTerraform(struct!.region),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        rule_type_id: ccPipelineStagesOnSuccessConditionsRulesRuleTypeIdPropertyToTerraform(struct!.ruleTypeId),
    }
}


export function ccPipelineStagesOnSuccessConditionsRulesPropertyToHclTerraform(struct?: CcPipeline.StagesOnSuccessConditionsRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        commands: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        configuration: {
            value: cdktn.stringToHclTerraform(struct!.configuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_artifacts: {
            value: cdktn.listMapperHcl(ccPipelineStagesOnSuccessConditionsRulesInputArtifactsPropertyToHclTerraform, false)(struct!.inputArtifacts),
            isBlock: true,
            type: "list",
            storageClassType: "StagesOnSuccessConditionsRulesInputArtifactsPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        rule_type_id: {
            value: ccPipelineStagesOnSuccessConditionsRulesRuleTypeIdPropertyToHclTerraform(struct!.ruleTypeId),
            isBlock: true,
            type: "struct",
            storageClassType: "StagesOnSuccessConditionsRulesRuleTypeIdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStagesOnSuccessConditionsPropertyToTerraform(struct?: CcPipeline.StagesOnSuccessConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        result: cdktn.stringToTerraform(struct!.result),
        rules: cdktn.listMapper(ccPipelineStagesOnSuccessConditionsRulesPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccPipelineStagesOnSuccessConditionsPropertyToHclTerraform(struct?: CcPipeline.StagesOnSuccessConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        result: {
            value: cdktn.stringToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules: {
            value: cdktn.listMapperHcl(ccPipelineStagesOnSuccessConditionsRulesPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "StagesOnSuccessConditionsRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineSuccessConditionsPropertyToTerraform(struct?: CcPipeline.SuccessConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccPipelineStagesOnSuccessConditionsPropertyToTerraform, false)(struct!.conditions),
    }
}


export function ccPipelineSuccessConditionsPropertyToHclTerraform(struct?: CcPipeline.SuccessConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccPipelineStagesOnSuccessConditionsPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "StagesOnSuccessConditionsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineStageDeclarationPropertyToTerraform(struct?: CcPipeline.StageDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccPipelineActionDeclarationPropertyToTerraform, false)(struct!.actions),
        before_entry: ccPipelineBeforeEntryConditionsPropertyToTerraform(struct!.beforeEntry),
        blockers: cdktn.listMapper(ccPipelineBlockerDeclarationPropertyToTerraform, false)(struct!.blockers),
        name: cdktn.stringToTerraform(struct!.name),
        on_failure: ccPipelineFailureConditionsPropertyToTerraform(struct!.onFailure),
        on_success: ccPipelineSuccessConditionsPropertyToTerraform(struct!.onSuccess),
    }
}


export function ccPipelineStageDeclarationPropertyToHclTerraform(struct?: CcPipeline.StageDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccPipelineActionDeclarationPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "ActionDeclarationPropertyList",
        },
        before_entry: {
            value: ccPipelineBeforeEntryConditionsPropertyToHclTerraform(struct!.beforeEntry),
            isBlock: true,
            type: "struct",
            storageClassType: "BeforeEntryConditionsProperty",
        },
        blockers: {
            value: cdktn.listMapperHcl(ccPipelineBlockerDeclarationPropertyToHclTerraform, false)(struct!.blockers),
            isBlock: true,
            type: "list",
            storageClassType: "BlockerDeclarationPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_failure: {
            value: ccPipelineFailureConditionsPropertyToHclTerraform(struct!.onFailure),
            isBlock: true,
            type: "struct",
            storageClassType: "FailureConditionsProperty",
        },
        on_success: {
            value: ccPipelineSuccessConditionsPropertyToHclTerraform(struct!.onSuccess),
            isBlock: true,
            type: "struct",
            storageClassType: "SuccessConditionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineTagPropertyToTerraform(struct?: CcPipeline.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipelineTagPropertyToHclTerraform(struct?: CcPipeline.TagProperty | cdktn.IResolvable): any {
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


export function ccPipelineGitBranchFilterCriteriaPropertyToTerraform(struct?: CcPipeline.GitBranchFilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
        includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
    }
}


export function ccPipelineGitBranchFilterCriteriaPropertyToHclTerraform(struct?: CcPipeline.GitBranchFilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excludes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        includes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineGitFilePathFilterCriteriaPropertyToTerraform(struct?: CcPipeline.GitFilePathFilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
        includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
    }
}


export function ccPipelineGitFilePathFilterCriteriaPropertyToHclTerraform(struct?: CcPipeline.GitFilePathFilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excludes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        includes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineGitPullRequestFilterPropertyToTerraform(struct?: CcPipeline.GitPullRequestFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        branches: ccPipelineGitBranchFilterCriteriaPropertyToTerraform(struct!.branches),
        events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
        file_paths: ccPipelineGitFilePathFilterCriteriaPropertyToTerraform(struct!.filePaths),
    }
}


export function ccPipelineGitPullRequestFilterPropertyToHclTerraform(struct?: CcPipeline.GitPullRequestFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        branches: {
            value: ccPipelineGitBranchFilterCriteriaPropertyToHclTerraform(struct!.branches),
            isBlock: true,
            type: "struct",
            storageClassType: "GitBranchFilterCriteriaProperty",
        },
        events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        file_paths: {
            value: ccPipelineGitFilePathFilterCriteriaPropertyToHclTerraform(struct!.filePaths),
            isBlock: true,
            type: "struct",
            storageClassType: "GitFilePathFilterCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineBranchesPropertyToTerraform(struct?: CcPipeline.BranchesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
        includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
    }
}


export function ccPipelineBranchesPropertyToHclTerraform(struct?: CcPipeline.BranchesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excludes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        includes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineFilePathsPropertyToTerraform(struct?: CcPipeline.FilePathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
        includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
    }
}


export function ccPipelineFilePathsPropertyToHclTerraform(struct?: CcPipeline.FilePathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excludes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        includes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineGitTagFilterCriteriaPropertyToTerraform(struct?: CcPipeline.GitTagFilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
        includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
    }
}


export function ccPipelineGitTagFilterCriteriaPropertyToHclTerraform(struct?: CcPipeline.GitTagFilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excludes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        includes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineGitPushFilterPropertyToTerraform(struct?: CcPipeline.GitPushFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        branches: ccPipelineBranchesPropertyToTerraform(struct!.branches),
        file_paths: ccPipelineFilePathsPropertyToTerraform(struct!.filePaths),
        tags: ccPipelineGitTagFilterCriteriaPropertyToTerraform(struct!.tags),
    }
}


export function ccPipelineGitPushFilterPropertyToHclTerraform(struct?: CcPipeline.GitPushFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        branches: {
            value: ccPipelineBranchesPropertyToHclTerraform(struct!.branches),
            isBlock: true,
            type: "struct",
            storageClassType: "BranchesProperty",
        },
        file_paths: {
            value: ccPipelineFilePathsPropertyToHclTerraform(struct!.filePaths),
            isBlock: true,
            type: "struct",
            storageClassType: "FilePathsProperty",
        },
        tags: {
            value: ccPipelineGitTagFilterCriteriaPropertyToHclTerraform(struct!.tags),
            isBlock: true,
            type: "struct",
            storageClassType: "GitTagFilterCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineGitConfigurationPropertyToTerraform(struct?: CcPipeline.GitConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pull_request: cdktn.listMapper(ccPipelineGitPullRequestFilterPropertyToTerraform, false)(struct!.pullRequest),
        push: cdktn.listMapper(ccPipelineGitPushFilterPropertyToTerraform, false)(struct!.push),
        source_action_name: cdktn.stringToTerraform(struct!.sourceActionName),
    }
}


export function ccPipelineGitConfigurationPropertyToHclTerraform(struct?: CcPipeline.GitConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pull_request: {
            value: cdktn.listMapperHcl(ccPipelineGitPullRequestFilterPropertyToHclTerraform, false)(struct!.pullRequest),
            isBlock: true,
            type: "list",
            storageClassType: "GitPullRequestFilterPropertyList",
        },
        push: {
            value: cdktn.listMapperHcl(ccPipelineGitPushFilterPropertyToHclTerraform, false)(struct!.push),
            isBlock: true,
            type: "list",
            storageClassType: "GitPushFilterPropertyList",
        },
        source_action_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceActionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelinePipelineTriggerDeclarationPropertyToTerraform(struct?: CcPipeline.PipelineTriggerDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        git_configuration: ccPipelineGitConfigurationPropertyToTerraform(struct!.gitConfiguration),
        provider_type: cdktn.stringToTerraform(struct!.providerType),
    }
}


export function ccPipelinePipelineTriggerDeclarationPropertyToHclTerraform(struct?: CcPipeline.PipelineTriggerDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        git_configuration: {
            value: ccPipelineGitConfigurationPropertyToHclTerraform(struct!.gitConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "GitConfigurationProperty",
        },
        provider_type: {
            value: cdktn.stringToHclTerraform(struct!.providerType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineVariableDeclarationPropertyToTerraform(struct?: CcPipeline.VariableDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelineVariableDeclarationPropertyToHclTerraform(struct?: CcPipeline.VariableDeclarationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPipeline {
export interface EncryptionKeyProperty {
    /**
    * The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#id CcPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#type CcPipeline#type}
    */
    readonly type?: string;
}
export class EncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._type = value.type;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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
export interface ArtifactStoreProperty {
    /**
    * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#encryption_key CcPipeline#encryption_key}
    */
    readonly encryptionKey?: EncryptionKeyProperty;
    /**
    * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#location CcPipeline#location}
    */
    readonly location?: string;
    /**
    * The type of the artifact store, such as S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#type CcPipeline#type}
    */
    readonly type?: string;
}
export class ArtifactStorePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArtifactStoreProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
        }
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArtifactStoreProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = undefined;
            this._location = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = value.encryptionKey;
            this._location = value.location;
            this._type = value.type;
        }
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new EncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: EncryptionKeyProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }

    // location - computed: true, optional: true, required: false
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    public resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
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
export interface ArtifactStoresArtifactStoreEncryptionKeyProperty {
    /**
    * The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#id CcPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#type CcPipeline#type}
    */
    readonly type?: string;
}
export class ArtifactStoresArtifactStoreEncryptionKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArtifactStoresArtifactStoreEncryptionKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArtifactStoresArtifactStoreEncryptionKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._type = value.type;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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
export interface ArtifactStoresArtifactStoreProperty {
    /**
    * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#encryption_key CcPipeline#encryption_key}
    */
    readonly encryptionKey?: ArtifactStoresArtifactStoreEncryptionKeyProperty;
    /**
    * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#location CcPipeline#location}
    */
    readonly location?: string;
    /**
    * The type of the artifact store, such as S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#type CcPipeline#type}
    */
    readonly type?: string;
}
export class ArtifactStoresArtifactStorePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArtifactStoresArtifactStoreProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
        }
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArtifactStoresArtifactStoreProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = undefined;
            this._location = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKey.internalValue = value.encryptionKey;
            this._location = value.location;
            this._type = value.type;
        }
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey = new ArtifactStoresArtifactStoreEncryptionKeyPropertyOutputReference(this, "encryption_key");
    public get encryptionKey() {
        return this._encryptionKey;
    }
    public putEncryptionKey(value: ArtifactStoresArtifactStoreEncryptionKeyProperty) {
        this._encryptionKey.internalValue = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey.internalValue;
    }

    // location - computed: true, optional: true, required: false
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    public resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
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
export interface ArtifactStoreMapProperty {
    /**
    * The S3 bucket where artifacts for the pipeline are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#artifact_store CcPipeline#artifact_store}
    */
    readonly artifactStore?: ArtifactStoresArtifactStoreProperty;
    /**
    * The action declaration's AWS Region, such as us-east-1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#region CcPipeline#region}
    */
    readonly region?: string;
}
export class ArtifactStoreMapPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ArtifactStoreMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._artifactStore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.artifactStore = this._artifactStore?.internalValue;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArtifactStoreMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._artifactStore.internalValue = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._artifactStore.internalValue = value.artifactStore;
            this._region = value.region;
        }
    }

    // artifact_store - computed: true, optional: true, required: false
    private _artifactStore = new ArtifactStoresArtifactStorePropertyOutputReference(this, "artifact_store");
    public get artifactStore() {
        return this._artifactStore;
    }
    public putArtifactStore(value: ArtifactStoresArtifactStoreProperty) {
        this._artifactStore.internalValue = value;
    }
    public resetArtifactStore() {
        this._artifactStore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactStoreInput() {
        return this._artifactStore.internalValue;
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
}

export class ArtifactStoreMapPropertyList extends cdktn.ComplexList {
    public internalValue? : ArtifactStoreMapProperty[] | cdktn.IResolvable

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
    public get(index: number): ArtifactStoreMapPropertyOutputReference {
        return new ArtifactStoreMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StageTransitionProperty {
    /**
    * The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#reason CcPipeline#reason}
    */
    readonly reason?: string;
    /**
    * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#stage_name CcPipeline#stage_name}
    */
    readonly stageName?: string;
}
export class StageTransitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StageTransitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reason !== undefined) {
            hasAnyValues = true;
            internalValueResult.reason = this._reason;
        }
        if (this._stageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.stageName = this._stageName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StageTransitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reason = undefined;
            this._stageName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reason = value.reason;
            this._stageName = value.stageName;
        }
    }

    // reason - computed: true, optional: true, required: false
    private _reason?: string; 
    public get reason() {
        return this.getStringAttribute('reason');
    }
    public set reason(value: string) {
        this._reason = value;
    }
    public resetReason() {
        this._reason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reasonInput() {
        return this._reason;
    }

    // stage_name - computed: true, optional: true, required: false
    private _stageName?: string; 
    public get stageName() {
        return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string) {
        this._stageName = value;
    }
    public resetStageName() {
        this._stageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
        return this._stageName;
    }
}

export class StageTransitionPropertyList extends cdktn.ComplexList {
    public internalValue? : StageTransitionProperty[] | cdktn.IResolvable

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
    public get(index: number): StageTransitionPropertyOutputReference {
        return new StageTransitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ActionTypeIdProperty {
    /**
    * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#category CcPipeline#category}
    */
    readonly category: string;
    /**
    * The creator of the action being called. There are three valid values for the Owner field in the action category section within your pipeline structure: AWS, ThirdParty, and Custom.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#owner CcPipeline#owner}
    */
    readonly owner: string;
    /**
    * The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as CodeDeploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#provider CcPipeline#provider}
    */
    readonly provider: string;
    /**
    * A string that describes the action version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#version CcPipeline#version}
    */
    readonly version: string;
}
export class ActionTypeIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionTypeIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._provider !== undefined) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionTypeIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category = undefined;
            this._owner = undefined;
            this._provider = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category = value.category;
            this._owner = value.owner;
            this._provider = value.provider;
            this._version = value.version;
        }
    }

    // category - computed: false, optional: false, required: true
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // provider - computed: false, optional: false, required: true
    private _provider?: string; 
    public get provider() {
        return this.getStringAttribute('provider');
    }
    public set provider(value: string) {
        this._provider = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
        return this._provider;
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface EnvironmentVariableProperty {
    /**
    * The name of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
    /**
    * The type of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#type CcPipeline#type}
    */
    readonly type?: string;
    /**
    * The value of the environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#value CcPipeline#value}
    */
    readonly value?: string;
}
export class EnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnvironmentVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnvironmentVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
            this._value = value.value;
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

export class EnvironmentVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : EnvironmentVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): EnvironmentVariablePropertyOutputReference {
        return new EnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputArtifactProperty {
    /**
    * The name of the artifact to be worked on (for example, "My App").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class InputArtifactPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputArtifactProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputArtifactProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class InputArtifactPropertyList extends cdktn.ComplexList {
    public internalValue? : InputArtifactProperty[] | cdktn.IResolvable

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
    public get(index: number): InputArtifactPropertyOutputReference {
        return new InputArtifactPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OutputArtifactProperty {
    /**
    * The files that you want to associate with the output artifact that will be exported from the compute action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#files CcPipeline#files}
    */
    readonly files?: string[];
    /**
    * The name of the output of an artifact, such as "My App".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class OutputArtifactPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OutputArtifactProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._files !== undefined) {
            hasAnyValues = true;
            internalValueResult.files = this._files;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputArtifactProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._files = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._files = value.files;
            this._name = value.name;
        }
    }

    // files - computed: true, optional: true, required: false
    private _files?: string[]; 
    public get files() {
        return this.getListAttribute('files');
    }
    public set files(value: string[]) {
        this._files = value;
    }
    public resetFiles() {
        this._files = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesInput() {
        return this._files;
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
}

export class OutputArtifactPropertyList extends cdktn.ComplexList {
    public internalValue? : OutputArtifactProperty[] | cdktn.IResolvable

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
    public get(index: number): OutputArtifactPropertyOutputReference {
        return new OutputArtifactPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ActionDeclarationProperty {
    /**
    * Represents information about an action type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#action_type_id CcPipeline#action_type_id}
    */
    readonly actionTypeId: ActionTypeIdProperty;
    /**
    * The shell commands to run with your compute action in CodePipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#commands CcPipeline#commands}
    */
    readonly commands?: string[];
    /**
    * The action's configuration. These are key-value pairs that specify input values for an action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#configuration CcPipeline#configuration}
    */
    readonly configuration?: string;
    /**
    * The list of environment variables that are input to a compute based action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#environment_variables CcPipeline#environment_variables}
    */
    readonly environmentVariables?: EnvironmentVariableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#input_artifacts CcPipeline#input_artifacts}
    */
    readonly inputArtifacts?: InputArtifactProperty[] | cdktn.IResolvable;
    /**
    * The action declaration's name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name: string;
    /**
    * The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#namespace CcPipeline#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#output_artifacts CcPipeline#output_artifacts}
    */
    readonly outputArtifacts?: OutputArtifactProperty[] | cdktn.IResolvable;
    /**
    * The list of variables that are to be exported from the compute action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#output_variables CcPipeline#output_variables}
    */
    readonly outputVariables?: string[];
    /**
    * The action declaration's AWS Region, such as us-east-1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#region CcPipeline#region}
    */
    readonly region?: string;
    /**
    * The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#role_arn CcPipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The order in which actions are run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#run_order CcPipeline#run_order}
    */
    readonly runOrder?: number;
    /**
    * A timeout duration in minutes that can be applied against the ActionType?s default timeout value specified in Quotas for AWS CodePipeline. This attribute is available only to the manual approval ActionType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#timeout_in_minutes CcPipeline#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
}
export class ActionDeclarationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionDeclarationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionTypeId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionTypeId = this._actionTypeId?.internalValue;
        }
        if (this._commands !== undefined) {
            hasAnyValues = true;
            internalValueResult.commands = this._commands;
        }
        if (this._configuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration;
        }
        if (this._environmentVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables?.internalValue;
        }
        if (this._inputArtifacts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._outputArtifacts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputArtifacts = this._outputArtifacts?.internalValue;
        }
        if (this._outputVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputVariables = this._outputVariables;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._runOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.runOrder = this._runOrder;
        }
        if (this._timeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionDeclarationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionTypeId.internalValue = undefined;
            this._commands = undefined;
            this._configuration = undefined;
            this._environmentVariables.internalValue = undefined;
            this._inputArtifacts.internalValue = undefined;
            this._name = undefined;
            this._namespace = undefined;
            this._outputArtifacts.internalValue = undefined;
            this._outputVariables = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._runOrder = undefined;
            this._timeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionTypeId.internalValue = value.actionTypeId;
            this._commands = value.commands;
            this._configuration = value.configuration;
            this._environmentVariables.internalValue = value.environmentVariables;
            this._inputArtifacts.internalValue = value.inputArtifacts;
            this._name = value.name;
            this._namespace = value.namespace;
            this._outputArtifacts.internalValue = value.outputArtifacts;
            this._outputVariables = value.outputVariables;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._runOrder = value.runOrder;
            this._timeoutInMinutes = value.timeoutInMinutes;
        }
    }

    // action_type_id - computed: false, optional: false, required: true
    private _actionTypeId = new ActionTypeIdPropertyOutputReference(this, "action_type_id");
    public get actionTypeId() {
        return this._actionTypeId;
    }
    public putActionTypeId(value: ActionTypeIdProperty) {
        this._actionTypeId.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionTypeIdInput() {
        return this._actionTypeId.internalValue;
    }

    // commands - computed: true, optional: true, required: false
    private _commands?: string[]; 
    public get commands() {
        return this.getListAttribute('commands');
    }
    public set commands(value: string[]) {
        this._commands = value;
    }
    public resetCommands() {
        this._commands = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandsInput() {
        return this._commands;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables = new EnvironmentVariablePropertyList(this, "environment_variables", false);
    public get environmentVariables() {
        return this._environmentVariables;
    }
    public putEnvironmentVariables(value: EnvironmentVariableProperty[] | cdktn.IResolvable) {
        this._environmentVariables.internalValue = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables.internalValue;
    }

    // input_artifacts - computed: true, optional: true, required: false
    private _inputArtifacts = new InputArtifactPropertyList(this, "input_artifacts", false);
    public get inputArtifacts() {
        return this._inputArtifacts;
    }
    public putInputArtifacts(value: InputArtifactProperty[] | cdktn.IResolvable) {
        this._inputArtifacts.internalValue = value;
    }
    public resetInputArtifacts() {
        this._inputArtifacts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputArtifactsInput() {
        return this._inputArtifacts.internalValue;
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

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // output_artifacts - computed: true, optional: true, required: false
    private _outputArtifacts = new OutputArtifactPropertyList(this, "output_artifacts", false);
    public get outputArtifacts() {
        return this._outputArtifacts;
    }
    public putOutputArtifacts(value: OutputArtifactProperty[] | cdktn.IResolvable) {
        this._outputArtifacts.internalValue = value;
    }
    public resetOutputArtifacts() {
        this._outputArtifacts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputArtifactsInput() {
        return this._outputArtifacts.internalValue;
    }

    // output_variables - computed: true, optional: true, required: false
    private _outputVariables?: string[]; 
    public get outputVariables() {
        return this.getListAttribute('output_variables');
    }
    public set outputVariables(value: string[]) {
        this._outputVariables = value;
    }
    public resetOutputVariables() {
        this._outputVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputVariablesInput() {
        return this._outputVariables;
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

    // run_order - computed: true, optional: true, required: false
    private _runOrder?: number; 
    public get runOrder() {
        return this.getNumberAttribute('run_order');
    }
    public set runOrder(value: number) {
        this._runOrder = value;
    }
    public resetRunOrder() {
        this._runOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runOrderInput() {
        return this._runOrder;
    }

    // timeout_in_minutes - computed: true, optional: true, required: false
    private _timeoutInMinutes?: number; 
    public get timeoutInMinutes() {
        return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number) {
        this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
        this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
        return this._timeoutInMinutes;
    }
}

export class ActionDeclarationPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionDeclarationProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionDeclarationPropertyOutputReference {
        return new ActionDeclarationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StagesBeforeEntryConditionsRulesInputArtifactsProperty {
    /**
    * The name of the artifact to be worked on (for example, "My App").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class StagesBeforeEntryConditionsRulesInputArtifactsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesBeforeEntryConditionsRulesInputArtifactsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesBeforeEntryConditionsRulesInputArtifactsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class StagesBeforeEntryConditionsRulesInputArtifactsPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesBeforeEntryConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesBeforeEntryConditionsRulesInputArtifactsPropertyOutputReference {
        return new StagesBeforeEntryConditionsRulesInputArtifactsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuleTypeIdProperty {
    /**
    * A category for the provider type for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#category CcPipeline#category}
    */
    readonly category?: string;
    /**
    * The creator of the rule being called. Only AWS is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#owner CcPipeline#owner}
    */
    readonly owner?: string;
    /**
    * The provider of the service being called by the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#provider CcPipeline#provider}
    */
    readonly provider?: string;
    /**
    * A string that describes the rule version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#version CcPipeline#version}
    */
    readonly version?: string;
}
export class RuleTypeIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleTypeIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._provider !== undefined) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleTypeIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category = undefined;
            this._owner = undefined;
            this._provider = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category = value.category;
            this._owner = value.owner;
            this._provider = value.provider;
            this._version = value.version;
        }
    }

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // provider - computed: true, optional: true, required: false
    private _provider?: string; 
    public get provider() {
        return this.getStringAttribute('provider');
    }
    public set provider(value: string) {
        this._provider = value;
    }
    public resetProvider() {
        this._provider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
        return this._provider;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface RuleDeclarationProperty {
    /**
    * The shell commands to run with your compute action in CodePipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#commands CcPipeline#commands}
    */
    readonly commands?: string[];
    /**
    * The rule's configuration. These are key-value pairs that specify input values for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#configuration CcPipeline#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#input_artifacts CcPipeline#input_artifacts}
    */
    readonly inputArtifacts?: StagesBeforeEntryConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable;
    /**
    * The rule declaration's name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
    /**
    * The rule declaration's AWS Region, such as us-east-1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#region CcPipeline#region}
    */
    readonly region?: string;
    /**
    * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#role_arn CcPipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Represents information about a rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#rule_type_id CcPipeline#rule_type_id}
    */
    readonly ruleTypeId?: RuleTypeIdProperty;
}
export class RuleDeclarationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleDeclarationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commands !== undefined) {
            hasAnyValues = true;
            internalValueResult.commands = this._commands;
        }
        if (this._configuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration;
        }
        if (this._inputArtifacts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._ruleTypeId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleDeclarationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commands = undefined;
            this._configuration = undefined;
            this._inputArtifacts.internalValue = undefined;
            this._name = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._ruleTypeId.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commands = value.commands;
            this._configuration = value.configuration;
            this._inputArtifacts.internalValue = value.inputArtifacts;
            this._name = value.name;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._ruleTypeId.internalValue = value.ruleTypeId;
        }
    }

    // commands - computed: true, optional: true, required: false
    private _commands?: string[]; 
    public get commands() {
        return this.getListAttribute('commands');
    }
    public set commands(value: string[]) {
        this._commands = value;
    }
    public resetCommands() {
        this._commands = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandsInput() {
        return this._commands;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // input_artifacts - computed: true, optional: true, required: false
    private _inputArtifacts = new StagesBeforeEntryConditionsRulesInputArtifactsPropertyList(this, "input_artifacts", false);
    public get inputArtifacts() {
        return this._inputArtifacts;
    }
    public putInputArtifacts(value: StagesBeforeEntryConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable) {
        this._inputArtifacts.internalValue = value;
    }
    public resetInputArtifacts() {
        this._inputArtifacts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputArtifactsInput() {
        return this._inputArtifacts.internalValue;
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

    // rule_type_id - computed: true, optional: true, required: false
    private _ruleTypeId = new RuleTypeIdPropertyOutputReference(this, "rule_type_id");
    public get ruleTypeId() {
        return this._ruleTypeId;
    }
    public putRuleTypeId(value: RuleTypeIdProperty) {
        this._ruleTypeId.internalValue = value;
    }
    public resetRuleTypeId() {
        this._ruleTypeId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeIdInput() {
        return this._ruleTypeId.internalValue;
    }
}

export class RuleDeclarationPropertyList extends cdktn.ComplexList {
    public internalValue? : RuleDeclarationProperty[] | cdktn.IResolvable

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
    public get(index: number): RuleDeclarationPropertyOutputReference {
        return new RuleDeclarationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConditionProperty {
    /**
    * The specified result for when the failure conditions are met, such as rolling back the stage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#result CcPipeline#result}
    */
    readonly result?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#rules CcPipeline#rules}
    */
    readonly rules?: RuleDeclarationProperty[] | cdktn.IResolvable;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._result = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._result = value.result;
            this._rules.internalValue = value.rules;
        }
    }

    // result - computed: true, optional: true, required: false
    private _result?: string; 
    public get result() {
        return this.getStringAttribute('result');
    }
    public set result(value: string) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new RuleDeclarationPropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: RuleDeclarationProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}

export class ConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BeforeEntryConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#conditions CcPipeline#conditions}
    */
    readonly conditions?: ConditionProperty[] | cdktn.IResolvable;
}
export class BeforeEntryConditionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BeforeEntryConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BeforeEntryConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new ConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }
}
export interface BlockerDeclarationProperty {
    /**
    * Reserved for future use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
    /**
    * Reserved for future use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#type CcPipeline#type}
    */
    readonly type?: string;
}
export class BlockerDeclarationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BlockerDeclarationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlockerDeclarationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
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

export class BlockerDeclarationPropertyList extends cdktn.ComplexList {
    public internalValue? : BlockerDeclarationProperty[] | cdktn.IResolvable

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
    public get(index: number): BlockerDeclarationPropertyOutputReference {
        return new BlockerDeclarationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StagesOnFailureConditionsRulesInputArtifactsProperty {
    /**
    * The name of the artifact to be worked on (for example, "My App").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class StagesOnFailureConditionsRulesInputArtifactsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesOnFailureConditionsRulesInputArtifactsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnFailureConditionsRulesInputArtifactsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class StagesOnFailureConditionsRulesInputArtifactsPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesOnFailureConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesOnFailureConditionsRulesInputArtifactsPropertyOutputReference {
        return new StagesOnFailureConditionsRulesInputArtifactsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StagesOnFailureConditionsRulesRuleTypeIdProperty {
    /**
    * A category for the provider type for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#category CcPipeline#category}
    */
    readonly category?: string;
    /**
    * The creator of the rule being called. Only AWS is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#owner CcPipeline#owner}
    */
    readonly owner?: string;
    /**
    * The provider of the service being called by the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#provider CcPipeline#provider}
    */
    readonly provider?: string;
    /**
    * A string that describes the rule version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#version CcPipeline#version}
    */
    readonly version?: string;
}
export class StagesOnFailureConditionsRulesRuleTypeIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StagesOnFailureConditionsRulesRuleTypeIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._provider !== undefined) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnFailureConditionsRulesRuleTypeIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category = undefined;
            this._owner = undefined;
            this._provider = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category = value.category;
            this._owner = value.owner;
            this._provider = value.provider;
            this._version = value.version;
        }
    }

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // provider - computed: true, optional: true, required: false
    private _provider?: string; 
    public get provider() {
        return this.getStringAttribute('provider');
    }
    public set provider(value: string) {
        this._provider = value;
    }
    public resetProvider() {
        this._provider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
        return this._provider;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface StagesOnFailureConditionsRulesProperty {
    /**
    * The shell commands to run with your compute action in CodePipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#commands CcPipeline#commands}
    */
    readonly commands?: string[];
    /**
    * The rule's configuration. These are key-value pairs that specify input values for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#configuration CcPipeline#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#input_artifacts CcPipeline#input_artifacts}
    */
    readonly inputArtifacts?: StagesOnFailureConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable;
    /**
    * The rule declaration's name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
    /**
    * The rule declaration's AWS Region, such as us-east-1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#region CcPipeline#region}
    */
    readonly region?: string;
    /**
    * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#role_arn CcPipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Represents information about a rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#rule_type_id CcPipeline#rule_type_id}
    */
    readonly ruleTypeId?: StagesOnFailureConditionsRulesRuleTypeIdProperty;
}
export class StagesOnFailureConditionsRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesOnFailureConditionsRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commands !== undefined) {
            hasAnyValues = true;
            internalValueResult.commands = this._commands;
        }
        if (this._configuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration;
        }
        if (this._inputArtifacts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._ruleTypeId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnFailureConditionsRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commands = undefined;
            this._configuration = undefined;
            this._inputArtifacts.internalValue = undefined;
            this._name = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._ruleTypeId.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commands = value.commands;
            this._configuration = value.configuration;
            this._inputArtifacts.internalValue = value.inputArtifacts;
            this._name = value.name;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._ruleTypeId.internalValue = value.ruleTypeId;
        }
    }

    // commands - computed: true, optional: true, required: false
    private _commands?: string[]; 
    public get commands() {
        return this.getListAttribute('commands');
    }
    public set commands(value: string[]) {
        this._commands = value;
    }
    public resetCommands() {
        this._commands = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandsInput() {
        return this._commands;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // input_artifacts - computed: true, optional: true, required: false
    private _inputArtifacts = new StagesOnFailureConditionsRulesInputArtifactsPropertyList(this, "input_artifacts", false);
    public get inputArtifacts() {
        return this._inputArtifacts;
    }
    public putInputArtifacts(value: StagesOnFailureConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable) {
        this._inputArtifacts.internalValue = value;
    }
    public resetInputArtifacts() {
        this._inputArtifacts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputArtifactsInput() {
        return this._inputArtifacts.internalValue;
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

    // rule_type_id - computed: true, optional: true, required: false
    private _ruleTypeId = new StagesOnFailureConditionsRulesRuleTypeIdPropertyOutputReference(this, "rule_type_id");
    public get ruleTypeId() {
        return this._ruleTypeId;
    }
    public putRuleTypeId(value: StagesOnFailureConditionsRulesRuleTypeIdProperty) {
        this._ruleTypeId.internalValue = value;
    }
    public resetRuleTypeId() {
        this._ruleTypeId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeIdInput() {
        return this._ruleTypeId.internalValue;
    }
}

export class StagesOnFailureConditionsRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesOnFailureConditionsRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesOnFailureConditionsRulesPropertyOutputReference {
        return new StagesOnFailureConditionsRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StagesOnFailureConditionsProperty {
    /**
    * The specified result for when the failure conditions are met, such as rolling back the stage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#result CcPipeline#result}
    */
    readonly result?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#rules CcPipeline#rules}
    */
    readonly rules?: StagesOnFailureConditionsRulesProperty[] | cdktn.IResolvable;
}
export class StagesOnFailureConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesOnFailureConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnFailureConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._result = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._result = value.result;
            this._rules.internalValue = value.rules;
        }
    }

    // result - computed: true, optional: true, required: false
    private _result?: string; 
    public get result() {
        return this.getStringAttribute('result');
    }
    public set result(value: string) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new StagesOnFailureConditionsRulesPropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: StagesOnFailureConditionsRulesProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}

export class StagesOnFailureConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesOnFailureConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesOnFailureConditionsPropertyOutputReference {
        return new StagesOnFailureConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RetryConfigurationProperty {
    /**
    * The specified retry mode type for the given stage. FAILED_ACTIONS will retry only the failed actions. ALL_ACTIONS will retry both failed and successful
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#retry_mode CcPipeline#retry_mode}
    */
    readonly retryMode?: string;
}
export class RetryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retryMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryMode = this._retryMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retryMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retryMode = value.retryMode;
        }
    }

    // retry_mode - computed: true, optional: true, required: false
    private _retryMode?: string; 
    public get retryMode() {
        return this.getStringAttribute('retry_mode');
    }
    public set retryMode(value: string) {
        this._retryMode = value;
    }
    public resetRetryMode() {
        this._retryMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryModeInput() {
        return this._retryMode;
    }
}
export interface FailureConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#conditions CcPipeline#conditions}
    */
    readonly conditions?: StagesOnFailureConditionsProperty[] | cdktn.IResolvable;
    /**
    * The specified result for when the failure conditions are met, such as rolling back the stage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#result CcPipeline#result}
    */
    readonly result?: string;
    /**
    * The configuration that specifies the retry configuration for a stage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#retry_configuration CcPipeline#retry_configuration}
    */
    readonly retryConfiguration?: RetryConfigurationProperty;
}
export class FailureConditionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FailureConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        if (this._retryConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryConfiguration = this._retryConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailureConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
            this._result = undefined;
            this._retryConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
            this._result = value.result;
            this._retryConfiguration.internalValue = value.retryConfiguration;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new StagesOnFailureConditionsPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: StagesOnFailureConditionsProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // result - computed: true, optional: true, required: false
    private _result?: string; 
    public get result() {
        return this.getStringAttribute('result');
    }
    public set result(value: string) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }

    // retry_configuration - computed: true, optional: true, required: false
    private _retryConfiguration = new RetryConfigurationPropertyOutputReference(this, "retry_configuration");
    public get retryConfiguration() {
        return this._retryConfiguration;
    }
    public putRetryConfiguration(value: RetryConfigurationProperty) {
        this._retryConfiguration.internalValue = value;
    }
    public resetRetryConfiguration() {
        this._retryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryConfigurationInput() {
        return this._retryConfiguration.internalValue;
    }
}
export interface StagesOnSuccessConditionsRulesInputArtifactsProperty {
    /**
    * The name of the artifact to be worked on (for example, "My App").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class StagesOnSuccessConditionsRulesInputArtifactsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesOnSuccessConditionsRulesInputArtifactsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnSuccessConditionsRulesInputArtifactsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class StagesOnSuccessConditionsRulesInputArtifactsPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesOnSuccessConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesOnSuccessConditionsRulesInputArtifactsPropertyOutputReference {
        return new StagesOnSuccessConditionsRulesInputArtifactsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StagesOnSuccessConditionsRulesRuleTypeIdProperty {
    /**
    * A category for the provider type for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#category CcPipeline#category}
    */
    readonly category?: string;
    /**
    * The creator of the rule being called. Only AWS is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#owner CcPipeline#owner}
    */
    readonly owner?: string;
    /**
    * The provider of the service being called by the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#provider CcPipeline#provider}
    */
    readonly provider?: string;
    /**
    * A string that describes the rule version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#version CcPipeline#version}
    */
    readonly version?: string;
}
export class StagesOnSuccessConditionsRulesRuleTypeIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StagesOnSuccessConditionsRulesRuleTypeIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._provider !== undefined) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnSuccessConditionsRulesRuleTypeIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category = undefined;
            this._owner = undefined;
            this._provider = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category = value.category;
            this._owner = value.owner;
            this._provider = value.provider;
            this._version = value.version;
        }
    }

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // provider - computed: true, optional: true, required: false
    private _provider?: string; 
    public get provider() {
        return this.getStringAttribute('provider');
    }
    public set provider(value: string) {
        this._provider = value;
    }
    public resetProvider() {
        this._provider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
        return this._provider;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface StagesOnSuccessConditionsRulesProperty {
    /**
    * The shell commands to run with your compute action in CodePipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#commands CcPipeline#commands}
    */
    readonly commands?: string[];
    /**
    * The rule's configuration. These are key-value pairs that specify input values for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#configuration CcPipeline#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#input_artifacts CcPipeline#input_artifacts}
    */
    readonly inputArtifacts?: StagesOnSuccessConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable;
    /**
    * The rule declaration's name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
    /**
    * The rule declaration's AWS Region, such as us-east-1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#region CcPipeline#region}
    */
    readonly region?: string;
    /**
    * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#role_arn CcPipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Represents information about a rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#rule_type_id CcPipeline#rule_type_id}
    */
    readonly ruleTypeId?: StagesOnSuccessConditionsRulesRuleTypeIdProperty;
}
export class StagesOnSuccessConditionsRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesOnSuccessConditionsRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commands !== undefined) {
            hasAnyValues = true;
            internalValueResult.commands = this._commands;
        }
        if (this._configuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration;
        }
        if (this._inputArtifacts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._ruleTypeId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnSuccessConditionsRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commands = undefined;
            this._configuration = undefined;
            this._inputArtifacts.internalValue = undefined;
            this._name = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._ruleTypeId.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commands = value.commands;
            this._configuration = value.configuration;
            this._inputArtifacts.internalValue = value.inputArtifacts;
            this._name = value.name;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._ruleTypeId.internalValue = value.ruleTypeId;
        }
    }

    // commands - computed: true, optional: true, required: false
    private _commands?: string[]; 
    public get commands() {
        return this.getListAttribute('commands');
    }
    public set commands(value: string[]) {
        this._commands = value;
    }
    public resetCommands() {
        this._commands = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandsInput() {
        return this._commands;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // input_artifacts - computed: true, optional: true, required: false
    private _inputArtifacts = new StagesOnSuccessConditionsRulesInputArtifactsPropertyList(this, "input_artifacts", false);
    public get inputArtifacts() {
        return this._inputArtifacts;
    }
    public putInputArtifacts(value: StagesOnSuccessConditionsRulesInputArtifactsProperty[] | cdktn.IResolvable) {
        this._inputArtifacts.internalValue = value;
    }
    public resetInputArtifacts() {
        this._inputArtifacts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputArtifactsInput() {
        return this._inputArtifacts.internalValue;
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

    // rule_type_id - computed: true, optional: true, required: false
    private _ruleTypeId = new StagesOnSuccessConditionsRulesRuleTypeIdPropertyOutputReference(this, "rule_type_id");
    public get ruleTypeId() {
        return this._ruleTypeId;
    }
    public putRuleTypeId(value: StagesOnSuccessConditionsRulesRuleTypeIdProperty) {
        this._ruleTypeId.internalValue = value;
    }
    public resetRuleTypeId() {
        this._ruleTypeId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeIdInput() {
        return this._ruleTypeId.internalValue;
    }
}

export class StagesOnSuccessConditionsRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesOnSuccessConditionsRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesOnSuccessConditionsRulesPropertyOutputReference {
        return new StagesOnSuccessConditionsRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StagesOnSuccessConditionsProperty {
    /**
    * The specified result for when the failure conditions are met, such as rolling back the stage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#result CcPipeline#result}
    */
    readonly result?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#rules CcPipeline#rules}
    */
    readonly rules?: StagesOnSuccessConditionsRulesProperty[] | cdktn.IResolvable;
}
export class StagesOnSuccessConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StagesOnSuccessConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StagesOnSuccessConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._result = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._result = value.result;
            this._rules.internalValue = value.rules;
        }
    }

    // result - computed: true, optional: true, required: false
    private _result?: string; 
    public get result() {
        return this.getStringAttribute('result');
    }
    public set result(value: string) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new StagesOnSuccessConditionsRulesPropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: StagesOnSuccessConditionsRulesProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}

export class StagesOnSuccessConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : StagesOnSuccessConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): StagesOnSuccessConditionsPropertyOutputReference {
        return new StagesOnSuccessConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SuccessConditionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#conditions CcPipeline#conditions}
    */
    readonly conditions?: StagesOnSuccessConditionsProperty[] | cdktn.IResolvable;
}
export class SuccessConditionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuccessConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuccessConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new StagesOnSuccessConditionsPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: StagesOnSuccessConditionsProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }
}
export interface StageDeclarationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#actions CcPipeline#actions}
    */
    readonly actions: ActionDeclarationProperty[] | cdktn.IResolvable;
    /**
    * The method to use before stage runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#before_entry CcPipeline#before_entry}
    */
    readonly beforeEntry?: BeforeEntryConditionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#blockers CcPipeline#blockers}
    */
    readonly blockers?: BlockerDeclarationProperty[] | cdktn.IResolvable;
    /**
    * The name of the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name: string;
    /**
    * The method to use when a stage has not completed successfully
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#on_failure CcPipeline#on_failure}
    */
    readonly onFailure?: FailureConditionsProperty;
    /**
    * The method to use when a stage has completed successfully
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#on_success CcPipeline#on_success}
    */
    readonly onSuccess?: SuccessConditionsProperty;
}
export class StageDeclarationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StageDeclarationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._beforeEntry?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.beforeEntry = this._beforeEntry?.internalValue;
        }
        if (this._blockers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockers = this._blockers?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._onFailure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onFailure = this._onFailure?.internalValue;
        }
        if (this._onSuccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onSuccess = this._onSuccess?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StageDeclarationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._beforeEntry.internalValue = undefined;
            this._blockers.internalValue = undefined;
            this._name = undefined;
            this._onFailure.internalValue = undefined;
            this._onSuccess.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._beforeEntry.internalValue = value.beforeEntry;
            this._blockers.internalValue = value.blockers;
            this._name = value.name;
            this._onFailure.internalValue = value.onFailure;
            this._onSuccess.internalValue = value.onSuccess;
        }
    }

    // actions - computed: false, optional: false, required: true
    private _actions = new ActionDeclarationPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: ActionDeclarationProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // before_entry - computed: true, optional: true, required: false
    private _beforeEntry = new BeforeEntryConditionsPropertyOutputReference(this, "before_entry");
    public get beforeEntry() {
        return this._beforeEntry;
    }
    public putBeforeEntry(value: BeforeEntryConditionsProperty) {
        this._beforeEntry.internalValue = value;
    }
    public resetBeforeEntry() {
        this._beforeEntry.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get beforeEntryInput() {
        return this._beforeEntry.internalValue;
    }

    // blockers - computed: true, optional: true, required: false
    private _blockers = new BlockerDeclarationPropertyList(this, "blockers", false);
    public get blockers() {
        return this._blockers;
    }
    public putBlockers(value: BlockerDeclarationProperty[] | cdktn.IResolvable) {
        this._blockers.internalValue = value;
    }
    public resetBlockers() {
        this._blockers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockersInput() {
        return this._blockers.internalValue;
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

    // on_failure - computed: true, optional: true, required: false
    private _onFailure = new FailureConditionsPropertyOutputReference(this, "on_failure");
    public get onFailure() {
        return this._onFailure;
    }
    public putOnFailure(value: FailureConditionsProperty) {
        this._onFailure.internalValue = value;
    }
    public resetOnFailure() {
        this._onFailure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureInput() {
        return this._onFailure.internalValue;
    }

    // on_success - computed: true, optional: true, required: false
    private _onSuccess = new SuccessConditionsPropertyOutputReference(this, "on_success");
    public get onSuccess() {
        return this._onSuccess;
    }
    public putOnSuccess(value: SuccessConditionsProperty) {
        this._onSuccess.internalValue = value;
    }
    public resetOnSuccess() {
        this._onSuccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onSuccessInput() {
        return this._onSuccess.internalValue;
    }
}

export class StageDeclarationPropertyList extends cdktn.ComplexList {
    public internalValue? : StageDeclarationProperty[] | cdktn.IResolvable

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
    public get(index: number): StageDeclarationPropertyOutputReference {
        return new StageDeclarationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#key CcPipeline#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#value CcPipeline#value}
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
export interface GitBranchFilterCriteriaProperty {
    /**
    * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#excludes CcPipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#includes CcPipeline#includes}
    */
    readonly includes?: string[];
}
export class GitBranchFilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitBranchFilterCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludes = this._excludes;
        }
        if (this._includes !== undefined) {
            hasAnyValues = true;
            internalValueResult.includes = this._includes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitBranchFilterCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludes = undefined;
            this._includes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludes = value.excludes;
            this._includes = value.includes;
        }
    }

    // excludes - computed: true, optional: true, required: false
    private _excludes?: string[]; 
    public get excludes() {
        return this.getListAttribute('excludes');
    }
    public set excludes(value: string[]) {
        this._excludes = value;
    }
    public resetExcludes() {
        this._excludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
        return this._excludes;
    }

    // includes - computed: true, optional: true, required: false
    private _includes?: string[]; 
    public get includes() {
        return this.getListAttribute('includes');
    }
    public set includes(value: string[]) {
        this._includes = value;
    }
    public resetIncludes() {
        this._includes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includesInput() {
        return this._includes;
    }
}
export interface GitFilePathFilterCriteriaProperty {
    /**
    * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#excludes CcPipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#includes CcPipeline#includes}
    */
    readonly includes?: string[];
}
export class GitFilePathFilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitFilePathFilterCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludes = this._excludes;
        }
        if (this._includes !== undefined) {
            hasAnyValues = true;
            internalValueResult.includes = this._includes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitFilePathFilterCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludes = undefined;
            this._includes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludes = value.excludes;
            this._includes = value.includes;
        }
    }

    // excludes - computed: true, optional: true, required: false
    private _excludes?: string[]; 
    public get excludes() {
        return this.getListAttribute('excludes');
    }
    public set excludes(value: string[]) {
        this._excludes = value;
    }
    public resetExcludes() {
        this._excludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
        return this._excludes;
    }

    // includes - computed: true, optional: true, required: false
    private _includes?: string[]; 
    public get includes() {
        return this.getListAttribute('includes');
    }
    public set includes(value: string[]) {
        this._includes = value;
    }
    public resetIncludes() {
        this._includes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includesInput() {
        return this._includes;
    }
}
export interface GitPullRequestFilterProperty {
    /**
    * The Git repository branches specified as filter criteria to start the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#branches CcPipeline#branches}
    */
    readonly branches?: GitBranchFilterCriteriaProperty;
    /**
    * The field that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#events CcPipeline#events}
    */
    readonly events?: string[];
    /**
    * The Git repository file paths specified as filter criteria to start the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#file_paths CcPipeline#file_paths}
    */
    readonly filePaths?: GitFilePathFilterCriteriaProperty;
}
export class GitPullRequestFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GitPullRequestFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._branches?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.branches = this._branches?.internalValue;
        }
        if (this._events !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events;
        }
        if (this._filePaths?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filePaths = this._filePaths?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitPullRequestFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._branches.internalValue = undefined;
            this._events = undefined;
            this._filePaths.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._branches.internalValue = value.branches;
            this._events = value.events;
            this._filePaths.internalValue = value.filePaths;
        }
    }

    // branches - computed: true, optional: true, required: false
    private _branches = new GitBranchFilterCriteriaPropertyOutputReference(this, "branches");
    public get branches() {
        return this._branches;
    }
    public putBranches(value: GitBranchFilterCriteriaProperty) {
        this._branches.internalValue = value;
    }
    public resetBranches() {
        this._branches.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchesInput() {
        return this._branches.internalValue;
    }

    // events - computed: true, optional: true, required: false
    private _events?: string[]; 
    public get events() {
        return this.getListAttribute('events');
    }
    public set events(value: string[]) {
        this._events = value;
    }
    public resetEvents() {
        this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events;
    }

    // file_paths - computed: true, optional: true, required: false
    private _filePaths = new GitFilePathFilterCriteriaPropertyOutputReference(this, "file_paths");
    public get filePaths() {
        return this._filePaths;
    }
    public putFilePaths(value: GitFilePathFilterCriteriaProperty) {
        this._filePaths.internalValue = value;
    }
    public resetFilePaths() {
        this._filePaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filePathsInput() {
        return this._filePaths.internalValue;
    }
}

export class GitPullRequestFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : GitPullRequestFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): GitPullRequestFilterPropertyOutputReference {
        return new GitPullRequestFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BranchesProperty {
    /**
    * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#excludes CcPipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#includes CcPipeline#includes}
    */
    readonly includes?: string[];
}
export class BranchesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BranchesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludes = this._excludes;
        }
        if (this._includes !== undefined) {
            hasAnyValues = true;
            internalValueResult.includes = this._includes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BranchesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludes = undefined;
            this._includes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludes = value.excludes;
            this._includes = value.includes;
        }
    }

    // excludes - computed: true, optional: true, required: false
    private _excludes?: string[]; 
    public get excludes() {
        return this.getListAttribute('excludes');
    }
    public set excludes(value: string[]) {
        this._excludes = value;
    }
    public resetExcludes() {
        this._excludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
        return this._excludes;
    }

    // includes - computed: true, optional: true, required: false
    private _includes?: string[]; 
    public get includes() {
        return this.getListAttribute('includes');
    }
    public set includes(value: string[]) {
        this._includes = value;
    }
    public resetIncludes() {
        this._includes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includesInput() {
        return this._includes;
    }
}
export interface FilePathsProperty {
    /**
    * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#excludes CcPipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#includes CcPipeline#includes}
    */
    readonly includes?: string[];
}
export class FilePathsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilePathsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludes = this._excludes;
        }
        if (this._includes !== undefined) {
            hasAnyValues = true;
            internalValueResult.includes = this._includes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilePathsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludes = undefined;
            this._includes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludes = value.excludes;
            this._includes = value.includes;
        }
    }

    // excludes - computed: true, optional: true, required: false
    private _excludes?: string[]; 
    public get excludes() {
        return this.getListAttribute('excludes');
    }
    public set excludes(value: string[]) {
        this._excludes = value;
    }
    public resetExcludes() {
        this._excludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
        return this._excludes;
    }

    // includes - computed: true, optional: true, required: false
    private _includes?: string[]; 
    public get includes() {
        return this.getListAttribute('includes');
    }
    public set includes(value: string[]) {
        this._includes = value;
    }
    public resetIncludes() {
        this._includes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includesInput() {
        return this._includes;
    }
}
export interface GitTagFilterCriteriaProperty {
    /**
    * The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#excludes CcPipeline#excludes}
    */
    readonly excludes?: string[];
    /**
    * The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#includes CcPipeline#includes}
    */
    readonly includes?: string[];
}
export class GitTagFilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitTagFilterCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludes = this._excludes;
        }
        if (this._includes !== undefined) {
            hasAnyValues = true;
            internalValueResult.includes = this._includes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitTagFilterCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludes = undefined;
            this._includes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludes = value.excludes;
            this._includes = value.includes;
        }
    }

    // excludes - computed: true, optional: true, required: false
    private _excludes?: string[]; 
    public get excludes() {
        return this.getListAttribute('excludes');
    }
    public set excludes(value: string[]) {
        this._excludes = value;
    }
    public resetExcludes() {
        this._excludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
        return this._excludes;
    }

    // includes - computed: true, optional: true, required: false
    private _includes?: string[]; 
    public get includes() {
        return this.getListAttribute('includes');
    }
    public set includes(value: string[]) {
        this._includes = value;
    }
    public resetIncludes() {
        this._includes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includesInput() {
        return this._includes;
    }
}
export interface GitPushFilterProperty {
    /**
    * The Git repository branches specified as filter criteria to start the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#branches CcPipeline#branches}
    */
    readonly branches?: BranchesProperty;
    /**
    * The Git repository file paths specified as filter criteria to start the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#file_paths CcPipeline#file_paths}
    */
    readonly filePaths?: FilePathsProperty;
    /**
    * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#tags CcPipeline#tags}
    */
    readonly tags?: GitTagFilterCriteriaProperty;
}
export class GitPushFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GitPushFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._branches?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.branches = this._branches?.internalValue;
        }
        if (this._filePaths?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filePaths = this._filePaths?.internalValue;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitPushFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._branches.internalValue = undefined;
            this._filePaths.internalValue = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._branches.internalValue = value.branches;
            this._filePaths.internalValue = value.filePaths;
            this._tags.internalValue = value.tags;
        }
    }

    // branches - computed: true, optional: true, required: false
    private _branches = new BranchesPropertyOutputReference(this, "branches");
    public get branches() {
        return this._branches;
    }
    public putBranches(value: BranchesProperty) {
        this._branches.internalValue = value;
    }
    public resetBranches() {
        this._branches.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchesInput() {
        return this._branches.internalValue;
    }

    // file_paths - computed: true, optional: true, required: false
    private _filePaths = new FilePathsPropertyOutputReference(this, "file_paths");
    public get filePaths() {
        return this._filePaths;
    }
    public putFilePaths(value: FilePathsProperty) {
        this._filePaths.internalValue = value;
    }
    public resetFilePaths() {
        this._filePaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filePathsInput() {
        return this._filePaths.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new GitTagFilterCriteriaPropertyOutputReference(this, "tags");
    public get tags() {
        return this._tags;
    }
    public putTags(value: GitTagFilterCriteriaProperty) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}

export class GitPushFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : GitPushFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): GitPushFilterPropertyOutputReference {
        return new GitPushFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GitConfigurationProperty {
    /**
    * The field where the repository event that will start the pipeline is specified as pull requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#pull_request CcPipeline#pull_request}
    */
    readonly pullRequest?: GitPullRequestFilterProperty[] | cdktn.IResolvable;
    /**
    * The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#push CcPipeline#push}
    */
    readonly push?: GitPushFilterProperty[] | cdktn.IResolvable;
    /**
    * The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#source_action_name CcPipeline#source_action_name}
    */
    readonly sourceActionName?: string;
}
export class GitConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pullRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pullRequest = this._pullRequest?.internalValue;
        }
        if (this._push?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.push = this._push?.internalValue;
        }
        if (this._sourceActionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceActionName = this._sourceActionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pullRequest.internalValue = undefined;
            this._push.internalValue = undefined;
            this._sourceActionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pullRequest.internalValue = value.pullRequest;
            this._push.internalValue = value.push;
            this._sourceActionName = value.sourceActionName;
        }
    }

    // pull_request - computed: true, optional: true, required: false
    private _pullRequest = new GitPullRequestFilterPropertyList(this, "pull_request", false);
    public get pullRequest() {
        return this._pullRequest;
    }
    public putPullRequest(value: GitPullRequestFilterProperty[] | cdktn.IResolvable) {
        this._pullRequest.internalValue = value;
    }
    public resetPullRequest() {
        this._pullRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pullRequestInput() {
        return this._pullRequest.internalValue;
    }

    // push - computed: true, optional: true, required: false
    private _push = new GitPushFilterPropertyList(this, "push", false);
    public get push() {
        return this._push;
    }
    public putPush(value: GitPushFilterProperty[] | cdktn.IResolvable) {
        this._push.internalValue = value;
    }
    public resetPush() {
        this._push.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pushInput() {
        return this._push.internalValue;
    }

    // source_action_name - computed: true, optional: true, required: false
    private _sourceActionName?: string; 
    public get sourceActionName() {
        return this.getStringAttribute('source_action_name');
    }
    public set sourceActionName(value: string) {
        this._sourceActionName = value;
    }
    public resetSourceActionName() {
        this._sourceActionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceActionNameInput() {
        return this._sourceActionName;
    }
}
export interface PipelineTriggerDeclarationProperty {
    /**
    * A type of trigger configuration for Git-based source actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#git_configuration CcPipeline#git_configuration}
    */
    readonly gitConfiguration?: GitConfigurationProperty;
    /**
    * The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#provider_type CcPipeline#provider_type}
    */
    readonly providerType?: string;
}
export class PipelineTriggerDeclarationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PipelineTriggerDeclarationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gitConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitConfiguration = this._gitConfiguration?.internalValue;
        }
        if (this._providerType !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerType = this._providerType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipelineTriggerDeclarationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gitConfiguration.internalValue = undefined;
            this._providerType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gitConfiguration.internalValue = value.gitConfiguration;
            this._providerType = value.providerType;
        }
    }

    // git_configuration - computed: true, optional: true, required: false
    private _gitConfiguration = new GitConfigurationPropertyOutputReference(this, "git_configuration");
    public get gitConfiguration() {
        return this._gitConfiguration;
    }
    public putGitConfiguration(value: GitConfigurationProperty) {
        this._gitConfiguration.internalValue = value;
    }
    public resetGitConfiguration() {
        this._gitConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitConfigurationInput() {
        return this._gitConfiguration.internalValue;
    }

    // provider_type - computed: true, optional: true, required: false
    private _providerType?: string; 
    public get providerType() {
        return this.getStringAttribute('provider_type');
    }
    public set providerType(value: string) {
        this._providerType = value;
    }
    public resetProviderType() {
        this._providerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerTypeInput() {
        return this._providerType;
    }
}

export class PipelineTriggerDeclarationPropertyList extends cdktn.ComplexList {
    public internalValue? : PipelineTriggerDeclarationProperty[] | cdktn.IResolvable

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
    public get(index: number): PipelineTriggerDeclarationPropertyOutputReference {
        return new PipelineTriggerDeclarationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VariableDeclarationProperty {
    /**
    * The value of a pipeline-level variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#default_value CcPipeline#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#description CcPipeline#description}
    */
    readonly description?: string;
    /**
    * The name of a pipeline-level variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class VariableDeclarationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VariableDeclarationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VariableDeclarationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._description = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._description = value.description;
            this._name = value.name;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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
}

export class VariableDeclarationPropertyList extends cdktn.ComplexList {
    public internalValue? : VariableDeclarationProperty[] | cdktn.IResolvable

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
    public get(index: number): VariableDeclarationPropertyOutputReference {
        return new VariableDeclarationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
