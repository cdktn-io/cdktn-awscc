// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceNetworkResourceAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#private_dns_enabled CcServiceNetworkResourceAssociation#private_dns_enabled}
    */
    readonly privateDnsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#resource_configuration_id CcServiceNetworkResourceAssociation#resource_configuration_id}
    */
    readonly resourceConfigurationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#service_network_id CcServiceNetworkResourceAssociation#service_network_id}
    */
    readonly serviceNetworkId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#tags CcServiceNetworkResourceAssociation#tags}
    */
    readonly tags?: CcServiceNetworkResourceAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association awscc_vpclattice_service_network_resource_association}
*/
export class CcServiceNetworkResourceAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_vpclattice_service_network_resource_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceNetworkResourceAssociation to import
    * @param importFromId The id of the existing CcServiceNetworkResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceNetworkResourceAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_service_network_resource_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association awscc_vpclattice_service_network_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceNetworkResourceAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceNetworkResourceAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_vpclattice_service_network_resource_association',
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
        this._privateDnsEnabled = config.privateDnsEnabled;
        this._resourceConfigurationId = config.resourceConfigurationId;
        this._serviceNetworkId = config.serviceNetworkId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // private_dns_enabled - computed: true, optional: true, required: false
    private _privateDnsEnabled?: boolean | cdktn.IResolvable; 
    public get privateDnsEnabled() {
        return this.getBooleanAttribute('private_dns_enabled');
    }
    public set privateDnsEnabled(value: boolean | cdktn.IResolvable) {
        this._privateDnsEnabled = value;
    }
    public resetPrivateDnsEnabled() {
        this._privateDnsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsEnabledInput() {
        return this._privateDnsEnabled;
    }

    // resource_configuration_id - computed: true, optional: true, required: false
    private _resourceConfigurationId?: string; 
    public get resourceConfigurationId() {
        return this.getStringAttribute('resource_configuration_id');
    }
    public set resourceConfigurationId(value: string) {
        this._resourceConfigurationId = value;
    }
    public resetResourceConfigurationId() {
        this._resourceConfigurationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationIdInput() {
        return this._resourceConfigurationId;
    }

    // service_network_id - computed: true, optional: true, required: false
    private _serviceNetworkId?: string; 
    public get serviceNetworkId() {
        return this.getStringAttribute('service_network_id');
    }
    public set serviceNetworkId(value: string) {
        this._serviceNetworkId = value;
    }
    public resetServiceNetworkId() {
        this._serviceNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNetworkIdInput() {
        return this._serviceNetworkId;
    }

    // service_network_resource_association_id - computed: true, optional: false, required: false
    public get serviceNetworkResourceAssociationId() {
        return this.getStringAttribute('service_network_resource_association_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServiceNetworkResourceAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServiceNetworkResourceAssociation.TagProperty[] | cdktn.IResolvable) {
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
            private_dns_enabled: cdktn.booleanToTerraform(this._privateDnsEnabled),
            resource_configuration_id: cdktn.stringToTerraform(this._resourceConfigurationId),
            service_network_id: cdktn.stringToTerraform(this._serviceNetworkId),
            tags: cdktn.listMapper(ccServiceNetworkResourceAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            private_dns_enabled: {
                value: cdktn.booleanToHclTerraform(this._privateDnsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            resource_configuration_id: {
                value: cdktn.stringToHclTerraform(this._resourceConfigurationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_network_id: {
                value: cdktn.stringToHclTerraform(this._serviceNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceNetworkResourceAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceNetworkResourceAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceNetworkResourceAssociationTagPropertyToTerraform(struct?: CcServiceNetworkResourceAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceNetworkResourceAssociationTagPropertyToHclTerraform(struct?: CcServiceNetworkResourceAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServiceNetworkResourceAssociation {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#key CcServiceNetworkResourceAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/vpclattice_service_network_resource_association#value CcServiceNetworkResourceAssociation#value}
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
