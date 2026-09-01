// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStateMachineProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition CcStateMachine#definition}
    */
    readonly definition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location CcStateMachine#definition_s3_location}
    */
    readonly definitionS3Location?: CcStateMachine.S3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string CcStateMachine#definition_string}
    */
    readonly definitionString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions CcStateMachine#definition_substitutions}
    */
    readonly definitionSubstitutions?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration CcStateMachine#logging_configuration}
    */
    readonly loggingConfiguration?: CcStateMachine.LoggingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn CcStateMachine#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name CcStateMachine#state_machine_name}
    */
    readonly stateMachineName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type CcStateMachine#state_machine_type}
    */
    readonly stateMachineType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags CcStateMachine#tags}
    */
    readonly tags?: CcStateMachine.TagsEntryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration CcStateMachine#tracing_configuration}
    */
    readonly tracingConfiguration?: CcStateMachine.TracingConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine awscc_stepfunctions_state_machine}
*/
export class CcStateMachine extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_stepfunctions_state_machine";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStateMachine resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStateMachine to import
    * @param importFromId The id of the existing CcStateMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStateMachine to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_stepfunctions_state_machine", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine awscc_stepfunctions_state_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStateMachineProps
    */
    public constructor(scope: Construct, id: string, config: CcStateMachineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_stepfunctions_state_machine',
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
        this._definition = config.definition;
        this._definitionS3Location.internalValue = config.definitionS3Location;
        this._definitionString = config.definitionString;
        this._definitionSubstitutions = config.definitionSubstitutions;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._roleArn = config.roleArn;
        this._stateMachineName = config.stateMachineName;
        this._stateMachineType = config.stateMachineType;
        this._tags.internalValue = config.tags;
        this._tracingConfiguration.internalValue = config.tracingConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string; 
    public get definition() {
        return this.getStringAttribute('definition');
    }
    public set definition(value: string) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }

    // definition_s3_location - computed: true, optional: true, required: false
    private _definitionS3Location = new CcStateMachine.S3LocationPropertyOutputReference(this, "definition_s3_location");
    public get definitionS3Location() {
        return this._definitionS3Location;
    }
    public putDefinitionS3Location(value: CcStateMachine.S3LocationProperty) {
        this._definitionS3Location.internalValue = value;
    }
    public resetDefinitionS3Location() {
        this._definitionS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionS3LocationInput() {
        return this._definitionS3Location.internalValue;
    }

    // definition_string - computed: true, optional: true, required: false
    private _definitionString?: string; 
    public get definitionString() {
        return this.getStringAttribute('definition_string');
    }
    public set definitionString(value: string) {
        this._definitionString = value;
    }
    public resetDefinitionString() {
        this._definitionString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionStringInput() {
        return this._definitionString;
    }

    // definition_substitutions - computed: true, optional: true, required: false
    private _definitionSubstitutions?: { [key: string]: string }; 
    public get definitionSubstitutions() {
        return this.getStringMapAttribute('definition_substitutions');
    }
    public set definitionSubstitutions(value: { [key: string]: string }) {
        this._definitionSubstitutions = value;
    }
    public resetDefinitionSubstitutions() {
        this._definitionSubstitutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionSubstitutionsInput() {
        return this._definitionSubstitutions;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcStateMachine.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcStateMachine.LoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // state_machine_name - computed: true, optional: true, required: false
    private _stateMachineName?: string; 
    public get stateMachineName() {
        return this.getStringAttribute('state_machine_name');
    }
    public set stateMachineName(value: string) {
        this._stateMachineName = value;
    }
    public resetStateMachineName() {
        this._stateMachineName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateMachineNameInput() {
        return this._stateMachineName;
    }

    // state_machine_type - computed: true, optional: true, required: false
    private _stateMachineType?: string; 
    public get stateMachineType() {
        return this.getStringAttribute('state_machine_type');
    }
    public set stateMachineType(value: string) {
        this._stateMachineType = value;
    }
    public resetStateMachineType() {
        this._stateMachineType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateMachineTypeInput() {
        return this._stateMachineType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStateMachine.TagsEntryPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStateMachine.TagsEntryProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tracing_configuration - computed: true, optional: true, required: false
    private _tracingConfiguration = new CcStateMachine.TracingConfigurationPropertyOutputReference(this, "tracing_configuration");
    public get tracingConfiguration() {
        return this._tracingConfiguration;
    }
    public putTracingConfiguration(value: CcStateMachine.TracingConfigurationProperty) {
        this._tracingConfiguration.internalValue = value;
    }
    public resetTracingConfiguration() {
        this._tracingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tracingConfigurationInput() {
        return this._tracingConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            definition: cdktn.stringToTerraform(this._definition),
            definition_s3_location: ccStateMachineS3LocationPropertyToTerraform(this._definitionS3Location.internalValue),
            definition_string: cdktn.stringToTerraform(this._definitionString),
            definition_substitutions: cdktn.hashMapper(cdktn.stringToTerraform)(this._definitionSubstitutions),
            logging_configuration: ccStateMachineLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            state_machine_name: cdktn.stringToTerraform(this._stateMachineName),
            state_machine_type: cdktn.stringToTerraform(this._stateMachineType),
            tags: cdktn.listMapper(ccStateMachineTagsEntryPropertyToTerraform, false)(this._tags.internalValue),
            tracing_configuration: ccStateMachineTracingConfigurationPropertyToTerraform(this._tracingConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            definition: {
                value: cdktn.stringToHclTerraform(this._definition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            definition_s3_location: {
                value: ccStateMachineS3LocationPropertyToHclTerraform(this._definitionS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStateMachine.S3LocationProperty",
            },
            definition_string: {
                value: cdktn.stringToHclTerraform(this._definitionString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            definition_substitutions: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._definitionSubstitutions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            logging_configuration: {
                value: ccStateMachineLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStateMachine.LoggingConfigurationProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state_machine_name: {
                value: cdktn.stringToHclTerraform(this._stateMachineName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state_machine_type: {
                value: cdktn.stringToHclTerraform(this._stateMachineType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStateMachineTagsEntryPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStateMachine.TagsEntryPropertyList",
            },
            tracing_configuration: {
                value: ccStateMachineTracingConfigurationPropertyToHclTerraform(this._tracingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStateMachine.TracingConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStateMachineS3LocationPropertyToTerraform(struct?: CcStateMachine.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccStateMachineS3LocationPropertyToHclTerraform(struct?: CcStateMachine.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStateMachineCloudWatchLogsLogGroupPropertyToTerraform(struct?: CcStateMachine.CloudWatchLogsLogGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccStateMachineCloudWatchLogsLogGroupPropertyToHclTerraform(struct?: CcStateMachine.CloudWatchLogsLogGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStateMachineLogDestinationPropertyToTerraform(struct?: CcStateMachine.LogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_log_group: ccStateMachineCloudWatchLogsLogGroupPropertyToTerraform(struct!.cloudwatchLogsLogGroup),
    }
}


export function ccStateMachineLogDestinationPropertyToHclTerraform(struct?: CcStateMachine.LogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_log_group: {
            value: ccStateMachineCloudWatchLogsLogGroupPropertyToHclTerraform(struct!.cloudwatchLogsLogGroup),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsLogGroupProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStateMachineLoggingConfigurationPropertyToTerraform(struct?: CcStateMachine.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccStateMachineLogDestinationPropertyToTerraform, false)(struct!.destinations),
        include_execution_data: cdktn.booleanToTerraform(struct!.includeExecutionData),
        level: cdktn.stringToTerraform(struct!.level),
    }
}


export function ccStateMachineLoggingConfigurationPropertyToHclTerraform(struct?: CcStateMachine.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccStateMachineLogDestinationPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "LogDestinationPropertyList",
        },
        include_execution_data: {
            value: cdktn.booleanToHclTerraform(struct!.includeExecutionData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        level: {
            value: cdktn.stringToHclTerraform(struct!.level),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStateMachineTagsEntryPropertyToTerraform(struct?: CcStateMachine.TagsEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStateMachineTagsEntryPropertyToHclTerraform(struct?: CcStateMachine.TagsEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStateMachineTracingConfigurationPropertyToTerraform(struct?: CcStateMachine.TracingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccStateMachineTracingConfigurationPropertyToHclTerraform(struct?: CcStateMachine.TracingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcStateMachine {
export interface S3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#bucket CcStateMachine#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key CcStateMachine#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#version CcStateMachine#version}
    */
    readonly version?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
            this._version = value.version;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface CloudWatchLogsLogGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#log_group_arn CcStateMachine#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudWatchLogsLogGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsLogGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogsLogGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupArn = value.logGroupArn;
        }
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }
}
export interface LogDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group CcStateMachine#cloudwatch_logs_log_group}
    */
    readonly cloudwatchLogsLogGroup?: CloudWatchLogsLogGroupProperty;
}
export class LogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): LogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsLogGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsLogGroup = this._cloudwatchLogsLogGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogGroup.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogGroup.internalValue = value.cloudwatchLogsLogGroup;
        }
    }

    // cloudwatch_logs_log_group - computed: true, optional: true, required: false
    private _cloudwatchLogsLogGroup = new CloudWatchLogsLogGroupPropertyOutputReference(this, "cloudwatch_logs_log_group");
    public get cloudwatchLogsLogGroup() {
        return this._cloudwatchLogsLogGroup;
    }
    public putCloudwatchLogsLogGroup(value: CloudWatchLogsLogGroupProperty) {
        this._cloudwatchLogsLogGroup.internalValue = value;
    }
    public resetCloudwatchLogsLogGroup() {
        this._cloudwatchLogsLogGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsLogGroupInput() {
        return this._cloudwatchLogsLogGroup.internalValue;
    }
}

export class LogDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : LogDestinationProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): LogDestinationPropertyOutputReference {
        return new LogDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LoggingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#destinations CcStateMachine#destinations}
    */
    readonly destinations?: LogDestinationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#include_execution_data CcStateMachine#include_execution_data}
    */
    readonly includeExecutionData?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#level CcStateMachine#level}
    */
    readonly level?: string;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        if (this._includeExecutionData !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeExecutionData = this._includeExecutionData;
        }
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
            this._includeExecutionData = undefined;
            this._level = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
            this._includeExecutionData = value.includeExecutionData;
            this._level = value.level;
        }
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new LogDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: LogDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // include_execution_data - computed: true, optional: true, required: false
    private _includeExecutionData?: boolean | cdktn.IResolvable; 
    public get includeExecutionData() {
        return this.getBooleanAttribute('include_execution_data');
    }
    public set includeExecutionData(value: boolean | cdktn.IResolvable) {
        this._includeExecutionData = value;
    }
    public resetIncludeExecutionData() {
        this._includeExecutionData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeExecutionDataInput() {
        return this._includeExecutionData;
    }

    // level - computed: true, optional: true, required: false
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }
}
export interface TagsEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key CcStateMachine#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#value CcStateMachine#value}
    */
    readonly value?: string;
}
export class TagsEntryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagsEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagsEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagsEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsEntryProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagsEntryPropertyOutputReference {
        return new TagsEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TracingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#enabled CcStateMachine#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class TracingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TracingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TracingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
}
