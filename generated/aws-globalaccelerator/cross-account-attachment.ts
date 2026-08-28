// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCrossAccountAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The Friendly identifier of the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#name CcCrossAccountAttachment#name}
    */
    readonly name: string;
    /**
    * Principals to share the resources with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#principals CcCrossAccountAttachment#principals}
    */
    readonly principals?: string[];
    /**
    * Resources shared using the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#resources CcCrossAccountAttachment#resources}
    */
    readonly resources?: CcCrossAccountAttachment.ResourceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#tags CcCrossAccountAttachment#tags}
    */
    readonly tags?: CcCrossAccountAttachment.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}
*/
export class CcCrossAccountAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_globalaccelerator_cross_account_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCrossAccountAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCrossAccountAttachment to import
    * @param importFromId The id of the existing CcCrossAccountAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCrossAccountAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_globalaccelerator_cross_account_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCrossAccountAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcCrossAccountAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_globalaccelerator_cross_account_attachment',
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
        this._name = config.name;
        this._principals = config.principals;
        this._resources.internalValue = config.resources;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attachment_arn - computed: true, optional: false, required: false
    public get attachmentArn() {
        return this.getStringAttribute('attachment_arn');
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

    // principals - computed: true, optional: true, required: false
    private _principals?: string[]; 
    public get principals() {
        return this.getListAttribute('principals');
    }
    public set principals(value: string[]) {
        this._principals = value;
    }
    public resetPrincipals() {
        this._principals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalsInput() {
        return this._principals;
    }

    // resources - computed: true, optional: true, required: false
    private _resources = new CcCrossAccountAttachment.ResourcePropertyList(this, "resources", false);
    public get resources() {
        return this._resources;
    }
    public putResources(value: CcCrossAccountAttachment.ResourceProperty[] | cdktn.IResolvable) {
        this._resources.internalValue = value;
    }
    public resetResources() {
        this._resources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCrossAccountAttachment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCrossAccountAttachment.TagProperty[] | cdktn.IResolvable) {
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
            name: cdktn.stringToTerraform(this._name),
            principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._principals),
            resources: cdktn.listMapper(ccCrossAccountAttachmentResourcePropertyToTerraform, false)(this._resources.internalValue),
            tags: cdktn.listMapper(ccCrossAccountAttachmentTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principals: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._principals),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resources: {
                value: cdktn.listMapperHcl(ccCrossAccountAttachmentResourcePropertyToHclTerraform, false)(this._resources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCrossAccountAttachment.ResourcePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCrossAccountAttachmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCrossAccountAttachment.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCrossAccountAttachmentResourcePropertyToTerraform(struct?: CcCrossAccountAttachment.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
        endpoint_id: cdktn.stringToTerraform(struct!.endpointId),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccCrossAccountAttachmentResourcePropertyToHclTerraform(struct?: CcCrossAccountAttachment.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint_id: {
            value: cdktn.stringToHclTerraform(struct!.endpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCrossAccountAttachmentTagPropertyToTerraform(struct?: CcCrossAccountAttachment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCrossAccountAttachmentTagPropertyToHclTerraform(struct?: CcCrossAccountAttachment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCrossAccountAttachment {
export interface ResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#cidr CcCrossAccountAttachment#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id CcCrossAccountAttachment#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#region CcCrossAccountAttachment#region}
    */
    readonly region?: string;
}
export class ResourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        if (this._endpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointId = this._endpointId;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
            this._endpointId = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
            this._endpointId = value.endpointId;
            this._region = value.region;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }

    // endpoint_id - computed: true, optional: true, required: false
    private _endpointId?: string; 
    public get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }
    public set endpointId(value: string) {
        this._endpointId = value;
    }
    public resetEndpointId() {
        this._endpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIdInput() {
        return this._endpointId;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}

export class ResourcePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePropertyOutputReference {
        return new ResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Key of the tag. Value can be 1 to 127 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#key CcCrossAccountAttachment#key}
    */
    readonly key?: string;
    /**
    * Value for the tag. Value can be 1 to 255 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_cross_account_attachment#value CcCrossAccountAttachment#value}
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
