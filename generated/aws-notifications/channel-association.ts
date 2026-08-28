// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_channel_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * ARN identifier of the channel.
    * Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_channel_association#arn CcChannelAssociation#arn}
    */
    readonly arn: string;
    /**
    * ARN identifier of the NotificationConfiguration.
    * Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_channel_association#notification_configuration_arn CcChannelAssociation#notification_configuration_arn}
    */
    readonly notificationConfigurationArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_channel_association awscc_notifications_channel_association}
*/
export class CcChannelAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_notifications_channel_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannelAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannelAssociation to import
    * @param importFromId The id of the existing CcChannelAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_channel_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannelAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_notifications_channel_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_channel_association awscc_notifications_channel_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_notifications_channel_association',
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
        this._arn = config.arn;
        this._notificationConfigurationArn = config.notificationConfigurationArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_configuration_arn - computed: false, optional: false, required: true
    private _notificationConfigurationArn?: string; 
    public get notificationConfigurationArn() {
        return this.getStringAttribute('notification_configuration_arn');
    }
    public set notificationConfigurationArn(value: string) {
        this._notificationConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationArnInput() {
        return this._notificationConfigurationArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            arn: cdktn.stringToTerraform(this._arn),
            notification_configuration_arn: cdktn.stringToTerraform(this._notificationConfigurationArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            arn: {
                value: cdktn.stringToHclTerraform(this._arn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._notificationConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcChannelAssociation {
}
