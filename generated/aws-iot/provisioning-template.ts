// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProvisioningTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#description CcProvisioningTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#enabled CcProvisioningTemplate#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#pre_provisioning_hook CcProvisioningTemplate#pre_provisioning_hook}
    */
    readonly preProvisioningHook?: CcProvisioningTemplate.ProvisioningHookProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#provisioning_role_arn CcProvisioningTemplate#provisioning_role_arn}
    */
    readonly provisioningRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#tags CcProvisioningTemplate#tags}
    */
    readonly tags?: CcProvisioningTemplate.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_body CcProvisioningTemplate#template_body}
    */
    readonly templateBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_name CcProvisioningTemplate#template_name}
    */
    readonly templateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#template_type CcProvisioningTemplate#template_type}
    */
    readonly templateType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template awscc_iot_provisioning_template}
*/
export class CcProvisioningTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_provisioning_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProvisioningTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProvisioningTemplate to import
    * @param importFromId The id of the existing CcProvisioningTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProvisioningTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_provisioning_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template awscc_iot_provisioning_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProvisioningTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcProvisioningTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_provisioning_template',
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
        this._description = config.description;
        this._enabled = config.enabled;
        this._preProvisioningHook.internalValue = config.preProvisioningHook;
        this._provisioningRoleArn = config.provisioningRoleArn;
        this._tags.internalValue = config.tags;
        this._templateBody = config.templateBody;
        this._templateName = config.templateName;
        this._templateType = config.templateType;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // pre_provisioning_hook - computed: true, optional: true, required: false
    private _preProvisioningHook = new CcProvisioningTemplate.ProvisioningHookPropertyOutputReference(this, "pre_provisioning_hook");
    public get preProvisioningHook() {
        return this._preProvisioningHook;
    }
    public putPreProvisioningHook(value: CcProvisioningTemplate.ProvisioningHookProperty) {
        this._preProvisioningHook.internalValue = value;
    }
    public resetPreProvisioningHook() {
        this._preProvisioningHook.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preProvisioningHookInput() {
        return this._preProvisioningHook.internalValue;
    }

    // provisioning_role_arn - computed: false, optional: false, required: true
    private _provisioningRoleArn?: string; 
    public get provisioningRoleArn() {
        return this.getStringAttribute('provisioning_role_arn');
    }
    public set provisioningRoleArn(value: string) {
        this._provisioningRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningRoleArnInput() {
        return this._provisioningRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProvisioningTemplate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProvisioningTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_arn - computed: true, optional: false, required: false
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }

    // template_body - computed: false, optional: false, required: true
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // template_name - computed: true, optional: true, required: false
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    public resetTemplateName() {
        this._templateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }

    // template_type - computed: true, optional: true, required: false
    private _templateType?: string; 
    public get templateType() {
        return this.getStringAttribute('template_type');
    }
    public set templateType(value: string) {
        this._templateType = value;
    }
    public resetTemplateType() {
        this._templateType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateTypeInput() {
        return this._templateType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            enabled: cdktn.booleanToTerraform(this._enabled),
            pre_provisioning_hook: ccProvisioningTemplateProvisioningHookPropertyToTerraform(this._preProvisioningHook.internalValue),
            provisioning_role_arn: cdktn.stringToTerraform(this._provisioningRoleArn),
            tags: cdktn.listMapper(ccProvisioningTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
            template_body: cdktn.stringToTerraform(this._templateBody),
            template_name: cdktn.stringToTerraform(this._templateName),
            template_type: cdktn.stringToTerraform(this._templateType),
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
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pre_provisioning_hook: {
                value: ccProvisioningTemplateProvisioningHookPropertyToHclTerraform(this._preProvisioningHook.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProvisioningTemplate.ProvisioningHookProperty",
            },
            provisioning_role_arn: {
                value: cdktn.stringToHclTerraform(this._provisioningRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProvisioningTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcProvisioningTemplate.TagPropertyList",
            },
            template_body: {
                value: cdktn.stringToHclTerraform(this._templateBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_name: {
                value: cdktn.stringToHclTerraform(this._templateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_type: {
                value: cdktn.stringToHclTerraform(this._templateType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProvisioningTemplateProvisioningHookPropertyToTerraform(struct?: CcProvisioningTemplate.ProvisioningHookProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload_version: cdktn.stringToTerraform(struct!.payloadVersion),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccProvisioningTemplateProvisioningHookPropertyToHclTerraform(struct?: CcProvisioningTemplate.ProvisioningHookProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload_version: {
            value: cdktn.stringToHclTerraform(struct!.payloadVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProvisioningTemplateTagPropertyToTerraform(struct?: CcProvisioningTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProvisioningTemplateTagPropertyToHclTerraform(struct?: CcProvisioningTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProvisioningTemplate {
export interface ProvisioningHookProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#payload_version CcProvisioningTemplate#payload_version}
    */
    readonly payloadVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#target_arn CcProvisioningTemplate#target_arn}
    */
    readonly targetArn?: string;
}
export class ProvisioningHookPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisioningHookProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payloadVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadVersion = this._payloadVersion;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisioningHookProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payloadVersion = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payloadVersion = value.payloadVersion;
            this._targetArn = value.targetArn;
        }
    }

    // payload_version - computed: true, optional: true, required: false
    private _payloadVersion?: string; 
    public get payloadVersion() {
        return this.getStringAttribute('payload_version');
    }
    public set payloadVersion(value: string) {
        this._payloadVersion = value;
    }
    public resetPayloadVersion() {
        this._payloadVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadVersionInput() {
        return this._payloadVersion;
    }

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#key CcProvisioningTemplate#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_provisioning_template#value CcProvisioningTemplate#value}
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
