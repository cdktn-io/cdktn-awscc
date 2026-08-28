// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHubProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#hub_description CcHub#hub_description}
    */
    readonly hubDescription: string;
    /**
    * The display name of the hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#hub_display_name CcHub#hub_display_name}
    */
    readonly hubDisplayName?: string;
    /**
    * The name of the hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#hub_name CcHub#hub_name}
    */
    readonly hubName: string;
    /**
    * The searchable keywords for the hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#hub_search_keywords CcHub#hub_search_keywords}
    */
    readonly hubSearchKeywords?: string[];
    /**
    * The Amazon S3 storage configuration for the hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#s3_storage_config CcHub#s3_storage_config}
    */
    readonly s3StorageConfig?: CcHub.S3StorageConfigProperty;
    /**
    * Tags to associate with the hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#tags CcHub#tags}
    */
    readonly tags?: CcHub.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub awscc_sagemaker_hub}
*/
export class CcHub extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_hub";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHub resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHub to import
    * @param importFromId The id of the existing CcHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHub to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_hub", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub awscc_sagemaker_hub} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHubProps
    */
    public constructor(scope: Construct, id: string, config: CcHubProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_hub',
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
        this._hubDescription = config.hubDescription;
        this._hubDisplayName = config.hubDisplayName;
        this._hubName = config.hubName;
        this._hubSearchKeywords = config.hubSearchKeywords;
        this._s3StorageConfig.internalValue = config.s3StorageConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // hub_arn - computed: true, optional: false, required: false
    public get hubArn() {
        return this.getStringAttribute('hub_arn');
    }

    // hub_description - computed: false, optional: false, required: true
    private _hubDescription?: string; 
    public get hubDescription() {
        return this.getStringAttribute('hub_description');
    }
    public set hubDescription(value: string) {
        this._hubDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hubDescriptionInput() {
        return this._hubDescription;
    }

    // hub_display_name - computed: true, optional: true, required: false
    private _hubDisplayName?: string; 
    public get hubDisplayName() {
        return this.getStringAttribute('hub_display_name');
    }
    public set hubDisplayName(value: string) {
        this._hubDisplayName = value;
    }
    public resetHubDisplayName() {
        this._hubDisplayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubDisplayNameInput() {
        return this._hubDisplayName;
    }

    // hub_name - computed: false, optional: false, required: true
    private _hubName?: string; 
    public get hubName() {
        return this.getStringAttribute('hub_name');
    }
    public set hubName(value: string) {
        this._hubName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hubNameInput() {
        return this._hubName;
    }

    // hub_search_keywords - computed: true, optional: true, required: false
    private _hubSearchKeywords?: string[]; 
    public get hubSearchKeywords() {
        return this.getListAttribute('hub_search_keywords');
    }
    public set hubSearchKeywords(value: string[]) {
        this._hubSearchKeywords = value;
    }
    public resetHubSearchKeywords() {
        this._hubSearchKeywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubSearchKeywordsInput() {
        return this._hubSearchKeywords;
    }

    // hub_status - computed: true, optional: false, required: false
    public get hubStatus() {
        return this.getStringAttribute('hub_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // s3_storage_config - computed: true, optional: true, required: false
    private _s3StorageConfig = new CcHub.S3StorageConfigPropertyOutputReference(this, "s3_storage_config");
    public get s3StorageConfig() {
        return this._s3StorageConfig;
    }
    public putS3StorageConfig(value: CcHub.S3StorageConfigProperty) {
        this._s3StorageConfig.internalValue = value;
    }
    public resetS3StorageConfig() {
        this._s3StorageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3StorageConfigInput() {
        return this._s3StorageConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcHub.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcHub.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            hub_description: cdktn.stringToTerraform(this._hubDescription),
            hub_display_name: cdktn.stringToTerraform(this._hubDisplayName),
            hub_name: cdktn.stringToTerraform(this._hubName),
            hub_search_keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(this._hubSearchKeywords),
            s3_storage_config: ccHubS3StorageConfigPropertyToTerraform(this._s3StorageConfig.internalValue),
            tags: cdktn.listMapper(ccHubTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            hub_description: {
                value: cdktn.stringToHclTerraform(this._hubDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hub_display_name: {
                value: cdktn.stringToHclTerraform(this._hubDisplayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hub_name: {
                value: cdktn.stringToHclTerraform(this._hubName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hub_search_keywords: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._hubSearchKeywords),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            s3_storage_config: {
                value: ccHubS3StorageConfigPropertyToHclTerraform(this._s3StorageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHub.S3StorageConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccHubTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHub.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHubS3StorageConfigPropertyToTerraform(struct?: CcHub.S3StorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    }
}


export function ccHubS3StorageConfigPropertyToHclTerraform(struct?: CcHub.S3StorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_output_path: {
            value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHubTagPropertyToTerraform(struct?: CcHub.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccHubTagPropertyToHclTerraform(struct?: CcHub.TagProperty | cdktn.IResolvable): any {
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


export namespace CcHub {
export interface S3StorageConfigProperty {
    /**
    * The Amazon S3 bucket prefix for hosting hub content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#s3_output_path CcHub#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export class S3StorageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3StorageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3StorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3OutputPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3OutputPath = value.s3OutputPath;
        }
    }

    // s3_output_path - computed: true, optional: true, required: false
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
        this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#key CcHub#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_hub#value CcHub#value}
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
}
