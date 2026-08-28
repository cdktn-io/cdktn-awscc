// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The deployment order for the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#deployment_order CcEnvironment#deployment_order}
    */
    readonly deploymentOrder?: number;
    /**
    * The description of the Amazon DataZone environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#description CcEnvironment#description}
    */
    readonly description?: string;
    /**
    * The identifier of the Amazon DataZone domain in which the environment would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#domain_identifier CcEnvironment#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The AWS account in which the Amazon DataZone environment is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#environment_account_identifier CcEnvironment#environment_account_identifier}
    */
    readonly environmentAccountIdentifier?: string;
    /**
    * The AWS region in which the Amazon DataZone environment is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#environment_account_region CcEnvironment#environment_account_region}
    */
    readonly environmentAccountRegion?: string;
    /**
    * The identifier of the environment blueprint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#environment_blueprint_identifier CcEnvironment#environment_blueprint_identifier}
    */
    readonly environmentBlueprintIdentifier?: string;
    /**
    * The identifier of the environment configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#environment_configuration_id CcEnvironment#environment_configuration_id}
    */
    readonly environmentConfigurationId?: string;
    /**
    * The ID of the environment profile with which the Amazon DataZone environment would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#environment_profile_identifier CcEnvironment#environment_profile_identifier}
    */
    readonly environmentProfileIdentifier?: string;
    /**
    * Environment role arn for custom aws environment permissions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#environment_role_arn CcEnvironment#environment_role_arn}
    */
    readonly environmentRoleArn?: string;
    /**
    * The glossary terms that can be used in the Amazon DataZone environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#glossary_terms CcEnvironment#glossary_terms}
    */
    readonly glossaryTerms?: string[];
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#name CcEnvironment#name}
    */
    readonly name: string;
    /**
    * The ID of the Amazon DataZone project in which the environment would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#project_identifier CcEnvironment#project_identifier}
    */
    readonly projectIdentifier: string;
    /**
    * The user parameters of the Amazon DataZone environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#user_parameters CcEnvironment#user_parameters}
    */
    readonly userParameters?: CcEnvironment.EnvironmentParameterProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment awscc_datazone_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment awscc_datazone_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_environment',
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
        this._deploymentOrder = config.deploymentOrder;
        this._description = config.description;
        this._domainIdentifier = config.domainIdentifier;
        this._environmentAccountIdentifier = config.environmentAccountIdentifier;
        this._environmentAccountRegion = config.environmentAccountRegion;
        this._environmentBlueprintIdentifier = config.environmentBlueprintIdentifier;
        this._environmentConfigurationId = config.environmentConfigurationId;
        this._environmentProfileIdentifier = config.environmentProfileIdentifier;
        this._environmentRoleArn = config.environmentRoleArn;
        this._glossaryTerms = config.glossaryTerms;
        this._name = config.name;
        this._projectIdentifier = config.projectIdentifier;
        this._userParameters.internalValue = config.userParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // aws_account_region - computed: true, optional: false, required: false
    public get awsAccountRegion() {
        return this.getStringAttribute('aws_account_region');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // deployment_order - computed: true, optional: true, required: false
    private _deploymentOrder?: number; 
    public get deploymentOrder() {
        return this.getNumberAttribute('deployment_order');
    }
    public set deploymentOrder(value: number) {
        this._deploymentOrder = value;
    }
    public resetDeploymentOrder() {
        this._deploymentOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentOrderInput() {
        return this._deploymentOrder;
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

    // environment_account_identifier - computed: true, optional: true, required: false
    private _environmentAccountIdentifier?: string; 
    public get environmentAccountIdentifier() {
        return this.getStringAttribute('environment_account_identifier');
    }
    public set environmentAccountIdentifier(value: string) {
        this._environmentAccountIdentifier = value;
    }
    public resetEnvironmentAccountIdentifier() {
        this._environmentAccountIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentAccountIdentifierInput() {
        return this._environmentAccountIdentifier;
    }

    // environment_account_region - computed: true, optional: true, required: false
    private _environmentAccountRegion?: string; 
    public get environmentAccountRegion() {
        return this.getStringAttribute('environment_account_region');
    }
    public set environmentAccountRegion(value: string) {
        this._environmentAccountRegion = value;
    }
    public resetEnvironmentAccountRegion() {
        this._environmentAccountRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentAccountRegionInput() {
        return this._environmentAccountRegion;
    }

    // environment_blueprint_id - computed: true, optional: false, required: false
    public get environmentBlueprintId() {
        return this.getStringAttribute('environment_blueprint_id');
    }

    // environment_blueprint_identifier - computed: true, optional: true, required: false
    private _environmentBlueprintIdentifier?: string; 
    public get environmentBlueprintIdentifier() {
        return this.getStringAttribute('environment_blueprint_identifier');
    }
    public set environmentBlueprintIdentifier(value: string) {
        this._environmentBlueprintIdentifier = value;
    }
    public resetEnvironmentBlueprintIdentifier() {
        this._environmentBlueprintIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentBlueprintIdentifierInput() {
        return this._environmentBlueprintIdentifier;
    }

    // environment_configuration_id - computed: true, optional: true, required: false
    private _environmentConfigurationId?: string; 
    public get environmentConfigurationId() {
        return this.getStringAttribute('environment_configuration_id');
    }
    public set environmentConfigurationId(value: string) {
        this._environmentConfigurationId = value;
    }
    public resetEnvironmentConfigurationId() {
        this._environmentConfigurationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentConfigurationIdInput() {
        return this._environmentConfigurationId;
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_profile_id - computed: true, optional: false, required: false
    public get environmentProfileId() {
        return this.getStringAttribute('environment_profile_id');
    }

    // environment_profile_identifier - computed: true, optional: true, required: false
    private _environmentProfileIdentifier?: string; 
    public get environmentProfileIdentifier() {
        return this.getStringAttribute('environment_profile_identifier');
    }
    public set environmentProfileIdentifier(value: string) {
        this._environmentProfileIdentifier = value;
    }
    public resetEnvironmentProfileIdentifier() {
        this._environmentProfileIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentProfileIdentifierInput() {
        return this._environmentProfileIdentifier;
    }

    // environment_role_arn - computed: true, optional: true, required: false
    private _environmentRoleArn?: string; 
    public get environmentRoleArn() {
        return this.getStringAttribute('environment_role_arn');
    }
    public set environmentRoleArn(value: string) {
        this._environmentRoleArn = value;
    }
    public resetEnvironmentRoleArn() {
        this._environmentRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentRoleArnInput() {
        return this._environmentRoleArn;
    }

    // glossary_terms - computed: true, optional: true, required: false
    private _glossaryTerms?: string[]; 
    public get glossaryTerms() {
        return this.getListAttribute('glossary_terms');
    }
    public set glossaryTerms(value: string[]) {
        this._glossaryTerms = value;
    }
    public resetGlossaryTerms() {
        this._glossaryTerms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glossaryTermsInput() {
        return this._glossaryTerms;
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

    // provider_name - computed: true, optional: false, required: false
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // user_parameters - computed: true, optional: true, required: false
    private _userParameters = new CcEnvironment.EnvironmentParameterPropertyList(this, "user_parameters", false);
    public get userParameters() {
        return this._userParameters;
    }
    public putUserParameters(value: CcEnvironment.EnvironmentParameterProperty[] | cdktn.IResolvable) {
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
            deployment_order: cdktn.numberToTerraform(this._deploymentOrder),
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            environment_account_identifier: cdktn.stringToTerraform(this._environmentAccountIdentifier),
            environment_account_region: cdktn.stringToTerraform(this._environmentAccountRegion),
            environment_blueprint_identifier: cdktn.stringToTerraform(this._environmentBlueprintIdentifier),
            environment_configuration_id: cdktn.stringToTerraform(this._environmentConfigurationId),
            environment_profile_identifier: cdktn.stringToTerraform(this._environmentProfileIdentifier),
            environment_role_arn: cdktn.stringToTerraform(this._environmentRoleArn),
            glossary_terms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._glossaryTerms),
            name: cdktn.stringToTerraform(this._name),
            project_identifier: cdktn.stringToTerraform(this._projectIdentifier),
            user_parameters: cdktn.listMapper(ccEnvironmentEnvironmentParameterPropertyToTerraform, false)(this._userParameters.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deployment_order: {
                value: cdktn.numberToHclTerraform(this._deploymentOrder),
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
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_account_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentAccountIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_account_region: {
                value: cdktn.stringToHclTerraform(this._environmentAccountRegion),
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
            environment_configuration_id: {
                value: cdktn.stringToHclTerraform(this._environmentConfigurationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_profile_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentProfileIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_role_arn: {
                value: cdktn.stringToHclTerraform(this._environmentRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            glossary_terms: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._glossaryTerms),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
                value: cdktn.listMapperHcl(ccEnvironmentEnvironmentParameterPropertyToHclTerraform, false)(this._userParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironment.EnvironmentParameterPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentEnvironmentParameterPropertyToTerraform(struct?: CcEnvironment.EnvironmentParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentEnvironmentParameterPropertyToHclTerraform(struct?: CcEnvironment.EnvironmentParameterProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironment {
export interface EnvironmentParameterProperty {
    /**
    * The name of an environment parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#name CcEnvironment#name}
    */
    readonly name?: string;
    /**
    * The value of an environment parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment#value CcEnvironment#value}
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
