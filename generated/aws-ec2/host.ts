// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHostProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the Outpost hardware asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#asset_id CcHost#asset_id}
    */
    readonly assetId?: string;
    /**
    * Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#auto_placement CcHost#auto_placement}
    */
    readonly autoPlacement?: string;
    /**
    * The Availability Zone in which to allocate the Dedicated Host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#availability_zone CcHost#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#host_maintenance CcHost#host_maintenance}
    */
    readonly hostMaintenance?: string;
    /**
    * Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#host_recovery CcHost#host_recovery}
    */
    readonly hostRecovery?: string;
    /**
    * Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#instance_family CcHost#instance_family}
    */
    readonly instanceFamily?: string;
    /**
    * Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#instance_type CcHost#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#outpost_arn CcHost#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Any tags assigned to the Host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#tags CcHost#tags}
    */
    readonly tags?: CcHost.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host awscc_ec2_host}
*/
export class CcHost extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_host";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHost resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHost to import
    * @param importFromId The id of the existing CcHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHost to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_host", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host awscc_ec2_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHostProps
    */
    public constructor(scope: Construct, id: string, config: CcHostProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_host',
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
        this._assetId = config.assetId;
        this._autoPlacement = config.autoPlacement;
        this._availabilityZone = config.availabilityZone;
        this._hostMaintenance = config.hostMaintenance;
        this._hostRecovery = config.hostRecovery;
        this._instanceFamily = config.instanceFamily;
        this._instanceType = config.instanceType;
        this._outpostArn = config.outpostArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // auto_placement - computed: true, optional: true, required: false
    private _autoPlacement?: string; 
    public get autoPlacement() {
        return this.getStringAttribute('auto_placement');
    }
    public set autoPlacement(value: string) {
        this._autoPlacement = value;
    }
    public resetAutoPlacement() {
        this._autoPlacement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPlacementInput() {
        return this._autoPlacement;
    }

    // availability_zone - computed: false, optional: false, required: true
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // host_id - computed: true, optional: false, required: false
    public get hostId() {
        return this.getStringAttribute('host_id');
    }

    // host_maintenance - computed: true, optional: true, required: false
    private _hostMaintenance?: string; 
    public get hostMaintenance() {
        return this.getStringAttribute('host_maintenance');
    }
    public set hostMaintenance(value: string) {
        this._hostMaintenance = value;
    }
    public resetHostMaintenance() {
        this._hostMaintenance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostMaintenanceInput() {
        return this._hostMaintenance;
    }

    // host_recovery - computed: true, optional: true, required: false
    private _hostRecovery?: string; 
    public get hostRecovery() {
        return this.getStringAttribute('host_recovery');
    }
    public set hostRecovery(value: string) {
        this._hostRecovery = value;
    }
    public resetHostRecovery() {
        this._hostRecovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostRecoveryInput() {
        return this._hostRecovery;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_family - computed: true, optional: true, required: false
    private _instanceFamily?: string; 
    public get instanceFamily() {
        return this.getStringAttribute('instance_family');
    }
    public set instanceFamily(value: string) {
        this._instanceFamily = value;
    }
    public resetInstanceFamily() {
        this._instanceFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceFamilyInput() {
        return this._instanceFamily;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // outpost_arn - computed: true, optional: true, required: false
    private _outpostArn?: string; 
    public get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string) {
        this._outpostArn = value;
    }
    public resetOutpostArn() {
        this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
        return this._outpostArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcHost.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcHost.TagProperty[] | cdktn.IResolvable) {
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
            asset_id: cdktn.stringToTerraform(this._assetId),
            auto_placement: cdktn.stringToTerraform(this._autoPlacement),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            host_maintenance: cdktn.stringToTerraform(this._hostMaintenance),
            host_recovery: cdktn.stringToTerraform(this._hostRecovery),
            instance_family: cdktn.stringToTerraform(this._instanceFamily),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            outpost_arn: cdktn.stringToTerraform(this._outpostArn),
            tags: cdktn.listMapper(ccHostTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            asset_id: {
                value: cdktn.stringToHclTerraform(this._assetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_placement: {
                value: cdktn.stringToHclTerraform(this._autoPlacement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host_maintenance: {
                value: cdktn.stringToHclTerraform(this._hostMaintenance),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host_recovery: {
                value: cdktn.stringToHclTerraform(this._hostRecovery),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_family: {
                value: cdktn.stringToHclTerraform(this._instanceFamily),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outpost_arn: {
                value: cdktn.stringToHclTerraform(this._outpostArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccHostTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcHost.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHostTagPropertyToTerraform(struct?: CcHost.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccHostTagPropertyToHclTerraform(struct?: CcHost.TagProperty | cdktn.IResolvable): any {
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


export namespace CcHost {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#key CcHost#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_host#value CcHost#value}
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
