// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIPAMPoolProps extends cdktn.TerraformMetaArguments {
    /**
    * The address family of the address space in this pool. Either IPv4 or IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#address_family CcIPAMPool#address_family}
    */
    readonly addressFamily: string;
    /**
    * The default netmask length for allocations made from this pool. This value is used when the netmask length of an allocation isn't specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length CcIPAMPool#allocation_default_netmask_length}
    */
    readonly allocationDefaultNetmaskLength?: number;
    /**
    * The maximum allowed netmask length for allocations made from this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length CcIPAMPool#allocation_max_netmask_length}
    */
    readonly allocationMaxNetmaskLength?: number;
    /**
    * The minimum allowed netmask length for allocations made from this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length CcIPAMPool#allocation_min_netmask_length}
    */
    readonly allocationMinNetmaskLength?: number;
    /**
    * When specified, an allocation will not be allowed unless a resource has a matching set of tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_resource_tags CcIPAMPool#allocation_resource_tags}
    */
    readonly allocationResourceTags?: CcIPAMPool.TagProperty[] | cdktn.IResolvable;
    /**
    * Determines what to do if IPAM discovers resources that haven't been assigned an allocation. If set to true, an allocation will be made automatically.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#auto_import CcIPAMPool#auto_import}
    */
    readonly autoImport?: boolean | cdktn.IResolvable;
    /**
    * Limits which service in Amazon Web Services that the pool can be used in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#aws_service CcIPAMPool#aws_service}
    */
    readonly awsService?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#description CcIPAMPool#description}
    */
    readonly description?: string;
    /**
    * The Id of the scope this pool is a part of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#ipam_scope_id CcIPAMPool#ipam_scope_id}
    */
    readonly ipamScopeId: string;
    /**
    * The region of this pool. If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#locale CcIPAMPool#locale}
    */
    readonly locale?: string;
    /**
    * A list of cidrs representing the address space available for allocation in this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#provisioned_cidrs CcIPAMPool#provisioned_cidrs}
    */
    readonly provisionedCidrs?: CcIPAMPool.ProvisionedCidrProperty[] | cdktn.IResolvable;
    /**
    * The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#public_ip_source CcIPAMPool#public_ip_source}
    */
    readonly publicIpSource?: string;
    /**
    * Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#publicly_advertisable CcIPAMPool#publicly_advertisable}
    */
    readonly publiclyAdvertisable?: boolean | cdktn.IResolvable;
    /**
    * The Id of this pool's source. If set, all space provisioned in this pool must be free space provisioned in the parent pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id CcIPAMPool#source_ipam_pool_id}
    */
    readonly sourceIpamPoolId?: string;
    /**
    * The resource associated with this pool's space. Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#source_resource CcIPAMPool#source_resource}
    */
    readonly sourceResource?: CcIPAMPool.SourceResourceProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#tags CcIPAMPool#tags}
    */
    readonly tags?: CcIPAMPool.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool awscc_ec2_ipam_pool}
*/
export class CcIPAMPool extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ipam_pool";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIPAMPool resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIPAMPool to import
    * @param importFromId The id of the existing CcIPAMPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIPAMPool to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_pool", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool awscc_ec2_ipam_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIPAMPoolProps
    */
    public constructor(scope: Construct, id: string, config: CcIPAMPoolProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ipam_pool',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._addressFamily = config.addressFamily;
        this._allocationDefaultNetmaskLength = config.allocationDefaultNetmaskLength;
        this._allocationMaxNetmaskLength = config.allocationMaxNetmaskLength;
        this._allocationMinNetmaskLength = config.allocationMinNetmaskLength;
        this._allocationResourceTags.internalValue = config.allocationResourceTags;
        this._autoImport = config.autoImport;
        this._awsService = config.awsService;
        this._description = config.description;
        this._ipamScopeId = config.ipamScopeId;
        this._locale = config.locale;
        this._provisionedCidrs.internalValue = config.provisionedCidrs;
        this._publicIpSource = config.publicIpSource;
        this._publiclyAdvertisable = config.publiclyAdvertisable;
        this._sourceIpamPoolId = config.sourceIpamPoolId;
        this._sourceResource.internalValue = config.sourceResource;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
        return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
        this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
        return this._addressFamily;
    }

    // allocation_default_netmask_length - computed: true, optional: true, required: false
    private _allocationDefaultNetmaskLength?: number; 
    public get allocationDefaultNetmaskLength() {
        return this.getNumberAttribute('allocation_default_netmask_length');
    }
    public set allocationDefaultNetmaskLength(value: number) {
        this._allocationDefaultNetmaskLength = value;
    }
    public resetAllocationDefaultNetmaskLength() {
        this._allocationDefaultNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationDefaultNetmaskLengthInput() {
        return this._allocationDefaultNetmaskLength;
    }

    // allocation_max_netmask_length - computed: true, optional: true, required: false
    private _allocationMaxNetmaskLength?: number; 
    public get allocationMaxNetmaskLength() {
        return this.getNumberAttribute('allocation_max_netmask_length');
    }
    public set allocationMaxNetmaskLength(value: number) {
        this._allocationMaxNetmaskLength = value;
    }
    public resetAllocationMaxNetmaskLength() {
        this._allocationMaxNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationMaxNetmaskLengthInput() {
        return this._allocationMaxNetmaskLength;
    }

    // allocation_min_netmask_length - computed: true, optional: true, required: false
    private _allocationMinNetmaskLength?: number; 
    public get allocationMinNetmaskLength() {
        return this.getNumberAttribute('allocation_min_netmask_length');
    }
    public set allocationMinNetmaskLength(value: number) {
        this._allocationMinNetmaskLength = value;
    }
    public resetAllocationMinNetmaskLength() {
        this._allocationMinNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationMinNetmaskLengthInput() {
        return this._allocationMinNetmaskLength;
    }

    // allocation_resource_tags - computed: true, optional: true, required: false
    private _allocationResourceTags = new CcIPAMPool.TagPropertyList(this, "allocation_resource_tags", true);
    public get allocationResourceTags() {
        return this._allocationResourceTags;
    }
    public putAllocationResourceTags(value: CcIPAMPool.TagProperty[] | cdktn.IResolvable) {
        this._allocationResourceTags.internalValue = value;
    }
    public resetAllocationResourceTags() {
        this._allocationResourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationResourceTagsInput() {
        return this._allocationResourceTags.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_import - computed: true, optional: true, required: false
    private _autoImport?: boolean | cdktn.IResolvable; 
    public get autoImport() {
        return this.getBooleanAttribute('auto_import');
    }
    public set autoImport(value: boolean | cdktn.IResolvable) {
        this._autoImport = value;
    }
    public resetAutoImport() {
        this._autoImport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoImportInput() {
        return this._autoImport;
    }

    // aws_service - computed: true, optional: true, required: false
    private _awsService?: string; 
    public get awsService() {
        return this.getStringAttribute('aws_service');
    }
    public set awsService(value: string) {
        this._awsService = value;
    }
    public resetAwsService() {
        this._awsService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsServiceInput() {
        return this._awsService;
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

    // ipam_arn - computed: true, optional: false, required: false
    public get ipamArn() {
        return this.getStringAttribute('ipam_arn');
    }

    // ipam_pool_id - computed: true, optional: false, required: false
    public get ipamPoolId() {
        return this.getStringAttribute('ipam_pool_id');
    }

    // ipam_scope_arn - computed: true, optional: false, required: false
    public get ipamScopeArn() {
        return this.getStringAttribute('ipam_scope_arn');
    }

    // ipam_scope_id - computed: false, optional: false, required: true
    private _ipamScopeId?: string; 
    public get ipamScopeId() {
        return this.getStringAttribute('ipam_scope_id');
    }
    public set ipamScopeId(value: string) {
        this._ipamScopeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamScopeIdInput() {
        return this._ipamScopeId;
    }

    // ipam_scope_type - computed: true, optional: false, required: false
    public get ipamScopeType() {
        return this.getStringAttribute('ipam_scope_type');
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
    }

    // pool_depth - computed: true, optional: false, required: false
    public get poolDepth() {
        return this.getNumberAttribute('pool_depth');
    }

    // provisioned_cidrs - computed: true, optional: true, required: false
    private _provisionedCidrs = new CcIPAMPool.ProvisionedCidrPropertyList(this, "provisioned_cidrs", true);
    public get provisionedCidrs() {
        return this._provisionedCidrs;
    }
    public putProvisionedCidrs(value: CcIPAMPool.ProvisionedCidrProperty[] | cdktn.IResolvable) {
        this._provisionedCidrs.internalValue = value;
    }
    public resetProvisionedCidrs() {
        this._provisionedCidrs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedCidrsInput() {
        return this._provisionedCidrs.internalValue;
    }

    // public_ip_source - computed: true, optional: true, required: false
    private _publicIpSource?: string; 
    public get publicIpSource() {
        return this.getStringAttribute('public_ip_source');
    }
    public set publicIpSource(value: string) {
        this._publicIpSource = value;
    }
    public resetPublicIpSource() {
        this._publicIpSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpSourceInput() {
        return this._publicIpSource;
    }

    // publicly_advertisable - computed: true, optional: true, required: false
    private _publiclyAdvertisable?: boolean | cdktn.IResolvable; 
    public get publiclyAdvertisable() {
        return this.getBooleanAttribute('publicly_advertisable');
    }
    public set publiclyAdvertisable(value: boolean | cdktn.IResolvable) {
        this._publiclyAdvertisable = value;
    }
    public resetPubliclyAdvertisable() {
        this._publiclyAdvertisable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAdvertisableInput() {
        return this._publiclyAdvertisable;
    }

    // source_ipam_pool_id - computed: true, optional: true, required: false
    private _sourceIpamPoolId?: string; 
    public get sourceIpamPoolId() {
        return this.getStringAttribute('source_ipam_pool_id');
    }
    public set sourceIpamPoolId(value: string) {
        this._sourceIpamPoolId = value;
    }
    public resetSourceIpamPoolId() {
        this._sourceIpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIpamPoolIdInput() {
        return this._sourceIpamPoolId;
    }

    // source_resource - computed: true, optional: true, required: false
    private _sourceResource = new CcIPAMPool.SourceResourcePropertyOutputReference(this, "source_resource");
    public get sourceResource() {
        return this._sourceResource;
    }
    public putSourceResource(value: CcIPAMPool.SourceResourceProperty) {
        this._sourceResource.internalValue = value;
    }
    public resetSourceResource() {
        this._sourceResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceResourceInput() {
        return this._sourceResource.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_message - computed: true, optional: false, required: false
    public get stateMessage() {
        return this.getStringAttribute('state_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIPAMPool.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIPAMPool.TagsProperty[] | cdktn.IResolvable) {
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
            address_family: cdktn.stringToTerraform(this._addressFamily),
            allocation_default_netmask_length: cdktn.numberToTerraform(this._allocationDefaultNetmaskLength),
            allocation_max_netmask_length: cdktn.numberToTerraform(this._allocationMaxNetmaskLength),
            allocation_min_netmask_length: cdktn.numberToTerraform(this._allocationMinNetmaskLength),
            allocation_resource_tags: cdktn.listMapper(ccIPAMPoolTagPropertyToTerraform, false)(this._allocationResourceTags.internalValue),
            auto_import: cdktn.booleanToTerraform(this._autoImport),
            aws_service: cdktn.stringToTerraform(this._awsService),
            description: cdktn.stringToTerraform(this._description),
            ipam_scope_id: cdktn.stringToTerraform(this._ipamScopeId),
            locale: cdktn.stringToTerraform(this._locale),
            provisioned_cidrs: cdktn.listMapper(ccIPAMPoolProvisionedCidrPropertyToTerraform, false)(this._provisionedCidrs.internalValue),
            public_ip_source: cdktn.stringToTerraform(this._publicIpSource),
            publicly_advertisable: cdktn.booleanToTerraform(this._publiclyAdvertisable),
            source_ipam_pool_id: cdktn.stringToTerraform(this._sourceIpamPoolId),
            source_resource: ccIPAMPoolSourceResourcePropertyToTerraform(this._sourceResource.internalValue),
            tags: cdktn.listMapper(ccIPAMPoolTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            address_family: {
                value: cdktn.stringToHclTerraform(this._addressFamily),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allocation_default_netmask_length: {
                value: cdktn.numberToHclTerraform(this._allocationDefaultNetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allocation_max_netmask_length: {
                value: cdktn.numberToHclTerraform(this._allocationMaxNetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allocation_min_netmask_length: {
                value: cdktn.numberToHclTerraform(this._allocationMinNetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allocation_resource_tags: {
                value: cdktn.listMapperHcl(ccIPAMPoolTagPropertyToHclTerraform, false)(this._allocationResourceTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMPool.TagPropertyList",
            },
            auto_import: {
                value: cdktn.booleanToHclTerraform(this._autoImport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            aws_service: {
                value: cdktn.stringToHclTerraform(this._awsService),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipam_scope_id: {
                value: cdktn.stringToHclTerraform(this._ipamScopeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locale: {
                value: cdktn.stringToHclTerraform(this._locale),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioned_cidrs: {
                value: cdktn.listMapperHcl(ccIPAMPoolProvisionedCidrPropertyToHclTerraform, false)(this._provisionedCidrs.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMPool.ProvisionedCidrPropertyList",
            },
            public_ip_source: {
                value: cdktn.stringToHclTerraform(this._publicIpSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publicly_advertisable: {
                value: cdktn.booleanToHclTerraform(this._publiclyAdvertisable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            source_ipam_pool_id: {
                value: cdktn.stringToHclTerraform(this._sourceIpamPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_resource: {
                value: ccIPAMPoolSourceResourcePropertyToHclTerraform(this._sourceResource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIPAMPool.SourceResourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIPAMPoolTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIPAMPool.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIPAMPoolTagPropertyToTerraform(struct?: CcIPAMPool.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMPoolTagPropertyToHclTerraform(struct?: CcIPAMPool.TagProperty | cdktn.IResolvable): any {
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


export function ccIPAMPoolProvisionedCidrPropertyToTerraform(struct?: CcIPAMPool.ProvisionedCidrProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccIPAMPoolProvisionedCidrPropertyToHclTerraform(struct?: CcIPAMPool.ProvisionedCidrProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMPoolSourceResourcePropertyToTerraform(struct?: CcIPAMPool.SourceResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
        resource_owner: cdktn.stringToTerraform(struct!.resourceOwner),
        resource_region: cdktn.stringToTerraform(struct!.resourceRegion),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
    }
}


export function ccIPAMPoolSourceResourcePropertyToHclTerraform(struct?: CcIPAMPool.SourceResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_owner: {
            value: cdktn.stringToHclTerraform(struct!.resourceOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_region: {
            value: cdktn.stringToHclTerraform(struct!.resourceRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIPAMPoolTagsPropertyToTerraform(struct?: CcIPAMPool.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIPAMPoolTagsPropertyToHclTerraform(struct?: CcIPAMPool.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcIPAMPool {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#key CcIPAMPool#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#value CcIPAMPool#value}
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
export interface ProvisionedCidrProperty {
    /**
    * Represents a single IPv4 or IPv6 CIDR
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#cidr CcIPAMPool#cidr}
    */
    readonly cidr?: string;
}
export class ProvisionedCidrPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProvisionedCidrProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedCidrProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
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
}

export class ProvisionedCidrPropertyList extends cdktn.ComplexList {
    public internalValue? : ProvisionedCidrProperty[] | cdktn.IResolvable

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
    public get(index: number): ProvisionedCidrPropertyOutputReference {
        return new ProvisionedCidrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_id CcIPAMPool#resource_id}
    */
    readonly resourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_owner CcIPAMPool#resource_owner}
    */
    readonly resourceOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_region CcIPAMPool#resource_region}
    */
    readonly resourceRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_type CcIPAMPool#resource_type}
    */
    readonly resourceType?: string;
}
export class SourceResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._resourceOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceOwner = this._resourceOwner;
        }
        if (this._resourceRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceRegion = this._resourceRegion;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceId = undefined;
            this._resourceOwner = undefined;
            this._resourceRegion = undefined;
            this._resourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceId = value.resourceId;
            this._resourceOwner = value.resourceOwner;
            this._resourceRegion = value.resourceRegion;
            this._resourceType = value.resourceType;
        }
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // resource_owner - computed: true, optional: true, required: false
    private _resourceOwner?: string; 
    public get resourceOwner() {
        return this.getStringAttribute('resource_owner');
    }
    public set resourceOwner(value: string) {
        this._resourceOwner = value;
    }
    public resetResourceOwner() {
        this._resourceOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceOwnerInput() {
        return this._resourceOwner;
    }

    // resource_region - computed: true, optional: true, required: false
    private _resourceRegion?: string; 
    public get resourceRegion() {
        return this.getStringAttribute('resource_region');
    }
    public set resourceRegion(value: string) {
        this._resourceRegion = value;
    }
    public resetResourceRegion() {
        this._resourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRegionInput() {
        return this._resourceRegion;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#key CcIPAMPool#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#value CcIPAMPool#value}
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
