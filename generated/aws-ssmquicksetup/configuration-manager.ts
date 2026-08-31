// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationManagerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions CcConfigurationManager#configuration_definitions}
    */
    readonly configurationDefinitions: CcConfigurationManager.ConfigurationDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#description CcConfigurationManager#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#name CcConfigurationManager#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#tags CcConfigurationManager#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager}
*/
export class CcConfigurationManager extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssmquicksetup_configuration_manager";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationManager resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationManager to import
    * @param importFromId The id of the existing CcConfigurationManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationManager to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmquicksetup_configuration_manager", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationManagerProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationManagerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmquicksetup_configuration_manager',
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
        this._configurationDefinitions.internalValue = config.configurationDefinitions;
        this._description = config.description;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration_definitions - computed: false, optional: false, required: true
    private _configurationDefinitions = new CcConfigurationManager.ConfigurationDefinitionPropertyList(this, "configuration_definitions", false);
    public get configurationDefinitions() {
        return this._configurationDefinitions;
    }
    public putConfigurationDefinitions(value: CcConfigurationManager.ConfigurationDefinitionProperty[] | cdktn.IResolvable) {
        this._configurationDefinitions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationDefinitionsInput() {
        return this._configurationDefinitions.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // last_modified_at - computed: true, optional: false, required: false
    public get lastModifiedAt() {
        return this.getStringAttribute('last_modified_at');
    }

    // manager_arn - computed: true, optional: false, required: false
    public get managerArn() {
        return this.getStringAttribute('manager_arn');
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

    // status_summaries - computed: true, optional: false, required: false
    private _statusSummaries = new CcConfigurationManager.StatusSummariesPropertyList(this, "status_summaries", false);
    public get statusSummaries() {
        return this._statusSummaries;
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
            configuration_definitions: cdktn.listMapper(ccConfigurationManagerConfigurationDefinitionPropertyToTerraform, false)(this._configurationDefinitions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration_definitions: {
                value: cdktn.listMapperHcl(ccConfigurationManagerConfigurationDefinitionPropertyToHclTerraform, false)(this._configurationDefinitions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationManager.ConfigurationDefinitionPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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

export function ccConfigurationManagerConfigurationDefinitionPropertyToTerraform(struct?: CcConfigurationManager.ConfigurationDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        local_deployment_administration_role_arn: cdktn.stringToTerraform(struct!.localDeploymentAdministrationRoleArn),
        local_deployment_execution_role_name: cdktn.stringToTerraform(struct!.localDeploymentExecutionRoleName),
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        type: cdktn.stringToTerraform(struct!.type),
        type_version: cdktn.stringToTerraform(struct!.typeVersion),
    }
}


export function ccConfigurationManagerConfigurationDefinitionPropertyToHclTerraform(struct?: CcConfigurationManager.ConfigurationDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_deployment_administration_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.localDeploymentAdministrationRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_deployment_execution_role_name: {
            value: cdktn.stringToHclTerraform(struct!.localDeploymentExecutionRoleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type_version: {
            value: cdktn.stringToHclTerraform(struct!.typeVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationManagerStatusSummariesPropertyToTerraform(struct?: CcConfigurationManager.StatusSummariesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConfigurationManagerStatusSummariesPropertyToHclTerraform(struct?: CcConfigurationManager.StatusSummariesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcConfigurationManager {
export interface ConfigurationDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#id CcConfigurationManager#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn CcConfigurationManager#local_deployment_administration_role_arn}
    */
    readonly localDeploymentAdministrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name CcConfigurationManager#local_deployment_execution_role_name}
    */
    readonly localDeploymentExecutionRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#parameters CcConfigurationManager#parameters}
    */
    readonly parameters: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#type CcConfigurationManager#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmquicksetup_configuration_manager#type_version CcConfigurationManager#type_version}
    */
    readonly typeVersion?: string;
}
export class ConfigurationDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigurationDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._localDeploymentAdministrationRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.localDeploymentAdministrationRoleArn = this._localDeploymentAdministrationRoleArn;
        }
        if (this._localDeploymentExecutionRoleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.localDeploymentExecutionRoleName = this._localDeploymentExecutionRoleName;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._typeVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeVersion = this._typeVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._localDeploymentAdministrationRoleArn = undefined;
            this._localDeploymentExecutionRoleName = undefined;
            this._parameters = undefined;
            this._type = undefined;
            this._typeVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._localDeploymentAdministrationRoleArn = value.localDeploymentAdministrationRoleArn;
            this._localDeploymentExecutionRoleName = value.localDeploymentExecutionRoleName;
            this._parameters = value.parameters;
            this._type = value.type;
            this._typeVersion = value.typeVersion;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // local_deployment_administration_role_arn - computed: true, optional: true, required: false
    private _localDeploymentAdministrationRoleArn?: string; 
    public get localDeploymentAdministrationRoleArn() {
        return this.getStringAttribute('local_deployment_administration_role_arn');
    }
    public set localDeploymentAdministrationRoleArn(value: string) {
        this._localDeploymentAdministrationRoleArn = value;
    }
    public resetLocalDeploymentAdministrationRoleArn() {
        this._localDeploymentAdministrationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localDeploymentAdministrationRoleArnInput() {
        return this._localDeploymentAdministrationRoleArn;
    }

    // local_deployment_execution_role_name - computed: true, optional: true, required: false
    private _localDeploymentExecutionRoleName?: string; 
    public get localDeploymentExecutionRoleName() {
        return this.getStringAttribute('local_deployment_execution_role_name');
    }
    public set localDeploymentExecutionRoleName(value: string) {
        this._localDeploymentExecutionRoleName = value;
    }
    public resetLocalDeploymentExecutionRoleName() {
        this._localDeploymentExecutionRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localDeploymentExecutionRoleNameInput() {
        return this._localDeploymentExecutionRoleName;
    }

    // parameters - computed: false, optional: false, required: true
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // type_version - computed: true, optional: true, required: false
    private _typeVersion?: string; 
    public get typeVersion() {
        return this.getStringAttribute('type_version');
    }
    public set typeVersion(value: string) {
        this._typeVersion = value;
    }
    public resetTypeVersion() {
        this._typeVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeVersionInput() {
        return this._typeVersion;
    }
}

export class ConfigurationDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigurationDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigurationDefinitionPropertyOutputReference {
        return new ConfigurationDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StatusSummariesProperty {
}
export class StatusSummariesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StatusSummariesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatusSummariesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_details - computed: true, optional: false, required: false
    private _statusDetails = new cdktn.StringMap(this, "status_details");
    public get statusDetails() {
        return this._statusDetails;
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // status_type - computed: true, optional: false, required: false
    public get statusType() {
        return this.getStringAttribute('status_type');
    }
}

export class StatusSummariesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): StatusSummariesPropertyOutputReference {
        return new StatusSummariesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
