// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProtectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The automatic application layer DDoS mitigation settings for a Protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#application_layer_automatic_response_configuration CcProtection#application_layer_automatic_response_configuration}
    */
    readonly applicationLayerAutomaticResponseConfiguration?: CcProtection.ApplicationLayerAutomaticResponseConfigurationProperty;
    /**
    * The Amazon Resource Names (ARNs) of the health check to associate with the protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#health_check_arns CcProtection#health_check_arns}
    */
    readonly healthCheckArns?: string[];
    /**
    * Friendly name for the Protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#name CcProtection#name}
    */
    readonly name: string;
    /**
    * The ARN (Amazon Resource Name) of the resource to be protected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#resource_arn CcProtection#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * One or more tag key-value pairs for the Protection object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#tags CcProtection#tags}
    */
    readonly tags?: CcProtection.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection awscc_shield_protection}
*/
export class CcProtection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_shield_protection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProtection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProtection to import
    * @param importFromId The id of the existing CcProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProtection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_shield_protection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection awscc_shield_protection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProtectionProps
    */
    public constructor(scope: Construct, id: string, config: CcProtectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_shield_protection',
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
        this._applicationLayerAutomaticResponseConfiguration.internalValue = config.applicationLayerAutomaticResponseConfiguration;
        this._healthCheckArns = config.healthCheckArns;
        this._name = config.name;
        this._resourceArn = config.resourceArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_layer_automatic_response_configuration - computed: true, optional: true, required: false
    private _applicationLayerAutomaticResponseConfiguration = new CcProtection.ApplicationLayerAutomaticResponseConfigurationPropertyOutputReference(this, "application_layer_automatic_response_configuration");
    public get applicationLayerAutomaticResponseConfiguration() {
        return this._applicationLayerAutomaticResponseConfiguration;
    }
    public putApplicationLayerAutomaticResponseConfiguration(value: CcProtection.ApplicationLayerAutomaticResponseConfigurationProperty) {
        this._applicationLayerAutomaticResponseConfiguration.internalValue = value;
    }
    public resetApplicationLayerAutomaticResponseConfiguration() {
        this._applicationLayerAutomaticResponseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationLayerAutomaticResponseConfigurationInput() {
        return this._applicationLayerAutomaticResponseConfiguration.internalValue;
    }

    // health_check_arns - computed: true, optional: true, required: false
    private _healthCheckArns?: string[]; 
    public get healthCheckArns() {
        return this.getListAttribute('health_check_arns');
    }
    public set healthCheckArns(value: string[]) {
        this._healthCheckArns = value;
    }
    public resetHealthCheckArns() {
        this._healthCheckArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckArnsInput() {
        return this._healthCheckArns;
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

    // protection_arn - computed: true, optional: false, required: false
    public get protectionArn() {
        return this.getStringAttribute('protection_arn');
    }

    // protection_id - computed: true, optional: false, required: false
    public get protectionId() {
        return this.getStringAttribute('protection_id');
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProtection.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProtection.TagProperty[] | cdktn.IResolvable) {
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
            application_layer_automatic_response_configuration: ccProtectionApplicationLayerAutomaticResponseConfigurationPropertyToTerraform(this._applicationLayerAutomaticResponseConfiguration.internalValue),
            health_check_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._healthCheckArns),
            name: cdktn.stringToTerraform(this._name),
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
            tags: cdktn.listMapper(ccProtectionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_layer_automatic_response_configuration: {
                value: ccProtectionApplicationLayerAutomaticResponseConfigurationPropertyToHclTerraform(this._applicationLayerAutomaticResponseConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProtection.ApplicationLayerAutomaticResponseConfigurationProperty",
            },
            health_check_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._healthCheckArns),
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
            resource_arn: {
                value: cdktn.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProtectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProtection.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProtectionActionPropertyToTerraform(struct?: CcProtection.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block: cdktn.stringToTerraform(struct!.block),
        count: cdktn.stringToTerraform(struct!.count),
    }
}


export function ccProtectionActionPropertyToHclTerraform(struct?: CcProtection.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block: {
            value: cdktn.stringToHclTerraform(struct!.block),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        count: {
            value: cdktn.stringToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProtectionApplicationLayerAutomaticResponseConfigurationPropertyToTerraform(struct?: CcProtection.ApplicationLayerAutomaticResponseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: ccProtectionActionPropertyToTerraform(struct!.action),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccProtectionApplicationLayerAutomaticResponseConfigurationPropertyToHclTerraform(struct?: CcProtection.ApplicationLayerAutomaticResponseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: ccProtectionActionPropertyToHclTerraform(struct!.action),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionProperty",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProtectionTagPropertyToTerraform(struct?: CcProtection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProtectionTagPropertyToHclTerraform(struct?: CcProtection.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProtection {
export interface ActionProperty {
    /**
    * Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.
    * You must specify exactly one action, either `Block` or `Count`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#block CcProtection#block}
    */
    readonly block?: string;
    /**
    * Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.
    * You must specify exactly one action, either `Block` or `Count`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#count CcProtection#count}
    */
    readonly count?: string;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._block !== undefined) {
            hasAnyValues = true;
            internalValueResult.block = this._block;
        }
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._block = undefined;
            this._count = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._block = value.block;
            this._count = value.count;
        }
    }

    // block - computed: true, optional: true, required: false
    private _block?: string; 
    public get block() {
        return this.getStringAttribute('block');
    }
    public set block(value: string) {
        this._block = value;
    }
    public resetBlock() {
        this._block = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockInput() {
        return this._block;
    }

    // count - computed: true, optional: true, required: false
    private _count?: string; 
    public get count() {
        return this.getStringAttribute('count');
    }
    public set count(value: string) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
    }
}
export interface ApplicationLayerAutomaticResponseConfigurationProperty {
    /**
    * Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#action CcProtection#action}
    */
    readonly action?: ActionProperty;
    /**
    * Indicates whether automatic application layer DDoS mitigation is enabled for the protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#status CcProtection#status}
    */
    readonly status?: string;
}
export class ApplicationLayerAutomaticResponseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationLayerAutomaticResponseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationLayerAutomaticResponseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action.internalValue = value.action;
            this._status = value.status;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action = new ActionPropertyOutputReference(this, "action");
    public get action() {
        return this._action;
    }
    public putAction(value: ActionProperty) {
        this._action.internalValue = value;
    }
    public resetAction() {
        this._action.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action.internalValue;
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
}
export interface TagProperty {
    /**
    * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#key CcProtection#key}
    */
    readonly key?: string;
    /**
    * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#value CcProtection#value}
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
