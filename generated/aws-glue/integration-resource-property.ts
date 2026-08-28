// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntegrationResourcePropertyProps extends cdktn.TerraformMetaArguments {
    /**
    * The connection ARN of the source, or the database ARN of the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#resource_arn CcIntegrationResourceProperty#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * The resource properties associated with the integration source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#source_processing_properties CcIntegrationResourceProperty#source_processing_properties}
    */
    readonly sourceProcessingProperties?: CcIntegrationResourceProperty.SourceProcessingPropertiesProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#tags CcIntegrationResourceProperty#tags}
    */
    readonly tags?: CcIntegrationResourceProperty.TagProperty[] | cdktn.IResolvable;
    /**
    * The resource properties associated with the integration target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#target_processing_properties CcIntegrationResourceProperty#target_processing_properties}
    */
    readonly targetProcessingProperties?: CcIntegrationResourceProperty.TargetProcessingPropertiesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property}
*/
export class CcIntegrationResourceProperty extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_integration_resource_property";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntegrationResourceProperty resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntegrationResourceProperty to import
    * @param importFromId The id of the existing CcIntegrationResourceProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntegrationResourceProperty to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_integration_resource_property", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntegrationResourcePropertyProps
    */
    public constructor(scope: Construct, id: string, config: CcIntegrationResourcePropertyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_integration_resource_property',
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
        this._resourceArn = config.resourceArn;
        this._sourceProcessingProperties.internalValue = config.sourceProcessingProperties;
        this._tags.internalValue = config.tags;
        this._targetProcessingProperties.internalValue = config.targetProcessingProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // resource_property_arn - computed: true, optional: false, required: false
    public get resourcePropertyArn() {
        return this.getStringAttribute('resource_property_arn');
    }

    // source_processing_properties - computed: true, optional: true, required: false
    private _sourceProcessingProperties = new CcIntegrationResourceProperty.SourceProcessingPropertiesPropertyOutputReference(this, "source_processing_properties");
    public get sourceProcessingProperties() {
        return this._sourceProcessingProperties;
    }
    public putSourceProcessingProperties(value: CcIntegrationResourceProperty.SourceProcessingPropertiesProperty) {
        this._sourceProcessingProperties.internalValue = value;
    }
    public resetSourceProcessingProperties() {
        this._sourceProcessingProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceProcessingPropertiesInput() {
        return this._sourceProcessingProperties.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIntegrationResourceProperty.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIntegrationResourceProperty.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_processing_properties - computed: true, optional: true, required: false
    private _targetProcessingProperties = new CcIntegrationResourceProperty.TargetProcessingPropertiesPropertyOutputReference(this, "target_processing_properties");
    public get targetProcessingProperties() {
        return this._targetProcessingProperties;
    }
    public putTargetProcessingProperties(value: CcIntegrationResourceProperty.TargetProcessingPropertiesProperty) {
        this._targetProcessingProperties.internalValue = value;
    }
    public resetTargetProcessingProperties() {
        this._targetProcessingProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetProcessingPropertiesInput() {
        return this._targetProcessingProperties.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
            source_processing_properties: ccIntegrationResourcePropertySourceProcessingPropertiesPropertyToTerraform(this._sourceProcessingProperties.internalValue),
            tags: cdktn.listMapper(ccIntegrationResourcePropertyTagPropertyToTerraform, false)(this._tags.internalValue),
            target_processing_properties: ccIntegrationResourcePropertyTargetProcessingPropertiesPropertyToTerraform(this._targetProcessingProperties.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_arn: {
                value: cdktn.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_processing_properties: {
                value: ccIntegrationResourcePropertySourceProcessingPropertiesPropertyToHclTerraform(this._sourceProcessingProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntegrationResourceProperty.SourceProcessingPropertiesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIntegrationResourcePropertyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIntegrationResourceProperty.TagPropertyList",
            },
            target_processing_properties: {
                value: ccIntegrationResourcePropertyTargetProcessingPropertiesPropertyToHclTerraform(this._targetProcessingProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntegrationResourceProperty.TargetProcessingPropertiesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntegrationResourcePropertySourceProcessingPropertiesPropertyToTerraform(struct?: CcIntegrationResourceProperty.SourceProcessingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccIntegrationResourcePropertySourceProcessingPropertiesPropertyToHclTerraform(struct?: CcIntegrationResourceProperty.SourceProcessingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationResourcePropertyTagPropertyToTerraform(struct?: CcIntegrationResourceProperty.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIntegrationResourcePropertyTagPropertyToHclTerraform(struct?: CcIntegrationResourceProperty.TagProperty | cdktn.IResolvable): any {
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


export function ccIntegrationResourcePropertyTargetProcessingPropertiesPropertyToTerraform(struct?: CcIntegrationResourceProperty.TargetProcessingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
        kms_arn: cdktn.stringToTerraform(struct!.kmsArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccIntegrationResourcePropertyTargetProcessingPropertiesPropertyToHclTerraform(struct?: CcIntegrationResourceProperty.TargetProcessingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_bus_arn: {
            value: cdktn.stringToHclTerraform(struct!.eventBusArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcIntegrationResourceProperty {
export interface SourceProcessingPropertiesProperty {
    /**
    * The IAM role to access the Glue connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#role_arn CcIntegrationResourceProperty#role_arn}
    */
    readonly roleArn?: string;
}
export class SourceProcessingPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProcessingPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProcessingPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#key CcIntegrationResourceProperty#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#value CcIntegrationResourceProperty#value}
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
export interface TargetProcessingPropertiesProperty {
    /**
    * The Glue network connection to configure the Glue job running in the customer VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#connection_name CcIntegrationResourceProperty#connection_name}
    */
    readonly connectionName?: string;
    /**
    * The ARN of an Eventbridge event bus to receive the integration status notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#event_bus_arn CcIntegrationResourceProperty#event_bus_arn}
    */
    readonly eventBusArn?: string;
    /**
    * The ARN of the KMS key used for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#kms_arn CcIntegrationResourceProperty#kms_arn}
    */
    readonly kmsArn?: string;
    /**
    * The IAM role to access the Glue database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_integration_resource_property#role_arn CcIntegrationResourceProperty#role_arn}
    */
    readonly roleArn?: string;
}
export class TargetProcessingPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetProcessingPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._eventBusArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBusArn = this._eventBusArn;
        }
        if (this._kmsArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsArn = this._kmsArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetProcessingPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._eventBusArn = undefined;
            this._kmsArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._eventBusArn = value.eventBusArn;
            this._kmsArn = value.kmsArn;
            this._roleArn = value.roleArn;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // event_bus_arn - computed: true, optional: true, required: false
    private _eventBusArn?: string; 
    public get eventBusArn() {
        return this.getStringAttribute('event_bus_arn');
    }
    public set eventBusArn(value: string) {
        this._eventBusArn = value;
    }
    public resetEventBusArn() {
        this._eventBusArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusArnInput() {
        return this._eventBusArn;
    }

    // kms_arn - computed: true, optional: true, required: false
    private _kmsArn?: string; 
    public get kmsArn() {
        return this.getStringAttribute('kms_arn');
    }
    public set kmsArn(value: string) {
        this._kmsArn = value;
    }
    public resetKmsArn() {
        this._kmsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsArnInput() {
        return this._kmsArn;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
}
