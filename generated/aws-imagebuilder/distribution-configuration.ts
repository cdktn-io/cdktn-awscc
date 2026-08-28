// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDistributionConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#description CcDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The distributions of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#distributions CcDistributionConfiguration#distributions}
    */
    readonly distributions: CcDistributionConfiguration.DistributionProperty[] | cdktn.IResolvable;
    /**
    * The name of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#name CcDistributionConfiguration#name}
    */
    readonly name: string;
    /**
    * The tags associated with the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#tags CcDistributionConfiguration#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration awscc_imagebuilder_distribution_configuration}
*/
export class CcDistributionConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_distribution_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDistributionConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDistributionConfiguration to import
    * @param importFromId The id of the existing CcDistributionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDistributionConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_distribution_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration awscc_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDistributionConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcDistributionConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_distribution_configuration',
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
        this._description = config.description;
        this._distributions.internalValue = config.distributions;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // distributions - computed: false, optional: false, required: true
    private _distributions = new CcDistributionConfiguration.DistributionPropertyList(this, "distributions", false);
    public get distributions() {
        return this._distributions;
    }
    public putDistributions(value: CcDistributionConfiguration.DistributionProperty[] | cdktn.IResolvable) {
        this._distributions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionsInput() {
        return this._distributions.internalValue;
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
            description: cdktn.stringToTerraform(this._description),
            distributions: cdktn.listMapper(ccDistributionConfigurationDistributionPropertyToTerraform, false)(this._distributions.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
            distributions: {
                value: cdktn.listMapperHcl(ccDistributionConfigurationDistributionPropertyToHclTerraform, false)(this._distributions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDistributionConfiguration.DistributionPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccDistributionConfigurationLaunchPermissionConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.LaunchPermissionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        organization_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationArns),
        organizational_unit_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnitArns),
        user_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userGroups),
        user_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userIds),
    }
}


export function ccDistributionConfigurationLaunchPermissionConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.LaunchPermissionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        organization_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        organizational_unit_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnitArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        user_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        user_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationAmiDistributionConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.AmiDistributionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ami_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.amiTags),
        description: cdktn.stringToTerraform(struct!.description),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        launch_permission_configuration: ccDistributionConfigurationLaunchPermissionConfigurationPropertyToTerraform(struct!.launchPermissionConfiguration),
        name: cdktn.stringToTerraform(struct!.name),
        target_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetAccountIds),
    }
}


export function ccDistributionConfigurationAmiDistributionConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.AmiDistributionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ami_tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.amiTags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_permission_configuration: {
            value: ccDistributionConfigurationLaunchPermissionConfigurationPropertyToHclTerraform(struct!.launchPermissionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LaunchPermissionConfigurationProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetAccountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationTargetContainerRepositoryPropertyToTerraform(struct?: CcDistributionConfiguration.TargetContainerRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_name: cdktn.stringToTerraform(struct!.repositoryName),
        service: cdktn.stringToTerraform(struct!.service),
    }
}


export function ccDistributionConfigurationTargetContainerRepositoryPropertyToHclTerraform(struct?: CcDistributionConfiguration.TargetContainerRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_name: {
            value: cdktn.stringToHclTerraform(struct!.repositoryName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktn.stringToHclTerraform(struct!.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationContainerDistributionConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.ContainerDistributionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerTags),
        description: cdktn.stringToTerraform(struct!.description),
        target_repository: ccDistributionConfigurationTargetContainerRepositoryPropertyToTerraform(struct!.targetRepository),
    }
}


export function ccDistributionConfigurationContainerDistributionConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.ContainerDistributionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_tags: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerTags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_repository: {
            value: ccDistributionConfigurationTargetContainerRepositoryPropertyToHclTerraform(struct!.targetRepository),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetContainerRepositoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationFastLaunchLaunchTemplateSpecificationPropertyToTerraform(struct?: CcDistributionConfiguration.FastLaunchLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
        launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
        launch_template_version: cdktn.stringToTerraform(struct!.launchTemplateVersion),
    }
}


export function ccDistributionConfigurationFastLaunchLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcDistributionConfiguration.FastLaunchLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_id: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_version: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationFastLaunchSnapshotConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.FastLaunchSnapshotConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_resource_count: cdktn.numberToTerraform(struct!.targetResourceCount),
    }
}


export function ccDistributionConfigurationFastLaunchSnapshotConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.FastLaunchSnapshotConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_resource_count: {
            value: cdktn.numberToHclTerraform(struct!.targetResourceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationFastLaunchConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.FastLaunchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        launch_template: ccDistributionConfigurationFastLaunchLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplate),
        max_parallel_launches: cdktn.numberToTerraform(struct!.maxParallelLaunches),
        snapshot_configuration: ccDistributionConfigurationFastLaunchSnapshotConfigurationPropertyToTerraform(struct!.snapshotConfiguration),
    }
}


export function ccDistributionConfigurationFastLaunchConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.FastLaunchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        launch_template: {
            value: ccDistributionConfigurationFastLaunchLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "FastLaunchLaunchTemplateSpecificationProperty",
        },
        max_parallel_launches: {
            value: cdktn.numberToHclTerraform(struct!.maxParallelLaunches),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        snapshot_configuration: {
            value: ccDistributionConfigurationFastLaunchSnapshotConfigurationPropertyToHclTerraform(struct!.snapshotConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FastLaunchSnapshotConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationLaunchTemplateConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.LaunchTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
        set_default_version: cdktn.booleanToTerraform(struct!.setDefaultVersion),
    }
}


export function ccDistributionConfigurationLaunchTemplateConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.LaunchTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_id: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        set_default_version: {
            value: cdktn.booleanToHclTerraform(struct!.setDefaultVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationSsmParameterConfigurationPropertyToTerraform(struct?: CcDistributionConfiguration.SsmParameterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ami_account_id: cdktn.stringToTerraform(struct!.amiAccountId),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
    }
}


export function ccDistributionConfigurationSsmParameterConfigurationPropertyToHclTerraform(struct?: CcDistributionConfiguration.SsmParameterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ami_account_id: {
            value: cdktn.stringToHclTerraform(struct!.amiAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionConfigurationDistributionPropertyToTerraform(struct?: CcDistributionConfiguration.DistributionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ami_distribution_configuration: ccDistributionConfigurationAmiDistributionConfigurationPropertyToTerraform(struct!.amiDistributionConfiguration),
        container_distribution_configuration: ccDistributionConfigurationContainerDistributionConfigurationPropertyToTerraform(struct!.containerDistributionConfiguration),
        fast_launch_configurations: cdktn.listMapper(ccDistributionConfigurationFastLaunchConfigurationPropertyToTerraform, false)(struct!.fastLaunchConfigurations),
        launch_template_configurations: cdktn.listMapper(ccDistributionConfigurationLaunchTemplateConfigurationPropertyToTerraform, false)(struct!.launchTemplateConfigurations),
        license_configuration_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.licenseConfigurationArns),
        region: cdktn.stringToTerraform(struct!.region),
        ssm_parameter_configurations: cdktn.listMapper(ccDistributionConfigurationSsmParameterConfigurationPropertyToTerraform, false)(struct!.ssmParameterConfigurations),
    }
}


export function ccDistributionConfigurationDistributionPropertyToHclTerraform(struct?: CcDistributionConfiguration.DistributionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ami_distribution_configuration: {
            value: ccDistributionConfigurationAmiDistributionConfigurationPropertyToHclTerraform(struct!.amiDistributionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AmiDistributionConfigurationProperty",
        },
        container_distribution_configuration: {
            value: ccDistributionConfigurationContainerDistributionConfigurationPropertyToHclTerraform(struct!.containerDistributionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ContainerDistributionConfigurationProperty",
        },
        fast_launch_configurations: {
            value: cdktn.listMapperHcl(ccDistributionConfigurationFastLaunchConfigurationPropertyToHclTerraform, false)(struct!.fastLaunchConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "FastLaunchConfigurationPropertyList",
        },
        launch_template_configurations: {
            value: cdktn.listMapperHcl(ccDistributionConfigurationLaunchTemplateConfigurationPropertyToHclTerraform, false)(struct!.launchTemplateConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateConfigurationPropertyList",
        },
        license_configuration_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.licenseConfigurationArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssm_parameter_configurations: {
            value: cdktn.listMapperHcl(ccDistributionConfigurationSsmParameterConfigurationPropertyToHclTerraform, false)(struct!.ssmParameterConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "SsmParameterConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDistributionConfiguration {
export interface LaunchPermissionConfigurationProperty {
    /**
    * The ARN for an Amazon Web Services Organization that you want to share your AMI with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#organization_arns CcDistributionConfiguration#organization_arns}
    */
    readonly organizationArns?: string[];
    /**
    * The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#organizational_unit_arns CcDistributionConfiguration#organizational_unit_arns}
    */
    readonly organizationalUnitArns?: string[];
    /**
    * The name of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#user_groups CcDistributionConfiguration#user_groups}
    */
    readonly userGroups?: string[];
    /**
    * The AWS account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#user_ids CcDistributionConfiguration#user_ids}
    */
    readonly userIds?: string[];
}
export class LaunchPermissionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LaunchPermissionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._organizationArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationArns = this._organizationArns;
        }
        if (this._organizationalUnitArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitArns = this._organizationalUnitArns;
        }
        if (this._userGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.userGroups = this._userGroups;
        }
        if (this._userIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.userIds = this._userIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchPermissionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._organizationArns = undefined;
            this._organizationalUnitArns = undefined;
            this._userGroups = undefined;
            this._userIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._organizationArns = value.organizationArns;
            this._organizationalUnitArns = value.organizationalUnitArns;
            this._userGroups = value.userGroups;
            this._userIds = value.userIds;
        }
    }

    // organization_arns - computed: true, optional: true, required: false
    private _organizationArns?: string[]; 
    public get organizationArns() {
        return this.getListAttribute('organization_arns');
    }
    public set organizationArns(value: string[]) {
        this._organizationArns = value;
    }
    public resetOrganizationArns() {
        this._organizationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationArnsInput() {
        return this._organizationArns;
    }

    // organizational_unit_arns - computed: true, optional: true, required: false
    private _organizationalUnitArns?: string[]; 
    public get organizationalUnitArns() {
        return this.getListAttribute('organizational_unit_arns');
    }
    public set organizationalUnitArns(value: string[]) {
        this._organizationalUnitArns = value;
    }
    public resetOrganizationalUnitArns() {
        this._organizationalUnitArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitArnsInput() {
        return this._organizationalUnitArns;
    }

    // user_groups - computed: true, optional: true, required: false
    private _userGroups?: string[]; 
    public get userGroups() {
        return this.getListAttribute('user_groups');
    }
    public set userGroups(value: string[]) {
        this._userGroups = value;
    }
    public resetUserGroups() {
        this._userGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupsInput() {
        return this._userGroups;
    }

    // user_ids - computed: true, optional: true, required: false
    private _userIds?: string[]; 
    public get userIds() {
        return this.getListAttribute('user_ids');
    }
    public set userIds(value: string[]) {
        this._userIds = value;
    }
    public resetUserIds() {
        this._userIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdsInput() {
        return this._userIds;
    }
}
export interface AmiDistributionConfigurationProperty {
    /**
    * The tags to apply to AMIs distributed to this Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#ami_tags CcDistributionConfiguration#ami_tags}
    */
    readonly amiTags?: { [key: string]: string };
    /**
    * The description of the AMI distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#description CcDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The KMS key identifier used to encrypt the distributed image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#kms_key_id CcDistributionConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_permission_configuration CcDistributionConfiguration#launch_permission_configuration}
    */
    readonly launchPermissionConfiguration?: LaunchPermissionConfigurationProperty;
    /**
    * The name of the AMI distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#name CcDistributionConfiguration#name}
    */
    readonly name?: string;
    /**
    * The ID of accounts to which you want to distribute an image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#target_account_ids CcDistributionConfiguration#target_account_ids}
    */
    readonly targetAccountIds?: string[];
}
export class AmiDistributionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmiDistributionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amiTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.amiTags = this._amiTags;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._launchPermissionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchPermissionConfiguration = this._launchPermissionConfiguration?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._targetAccountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetAccountIds = this._targetAccountIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmiDistributionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amiTags = undefined;
            this._description = undefined;
            this._kmsKeyId = undefined;
            this._launchPermissionConfiguration.internalValue = undefined;
            this._name = undefined;
            this._targetAccountIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amiTags = value.amiTags;
            this._description = value.description;
            this._kmsKeyId = value.kmsKeyId;
            this._launchPermissionConfiguration.internalValue = value.launchPermissionConfiguration;
            this._name = value.name;
            this._targetAccountIds = value.targetAccountIds;
        }
    }

    // ami_tags - computed: true, optional: true, required: false
    private _amiTags?: { [key: string]: string }; 
    public get amiTags() {
        return this.getStringMapAttribute('ami_tags');
    }
    public set amiTags(value: { [key: string]: string }) {
        this._amiTags = value;
    }
    public resetAmiTags() {
        this._amiTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiTagsInput() {
        return this._amiTags;
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

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // launch_permission_configuration - computed: true, optional: true, required: false
    private _launchPermissionConfiguration = new LaunchPermissionConfigurationPropertyOutputReference(this, "launch_permission_configuration");
    public get launchPermissionConfiguration() {
        return this._launchPermissionConfiguration;
    }
    public putLaunchPermissionConfiguration(value: LaunchPermissionConfigurationProperty) {
        this._launchPermissionConfiguration.internalValue = value;
    }
    public resetLaunchPermissionConfiguration() {
        this._launchPermissionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchPermissionConfigurationInput() {
        return this._launchPermissionConfiguration.internalValue;
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

    // target_account_ids - computed: true, optional: true, required: false
    private _targetAccountIds?: string[]; 
    public get targetAccountIds() {
        return this.getListAttribute('target_account_ids');
    }
    public set targetAccountIds(value: string[]) {
        this._targetAccountIds = value;
    }
    public resetTargetAccountIds() {
        this._targetAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAccountIdsInput() {
        return this._targetAccountIds;
    }
}
export interface TargetContainerRepositoryProperty {
    /**
    * The repository name of target container repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#repository_name CcDistributionConfiguration#repository_name}
    */
    readonly repositoryName?: string;
    /**
    * The service of target container repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#service CcDistributionConfiguration#service}
    */
    readonly service?: string;
}
export class TargetContainerRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetContainerRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryName !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryName = this._repositoryName;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetContainerRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryName = undefined;
            this._service = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryName = value.repositoryName;
            this._service = value.service;
        }
    }

    // repository_name - computed: true, optional: true, required: false
    private _repositoryName?: string; 
    public get repositoryName() {
        return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
        this._repositoryName = value;
    }
    public resetRepositoryName() {
        this._repositoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
        return this._repositoryName;
    }

    // service - computed: true, optional: true, required: false
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    public resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }
}
export interface ContainerDistributionConfigurationProperty {
    /**
    * Tags that are attached to the container distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#container_tags CcDistributionConfiguration#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * The description of the container distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#description CcDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The destination repository for the container distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#target_repository CcDistributionConfiguration#target_repository}
    */
    readonly targetRepository?: TargetContainerRepositoryProperty;
}
export class ContainerDistributionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerDistributionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerTags = this._containerTags;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._targetRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRepository = this._targetRepository?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerDistributionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerTags = undefined;
            this._description = undefined;
            this._targetRepository.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerTags = value.containerTags;
            this._description = value.description;
            this._targetRepository.internalValue = value.targetRepository;
        }
    }

    // container_tags - computed: true, optional: true, required: false
    private _containerTags?: string[]; 
    public get containerTags() {
        return this.getListAttribute('container_tags');
    }
    public set containerTags(value: string[]) {
        this._containerTags = value;
    }
    public resetContainerTags() {
        this._containerTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerTagsInput() {
        return this._containerTags;
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

    // target_repository - computed: true, optional: true, required: false
    private _targetRepository = new TargetContainerRepositoryPropertyOutputReference(this, "target_repository");
    public get targetRepository() {
        return this._targetRepository;
    }
    public putTargetRepository(value: TargetContainerRepositoryProperty) {
        this._targetRepository.internalValue = value;
    }
    public resetTargetRepository() {
        this._targetRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRepositoryInput() {
        return this._targetRepository.internalValue;
    }
}
export interface FastLaunchLaunchTemplateSpecificationProperty {
    /**
    * The ID of the launch template to use for faster launching for a Windows AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_template_id CcDistributionConfiguration#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * The name of the launch template to use for faster launching for a Windows AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_template_name CcDistributionConfiguration#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * The version of the launch template to use for faster launching for a Windows AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_template_version CcDistributionConfiguration#launch_template_version}
    */
    readonly launchTemplateVersion?: string;
}
export class FastLaunchLaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FastLaunchLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._launchTemplateVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateVersion = this._launchTemplateVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FastLaunchLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._launchTemplateVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._launchTemplateVersion = value.launchTemplateVersion;
        }
    }

    // launch_template_id - computed: true, optional: true, required: false
    private _launchTemplateId?: string; 
    public get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    public set launchTemplateId(value: string) {
        this._launchTemplateId = value;
    }
    public resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateIdInput() {
        return this._launchTemplateId;
    }

    // launch_template_name - computed: true, optional: true, required: false
    private _launchTemplateName?: string; 
    public get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    public set launchTemplateName(value: string) {
        this._launchTemplateName = value;
    }
    public resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateNameInput() {
        return this._launchTemplateName;
    }

    // launch_template_version - computed: true, optional: true, required: false
    private _launchTemplateVersion?: string; 
    public get launchTemplateVersion() {
        return this.getStringAttribute('launch_template_version');
    }
    public set launchTemplateVersion(value: string) {
        this._launchTemplateVersion = value;
    }
    public resetLaunchTemplateVersion() {
        this._launchTemplateVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateVersionInput() {
        return this._launchTemplateVersion;
    }
}
export interface FastLaunchSnapshotConfigurationProperty {
    /**
    * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#target_resource_count CcDistributionConfiguration#target_resource_count}
    */
    readonly targetResourceCount?: number;
}
export class FastLaunchSnapshotConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FastLaunchSnapshotConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetResourceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetResourceCount = this._targetResourceCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FastLaunchSnapshotConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetResourceCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetResourceCount = value.targetResourceCount;
        }
    }

    // target_resource_count - computed: true, optional: true, required: false
    private _targetResourceCount?: number; 
    public get targetResourceCount() {
        return this.getNumberAttribute('target_resource_count');
    }
    public set targetResourceCount(value: number) {
        this._targetResourceCount = value;
    }
    public resetTargetResourceCount() {
        this._targetResourceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetResourceCountInput() {
        return this._targetResourceCount;
    }
}
export interface FastLaunchConfigurationProperty {
    /**
    * The owner account ID for the fast-launch enabled Windows AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#account_id CcDistributionConfiguration#account_id}
    */
    readonly accountId?: string;
    /**
    * A Boolean that represents the current state of faster launching for the Windows AMI. Set to true to start using Windows faster launching, or false to stop using it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#enabled CcDistributionConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_template CcDistributionConfiguration#launch_template}
    */
    readonly launchTemplate?: FastLaunchLaunchTemplateSpecificationProperty;
    /**
    * The maximum number of parallel instances that are launched for creating resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#max_parallel_launches CcDistributionConfiguration#max_parallel_launches}
    */
    readonly maxParallelLaunches?: number;
    /**
    * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#snapshot_configuration CcDistributionConfiguration#snapshot_configuration}
    */
    readonly snapshotConfiguration?: FastLaunchSnapshotConfigurationProperty;
}
export class FastLaunchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FastLaunchConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._launchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
        }
        if (this._maxParallelLaunches !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxParallelLaunches = this._maxParallelLaunches;
        }
        if (this._snapshotConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotConfiguration = this._snapshotConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FastLaunchConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._enabled = undefined;
            this._launchTemplate.internalValue = undefined;
            this._maxParallelLaunches = undefined;
            this._snapshotConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._enabled = value.enabled;
            this._launchTemplate.internalValue = value.launchTemplate;
            this._maxParallelLaunches = value.maxParallelLaunches;
            this._snapshotConfiguration.internalValue = value.snapshotConfiguration;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
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

    // launch_template - computed: true, optional: true, required: false
    private _launchTemplate = new FastLaunchLaunchTemplateSpecificationPropertyOutputReference(this, "launch_template");
    public get launchTemplate() {
        return this._launchTemplate;
    }
    public putLaunchTemplate(value: FastLaunchLaunchTemplateSpecificationProperty) {
        this._launchTemplate.internalValue = value;
    }
    public resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }

    // max_parallel_launches - computed: true, optional: true, required: false
    private _maxParallelLaunches?: number; 
    public get maxParallelLaunches() {
        return this.getNumberAttribute('max_parallel_launches');
    }
    public set maxParallelLaunches(value: number) {
        this._maxParallelLaunches = value;
    }
    public resetMaxParallelLaunches() {
        this._maxParallelLaunches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxParallelLaunchesInput() {
        return this._maxParallelLaunches;
    }

    // snapshot_configuration - computed: true, optional: true, required: false
    private _snapshotConfiguration = new FastLaunchSnapshotConfigurationPropertyOutputReference(this, "snapshot_configuration");
    public get snapshotConfiguration() {
        return this._snapshotConfiguration;
    }
    public putSnapshotConfiguration(value: FastLaunchSnapshotConfigurationProperty) {
        this._snapshotConfiguration.internalValue = value;
    }
    public resetSnapshotConfiguration() {
        this._snapshotConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotConfigurationInput() {
        return this._snapshotConfiguration.internalValue;
    }
}

export class FastLaunchConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : FastLaunchConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): FastLaunchConfigurationPropertyOutputReference {
        return new FastLaunchConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LaunchTemplateConfigurationProperty {
    /**
    * The account ID that this configuration applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#account_id CcDistributionConfiguration#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifies the EC2 launch template to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_template_id CcDistributionConfiguration#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Set the specified EC2 launch template as the default launch template for the specified account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#set_default_version CcDistributionConfiguration#set_default_version}
    */
    readonly setDefaultVersion?: boolean | cdktn.IResolvable;
}
export class LaunchTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._setDefaultVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.setDefaultVersion = this._setDefaultVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._launchTemplateId = undefined;
            this._setDefaultVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._launchTemplateId = value.launchTemplateId;
            this._setDefaultVersion = value.setDefaultVersion;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // launch_template_id - computed: true, optional: true, required: false
    private _launchTemplateId?: string; 
    public get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    public set launchTemplateId(value: string) {
        this._launchTemplateId = value;
    }
    public resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateIdInput() {
        return this._launchTemplateId;
    }

    // set_default_version - computed: true, optional: true, required: false
    private _setDefaultVersion?: boolean | cdktn.IResolvable; 
    public get setDefaultVersion() {
        return this.getBooleanAttribute('set_default_version');
    }
    public set setDefaultVersion(value: boolean | cdktn.IResolvable) {
        this._setDefaultVersion = value;
    }
    public resetSetDefaultVersion() {
        this._setDefaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setDefaultVersionInput() {
        return this._setDefaultVersion;
    }
}

export class LaunchTemplateConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchTemplateConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchTemplateConfigurationPropertyOutputReference {
        return new LaunchTemplateConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SsmParameterConfigurationProperty {
    /**
    * The account ID for the AMI to update the parameter with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#ami_account_id CcDistributionConfiguration#ami_account_id}
    */
    readonly amiAccountId?: string;
    /**
    * The data type of the SSM parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#data_type CcDistributionConfiguration#data_type}
    */
    readonly dataType?: string;
    /**
    * The name of the SSM parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#parameter_name CcDistributionConfiguration#parameter_name}
    */
    readonly parameterName?: string;
}
export class SsmParameterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SsmParameterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amiAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.amiAccountId = this._amiAccountId;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsmParameterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amiAccountId = undefined;
            this._dataType = undefined;
            this._parameterName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amiAccountId = value.amiAccountId;
            this._dataType = value.dataType;
            this._parameterName = value.parameterName;
        }
    }

    // ami_account_id - computed: true, optional: true, required: false
    private _amiAccountId?: string; 
    public get amiAccountId() {
        return this.getStringAttribute('ami_account_id');
    }
    public set amiAccountId(value: string) {
        this._amiAccountId = value;
    }
    public resetAmiAccountId() {
        this._amiAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiAccountIdInput() {
        return this._amiAccountId;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }
}

export class SsmParameterConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : SsmParameterConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): SsmParameterConfigurationPropertyOutputReference {
        return new SsmParameterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DistributionProperty {
    /**
    * The specific AMI settings (for example, launch permissions, AMI tags).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#ami_distribution_configuration CcDistributionConfiguration#ami_distribution_configuration}
    */
    readonly amiDistributionConfiguration?: AmiDistributionConfigurationProperty;
    /**
    * Container distribution settings for encryption, licensing, and sharing in a specific Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#container_distribution_configuration CcDistributionConfiguration#container_distribution_configuration}
    */
    readonly containerDistributionConfiguration?: ContainerDistributionConfigurationProperty;
    /**
    * The Windows faster-launching configurations to use for AMI distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#fast_launch_configurations CcDistributionConfiguration#fast_launch_configurations}
    */
    readonly fastLaunchConfigurations?: FastLaunchConfigurationProperty[] | cdktn.IResolvable;
    /**
    * A group of launchTemplateConfiguration settings that apply to image distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#launch_template_configurations CcDistributionConfiguration#launch_template_configurations}
    */
    readonly launchTemplateConfigurations?: LaunchTemplateConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The License Manager Configuration to associate with the AMI in the specified Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#license_configuration_arns CcDistributionConfiguration#license_configuration_arns}
    */
    readonly licenseConfigurationArns?: string[];
    /**
    * region
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#region CcDistributionConfiguration#region}
    */
    readonly region: string;
    /**
    * The SSM parameter configurations to use for AMI distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_distribution_configuration#ssm_parameter_configurations CcDistributionConfiguration#ssm_parameter_configurations}
    */
    readonly ssmParameterConfigurations?: SsmParameterConfigurationProperty[] | cdktn.IResolvable;
}
export class DistributionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DistributionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amiDistributionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amiDistributionConfiguration = this._amiDistributionConfiguration?.internalValue;
        }
        if (this._containerDistributionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerDistributionConfiguration = this._containerDistributionConfiguration?.internalValue;
        }
        if (this._fastLaunchConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fastLaunchConfigurations = this._fastLaunchConfigurations?.internalValue;
        }
        if (this._launchTemplateConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateConfigurations = this._launchTemplateConfigurations?.internalValue;
        }
        if (this._licenseConfigurationArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseConfigurationArns = this._licenseConfigurationArns;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._ssmParameterConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssmParameterConfigurations = this._ssmParameterConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DistributionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amiDistributionConfiguration.internalValue = undefined;
            this._containerDistributionConfiguration.internalValue = undefined;
            this._fastLaunchConfigurations.internalValue = undefined;
            this._launchTemplateConfigurations.internalValue = undefined;
            this._licenseConfigurationArns = undefined;
            this._region = undefined;
            this._ssmParameterConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amiDistributionConfiguration.internalValue = value.amiDistributionConfiguration;
            this._containerDistributionConfiguration.internalValue = value.containerDistributionConfiguration;
            this._fastLaunchConfigurations.internalValue = value.fastLaunchConfigurations;
            this._launchTemplateConfigurations.internalValue = value.launchTemplateConfigurations;
            this._licenseConfigurationArns = value.licenseConfigurationArns;
            this._region = value.region;
            this._ssmParameterConfigurations.internalValue = value.ssmParameterConfigurations;
        }
    }

    // ami_distribution_configuration - computed: true, optional: true, required: false
    private _amiDistributionConfiguration = new AmiDistributionConfigurationPropertyOutputReference(this, "ami_distribution_configuration");
    public get amiDistributionConfiguration() {
        return this._amiDistributionConfiguration;
    }
    public putAmiDistributionConfiguration(value: AmiDistributionConfigurationProperty) {
        this._amiDistributionConfiguration.internalValue = value;
    }
    public resetAmiDistributionConfiguration() {
        this._amiDistributionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiDistributionConfigurationInput() {
        return this._amiDistributionConfiguration.internalValue;
    }

    // container_distribution_configuration - computed: true, optional: true, required: false
    private _containerDistributionConfiguration = new ContainerDistributionConfigurationPropertyOutputReference(this, "container_distribution_configuration");
    public get containerDistributionConfiguration() {
        return this._containerDistributionConfiguration;
    }
    public putContainerDistributionConfiguration(value: ContainerDistributionConfigurationProperty) {
        this._containerDistributionConfiguration.internalValue = value;
    }
    public resetContainerDistributionConfiguration() {
        this._containerDistributionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerDistributionConfigurationInput() {
        return this._containerDistributionConfiguration.internalValue;
    }

    // fast_launch_configurations - computed: true, optional: true, required: false
    private _fastLaunchConfigurations = new FastLaunchConfigurationPropertyList(this, "fast_launch_configurations", false);
    public get fastLaunchConfigurations() {
        return this._fastLaunchConfigurations;
    }
    public putFastLaunchConfigurations(value: FastLaunchConfigurationProperty[] | cdktn.IResolvable) {
        this._fastLaunchConfigurations.internalValue = value;
    }
    public resetFastLaunchConfigurations() {
        this._fastLaunchConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fastLaunchConfigurationsInput() {
        return this._fastLaunchConfigurations.internalValue;
    }

    // launch_template_configurations - computed: true, optional: true, required: false
    private _launchTemplateConfigurations = new LaunchTemplateConfigurationPropertyList(this, "launch_template_configurations", false);
    public get launchTemplateConfigurations() {
        return this._launchTemplateConfigurations;
    }
    public putLaunchTemplateConfigurations(value: LaunchTemplateConfigurationProperty[] | cdktn.IResolvable) {
        this._launchTemplateConfigurations.internalValue = value;
    }
    public resetLaunchTemplateConfigurations() {
        this._launchTemplateConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateConfigurationsInput() {
        return this._launchTemplateConfigurations.internalValue;
    }

    // license_configuration_arns - computed: true, optional: true, required: false
    private _licenseConfigurationArns?: string[]; 
    public get licenseConfigurationArns() {
        return this.getListAttribute('license_configuration_arns');
    }
    public set licenseConfigurationArns(value: string[]) {
        this._licenseConfigurationArns = value;
    }
    public resetLicenseConfigurationArns() {
        this._licenseConfigurationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseConfigurationArnsInput() {
        return this._licenseConfigurationArns;
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // ssm_parameter_configurations - computed: true, optional: true, required: false
    private _ssmParameterConfigurations = new SsmParameterConfigurationPropertyList(this, "ssm_parameter_configurations", false);
    public get ssmParameterConfigurations() {
        return this._ssmParameterConfigurations;
    }
    public putSsmParameterConfigurations(value: SsmParameterConfigurationProperty[] | cdktn.IResolvable) {
        this._ssmParameterConfigurations.internalValue = value;
    }
    public resetSsmParameterConfigurations() {
        this._ssmParameterConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssmParameterConfigurationsInput() {
        return this._ssmParameterConfigurations.internalValue;
    }
}

export class DistributionPropertyList extends cdktn.ComplexList {
    public internalValue? : DistributionProperty[] | cdktn.IResolvable

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
    public get(index: number): DistributionPropertyOutputReference {
        return new DistributionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
