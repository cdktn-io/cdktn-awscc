// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcComponentProps extends cdktn.TerraformMetaArguments {
    /**
    * The change description of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#change_description CcComponent#change_description}
    */
    readonly changeDescription?: string;
    /**
    * The data of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#data CcComponent#data}
    */
    readonly data?: string;
    /**
    * The description of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#description CcComponent#description}
    */
    readonly description?: string;
    /**
    * The KMS key identifier used to encrypt the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#kms_key_id CcComponent#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#name CcComponent#name}
    */
    readonly name: string;
    /**
    * The platform of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#platform CcComponent#platform}
    */
    readonly platform: string;
    /**
    * The operating system (OS) version supported by the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#supported_os_versions CcComponent#supported_os_versions}
    */
    readonly supportedOsVersions?: string[];
    /**
    * The tags associated with the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#tags CcComponent#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The uri of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#uri CcComponent#uri}
    */
    readonly uri?: string;
    /**
    * The version of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#version CcComponent#version}
    */
    readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component awscc_imagebuilder_component}
*/
export class CcComponent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_component";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcComponent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcComponent to import
    * @param importFromId The id of the existing CcComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcComponent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_component", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_component awscc_imagebuilder_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcComponentProps
    */
    public constructor(scope: Construct, id: string, config: CcComponentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_component',
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
        this._changeDescription = config.changeDescription;
        this._data = config.data;
        this._description = config.description;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._platform = config.platform;
        this._supportedOsVersions = config.supportedOsVersions;
        this._tags = config.tags;
        this._uri = config.uri;
        this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // change_description - computed: true, optional: true, required: false
    private _changeDescription?: string; 
    public get changeDescription() {
        return this.getStringAttribute('change_description');
    }
    public set changeDescription(value: string) {
        this._changeDescription = value;
    }
    public resetChangeDescription() {
        this._changeDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get changeDescriptionInput() {
        return this._changeDescription;
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
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

    // encrypted - computed: true, optional: false, required: false
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // latest_version - computed: true, optional: false, required: false
    private _latestVersion = new CcComponent.LatestVersionPropertyOutputReference(this, "latest_version");
    public get latestVersion() {
        return this._latestVersion;
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

    // platform - computed: false, optional: false, required: true
    private _platform?: string; 
    public get platform() {
        return this.getStringAttribute('platform');
    }
    public set platform(value: string) {
        this._platform = value;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
        return this._platform;
    }

    // supported_os_versions - computed: true, optional: true, required: false
    private _supportedOsVersions?: string[]; 
    public get supportedOsVersions() {
        return this.getListAttribute('supported_os_versions');
    }
    public set supportedOsVersions(value: string[]) {
        this._supportedOsVersions = value;
    }
    public resetSupportedOsVersions() {
        this._supportedOsVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedOsVersionsInput() {
        return this._supportedOsVersions;
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

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            change_description: cdktn.stringToTerraform(this._changeDescription),
            data: cdktn.stringToTerraform(this._data),
            description: cdktn.stringToTerraform(this._description),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            platform: cdktn.stringToTerraform(this._platform),
            supported_os_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedOsVersions),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            uri: cdktn.stringToTerraform(this._uri),
            version: cdktn.stringToTerraform(this._version),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            change_description: {
                value: cdktn.stringToHclTerraform(this._changeDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data: {
                value: cdktn.stringToHclTerraform(this._data),
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
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            platform: {
                value: cdktn.stringToHclTerraform(this._platform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            supported_os_versions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedOsVersions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            uri: {
                value: cdktn.stringToHclTerraform(this._uri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version: {
                value: cdktn.stringToHclTerraform(this._version),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccComponentLatestVersionPropertyToTerraform(struct?: CcComponent.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccComponentLatestVersionPropertyToHclTerraform(struct?: CcComponent.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcComponent {
export interface LatestVersionProperty {
}
export class LatestVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LatestVersionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LatestVersionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // major - computed: true, optional: false, required: false
    public get major() {
        return this.getStringAttribute('major');
    }

    // minor - computed: true, optional: false, required: false
    public get minor() {
        return this.getStringAttribute('minor');
    }

    // patch - computed: true, optional: false, required: false
    public get patch() {
        return this.getStringAttribute('patch');
    }
}
}
