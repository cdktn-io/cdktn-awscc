// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLayerVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of compatible instruction set architectures.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#compatible_architectures CcLayerVersion#compatible_architectures}
    */
    readonly compatibleArchitectures?: string[];
    /**
    * A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#compatible_runtimes CcLayerVersion#compatible_runtimes}
    */
    readonly compatibleRuntimes?: string[];
    /**
    * The function layer archive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#content CcLayerVersion#content}
    */
    readonly content: CcLayerVersion.ContentProperty;
    /**
    * The description of the version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#description CcLayerVersion#description}
    */
    readonly description?: string;
    /**
    * The name or Amazon Resource Name (ARN) of the layer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#layer_name CcLayerVersion#layer_name}
    */
    readonly layerName?: string;
    /**
    * The layer's software license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#license_info CcLayerVersion#license_info}
    */
    readonly licenseInfo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version awscc_lambda_layer_version}
*/
export class CcLayerVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_layer_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLayerVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLayerVersion to import
    * @param importFromId The id of the existing CcLayerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLayerVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_layer_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version awscc_lambda_layer_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLayerVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcLayerVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_layer_version',
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
        this._compatibleArchitectures = config.compatibleArchitectures;
        this._compatibleRuntimes = config.compatibleRuntimes;
        this._content.internalValue = config.content;
        this._description = config.description;
        this._layerName = config.layerName;
        this._licenseInfo = config.licenseInfo;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compatible_architectures - computed: true, optional: true, required: false
    private _compatibleArchitectures?: string[]; 
    public get compatibleArchitectures() {
        return this.getListAttribute('compatible_architectures');
    }
    public set compatibleArchitectures(value: string[]) {
        this._compatibleArchitectures = value;
    }
    public resetCompatibleArchitectures() {
        this._compatibleArchitectures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibleArchitecturesInput() {
        return this._compatibleArchitectures;
    }

    // compatible_runtimes - computed: true, optional: true, required: false
    private _compatibleRuntimes?: string[]; 
    public get compatibleRuntimes() {
        return this.getListAttribute('compatible_runtimes');
    }
    public set compatibleRuntimes(value: string[]) {
        this._compatibleRuntimes = value;
    }
    public resetCompatibleRuntimes() {
        this._compatibleRuntimes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibleRuntimesInput() {
        return this._compatibleRuntimes;
    }

    // content - computed: false, optional: false, required: true
    private _content = new CcLayerVersion.ContentPropertyOutputReference(this, "content");
    public get content() {
        return this._content;
    }
    public putContent(value: CcLayerVersion.ContentProperty) {
        this._content.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
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

    // layer_name - computed: true, optional: true, required: false
    private _layerName?: string; 
    public get layerName() {
        return this.getStringAttribute('layer_name');
    }
    public set layerName(value: string) {
        this._layerName = value;
    }
    public resetLayerName() {
        this._layerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get layerNameInput() {
        return this._layerName;
    }

    // layer_version_arn - computed: true, optional: false, required: false
    public get layerVersionArn() {
        return this.getStringAttribute('layer_version_arn');
    }

    // license_info - computed: true, optional: true, required: false
    private _licenseInfo?: string; 
    public get licenseInfo() {
        return this.getStringAttribute('license_info');
    }
    public set licenseInfo(value: string) {
        this._licenseInfo = value;
    }
    public resetLicenseInfo() {
        this._licenseInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseInfoInput() {
        return this._licenseInfo;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            compatible_architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(this._compatibleArchitectures),
            compatible_runtimes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._compatibleRuntimes),
            content: ccLayerVersionContentPropertyToTerraform(this._content.internalValue),
            description: cdktn.stringToTerraform(this._description),
            layer_name: cdktn.stringToTerraform(this._layerName),
            license_info: cdktn.stringToTerraform(this._licenseInfo),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compatible_architectures: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._compatibleArchitectures),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            compatible_runtimes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._compatibleRuntimes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            content: {
                value: ccLayerVersionContentPropertyToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLayerVersion.ContentProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            layer_name: {
                value: cdktn.stringToHclTerraform(this._layerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_info: {
                value: cdktn.stringToHclTerraform(this._licenseInfo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLayerVersionContentPropertyToTerraform(struct?: CcLayerVersion.ContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
        s3_object_storage_mode: cdktn.stringToTerraform(struct!.s3ObjectStorageMode),
        s3_object_version: cdktn.stringToTerraform(struct!.s3ObjectVersion),
    }
}


export function ccLayerVersionContentPropertyToHclTerraform(struct?: CcLayerVersion.ContentProperty | cdktn.IResolvable): any {
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
        s3_object_storage_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3ObjectStorageMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_object_version: {
            value: cdktn.stringToHclTerraform(struct!.s3ObjectVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLayerVersion {
export interface ContentProperty {
    /**
    * The Amazon S3 bucket of the layer archive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#s3_bucket CcLayerVersion#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * The Amazon S3 key of the layer archive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#s3_key CcLayerVersion#s3_key}
    */
    readonly s3Key: string;
    /**
    * Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#s3_object_storage_mode CcLayerVersion#s3_object_storage_mode}
    */
    readonly s3ObjectStorageMode?: string;
    /**
    * For versioned objects, the version of the layer archive object to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version#s3_object_version CcLayerVersion#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
}
export class ContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentProperty | cdktn.IResolvable | undefined {
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
        if (this._s3ObjectStorageMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ObjectStorageMode = this._s3ObjectStorageMode;
        }
        if (this._s3ObjectVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
            this._s3ObjectStorageMode = undefined;
            this._s3ObjectVersion = undefined;
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
            this._s3ObjectStorageMode = value.s3ObjectStorageMode;
            this._s3ObjectVersion = value.s3ObjectVersion;
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

    // s3_object_storage_mode - computed: true, optional: true, required: false
    private _s3ObjectStorageMode?: string; 
    public get s3ObjectStorageMode() {
        return this.getStringAttribute('s3_object_storage_mode');
    }
    public set s3ObjectStorageMode(value: string) {
        this._s3ObjectStorageMode = value;
    }
    public resetS3ObjectStorageMode() {
        this._s3ObjectStorageMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectStorageModeInput() {
        return this._s3ObjectStorageMode;
    }

    // s3_object_version - computed: true, optional: true, required: false
    private _s3ObjectVersion?: string; 
    public get s3ObjectVersion() {
        return this.getStringAttribute('s3_object_version');
    }
    public set s3ObjectVersion(value: string) {
        this._s3ObjectVersion = value;
    }
    public resetS3ObjectVersion() {
        this._s3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectVersionInput() {
        return this._s3ObjectVersion;
    }
}
}
