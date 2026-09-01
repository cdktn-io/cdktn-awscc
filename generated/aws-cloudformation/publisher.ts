// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_publisher

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPublisherProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_publisher#accept_terms_and_conditions CcPublisher#accept_terms_and_conditions}
    */
    readonly acceptTermsAndConditions: boolean | cdktn.IResolvable;
    /**
    * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_publisher#connection_arn CcPublisher#connection_arn}
    */
    readonly connectionArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_publisher awscc_cloudformation_publisher}
*/
export class CcPublisher extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_publisher";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPublisher resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPublisher to import
    * @param importFromId The id of the existing CcPublisher that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_publisher#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPublisher to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_publisher", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_publisher awscc_cloudformation_publisher} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPublisherProps
    */
    public constructor(scope: Construct, id: string, config: CcPublisherProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_publisher',
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
        this._acceptTermsAndConditions = config.acceptTermsAndConditions;
        this._connectionArn = config.connectionArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_terms_and_conditions - computed: false, optional: false, required: true
    private _acceptTermsAndConditions?: boolean | cdktn.IResolvable; 
    public get acceptTermsAndConditions() {
        return this.getBooleanAttribute('accept_terms_and_conditions');
    }
    public set acceptTermsAndConditions(value: boolean | cdktn.IResolvable) {
        this._acceptTermsAndConditions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptTermsAndConditionsInput() {
        return this._acceptTermsAndConditions;
    }

    // connection_arn - computed: true, optional: true, required: false
    private _connectionArn?: string; 
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
        this._connectionArn = value;
    }
    public resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
        return this._connectionArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider - computed: true, optional: false, required: false
    public get identityProvider() {
        return this.getStringAttribute('identity_provider');
    }

    // publisher_id - computed: true, optional: false, required: false
    public get publisherId() {
        return this.getStringAttribute('publisher_id');
    }

    // publisher_profile - computed: true, optional: false, required: false
    public get publisherProfile() {
        return this.getStringAttribute('publisher_profile');
    }

    // publisher_status - computed: true, optional: false, required: false
    public get publisherStatus() {
        return this.getStringAttribute('publisher_status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_terms_and_conditions: cdktn.booleanToTerraform(this._acceptTermsAndConditions),
            connection_arn: cdktn.stringToTerraform(this._connectionArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accept_terms_and_conditions: {
                value: cdktn.booleanToHclTerraform(this._acceptTermsAndConditions),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            connection_arn: {
                value: cdktn.stringToHclTerraform(this._connectionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPublisher {
}
