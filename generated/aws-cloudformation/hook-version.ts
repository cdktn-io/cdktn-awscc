// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHookVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#execution_role_arn CcHookVersion#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Specifies logging configuration information for a type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#logging_config CcHookVersion#logging_config}
    */
    readonly loggingConfig?: CcHookVersion.LoggingConfigProperty;
    /**
    * A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.
    * 
    * For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#schema_handler_package CcHookVersion#schema_handler_package}
    */
    readonly schemaHandlerPackage: string;
    /**
    * The name of the type being registered.
    * 
    * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#type_name CcHookVersion#type_name}
    */
    readonly typeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version awscc_cloudformation_hook_version}
*/
export class CcHookVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_hook_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHookVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHookVersion to import
    * @param importFromId The id of the existing CcHookVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHookVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_hook_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version awscc_cloudformation_hook_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHookVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcHookVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_hook_version',
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
        this._executionRoleArn = config.executionRoleArn;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._schemaHandlerPackage = config.schemaHandlerPackage;
        this._typeName = config.typeName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // execution_role_arn - computed: true, optional: true, required: false
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_default_version - computed: true, optional: false, required: false
    public get isDefaultVersion() {
        return this.getBooleanAttribute('is_default_version');
    }

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new CcHookVersion.LoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: CcHookVersion.LoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }

    // schema_handler_package - computed: false, optional: false, required: true
    private _schemaHandlerPackage?: string; 
    public get schemaHandlerPackage() {
        return this.getStringAttribute('schema_handler_package');
    }
    public set schemaHandlerPackage(value: string) {
        this._schemaHandlerPackage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaHandlerPackageInput() {
        return this._schemaHandlerPackage;
    }

    // type_arn - computed: true, optional: false, required: false
    public get typeArn() {
        return this.getStringAttribute('type_arn');
    }

    // type_name - computed: false, optional: false, required: true
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
        return this.getStringAttribute('version_id');
    }

    // visibility - computed: true, optional: false, required: false
    public get visibility() {
        return this.getStringAttribute('visibility');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            logging_config: ccHookVersionLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
            schema_handler_package: cdktn.stringToTerraform(this._schemaHandlerPackage),
            type_name: cdktn.stringToTerraform(this._typeName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_config: {
                value: ccHookVersionLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHookVersion.LoggingConfigProperty",
            },
            schema_handler_package: {
                value: cdktn.stringToHclTerraform(this._schemaHandlerPackage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type_name: {
                value: cdktn.stringToHclTerraform(this._typeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHookVersionLoggingConfigPropertyToTerraform(struct?: CcHookVersion.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_role_arn: cdktn.stringToTerraform(struct!.logRoleArn),
    }
}


export function ccHookVersionLoggingConfigPropertyToHclTerraform(struct?: CcHookVersion.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.logRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcHookVersion {
export interface LoggingConfigProperty {
    /**
    * The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#log_group_name CcHookVersion#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_hook_version#log_role_arn CcHookVersion#log_role_arn}
    */
    readonly logRoleArn?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logRoleArn = this._logRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupName = undefined;
            this._logRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupName = value.logGroupName;
            this._logRoleArn = value.logRoleArn;
        }
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // log_role_arn - computed: true, optional: true, required: false
    private _logRoleArn?: string; 
    public get logRoleArn() {
        return this.getStringAttribute('log_role_arn');
    }
    public set logRoleArn(value: string) {
        this._logRoleArn = value;
    }
    public resetLogRoleArn() {
        this._logRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logRoleArnInput() {
        return this._logRoleArn;
    }
}
}
