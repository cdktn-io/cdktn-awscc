// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTypeActivationProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#auto_update CcTypeActivation#auto_update}
    */
    readonly autoUpdate?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#execution_role_arn CcTypeActivation#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Specifies logging configuration information for a type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#logging_config CcTypeActivation#logging_config}
    */
    readonly loggingConfig?: CcTypeActivation.LoggingConfigProperty;
    /**
    * The Major Version of the type you want to enable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#major_version CcTypeActivation#major_version}
    */
    readonly majorVersion?: string;
    /**
    * The Amazon Resource Number (ARN) assigned to the public extension upon publication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#public_type_arn CcTypeActivation#public_type_arn}
    */
    readonly publicTypeArn?: string;
    /**
    * The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#publisher_id CcTypeActivation#publisher_id}
    */
    readonly publisherId?: string;
    /**
    * The kind of extension
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#type CcTypeActivation#type}
    */
    readonly type?: string;
    /**
    * The name of the type being registered.
    * 
    * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#type_name CcTypeActivation#type_name}
    */
    readonly typeName?: string;
    /**
    * An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#type_name_alias CcTypeActivation#type_name_alias}
    */
    readonly typeNameAlias?: string;
    /**
    * Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#version_bump CcTypeActivation#version_bump}
    */
    readonly versionBump?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation}
*/
export class CcTypeActivation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_type_activation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTypeActivation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTypeActivation to import
    * @param importFromId The id of the existing CcTypeActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTypeActivation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_type_activation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTypeActivationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTypeActivationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_type_activation',
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
        this._autoUpdate = config.autoUpdate;
        this._executionRoleArn = config.executionRoleArn;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._majorVersion = config.majorVersion;
        this._publicTypeArn = config.publicTypeArn;
        this._publisherId = config.publisherId;
        this._type = config.type;
        this._typeName = config.typeName;
        this._typeNameAlias = config.typeNameAlias;
        this._versionBump = config.versionBump;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_update - computed: true, optional: true, required: false
    private _autoUpdate?: boolean | cdktn.IResolvable; 
    public get autoUpdate() {
        return this.getBooleanAttribute('auto_update');
    }
    public set autoUpdate(value: boolean | cdktn.IResolvable) {
        this._autoUpdate = value;
    }
    public resetAutoUpdate() {
        this._autoUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoUpdateInput() {
        return this._autoUpdate;
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

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new CcTypeActivation.LoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: CcTypeActivation.LoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }

    // major_version - computed: true, optional: true, required: false
    private _majorVersion?: string; 
    public get majorVersion() {
        return this.getStringAttribute('major_version');
    }
    public set majorVersion(value: string) {
        this._majorVersion = value;
    }
    public resetMajorVersion() {
        this._majorVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get majorVersionInput() {
        return this._majorVersion;
    }

    // public_type_arn - computed: true, optional: true, required: false
    private _publicTypeArn?: string; 
    public get publicTypeArn() {
        return this.getStringAttribute('public_type_arn');
    }
    public set publicTypeArn(value: string) {
        this._publicTypeArn = value;
    }
    public resetPublicTypeArn() {
        this._publicTypeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicTypeArnInput() {
        return this._publicTypeArn;
    }

    // publisher_id - computed: true, optional: true, required: false
    private _publisherId?: string; 
    public get publisherId() {
        return this.getStringAttribute('publisher_id');
    }
    public set publisherId(value: string) {
        this._publisherId = value;
    }
    public resetPublisherId() {
        this._publisherId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publisherIdInput() {
        return this._publisherId;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    public resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }

    // type_name_alias - computed: true, optional: true, required: false
    private _typeNameAlias?: string; 
    public get typeNameAlias() {
        return this.getStringAttribute('type_name_alias');
    }
    public set typeNameAlias(value: string) {
        this._typeNameAlias = value;
    }
    public resetTypeNameAlias() {
        this._typeNameAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameAliasInput() {
        return this._typeNameAlias;
    }

    // version_bump - computed: true, optional: true, required: false
    private _versionBump?: string; 
    public get versionBump() {
        return this.getStringAttribute('version_bump');
    }
    public set versionBump(value: string) {
        this._versionBump = value;
    }
    public resetVersionBump() {
        this._versionBump = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionBumpInput() {
        return this._versionBump;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_update: cdktn.booleanToTerraform(this._autoUpdate),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            logging_config: ccTypeActivationLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
            major_version: cdktn.stringToTerraform(this._majorVersion),
            public_type_arn: cdktn.stringToTerraform(this._publicTypeArn),
            publisher_id: cdktn.stringToTerraform(this._publisherId),
            type: cdktn.stringToTerraform(this._type),
            type_name: cdktn.stringToTerraform(this._typeName),
            type_name_alias: cdktn.stringToTerraform(this._typeNameAlias),
            version_bump: cdktn.stringToTerraform(this._versionBump),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_update: {
                value: cdktn.booleanToHclTerraform(this._autoUpdate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_config: {
                value: ccTypeActivationLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTypeActivation.LoggingConfigProperty",
            },
            major_version: {
                value: cdktn.stringToHclTerraform(this._majorVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_type_arn: {
                value: cdktn.stringToHclTerraform(this._publicTypeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publisher_id: {
                value: cdktn.stringToHclTerraform(this._publisherId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
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
            type_name_alias: {
                value: cdktn.stringToHclTerraform(this._typeNameAlias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version_bump: {
                value: cdktn.stringToHclTerraform(this._versionBump),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTypeActivationLoggingConfigPropertyToTerraform(struct?: CcTypeActivation.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_role_arn: cdktn.stringToTerraform(struct!.logRoleArn),
    }
}


export function ccTypeActivationLoggingConfigPropertyToHclTerraform(struct?: CcTypeActivation.LoggingConfigProperty | cdktn.IResolvable): any {
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


export namespace CcTypeActivation {
export interface LoggingConfigProperty {
    /**
    * The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#log_group_name CcTypeActivation#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_type_activation#log_role_arn CcTypeActivation#log_role_arn}
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
