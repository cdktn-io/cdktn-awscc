// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The authentication strategy associated with the configuration. The default is SIMPLE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#authentication_strategy CcConfiguration#authentication_strategy}
    */
    readonly authenticationStrategy?: string;
    /**
    * The base64-encoded XML configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#data CcConfiguration#data}
    */
    readonly data?: string;
    /**
    * The description of the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#description CcConfiguration#description}
    */
    readonly description?: string;
    /**
    * The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#engine_type CcConfiguration#engine_type}
    */
    readonly engineType: string;
    /**
    * The version of the broker engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#engine_version CcConfiguration#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The name of the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#name CcConfiguration#name}
    */
    readonly name: string;
    /**
    * Create tags when creating the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#tags CcConfiguration#tags}
    */
    readonly tags?: CcConfiguration.TagsEntryProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration awscc_amazonmq_configuration}
*/
export class CcConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_amazonmq_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfiguration to import
    * @param importFromId The id of the existing CcConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_amazonmq_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration awscc_amazonmq_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_amazonmq_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._authenticationStrategy = config.authenticationStrategy;
        this._data = config.data;
        this._description = config.description;
        this._engineType = config.engineType;
        this._engineVersion = config.engineVersion;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authentication_strategy - computed: true, optional: true, required: false
    private _authenticationStrategy?: string; 
    public get authenticationStrategy() {
        return this.getStringAttribute('authentication_strategy');
    }
    public set authenticationStrategy(value: string) {
        this._authenticationStrategy = value;
    }
    public resetAuthenticationStrategy() {
        this._authenticationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationStrategyInput() {
        return this._authenticationStrategy;
    }

    // configuration_id - computed: true, optional: false, required: false
    public get configurationId() {
        return this.getStringAttribute('configuration_id');
    }

    // data - computed: true, optional: true, required: false
    private _data?: string; 
    public get data() {
        return this.getStringAttribute('data');
    }
    public set data(value: string) {
        this._data = value;
    }
    public resetData() {
        this._data = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
        return this._data;
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

    // engine_type - computed: false, optional: false, required: true
    private _engineType?: string; 
    public get engineType() {
        return this.getStringAttribute('engine_type');
    }
    public set engineType(value: string) {
        this._engineType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineTypeInput() {
        return this._engineType;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    public resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
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

    // revision - computed: true, optional: false, required: false
    public get revision() {
        return this.getStringAttribute('revision');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfiguration.TagsEntryPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfiguration.TagsEntryProperty[] | cdktn.IResolvable) {
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
            authentication_strategy: cdktn.stringToTerraform(this._authenticationStrategy),
            data: cdktn.stringToTerraform(this._data),
            description: cdktn.stringToTerraform(this._description),
            engine_type: cdktn.stringToTerraform(this._engineType),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccConfigurationTagsEntryPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authentication_strategy: {
                value: cdktn.stringToHclTerraform(this._authenticationStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data: {
                value: cdktn.stringToHclTerraform(this._data),
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
            engine_type: {
                value: cdktn.stringToHclTerraform(this._engineType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
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
            tags: {
                value: cdktn.listMapperHcl(ccConfigurationTagsEntryPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfiguration.TagsEntryPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationTagsEntryPropertyToTerraform(struct?: CcConfiguration.TagsEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationTagsEntryPropertyToHclTerraform(struct?: CcConfiguration.TagsEntryProperty | cdktn.IResolvable): any {
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


export namespace CcConfiguration {
export interface TagsEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#key CcConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amazonmq_configuration#value CcConfiguration#value}
    */
    readonly value?: string;
}
export class TagsEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsEntryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsEntryProperty | cdktn.IResolvable | undefined) {
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

export class TagsEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsEntryPropertyOutputReference {
        return new TagsEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
