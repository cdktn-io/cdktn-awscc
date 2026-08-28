// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQuickConnectProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the quick connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#description CcQuickConnect#description}
    */
    readonly description?: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#instance_arn CcQuickConnect#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The name of the quick connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#name CcQuickConnect#name}
    */
    readonly name: string;
    /**
    * Configuration settings for the quick connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#quick_connect_config CcQuickConnect#quick_connect_config}
    */
    readonly quickConnectConfig: CcQuickConnect.QuickConnectConfigProperty;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#tags CcQuickConnect#tags}
    */
    readonly tags?: CcQuickConnect.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect awscc_connect_quick_connect}
*/
export class CcQuickConnect extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_quick_connect";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQuickConnect resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQuickConnect to import
    * @param importFromId The id of the existing CcQuickConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQuickConnect to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_quick_connect", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect awscc_connect_quick_connect} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQuickConnectProps
    */
    public constructor(scope: Construct, id: string, config: CcQuickConnectProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_quick_connect',
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
        this._description = config.description;
        this._instanceArn = config.instanceArn;
        this._name = config.name;
        this._quickConnectConfig.internalValue = config.quickConnectConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // quick_connect_arn - computed: true, optional: false, required: false
    public get quickConnectArn() {
        return this.getStringAttribute('quick_connect_arn');
    }

    // quick_connect_config - computed: false, optional: false, required: true
    private _quickConnectConfig = new CcQuickConnect.QuickConnectConfigPropertyOutputReference(this, "quick_connect_config");
    public get quickConnectConfig() {
        return this._quickConnectConfig;
    }
    public putQuickConnectConfig(value: CcQuickConnect.QuickConnectConfigProperty) {
        this._quickConnectConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get quickConnectConfigInput() {
        return this._quickConnectConfig.internalValue;
    }

    // quick_connect_type - computed: true, optional: false, required: false
    public get quickConnectType() {
        return this.getStringAttribute('quick_connect_type');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcQuickConnect.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcQuickConnect.TagProperty[] | cdktn.IResolvable) {
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
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            name: cdktn.stringToTerraform(this._name),
            quick_connect_config: ccQuickConnectQuickConnectConfigPropertyToTerraform(this._quickConnectConfig.internalValue),
            tags: cdktn.listMapper(ccQuickConnectTagPropertyToTerraform, false)(this._tags.internalValue),
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
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
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
            quick_connect_config: {
                value: ccQuickConnectQuickConnectConfigPropertyToHclTerraform(this._quickConnectConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQuickConnect.QuickConnectConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccQuickConnectTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcQuickConnect.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccQuickConnectFlowQuickConnectConfigPropertyToTerraform(struct?: CcQuickConnect.FlowQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contact_flow_arn: cdktn.stringToTerraform(struct!.contactFlowArn),
    }
}


export function ccQuickConnectFlowQuickConnectConfigPropertyToHclTerraform(struct?: CcQuickConnect.FlowQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contact_flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.contactFlowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQuickConnectPhoneNumberQuickConnectConfigPropertyToTerraform(struct?: CcQuickConnect.PhoneNumberQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    }
}


export function ccQuickConnectPhoneNumberQuickConnectConfigPropertyToHclTerraform(struct?: CcQuickConnect.PhoneNumberQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        phone_number: {
            value: cdktn.stringToHclTerraform(struct!.phoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQuickConnectQueueQuickConnectConfigPropertyToTerraform(struct?: CcQuickConnect.QueueQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contact_flow_arn: cdktn.stringToTerraform(struct!.contactFlowArn),
        queue_arn: cdktn.stringToTerraform(struct!.queueArn),
    }
}


export function ccQuickConnectQueueQuickConnectConfigPropertyToHclTerraform(struct?: CcQuickConnect.QueueQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contact_flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.contactFlowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.queueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQuickConnectUserQuickConnectConfigPropertyToTerraform(struct?: CcQuickConnect.UserQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contact_flow_arn: cdktn.stringToTerraform(struct!.contactFlowArn),
        user_arn: cdktn.stringToTerraform(struct!.userArn),
    }
}


export function ccQuickConnectUserQuickConnectConfigPropertyToHclTerraform(struct?: CcQuickConnect.UserQuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contact_flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.contactFlowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_arn: {
            value: cdktn.stringToHclTerraform(struct!.userArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQuickConnectQuickConnectConfigPropertyToTerraform(struct?: CcQuickConnect.QuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_config: ccQuickConnectFlowQuickConnectConfigPropertyToTerraform(struct!.flowConfig),
        phone_config: ccQuickConnectPhoneNumberQuickConnectConfigPropertyToTerraform(struct!.phoneConfig),
        queue_config: ccQuickConnectQueueQuickConnectConfigPropertyToTerraform(struct!.queueConfig),
        quick_connect_type: cdktn.stringToTerraform(struct!.quickConnectType),
        user_config: ccQuickConnectUserQuickConnectConfigPropertyToTerraform(struct!.userConfig),
    }
}


export function ccQuickConnectQuickConnectConfigPropertyToHclTerraform(struct?: CcQuickConnect.QuickConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_config: {
            value: ccQuickConnectFlowQuickConnectConfigPropertyToHclTerraform(struct!.flowConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FlowQuickConnectConfigProperty",
        },
        phone_config: {
            value: ccQuickConnectPhoneNumberQuickConnectConfigPropertyToHclTerraform(struct!.phoneConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PhoneNumberQuickConnectConfigProperty",
        },
        queue_config: {
            value: ccQuickConnectQueueQuickConnectConfigPropertyToHclTerraform(struct!.queueConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "QueueQuickConnectConfigProperty",
        },
        quick_connect_type: {
            value: cdktn.stringToHclTerraform(struct!.quickConnectType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_config: {
            value: ccQuickConnectUserQuickConnectConfigPropertyToHclTerraform(struct!.userConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "UserQuickConnectConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQuickConnectTagPropertyToTerraform(struct?: CcQuickConnect.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccQuickConnectTagPropertyToHclTerraform(struct?: CcQuickConnect.TagProperty | cdktn.IResolvable): any {
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


export namespace CcQuickConnect {
export interface FlowQuickConnectConfigProperty {
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#contact_flow_arn CcQuickConnect#contact_flow_arn}
    */
    readonly contactFlowArn?: string;
}
export class FlowQuickConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowQuickConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contactFlowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactFlowArn = this._contactFlowArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowQuickConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contactFlowArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contactFlowArn = value.contactFlowArn;
        }
    }

    // contact_flow_arn - computed: true, optional: true, required: false
    private _contactFlowArn?: string; 
    public get contactFlowArn() {
        return this.getStringAttribute('contact_flow_arn');
    }
    public set contactFlowArn(value: string) {
        this._contactFlowArn = value;
    }
    public resetContactFlowArn() {
        this._contactFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowArnInput() {
        return this._contactFlowArn;
    }
}
export interface PhoneNumberQuickConnectConfigProperty {
    /**
    * The phone number in E.164 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#phone_number CcQuickConnect#phone_number}
    */
    readonly phoneNumber?: string;
}
export class PhoneNumberQuickConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PhoneNumberQuickConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._phoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.phoneNumber = this._phoneNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhoneNumberQuickConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._phoneNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._phoneNumber = value.phoneNumber;
        }
    }

    // phone_number - computed: true, optional: true, required: false
    private _phoneNumber?: string; 
    public get phoneNumber() {
        return this.getStringAttribute('phone_number');
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
    public resetPhoneNumber() {
        this._phoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phoneNumberInput() {
        return this._phoneNumber;
    }
}
export interface QueueQuickConnectConfigProperty {
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#contact_flow_arn CcQuickConnect#contact_flow_arn}
    */
    readonly contactFlowArn?: string;
    /**
    * The identifier for the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#queue_arn CcQuickConnect#queue_arn}
    */
    readonly queueArn?: string;
}
export class QueueQuickConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueueQuickConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contactFlowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactFlowArn = this._contactFlowArn;
        }
        if (this._queueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueArn = this._queueArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueueQuickConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contactFlowArn = undefined;
            this._queueArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contactFlowArn = value.contactFlowArn;
            this._queueArn = value.queueArn;
        }
    }

    // contact_flow_arn - computed: true, optional: true, required: false
    private _contactFlowArn?: string; 
    public get contactFlowArn() {
        return this.getStringAttribute('contact_flow_arn');
    }
    public set contactFlowArn(value: string) {
        this._contactFlowArn = value;
    }
    public resetContactFlowArn() {
        this._contactFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowArnInput() {
        return this._contactFlowArn;
    }

    // queue_arn - computed: true, optional: true, required: false
    private _queueArn?: string; 
    public get queueArn() {
        return this.getStringAttribute('queue_arn');
    }
    public set queueArn(value: string) {
        this._queueArn = value;
    }
    public resetQueueArn() {
        this._queueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueArnInput() {
        return this._queueArn;
    }
}
export interface UserQuickConnectConfigProperty {
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#contact_flow_arn CcQuickConnect#contact_flow_arn}
    */
    readonly contactFlowArn?: string;
    /**
    * The identifier of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#user_arn CcQuickConnect#user_arn}
    */
    readonly userArn?: string;
}
export class UserQuickConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserQuickConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contactFlowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactFlowArn = this._contactFlowArn;
        }
        if (this._userArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.userArn = this._userArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserQuickConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contactFlowArn = undefined;
            this._userArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contactFlowArn = value.contactFlowArn;
            this._userArn = value.userArn;
        }
    }

    // contact_flow_arn - computed: true, optional: true, required: false
    private _contactFlowArn?: string; 
    public get contactFlowArn() {
        return this.getStringAttribute('contact_flow_arn');
    }
    public set contactFlowArn(value: string) {
        this._contactFlowArn = value;
    }
    public resetContactFlowArn() {
        this._contactFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowArnInput() {
        return this._contactFlowArn;
    }

    // user_arn - computed: true, optional: true, required: false
    private _userArn?: string; 
    public get userArn() {
        return this.getStringAttribute('user_arn');
    }
    public set userArn(value: string) {
        this._userArn = value;
    }
    public resetUserArn() {
        this._userArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userArnInput() {
        return this._userArn;
    }
}
export interface QuickConnectConfigProperty {
    /**
    * The flow configuration. This is required only if QuickConnectType is FLOW.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#flow_config CcQuickConnect#flow_config}
    */
    readonly flowConfig?: FlowQuickConnectConfigProperty;
    /**
    * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#phone_config CcQuickConnect#phone_config}
    */
    readonly phoneConfig?: PhoneNumberQuickConnectConfigProperty;
    /**
    * The queue configuration. This is required only if QuickConnectType is QUEUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#queue_config CcQuickConnect#queue_config}
    */
    readonly queueConfig?: QueueQuickConnectConfigProperty;
    /**
    * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#quick_connect_type CcQuickConnect#quick_connect_type}
    */
    readonly quickConnectType: string;
    /**
    * The user configuration. This is required only if QuickConnectType is USER.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#user_config CcQuickConnect#user_config}
    */
    readonly userConfig?: UserQuickConnectConfigProperty;
}
export class QuickConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QuickConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowConfig = this._flowConfig?.internalValue;
        }
        if (this._phoneConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phoneConfig = this._phoneConfig?.internalValue;
        }
        if (this._queueConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueConfig = this._queueConfig?.internalValue;
        }
        if (this._quickConnectType !== undefined) {
            hasAnyValues = true;
            internalValueResult.quickConnectType = this._quickConnectType;
        }
        if (this._userConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userConfig = this._userConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QuickConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowConfig.internalValue = undefined;
            this._phoneConfig.internalValue = undefined;
            this._queueConfig.internalValue = undefined;
            this._quickConnectType = undefined;
            this._userConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowConfig.internalValue = value.flowConfig;
            this._phoneConfig.internalValue = value.phoneConfig;
            this._queueConfig.internalValue = value.queueConfig;
            this._quickConnectType = value.quickConnectType;
            this._userConfig.internalValue = value.userConfig;
        }
    }

    // flow_config - computed: true, optional: true, required: false
    private _flowConfig = new FlowQuickConnectConfigPropertyOutputReference(this, "flow_config");
    public get flowConfig() {
        return this._flowConfig;
    }
    public putFlowConfig(value: FlowQuickConnectConfigProperty) {
        this._flowConfig.internalValue = value;
    }
    public resetFlowConfig() {
        this._flowConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowConfigInput() {
        return this._flowConfig.internalValue;
    }

    // phone_config - computed: true, optional: true, required: false
    private _phoneConfig = new PhoneNumberQuickConnectConfigPropertyOutputReference(this, "phone_config");
    public get phoneConfig() {
        return this._phoneConfig;
    }
    public putPhoneConfig(value: PhoneNumberQuickConnectConfigProperty) {
        this._phoneConfig.internalValue = value;
    }
    public resetPhoneConfig() {
        this._phoneConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phoneConfigInput() {
        return this._phoneConfig.internalValue;
    }

    // queue_config - computed: true, optional: true, required: false
    private _queueConfig = new QueueQuickConnectConfigPropertyOutputReference(this, "queue_config");
    public get queueConfig() {
        return this._queueConfig;
    }
    public putQueueConfig(value: QueueQuickConnectConfigProperty) {
        this._queueConfig.internalValue = value;
    }
    public resetQueueConfig() {
        this._queueConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueConfigInput() {
        return this._queueConfig.internalValue;
    }

    // quick_connect_type - computed: false, optional: false, required: true
    private _quickConnectType?: string; 
    public get quickConnectType() {
        return this.getStringAttribute('quick_connect_type');
    }
    public set quickConnectType(value: string) {
        this._quickConnectType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get quickConnectTypeInput() {
        return this._quickConnectType;
    }

    // user_config - computed: true, optional: true, required: false
    private _userConfig = new UserQuickConnectConfigPropertyOutputReference(this, "user_config");
    public get userConfig() {
        return this._userConfig;
    }
    public putUserConfig(value: UserQuickConnectConfigProperty) {
        this._userConfig.internalValue = value;
    }
    public resetUserConfig() {
        this._userConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userConfigInput() {
        return this._userConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#key CcQuickConnect#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_quick_connect#value CcQuickConnect#value}
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
