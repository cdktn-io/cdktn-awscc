// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotebookInstanceLifecycleConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the lifecycle configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name CcNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}
    */
    readonly notebookInstanceLifecycleConfigName?: string;
    /**
    * A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create CcNotebookInstanceLifecycleConfig#on_create}
    */
    readonly onCreate?: CcNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty[] | cdktn.IResolvable;
    /**
    * A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start CcNotebookInstanceLifecycleConfig#on_start}
    */
    readonly onStart?: CcNotebookInstanceLifecycleConfig.OnStartProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags CcNotebookInstanceLifecycleConfig#tags}
    */
    readonly tags?: CcNotebookInstanceLifecycleConfig.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}
*/
export class CcNotebookInstanceLifecycleConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_notebook_instance_lifecycle_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotebookInstanceLifecycleConfig to import
    * @param importFromId The id of the existing CcNotebookInstanceLifecycleConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotebookInstanceLifecycleConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_notebook_instance_lifecycle_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotebookInstanceLifecycleConfigProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcNotebookInstanceLifecycleConfigProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_notebook_instance_lifecycle_config',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._notebookInstanceLifecycleConfigName = config.notebookInstanceLifecycleConfigName;
        this._onCreate.internalValue = config.onCreate;
        this._onStart.internalValue = config.onStart;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notebook_instance_lifecycle_config_arn - computed: true, optional: false, required: false
    public get notebookInstanceLifecycleConfigArn() {
        return this.getStringAttribute('notebook_instance_lifecycle_config_arn');
    }

    // notebook_instance_lifecycle_config_name - computed: true, optional: true, required: false
    private _notebookInstanceLifecycleConfigName?: string; 
    public get notebookInstanceLifecycleConfigName() {
        return this.getStringAttribute('notebook_instance_lifecycle_config_name');
    }
    public set notebookInstanceLifecycleConfigName(value: string) {
        this._notebookInstanceLifecycleConfigName = value;
    }
    public resetNotebookInstanceLifecycleConfigName() {
        this._notebookInstanceLifecycleConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notebookInstanceLifecycleConfigNameInput() {
        return this._notebookInstanceLifecycleConfigName;
    }

    // on_create - computed: true, optional: true, required: false
    private _onCreate = new CcNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookPropertyList(this, "on_create", false);
    public get onCreate() {
        return this._onCreate;
    }
    public putOnCreate(value: CcNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty[] | cdktn.IResolvable) {
        this._onCreate.internalValue = value;
    }
    public resetOnCreate() {
        this._onCreate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onCreateInput() {
        return this._onCreate.internalValue;
    }

    // on_start - computed: true, optional: true, required: false
    private _onStart = new CcNotebookInstanceLifecycleConfig.OnStartPropertyList(this, "on_start", false);
    public get onStart() {
        return this._onStart;
    }
    public putOnStart(value: CcNotebookInstanceLifecycleConfig.OnStartProperty[] | cdktn.IResolvable) {
        this._onStart.internalValue = value;
    }
    public resetOnStart() {
        this._onStart.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onStartInput() {
        return this._onStart.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNotebookInstanceLifecycleConfig.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNotebookInstanceLifecycleConfig.TagsProperty[] | cdktn.IResolvable) {
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
            notebook_instance_lifecycle_config_name: cdktn.stringToTerraform(this._notebookInstanceLifecycleConfigName),
            on_create: cdktn.listMapper(ccNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHookPropertyToTerraform, false)(this._onCreate.internalValue),
            on_start: cdktn.listMapper(ccNotebookInstanceLifecycleConfigOnStartPropertyToTerraform, false)(this._onStart.internalValue),
            tags: cdktn.listMapper(ccNotebookInstanceLifecycleConfigTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            notebook_instance_lifecycle_config_name: {
                value: cdktn.stringToHclTerraform(this._notebookInstanceLifecycleConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            on_create: {
                value: cdktn.listMapperHcl(ccNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHookPropertyToHclTerraform, false)(this._onCreate.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookPropertyList",
            },
            on_start: {
                value: cdktn.listMapperHcl(ccNotebookInstanceLifecycleConfigOnStartPropertyToHclTerraform, false)(this._onStart.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNotebookInstanceLifecycleConfig.OnStartPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNotebookInstanceLifecycleConfigTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNotebookInstanceLifecycleConfig.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHookPropertyToTerraform(struct?: CcNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
    }
}


export function ccNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHookPropertyToHclTerraform(struct?: CcNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNotebookInstanceLifecycleConfigOnStartPropertyToTerraform(struct?: CcNotebookInstanceLifecycleConfig.OnStartProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
    }
}


export function ccNotebookInstanceLifecycleConfigOnStartPropertyToHclTerraform(struct?: CcNotebookInstanceLifecycleConfig.OnStartProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNotebookInstanceLifecycleConfigTagsPropertyToTerraform(struct?: CcNotebookInstanceLifecycleConfig.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNotebookInstanceLifecycleConfigTagsPropertyToHclTerraform(struct?: CcNotebookInstanceLifecycleConfig.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcNotebookInstanceLifecycleConfig {
export interface NotebookInstanceLifecycleHookProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content CcNotebookInstanceLifecycleConfig#content}
    */
    readonly content?: string;
}
export class NotebookInstanceLifecycleHookPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NotebookInstanceLifecycleHookProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotebookInstanceLifecycleHookProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }
}

export class NotebookInstanceLifecycleHookPropertyList extends cdktn.ComplexList {
    public internalValue? : NotebookInstanceLifecycleHookProperty[] | cdktn.IResolvable

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
    public get(index: number): NotebookInstanceLifecycleHookPropertyOutputReference {
        return new NotebookInstanceLifecycleHookPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnStartProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content CcNotebookInstanceLifecycleConfig#content}
    */
    readonly content?: string;
}
export class OnStartPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OnStartProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnStartProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }
}

export class OnStartPropertyList extends cdktn.ComplexList {
    public internalValue? : OnStartProperty[] | cdktn.IResolvable

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
    public get(index: number): OnStartPropertyOutputReference {
        return new OnStartPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key CcNotebookInstanceLifecycleConfig#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value CcNotebookInstanceLifecycleConfig#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
