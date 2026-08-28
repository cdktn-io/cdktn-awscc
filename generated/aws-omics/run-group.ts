// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRunGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#max_cpus CcRunGroup#max_cpus}
    */
    readonly maxCpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#max_duration CcRunGroup#max_duration}
    */
    readonly maxDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#max_gpus CcRunGroup#max_gpus}
    */
    readonly maxGpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#max_runs CcRunGroup#max_runs}
    */
    readonly maxRuns?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#name CcRunGroup#name}
    */
    readonly name?: string;
    /**
    * A map of resource tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#tags CcRunGroup#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group awscc_omics_run_group}
*/
export class CcRunGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_omics_run_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRunGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRunGroup to import
    * @param importFromId The id of the existing CcRunGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRunGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_omics_run_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_run_group awscc_omics_run_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRunGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcRunGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_omics_run_group',
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
        this._maxCpus = config.maxCpus;
        this._maxDuration = config.maxDuration;
        this._maxGpus = config.maxGpus;
        this._maxRuns = config.maxRuns;
        this._name = config.name;
        this._tags = config.tags;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_cpus - computed: true, optional: true, required: false
    private _maxCpus?: number; 
    public get maxCpus() {
        return this.getNumberAttribute('max_cpus');
    }
    public set maxCpus(value: number) {
        this._maxCpus = value;
    }
    public resetMaxCpus() {
        this._maxCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCpusInput() {
        return this._maxCpus;
    }

    // max_duration - computed: true, optional: true, required: false
    private _maxDuration?: number; 
    public get maxDuration() {
        return this.getNumberAttribute('max_duration');
    }
    public set maxDuration(value: number) {
        this._maxDuration = value;
    }
    public resetMaxDuration() {
        this._maxDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxDurationInput() {
        return this._maxDuration;
    }

    // max_gpus - computed: true, optional: true, required: false
    private _maxGpus?: number; 
    public get maxGpus() {
        return this.getNumberAttribute('max_gpus');
    }
    public set maxGpus(value: number) {
        this._maxGpus = value;
    }
    public resetMaxGpus() {
        this._maxGpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxGpusInput() {
        return this._maxGpus;
    }

    // max_runs - computed: true, optional: true, required: false
    private _maxRuns?: number; 
    public get maxRuns() {
        return this.getNumberAttribute('max_runs');
    }
    public set maxRuns(value: number) {
        this._maxRuns = value;
    }
    public resetMaxRuns() {
        this._maxRuns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRunsInput() {
        return this._maxRuns;
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

    // run_group_id - computed: true, optional: false, required: false
    public get runGroupId() {
        return this.getStringAttribute('run_group_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
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
            max_cpus: cdktn.numberToTerraform(this._maxCpus),
            max_duration: cdktn.numberToTerraform(this._maxDuration),
            max_gpus: cdktn.numberToTerraform(this._maxGpus),
            max_runs: cdktn.numberToTerraform(this._maxRuns),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            max_cpus: {
                value: cdktn.numberToHclTerraform(this._maxCpus),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_duration: {
                value: cdktn.numberToHclTerraform(this._maxDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_gpus: {
                value: cdktn.numberToHclTerraform(this._maxGpus),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_runs: {
                value: cdktn.numberToHclTerraform(this._maxRuns),
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
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRunGroup {
}
