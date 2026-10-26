// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIngestionDestinationProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the app bundle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn CcIngestionDestination#app_bundle_arn}
    */
    readonly appBundleArn: string;
    /**
    * Contains information about the destination of ingested data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination_configuration CcIngestionDestination#destination_configuration}
    */
    readonly destinationConfiguration: CcIngestionDestination.DestinationConfigurationProperty;
    /**
    * The Amazon Resource Name (ARN) of the ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#ingestion_arn CcIngestionDestination#ingestion_arn}
    */
    readonly ingestionArn: string;
    /**
    * Contains information about how ingested data is processed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#processing_configuration CcIngestionDestination#processing_configuration}
    */
    readonly processingConfiguration: CcIngestionDestination.ProcessingConfigurationProperty;
    /**
    * A map of the key-value pairs of the tag or tags to assign to the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#tags CcIngestionDestination#tags}
    */
    readonly tags?: CcIngestionDestination.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination awscc_appfabric_ingestion_destination}
*/
export class CcIngestionDestination extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appfabric_ingestion_destination";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIngestionDestination resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIngestionDestination to import
    * @param importFromId The id of the existing CcIngestionDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIngestionDestination to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appfabric_ingestion_destination", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination awscc_appfabric_ingestion_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIngestionDestinationProps
    */
    public constructor(scope: Construct, id: string, config: CcIngestionDestinationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appfabric_ingestion_destination',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._appBundleArn = config.appBundleArn;
        this._destinationConfiguration.internalValue = config.destinationConfiguration;
        this._ingestionArn = config.ingestionArn;
        this._processingConfiguration.internalValue = config.processingConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_bundle_arn - computed: false, optional: false, required: true
    private _appBundleArn?: string; 
    public get appBundleArn() {
        return this.getStringAttribute('app_bundle_arn');
    }
    public set appBundleArn(value: string) {
        this._appBundleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appBundleArnInput() {
        return this._appBundleArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // destination_configuration - computed: false, optional: false, required: true
    private _destinationConfiguration = new CcIngestionDestination.DestinationConfigurationPropertyOutputReference(this, "destination_configuration");
    public get destinationConfiguration() {
        return this._destinationConfiguration;
    }
    public putDestinationConfiguration(value: CcIngestionDestination.DestinationConfigurationProperty) {
        this._destinationConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigurationInput() {
        return this._destinationConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingestion_arn - computed: false, optional: false, required: true
    private _ingestionArn?: string; 
    public get ingestionArn() {
        return this.getStringAttribute('ingestion_arn');
    }
    public set ingestionArn(value: string) {
        this._ingestionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionArnInput() {
        return this._ingestionArn;
    }

    // processing_configuration - computed: false, optional: false, required: true
    private _processingConfiguration = new CcIngestionDestination.ProcessingConfigurationPropertyOutputReference(this, "processing_configuration");
    public get processingConfiguration() {
        return this._processingConfiguration;
    }
    public putProcessingConfiguration(value: CcIngestionDestination.ProcessingConfigurationProperty) {
        this._processingConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIngestionDestination.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIngestionDestination.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            app_bundle_arn: cdktn.stringToTerraform(this._appBundleArn),
            destination_configuration: ccIngestionDestinationDestinationConfigurationPropertyToTerraform(this._destinationConfiguration.internalValue),
            ingestion_arn: cdktn.stringToTerraform(this._ingestionArn),
            processing_configuration: ccIngestionDestinationProcessingConfigurationPropertyToTerraform(this._processingConfiguration.internalValue),
            tags: cdktn.listMapper(ccIngestionDestinationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_bundle_arn: {
                value: cdktn.stringToHclTerraform(this._appBundleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_configuration: {
                value: ccIngestionDestinationDestinationConfigurationPropertyToHclTerraform(this._destinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIngestionDestination.DestinationConfigurationProperty",
            },
            ingestion_arn: {
                value: cdktn.stringToHclTerraform(this._ingestionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            processing_configuration: {
                value: ccIngestionDestinationProcessingConfigurationPropertyToHclTerraform(this._processingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIngestionDestination.ProcessingConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIngestionDestinationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIngestionDestination.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIngestionDestinationFirehoseStreamPropertyToTerraform(struct?: CcIngestionDestination.FirehoseStreamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stream_name: cdktn.stringToTerraform(struct!.streamName),
    }
}


export function ccIngestionDestinationFirehoseStreamPropertyToHclTerraform(struct?: CcIngestionDestination.FirehoseStreamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stream_name: {
            value: cdktn.stringToHclTerraform(struct!.streamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationS3BucketPropertyToTerraform(struct?: CcIngestionDestination.S3BucketProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccIngestionDestinationS3BucketPropertyToHclTerraform(struct?: CcIngestionDestination.S3BucketProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationDestinationPropertyToTerraform(struct?: CcIngestionDestination.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        firehose_stream: ccIngestionDestinationFirehoseStreamPropertyToTerraform(struct!.firehoseStream),
        s3_bucket: ccIngestionDestinationS3BucketPropertyToTerraform(struct!.s3Bucket),
    }
}


export function ccIngestionDestinationDestinationPropertyToHclTerraform(struct?: CcIngestionDestination.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        firehose_stream: {
            value: ccIngestionDestinationFirehoseStreamPropertyToHclTerraform(struct!.firehoseStream),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseStreamProperty",
        },
        s3_bucket: {
            value: ccIngestionDestinationS3BucketPropertyToHclTerraform(struct!.s3Bucket),
            isBlock: true,
            type: "struct",
            storageClassType: "S3BucketProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationDestinationConfigurationAuditLogPropertyToTerraform(struct?: CcIngestionDestination.DestinationConfigurationAuditLogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccIngestionDestinationDestinationPropertyToTerraform(struct!.destination),
    }
}


export function ccIngestionDestinationDestinationConfigurationAuditLogPropertyToHclTerraform(struct?: CcIngestionDestination.DestinationConfigurationAuditLogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccIngestionDestinationDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationDestinationConfigurationPropertyToTerraform(struct?: CcIngestionDestination.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audit_log: ccIngestionDestinationDestinationConfigurationAuditLogPropertyToTerraform(struct!.auditLog),
    }
}


export function ccIngestionDestinationDestinationConfigurationPropertyToHclTerraform(struct?: CcIngestionDestination.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audit_log: {
            value: ccIngestionDestinationDestinationConfigurationAuditLogPropertyToHclTerraform(struct!.auditLog),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationConfigurationAuditLogProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationProcessingConfigurationAuditLogPropertyToTerraform(struct?: CcIngestionDestination.ProcessingConfigurationAuditLogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        format: cdktn.stringToTerraform(struct!.format),
        schema: cdktn.stringToTerraform(struct!.schema),
    }
}


export function ccIngestionDestinationProcessingConfigurationAuditLogPropertyToHclTerraform(struct?: CcIngestionDestination.ProcessingConfigurationAuditLogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema: {
            value: cdktn.stringToHclTerraform(struct!.schema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationProcessingConfigurationPropertyToTerraform(struct?: CcIngestionDestination.ProcessingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audit_log: ccIngestionDestinationProcessingConfigurationAuditLogPropertyToTerraform(struct!.auditLog),
    }
}


export function ccIngestionDestinationProcessingConfigurationPropertyToHclTerraform(struct?: CcIngestionDestination.ProcessingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audit_log: {
            value: ccIngestionDestinationProcessingConfigurationAuditLogPropertyToHclTerraform(struct!.auditLog),
            isBlock: true,
            type: "struct",
            storageClassType: "ProcessingConfigurationAuditLogProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIngestionDestinationTagsPropertyToTerraform(struct?: CcIngestionDestination.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIngestionDestinationTagsPropertyToHclTerraform(struct?: CcIngestionDestination.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcIngestionDestination {
export interface FirehoseStreamProperty {
    /**
    * The name of the Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#stream_name CcIngestionDestination#stream_name}
    */
    readonly streamName?: string;
}
export class FirehoseStreamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseStreamProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._streamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamName = this._streamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseStreamProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._streamName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._streamName = value.streamName;
        }
    }

    // stream_name - computed: true, optional: true, required: false
    private _streamName?: string; 
    public get streamName() {
        return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string) {
        this._streamName = value;
    }
    public resetStreamName() {
        this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
        return this._streamName;
    }
}
export interface S3BucketProperty {
    /**
    * The name of the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#bucket_name CcIngestionDestination#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The object key to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#prefix CcIngestionDestination#prefix}
    */
    readonly prefix?: string;
}
export class S3BucketPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3BucketProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3BucketProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._prefix = value.prefix;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface DestinationProperty {
    /**
    * Contains information about an Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#firehose_stream CcIngestionDestination#firehose_stream}
    */
    readonly firehoseStream?: FirehoseStreamProperty;
    /**
    * Contains information about an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#s3_bucket CcIngestionDestination#s3_bucket}
    */
    readonly s3Bucket?: S3BucketProperty;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firehoseStream?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehoseStream = this._firehoseStream?.internalValue;
        }
        if (this._s3Bucket?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firehoseStream.internalValue = undefined;
            this._s3Bucket.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firehoseStream.internalValue = value.firehoseStream;
            this._s3Bucket.internalValue = value.s3Bucket;
        }
    }

    // firehose_stream - computed: true, optional: true, required: false
    private _firehoseStream = new FirehoseStreamPropertyOutputReference(this, "firehose_stream");
    public get firehoseStream() {
        return this._firehoseStream;
    }
    public putFirehoseStream(value: FirehoseStreamProperty) {
        this._firehoseStream.internalValue = value;
    }
    public resetFirehoseStream() {
        this._firehoseStream.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseStreamInput() {
        return this._firehoseStream.internalValue;
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket = new S3BucketPropertyOutputReference(this, "s3_bucket");
    public get s3Bucket() {
        return this._s3Bucket;
    }
    public putS3Bucket(value: S3BucketProperty) {
        this._s3Bucket.internalValue = value;
    }
    public resetS3Bucket() {
        this._s3Bucket.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket.internalValue;
    }
}
export interface DestinationConfigurationAuditLogProperty {
    /**
    * Contains information about an audit log destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#destination CcIngestionDestination#destination}
    */
    readonly destination: DestinationProperty;
}
export class DestinationConfigurationAuditLogPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigurationAuditLogProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigurationAuditLogProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
        }
    }

    // destination - computed: false, optional: false, required: true
    private _destination = new DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: DestinationProperty) {
        this._destination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }
}
export interface DestinationConfigurationProperty {
    /**
    * Contains information about an audit log destination configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#audit_log CcIngestionDestination#audit_log}
    */
    readonly auditLog: DestinationConfigurationAuditLogProperty;
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
        if (this._auditLog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auditLog = this._auditLog?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auditLog.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auditLog.internalValue = value.auditLog;
        }
    }

    // audit_log - computed: false, optional: false, required: true
    private _auditLog = new DestinationConfigurationAuditLogPropertyOutputReference(this, "audit_log");
    public get auditLog() {
        return this._auditLog;
    }
    public putAuditLog(value: DestinationConfigurationAuditLogProperty) {
        this._auditLog.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get auditLogInput() {
        return this._auditLog.internalValue;
    }
}
export interface ProcessingConfigurationAuditLogProperty {
    /**
    * The format in which the audit logs need to be formatted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#format CcIngestionDestination#format}
    */
    readonly format: string;
    /**
    * The event schema in which the audit logs need to be formatted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#schema CcIngestionDestination#schema}
    */
    readonly schema: string;
}
export class ProcessingConfigurationAuditLogPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProcessingConfigurationAuditLogProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._schema !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessingConfigurationAuditLogProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._format = undefined;
            this._schema = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._format = value.format;
            this._schema = value.schema;
        }
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // schema - computed: false, optional: false, required: true
    private _schema?: string; 
    public get schema() {
        return this.getStringAttribute('schema');
    }
    public set schema(value: string) {
        this._schema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema;
    }
}
export interface ProcessingConfigurationProperty {
    /**
    * Contains information about an audit log processing configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#audit_log CcIngestionDestination#audit_log}
    */
    readonly auditLog: ProcessingConfigurationAuditLogProperty;
}
export class ProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProcessingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._auditLog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auditLog = this._auditLog?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auditLog.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auditLog.internalValue = value.auditLog;
        }
    }

    // audit_log - computed: false, optional: false, required: true
    private _auditLog = new ProcessingConfigurationAuditLogPropertyOutputReference(this, "audit_log");
    public get auditLog() {
        return this._auditLog;
    }
    public putAuditLog(value: ProcessingConfigurationAuditLogProperty) {
        this._auditLog.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get auditLogInput() {
        return this._auditLog.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#key CcIngestionDestination#key}
    */
    readonly key?: string;
    /**
    * Tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_ingestion_destination#value CcIngestionDestination#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
