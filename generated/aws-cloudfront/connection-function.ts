// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#auto_publish CcConnectionFunction#auto_publish}
    */
    readonly autoPublish?: boolean | cdktn.IResolvable;
    /**
    * The code for the connection function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#connection_function_code CcConnectionFunction#connection_function_code}
    */
    readonly connectionFunctionCode: string;
    /**
    * Contains configuration information about a CloudFront function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#connection_function_config CcConnectionFunction#connection_function_config}
    */
    readonly connectionFunctionConfig: CcConnectionFunction.ConnectionFunctionConfigProperty;
    /**
    * The connection function name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#name CcConnectionFunction#name}
    */
    readonly name: string;
    /**
    * A complex type that contains zero or more ``Tag`` elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#tags CcConnectionFunction#tags}
    */
    readonly tags?: CcConnectionFunction.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function awscc_cloudfront_connection_function}
*/
export class CcConnectionFunction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_connection_function";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnectionFunction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnectionFunction to import
    * @param importFromId The id of the existing CcConnectionFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnectionFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_connection_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function awscc_cloudfront_connection_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_connection_function',
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
        this._connectionFunctionCode = config.connectionFunctionCode;
        this._connectionFunctionConfig.internalValue = config.connectionFunctionConfig;
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

    // connection_function_arn - computed: true, optional: false, required: false
    public get connectionFunctionArn() {
        return this.getStringAttribute('connection_function_arn');
    }

    // connection_function_code - computed: false, optional: false, required: true
    private _connectionFunctionCode?: string; 
    public get connectionFunctionCode() {
        return this.getStringAttribute('connection_function_code');
    }
    public set connectionFunctionCode(value: string) {
        this._connectionFunctionCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionFunctionCodeInput() {
        return this._connectionFunctionCode;
    }

    // connection_function_config - computed: false, optional: false, required: true
    private _connectionFunctionConfig = new CcConnectionFunction.ConnectionFunctionConfigPropertyOutputReference(this, "connection_function_config");
    public get connectionFunctionConfig() {
        return this._connectionFunctionConfig;
    }
    public putConnectionFunctionConfig(value: CcConnectionFunction.ConnectionFunctionConfigProperty) {
        this._connectionFunctionConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionFunctionConfigInput() {
        return this._connectionFunctionConfig.internalValue;
    }

    // connection_function_id - computed: true, optional: false, required: false
    public get connectionFunctionId() {
        return this.getStringAttribute('connection_function_id');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // e_tag - computed: true, optional: false, required: false
    public get eTag() {
        return this.getStringAttribute('e_tag');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnectionFunction.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnectionFunction.TagProperty[] | cdktn.IResolvable) {
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
            connection_function_code: cdktn.stringToTerraform(this._connectionFunctionCode),
            connection_function_config: ccConnectionFunctionConnectionFunctionConfigPropertyToTerraform(this._connectionFunctionConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccConnectionFunctionTagPropertyToTerraform, false)(this._tags.internalValue),
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
            connection_function_code: {
                value: cdktn.stringToHclTerraform(this._connectionFunctionCode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_function_config: {
                value: ccConnectionFunctionConnectionFunctionConfigPropertyToHclTerraform(this._connectionFunctionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectionFunction.ConnectionFunctionConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectionFunctionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConnectionFunction.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectionFunctionKeyValueStoreAssociationPropertyToTerraform(struct?: CcConnectionFunction.KeyValueStoreAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_value_store_arn: cdktn.stringToTerraform(struct!.keyValueStoreArn),
    }
}


export function ccConnectionFunctionKeyValueStoreAssociationPropertyToHclTerraform(struct?: CcConnectionFunction.KeyValueStoreAssociationProperty | cdktn.IResolvable): any {
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


export function ccConnectionFunctionConnectionFunctionConfigPropertyToTerraform(struct?: CcConnectionFunction.ConnectionFunctionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        key_value_store_associations: cdktn.listMapper(ccConnectionFunctionKeyValueStoreAssociationPropertyToTerraform, false)(struct!.keyValueStoreAssociations),
        runtime: cdktn.stringToTerraform(struct!.runtime),
    }
}


export function ccConnectionFunctionConnectionFunctionConfigPropertyToHclTerraform(struct?: CcConnectionFunction.ConnectionFunctionConfigProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccConnectionFunctionKeyValueStoreAssociationPropertyToHclTerraform, false)(struct!.keyValueStoreAssociations),
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


export function ccConnectionFunctionTagPropertyToTerraform(struct?: CcConnectionFunction.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionFunctionTagPropertyToHclTerraform(struct?: CcConnectionFunction.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConnectionFunction {
export interface KeyValueStoreAssociationProperty {
    /**
    * The Amazon Resource Name (ARN) of the key value store association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#key_value_store_arn CcConnectionFunction#key_value_store_arn}
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
export interface ConnectionFunctionConfigProperty {
    /**
    * A comment to describe the function. The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#comment CcConnectionFunction#comment}
    */
    readonly comment: string;
    /**
    * The configuration for the key value store associations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#key_value_store_associations CcConnectionFunction#key_value_store_associations}
    */
    readonly keyValueStoreAssociations?: KeyValueStoreAssociationProperty[] | cdktn.IResolvable;
    /**
    * The function's runtime environment version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#runtime CcConnectionFunction#runtime}
    */
    readonly runtime: string;
}
export class ConnectionFunctionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionFunctionConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ConnectionFunctionConfigProperty | cdktn.IResolvable | undefined) {
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
export interface TagProperty {
    /**
    * A string that contains ``Tag`` key.
    *  The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#key CcConnectionFunction#key}
    */
    readonly key?: string;
    /**
    * A string that contains an optional ``Tag`` value.
    *  The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_connection_function#value CcConnectionFunction#value}
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
