// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_challenge

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChallengeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_challenge#connector_arn CcChallenge#connector_arn}
    */
    readonly connectorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_challenge#tags CcChallenge#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_challenge awscc_pcaconnectorscep_challenge}
*/
export class CcChallenge extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcaconnectorscep_challenge";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChallenge resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChallenge to import
    * @param importFromId The id of the existing CcChallenge that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_challenge#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChallenge to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorscep_challenge", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorscep_challenge awscc_pcaconnectorscep_challenge} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChallengeProps
    */
    public constructor(scope: Construct, id: string, config: CcChallengeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcaconnectorscep_challenge',
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
        this._connectorArn = config.connectorArn;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // challenge_arn - computed: true, optional: false, required: false
    public get challengeArn() {
        return this.getStringAttribute('challenge_arn');
    }

    // connector_arn - computed: false, optional: false, required: true
    private _connectorArn?: string; 
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }
    public set connectorArn(value: string) {
        this._connectorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorArnInput() {
        return this._connectorArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
            connector_arn: cdktn.stringToTerraform(this._connectorArn),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connector_arn: {
                value: cdktn.stringToHclTerraform(this._connectorArn),
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

export namespace CcChallenge {
}
