// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdentityProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#identity_provider_details CcIdentityProvider#identity_provider_details}
    */
    readonly identityProviderDetails: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#identity_provider_name CcIdentityProvider#identity_provider_name}
    */
    readonly identityProviderName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#identity_provider_type CcIdentityProvider#identity_provider_type}
    */
    readonly identityProviderType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#portal_arn CcIdentityProvider#portal_arn}
    */
    readonly portalArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#tags CcIdentityProvider#tags}
    */
    readonly tags?: CcIdentityProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider awscc_workspacesweb_identity_provider}
*/
export class CcIdentityProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesweb_identity_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdentityProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdentityProvider to import
    * @param importFromId The id of the existing CcIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdentityProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_identity_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider awscc_workspacesweb_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdentityProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcIdentityProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesweb_identity_provider',
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
        this._identityProviderDetails = config.identityProviderDetails;
        this._identityProviderName = config.identityProviderName;
        this._identityProviderType = config.identityProviderType;
        this._portalArn = config.portalArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_arn - computed: true, optional: false, required: false
    public get identityProviderArn() {
        return this.getStringAttribute('identity_provider_arn');
    }

    // identity_provider_details - computed: false, optional: false, required: true
    private _identityProviderDetails?: { [key: string]: string }; 
    public get identityProviderDetails() {
        return this.getStringMapAttribute('identity_provider_details');
    }
    public set identityProviderDetails(value: { [key: string]: string }) {
        this._identityProviderDetails = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderDetailsInput() {
        return this._identityProviderDetails;
    }

    // identity_provider_name - computed: false, optional: false, required: true
    private _identityProviderName?: string; 
    public get identityProviderName() {
        return this.getStringAttribute('identity_provider_name');
    }
    public set identityProviderName(value: string) {
        this._identityProviderName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderNameInput() {
        return this._identityProviderName;
    }

    // identity_provider_type - computed: false, optional: false, required: true
    private _identityProviderType?: string; 
    public get identityProviderType() {
        return this.getStringAttribute('identity_provider_type');
    }
    public set identityProviderType(value: string) {
        this._identityProviderType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderTypeInput() {
        return this._identityProviderType;
    }

    // portal_arn - computed: true, optional: true, required: false
    private _portalArn?: string; 
    public get portalArn() {
        return this.getStringAttribute('portal_arn');
    }
    public set portalArn(value: string) {
        this._portalArn = value;
    }
    public resetPortalArn() {
        this._portalArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalArnInput() {
        return this._portalArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIdentityProvider.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIdentityProvider.TagProperty[] | cdktn.IResolvable) {
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
            identity_provider_details: cdktn.hashMapper(cdktn.stringToTerraform)(this._identityProviderDetails),
            identity_provider_name: cdktn.stringToTerraform(this._identityProviderName),
            identity_provider_type: cdktn.stringToTerraform(this._identityProviderType),
            portal_arn: cdktn.stringToTerraform(this._portalArn),
            tags: cdktn.listMapper(ccIdentityProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identity_provider_details: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._identityProviderDetails),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            identity_provider_name: {
                value: cdktn.stringToHclTerraform(this._identityProviderName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_provider_type: {
                value: cdktn.stringToHclTerraform(this._identityProviderType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_arn: {
                value: cdktn.stringToHclTerraform(this._portalArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIdentityProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIdentityProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIdentityProviderTagPropertyToTerraform(struct?: CcIdentityProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdentityProviderTagPropertyToHclTerraform(struct?: CcIdentityProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIdentityProvider {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#key CcIdentityProvider#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/workspacesweb_identity_provider#value CcIdentityProvider#value}
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
