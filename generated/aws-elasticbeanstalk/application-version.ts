// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Elastic Beanstalk application that is associated with this application version. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version#application_name CcApplicationVersion#application_name}
    */
    readonly applicationName: string;
    /**
    * A description of this application version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version#description CcApplicationVersion#description}
    */
    readonly description?: string;
    /**
    * The Amazon S3 bucket and key that identify the location of the source bundle for this version. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version#source_bundle CcApplicationVersion#source_bundle}
    */
    readonly sourceBundle: CcApplicationVersion.SourceBundleProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}
*/
export class CcApplicationVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticbeanstalk_application_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationVersion to import
    * @param importFromId The id of the existing CcApplicationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticbeanstalk_application_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticbeanstalk_application_version',
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
        this._applicationName = config.applicationName;
        this._description = config.description;
        this._sourceBundle.internalValue = config.sourceBundle;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_name - computed: false, optional: false, required: true
    private _applicationName?: string; 
    public get applicationName() {
        return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
        this._applicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
        return this._applicationName;
    }

    // application_version_id - computed: true, optional: false, required: false
    public get applicationVersionId() {
        return this.getStringAttribute('application_version_id');
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

    // source_bundle - computed: false, optional: false, required: true
    private _sourceBundle = new CcApplicationVersion.SourceBundlePropertyOutputReference(this, "source_bundle");
    public get sourceBundle() {
        return this._sourceBundle;
    }
    public putSourceBundle(value: CcApplicationVersion.SourceBundleProperty) {
        this._sourceBundle.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceBundleInput() {
        return this._sourceBundle.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_name: cdktn.stringToTerraform(this._applicationName),
            description: cdktn.stringToTerraform(this._description),
            source_bundle: ccApplicationVersionSourceBundlePropertyToTerraform(this._sourceBundle.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_name: {
                value: cdktn.stringToHclTerraform(this._applicationName),
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
            source_bundle: {
                value: ccApplicationVersionSourceBundlePropertyToHclTerraform(this._sourceBundle.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationVersion.SourceBundleProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationVersionSourceBundlePropertyToTerraform(struct?: CcApplicationVersion.SourceBundleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccApplicationVersionSourceBundlePropertyToHclTerraform(struct?: CcApplicationVersion.SourceBundleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcApplicationVersion {
export interface SourceBundleProperty {
    /**
    * The Amazon S3 bucket where the data is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version#s3_bucket CcApplicationVersion#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * The Amazon S3 key where the data is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application_version#s3_key CcApplicationVersion#s3_key}
    */
    readonly s3Key: string;
}
export class SourceBundlePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceBundleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceBundleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
        }
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: false, optional: false, required: true
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}
}
