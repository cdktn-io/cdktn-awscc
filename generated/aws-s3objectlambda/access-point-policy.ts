// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3objectlambda_access_point_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccessPointPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3objectlambda_access_point_policy#object_lambda_access_point CcAccessPointPolicy#object_lambda_access_point}
    */
    readonly objectLambdaAccessPoint: string;
    /**
    * A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3objectlambda_access_point_policy#policy_document CcAccessPointPolicy#policy_document}
    */
    readonly policyDocument: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3objectlambda_access_point_policy awscc_s3objectlambda_access_point_policy}
*/
export class CcAccessPointPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3objectlambda_access_point_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccessPointPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccessPointPolicy to import
    * @param importFromId The id of the existing CcAccessPointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3objectlambda_access_point_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccessPointPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3objectlambda_access_point_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3objectlambda_access_point_policy awscc_s3objectlambda_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccessPointPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcAccessPointPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3objectlambda_access_point_policy',
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
        this._objectLambdaAccessPoint = config.objectLambdaAccessPoint;
        this._policyDocument = config.policyDocument;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // object_lambda_access_point - computed: false, optional: false, required: true
    private _objectLambdaAccessPoint?: string; 
    public get objectLambdaAccessPoint() {
        return this.getStringAttribute('object_lambda_access_point');
    }
    public set objectLambdaAccessPoint(value: string) {
        this._objectLambdaAccessPoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLambdaAccessPointInput() {
        return this._objectLambdaAccessPoint;
    }

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            object_lambda_access_point: cdktn.stringToTerraform(this._objectLambdaAccessPoint),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            object_lambda_access_point: {
                value: cdktn.stringToHclTerraform(this._objectLambdaAccessPoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAccessPointPolicy {
}
