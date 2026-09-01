// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcImageVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The alias of the image version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#alias CcImageVersion#alias}
    */
    readonly alias?: string;
    /**
    * List of aliases for the image version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#aliases CcImageVersion#aliases}
    */
    readonly aliases?: string[];
    /**
    * The registry path of the container image on which this image version is based.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#base_image CcImageVersion#base_image}
    */
    readonly baseImage: string;
    /**
    * Indicates Horovod compatibility.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#horovod CcImageVersion#horovod}
    */
    readonly horovod?: boolean | cdktn.IResolvable;
    /**
    * The name of the image this version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#image_name CcImageVersion#image_name}
    */
    readonly imageName: string;
    /**
    * Indicates SageMaker job type compatibility.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#job_type CcImageVersion#job_type}
    */
    readonly jobType?: string;
    /**
    * The machine learning framework vended in the image version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#ml_framework CcImageVersion#ml_framework}
    */
    readonly mlFramework?: string;
    /**
    * Indicates CPU or GPU compatibility.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#processor CcImageVersion#processor}
    */
    readonly processor?: string;
    /**
    * The supported programming language and its version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#programming_lang CcImageVersion#programming_lang}
    */
    readonly programmingLang?: string;
    /**
    * The maintainer description of the image version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#release_notes CcImageVersion#release_notes}
    */
    readonly releaseNotes?: string;
    /**
    * The availability of the image version specified by the maintainer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#vendor_guidance CcImageVersion#vendor_guidance}
    */
    readonly vendorGuidance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version awscc_sagemaker_image_version}
*/
export class CcImageVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_image_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcImageVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcImageVersion to import
    * @param importFromId The id of the existing CcImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcImageVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_image_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version awscc_sagemaker_image_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcImageVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcImageVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_image_version',
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
        this._alias = config.alias;
        this._aliases = config.aliases;
        this._baseImage = config.baseImage;
        this._horovod = config.horovod;
        this._imageName = config.imageName;
        this._jobType = config.jobType;
        this._mlFramework = config.mlFramework;
        this._processor = config.processor;
        this._programmingLang = config.programmingLang;
        this._releaseNotes = config.releaseNotes;
        this._vendorGuidance = config.vendorGuidance;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: true, required: false
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    public resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
    }

    // aliases - computed: true, optional: true, required: false
    private _aliases?: string[]; 
    public get aliases() {
        return this.getListAttribute('aliases');
    }
    public set aliases(value: string[]) {
        this._aliases = value;
    }
    public resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasesInput() {
        return this._aliases;
    }

    // base_image - computed: false, optional: false, required: true
    private _baseImage?: string; 
    public get baseImage() {
        return this.getStringAttribute('base_image');
    }
    public set baseImage(value: string) {
        this._baseImage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get baseImageInput() {
        return this._baseImage;
    }

    // container_image - computed: true, optional: false, required: false
    public get containerImage() {
        return this.getStringAttribute('container_image');
    }

    // horovod - computed: true, optional: true, required: false
    private _horovod?: boolean | cdktn.IResolvable; 
    public get horovod() {
        return this.getBooleanAttribute('horovod');
    }
    public set horovod(value: boolean | cdktn.IResolvable) {
        this._horovod = value;
    }
    public resetHorovod() {
        this._horovod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get horovodInput() {
        return this._horovod;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_arn - computed: true, optional: false, required: false
    public get imageArn() {
        return this.getStringAttribute('image_arn');
    }

    // image_name - computed: false, optional: false, required: true
    private _imageName?: string; 
    public get imageName() {
        return this.getStringAttribute('image_name');
    }
    public set imageName(value: string) {
        this._imageName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageNameInput() {
        return this._imageName;
    }

    // image_version_arn - computed: true, optional: false, required: false
    public get imageVersionArn() {
        return this.getStringAttribute('image_version_arn');
    }

    // job_type - computed: true, optional: true, required: false
    private _jobType?: string; 
    public get jobType() {
        return this.getStringAttribute('job_type');
    }
    public set jobType(value: string) {
        this._jobType = value;
    }
    public resetJobType() {
        this._jobType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobTypeInput() {
        return this._jobType;
    }

    // ml_framework - computed: true, optional: true, required: false
    private _mlFramework?: string; 
    public get mlFramework() {
        return this.getStringAttribute('ml_framework');
    }
    public set mlFramework(value: string) {
        this._mlFramework = value;
    }
    public resetMlFramework() {
        this._mlFramework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlFrameworkInput() {
        return this._mlFramework;
    }

    // processor - computed: true, optional: true, required: false
    private _processor?: string; 
    public get processor() {
        return this.getStringAttribute('processor');
    }
    public set processor(value: string) {
        this._processor = value;
    }
    public resetProcessor() {
        this._processor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorInput() {
        return this._processor;
    }

    // programming_lang - computed: true, optional: true, required: false
    private _programmingLang?: string; 
    public get programmingLang() {
        return this.getStringAttribute('programming_lang');
    }
    public set programmingLang(value: string) {
        this._programmingLang = value;
    }
    public resetProgrammingLang() {
        this._programmingLang = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get programmingLangInput() {
        return this._programmingLang;
    }

    // release_notes - computed: true, optional: true, required: false
    private _releaseNotes?: string; 
    public get releaseNotes() {
        return this.getStringAttribute('release_notes');
    }
    public set releaseNotes(value: string) {
        this._releaseNotes = value;
    }
    public resetReleaseNotes() {
        this._releaseNotes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get releaseNotesInput() {
        return this._releaseNotes;
    }

    // vendor_guidance - computed: true, optional: true, required: false
    private _vendorGuidance?: string; 
    public get vendorGuidance() {
        return this.getStringAttribute('vendor_guidance');
    }
    public set vendorGuidance(value: string) {
        this._vendorGuidance = value;
    }
    public resetVendorGuidance() {
        this._vendorGuidance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vendorGuidanceInput() {
        return this._vendorGuidance;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias: cdktn.stringToTerraform(this._alias),
            aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(this._aliases),
            base_image: cdktn.stringToTerraform(this._baseImage),
            horovod: cdktn.booleanToTerraform(this._horovod),
            image_name: cdktn.stringToTerraform(this._imageName),
            job_type: cdktn.stringToTerraform(this._jobType),
            ml_framework: cdktn.stringToTerraform(this._mlFramework),
            processor: cdktn.stringToTerraform(this._processor),
            programming_lang: cdktn.stringToTerraform(this._programmingLang),
            release_notes: cdktn.stringToTerraform(this._releaseNotes),
            vendor_guidance: cdktn.stringToTerraform(this._vendorGuidance),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias: {
                value: cdktn.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aliases: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._aliases),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            base_image: {
                value: cdktn.stringToHclTerraform(this._baseImage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            horovod: {
                value: cdktn.booleanToHclTerraform(this._horovod),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            image_name: {
                value: cdktn.stringToHclTerraform(this._imageName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_type: {
                value: cdktn.stringToHclTerraform(this._jobType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ml_framework: {
                value: cdktn.stringToHclTerraform(this._mlFramework),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            processor: {
                value: cdktn.stringToHclTerraform(this._processor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            programming_lang: {
                value: cdktn.stringToHclTerraform(this._programmingLang),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            release_notes: {
                value: cdktn.stringToHclTerraform(this._releaseNotes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vendor_guidance: {
                value: cdktn.stringToHclTerraform(this._vendorGuidance),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcImageVersion {
}
