// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcImageBuilderProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#access_endpoints CcImageBuilder#access_endpoints}
    */
    readonly accessEndpoints?: CcImageBuilder.AccessEndpointProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#appstream_agent_version CcImageBuilder#appstream_agent_version}
    */
    readonly appstreamAgentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#description CcImageBuilder#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#display_name CcImageBuilder#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#domain_join_info CcImageBuilder#domain_join_info}
    */
    readonly domainJoinInfo?: CcImageBuilder.DomainJoinInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#enable_default_internet_access CcImageBuilder#enable_default_internet_access}
    */
    readonly enableDefaultInternetAccess?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#iam_role_arn CcImageBuilder#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#image_arn CcImageBuilder#image_arn}
    */
    readonly imageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#image_name CcImageBuilder#image_name}
    */
    readonly imageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#instance_type CcImageBuilder#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#name CcImageBuilder#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#root_volume_config CcImageBuilder#root_volume_config}
    */
    readonly rootVolumeConfig?: CcImageBuilder.VolumeConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#softwares_to_install CcImageBuilder#softwares_to_install}
    */
    readonly softwaresToInstall?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#softwares_to_uninstall CcImageBuilder#softwares_to_uninstall}
    */
    readonly softwaresToUninstall?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#tags CcImageBuilder#tags}
    */
    readonly tags?: CcImageBuilder.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#vpc_config CcImageBuilder#vpc_config}
    */
    readonly vpcConfig?: CcImageBuilder.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder awscc_appstream_image_builder}
*/
export class CcImageBuilder extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_image_builder";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcImageBuilder resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcImageBuilder to import
    * @param importFromId The id of the existing CcImageBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcImageBuilder to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_image_builder", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder awscc_appstream_image_builder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcImageBuilderProps
    */
    public constructor(scope: Construct, id: string, config: CcImageBuilderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_image_builder',
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
        this._accessEndpoints.internalValue = config.accessEndpoints;
        this._appstreamAgentVersion = config.appstreamAgentVersion;
        this._description = config.description;
        this._displayName = config.displayName;
        this._domainJoinInfo.internalValue = config.domainJoinInfo;
        this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
        this._iamRoleArn = config.iamRoleArn;
        this._imageArn = config.imageArn;
        this._imageName = config.imageName;
        this._instanceType = config.instanceType;
        this._name = config.name;
        this._rootVolumeConfig.internalValue = config.rootVolumeConfig;
        this._softwaresToInstall = config.softwaresToInstall;
        this._softwaresToUninstall = config.softwaresToUninstall;
        this._tags.internalValue = config.tags;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_endpoints - computed: true, optional: true, required: false
    private _accessEndpoints = new CcImageBuilder.AccessEndpointPropertyList(this, "access_endpoints", false);
    public get accessEndpoints() {
        return this._accessEndpoints;
    }
    public putAccessEndpoints(value: CcImageBuilder.AccessEndpointProperty[] | cdktn.IResolvable) {
        this._accessEndpoints.internalValue = value;
    }
    public resetAccessEndpoints() {
        this._accessEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointsInput() {
        return this._accessEndpoints.internalValue;
    }

    // appstream_agent_version - computed: true, optional: true, required: false
    private _appstreamAgentVersion?: string; 
    public get appstreamAgentVersion() {
        return this.getStringAttribute('appstream_agent_version');
    }
    public set appstreamAgentVersion(value: string) {
        this._appstreamAgentVersion = value;
    }
    public resetAppstreamAgentVersion() {
        this._appstreamAgentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appstreamAgentVersionInput() {
        return this._appstreamAgentVersion;
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

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // domain_join_info - computed: true, optional: true, required: false
    private _domainJoinInfo = new CcImageBuilder.DomainJoinInfoPropertyOutputReference(this, "domain_join_info");
    public get domainJoinInfo() {
        return this._domainJoinInfo;
    }
    public putDomainJoinInfo(value: CcImageBuilder.DomainJoinInfoProperty) {
        this._domainJoinInfo.internalValue = value;
    }
    public resetDomainJoinInfo() {
        this._domainJoinInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainJoinInfoInput() {
        return this._domainJoinInfo.internalValue;
    }

    // enable_default_internet_access - computed: true, optional: true, required: false
    private _enableDefaultInternetAccess?: boolean | cdktn.IResolvable; 
    public get enableDefaultInternetAccess() {
        return this.getBooleanAttribute('enable_default_internet_access');
    }
    public set enableDefaultInternetAccess(value: boolean | cdktn.IResolvable) {
        this._enableDefaultInternetAccess = value;
    }
    public resetEnableDefaultInternetAccess() {
        this._enableDefaultInternetAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDefaultInternetAccessInput() {
        return this._enableDefaultInternetAccess;
    }

    // iam_role_arn - computed: true, optional: true, required: false
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
        this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_arn - computed: true, optional: true, required: false
    private _imageArn?: string; 
    public get imageArn() {
        return this.getStringAttribute('image_arn');
    }
    public set imageArn(value: string) {
        this._imageArn = value;
    }
    public resetImageArn() {
        this._imageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageArnInput() {
        return this._imageArn;
    }

    // image_name - computed: true, optional: true, required: false
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    public resetImageName() {
        this._imageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
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

    // root_volume_config - computed: true, optional: true, required: false
    private _rootVolumeConfig = new CcImageBuilder.VolumeConfigPropertyOutputReference(this, "root_volume_config");
    public get rootVolumeConfig() {
        return this._rootVolumeConfig;
    }
    public putRootVolumeConfig(value: CcImageBuilder.VolumeConfigProperty) {
        this._rootVolumeConfig.internalValue = value;
    }
    public resetRootVolumeConfig() {
        this._rootVolumeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootVolumeConfigInput() {
        return this._rootVolumeConfig.internalValue;
    }

    // softwares_to_install - computed: true, optional: true, required: false
    private _softwaresToInstall?: string[]; 
    public get softwaresToInstall() {
        return this.getListAttribute('softwares_to_install');
    }
    public set softwaresToInstall(value: string[]) {
        this._softwaresToInstall = value;
    }
    public resetSoftwaresToInstall() {
        this._softwaresToInstall = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softwaresToInstallInput() {
        return this._softwaresToInstall;
    }

    // softwares_to_uninstall - computed: true, optional: true, required: false
    private _softwaresToUninstall?: string[]; 
    public get softwaresToUninstall() {
        return this.getListAttribute('softwares_to_uninstall');
    }
    public set softwaresToUninstall(value: string[]) {
        this._softwaresToUninstall = value;
    }
    public resetSoftwaresToUninstall() {
        this._softwaresToUninstall = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softwaresToUninstallInput() {
        return this._softwaresToUninstall;
    }

    // streaming_url - computed: true, optional: false, required: false
    public get streamingUrl() {
        return this.getStringAttribute('streaming_url');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcImageBuilder.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcImageBuilder.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new CcImageBuilder.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcImageBuilder.VpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    public resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_endpoints: cdktn.listMapper(ccImageBuilderAccessEndpointPropertyToTerraform, false)(this._accessEndpoints.internalValue),
            appstream_agent_version: cdktn.stringToTerraform(this._appstreamAgentVersion),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            domain_join_info: ccImageBuilderDomainJoinInfoPropertyToTerraform(this._domainJoinInfo.internalValue),
            enable_default_internet_access: cdktn.booleanToTerraform(this._enableDefaultInternetAccess),
            iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
            image_arn: cdktn.stringToTerraform(this._imageArn),
            image_name: cdktn.stringToTerraform(this._imageName),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            name: cdktn.stringToTerraform(this._name),
            root_volume_config: ccImageBuilderVolumeConfigPropertyToTerraform(this._rootVolumeConfig.internalValue),
            softwares_to_install: cdktn.listMapper(cdktn.stringToTerraform, false)(this._softwaresToInstall),
            softwares_to_uninstall: cdktn.listMapper(cdktn.stringToTerraform, false)(this._softwaresToUninstall),
            tags: cdktn.listMapper(ccImageBuilderTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_config: ccImageBuilderVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_endpoints: {
                value: cdktn.listMapperHcl(ccImageBuilderAccessEndpointPropertyToHclTerraform, false)(this._accessEndpoints.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcImageBuilder.AccessEndpointPropertyList",
            },
            appstream_agent_version: {
                value: cdktn.stringToHclTerraform(this._appstreamAgentVersion),
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
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_join_info: {
                value: ccImageBuilderDomainJoinInfoPropertyToHclTerraform(this._domainJoinInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImageBuilder.DomainJoinInfoProperty",
            },
            enable_default_internet_access: {
                value: cdktn.booleanToHclTerraform(this._enableDefaultInternetAccess),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            iam_role_arn: {
                value: cdktn.stringToHclTerraform(this._iamRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_arn: {
                value: cdktn.stringToHclTerraform(this._imageArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_name: {
                value: cdktn.stringToHclTerraform(this._imageName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
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
            root_volume_config: {
                value: ccImageBuilderVolumeConfigPropertyToHclTerraform(this._rootVolumeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImageBuilder.VolumeConfigProperty",
            },
            softwares_to_install: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._softwaresToInstall),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            softwares_to_uninstall: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._softwaresToUninstall),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccImageBuilderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcImageBuilder.TagPropertyList",
            },
            vpc_config: {
                value: ccImageBuilderVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImageBuilder.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccImageBuilderAccessEndpointPropertyToTerraform(struct?: CcImageBuilder.AccessEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
        vpce_id: cdktn.stringToTerraform(struct!.vpceId),
    }
}


export function ccImageBuilderAccessEndpointPropertyToHclTerraform(struct?: CcImageBuilder.AccessEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpce_id: {
            value: cdktn.stringToHclTerraform(struct!.vpceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageBuilderDomainJoinInfoPropertyToTerraform(struct?: CcImageBuilder.DomainJoinInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        directory_name: cdktn.stringToTerraform(struct!.directoryName),
        organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    }
}


export function ccImageBuilderDomainJoinInfoPropertyToHclTerraform(struct?: CcImageBuilder.DomainJoinInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        directory_name: {
            value: cdktn.stringToHclTerraform(struct!.directoryName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_unit_distinguished_name: {
            value: cdktn.stringToHclTerraform(struct!.organizationalUnitDistinguishedName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageBuilderVolumeConfigPropertyToTerraform(struct?: CcImageBuilder.VolumeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccImageBuilderVolumeConfigPropertyToHclTerraform(struct?: CcImageBuilder.VolumeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageBuilderTagPropertyToTerraform(struct?: CcImageBuilder.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccImageBuilderTagPropertyToHclTerraform(struct?: CcImageBuilder.TagProperty | cdktn.IResolvable): any {
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


export function ccImageBuilderVpcConfigPropertyToTerraform(struct?: CcImageBuilder.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccImageBuilderVpcConfigPropertyToHclTerraform(struct?: CcImageBuilder.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcImageBuilder {
export interface AccessEndpointProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#endpoint_type CcImageBuilder#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#vpce_id CcImageBuilder#vpce_id}
    */
    readonly vpceId?: string;
}
export class AccessEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointType = this._endpointType;
        }
        if (this._vpceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpceId = this._vpceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointType = undefined;
            this._vpceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointType = value.endpointType;
            this._vpceId = value.vpceId;
        }
    }

    // endpoint_type - computed: true, optional: true, required: false
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    public resetEndpointType() {
        this._endpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
    }

    // vpce_id - computed: true, optional: true, required: false
    private _vpceId?: string; 
    public get vpceId() {
        return this.getStringAttribute('vpce_id');
    }
    public set vpceId(value: string) {
        this._vpceId = value;
    }
    public resetVpceId() {
        this._vpceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpceIdInput() {
        return this._vpceId;
    }
}

export class AccessEndpointPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessEndpointProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessEndpointPropertyOutputReference {
        return new AccessEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DomainJoinInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#directory_name CcImageBuilder#directory_name}
    */
    readonly directoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#organizational_unit_distinguished_name CcImageBuilder#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export class DomainJoinInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainJoinInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._directoryName !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryName = this._directoryName;
        }
        if (this._organizationalUnitDistinguishedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainJoinInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._directoryName = undefined;
            this._organizationalUnitDistinguishedName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._directoryName = value.directoryName;
            this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
        }
    }

    // directory_name - computed: true, optional: true, required: false
    private _directoryName?: string; 
    public get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    public set directoryName(value: string) {
        this._directoryName = value;
    }
    public resetDirectoryName() {
        this._directoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryNameInput() {
        return this._directoryName;
    }

    // organizational_unit_distinguished_name - computed: true, optional: true, required: false
    private _organizationalUnitDistinguishedName?: string; 
    public get organizationalUnitDistinguishedName() {
        return this.getStringAttribute('organizational_unit_distinguished_name');
    }
    public set organizationalUnitDistinguishedName(value: string) {
        this._organizationalUnitDistinguishedName = value;
    }
    public resetOrganizationalUnitDistinguishedName() {
        this._organizationalUnitDistinguishedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitDistinguishedNameInput() {
        return this._organizationalUnitDistinguishedName;
    }
}
export interface VolumeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#volume_size_in_gb CcImageBuilder#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}
export class VolumeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VolumeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VolumeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // volume_size_in_gb - computed: true, optional: true, required: false
    private _volumeSizeInGb?: number; 
    public get volumeSizeInGb() {
        return this.getNumberAttribute('volume_size_in_gb');
    }
    public set volumeSizeInGb(value: number) {
        this._volumeSizeInGb = value;
    }
    public resetVolumeSizeInGb() {
        this._volumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInGbInput() {
        return this._volumeSizeInGb;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#key CcImageBuilder#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#value CcImageBuilder#value}
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
export interface VpcConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#security_group_ids CcImageBuilder#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_image_builder#subnet_ids CcImageBuilder#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
}
