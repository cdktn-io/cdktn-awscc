// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * Specify the maximum number of jobs your queue can process concurrently. For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#concurrent_jobs CcQueue#concurrent_jobs}
    */
    readonly concurrentJobs?: number;
    /**
    * A description of the queue that you are creating.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#description CcQueue#description}
    */
    readonly description?: string;
    /**
    * Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds CcQueue#maximum_concurrent_feeds}
    */
    readonly maximumConcurrentFeeds?: number;
    /**
    * The name of the queue that you are creating.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#name CcQueue#name}
    */
    readonly name?: string;
    /**
    * When you use CloudFormation, you can create only on-demand queues. Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#pricing_plan CcQueue#pricing_plan}
    */
    readonly pricingPlan?: string;
    /**
    * Initial state of the queue. Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#status CcQueue#status}
    */
    readonly status?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#tags CcQueue#tags}
    */
    readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue}
*/
export class CcQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconvert_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueue to import
    * @param importFromId The id of the existing CcQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconvert_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcQueueProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconvert_queue',
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
        this._concurrentJobs = config.concurrentJobs;
        this._description = config.description;
        this._maximumConcurrentFeeds = config.maximumConcurrentFeeds;
        this._name = config.name;
        this._pricingPlan = config.pricingPlan;
        this._status = config.status;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // concurrent_jobs - computed: true, optional: true, required: false
    private _concurrentJobs?: number; 
    public get concurrentJobs() {
        return this.getNumberAttribute('concurrent_jobs');
    }
    public set concurrentJobs(value: number) {
        this._concurrentJobs = value;
    }
    public resetConcurrentJobs() {
        this._concurrentJobs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrentJobsInput() {
        return this._concurrentJobs;
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

    // maximum_concurrent_feeds - computed: true, optional: true, required: false
    private _maximumConcurrentFeeds?: number; 
    public get maximumConcurrentFeeds() {
        return this.getNumberAttribute('maximum_concurrent_feeds');
    }
    public set maximumConcurrentFeeds(value: number) {
        this._maximumConcurrentFeeds = value;
    }
    public resetMaximumConcurrentFeeds() {
        this._maximumConcurrentFeeds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumConcurrentFeedsInput() {
        return this._maximumConcurrentFeeds;
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

    // pricing_plan - computed: true, optional: true, required: false
    private _pricingPlan?: string; 
    public get pricingPlan() {
        return this.getStringAttribute('pricing_plan');
    }
    public set pricingPlan(value: string) {
        this._pricingPlan = value;
    }
    public resetPricingPlan() {
        this._pricingPlan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pricingPlanInput() {
        return this._pricingPlan;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
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
            concurrent_jobs: cdktn.numberToTerraform(this._concurrentJobs),
            description: cdktn.stringToTerraform(this._description),
            maximum_concurrent_feeds: cdktn.numberToTerraform(this._maximumConcurrentFeeds),
            name: cdktn.stringToTerraform(this._name),
            pricing_plan: cdktn.stringToTerraform(this._pricingPlan),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.stringToTerraform(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            concurrent_jobs: {
                value: cdktn.numberToHclTerraform(this._concurrentJobs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maximum_concurrent_feeds: {
                value: cdktn.numberToHclTerraform(this._maximumConcurrentFeeds),
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
            pricing_plan: {
                value: cdktn.stringToHclTerraform(this._pricingPlan),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
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

export namespace CcQueue {
}
