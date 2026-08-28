// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSourceLocationProps extends cdktn.TerraformMetaArguments {
    /**
    * <p>Access configuration parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#access_configuration CcSourceLocation#access_configuration}
    */
    readonly accessConfiguration?: CcSourceLocation.AccessConfigurationProperty;
    /**
    * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#default_segment_delivery_configuration CcSourceLocation#default_segment_delivery_configuration}
    */
    readonly defaultSegmentDeliveryConfiguration?: CcSourceLocation.DefaultSegmentDeliveryConfigurationProperty;
    /**
    * <p>The HTTP configuration for the source location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#http_configuration CcSourceLocation#http_configuration}
    */
    readonly httpConfiguration: CcSourceLocation.HttpConfigurationProperty;
    /**
    * <p>A list of the segment delivery configurations associated with this resource.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#segment_delivery_configurations CcSourceLocation#segment_delivery_configurations}
    */
    readonly segmentDeliveryConfigurations?: CcSourceLocation.SegmentDeliveryConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#source_location_name CcSourceLocation#source_location_name}
    */
    readonly sourceLocationName: string;
    /**
    * The tags to assign to the source location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#tags CcSourceLocation#tags}
    */
    readonly tags?: CcSourceLocation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location awscc_mediatailor_source_location}
*/
export class CcSourceLocation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediatailor_source_location";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSourceLocation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSourceLocation to import
    * @param importFromId The id of the existing CcSourceLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSourceLocation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_source_location", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location awscc_mediatailor_source_location} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSourceLocationProps
    */
    public constructor(scope: Construct, id: string, config: CcSourceLocationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediatailor_source_location',
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
        this._accessConfiguration.internalValue = config.accessConfiguration;
        this._defaultSegmentDeliveryConfiguration.internalValue = config.defaultSegmentDeliveryConfiguration;
        this._httpConfiguration.internalValue = config.httpConfiguration;
        this._segmentDeliveryConfigurations.internalValue = config.segmentDeliveryConfigurations;
        this._sourceLocationName = config.sourceLocationName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_configuration - computed: true, optional: true, required: false
    private _accessConfiguration = new CcSourceLocation.AccessConfigurationPropertyOutputReference(this, "access_configuration");
    public get accessConfiguration() {
        return this._accessConfiguration;
    }
    public putAccessConfiguration(value: CcSourceLocation.AccessConfigurationProperty) {
        this._accessConfiguration.internalValue = value;
    }
    public resetAccessConfiguration() {
        this._accessConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessConfigurationInput() {
        return this._accessConfiguration.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // default_segment_delivery_configuration - computed: true, optional: true, required: false
    private _defaultSegmentDeliveryConfiguration = new CcSourceLocation.DefaultSegmentDeliveryConfigurationPropertyOutputReference(this, "default_segment_delivery_configuration");
    public get defaultSegmentDeliveryConfiguration() {
        return this._defaultSegmentDeliveryConfiguration;
    }
    public putDefaultSegmentDeliveryConfiguration(value: CcSourceLocation.DefaultSegmentDeliveryConfigurationProperty) {
        this._defaultSegmentDeliveryConfiguration.internalValue = value;
    }
    public resetDefaultSegmentDeliveryConfiguration() {
        this._defaultSegmentDeliveryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSegmentDeliveryConfigurationInput() {
        return this._defaultSegmentDeliveryConfiguration.internalValue;
    }

    // http_configuration - computed: false, optional: false, required: true
    private _httpConfiguration = new CcSourceLocation.HttpConfigurationPropertyOutputReference(this, "http_configuration");
    public get httpConfiguration() {
        return this._httpConfiguration;
    }
    public putHttpConfiguration(value: CcSourceLocation.HttpConfigurationProperty) {
        this._httpConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpConfigurationInput() {
        return this._httpConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // segment_delivery_configurations - computed: true, optional: true, required: false
    private _segmentDeliveryConfigurations = new CcSourceLocation.SegmentDeliveryConfigurationPropertyList(this, "segment_delivery_configurations", false);
    public get segmentDeliveryConfigurations() {
        return this._segmentDeliveryConfigurations;
    }
    public putSegmentDeliveryConfigurations(value: CcSourceLocation.SegmentDeliveryConfigurationProperty[] | cdktn.IResolvable) {
        this._segmentDeliveryConfigurations.internalValue = value;
    }
    public resetSegmentDeliveryConfigurations() {
        this._segmentDeliveryConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentDeliveryConfigurationsInput() {
        return this._segmentDeliveryConfigurations.internalValue;
    }

    // source_location_name - computed: false, optional: false, required: true
    private _sourceLocationName?: string; 
    public get sourceLocationName() {
        return this.getStringAttribute('source_location_name');
    }
    public set sourceLocationName(value: string) {
        this._sourceLocationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLocationNameInput() {
        return this._sourceLocationName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSourceLocation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSourceLocation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_configuration: ccSourceLocationAccessConfigurationPropertyToTerraform(this._accessConfiguration.internalValue),
            default_segment_delivery_configuration: ccSourceLocationDefaultSegmentDeliveryConfigurationPropertyToTerraform(this._defaultSegmentDeliveryConfiguration.internalValue),
            http_configuration: ccSourceLocationHttpConfigurationPropertyToTerraform(this._httpConfiguration.internalValue),
            segment_delivery_configurations: cdktn.listMapper(ccSourceLocationSegmentDeliveryConfigurationPropertyToTerraform, false)(this._segmentDeliveryConfigurations.internalValue),
            source_location_name: cdktn.stringToTerraform(this._sourceLocationName),
            tags: cdktn.listMapper(ccSourceLocationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_configuration: {
                value: ccSourceLocationAccessConfigurationPropertyToHclTerraform(this._accessConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSourceLocation.AccessConfigurationProperty",
            },
            default_segment_delivery_configuration: {
                value: ccSourceLocationDefaultSegmentDeliveryConfigurationPropertyToHclTerraform(this._defaultSegmentDeliveryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSourceLocation.DefaultSegmentDeliveryConfigurationProperty",
            },
            http_configuration: {
                value: ccSourceLocationHttpConfigurationPropertyToHclTerraform(this._httpConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSourceLocation.HttpConfigurationProperty",
            },
            segment_delivery_configurations: {
                value: cdktn.listMapperHcl(ccSourceLocationSegmentDeliveryConfigurationPropertyToHclTerraform, false)(this._segmentDeliveryConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSourceLocation.SegmentDeliveryConfigurationPropertyList",
            },
            source_location_name: {
                value: cdktn.stringToHclTerraform(this._sourceLocationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSourceLocationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSourceLocation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSourceLocationSecretsManagerAccessTokenConfigurationPropertyToTerraform(struct?: CcSourceLocation.SecretsManagerAccessTokenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_name: cdktn.stringToTerraform(struct!.headerName),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        secret_string_key: cdktn.stringToTerraform(struct!.secretStringKey),
    }
}


export function ccSourceLocationSecretsManagerAccessTokenConfigurationPropertyToHclTerraform(struct?: CcSourceLocation.SecretsManagerAccessTokenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_name: {
            value: cdktn.stringToHclTerraform(struct!.headerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_string_key: {
            value: cdktn.stringToHclTerraform(struct!.secretStringKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceLocationAccessConfigurationPropertyToTerraform(struct?: CcSourceLocation.AccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_type: cdktn.stringToTerraform(struct!.accessType),
        secrets_manager_access_token_configuration: ccSourceLocationSecretsManagerAccessTokenConfigurationPropertyToTerraform(struct!.secretsManagerAccessTokenConfiguration),
    }
}


export function ccSourceLocationAccessConfigurationPropertyToHclTerraform(struct?: CcSourceLocation.AccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_type: {
            value: cdktn.stringToHclTerraform(struct!.accessType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_access_token_configuration: {
            value: ccSourceLocationSecretsManagerAccessTokenConfigurationPropertyToHclTerraform(struct!.secretsManagerAccessTokenConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretsManagerAccessTokenConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceLocationDefaultSegmentDeliveryConfigurationPropertyToTerraform(struct?: CcSourceLocation.DefaultSegmentDeliveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_url: cdktn.stringToTerraform(struct!.baseUrl),
    }
}


export function ccSourceLocationDefaultSegmentDeliveryConfigurationPropertyToHclTerraform(struct?: CcSourceLocation.DefaultSegmentDeliveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_url: {
            value: cdktn.stringToHclTerraform(struct!.baseUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceLocationHttpConfigurationPropertyToTerraform(struct?: CcSourceLocation.HttpConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_url: cdktn.stringToTerraform(struct!.baseUrl),
    }
}


export function ccSourceLocationHttpConfigurationPropertyToHclTerraform(struct?: CcSourceLocation.HttpConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_url: {
            value: cdktn.stringToHclTerraform(struct!.baseUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceLocationSegmentDeliveryConfigurationPropertyToTerraform(struct?: CcSourceLocation.SegmentDeliveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_url: cdktn.stringToTerraform(struct!.baseUrl),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccSourceLocationSegmentDeliveryConfigurationPropertyToHclTerraform(struct?: CcSourceLocation.SegmentDeliveryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_url: {
            value: cdktn.stringToHclTerraform(struct!.baseUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSourceLocationTagPropertyToTerraform(struct?: CcSourceLocation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSourceLocationTagPropertyToHclTerraform(struct?: CcSourceLocation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSourceLocation {
export interface SecretsManagerAccessTokenConfigurationProperty {
    /**
    * <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#header_name CcSourceLocation#header_name}
    */
    readonly headerName?: string;
    /**
    * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#secret_arn CcSourceLocation#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#secret_string_key CcSourceLocation#secret_string_key}
    */
    readonly secretStringKey?: string;
}
export class SecretsManagerAccessTokenConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecretsManagerAccessTokenConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._secretStringKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretStringKey = this._secretStringKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecretsManagerAccessTokenConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerName = undefined;
            this._secretArn = undefined;
            this._secretStringKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerName = value.headerName;
            this._secretArn = value.secretArn;
            this._secretStringKey = value.secretStringKey;
        }
    }

    // header_name - computed: true, optional: true, required: false
    private _headerName?: string; 
    public get headerName() {
        return this.getStringAttribute('header_name');
    }
    public set headerName(value: string) {
        this._headerName = value;
    }
    public resetHeaderName() {
        this._headerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerNameInput() {
        return this._headerName;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }

    // secret_string_key - computed: true, optional: true, required: false
    private _secretStringKey?: string; 
    public get secretStringKey() {
        return this.getStringAttribute('secret_string_key');
    }
    public set secretStringKey(value: string) {
        this._secretStringKey = value;
    }
    public resetSecretStringKey() {
        this._secretStringKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretStringKeyInput() {
        return this._secretStringKey;
    }
}
export interface AccessConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#access_type CcSourceLocation#access_type}
    */
    readonly accessType?: string;
    /**
    * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration CcSourceLocation#secrets_manager_access_token_configuration}
    */
    readonly secretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfigurationProperty;
}
export class AccessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessType = this._accessType;
        }
        if (this._secretsManagerAccessTokenConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessTokenConfiguration = this._secretsManagerAccessTokenConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessType = undefined;
            this._secretsManagerAccessTokenConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessType = value.accessType;
            this._secretsManagerAccessTokenConfiguration.internalValue = value.secretsManagerAccessTokenConfiguration;
        }
    }

    // access_type - computed: true, optional: true, required: false
    private _accessType?: string; 
    public get accessType() {
        return this.getStringAttribute('access_type');
    }
    public set accessType(value: string) {
        this._accessType = value;
    }
    public resetAccessType() {
        this._accessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTypeInput() {
        return this._accessType;
    }

    // secrets_manager_access_token_configuration - computed: true, optional: true, required: false
    private _secretsManagerAccessTokenConfiguration = new SecretsManagerAccessTokenConfigurationPropertyOutputReference(this, "secrets_manager_access_token_configuration");
    public get secretsManagerAccessTokenConfiguration() {
        return this._secretsManagerAccessTokenConfiguration;
    }
    public putSecretsManagerAccessTokenConfiguration(value: SecretsManagerAccessTokenConfigurationProperty) {
        this._secretsManagerAccessTokenConfiguration.internalValue = value;
    }
    public resetSecretsManagerAccessTokenConfiguration() {
        this._secretsManagerAccessTokenConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessTokenConfigurationInput() {
        return this._secretsManagerAccessTokenConfiguration.internalValue;
    }
}
export interface DefaultSegmentDeliveryConfigurationProperty {
    /**
    * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#base_url CcSourceLocation#base_url}
    */
    readonly baseUrl?: string;
}
export class DefaultSegmentDeliveryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultSegmentDeliveryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseUrl = this._baseUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultSegmentDeliveryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseUrl = value.baseUrl;
        }
    }

    // base_url - computed: true, optional: true, required: false
    private _baseUrl?: string; 
    public get baseUrl() {
        return this.getStringAttribute('base_url');
    }
    public set baseUrl(value: string) {
        this._baseUrl = value;
    }
    public resetBaseUrl() {
        this._baseUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseUrlInput() {
        return this._baseUrl;
    }
}
export interface HttpConfigurationProperty {
    /**
    * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#base_url CcSourceLocation#base_url}
    */
    readonly baseUrl: string;
}
export class HttpConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseUrl = this._baseUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseUrl = value.baseUrl;
        }
    }

    // base_url - computed: false, optional: false, required: true
    private _baseUrl?: string; 
    public get baseUrl() {
        return this.getStringAttribute('base_url');
    }
    public set baseUrl(value: string) {
        this._baseUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get baseUrlInput() {
        return this._baseUrl;
    }
}
export interface SegmentDeliveryConfigurationProperty {
    /**
    * <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#base_url CcSourceLocation#base_url}
    */
    readonly baseUrl?: string;
    /**
    * <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#name CcSourceLocation#name}
    */
    readonly name?: string;
}
export class SegmentDeliveryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SegmentDeliveryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseUrl = this._baseUrl;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SegmentDeliveryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseUrl = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseUrl = value.baseUrl;
            this._name = value.name;
        }
    }

    // base_url - computed: true, optional: true, required: false
    private _baseUrl?: string; 
    public get baseUrl() {
        return this.getStringAttribute('base_url');
    }
    public set baseUrl(value: string) {
        this._baseUrl = value;
    }
    public resetBaseUrl() {
        this._baseUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseUrlInput() {
        return this._baseUrl;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}

export class SegmentDeliveryConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : SegmentDeliveryConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): SegmentDeliveryConfigurationPropertyOutputReference {
        return new SegmentDeliveryConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#key CcSourceLocation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_source_location#value CcSourceLocation#value}
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
}
