// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#application_name CcApplication#application_name}
    */
    readonly applicationName?: string;
    /**
    * Your description of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#description CcApplication#description}
    */
    readonly description?: string;
    /**
    * Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#resource_lifecycle_config CcApplication#resource_lifecycle_config}
    */
    readonly resourceLifecycleConfig?: CcApplication.ApplicationResourceLifecycleConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application awscc_elasticbeanstalk_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticbeanstalk_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticbeanstalk_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application awscc_elasticbeanstalk_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticbeanstalk_application',
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
        this._resourceLifecycleConfig.internalValue = config.resourceLifecycleConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // resource_lifecycle_config - computed: true, optional: true, required: false
    private _resourceLifecycleConfig = new CcApplication.ApplicationResourceLifecycleConfigPropertyOutputReference(this, "resource_lifecycle_config");
    public get resourceLifecycleConfig() {
        return this._resourceLifecycleConfig;
    }
    public putResourceLifecycleConfig(value: CcApplication.ApplicationResourceLifecycleConfigProperty) {
        this._resourceLifecycleConfig.internalValue = value;
    }
    public resetResourceLifecycleConfig() {
        this._resourceLifecycleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLifecycleConfigInput() {
        return this._resourceLifecycleConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_name: cdktn.stringToTerraform(this._applicationName),
            description: cdktn.stringToTerraform(this._description),
            resource_lifecycle_config: ccApplicationApplicationResourceLifecycleConfigPropertyToTerraform(this._resourceLifecycleConfig.internalValue),
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
            resource_lifecycle_config: {
                value: ccApplicationApplicationResourceLifecycleConfigPropertyToHclTerraform(this._resourceLifecycleConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.ApplicationResourceLifecycleConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationMaxAgeRulePropertyToTerraform(struct?: CcApplication.MaxAgeRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_source_from_s3: cdktn.booleanToTerraform(struct!.deleteSourceFromS3),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        max_age_in_days: cdktn.numberToTerraform(struct!.maxAgeInDays),
    }
}


export function ccApplicationMaxAgeRulePropertyToHclTerraform(struct?: CcApplication.MaxAgeRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_source_from_s3: {
            value: cdktn.booleanToHclTerraform(struct!.deleteSourceFromS3),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_age_in_days: {
            value: cdktn.numberToHclTerraform(struct!.maxAgeInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationMaxCountRulePropertyToTerraform(struct?: CcApplication.MaxCountRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_source_from_s3: cdktn.booleanToTerraform(struct!.deleteSourceFromS3),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        max_count: cdktn.numberToTerraform(struct!.maxCount),
    }
}


export function ccApplicationMaxCountRulePropertyToHclTerraform(struct?: CcApplication.MaxCountRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_source_from_s3: {
            value: cdktn.booleanToHclTerraform(struct!.deleteSourceFromS3),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_count: {
            value: cdktn.numberToHclTerraform(struct!.maxCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationApplicationVersionLifecycleConfigPropertyToTerraform(struct?: CcApplication.ApplicationVersionLifecycleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_age_rule: ccApplicationMaxAgeRulePropertyToTerraform(struct!.maxAgeRule),
        max_count_rule: ccApplicationMaxCountRulePropertyToTerraform(struct!.maxCountRule),
    }
}


export function ccApplicationApplicationVersionLifecycleConfigPropertyToHclTerraform(struct?: CcApplication.ApplicationVersionLifecycleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_age_rule: {
            value: ccApplicationMaxAgeRulePropertyToHclTerraform(struct!.maxAgeRule),
            isBlock: true,
            type: "struct",
            storageClassType: "MaxAgeRuleProperty",
        },
        max_count_rule: {
            value: ccApplicationMaxCountRulePropertyToHclTerraform(struct!.maxCountRule),
            isBlock: true,
            type: "struct",
            storageClassType: "MaxCountRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationApplicationResourceLifecycleConfigPropertyToTerraform(struct?: CcApplication.ApplicationResourceLifecycleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        service_role: cdktn.stringToTerraform(struct!.serviceRole),
        version_lifecycle_config: ccApplicationApplicationVersionLifecycleConfigPropertyToTerraform(struct!.versionLifecycleConfig),
    }
}


export function ccApplicationApplicationResourceLifecycleConfigPropertyToHclTerraform(struct?: CcApplication.ApplicationResourceLifecycleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        service_role: {
            value: cdktn.stringToHclTerraform(struct!.serviceRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_lifecycle_config: {
            value: ccApplicationApplicationVersionLifecycleConfigPropertyToHclTerraform(struct!.versionLifecycleConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ApplicationVersionLifecycleConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcApplication {
export interface MaxAgeRuleProperty {
    /**
    * Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 CcApplication#delete_source_from_s3}
    */
    readonly deleteSourceFromS3?: boolean | cdktn.IResolvable;
    /**
    * Specify true to apply the rule, or false to disable it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#enabled CcApplication#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Specify the number of days to retain an application versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#max_age_in_days CcApplication#max_age_in_days}
    */
    readonly maxAgeInDays?: number;
}
export class MaxAgeRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaxAgeRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleteSourceFromS3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteSourceFromS3 = this._deleteSourceFromS3;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._maxAgeInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAgeInDays = this._maxAgeInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaxAgeRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteSourceFromS3 = undefined;
            this._enabled = undefined;
            this._maxAgeInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteSourceFromS3 = value.deleteSourceFromS3;
            this._enabled = value.enabled;
            this._maxAgeInDays = value.maxAgeInDays;
        }
    }

    // delete_source_from_s3 - computed: true, optional: true, required: false
    private _deleteSourceFromS3?: boolean | cdktn.IResolvable; 
    public get deleteSourceFromS3() {
        return this.getBooleanAttribute('delete_source_from_s3');
    }
    public set deleteSourceFromS3(value: boolean | cdktn.IResolvable) {
        this._deleteSourceFromS3 = value;
    }
    public resetDeleteSourceFromS3() {
        this._deleteSourceFromS3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteSourceFromS3Input() {
        return this._deleteSourceFromS3;
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

    // max_age_in_days - computed: true, optional: true, required: false
    private _maxAgeInDays?: number; 
    public get maxAgeInDays() {
        return this.getNumberAttribute('max_age_in_days');
    }
    public set maxAgeInDays(value: number) {
        this._maxAgeInDays = value;
    }
    public resetMaxAgeInDays() {
        this._maxAgeInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeInDaysInput() {
        return this._maxAgeInDays;
    }
}
export interface MaxCountRuleProperty {
    /**
    * Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 CcApplication#delete_source_from_s3}
    */
    readonly deleteSourceFromS3?: boolean | cdktn.IResolvable;
    /**
    * Specify true to apply the rule, or false to disable it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#enabled CcApplication#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Specify the maximum number of application versions to retain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#max_count CcApplication#max_count}
    */
    readonly maxCount?: number;
}
export class MaxCountRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaxCountRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleteSourceFromS3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteSourceFromS3 = this._deleteSourceFromS3;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._maxCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCount = this._maxCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaxCountRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteSourceFromS3 = undefined;
            this._enabled = undefined;
            this._maxCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteSourceFromS3 = value.deleteSourceFromS3;
            this._enabled = value.enabled;
            this._maxCount = value.maxCount;
        }
    }

    // delete_source_from_s3 - computed: true, optional: true, required: false
    private _deleteSourceFromS3?: boolean | cdktn.IResolvable; 
    public get deleteSourceFromS3() {
        return this.getBooleanAttribute('delete_source_from_s3');
    }
    public set deleteSourceFromS3(value: boolean | cdktn.IResolvable) {
        this._deleteSourceFromS3 = value;
    }
    public resetDeleteSourceFromS3() {
        this._deleteSourceFromS3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteSourceFromS3Input() {
        return this._deleteSourceFromS3;
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

    // max_count - computed: true, optional: true, required: false
    private _maxCount?: number; 
    public get maxCount() {
        return this.getNumberAttribute('max_count');
    }
    public set maxCount(value: number) {
        this._maxCount = value;
    }
    public resetMaxCount() {
        this._maxCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCountInput() {
        return this._maxCount;
    }
}
export interface ApplicationVersionLifecycleConfigProperty {
    /**
    * Specify a max age rule to restrict the length of time that application versions are retained for an application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#max_age_rule CcApplication#max_age_rule}
    */
    readonly maxAgeRule?: MaxAgeRuleProperty;
    /**
    * Specify a max count rule to restrict the number of application versions that are retained for an application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#max_count_rule CcApplication#max_count_rule}
    */
    readonly maxCountRule?: MaxCountRuleProperty;
}
export class ApplicationVersionLifecycleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationVersionLifecycleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxAgeRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAgeRule = this._maxAgeRule?.internalValue;
        }
        if (this._maxCountRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCountRule = this._maxCountRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationVersionLifecycleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxAgeRule.internalValue = undefined;
            this._maxCountRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxAgeRule.internalValue = value.maxAgeRule;
            this._maxCountRule.internalValue = value.maxCountRule;
        }
    }

    // max_age_rule - computed: true, optional: true, required: false
    private _maxAgeRule = new MaxAgeRulePropertyOutputReference(this, "max_age_rule");
    public get maxAgeRule() {
        return this._maxAgeRule;
    }
    public putMaxAgeRule(value: MaxAgeRuleProperty) {
        this._maxAgeRule.internalValue = value;
    }
    public resetMaxAgeRule() {
        this._maxAgeRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeRuleInput() {
        return this._maxAgeRule.internalValue;
    }

    // max_count_rule - computed: true, optional: true, required: false
    private _maxCountRule = new MaxCountRulePropertyOutputReference(this, "max_count_rule");
    public get maxCountRule() {
        return this._maxCountRule;
    }
    public putMaxCountRule(value: MaxCountRuleProperty) {
        this._maxCountRule.internalValue = value;
    }
    public resetMaxCountRule() {
        this._maxCountRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCountRuleInput() {
        return this._maxCountRule.internalValue;
    }
}
export interface ApplicationResourceLifecycleConfigProperty {
    /**
    * The ARN of an IAM service role that Elastic Beanstalk has permission to assume. The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#service_role CcApplication#service_role}
    */
    readonly serviceRole?: string;
    /**
    * Defines lifecycle settings for application versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_application#version_lifecycle_config CcApplication#version_lifecycle_config}
    */
    readonly versionLifecycleConfig?: ApplicationVersionLifecycleConfigProperty;
}
export class ApplicationResourceLifecycleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationResourceLifecycleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serviceRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceRole = this._serviceRole;
        }
        if (this._versionLifecycleConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionLifecycleConfig = this._versionLifecycleConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationResourceLifecycleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serviceRole = undefined;
            this._versionLifecycleConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serviceRole = value.serviceRole;
            this._versionLifecycleConfig.internalValue = value.versionLifecycleConfig;
        }
    }

    // service_role - computed: true, optional: true, required: false
    private _serviceRole?: string; 
    public get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
        this._serviceRole = value;
    }
    public resetServiceRole() {
        this._serviceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
        return this._serviceRole;
    }

    // version_lifecycle_config - computed: true, optional: true, required: false
    private _versionLifecycleConfig = new ApplicationVersionLifecycleConfigPropertyOutputReference(this, "version_lifecycle_config");
    public get versionLifecycleConfig() {
        return this._versionLifecycleConfig;
    }
    public putVersionLifecycleConfig(value: ApplicationVersionLifecycleConfigProperty) {
        this._versionLifecycleConfig.internalValue = value;
    }
    public resetVersionLifecycleConfig() {
        this._versionLifecycleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionLifecycleConfigInput() {
        return this._versionLifecycleConfig.internalValue;
    }
}
}
