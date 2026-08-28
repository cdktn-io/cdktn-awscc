// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#delete_all_policy_resources CcPolicy#delete_all_policy_resources}
    */
    readonly deleteAllPolicyResources?: boolean | cdktn.IResolvable;
    /**
    * An FMS includeMap or excludeMap.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#exclude_map CcPolicy#exclude_map}
    */
    readonly excludeMap?: CcPolicy.IEMapProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#exclude_resource_tags CcPolicy#exclude_resource_tags}
    */
    readonly excludeResourceTags: boolean | cdktn.IResolvable;
    /**
    * An FMS includeMap or excludeMap.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#include_map CcPolicy#include_map}
    */
    readonly includeMap?: CcPolicy.IncludeMapProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#policy_description CcPolicy#policy_description}
    */
    readonly policyDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#policy_name CcPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#remediation_enabled CcPolicy#remediation_enabled}
    */
    readonly remediationEnabled: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#resource_set_ids CcPolicy#resource_set_ids}
    */
    readonly resourceSetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#resource_tag_logical_operator CcPolicy#resource_tag_logical_operator}
    */
    readonly resourceTagLogicalOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#resource_tags CcPolicy#resource_tags}
    */
    readonly resourceTags?: CcPolicy.ResourceTagProperty[] | cdktn.IResolvable;
    /**
    * An AWS resource type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#resource_type CcPolicy#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#resource_type_list CcPolicy#resource_type_list}
    */
    readonly resourceTypeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#resources_clean_up CcPolicy#resources_clean_up}
    */
    readonly resourcesCleanUp?: boolean | cdktn.IResolvable;
    /**
    * Firewall security service policy data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#security_service_policy_data CcPolicy#security_service_policy_data}
    */
    readonly securityServicePolicyData: CcPolicy.SecurityServicePolicyDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#tags CcPolicy#tags}
    */
    readonly tags?: CcPolicy.PolicyTagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy awscc_fms_policy}
*/
export class CcPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fms_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicy to import
    * @param importFromId The id of the existing CcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fms_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy awscc_fms_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fms_policy',
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
        this._deleteAllPolicyResources = config.deleteAllPolicyResources;
        this._excludeMap.internalValue = config.excludeMap;
        this._excludeResourceTags = config.excludeResourceTags;
        this._includeMap.internalValue = config.includeMap;
        this._policyDescription = config.policyDescription;
        this._policyName = config.policyName;
        this._remediationEnabled = config.remediationEnabled;
        this._resourceSetIds = config.resourceSetIds;
        this._resourceTagLogicalOperator = config.resourceTagLogicalOperator;
        this._resourceTags.internalValue = config.resourceTags;
        this._resourceType = config.resourceType;
        this._resourceTypeList = config.resourceTypeList;
        this._resourcesCleanUp = config.resourcesCleanUp;
        this._securityServicePolicyData.internalValue = config.securityServicePolicyData;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // delete_all_policy_resources - computed: true, optional: true, required: false
    private _deleteAllPolicyResources?: boolean | cdktn.IResolvable; 
    public get deleteAllPolicyResources() {
        return this.getBooleanAttribute('delete_all_policy_resources');
    }
    public set deleteAllPolicyResources(value: boolean | cdktn.IResolvable) {
        this._deleteAllPolicyResources = value;
    }
    public resetDeleteAllPolicyResources() {
        this._deleteAllPolicyResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteAllPolicyResourcesInput() {
        return this._deleteAllPolicyResources;
    }

    // exclude_map - computed: true, optional: true, required: false
    private _excludeMap = new CcPolicy.IEMapPropertyOutputReference(this, "exclude_map");
    public get excludeMap() {
        return this._excludeMap;
    }
    public putExcludeMap(value: CcPolicy.IEMapProperty) {
        this._excludeMap.internalValue = value;
    }
    public resetExcludeMap() {
        this._excludeMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeMapInput() {
        return this._excludeMap.internalValue;
    }

    // exclude_resource_tags - computed: false, optional: false, required: true
    private _excludeResourceTags?: boolean | cdktn.IResolvable; 
    public get excludeResourceTags() {
        return this.getBooleanAttribute('exclude_resource_tags');
    }
    public set excludeResourceTags(value: boolean | cdktn.IResolvable) {
        this._excludeResourceTags = value;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeResourceTagsInput() {
        return this._excludeResourceTags;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // include_map - computed: true, optional: true, required: false
    private _includeMap = new CcPolicy.IncludeMapPropertyOutputReference(this, "include_map");
    public get includeMap() {
        return this._includeMap;
    }
    public putIncludeMap(value: CcPolicy.IncludeMapProperty) {
        this._includeMap.internalValue = value;
    }
    public resetIncludeMap() {
        this._includeMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeMapInput() {
        return this._includeMap.internalValue;
    }

    // policy_description - computed: true, optional: true, required: false
    private _policyDescription?: string; 
    public get policyDescription() {
        return this.getStringAttribute('policy_description');
    }
    public set policyDescription(value: string) {
        this._policyDescription = value;
    }
    public resetPolicyDescription() {
        this._policyDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDescriptionInput() {
        return this._policyDescription;
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // remediation_enabled - computed: false, optional: false, required: true
    private _remediationEnabled?: boolean | cdktn.IResolvable; 
    public get remediationEnabled() {
        return this.getBooleanAttribute('remediation_enabled');
    }
    public set remediationEnabled(value: boolean | cdktn.IResolvable) {
        this._remediationEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get remediationEnabledInput() {
        return this._remediationEnabled;
    }

    // resource_set_ids - computed: true, optional: true, required: false
    private _resourceSetIds?: string[]; 
    public get resourceSetIds() {
        return this.getListAttribute('resource_set_ids');
    }
    public set resourceSetIds(value: string[]) {
        this._resourceSetIds = value;
    }
    public resetResourceSetIds() {
        this._resourceSetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSetIdsInput() {
        return this._resourceSetIds;
    }

    // resource_tag_logical_operator - computed: true, optional: true, required: false
    private _resourceTagLogicalOperator?: string; 
    public get resourceTagLogicalOperator() {
        return this.getStringAttribute('resource_tag_logical_operator');
    }
    public set resourceTagLogicalOperator(value: string) {
        this._resourceTagLogicalOperator = value;
    }
    public resetResourceTagLogicalOperator() {
        this._resourceTagLogicalOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagLogicalOperatorInput() {
        return this._resourceTagLogicalOperator;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcPolicy.ResourceTagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcPolicy.ResourceTagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // resource_type_list - computed: true, optional: true, required: false
    private _resourceTypeList?: string[]; 
    public get resourceTypeList() {
        return this.getListAttribute('resource_type_list');
    }
    public set resourceTypeList(value: string[]) {
        this._resourceTypeList = value;
    }
    public resetResourceTypeList() {
        this._resourceTypeList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeListInput() {
        return this._resourceTypeList;
    }

    // resources_clean_up - computed: true, optional: true, required: false
    private _resourcesCleanUp?: boolean | cdktn.IResolvable; 
    public get resourcesCleanUp() {
        return this.getBooleanAttribute('resources_clean_up');
    }
    public set resourcesCleanUp(value: boolean | cdktn.IResolvable) {
        this._resourcesCleanUp = value;
    }
    public resetResourcesCleanUp() {
        this._resourcesCleanUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesCleanUpInput() {
        return this._resourcesCleanUp;
    }

    // security_service_policy_data - computed: false, optional: false, required: true
    private _securityServicePolicyData = new CcPolicy.SecurityServicePolicyDataPropertyOutputReference(this, "security_service_policy_data");
    public get securityServicePolicyData() {
        return this._securityServicePolicyData;
    }
    public putSecurityServicePolicyData(value: CcPolicy.SecurityServicePolicyDataProperty) {
        this._securityServicePolicyData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityServicePolicyDataInput() {
        return this._securityServicePolicyData.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPolicy.PolicyTagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPolicy.PolicyTagProperty[] | cdktn.IResolvable) {
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
            delete_all_policy_resources: cdktn.booleanToTerraform(this._deleteAllPolicyResources),
            exclude_map: ccPolicyIEMapPropertyToTerraform(this._excludeMap.internalValue),
            exclude_resource_tags: cdktn.booleanToTerraform(this._excludeResourceTags),
            include_map: ccPolicyIncludeMapPropertyToTerraform(this._includeMap.internalValue),
            policy_description: cdktn.stringToTerraform(this._policyDescription),
            policy_name: cdktn.stringToTerraform(this._policyName),
            remediation_enabled: cdktn.booleanToTerraform(this._remediationEnabled),
            resource_set_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceSetIds),
            resource_tag_logical_operator: cdktn.stringToTerraform(this._resourceTagLogicalOperator),
            resource_tags: cdktn.listMapper(ccPolicyResourceTagPropertyToTerraform, false)(this._resourceTags.internalValue),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            resource_type_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceTypeList),
            resources_clean_up: cdktn.booleanToTerraform(this._resourcesCleanUp),
            security_service_policy_data: ccPolicySecurityServicePolicyDataPropertyToTerraform(this._securityServicePolicyData.internalValue),
            tags: cdktn.listMapper(ccPolicyPolicyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            delete_all_policy_resources: {
                value: cdktn.booleanToHclTerraform(this._deleteAllPolicyResources),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude_map: {
                value: ccPolicyIEMapPropertyToHclTerraform(this._excludeMap.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.IEMapProperty",
            },
            exclude_resource_tags: {
                value: cdktn.booleanToHclTerraform(this._excludeResourceTags),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            include_map: {
                value: ccPolicyIncludeMapPropertyToHclTerraform(this._includeMap.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.IncludeMapProperty",
            },
            policy_description: {
                value: cdktn.stringToHclTerraform(this._policyDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remediation_enabled: {
                value: cdktn.booleanToHclTerraform(this._remediationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            resource_set_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceSetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resource_tag_logical_operator: {
                value: cdktn.stringToHclTerraform(this._resourceTagLogicalOperator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccPolicyResourceTagPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPolicy.ResourceTagPropertyList",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_type_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceTypeList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resources_clean_up: {
                value: cdktn.booleanToHclTerraform(this._resourcesCleanUp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            security_service_policy_data: {
                value: ccPolicySecurityServicePolicyDataPropertyToHclTerraform(this._securityServicePolicyData.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.SecurityServicePolicyDataProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPolicyPolicyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPolicy.PolicyTagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyIEMapPropertyToTerraform(struct?: CcPolicy.IEMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.account),
        orgunit: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.orgunit),
    }
}


export function ccPolicyIEMapPropertyToHclTerraform(struct?: CcPolicy.IEMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.account),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        orgunit: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.orgunit),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyIncludeMapPropertyToTerraform(struct?: CcPolicy.IncludeMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.account),
        orgunit: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.orgunit),
    }
}


export function ccPolicyIncludeMapPropertyToHclTerraform(struct?: CcPolicy.IncludeMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.account),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        orgunit: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.orgunit),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyResourceTagPropertyToTerraform(struct?: CcPolicy.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPolicyResourceTagPropertyToHclTerraform(struct?: CcPolicy.ResourceTagProperty | cdktn.IResolvable): any {
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


export function ccPolicyIcmpTypeCodePropertyToTerraform(struct?: CcPolicy.IcmpTypeCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: cdktn.numberToTerraform(struct!.code),
        type: cdktn.numberToTerraform(struct!.type),
    }
}


export function ccPolicyIcmpTypeCodePropertyToHclTerraform(struct?: CcPolicy.IcmpTypeCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: cdktn.numberToHclTerraform(struct!.code),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.numberToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPortRangePropertyToTerraform(struct?: CcPolicy.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from: cdktn.numberToTerraform(struct!.from),
        to: cdktn.numberToTerraform(struct!.to),
    }
}


export function ccPolicyPortRangePropertyToHclTerraform(struct?: CcPolicy.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from: {
            value: cdktn.numberToHclTerraform(struct!.from),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to: {
            value: cdktn.numberToHclTerraform(struct!.to),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyNetworkAclEntryPropertyToTerraform(struct?: CcPolicy.NetworkAclEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
        egress: cdktn.booleanToTerraform(struct!.egress),
        icmp_type_code: ccPolicyIcmpTypeCodePropertyToTerraform(struct!.icmpTypeCode),
        ipv_6_cidr_block: cdktn.stringToTerraform(struct!.ipv6CidrBlock),
        port_range: ccPolicyPortRangePropertyToTerraform(struct!.portRange),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        rule_action: cdktn.stringToTerraform(struct!.ruleAction),
    }
}


export function ccPolicyNetworkAclEntryPropertyToHclTerraform(struct?: CcPolicy.NetworkAclEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.cidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        egress: {
            value: cdktn.booleanToHclTerraform(struct!.egress),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        icmp_type_code: {
            value: ccPolicyIcmpTypeCodePropertyToHclTerraform(struct!.icmpTypeCode),
            isBlock: true,
            type: "struct",
            storageClassType: "IcmpTypeCodeProperty",
        },
        ipv_6_cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.ipv6CidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port_range: {
            value: ccPolicyPortRangePropertyToHclTerraform(struct!.portRange),
            isBlock: true,
            type: "struct",
            storageClassType: "PortRangeProperty",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_action: {
            value: cdktn.stringToHclTerraform(struct!.ruleAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodePropertyToTerraform(struct?: CcPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: cdktn.numberToTerraform(struct!.code),
        type: cdktn.numberToTerraform(struct!.type),
    }
}


export function ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodePropertyToHclTerraform(struct?: CcPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: cdktn.numberToHclTerraform(struct!.code),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.numberToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangePropertyToTerraform(struct?: CcPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from: cdktn.numberToTerraform(struct!.from),
        to: cdktn.numberToTerraform(struct!.to),
    }
}


export function ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangePropertyToHclTerraform(struct?: CcPolicy.SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from: {
            value: cdktn.numberToHclTerraform(struct!.from),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to: {
            value: cdktn.numberToHclTerraform(struct!.to),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyLastEntriesPropertyToTerraform(struct?: CcPolicy.LastEntriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
        egress: cdktn.booleanToTerraform(struct!.egress),
        icmp_type_code: ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodePropertyToTerraform(struct!.icmpTypeCode),
        ipv_6_cidr_block: cdktn.stringToTerraform(struct!.ipv6CidrBlock),
        port_range: ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangePropertyToTerraform(struct!.portRange),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        rule_action: cdktn.stringToTerraform(struct!.ruleAction),
    }
}


export function ccPolicyLastEntriesPropertyToHclTerraform(struct?: CcPolicy.LastEntriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.cidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        egress: {
            value: cdktn.booleanToHclTerraform(struct!.egress),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        icmp_type_code: {
            value: ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodePropertyToHclTerraform(struct!.icmpTypeCode),
            isBlock: true,
            type: "struct",
            storageClassType: "SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty",
        },
        ipv_6_cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.ipv6CidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port_range: {
            value: ccPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangePropertyToHclTerraform(struct!.portRange),
            isBlock: true,
            type: "struct",
            storageClassType: "SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_action: {
            value: cdktn.stringToHclTerraform(struct!.ruleAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyNetworkAclEntrySetPropertyToTerraform(struct?: CcPolicy.NetworkAclEntrySetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        first_entries: cdktn.listMapper(ccPolicyNetworkAclEntryPropertyToTerraform, false)(struct!.firstEntries),
        force_remediate_for_first_entries: cdktn.booleanToTerraform(struct!.forceRemediateForFirstEntries),
        force_remediate_for_last_entries: cdktn.booleanToTerraform(struct!.forceRemediateForLastEntries),
        last_entries: cdktn.listMapper(ccPolicyLastEntriesPropertyToTerraform, false)(struct!.lastEntries),
    }
}


export function ccPolicyNetworkAclEntrySetPropertyToHclTerraform(struct?: CcPolicy.NetworkAclEntrySetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        first_entries: {
            value: cdktn.listMapperHcl(ccPolicyNetworkAclEntryPropertyToHclTerraform, false)(struct!.firstEntries),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkAclEntryPropertyList",
        },
        force_remediate_for_first_entries: {
            value: cdktn.booleanToHclTerraform(struct!.forceRemediateForFirstEntries),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        force_remediate_for_last_entries: {
            value: cdktn.booleanToHclTerraform(struct!.forceRemediateForLastEntries),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        last_entries: {
            value: cdktn.listMapperHcl(ccPolicyLastEntriesPropertyToHclTerraform, false)(struct!.lastEntries),
            isBlock: true,
            type: "list",
            storageClassType: "LastEntriesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyNetworkAclCommonPolicyPropertyToTerraform(struct?: CcPolicy.NetworkAclCommonPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_acl_entry_set: ccPolicyNetworkAclEntrySetPropertyToTerraform(struct!.networkAclEntrySet),
    }
}


export function ccPolicyNetworkAclCommonPolicyPropertyToHclTerraform(struct?: CcPolicy.NetworkAclCommonPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_acl_entry_set: {
            value: ccPolicyNetworkAclEntrySetPropertyToHclTerraform(struct!.networkAclEntrySet),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkAclEntrySetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyNetworkFirewallPolicyPropertyToTerraform(struct?: CcPolicy.NetworkFirewallPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        firewall_deployment_model: cdktn.stringToTerraform(struct!.firewallDeploymentModel),
    }
}


export function ccPolicyNetworkFirewallPolicyPropertyToHclTerraform(struct?: CcPolicy.NetworkFirewallPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        firewall_deployment_model: {
            value: cdktn.stringToHclTerraform(struct!.firewallDeploymentModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyThirdPartyFirewallPolicyPropertyToTerraform(struct?: CcPolicy.ThirdPartyFirewallPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        firewall_deployment_model: cdktn.stringToTerraform(struct!.firewallDeploymentModel),
    }
}


export function ccPolicyThirdPartyFirewallPolicyPropertyToHclTerraform(struct?: CcPolicy.ThirdPartyFirewallPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        firewall_deployment_model: {
            value: cdktn.stringToHclTerraform(struct!.firewallDeploymentModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPolicyOptionPropertyToTerraform(struct?: CcPolicy.PolicyOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_acl_common_policy: ccPolicyNetworkAclCommonPolicyPropertyToTerraform(struct!.networkAclCommonPolicy),
        network_firewall_policy: ccPolicyNetworkFirewallPolicyPropertyToTerraform(struct!.networkFirewallPolicy),
        third_party_firewall_policy: ccPolicyThirdPartyFirewallPolicyPropertyToTerraform(struct!.thirdPartyFirewallPolicy),
    }
}


export function ccPolicyPolicyOptionPropertyToHclTerraform(struct?: CcPolicy.PolicyOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_acl_common_policy: {
            value: ccPolicyNetworkAclCommonPolicyPropertyToHclTerraform(struct!.networkAclCommonPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkAclCommonPolicyProperty",
        },
        network_firewall_policy: {
            value: ccPolicyNetworkFirewallPolicyPropertyToHclTerraform(struct!.networkFirewallPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkFirewallPolicyProperty",
        },
        third_party_firewall_policy: {
            value: ccPolicyThirdPartyFirewallPolicyPropertyToHclTerraform(struct!.thirdPartyFirewallPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ThirdPartyFirewallPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicySecurityServicePolicyDataPropertyToTerraform(struct?: CcPolicy.SecurityServicePolicyDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_service_data: cdktn.stringToTerraform(struct!.managedServiceData),
        policy_option: ccPolicyPolicyOptionPropertyToTerraform(struct!.policyOption),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPolicySecurityServicePolicyDataPropertyToHclTerraform(struct?: CcPolicy.SecurityServicePolicyDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_service_data: {
            value: cdktn.stringToHclTerraform(struct!.managedServiceData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_option: {
            value: ccPolicyPolicyOptionPropertyToHclTerraform(struct!.policyOption),
            isBlock: true,
            type: "struct",
            storageClassType: "PolicyOptionProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPolicyTagPropertyToTerraform(struct?: CcPolicy.PolicyTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPolicyPolicyTagPropertyToHclTerraform(struct?: CcPolicy.PolicyTagProperty | cdktn.IResolvable): any {
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


export namespace CcPolicy {
export interface IEMapProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#account CcPolicy#account}
    */
    readonly account?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#orgunit CcPolicy#orgunit}
    */
    readonly orgunit?: string[];
}
export class IEMapPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IEMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._account !== undefined) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._orgunit !== undefined) {
            hasAnyValues = true;
            internalValueResult.orgunit = this._orgunit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IEMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._account = undefined;
            this._orgunit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._account = value.account;
            this._orgunit = value.orgunit;
        }
    }

    // account - computed: true, optional: true, required: false
    private _account?: string[]; 
    public get account() {
        return this.getListAttribute('account');
    }
    public set account(value: string[]) {
        this._account = value;
    }
    public resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
        return this._account;
    }

    // orgunit - computed: true, optional: true, required: false
    private _orgunit?: string[]; 
    public get orgunit() {
        return this.getListAttribute('orgunit');
    }
    public set orgunit(value: string[]) {
        this._orgunit = value;
    }
    public resetOrgunit() {
        this._orgunit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orgunitInput() {
        return this._orgunit;
    }
}
export interface IncludeMapProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#account CcPolicy#account}
    */
    readonly account?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#orgunit CcPolicy#orgunit}
    */
    readonly orgunit?: string[];
}
export class IncludeMapPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IncludeMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._account !== undefined) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._orgunit !== undefined) {
            hasAnyValues = true;
            internalValueResult.orgunit = this._orgunit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncludeMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._account = undefined;
            this._orgunit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._account = value.account;
            this._orgunit = value.orgunit;
        }
    }

    // account - computed: true, optional: true, required: false
    private _account?: string[]; 
    public get account() {
        return this.getListAttribute('account');
    }
    public set account(value: string[]) {
        this._account = value;
    }
    public resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
        return this._account;
    }

    // orgunit - computed: true, optional: true, required: false
    private _orgunit?: string[]; 
    public get orgunit() {
        return this.getListAttribute('orgunit');
    }
    public set orgunit(value: string[]) {
        this._orgunit = value;
    }
    public resetOrgunit() {
        this._orgunit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orgunitInput() {
        return this._orgunit;
    }
}
export interface ResourceTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#key CcPolicy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#value CcPolicy#value}
    */
    readonly value?: string;
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
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
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
export interface IcmpTypeCodeProperty {
    /**
    * Code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#code CcPolicy#code}
    */
    readonly code?: number;
    /**
    * Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#type CcPolicy#type}
    */
    readonly type?: number;
}
export class IcmpTypeCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcmpTypeCodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcmpTypeCodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code = value.code;
            this._type = value.type;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code?: number; 
    public get code() {
        return this.getNumberAttribute('code');
    }
    public set code(value: number) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // type - computed: true, optional: true, required: false
    private _type?: number; 
    public get type() {
        return this.getNumberAttribute('type');
    }
    public set type(value: number) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface PortRangeProperty {
    /**
    * From Port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#from CcPolicy#from}
    */
    readonly from?: number;
    /**
    * To Port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#to CcPolicy#to}
    */
    readonly to?: number;
}
export class PortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._to = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._to = value.to;
        }
    }

    // from - computed: true, optional: true, required: false
    private _from?: number; 
    public get from() {
        return this.getNumberAttribute('from');
    }
    public set from(value: number) {
        this._from = value;
    }
    public resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromInput() {
        return this._from;
    }

    // to - computed: true, optional: true, required: false
    private _to?: number; 
    public get to() {
        return this.getNumberAttribute('to');
    }
    public set to(value: number) {
        this._to = value;
    }
    public resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toInput() {
        return this._to;
    }
}
export interface NetworkAclEntryProperty {
    /**
    * CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#cidr_block CcPolicy#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Whether the entry is an egress entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#egress CcPolicy#egress}
    */
    readonly egress?: boolean | cdktn.IResolvable;
    /**
    * ICMP type and code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#icmp_type_code CcPolicy#icmp_type_code}
    */
    readonly icmpTypeCode?: IcmpTypeCodeProperty;
    /**
    * IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#ipv_6_cidr_block CcPolicy#ipv_6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#port_range CcPolicy#port_range}
    */
    readonly portRange?: PortRangeProperty;
    /**
    * Protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#protocol CcPolicy#protocol}
    */
    readonly protocol?: string;
    /**
    * Rule Action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#rule_action CcPolicy#rule_action}
    */
    readonly ruleAction?: string;
}
export class NetworkAclEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkAclEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrBlock = this._cidrBlock;
        }
        if (this._egress !== undefined) {
            hasAnyValues = true;
            internalValueResult.egress = this._egress;
        }
        if (this._icmpTypeCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icmpTypeCode = this._icmpTypeCode?.internalValue;
        }
        if (this._ipv6CidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
        }
        if (this._portRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRange = this._portRange?.internalValue;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._ruleAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleAction = this._ruleAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkAclEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrBlock = undefined;
            this._egress = undefined;
            this._icmpTypeCode.internalValue = undefined;
            this._ipv6CidrBlock = undefined;
            this._portRange.internalValue = undefined;
            this._protocol = undefined;
            this._ruleAction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrBlock = value.cidrBlock;
            this._egress = value.egress;
            this._icmpTypeCode.internalValue = value.icmpTypeCode;
            this._ipv6CidrBlock = value.ipv6CidrBlock;
            this._portRange.internalValue = value.portRange;
            this._protocol = value.protocol;
            this._ruleAction = value.ruleAction;
        }
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string; 
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
        this._cidrBlock = value;
    }
    public resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
        return this._cidrBlock;
    }

    // egress - computed: true, optional: true, required: false
    private _egress?: boolean | cdktn.IResolvable; 
    public get egress() {
        return this.getBooleanAttribute('egress');
    }
    public set egress(value: boolean | cdktn.IResolvable) {
        this._egress = value;
    }
    public resetEgress() {
        this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
        return this._egress;
    }

    // icmp_type_code - computed: true, optional: true, required: false
    private _icmpTypeCode = new IcmpTypeCodePropertyOutputReference(this, "icmp_type_code");
    public get icmpTypeCode() {
        return this._icmpTypeCode;
    }
    public putIcmpTypeCode(value: IcmpTypeCodeProperty) {
        this._icmpTypeCode.internalValue = value;
    }
    public resetIcmpTypeCode() {
        this._icmpTypeCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icmpTypeCodeInput() {
        return this._icmpTypeCode.internalValue;
    }

    // ipv_6_cidr_block - computed: true, optional: true, required: false
    private _ipv6CidrBlock?: string; 
    public get ipv6CidrBlock() {
        return this.getStringAttribute('ipv_6_cidr_block');
    }
    public set ipv6CidrBlock(value: string) {
        this._ipv6CidrBlock = value;
    }
    public resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }

    // port_range - computed: true, optional: true, required: false
    private _portRange = new PortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }
    public putPortRange(value: PortRangeProperty) {
        this._portRange.internalValue = value;
    }
    public resetPortRange() {
        this._portRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangeInput() {
        return this._portRange.internalValue;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // rule_action - computed: true, optional: true, required: false
    private _ruleAction?: string; 
    public get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    public set ruleAction(value: string) {
        this._ruleAction = value;
    }
    public resetRuleAction() {
        this._ruleAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleActionInput() {
        return this._ruleAction;
    }
}

export class NetworkAclEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkAclEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkAclEntryPropertyOutputReference {
        return new NetworkAclEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty {
    /**
    * Code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#code CcPolicy#code}
    */
    readonly code?: number;
    /**
    * Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#type CcPolicy#type}
    */
    readonly type?: number;
}
export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code = value.code;
            this._type = value.type;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code?: number; 
    public get code() {
        return this.getNumberAttribute('code');
    }
    public set code(value: number) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // type - computed: true, optional: true, required: false
    private _type?: number; 
    public get type() {
        return this.getNumberAttribute('type');
    }
    public set type(value: number) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty {
    /**
    * From Port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#from CcPolicy#from}
    */
    readonly from?: number;
    /**
    * To Port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#to CcPolicy#to}
    */
    readonly to?: number;
}
export class SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._to = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._to = value.to;
        }
    }

    // from - computed: true, optional: true, required: false
    private _from?: number; 
    public get from() {
        return this.getNumberAttribute('from');
    }
    public set from(value: number) {
        this._from = value;
    }
    public resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromInput() {
        return this._from;
    }

    // to - computed: true, optional: true, required: false
    private _to?: number; 
    public get to() {
        return this.getNumberAttribute('to');
    }
    public set to(value: number) {
        this._to = value;
    }
    public resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toInput() {
        return this._to;
    }
}
export interface LastEntriesProperty {
    /**
    * CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#cidr_block CcPolicy#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Whether the entry is an egress entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#egress CcPolicy#egress}
    */
    readonly egress?: boolean | cdktn.IResolvable;
    /**
    * ICMP type and code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#icmp_type_code CcPolicy#icmp_type_code}
    */
    readonly icmpTypeCode?: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty;
    /**
    * IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#ipv_6_cidr_block CcPolicy#ipv_6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Port range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#port_range CcPolicy#port_range}
    */
    readonly portRange?: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty;
    /**
    * Protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#protocol CcPolicy#protocol}
    */
    readonly protocol?: string;
    /**
    * Rule Action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#rule_action CcPolicy#rule_action}
    */
    readonly ruleAction?: string;
}
export class LastEntriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LastEntriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrBlock = this._cidrBlock;
        }
        if (this._egress !== undefined) {
            hasAnyValues = true;
            internalValueResult.egress = this._egress;
        }
        if (this._icmpTypeCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icmpTypeCode = this._icmpTypeCode?.internalValue;
        }
        if (this._ipv6CidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
        }
        if (this._portRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRange = this._portRange?.internalValue;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._ruleAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleAction = this._ruleAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LastEntriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrBlock = undefined;
            this._egress = undefined;
            this._icmpTypeCode.internalValue = undefined;
            this._ipv6CidrBlock = undefined;
            this._portRange.internalValue = undefined;
            this._protocol = undefined;
            this._ruleAction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrBlock = value.cidrBlock;
            this._egress = value.egress;
            this._icmpTypeCode.internalValue = value.icmpTypeCode;
            this._ipv6CidrBlock = value.ipv6CidrBlock;
            this._portRange.internalValue = value.portRange;
            this._protocol = value.protocol;
            this._ruleAction = value.ruleAction;
        }
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string; 
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
        this._cidrBlock = value;
    }
    public resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
        return this._cidrBlock;
    }

    // egress - computed: true, optional: true, required: false
    private _egress?: boolean | cdktn.IResolvable; 
    public get egress() {
        return this.getBooleanAttribute('egress');
    }
    public set egress(value: boolean | cdktn.IResolvable) {
        this._egress = value;
    }
    public resetEgress() {
        this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressInput() {
        return this._egress;
    }

    // icmp_type_code - computed: true, optional: true, required: false
    private _icmpTypeCode = new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodePropertyOutputReference(this, "icmp_type_code");
    public get icmpTypeCode() {
        return this._icmpTypeCode;
    }
    public putIcmpTypeCode(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeProperty) {
        this._icmpTypeCode.internalValue = value;
    }
    public resetIcmpTypeCode() {
        this._icmpTypeCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icmpTypeCodeInput() {
        return this._icmpTypeCode.internalValue;
    }

    // ipv_6_cidr_block - computed: true, optional: true, required: false
    private _ipv6CidrBlock?: string; 
    public get ipv6CidrBlock() {
        return this.getStringAttribute('ipv_6_cidr_block');
    }
    public set ipv6CidrBlock(value: string) {
        this._ipv6CidrBlock = value;
    }
    public resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }

    // port_range - computed: true, optional: true, required: false
    private _portRange = new SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangePropertyOutputReference(this, "port_range");
    public get portRange() {
        return this._portRange;
    }
    public putPortRange(value: SecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeProperty) {
        this._portRange.internalValue = value;
    }
    public resetPortRange() {
        this._portRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangeInput() {
        return this._portRange.internalValue;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // rule_action - computed: true, optional: true, required: false
    private _ruleAction?: string; 
    public get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    public set ruleAction(value: string) {
        this._ruleAction = value;
    }
    public resetRuleAction() {
        this._ruleAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleActionInput() {
        return this._ruleAction;
    }
}

export class LastEntriesPropertyList extends cdktn.ComplexList {
    public internalValue? : LastEntriesProperty[] | cdktn.IResolvable

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
    public get(index: number): LastEntriesPropertyOutputReference {
        return new LastEntriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkAclEntrySetProperty {
    /**
    * NetworkAcl entry list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#first_entries CcPolicy#first_entries}
    */
    readonly firstEntries?: NetworkAclEntryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#force_remediate_for_first_entries CcPolicy#force_remediate_for_first_entries}
    */
    readonly forceRemediateForFirstEntries?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#force_remediate_for_last_entries CcPolicy#force_remediate_for_last_entries}
    */
    readonly forceRemediateForLastEntries?: boolean | cdktn.IResolvable;
    /**
    * NetworkAcl entry list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#last_entries CcPolicy#last_entries}
    */
    readonly lastEntries?: LastEntriesProperty[] | cdktn.IResolvable;
}
export class NetworkAclEntrySetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkAclEntrySetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firstEntries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstEntries = this._firstEntries?.internalValue;
        }
        if (this._forceRemediateForFirstEntries !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceRemediateForFirstEntries = this._forceRemediateForFirstEntries;
        }
        if (this._forceRemediateForLastEntries !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceRemediateForLastEntries = this._forceRemediateForLastEntries;
        }
        if (this._lastEntries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastEntries = this._lastEntries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkAclEntrySetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firstEntries.internalValue = undefined;
            this._forceRemediateForFirstEntries = undefined;
            this._forceRemediateForLastEntries = undefined;
            this._lastEntries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firstEntries.internalValue = value.firstEntries;
            this._forceRemediateForFirstEntries = value.forceRemediateForFirstEntries;
            this._forceRemediateForLastEntries = value.forceRemediateForLastEntries;
            this._lastEntries.internalValue = value.lastEntries;
        }
    }

    // first_entries - computed: true, optional: true, required: false
    private _firstEntries = new NetworkAclEntryPropertyList(this, "first_entries", false);
    public get firstEntries() {
        return this._firstEntries;
    }
    public putFirstEntries(value: NetworkAclEntryProperty[] | cdktn.IResolvable) {
        this._firstEntries.internalValue = value;
    }
    public resetFirstEntries() {
        this._firstEntries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstEntriesInput() {
        return this._firstEntries.internalValue;
    }

    // force_remediate_for_first_entries - computed: true, optional: true, required: false
    private _forceRemediateForFirstEntries?: boolean | cdktn.IResolvable; 
    public get forceRemediateForFirstEntries() {
        return this.getBooleanAttribute('force_remediate_for_first_entries');
    }
    public set forceRemediateForFirstEntries(value: boolean | cdktn.IResolvable) {
        this._forceRemediateForFirstEntries = value;
    }
    public resetForceRemediateForFirstEntries() {
        this._forceRemediateForFirstEntries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceRemediateForFirstEntriesInput() {
        return this._forceRemediateForFirstEntries;
    }

    // force_remediate_for_last_entries - computed: true, optional: true, required: false
    private _forceRemediateForLastEntries?: boolean | cdktn.IResolvable; 
    public get forceRemediateForLastEntries() {
        return this.getBooleanAttribute('force_remediate_for_last_entries');
    }
    public set forceRemediateForLastEntries(value: boolean | cdktn.IResolvable) {
        this._forceRemediateForLastEntries = value;
    }
    public resetForceRemediateForLastEntries() {
        this._forceRemediateForLastEntries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceRemediateForLastEntriesInput() {
        return this._forceRemediateForLastEntries;
    }

    // last_entries - computed: true, optional: true, required: false
    private _lastEntries = new LastEntriesPropertyList(this, "last_entries", false);
    public get lastEntries() {
        return this._lastEntries;
    }
    public putLastEntries(value: LastEntriesProperty[] | cdktn.IResolvable) {
        this._lastEntries.internalValue = value;
    }
    public resetLastEntries() {
        this._lastEntries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastEntriesInput() {
        return this._lastEntries.internalValue;
    }
}
export interface NetworkAclCommonPolicyProperty {
    /**
    * Network ACL entry set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#network_acl_entry_set CcPolicy#network_acl_entry_set}
    */
    readonly networkAclEntrySet?: NetworkAclEntrySetProperty;
}
export class NetworkAclCommonPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkAclCommonPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkAclEntrySet?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkAclEntrySet = this._networkAclEntrySet?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkAclCommonPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkAclEntrySet.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkAclEntrySet.internalValue = value.networkAclEntrySet;
        }
    }

    // network_acl_entry_set - computed: true, optional: true, required: false
    private _networkAclEntrySet = new NetworkAclEntrySetPropertyOutputReference(this, "network_acl_entry_set");
    public get networkAclEntrySet() {
        return this._networkAclEntrySet;
    }
    public putNetworkAclEntrySet(value: NetworkAclEntrySetProperty) {
        this._networkAclEntrySet.internalValue = value;
    }
    public resetNetworkAclEntrySet() {
        this._networkAclEntrySet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkAclEntrySetInput() {
        return this._networkAclEntrySet.internalValue;
    }
}
export interface NetworkFirewallPolicyProperty {
    /**
    * Firewall deployment mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#firewall_deployment_model CcPolicy#firewall_deployment_model}
    */
    readonly firewallDeploymentModel?: string;
}
export class NetworkFirewallPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkFirewallPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firewallDeploymentModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallDeploymentModel = this._firewallDeploymentModel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkFirewallPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firewallDeploymentModel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firewallDeploymentModel = value.firewallDeploymentModel;
        }
    }

    // firewall_deployment_model - computed: true, optional: true, required: false
    private _firewallDeploymentModel?: string; 
    public get firewallDeploymentModel() {
        return this.getStringAttribute('firewall_deployment_model');
    }
    public set firewallDeploymentModel(value: string) {
        this._firewallDeploymentModel = value;
    }
    public resetFirewallDeploymentModel() {
        this._firewallDeploymentModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallDeploymentModelInput() {
        return this._firewallDeploymentModel;
    }
}
export interface ThirdPartyFirewallPolicyProperty {
    /**
    * Firewall deployment mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#firewall_deployment_model CcPolicy#firewall_deployment_model}
    */
    readonly firewallDeploymentModel?: string;
}
export class ThirdPartyFirewallPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThirdPartyFirewallPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firewallDeploymentModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallDeploymentModel = this._firewallDeploymentModel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThirdPartyFirewallPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firewallDeploymentModel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firewallDeploymentModel = value.firewallDeploymentModel;
        }
    }

    // firewall_deployment_model - computed: true, optional: true, required: false
    private _firewallDeploymentModel?: string; 
    public get firewallDeploymentModel() {
        return this.getStringAttribute('firewall_deployment_model');
    }
    public set firewallDeploymentModel(value: string) {
        this._firewallDeploymentModel = value;
    }
    public resetFirewallDeploymentModel() {
        this._firewallDeploymentModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallDeploymentModelInput() {
        return this._firewallDeploymentModel;
    }
}
export interface PolicyOptionProperty {
    /**
    * Network ACL common policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#network_acl_common_policy CcPolicy#network_acl_common_policy}
    */
    readonly networkAclCommonPolicy?: NetworkAclCommonPolicyProperty;
    /**
    * Network firewall policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#network_firewall_policy CcPolicy#network_firewall_policy}
    */
    readonly networkFirewallPolicy?: NetworkFirewallPolicyProperty;
    /**
    * Third party firewall policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#third_party_firewall_policy CcPolicy#third_party_firewall_policy}
    */
    readonly thirdPartyFirewallPolicy?: ThirdPartyFirewallPolicyProperty;
}
export class PolicyOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkAclCommonPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkAclCommonPolicy = this._networkAclCommonPolicy?.internalValue;
        }
        if (this._networkFirewallPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkFirewallPolicy = this._networkFirewallPolicy?.internalValue;
        }
        if (this._thirdPartyFirewallPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.thirdPartyFirewallPolicy = this._thirdPartyFirewallPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkAclCommonPolicy.internalValue = undefined;
            this._networkFirewallPolicy.internalValue = undefined;
            this._thirdPartyFirewallPolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkAclCommonPolicy.internalValue = value.networkAclCommonPolicy;
            this._networkFirewallPolicy.internalValue = value.networkFirewallPolicy;
            this._thirdPartyFirewallPolicy.internalValue = value.thirdPartyFirewallPolicy;
        }
    }

    // network_acl_common_policy - computed: true, optional: true, required: false
    private _networkAclCommonPolicy = new NetworkAclCommonPolicyPropertyOutputReference(this, "network_acl_common_policy");
    public get networkAclCommonPolicy() {
        return this._networkAclCommonPolicy;
    }
    public putNetworkAclCommonPolicy(value: NetworkAclCommonPolicyProperty) {
        this._networkAclCommonPolicy.internalValue = value;
    }
    public resetNetworkAclCommonPolicy() {
        this._networkAclCommonPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkAclCommonPolicyInput() {
        return this._networkAclCommonPolicy.internalValue;
    }

    // network_firewall_policy - computed: true, optional: true, required: false
    private _networkFirewallPolicy = new NetworkFirewallPolicyPropertyOutputReference(this, "network_firewall_policy");
    public get networkFirewallPolicy() {
        return this._networkFirewallPolicy;
    }
    public putNetworkFirewallPolicy(value: NetworkFirewallPolicyProperty) {
        this._networkFirewallPolicy.internalValue = value;
    }
    public resetNetworkFirewallPolicy() {
        this._networkFirewallPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkFirewallPolicyInput() {
        return this._networkFirewallPolicy.internalValue;
    }

    // third_party_firewall_policy - computed: true, optional: true, required: false
    private _thirdPartyFirewallPolicy = new ThirdPartyFirewallPolicyPropertyOutputReference(this, "third_party_firewall_policy");
    public get thirdPartyFirewallPolicy() {
        return this._thirdPartyFirewallPolicy;
    }
    public putThirdPartyFirewallPolicy(value: ThirdPartyFirewallPolicyProperty) {
        this._thirdPartyFirewallPolicy.internalValue = value;
    }
    public resetThirdPartyFirewallPolicy() {
        this._thirdPartyFirewallPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thirdPartyFirewallPolicyInput() {
        return this._thirdPartyFirewallPolicy.internalValue;
    }
}
export interface SecurityServicePolicyDataProperty {
    /**
    * Firewall managed service data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#managed_service_data CcPolicy#managed_service_data}
    */
    readonly managedServiceData?: string;
    /**
    * Firewall policy option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#policy_option CcPolicy#policy_option}
    */
    readonly policyOption?: PolicyOptionProperty;
    /**
    * Firewall policy type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#type CcPolicy#type}
    */
    readonly type: string;
}
export class SecurityServicePolicyDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityServicePolicyDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedServiceData !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedServiceData = this._managedServiceData;
        }
        if (this._policyOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyOption = this._policyOption?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityServicePolicyDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedServiceData = undefined;
            this._policyOption.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedServiceData = value.managedServiceData;
            this._policyOption.internalValue = value.policyOption;
            this._type = value.type;
        }
    }

    // managed_service_data - computed: true, optional: true, required: false
    private _managedServiceData?: string; 
    public get managedServiceData() {
        return this.getStringAttribute('managed_service_data');
    }
    public set managedServiceData(value: string) {
        this._managedServiceData = value;
    }
    public resetManagedServiceData() {
        this._managedServiceData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedServiceDataInput() {
        return this._managedServiceData;
    }

    // policy_option - computed: true, optional: true, required: false
    private _policyOption = new PolicyOptionPropertyOutputReference(this, "policy_option");
    public get policyOption() {
        return this._policyOption;
    }
    public putPolicyOption(value: PolicyOptionProperty) {
        this._policyOption.internalValue = value;
    }
    public resetPolicyOption() {
        this._policyOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyOptionInput() {
        return this._policyOption.internalValue;
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
}
export interface PolicyTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#key CcPolicy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fms_policy#value CcPolicy#value}
    */
    readonly value?: string;
}
export class PolicyTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PolicyTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PolicyTagProperty | cdktn.IResolvable | undefined) {
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

export class PolicyTagPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyTagProperty[] | cdktn.IResolvable

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
    public get(index: number): PolicyTagPropertyOutputReference {
        return new PolicyTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
