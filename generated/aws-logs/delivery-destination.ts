// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeliveryDestinationProps extends cdktn.TerraformMetaArguments {
    /**
    * IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.
    * 
    * The policy must be in JSON string format.
    * 
    * Length Constraints: Maximum length of 51200
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_policy CcDeliveryDestination#delivery_destination_policy}
    */
    readonly deliveryDestinationPolicy?: CcDeliveryDestination.DestinationPolicyProperty;
    /**
    * Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_type CcDeliveryDestination#delivery_destination_type}
    */
    readonly deliveryDestinationType?: string;
    /**
    * The ARN of the Amazon Web Services destination that this delivery destination represents. That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#destination_resource_arn CcDeliveryDestination#destination_resource_arn}
    */
    readonly destinationResourceArn?: string;
    /**
    * The name of this delivery destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#name CcDeliveryDestination#name}
    */
    readonly name: string;
    /**
    * The format of the logs that are sent to this delivery destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#output_format CcDeliveryDestination#output_format}
    */
    readonly outputFormat?: string;
    /**
    * The tags that have been assigned to this delivery destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#tags CcDeliveryDestination#tags}
    */
    readonly tags?: CcDeliveryDestination.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination awscc_logs_delivery_destination}
*/
export class CcDeliveryDestination extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_delivery_destination";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeliveryDestination resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeliveryDestination to import
    * @param importFromId The id of the existing CcDeliveryDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeliveryDestination to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_delivery_destination", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination awscc_logs_delivery_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeliveryDestinationProps
    */
    public constructor(scope: Construct, id: string, config: CcDeliveryDestinationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_delivery_destination',
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
        this._deliveryDestinationPolicy.internalValue = config.deliveryDestinationPolicy;
        this._deliveryDestinationType = config.deliveryDestinationType;
        this._destinationResourceArn = config.destinationResourceArn;
        this._name = config.name;
        this._outputFormat = config.outputFormat;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // delivery_destination_policy - computed: true, optional: true, required: false
    private _deliveryDestinationPolicy = new CcDeliveryDestination.DestinationPolicyPropertyOutputReference(this, "delivery_destination_policy");
    public get deliveryDestinationPolicy() {
        return this._deliveryDestinationPolicy;
    }
    public putDeliveryDestinationPolicy(value: CcDeliveryDestination.DestinationPolicyProperty) {
        this._deliveryDestinationPolicy.internalValue = value;
    }
    public resetDeliveryDestinationPolicy() {
        this._deliveryDestinationPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryDestinationPolicyInput() {
        return this._deliveryDestinationPolicy.internalValue;
    }

    // delivery_destination_type - computed: true, optional: true, required: false
    private _deliveryDestinationType?: string; 
    public get deliveryDestinationType() {
        return this.getStringAttribute('delivery_destination_type');
    }
    public set deliveryDestinationType(value: string) {
        this._deliveryDestinationType = value;
    }
    public resetDeliveryDestinationType() {
        this._deliveryDestinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryDestinationTypeInput() {
        return this._deliveryDestinationType;
    }

    // destination_resource_arn - computed: true, optional: true, required: false
    private _destinationResourceArn?: string; 
    public get destinationResourceArn() {
        return this.getStringAttribute('destination_resource_arn');
    }
    public set destinationResourceArn(value: string) {
        this._destinationResourceArn = value;
    }
    public resetDestinationResourceArn() {
        this._destinationResourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationResourceArnInput() {
        return this._destinationResourceArn;
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

    // output_format - computed: true, optional: true, required: false
    private _outputFormat?: string; 
    public get outputFormat() {
        return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string) {
        this._outputFormat = value;
    }
    public resetOutputFormat() {
        this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
        return this._outputFormat;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDeliveryDestination.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDeliveryDestination.TagProperty[] | cdktn.IResolvable) {
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
            delivery_destination_policy: ccDeliveryDestinationDestinationPolicyPropertyToTerraform(this._deliveryDestinationPolicy.internalValue),
            delivery_destination_type: cdktn.stringToTerraform(this._deliveryDestinationType),
            destination_resource_arn: cdktn.stringToTerraform(this._destinationResourceArn),
            name: cdktn.stringToTerraform(this._name),
            output_format: cdktn.stringToTerraform(this._outputFormat),
            tags: cdktn.listMapper(ccDeliveryDestinationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            delivery_destination_policy: {
                value: ccDeliveryDestinationDestinationPolicyPropertyToHclTerraform(this._deliveryDestinationPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeliveryDestination.DestinationPolicyProperty",
            },
            delivery_destination_type: {
                value: cdktn.stringToHclTerraform(this._deliveryDestinationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_resource_arn: {
                value: cdktn.stringToHclTerraform(this._destinationResourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            output_format: {
                value: cdktn.stringToHclTerraform(this._outputFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeliveryDestinationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDeliveryDestination.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeliveryDestinationDestinationPolicyPropertyToTerraform(struct?: CcDeliveryDestination.DestinationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_destination_name: cdktn.stringToTerraform(struct!.deliveryDestinationName),
        delivery_destination_policy: cdktn.stringToTerraform(struct!.deliveryDestinationPolicy),
    }
}


export function ccDeliveryDestinationDestinationPolicyPropertyToHclTerraform(struct?: CcDeliveryDestination.DestinationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_destination_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryDestinationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delivery_destination_policy: {
            value: cdktn.stringToHclTerraform(struct!.deliveryDestinationPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeliveryDestinationTagPropertyToTerraform(struct?: CcDeliveryDestination.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeliveryDestinationTagPropertyToHclTerraform(struct?: CcDeliveryDestination.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDeliveryDestination {
export interface DestinationPolicyProperty {
    /**
    * The name of the delivery destination to assign this policy to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_name CcDeliveryDestination#delivery_destination_name}
    */
    readonly deliveryDestinationName?: string;
    /**
    * The contents of the policy attached to the delivery destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_policy CcDeliveryDestination#delivery_destination_policy}
    */
    readonly deliveryDestinationPolicy?: string;
}
export class DestinationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryDestinationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryDestinationName = this._deliveryDestinationName;
        }
        if (this._deliveryDestinationPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryDestinationPolicy = this._deliveryDestinationPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryDestinationName = undefined;
            this._deliveryDestinationPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryDestinationName = value.deliveryDestinationName;
            this._deliveryDestinationPolicy = value.deliveryDestinationPolicy;
        }
    }

    // delivery_destination_name - computed: true, optional: true, required: false
    private _deliveryDestinationName?: string; 
    public get deliveryDestinationName() {
        return this.getStringAttribute('delivery_destination_name');
    }
    public set deliveryDestinationName(value: string) {
        this._deliveryDestinationName = value;
    }
    public resetDeliveryDestinationName() {
        this._deliveryDestinationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryDestinationNameInput() {
        return this._deliveryDestinationName;
    }

    // delivery_destination_policy - computed: true, optional: true, required: false
    private _deliveryDestinationPolicy?: string; 
    public get deliveryDestinationPolicy() {
        return this.getStringAttribute('delivery_destination_policy');
    }
    public set deliveryDestinationPolicy(value: string) {
        this._deliveryDestinationPolicy = value;
    }
    public resetDeliveryDestinationPolicy() {
        this._deliveryDestinationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryDestinationPolicyInput() {
        return this._deliveryDestinationPolicy;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#key CcDeliveryDestination#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#value CcDeliveryDestination#value}
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
