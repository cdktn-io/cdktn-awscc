// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentStrategyProps extends cdktn.TerraformMetaArguments {
    /**
    * Total amount of time for a deployment to last.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#deployment_duration_in_minutes CcDeploymentStrategy#deployment_duration_in_minutes}
    */
    readonly deploymentDurationInMinutes: number;
    /**
    * A description of the deployment strategy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#description CcDeploymentStrategy#description}
    */
    readonly description?: string;
    /**
    * Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AWS AppConfig rolls back the deployment. You must configure permissions for AWS AppConfig to roll back based on CloudWatch alarms. For more information, see Configuring permissions for rollback based on Amazon CloudWatch alarms in the AWS AppConfig User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#final_bake_time_in_minutes CcDeploymentStrategy#final_bake_time_in_minutes}
    */
    readonly finalBakeTimeInMinutes?: number;
    /**
    * The percentage of targets to receive a deployed configuration during each interval.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#growth_factor CcDeploymentStrategy#growth_factor}
    */
    readonly growthFactor: number;
    /**
    * The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:
    * 
    * Linear: For this type, AWS AppConfig processes the deployment by dividing the total number of targets by the value specified for Step percentage. For example, a linear deployment that uses a Step percentage of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.
    * 
    * Exponential: For this type, AWS AppConfig processes the deployment exponentially using the following formula: G*(2^N). In this formula, G is the growth factor specified by the user and N is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:
    * 
    * 2*(2^0)
    * 
    * 2*(2^1)
    * 
    * 2*(2^2)
    * 
    * Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#growth_type CcDeploymentStrategy#growth_type}
    */
    readonly growthType?: string;
    /**
    * A name for the deployment strategy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#name CcDeploymentStrategy#name}
    */
    readonly name: string;
    /**
    * Save the deployment strategy to a Systems Manager (SSM) document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#replicate_to CcDeploymentStrategy#replicate_to}
    */
    readonly replicateTo: string;
    /**
    * Assigns metadata to an AWS AppConfig resource. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#tags CcDeploymentStrategy#tags}
    */
    readonly tags?: CcDeploymentStrategy.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy awscc_appconfig_deployment_strategy}
*/
export class CcDeploymentStrategy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_deployment_strategy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeploymentStrategy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeploymentStrategy to import
    * @param importFromId The id of the existing CcDeploymentStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeploymentStrategy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_deployment_strategy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy awscc_appconfig_deployment_strategy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentStrategyProps
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentStrategyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_deployment_strategy',
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
        this._deploymentDurationInMinutes = config.deploymentDurationInMinutes;
        this._description = config.description;
        this._finalBakeTimeInMinutes = config.finalBakeTimeInMinutes;
        this._growthFactor = config.growthFactor;
        this._growthType = config.growthType;
        this._name = config.name;
        this._replicateTo = config.replicateTo;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // deployment_duration_in_minutes - computed: false, optional: false, required: true
    private _deploymentDurationInMinutes?: number; 
    public get deploymentDurationInMinutes() {
        return this.getNumberAttribute('deployment_duration_in_minutes');
    }
    public set deploymentDurationInMinutes(value: number) {
        this._deploymentDurationInMinutes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentDurationInMinutesInput() {
        return this._deploymentDurationInMinutes;
    }

    // deployment_strategy_id - computed: true, optional: false, required: false
    public get deploymentStrategyId() {
        return this.getStringAttribute('deployment_strategy_id');
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

    // final_bake_time_in_minutes - computed: true, optional: true, required: false
    private _finalBakeTimeInMinutes?: number; 
    public get finalBakeTimeInMinutes() {
        return this.getNumberAttribute('final_bake_time_in_minutes');
    }
    public set finalBakeTimeInMinutes(value: number) {
        this._finalBakeTimeInMinutes = value;
    }
    public resetFinalBakeTimeInMinutes() {
        this._finalBakeTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get finalBakeTimeInMinutesInput() {
        return this._finalBakeTimeInMinutes;
    }

    // growth_factor - computed: false, optional: false, required: true
    private _growthFactor?: number; 
    public get growthFactor() {
        return this.getNumberAttribute('growth_factor');
    }
    public set growthFactor(value: number) {
        this._growthFactor = value;
    }
    // Temporarily expose input value. Use with caution.
    public get growthFactorInput() {
        return this._growthFactor;
    }

    // growth_type - computed: true, optional: true, required: false
    private _growthType?: string; 
    public get growthType() {
        return this.getStringAttribute('growth_type');
    }
    public set growthType(value: string) {
        this._growthType = value;
    }
    public resetGrowthType() {
        this._growthType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get growthTypeInput() {
        return this._growthType;
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

    // replicate_to - computed: false, optional: false, required: true
    private _replicateTo?: string; 
    public get replicateTo() {
        return this.getStringAttribute('replicate_to');
    }
    public set replicateTo(value: string) {
        this._replicateTo = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicateToInput() {
        return this._replicateTo;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDeploymentStrategy.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDeploymentStrategy.TagProperty[] | cdktn.IResolvable) {
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
            deployment_duration_in_minutes: cdktn.numberToTerraform(this._deploymentDurationInMinutes),
            description: cdktn.stringToTerraform(this._description),
            final_bake_time_in_minutes: cdktn.numberToTerraform(this._finalBakeTimeInMinutes),
            growth_factor: cdktn.numberToTerraform(this._growthFactor),
            growth_type: cdktn.stringToTerraform(this._growthType),
            name: cdktn.stringToTerraform(this._name),
            replicate_to: cdktn.stringToTerraform(this._replicateTo),
            tags: cdktn.listMapper(ccDeploymentStrategyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deployment_duration_in_minutes: {
                value: cdktn.numberToHclTerraform(this._deploymentDurationInMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            final_bake_time_in_minutes: {
                value: cdktn.numberToHclTerraform(this._finalBakeTimeInMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            growth_factor: {
                value: cdktn.numberToHclTerraform(this._growthFactor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            growth_type: {
                value: cdktn.stringToHclTerraform(this._growthType),
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
            replicate_to: {
                value: cdktn.stringToHclTerraform(this._replicateTo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeploymentStrategyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDeploymentStrategy.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeploymentStrategyTagPropertyToTerraform(struct?: CcDeploymentStrategy.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentStrategyTagPropertyToHclTerraform(struct?: CcDeploymentStrategy.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDeploymentStrategy {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#key CcDeploymentStrategy#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appconfig_deployment_strategy#value CcDeploymentStrategy#value}
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
