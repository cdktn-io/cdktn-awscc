// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPipelineProps extends cdktn.TerraformMetaArguments {
    /**
    * The list of compute nodes that form the pipeline DAG.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#computations CcPipeline#computations}
    */
    readonly computations: CcPipeline.ComputationsProperty[] | cdktn.IResolvable;
    /**
    * A description of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#description CcPipeline#description}
    */
    readonly description?: string;
    /**
    * Environment variables shared across all compute nodes in the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#environment_variables CcPipeline#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * The name of the pipeline. Must be unique within the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#pipeline_name CcPipeline#pipeline_name}
    */
    readonly pipelineName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#tags CcPipeline#tags}
    */
    readonly tags?: CcPipeline.TagsProperty[] | cdktn.IResolvable;
    /**
    * The name of the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#workspace_name CcPipeline#workspace_name}
    */
    readonly workspaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline awscc_iotsitewise_pipeline}
*/
export class CcPipeline extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotsitewise_pipeline";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPipeline resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPipeline to import
    * @param importFromId The id of the existing CcPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPipeline to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_pipeline", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline awscc_iotsitewise_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPipelineProps
    */
    public constructor(scope: Construct, id: string, config: CcPipelineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_pipeline',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.101.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._computations.internalValue = config.computations;
        this._description = config.description;
        this._environmentVariables = config.environmentVariables;
        this._pipelineName = config.pipelineName;
        this._tags.internalValue = config.tags;
        this._workspaceName = config.workspaceName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // computations - computed: false, optional: false, required: true
    private _computations = new CcPipeline.ComputationsPropertyList(this, "computations", false);
    public get computations() {
        return this._computations;
    }
    public putComputations(value: CcPipeline.ComputationsProperty[] | cdktn.IResolvable) {
        this._computations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computationsInput() {
        return this._computations.internalValue;
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

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // pipeline_arn - computed: true, optional: false, required: false
    public get pipelineArn() {
        return this.getStringAttribute('pipeline_arn');
    }

    // pipeline_name - computed: false, optional: false, required: true
    private _pipelineName?: string; 
    public get pipelineName() {
        return this.getStringAttribute('pipeline_name');
    }
    public set pipelineName(value: string) {
        this._pipelineName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineNameInput() {
        return this._pipelineName;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPipeline.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPipeline.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workspace_name - computed: false, optional: false, required: true
    private _workspaceName?: string; 
    public get workspaceName() {
        return this.getStringAttribute('workspace_name');
    }
    public set workspaceName(value: string) {
        this._workspaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceNameInput() {
        return this._workspaceName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            computations: cdktn.listMapper(ccPipelineComputationsPropertyToTerraform, false)(this._computations.internalValue),
            description: cdktn.stringToTerraform(this._description),
            environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
            pipeline_name: cdktn.stringToTerraform(this._pipelineName),
            tags: cdktn.listMapper(ccPipelineTagsPropertyToTerraform, false)(this._tags.internalValue),
            workspace_name: cdktn.stringToTerraform(this._workspaceName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            computations: {
                value: cdktn.listMapperHcl(ccPipelineComputationsPropertyToHclTerraform, false)(this._computations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.ComputationsPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_variables: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            pipeline_name: {
                value: cdktn.stringToHclTerraform(this._pipelineName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPipelineTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.TagsPropertyList",
            },
            workspace_name: {
                value: cdktn.stringToHclTerraform(this._workspaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPipelineComputationsPropertyToTerraform(struct?: CcPipeline.ComputationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_node_name: cdktn.stringToTerraform(struct!.computeNodeName),
        depends_on: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dependsOn),
        environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
        task_name: cdktn.stringToTerraform(struct!.taskName),
    }
}


export function ccPipelineComputationsPropertyToHclTerraform(struct?: CcPipeline.ComputationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_node_name: {
            value: cdktn.stringToHclTerraform(struct!.computeNodeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        depends_on: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dependsOn),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        environment_variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        task_name: {
            value: cdktn.stringToHclTerraform(struct!.taskName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineTagsPropertyToTerraform(struct?: CcPipeline.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipelineTagsPropertyToHclTerraform(struct?: CcPipeline.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcPipeline {
export interface ComputationsProperty {
    /**
    * The unique name for this compute node within the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#compute_node_name CcPipeline#compute_node_name}
    */
    readonly computeNodeName: string;
    /**
    * A list of compute node names that must complete successfully before this node can start.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#depends_on CcPipeline#depends_on}
    */
    readonly dependsOn?: string[];
    /**
    * A map of environment variable key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#environment_variables CcPipeline#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * The name of the task to execute for this compute node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#task_name CcPipeline#task_name}
    */
    readonly taskName: string;
}
export class ComputationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComputationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeNodeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeNodeName = this._computeNodeName;
        }
        if (this._dependsOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependsOn = this._dependsOn;
        }
        if (this._environmentVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables;
        }
        if (this._taskName !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskName = this._taskName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeNodeName = undefined;
            this._dependsOn = undefined;
            this._environmentVariables = undefined;
            this._taskName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeNodeName = value.computeNodeName;
            this._dependsOn = value.dependsOn;
            this._environmentVariables = value.environmentVariables;
            this._taskName = value.taskName;
        }
    }

    // compute_node_name - computed: false, optional: false, required: true
    private _computeNodeName?: string; 
    public get computeNodeName() {
        return this.getStringAttribute('compute_node_name');
    }
    public set computeNodeName(value: string) {
        this._computeNodeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeNodeNameInput() {
        return this._computeNodeName;
    }

    // depends_on - computed: true, optional: true, required: false
    private _dependsOn?: string[]; 
    public get dependsOn() {
        return this.getListAttribute('depends_on');
    }
    public set dependsOn(value: string[]) {
        this._dependsOn = value;
    }
    public resetDependsOn() {
        this._dependsOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependsOnInput() {
        return this._dependsOn;
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // task_name - computed: false, optional: false, required: true
    private _taskName?: string; 
    public get taskName() {
        return this.getStringAttribute('task_name');
    }
    public set taskName(value: string) {
        this._taskName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskNameInput() {
        return this._taskName;
    }
}

export class ComputationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComputationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComputationsPropertyOutputReference {
        return new ComputationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#key CcPipeline#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/iotsitewise_pipeline#value CcPipeline#value}
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
