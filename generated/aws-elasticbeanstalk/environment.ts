// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the application that is associated with this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#application_name CcEnvironment#application_name}
    */
    readonly applicationName: string;
    /**
    * If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#cname_prefix CcEnvironment#cname_prefix}
    */
    readonly cnamePrefix?: string;
    /**
    * Your description for this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#description CcEnvironment#description}
    */
    readonly description?: string;
    /**
    * A unique name for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#environment_name CcEnvironment#environment_name}
    */
    readonly environmentName?: string;
    /**
    * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#operations_role CcEnvironment#operations_role}
    */
    readonly operationsRole?: string;
    /**
    * Key-value pairs defining configuration options for this environment, such as the instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#option_settings CcEnvironment#option_settings}
    */
    readonly optionSettings?: CcEnvironment.OptionSettingProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the custom platform to use with the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#platform_arn CcEnvironment#platform_arn}
    */
    readonly platformArn?: string;
    /**
    * The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#solution_stack_name CcEnvironment#solution_stack_name}
    */
    readonly solutionStackName?: string;
    /**
    * Specifies the tags applied to resources in the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#tags CcEnvironment#tags}
    */
    readonly tags?: CcEnvironment.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the Elastic Beanstalk configuration template to use with the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#template_name CcEnvironment#template_name}
    */
    readonly templateName?: string;
    /**
    * Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#tier CcEnvironment#tier}
    */
    readonly tier?: CcEnvironment.TierProperty;
    /**
    * The name of the application version to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#version_label CcEnvironment#version_label}
    */
    readonly versionLabel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticbeanstalk_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticbeanstalk_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticbeanstalk_environment',
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
        this._applicationName = config.applicationName;
        this._cnamePrefix = config.cnamePrefix;
        this._description = config.description;
        this._environmentName = config.environmentName;
        this._operationsRole = config.operationsRole;
        this._optionSettings.internalValue = config.optionSettings;
        this._platformArn = config.platformArn;
        this._solutionStackName = config.solutionStackName;
        this._tags.internalValue = config.tags;
        this._templateName = config.templateName;
        this._tier.internalValue = config.tier;
        this._versionLabel = config.versionLabel;
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

    // cname_prefix - computed: true, optional: true, required: false
    private _cnamePrefix?: string; 
    public get cnamePrefix() {
        return this.getStringAttribute('cname_prefix');
    }
    public set cnamePrefix(value: string) {
        this._cnamePrefix = value;
    }
    public resetCnamePrefix() {
        this._cnamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cnamePrefixInput() {
        return this._cnamePrefix;
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

    // endpoint_url - computed: true, optional: false, required: false
    public get endpointUrl() {
        return this.getStringAttribute('endpoint_url');
    }

    // environment_name - computed: true, optional: true, required: false
    private _environmentName?: string; 
    public get environmentName() {
        return this.getStringAttribute('environment_name');
    }
    public set environmentName(value: string) {
        this._environmentName = value;
    }
    public resetEnvironmentName() {
        this._environmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentNameInput() {
        return this._environmentName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // operations_role - computed: true, optional: true, required: false
    private _operationsRole?: string; 
    public get operationsRole() {
        return this.getStringAttribute('operations_role');
    }
    public set operationsRole(value: string) {
        this._operationsRole = value;
    }
    public resetOperationsRole() {
        this._operationsRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationsRoleInput() {
        return this._operationsRole;
    }

    // option_settings - computed: true, optional: true, required: false
    private _optionSettings = new CcEnvironment.OptionSettingPropertyList(this, "option_settings", false);
    public get optionSettings() {
        return this._optionSettings;
    }
    public putOptionSettings(value: CcEnvironment.OptionSettingProperty[] | cdktn.IResolvable) {
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // tier - computed: true, optional: true, required: false
    private _tier = new CcEnvironment.TierPropertyOutputReference(this, "tier");
    public get tier() {
        return this._tier;
    }
    public putTier(value: CcEnvironment.TierProperty) {
        this._tier.internalValue = value;
    }
    public resetTier() {
        this._tier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier.internalValue;
    }

    // version_label - computed: true, optional: true, required: false
    private _versionLabel?: string; 
    public get versionLabel() {
        return this.getStringAttribute('version_label');
    }
    public set versionLabel(value: string) {
        this._versionLabel = value;
    }
    public resetVersionLabel() {
        this._versionLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionLabelInput() {
        return this._versionLabel;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_name: cdktn.stringToTerraform(this._applicationName),
            cname_prefix: cdktn.stringToTerraform(this._cnamePrefix),
            description: cdktn.stringToTerraform(this._description),
            environment_name: cdktn.stringToTerraform(this._environmentName),
            operations_role: cdktn.stringToTerraform(this._operationsRole),
            option_settings: cdktn.listMapper(ccEnvironmentOptionSettingPropertyToTerraform, false)(this._optionSettings.internalValue),
            platform_arn: cdktn.stringToTerraform(this._platformArn),
            solution_stack_name: cdktn.stringToTerraform(this._solutionStackName),
            tags: cdktn.listMapper(ccEnvironmentTagPropertyToTerraform, false)(this._tags.internalValue),
            template_name: cdktn.stringToTerraform(this._templateName),
            tier: ccEnvironmentTierPropertyToTerraform(this._tier.internalValue),
            version_label: cdktn.stringToTerraform(this._versionLabel),
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
            cname_prefix: {
                value: cdktn.stringToHclTerraform(this._cnamePrefix),
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
            environment_name: {
                value: cdktn.stringToHclTerraform(this._environmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            operations_role: {
                value: cdktn.stringToHclTerraform(this._operationsRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            option_settings: {
                value: cdktn.listMapperHcl(ccEnvironmentOptionSettingPropertyToHclTerraform, false)(this._optionSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.OptionSettingPropertyList",
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
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.TagPropertyList",
            },
            template_name: {
                value: cdktn.stringToHclTerraform(this._templateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tier: {
                value: ccEnvironmentTierPropertyToHclTerraform(this._tier.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.TierProperty",
            },
            version_label: {
                value: cdktn.stringToHclTerraform(this._versionLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentOptionSettingPropertyToTerraform(struct?: CcEnvironment.OptionSettingProperty | cdktn.IResolvable): any {
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


export function ccEnvironmentOptionSettingPropertyToHclTerraform(struct?: CcEnvironment.OptionSettingProperty | cdktn.IResolvable): any {
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


export function ccEnvironmentTagPropertyToTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentTagPropertyToHclTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
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


export function ccEnvironmentTierPropertyToTerraform(struct?: CcEnvironment.TierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccEnvironmentTierPropertyToHclTerraform(struct?: CcEnvironment.TierProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEnvironment {
export interface OptionSettingProperty {
    /**
    * A unique namespace that identifies the option's associated AWS resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#namespace CcEnvironment#namespace}
    */
    readonly namespace?: string;
    /**
    * The name of the configuration option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#option_name CcEnvironment#option_name}
    */
    readonly optionName?: string;
    /**
    * A unique resource name for the option setting. Use it for a time–based scaling configuration option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#resource_name CcEnvironment#resource_name}
    */
    readonly resourceName?: string;
    /**
    * The current value for the configuration option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#value CcEnvironment#value}
    */
    readonly value?: string;
}
export class OptionSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OptionSettingProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: OptionSettingProperty | cdktn.IResolvable | undefined) {
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

export class OptionSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : OptionSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): OptionSettingPropertyOutputReference {
        return new OptionSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#value CcEnvironment#value}
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
export interface TierProperty {
    /**
    * The name of this environment tier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#name CcEnvironment#name}
    */
    readonly name?: string;
    /**
    * The type of this environment tier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#type CcEnvironment#type}
    */
    readonly type?: string;
    /**
    * The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_environment#version CcEnvironment#version}
    */
    readonly version?: string;
}
export class TierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._type = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
            this._version = value.version;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
}
