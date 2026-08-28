// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAcceleratorProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether an accelerator is enabled. The value is true or false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#enabled CcAccelerator#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether flow logs are enabled for the accelerator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#flow_logs_enabled CcAccelerator#flow_logs_enabled}
    */
    readonly flowLogsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the Amazon S3 bucket for the flow logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#flow_logs_s3_bucket CcAccelerator#flow_logs_s3_bucket}
    */
    readonly flowLogsS3Bucket?: string;
    /**
    * The prefix for the location in the Amazon S3 bucket for the flow logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#flow_logs_s3_prefix CcAccelerator#flow_logs_s3_prefix}
    */
    readonly flowLogsS3Prefix?: string;
    /**
    * IP Address type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#ip_address_type CcAccelerator#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The IP addresses from BYOIP Prefix pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#ip_addresses CcAccelerator#ip_addresses}
    */
    readonly ipAddresses?: string[];
    /**
    * Name of accelerator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#name CcAccelerator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#tags CcAccelerator#tags}
    */
    readonly tags?: CcAccelerator.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator awscc_globalaccelerator_accelerator}
*/
export class CcAccelerator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_globalaccelerator_accelerator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccelerator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccelerator to import
    * @param importFromId The id of the existing CcAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccelerator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_globalaccelerator_accelerator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator awscc_globalaccelerator_accelerator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAcceleratorProps
    */
    public constructor(scope: Construct, id: string, config: CcAcceleratorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_globalaccelerator_accelerator',
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
        this._enabled = config.enabled;
        this._flowLogsEnabled = config.flowLogsEnabled;
        this._flowLogsS3Bucket = config.flowLogsS3Bucket;
        this._flowLogsS3Prefix = config.flowLogsS3Prefix;
        this._ipAddressType = config.ipAddressType;
        this._ipAddresses = config.ipAddresses;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accelerator_arn - computed: true, optional: false, required: false
    public get acceleratorArn() {
        return this.getStringAttribute('accelerator_arn');
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }

    // dual_stack_dns_name - computed: true, optional: false, required: false
    public get dualStackDnsName() {
        return this.getStringAttribute('dual_stack_dns_name');
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // flow_logs_enabled - computed: true, optional: true, required: false
    private _flowLogsEnabled?: boolean | cdktn.IResolvable; 
    public get flowLogsEnabled() {
        return this.getBooleanAttribute('flow_logs_enabled');
    }
    public set flowLogsEnabled(value: boolean | cdktn.IResolvable) {
        this._flowLogsEnabled = value;
    }
    public resetFlowLogsEnabled() {
        this._flowLogsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowLogsEnabledInput() {
        return this._flowLogsEnabled;
    }

    // flow_logs_s3_bucket - computed: true, optional: true, required: false
    private _flowLogsS3Bucket?: string; 
    public get flowLogsS3Bucket() {
        return this.getStringAttribute('flow_logs_s3_bucket');
    }
    public set flowLogsS3Bucket(value: string) {
        this._flowLogsS3Bucket = value;
    }
    public resetFlowLogsS3Bucket() {
        this._flowLogsS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowLogsS3BucketInput() {
        return this._flowLogsS3Bucket;
    }

    // flow_logs_s3_prefix - computed: true, optional: true, required: false
    private _flowLogsS3Prefix?: string; 
    public get flowLogsS3Prefix() {
        return this.getStringAttribute('flow_logs_s3_prefix');
    }
    public set flowLogsS3Prefix(value: string) {
        this._flowLogsS3Prefix = value;
    }
    public resetFlowLogsS3Prefix() {
        this._flowLogsS3Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowLogsS3PrefixInput() {
        return this._flowLogsS3Prefix;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // ip_addresses - computed: true, optional: true, required: false
    private _ipAddresses?: string[]; 
    public get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
    public set ipAddresses(value: string[]) {
        this._ipAddresses = value;
    }
    public resetIpAddresses() {
        this._ipAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressesInput() {
        return this._ipAddresses;
    }

    // ipv_4_addresses - computed: true, optional: false, required: false
    public get ipv4Addresses() {
        return this.getListAttribute('ipv_4_addresses');
    }

    // ipv_6_addresses - computed: true, optional: false, required: false
    public get ipv6Addresses() {
        return this.getListAttribute('ipv_6_addresses');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAccelerator.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAccelerator.TagProperty[] | cdktn.IResolvable) {
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
            enabled: cdktn.booleanToTerraform(this._enabled),
            flow_logs_enabled: cdktn.booleanToTerraform(this._flowLogsEnabled),
            flow_logs_s3_bucket: cdktn.stringToTerraform(this._flowLogsS3Bucket),
            flow_logs_s3_prefix: cdktn.stringToTerraform(this._flowLogsS3Prefix),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            ip_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ipAddresses),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccAcceleratorTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            flow_logs_enabled: {
                value: cdktn.booleanToHclTerraform(this._flowLogsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            flow_logs_s3_bucket: {
                value: cdktn.stringToHclTerraform(this._flowLogsS3Bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flow_logs_s3_prefix: {
                value: cdktn.stringToHclTerraform(this._flowLogsS3Prefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_addresses: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ipAddresses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAcceleratorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAccelerator.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAcceleratorTagPropertyToTerraform(struct?: CcAccelerator.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAcceleratorTagPropertyToHclTerraform(struct?: CcAccelerator.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAccelerator {
export interface TagProperty {
    /**
    * Key of the tag. Value can be 1 to 127 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#key CcAccelerator#key}
    */
    readonly key?: string;
    /**
    * Value for the tag. Value can be 1 to 255 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/globalaccelerator_accelerator#value CcAccelerator#value}
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
