// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStackProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#capabilities CcStack#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#description CcStack#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#disable_rollback CcStack#disable_rollback}
    */
    readonly disableRollback?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#enable_termination_protection CcStack#enable_termination_protection}
    */
    readonly enableTerminationProtection?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#notification_ar_ns CcStack#notification_ar_ns}
    */
    readonly notificationArNs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#parameters CcStack#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#role_arn CcStack#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#stack_name CcStack#stack_name}
    */
    readonly stackName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#stack_policy_body CcStack#stack_policy_body}
    */
    readonly stackPolicyBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#stack_policy_url CcStack#stack_policy_url}
    */
    readonly stackPolicyUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#stack_status_reason CcStack#stack_status_reason}
    */
    readonly stackStatusReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#tags CcStack#tags}
    */
    readonly tags?: CcStack.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#template_body CcStack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#template_url CcStack#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#timeout_in_minutes CcStack#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack awscc_cloudformation_stack}
*/
export class CcStack extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_stack";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStack resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStack to import
    * @param importFromId The id of the existing CcStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStack to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_stack", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack awscc_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStackProps
    */
    public constructor(scope: Construct, id: string, config: CcStackProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_stack',
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
        this._capabilities = config.capabilities;
        this._description = config.description;
        this._disableRollback = config.disableRollback;
        this._enableTerminationProtection = config.enableTerminationProtection;
        this._notificationArNs = config.notificationArNs;
        this._parameters = config.parameters;
        this._roleArn = config.roleArn;
        this._stackName = config.stackName;
        this._stackPolicyBody = config.stackPolicyBody;
        this._stackPolicyUrl = config.stackPolicyUrl;
        this._stackStatusReason = config.stackStatusReason;
        this._tags.internalValue = config.tags;
        this._templateBody = config.templateBody;
        this._templateUrl = config.templateUrl;
        this._timeoutInMinutes = config.timeoutInMinutes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capabilities - computed: true, optional: true, required: false
    private _capabilities?: string[]; 
    public get capabilities() {
        return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[]) {
        this._capabilities = value;
    }
    public resetCapabilities() {
        this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
        return this._capabilities;
    }

    // change_set_id - computed: true, optional: false, required: false
    public get changeSetId() {
        return this.getStringAttribute('change_set_id');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // disable_rollback - computed: true, optional: true, required: false
    private _disableRollback?: boolean | cdktn.IResolvable; 
    public get disableRollback() {
        return this.getBooleanAttribute('disable_rollback');
    }
    public set disableRollback(value: boolean | cdktn.IResolvable) {
        this._disableRollback = value;
    }
    public resetDisableRollback() {
        this._disableRollback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableRollbackInput() {
        return this._disableRollback;
    }

    // enable_termination_protection - computed: true, optional: true, required: false
    private _enableTerminationProtection?: boolean | cdktn.IResolvable; 
    public get enableTerminationProtection() {
        return this.getBooleanAttribute('enable_termination_protection');
    }
    public set enableTerminationProtection(value: boolean | cdktn.IResolvable) {
        this._enableTerminationProtection = value;
    }
    public resetEnableTerminationProtection() {
        this._enableTerminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTerminationProtectionInput() {
        return this._enableTerminationProtection;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_update_time - computed: true, optional: false, required: false
    public get lastUpdateTime() {
        return this.getStringAttribute('last_update_time');
    }

    // notification_ar_ns - computed: true, optional: true, required: false
    private _notificationArNs?: string[]; 
    public get notificationArNs() {
        return this.getListAttribute('notification_ar_ns');
    }
    public set notificationArNs(value: string[]) {
        this._notificationArNs = value;
    }
    public resetNotificationArNs() {
        this._notificationArNs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArNsInput() {
        return this._notificationArNs;
    }

    // outputs - computed: true, optional: false, required: false
    private _outputs = new CcStack.OutputsPropertyList(this, "outputs", false);
    public get outputs() {
        return this._outputs;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // parent_id - computed: true, optional: false, required: false
    public get parentId() {
        return this.getStringAttribute('parent_id');
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // root_id - computed: true, optional: false, required: false
    public get rootId() {
        return this.getStringAttribute('root_id');
    }

    // stack_id - computed: true, optional: false, required: false
    public get stackId() {
        return this.getStringAttribute('stack_id');
    }

    // stack_name - computed: false, optional: false, required: true
    private _stackName?: string; 
    public get stackName() {
        return this.getStringAttribute('stack_name');
    }
    public set stackName(value: string) {
        this._stackName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNameInput() {
        return this._stackName;
    }

    // stack_policy_body - computed: true, optional: true, required: false
    private _stackPolicyBody?: string; 
    public get stackPolicyBody() {
        return this.getStringAttribute('stack_policy_body');
    }
    public set stackPolicyBody(value: string) {
        this._stackPolicyBody = value;
    }
    public resetStackPolicyBody() {
        this._stackPolicyBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackPolicyBodyInput() {
        return this._stackPolicyBody;
    }

    // stack_policy_url - computed: true, optional: true, required: false
    private _stackPolicyUrl?: string; 
    public get stackPolicyUrl() {
        return this.getStringAttribute('stack_policy_url');
    }
    public set stackPolicyUrl(value: string) {
        this._stackPolicyUrl = value;
    }
    public resetStackPolicyUrl() {
        this._stackPolicyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackPolicyUrlInput() {
        return this._stackPolicyUrl;
    }

    // stack_status - computed: true, optional: false, required: false
    public get stackStatus() {
        return this.getStringAttribute('stack_status');
    }

    // stack_status_reason - computed: true, optional: true, required: false
    private _stackStatusReason?: string; 
    public get stackStatusReason() {
        return this.getStringAttribute('stack_status_reason');
    }
    public set stackStatusReason(value: string) {
        this._stackStatusReason = value;
    }
    public resetStackStatusReason() {
        this._stackStatusReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackStatusReasonInput() {
        return this._stackStatusReason;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStack.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStack.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    public resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // template_url - computed: true, optional: true, required: false
    private _templateUrl?: string; 
    public get templateUrl() {
        return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string) {
        this._templateUrl = value;
    }
    public resetTemplateUrl() {
        this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
        return this._templateUrl;
    }

    // timeout_in_minutes - computed: true, optional: true, required: false
    private _timeoutInMinutes?: number; 
    public get timeoutInMinutes() {
        return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number) {
        this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
        this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
        return this._timeoutInMinutes;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capabilities),
            description: cdktn.stringToTerraform(this._description),
            disable_rollback: cdktn.booleanToTerraform(this._disableRollback),
            enable_termination_protection: cdktn.booleanToTerraform(this._enableTerminationProtection),
            notification_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationArNs),
            parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            stack_name: cdktn.stringToTerraform(this._stackName),
            stack_policy_body: cdktn.stringToTerraform(this._stackPolicyBody),
            stack_policy_url: cdktn.stringToTerraform(this._stackPolicyUrl),
            stack_status_reason: cdktn.stringToTerraform(this._stackStatusReason),
            tags: cdktn.listMapper(ccStackTagPropertyToTerraform, false)(this._tags.internalValue),
            template_body: cdktn.stringToTerraform(this._templateBody),
            template_url: cdktn.stringToTerraform(this._templateUrl),
            timeout_in_minutes: cdktn.numberToTerraform(this._timeoutInMinutes),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capabilities: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capabilities),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_rollback: {
                value: cdktn.booleanToHclTerraform(this._disableRollback),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_termination_protection: {
                value: cdktn.booleanToHclTerraform(this._enableTerminationProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            notification_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationArNs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            parameters: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_name: {
                value: cdktn.stringToHclTerraform(this._stackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_policy_body: {
                value: cdktn.stringToHclTerraform(this._stackPolicyBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_policy_url: {
                value: cdktn.stringToHclTerraform(this._stackPolicyUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_status_reason: {
                value: cdktn.stringToHclTerraform(this._stackStatusReason),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStackTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStack.TagPropertyList",
            },
            template_body: {
                value: cdktn.stringToHclTerraform(this._templateBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_url: {
                value: cdktn.stringToHclTerraform(this._templateUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeout_in_minutes: {
                value: cdktn.numberToHclTerraform(this._timeoutInMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStackOutputsPropertyToTerraform(struct?: CcStack.OutputsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccStackOutputsPropertyToHclTerraform(struct?: CcStack.OutputsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccStackTagPropertyToTerraform(struct?: CcStack.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStackTagPropertyToHclTerraform(struct?: CcStack.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStack {
export interface OutputsProperty {
}
export class OutputsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): OutputsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // export_name - computed: true, optional: false, required: false
    public get exportName() {
        return this.getStringAttribute('export_name');
    }

    // output_key - computed: true, optional: false, required: false
    public get outputKey() {
        return this.getStringAttribute('output_key');
    }

    // output_value - computed: true, optional: false, required: false
    public get outputValue() {
        return this.getStringAttribute('output_value');
    }
}

export class OutputsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): OutputsPropertyOutputReference {
        return new OutputsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#key CcStack#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_stack#value CcStack#value}
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
