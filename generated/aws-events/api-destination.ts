// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApiDestinationProps extends cdktn.TerraformMetaArguments {
    /**
    * The arn of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#connection_arn CcApiDestination#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#description CcApiDestination#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#http_method CcApiDestination#http_method}
    */
    readonly httpMethod: string;
    /**
    * Url endpoint to invoke.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#invocation_endpoint CcApiDestination#invocation_endpoint}
    */
    readonly invocationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#invocation_rate_limit_per_second CcApiDestination#invocation_rate_limit_per_second}
    */
    readonly invocationRateLimitPerSecond?: number;
    /**
    * Name of the apiDestination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#name CcApiDestination#name}
    */
    readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination awscc_events_api_destination}
*/
export class CcApiDestination extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_events_api_destination";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApiDestination resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApiDestination to import
    * @param importFromId The id of the existing CcApiDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApiDestination to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_api_destination", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_api_destination awscc_events_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApiDestinationProps
    */
    public constructor(scope: Construct, id: string, config: CcApiDestinationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_events_api_destination',
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
        this._connectionArn = config.connectionArn;
        this._description = config.description;
        this._httpMethod = config.httpMethod;
        this._invocationEndpoint = config.invocationEndpoint;
        this._invocationRateLimitPerSecond = config.invocationRateLimitPerSecond;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // arn_for_policy - computed: true, optional: false, required: false
    public get arnForPolicy() {
        return this.getStringAttribute('arn_for_policy');
    }

    // connection_arn - computed: false, optional: false, required: true
    private _connectionArn?: string; 
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
        this._connectionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
        return this._connectionArn;
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

    // http_method - computed: false, optional: false, required: true
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invocation_endpoint - computed: false, optional: false, required: true
    private _invocationEndpoint?: string; 
    public get invocationEndpoint() {
        return this.getStringAttribute('invocation_endpoint');
    }
    public set invocationEndpoint(value: string) {
        this._invocationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationEndpointInput() {
        return this._invocationEndpoint;
    }

    // invocation_rate_limit_per_second - computed: true, optional: true, required: false
    private _invocationRateLimitPerSecond?: number; 
    public get invocationRateLimitPerSecond() {
        return this.getNumberAttribute('invocation_rate_limit_per_second');
    }
    public set invocationRateLimitPerSecond(value: number) {
        this._invocationRateLimitPerSecond = value;
    }
    public resetInvocationRateLimitPerSecond() {
        this._invocationRateLimitPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationRateLimitPerSecondInput() {
        return this._invocationRateLimitPerSecond;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_arn: cdktn.stringToTerraform(this._connectionArn),
            description: cdktn.stringToTerraform(this._description),
            http_method: cdktn.stringToTerraform(this._httpMethod),
            invocation_endpoint: cdktn.stringToTerraform(this._invocationEndpoint),
            invocation_rate_limit_per_second: cdktn.numberToTerraform(this._invocationRateLimitPerSecond),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_arn: {
                value: cdktn.stringToHclTerraform(this._connectionArn),
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
            http_method: {
                value: cdktn.stringToHclTerraform(this._httpMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            invocation_endpoint: {
                value: cdktn.stringToHclTerraform(this._invocationEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            invocation_rate_limit_per_second: {
                value: cdktn.numberToHclTerraform(this._invocationRateLimitPerSecond),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApiDestination {
}
