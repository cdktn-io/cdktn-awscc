// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKeyGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The key group configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group#key_group_config CcKeyGroup#key_group_config}
    */
    readonly keyGroupConfig: CcKeyGroup.KeyGroupConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group awscc_cloudfront_key_group}
*/
export class CcKeyGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_key_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKeyGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKeyGroup to import
    * @param importFromId The id of the existing CcKeyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKeyGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_key_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group awscc_cloudfront_key_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKeyGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcKeyGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_key_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._keyGroupConfig.internalValue = config.keyGroupConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_group_config - computed: false, optional: false, required: true
    private _keyGroupConfig = new CcKeyGroup.KeyGroupConfigPropertyOutputReference(this, "key_group_config");
    public get keyGroupConfig() {
        return this._keyGroupConfig;
    }
    public putKeyGroupConfig(value: CcKeyGroup.KeyGroupConfigProperty) {
        this._keyGroupConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyGroupConfigInput() {
        return this._keyGroupConfig.internalValue;
    }

    // key_group_id - computed: true, optional: false, required: false
    public get keyGroupId() {
        return this.getStringAttribute('key_group_id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            key_group_config: ccKeyGroupKeyGroupConfigPropertyToTerraform(this._keyGroupConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            key_group_config: {
                value: ccKeyGroupKeyGroupConfigPropertyToHclTerraform(this._keyGroupConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKeyGroup.KeyGroupConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKeyGroupKeyGroupConfigPropertyToTerraform(struct?: CcKeyGroup.KeyGroupConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccKeyGroupKeyGroupConfigPropertyToHclTerraform(struct?: CcKeyGroup.KeyGroupConfigProperty | cdktn.IResolvable): any {
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
        items: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcKeyGroup {
export interface KeyGroupConfigProperty {
    /**
    * A comment to describe the key group. The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group#comment CcKeyGroup#comment}
    */
    readonly comment?: string;
    /**
    * A list of the identifiers of the public keys in the key group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group#items CcKeyGroup#items}
    */
    readonly items: string[];
    /**
    * A name to identify the key group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_key_group#name CcKeyGroup#name}
    */
    readonly name: string;
}
export class KeyGroupConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyGroupConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyGroupConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._items = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._items = value.items;
            this._name = value.name;
        }
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // items - computed: false, optional: false, required: true
    private _items?: string[]; 
    public get items() {
        return this.getListAttribute('items');
    }
    public set items(value: string[]) {
        this._items = value;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items;
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
}
}
