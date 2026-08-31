// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkflowProps extends cdktn.TerraformMetaArguments {
    /**
    * The change description of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#change_description CcWorkflow#change_description}
    */
    readonly changeDescription?: string;
    /**
    * The data of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#data CcWorkflow#data}
    */
    readonly data?: string;
    /**
    * The description of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#description CcWorkflow#description}
    */
    readonly description?: string;
    /**
    * The KMS key identifier used to encrypt the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#kms_key_id CcWorkflow#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#name CcWorkflow#name}
    */
    readonly name: string;
    /**
    * The tags associated with the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#tags CcWorkflow#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The type of the workflow denotes whether the workflow is used to build, test, or distribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#type CcWorkflow#type}
    */
    readonly type: string;
    /**
    * The uri of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#uri CcWorkflow#uri}
    */
    readonly uri?: string;
    /**
    * The version of the workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#version CcWorkflow#version}
    */
    readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow awscc_imagebuilder_workflow}
*/
export class CcWorkflow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_workflow";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkflow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkflow to import
    * @param importFromId The id of the existing CcWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkflow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_workflow", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_workflow awscc_imagebuilder_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkflowProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkflowProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_workflow',
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
        this._changeDescription = config.changeDescription;
        this._data = config.data;
        this._description = config.description;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._tags = config.tags;
        this._type = config.type;
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
    private _latestVersion = new CcWorkflow.LatestVersionPropertyOutputReference(this, "latest_version");
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
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            type: cdktn.stringToTerraform(this._type),
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

export function ccWorkflowLatestVersionPropertyToTerraform(struct?: CcWorkflow.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWorkflowLatestVersionPropertyToHclTerraform(struct?: CcWorkflow.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcWorkflow {
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
