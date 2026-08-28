// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyGrantProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#detail CcPolicyGrant#detail}
    */
    readonly detail?: CcPolicyGrant.PolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_identifier CcPolicyGrant#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#entity_identifier CcPolicyGrant#entity_identifier}
    */
    readonly entityIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#entity_type CcPolicyGrant#entity_type}
    */
    readonly entityType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#policy_type CcPolicyGrant#policy_type}
    */
    readonly policyType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#principal CcPolicyGrant#principal}
    */
    readonly principal?: CcPolicyGrant.PolicyGrantPrincipalProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant awscc_datazone_policy_grant}
*/
export class CcPolicyGrant extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_policy_grant";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyGrant resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyGrant to import
    * @param importFromId The id of the existing CcPolicyGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyGrant to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_policy_grant", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant awscc_datazone_policy_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyGrantProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyGrantProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_policy_grant',
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
        this._detail.internalValue = config.detail;
        this._domainIdentifier = config.domainIdentifier;
        this._entityIdentifier = config.entityIdentifier;
        this._entityType = config.entityType;
        this._policyType = config.policyType;
        this._principal.internalValue = config.principal;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // detail - computed: true, optional: true, required: false
    private _detail = new CcPolicyGrant.PolicyGrantDetailPropertyOutputReference(this, "detail");
    public get detail() {
        return this._detail;
    }
    public putDetail(value: CcPolicyGrant.PolicyGrantDetailProperty) {
        this._detail.internalValue = value;
    }
    public resetDetail() {
        this._detail.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailInput() {
        return this._detail.internalValue;
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

    // entity_identifier - computed: false, optional: false, required: true
    private _entityIdentifier?: string; 
    public get entityIdentifier() {
        return this.getStringAttribute('entity_identifier');
    }
    public set entityIdentifier(value: string) {
        this._entityIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdentifierInput() {
        return this._entityIdentifier;
    }

    // entity_type - computed: false, optional: false, required: true
    private _entityType?: string; 
    public get entityType() {
        return this.getStringAttribute('entity_type');
    }
    public set entityType(value: string) {
        this._entityType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypeInput() {
        return this._entityType;
    }

    // grant_id - computed: true, optional: false, required: false
    public get grantId() {
        return this.getStringAttribute('grant_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_type - computed: false, optional: false, required: true
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }

    // principal - computed: true, optional: true, required: false
    private _principal = new CcPolicyGrant.PolicyGrantPrincipalPropertyOutputReference(this, "principal");
    public get principal() {
        return this._principal;
    }
    public putPrincipal(value: CcPolicyGrant.PolicyGrantPrincipalProperty) {
        this._principal.internalValue = value;
    }
    public resetPrincipal() {
        this._principal.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            detail: ccPolicyGrantPolicyGrantDetailPropertyToTerraform(this._detail.internalValue),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            entity_identifier: cdktn.stringToTerraform(this._entityIdentifier),
            entity_type: cdktn.stringToTerraform(this._entityType),
            policy_type: cdktn.stringToTerraform(this._policyType),
            principal: ccPolicyGrantPolicyGrantPrincipalPropertyToTerraform(this._principal.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            detail: {
                value: ccPolicyGrantPolicyGrantDetailPropertyToHclTerraform(this._detail.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicyGrant.PolicyGrantDetailProperty",
            },
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entity_identifier: {
                value: cdktn.stringToHclTerraform(this._entityIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entity_type: {
                value: cdktn.stringToHclTerraform(this._entityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_type: {
                value: cdktn.stringToHclTerraform(this._policyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: ccPolicyGrantPolicyGrantPrincipalPropertyToHclTerraform(this._principal.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicyGrant.PolicyGrantPrincipalProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyGrantAddToProjectMemberPoolPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.AddToProjectMemberPoolPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantAddToProjectMemberPoolPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.AddToProjectMemberPoolPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateAssetTypePolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateAssetTypePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantCreateAssetTypePolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateAssetTypePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateDomainUnitPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateDomainUnitPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantCreateDomainUnitPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateDomainUnitPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateEnvironmentProfilePolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateEnvironmentProfilePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_unit_id: cdktn.stringToTerraform(struct!.domainUnitId),
    }
}


export function ccPolicyGrantCreateEnvironmentProfilePolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateEnvironmentProfilePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_unit_id: {
            value: cdktn.stringToHclTerraform(struct!.domainUnitId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateFormTypePolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateFormTypePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantCreateFormTypePolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateFormTypePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateGlossaryPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateGlossaryPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantCreateGlossaryPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateGlossaryPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateProjectPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateProjectPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantCreateProjectPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateProjectPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantCreateProjectFromProjectProfilePolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.CreateProjectFromProjectProfilePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
        project_profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectProfiles),
    }
}


export function ccPolicyGrantCreateProjectFromProjectProfilePolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.CreateProjectFromProjectProfilePolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        project_profiles: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectProfiles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantOverrideDomainUnitOwnersPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.OverrideDomainUnitOwnersPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantOverrideDomainUnitOwnersPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.OverrideDomainUnitOwnersPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantOverrideProjectOwnersPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.OverrideProjectOwnersPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantOverrideProjectOwnersPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.OverrideProjectOwnersPolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantPolicyGrantDetailPropertyToTerraform(struct?: CcPolicyGrant.PolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_to_project_member_pool: ccPolicyGrantAddToProjectMemberPoolPolicyGrantDetailPropertyToTerraform(struct!.addToProjectMemberPool),
        create_asset_type: ccPolicyGrantCreateAssetTypePolicyGrantDetailPropertyToTerraform(struct!.createAssetType),
        create_domain_unit: ccPolicyGrantCreateDomainUnitPolicyGrantDetailPropertyToTerraform(struct!.createDomainUnit),
        create_environment: cdktn.stringToTerraform(struct!.createEnvironment),
        create_environment_from_blueprint: cdktn.stringToTerraform(struct!.createEnvironmentFromBlueprint),
        create_environment_profile: ccPolicyGrantCreateEnvironmentProfilePolicyGrantDetailPropertyToTerraform(struct!.createEnvironmentProfile),
        create_form_type: ccPolicyGrantCreateFormTypePolicyGrantDetailPropertyToTerraform(struct!.createFormType),
        create_glossary: ccPolicyGrantCreateGlossaryPolicyGrantDetailPropertyToTerraform(struct!.createGlossary),
        create_project: ccPolicyGrantCreateProjectPolicyGrantDetailPropertyToTerraform(struct!.createProject),
        create_project_from_project_profile: ccPolicyGrantCreateProjectFromProjectProfilePolicyGrantDetailPropertyToTerraform(struct!.createProjectFromProjectProfile),
        delegate_create_environment_profile: cdktn.stringToTerraform(struct!.delegateCreateEnvironmentProfile),
        override_domain_unit_owners: ccPolicyGrantOverrideDomainUnitOwnersPolicyGrantDetailPropertyToTerraform(struct!.overrideDomainUnitOwners),
        override_project_owners: ccPolicyGrantOverrideProjectOwnersPolicyGrantDetailPropertyToTerraform(struct!.overrideProjectOwners),
    }
}


export function ccPolicyGrantPolicyGrantDetailPropertyToHclTerraform(struct?: CcPolicyGrant.PolicyGrantDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_to_project_member_pool: {
            value: ccPolicyGrantAddToProjectMemberPoolPolicyGrantDetailPropertyToHclTerraform(struct!.addToProjectMemberPool),
            isBlock: true,
            type: "struct",
            storageClassType: "AddToProjectMemberPoolPolicyGrantDetailProperty",
        },
        create_asset_type: {
            value: ccPolicyGrantCreateAssetTypePolicyGrantDetailPropertyToHclTerraform(struct!.createAssetType),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateAssetTypePolicyGrantDetailProperty",
        },
        create_domain_unit: {
            value: ccPolicyGrantCreateDomainUnitPolicyGrantDetailPropertyToHclTerraform(struct!.createDomainUnit),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateDomainUnitPolicyGrantDetailProperty",
        },
        create_environment: {
            value: cdktn.stringToHclTerraform(struct!.createEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_environment_from_blueprint: {
            value: cdktn.stringToHclTerraform(struct!.createEnvironmentFromBlueprint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_environment_profile: {
            value: ccPolicyGrantCreateEnvironmentProfilePolicyGrantDetailPropertyToHclTerraform(struct!.createEnvironmentProfile),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateEnvironmentProfilePolicyGrantDetailProperty",
        },
        create_form_type: {
            value: ccPolicyGrantCreateFormTypePolicyGrantDetailPropertyToHclTerraform(struct!.createFormType),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateFormTypePolicyGrantDetailProperty",
        },
        create_glossary: {
            value: ccPolicyGrantCreateGlossaryPolicyGrantDetailPropertyToHclTerraform(struct!.createGlossary),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateGlossaryPolicyGrantDetailProperty",
        },
        create_project: {
            value: ccPolicyGrantCreateProjectPolicyGrantDetailPropertyToHclTerraform(struct!.createProject),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateProjectPolicyGrantDetailProperty",
        },
        create_project_from_project_profile: {
            value: ccPolicyGrantCreateProjectFromProjectProfilePolicyGrantDetailPropertyToHclTerraform(struct!.createProjectFromProjectProfile),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateProjectFromProjectProfilePolicyGrantDetailProperty",
        },
        delegate_create_environment_profile: {
            value: cdktn.stringToHclTerraform(struct!.delegateCreateEnvironmentProfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override_domain_unit_owners: {
            value: ccPolicyGrantOverrideDomainUnitOwnersPolicyGrantDetailPropertyToHclTerraform(struct!.overrideDomainUnitOwners),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideDomainUnitOwnersPolicyGrantDetailProperty",
        },
        override_project_owners: {
            value: ccPolicyGrantOverrideProjectOwnersPolicyGrantDetailPropertyToHclTerraform(struct!.overrideProjectOwners),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideProjectOwnersPolicyGrantDetailProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantDomainUnitGrantFilterPropertyToTerraform(struct?: CcPolicyGrant.DomainUnitGrantFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_domain_units_grant_filter: cdktn.stringToTerraform(struct!.allDomainUnitsGrantFilter),
    }
}


export function ccPolicyGrantDomainUnitGrantFilterPropertyToHclTerraform(struct?: CcPolicyGrant.DomainUnitGrantFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_domain_units_grant_filter: {
            value: cdktn.stringToHclTerraform(struct!.allDomainUnitsGrantFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantDomainUnitPolicyGrantPrincipalPropertyToTerraform(struct?: CcPolicyGrant.DomainUnitPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_unit_designation: cdktn.stringToTerraform(struct!.domainUnitDesignation),
        domain_unit_grant_filter: ccPolicyGrantDomainUnitGrantFilterPropertyToTerraform(struct!.domainUnitGrantFilter),
        domain_unit_identifier: cdktn.stringToTerraform(struct!.domainUnitIdentifier),
    }
}


export function ccPolicyGrantDomainUnitPolicyGrantPrincipalPropertyToHclTerraform(struct?: CcPolicyGrant.DomainUnitPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_unit_designation: {
            value: cdktn.stringToHclTerraform(struct!.domainUnitDesignation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_unit_grant_filter: {
            value: ccPolicyGrantDomainUnitGrantFilterPropertyToHclTerraform(struct!.domainUnitGrantFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "DomainUnitGrantFilterProperty",
        },
        domain_unit_identifier: {
            value: cdktn.stringToHclTerraform(struct!.domainUnitIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantGroupPolicyGrantPrincipalPropertyToTerraform(struct?: CcPolicyGrant.GroupPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
    }
}


export function ccPolicyGrantGroupPolicyGrantPrincipalPropertyToHclTerraform(struct?: CcPolicyGrant.GroupPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_identifier: {
            value: cdktn.stringToHclTerraform(struct!.groupIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantDomainUnitFilterForProjectPropertyToTerraform(struct?: CcPolicyGrant.DomainUnitFilterForProjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_unit: cdktn.stringToTerraform(struct!.domainUnit),
        include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    }
}


export function ccPolicyGrantDomainUnitFilterForProjectPropertyToHclTerraform(struct?: CcPolicyGrant.DomainUnitFilterForProjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_unit: {
            value: cdktn.stringToHclTerraform(struct!.domainUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_child_domain_units: {
            value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantProjectGrantFilterPropertyToTerraform(struct?: CcPolicyGrant.ProjectGrantFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_unit_filter: ccPolicyGrantDomainUnitFilterForProjectPropertyToTerraform(struct!.domainUnitFilter),
    }
}


export function ccPolicyGrantProjectGrantFilterPropertyToHclTerraform(struct?: CcPolicyGrant.ProjectGrantFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_unit_filter: {
            value: ccPolicyGrantDomainUnitFilterForProjectPropertyToHclTerraform(struct!.domainUnitFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "DomainUnitFilterForProjectProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantProjectPolicyGrantPrincipalPropertyToTerraform(struct?: CcPolicyGrant.ProjectPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        project_designation: cdktn.stringToTerraform(struct!.projectDesignation),
        project_grant_filter: ccPolicyGrantProjectGrantFilterPropertyToTerraform(struct!.projectGrantFilter),
        project_identifier: cdktn.stringToTerraform(struct!.projectIdentifier),
    }
}


export function ccPolicyGrantProjectPolicyGrantPrincipalPropertyToHclTerraform(struct?: CcPolicyGrant.ProjectPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        project_designation: {
            value: cdktn.stringToHclTerraform(struct!.projectDesignation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_grant_filter: {
            value: ccPolicyGrantProjectGrantFilterPropertyToHclTerraform(struct!.projectGrantFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectGrantFilterProperty",
        },
        project_identifier: {
            value: cdktn.stringToHclTerraform(struct!.projectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantUserPolicyGrantPrincipalPropertyToTerraform(struct?: CcPolicyGrant.UserPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_users_grant_filter: cdktn.stringToTerraform(struct!.allUsersGrantFilter),
        user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
    }
}


export function ccPolicyGrantUserPolicyGrantPrincipalPropertyToHclTerraform(struct?: CcPolicyGrant.UserPolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_users_grant_filter: {
            value: cdktn.stringToHclTerraform(struct!.allUsersGrantFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_identifier: {
            value: cdktn.stringToHclTerraform(struct!.userIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyGrantPolicyGrantPrincipalPropertyToTerraform(struct?: CcPolicyGrant.PolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_unit: ccPolicyGrantDomainUnitPolicyGrantPrincipalPropertyToTerraform(struct!.domainUnit),
        group: ccPolicyGrantGroupPolicyGrantPrincipalPropertyToTerraform(struct!.group),
        project: ccPolicyGrantProjectPolicyGrantPrincipalPropertyToTerraform(struct!.project),
        user: ccPolicyGrantUserPolicyGrantPrincipalPropertyToTerraform(struct!.user),
    }
}


export function ccPolicyGrantPolicyGrantPrincipalPropertyToHclTerraform(struct?: CcPolicyGrant.PolicyGrantPrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_unit: {
            value: ccPolicyGrantDomainUnitPolicyGrantPrincipalPropertyToHclTerraform(struct!.domainUnit),
            isBlock: true,
            type: "struct",
            storageClassType: "DomainUnitPolicyGrantPrincipalProperty",
        },
        group: {
            value: ccPolicyGrantGroupPolicyGrantPrincipalPropertyToHclTerraform(struct!.group),
            isBlock: true,
            type: "struct",
            storageClassType: "GroupPolicyGrantPrincipalProperty",
        },
        project: {
            value: ccPolicyGrantProjectPolicyGrantPrincipalPropertyToHclTerraform(struct!.project),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectPolicyGrantPrincipalProperty",
        },
        user: {
            value: ccPolicyGrantUserPolicyGrantPrincipalPropertyToHclTerraform(struct!.user),
            isBlock: true,
            type: "struct",
            storageClassType: "UserPolicyGrantPrincipalProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPolicyGrant {
export interface AddToProjectMemberPoolPolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class AddToProjectMemberPoolPolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AddToProjectMemberPoolPolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddToProjectMemberPoolPolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface CreateAssetTypePolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class CreateAssetTypePolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateAssetTypePolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateAssetTypePolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface CreateDomainUnitPolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class CreateDomainUnitPolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateDomainUnitPolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateDomainUnitPolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface CreateEnvironmentProfilePolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit_id CcPolicyGrant#domain_unit_id}
    */
    readonly domainUnitId?: string;
}
export class CreateEnvironmentProfilePolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateEnvironmentProfilePolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainUnitId !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnitId = this._domainUnitId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateEnvironmentProfilePolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainUnitId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainUnitId = value.domainUnitId;
        }
    }

    // domain_unit_id - computed: true, optional: true, required: false
    private _domainUnitId?: string; 
    public get domainUnitId() {
        return this.getStringAttribute('domain_unit_id');
    }
    public set domainUnitId(value: string) {
        this._domainUnitId = value;
    }
    public resetDomainUnitId() {
        this._domainUnitId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitIdInput() {
        return this._domainUnitId;
    }
}
export interface CreateFormTypePolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class CreateFormTypePolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateFormTypePolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateFormTypePolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface CreateGlossaryPolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class CreateGlossaryPolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateGlossaryPolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateGlossaryPolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface CreateProjectPolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class CreateProjectPolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateProjectPolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateProjectPolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface CreateProjectFromProjectProfilePolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#project_profiles CcPolicyGrant#project_profiles}
    */
    readonly projectProfiles?: string[];
}
export class CreateProjectFromProjectProfilePolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateProjectFromProjectProfilePolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        if (this._projectProfiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectProfiles = this._projectProfiles;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateProjectFromProjectProfilePolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
            this._projectProfiles = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
            this._projectProfiles = value.projectProfiles;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }

    // project_profiles - computed: true, optional: true, required: false
    private _projectProfiles?: string[]; 
    public get projectProfiles() {
        return this.getListAttribute('project_profiles');
    }
    public set projectProfiles(value: string[]) {
        this._projectProfiles = value;
    }
    public resetProjectProfiles() {
        this._projectProfiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectProfilesInput() {
        return this._projectProfiles;
    }
}
export interface OverrideDomainUnitOwnersPolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class OverrideDomainUnitOwnersPolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideDomainUnitOwnersPolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideDomainUnitOwnersPolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface OverrideProjectOwnersPolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class OverrideProjectOwnersPolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideProjectOwnersPolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideProjectOwnersPolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface PolicyGrantDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#add_to_project_member_pool CcPolicyGrant#add_to_project_member_pool}
    */
    readonly addToProjectMemberPool?: AddToProjectMemberPoolPolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_asset_type CcPolicyGrant#create_asset_type}
    */
    readonly createAssetType?: CreateAssetTypePolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_domain_unit CcPolicyGrant#create_domain_unit}
    */
    readonly createDomainUnit?: CreateDomainUnitPolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_environment CcPolicyGrant#create_environment}
    */
    readonly createEnvironment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_environment_from_blueprint CcPolicyGrant#create_environment_from_blueprint}
    */
    readonly createEnvironmentFromBlueprint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_environment_profile CcPolicyGrant#create_environment_profile}
    */
    readonly createEnvironmentProfile?: CreateEnvironmentProfilePolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_form_type CcPolicyGrant#create_form_type}
    */
    readonly createFormType?: CreateFormTypePolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_glossary CcPolicyGrant#create_glossary}
    */
    readonly createGlossary?: CreateGlossaryPolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_project CcPolicyGrant#create_project}
    */
    readonly createProject?: CreateProjectPolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#create_project_from_project_profile CcPolicyGrant#create_project_from_project_profile}
    */
    readonly createProjectFromProjectProfile?: CreateProjectFromProjectProfilePolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#delegate_create_environment_profile CcPolicyGrant#delegate_create_environment_profile}
    */
    readonly delegateCreateEnvironmentProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#override_domain_unit_owners CcPolicyGrant#override_domain_unit_owners}
    */
    readonly overrideDomainUnitOwners?: OverrideDomainUnitOwnersPolicyGrantDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#override_project_owners CcPolicyGrant#override_project_owners}
    */
    readonly overrideProjectOwners?: OverrideProjectOwnersPolicyGrantDetailProperty;
}
export class PolicyGrantDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyGrantDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addToProjectMemberPool?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.addToProjectMemberPool = this._addToProjectMemberPool?.internalValue;
        }
        if (this._createAssetType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAssetType = this._createAssetType?.internalValue;
        }
        if (this._createDomainUnit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDomainUnit = this._createDomainUnit?.internalValue;
        }
        if (this._createEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.createEnvironment = this._createEnvironment;
        }
        if (this._createEnvironmentFromBlueprint !== undefined) {
            hasAnyValues = true;
            internalValueResult.createEnvironmentFromBlueprint = this._createEnvironmentFromBlueprint;
        }
        if (this._createEnvironmentProfile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createEnvironmentProfile = this._createEnvironmentProfile?.internalValue;
        }
        if (this._createFormType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createFormType = this._createFormType?.internalValue;
        }
        if (this._createGlossary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createGlossary = this._createGlossary?.internalValue;
        }
        if (this._createProject?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createProject = this._createProject?.internalValue;
        }
        if (this._createProjectFromProjectProfile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createProjectFromProjectProfile = this._createProjectFromProjectProfile?.internalValue;
        }
        if (this._delegateCreateEnvironmentProfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.delegateCreateEnvironmentProfile = this._delegateCreateEnvironmentProfile;
        }
        if (this._overrideDomainUnitOwners?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideDomainUnitOwners = this._overrideDomainUnitOwners?.internalValue;
        }
        if (this._overrideProjectOwners?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideProjectOwners = this._overrideProjectOwners?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyGrantDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addToProjectMemberPool.internalValue = undefined;
            this._createAssetType.internalValue = undefined;
            this._createDomainUnit.internalValue = undefined;
            this._createEnvironment = undefined;
            this._createEnvironmentFromBlueprint = undefined;
            this._createEnvironmentProfile.internalValue = undefined;
            this._createFormType.internalValue = undefined;
            this._createGlossary.internalValue = undefined;
            this._createProject.internalValue = undefined;
            this._createProjectFromProjectProfile.internalValue = undefined;
            this._delegateCreateEnvironmentProfile = undefined;
            this._overrideDomainUnitOwners.internalValue = undefined;
            this._overrideProjectOwners.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addToProjectMemberPool.internalValue = value.addToProjectMemberPool;
            this._createAssetType.internalValue = value.createAssetType;
            this._createDomainUnit.internalValue = value.createDomainUnit;
            this._createEnvironment = value.createEnvironment;
            this._createEnvironmentFromBlueprint = value.createEnvironmentFromBlueprint;
            this._createEnvironmentProfile.internalValue = value.createEnvironmentProfile;
            this._createFormType.internalValue = value.createFormType;
            this._createGlossary.internalValue = value.createGlossary;
            this._createProject.internalValue = value.createProject;
            this._createProjectFromProjectProfile.internalValue = value.createProjectFromProjectProfile;
            this._delegateCreateEnvironmentProfile = value.delegateCreateEnvironmentProfile;
            this._overrideDomainUnitOwners.internalValue = value.overrideDomainUnitOwners;
            this._overrideProjectOwners.internalValue = value.overrideProjectOwners;
        }
    }

    // add_to_project_member_pool - computed: true, optional: true, required: false
    private _addToProjectMemberPool = new AddToProjectMemberPoolPolicyGrantDetailPropertyOutputReference(this, "add_to_project_member_pool");
    public get addToProjectMemberPool() {
        return this._addToProjectMemberPool;
    }
    public putAddToProjectMemberPool(value: AddToProjectMemberPoolPolicyGrantDetailProperty) {
        this._addToProjectMemberPool.internalValue = value;
    }
    public resetAddToProjectMemberPool() {
        this._addToProjectMemberPool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addToProjectMemberPoolInput() {
        return this._addToProjectMemberPool.internalValue;
    }

    // create_asset_type - computed: true, optional: true, required: false
    private _createAssetType = new CreateAssetTypePolicyGrantDetailPropertyOutputReference(this, "create_asset_type");
    public get createAssetType() {
        return this._createAssetType;
    }
    public putCreateAssetType(value: CreateAssetTypePolicyGrantDetailProperty) {
        this._createAssetType.internalValue = value;
    }
    public resetCreateAssetType() {
        this._createAssetType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAssetTypeInput() {
        return this._createAssetType.internalValue;
    }

    // create_domain_unit - computed: true, optional: true, required: false
    private _createDomainUnit = new CreateDomainUnitPolicyGrantDetailPropertyOutputReference(this, "create_domain_unit");
    public get createDomainUnit() {
        return this._createDomainUnit;
    }
    public putCreateDomainUnit(value: CreateDomainUnitPolicyGrantDetailProperty) {
        this._createDomainUnit.internalValue = value;
    }
    public resetCreateDomainUnit() {
        this._createDomainUnit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDomainUnitInput() {
        return this._createDomainUnit.internalValue;
    }

    // create_environment - computed: true, optional: true, required: false
    private _createEnvironment?: string; 
    public get createEnvironment() {
        return this.getStringAttribute('create_environment');
    }
    public set createEnvironment(value: string) {
        this._createEnvironment = value;
    }
    public resetCreateEnvironment() {
        this._createEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createEnvironmentInput() {
        return this._createEnvironment;
    }

    // create_environment_from_blueprint - computed: true, optional: true, required: false
    private _createEnvironmentFromBlueprint?: string; 
    public get createEnvironmentFromBlueprint() {
        return this.getStringAttribute('create_environment_from_blueprint');
    }
    public set createEnvironmentFromBlueprint(value: string) {
        this._createEnvironmentFromBlueprint = value;
    }
    public resetCreateEnvironmentFromBlueprint() {
        this._createEnvironmentFromBlueprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createEnvironmentFromBlueprintInput() {
        return this._createEnvironmentFromBlueprint;
    }

    // create_environment_profile - computed: true, optional: true, required: false
    private _createEnvironmentProfile = new CreateEnvironmentProfilePolicyGrantDetailPropertyOutputReference(this, "create_environment_profile");
    public get createEnvironmentProfile() {
        return this._createEnvironmentProfile;
    }
    public putCreateEnvironmentProfile(value: CreateEnvironmentProfilePolicyGrantDetailProperty) {
        this._createEnvironmentProfile.internalValue = value;
    }
    public resetCreateEnvironmentProfile() {
        this._createEnvironmentProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createEnvironmentProfileInput() {
        return this._createEnvironmentProfile.internalValue;
    }

    // create_form_type - computed: true, optional: true, required: false
    private _createFormType = new CreateFormTypePolicyGrantDetailPropertyOutputReference(this, "create_form_type");
    public get createFormType() {
        return this._createFormType;
    }
    public putCreateFormType(value: CreateFormTypePolicyGrantDetailProperty) {
        this._createFormType.internalValue = value;
    }
    public resetCreateFormType() {
        this._createFormType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createFormTypeInput() {
        return this._createFormType.internalValue;
    }

    // create_glossary - computed: true, optional: true, required: false
    private _createGlossary = new CreateGlossaryPolicyGrantDetailPropertyOutputReference(this, "create_glossary");
    public get createGlossary() {
        return this._createGlossary;
    }
    public putCreateGlossary(value: CreateGlossaryPolicyGrantDetailProperty) {
        this._createGlossary.internalValue = value;
    }
    public resetCreateGlossary() {
        this._createGlossary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createGlossaryInput() {
        return this._createGlossary.internalValue;
    }

    // create_project - computed: true, optional: true, required: false
    private _createProject = new CreateProjectPolicyGrantDetailPropertyOutputReference(this, "create_project");
    public get createProject() {
        return this._createProject;
    }
    public putCreateProject(value: CreateProjectPolicyGrantDetailProperty) {
        this._createProject.internalValue = value;
    }
    public resetCreateProject() {
        this._createProject.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createProjectInput() {
        return this._createProject.internalValue;
    }

    // create_project_from_project_profile - computed: true, optional: true, required: false
    private _createProjectFromProjectProfile = new CreateProjectFromProjectProfilePolicyGrantDetailPropertyOutputReference(this, "create_project_from_project_profile");
    public get createProjectFromProjectProfile() {
        return this._createProjectFromProjectProfile;
    }
    public putCreateProjectFromProjectProfile(value: CreateProjectFromProjectProfilePolicyGrantDetailProperty) {
        this._createProjectFromProjectProfile.internalValue = value;
    }
    public resetCreateProjectFromProjectProfile() {
        this._createProjectFromProjectProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createProjectFromProjectProfileInput() {
        return this._createProjectFromProjectProfile.internalValue;
    }

    // delegate_create_environment_profile - computed: true, optional: true, required: false
    private _delegateCreateEnvironmentProfile?: string; 
    public get delegateCreateEnvironmentProfile() {
        return this.getStringAttribute('delegate_create_environment_profile');
    }
    public set delegateCreateEnvironmentProfile(value: string) {
        this._delegateCreateEnvironmentProfile = value;
    }
    public resetDelegateCreateEnvironmentProfile() {
        this._delegateCreateEnvironmentProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delegateCreateEnvironmentProfileInput() {
        return this._delegateCreateEnvironmentProfile;
    }

    // override_domain_unit_owners - computed: true, optional: true, required: false
    private _overrideDomainUnitOwners = new OverrideDomainUnitOwnersPolicyGrantDetailPropertyOutputReference(this, "override_domain_unit_owners");
    public get overrideDomainUnitOwners() {
        return this._overrideDomainUnitOwners;
    }
    public putOverrideDomainUnitOwners(value: OverrideDomainUnitOwnersPolicyGrantDetailProperty) {
        this._overrideDomainUnitOwners.internalValue = value;
    }
    public resetOverrideDomainUnitOwners() {
        this._overrideDomainUnitOwners.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideDomainUnitOwnersInput() {
        return this._overrideDomainUnitOwners.internalValue;
    }

    // override_project_owners - computed: true, optional: true, required: false
    private _overrideProjectOwners = new OverrideProjectOwnersPolicyGrantDetailPropertyOutputReference(this, "override_project_owners");
    public get overrideProjectOwners() {
        return this._overrideProjectOwners;
    }
    public putOverrideProjectOwners(value: OverrideProjectOwnersPolicyGrantDetailProperty) {
        this._overrideProjectOwners.internalValue = value;
    }
    public resetOverrideProjectOwners() {
        this._overrideProjectOwners.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideProjectOwnersInput() {
        return this._overrideProjectOwners.internalValue;
    }
}
export interface DomainUnitGrantFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#all_domain_units_grant_filter CcPolicyGrant#all_domain_units_grant_filter}
    */
    readonly allDomainUnitsGrantFilter?: string;
}
export class DomainUnitGrantFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainUnitGrantFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allDomainUnitsGrantFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.allDomainUnitsGrantFilter = this._allDomainUnitsGrantFilter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainUnitGrantFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allDomainUnitsGrantFilter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allDomainUnitsGrantFilter = value.allDomainUnitsGrantFilter;
        }
    }

    // all_domain_units_grant_filter - computed: true, optional: true, required: false
    private _allDomainUnitsGrantFilter?: string; 
    public get allDomainUnitsGrantFilter() {
        return this.getStringAttribute('all_domain_units_grant_filter');
    }
    public set allDomainUnitsGrantFilter(value: string) {
        this._allDomainUnitsGrantFilter = value;
    }
    public resetAllDomainUnitsGrantFilter() {
        this._allDomainUnitsGrantFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allDomainUnitsGrantFilterInput() {
        return this._allDomainUnitsGrantFilter;
    }
}
export interface DomainUnitPolicyGrantPrincipalProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit_designation CcPolicyGrant#domain_unit_designation}
    */
    readonly domainUnitDesignation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit_grant_filter CcPolicyGrant#domain_unit_grant_filter}
    */
    readonly domainUnitGrantFilter?: DomainUnitGrantFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit_identifier CcPolicyGrant#domain_unit_identifier}
    */
    readonly domainUnitIdentifier?: string;
}
export class DomainUnitPolicyGrantPrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainUnitPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainUnitDesignation !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnitDesignation = this._domainUnitDesignation;
        }
        if (this._domainUnitGrantFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnitGrantFilter = this._domainUnitGrantFilter?.internalValue;
        }
        if (this._domainUnitIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnitIdentifier = this._domainUnitIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainUnitPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainUnitDesignation = undefined;
            this._domainUnitGrantFilter.internalValue = undefined;
            this._domainUnitIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainUnitDesignation = value.domainUnitDesignation;
            this._domainUnitGrantFilter.internalValue = value.domainUnitGrantFilter;
            this._domainUnitIdentifier = value.domainUnitIdentifier;
        }
    }

    // domain_unit_designation - computed: true, optional: true, required: false
    private _domainUnitDesignation?: string; 
    public get domainUnitDesignation() {
        return this.getStringAttribute('domain_unit_designation');
    }
    public set domainUnitDesignation(value: string) {
        this._domainUnitDesignation = value;
    }
    public resetDomainUnitDesignation() {
        this._domainUnitDesignation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitDesignationInput() {
        return this._domainUnitDesignation;
    }

    // domain_unit_grant_filter - computed: true, optional: true, required: false
    private _domainUnitGrantFilter = new DomainUnitGrantFilterPropertyOutputReference(this, "domain_unit_grant_filter");
    public get domainUnitGrantFilter() {
        return this._domainUnitGrantFilter;
    }
    public putDomainUnitGrantFilter(value: DomainUnitGrantFilterProperty) {
        this._domainUnitGrantFilter.internalValue = value;
    }
    public resetDomainUnitGrantFilter() {
        this._domainUnitGrantFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitGrantFilterInput() {
        return this._domainUnitGrantFilter.internalValue;
    }

    // domain_unit_identifier - computed: true, optional: true, required: false
    private _domainUnitIdentifier?: string; 
    public get domainUnitIdentifier() {
        return this.getStringAttribute('domain_unit_identifier');
    }
    public set domainUnitIdentifier(value: string) {
        this._domainUnitIdentifier = value;
    }
    public resetDomainUnitIdentifier() {
        this._domainUnitIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitIdentifierInput() {
        return this._domainUnitIdentifier;
    }
}
export interface GroupPolicyGrantPrincipalProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#group_identifier CcPolicyGrant#group_identifier}
    */
    readonly groupIdentifier?: string;
}
export class GroupPolicyGrantPrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GroupPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupIdentifier = this._groupIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupIdentifier = value.groupIdentifier;
        }
    }

    // group_identifier - computed: true, optional: true, required: false
    private _groupIdentifier?: string; 
    public get groupIdentifier() {
        return this.getStringAttribute('group_identifier');
    }
    public set groupIdentifier(value: string) {
        this._groupIdentifier = value;
    }
    public resetGroupIdentifier() {
        this._groupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdentifierInput() {
        return this._groupIdentifier;
    }
}
export interface DomainUnitFilterForProjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit CcPolicyGrant#domain_unit}
    */
    readonly domainUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#include_child_domain_units CcPolicyGrant#include_child_domain_units}
    */
    readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}
export class DomainUnitFilterForProjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainUnitFilterForProjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnit = this._domainUnit;
        }
        if (this._includeChildDomainUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainUnitFilterForProjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainUnit = undefined;
            this._includeChildDomainUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainUnit = value.domainUnit;
            this._includeChildDomainUnits = value.includeChildDomainUnits;
        }
    }

    // domain_unit - computed: true, optional: true, required: false
    private _domainUnit?: string; 
    public get domainUnit() {
        return this.getStringAttribute('domain_unit');
    }
    public set domainUnit(value: string) {
        this._domainUnit = value;
    }
    public resetDomainUnit() {
        this._domainUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitInput() {
        return this._domainUnit;
    }

    // include_child_domain_units - computed: true, optional: true, required: false
    private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
    public get includeChildDomainUnits() {
        return this.getBooleanAttribute('include_child_domain_units');
    }
    public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
        this._includeChildDomainUnits = value;
    }
    public resetIncludeChildDomainUnits() {
        this._includeChildDomainUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeChildDomainUnitsInput() {
        return this._includeChildDomainUnits;
    }
}
export interface ProjectGrantFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit_filter CcPolicyGrant#domain_unit_filter}
    */
    readonly domainUnitFilter?: DomainUnitFilterForProjectProperty;
}
export class ProjectGrantFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProjectGrantFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainUnitFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnitFilter = this._domainUnitFilter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProjectGrantFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainUnitFilter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainUnitFilter.internalValue = value.domainUnitFilter;
        }
    }

    // domain_unit_filter - computed: true, optional: true, required: false
    private _domainUnitFilter = new DomainUnitFilterForProjectPropertyOutputReference(this, "domain_unit_filter");
    public get domainUnitFilter() {
        return this._domainUnitFilter;
    }
    public putDomainUnitFilter(value: DomainUnitFilterForProjectProperty) {
        this._domainUnitFilter.internalValue = value;
    }
    public resetDomainUnitFilter() {
        this._domainUnitFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitFilterInput() {
        return this._domainUnitFilter.internalValue;
    }
}
export interface ProjectPolicyGrantPrincipalProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#project_designation CcPolicyGrant#project_designation}
    */
    readonly projectDesignation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#project_grant_filter CcPolicyGrant#project_grant_filter}
    */
    readonly projectGrantFilter?: ProjectGrantFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#project_identifier CcPolicyGrant#project_identifier}
    */
    readonly projectIdentifier?: string;
}
export class ProjectPolicyGrantPrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProjectPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._projectDesignation !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectDesignation = this._projectDesignation;
        }
        if (this._projectGrantFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectGrantFilter = this._projectGrantFilter?.internalValue;
        }
        if (this._projectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectIdentifier = this._projectIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProjectPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._projectDesignation = undefined;
            this._projectGrantFilter.internalValue = undefined;
            this._projectIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._projectDesignation = value.projectDesignation;
            this._projectGrantFilter.internalValue = value.projectGrantFilter;
            this._projectIdentifier = value.projectIdentifier;
        }
    }

    // project_designation - computed: true, optional: true, required: false
    private _projectDesignation?: string; 
    public get projectDesignation() {
        return this.getStringAttribute('project_designation');
    }
    public set projectDesignation(value: string) {
        this._projectDesignation = value;
    }
    public resetProjectDesignation() {
        this._projectDesignation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectDesignationInput() {
        return this._projectDesignation;
    }

    // project_grant_filter - computed: true, optional: true, required: false
    private _projectGrantFilter = new ProjectGrantFilterPropertyOutputReference(this, "project_grant_filter");
    public get projectGrantFilter() {
        return this._projectGrantFilter;
    }
    public putProjectGrantFilter(value: ProjectGrantFilterProperty) {
        this._projectGrantFilter.internalValue = value;
    }
    public resetProjectGrantFilter() {
        this._projectGrantFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectGrantFilterInput() {
        return this._projectGrantFilter.internalValue;
    }

    // project_identifier - computed: true, optional: true, required: false
    private _projectIdentifier?: string; 
    public get projectIdentifier() {
        return this.getStringAttribute('project_identifier');
    }
    public set projectIdentifier(value: string) {
        this._projectIdentifier = value;
    }
    public resetProjectIdentifier() {
        this._projectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdentifierInput() {
        return this._projectIdentifier;
    }
}
export interface UserPolicyGrantPrincipalProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#all_users_grant_filter CcPolicyGrant#all_users_grant_filter}
    */
    readonly allUsersGrantFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#user_identifier CcPolicyGrant#user_identifier}
    */
    readonly userIdentifier?: string;
}
export class UserPolicyGrantPrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allUsersGrantFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.allUsersGrantFilter = this._allUsersGrantFilter;
        }
        if (this._userIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.userIdentifier = this._userIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserPolicyGrantPrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allUsersGrantFilter = undefined;
            this._userIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allUsersGrantFilter = value.allUsersGrantFilter;
            this._userIdentifier = value.userIdentifier;
        }
    }

    // all_users_grant_filter - computed: true, optional: true, required: false
    private _allUsersGrantFilter?: string; 
    public get allUsersGrantFilter() {
        return this.getStringAttribute('all_users_grant_filter');
    }
    public set allUsersGrantFilter(value: string) {
        this._allUsersGrantFilter = value;
    }
    public resetAllUsersGrantFilter() {
        this._allUsersGrantFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allUsersGrantFilterInput() {
        return this._allUsersGrantFilter;
    }

    // user_identifier - computed: true, optional: true, required: false
    private _userIdentifier?: string; 
    public get userIdentifier() {
        return this.getStringAttribute('user_identifier');
    }
    public set userIdentifier(value: string) {
        this._userIdentifier = value;
    }
    public resetUserIdentifier() {
        this._userIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdentifierInput() {
        return this._userIdentifier;
    }
}
export interface PolicyGrantPrincipalProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#domain_unit CcPolicyGrant#domain_unit}
    */
    readonly domainUnit?: DomainUnitPolicyGrantPrincipalProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#group CcPolicyGrant#group}
    */
    readonly group?: GroupPolicyGrantPrincipalProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#project CcPolicyGrant#project}
    */
    readonly project?: ProjectPolicyGrantPrincipalProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_policy_grant#user CcPolicyGrant#user}
    */
    readonly user?: UserPolicyGrantPrincipalProperty;
}
export class PolicyGrantPrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyGrantPrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainUnit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainUnit = this._domainUnit?.internalValue;
        }
        if (this._group?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group?.internalValue;
        }
        if (this._project?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.project = this._project?.internalValue;
        }
        if (this._user?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyGrantPrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainUnit.internalValue = undefined;
            this._group.internalValue = undefined;
            this._project.internalValue = undefined;
            this._user.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainUnit.internalValue = value.domainUnit;
            this._group.internalValue = value.group;
            this._project.internalValue = value.project;
            this._user.internalValue = value.user;
        }
    }

    // domain_unit - computed: true, optional: true, required: false
    private _domainUnit = new DomainUnitPolicyGrantPrincipalPropertyOutputReference(this, "domain_unit");
    public get domainUnit() {
        return this._domainUnit;
    }
    public putDomainUnit(value: DomainUnitPolicyGrantPrincipalProperty) {
        this._domainUnit.internalValue = value;
    }
    public resetDomainUnit() {
        this._domainUnit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainUnitInput() {
        return this._domainUnit.internalValue;
    }

    // group - computed: true, optional: true, required: false
    private _group = new GroupPolicyGrantPrincipalPropertyOutputReference(this, "group");
    public get group() {
        return this._group;
    }
    public putGroup(value: GroupPolicyGrantPrincipalProperty) {
        this._group.internalValue = value;
    }
    public resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
        return this._group.internalValue;
    }

    // project - computed: true, optional: true, required: false
    private _project = new ProjectPolicyGrantPrincipalPropertyOutputReference(this, "project");
    public get project() {
        return this._project;
    }
    public putProject(value: ProjectPolicyGrantPrincipalProperty) {
        this._project.internalValue = value;
    }
    public resetProject() {
        this._project.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectInput() {
        return this._project.internalValue;
    }

    // user - computed: true, optional: true, required: false
    private _user = new UserPolicyGrantPrincipalPropertyOutputReference(this, "user");
    public get user() {
        return this._user;
    }
    public putUser(value: UserPolicyGrantPrincipalProperty) {
        this._user.internalValue = value;
    }
    public resetUser() {
        this._user.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
        return this._user.internalValue;
    }
}
}
