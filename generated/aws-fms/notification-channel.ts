// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/fms_notification_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotificationChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/fms_notification_channel#sns_role_name CcNotificationChannel#sns_role_name}
    */
    readonly snsRoleName: string;
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/fms_notification_channel#sns_topic_arn CcNotificationChannel#sns_topic_arn}
    */
    readonly snsTopicArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/fms_notification_channel awscc_fms_notification_channel}
*/
export class CcNotificationChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fms_notification_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotificationChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotificationChannel to import
    * @param importFromId The id of the existing CcNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/fms_notification_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotificationChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fms_notification_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/fms_notification_channel awscc_fms_notification_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotificationChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcNotificationChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fms_notification_channel',
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
        this._snsRoleName = config.snsRoleName;
        this._snsTopicArn = config.snsTopicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // sns_role_name - computed: false, optional: false, required: true
    private _snsRoleName?: string; 
    public get snsRoleName() {
        return this.getStringAttribute('sns_role_name');
    }
    public set snsRoleName(value: string) {
        this._snsRoleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsRoleNameInput() {
        return this._snsRoleName;
    }

    // sns_topic_arn - computed: false, optional: false, required: true
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            sns_role_name: cdktn.stringToTerraform(this._snsRoleName),
            sns_topic_arn: cdktn.stringToTerraform(this._snsTopicArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            sns_role_name: {
                value: cdktn.stringToHclTerraform(this._snsRoleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sns_topic_arn: {
                value: cdktn.stringToHclTerraform(this._snsTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcNotificationChannel {
}
