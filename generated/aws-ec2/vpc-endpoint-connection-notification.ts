// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCEndpointConnectionNotificationProps extends cdktn.TerraformMetaArguments {
    /**
    * The endpoint events for which to receive notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification#connection_events CcVPCEndpointConnectionNotification#connection_events}
    */
    readonly connectionEvents: string[];
    /**
    * The ARN of the SNS topic for the notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification#connection_notification_arn CcVPCEndpointConnectionNotification#connection_notification_arn}
    */
    readonly connectionNotificationArn: string;
    /**
    * The ID of the endpoint service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification#service_id CcVPCEndpointConnectionNotification#service_id}
    */
    readonly serviceId?: string;
    /**
    * The ID of the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification#vpc_endpoint_id CcVPCEndpointConnectionNotification#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification awscc_ec2_vpc_endpoint_connection_notification}
*/
export class CcVPCEndpointConnectionNotification extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_endpoint_connection_notification";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCEndpointConnectionNotification resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCEndpointConnectionNotification to import
    * @param importFromId The id of the existing CcVPCEndpointConnectionNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCEndpointConnectionNotification to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_endpoint_connection_notification", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_connection_notification awscc_ec2_vpc_endpoint_connection_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCEndpointConnectionNotificationProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCEndpointConnectionNotificationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_endpoint_connection_notification',
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
        this._connectionEvents = config.connectionEvents;
        this._connectionNotificationArn = config.connectionNotificationArn;
        this._serviceId = config.serviceId;
        this._vpcEndpointId = config.vpcEndpointId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_events - computed: false, optional: false, required: true
    private _connectionEvents?: string[]; 
    public get connectionEvents() {
        return this.getListAttribute('connection_events');
    }
    public set connectionEvents(value: string[]) {
        this._connectionEvents = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionEventsInput() {
        return this._connectionEvents;
    }

    // connection_notification_arn - computed: false, optional: false, required: true
    private _connectionNotificationArn?: string; 
    public get connectionNotificationArn() {
        return this.getStringAttribute('connection_notification_arn');
    }
    public set connectionNotificationArn(value: string) {
        this._connectionNotificationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNotificationArnInput() {
        return this._connectionNotificationArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // service_id - computed: true, optional: true, required: false
    private _serviceId?: string; 
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }
    public set serviceId(value: string) {
        this._serviceId = value;
    }
    public resetServiceId() {
        this._serviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdInput() {
        return this._serviceId;
    }

    // vpc_endpoint_connection_notification_id - computed: true, optional: false, required: false
    public get vpcEndpointConnectionNotificationId() {
        return this.getStringAttribute('vpc_endpoint_connection_notification_id');
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
        this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_events: cdktn.listMapper(cdktn.stringToTerraform, false)(this._connectionEvents),
            connection_notification_arn: cdktn.stringToTerraform(this._connectionNotificationArn),
            service_id: cdktn.stringToTerraform(this._serviceId),
            vpc_endpoint_id: cdktn.stringToTerraform(this._vpcEndpointId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_events: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._connectionEvents),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            connection_notification_arn: {
                value: cdktn.stringToHclTerraform(this._connectionNotificationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_id: {
                value: cdktn.stringToHclTerraform(this._serviceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._vpcEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVPCEndpointConnectionNotification {
}
