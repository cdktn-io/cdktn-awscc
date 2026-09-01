// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment#farm_id CcQueueEnvironment#farm_id}
    */
    readonly farmId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment#priority CcQueueEnvironment#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment#queue_id CcQueueEnvironment#queue_id}
    */
    readonly queueId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment#template CcQueueEnvironment#template}
    */
    readonly template: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment#template_type CcQueueEnvironment#template_type}
    */
    readonly templateType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment awscc_deadline_queue_environment}
*/
export class CcQueueEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_queue_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueueEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueueEnvironment to import
    * @param importFromId The id of the existing CcQueueEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueueEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_queue_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue_environment awscc_deadline_queue_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcQueueEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_queue_environment',
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
        this._farmId = config.farmId;
        this._priority = config.priority;
        this._queueId = config.queueId;
        this._template = config.template;
        this._templateType = config.templateType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // farm_id - computed: false, optional: false, required: true
    private _farmId?: string; 
    public get farmId() {
        return this.getStringAttribute('farm_id');
    }
    public set farmId(value: string) {
        this._farmId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get farmIdInput() {
        return this._farmId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // queue_environment_id - computed: true, optional: false, required: false
    public get queueEnvironmentId() {
        return this.getStringAttribute('queue_environment_id');
    }

    // queue_id - computed: false, optional: false, required: true
    private _queueId?: string; 
    public get queueId() {
        return this.getStringAttribute('queue_id');
    }
    public set queueId(value: string) {
        this._queueId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queueIdInput() {
        return this._queueId;
    }

    // template - computed: false, optional: false, required: true
    private _template?: string; 
    public get template() {
        return this.getStringAttribute('template');
    }
    public set template(value: string) {
        this._template = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template;
    }

    // template_type - computed: false, optional: false, required: true
    private _templateType?: string; 
    public get templateType() {
        return this.getStringAttribute('template_type');
    }
    public set templateType(value: string) {
        this._templateType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateTypeInput() {
        return this._templateType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            farm_id: cdktn.stringToTerraform(this._farmId),
            priority: cdktn.numberToTerraform(this._priority),
            queue_id: cdktn.stringToTerraform(this._queueId),
            template: cdktn.stringToTerraform(this._template),
            template_type: cdktn.stringToTerraform(this._templateType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            farm_id: {
                value: cdktn.stringToHclTerraform(this._farmId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktn.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            queue_id: {
                value: cdktn.stringToHclTerraform(this._queueId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template: {
                value: cdktn.stringToHclTerraform(this._template),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_type: {
                value: cdktn.stringToHclTerraform(this._templateType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcQueueEnvironment {
}
