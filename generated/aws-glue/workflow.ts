// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkflowProps extends cdktn.TerraformMetaArguments {
    /**
    * A collection of properties to be used as part of each execution of the workflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow#default_run_properties CcWorkflow#default_run_properties}
    */
    readonly defaultRunProperties?: string;
    /**
    * A description of the workflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow#description CcWorkflow#description}
    */
    readonly description?: string;
    /**
    * You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow#max_concurrent_runs CcWorkflow#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
    /**
    * The name of the workflow representing the flow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow#name CcWorkflow#name}
    */
    readonly name?: string;
    /**
    * The tags to use with this workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow#tags CcWorkflow#tags}
    */
    readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow awscc_glue_workflow}
*/
export class CcWorkflow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_workflow";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkflow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkflow to import
    * @param importFromId The id of the existing CcWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkflow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_workflow", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_workflow awscc_glue_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkflowProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcWorkflowProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_workflow',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._defaultRunProperties = config.defaultRunProperties;
        this._description = config.description;
        this._maxConcurrentRuns = config.maxConcurrentRuns;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // default_run_properties - computed: true, optional: true, required: false
    private _defaultRunProperties?: string; 
    public get defaultRunProperties() {
        return this.getStringAttribute('default_run_properties');
    }
    public set defaultRunProperties(value: string) {
        this._defaultRunProperties = value;
    }
    public resetDefaultRunProperties() {
        this._defaultRunProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRunPropertiesInput() {
        return this._defaultRunProperties;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_concurrent_runs - computed: true, optional: true, required: false
    private _maxConcurrentRuns?: number; 
    public get maxConcurrentRuns() {
        return this.getNumberAttribute('max_concurrent_runs');
    }
    public set maxConcurrentRuns(value: number) {
        this._maxConcurrentRuns = value;
    }
    public resetMaxConcurrentRuns() {
        this._maxConcurrentRuns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentRunsInput() {
        return this._maxConcurrentRuns;
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

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            default_run_properties: cdktn.stringToTerraform(this._defaultRunProperties),
            description: cdktn.stringToTerraform(this._description),
            max_concurrent_runs: cdktn.numberToTerraform(this._maxConcurrentRuns),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.stringToTerraform(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            default_run_properties: {
                value: cdktn.stringToHclTerraform(this._defaultRunProperties),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_concurrent_runs: {
                value: cdktn.numberToHclTerraform(this._maxConcurrentRuns),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcWorkflow {
}
