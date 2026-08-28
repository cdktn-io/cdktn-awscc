// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCodeSecurityScanConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Code Security Scan Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#configuration CcCodeSecurityScanConfiguration#configuration}
    */
    readonly configuration?: CcCodeSecurityScanConfiguration.CodeSecurityScanConfigurationProperty;
    /**
    * Configuration Level
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#level CcCodeSecurityScanConfiguration#level}
    */
    readonly level?: string;
    /**
    * Code Security Scan Configuration name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#name CcCodeSecurityScanConfiguration#name}
    */
    readonly name?: string;
    /**
    * Scope Settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#scope_settings CcCodeSecurityScanConfiguration#scope_settings}
    */
    readonly scopeSettings?: CcCodeSecurityScanConfiguration.ScopeSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#tags CcCodeSecurityScanConfiguration#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}
*/
export class CcCodeSecurityScanConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspectorv2_code_security_scan_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCodeSecurityScanConfiguration to import
    * @param importFromId The id of the existing CcCodeSecurityScanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCodeSecurityScanConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_code_security_scan_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCodeSecurityScanConfigurationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCodeSecurityScanConfigurationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspectorv2_code_security_scan_configuration',
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
        this._configuration.internalValue = config.configuration;
        this._level = config.level;
        this._name = config.name;
        this._scopeSettings.internalValue = config.scopeSettings;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CcCodeSecurityScanConfiguration.CodeSecurityScanConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcCodeSecurityScanConfiguration.CodeSecurityScanConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // level - computed: true, optional: true, required: false
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
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

    // scope_settings - computed: true, optional: true, required: false
    private _scopeSettings = new CcCodeSecurityScanConfiguration.ScopeSettingsPropertyOutputReference(this, "scope_settings");
    public get scopeSettings() {
        return this._scopeSettings;
    }
    public putScopeSettings(value: CcCodeSecurityScanConfiguration.ScopeSettingsProperty) {
        this._scopeSettings.internalValue = value;
    }
    public resetScopeSettings() {
        this._scopeSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeSettingsInput() {
        return this._scopeSettings.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration: ccCodeSecurityScanConfigurationCodeSecurityScanConfigurationPropertyToTerraform(this._configuration.internalValue),
            level: cdktn.stringToTerraform(this._level),
            name: cdktn.stringToTerraform(this._name),
            scope_settings: ccCodeSecurityScanConfigurationScopeSettingsPropertyToTerraform(this._scopeSettings.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccCodeSecurityScanConfigurationCodeSecurityScanConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCodeSecurityScanConfiguration.CodeSecurityScanConfigurationProperty",
            },
            level: {
                value: cdktn.stringToHclTerraform(this._level),
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
            scope_settings: {
                value: ccCodeSecurityScanConfigurationScopeSettingsPropertyToHclTerraform(this._scopeSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCodeSecurityScanConfiguration.ScopeSettingsProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCodeSecurityScanConfigurationContinuousIntegrationScanConfigurationPropertyToTerraform(struct?: CcCodeSecurityScanConfiguration.ContinuousIntegrationScanConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        supported_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedEvents),
    }
}


export function ccCodeSecurityScanConfigurationContinuousIntegrationScanConfigurationPropertyToHclTerraform(struct?: CcCodeSecurityScanConfiguration.ContinuousIntegrationScanConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        supported_events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedEvents),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityScanConfigurationPeriodicScanConfigurationPropertyToTerraform(struct?: CcCodeSecurityScanConfiguration.PeriodicScanConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        frequency: cdktn.stringToTerraform(struct!.frequency),
        frequency_expression: cdktn.stringToTerraform(struct!.frequencyExpression),
    }
}


export function ccCodeSecurityScanConfigurationPeriodicScanConfigurationPropertyToHclTerraform(struct?: CcCodeSecurityScanConfiguration.PeriodicScanConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        frequency: {
            value: cdktn.stringToHclTerraform(struct!.frequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        frequency_expression: {
            value: cdktn.stringToHclTerraform(struct!.frequencyExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityScanConfigurationCodeSecurityScanConfigurationPropertyToTerraform(struct?: CcCodeSecurityScanConfiguration.CodeSecurityScanConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        continuous_integration_scan_configuration: ccCodeSecurityScanConfigurationContinuousIntegrationScanConfigurationPropertyToTerraform(struct!.continuousIntegrationScanConfiguration),
        periodic_scan_configuration: ccCodeSecurityScanConfigurationPeriodicScanConfigurationPropertyToTerraform(struct!.periodicScanConfiguration),
        rule_set_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ruleSetCategories),
    }
}


export function ccCodeSecurityScanConfigurationCodeSecurityScanConfigurationPropertyToHclTerraform(struct?: CcCodeSecurityScanConfiguration.CodeSecurityScanConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        continuous_integration_scan_configuration: {
            value: ccCodeSecurityScanConfigurationContinuousIntegrationScanConfigurationPropertyToHclTerraform(struct!.continuousIntegrationScanConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ContinuousIntegrationScanConfigurationProperty",
        },
        periodic_scan_configuration: {
            value: ccCodeSecurityScanConfigurationPeriodicScanConfigurationPropertyToHclTerraform(struct!.periodicScanConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PeriodicScanConfigurationProperty",
        },
        rule_set_categories: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ruleSetCategories),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityScanConfigurationScopeSettingsPropertyToTerraform(struct?: CcCodeSecurityScanConfiguration.ScopeSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        project_selection_scope: cdktn.stringToTerraform(struct!.projectSelectionScope),
    }
}


export function ccCodeSecurityScanConfigurationScopeSettingsPropertyToHclTerraform(struct?: CcCodeSecurityScanConfiguration.ScopeSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        project_selection_scope: {
            value: cdktn.stringToHclTerraform(struct!.projectSelectionScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCodeSecurityScanConfiguration {
export interface ContinuousIntegrationScanConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#supported_events CcCodeSecurityScanConfiguration#supported_events}
    */
    readonly supportedEvents?: string[];
}
export class ContinuousIntegrationScanConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContinuousIntegrationScanConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._supportedEvents !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedEvents = this._supportedEvents;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContinuousIntegrationScanConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._supportedEvents = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._supportedEvents = value.supportedEvents;
        }
    }

    // supported_events - computed: true, optional: true, required: false
    private _supportedEvents?: string[]; 
    public get supportedEvents() {
        return this.getListAttribute('supported_events');
    }
    public set supportedEvents(value: string[]) {
        this._supportedEvents = value;
    }
    public resetSupportedEvents() {
        this._supportedEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedEventsInput() {
        return this._supportedEvents;
    }
}
export interface PeriodicScanConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#frequency CcCodeSecurityScanConfiguration#frequency}
    */
    readonly frequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression CcCodeSecurityScanConfiguration#frequency_expression}
    */
    readonly frequencyExpression?: string;
}
export class PeriodicScanConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PeriodicScanConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._frequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequency = this._frequency;
        }
        if (this._frequencyExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequencyExpression = this._frequencyExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PeriodicScanConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._frequency = undefined;
            this._frequencyExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._frequency = value.frequency;
            this._frequencyExpression = value.frequencyExpression;
        }
    }

    // frequency - computed: true, optional: true, required: false
    private _frequency?: string; 
    public get frequency() {
        return this.getStringAttribute('frequency');
    }
    public set frequency(value: string) {
        this._frequency = value;
    }
    public resetFrequency() {
        this._frequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency;
    }

    // frequency_expression - computed: true, optional: true, required: false
    private _frequencyExpression?: string; 
    public get frequencyExpression() {
        return this.getStringAttribute('frequency_expression');
    }
    public set frequencyExpression(value: string) {
        this._frequencyExpression = value;
    }
    public resetFrequencyExpression() {
        this._frequencyExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyExpressionInput() {
        return this._frequencyExpression;
    }
}
export interface CodeSecurityScanConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration CcCodeSecurityScanConfiguration#continuous_integration_scan_configuration}
    */
    readonly continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration CcCodeSecurityScanConfiguration#periodic_scan_configuration}
    */
    readonly periodicScanConfiguration?: PeriodicScanConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories CcCodeSecurityScanConfiguration#rule_set_categories}
    */
    readonly ruleSetCategories?: string[];
}
export class CodeSecurityScanConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeSecurityScanConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._continuousIntegrationScanConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.continuousIntegrationScanConfiguration = this._continuousIntegrationScanConfiguration?.internalValue;
        }
        if (this._periodicScanConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodicScanConfiguration = this._periodicScanConfiguration?.internalValue;
        }
        if (this._ruleSetCategories !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleSetCategories = this._ruleSetCategories;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeSecurityScanConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._continuousIntegrationScanConfiguration.internalValue = undefined;
            this._periodicScanConfiguration.internalValue = undefined;
            this._ruleSetCategories = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._continuousIntegrationScanConfiguration.internalValue = value.continuousIntegrationScanConfiguration;
            this._periodicScanConfiguration.internalValue = value.periodicScanConfiguration;
            this._ruleSetCategories = value.ruleSetCategories;
        }
    }

    // continuous_integration_scan_configuration - computed: true, optional: true, required: false
    private _continuousIntegrationScanConfiguration = new ContinuousIntegrationScanConfigurationPropertyOutputReference(this, "continuous_integration_scan_configuration");
    public get continuousIntegrationScanConfiguration() {
        return this._continuousIntegrationScanConfiguration;
    }
    public putContinuousIntegrationScanConfiguration(value: ContinuousIntegrationScanConfigurationProperty) {
        this._continuousIntegrationScanConfiguration.internalValue = value;
    }
    public resetContinuousIntegrationScanConfiguration() {
        this._continuousIntegrationScanConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get continuousIntegrationScanConfigurationInput() {
        return this._continuousIntegrationScanConfiguration.internalValue;
    }

    // periodic_scan_configuration - computed: true, optional: true, required: false
    private _periodicScanConfiguration = new PeriodicScanConfigurationPropertyOutputReference(this, "periodic_scan_configuration");
    public get periodicScanConfiguration() {
        return this._periodicScanConfiguration;
    }
    public putPeriodicScanConfiguration(value: PeriodicScanConfigurationProperty) {
        this._periodicScanConfiguration.internalValue = value;
    }
    public resetPeriodicScanConfiguration() {
        this._periodicScanConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodicScanConfigurationInput() {
        return this._periodicScanConfiguration.internalValue;
    }

    // rule_set_categories - computed: true, optional: true, required: false
    private _ruleSetCategories?: string[]; 
    public get ruleSetCategories() {
        return this.getListAttribute('rule_set_categories');
    }
    public set ruleSetCategories(value: string[]) {
        this._ruleSetCategories = value;
    }
    public resetRuleSetCategories() {
        this._ruleSetCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetCategoriesInput() {
        return this._ruleSetCategories;
    }
}
export interface ScopeSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope CcCodeSecurityScanConfiguration#project_selection_scope}
    */
    readonly projectSelectionScope?: string;
}
export class ScopeSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScopeSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._projectSelectionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectSelectionScope = this._projectSelectionScope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScopeSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._projectSelectionScope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._projectSelectionScope = value.projectSelectionScope;
        }
    }

    // project_selection_scope - computed: true, optional: true, required: false
    private _projectSelectionScope?: string; 
    public get projectSelectionScope() {
        return this.getStringAttribute('project_selection_scope');
    }
    public set projectSelectionScope(value: string) {
        this._projectSelectionScope = value;
    }
    public resetProjectSelectionScope() {
        this._projectSelectionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectSelectionScopeInput() {
        return this._projectSelectionScope;
    }
}
}
