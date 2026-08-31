// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStudioComponentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#configuration CcStudioComponent#configuration}
    */
    readonly configuration?: CcStudioComponent.StudioComponentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#description CcStudioComponent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids CcStudioComponent#ec_2_security_group_ids}
    */
    readonly ec2SecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#initialization_scripts CcStudioComponent#initialization_scripts}
    */
    readonly initializationScripts?: CcStudioComponent.StudioComponentInitializationScriptProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#name CcStudioComponent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#script_parameters CcStudioComponent#script_parameters}
    */
    readonly scriptParameters?: CcStudioComponent.ScriptParameterKeyValueProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#studio_id CcStudioComponent#studio_id}
    */
    readonly studioId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#subtype CcStudioComponent#subtype}
    */
    readonly subtype?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#tags CcStudioComponent#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#type CcStudioComponent#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component awscc_nimblestudio_studio_component}
*/
export class CcStudioComponent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_nimblestudio_studio_component";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStudioComponent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStudioComponent to import
    * @param importFromId The id of the existing CcStudioComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStudioComponent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_studio_component", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component awscc_nimblestudio_studio_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStudioComponentProps
    */
    public constructor(scope: Construct, id: string, config: CcStudioComponentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_nimblestudio_studio_component',
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
        this._configuration.internalValue = config.configuration;
        this._description = config.description;
        this._ec2SecurityGroupIds = config.ec2SecurityGroupIds;
        this._initializationScripts.internalValue = config.initializationScripts;
        this._name = config.name;
        this._scriptParameters.internalValue = config.scriptParameters;
        this._studioId = config.studioId;
        this._subtype = config.subtype;
        this._tags = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CcStudioComponent.StudioComponentConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcStudioComponent.StudioComponentConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
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

    // ec_2_security_group_ids - computed: true, optional: true, required: false
    private _ec2SecurityGroupIds?: string[]; 
    public get ec2SecurityGroupIds() {
        return this.getListAttribute('ec_2_security_group_ids');
    }
    public set ec2SecurityGroupIds(value: string[]) {
        this._ec2SecurityGroupIds = value;
    }
    public resetEc2SecurityGroupIds() {
        this._ec2SecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2SecurityGroupIdsInput() {
        return this._ec2SecurityGroupIds;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // initialization_scripts - computed: true, optional: true, required: false
    private _initializationScripts = new CcStudioComponent.StudioComponentInitializationScriptPropertyList(this, "initialization_scripts", false);
    public get initializationScripts() {
        return this._initializationScripts;
    }
    public putInitializationScripts(value: CcStudioComponent.StudioComponentInitializationScriptProperty[] | cdktn.IResolvable) {
        this._initializationScripts.internalValue = value;
    }
    public resetInitializationScripts() {
        this._initializationScripts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initializationScriptsInput() {
        return this._initializationScripts.internalValue;
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

    // script_parameters - computed: true, optional: true, required: false
    private _scriptParameters = new CcStudioComponent.ScriptParameterKeyValuePropertyList(this, "script_parameters", false);
    public get scriptParameters() {
        return this._scriptParameters;
    }
    public putScriptParameters(value: CcStudioComponent.ScriptParameterKeyValueProperty[] | cdktn.IResolvable) {
        this._scriptParameters.internalValue = value;
    }
    public resetScriptParameters() {
        this._scriptParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptParametersInput() {
        return this._scriptParameters.internalValue;
    }

    // studio_component_id - computed: true, optional: false, required: false
    public get studioComponentId() {
        return this.getStringAttribute('studio_component_id');
    }

    // studio_id - computed: false, optional: false, required: true
    private _studioId?: string; 
    public get studioId() {
        return this.getStringAttribute('studio_id');
    }
    public set studioId(value: string) {
        this._studioId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioIdInput() {
        return this._studioId;
    }

    // subtype - computed: true, optional: true, required: false
    private _subtype?: string; 
    public get subtype() {
        return this.getStringAttribute('subtype');
    }
    public set subtype(value: string) {
        this._subtype = value;
    }
    public resetSubtype() {
        this._subtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subtypeInput() {
        return this._subtype;
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration: ccStudioComponentStudioComponentConfigurationPropertyToTerraform(this._configuration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            ec_2_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ec2SecurityGroupIds),
            initialization_scripts: cdktn.listMapper(ccStudioComponentStudioComponentInitializationScriptPropertyToTerraform, false)(this._initializationScripts.internalValue),
            name: cdktn.stringToTerraform(this._name),
            script_parameters: cdktn.listMapper(ccStudioComponentScriptParameterKeyValuePropertyToTerraform, false)(this._scriptParameters.internalValue),
            studio_id: cdktn.stringToTerraform(this._studioId),
            subtype: cdktn.stringToTerraform(this._subtype),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccStudioComponentStudioComponentConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStudioComponent.StudioComponentConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ec_2_security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ec2SecurityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            initialization_scripts: {
                value: cdktn.listMapperHcl(ccStudioComponentStudioComponentInitializationScriptPropertyToHclTerraform, false)(this._initializationScripts.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStudioComponent.StudioComponentInitializationScriptPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            script_parameters: {
                value: cdktn.listMapperHcl(ccStudioComponentScriptParameterKeyValuePropertyToHclTerraform, false)(this._scriptParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStudioComponent.ScriptParameterKeyValuePropertyList",
            },
            studio_id: {
                value: cdktn.stringToHclTerraform(this._studioId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subtype: {
                value: cdktn.stringToHclTerraform(this._subtype),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStudioComponentActiveDirectoryComputerAttributePropertyToTerraform(struct?: CcStudioComponent.ActiveDirectoryComputerAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStudioComponentActiveDirectoryComputerAttributePropertyToHclTerraform(struct?: CcStudioComponent.ActiveDirectoryComputerAttributeProperty | cdktn.IResolvable): any {
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


export function ccStudioComponentActiveDirectoryConfigurationPropertyToTerraform(struct?: CcStudioComponent.ActiveDirectoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        computer_attributes: cdktn.listMapper(ccStudioComponentActiveDirectoryComputerAttributePropertyToTerraform, false)(struct!.computerAttributes),
        directory_id: cdktn.stringToTerraform(struct!.directoryId),
        organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    }
}


export function ccStudioComponentActiveDirectoryConfigurationPropertyToHclTerraform(struct?: CcStudioComponent.ActiveDirectoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        computer_attributes: {
            value: cdktn.listMapperHcl(ccStudioComponentActiveDirectoryComputerAttributePropertyToHclTerraform, false)(struct!.computerAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "ActiveDirectoryComputerAttributePropertyList",
        },
        directory_id: {
            value: cdktn.stringToHclTerraform(struct!.directoryId),
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


export function ccStudioComponentComputeFarmConfigurationPropertyToTerraform(struct?: CcStudioComponent.ComputeFarmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active_directory_user: cdktn.stringToTerraform(struct!.activeDirectoryUser),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
    }
}


export function ccStudioComponentComputeFarmConfigurationPropertyToHclTerraform(struct?: CcStudioComponent.ComputeFarmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active_directory_user: {
            value: cdktn.stringToHclTerraform(struct!.activeDirectoryUser),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStudioComponentLicenseServiceConfigurationPropertyToTerraform(struct?: CcStudioComponent.LicenseServiceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
    }
}


export function ccStudioComponentLicenseServiceConfigurationPropertyToHclTerraform(struct?: CcStudioComponent.LicenseServiceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStudioComponentSharedFileSystemConfigurationPropertyToTerraform(struct?: CcStudioComponent.SharedFileSystemConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
        linux_mount_point: cdktn.stringToTerraform(struct!.linuxMountPoint),
        share_name: cdktn.stringToTerraform(struct!.shareName),
        windows_mount_drive: cdktn.stringToTerraform(struct!.windowsMountDrive),
    }
}


export function ccStudioComponentSharedFileSystemConfigurationPropertyToHclTerraform(struct?: CcStudioComponent.SharedFileSystemConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_system_id: {
            value: cdktn.stringToHclTerraform(struct!.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        linux_mount_point: {
            value: cdktn.stringToHclTerraform(struct!.linuxMountPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_name: {
            value: cdktn.stringToHclTerraform(struct!.shareName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        windows_mount_drive: {
            value: cdktn.stringToHclTerraform(struct!.windowsMountDrive),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStudioComponentStudioComponentConfigurationPropertyToTerraform(struct?: CcStudioComponent.StudioComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active_directory_configuration: ccStudioComponentActiveDirectoryConfigurationPropertyToTerraform(struct!.activeDirectoryConfiguration),
        compute_farm_configuration: ccStudioComponentComputeFarmConfigurationPropertyToTerraform(struct!.computeFarmConfiguration),
        license_service_configuration: ccStudioComponentLicenseServiceConfigurationPropertyToTerraform(struct!.licenseServiceConfiguration),
        shared_file_system_configuration: ccStudioComponentSharedFileSystemConfigurationPropertyToTerraform(struct!.sharedFileSystemConfiguration),
    }
}


export function ccStudioComponentStudioComponentConfigurationPropertyToHclTerraform(struct?: CcStudioComponent.StudioComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active_directory_configuration: {
            value: ccStudioComponentActiveDirectoryConfigurationPropertyToHclTerraform(struct!.activeDirectoryConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ActiveDirectoryConfigurationProperty",
        },
        compute_farm_configuration: {
            value: ccStudioComponentComputeFarmConfigurationPropertyToHclTerraform(struct!.computeFarmConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ComputeFarmConfigurationProperty",
        },
        license_service_configuration: {
            value: ccStudioComponentLicenseServiceConfigurationPropertyToHclTerraform(struct!.licenseServiceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LicenseServiceConfigurationProperty",
        },
        shared_file_system_configuration: {
            value: ccStudioComponentSharedFileSystemConfigurationPropertyToHclTerraform(struct!.sharedFileSystemConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SharedFileSystemConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStudioComponentStudioComponentInitializationScriptPropertyToTerraform(struct?: CcStudioComponent.StudioComponentInitializationScriptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_profile_protocol_version: cdktn.stringToTerraform(struct!.launchProfileProtocolVersion),
        platform: cdktn.stringToTerraform(struct!.platform),
        run_context: cdktn.stringToTerraform(struct!.runContext),
        script: cdktn.stringToTerraform(struct!.script),
    }
}


export function ccStudioComponentStudioComponentInitializationScriptPropertyToHclTerraform(struct?: CcStudioComponent.StudioComponentInitializationScriptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_profile_protocol_version: {
            value: cdktn.stringToHclTerraform(struct!.launchProfileProtocolVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        platform: {
            value: cdktn.stringToHclTerraform(struct!.platform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        run_context: {
            value: cdktn.stringToHclTerraform(struct!.runContext),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script: {
            value: cdktn.stringToHclTerraform(struct!.script),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStudioComponentScriptParameterKeyValuePropertyToTerraform(struct?: CcStudioComponent.ScriptParameterKeyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStudioComponentScriptParameterKeyValuePropertyToHclTerraform(struct?: CcStudioComponent.ScriptParameterKeyValueProperty | cdktn.IResolvable): any {
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


export namespace CcStudioComponent {
export interface ActiveDirectoryComputerAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#name CcStudioComponent#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#value CcStudioComponent#value}
    */
    readonly value?: string;
}
export class ActiveDirectoryComputerAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActiveDirectoryComputerAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActiveDirectoryComputerAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class ActiveDirectoryComputerAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : ActiveDirectoryComputerAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): ActiveDirectoryComputerAttributePropertyOutputReference {
        return new ActiveDirectoryComputerAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ActiveDirectoryConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#computer_attributes CcStudioComponent#computer_attributes}
    */
    readonly computerAttributes?: ActiveDirectoryComputerAttributeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#directory_id CcStudioComponent#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name CcStudioComponent#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export class ActiveDirectoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActiveDirectoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computerAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.computerAttributes = this._computerAttributes?.internalValue;
        }
        if (this._directoryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryId = this._directoryId;
        }
        if (this._organizationalUnitDistinguishedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActiveDirectoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computerAttributes.internalValue = undefined;
            this._directoryId = undefined;
            this._organizationalUnitDistinguishedName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computerAttributes.internalValue = value.computerAttributes;
            this._directoryId = value.directoryId;
            this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
        }
    }

    // computer_attributes - computed: true, optional: true, required: false
    private _computerAttributes = new ActiveDirectoryComputerAttributePropertyList(this, "computer_attributes", false);
    public get computerAttributes() {
        return this._computerAttributes;
    }
    public putComputerAttributes(value: ActiveDirectoryComputerAttributeProperty[] | cdktn.IResolvable) {
        this._computerAttributes.internalValue = value;
    }
    public resetComputerAttributes() {
        this._computerAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computerAttributesInput() {
        return this._computerAttributes.internalValue;
    }

    // directory_id - computed: true, optional: true, required: false
    private _directoryId?: string; 
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
        this._directoryId = value;
    }
    public resetDirectoryId() {
        this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
        return this._directoryId;
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
export interface ComputeFarmConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#active_directory_user CcStudioComponent#active_directory_user}
    */
    readonly activeDirectoryUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#endpoint CcStudioComponent#endpoint}
    */
    readonly endpoint?: string;
}
export class ComputeFarmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeFarmConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activeDirectoryUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeDirectoryUser = this._activeDirectoryUser;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeFarmConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeDirectoryUser = undefined;
            this._endpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeDirectoryUser = value.activeDirectoryUser;
            this._endpoint = value.endpoint;
        }
    }

    // active_directory_user - computed: true, optional: true, required: false
    private _activeDirectoryUser?: string; 
    public get activeDirectoryUser() {
        return this.getStringAttribute('active_directory_user');
    }
    public set activeDirectoryUser(value: string) {
        this._activeDirectoryUser = value;
    }
    public resetActiveDirectoryUser() {
        this._activeDirectoryUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDirectoryUserInput() {
        return this._activeDirectoryUser;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }
}
export interface LicenseServiceConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#endpoint CcStudioComponent#endpoint}
    */
    readonly endpoint?: string;
}
export class LicenseServiceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LicenseServiceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseServiceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
        }
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }
}
export interface SharedFileSystemConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#endpoint CcStudioComponent#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#file_system_id CcStudioComponent#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#linux_mount_point CcStudioComponent#linux_mount_point}
    */
    readonly linuxMountPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#share_name CcStudioComponent#share_name}
    */
    readonly shareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#windows_mount_drive CcStudioComponent#windows_mount_drive}
    */
    readonly windowsMountDrive?: string;
}
export class SharedFileSystemConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharedFileSystemConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._linuxMountPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.linuxMountPoint = this._linuxMountPoint;
        }
        if (this._shareName !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareName = this._shareName;
        }
        if (this._windowsMountDrive !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsMountDrive = this._windowsMountDrive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharedFileSystemConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._fileSystemId = undefined;
            this._linuxMountPoint = undefined;
            this._shareName = undefined;
            this._windowsMountDrive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._fileSystemId = value.fileSystemId;
            this._linuxMountPoint = value.linuxMountPoint;
            this._shareName = value.shareName;
            this._windowsMountDrive = value.windowsMountDrive;
        }
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }

    // file_system_id - computed: true, optional: true, required: false
    private _fileSystemId?: string; 
    public get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
        this._fileSystemId = value;
    }
    public resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
        return this._fileSystemId;
    }

    // linux_mount_point - computed: true, optional: true, required: false
    private _linuxMountPoint?: string; 
    public get linuxMountPoint() {
        return this.getStringAttribute('linux_mount_point');
    }
    public set linuxMountPoint(value: string) {
        this._linuxMountPoint = value;
    }
    public resetLinuxMountPoint() {
        this._linuxMountPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linuxMountPointInput() {
        return this._linuxMountPoint;
    }

    // share_name - computed: true, optional: true, required: false
    private _shareName?: string; 
    public get shareName() {
        return this.getStringAttribute('share_name');
    }
    public set shareName(value: string) {
        this._shareName = value;
    }
    public resetShareName() {
        this._shareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareNameInput() {
        return this._shareName;
    }

    // windows_mount_drive - computed: true, optional: true, required: false
    private _windowsMountDrive?: string; 
    public get windowsMountDrive() {
        return this.getStringAttribute('windows_mount_drive');
    }
    public set windowsMountDrive(value: string) {
        this._windowsMountDrive = value;
    }
    public resetWindowsMountDrive() {
        this._windowsMountDrive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsMountDriveInput() {
        return this._windowsMountDrive;
    }
}
export interface StudioComponentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#active_directory_configuration CcStudioComponent#active_directory_configuration}
    */
    readonly activeDirectoryConfiguration?: ActiveDirectoryConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration CcStudioComponent#compute_farm_configuration}
    */
    readonly computeFarmConfiguration?: ComputeFarmConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#license_service_configuration CcStudioComponent#license_service_configuration}
    */
    readonly licenseServiceConfiguration?: LicenseServiceConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration CcStudioComponent#shared_file_system_configuration}
    */
    readonly sharedFileSystemConfiguration?: SharedFileSystemConfigurationProperty;
}
export class StudioComponentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StudioComponentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activeDirectoryConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeDirectoryConfiguration = this._activeDirectoryConfiguration?.internalValue;
        }
        if (this._computeFarmConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeFarmConfiguration = this._computeFarmConfiguration?.internalValue;
        }
        if (this._licenseServiceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseServiceConfiguration = this._licenseServiceConfiguration?.internalValue;
        }
        if (this._sharedFileSystemConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharedFileSystemConfiguration = this._sharedFileSystemConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StudioComponentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeDirectoryConfiguration.internalValue = undefined;
            this._computeFarmConfiguration.internalValue = undefined;
            this._licenseServiceConfiguration.internalValue = undefined;
            this._sharedFileSystemConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeDirectoryConfiguration.internalValue = value.activeDirectoryConfiguration;
            this._computeFarmConfiguration.internalValue = value.computeFarmConfiguration;
            this._licenseServiceConfiguration.internalValue = value.licenseServiceConfiguration;
            this._sharedFileSystemConfiguration.internalValue = value.sharedFileSystemConfiguration;
        }
    }

    // active_directory_configuration - computed: true, optional: true, required: false
    private _activeDirectoryConfiguration = new ActiveDirectoryConfigurationPropertyOutputReference(this, "active_directory_configuration");
    public get activeDirectoryConfiguration() {
        return this._activeDirectoryConfiguration;
    }
    public putActiveDirectoryConfiguration(value: ActiveDirectoryConfigurationProperty) {
        this._activeDirectoryConfiguration.internalValue = value;
    }
    public resetActiveDirectoryConfiguration() {
        this._activeDirectoryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDirectoryConfigurationInput() {
        return this._activeDirectoryConfiguration.internalValue;
    }

    // compute_farm_configuration - computed: true, optional: true, required: false
    private _computeFarmConfiguration = new ComputeFarmConfigurationPropertyOutputReference(this, "compute_farm_configuration");
    public get computeFarmConfiguration() {
        return this._computeFarmConfiguration;
    }
    public putComputeFarmConfiguration(value: ComputeFarmConfigurationProperty) {
        this._computeFarmConfiguration.internalValue = value;
    }
    public resetComputeFarmConfiguration() {
        this._computeFarmConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeFarmConfigurationInput() {
        return this._computeFarmConfiguration.internalValue;
    }

    // license_service_configuration - computed: true, optional: true, required: false
    private _licenseServiceConfiguration = new LicenseServiceConfigurationPropertyOutputReference(this, "license_service_configuration");
    public get licenseServiceConfiguration() {
        return this._licenseServiceConfiguration;
    }
    public putLicenseServiceConfiguration(value: LicenseServiceConfigurationProperty) {
        this._licenseServiceConfiguration.internalValue = value;
    }
    public resetLicenseServiceConfiguration() {
        this._licenseServiceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseServiceConfigurationInput() {
        return this._licenseServiceConfiguration.internalValue;
    }

    // shared_file_system_configuration - computed: true, optional: true, required: false
    private _sharedFileSystemConfiguration = new SharedFileSystemConfigurationPropertyOutputReference(this, "shared_file_system_configuration");
    public get sharedFileSystemConfiguration() {
        return this._sharedFileSystemConfiguration;
    }
    public putSharedFileSystemConfiguration(value: SharedFileSystemConfigurationProperty) {
        this._sharedFileSystemConfiguration.internalValue = value;
    }
    public resetSharedFileSystemConfiguration() {
        this._sharedFileSystemConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharedFileSystemConfigurationInput() {
        return this._sharedFileSystemConfiguration.internalValue;
    }
}
export interface StudioComponentInitializationScriptProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version CcStudioComponent#launch_profile_protocol_version}
    */
    readonly launchProfileProtocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#platform CcStudioComponent#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#run_context CcStudioComponent#run_context}
    */
    readonly runContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#script CcStudioComponent#script}
    */
    readonly script?: string;
}
export class StudioComponentInitializationScriptPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StudioComponentInitializationScriptProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchProfileProtocolVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchProfileProtocolVersion = this._launchProfileProtocolVersion;
        }
        if (this._platform !== undefined) {
            hasAnyValues = true;
            internalValueResult.platform = this._platform;
        }
        if (this._runContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.runContext = this._runContext;
        }
        if (this._script !== undefined) {
            hasAnyValues = true;
            internalValueResult.script = this._script;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StudioComponentInitializationScriptProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchProfileProtocolVersion = undefined;
            this._platform = undefined;
            this._runContext = undefined;
            this._script = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchProfileProtocolVersion = value.launchProfileProtocolVersion;
            this._platform = value.platform;
            this._runContext = value.runContext;
            this._script = value.script;
        }
    }

    // launch_profile_protocol_version - computed: true, optional: true, required: false
    private _launchProfileProtocolVersion?: string; 
    public get launchProfileProtocolVersion() {
        return this.getStringAttribute('launch_profile_protocol_version');
    }
    public set launchProfileProtocolVersion(value: string) {
        this._launchProfileProtocolVersion = value;
    }
    public resetLaunchProfileProtocolVersion() {
        this._launchProfileProtocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchProfileProtocolVersionInput() {
        return this._launchProfileProtocolVersion;
    }

    // platform - computed: true, optional: true, required: false
    private _platform?: string; 
    public get platform() {
        return this.getStringAttribute('platform');
    }
    public set platform(value: string) {
        this._platform = value;
    }
    public resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
        return this._platform;
    }

    // run_context - computed: true, optional: true, required: false
    private _runContext?: string; 
    public get runContext() {
        return this.getStringAttribute('run_context');
    }
    public set runContext(value: string) {
        this._runContext = value;
    }
    public resetRunContext() {
        this._runContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runContextInput() {
        return this._runContext;
    }

    // script - computed: true, optional: true, required: false
    private _script?: string; 
    public get script() {
        return this.getStringAttribute('script');
    }
    public set script(value: string) {
        this._script = value;
    }
    public resetScript() {
        this._script = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptInput() {
        return this._script;
    }
}

export class StudioComponentInitializationScriptPropertyList extends cdktn.ComplexList {
    public internalValue? : StudioComponentInitializationScriptProperty[] | cdktn.IResolvable

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
    public get(index: number): StudioComponentInitializationScriptPropertyOutputReference {
        return new StudioComponentInitializationScriptPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScriptParameterKeyValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#key CcStudioComponent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_studio_component#value CcStudioComponent#value}
    */
    readonly value?: string;
}
export class ScriptParameterKeyValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScriptParameterKeyValueProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ScriptParameterKeyValueProperty | cdktn.IResolvable | undefined) {
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

export class ScriptParameterKeyValuePropertyList extends cdktn.ComplexList {
    public internalValue? : ScriptParameterKeyValueProperty[] | cdktn.IResolvable

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
    public get(index: number): ScriptParameterKeyValuePropertyOutputReference {
        return new ScriptParameterKeyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
