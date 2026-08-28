// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayMulticastDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * The options for the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#options CcTransitGatewayMulticastDomain#options}
    */
    readonly options?: CcTransitGatewayMulticastDomain.OptionsProperty;
    /**
    * The tags for the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#tags CcTransitGatewayMulticastDomain#tags}
    */
    readonly tags?: CcTransitGatewayMulticastDomain.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#transit_gateway_id CcTransitGatewayMulticastDomain#transit_gateway_id}
    */
    readonly transitGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain awscc_ec2_transit_gateway_multicast_domain}
*/
export class CcTransitGatewayMulticastDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_multicast_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayMulticastDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayMulticastDomain to import
    * @param importFromId The id of the existing CcTransitGatewayMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayMulticastDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_multicast_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain awscc_ec2_transit_gateway_multicast_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayMulticastDomainProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayMulticastDomainProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_multicast_domain',
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
        this._options.internalValue = config.options;
        this._tags.internalValue = config.tags;
        this._transitGatewayId = config.transitGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // options - computed: true, optional: true, required: false
    private _options = new CcTransitGatewayMulticastDomain.OptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: CcTransitGatewayMulticastDomain.OptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTransitGatewayMulticastDomain.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTransitGatewayMulticastDomain.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_gateway_id - computed: false, optional: false, required: true
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
        this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
        return this._transitGatewayId;
    }

    // transit_gateway_multicast_domain_arn - computed: true, optional: false, required: false
    public get transitGatewayMulticastDomainArn() {
        return this.getStringAttribute('transit_gateway_multicast_domain_arn');
    }

    // transit_gateway_multicast_domain_id - computed: true, optional: false, required: false
    public get transitGatewayMulticastDomainId() {
        return this.getStringAttribute('transit_gateway_multicast_domain_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            options: ccTransitGatewayMulticastDomainOptionsPropertyToTerraform(this._options.internalValue),
            tags: cdktn.listMapper(ccTransitGatewayMulticastDomainTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            options: {
                value: ccTransitGatewayMulticastDomainOptionsPropertyToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTransitGatewayMulticastDomain.OptionsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTransitGatewayMulticastDomainTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTransitGatewayMulticastDomain.TagPropertyList",
            },
            transit_gateway_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransitGatewayMulticastDomainOptionsPropertyToTerraform(struct?: CcTransitGatewayMulticastDomain.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_accept_shared_associations: cdktn.stringToTerraform(struct!.autoAcceptSharedAssociations),
        igmpv_2_support: cdktn.stringToTerraform(struct!.igmpv2Support),
        static_sources_support: cdktn.stringToTerraform(struct!.staticSourcesSupport),
    }
}


export function ccTransitGatewayMulticastDomainOptionsPropertyToHclTerraform(struct?: CcTransitGatewayMulticastDomain.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_accept_shared_associations: {
            value: cdktn.stringToHclTerraform(struct!.autoAcceptSharedAssociations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        igmpv_2_support: {
            value: cdktn.stringToHclTerraform(struct!.igmpv2Support),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        static_sources_support: {
            value: cdktn.stringToHclTerraform(struct!.staticSourcesSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTransitGatewayMulticastDomainTagPropertyToTerraform(struct?: CcTransitGatewayMulticastDomain.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTransitGatewayMulticastDomainTagPropertyToHclTerraform(struct?: CcTransitGatewayMulticastDomain.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTransitGatewayMulticastDomain {
export interface OptionsProperty {
    /**
    * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#auto_accept_shared_associations CcTransitGatewayMulticastDomain#auto_accept_shared_associations}
    */
    readonly autoAcceptSharedAssociations?: string;
    /**
    * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#igmpv_2_support CcTransitGatewayMulticastDomain#igmpv_2_support}
    */
    readonly igmpv2Support?: string;
    /**
    * Indicates whether support for statically configuring transit gateway multicast group sources is turned on. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#static_sources_support CcTransitGatewayMulticastDomain#static_sources_support}
    */
    readonly staticSourcesSupport?: string;
}
export class OptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoAcceptSharedAssociations !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoAcceptSharedAssociations = this._autoAcceptSharedAssociations;
        }
        if (this._igmpv2Support !== undefined) {
            hasAnyValues = true;
            internalValueResult.igmpv2Support = this._igmpv2Support;
        }
        if (this._staticSourcesSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticSourcesSupport = this._staticSourcesSupport;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoAcceptSharedAssociations = undefined;
            this._igmpv2Support = undefined;
            this._staticSourcesSupport = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoAcceptSharedAssociations = value.autoAcceptSharedAssociations;
            this._igmpv2Support = value.igmpv2Support;
            this._staticSourcesSupport = value.staticSourcesSupport;
        }
    }

    // auto_accept_shared_associations - computed: true, optional: true, required: false
    private _autoAcceptSharedAssociations?: string; 
    public get autoAcceptSharedAssociations() {
        return this.getStringAttribute('auto_accept_shared_associations');
    }
    public set autoAcceptSharedAssociations(value: string) {
        this._autoAcceptSharedAssociations = value;
    }
    public resetAutoAcceptSharedAssociations() {
        this._autoAcceptSharedAssociations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoAcceptSharedAssociationsInput() {
        return this._autoAcceptSharedAssociations;
    }

    // igmpv_2_support - computed: true, optional: true, required: false
    private _igmpv2Support?: string; 
    public get igmpv2Support() {
        return this.getStringAttribute('igmpv_2_support');
    }
    public set igmpv2Support(value: string) {
        this._igmpv2Support = value;
    }
    public resetIgmpv2Support() {
        this._igmpv2Support = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get igmpv2SupportInput() {
        return this._igmpv2Support;
    }

    // static_sources_support - computed: true, optional: true, required: false
    private _staticSourcesSupport?: string; 
    public get staticSourcesSupport() {
        return this.getStringAttribute('static_sources_support');
    }
    public set staticSourcesSupport(value: string) {
        this._staticSourcesSupport = value;
    }
    public resetStaticSourcesSupport() {
        this._staticSourcesSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticSourcesSupportInput() {
        return this._staticSourcesSupport;
    }
}
export interface TagProperty {
    /**
    * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#key CcTransitGatewayMulticastDomain#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_domain#value CcTransitGatewayMulticastDomain#value}
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
