// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The instance description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#instance_description CcInstance#instance_description}
    */
    readonly instanceDescription?: string;
    /**
    * The instance name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#instance_name CcInstance#instance_name}
    */
    readonly instanceName?: string;
    /**
    * Tags for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#tags CcInstance#tags}
    */
    readonly tags?: CcInstance.TagsProperty[] | cdktn.IResolvable;
    /**
    * The WebApp DNS domain name of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#web_app_dns_domain CcInstance#web_app_dns_domain}
    */
    readonly webAppDnsDomain?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance awscc_scn_instance}
*/
export class CcInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_scn_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstance to import
    * @param importFromId The id of the existing CcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_scn_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance awscc_scn_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_scn_instance',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._instanceDescription = config.instanceDescription;
        this._instanceName = config.instanceName;
        this._tags.internalValue = config.tags;
        this._webAppDnsDomain = config.webAppDnsDomain;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_description - computed: true, optional: true, required: false
    private _instanceDescription?: string; 
    public get instanceDescription() {
        return this.getStringAttribute('instance_description');
    }
    public set instanceDescription(value: string) {
        this._instanceDescription = value;
    }
    public resetInstanceDescription() {
        this._instanceDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceDescriptionInput() {
        return this._instanceDescription;
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }

    // instance_name - computed: true, optional: true, required: false
    private _instanceName?: string; 
    public get instanceName() {
        return this.getStringAttribute('instance_name');
    }
    public set instanceName(value: string) {
        this._instanceName = value;
    }
    public resetInstanceName() {
        this._instanceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNameInput() {
        return this._instanceName;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInstance.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInstance.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
        return this.getNumberAttribute('version_number');
    }

    // web_app_dns_domain - computed: true, optional: true, required: false
    private _webAppDnsDomain?: string; 
    public get webAppDnsDomain() {
        return this.getStringAttribute('web_app_dns_domain');
    }
    public set webAppDnsDomain(value: string) {
        this._webAppDnsDomain = value;
    }
    public resetWebAppDnsDomain() {
        this._webAppDnsDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAppDnsDomainInput() {
        return this._webAppDnsDomain;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_description: cdktn.stringToTerraform(this._instanceDescription),
            instance_name: cdktn.stringToTerraform(this._instanceName),
            tags: cdktn.listMapper(ccInstanceTagsPropertyToTerraform, false)(this._tags.internalValue),
            web_app_dns_domain: cdktn.stringToTerraform(this._webAppDnsDomain),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_description: {
                value: cdktn.stringToHclTerraform(this._instanceDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_name: {
                value: cdktn.stringToHclTerraform(this._instanceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInstanceTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInstance.TagsPropertyList",
            },
            web_app_dns_domain: {
                value: cdktn.stringToHclTerraform(this._webAppDnsDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceTagsPropertyToTerraform(struct?: CcInstance.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInstanceTagsPropertyToHclTerraform(struct?: CcInstance.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcInstance {
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#key CcInstance#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/scn_instance#value CcInstance#value}
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
