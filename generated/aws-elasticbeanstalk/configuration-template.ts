// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Elastic Beanstalk application to associate with this configuration template. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name CcConfigurationTemplate#application_name}
    */
    readonly applicationName: string;
    /**
    * An optional description for this configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#description CcConfigurationTemplate#description}
    */
    readonly description?: string;
    /**
    * The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#environment_id CcConfigurationTemplate#environment_id}
    */
    readonly environmentId?: string;
    /**
    * Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_settings CcConfigurationTemplate#option_settings}
    */
    readonly optionSettings?: CcConfigurationTemplate.ConfigurationOptionSettingProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the custom platform. For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn CcConfigurationTemplate#platform_arn}
    */
    readonly platformArn?: string;
    /**
    * The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.
    * 
    *  You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.
    * 
    *  Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name CcConfigurationTemplate#solution_stack_name}
    */
    readonly solutionStackName?: string;
    /**
    * An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.
    * 
    * Values specified in OptionSettings override any values obtained from the SourceConfiguration.
    * 
    * You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.
    * 
    * Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#source_configuration CcConfigurationTemplate#source_configuration}
    */
    readonly sourceConfiguration?: CcConfigurationTemplate.SourceConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}
*/
export class CcConfigurationTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticbeanstalk_configuration_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationTemplate to import
    * @param importFromId The id of the existing CcConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticbeanstalk_configuration_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticbeanstalk_configuration_template',
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
        this._applicationName = config.applicationName;
        this._description = config.description;
        this._environmentId = config.environmentId;
        this._optionSettings.internalValue = config.optionSettings;
        this._platformArn = config.platformArn;
        this._solutionStackName = config.solutionStackName;
        this._sourceConfiguration.internalValue = config.sourceConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_name - computed: false, optional: false, required: true
    private _applicationName?: string; 
    public get applicationName() {
        return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
        this._applicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
        return this._applicationName;
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

    // environment_id - computed: true, optional: true, required: false
    private _environmentId?: string; 
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }
    public set environmentId(value: string) {
        this._environmentId = value;
    }
    public resetEnvironmentId() {
        this._environmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdInput() {
        return this._environmentId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // option_settings - computed: true, optional: true, required: false
    private _optionSettings = new CcConfigurationTemplate.ConfigurationOptionSettingPropertyList(this, "option_settings", false);
    public get optionSettings() {
        return this._optionSettings;
    }
    public putOptionSettings(value: CcConfigurationTemplate.ConfigurationOptionSettingProperty[] | cdktn.IResolvable) {
        this._optionSettings.internalValue = value;
    }
    public resetOptionSettings() {
        this._optionSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionSettingsInput() {
        return this._optionSettings.internalValue;
    }

    // platform_arn - computed: true, optional: true, required: false
    private _platformArn?: string; 
    public get platformArn() {
        return this.getStringAttribute('platform_arn');
    }
    public set platformArn(value: string) {
        this._platformArn = value;
    }
    public resetPlatformArn() {
        this._platformArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformArnInput() {
        return this._platformArn;
    }

    // solution_stack_name - computed: true, optional: true, required: false
    private _solutionStackName?: string; 
    public get solutionStackName() {
        return this.getStringAttribute('solution_stack_name');
    }
    public set solutionStackName(value: string) {
        this._solutionStackName = value;
    }
    public resetSolutionStackName() {
        this._solutionStackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get solutionStackNameInput() {
        return this._solutionStackName;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new CcConfigurationTemplate.SourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: CcConfigurationTemplate.SourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }

    // template_name - computed: true, optional: false, required: false
    public get templateName() {
        return this.getStringAttribute('template_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_name: cdktn.stringToTerraform(this._applicationName),
            description: cdktn.stringToTerraform(this._description),
            environment_id: cdktn.stringToTerraform(this._environmentId),
            option_settings: cdktn.listMapper(ccConfigurationTemplateConfigurationOptionSettingPropertyToTerraform, false)(this._optionSettings.internalValue),
            platform_arn: cdktn.stringToTerraform(this._platformArn),
            solution_stack_name: cdktn.stringToTerraform(this._solutionStackName),
            source_configuration: ccConfigurationTemplateSourceConfigurationPropertyToTerraform(this._sourceConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_name: {
                value: cdktn.stringToHclTerraform(this._applicationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_id: {
                value: cdktn.stringToHclTerraform(this._environmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            option_settings: {
                value: cdktn.listMapperHcl(ccConfigurationTemplateConfigurationOptionSettingPropertyToHclTerraform, false)(this._optionSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationTemplate.ConfigurationOptionSettingPropertyList",
            },
            platform_arn: {
                value: cdktn.stringToHclTerraform(this._platformArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            solution_stack_name: {
                value: cdktn.stringToHclTerraform(this._solutionStackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_configuration: {
                value: ccConfigurationTemplateSourceConfigurationPropertyToHclTerraform(this._sourceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationTemplate.SourceConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationTemplateConfigurationOptionSettingPropertyToTerraform(struct?: CcConfigurationTemplate.ConfigurationOptionSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        namespace: cdktn.stringToTerraform(struct!.namespace),
        option_name: cdktn.stringToTerraform(struct!.optionName),
        resource_name: cdktn.stringToTerraform(struct!.resourceName),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationTemplateConfigurationOptionSettingPropertyToHclTerraform(struct?: CcConfigurationTemplate.ConfigurationOptionSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        option_name: {
            value: cdktn.stringToHclTerraform(struct!.optionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_name: {
            value: cdktn.stringToHclTerraform(struct!.resourceName),
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


export function ccConfigurationTemplateSourceConfigurationPropertyToTerraform(struct?: CcConfigurationTemplate.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_name: cdktn.stringToTerraform(struct!.applicationName),
        template_name: cdktn.stringToTerraform(struct!.templateName),
    }
}


export function ccConfigurationTemplateSourceConfigurationPropertyToHclTerraform(struct?: CcConfigurationTemplate.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_name: {
            value: cdktn.stringToHclTerraform(struct!.applicationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_name: {
            value: cdktn.stringToHclTerraform(struct!.templateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConfigurationTemplate {
export interface ConfigurationOptionSettingProperty {
    /**
    * A unique namespace that identifies the option's associated AWS resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#namespace CcConfigurationTemplate#namespace}
    */
    readonly namespace?: string;
    /**
    * The name of the configuration option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_name CcConfigurationTemplate#option_name}
    */
    readonly optionName?: string;
    /**
    * A unique resource name for the option setting. Use it for a time–based scaling configuration option. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#resource_name CcConfigurationTemplate#resource_name}
    */
    readonly resourceName?: string;
    /**
    * The current value for the configuration option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#value CcConfigurationTemplate#value}
    */
    readonly value?: string;
}
export class ConfigurationOptionSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationOptionSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._optionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.optionName = this._optionName;
        }
        if (this._resourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceName = this._resourceName;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationOptionSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespace = undefined;
            this._optionName = undefined;
            this._resourceName = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespace = value.namespace;
            this._optionName = value.optionName;
            this._resourceName = value.resourceName;
            this._value = value.value;
        }
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // option_name - computed: true, optional: true, required: false
    private _optionName?: string; 
    public get optionName() {
        return this.getStringAttribute('option_name');
    }
    public set optionName(value: string) {
        this._optionName = value;
    }
    public resetOptionName() {
        this._optionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionNameInput() {
        return this._optionName;
    }

    // resource_name - computed: true, optional: true, required: false
    private _resourceName?: string; 
    public get resourceName() {
        return this.getStringAttribute('resource_name');
    }
    public set resourceName(value: string) {
        this._resourceName = value;
    }
    public resetResourceName() {
        this._resourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceNameInput() {
        return this._resourceName;
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

export class ConfigurationOptionSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationOptionSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationOptionSettingPropertyOutputReference {
        return new ConfigurationOptionSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceConfigurationProperty {
    /**
    * The name of the application associated with the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name CcConfigurationTemplate#application_name}
    */
    readonly applicationName?: string;
    /**
    * The name of the configuration template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#template_name CcConfigurationTemplate#template_name}
    */
    readonly templateName?: string;
}
export class SourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationName = this._applicationName;
        }
        if (this._templateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateName = this._templateName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationName = undefined;
            this._templateName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationName = value.applicationName;
            this._templateName = value.templateName;
        }
    }

    // application_name - computed: true, optional: true, required: false
    private _applicationName?: string; 
    public get applicationName() {
        return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
        this._applicationName = value;
    }
    public resetApplicationName() {
        this._applicationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
        return this._applicationName;
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
}
}
