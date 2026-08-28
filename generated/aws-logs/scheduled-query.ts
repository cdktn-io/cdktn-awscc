// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScheduledQueryProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#description CcScheduledQuery#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#destination_configuration CcScheduledQuery#destination_configuration}
    */
    readonly destinationConfiguration?: CcScheduledQuery.DestinationConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#execution_role_arn CcScheduledQuery#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#log_group_identifiers CcScheduledQuery#log_group_identifiers}
    */
    readonly logGroupIdentifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#name CcScheduledQuery#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#query_language CcScheduledQuery#query_language}
    */
    readonly queryLanguage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#query_string CcScheduledQuery#query_string}
    */
    readonly queryString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#schedule_end_time CcScheduledQuery#schedule_end_time}
    */
    readonly scheduleEndTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#schedule_expression CcScheduledQuery#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#schedule_start_time CcScheduledQuery#schedule_start_time}
    */
    readonly scheduleStartTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#start_time_offset CcScheduledQuery#start_time_offset}
    */
    readonly startTimeOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#state CcScheduledQuery#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#tags CcScheduledQuery#tags}
    */
    readonly tags?: CcScheduledQuery.TagsItemsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#timezone CcScheduledQuery#timezone}
    */
    readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query awscc_logs_scheduled_query}
*/
export class CcScheduledQuery extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_scheduled_query";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScheduledQuery resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScheduledQuery to import
    * @param importFromId The id of the existing CcScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScheduledQuery to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_scheduled_query", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query awscc_logs_scheduled_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScheduledQueryProps
    */
    public constructor(scope: Construct, id: string, config: CcScheduledQueryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_scheduled_query',
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
        this._description = config.description;
        this._destinationConfiguration.internalValue = config.destinationConfiguration;
        this._executionRoleArn = config.executionRoleArn;
        this._logGroupIdentifiers = config.logGroupIdentifiers;
        this._name = config.name;
        this._queryLanguage = config.queryLanguage;
        this._queryString = config.queryString;
        this._scheduleEndTime = config.scheduleEndTime;
        this._scheduleExpression = config.scheduleExpression;
        this._scheduleStartTime = config.scheduleStartTime;
        this._startTimeOffset = config.startTimeOffset;
        this._state = config.state;
        this._tags.internalValue = config.tags;
        this._timezone = config.timezone;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getNumberAttribute('creation_time');
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

    // destination_configuration - computed: true, optional: true, required: false
    private _destinationConfiguration = new CcScheduledQuery.DestinationConfigurationPropertyOutputReference(this, "destination_configuration");
    public get destinationConfiguration() {
        return this._destinationConfiguration;
    }
    public putDestinationConfiguration(value: CcScheduledQuery.DestinationConfigurationProperty) {
        this._destinationConfiguration.internalValue = value;
    }
    public resetDestinationConfiguration() {
        this._destinationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigurationInput() {
        return this._destinationConfiguration.internalValue;
    }

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_execution_status - computed: true, optional: false, required: false
    public get lastExecutionStatus() {
        return this.getStringAttribute('last_execution_status');
    }

    // last_triggered_time - computed: true, optional: false, required: false
    public get lastTriggeredTime() {
        return this.getNumberAttribute('last_triggered_time');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getNumberAttribute('last_updated_time');
    }

    // log_group_identifiers - computed: true, optional: true, required: false
    private _logGroupIdentifiers?: string[]; 
    public get logGroupIdentifiers() {
        return this.getListAttribute('log_group_identifiers');
    }
    public set logGroupIdentifiers(value: string[]) {
        this._logGroupIdentifiers = value;
    }
    public resetLogGroupIdentifiers() {
        this._logGroupIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupIdentifiersInput() {
        return this._logGroupIdentifiers;
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

    // query_language - computed: false, optional: false, required: true
    private _queryLanguage?: string; 
    public get queryLanguage() {
        return this.getStringAttribute('query_language');
    }
    public set queryLanguage(value: string) {
        this._queryLanguage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryLanguageInput() {
        return this._queryLanguage;
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // schedule_end_time - computed: true, optional: true, required: false
    private _scheduleEndTime?: number; 
    public get scheduleEndTime() {
        return this.getNumberAttribute('schedule_end_time');
    }
    public set scheduleEndTime(value: number) {
        this._scheduleEndTime = value;
    }
    public resetScheduleEndTime() {
        this._scheduleEndTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleEndTimeInput() {
        return this._scheduleEndTime;
    }

    // schedule_expression - computed: false, optional: false, required: true
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // schedule_start_time - computed: true, optional: true, required: false
    private _scheduleStartTime?: number; 
    public get scheduleStartTime() {
        return this.getNumberAttribute('schedule_start_time');
    }
    public set scheduleStartTime(value: number) {
        this._scheduleStartTime = value;
    }
    public resetScheduleStartTime() {
        this._scheduleStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleStartTimeInput() {
        return this._scheduleStartTime;
    }

    // scheduled_query_arn - computed: true, optional: false, required: false
    public get scheduledQueryArn() {
        return this.getStringAttribute('scheduled_query_arn');
    }

    // start_time_offset - computed: true, optional: true, required: false
    private _startTimeOffset?: number; 
    public get startTimeOffset() {
        return this.getNumberAttribute('start_time_offset');
    }
    public set startTimeOffset(value: number) {
        this._startTimeOffset = value;
    }
    public resetStartTimeOffset() {
        this._startTimeOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeOffsetInput() {
        return this._startTimeOffset;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcScheduledQuery.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcScheduledQuery.TagsItemsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            destination_configuration: ccScheduledQueryDestinationConfigurationPropertyToTerraform(this._destinationConfiguration.internalValue),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            log_group_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logGroupIdentifiers),
            name: cdktn.stringToTerraform(this._name),
            query_language: cdktn.stringToTerraform(this._queryLanguage),
            query_string: cdktn.stringToTerraform(this._queryString),
            schedule_end_time: cdktn.numberToTerraform(this._scheduleEndTime),
            schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
            schedule_start_time: cdktn.numberToTerraform(this._scheduleStartTime),
            start_time_offset: cdktn.numberToTerraform(this._startTimeOffset),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.listMapper(ccScheduledQueryTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
            timezone: cdktn.stringToTerraform(this._timezone),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_configuration: {
                value: ccScheduledQueryDestinationConfigurationPropertyToHclTerraform(this._destinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScheduledQuery.DestinationConfigurationProperty",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_group_identifiers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logGroupIdentifiers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_language: {
                value: cdktn.stringToHclTerraform(this._queryLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_string: {
                value: cdktn.stringToHclTerraform(this._queryString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_end_time: {
                value: cdktn.numberToHclTerraform(this._scheduleEndTime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            schedule_expression: {
                value: cdktn.stringToHclTerraform(this._scheduleExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_start_time: {
                value: cdktn.numberToHclTerraform(this._scheduleStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            start_time_offset: {
                value: cdktn.numberToHclTerraform(this._startTimeOffset),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccScheduledQueryTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcScheduledQuery.TagsItemsPropertyList",
            },
            timezone: {
                value: cdktn.stringToHclTerraform(this._timezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScheduledQueryS3ConfigurationPropertyToTerraform(struct?: CcScheduledQuery.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_identifier: cdktn.stringToTerraform(struct!.destinationIdentifier),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccScheduledQueryS3ConfigurationPropertyToHclTerraform(struct?: CcScheduledQuery.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_identifier: {
            value: cdktn.stringToHclTerraform(struct!.destinationIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledQueryDestinationConfigurationPropertyToTerraform(struct?: CcScheduledQuery.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_configuration: ccScheduledQueryS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    }
}


export function ccScheduledQueryDestinationConfigurationPropertyToHclTerraform(struct?: CcScheduledQuery.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_configuration: {
            value: ccScheduledQueryS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledQueryTagsItemsPropertyToTerraform(struct?: CcScheduledQuery.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScheduledQueryTagsItemsPropertyToHclTerraform(struct?: CcScheduledQuery.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcScheduledQuery {
export interface S3ConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#destination_identifier CcScheduledQuery#destination_identifier}
    */
    readonly destinationIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#role_arn CcScheduledQuery#role_arn}
    */
    readonly roleArn?: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationIdentifier = this._destinationIdentifier;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationIdentifier = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationIdentifier = value.destinationIdentifier;
            this._roleArn = value.roleArn;
        }
    }

    // destination_identifier - computed: true, optional: true, required: false
    private _destinationIdentifier?: string; 
    public get destinationIdentifier() {
        return this.getStringAttribute('destination_identifier');
    }
    public set destinationIdentifier(value: string) {
        this._destinationIdentifier = value;
    }
    public resetDestinationIdentifier() {
        this._destinationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIdentifierInput() {
        return this._destinationIdentifier;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
export interface DestinationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#s3_configuration CcScheduledQuery#s3_configuration}
    */
    readonly s3Configuration?: S3ConfigurationProperty;
}
export class DestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Configuration.internalValue = value.s3Configuration;
        }
    }

    // s3_configuration - computed: true, optional: true, required: false
    private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
    public get s3Configuration() {
        return this._s3Configuration;
    }
    public putS3Configuration(value: S3ConfigurationProperty) {
        this._s3Configuration.internalValue = value;
    }
    public resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
}
export interface TagsItemsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#key CcScheduledQuery#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_scheduled_query#value CcScheduledQuery#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
