// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the author publishing the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#author CcApplication#author}
    */
    readonly author: string;
    /**
    * The description of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#description CcApplication#description}
    */
    readonly description: string;
    /**
    * A URL with more information about the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#home_page_url CcApplication#home_page_url}
    */
    readonly homePageUrl?: string;
    /**
    * Labels to improve discovery of apps in search results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#labels CcApplication#labels}
    */
    readonly labels?: string[];
    /**
    * A local text file that contains the license of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#license_body CcApplication#license_body}
    */
    readonly licenseBody?: string;
    /**
    * The name of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#name CcApplication#name}
    */
    readonly name: string;
    /**
    * A text readme file in Markdown language that contains a more detailed description of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#readme_body CcApplication#readme_body}
    */
    readonly readmeBody?: string;
    /**
    * The semantic version of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#semantic_version CcApplication#semantic_version}
    */
    readonly semanticVersion?: string;
    /**
    * A link to a public repository for the source code of your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#source_code_url CcApplication#source_code_url}
    */
    readonly sourceCodeUrl?: string;
    /**
    * A valid identifier from https://spdx.org/licenses/.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#spdx_license_id CcApplication#spdx_license_id}
    */
    readonly spdxLicenseId?: string;
    /**
    * The local raw packaged AWS SAM template file of your application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#template_body CcApplication#template_body}
    */
    readonly templateBody?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_serverlessrepo_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_serverlessrepo_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_serverlessrepo_application',
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
        this._author = config.author;
        this._description = config.description;
        this._homePageUrl = config.homePageUrl;
        this._labels = config.labels;
        this._licenseBody = config.licenseBody;
        this._name = config.name;
        this._readmeBody = config.readmeBody;
        this._semanticVersion = config.semanticVersion;
        this._sourceCodeUrl = config.sourceCodeUrl;
        this._spdxLicenseId = config.spdxLicenseId;
        this._templateBody = config.templateBody;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }

    // author - computed: false, optional: false, required: true
    private _author?: string; 
    public get author() {
        return this.getStringAttribute('author');
    }
    public set author(value: string) {
        this._author = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorInput() {
        return this._author;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // home_page_url - computed: true, optional: true, required: false
    private _homePageUrl?: string; 
    public get homePageUrl() {
        return this.getStringAttribute('home_page_url');
    }
    public set homePageUrl(value: string) {
        this._homePageUrl = value;
    }
    public resetHomePageUrl() {
        this._homePageUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homePageUrlInput() {
        return this._homePageUrl;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_verified_author - computed: true, optional: false, required: false
    public get isVerifiedAuthor() {
        return this.getBooleanAttribute('is_verified_author');
    }

    // labels - computed: true, optional: true, required: false
    private _labels?: string[]; 
    public get labels() {
        return this.getListAttribute('labels');
    }
    public set labels(value: string[]) {
        this._labels = value;
    }
    public resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
        return this._labels;
    }

    // license_body - computed: true, optional: true, required: false
    private _licenseBody?: string; 
    public get licenseBody() {
        return this.getStringAttribute('license_body');
    }
    public set licenseBody(value: string) {
        this._licenseBody = value;
    }
    public resetLicenseBody() {
        this._licenseBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseBodyInput() {
        return this._licenseBody;
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

    // readme_body - computed: true, optional: true, required: false
    private _readmeBody?: string; 
    public get readmeBody() {
        return this.getStringAttribute('readme_body');
    }
    public set readmeBody(value: string) {
        this._readmeBody = value;
    }
    public resetReadmeBody() {
        this._readmeBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readmeBodyInput() {
        return this._readmeBody;
    }

    // semantic_version - computed: true, optional: true, required: false
    private _semanticVersion?: string; 
    public get semanticVersion() {
        return this.getStringAttribute('semantic_version');
    }
    public set semanticVersion(value: string) {
        this._semanticVersion = value;
    }
    public resetSemanticVersion() {
        this._semanticVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get semanticVersionInput() {
        return this._semanticVersion;
    }

    // source_code_url - computed: true, optional: true, required: false
    private _sourceCodeUrl?: string; 
    public get sourceCodeUrl() {
        return this.getStringAttribute('source_code_url');
    }
    public set sourceCodeUrl(value: string) {
        this._sourceCodeUrl = value;
    }
    public resetSourceCodeUrl() {
        this._sourceCodeUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCodeUrlInput() {
        return this._sourceCodeUrl;
    }

    // spdx_license_id - computed: true, optional: true, required: false
    private _spdxLicenseId?: string; 
    public get spdxLicenseId() {
        return this.getStringAttribute('spdx_license_id');
    }
    public set spdxLicenseId(value: string) {
        this._spdxLicenseId = value;
    }
    public resetSpdxLicenseId() {
        this._spdxLicenseId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spdxLicenseIdInput() {
        return this._spdxLicenseId;
    }

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    public resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            author: cdktn.stringToTerraform(this._author),
            description: cdktn.stringToTerraform(this._description),
            home_page_url: cdktn.stringToTerraform(this._homePageUrl),
            labels: cdktn.listMapper(cdktn.stringToTerraform, false)(this._labels),
            license_body: cdktn.stringToTerraform(this._licenseBody),
            name: cdktn.stringToTerraform(this._name),
            readme_body: cdktn.stringToTerraform(this._readmeBody),
            semantic_version: cdktn.stringToTerraform(this._semanticVersion),
            source_code_url: cdktn.stringToTerraform(this._sourceCodeUrl),
            spdx_license_id: cdktn.stringToTerraform(this._spdxLicenseId),
            template_body: cdktn.stringToTerraform(this._templateBody),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            author: {
                value: cdktn.stringToHclTerraform(this._author),
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
            home_page_url: {
                value: cdktn.stringToHclTerraform(this._homePageUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            labels: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._labels),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            license_body: {
                value: cdktn.stringToHclTerraform(this._licenseBody),
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
            readme_body: {
                value: cdktn.stringToHclTerraform(this._readmeBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            semantic_version: {
                value: cdktn.stringToHclTerraform(this._semanticVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_code_url: {
                value: cdktn.stringToHclTerraform(this._sourceCodeUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            spdx_license_id: {
                value: cdktn.stringToHclTerraform(this._spdxLicenseId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_body: {
                value: cdktn.stringToHclTerraform(this._templateBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApplication {
}
