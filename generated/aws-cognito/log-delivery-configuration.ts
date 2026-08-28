// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLogDeliveryConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#log_configurations CcLogDeliveryConfiguration#log_configurations}
    */
    readonly logConfigurations?: CcLogDeliveryConfiguration.LogConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#user_pool_id CcLogDeliveryConfiguration#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration awscc_cognito_log_delivery_configuration}
*/
export class CcLogDeliveryConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_log_delivery_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLogDeliveryConfiguration to import
    * @param importFromId The id of the existing CcLogDeliveryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLogDeliveryConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_log_delivery_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration awscc_cognito_log_delivery_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLogDeliveryConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcLogDeliveryConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_log_delivery_configuration',
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
        this._logConfigurations.internalValue = config.logConfigurations;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_configurations - computed: true, optional: true, required: false
    private _logConfigurations = new CcLogDeliveryConfiguration.LogConfigurationPropertyList(this, "log_configurations", false);
    public get logConfigurations() {
        return this._logConfigurations;
    }
    public putLogConfigurations(value: CcLogDeliveryConfiguration.LogConfigurationProperty[] | cdktn.IResolvable) {
        this._logConfigurations.internalValue = value;
    }
    public resetLogConfigurations() {
        this._logConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationsInput() {
        return this._logConfigurations.internalValue;
    }

    // log_delivery_configuration_id - computed: true, optional: false, required: false
    public get logDeliveryConfigurationId() {
        return this.getStringAttribute('log_delivery_configuration_id');
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            log_configurations: cdktn.listMapper(ccLogDeliveryConfigurationLogConfigurationPropertyToTerraform, false)(this._logConfigurations.internalValue),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            log_configurations: {
                value: cdktn.listMapperHcl(ccLogDeliveryConfigurationLogConfigurationPropertyToHclTerraform, false)(this._logConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLogDeliveryConfiguration.LogConfigurationPropertyList",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToTerraform(struct?: CcLogDeliveryConfiguration.CloudWatchLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToHclTerraform(struct?: CcLogDeliveryConfiguration.CloudWatchLogsConfigurationProperty | cdktn.IResolvable): any {
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


export function ccLogDeliveryConfigurationFirehoseConfigurationPropertyToTerraform(struct?: CcLogDeliveryConfiguration.FirehoseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccLogDeliveryConfigurationFirehoseConfigurationPropertyToHclTerraform(struct?: CcLogDeliveryConfiguration.FirehoseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLogDeliveryConfigurationS3ConfigurationPropertyToTerraform(struct?: CcLogDeliveryConfiguration.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    }
}


export function ccLogDeliveryConfigurationS3ConfigurationPropertyToHclTerraform(struct?: CcLogDeliveryConfiguration.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLogDeliveryConfigurationLogConfigurationPropertyToTerraform(struct?: CcLogDeliveryConfiguration.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_configuration: ccLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToTerraform(struct!.cloudwatchLogsConfiguration),
        event_source: cdktn.stringToTerraform(struct!.eventSource),
        firehose_configuration: ccLogDeliveryConfigurationFirehoseConfigurationPropertyToTerraform(struct!.firehoseConfiguration),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
        s3_configuration: ccLogDeliveryConfigurationS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    }
}


export function ccLogDeliveryConfigurationLogConfigurationPropertyToHclTerraform(struct?: CcLogDeliveryConfiguration.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_configuration: {
            value: ccLogDeliveryConfigurationCloudWatchLogsConfigurationPropertyToHclTerraform(struct!.cloudwatchLogsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsConfigurationProperty",
        },
        event_source: {
            value: cdktn.stringToHclTerraform(struct!.eventSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        firehose_configuration: {
            value: ccLogDeliveryConfigurationFirehoseConfigurationPropertyToHclTerraform(struct!.firehoseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseConfigurationProperty",
        },
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_configuration: {
            value: ccLogDeliveryConfigurationS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLogDeliveryConfiguration {
export interface CloudWatchLogsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#log_group_arn CcLogDeliveryConfiguration#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudWatchLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CloudWatchLogsConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface FirehoseConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#stream_arn CcLogDeliveryConfiguration#stream_arn}
    */
    readonly streamArn?: string;
}
export class FirehoseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._streamArn = value.streamArn;
        }
    }

    // stream_arn - computed: true, optional: true, required: false
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    public resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}
export interface S3ConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#bucket_arn CcLogDeliveryConfiguration#bucket_arn}
    */
    readonly bucketArn?: string;
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
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
        }
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }
}
export interface LogConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#cloudwatch_logs_configuration CcLogDeliveryConfiguration#cloudwatch_logs_configuration}
    */
    readonly cloudwatchLogsConfiguration?: CloudWatchLogsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#event_source CcLogDeliveryConfiguration#event_source}
    */
    readonly eventSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#firehose_configuration CcLogDeliveryConfiguration#firehose_configuration}
    */
    readonly firehoseConfiguration?: FirehoseConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#log_level CcLogDeliveryConfiguration#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_log_delivery_configuration#s3_configuration CcLogDeliveryConfiguration#s3_configuration}
    */
    readonly s3Configuration?: S3ConfigurationProperty;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsConfiguration = this._cloudwatchLogsConfiguration?.internalValue;
        }
        if (this._eventSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventSource = this._eventSource;
        }
        if (this._firehoseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehoseConfiguration = this._firehoseConfiguration?.internalValue;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsConfiguration.internalValue = undefined;
            this._eventSource = undefined;
            this._firehoseConfiguration.internalValue = undefined;
            this._logLevel = undefined;
            this._s3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsConfiguration.internalValue = value.cloudwatchLogsConfiguration;
            this._eventSource = value.eventSource;
            this._firehoseConfiguration.internalValue = value.firehoseConfiguration;
            this._logLevel = value.logLevel;
            this._s3Configuration.internalValue = value.s3Configuration;
        }
    }

    // cloudwatch_logs_configuration - computed: true, optional: true, required: false
    private _cloudwatchLogsConfiguration = new CloudWatchLogsConfigurationPropertyOutputReference(this, "cloudwatch_logs_configuration");
    public get cloudwatchLogsConfiguration() {
        return this._cloudwatchLogsConfiguration;
    }
    public putCloudwatchLogsConfiguration(value: CloudWatchLogsConfigurationProperty) {
        this._cloudwatchLogsConfiguration.internalValue = value;
    }
    public resetCloudwatchLogsConfiguration() {
        this._cloudwatchLogsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsConfigurationInput() {
        return this._cloudwatchLogsConfiguration.internalValue;
    }

    // event_source - computed: true, optional: true, required: false
    private _eventSource?: string; 
    public get eventSource() {
        return this.getStringAttribute('event_source');
    }
    public set eventSource(value: string) {
        this._eventSource = value;
    }
    public resetEventSource() {
        this._eventSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceInput() {
        return this._eventSource;
    }

    // firehose_configuration - computed: true, optional: true, required: false
    private _firehoseConfiguration = new FirehoseConfigurationPropertyOutputReference(this, "firehose_configuration");
    public get firehoseConfiguration() {
        return this._firehoseConfiguration;
    }
    public putFirehoseConfiguration(value: FirehoseConfigurationProperty) {
        this._firehoseConfiguration.internalValue = value;
    }
    public resetFirehoseConfiguration() {
        this._firehoseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseConfigurationInput() {
        return this._firehoseConfiguration.internalValue;
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
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

export class LogConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : LogConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): LogConfigurationPropertyOutputReference {
        return new LogConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
