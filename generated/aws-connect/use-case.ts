// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUseCaseProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#instance_id CcUseCase#instance_id}
    */
    readonly instanceId: string;
    /**
    * The identifier for the integration association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#integration_association_id CcUseCase#integration_association_id}
    */
    readonly integrationAssociationId: string;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#tags CcUseCase#tags}
    */
    readonly tags?: CcUseCase.TagsProperty[] | cdktn.IResolvable;
    /**
    * The type of use case to associate to the integration association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#use_case_type CcUseCase#use_case_type}
    */
    readonly useCaseType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case awscc_connect_use_case}
*/
export class CcUseCase extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_use_case";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUseCase resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUseCase to import
    * @param importFromId The id of the existing CcUseCase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUseCase to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_use_case", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case awscc_connect_use_case} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUseCaseProps
    */
    public constructor(scope: Construct, id: string, config: CcUseCaseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_use_case',
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
        this._instanceId = config.instanceId;
        this._integrationAssociationId = config.integrationAssociationId;
        this._tags.internalValue = config.tags;
        this._useCaseType = config.useCaseType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // integration_association_id - computed: false, optional: false, required: true
    private _integrationAssociationId?: string; 
    public get integrationAssociationId() {
        return this.getStringAttribute('integration_association_id');
    }
    public set integrationAssociationId(value: string) {
        this._integrationAssociationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationAssociationIdInput() {
        return this._integrationAssociationId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcUseCase.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcUseCase.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // use_case_arn - computed: true, optional: false, required: false
    public get useCaseArn() {
        return this.getStringAttribute('use_case_arn');
    }

    // use_case_id - computed: true, optional: false, required: false
    public get useCaseId() {
        return this.getStringAttribute('use_case_id');
    }

    // use_case_type - computed: false, optional: false, required: true
    private _useCaseType?: string; 
    public get useCaseType() {
        return this.getStringAttribute('use_case_type');
    }
    public set useCaseType(value: string) {
        this._useCaseType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get useCaseTypeInput() {
        return this._useCaseType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_id: cdktn.stringToTerraform(this._instanceId),
            integration_association_id: cdktn.stringToTerraform(this._integrationAssociationId),
            tags: cdktn.listMapper(ccUseCaseTagsPropertyToTerraform, false)(this._tags.internalValue),
            use_case_type: cdktn.stringToTerraform(this._useCaseType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_association_id: {
                value: cdktn.stringToHclTerraform(this._integrationAssociationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccUseCaseTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUseCase.TagsPropertyList",
            },
            use_case_type: {
                value: cdktn.stringToHclTerraform(this._useCaseType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUseCaseTagsPropertyToTerraform(struct?: CcUseCase.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUseCaseTagsPropertyToHclTerraform(struct?: CcUseCase.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcUseCase {
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#key CcUseCase#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/connect_use_case#value CcUseCase#value}
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
