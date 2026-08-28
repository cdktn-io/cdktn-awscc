// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPatchBaselineProps extends cdktn.TerraformMetaArguments {
    /**
    * A set of rules defining the approval rules for a patch baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#approval_rules CcPatchBaseline#approval_rules}
    */
    readonly approvalRules?: CcPatchBaseline.RuleGroupProperty;
    /**
    * A list of explicitly approved patches for the baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#approved_patches CcPatchBaseline#approved_patches}
    */
    readonly approvedPatches?: string[];
    /**
    * Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#approved_patches_compliance_level CcPatchBaseline#approved_patches_compliance_level}
    */
    readonly approvedPatchesComplianceLevel?: string;
    /**
    * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security CcPatchBaseline#approved_patches_enable_non_security}
    */
    readonly approvedPatchesEnableNonSecurity?: boolean | cdktn.IResolvable;
    /**
    * The compliance status for vendor recommended security updates that are not approved by this patch baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status CcPatchBaseline#available_security_updates_compliance_status}
    */
    readonly availableSecurityUpdatesComplianceStatus?: string;
    /**
    * Set the baseline as default baseline. Only registering to default patch baseline is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#default_baseline CcPatchBaseline#default_baseline}
    */
    readonly defaultBaseline?: boolean | cdktn.IResolvable;
    /**
    * The description of the patch baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#description CcPatchBaseline#description}
    */
    readonly description?: string;
    /**
    * A set of global filters used to include patches in the baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#global_filters CcPatchBaseline#global_filters}
    */
    readonly globalFilters?: CcPatchBaseline.GlobalFiltersProperty;
    /**
    * The name of the patch baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#name CcPatchBaseline#name}
    */
    readonly name: string;
    /**
    * Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#operating_system CcPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * PatchGroups is used to associate instances with a specific patch baseline
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#patch_groups CcPatchBaseline#patch_groups}
    */
    readonly patchGroups?: string[];
    /**
    * A list of explicitly rejected patches for the baseline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#rejected_patches CcPatchBaseline#rejected_patches}
    */
    readonly rejectedPatches?: string[];
    /**
    * The action for Patch Manager to take on patches included in the RejectedPackages list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#rejected_patches_action CcPatchBaseline#rejected_patches_action}
    */
    readonly rejectedPatchesAction?: string;
    /**
    * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#sources CcPatchBaseline#sources}
    */
    readonly sources?: CcPatchBaseline.PatchSourceProperty[] | cdktn.IResolvable;
    /**
    * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#tags CcPatchBaseline#tags}
    */
    readonly tags?: CcPatchBaseline.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline}
*/
export class CcPatchBaseline extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_patch_baseline";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPatchBaseline resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPatchBaseline to import
    * @param importFromId The id of the existing CcPatchBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPatchBaseline to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_patch_baseline", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPatchBaselineProps
    */
    public constructor(scope: Construct, id: string, config: CcPatchBaselineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_patch_baseline',
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
        this._approvalRules.internalValue = config.approvalRules;
        this._approvedPatches = config.approvedPatches;
        this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
        this._approvedPatchesEnableNonSecurity = config.approvedPatchesEnableNonSecurity;
        this._availableSecurityUpdatesComplianceStatus = config.availableSecurityUpdatesComplianceStatus;
        this._defaultBaseline = config.defaultBaseline;
        this._description = config.description;
        this._globalFilters.internalValue = config.globalFilters;
        this._name = config.name;
        this._operatingSystem = config.operatingSystem;
        this._patchGroups = config.patchGroups;
        this._rejectedPatches = config.rejectedPatches;
        this._rejectedPatchesAction = config.rejectedPatchesAction;
        this._sources.internalValue = config.sources;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // approval_rules - computed: true, optional: true, required: false
    private _approvalRules = new CcPatchBaseline.RuleGroupPropertyOutputReference(this, "approval_rules");
    public get approvalRules() {
        return this._approvalRules;
    }
    public putApprovalRules(value: CcPatchBaseline.RuleGroupProperty) {
        this._approvalRules.internalValue = value;
    }
    public resetApprovalRules() {
        this._approvalRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvalRulesInput() {
        return this._approvalRules.internalValue;
    }

    // approved_patches - computed: true, optional: true, required: false
    private _approvedPatches?: string[]; 
    public get approvedPatches() {
        return this.getListAttribute('approved_patches');
    }
    public set approvedPatches(value: string[]) {
        this._approvedPatches = value;
    }
    public resetApprovedPatches() {
        this._approvedPatches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedPatchesInput() {
        return this._approvedPatches;
    }

    // approved_patches_compliance_level - computed: true, optional: true, required: false
    private _approvedPatchesComplianceLevel?: string; 
    public get approvedPatchesComplianceLevel() {
        return this.getStringAttribute('approved_patches_compliance_level');
    }
    public set approvedPatchesComplianceLevel(value: string) {
        this._approvedPatchesComplianceLevel = value;
    }
    public resetApprovedPatchesComplianceLevel() {
        this._approvedPatchesComplianceLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedPatchesComplianceLevelInput() {
        return this._approvedPatchesComplianceLevel;
    }

    // approved_patches_enable_non_security - computed: true, optional: true, required: false
    private _approvedPatchesEnableNonSecurity?: boolean | cdktn.IResolvable; 
    public get approvedPatchesEnableNonSecurity() {
        return this.getBooleanAttribute('approved_patches_enable_non_security');
    }
    public set approvedPatchesEnableNonSecurity(value: boolean | cdktn.IResolvable) {
        this._approvedPatchesEnableNonSecurity = value;
    }
    public resetApprovedPatchesEnableNonSecurity() {
        this._approvedPatchesEnableNonSecurity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedPatchesEnableNonSecurityInput() {
        return this._approvedPatchesEnableNonSecurity;
    }

    // available_security_updates_compliance_status - computed: true, optional: true, required: false
    private _availableSecurityUpdatesComplianceStatus?: string; 
    public get availableSecurityUpdatesComplianceStatus() {
        return this.getStringAttribute('available_security_updates_compliance_status');
    }
    public set availableSecurityUpdatesComplianceStatus(value: string) {
        this._availableSecurityUpdatesComplianceStatus = value;
    }
    public resetAvailableSecurityUpdatesComplianceStatus() {
        this._availableSecurityUpdatesComplianceStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availableSecurityUpdatesComplianceStatusInput() {
        return this._availableSecurityUpdatesComplianceStatus;
    }

    // default_baseline - computed: true, optional: true, required: false
    private _defaultBaseline?: boolean | cdktn.IResolvable; 
    public get defaultBaseline() {
        return this.getBooleanAttribute('default_baseline');
    }
    public set defaultBaseline(value: boolean | cdktn.IResolvable) {
        this._defaultBaseline = value;
    }
    public resetDefaultBaseline() {
        this._defaultBaseline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBaselineInput() {
        return this._defaultBaseline;
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

    // global_filters - computed: true, optional: true, required: false
    private _globalFilters = new CcPatchBaseline.GlobalFiltersPropertyOutputReference(this, "global_filters");
    public get globalFilters() {
        return this._globalFilters;
    }
    public putGlobalFilters(value: CcPatchBaseline.GlobalFiltersProperty) {
        this._globalFilters.internalValue = value;
    }
    public resetGlobalFilters() {
        this._globalFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalFiltersInput() {
        return this._globalFilters.internalValue;
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

    // operating_system - computed: true, optional: true, required: false
    private _operatingSystem?: string; 
    public get operatingSystem() {
        return this.getStringAttribute('operating_system');
    }
    public set operatingSystem(value: string) {
        this._operatingSystem = value;
    }
    public resetOperatingSystem() {
        this._operatingSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemInput() {
        return this._operatingSystem;
    }

    // patch_baseline_id - computed: true, optional: false, required: false
    public get patchBaselineId() {
        return this.getStringAttribute('patch_baseline_id');
    }

    // patch_groups - computed: true, optional: true, required: false
    private _patchGroups?: string[]; 
    public get patchGroups() {
        return this.getListAttribute('patch_groups');
    }
    public set patchGroups(value: string[]) {
        this._patchGroups = value;
    }
    public resetPatchGroups() {
        this._patchGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchGroupsInput() {
        return this._patchGroups;
    }

    // rejected_patches - computed: true, optional: true, required: false
    private _rejectedPatches?: string[]; 
    public get rejectedPatches() {
        return this.getListAttribute('rejected_patches');
    }
    public set rejectedPatches(value: string[]) {
        this._rejectedPatches = value;
    }
    public resetRejectedPatches() {
        this._rejectedPatches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rejectedPatchesInput() {
        return this._rejectedPatches;
    }

    // rejected_patches_action - computed: true, optional: true, required: false
    private _rejectedPatchesAction?: string; 
    public get rejectedPatchesAction() {
        return this.getStringAttribute('rejected_patches_action');
    }
    public set rejectedPatchesAction(value: string) {
        this._rejectedPatchesAction = value;
    }
    public resetRejectedPatchesAction() {
        this._rejectedPatchesAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rejectedPatchesActionInput() {
        return this._rejectedPatchesAction;
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new CcPatchBaseline.PatchSourcePropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: CcPatchBaseline.PatchSourceProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    public resetSources() {
        this._sources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPatchBaseline.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPatchBaseline.TagProperty[] | cdktn.IResolvable) {
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
            approval_rules: ccPatchBaselineRuleGroupPropertyToTerraform(this._approvalRules.internalValue),
            approved_patches: cdktn.listMapper(cdktn.stringToTerraform, false)(this._approvedPatches),
            approved_patches_compliance_level: cdktn.stringToTerraform(this._approvedPatchesComplianceLevel),
            approved_patches_enable_non_security: cdktn.booleanToTerraform(this._approvedPatchesEnableNonSecurity),
            available_security_updates_compliance_status: cdktn.stringToTerraform(this._availableSecurityUpdatesComplianceStatus),
            default_baseline: cdktn.booleanToTerraform(this._defaultBaseline),
            description: cdktn.stringToTerraform(this._description),
            global_filters: ccPatchBaselineGlobalFiltersPropertyToTerraform(this._globalFilters.internalValue),
            name: cdktn.stringToTerraform(this._name),
            operating_system: cdktn.stringToTerraform(this._operatingSystem),
            patch_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._patchGroups),
            rejected_patches: cdktn.listMapper(cdktn.stringToTerraform, false)(this._rejectedPatches),
            rejected_patches_action: cdktn.stringToTerraform(this._rejectedPatchesAction),
            sources: cdktn.listMapper(ccPatchBaselinePatchSourcePropertyToTerraform, false)(this._sources.internalValue),
            tags: cdktn.listMapper(ccPatchBaselineTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            approval_rules: {
                value: ccPatchBaselineRuleGroupPropertyToHclTerraform(this._approvalRules.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPatchBaseline.RuleGroupProperty",
            },
            approved_patches: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._approvedPatches),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            approved_patches_compliance_level: {
                value: cdktn.stringToHclTerraform(this._approvedPatchesComplianceLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            approved_patches_enable_non_security: {
                value: cdktn.booleanToHclTerraform(this._approvedPatchesEnableNonSecurity),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            available_security_updates_compliance_status: {
                value: cdktn.stringToHclTerraform(this._availableSecurityUpdatesComplianceStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_baseline: {
                value: cdktn.booleanToHclTerraform(this._defaultBaseline),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_filters: {
                value: ccPatchBaselineGlobalFiltersPropertyToHclTerraform(this._globalFilters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPatchBaseline.GlobalFiltersProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            operating_system: {
                value: cdktn.stringToHclTerraform(this._operatingSystem),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            patch_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._patchGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            rejected_patches: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._rejectedPatches),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            rejected_patches_action: {
                value: cdktn.stringToHclTerraform(this._rejectedPatchesAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sources: {
                value: cdktn.listMapperHcl(ccPatchBaselinePatchSourcePropertyToHclTerraform, false)(this._sources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPatchBaseline.PatchSourcePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPatchBaselineTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPatchBaseline.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPatchBaselinePatchFilterPropertyToTerraform(struct?: CcPatchBaseline.PatchFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccPatchBaselinePatchFilterPropertyToHclTerraform(struct?: CcPatchBaseline.PatchFilterProperty | cdktn.IResolvable): any {
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


export function ccPatchBaselinePatchFilterGroupPropertyToTerraform(struct?: CcPatchBaseline.PatchFilterGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        patch_filters: cdktn.listMapper(ccPatchBaselinePatchFilterPropertyToTerraform, false)(struct!.patchFilters),
    }
}


export function ccPatchBaselinePatchFilterGroupPropertyToHclTerraform(struct?: CcPatchBaseline.PatchFilterGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        patch_filters: {
            value: cdktn.listMapperHcl(ccPatchBaselinePatchFilterPropertyToHclTerraform, false)(struct!.patchFilters),
            isBlock: true,
            type: "list",
            storageClassType: "PatchFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPatchBaselineRulePropertyToTerraform(struct?: CcPatchBaseline.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        approve_after_days: cdktn.numberToTerraform(struct!.approveAfterDays),
        approve_until_date: cdktn.stringToTerraform(struct!.approveUntilDate),
        compliance_level: cdktn.stringToTerraform(struct!.complianceLevel),
        enable_non_security: cdktn.booleanToTerraform(struct!.enableNonSecurity),
        patch_filter_group: ccPatchBaselinePatchFilterGroupPropertyToTerraform(struct!.patchFilterGroup),
    }
}


export function ccPatchBaselineRulePropertyToHclTerraform(struct?: CcPatchBaseline.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        approve_after_days: {
            value: cdktn.numberToHclTerraform(struct!.approveAfterDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        approve_until_date: {
            value: cdktn.stringToHclTerraform(struct!.approveUntilDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compliance_level: {
            value: cdktn.stringToHclTerraform(struct!.complianceLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_non_security: {
            value: cdktn.booleanToHclTerraform(struct!.enableNonSecurity),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        patch_filter_group: {
            value: ccPatchBaselinePatchFilterGroupPropertyToHclTerraform(struct!.patchFilterGroup),
            isBlock: true,
            type: "struct",
            storageClassType: "PatchFilterGroupProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPatchBaselineRuleGroupPropertyToTerraform(struct?: CcPatchBaseline.RuleGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        patch_rules: cdktn.listMapper(ccPatchBaselineRulePropertyToTerraform, false)(struct!.patchRules),
    }
}


export function ccPatchBaselineRuleGroupPropertyToHclTerraform(struct?: CcPatchBaseline.RuleGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        patch_rules: {
            value: cdktn.listMapperHcl(ccPatchBaselineRulePropertyToHclTerraform, false)(struct!.patchRules),
            isBlock: true,
            type: "list",
            storageClassType: "RulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPatchBaselinePatchFiltersPropertyToTerraform(struct?: CcPatchBaseline.PatchFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccPatchBaselinePatchFiltersPropertyToHclTerraform(struct?: CcPatchBaseline.PatchFiltersProperty | cdktn.IResolvable): any {
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


export function ccPatchBaselineGlobalFiltersPropertyToTerraform(struct?: CcPatchBaseline.GlobalFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        patch_filters: cdktn.listMapper(ccPatchBaselinePatchFiltersPropertyToTerraform, false)(struct!.patchFilters),
    }
}


export function ccPatchBaselineGlobalFiltersPropertyToHclTerraform(struct?: CcPatchBaseline.GlobalFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        patch_filters: {
            value: cdktn.listMapperHcl(ccPatchBaselinePatchFiltersPropertyToHclTerraform, false)(struct!.patchFilters),
            isBlock: true,
            type: "list",
            storageClassType: "PatchFiltersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPatchBaselinePatchSourcePropertyToTerraform(struct?: CcPatchBaseline.PatchSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration: cdktn.stringToTerraform(struct!.configuration),
        name: cdktn.stringToTerraform(struct!.name),
        products: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.products),
    }
}


export function ccPatchBaselinePatchSourcePropertyToHclTerraform(struct?: CcPatchBaseline.PatchSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration: {
            value: cdktn.stringToHclTerraform(struct!.configuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        products: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.products),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPatchBaselineTagPropertyToTerraform(struct?: CcPatchBaseline.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPatchBaselineTagPropertyToHclTerraform(struct?: CcPatchBaseline.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPatchBaseline {
export interface PatchFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#key CcPatchBaseline#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#values CcPatchBaseline#values}
    */
    readonly values?: string[];
}
export class PatchFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PatchFilterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PatchFilterProperty | cdktn.IResolvable | undefined) {
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

export class PatchFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : PatchFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): PatchFilterPropertyOutputReference {
        return new PatchFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PatchFilterGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#patch_filters CcPatchBaseline#patch_filters}
    */
    readonly patchFilters?: PatchFilterProperty[] | cdktn.IResolvable;
}
export class PatchFilterGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PatchFilterGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._patchFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchFilters = this._patchFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PatchFilterGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._patchFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._patchFilters.internalValue = value.patchFilters;
        }
    }

    // patch_filters - computed: true, optional: true, required: false
    private _patchFilters = new PatchFilterPropertyList(this, "patch_filters", false);
    public get patchFilters() {
        return this._patchFilters;
    }
    public putPatchFilters(value: PatchFilterProperty[] | cdktn.IResolvable) {
        this._patchFilters.internalValue = value;
    }
    public resetPatchFilters() {
        this._patchFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchFiltersInput() {
        return this._patchFilters.internalValue;
    }
}
export interface RuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#approve_after_days CcPatchBaseline#approve_after_days}
    */
    readonly approveAfterDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#approve_until_date CcPatchBaseline#approve_until_date}
    */
    readonly approveUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#compliance_level CcPatchBaseline#compliance_level}
    */
    readonly complianceLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#enable_non_security CcPatchBaseline#enable_non_security}
    */
    readonly enableNonSecurity?: boolean | cdktn.IResolvable;
    /**
    * The patch filter group that defines the criteria for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#patch_filter_group CcPatchBaseline#patch_filter_group}
    */
    readonly patchFilterGroup?: PatchFilterGroupProperty;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._approveAfterDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.approveAfterDays = this._approveAfterDays;
        }
        if (this._approveUntilDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.approveUntilDate = this._approveUntilDate;
        }
        if (this._complianceLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceLevel = this._complianceLevel;
        }
        if (this._enableNonSecurity !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableNonSecurity = this._enableNonSecurity;
        }
        if (this._patchFilterGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchFilterGroup = this._patchFilterGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._approveAfterDays = undefined;
            this._approveUntilDate = undefined;
            this._complianceLevel = undefined;
            this._enableNonSecurity = undefined;
            this._patchFilterGroup.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._approveAfterDays = value.approveAfterDays;
            this._approveUntilDate = value.approveUntilDate;
            this._complianceLevel = value.complianceLevel;
            this._enableNonSecurity = value.enableNonSecurity;
            this._patchFilterGroup.internalValue = value.patchFilterGroup;
        }
    }

    // approve_after_days - computed: true, optional: true, required: false
    private _approveAfterDays?: number; 
    public get approveAfterDays() {
        return this.getNumberAttribute('approve_after_days');
    }
    public set approveAfterDays(value: number) {
        this._approveAfterDays = value;
    }
    public resetApproveAfterDays() {
        this._approveAfterDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approveAfterDaysInput() {
        return this._approveAfterDays;
    }

    // approve_until_date - computed: true, optional: true, required: false
    private _approveUntilDate?: string; 
    public get approveUntilDate() {
        return this.getStringAttribute('approve_until_date');
    }
    public set approveUntilDate(value: string) {
        this._approveUntilDate = value;
    }
    public resetApproveUntilDate() {
        this._approveUntilDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approveUntilDateInput() {
        return this._approveUntilDate;
    }

    // compliance_level - computed: true, optional: true, required: false
    private _complianceLevel?: string; 
    public get complianceLevel() {
        return this.getStringAttribute('compliance_level');
    }
    public set complianceLevel(value: string) {
        this._complianceLevel = value;
    }
    public resetComplianceLevel() {
        this._complianceLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceLevelInput() {
        return this._complianceLevel;
    }

    // enable_non_security - computed: true, optional: true, required: false
    private _enableNonSecurity?: boolean | cdktn.IResolvable; 
    public get enableNonSecurity() {
        return this.getBooleanAttribute('enable_non_security');
    }
    public set enableNonSecurity(value: boolean | cdktn.IResolvable) {
        this._enableNonSecurity = value;
    }
    public resetEnableNonSecurity() {
        this._enableNonSecurity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableNonSecurityInput() {
        return this._enableNonSecurity;
    }

    // patch_filter_group - computed: true, optional: true, required: false
    private _patchFilterGroup = new PatchFilterGroupPropertyOutputReference(this, "patch_filter_group");
    public get patchFilterGroup() {
        return this._patchFilterGroup;
    }
    public putPatchFilterGroup(value: PatchFilterGroupProperty) {
        this._patchFilterGroup.internalValue = value;
    }
    public resetPatchFilterGroup() {
        this._patchFilterGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchFilterGroupInput() {
        return this._patchFilterGroup.internalValue;
    }
}

export class RulePropertyList extends cdktn.ComplexList {
    public internalValue? : RuleProperty[] | cdktn.IResolvable

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
    public get(index: number): RulePropertyOutputReference {
        return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuleGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#patch_rules CcPatchBaseline#patch_rules}
    */
    readonly patchRules?: RuleProperty[] | cdktn.IResolvable;
}
export class RuleGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._patchRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchRules = this._patchRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._patchRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._patchRules.internalValue = value.patchRules;
        }
    }

    // patch_rules - computed: true, optional: true, required: false
    private _patchRules = new RulePropertyList(this, "patch_rules", false);
    public get patchRules() {
        return this._patchRules;
    }
    public putPatchRules(value: RuleProperty[] | cdktn.IResolvable) {
        this._patchRules.internalValue = value;
    }
    public resetPatchRules() {
        this._patchRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchRulesInput() {
        return this._patchRules.internalValue;
    }
}
export interface PatchFiltersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#key CcPatchBaseline#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#values CcPatchBaseline#values}
    */
    readonly values?: string[];
}
export class PatchFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PatchFiltersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PatchFiltersProperty | cdktn.IResolvable | undefined) {
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

export class PatchFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : PatchFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): PatchFiltersPropertyOutputReference {
        return new PatchFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GlobalFiltersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#patch_filters CcPatchBaseline#patch_filters}
    */
    readonly patchFilters?: PatchFiltersProperty[] | cdktn.IResolvable;
}
export class GlobalFiltersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._patchFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchFilters = this._patchFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._patchFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._patchFilters.internalValue = value.patchFilters;
        }
    }

    // patch_filters - computed: true, optional: true, required: false
    private _patchFilters = new PatchFiltersPropertyList(this, "patch_filters", false);
    public get patchFilters() {
        return this._patchFilters;
    }
    public putPatchFilters(value: PatchFiltersProperty[] | cdktn.IResolvable) {
        this._patchFilters.internalValue = value;
    }
    public resetPatchFilters() {
        this._patchFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchFiltersInput() {
        return this._patchFilters.internalValue;
    }
}
export interface PatchSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#configuration CcPatchBaseline#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#name CcPatchBaseline#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#products CcPatchBaseline#products}
    */
    readonly products?: string[];
}
export class PatchSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PatchSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._products !== undefined) {
            hasAnyValues = true;
            internalValueResult.products = this._products;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PatchSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configuration = undefined;
            this._name = undefined;
            this._products = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configuration = value.configuration;
            this._name = value.name;
            this._products = value.products;
        }
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
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

    // products - computed: true, optional: true, required: false
    private _products?: string[]; 
    public get products() {
        return this.getListAttribute('products');
    }
    public set products(value: string[]) {
        this._products = value;
    }
    public resetProducts() {
        this._products = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productsInput() {
        return this._products;
    }
}

export class PatchSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : PatchSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): PatchSourcePropertyOutputReference {
        return new PatchSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#key CcPatchBaseline#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssm_patch_baseline#value CcPatchBaseline#value}
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
