// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMResourceDiscoveryAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The Id of the IPAM this Resource Discovery is associated to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#ipam_id CcIPAMResourceDiscoveryAssociation#ipam_id}
    */
    readonly ipamId: string;
    /**
    * The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#ipam_resource_discovery_id CcIPAMResourceDiscoveryAssociation#ipam_resource_discovery_id}
    */
    readonly ipamResourceDiscoveryId: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#tags CcIPAMResourceDiscoveryAssociation#tags}
    */
    readonly tags?: CcIPAMResourceDiscoveryAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association awscc_ec2_ipam_resource_discovery_association}
*/
export class CcIPAMResourceDiscoveryAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_resource_discovery_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAMResourceDiscoveryAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAMResourceDiscoveryAssociation to import
    * @param importFromId The id of the existing CcIPAMResourceDiscoveryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAMResourceDiscoveryAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_resource_discovery_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association awscc_ec2_ipam_resource_discovery_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMResourceDiscoveryAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcIPAMResourceDiscoveryAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_resource_discovery_association',
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
        this._ipamId = config.ipamId;
        this._ipamResourceDiscoveryId = config.ipamResourceDiscoveryId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ipam_arn - computed: true, optional: false, required: false
    public get ipamArn() {
        return this.getStringAttribute('ipam_arn');
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

    // ipam_region - computed: true, optional: false, required: false
    public get ipamRegion() {
        return this.getStringAttribute('ipam_region');
    }

    // ipam_resource_discovery_association_arn - computed: true, optional: false, required: false
    public get ipamResourceDiscoveryAssociationArn() {
        return this.getStringAttribute('ipam_resource_discovery_association_arn');
    }

    // ipam_resource_discovery_association_id - computed: true, optional: false, required: false
    public get ipamResourceDiscoveryAssociationId() {
        return this.getStringAttribute('ipam_resource_discovery_association_id');
    }

    // ipam_resource_discovery_id - computed: false, optional: false, required: true
    private _ipamResourceDiscoveryId?: string; 
    public get ipamResourceDiscoveryId() {
        return this.getStringAttribute('ipam_resource_discovery_id');
    }
    public set ipamResourceDiscoveryId(value: string) {
        this._ipamResourceDiscoveryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamResourceDiscoveryIdInput() {
        return this._ipamResourceDiscoveryId;
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
        return this.getBooleanAttribute('is_default');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // resource_discovery_status - computed: true, optional: false, required: false
    public get resourceDiscoveryStatus() {
        return this.getStringAttribute('resource_discovery_status');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAMResourceDiscoveryAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAMResourceDiscoveryAssociation.TagProperty[] | cdktn.IResolvable) {
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
            ipam_id: cdktn.stringToTerraform(this._ipamId),
            ipam_resource_discovery_id: cdktn.stringToTerraform(this._ipamResourceDiscoveryId),
            tags: cdktn.listMapper(ccIPAMResourceDiscoveryAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ipam_id: {
                value: cdktn.stringToHclTerraform(this._ipamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipam_resource_discovery_id: {
                value: cdktn.stringToHclTerraform(this._ipamResourceDiscoveryId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMResourceDiscoveryAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMResourceDiscoveryAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMResourceDiscoveryAssociationTagPropertyToTerraform(struct?: CcIPAMResourceDiscoveryAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMResourceDiscoveryAssociationTagPropertyToHclTerraform(struct?: CcIPAMResourceDiscoveryAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIPAMResourceDiscoveryAssociation {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#key CcIPAMResourceDiscoveryAssociation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_resource_discovery_association#value CcIPAMResourceDiscoveryAssociation#value}
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
