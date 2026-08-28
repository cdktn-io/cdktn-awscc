// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOpsItemProps extends cdktn.TerraformMetaArguments {
    /**
    * The category of the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#category CcOpsItem#category}
    */
    readonly category?: string;
    /**
    * The description of the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#description CcOpsItem#description}
    */
    readonly description: string;
    /**
    * The priority of the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#priority CcOpsItem#priority}
    */
    readonly priority?: number;
    /**
    * The severity of the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#severity CcOpsItem#severity}
    */
    readonly severity?: string;
    /**
    * The origin of the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#source CcOpsItem#source}
    */
    readonly source: string;
    /**
    * Tags for the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#tags CcOpsItem#tags}
    */
    readonly tags?: CcOpsItem.TagProperty[] | cdktn.IResolvable;
    /**
    * The title of the OpsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#title CcOpsItem#title}
    */
    readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item awscc_ssm_ops_item}
*/
export class CcOpsItem extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_ops_item";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOpsItem resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOpsItem to import
    * @param importFromId The id of the existing CcOpsItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOpsItem to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_ops_item", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item awscc_ssm_ops_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOpsItemProps
    */
    public constructor(scope: Construct, id: string, config: CcOpsItemProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_ops_item',
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
        this._category = config.category;
        this._description = config.description;
        this._priority = config.priority;
        this._severity = config.severity;
        this._source = config.source;
        this._tags.internalValue = config.tags;
        this._title = config.title;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_by - computed: true, optional: false, required: false
    public get lastModifiedBy() {
        return this.getStringAttribute('last_modified_by');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // ops_item_arn - computed: true, optional: false, required: false
    public get opsItemArn() {
        return this.getStringAttribute('ops_item_arn');
    }

    // ops_item_id - computed: true, optional: false, required: false
    public get opsItemId() {
        return this.getStringAttribute('ops_item_id');
    }

    // ops_item_type - computed: true, optional: false, required: false
    public get opsItemType() {
        return this.getStringAttribute('ops_item_type');
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // severity - computed: true, optional: true, required: false
    private _severity?: string; 
    public get severity() {
        return this.getStringAttribute('severity');
    }
    public set severity(value: string) {
        this._severity = value;
    }
    public resetSeverity() {
        this._severity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
        return this._severity;
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOpsItem.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOpsItem.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // title - computed: false, optional: false, required: true
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
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
            category: cdktn.stringToTerraform(this._category),
            description: cdktn.stringToTerraform(this._description),
            priority: cdktn.numberToTerraform(this._priority),
            severity: cdktn.stringToTerraform(this._severity),
            source: cdktn.stringToTerraform(this._source),
            tags: cdktn.listMapper(ccOpsItemTagPropertyToTerraform, false)(this._tags.internalValue),
            title: cdktn.stringToTerraform(this._title),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            category: {
                value: cdktn.stringToHclTerraform(this._category),
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
            priority: {
                value: cdktn.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            severity: {
                value: cdktn.stringToHclTerraform(this._severity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOpsItemTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcOpsItem.TagPropertyList",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOpsItemTagPropertyToTerraform(struct?: CcOpsItem.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOpsItemTagPropertyToHclTerraform(struct?: CcOpsItem.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOpsItem {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#key CcOpsItem#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_ops_item#value CcOpsItem#value}
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
