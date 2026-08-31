// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMessageTemplateVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The unqualified Amazon Resource Name (ARN) of the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template_version#message_template_arn CcMessageTemplateVersion#message_template_arn}
    */
    readonly messageTemplateArn: string;
    /**
    * The content SHA256 of the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template_version#message_template_content_sha_256 CcMessageTemplateVersion#message_template_content_sha_256}
    */
    readonly messageTemplateContentSha256?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template_version awscc_wisdom_message_template_version}
*/
export class CcMessageTemplateVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_message_template_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMessageTemplateVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMessageTemplateVersion to import
    * @param importFromId The id of the existing CcMessageTemplateVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMessageTemplateVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_message_template_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template_version awscc_wisdom_message_template_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMessageTemplateVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcMessageTemplateVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_message_template_version',
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
        this._messageTemplateArn = config.messageTemplateArn;
        this._messageTemplateContentSha256 = config.messageTemplateContentSha256;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // message_template_arn - computed: false, optional: false, required: true
    private _messageTemplateArn?: string; 
    public get messageTemplateArn() {
        return this.getStringAttribute('message_template_arn');
    }
    public set messageTemplateArn(value: string) {
        this._messageTemplateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTemplateArnInput() {
        return this._messageTemplateArn;
    }

    // message_template_content_sha_256 - computed: true, optional: true, required: false
    private _messageTemplateContentSha256?: string; 
    public get messageTemplateContentSha256() {
        return this.getStringAttribute('message_template_content_sha_256');
    }
    public set messageTemplateContentSha256(value: string) {
        this._messageTemplateContentSha256 = value;
    }
    public resetMessageTemplateContentSha256() {
        this._messageTemplateContentSha256 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTemplateContentSha256Input() {
        return this._messageTemplateContentSha256;
    }

    // message_template_version_arn - computed: true, optional: false, required: false
    public get messageTemplateVersionArn() {
        return this.getStringAttribute('message_template_version_arn');
    }

    // message_template_version_number - computed: true, optional: false, required: false
    public get messageTemplateVersionNumber() {
        return this.getNumberAttribute('message_template_version_number');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            message_template_arn: cdktn.stringToTerraform(this._messageTemplateArn),
            message_template_content_sha_256: cdktn.stringToTerraform(this._messageTemplateContentSha256),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            message_template_arn: {
                value: cdktn.stringToHclTerraform(this._messageTemplateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            message_template_content_sha_256: {
                value: cdktn.stringToHclTerraform(this._messageTemplateContentSha256),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcMessageTemplateVersion {
}
