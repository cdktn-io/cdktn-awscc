// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVerifiedAccessInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain CcVerifiedAccessInstance#cidr_endpoints_custom_sub_domain}
    */
    readonly cidrEndpointsCustomSubDomain?: string;
    /**
    * A description for the AWS Verified Access instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#description CcVerifiedAccessInstance#description}
    */
    readonly description?: string;
    /**
    * Indicates whether FIPS is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#fips_enabled CcVerifiedAccessInstance#fips_enabled}
    */
    readonly fipsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The configuration options for AWS Verified Access instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#logging_configurations CcVerifiedAccessInstance#logging_configurations}
    */
    readonly loggingConfigurations?: CcVerifiedAccessInstance.VerifiedAccessLogsProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#tags CcVerifiedAccessInstance#tags}
    */
    readonly tags?: CcVerifiedAccessInstance.TagProperty[] | cdktn.IResolvable;
    /**
    * The IDs of the AWS Verified Access trust providers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids CcVerifiedAccessInstance#verified_access_trust_provider_ids}
    */
    readonly verifiedAccessTrustProviderIds?: string[];
    /**
    * AWS Verified Access trust providers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#verified_access_trust_providers CcVerifiedAccessInstance#verified_access_trust_providers}
    */
    readonly verifiedAccessTrustProviders?: CcVerifiedAccessInstance.VerifiedAccessTrustProviderProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance awscc_ec2_verified_access_instance}
*/
export class CcVerifiedAccessInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_verified_access_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVerifiedAccessInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVerifiedAccessInstance to import
    * @param importFromId The id of the existing CcVerifiedAccessInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVerifiedAccessInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance awscc_ec2_verified_access_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVerifiedAccessInstanceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcVerifiedAccessInstanceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_verified_access_instance',
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
        this._cidrEndpointsCustomSubDomain = config.cidrEndpointsCustomSubDomain;
        this._description = config.description;
        this._fipsEnabled = config.fipsEnabled;
        this._loggingConfigurations.internalValue = config.loggingConfigurations;
        this._tags.internalValue = config.tags;
        this._verifiedAccessTrustProviderIds = config.verifiedAccessTrustProviderIds;
        this._verifiedAccessTrustProviders.internalValue = config.verifiedAccessTrustProviders;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_endpoints_custom_sub_domain - computed: true, optional: true, required: false
    private _cidrEndpointsCustomSubDomain?: string; 
    public get cidrEndpointsCustomSubDomain() {
        return this.getStringAttribute('cidr_endpoints_custom_sub_domain');
    }
    public set cidrEndpointsCustomSubDomain(value: string) {
        this._cidrEndpointsCustomSubDomain = value;
    }
    public resetCidrEndpointsCustomSubDomain() {
        this._cidrEndpointsCustomSubDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrEndpointsCustomSubDomainInput() {
        return this._cidrEndpointsCustomSubDomain;
    }

    // cidr_endpoints_custom_sub_domain_name_servers - computed: true, optional: false, required: false
    public get cidrEndpointsCustomSubDomainNameServers() {
        return this.getListAttribute('cidr_endpoints_custom_sub_domain_name_servers');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // fips_enabled - computed: true, optional: true, required: false
    private _fipsEnabled?: boolean | cdktn.IResolvable; 
    public get fipsEnabled() {
        return this.getBooleanAttribute('fips_enabled');
    }
    public set fipsEnabled(value: boolean | cdktn.IResolvable) {
        this._fipsEnabled = value;
    }
    public resetFipsEnabled() {
        this._fipsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fipsEnabledInput() {
        return this._fipsEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // logging_configurations - computed: true, optional: true, required: false
    private _loggingConfigurations = new CcVerifiedAccessInstance.VerifiedAccessLogsPropertyOutputReference(this, "logging_configurations");
    public get loggingConfigurations() {
        return this._loggingConfigurations;
    }
    public putLoggingConfigurations(value: CcVerifiedAccessInstance.VerifiedAccessLogsProperty) {
        this._loggingConfigurations.internalValue = value;
    }
    public resetLoggingConfigurations() {
        this._loggingConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationsInput() {
        return this._loggingConfigurations.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVerifiedAccessInstance.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVerifiedAccessInstance.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // verified_access_instance_id - computed: true, optional: false, required: false
    public get verifiedAccessInstanceId() {
        return this.getStringAttribute('verified_access_instance_id');
    }

    // verified_access_trust_provider_ids - computed: true, optional: true, required: false
    private _verifiedAccessTrustProviderIds?: string[]; 
    public get verifiedAccessTrustProviderIds() {
        return cdktn.Fn.tolist(this.getListAttribute('verified_access_trust_provider_ids'));
    }
    public set verifiedAccessTrustProviderIds(value: string[]) {
        this._verifiedAccessTrustProviderIds = value;
    }
    public resetVerifiedAccessTrustProviderIds() {
        this._verifiedAccessTrustProviderIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifiedAccessTrustProviderIdsInput() {
        return this._verifiedAccessTrustProviderIds;
    }

    // verified_access_trust_providers - computed: true, optional: true, required: false
    private _verifiedAccessTrustProviders = new CcVerifiedAccessInstance.VerifiedAccessTrustProviderPropertyList(this, "verified_access_trust_providers", true);
    public get verifiedAccessTrustProviders() {
        return this._verifiedAccessTrustProviders;
    }
    public putVerifiedAccessTrustProviders(value: CcVerifiedAccessInstance.VerifiedAccessTrustProviderProperty[] | cdktn.IResolvable) {
        this._verifiedAccessTrustProviders.internalValue = value;
    }
    public resetVerifiedAccessTrustProviders() {
        this._verifiedAccessTrustProviders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifiedAccessTrustProvidersInput() {
        return this._verifiedAccessTrustProviders.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cidr_endpoints_custom_sub_domain: cdktn.stringToTerraform(this._cidrEndpointsCustomSubDomain),
            description: cdktn.stringToTerraform(this._description),
            fips_enabled: cdktn.booleanToTerraform(this._fipsEnabled),
            logging_configurations: ccVerifiedAccessInstanceVerifiedAccessLogsPropertyToTerraform(this._loggingConfigurations.internalValue),
            tags: cdktn.listMapper(ccVerifiedAccessInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
            verified_access_trust_provider_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._verifiedAccessTrustProviderIds),
            verified_access_trust_providers: cdktn.listMapper(ccVerifiedAccessInstanceVerifiedAccessTrustProviderPropertyToTerraform, false)(this._verifiedAccessTrustProviders.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cidr_endpoints_custom_sub_domain: {
                value: cdktn.stringToHclTerraform(this._cidrEndpointsCustomSubDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fips_enabled: {
                value: cdktn.booleanToHclTerraform(this._fipsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            logging_configurations: {
                value: ccVerifiedAccessInstanceVerifiedAccessLogsPropertyToHclTerraform(this._loggingConfigurations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessInstance.VerifiedAccessLogsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVerifiedAccessInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVerifiedAccessInstance.TagPropertyList",
            },
            verified_access_trust_provider_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._verifiedAccessTrustProviderIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            verified_access_trust_providers: {
                value: cdktn.listMapperHcl(ccVerifiedAccessInstanceVerifiedAccessTrustProviderPropertyToHclTerraform, false)(this._verifiedAccessTrustProviders.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVerifiedAccessInstance.VerifiedAccessTrustProviderPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVerifiedAccessInstanceCloudWatchLogsPropertyToTerraform(struct?: CcVerifiedAccessInstance.CloudWatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccVerifiedAccessInstanceCloudWatchLogsPropertyToHclTerraform(struct?: CcVerifiedAccessInstance.CloudWatchLogsProperty | cdktn.IResolvable): any {
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
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessInstanceKinesisDataFirehosePropertyToTerraform(struct?: CcVerifiedAccessInstance.KinesisDataFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccVerifiedAccessInstanceKinesisDataFirehosePropertyToHclTerraform(struct?: CcVerifiedAccessInstance.KinesisDataFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStream),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccVerifiedAccessInstanceS3PropertyToTerraform(struct?: CcVerifiedAccessInstance.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccVerifiedAccessInstanceS3PropertyToHclTerraform(struct?: CcVerifiedAccessInstance.S3Property | cdktn.IResolvable): any {
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
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccVerifiedAccessInstanceVerifiedAccessLogsPropertyToTerraform(struct?: CcVerifiedAccessInstance.VerifiedAccessLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccVerifiedAccessInstanceCloudWatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
        include_trust_context: cdktn.booleanToTerraform(struct!.includeTrustContext),
        kinesis_data_firehose: ccVerifiedAccessInstanceKinesisDataFirehosePropertyToTerraform(struct!.kinesisDataFirehose),
        log_version: cdktn.stringToTerraform(struct!.logVersion),
        s3: ccVerifiedAccessInstanceS3PropertyToTerraform(struct!.s3),
    }
}


export function ccVerifiedAccessInstanceVerifiedAccessLogsPropertyToHclTerraform(struct?: CcVerifiedAccessInstance.VerifiedAccessLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccVerifiedAccessInstanceCloudWatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsProperty",
        },
        include_trust_context: {
            value: cdktn.booleanToHclTerraform(struct!.includeTrustContext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kinesis_data_firehose: {
            value: ccVerifiedAccessInstanceKinesisDataFirehosePropertyToHclTerraform(struct!.kinesisDataFirehose),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisDataFirehoseProperty",
        },
        log_version: {
            value: cdktn.stringToHclTerraform(struct!.logVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3: {
            value: ccVerifiedAccessInstanceS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessInstanceTagPropertyToTerraform(struct?: CcVerifiedAccessInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVerifiedAccessInstanceTagPropertyToHclTerraform(struct?: CcVerifiedAccessInstance.TagProperty | cdktn.IResolvable): any {
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


export function ccVerifiedAccessInstanceVerifiedAccessTrustProviderPropertyToTerraform(struct?: CcVerifiedAccessInstance.VerifiedAccessTrustProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        device_trust_provider_type: cdktn.stringToTerraform(struct!.deviceTrustProviderType),
        trust_provider_type: cdktn.stringToTerraform(struct!.trustProviderType),
        user_trust_provider_type: cdktn.stringToTerraform(struct!.userTrustProviderType),
        verified_access_trust_provider_id: cdktn.stringToTerraform(struct!.verifiedAccessTrustProviderId),
    }
}


export function ccVerifiedAccessInstanceVerifiedAccessTrustProviderPropertyToHclTerraform(struct?: CcVerifiedAccessInstance.VerifiedAccessTrustProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_trust_provider_type: {
            value: cdktn.stringToHclTerraform(struct!.deviceTrustProviderType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trust_provider_type: {
            value: cdktn.stringToHclTerraform(struct!.trustProviderType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_trust_provider_type: {
            value: cdktn.stringToHclTerraform(struct!.userTrustProviderType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        verified_access_trust_provider_id: {
            value: cdktn.stringToHclTerraform(struct!.verifiedAccessTrustProviderId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcVerifiedAccessInstance {
export interface CloudWatchLogsProperty {
    /**
    * Indicates whether logging is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#enabled CcVerifiedAccessInstance#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The ID of the CloudWatch Logs log group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#log_group CcVerifiedAccessInstance#log_group}
    */
    readonly logGroup?: string;
}
export class CloudWatchLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logGroup = value.logGroup;
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

    // log_group - computed: true, optional: true, required: false
    private _logGroup?: string; 
    public get logGroup() {
        return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string) {
        this._logGroup = value;
    }
    public resetLogGroup() {
        this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
        return this._logGroup;
    }
}
export interface KinesisDataFirehoseProperty {
    /**
    * The ID of the delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#delivery_stream CcVerifiedAccessInstance#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Indicates whether logging is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#enabled CcVerifiedAccessInstance#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class KinesisDataFirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisDataFirehoseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStream !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStream = this._deliveryStream;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisDataFirehoseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStream = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStream = value.deliveryStream;
            this._enabled = value.enabled;
        }
    }

    // delivery_stream - computed: true, optional: true, required: false
    private _deliveryStream?: string; 
    public get deliveryStream() {
        return this.getStringAttribute('delivery_stream');
    }
    public set deliveryStream(value: string) {
        this._deliveryStream = value;
    }
    public resetDeliveryStream() {
        this._deliveryStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamInput() {
        return this._deliveryStream;
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
export interface S3Property {
    /**
    * The bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#bucket_name CcVerifiedAccessInstance#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The ID of the AWS account that owns the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#bucket_owner CcVerifiedAccessInstance#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Indicates whether logging is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#enabled CcVerifiedAccessInstance#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The bucket prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#prefix CcVerifiedAccessInstance#prefix}
    */
    readonly prefix?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketOwner = undefined;
            this._enabled = undefined;
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
            this._bucketOwner = value.bucketOwner;
            this._enabled = value.enabled;
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

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
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
export interface VerifiedAccessLogsProperty {
    /**
    * Sends Verified Access logs to CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#cloudwatch_logs CcVerifiedAccessInstance#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogsProperty;
    /**
    * Include claims from trust providers in Verified Access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#include_trust_context CcVerifiedAccessInstance#include_trust_context}
    */
    readonly includeTrustContext?: boolean | cdktn.IResolvable;
    /**
    * Sends Verified Access logs to Kinesis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#kinesis_data_firehose CcVerifiedAccessInstance#kinesis_data_firehose}
    */
    readonly kinesisDataFirehose?: KinesisDataFirehoseProperty;
    /**
    * Select log version for Verified Access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#log_version CcVerifiedAccessInstance#log_version}
    */
    readonly logVersion?: string;
    /**
    * Sends Verified Access logs to Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#s3 CcVerifiedAccessInstance#s3}
    */
    readonly s3?: S3Property;
}
export class VerifiedAccessLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VerifiedAccessLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        if (this._includeTrustContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTrustContext = this._includeTrustContext;
        }
        if (this._kinesisDataFirehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisDataFirehose = this._kinesisDataFirehose?.internalValue;
        }
        if (this._logVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.logVersion = this._logVersion;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VerifiedAccessLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
            this._includeTrustContext = undefined;
            this._kinesisDataFirehose.internalValue = undefined;
            this._logVersion = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._includeTrustContext = value.includeTrustContext;
            this._kinesisDataFirehose.internalValue = value.kinesisDataFirehose;
            this._logVersion = value.logVersion;
            this._s3.internalValue = value.s3;
        }
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudWatchLogsPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogsProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }

    // include_trust_context - computed: true, optional: true, required: false
    private _includeTrustContext?: boolean | cdktn.IResolvable; 
    public get includeTrustContext() {
        return this.getBooleanAttribute('include_trust_context');
    }
    public set includeTrustContext(value: boolean | cdktn.IResolvable) {
        this._includeTrustContext = value;
    }
    public resetIncludeTrustContext() {
        this._includeTrustContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTrustContextInput() {
        return this._includeTrustContext;
    }

    // kinesis_data_firehose - computed: true, optional: true, required: false
    private _kinesisDataFirehose = new KinesisDataFirehosePropertyOutputReference(this, "kinesis_data_firehose");
    public get kinesisDataFirehose() {
        return this._kinesisDataFirehose;
    }
    public putKinesisDataFirehose(value: KinesisDataFirehoseProperty) {
        this._kinesisDataFirehose.internalValue = value;
    }
    public resetKinesisDataFirehose() {
        this._kinesisDataFirehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisDataFirehoseInput() {
        return this._kinesisDataFirehose.internalValue;
    }

    // log_version - computed: true, optional: true, required: false
    private _logVersion?: string; 
    public get logVersion() {
        return this.getStringAttribute('log_version');
    }
    public set logVersion(value: string) {
        this._logVersion = value;
    }
    public resetLogVersion() {
        this._logVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logVersionInput() {
        return this._logVersion;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#key CcVerifiedAccessInstance#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#value CcVerifiedAccessInstance#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
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

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

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
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VerifiedAccessTrustProviderProperty {
    /**
    * The description of trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#description CcVerifiedAccessInstance#description}
    */
    readonly description?: string;
    /**
    * The type of device-based trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#device_trust_provider_type CcVerifiedAccessInstance#device_trust_provider_type}
    */
    readonly deviceTrustProviderType?: string;
    /**
    * The type of trust provider (user- or device-based).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#trust_provider_type CcVerifiedAccessInstance#trust_provider_type}
    */
    readonly trustProviderType?: string;
    /**
    * The type of user-based trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#user_trust_provider_type CcVerifiedAccessInstance#user_trust_provider_type}
    */
    readonly userTrustProviderType?: string;
    /**
    * The ID of the trust provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_id CcVerifiedAccessInstance#verified_access_trust_provider_id}
    */
    readonly verifiedAccessTrustProviderId?: string;
}
export class VerifiedAccessTrustProviderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VerifiedAccessTrustProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._deviceTrustProviderType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceTrustProviderType = this._deviceTrustProviderType;
        }
        if (this._trustProviderType !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustProviderType = this._trustProviderType;
        }
        if (this._userTrustProviderType !== undefined) {
            hasAnyValues = true;
            internalValueResult.userTrustProviderType = this._userTrustProviderType;
        }
        if (this._verifiedAccessTrustProviderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.verifiedAccessTrustProviderId = this._verifiedAccessTrustProviderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VerifiedAccessTrustProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._deviceTrustProviderType = undefined;
            this._trustProviderType = undefined;
            this._userTrustProviderType = undefined;
            this._verifiedAccessTrustProviderId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._deviceTrustProviderType = value.deviceTrustProviderType;
            this._trustProviderType = value.trustProviderType;
            this._userTrustProviderType = value.userTrustProviderType;
            this._verifiedAccessTrustProviderId = value.verifiedAccessTrustProviderId;
        }
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

    // device_trust_provider_type - computed: true, optional: true, required: false
    private _deviceTrustProviderType?: string; 
    public get deviceTrustProviderType() {
        return this.getStringAttribute('device_trust_provider_type');
    }
    public set deviceTrustProviderType(value: string) {
        this._deviceTrustProviderType = value;
    }
    public resetDeviceTrustProviderType() {
        this._deviceTrustProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTrustProviderTypeInput() {
        return this._deviceTrustProviderType;
    }

    // trust_provider_type - computed: true, optional: true, required: false
    private _trustProviderType?: string; 
    public get trustProviderType() {
        return this.getStringAttribute('trust_provider_type');
    }
    public set trustProviderType(value: string) {
        this._trustProviderType = value;
    }
    public resetTrustProviderType() {
        this._trustProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustProviderTypeInput() {
        return this._trustProviderType;
    }

    // user_trust_provider_type - computed: true, optional: true, required: false
    private _userTrustProviderType?: string; 
    public get userTrustProviderType() {
        return this.getStringAttribute('user_trust_provider_type');
    }
    public set userTrustProviderType(value: string) {
        this._userTrustProviderType = value;
    }
    public resetUserTrustProviderType() {
        this._userTrustProviderType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userTrustProviderTypeInput() {
        return this._userTrustProviderType;
    }

    // verified_access_trust_provider_id - computed: true, optional: true, required: false
    private _verifiedAccessTrustProviderId?: string; 
    public get verifiedAccessTrustProviderId() {
        return this.getStringAttribute('verified_access_trust_provider_id');
    }
    public set verifiedAccessTrustProviderId(value: string) {
        this._verifiedAccessTrustProviderId = value;
    }
    public resetVerifiedAccessTrustProviderId() {
        this._verifiedAccessTrustProviderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifiedAccessTrustProviderIdInput() {
        return this._verifiedAccessTrustProviderId;
    }
}

export class VerifiedAccessTrustProviderPropertyList extends cdktn.ComplexList {
    public internalValue? : VerifiedAccessTrustProviderProperty[] | cdktn.IResolvable

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
    public get(index: number): VerifiedAccessTrustProviderPropertyOutputReference {
        return new VerifiedAccessTrustProviderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
