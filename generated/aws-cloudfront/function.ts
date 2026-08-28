// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#auto_publish CcFunction#auto_publish}
    */
    readonly autoPublish?: boolean | cdktn.IResolvable;
    /**
    * The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the *Amazon CloudFront Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#function_code CcFunction#function_code}
    */
    readonly functionCode: string;
    /**
    * Contains configuration information about a CloudFront function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#function_config CcFunction#function_config}
    */
    readonly functionConfig: CcFunction.FunctionConfigProperty;
    /**
    * Contains metadata about a CloudFront function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#function_metadata CcFunction#function_metadata}
    */
    readonly functionMetadata?: CcFunction.FunctionMetadataProperty;
    /**
    * A name to identify the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#name CcFunction#name}
    */
    readonly name: string;
    /**
    * A complex type that contains zero or more ``Tag`` elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#tags CcFunction#tags}
    */
    readonly tags?: CcFunction.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function awscc_cloudfront_function}
*/
export class CcFunction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_function";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFunction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFunction to import
    * @param importFromId The id of the existing CcFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function awscc_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_function',
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
        this._autoPublish = config.autoPublish;
        this._functionCode = config.functionCode;
        this._functionConfig.internalValue = config.functionConfig;
        this._functionMetadata.internalValue = config.functionMetadata;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_publish - computed: true, optional: true, required: false
    private _autoPublish?: boolean | cdktn.IResolvable; 
    public get autoPublish() {
        return this.getBooleanAttribute('auto_publish');
    }
    public set autoPublish(value: boolean | cdktn.IResolvable) {
        this._autoPublish = value;
    }
    public resetAutoPublish() {
        this._autoPublish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPublishInput() {
        return this._autoPublish;
    }

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }

    // function_code - computed: false, optional: false, required: true
    private _functionCode?: string; 
    public get functionCode() {
        return this.getStringAttribute('function_code');
    }
    public set functionCode(value: string) {
        this._functionCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionCodeInput() {
        return this._functionCode;
    }

    // function_config - computed: false, optional: false, required: true
    private _functionConfig = new CcFunction.FunctionConfigPropertyOutputReference(this, "function_config");
    public get functionConfig() {
        return this._functionConfig;
    }
    public putFunctionConfig(value: CcFunction.FunctionConfigProperty) {
        this._functionConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionConfigInput() {
        return this._functionConfig.internalValue;
    }

    // function_metadata - computed: true, optional: true, required: false
    private _functionMetadata = new CcFunction.FunctionMetadataPropertyOutputReference(this, "function_metadata");
    public get functionMetadata() {
        return this._functionMetadata;
    }
    public putFunctionMetadata(value: CcFunction.FunctionMetadataProperty) {
        this._functionMetadata.internalValue = value;
    }
    public resetFunctionMetadata() {
        this._functionMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionMetadataInput() {
        return this._functionMetadata.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // stage - computed: true, optional: false, required: false
    public get stage() {
        return this.getStringAttribute('stage');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFunction.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFunction.TagProperty[] | cdktn.IResolvable) {
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
            auto_publish: cdktn.booleanToTerraform(this._autoPublish),
            function_code: cdktn.stringToTerraform(this._functionCode),
            function_config: ccFunctionFunctionConfigPropertyToTerraform(this._functionConfig.internalValue),
            function_metadata: ccFunctionFunctionMetadataPropertyToTerraform(this._functionMetadata.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccFunctionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_publish: {
                value: cdktn.booleanToHclTerraform(this._autoPublish),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            function_code: {
                value: cdktn.stringToHclTerraform(this._functionCode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_config: {
                value: ccFunctionFunctionConfigPropertyToHclTerraform(this._functionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.FunctionConfigProperty",
            },
            function_metadata: {
                value: ccFunctionFunctionMetadataPropertyToHclTerraform(this._functionMetadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.FunctionMetadataProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFunctionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFunction.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFunctionKeyValueStoreAssociationPropertyToTerraform(struct?: CcFunction.KeyValueStoreAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_value_store_arn: cdktn.stringToTerraform(struct!.keyValueStoreArn),
    }
}


export function ccFunctionKeyValueStoreAssociationPropertyToHclTerraform(struct?: CcFunction.KeyValueStoreAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_value_store_arn: {
            value: cdktn.stringToHclTerraform(struct!.keyValueStoreArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionFunctionConfigPropertyToTerraform(struct?: CcFunction.FunctionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        key_value_store_associations: cdktn.listMapper(ccFunctionKeyValueStoreAssociationPropertyToTerraform, false)(struct!.keyValueStoreAssociations),
        runtime: cdktn.stringToTerraform(struct!.runtime),
    }
}


export function ccFunctionFunctionConfigPropertyToHclTerraform(struct?: CcFunction.FunctionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_value_store_associations: {
            value: cdktn.listMapperHcl(ccFunctionKeyValueStoreAssociationPropertyToHclTerraform, false)(struct!.keyValueStoreAssociations),
            isBlock: true,
            type: "list",
            storageClassType: "KeyValueStoreAssociationPropertyList",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionFunctionMetadataPropertyToTerraform(struct?: CcFunction.FunctionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccFunctionFunctionMetadataPropertyToHclTerraform(struct?: CcFunction.FunctionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccFunctionTagPropertyToTerraform(struct?: CcFunction.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFunctionTagPropertyToHclTerraform(struct?: CcFunction.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFunction {
export interface KeyValueStoreAssociationProperty {
    /**
    * The Amazon Resource Name (ARN) of the key value store association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#key_value_store_arn CcFunction#key_value_store_arn}
    */
    readonly keyValueStoreArn?: string;
}
export class KeyValueStoreAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyValueStoreAssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyValueStoreArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyValueStoreArn = this._keyValueStoreArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyValueStoreAssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyValueStoreArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyValueStoreArn = value.keyValueStoreArn;
        }
    }

    // key_value_store_arn - computed: true, optional: true, required: false
    private _keyValueStoreArn?: string; 
    public get keyValueStoreArn() {
        return this.getStringAttribute('key_value_store_arn');
    }
    public set keyValueStoreArn(value: string) {
        this._keyValueStoreArn = value;
    }
    public resetKeyValueStoreArn() {
        this._keyValueStoreArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyValueStoreArnInput() {
        return this._keyValueStoreArn;
    }
}

export class KeyValueStoreAssociationPropertyList extends cdktn.ComplexList {
    public internalValue? : KeyValueStoreAssociationProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyValueStoreAssociationPropertyOutputReference {
        return new KeyValueStoreAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FunctionConfigProperty {
    /**
    * A comment to describe the function. The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#comment CcFunction#comment}
    */
    readonly comment: string;
    /**
    * The configuration for the key value store associations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#key_value_store_associations CcFunction#key_value_store_associations}
    */
    readonly keyValueStoreAssociations?: KeyValueStoreAssociationProperty[] | cdktn.IResolvable;
    /**
    * The function's runtime environment version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#runtime CcFunction#runtime}
    */
    readonly runtime: string;
}
export class FunctionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FunctionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._keyValueStoreAssociations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyValueStoreAssociations = this._keyValueStoreAssociations?.internalValue;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._keyValueStoreAssociations.internalValue = undefined;
            this._runtime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._keyValueStoreAssociations.internalValue = value.keyValueStoreAssociations;
            this._runtime = value.runtime;
        }
    }

    // comment - computed: false, optional: false, required: true
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // key_value_store_associations - computed: true, optional: true, required: false
    private _keyValueStoreAssociations = new KeyValueStoreAssociationPropertyList(this, "key_value_store_associations", false);
    public get keyValueStoreAssociations() {
        return this._keyValueStoreAssociations;
    }
    public putKeyValueStoreAssociations(value: KeyValueStoreAssociationProperty[] | cdktn.IResolvable) {
        this._keyValueStoreAssociations.internalValue = value;
    }
    public resetKeyValueStoreAssociations() {
        this._keyValueStoreAssociations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyValueStoreAssociationsInput() {
        return this._keyValueStoreAssociations.internalValue;
    }

    // runtime - computed: false, optional: false, required: true
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }
}
export interface FunctionMetadataProperty {
}
export class FunctionMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FunctionMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
}
export interface TagProperty {
    /**
    * A string that contains ``Tag`` key.
    *  The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#key CcFunction#key}
    */
    readonly key?: string;
    /**
    * A string that contains an optional ``Tag`` value.
    *  The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_function#value CcFunction#value}
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
