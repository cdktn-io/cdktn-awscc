// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceProps extends cdktn.TerraformMetaArguments {
    /**
    * Assertions associated with this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#assertions CcService#assertions}
    */
    readonly assertions?: CcService.AssertionDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Systems associated with this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#associated_systems CcService#associated_systems}
    */
    readonly associatedSystems?: CcService.AssociatedSystemProperty[] | cdktn.IResolvable;
    /**
    * Dependency discovery state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#dependency_discovery CcService#dependency_discovery}
    */
    readonly dependencyDiscovery?: string;
    /**
    * The description of the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#description CcService#description}
    */
    readonly description?: string;
    /**
    * Input sources for this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#input_sources CcService#input_sources}
    */
    readonly inputSources?: CcService.InputSourceDefinitionProperty[] | cdktn.IResolvable;
    /**
    * The KMS key ID for encrypting service data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#kms_key_id CcService#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#name CcService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model CcService#permission_model}
    */
    readonly permissionModel?: CcService.PermissionModelProperty;
    /**
    * The ARN of the resilience policy to associate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#policy_arn CcService#policy_arn}
    */
    readonly policyArn?: string;
    /**
    * AWS regions for the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#regions CcService#regions}
    */
    readonly regions: string[];
    /**
    * Configuration for automatic report generation on a Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_configuration CcService#report_configuration}
    */
    readonly reportConfiguration?: CcService.ServiceReportConfigurationProperty;
    /**
    * Tags assigned to the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tags CcService#tags}
    */
    readonly tags?: CcService.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service}
*/
export class CcService extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resiliencehubv2_service";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcService resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcService to import
    * @param importFromId The id of the existing CcService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcService to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_service", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resiliencehubv2_service',
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
        this._assertions.internalValue = config.assertions;
        this._associatedSystems.internalValue = config.associatedSystems;
        this._dependencyDiscovery = config.dependencyDiscovery;
        this._description = config.description;
        this._inputSources.internalValue = config.inputSources;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._permissionModel.internalValue = config.permissionModel;
        this._policyArn = config.policyArn;
        this._regions = config.regions;
        this._reportConfiguration.internalValue = config.reportConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // assertions - computed: true, optional: true, required: false
    private _assertions = new CcService.AssertionDefinitionPropertyList(this, "assertions", false);
    public get assertions() {
        return this._assertions;
    }
    public putAssertions(value: CcService.AssertionDefinitionProperty[] | cdktn.IResolvable) {
        this._assertions.internalValue = value;
    }
    public resetAssertions() {
        this._assertions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assertionsInput() {
        return this._assertions.internalValue;
    }

    // associated_systems - computed: true, optional: true, required: false
    private _associatedSystems = new CcService.AssociatedSystemPropertyList(this, "associated_systems", false);
    public get associatedSystems() {
        return this._associatedSystems;
    }
    public putAssociatedSystems(value: CcService.AssociatedSystemProperty[] | cdktn.IResolvable) {
        this._associatedSystems.internalValue = value;
    }
    public resetAssociatedSystems() {
        this._associatedSystems.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedSystemsInput() {
        return this._associatedSystems.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // dependency_discovery - computed: true, optional: true, required: false
    private _dependencyDiscovery?: string; 
    public get dependencyDiscovery() {
        return this.getStringAttribute('dependency_discovery');
    }
    public set dependencyDiscovery(value: string) {
        this._dependencyDiscovery = value;
    }
    public resetDependencyDiscovery() {
        this._dependencyDiscovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyDiscoveryInput() {
        return this._dependencyDiscovery;
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

    // effective_policy_values - computed: true, optional: false, required: false
    private _effectivePolicyValues = new CcService.EffectivePolicyValuesPropertyOutputReference(this, "effective_policy_values");
    public get effectivePolicyValues() {
        return this._effectivePolicyValues;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_sources - computed: true, optional: true, required: false
    private _inputSources = new CcService.InputSourceDefinitionPropertyList(this, "input_sources", false);
    public get inputSources() {
        return this._inputSources;
    }
    public putInputSources(value: CcService.InputSourceDefinitionProperty[] | cdktn.IResolvable) {
        this._inputSources.internalValue = value;
    }
    public resetInputSources() {
        this._inputSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSourcesInput() {
        return this._inputSources.internalValue;
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

    // permission_model - computed: true, optional: true, required: false
    private _permissionModel = new CcService.PermissionModelPropertyOutputReference(this, "permission_model");
    public get permissionModel() {
        return this._permissionModel;
    }
    public putPermissionModel(value: CcService.PermissionModelProperty) {
        this._permissionModel.internalValue = value;
    }
    public resetPermissionModel() {
        this._permissionModel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionModelInput() {
        return this._permissionModel.internalValue;
    }

    // policy_arn - computed: true, optional: true, required: false
    private _policyArn?: string; 
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
        this._policyArn = value;
    }
    public resetPolicyArn() {
        this._policyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
        return this._policyArn;
    }

    // regions - computed: false, optional: false, required: true
    private _regions?: string[]; 
    public get regions() {
        return this.getListAttribute('regions');
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // report_configuration - computed: true, optional: true, required: false
    private _reportConfiguration = new CcService.ServiceReportConfigurationPropertyOutputReference(this, "report_configuration");
    public get reportConfiguration() {
        return this._reportConfiguration;
    }
    public putReportConfiguration(value: CcService.ServiceReportConfigurationProperty) {
        this._reportConfiguration.internalValue = value;
    }
    public resetReportConfiguration() {
        this._reportConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportConfigurationInput() {
        return this._reportConfiguration.internalValue;
    }

    // service_arn - computed: true, optional: false, required: false
    public get serviceArn() {
        return this.getStringAttribute('service_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcService.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcService.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            assertions: cdktn.listMapper(ccServiceAssertionDefinitionPropertyToTerraform, false)(this._assertions.internalValue),
            associated_systems: cdktn.listMapper(ccServiceAssociatedSystemPropertyToTerraform, false)(this._associatedSystems.internalValue),
            dependency_discovery: cdktn.stringToTerraform(this._dependencyDiscovery),
            description: cdktn.stringToTerraform(this._description),
            input_sources: cdktn.listMapper(ccServiceInputSourceDefinitionPropertyToTerraform, false)(this._inputSources.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            permission_model: ccServicePermissionModelPropertyToTerraform(this._permissionModel.internalValue),
            policy_arn: cdktn.stringToTerraform(this._policyArn),
            regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
            report_configuration: ccServiceServiceReportConfigurationPropertyToTerraform(this._reportConfiguration.internalValue),
            tags: cdktn.listMapper(ccServiceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assertions: {
                value: cdktn.listMapperHcl(ccServiceAssertionDefinitionPropertyToHclTerraform, false)(this._assertions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.AssertionDefinitionPropertyList",
            },
            associated_systems: {
                value: cdktn.listMapperHcl(ccServiceAssociatedSystemPropertyToHclTerraform, false)(this._associatedSystems.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.AssociatedSystemPropertyList",
            },
            dependency_discovery: {
                value: cdktn.stringToHclTerraform(this._dependencyDiscovery),
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
            input_sources: {
                value: cdktn.listMapperHcl(ccServiceInputSourceDefinitionPropertyToHclTerraform, false)(this._inputSources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.InputSourceDefinitionPropertyList",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            permission_model: {
                value: ccServicePermissionModelPropertyToHclTerraform(this._permissionModel.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.PermissionModelProperty",
            },
            policy_arn: {
                value: cdktn.stringToHclTerraform(this._policyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            report_configuration: {
                value: ccServiceServiceReportConfigurationPropertyToHclTerraform(this._reportConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.ServiceReportConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcService.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceAssertionDefinitionPropertyToTerraform(struct?: CcService.AssertionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccServiceAssertionDefinitionPropertyToHclTerraform(struct?: CcService.AssertionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceAssociatedSystemPropertyToTerraform(struct?: CcService.AssociatedSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        system_arn: cdktn.stringToTerraform(struct!.systemArn),
        user_journey_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userJourneyIds),
    }
}


export function ccServiceAssociatedSystemPropertyToHclTerraform(struct?: CcService.AssociatedSystemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        system_arn: {
            value: cdktn.stringToHclTerraform(struct!.systemArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_journey_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userJourneyIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceAvailabilitySloPropertyToTerraform(struct?: CcService.AvailabilitySloProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceAvailabilitySloPropertyToHclTerraform(struct?: CcService.AvailabilitySloProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMultiAzDrApproachPropertyToTerraform(struct?: CcService.MultiAzDrApproachProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMultiAzDrApproachPropertyToHclTerraform(struct?: CcService.MultiAzDrApproachProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMultiAzRpoPropertyToTerraform(struct?: CcService.MultiAzRpoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMultiAzRpoPropertyToHclTerraform(struct?: CcService.MultiAzRpoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMultiAzRtoPropertyToTerraform(struct?: CcService.MultiAzRtoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMultiAzRtoPropertyToHclTerraform(struct?: CcService.MultiAzRtoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMultiRegionDrApproachPropertyToTerraform(struct?: CcService.MultiRegionDrApproachProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMultiRegionDrApproachPropertyToHclTerraform(struct?: CcService.MultiRegionDrApproachProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMultiRegionRpoPropertyToTerraform(struct?: CcService.MultiRegionRpoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMultiRegionRpoPropertyToHclTerraform(struct?: CcService.MultiRegionRpoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceMultiRegionRtoPropertyToTerraform(struct?: CcService.MultiRegionRtoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceMultiRegionRtoPropertyToHclTerraform(struct?: CcService.MultiRegionRtoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceEffectivePolicyValuesPropertyToTerraform(struct?: CcService.EffectivePolicyValuesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServiceEffectivePolicyValuesPropertyToHclTerraform(struct?: CcService.EffectivePolicyValuesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServiceEksSourcePropertyToTerraform(struct?: CcService.EksSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    }
}


export function ccServiceEksSourcePropertyToHclTerraform(struct?: CcService.EksSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.clusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceResourceTagPropertyToTerraform(struct?: CcService.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccServiceResourceTagPropertyToHclTerraform(struct?: CcService.ResourceTagProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceResourceConfigurationPropertyToTerraform(struct?: CcService.ResourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cfn_stack_arn: cdktn.stringToTerraform(struct!.cfnStackArn),
        design_file_s3_url: cdktn.stringToTerraform(struct!.designFileS3Url),
        eks: ccServiceEksSourcePropertyToTerraform(struct!.eks),
        resource_tags: cdktn.listMapper(ccServiceResourceTagPropertyToTerraform, false)(struct!.resourceTags),
        tf_state_file_url: cdktn.stringToTerraform(struct!.tfStateFileUrl),
    }
}


export function ccServiceResourceConfigurationPropertyToHclTerraform(struct?: CcService.ResourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cfn_stack_arn: {
            value: cdktn.stringToHclTerraform(struct!.cfnStackArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        design_file_s3_url: {
            value: cdktn.stringToHclTerraform(struct!.designFileS3Url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        eks: {
            value: ccServiceEksSourcePropertyToHclTerraform(struct!.eks),
            isBlock: true,
            type: "struct",
            storageClassType: "EksSourceProperty",
        },
        resource_tags: {
            value: cdktn.listMapperHcl(ccServiceResourceTagPropertyToHclTerraform, false)(struct!.resourceTags),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceTagPropertyList",
        },
        tf_state_file_url: {
            value: cdktn.stringToHclTerraform(struct!.tfStateFileUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceInputSourceDefinitionPropertyToTerraform(struct?: CcService.InputSourceDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration: ccServiceResourceConfigurationPropertyToTerraform(struct!.resourceConfiguration),
    }
}


export function ccServiceInputSourceDefinitionPropertyToHclTerraform(struct?: CcService.InputSourceDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration: {
            value: ccServiceResourceConfigurationPropertyToHclTerraform(struct!.resourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceCrossAccountRoleConfigurationPropertyToTerraform(struct?: CcService.CrossAccountRoleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cross_account_role_arn: cdktn.stringToTerraform(struct!.crossAccountRoleArn),
        external_id: cdktn.stringToTerraform(struct!.externalId),
    }
}


export function ccServiceCrossAccountRoleConfigurationPropertyToHclTerraform(struct?: CcService.CrossAccountRoleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cross_account_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.crossAccountRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_id: {
            value: cdktn.stringToHclTerraform(struct!.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServicePermissionModelPropertyToTerraform(struct?: CcService.PermissionModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cross_account_role_arns: cdktn.listMapper(ccServiceCrossAccountRoleConfigurationPropertyToTerraform, false)(struct!.crossAccountRoleArns),
        invoker_role_name: cdktn.stringToTerraform(struct!.invokerRoleName),
    }
}


export function ccServicePermissionModelPropertyToHclTerraform(struct?: CcService.PermissionModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cross_account_role_arns: {
            value: cdktn.listMapperHcl(ccServiceCrossAccountRoleConfigurationPropertyToHclTerraform, false)(struct!.crossAccountRoleArns),
            isBlock: true,
            type: "list",
            storageClassType: "CrossAccountRoleConfigurationPropertyList",
        },
        invoker_role_name: {
            value: cdktn.stringToHclTerraform(struct!.invokerRoleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceS3ReportOutputConfigurationPropertyToTerraform(struct?: CcService.S3ReportOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        bucket_path: cdktn.stringToTerraform(struct!.bucketPath),
    }
}


export function ccServiceS3ReportOutputConfigurationPropertyToHclTerraform(struct?: CcService.S3ReportOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_path: {
            value: cdktn.stringToHclTerraform(struct!.bucketPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceReportOutputConfigurationPropertyToTerraform(struct?: CcService.ReportOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3: ccServiceS3ReportOutputConfigurationPropertyToTerraform(struct!.s3),
    }
}


export function ccServiceReportOutputConfigurationPropertyToHclTerraform(struct?: CcService.ReportOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccServiceS3ReportOutputConfigurationPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ReportOutputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceReportConfigurationPropertyToTerraform(struct?: CcService.ServiceReportConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        report_output: cdktn.listMapper(ccServiceReportOutputConfigurationPropertyToTerraform, false)(struct!.reportOutput),
    }
}


export function ccServiceServiceReportConfigurationPropertyToHclTerraform(struct?: CcService.ServiceReportConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        report_output: {
            value: cdktn.listMapperHcl(ccServiceReportOutputConfigurationPropertyToHclTerraform, false)(struct!.reportOutput),
            isBlock: true,
            type: "list",
            storageClassType: "ReportOutputConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceTagPropertyToTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceTagPropertyToHclTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
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


export namespace CcService {
export interface AssertionDefinitionProperty {
    /**
    * The text of the assertion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#text CcService#text}
    */
    readonly text?: string;
}
export class AssertionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssertionDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssertionDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._text = value.text;
        }
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }
}

export class AssertionDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : AssertionDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): AssertionDefinitionPropertyOutputReference {
        return new AssertionDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AssociatedSystemProperty {
    /**
    * The system ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#system_arn CcService#system_arn}
    */
    readonly systemArn?: string;
    /**
    * User journey IDs associated with this system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#user_journey_ids CcService#user_journey_ids}
    */
    readonly userJourneyIds?: string[];
}
export class AssociatedSystemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssociatedSystemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._systemArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemArn = this._systemArn;
        }
        if (this._userJourneyIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.userJourneyIds = this._userJourneyIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociatedSystemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._systemArn = undefined;
            this._userJourneyIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._systemArn = value.systemArn;
            this._userJourneyIds = value.userJourneyIds;
        }
    }

    // system_arn - computed: true, optional: true, required: false
    private _systemArn?: string; 
    public get systemArn() {
        return this.getStringAttribute('system_arn');
    }
    public set systemArn(value: string) {
        this._systemArn = value;
    }
    public resetSystemArn() {
        this._systemArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemArnInput() {
        return this._systemArn;
    }

    // user_journey_ids - computed: true, optional: true, required: false
    private _userJourneyIds?: string[]; 
    public get userJourneyIds() {
        return this.getListAttribute('user_journey_ids');
    }
    public set userJourneyIds(value: string[]) {
        this._userJourneyIds = value;
    }
    public resetUserJourneyIds() {
        this._userJourneyIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userJourneyIdsInput() {
        return this._userJourneyIds;
    }
}

export class AssociatedSystemPropertyList extends cdktn.ComplexList {
    public internalValue? : AssociatedSystemProperty[] | cdktn.IResolvable

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
    public get(index: number): AssociatedSystemPropertyOutputReference {
        return new AssociatedSystemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AvailabilitySloProperty {
}
export class AvailabilitySloPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AvailabilitySloProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AvailabilitySloProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getNumberAttribute('value');
    }
}
export interface MultiAzDrApproachProperty {
}
export class MultiAzDrApproachPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiAzDrApproachProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiAzDrApproachProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getStringAttribute('value');
    }
}
export interface MultiAzRpoProperty {
}
export class MultiAzRpoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiAzRpoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiAzRpoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getNumberAttribute('value');
    }
}
export interface MultiAzRtoProperty {
}
export class MultiAzRtoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiAzRtoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiAzRtoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getNumberAttribute('value');
    }
}
export interface MultiRegionDrApproachProperty {
}
export class MultiRegionDrApproachPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiRegionDrApproachProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiRegionDrApproachProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getStringAttribute('value');
    }
}
export interface MultiRegionRpoProperty {
}
export class MultiRegionRpoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiRegionRpoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiRegionRpoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getNumberAttribute('value');
    }
}
export interface MultiRegionRtoProperty {
}
export class MultiRegionRtoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiRegionRtoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiRegionRtoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getNumberAttribute('value');
    }
}
export interface EffectivePolicyValuesProperty {
}
export class EffectivePolicyValuesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EffectivePolicyValuesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EffectivePolicyValuesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // availability_slo - computed: true, optional: false, required: false
    private _availabilitySlo = new AvailabilitySloPropertyOutputReference(this, "availability_slo");
    public get availabilitySlo() {
        return this._availabilitySlo;
    }

    // multi_az_dr_approach - computed: true, optional: false, required: false
    private _multiAzDrApproach = new MultiAzDrApproachPropertyOutputReference(this, "multi_az_dr_approach");
    public get multiAzDrApproach() {
        return this._multiAzDrApproach;
    }

    // multi_az_rpo - computed: true, optional: false, required: false
    private _multiAzRpo = new MultiAzRpoPropertyOutputReference(this, "multi_az_rpo");
    public get multiAzRpo() {
        return this._multiAzRpo;
    }

    // multi_az_rto - computed: true, optional: false, required: false
    private _multiAzRto = new MultiAzRtoPropertyOutputReference(this, "multi_az_rto");
    public get multiAzRto() {
        return this._multiAzRto;
    }

    // multi_region_dr_approach - computed: true, optional: false, required: false
    private _multiRegionDrApproach = new MultiRegionDrApproachPropertyOutputReference(this, "multi_region_dr_approach");
    public get multiRegionDrApproach() {
        return this._multiRegionDrApproach;
    }

    // multi_region_rpo - computed: true, optional: false, required: false
    private _multiRegionRpo = new MultiRegionRpoPropertyOutputReference(this, "multi_region_rpo");
    public get multiRegionRpo() {
        return this._multiRegionRpo;
    }

    // multi_region_rto - computed: true, optional: false, required: false
    private _multiRegionRto = new MultiRegionRtoPropertyOutputReference(this, "multi_region_rto");
    public get multiRegionRto() {
        return this._multiRegionRto;
    }
}
export interface EksSourceProperty {
    /**
    * ARN of the EKS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cluster_arn CcService#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * EKS namespaces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#namespaces CcService#namespaces}
    */
    readonly namespaces?: string[];
}
export class EksSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EksSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterArn = this._clusterArn;
        }
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EksSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterArn = undefined;
            this._namespaces = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterArn = value.clusterArn;
            this._namespaces = value.namespaces;
        }
    }

    // cluster_arn - computed: true, optional: true, required: false
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    public resetClusterArn() {
        this._clusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return this.getListAttribute('namespaces');
    }
    public set namespaces(value: string[]) {
        this._namespaces = value;
    }
    public resetNamespaces() {
        this._namespaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespacesInput() {
        return this._namespaces;
    }
}
export interface ResourceTagProperty {
    /**
    * Tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * Tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#values CcService#values}
    */
    readonly values?: string[];
}
export class ResourceTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class ResourceTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagPropertyOutputReference {
        return new ResourceTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceConfigurationProperty {
    /**
    * ARN of a CloudFormation stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cfn_stack_arn CcService#cfn_stack_arn}
    */
    readonly cfnStackArn?: string;
    /**
    * S3 URL of a design file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#design_file_s3_url CcService#design_file_s3_url}
    */
    readonly designFileS3Url?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#eks CcService#eks}
    */
    readonly eks?: EksSourceProperty;
    /**
    * Resource tags to discover resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_tags CcService#resource_tags}
    */
    readonly resourceTags?: ResourceTagProperty[] | cdktn.IResolvable;
    /**
    * URL of a Terraform state file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tf_state_file_url CcService#tf_state_file_url}
    */
    readonly tfStateFileUrl?: string;
}
export class ResourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cfnStackArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cfnStackArn = this._cfnStackArn;
        }
        if (this._designFileS3Url !== undefined) {
            hasAnyValues = true;
            internalValueResult.designFileS3Url = this._designFileS3Url;
        }
        if (this._eks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eks = this._eks?.internalValue;
        }
        if (this._resourceTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags?.internalValue;
        }
        if (this._tfStateFileUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tfStateFileUrl = this._tfStateFileUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cfnStackArn = undefined;
            this._designFileS3Url = undefined;
            this._eks.internalValue = undefined;
            this._resourceTags.internalValue = undefined;
            this._tfStateFileUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cfnStackArn = value.cfnStackArn;
            this._designFileS3Url = value.designFileS3Url;
            this._eks.internalValue = value.eks;
            this._resourceTags.internalValue = value.resourceTags;
            this._tfStateFileUrl = value.tfStateFileUrl;
        }
    }

    // cfn_stack_arn - computed: true, optional: true, required: false
    private _cfnStackArn?: string; 
    public get cfnStackArn() {
        return this.getStringAttribute('cfn_stack_arn');
    }
    public set cfnStackArn(value: string) {
        this._cfnStackArn = value;
    }
    public resetCfnStackArn() {
        this._cfnStackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cfnStackArnInput() {
        return this._cfnStackArn;
    }

    // design_file_s3_url - computed: true, optional: true, required: false
    private _designFileS3Url?: string; 
    public get designFileS3Url() {
        return this.getStringAttribute('design_file_s3_url');
    }
    public set designFileS3Url(value: string) {
        this._designFileS3Url = value;
    }
    public resetDesignFileS3Url() {
        this._designFileS3Url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get designFileS3UrlInput() {
        return this._designFileS3Url;
    }

    // eks - computed: true, optional: true, required: false
    private _eks = new EksSourcePropertyOutputReference(this, "eks");
    public get eks() {
        return this._eks;
    }
    public putEks(value: EksSourceProperty) {
        this._eks.internalValue = value;
    }
    public resetEks() {
        this._eks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eksInput() {
        return this._eks.internalValue;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new ResourceTagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: ResourceTagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // tf_state_file_url - computed: true, optional: true, required: false
    private _tfStateFileUrl?: string; 
    public get tfStateFileUrl() {
        return this.getStringAttribute('tf_state_file_url');
    }
    public set tfStateFileUrl(value: string) {
        this._tfStateFileUrl = value;
    }
    public resetTfStateFileUrl() {
        this._tfStateFileUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tfStateFileUrlInput() {
        return this._tfStateFileUrl;
    }
}
export interface InputSourceDefinitionProperty {
    /**
    * Resource configuration for an input source. Provide exactly one field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_configuration CcService#resource_configuration}
    */
    readonly resourceConfiguration?: ResourceConfigurationProperty;
}
export class InputSourceDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputSourceDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfiguration = this._resourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputSourceDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfiguration.internalValue = value.resourceConfiguration;
        }
    }

    // resource_configuration - computed: true, optional: true, required: false
    private _resourceConfiguration = new ResourceConfigurationPropertyOutputReference(this, "resource_configuration");
    public get resourceConfiguration() {
        return this._resourceConfiguration;
    }
    public putResourceConfiguration(value: ResourceConfigurationProperty) {
        this._resourceConfiguration.internalValue = value;
    }
    public resetResourceConfiguration() {
        this._resourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationInput() {
        return this._resourceConfiguration.internalValue;
    }
}

export class InputSourceDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : InputSourceDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): InputSourceDefinitionPropertyOutputReference {
        return new InputSourceDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CrossAccountRoleConfigurationProperty {
    /**
    * ARN of the cross-account IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arn CcService#cross_account_role_arn}
    */
    readonly crossAccountRoleArn?: string;
    /**
    * External ID for cross-account access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#external_id CcService#external_id}
    */
    readonly externalId?: string;
}
export class CrossAccountRoleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CrossAccountRoleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crossAccountRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.crossAccountRoleArn = this._crossAccountRoleArn;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossAccountRoleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crossAccountRoleArn = undefined;
            this._externalId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crossAccountRoleArn = value.crossAccountRoleArn;
            this._externalId = value.externalId;
        }
    }

    // cross_account_role_arn - computed: true, optional: true, required: false
    private _crossAccountRoleArn?: string; 
    public get crossAccountRoleArn() {
        return this.getStringAttribute('cross_account_role_arn');
    }
    public set crossAccountRoleArn(value: string) {
        this._crossAccountRoleArn = value;
    }
    public resetCrossAccountRoleArn() {
        this._crossAccountRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossAccountRoleArnInput() {
        return this._crossAccountRoleArn;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
    }
}

export class CrossAccountRoleConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : CrossAccountRoleConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): CrossAccountRoleConfigurationPropertyOutputReference {
        return new CrossAccountRoleConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PermissionModelProperty {
    /**
    * Cross-account role ARNs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arns CcService#cross_account_role_arns}
    */
    readonly crossAccountRoleArns?: CrossAccountRoleConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Name of the invoker IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#invoker_role_name CcService#invoker_role_name}
    */
    readonly invokerRoleName?: string;
}
export class PermissionModelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PermissionModelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crossAccountRoleArns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crossAccountRoleArns = this._crossAccountRoleArns?.internalValue;
        }
        if (this._invokerRoleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokerRoleName = this._invokerRoleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PermissionModelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crossAccountRoleArns.internalValue = undefined;
            this._invokerRoleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crossAccountRoleArns.internalValue = value.crossAccountRoleArns;
            this._invokerRoleName = value.invokerRoleName;
        }
    }

    // cross_account_role_arns - computed: true, optional: true, required: false
    private _crossAccountRoleArns = new CrossAccountRoleConfigurationPropertyList(this, "cross_account_role_arns", false);
    public get crossAccountRoleArns() {
        return this._crossAccountRoleArns;
    }
    public putCrossAccountRoleArns(value: CrossAccountRoleConfigurationProperty[] | cdktn.IResolvable) {
        this._crossAccountRoleArns.internalValue = value;
    }
    public resetCrossAccountRoleArns() {
        this._crossAccountRoleArns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossAccountRoleArnsInput() {
        return this._crossAccountRoleArns.internalValue;
    }

    // invoker_role_name - computed: true, optional: true, required: false
    private _invokerRoleName?: string; 
    public get invokerRoleName() {
        return this.getStringAttribute('invoker_role_name');
    }
    public set invokerRoleName(value: string) {
        this._invokerRoleName = value;
    }
    public resetInvokerRoleName() {
        this._invokerRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokerRoleNameInput() {
        return this._invokerRoleName;
    }
}
export interface S3ReportOutputConfigurationProperty {
    /**
    * Account ID of the bucket owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_owner CcService#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * S3 bucket path where reports will be written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_path CcService#bucket_path}
    */
    readonly bucketPath?: string;
}
export class S3ReportOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ReportOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._bucketPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPath = this._bucketPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ReportOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketOwner = undefined;
            this._bucketPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketOwner = value.bucketOwner;
            this._bucketPath = value.bucketPath;
        }
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // bucket_path - computed: true, optional: true, required: false
    private _bucketPath?: string; 
    public get bucketPath() {
        return this.getStringAttribute('bucket_path');
    }
    public set bucketPath(value: string) {
        this._bucketPath = value;
    }
    public resetBucketPath() {
        this._bucketPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPathInput() {
        return this._bucketPath;
    }
}
export interface ReportOutputConfigurationProperty {
    /**
    * S3 configuration for report output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#s3 CcService#s3}
    */
    readonly s3?: S3ReportOutputConfigurationProperty;
}
export class ReportOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReportOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReportOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3ReportOutputConfigurationPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3ReportOutputConfigurationProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}

export class ReportOutputConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReportOutputConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReportOutputConfigurationPropertyOutputReference {
        return new ReportOutputConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceReportConfigurationProperty {
    /**
    * Output destinations for generated reports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_output CcService#report_output}
    */
    readonly reportOutput?: ReportOutputConfigurationProperty[] | cdktn.IResolvable;
}
export class ServiceReportConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceReportConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reportOutput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportOutput = this._reportOutput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceReportConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reportOutput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reportOutput.internalValue = value.reportOutput;
        }
    }

    // report_output - computed: true, optional: true, required: false
    private _reportOutput = new ReportOutputConfigurationPropertyList(this, "report_output", false);
    public get reportOutput() {
        return this._reportOutput;
    }
    public putReportOutput(value: ReportOutputConfigurationProperty[] | cdktn.IResolvable) {
        this._reportOutput.internalValue = value;
    }
    public resetReportOutput() {
        this._reportOutput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportOutputInput() {
        return this._reportOutput.internalValue;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#value CcService#value}
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
