// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQev2IdcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#idc_display_name CcQev2IdcApplication#idc_display_name}
    */
    readonly idcDisplayName: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM Identity Center instance used to create the Amazon Redshift Query Editor (QEV2) managed application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#idc_instance_arn CcQev2IdcApplication#idc_instance_arn}
    */
    readonly idcInstanceArn: string;
    /**
    * The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#qev_2_idc_application_name CcQev2IdcApplication#qev_2_idc_application_name}
    */
    readonly qev2IdcApplicationName: string;
    /**
    * A list of tags associated with the application. Tags are key-value pairs that you can use to organize and identify your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#tags CcQev2IdcApplication#tags}
    */
    readonly tags?: CcQev2IdcApplication.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application awscc_redshift_qev2_idc_application}
*/
export class CcQev2IdcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_qev2_idc_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQev2IdcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQev2IdcApplication to import
    * @param importFromId The id of the existing CcQev2IdcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQev2IdcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_qev2_idc_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application awscc_redshift_qev2_idc_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQev2IdcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcQev2IdcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_qev2_idc_application',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._idcDisplayName = config.idcDisplayName;
        this._idcInstanceArn = config.idcInstanceArn;
        this._qev2IdcApplicationName = config.qev2IdcApplicationName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idc_display_name - computed: false, optional: false, required: true
    private _idcDisplayName?: string; 
    public get idcDisplayName() {
        return this.getStringAttribute('idc_display_name');
    }
    public set idcDisplayName(value: string) {
        this._idcDisplayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idcDisplayNameInput() {
        return this._idcDisplayName;
    }

    // idc_instance_arn - computed: false, optional: false, required: true
    private _idcInstanceArn?: string; 
    public get idcInstanceArn() {
        return this.getStringAttribute('idc_instance_arn');
    }
    public set idcInstanceArn(value: string) {
        this._idcInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInstanceArnInput() {
        return this._idcInstanceArn;
    }

    // idc_managed_application_arn - computed: true, optional: false, required: false
    public get idcManagedApplicationArn() {
        return this.getStringAttribute('idc_managed_application_arn');
    }

    // idc_onboard_status - computed: true, optional: false, required: false
    public get idcOnboardStatus() {
        return this.getStringAttribute('idc_onboard_status');
    }

    // qev_2_idc_application_arn - computed: true, optional: false, required: false
    public get qev2IdcApplicationArn() {
        return this.getStringAttribute('qev_2_idc_application_arn');
    }

    // qev_2_idc_application_name - computed: false, optional: false, required: true
    private _qev2IdcApplicationName?: string; 
    public get qev2IdcApplicationName() {
        return this.getStringAttribute('qev_2_idc_application_name');
    }
    public set qev2IdcApplicationName(value: string) {
        this._qev2IdcApplicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get qev2IdcApplicationNameInput() {
        return this._qev2IdcApplicationName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcQev2IdcApplication.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcQev2IdcApplication.TagsProperty[] | cdktn.IResolvable) {
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
            idc_display_name: cdktn.stringToTerraform(this._idcDisplayName),
            idc_instance_arn: cdktn.stringToTerraform(this._idcInstanceArn),
            qev_2_idc_application_name: cdktn.stringToTerraform(this._qev2IdcApplicationName),
            tags: cdktn.listMapper(ccQev2IdcApplicationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            idc_display_name: {
                value: cdktn.stringToHclTerraform(this._idcDisplayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idc_instance_arn: {
                value: cdktn.stringToHclTerraform(this._idcInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            qev_2_idc_application_name: {
                value: cdktn.stringToHclTerraform(this._qev2IdcApplicationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccQev2IdcApplicationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcQev2IdcApplication.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccQev2IdcApplicationTagsPropertyToTerraform(struct?: CcQev2IdcApplication.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccQev2IdcApplicationTagsPropertyToHclTerraform(struct?: CcQev2IdcApplication.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcQev2IdcApplication {
export interface TagsProperty {
    /**
    * The key, or name, for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#key CcQev2IdcApplication#key}
    */
    readonly key?: string;
    /**
    * The value for the resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_qev2_idc_application#value CcQev2IdcApplication#value}
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
