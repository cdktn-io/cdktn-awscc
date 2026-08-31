// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLifecycleAutomationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Automation document to execute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document CcLifecycleAutomation#automation_document}
    */
    readonly automationDocument: string;
    /**
    * Parameters to be passed to the Automation Document
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters CcLifecycleAutomation#automation_parameters}
    */
    readonly automationParameters: { [key: string]: string[] } | cdktn.IResolvable;
    /**
    * A unique identifier used for generating a unique logical ID for the custom resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key CcLifecycleAutomation#resource_key}
    */
    readonly resourceKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#tags CcLifecycleAutomation#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}
*/
export class CcLifecycleAutomation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssmquicksetup_lifecycle_automation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLifecycleAutomation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLifecycleAutomation to import
    * @param importFromId The id of the existing CcLifecycleAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLifecycleAutomation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmquicksetup_lifecycle_automation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLifecycleAutomationProps
    */
    public constructor(scope: Construct, id: string, config: CcLifecycleAutomationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmquicksetup_lifecycle_automation',
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
        this._automationDocument = config.automationDocument;
        this._automationParameters = config.automationParameters;
        this._resourceKey = config.resourceKey;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // automation_document - computed: false, optional: false, required: true
    private _automationDocument?: string; 
    public get automationDocument() {
        return this.getStringAttribute('automation_document');
    }
    public set automationDocument(value: string) {
        this._automationDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get automationDocumentInput() {
        return this._automationDocument;
    }

    // automation_parameters - computed: false, optional: false, required: true
    private _automationParameters?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get automationParameters() {
        return this.interpolationForAttribute('automation_parameters');
    }
    public set automationParameters(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._automationParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get automationParametersInput() {
        return this._automationParameters;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_key - computed: false, optional: false, required: true
    private _resourceKey?: string; 
    public get resourceKey() {
        return this.getStringAttribute('resource_key');
    }
    public set resourceKey(value: string) {
        this._resourceKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceKeyInput() {
        return this._resourceKey;
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
            automation_document: cdktn.stringToTerraform(this._automationDocument),
            automation_parameters: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(this._automationParameters),
            resource_key: cdktn.stringToTerraform(this._resourceKey),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            automation_document: {
                value: cdktn.stringToHclTerraform(this._automationDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automation_parameters: {
                value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(this._automationParameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            resource_key: {
                value: cdktn.stringToHclTerraform(this._resourceKey),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLifecycleAutomation {
}
