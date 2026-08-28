// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRealtimeLogConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#end_points CcRealtimeLogConfig#end_points}
    */
    readonly endPoints: CcRealtimeLogConfig.EndPointProperty[] | cdktn.IResolvable;
    /**
    * A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
    *  For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#fields CcRealtimeLogConfig#fields}
    */
    readonly fields: string[];
    /**
    * The unique name of this real-time log configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#name CcRealtimeLogConfig#name}
    */
    readonly name: string;
    /**
    * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#sampling_rate CcRealtimeLogConfig#sampling_rate}
    */
    readonly samplingRate: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config awscc_cloudfront_realtime_log_config}
*/
export class CcRealtimeLogConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_realtime_log_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRealtimeLogConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRealtimeLogConfig to import
    * @param importFromId The id of the existing CcRealtimeLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRealtimeLogConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_realtime_log_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config awscc_cloudfront_realtime_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRealtimeLogConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcRealtimeLogConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_realtime_log_config',
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
        this._endPoints.internalValue = config.endPoints;
        this._fields = config.fields;
        this._name = config.name;
        this._samplingRate = config.samplingRate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // end_points - computed: false, optional: false, required: true
    private _endPoints = new CcRealtimeLogConfig.EndPointPropertyList(this, "end_points", false);
    public get endPoints() {
        return this._endPoints;
    }
    public putEndPoints(value: CcRealtimeLogConfig.EndPointProperty[] | cdktn.IResolvable) {
        this._endPoints.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endPointsInput() {
        return this._endPoints.internalValue;
    }

    // fields - computed: false, optional: false, required: true
    private _fields?: string[]; 
    public get fields() {
        return this.getListAttribute('fields');
    }
    public set fields(value: string[]) {
        this._fields = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields;
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

    // sampling_rate - computed: false, optional: false, required: true
    private _samplingRate?: number; 
    public get samplingRate() {
        return this.getNumberAttribute('sampling_rate');
    }
    public set samplingRate(value: number) {
        this._samplingRate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRateInput() {
        return this._samplingRate;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            end_points: cdktn.listMapper(ccRealtimeLogConfigEndPointPropertyToTerraform, false)(this._endPoints.internalValue),
            fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._fields),
            name: cdktn.stringToTerraform(this._name),
            sampling_rate: cdktn.numberToTerraform(this._samplingRate),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            end_points: {
                value: cdktn.listMapperHcl(ccRealtimeLogConfigEndPointPropertyToHclTerraform, false)(this._endPoints.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRealtimeLogConfig.EndPointPropertyList",
            },
            fields: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._fields),
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
            sampling_rate: {
                value: cdktn.numberToHclTerraform(this._samplingRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRealtimeLogConfigKinesisStreamConfigPropertyToTerraform(struct?: CcRealtimeLogConfig.KinesisStreamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccRealtimeLogConfigKinesisStreamConfigPropertyToHclTerraform(struct?: CcRealtimeLogConfig.KinesisStreamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccRealtimeLogConfigEndPointPropertyToTerraform(struct?: CcRealtimeLogConfig.EndPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kinesis_stream_config: ccRealtimeLogConfigKinesisStreamConfigPropertyToTerraform(struct!.kinesisStreamConfig),
        stream_type: cdktn.stringToTerraform(struct!.streamType),
    }
}


export function ccRealtimeLogConfigEndPointPropertyToHclTerraform(struct?: CcRealtimeLogConfig.EndPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kinesis_stream_config: {
            value: ccRealtimeLogConfigKinesisStreamConfigPropertyToHclTerraform(struct!.kinesisStreamConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisStreamConfigProperty",
        },
        stream_type: {
            value: cdktn.stringToHclTerraform(struct!.streamType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRealtimeLogConfig {
export interface KinesisStreamConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.
    *  For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#role_arn CcRealtimeLogConfig#role_arn}
    */
    readonly roleArn: string;
    /**
    * The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#stream_arn CcRealtimeLogConfig#stream_arn}
    */
    readonly streamArn: string;
}
export class KinesisStreamConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisStreamConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisStreamConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._streamArn = value.streamArn;
        }
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

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}
export interface EndPointProperty {
    /**
    * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config CcRealtimeLogConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig: KinesisStreamConfigProperty;
    /**
    * The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_realtime_log_config#stream_type CcRealtimeLogConfig#stream_type}
    */
    readonly streamType: string;
}
export class EndPointPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EndPointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kinesisStreamConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamConfig = this._kinesisStreamConfig?.internalValue;
        }
        if (this._streamType !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamType = this._streamType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndPointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kinesisStreamConfig.internalValue = undefined;
            this._streamType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kinesisStreamConfig.internalValue = value.kinesisStreamConfig;
            this._streamType = value.streamType;
        }
    }

    // kinesis_stream_config - computed: false, optional: false, required: true
    private _kinesisStreamConfig = new KinesisStreamConfigPropertyOutputReference(this, "kinesis_stream_config");
    public get kinesisStreamConfig() {
        return this._kinesisStreamConfig;
    }
    public putKinesisStreamConfig(value: KinesisStreamConfigProperty) {
        this._kinesisStreamConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamConfigInput() {
        return this._kinesisStreamConfig.internalValue;
    }

    // stream_type - computed: false, optional: false, required: true
    private _streamType?: string; 
    public get streamType() {
        return this.getStringAttribute('stream_type');
    }
    public set streamType(value: string) {
        this._streamType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamTypeInput() {
        return this._streamType;
    }
}

export class EndPointPropertyList extends cdktn.ComplexList {
    public internalValue? : EndPointProperty[] | cdktn.IResolvable

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
    public get(index: number): EndPointPropertyOutputReference {
        return new EndPointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
