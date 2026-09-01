// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The AWS account in which the Amazon DataZone environment is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#aws_account_id CcEnvironmentProfile#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * The AWS region in which this environment profile is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#aws_account_region CcEnvironmentProfile#aws_account_region}
    */
    readonly awsAccountRegion: string;
    /**
    * The description of this Amazon DataZone environment profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#description CcEnvironmentProfile#description}
    */
    readonly description?: string;
    /**
    * The ID of the Amazon DataZone domain in which this environment profile is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#domain_identifier CcEnvironmentProfile#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The ID of the blueprint with which this environment profile is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier CcEnvironmentProfile#environment_blueprint_identifier}
    */
    readonly environmentBlueprintIdentifier: string;
    /**
    * The name of this Amazon DataZone environment profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#name CcEnvironmentProfile#name}
    */
    readonly name: string;
    /**
    * The identifier of the project in which to create the environment profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#project_identifier CcEnvironmentProfile#project_identifier}
    */
    readonly projectIdentifier: string;
    /**
    * The user parameters of this Amazon DataZone environment profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#user_parameters CcEnvironmentProfile#user_parameters}
    */
    readonly userParameters?: CcEnvironmentProfile.EnvironmentParameterProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile awscc_datazone_environment_profile}
*/
export class CcEnvironmentProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_environment_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironmentProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironmentProfile to import
    * @param importFromId The id of the existing CcEnvironmentProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironmentProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_environment_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile awscc_datazone_environment_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_environment_profile',
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
        this._awsAccountId = config.awsAccountId;
        this._awsAccountRegion = config.awsAccountRegion;
        this._description = config.description;
        this._domainIdentifier = config.domainIdentifier;
        this._environmentBlueprintIdentifier = config.environmentBlueprintIdentifier;
        this._name = config.name;
        this._projectIdentifier = config.projectIdentifier;
        this._userParameters.internalValue = config.userParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_account_id - computed: false, optional: false, required: true
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // aws_account_region - computed: false, optional: false, required: true
    private _awsAccountRegion?: string; 
    public get awsAccountRegion() {
        return this.getStringAttribute('aws_account_region');
    }
    public set awsAccountRegion(value: string) {
        this._awsAccountRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountRegionInput() {
        return this._awsAccountRegion;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
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

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // environment_blueprint_id - computed: true, optional: false, required: false
    public get environmentBlueprintId() {
        return this.getStringAttribute('environment_blueprint_id');
    }

    // environment_blueprint_identifier - computed: false, optional: false, required: true
    private _environmentBlueprintIdentifier?: string; 
    public get environmentBlueprintIdentifier() {
        return this.getStringAttribute('environment_blueprint_identifier');
    }
    public set environmentBlueprintIdentifier(value: string) {
        this._environmentBlueprintIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentBlueprintIdentifierInput() {
        return this._environmentBlueprintIdentifier;
    }

    // environment_profile_id - computed: true, optional: false, required: false
    public get environmentProfileId() {
        return this.getStringAttribute('environment_profile_id');
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

    // project_id - computed: true, optional: false, required: false
    public get projectId() {
        return this.getStringAttribute('project_id');
    }

    // project_identifier - computed: false, optional: false, required: true
    private _projectIdentifier?: string; 
    public get projectIdentifier() {
        return this.getStringAttribute('project_identifier');
    }
    public set projectIdentifier(value: string) {
        this._projectIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdentifierInput() {
        return this._projectIdentifier;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // user_parameters - computed: true, optional: true, required: false
    private _userParameters = new CcEnvironmentProfile.EnvironmentParameterPropertyList(this, "user_parameters", false);
    public get userParameters() {
        return this._userParameters;
    }
    public putUserParameters(value: CcEnvironmentProfile.EnvironmentParameterProperty[] | cdktn.IResolvable) {
        this._userParameters.internalValue = value;
    }
    public resetUserParameters() {
        this._userParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userParametersInput() {
        return this._userParameters.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            aws_account_region: cdktn.stringToTerraform(this._awsAccountRegion),
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            environment_blueprint_identifier: cdktn.stringToTerraform(this._environmentBlueprintIdentifier),
            name: cdktn.stringToTerraform(this._name),
            project_identifier: cdktn.stringToTerraform(this._projectIdentifier),
            user_parameters: cdktn.listMapper(ccEnvironmentProfileEnvironmentParameterPropertyToTerraform, false)(this._userParameters.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aws_account_region: {
                value: cdktn.stringToHclTerraform(this._awsAccountRegion),
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
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_blueprint_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentBlueprintIdentifier),
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
            project_identifier: {
                value: cdktn.stringToHclTerraform(this._projectIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_parameters: {
                value: cdktn.listMapperHcl(ccEnvironmentProfileEnvironmentParameterPropertyToHclTerraform, false)(this._userParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironmentProfile.EnvironmentParameterPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentProfileEnvironmentParameterPropertyToTerraform(struct?: CcEnvironmentProfile.EnvironmentParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentProfileEnvironmentParameterPropertyToHclTerraform(struct?: CcEnvironmentProfile.EnvironmentParameterProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironmentProfile {
export interface EnvironmentParameterProperty {
    /**
    * The name of an environment profile parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#name CcEnvironmentProfile#name}
    */
    readonly name?: string;
    /**
    * The value of an environment profile parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_profile#value CcEnvironmentProfile#value}
    */
    readonly value?: string;
}
export class EnvironmentParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnvironmentParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnvironmentParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class EnvironmentParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : EnvironmentParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): EnvironmentParameterPropertyOutputReference {
        return new EnvironmentParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
