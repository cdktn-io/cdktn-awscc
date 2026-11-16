// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIngestionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#app CcIngestion#app}
    */
    readonly app: string;
    /**
    * The Amazon Resource Name (ARN) of the app bundle for the ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#app_bundle_arn CcIngestion#app_bundle_arn}
    */
    readonly appBundleArn: string;
    /**
    * The type of the ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#ingestion_type CcIngestion#ingestion_type}
    */
    readonly ingestionType: string;
    /**
    * A map of the key-value pairs of the tag or tags to assign to the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#tags CcIngestion#tags}
    */
    readonly tags?: CcIngestion.TagsProperty[] | cdktn.IResolvable;
    /**
    * The ID of the application tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#tenant_id CcIngestion#tenant_id}
    */
    readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion awscc_appfabric_ingestion}
*/
export class CcIngestion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appfabric_ingestion";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIngestion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIngestion to import
    * @param importFromId The id of the existing CcIngestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIngestion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appfabric_ingestion", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion awscc_appfabric_ingestion} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIngestionProps
    */
    public constructor(scope: Construct, id: string, config: CcIngestionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appfabric_ingestion',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._app = config.app;
        this._appBundleArn = config.appBundleArn;
        this._ingestionType = config.ingestionType;
        this._tags.internalValue = config.tags;
        this._tenantId = config.tenantId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app - computed: false, optional: false, required: true
    private _app?: string; 
    public get app() {
        return this.getStringAttribute('app');
    }
    public set app(value: string) {
        this._app = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appInput() {
        return this._app;
    }

    // app_bundle_arn - computed: false, optional: false, required: true
    private _appBundleArn?: string; 
    public get appBundleArn() {
        return this.getStringAttribute('app_bundle_arn');
    }
    public set appBundleArn(value: string) {
        this._appBundleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appBundleArnInput() {
        return this._appBundleArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingestion_type - computed: false, optional: false, required: true
    private _ingestionType?: string; 
    public get ingestionType() {
        return this.getStringAttribute('ingestion_type');
    }
    public set ingestionType(value: string) {
        this._ingestionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionTypeInput() {
        return this._ingestionType;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIngestion.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIngestion.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tenant_id - computed: false, optional: false, required: true
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            app: cdktn.stringToTerraform(this._app),
            app_bundle_arn: cdktn.stringToTerraform(this._appBundleArn),
            ingestion_type: cdktn.stringToTerraform(this._ingestionType),
            tags: cdktn.listMapper(ccIngestionTagsPropertyToTerraform, false)(this._tags.internalValue),
            tenant_id: cdktn.stringToTerraform(this._tenantId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app: {
                value: cdktn.stringToHclTerraform(this._app),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_bundle_arn: {
                value: cdktn.stringToHclTerraform(this._appBundleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ingestion_type: {
                value: cdktn.stringToHclTerraform(this._ingestionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIngestionTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIngestion.TagsPropertyList",
            },
            tenant_id: {
                value: cdktn.stringToHclTerraform(this._tenantId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIngestionTagsPropertyToTerraform(struct?: CcIngestion.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIngestionTagsPropertyToHclTerraform(struct?: CcIngestion.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcIngestion {
export interface TagsProperty {
    /**
    * Tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#key CcIngestion#key}
    */
    readonly key?: string;
    /**
    * Tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/appfabric_ingestion#value CcIngestion#value}
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
