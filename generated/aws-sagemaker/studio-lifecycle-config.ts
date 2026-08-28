// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStudioLifecycleConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The App type that the Lifecycle Configuration is attached to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type CcStudioLifecycleConfig#studio_lifecycle_config_app_type}
    */
    readonly studioLifecycleConfigAppType: string;
    /**
    * The content of your Amazon SageMaker Studio Lifecycle Configuration script. This content must be base64 encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content CcStudioLifecycleConfig#studio_lifecycle_config_content}
    */
    readonly studioLifecycleConfigContent: string;
    /**
    * The name of the Amazon SageMaker Studio Lifecycle Configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name CcStudioLifecycleConfig#studio_lifecycle_config_name}
    */
    readonly studioLifecycleConfigName: string;
    /**
    * Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#tags CcStudioLifecycleConfig#tags}
    */
    readonly tags?: CcStudioLifecycleConfig.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config awscc_sagemaker_studio_lifecycle_config}
*/
export class CcStudioLifecycleConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_studio_lifecycle_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStudioLifecycleConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStudioLifecycleConfig to import
    * @param importFromId The id of the existing CcStudioLifecycleConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStudioLifecycleConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_studio_lifecycle_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config awscc_sagemaker_studio_lifecycle_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStudioLifecycleConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcStudioLifecycleConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_studio_lifecycle_config',
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
        this._studioLifecycleConfigAppType = config.studioLifecycleConfigAppType;
        this._studioLifecycleConfigContent = config.studioLifecycleConfigContent;
        this._studioLifecycleConfigName = config.studioLifecycleConfigName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // studio_lifecycle_config_app_type - computed: false, optional: false, required: true
    private _studioLifecycleConfigAppType?: string; 
    public get studioLifecycleConfigAppType() {
        return this.getStringAttribute('studio_lifecycle_config_app_type');
    }
    public set studioLifecycleConfigAppType(value: string) {
        this._studioLifecycleConfigAppType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioLifecycleConfigAppTypeInput() {
        return this._studioLifecycleConfigAppType;
    }

    // studio_lifecycle_config_arn - computed: true, optional: false, required: false
    public get studioLifecycleConfigArn() {
        return this.getStringAttribute('studio_lifecycle_config_arn');
    }

    // studio_lifecycle_config_content - computed: false, optional: false, required: true
    private _studioLifecycleConfigContent?: string; 
    public get studioLifecycleConfigContent() {
        return this.getStringAttribute('studio_lifecycle_config_content');
    }
    public set studioLifecycleConfigContent(value: string) {
        this._studioLifecycleConfigContent = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioLifecycleConfigContentInput() {
        return this._studioLifecycleConfigContent;
    }

    // studio_lifecycle_config_name - computed: false, optional: false, required: true
    private _studioLifecycleConfigName?: string; 
    public get studioLifecycleConfigName() {
        return this.getStringAttribute('studio_lifecycle_config_name');
    }
    public set studioLifecycleConfigName(value: string) {
        this._studioLifecycleConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioLifecycleConfigNameInput() {
        return this._studioLifecycleConfigName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStudioLifecycleConfig.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStudioLifecycleConfig.TagProperty[] | cdktn.IResolvable) {
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
            studio_lifecycle_config_app_type: cdktn.stringToTerraform(this._studioLifecycleConfigAppType),
            studio_lifecycle_config_content: cdktn.stringToTerraform(this._studioLifecycleConfigContent),
            studio_lifecycle_config_name: cdktn.stringToTerraform(this._studioLifecycleConfigName),
            tags: cdktn.listMapper(ccStudioLifecycleConfigTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            studio_lifecycle_config_app_type: {
                value: cdktn.stringToHclTerraform(this._studioLifecycleConfigAppType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            studio_lifecycle_config_content: {
                value: cdktn.stringToHclTerraform(this._studioLifecycleConfigContent),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            studio_lifecycle_config_name: {
                value: cdktn.stringToHclTerraform(this._studioLifecycleConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStudioLifecycleConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStudioLifecycleConfig.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStudioLifecycleConfigTagPropertyToTerraform(struct?: CcStudioLifecycleConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStudioLifecycleConfigTagPropertyToHclTerraform(struct?: CcStudioLifecycleConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStudioLifecycleConfig {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#key CcStudioLifecycleConfig#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_studio_lifecycle_config#value CcStudioLifecycleConfig#value}
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
