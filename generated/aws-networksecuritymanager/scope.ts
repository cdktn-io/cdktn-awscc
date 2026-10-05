// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScopeProps extends cdktn.TerraformMetaArguments {
    /**
    * The scope configuration as a JSON string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#scope_configuration CcScope#scope_configuration}
    */
    readonly scopeConfiguration?: string;
    /**
    * A description of the scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#scope_description CcScope#scope_description}
    */
    readonly scopeDescription?: string;
    /**
    * The name of the scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#scope_name CcScope#scope_name}
    */
    readonly scopeName: string;
    /**
    * The tags associated with the scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#tags CcScope#tags}
    */
    readonly tags?: CcScope.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope awscc_networksecuritymanager_scope}
*/
export class CcScope extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networksecuritymanager_scope";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScope resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScope to import
    * @param importFromId The id of the existing CcScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScope to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networksecuritymanager_scope", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope awscc_networksecuritymanager_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScopeProps
    */
    public constructor(scope: Construct, id: string, config: CcScopeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networksecuritymanager_scope',
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
        this._scopeConfiguration = config.scopeConfiguration;
        this._scopeDescription = config.scopeDescription;
        this._scopeName = config.scopeName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scope_arn - computed: true, optional: false, required: false
    public get scopeArn() {
        return this.getStringAttribute('scope_arn');
    }

    // scope_configuration - computed: true, optional: true, required: false
    private _scopeConfiguration?: string; 
    public get scopeConfiguration() {
        return this.getStringAttribute('scope_configuration');
    }
    public set scopeConfiguration(value: string) {
        this._scopeConfiguration = value;
    }
    public resetScopeConfiguration() {
        this._scopeConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeConfigurationInput() {
        return this._scopeConfiguration;
    }

    // scope_description - computed: true, optional: true, required: false
    private _scopeDescription?: string; 
    public get scopeDescription() {
        return this.getStringAttribute('scope_description');
    }
    public set scopeDescription(value: string) {
        this._scopeDescription = value;
    }
    public resetScopeDescription() {
        this._scopeDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeDescriptionInput() {
        return this._scopeDescription;
    }

    // scope_id - computed: true, optional: false, required: false
    public get scopeId() {
        return this.getStringAttribute('scope_id');
    }

    // scope_name - computed: false, optional: false, required: true
    private _scopeName?: string; 
    public get scopeName() {
        return this.getStringAttribute('scope_name');
    }
    public set scopeName(value: string) {
        this._scopeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeNameInput() {
        return this._scopeName;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcScope.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcScope.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            scope_configuration: cdktn.stringToTerraform(this._scopeConfiguration),
            scope_description: cdktn.stringToTerraform(this._scopeDescription),
            scope_name: cdktn.stringToTerraform(this._scopeName),
            tags: cdktn.listMapper(ccScopeTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            scope_configuration: {
                value: cdktn.stringToHclTerraform(this._scopeConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scope_description: {
                value: cdktn.stringToHclTerraform(this._scopeDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scope_name: {
                value: cdktn.stringToHclTerraform(this._scopeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccScopeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcScope.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScopeTagsPropertyToTerraform(struct?: CcScope.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScopeTagsPropertyToHclTerraform(struct?: CcScope.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcScope {
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#key CcScope#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networksecuritymanager_scope#value CcScope#value}
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
