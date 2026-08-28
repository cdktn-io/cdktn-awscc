// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#app_block_arn CcApplication#app_block_arn}
    */
    readonly appBlockArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#attributes_to_delete CcApplication#attributes_to_delete}
    */
    readonly attributesToDelete?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#description CcApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#display_name CcApplication#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#icon_s3_location CcApplication#icon_s3_location}
    */
    readonly iconS3Location: CcApplication.S3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#instance_families CcApplication#instance_families}
    */
    readonly instanceFamilies: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#launch_parameters CcApplication#launch_parameters}
    */
    readonly launchParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#launch_path CcApplication#launch_path}
    */
    readonly launchPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#name CcApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#platforms CcApplication#platforms}
    */
    readonly platforms: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#working_directory CcApplication#working_directory}
    */
    readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application awscc_appstream_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application awscc_appstream_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_application',
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
        this._appBlockArn = config.appBlockArn;
        this._attributesToDelete = config.attributesToDelete;
        this._description = config.description;
        this._displayName = config.displayName;
        this._iconS3Location.internalValue = config.iconS3Location;
        this._instanceFamilies = config.instanceFamilies;
        this._launchParameters = config.launchParameters;
        this._launchPath = config.launchPath;
        this._name = config.name;
        this._platforms = config.platforms;
        this._tags.internalValue = config.tags;
        this._workingDirectory = config.workingDirectory;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_block_arn - computed: false, optional: false, required: true
    private _appBlockArn?: string; 
    public get appBlockArn() {
        return this.getStringAttribute('app_block_arn');
    }
    public set appBlockArn(value: string) {
        this._appBlockArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appBlockArnInput() {
        return this._appBlockArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attributes_to_delete - computed: true, optional: true, required: false
    private _attributesToDelete?: string[]; 
    public get attributesToDelete() {
        return cdktn.Fn.tolist(this.getListAttribute('attributes_to_delete'));
    }
    public set attributesToDelete(value: string[]) {
        this._attributesToDelete = value;
    }
    public resetAttributesToDelete() {
        this._attributesToDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesToDeleteInput() {
        return this._attributesToDelete;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
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

    // icon_s3_location - computed: false, optional: false, required: true
    private _iconS3Location = new CcApplication.S3LocationPropertyOutputReference(this, "icon_s3_location");
    public get iconS3Location() {
        return this._iconS3Location;
    }
    public putIconS3Location(value: CcApplication.S3LocationProperty) {
        this._iconS3Location.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iconS3LocationInput() {
        return this._iconS3Location.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_families - computed: false, optional: false, required: true
    private _instanceFamilies?: string[]; 
    public get instanceFamilies() {
        return cdktn.Fn.tolist(this.getListAttribute('instance_families'));
    }
    public set instanceFamilies(value: string[]) {
        this._instanceFamilies = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceFamiliesInput() {
        return this._instanceFamilies;
    }

    // launch_parameters - computed: true, optional: true, required: false
    private _launchParameters?: string; 
    public get launchParameters() {
        return this.getStringAttribute('launch_parameters');
    }
    public set launchParameters(value: string) {
        this._launchParameters = value;
    }
    public resetLaunchParameters() {
        this._launchParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchParametersInput() {
        return this._launchParameters;
    }

    // launch_path - computed: false, optional: false, required: true
    private _launchPath?: string; 
    public get launchPath() {
        return this.getStringAttribute('launch_path');
    }
    public set launchPath(value: string) {
        this._launchPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchPathInput() {
        return this._launchPath;
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

    // platforms - computed: false, optional: false, required: true
    private _platforms?: string[]; 
    public get platforms() {
        return cdktn.Fn.tolist(this.getListAttribute('platforms'));
    }
    public set platforms(value: string[]) {
        this._platforms = value;
    }
    // Temporarily expose input value. Use with caution.
    public get platformsInput() {
        return this._platforms;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplication.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplication.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // working_directory - computed: true, optional: true, required: false
    private _workingDirectory?: string; 
    public get workingDirectory() {
        return this.getStringAttribute('working_directory');
    }
    public set workingDirectory(value: string) {
        this._workingDirectory = value;
    }
    public resetWorkingDirectory() {
        this._workingDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workingDirectoryInput() {
        return this._workingDirectory;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            app_block_arn: cdktn.stringToTerraform(this._appBlockArn),
            attributes_to_delete: cdktn.listMapper(cdktn.stringToTerraform, false)(this._attributesToDelete),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            icon_s3_location: ccApplicationS3LocationPropertyToTerraform(this._iconS3Location.internalValue),
            instance_families: cdktn.listMapper(cdktn.stringToTerraform, false)(this._instanceFamilies),
            launch_parameters: cdktn.stringToTerraform(this._launchParameters),
            launch_path: cdktn.stringToTerraform(this._launchPath),
            name: cdktn.stringToTerraform(this._name),
            platforms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._platforms),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
            working_directory: cdktn.stringToTerraform(this._workingDirectory),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_block_arn: {
                value: cdktn.stringToHclTerraform(this._appBlockArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            attributes_to_delete: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._attributesToDelete),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
            icon_s3_location: {
                value: ccApplicationS3LocationPropertyToHclTerraform(this._iconS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.S3LocationProperty",
            },
            instance_families: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._instanceFamilies),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            launch_parameters: {
                value: cdktn.stringToHclTerraform(this._launchParameters),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_path: {
                value: cdktn.stringToHclTerraform(this._launchPath),
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
            platforms: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._platforms),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcApplication.TagPropertyList",
            },
            working_directory: {
                value: cdktn.stringToHclTerraform(this._workingDirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationS3LocationPropertyToTerraform(struct?: CcApplication.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccApplicationS3LocationPropertyToHclTerraform(struct?: CcApplication.S3LocationProperty | cdktn.IResolvable): any {
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


export function ccApplicationTagPropertyToTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        tag_key: cdktn.stringToTerraform(struct!.tagKey),
        tag_value: cdktn.stringToTerraform(struct!.tagValue),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationTagPropertyToHclTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
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
        tag_key: {
            value: cdktn.stringToHclTerraform(struct!.tagKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_value: {
            value: cdktn.stringToHclTerraform(struct!.tagValue),
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


export namespace CcApplication {
export interface S3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#s3_bucket CcApplication#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#s3_key CcApplication#s3_key}
    */
    readonly s3Key: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#tag_key CcApplication#tag_key}
    */
    readonly tagKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#tag_value CcApplication#tag_value}
    */
    readonly tagValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application#value CcApplication#value}
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
        if (this._tagKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKey = this._tagKey;
        }
        if (this._tagValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValue = this._tagValue;
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
            this._tagKey = undefined;
            this._tagValue = undefined;
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
            this._tagKey = value.tagKey;
            this._tagValue = value.tagValue;
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

    // tag_key - computed: true, optional: true, required: false
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    public resetTagKey() {
        this._tagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_value - computed: true, optional: true, required: false
    private _tagValue?: string; 
    public get tagValue() {
        return this.getStringAttribute('tag_value');
    }
    public set tagValue(value: string) {
        this._tagValue = value;
    }
    public resetTagValue() {
        this._tagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueInput() {
        return this._tagValue;
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
}
