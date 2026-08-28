// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRoutingControlProps extends cdktn.TerraformMetaArguments {
    /**
    * Arn associated with Control Panel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control#cluster_arn CcRoutingControl#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the control panel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control#control_panel_arn CcRoutingControl#control_panel_arn}
    */
    readonly controlPanelArn?: string;
    /**
    * The name of the routing control. You can use any non-white space character in the name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control#name CcRoutingControl#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control awscc_route53recoverycontrol_routing_control}
*/
export class CcRoutingControl extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53recoverycontrol_routing_control";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRoutingControl resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRoutingControl to import
    * @param importFromId The id of the existing CcRoutingControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRoutingControl to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53recoverycontrol_routing_control", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_routing_control awscc_route53recoverycontrol_routing_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRoutingControlProps
    */
    public constructor(scope: Construct, id: string, config: CcRoutingControlProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53recoverycontrol_routing_control',
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
        this._clusterArn = config.clusterArn;
        this._controlPanelArn = config.controlPanelArn;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: true, optional: true, required: false
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    public resetClusterArn() {
        this._clusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // control_panel_arn - computed: true, optional: true, required: false
    private _controlPanelArn?: string; 
    public get controlPanelArn() {
        return this.getStringAttribute('control_panel_arn');
    }
    public set controlPanelArn(value: string) {
        this._controlPanelArn = value;
    }
    public resetControlPanelArn() {
        this._controlPanelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPanelArnInput() {
        return this._controlPanelArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // routing_control_arn - computed: true, optional: false, required: false
    public get routingControlArn() {
        return this.getStringAttribute('routing_control_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            control_panel_arn: cdktn.stringToTerraform(this._controlPanelArn),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            control_panel_arn: {
                value: cdktn.stringToHclTerraform(this._controlPanelArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRoutingControl {
}
