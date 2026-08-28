// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPermissionProps extends cdktn.TerraformMetaArguments {
    /**
    * The action that the principal can use on the function. For example, ``lambda:InvokeFunction`` or ``lambda:GetFunction``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#action CcPermission#action}
    */
    readonly action: string;
    /**
    * For Alexa Smart Home functions, a token that the invoker must supply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#event_source_token CcPermission#event_source_token}
    */
    readonly eventSourceToken?: string;
    /**
    * The name or ARN of the Lambda function, version, or alias.
    *   **Name formats**
    *  +  *Function name* ? ``my-function`` (name-only), ``my-function:v1`` (with alias).
    *   +  *Function ARN* ? ``arn:aws:lambda:us-west-2:123456789012:function:my-function``.
    *   +  *Partial ARN* ? ``123456789012:function:my-function``.
    *   
    *  You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#function_name CcPermission#function_name}
    */
    readonly functionName: string;
    /**
    * The type of authentication that your function URL uses. Set to ``AWS_IAM`` if you want to restrict access to authenticated users only. Set to ``NONE`` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#function_url_auth_type CcPermission#function_url_auth_type}
    */
    readonly functionUrlAuthType?: string;
    /**
    * Indicates whether the permission applies when the function is invoked through a function URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#invoked_via_function_url CcPermission#invoked_via_function_url}
    */
    readonly invokedViaFunctionUrl?: boolean | cdktn.IResolvable;
    /**
    * The AWS-service, AWS-account, IAM user, or IAM role that invokes the function. If you specify a service, use ``SourceArn`` or ``SourceAccount`` to limit who can invoke the function through that service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#principal CcPermission#principal}
    */
    readonly principal: string;
    /**
    * The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#principal_org_id CcPermission#principal_org_id}
    */
    readonly principalOrgId?: string;
    /**
    * For AWS-service, the ID of the AWS-account that owns the resource. Use this together with ``SourceArn`` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#source_account CcPermission#source_account}
    */
    readonly sourceAccount?: string;
    /**
    * For AWS-services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
    *  Note that Lambda configures the comparison using the ``StringLike`` operator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#source_arn CcPermission#source_arn}
    */
    readonly sourceArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission awscc_lambda_permission}
*/
export class CcPermission extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_permission";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPermission resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPermission to import
    * @param importFromId The id of the existing CcPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPermission to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_permission", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_permission awscc_lambda_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPermissionProps
    */
    public constructor(scope: Construct, id: string, config: CcPermissionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_permission',
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
        this._action = config.action;
        this._eventSourceToken = config.eventSourceToken;
        this._functionName = config.functionName;
        this._functionUrlAuthType = config.functionUrlAuthType;
        this._invokedViaFunctionUrl = config.invokedViaFunctionUrl;
        this._principal = config.principal;
        this._principalOrgId = config.principalOrgId;
        this._sourceAccount = config.sourceAccount;
        this._sourceArn = config.sourceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // event_source_token - computed: true, optional: true, required: false
    private _eventSourceToken?: string; 
    public get eventSourceToken() {
        return this.getStringAttribute('event_source_token');
    }
    public set eventSourceToken(value: string) {
        this._eventSourceToken = value;
    }
    public resetEventSourceToken() {
        this._eventSourceToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceTokenInput() {
        return this._eventSourceToken;
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // function_url_auth_type - computed: true, optional: true, required: false
    private _functionUrlAuthType?: string; 
    public get functionUrlAuthType() {
        return this.getStringAttribute('function_url_auth_type');
    }
    public set functionUrlAuthType(value: string) {
        this._functionUrlAuthType = value;
    }
    public resetFunctionUrlAuthType() {
        this._functionUrlAuthType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionUrlAuthTypeInput() {
        return this._functionUrlAuthType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invoked_via_function_url - computed: true, optional: true, required: false
    private _invokedViaFunctionUrl?: boolean | cdktn.IResolvable; 
    public get invokedViaFunctionUrl() {
        return this.getBooleanAttribute('invoked_via_function_url');
    }
    public set invokedViaFunctionUrl(value: boolean | cdktn.IResolvable) {
        this._invokedViaFunctionUrl = value;
    }
    public resetInvokedViaFunctionUrl() {
        this._invokedViaFunctionUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokedViaFunctionUrlInput() {
        return this._invokedViaFunctionUrl;
    }

    // permission_id - computed: true, optional: false, required: false
    public get permissionId() {
        return this.getStringAttribute('permission_id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }

    // principal_org_id - computed: true, optional: true, required: false
    private _principalOrgId?: string; 
    public get principalOrgId() {
        return this.getStringAttribute('principal_org_id');
    }
    public set principalOrgId(value: string) {
        this._principalOrgId = value;
    }
    public resetPrincipalOrgId() {
        this._principalOrgId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalOrgIdInput() {
        return this._principalOrgId;
    }

    // source_account - computed: true, optional: true, required: false
    private _sourceAccount?: string; 
    public get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    public set sourceAccount(value: string) {
        this._sourceAccount = value;
    }
    public resetSourceAccount() {
        this._sourceAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAccountInput() {
        return this._sourceAccount;
    }

    // source_arn - computed: true, optional: true, required: false
    private _sourceArn?: string; 
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string) {
        this._sourceArn = value;
    }
    public resetSourceArn() {
        this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
        return this._sourceArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: cdktn.stringToTerraform(this._action),
            event_source_token: cdktn.stringToTerraform(this._eventSourceToken),
            function_name: cdktn.stringToTerraform(this._functionName),
            function_url_auth_type: cdktn.stringToTerraform(this._functionUrlAuthType),
            invoked_via_function_url: cdktn.booleanToTerraform(this._invokedViaFunctionUrl),
            principal: cdktn.stringToTerraform(this._principal),
            principal_org_id: cdktn.stringToTerraform(this._principalOrgId),
            source_account: cdktn.stringToTerraform(this._sourceAccount),
            source_arn: cdktn.stringToTerraform(this._sourceArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_source_token: {
                value: cdktn.stringToHclTerraform(this._eventSourceToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_url_auth_type: {
                value: cdktn.stringToHclTerraform(this._functionUrlAuthType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            invoked_via_function_url: {
                value: cdktn.booleanToHclTerraform(this._invokedViaFunctionUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal_org_id: {
                value: cdktn.stringToHclTerraform(this._principalOrgId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_account: {
                value: cdktn.stringToHclTerraform(this._sourceAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_arn: {
                value: cdktn.stringToHclTerraform(this._sourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPermission {
}
