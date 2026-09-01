// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFeedProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#access_role_arn CcFeed#access_role_arn}
    */
    readonly accessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name CcFeed#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#outputs CcFeed#outputs}
    */
    readonly outputs: CcFeed.GetOutputProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#tags CcFeed#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed awscc_elementalinference_feed}
*/
export class CcFeed extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elementalinference_feed";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFeed resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFeed to import
    * @param importFromId The id of the existing CcFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFeed to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elementalinference_feed", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed awscc_elementalinference_feed} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFeedProps
    */
    public constructor(scope: Construct, id: string, config: CcFeedProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elementalinference_feed',
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
        this._accessRoleArn = config.accessRoleArn;
        this._name = config.name;
        this._outputs.internalValue = config.outputs;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_role_arn - computed: true, optional: true, required: false
    private _accessRoleArn?: string; 
    public get accessRoleArn() {
        return this.getStringAttribute('access_role_arn');
    }
    public set accessRoleArn(value: string) {
        this._accessRoleArn = value;
    }
    public resetAccessRoleArn() {
        this._accessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRoleArnInput() {
        return this._accessRoleArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // data_endpoints - computed: true, optional: false, required: false
    public get dataEndpoints() {
        return this.getListAttribute('data_endpoints');
    }

    // feed_id - computed: true, optional: false, required: false
    public get feedId() {
        return this.getStringAttribute('feed_id');
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

    // outputs - computed: false, optional: false, required: true
    private _outputs = new CcFeed.GetOutputPropertyList(this, "outputs", false);
    public get outputs() {
        return this._outputs;
    }
    public putOutputs(value: CcFeed.GetOutputProperty[] | cdktn.IResolvable) {
        this._outputs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputsInput() {
        return this._outputs.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_role_arn: cdktn.stringToTerraform(this._accessRoleArn),
            name: cdktn.stringToTerraform(this._name),
            outputs: cdktn.listMapper(ccFeedGetOutputPropertyToTerraform, false)(this._outputs.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_role_arn: {
                value: cdktn.stringToHclTerraform(this._accessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outputs: {
                value: cdktn.listMapperHcl(ccFeedGetOutputPropertyToHclTerraform, false)(this._outputs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFeed.GetOutputPropertyList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFeedDataSourceConfigurationPropertyToTerraform(struct?: CcFeed.DataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixture_id: cdktn.stringToTerraform(struct!.fixtureId),
    }
}


export function ccFeedDataSourceConfigurationPropertyToHclTerraform(struct?: CcFeed.DataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixture_id: {
            value: cdktn.stringToHclTerraform(struct!.fixtureId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedClippingConfigPropertyToTerraform(struct?: CcFeed.ClippingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        callback_metadata: cdktn.stringToTerraform(struct!.callbackMetadata),
        data_source_configuration: ccFeedDataSourceConfigurationPropertyToTerraform(struct!.dataSourceConfiguration),
    }
}


export function ccFeedClippingConfigPropertyToHclTerraform(struct?: CcFeed.ClippingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        callback_metadata: {
            value: cdktn.stringToHclTerraform(struct!.callbackMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_source_configuration: {
            value: ccFeedDataSourceConfigurationPropertyToHclTerraform(struct!.dataSourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedTemplateGroupsPropertyToTerraform(struct?: CcFeed.TemplateGroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        template_uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.templateUris),
    }
}


export function ccFeedTemplateGroupsPropertyToHclTerraform(struct?: CcFeed.TemplateGroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_uris: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.templateUris),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedCroppingPropertyToTerraform(struct?: CcFeed.CroppingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template_groups: cdktn.listMapper(ccFeedTemplateGroupsPropertyToTerraform, false)(struct!.templateGroups),
    }
}


export function ccFeedCroppingPropertyToHclTerraform(struct?: CcFeed.CroppingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template_groups: {
            value: cdktn.listMapperHcl(ccFeedTemplateGroupsPropertyToHclTerraform, false)(struct!.templateGroups),
            isBlock: true,
            type: "list",
            storageClassType: "TemplateGroupsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedAspectRatioPropertyToTerraform(struct?: CcFeed.AspectRatioProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        height: cdktn.numberToTerraform(struct!.height),
        width: cdktn.numberToTerraform(struct!.width),
    }
}


export function ccFeedAspectRatioPropertyToHclTerraform(struct?: CcFeed.AspectRatioProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        height: {
            value: cdktn.numberToHclTerraform(struct!.height),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        width: {
            value: cdktn.numberToHclTerraform(struct!.width),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedSubtitlingConfigPropertyToTerraform(struct?: CcFeed.SubtitlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aspect_ratio: ccFeedAspectRatioPropertyToTerraform(struct!.aspectRatio),
        dictionary: cdktn.stringToTerraform(struct!.dictionary),
        language: cdktn.stringToTerraform(struct!.language),
        profanity_filter: cdktn.stringToTerraform(struct!.profanityFilter),
    }
}


export function ccFeedSubtitlingConfigPropertyToHclTerraform(struct?: CcFeed.SubtitlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aspect_ratio: {
            value: ccFeedAspectRatioPropertyToHclTerraform(struct!.aspectRatio),
            isBlock: true,
            type: "struct",
            storageClassType: "AspectRatioProperty",
        },
        dictionary: {
            value: cdktn.stringToHclTerraform(struct!.dictionary),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        language: {
            value: cdktn.stringToHclTerraform(struct!.language),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profanity_filter: {
            value: cdktn.stringToHclTerraform(struct!.profanityFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedOutputConfigPropertyToTerraform(struct?: CcFeed.OutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clipping: ccFeedClippingConfigPropertyToTerraform(struct!.clipping),
        cropping: ccFeedCroppingPropertyToTerraform(struct!.cropping),
        subtitling: ccFeedSubtitlingConfigPropertyToTerraform(struct!.subtitling),
    }
}


export function ccFeedOutputConfigPropertyToHclTerraform(struct?: CcFeed.OutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clipping: {
            value: ccFeedClippingConfigPropertyToHclTerraform(struct!.clipping),
            isBlock: true,
            type: "struct",
            storageClassType: "ClippingConfigProperty",
        },
        cropping: {
            value: ccFeedCroppingPropertyToHclTerraform(struct!.cropping),
            isBlock: true,
            type: "struct",
            storageClassType: "CroppingProperty",
        },
        subtitling: {
            value: ccFeedSubtitlingConfigPropertyToHclTerraform(struct!.subtitling),
            isBlock: true,
            type: "struct",
            storageClassType: "SubtitlingConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeedGetOutputPropertyToTerraform(struct?: CcFeed.GetOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
        output_config: ccFeedOutputConfigPropertyToTerraform(struct!.outputConfig),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccFeedGetOutputPropertyToHclTerraform(struct?: CcFeed.GetOutputProperty | cdktn.IResolvable): any {
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_config: {
            value: ccFeedOutputConfigPropertyToHclTerraform(struct!.outputConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputConfigProperty",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFeed {
export interface DataSourceConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#fixture_id CcFeed#fixture_id}
    */
    readonly fixtureId?: string;
}
export class DataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixtureId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixtureId = this._fixtureId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixtureId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixtureId = value.fixtureId;
        }
    }

    // fixture_id - computed: true, optional: true, required: false
    private _fixtureId?: string; 
    public get fixtureId() {
        return this.getStringAttribute('fixture_id');
    }
    public set fixtureId(value: string) {
        this._fixtureId = value;
    }
    public resetFixtureId() {
        this._fixtureId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixtureIdInput() {
        return this._fixtureId;
    }
}
export interface ClippingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#callback_metadata CcFeed#callback_metadata}
    */
    readonly callbackMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#data_source_configuration CcFeed#data_source_configuration}
    */
    readonly dataSourceConfiguration?: DataSourceConfigurationProperty;
}
export class ClippingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClippingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._callbackMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.callbackMetadata = this._callbackMetadata;
        }
        if (this._dataSourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceConfiguration = this._dataSourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClippingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._callbackMetadata = undefined;
            this._dataSourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._callbackMetadata = value.callbackMetadata;
            this._dataSourceConfiguration.internalValue = value.dataSourceConfiguration;
        }
    }

    // callback_metadata - computed: true, optional: true, required: false
    private _callbackMetadata?: string; 
    public get callbackMetadata() {
        return this.getStringAttribute('callback_metadata');
    }
    public set callbackMetadata(value: string) {
        this._callbackMetadata = value;
    }
    public resetCallbackMetadata() {
        this._callbackMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get callbackMetadataInput() {
        return this._callbackMetadata;
    }

    // data_source_configuration - computed: true, optional: true, required: false
    private _dataSourceConfiguration = new DataSourceConfigurationPropertyOutputReference(this, "data_source_configuration");
    public get dataSourceConfiguration() {
        return this._dataSourceConfiguration;
    }
    public putDataSourceConfiguration(value: DataSourceConfigurationProperty) {
        this._dataSourceConfiguration.internalValue = value;
    }
    public resetDataSourceConfiguration() {
        this._dataSourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceConfigurationInput() {
        return this._dataSourceConfiguration.internalValue;
    }
}
export interface TemplateGroupsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name CcFeed#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#template_uris CcFeed#template_uris}
    */
    readonly templateUris?: string[];
}
export class TemplateGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TemplateGroupsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._templateUris !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateUris = this._templateUris;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateGroupsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._templateUris = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._templateUris = value.templateUris;
        }
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

    // template_uris - computed: true, optional: true, required: false
    private _templateUris?: string[]; 
    public get templateUris() {
        return this.getListAttribute('template_uris');
    }
    public set templateUris(value: string[]) {
        this._templateUris = value;
    }
    public resetTemplateUris() {
        this._templateUris = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrisInput() {
        return this._templateUris;
    }
}

export class TemplateGroupsPropertyList extends cdktn.ComplexList {
    public internalValue? : TemplateGroupsProperty[] | cdktn.IResolvable

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
    public get(index: number): TemplateGroupsPropertyOutputReference {
        return new TemplateGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CroppingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#template_groups CcFeed#template_groups}
    */
    readonly templateGroups?: TemplateGroupsProperty[] | cdktn.IResolvable;
}
export class CroppingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CroppingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._templateGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateGroups = this._templateGroups?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CroppingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._templateGroups.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._templateGroups.internalValue = value.templateGroups;
        }
    }

    // template_groups - computed: true, optional: true, required: false
    private _templateGroups = new TemplateGroupsPropertyList(this, "template_groups", false);
    public get templateGroups() {
        return this._templateGroups;
    }
    public putTemplateGroups(value: TemplateGroupsProperty[] | cdktn.IResolvable) {
        this._templateGroups.internalValue = value;
    }
    public resetTemplateGroups() {
        this._templateGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateGroupsInput() {
        return this._templateGroups.internalValue;
    }
}
export interface AspectRatioProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#height CcFeed#height}
    */
    readonly height?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#width CcFeed#width}
    */
    readonly width?: number;
}
export class AspectRatioPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AspectRatioProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._height !== undefined) {
            hasAnyValues = true;
            internalValueResult.height = this._height;
        }
        if (this._width !== undefined) {
            hasAnyValues = true;
            internalValueResult.width = this._width;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AspectRatioProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._height = undefined;
            this._width = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._height = value.height;
            this._width = value.width;
        }
    }

    // height - computed: true, optional: true, required: false
    private _height?: number; 
    public get height() {
        return this.getNumberAttribute('height');
    }
    public set height(value: number) {
        this._height = value;
    }
    public resetHeight() {
        this._height = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heightInput() {
        return this._height;
    }

    // width - computed: true, optional: true, required: false
    private _width?: number; 
    public get width() {
        return this.getNumberAttribute('width');
    }
    public set width(value: number) {
        this._width = value;
    }
    public resetWidth() {
        this._width = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get widthInput() {
        return this._width;
    }
}
export interface SubtitlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#aspect_ratio CcFeed#aspect_ratio}
    */
    readonly aspectRatio?: AspectRatioProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#dictionary CcFeed#dictionary}
    */
    readonly dictionary?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#language CcFeed#language}
    */
    readonly language?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#profanity_filter CcFeed#profanity_filter}
    */
    readonly profanityFilter?: string;
}
export class SubtitlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubtitlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aspectRatio?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aspectRatio = this._aspectRatio?.internalValue;
        }
        if (this._dictionary !== undefined) {
            hasAnyValues = true;
            internalValueResult.dictionary = this._dictionary;
        }
        if (this._language !== undefined) {
            hasAnyValues = true;
            internalValueResult.language = this._language;
        }
        if (this._profanityFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.profanityFilter = this._profanityFilter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubtitlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aspectRatio.internalValue = undefined;
            this._dictionary = undefined;
            this._language = undefined;
            this._profanityFilter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aspectRatio.internalValue = value.aspectRatio;
            this._dictionary = value.dictionary;
            this._language = value.language;
            this._profanityFilter = value.profanityFilter;
        }
    }

    // aspect_ratio - computed: true, optional: true, required: false
    private _aspectRatio = new AspectRatioPropertyOutputReference(this, "aspect_ratio");
    public get aspectRatio() {
        return this._aspectRatio;
    }
    public putAspectRatio(value: AspectRatioProperty) {
        this._aspectRatio.internalValue = value;
    }
    public resetAspectRatio() {
        this._aspectRatio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aspectRatioInput() {
        return this._aspectRatio.internalValue;
    }

    // dictionary - computed: true, optional: true, required: false
    private _dictionary?: string; 
    public get dictionary() {
        return this.getStringAttribute('dictionary');
    }
    public set dictionary(value: string) {
        this._dictionary = value;
    }
    public resetDictionary() {
        this._dictionary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dictionaryInput() {
        return this._dictionary;
    }

    // language - computed: true, optional: true, required: false
    private _language?: string; 
    public get language() {
        return this.getStringAttribute('language');
    }
    public set language(value: string) {
        this._language = value;
    }
    public resetLanguage() {
        this._language = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageInput() {
        return this._language;
    }

    // profanity_filter - computed: true, optional: true, required: false
    private _profanityFilter?: string; 
    public get profanityFilter() {
        return this.getStringAttribute('profanity_filter');
    }
    public set profanityFilter(value: string) {
        this._profanityFilter = value;
    }
    public resetProfanityFilter() {
        this._profanityFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profanityFilterInput() {
        return this._profanityFilter;
    }
}
export interface OutputConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#clipping CcFeed#clipping}
    */
    readonly clipping?: ClippingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#cropping CcFeed#cropping}
    */
    readonly cropping?: CroppingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#subtitling CcFeed#subtitling}
    */
    readonly subtitling?: SubtitlingConfigProperty;
}
export class OutputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clipping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipping = this._clipping?.internalValue;
        }
        if (this._cropping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cropping = this._cropping?.internalValue;
        }
        if (this._subtitling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subtitling = this._subtitling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clipping.internalValue = undefined;
            this._cropping.internalValue = undefined;
            this._subtitling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clipping.internalValue = value.clipping;
            this._cropping.internalValue = value.cropping;
            this._subtitling.internalValue = value.subtitling;
        }
    }

    // clipping - computed: true, optional: true, required: false
    private _clipping = new ClippingConfigPropertyOutputReference(this, "clipping");
    public get clipping() {
        return this._clipping;
    }
    public putClipping(value: ClippingConfigProperty) {
        this._clipping.internalValue = value;
    }
    public resetClipping() {
        this._clipping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clippingInput() {
        return this._clipping.internalValue;
    }

    // cropping - computed: true, optional: true, required: false
    private _cropping = new CroppingPropertyOutputReference(this, "cropping");
    public get cropping() {
        return this._cropping;
    }
    public putCropping(value: CroppingProperty) {
        this._cropping.internalValue = value;
    }
    public resetCropping() {
        this._cropping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get croppingInput() {
        return this._cropping.internalValue;
    }

    // subtitling - computed: true, optional: true, required: false
    private _subtitling = new SubtitlingConfigPropertyOutputReference(this, "subtitling");
    public get subtitling() {
        return this._subtitling;
    }
    public putSubtitling(value: SubtitlingConfigProperty) {
        this._subtitling.internalValue = value;
    }
    public resetSubtitling() {
        this._subtitling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subtitlingInput() {
        return this._subtitling.internalValue;
    }
}
export interface GetOutputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#description CcFeed#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name CcFeed#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#output_config CcFeed#output_config}
    */
    readonly outputConfig: OutputConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#status CcFeed#status}
    */
    readonly status: string;
}
export class GetOutputPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GetOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._outputConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputConfig = this._outputConfig?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GetOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._name = undefined;
            this._outputConfig.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._name = value.name;
            this._outputConfig.internalValue = value.outputConfig;
            this._status = value.status;
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

    // output_config - computed: false, optional: false, required: true
    private _outputConfig = new OutputConfigPropertyOutputReference(this, "output_config");
    public get outputConfig() {
        return this._outputConfig;
    }
    public putOutputConfig(value: OutputConfigProperty) {
        this._outputConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConfigInput() {
        return this._outputConfig.internalValue;
    }

    // status - computed: false, optional: false, required: true
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class GetOutputPropertyList extends cdktn.ComplexList {
    public internalValue? : GetOutputProperty[] | cdktn.IResolvable

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
    public get(index: number): GetOutputPropertyOutputReference {
        return new GetOutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
