// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * The email addresses that agents can use when replying to or initiating email contacts
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#additional_email_addresses CcQueue#additional_email_addresses}
    */
    readonly additionalEmailAddresses?: CcQueue.EmailAddressProperty[] | cdktn.IResolvable;
    /**
    * The description of the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#description CcQueue#description}
    */
    readonly description?: string;
    /**
    * The identifier for the hours of operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#hours_of_operation_arn CcQueue#hours_of_operation_arn}
    */
    readonly hoursOfOperationArn: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#instance_arn CcQueue#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The maximum number of contacts that can be in the queue before it is considered full.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#max_contacts CcQueue#max_contacts}
    */
    readonly maxContacts?: number;
    /**
    * The name of the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#name CcQueue#name}
    */
    readonly name: string;
    /**
    * The outbound caller ID name, number, and outbound whisper flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#outbound_caller_config CcQueue#outbound_caller_config}
    */
    readonly outboundCallerConfig?: CcQueue.OutboundCallerConfigProperty;
    /**
    * The outbound email address ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#outbound_email_config CcQueue#outbound_email_config}
    */
    readonly outboundEmailConfig?: CcQueue.OutboundEmailConfigProperty;
    /**
    * The quick connects available to agents who are working the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#quick_connect_arns CcQueue#quick_connect_arns}
    */
    readonly quickConnectArns?: string[];
    /**
    * The status of the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#status CcQueue#status}
    */
    readonly status?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#tags CcQueue#tags}
    */
    readonly tags?: CcQueue.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue awscc_connect_queue}
*/
export class CcQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueue to import
    * @param importFromId The id of the existing CcQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue awscc_connect_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueProps
    */
    public constructor(scope: Construct, id: string, config: CcQueueProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_queue',
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
        this._additionalEmailAddresses.internalValue = config.additionalEmailAddresses;
        this._description = config.description;
        this._hoursOfOperationArn = config.hoursOfOperationArn;
        this._instanceArn = config.instanceArn;
        this._maxContacts = config.maxContacts;
        this._name = config.name;
        this._outboundCallerConfig.internalValue = config.outboundCallerConfig;
        this._outboundEmailConfig.internalValue = config.outboundEmailConfig;
        this._quickConnectArns = config.quickConnectArns;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_email_addresses - computed: true, optional: true, required: false
    private _additionalEmailAddresses = new CcQueue.EmailAddressPropertyList(this, "additional_email_addresses", false);
    public get additionalEmailAddresses() {
        return this._additionalEmailAddresses;
    }
    public putAdditionalEmailAddresses(value: CcQueue.EmailAddressProperty[] | cdktn.IResolvable) {
        this._additionalEmailAddresses.internalValue = value;
    }
    public resetAdditionalEmailAddresses() {
        this._additionalEmailAddresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalEmailAddressesInput() {
        return this._additionalEmailAddresses.internalValue;
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

    // hours_of_operation_arn - computed: false, optional: false, required: true
    private _hoursOfOperationArn?: string; 
    public get hoursOfOperationArn() {
        return this.getStringAttribute('hours_of_operation_arn');
    }
    public set hoursOfOperationArn(value: string) {
        this._hoursOfOperationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursOfOperationArnInput() {
        return this._hoursOfOperationArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // last_modified_region - computed: true, optional: false, required: false
    public get lastModifiedRegion() {
        return this.getStringAttribute('last_modified_region');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getNumberAttribute('last_modified_time');
    }

    // max_contacts - computed: true, optional: true, required: false
    private _maxContacts?: number; 
    public get maxContacts() {
        return this.getNumberAttribute('max_contacts');
    }
    public set maxContacts(value: number) {
        this._maxContacts = value;
    }
    public resetMaxContacts() {
        this._maxContacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxContactsInput() {
        return this._maxContacts;
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

    // outbound_caller_config - computed: true, optional: true, required: false
    private _outboundCallerConfig = new CcQueue.OutboundCallerConfigPropertyOutputReference(this, "outbound_caller_config");
    public get outboundCallerConfig() {
        return this._outboundCallerConfig;
    }
    public putOutboundCallerConfig(value: CcQueue.OutboundCallerConfigProperty) {
        this._outboundCallerConfig.internalValue = value;
    }
    public resetOutboundCallerConfig() {
        this._outboundCallerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCallerConfigInput() {
        return this._outboundCallerConfig.internalValue;
    }

    // outbound_email_config - computed: true, optional: true, required: false
    private _outboundEmailConfig = new CcQueue.OutboundEmailConfigPropertyOutputReference(this, "outbound_email_config");
    public get outboundEmailConfig() {
        return this._outboundEmailConfig;
    }
    public putOutboundEmailConfig(value: CcQueue.OutboundEmailConfigProperty) {
        this._outboundEmailConfig.internalValue = value;
    }
    public resetOutboundEmailConfig() {
        this._outboundEmailConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundEmailConfigInput() {
        return this._outboundEmailConfig.internalValue;
    }

    // queue_arn - computed: true, optional: false, required: false
    public get queueArn() {
        return this.getStringAttribute('queue_arn');
    }

    // quick_connect_arns - computed: true, optional: true, required: false
    private _quickConnectArns?: string[]; 
    public get quickConnectArns() {
        return this.getListAttribute('quick_connect_arns');
    }
    public set quickConnectArns(value: string[]) {
        this._quickConnectArns = value;
    }
    public resetQuickConnectArns() {
        this._quickConnectArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quickConnectArnsInput() {
        return this._quickConnectArns;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcQueue.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcQueue.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_email_addresses: cdktn.listMapper(ccQueueEmailAddressPropertyToTerraform, false)(this._additionalEmailAddresses.internalValue),
            description: cdktn.stringToTerraform(this._description),
            hours_of_operation_arn: cdktn.stringToTerraform(this._hoursOfOperationArn),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            max_contacts: cdktn.numberToTerraform(this._maxContacts),
            name: cdktn.stringToTerraform(this._name),
            outbound_caller_config: ccQueueOutboundCallerConfigPropertyToTerraform(this._outboundCallerConfig.internalValue),
            outbound_email_config: ccQueueOutboundEmailConfigPropertyToTerraform(this._outboundEmailConfig.internalValue),
            quick_connect_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._quickConnectArns),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccQueueTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_email_addresses: {
                value: cdktn.listMapperHcl(ccQueueEmailAddressPropertyToHclTerraform, false)(this._additionalEmailAddresses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcQueue.EmailAddressPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hours_of_operation_arn: {
                value: cdktn.stringToHclTerraform(this._hoursOfOperationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_contacts: {
                value: cdktn.numberToHclTerraform(this._maxContacts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outbound_caller_config: {
                value: ccQueueOutboundCallerConfigPropertyToHclTerraform(this._outboundCallerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQueue.OutboundCallerConfigProperty",
            },
            outbound_email_config: {
                value: ccQueueOutboundEmailConfigPropertyToHclTerraform(this._outboundEmailConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQueue.OutboundEmailConfigProperty",
            },
            quick_connect_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._quickConnectArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccQueueTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcQueue.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccQueueEmailAddressPropertyToTerraform(struct?: CcQueue.EmailAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_address_arn: cdktn.stringToTerraform(struct!.emailAddressArn),
    }
}


export function ccQueueEmailAddressPropertyToHclTerraform(struct?: CcQueue.EmailAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_address_arn: {
            value: cdktn.stringToHclTerraform(struct!.emailAddressArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueOutboundCallerConfigPropertyToTerraform(struct?: CcQueue.OutboundCallerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        outbound_caller_id_name: cdktn.stringToTerraform(struct!.outboundCallerIdName),
        outbound_caller_id_number_arn: cdktn.stringToTerraform(struct!.outboundCallerIdNumberArn),
        outbound_flow_arn: cdktn.stringToTerraform(struct!.outboundFlowArn),
    }
}


export function ccQueueOutboundCallerConfigPropertyToHclTerraform(struct?: CcQueue.OutboundCallerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        outbound_caller_id_name: {
            value: cdktn.stringToHclTerraform(struct!.outboundCallerIdName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outbound_caller_id_number_arn: {
            value: cdktn.stringToHclTerraform(struct!.outboundCallerIdNumberArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outbound_flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.outboundFlowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueOutboundEmailConfigPropertyToTerraform(struct?: CcQueue.OutboundEmailConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        outbound_email_address_id: cdktn.stringToTerraform(struct!.outboundEmailAddressId),
    }
}


export function ccQueueOutboundEmailConfigPropertyToHclTerraform(struct?: CcQueue.OutboundEmailConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        outbound_email_address_id: {
            value: cdktn.stringToHclTerraform(struct!.outboundEmailAddressId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueTagPropertyToTerraform(struct?: CcQueue.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccQueueTagPropertyToHclTerraform(struct?: CcQueue.TagProperty | cdktn.IResolvable): any {
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


export namespace CcQueue {
export interface EmailAddressProperty {
    /**
    * The Amazon Resource Name (ARN) of the email address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#email_address_arn CcQueue#email_address_arn}
    */
    readonly emailAddressArn?: string;
}
export class EmailAddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EmailAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailAddressArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddressArn = this._emailAddressArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailAddressArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailAddressArn = value.emailAddressArn;
        }
    }

    // email_address_arn - computed: true, optional: true, required: false
    private _emailAddressArn?: string; 
    public get emailAddressArn() {
        return this.getStringAttribute('email_address_arn');
    }
    public set emailAddressArn(value: string) {
        this._emailAddressArn = value;
    }
    public resetEmailAddressArn() {
        this._emailAddressArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressArnInput() {
        return this._emailAddressArn;
    }
}

export class EmailAddressPropertyList extends cdktn.ComplexList {
    public internalValue? : EmailAddressProperty[] | cdktn.IResolvable

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
    public get(index: number): EmailAddressPropertyOutputReference {
        return new EmailAddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OutboundCallerConfigProperty {
    /**
    * The caller ID name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#outbound_caller_id_name CcQueue#outbound_caller_id_name}
    */
    readonly outboundCallerIdName?: string;
    /**
    * The caller ID number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#outbound_caller_id_number_arn CcQueue#outbound_caller_id_number_arn}
    */
    readonly outboundCallerIdNumberArn?: string;
    /**
    * The outbound whisper flow to be used during an outbound call.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#outbound_flow_arn CcQueue#outbound_flow_arn}
    */
    readonly outboundFlowArn?: string;
}
export class OutboundCallerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutboundCallerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._outboundCallerIdName !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundCallerIdName = this._outboundCallerIdName;
        }
        if (this._outboundCallerIdNumberArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundCallerIdNumberArn = this._outboundCallerIdNumberArn;
        }
        if (this._outboundFlowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundFlowArn = this._outboundFlowArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutboundCallerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._outboundCallerIdName = undefined;
            this._outboundCallerIdNumberArn = undefined;
            this._outboundFlowArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._outboundCallerIdName = value.outboundCallerIdName;
            this._outboundCallerIdNumberArn = value.outboundCallerIdNumberArn;
            this._outboundFlowArn = value.outboundFlowArn;
        }
    }

    // outbound_caller_id_name - computed: true, optional: true, required: false
    private _outboundCallerIdName?: string; 
    public get outboundCallerIdName() {
        return this.getStringAttribute('outbound_caller_id_name');
    }
    public set outboundCallerIdName(value: string) {
        this._outboundCallerIdName = value;
    }
    public resetOutboundCallerIdName() {
        this._outboundCallerIdName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCallerIdNameInput() {
        return this._outboundCallerIdName;
    }

    // outbound_caller_id_number_arn - computed: true, optional: true, required: false
    private _outboundCallerIdNumberArn?: string; 
    public get outboundCallerIdNumberArn() {
        return this.getStringAttribute('outbound_caller_id_number_arn');
    }
    public set outboundCallerIdNumberArn(value: string) {
        this._outboundCallerIdNumberArn = value;
    }
    public resetOutboundCallerIdNumberArn() {
        this._outboundCallerIdNumberArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCallerIdNumberArnInput() {
        return this._outboundCallerIdNumberArn;
    }

    // outbound_flow_arn - computed: true, optional: true, required: false
    private _outboundFlowArn?: string; 
    public get outboundFlowArn() {
        return this.getStringAttribute('outbound_flow_arn');
    }
    public set outboundFlowArn(value: string) {
        this._outboundFlowArn = value;
    }
    public resetOutboundFlowArn() {
        this._outboundFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundFlowArnInput() {
        return this._outboundFlowArn;
    }
}
export interface OutboundEmailConfigProperty {
    /**
    * The email address connect resource ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#outbound_email_address_id CcQueue#outbound_email_address_id}
    */
    readonly outboundEmailAddressId?: string;
}
export class OutboundEmailConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutboundEmailConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._outboundEmailAddressId !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundEmailAddressId = this._outboundEmailAddressId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutboundEmailConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._outboundEmailAddressId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._outboundEmailAddressId = value.outboundEmailAddressId;
        }
    }

    // outbound_email_address_id - computed: true, optional: true, required: false
    private _outboundEmailAddressId?: string; 
    public get outboundEmailAddressId() {
        return this.getStringAttribute('outbound_email_address_id');
    }
    public set outboundEmailAddressId(value: string) {
        this._outboundEmailAddressId = value;
    }
    public resetOutboundEmailAddressId() {
        this._outboundEmailAddressId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundEmailAddressIdInput() {
        return this._outboundEmailAddressId;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#key CcQueue#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_queue#value CcQueue#value}
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
