// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIpamInternetRegistryAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the internet registry association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#description CcIpamInternetRegistryAssociation#description}
    */
    readonly description?: string;
    /**
    * The ID of the IPAM to associate with the internet registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#ipam_id CcIpamInternetRegistryAssociation#ipam_id}
    */
    readonly ipamId: string;
    /**
    * The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#organization_handle CcIpamInternetRegistryAssociation#organization_handle}
    */
    readonly organizationHandle: string;
    /**
    * The Regional Internet Registry to associate with. The service returns these values in upper case, so the enum uses the round-tripping form.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#rir CcIpamInternetRegistryAssociation#rir}
    */
    readonly rir: string;
    /**
    * The tags assigned to the internet registry association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#tags CcIpamInternetRegistryAssociation#tags}
    */
    readonly tags?: CcIpamInternetRegistryAssociation.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association awscc_ec2_ipam_internet_registry_association}
*/
export class CcIpamInternetRegistryAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_internet_registry_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIpamInternetRegistryAssociation to import
    * @param importFromId The id of the existing CcIpamInternetRegistryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIpamInternetRegistryAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_internet_registry_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association awscc_ec2_ipam_internet_registry_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIpamInternetRegistryAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcIpamInternetRegistryAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_internet_registry_association',
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
        this._description = config.description;
        this._ipamId = config.ipamId;
        this._organizationHandle = config.organizationHandle;
        this._rir = config.rir;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // child_request_xml - computed: true, optional: false, required: false
    public get childRequestXml() {
        return this.getStringAttribute('child_request_xml');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipam_id - computed: false, optional: false, required: true
    private _ipamId?: string; 
    public get ipamId() {
        return this.getStringAttribute('ipam_id');
    }
    public set ipamId(value: string) {
        this._ipamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamIdInput() {
        return this._ipamId;
    }

    // ipam_internet_registry_association_arn - computed: true, optional: false, required: false
    public get ipamInternetRegistryAssociationArn() {
        return this.getStringAttribute('ipam_internet_registry_association_arn');
    }

    // ipam_internet_registry_association_id - computed: true, optional: false, required: false
    public get ipamInternetRegistryAssociationId() {
        return this.getStringAttribute('ipam_internet_registry_association_id');
    }

    // ipam_region - computed: true, optional: false, required: false
    public get ipamRegion() {
        return this.getStringAttribute('ipam_region');
    }

    // organization_handle - computed: false, optional: false, required: true
    private _organizationHandle?: string; 
    public get organizationHandle() {
        return this.getStringAttribute('organization_handle');
    }
    public set organizationHandle(value: string) {
        this._organizationHandle = value;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationHandleInput() {
        return this._organizationHandle;
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // rir - computed: false, optional: false, required: true
    private _rir?: string; 
    public get rir() {
        return this.getStringAttribute('rir');
    }
    public set rir(value: string) {
        this._rir = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rirInput() {
        return this._rir;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIpamInternetRegistryAssociation.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIpamInternetRegistryAssociation.TagsProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            ipam_id: cdktn.stringToTerraform(this._ipamId),
            organization_handle: cdktn.stringToTerraform(this._organizationHandle),
            rir: cdktn.stringToTerraform(this._rir),
            tags: cdktn.listMapper(ccIpamInternetRegistryAssociationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipam_id: {
                value: cdktn.stringToHclTerraform(this._ipamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_handle: {
                value: cdktn.stringToHclTerraform(this._organizationHandle),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rir: {
                value: cdktn.stringToHclTerraform(this._rir),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIpamInternetRegistryAssociationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIpamInternetRegistryAssociation.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIpamInternetRegistryAssociationTagsPropertyToTerraform(struct?: CcIpamInternetRegistryAssociation.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIpamInternetRegistryAssociationTagsPropertyToHclTerraform(struct?: CcIpamInternetRegistryAssociation.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcIpamInternetRegistryAssociation {
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#key CcIpamInternetRegistryAssociation#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_ipam_internet_registry_association#value CcIpamInternetRegistryAssociation#value}
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
