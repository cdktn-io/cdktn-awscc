// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoggingConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#log_destination_configs CcLoggingConfiguration#log_destination_configs}
    */
    readonly logDestinationConfigs: string[];
    /**
    * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#logging_filter CcLoggingConfiguration#logging_filter}
    */
    readonly loggingFilter?: CcLoggingConfiguration.LoggingFilterProperty;
    /**
    * The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#redacted_fields CcLoggingConfiguration#redacted_fields}
    */
    readonly redactedFields?: CcLoggingConfiguration.FieldToMatchProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#resource_arn CcLoggingConfiguration#resource_arn}
    */
    readonly resourceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration}
*/
export class CcLoggingConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wafv2_logging_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLoggingConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLoggingConfiguration to import
    * @param importFromId The id of the existing CcLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLoggingConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wafv2_logging_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoggingConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcLoggingConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wafv2_logging_configuration',
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
        this._logDestinationConfigs = config.logDestinationConfigs;
        this._loggingFilter.internalValue = config.loggingFilter;
        this._redactedFields.internalValue = config.redactedFields;
        this._resourceArn = config.resourceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_destination_configs - computed: false, optional: false, required: true
    private _logDestinationConfigs?: string[]; 
    public get logDestinationConfigs() {
        return this.getListAttribute('log_destination_configs');
    }
    public set logDestinationConfigs(value: string[]) {
        this._logDestinationConfigs = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationConfigsInput() {
        return this._logDestinationConfigs;
    }

    // logging_filter - computed: true, optional: true, required: false
    private _loggingFilter = new CcLoggingConfiguration.LoggingFilterPropertyOutputReference(this, "logging_filter");
    public get loggingFilter() {
        return this._loggingFilter;
    }
    public putLoggingFilter(value: CcLoggingConfiguration.LoggingFilterProperty) {
        this._loggingFilter.internalValue = value;
    }
    public resetLoggingFilter() {
        this._loggingFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingFilterInput() {
        return this._loggingFilter.internalValue;
    }

    // managed_by_firewall_manager - computed: true, optional: false, required: false
    public get managedByFirewallManager() {
        return this.getBooleanAttribute('managed_by_firewall_manager');
    }

    // redacted_fields - computed: true, optional: true, required: false
    private _redactedFields = new CcLoggingConfiguration.FieldToMatchPropertyList(this, "redacted_fields", false);
    public get redactedFields() {
        return this._redactedFields;
    }
    public putRedactedFields(value: CcLoggingConfiguration.FieldToMatchProperty[] | cdktn.IResolvable) {
        this._redactedFields.internalValue = value;
    }
    public resetRedactedFields() {
        this._redactedFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactedFieldsInput() {
        return this._redactedFields.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            log_destination_configs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logDestinationConfigs),
            logging_filter: ccLoggingConfigurationLoggingFilterPropertyToTerraform(this._loggingFilter.internalValue),
            redacted_fields: cdktn.listMapper(ccLoggingConfigurationFieldToMatchPropertyToTerraform, false)(this._redactedFields.internalValue),
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            log_destination_configs: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logDestinationConfigs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            logging_filter: {
                value: ccLoggingConfigurationLoggingFilterPropertyToHclTerraform(this._loggingFilter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoggingConfiguration.LoggingFilterProperty",
            },
            redacted_fields: {
                value: cdktn.listMapperHcl(ccLoggingConfigurationFieldToMatchPropertyToHclTerraform, false)(this._redactedFields.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoggingConfiguration.FieldToMatchPropertyList",
            },
            resource_arn: {
                value: cdktn.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLoggingConfigurationActionConditionPropertyToTerraform(struct?: CcLoggingConfiguration.ActionConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
    }
}


export function ccLoggingConfigurationActionConditionPropertyToHclTerraform(struct?: CcLoggingConfiguration.ActionConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationLabelNameConditionPropertyToTerraform(struct?: CcLoggingConfiguration.LabelNameConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        label_name: cdktn.stringToTerraform(struct!.labelName),
    }
}


export function ccLoggingConfigurationLabelNameConditionPropertyToHclTerraform(struct?: CcLoggingConfiguration.LabelNameConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        label_name: {
            value: cdktn.stringToHclTerraform(struct!.labelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationConditionPropertyToTerraform(struct?: CcLoggingConfiguration.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_condition: ccLoggingConfigurationActionConditionPropertyToTerraform(struct!.actionCondition),
        label_name_condition: ccLoggingConfigurationLabelNameConditionPropertyToTerraform(struct!.labelNameCondition),
    }
}


export function ccLoggingConfigurationConditionPropertyToHclTerraform(struct?: CcLoggingConfiguration.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_condition: {
            value: ccLoggingConfigurationActionConditionPropertyToHclTerraform(struct!.actionCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionConditionProperty",
        },
        label_name_condition: {
            value: ccLoggingConfigurationLabelNameConditionPropertyToHclTerraform(struct!.labelNameCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "LabelNameConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationFilterPropertyToTerraform(struct?: CcLoggingConfiguration.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior: cdktn.stringToTerraform(struct!.behavior),
        conditions: cdktn.listMapper(ccLoggingConfigurationConditionPropertyToTerraform, false)(struct!.conditions),
        requirement: cdktn.stringToTerraform(struct!.requirement),
    }
}


export function ccLoggingConfigurationFilterPropertyToHclTerraform(struct?: CcLoggingConfiguration.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior: {
            value: cdktn.stringToHclTerraform(struct!.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditions: {
            value: cdktn.listMapperHcl(ccLoggingConfigurationConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConditionPropertyList",
        },
        requirement: {
            value: cdktn.stringToHclTerraform(struct!.requirement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationLoggingFilterPropertyToTerraform(struct?: CcLoggingConfiguration.LoggingFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
        filters: cdktn.listMapper(ccLoggingConfigurationFilterPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccLoggingConfigurationLoggingFilterPropertyToHclTerraform(struct?: CcLoggingConfiguration.LoggingFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_behavior: {
            value: cdktn.stringToHclTerraform(struct!.defaultBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filters: {
            value: cdktn.listMapperHcl(ccLoggingConfigurationFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "FilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationSingleHeaderPropertyToTerraform(struct?: CcLoggingConfiguration.SingleHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccLoggingConfigurationSingleHeaderPropertyToHclTerraform(struct?: CcLoggingConfiguration.SingleHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationFieldToMatchPropertyToTerraform(struct?: CcLoggingConfiguration.FieldToMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        method: cdktn.stringToTerraform(struct!.method),
        query_string: cdktn.stringToTerraform(struct!.queryString),
        single_header: ccLoggingConfigurationSingleHeaderPropertyToTerraform(struct!.singleHeader),
        uri_path: cdktn.stringToTerraform(struct!.uriPath),
    }
}


export function ccLoggingConfigurationFieldToMatchPropertyToHclTerraform(struct?: CcLoggingConfiguration.FieldToMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        method: {
            value: cdktn.stringToHclTerraform(struct!.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_string: {
            value: cdktn.stringToHclTerraform(struct!.queryString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        single_header: {
            value: ccLoggingConfigurationSingleHeaderPropertyToHclTerraform(struct!.singleHeader),
            isBlock: true,
            type: "struct",
            storageClassType: "SingleHeaderProperty",
        },
        uri_path: {
            value: cdktn.stringToHclTerraform(struct!.uriPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLoggingConfiguration {
export interface ActionConditionProperty {
    /**
    * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#action CcLoggingConfiguration#action}
    */
    readonly action?: string;
}
export class ActionConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }
}
export interface LabelNameConditionProperty {
    /**
    * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#label_name CcLoggingConfiguration#label_name}
    */
    readonly labelName?: string;
}
export class LabelNameConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LabelNameConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._labelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelName = this._labelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LabelNameConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._labelName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._labelName = value.labelName;
        }
    }

    // label_name - computed: true, optional: true, required: false
    private _labelName?: string; 
    public get labelName() {
        return this.getStringAttribute('label_name');
    }
    public set labelName(value: string) {
        this._labelName = value;
    }
    public resetLabelName() {
        this._labelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelNameInput() {
        return this._labelName;
    }
}
export interface ConditionProperty {
    /**
    * A single action condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#action_condition CcLoggingConfiguration#action_condition}
    */
    readonly actionCondition?: ActionConditionProperty;
    /**
    * A single label name condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#label_name_condition CcLoggingConfiguration#label_name_condition}
    */
    readonly labelNameCondition?: LabelNameConditionProperty;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionCondition = this._actionCondition?.internalValue;
        }
        if (this._labelNameCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelNameCondition = this._labelNameCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionCondition.internalValue = undefined;
            this._labelNameCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionCondition.internalValue = value.actionCondition;
            this._labelNameCondition.internalValue = value.labelNameCondition;
        }
    }

    // action_condition - computed: true, optional: true, required: false
    private _actionCondition = new ActionConditionPropertyOutputReference(this, "action_condition");
    public get actionCondition() {
        return this._actionCondition;
    }
    public putActionCondition(value: ActionConditionProperty) {
        this._actionCondition.internalValue = value;
    }
    public resetActionCondition() {
        this._actionCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionConditionInput() {
        return this._actionCondition.internalValue;
    }

    // label_name_condition - computed: true, optional: true, required: false
    private _labelNameCondition = new LabelNameConditionPropertyOutputReference(this, "label_name_condition");
    public get labelNameCondition() {
        return this._labelNameCondition;
    }
    public putLabelNameCondition(value: LabelNameConditionProperty) {
        this._labelNameCondition.internalValue = value;
    }
    public resetLabelNameCondition() {
        this._labelNameCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelNameConditionInput() {
        return this._labelNameCondition.internalValue;
    }
}

export class ConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterProperty {
    /**
    * How to handle logs that satisfy the filter's conditions and requirement. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#behavior CcLoggingConfiguration#behavior}
    */
    readonly behavior?: string;
    /**
    * Match conditions for the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#conditions CcLoggingConfiguration#conditions}
    */
    readonly conditions?: ConditionProperty[] | cdktn.IResolvable;
    /**
    * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#requirement CcLoggingConfiguration#requirement}
    */
    readonly requirement?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._requirement !== undefined) {
            hasAnyValues = true;
            internalValueResult.requirement = this._requirement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
            this._conditions.internalValue = undefined;
            this._requirement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
            this._conditions.internalValue = value.conditions;
            this._requirement = value.requirement;
        }
    }

    // behavior - computed: true, optional: true, required: false
    private _behavior?: string; 
    public get behavior() {
        return this.getStringAttribute('behavior');
    }
    public set behavior(value: string) {
        this._behavior = value;
    }
    public resetBehavior() {
        this._behavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorInput() {
        return this._behavior;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new ConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // requirement - computed: true, optional: true, required: false
    private _requirement?: string; 
    public get requirement() {
        return this.getStringAttribute('requirement');
    }
    public set requirement(value: string) {
        this._requirement = value;
    }
    public resetRequirement() {
        this._requirement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requirementInput() {
        return this._requirement;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LoggingFilterProperty {
    /**
    * Default handling for logs that don't match any of the specified filtering conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#default_behavior CcLoggingConfiguration#default_behavior}
    */
    readonly defaultBehavior?: string;
    /**
    * The filters that you want to apply to the logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#filters CcLoggingConfiguration#filters}
    */
    readonly filters?: FilterProperty[] | cdktn.IResolvable;
}
export class LoggingFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultBehavior = this._defaultBehavior;
        }
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultBehavior = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultBehavior = value.defaultBehavior;
            this._filters.internalValue = value.filters;
        }
    }

    // default_behavior - computed: true, optional: true, required: false
    private _defaultBehavior?: string; 
    public get defaultBehavior() {
        return this.getStringAttribute('default_behavior');
    }
    public set defaultBehavior(value: string) {
        this._defaultBehavior = value;
    }
    public resetDefaultBehavior() {
        this._defaultBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBehaviorInput() {
        return this._defaultBehavior;
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new FilterPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: FilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface SingleHeaderProperty {
    /**
    * The name of the query header to inspect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#name CcLoggingConfiguration#name}
    */
    readonly name?: string;
}
export class SingleHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}
export interface FieldToMatchProperty {
    /**
    * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#method CcLoggingConfiguration#method}
    */
    readonly method?: string;
    /**
    * Inspect the query string. This is the part of a URL that appears after a ? character, if any. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#query_string CcLoggingConfiguration#query_string}
    */
    readonly queryString?: string;
    /**
    * Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#single_header CcLoggingConfiguration#single_header}
    */
    readonly singleHeader?: SingleHeaderProperty;
    /**
    * Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#uri_path CcLoggingConfiguration#uri_path}
    */
    readonly uriPath?: string;
}
export class FieldToMatchPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FieldToMatchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._queryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._singleHeader?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._uriPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldToMatchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._method = undefined;
            this._queryString = undefined;
            this._singleHeader.internalValue = undefined;
            this._uriPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._method = value.method;
            this._queryString = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._uriPath = value.uriPath;
        }
    }

    // method - computed: true, optional: true, required: false
    private _method?: string; 
    public get method() {
        return this.getStringAttribute('method');
    }
    public set method(value: string) {
        this._method = value;
    }
    public resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
        return this._method;
    }

    // query_string - computed: true, optional: true, required: false
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    public resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // single_header - computed: true, optional: true, required: false
    private _singleHeader = new SingleHeaderPropertyOutputReference(this, "single_header");
    public get singleHeader() {
        return this._singleHeader;
    }
    public putSingleHeader(value: SingleHeaderProperty) {
        this._singleHeader.internalValue = value;
    }
    public resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }

    // uri_path - computed: true, optional: true, required: false
    private _uriPath?: string; 
    public get uriPath() {
        return this.getStringAttribute('uri_path');
    }
    public set uriPath(value: string) {
        this._uriPath = value;
    }
    public resetUriPath() {
        this._uriPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriPathInput() {
        return this._uriPath;
    }
}

export class FieldToMatchPropertyList extends cdktn.ComplexList {
    public internalValue? : FieldToMatchProperty[] | cdktn.IResolvable

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
    public get(index: number): FieldToMatchPropertyOutputReference {
        return new FieldToMatchPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
