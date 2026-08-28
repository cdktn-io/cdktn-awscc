// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentBlueprintConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#domain_identifier CcEnvironmentBlueprintConfiguration#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#enabled_regions CcEnvironmentBlueprintConfiguration#enabled_regions}
    */
    readonly enabledRegions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier CcEnvironmentBlueprintConfiguration#environment_blueprint_identifier}
    */
    readonly environmentBlueprintIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary CcEnvironmentBlueprintConfiguration#environment_role_permission_boundary}
    */
    readonly environmentRolePermissionBoundary?: string;
    /**
    * Region-agnostic environment blueprint parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#global_parameters CcEnvironmentBlueprintConfiguration#global_parameters}
    */
    readonly globalParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn CcEnvironmentBlueprintConfiguration#manage_access_role_arn}
    */
    readonly manageAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations CcEnvironmentBlueprintConfiguration#provisioning_configurations}
    */
    readonly provisioningConfigurations?: CcEnvironmentBlueprintConfiguration.ProvisioningConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn CcEnvironmentBlueprintConfiguration#provisioning_role_arn}
    */
    readonly provisioningRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#regional_parameters CcEnvironmentBlueprintConfiguration#regional_parameters}
    */
    readonly regionalParameters?: CcEnvironmentBlueprintConfiguration.RegionalParameterProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}
*/
export class CcEnvironmentBlueprintConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_environment_blueprint_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironmentBlueprintConfiguration to import
    * @param importFromId The id of the existing CcEnvironmentBlueprintConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironmentBlueprintConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_environment_blueprint_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentBlueprintConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentBlueprintConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_environment_blueprint_configuration',
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
        this._domainIdentifier = config.domainIdentifier;
        this._enabledRegions = config.enabledRegions;
        this._environmentBlueprintIdentifier = config.environmentBlueprintIdentifier;
        this._environmentRolePermissionBoundary = config.environmentRolePermissionBoundary;
        this._globalParameters = config.globalParameters;
        this._manageAccessRoleArn = config.manageAccessRoleArn;
        this._provisioningConfigurations.internalValue = config.provisioningConfigurations;
        this._provisioningRoleArn = config.provisioningRoleArn;
        this._regionalParameters.internalValue = config.regionalParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // enabled_regions - computed: false, optional: false, required: true
    private _enabledRegions?: string[]; 
    public get enabledRegions() {
        return this.getListAttribute('enabled_regions');
    }
    public set enabledRegions(value: string[]) {
        this._enabledRegions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledRegionsInput() {
        return this._enabledRegions;
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

    // environment_role_permission_boundary - computed: true, optional: true, required: false
    private _environmentRolePermissionBoundary?: string; 
    public get environmentRolePermissionBoundary() {
        return this.getStringAttribute('environment_role_permission_boundary');
    }
    public set environmentRolePermissionBoundary(value: string) {
        this._environmentRolePermissionBoundary = value;
    }
    public resetEnvironmentRolePermissionBoundary() {
        this._environmentRolePermissionBoundary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentRolePermissionBoundaryInput() {
        return this._environmentRolePermissionBoundary;
    }

    // global_parameters - computed: true, optional: true, required: false
    private _globalParameters?: { [key: string]: string }; 
    public get globalParameters() {
        return this.getStringMapAttribute('global_parameters');
    }
    public set globalParameters(value: { [key: string]: string }) {
        this._globalParameters = value;
    }
    public resetGlobalParameters() {
        this._globalParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalParametersInput() {
        return this._globalParameters;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // manage_access_role_arn - computed: true, optional: true, required: false
    private _manageAccessRoleArn?: string; 
    public get manageAccessRoleArn() {
        return this.getStringAttribute('manage_access_role_arn');
    }
    public set manageAccessRoleArn(value: string) {
        this._manageAccessRoleArn = value;
    }
    public resetManageAccessRoleArn() {
        this._manageAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageAccessRoleArnInput() {
        return this._manageAccessRoleArn;
    }

    // provisioning_configurations - computed: true, optional: true, required: false
    private _provisioningConfigurations = new CcEnvironmentBlueprintConfiguration.ProvisioningConfigurationPropertyList(this, "provisioning_configurations", false);
    public get provisioningConfigurations() {
        return this._provisioningConfigurations;
    }
    public putProvisioningConfigurations(value: CcEnvironmentBlueprintConfiguration.ProvisioningConfigurationProperty[] | cdktn.IResolvable) {
        this._provisioningConfigurations.internalValue = value;
    }
    public resetProvisioningConfigurations() {
        this._provisioningConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningConfigurationsInput() {
        return this._provisioningConfigurations.internalValue;
    }

    // provisioning_role_arn - computed: true, optional: true, required: false
    private _provisioningRoleArn?: string; 
    public get provisioningRoleArn() {
        return this.getStringAttribute('provisioning_role_arn');
    }
    public set provisioningRoleArn(value: string) {
        this._provisioningRoleArn = value;
    }
    public resetProvisioningRoleArn() {
        this._provisioningRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningRoleArnInput() {
        return this._provisioningRoleArn;
    }

    // regional_parameters - computed: true, optional: true, required: false
    private _regionalParameters = new CcEnvironmentBlueprintConfiguration.RegionalParameterPropertyList(this, "regional_parameters", true);
    public get regionalParameters() {
        return this._regionalParameters;
    }
    public putRegionalParameters(value: CcEnvironmentBlueprintConfiguration.RegionalParameterProperty[] | cdktn.IResolvable) {
        this._regionalParameters.internalValue = value;
    }
    public resetRegionalParameters() {
        this._regionalParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionalParametersInput() {
        return this._regionalParameters.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            enabled_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledRegions),
            environment_blueprint_identifier: cdktn.stringToTerraform(this._environmentBlueprintIdentifier),
            environment_role_permission_boundary: cdktn.stringToTerraform(this._environmentRolePermissionBoundary),
            global_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._globalParameters),
            manage_access_role_arn: cdktn.stringToTerraform(this._manageAccessRoleArn),
            provisioning_configurations: cdktn.listMapper(ccEnvironmentBlueprintConfigurationProvisioningConfigurationPropertyToTerraform, false)(this._provisioningConfigurations.internalValue),
            provisioning_role_arn: cdktn.stringToTerraform(this._provisioningRoleArn),
            regional_parameters: cdktn.listMapper(ccEnvironmentBlueprintConfigurationRegionalParameterPropertyToTerraform, false)(this._regionalParameters.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled_regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledRegions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            environment_blueprint_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentBlueprintIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_role_permission_boundary: {
                value: cdktn.stringToHclTerraform(this._environmentRolePermissionBoundary),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_parameters: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._globalParameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            manage_access_role_arn: {
                value: cdktn.stringToHclTerraform(this._manageAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioning_configurations: {
                value: cdktn.listMapperHcl(ccEnvironmentBlueprintConfigurationProvisioningConfigurationPropertyToHclTerraform, false)(this._provisioningConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEnvironmentBlueprintConfiguration.ProvisioningConfigurationPropertyList",
            },
            provisioning_role_arn: {
                value: cdktn.stringToHclTerraform(this._provisioningRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regional_parameters: {
                value: cdktn.listMapperHcl(ccEnvironmentBlueprintConfigurationRegionalParameterPropertyToHclTerraform, false)(this._regionalParameters.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironmentBlueprintConfiguration.RegionalParameterPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentBlueprintConfigurationLakeFormationConfigurationPropertyToTerraform(struct?: CcEnvironmentBlueprintConfiguration.LakeFormationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location_registration_exclude_s3_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locationRegistrationExcludeS3Locations),
        location_registration_role: cdktn.stringToTerraform(struct!.locationRegistrationRole),
    }
}


export function ccEnvironmentBlueprintConfigurationLakeFormationConfigurationPropertyToHclTerraform(struct?: CcEnvironmentBlueprintConfiguration.LakeFormationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        location_registration_exclude_s3_locations: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locationRegistrationExcludeS3Locations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        location_registration_role: {
            value: cdktn.stringToHclTerraform(struct!.locationRegistrationRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentBlueprintConfigurationProvisioningConfigurationPropertyToTerraform(struct?: CcEnvironmentBlueprintConfiguration.ProvisioningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lake_formation_configuration: ccEnvironmentBlueprintConfigurationLakeFormationConfigurationPropertyToTerraform(struct!.lakeFormationConfiguration),
    }
}


export function ccEnvironmentBlueprintConfigurationProvisioningConfigurationPropertyToHclTerraform(struct?: CcEnvironmentBlueprintConfiguration.ProvisioningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lake_formation_configuration: {
            value: ccEnvironmentBlueprintConfigurationLakeFormationConfigurationPropertyToHclTerraform(struct!.lakeFormationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LakeFormationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentBlueprintConfigurationRegionalParameterPropertyToTerraform(struct?: CcEnvironmentBlueprintConfiguration.RegionalParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccEnvironmentBlueprintConfigurationRegionalParameterPropertyToHclTerraform(struct?: CcEnvironmentBlueprintConfiguration.RegionalParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEnvironmentBlueprintConfiguration {
export interface LakeFormationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations CcEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}
    */
    readonly locationRegistrationExcludeS3Locations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#location_registration_role CcEnvironmentBlueprintConfiguration#location_registration_role}
    */
    readonly locationRegistrationRole?: string;
}
export class LakeFormationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LakeFormationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._locationRegistrationExcludeS3Locations !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationRegistrationExcludeS3Locations = this._locationRegistrationExcludeS3Locations;
        }
        if (this._locationRegistrationRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationRegistrationRole = this._locationRegistrationRole;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LakeFormationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._locationRegistrationExcludeS3Locations = undefined;
            this._locationRegistrationRole = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._locationRegistrationExcludeS3Locations = value.locationRegistrationExcludeS3Locations;
            this._locationRegistrationRole = value.locationRegistrationRole;
        }
    }

    // location_registration_exclude_s3_locations - computed: true, optional: true, required: false
    private _locationRegistrationExcludeS3Locations?: string[]; 
    public get locationRegistrationExcludeS3Locations() {
        return this.getListAttribute('location_registration_exclude_s3_locations');
    }
    public set locationRegistrationExcludeS3Locations(value: string[]) {
        this._locationRegistrationExcludeS3Locations = value;
    }
    public resetLocationRegistrationExcludeS3Locations() {
        this._locationRegistrationExcludeS3Locations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationRegistrationExcludeS3LocationsInput() {
        return this._locationRegistrationExcludeS3Locations;
    }

    // location_registration_role - computed: true, optional: true, required: false
    private _locationRegistrationRole?: string; 
    public get locationRegistrationRole() {
        return this.getStringAttribute('location_registration_role');
    }
    public set locationRegistrationRole(value: string) {
        this._locationRegistrationRole = value;
    }
    public resetLocationRegistrationRole() {
        this._locationRegistrationRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationRegistrationRoleInput() {
        return this._locationRegistrationRole;
    }
}
export interface ProvisioningConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration CcEnvironmentBlueprintConfiguration#lake_formation_configuration}
    */
    readonly lakeFormationConfiguration?: LakeFormationConfigurationProperty;
}
export class ProvisioningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProvisioningConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lakeFormationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lakeFormationConfiguration = this._lakeFormationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisioningConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lakeFormationConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lakeFormationConfiguration.internalValue = value.lakeFormationConfiguration;
        }
    }

    // lake_formation_configuration - computed: true, optional: true, required: false
    private _lakeFormationConfiguration = new LakeFormationConfigurationPropertyOutputReference(this, "lake_formation_configuration");
    public get lakeFormationConfiguration() {
        return this._lakeFormationConfiguration;
    }
    public putLakeFormationConfiguration(value: LakeFormationConfigurationProperty) {
        this._lakeFormationConfiguration.internalValue = value;
    }
    public resetLakeFormationConfiguration() {
        this._lakeFormationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lakeFormationConfigurationInput() {
        return this._lakeFormationConfiguration.internalValue;
    }
}

export class ProvisioningConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ProvisioningConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ProvisioningConfigurationPropertyOutputReference {
        return new ProvisioningConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RegionalParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#parameters CcEnvironmentBlueprintConfiguration#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_environment_blueprint_configuration#region CcEnvironmentBlueprintConfiguration#region}
    */
    readonly region?: string;
}
export class RegionalParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegionalParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionalParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameters = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameters = value.parameters;
            this._region = value.region;
        }
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}

export class RegionalParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : RegionalParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): RegionalParameterPropertyOutputReference {
        return new RegionalParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
