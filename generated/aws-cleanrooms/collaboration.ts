// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCollaborationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#allowed_result_regions CcCollaboration#allowed_result_regions}
    */
    readonly allowedResultRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#analytics_engine CcCollaboration#analytics_engine}
    */
    readonly analyticsEngine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#auto_approved_change_types CcCollaboration#auto_approved_change_types}
    */
    readonly autoApprovedChangeTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#creator_display_name CcCollaboration#creator_display_name}
    */
    readonly creatorDisplayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#creator_member_abilities CcCollaboration#creator_member_abilities}
    */
    readonly creatorMemberAbilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CcCollaboration#creator_ml_member_abilities}
    */
    readonly creatorMlMemberAbilities?: CcCollaboration.MLMemberAbilitiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#creator_payment_configuration CcCollaboration#creator_payment_configuration}
    */
    readonly creatorPaymentConfiguration?: CcCollaboration.PaymentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#data_encryption_metadata CcCollaboration#data_encryption_metadata}
    */
    readonly dataEncryptionMetadata?: CcCollaboration.DataEncryptionMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#description CcCollaboration#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_metrics_enabled CcCollaboration#is_metrics_enabled}
    */
    readonly isMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#job_log_status CcCollaboration#job_log_status}
    */
    readonly jobLogStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#members CcCollaboration#members}
    */
    readonly members?: CcCollaboration.MemberSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#name CcCollaboration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#query_log_status CcCollaboration#query_log_status}
    */
    readonly queryLogStatus: string;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#tags CcCollaboration#tags}
    */
    readonly tags?: CcCollaboration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration}
*/
export class CcCollaboration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanrooms_collaboration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCollaboration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCollaboration to import
    * @param importFromId The id of the existing CcCollaboration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCollaboration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_collaboration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCollaborationProps
    */
    public constructor(scope: Construct, id: string, config: CcCollaborationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanrooms_collaboration',
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
        this._allowedResultRegions = config.allowedResultRegions;
        this._analyticsEngine = config.analyticsEngine;
        this._autoApprovedChangeTypes = config.autoApprovedChangeTypes;
        this._creatorDisplayName = config.creatorDisplayName;
        this._creatorMemberAbilities = config.creatorMemberAbilities;
        this._creatorMlMemberAbilities.internalValue = config.creatorMlMemberAbilities;
        this._creatorPaymentConfiguration.internalValue = config.creatorPaymentConfiguration;
        this._dataEncryptionMetadata.internalValue = config.dataEncryptionMetadata;
        this._description = config.description;
        this._isMetricsEnabled = config.isMetricsEnabled;
        this._jobLogStatus = config.jobLogStatus;
        this._members.internalValue = config.members;
        this._name = config.name;
        this._queryLogStatus = config.queryLogStatus;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_result_regions - computed: true, optional: true, required: false
    private _allowedResultRegions?: string[]; 
    public get allowedResultRegions() {
        return cdktn.Fn.tolist(this.getListAttribute('allowed_result_regions'));
    }
    public set allowedResultRegions(value: string[]) {
        this._allowedResultRegions = value;
    }
    public resetAllowedResultRegions() {
        this._allowedResultRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedResultRegionsInput() {
        return this._allowedResultRegions;
    }

    // analytics_engine - computed: true, optional: true, required: false
    private _analyticsEngine?: string; 
    public get analyticsEngine() {
        return this.getStringAttribute('analytics_engine');
    }
    public set analyticsEngine(value: string) {
        this._analyticsEngine = value;
    }
    public resetAnalyticsEngine() {
        this._analyticsEngine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyticsEngineInput() {
        return this._analyticsEngine;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_approved_change_types - computed: true, optional: true, required: false
    private _autoApprovedChangeTypes?: string[]; 
    public get autoApprovedChangeTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('auto_approved_change_types'));
    }
    public set autoApprovedChangeTypes(value: string[]) {
        this._autoApprovedChangeTypes = value;
    }
    public resetAutoApprovedChangeTypes() {
        this._autoApprovedChangeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoApprovedChangeTypesInput() {
        return this._autoApprovedChangeTypes;
    }

    // collaboration_identifier - computed: true, optional: false, required: false
    public get collaborationIdentifier() {
        return this.getStringAttribute('collaboration_identifier');
    }

    // creator_display_name - computed: false, optional: false, required: true
    private _creatorDisplayName?: string; 
    public get creatorDisplayName() {
        return this.getStringAttribute('creator_display_name');
    }
    public set creatorDisplayName(value: string) {
        this._creatorDisplayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get creatorDisplayNameInput() {
        return this._creatorDisplayName;
    }

    // creator_member_abilities - computed: true, optional: true, required: false
    private _creatorMemberAbilities?: string[]; 
    public get creatorMemberAbilities() {
        return cdktn.Fn.tolist(this.getListAttribute('creator_member_abilities'));
    }
    public set creatorMemberAbilities(value: string[]) {
        this._creatorMemberAbilities = value;
    }
    public resetCreatorMemberAbilities() {
        this._creatorMemberAbilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creatorMemberAbilitiesInput() {
        return this._creatorMemberAbilities;
    }

    // creator_ml_member_abilities - computed: true, optional: true, required: false
    private _creatorMlMemberAbilities = new CcCollaboration.MLMemberAbilitiesPropertyOutputReference(this, "creator_ml_member_abilities");
    public get creatorMlMemberAbilities() {
        return this._creatorMlMemberAbilities;
    }
    public putCreatorMlMemberAbilities(value: CcCollaboration.MLMemberAbilitiesProperty) {
        this._creatorMlMemberAbilities.internalValue = value;
    }
    public resetCreatorMlMemberAbilities() {
        this._creatorMlMemberAbilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creatorMlMemberAbilitiesInput() {
        return this._creatorMlMemberAbilities.internalValue;
    }

    // creator_payment_configuration - computed: true, optional: true, required: false
    private _creatorPaymentConfiguration = new CcCollaboration.PaymentConfigurationPropertyOutputReference(this, "creator_payment_configuration");
    public get creatorPaymentConfiguration() {
        return this._creatorPaymentConfiguration;
    }
    public putCreatorPaymentConfiguration(value: CcCollaboration.PaymentConfigurationProperty) {
        this._creatorPaymentConfiguration.internalValue = value;
    }
    public resetCreatorPaymentConfiguration() {
        this._creatorPaymentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creatorPaymentConfigurationInput() {
        return this._creatorPaymentConfiguration.internalValue;
    }

    // data_encryption_metadata - computed: true, optional: true, required: false
    private _dataEncryptionMetadata = new CcCollaboration.DataEncryptionMetadataPropertyOutputReference(this, "data_encryption_metadata");
    public get dataEncryptionMetadata() {
        return this._dataEncryptionMetadata;
    }
    public putDataEncryptionMetadata(value: CcCollaboration.DataEncryptionMetadataProperty) {
        this._dataEncryptionMetadata.internalValue = value;
    }
    public resetDataEncryptionMetadata() {
        this._dataEncryptionMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataEncryptionMetadataInput() {
        return this._dataEncryptionMetadata.internalValue;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_metrics_enabled - computed: true, optional: true, required: false
    private _isMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get isMetricsEnabled() {
        return this.getBooleanAttribute('is_metrics_enabled');
    }
    public set isMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._isMetricsEnabled = value;
    }
    public resetIsMetricsEnabled() {
        this._isMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isMetricsEnabledInput() {
        return this._isMetricsEnabled;
    }

    // job_log_status - computed: true, optional: true, required: false
    private _jobLogStatus?: string; 
    public get jobLogStatus() {
        return this.getStringAttribute('job_log_status');
    }
    public set jobLogStatus(value: string) {
        this._jobLogStatus = value;
    }
    public resetJobLogStatus() {
        this._jobLogStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobLogStatusInput() {
        return this._jobLogStatus;
    }

    // members - computed: true, optional: true, required: false
    private _members = new CcCollaboration.MemberSpecificationPropertyList(this, "members", false);
    public get members() {
        return this._members;
    }
    public putMembers(value: CcCollaboration.MemberSpecificationProperty[] | cdktn.IResolvable) {
        this._members.internalValue = value;
    }
    public resetMembers() {
        this._members.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get membersInput() {
        return this._members.internalValue;
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

    // query_log_status - computed: false, optional: false, required: true
    private _queryLogStatus?: string; 
    public get queryLogStatus() {
        return this.getStringAttribute('query_log_status');
    }
    public set queryLogStatus(value: string) {
        this._queryLogStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryLogStatusInput() {
        return this._queryLogStatus;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCollaboration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCollaboration.TagProperty[] | cdktn.IResolvable) {
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
            allowed_result_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedResultRegions),
            analytics_engine: cdktn.stringToTerraform(this._analyticsEngine),
            auto_approved_change_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autoApprovedChangeTypes),
            creator_display_name: cdktn.stringToTerraform(this._creatorDisplayName),
            creator_member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._creatorMemberAbilities),
            creator_ml_member_abilities: ccCollaborationMLMemberAbilitiesPropertyToTerraform(this._creatorMlMemberAbilities.internalValue),
            creator_payment_configuration: ccCollaborationPaymentConfigurationPropertyToTerraform(this._creatorPaymentConfiguration.internalValue),
            data_encryption_metadata: ccCollaborationDataEncryptionMetadataPropertyToTerraform(this._dataEncryptionMetadata.internalValue),
            description: cdktn.stringToTerraform(this._description),
            is_metrics_enabled: cdktn.booleanToTerraform(this._isMetricsEnabled),
            job_log_status: cdktn.stringToTerraform(this._jobLogStatus),
            members: cdktn.listMapper(ccCollaborationMemberSpecificationPropertyToTerraform, false)(this._members.internalValue),
            name: cdktn.stringToTerraform(this._name),
            query_log_status: cdktn.stringToTerraform(this._queryLogStatus),
            tags: cdktn.listMapper(ccCollaborationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_result_regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedResultRegions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            analytics_engine: {
                value: cdktn.stringToHclTerraform(this._analyticsEngine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_approved_change_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autoApprovedChangeTypes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            creator_display_name: {
                value: cdktn.stringToHclTerraform(this._creatorDisplayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            creator_member_abilities: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._creatorMemberAbilities),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            creator_ml_member_abilities: {
                value: ccCollaborationMLMemberAbilitiesPropertyToHclTerraform(this._creatorMlMemberAbilities.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCollaboration.MLMemberAbilitiesProperty",
            },
            creator_payment_configuration: {
                value: ccCollaborationPaymentConfigurationPropertyToHclTerraform(this._creatorPaymentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCollaboration.PaymentConfigurationProperty",
            },
            data_encryption_metadata: {
                value: ccCollaborationDataEncryptionMetadataPropertyToHclTerraform(this._dataEncryptionMetadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCollaboration.DataEncryptionMetadataProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_metrics_enabled: {
                value: cdktn.booleanToHclTerraform(this._isMetricsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            job_log_status: {
                value: cdktn.stringToHclTerraform(this._jobLogStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            members: {
                value: cdktn.listMapperHcl(ccCollaborationMemberSpecificationPropertyToHclTerraform, false)(this._members.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCollaboration.MemberSpecificationPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_log_status: {
                value: cdktn.stringToHclTerraform(this._queryLogStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCollaborationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCollaboration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCollaborationMLMemberAbilitiesPropertyToTerraform(struct?: CcCollaboration.MLMemberAbilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_ml_member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customMlMemberAbilities),
    }
}


export function ccCollaborationMLMemberAbilitiesPropertyToHclTerraform(struct?: CcCollaboration.MLMemberAbilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_ml_member_abilities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customMlMemberAbilities),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationJobComputePaymentConfigPropertyToTerraform(struct?: CcCollaboration.JobComputePaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationJobComputePaymentConfigPropertyToHclTerraform(struct?: CcCollaboration.JobComputePaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationModelInferencePaymentConfigPropertyToTerraform(struct?: CcCollaboration.ModelInferencePaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationModelInferencePaymentConfigPropertyToHclTerraform(struct?: CcCollaboration.ModelInferencePaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationModelTrainingPaymentConfigPropertyToTerraform(struct?: CcCollaboration.ModelTrainingPaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationModelTrainingPaymentConfigPropertyToHclTerraform(struct?: CcCollaboration.ModelTrainingPaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationSyntheticDataGenerationPaymentConfigPropertyToTerraform(struct?: CcCollaboration.SyntheticDataGenerationPaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationSyntheticDataGenerationPaymentConfigPropertyToHclTerraform(struct?: CcCollaboration.SyntheticDataGenerationPaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationMLPaymentConfigPropertyToTerraform(struct?: CcCollaboration.MLPaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_inference: ccCollaborationModelInferencePaymentConfigPropertyToTerraform(struct!.modelInference),
        model_training: ccCollaborationModelTrainingPaymentConfigPropertyToTerraform(struct!.modelTraining),
        synthetic_data_generation: ccCollaborationSyntheticDataGenerationPaymentConfigPropertyToTerraform(struct!.syntheticDataGeneration),
    }
}


export function ccCollaborationMLPaymentConfigPropertyToHclTerraform(struct?: CcCollaboration.MLPaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_inference: {
            value: ccCollaborationModelInferencePaymentConfigPropertyToHclTerraform(struct!.modelInference),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelInferencePaymentConfigProperty",
        },
        model_training: {
            value: ccCollaborationModelTrainingPaymentConfigPropertyToHclTerraform(struct!.modelTraining),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelTrainingPaymentConfigProperty",
        },
        synthetic_data_generation: {
            value: ccCollaborationSyntheticDataGenerationPaymentConfigPropertyToHclTerraform(struct!.syntheticDataGeneration),
            isBlock: true,
            type: "struct",
            storageClassType: "SyntheticDataGenerationPaymentConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationQueryComputePaymentConfigPropertyToTerraform(struct?: CcCollaboration.QueryComputePaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationQueryComputePaymentConfigPropertyToHclTerraform(struct?: CcCollaboration.QueryComputePaymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationPaymentConfigurationPropertyToTerraform(struct?: CcCollaboration.PaymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        job_compute: ccCollaborationJobComputePaymentConfigPropertyToTerraform(struct!.jobCompute),
        machine_learning: ccCollaborationMLPaymentConfigPropertyToTerraform(struct!.machineLearning),
        query_compute: ccCollaborationQueryComputePaymentConfigPropertyToTerraform(struct!.queryCompute),
    }
}


export function ccCollaborationPaymentConfigurationPropertyToHclTerraform(struct?: CcCollaboration.PaymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        job_compute: {
            value: ccCollaborationJobComputePaymentConfigPropertyToHclTerraform(struct!.jobCompute),
            isBlock: true,
            type: "struct",
            storageClassType: "JobComputePaymentConfigProperty",
        },
        machine_learning: {
            value: ccCollaborationMLPaymentConfigPropertyToHclTerraform(struct!.machineLearning),
            isBlock: true,
            type: "struct",
            storageClassType: "MLPaymentConfigProperty",
        },
        query_compute: {
            value: ccCollaborationQueryComputePaymentConfigPropertyToHclTerraform(struct!.queryCompute),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryComputePaymentConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationDataEncryptionMetadataPropertyToTerraform(struct?: CcCollaboration.DataEncryptionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_cleartext: cdktn.booleanToTerraform(struct!.allowCleartext),
        allow_duplicates: cdktn.booleanToTerraform(struct!.allowDuplicates),
        allow_joins_on_columns_with_different_names: cdktn.booleanToTerraform(struct!.allowJoinsOnColumnsWithDifferentNames),
        preserve_nulls: cdktn.booleanToTerraform(struct!.preserveNulls),
    }
}


export function ccCollaborationDataEncryptionMetadataPropertyToHclTerraform(struct?: CcCollaboration.DataEncryptionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_cleartext: {
            value: cdktn.booleanToHclTerraform(struct!.allowCleartext),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_duplicates: {
            value: cdktn.booleanToHclTerraform(struct!.allowDuplicates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_joins_on_columns_with_different_names: {
            value: cdktn.booleanToHclTerraform(struct!.allowJoinsOnColumnsWithDifferentNames),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_nulls: {
            value: cdktn.booleanToHclTerraform(struct!.preserveNulls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationMlMemberAbilitiesPropertyToTerraform(struct?: CcCollaboration.MlMemberAbilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_ml_member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customMlMemberAbilities),
    }
}


export function ccCollaborationMlMemberAbilitiesPropertyToHclTerraform(struct?: CcCollaboration.MlMemberAbilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_ml_member_abilities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customMlMemberAbilities),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationJobComputePropertyToTerraform(struct?: CcCollaboration.JobComputeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationJobComputePropertyToHclTerraform(struct?: CcCollaboration.JobComputeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationModelInferencePropertyToTerraform(struct?: CcCollaboration.ModelInferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationModelInferencePropertyToHclTerraform(struct?: CcCollaboration.ModelInferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationModelTrainingPropertyToTerraform(struct?: CcCollaboration.ModelTrainingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationModelTrainingPropertyToHclTerraform(struct?: CcCollaboration.ModelTrainingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationSyntheticDataGenerationPropertyToTerraform(struct?: CcCollaboration.SyntheticDataGenerationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationSyntheticDataGenerationPropertyToHclTerraform(struct?: CcCollaboration.SyntheticDataGenerationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationMachineLearningPropertyToTerraform(struct?: CcCollaboration.MachineLearningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_inference: ccCollaborationModelInferencePropertyToTerraform(struct!.modelInference),
        model_training: ccCollaborationModelTrainingPropertyToTerraform(struct!.modelTraining),
        synthetic_data_generation: ccCollaborationSyntheticDataGenerationPropertyToTerraform(struct!.syntheticDataGeneration),
    }
}


export function ccCollaborationMachineLearningPropertyToHclTerraform(struct?: CcCollaboration.MachineLearningProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_inference: {
            value: ccCollaborationModelInferencePropertyToHclTerraform(struct!.modelInference),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelInferenceProperty",
        },
        model_training: {
            value: ccCollaborationModelTrainingPropertyToHclTerraform(struct!.modelTraining),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelTrainingProperty",
        },
        synthetic_data_generation: {
            value: ccCollaborationSyntheticDataGenerationPropertyToHclTerraform(struct!.syntheticDataGeneration),
            isBlock: true,
            type: "struct",
            storageClassType: "SyntheticDataGenerationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationQueryComputePropertyToTerraform(struct?: CcCollaboration.QueryComputeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
    }
}


export function ccCollaborationQueryComputePropertyToHclTerraform(struct?: CcCollaboration.QueryComputeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_responsible: {
            value: cdktn.booleanToHclTerraform(struct!.isResponsible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationMembersPaymentConfigurationPropertyToTerraform(struct?: CcCollaboration.MembersPaymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        job_compute: ccCollaborationJobComputePropertyToTerraform(struct!.jobCompute),
        machine_learning: ccCollaborationMachineLearningPropertyToTerraform(struct!.machineLearning),
        query_compute: ccCollaborationQueryComputePropertyToTerraform(struct!.queryCompute),
    }
}


export function ccCollaborationMembersPaymentConfigurationPropertyToHclTerraform(struct?: CcCollaboration.MembersPaymentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        job_compute: {
            value: ccCollaborationJobComputePropertyToHclTerraform(struct!.jobCompute),
            isBlock: true,
            type: "struct",
            storageClassType: "JobComputeProperty",
        },
        machine_learning: {
            value: ccCollaborationMachineLearningPropertyToHclTerraform(struct!.machineLearning),
            isBlock: true,
            type: "struct",
            storageClassType: "MachineLearningProperty",
        },
        query_compute: {
            value: ccCollaborationQueryComputePropertyToHclTerraform(struct!.queryCompute),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryComputeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationMemberSpecificationPropertyToTerraform(struct?: CcCollaboration.MemberSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        display_name: cdktn.stringToTerraform(struct!.displayName),
        member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.memberAbilities),
        ml_member_abilities: ccCollaborationMlMemberAbilitiesPropertyToTerraform(struct!.mlMemberAbilities),
        payment_configuration: ccCollaborationMembersPaymentConfigurationPropertyToTerraform(struct!.paymentConfiguration),
    }
}


export function ccCollaborationMemberSpecificationPropertyToHclTerraform(struct?: CcCollaboration.MemberSpecificationProperty | cdktn.IResolvable): any {
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
        display_name: {
            value: cdktn.stringToHclTerraform(struct!.displayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        member_abilities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.memberAbilities),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        ml_member_abilities: {
            value: ccCollaborationMlMemberAbilitiesPropertyToHclTerraform(struct!.mlMemberAbilities),
            isBlock: true,
            type: "struct",
            storageClassType: "MlMemberAbilitiesProperty",
        },
        payment_configuration: {
            value: ccCollaborationMembersPaymentConfigurationPropertyToHclTerraform(struct!.paymentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MembersPaymentConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollaborationTagPropertyToTerraform(struct?: CcCollaboration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCollaborationTagPropertyToHclTerraform(struct?: CcCollaboration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCollaboration {
export interface MLMemberAbilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CcCollaboration#custom_ml_member_abilities}
    */
    readonly customMlMemberAbilities?: string[];
}
export class MLMemberAbilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MLMemberAbilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customMlMemberAbilities !== undefined) {
            hasAnyValues = true;
            internalValueResult.customMlMemberAbilities = this._customMlMemberAbilities;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MLMemberAbilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customMlMemberAbilities = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customMlMemberAbilities = value.customMlMemberAbilities;
        }
    }

    // custom_ml_member_abilities - computed: true, optional: true, required: false
    private _customMlMemberAbilities?: string[]; 
    public get customMlMemberAbilities() {
        return cdktn.Fn.tolist(this.getListAttribute('custom_ml_member_abilities'));
    }
    public set customMlMemberAbilities(value: string[]) {
        this._customMlMemberAbilities = value;
    }
    public resetCustomMlMemberAbilities() {
        this._customMlMemberAbilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customMlMemberAbilitiesInput() {
        return this._customMlMemberAbilities;
    }
}
export interface JobComputePaymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class JobComputePaymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobComputePaymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobComputePaymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface ModelInferencePaymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class ModelInferencePaymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelInferencePaymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelInferencePaymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface ModelTrainingPaymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class ModelTrainingPaymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelTrainingPaymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelTrainingPaymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface SyntheticDataGenerationPaymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class SyntheticDataGenerationPaymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SyntheticDataGenerationPaymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SyntheticDataGenerationPaymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface MLPaymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#model_inference CcCollaboration#model_inference}
    */
    readonly modelInference?: ModelInferencePaymentConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#model_training CcCollaboration#model_training}
    */
    readonly modelTraining?: ModelTrainingPaymentConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#synthetic_data_generation CcCollaboration#synthetic_data_generation}
    */
    readonly syntheticDataGeneration?: SyntheticDataGenerationPaymentConfigProperty;
}
export class MLPaymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MLPaymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelInference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelInference = this._modelInference?.internalValue;
        }
        if (this._modelTraining?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelTraining = this._modelTraining?.internalValue;
        }
        if (this._syntheticDataGeneration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.syntheticDataGeneration = this._syntheticDataGeneration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MLPaymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelInference.internalValue = undefined;
            this._modelTraining.internalValue = undefined;
            this._syntheticDataGeneration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelInference.internalValue = value.modelInference;
            this._modelTraining.internalValue = value.modelTraining;
            this._syntheticDataGeneration.internalValue = value.syntheticDataGeneration;
        }
    }

    // model_inference - computed: true, optional: true, required: false
    private _modelInference = new ModelInferencePaymentConfigPropertyOutputReference(this, "model_inference");
    public get modelInference() {
        return this._modelInference;
    }
    public putModelInference(value: ModelInferencePaymentConfigProperty) {
        this._modelInference.internalValue = value;
    }
    public resetModelInference() {
        this._modelInference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInferenceInput() {
        return this._modelInference.internalValue;
    }

    // model_training - computed: true, optional: true, required: false
    private _modelTraining = new ModelTrainingPaymentConfigPropertyOutputReference(this, "model_training");
    public get modelTraining() {
        return this._modelTraining;
    }
    public putModelTraining(value: ModelTrainingPaymentConfigProperty) {
        this._modelTraining.internalValue = value;
    }
    public resetModelTraining() {
        this._modelTraining.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelTrainingInput() {
        return this._modelTraining.internalValue;
    }

    // synthetic_data_generation - computed: true, optional: true, required: false
    private _syntheticDataGeneration = new SyntheticDataGenerationPaymentConfigPropertyOutputReference(this, "synthetic_data_generation");
    public get syntheticDataGeneration() {
        return this._syntheticDataGeneration;
    }
    public putSyntheticDataGeneration(value: SyntheticDataGenerationPaymentConfigProperty) {
        this._syntheticDataGeneration.internalValue = value;
    }
    public resetSyntheticDataGeneration() {
        this._syntheticDataGeneration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syntheticDataGenerationInput() {
        return this._syntheticDataGeneration.internalValue;
    }
}
export interface QueryComputePaymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class QueryComputePaymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryComputePaymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryComputePaymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface PaymentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#job_compute CcCollaboration#job_compute}
    */
    readonly jobCompute?: JobComputePaymentConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#machine_learning CcCollaboration#machine_learning}
    */
    readonly machineLearning?: MLPaymentConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#query_compute CcCollaboration#query_compute}
    */
    readonly queryCompute?: QueryComputePaymentConfigProperty;
}
export class PaymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaymentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jobCompute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobCompute = this._jobCompute?.internalValue;
        }
        if (this._machineLearning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.machineLearning = this._machineLearning?.internalValue;
        }
        if (this._queryCompute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryCompute = this._queryCompute?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaymentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jobCompute.internalValue = undefined;
            this._machineLearning.internalValue = undefined;
            this._queryCompute.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jobCompute.internalValue = value.jobCompute;
            this._machineLearning.internalValue = value.machineLearning;
            this._queryCompute.internalValue = value.queryCompute;
        }
    }

    // job_compute - computed: true, optional: true, required: false
    private _jobCompute = new JobComputePaymentConfigPropertyOutputReference(this, "job_compute");
    public get jobCompute() {
        return this._jobCompute;
    }
    public putJobCompute(value: JobComputePaymentConfigProperty) {
        this._jobCompute.internalValue = value;
    }
    public resetJobCompute() {
        this._jobCompute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobComputeInput() {
        return this._jobCompute.internalValue;
    }

    // machine_learning - computed: true, optional: true, required: false
    private _machineLearning = new MLPaymentConfigPropertyOutputReference(this, "machine_learning");
    public get machineLearning() {
        return this._machineLearning;
    }
    public putMachineLearning(value: MLPaymentConfigProperty) {
        this._machineLearning.internalValue = value;
    }
    public resetMachineLearning() {
        this._machineLearning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get machineLearningInput() {
        return this._machineLearning.internalValue;
    }

    // query_compute - computed: true, optional: true, required: false
    private _queryCompute = new QueryComputePaymentConfigPropertyOutputReference(this, "query_compute");
    public get queryCompute() {
        return this._queryCompute;
    }
    public putQueryCompute(value: QueryComputePaymentConfigProperty) {
        this._queryCompute.internalValue = value;
    }
    public resetQueryCompute() {
        this._queryCompute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryComputeInput() {
        return this._queryCompute.internalValue;
    }
}
export interface DataEncryptionMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#allow_cleartext CcCollaboration#allow_cleartext}
    */
    readonly allowCleartext?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#allow_duplicates CcCollaboration#allow_duplicates}
    */
    readonly allowDuplicates?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CcCollaboration#allow_joins_on_columns_with_different_names}
    */
    readonly allowJoinsOnColumnsWithDifferentNames?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#preserve_nulls CcCollaboration#preserve_nulls}
    */
    readonly preserveNulls?: boolean | cdktn.IResolvable;
}
export class DataEncryptionMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataEncryptionMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowCleartext !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowCleartext = this._allowCleartext;
        }
        if (this._allowDuplicates !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowDuplicates = this._allowDuplicates;
        }
        if (this._allowJoinsOnColumnsWithDifferentNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowJoinsOnColumnsWithDifferentNames = this._allowJoinsOnColumnsWithDifferentNames;
        }
        if (this._preserveNulls !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveNulls = this._preserveNulls;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataEncryptionMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowCleartext = undefined;
            this._allowDuplicates = undefined;
            this._allowJoinsOnColumnsWithDifferentNames = undefined;
            this._preserveNulls = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowCleartext = value.allowCleartext;
            this._allowDuplicates = value.allowDuplicates;
            this._allowJoinsOnColumnsWithDifferentNames = value.allowJoinsOnColumnsWithDifferentNames;
            this._preserveNulls = value.preserveNulls;
        }
    }

    // allow_cleartext - computed: true, optional: true, required: false
    private _allowCleartext?: boolean | cdktn.IResolvable; 
    public get allowCleartext() {
        return this.getBooleanAttribute('allow_cleartext');
    }
    public set allowCleartext(value: boolean | cdktn.IResolvable) {
        this._allowCleartext = value;
    }
    public resetAllowCleartext() {
        this._allowCleartext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowCleartextInput() {
        return this._allowCleartext;
    }

    // allow_duplicates - computed: true, optional: true, required: false
    private _allowDuplicates?: boolean | cdktn.IResolvable; 
    public get allowDuplicates() {
        return this.getBooleanAttribute('allow_duplicates');
    }
    public set allowDuplicates(value: boolean | cdktn.IResolvable) {
        this._allowDuplicates = value;
    }
    public resetAllowDuplicates() {
        this._allowDuplicates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowDuplicatesInput() {
        return this._allowDuplicates;
    }

    // allow_joins_on_columns_with_different_names - computed: true, optional: true, required: false
    private _allowJoinsOnColumnsWithDifferentNames?: boolean | cdktn.IResolvable; 
    public get allowJoinsOnColumnsWithDifferentNames() {
        return this.getBooleanAttribute('allow_joins_on_columns_with_different_names');
    }
    public set allowJoinsOnColumnsWithDifferentNames(value: boolean | cdktn.IResolvable) {
        this._allowJoinsOnColumnsWithDifferentNames = value;
    }
    public resetAllowJoinsOnColumnsWithDifferentNames() {
        this._allowJoinsOnColumnsWithDifferentNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowJoinsOnColumnsWithDifferentNamesInput() {
        return this._allowJoinsOnColumnsWithDifferentNames;
    }

    // preserve_nulls - computed: true, optional: true, required: false
    private _preserveNulls?: boolean | cdktn.IResolvable; 
    public get preserveNulls() {
        return this.getBooleanAttribute('preserve_nulls');
    }
    public set preserveNulls(value: boolean | cdktn.IResolvable) {
        this._preserveNulls = value;
    }
    public resetPreserveNulls() {
        this._preserveNulls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveNullsInput() {
        return this._preserveNulls;
    }
}
export interface MlMemberAbilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CcCollaboration#custom_ml_member_abilities}
    */
    readonly customMlMemberAbilities?: string[];
}
export class MlMemberAbilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MlMemberAbilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customMlMemberAbilities !== undefined) {
            hasAnyValues = true;
            internalValueResult.customMlMemberAbilities = this._customMlMemberAbilities;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MlMemberAbilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customMlMemberAbilities = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customMlMemberAbilities = value.customMlMemberAbilities;
        }
    }

    // custom_ml_member_abilities - computed: true, optional: true, required: false
    private _customMlMemberAbilities?: string[]; 
    public get customMlMemberAbilities() {
        return cdktn.Fn.tolist(this.getListAttribute('custom_ml_member_abilities'));
    }
    public set customMlMemberAbilities(value: string[]) {
        this._customMlMemberAbilities = value;
    }
    public resetCustomMlMemberAbilities() {
        this._customMlMemberAbilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customMlMemberAbilitiesInput() {
        return this._customMlMemberAbilities;
    }
}
export interface JobComputeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class JobComputePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobComputeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobComputeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface ModelInferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class ModelInferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelInferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelInferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface ModelTrainingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class ModelTrainingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelTrainingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelTrainingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface SyntheticDataGenerationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class SyntheticDataGenerationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SyntheticDataGenerationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SyntheticDataGenerationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface MachineLearningProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#model_inference CcCollaboration#model_inference}
    */
    readonly modelInference?: ModelInferenceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#model_training CcCollaboration#model_training}
    */
    readonly modelTraining?: ModelTrainingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#synthetic_data_generation CcCollaboration#synthetic_data_generation}
    */
    readonly syntheticDataGeneration?: SyntheticDataGenerationProperty;
}
export class MachineLearningPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MachineLearningProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelInference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelInference = this._modelInference?.internalValue;
        }
        if (this._modelTraining?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelTraining = this._modelTraining?.internalValue;
        }
        if (this._syntheticDataGeneration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.syntheticDataGeneration = this._syntheticDataGeneration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MachineLearningProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelInference.internalValue = undefined;
            this._modelTraining.internalValue = undefined;
            this._syntheticDataGeneration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelInference.internalValue = value.modelInference;
            this._modelTraining.internalValue = value.modelTraining;
            this._syntheticDataGeneration.internalValue = value.syntheticDataGeneration;
        }
    }

    // model_inference - computed: true, optional: true, required: false
    private _modelInference = new ModelInferencePropertyOutputReference(this, "model_inference");
    public get modelInference() {
        return this._modelInference;
    }
    public putModelInference(value: ModelInferenceProperty) {
        this._modelInference.internalValue = value;
    }
    public resetModelInference() {
        this._modelInference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInferenceInput() {
        return this._modelInference.internalValue;
    }

    // model_training - computed: true, optional: true, required: false
    private _modelTraining = new ModelTrainingPropertyOutputReference(this, "model_training");
    public get modelTraining() {
        return this._modelTraining;
    }
    public putModelTraining(value: ModelTrainingProperty) {
        this._modelTraining.internalValue = value;
    }
    public resetModelTraining() {
        this._modelTraining.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelTrainingInput() {
        return this._modelTraining.internalValue;
    }

    // synthetic_data_generation - computed: true, optional: true, required: false
    private _syntheticDataGeneration = new SyntheticDataGenerationPropertyOutputReference(this, "synthetic_data_generation");
    public get syntheticDataGeneration() {
        return this._syntheticDataGeneration;
    }
    public putSyntheticDataGeneration(value: SyntheticDataGenerationProperty) {
        this._syntheticDataGeneration.internalValue = value;
    }
    public resetSyntheticDataGeneration() {
        this._syntheticDataGeneration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syntheticDataGenerationInput() {
        return this._syntheticDataGeneration.internalValue;
    }
}
export interface QueryComputeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#is_responsible CcCollaboration#is_responsible}
    */
    readonly isResponsible?: boolean | cdktn.IResolvable;
}
export class QueryComputePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryComputeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isResponsible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isResponsible = this._isResponsible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryComputeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isResponsible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isResponsible = value.isResponsible;
        }
    }

    // is_responsible - computed: true, optional: true, required: false
    private _isResponsible?: boolean | cdktn.IResolvable; 
    public get isResponsible() {
        return this.getBooleanAttribute('is_responsible');
    }
    public set isResponsible(value: boolean | cdktn.IResolvable) {
        this._isResponsible = value;
    }
    public resetIsResponsible() {
        this._isResponsible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isResponsibleInput() {
        return this._isResponsible;
    }
}
export interface MembersPaymentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#job_compute CcCollaboration#job_compute}
    */
    readonly jobCompute?: JobComputeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#machine_learning CcCollaboration#machine_learning}
    */
    readonly machineLearning?: MachineLearningProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#query_compute CcCollaboration#query_compute}
    */
    readonly queryCompute?: QueryComputeProperty;
}
export class MembersPaymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MembersPaymentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jobCompute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobCompute = this._jobCompute?.internalValue;
        }
        if (this._machineLearning?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.machineLearning = this._machineLearning?.internalValue;
        }
        if (this._queryCompute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryCompute = this._queryCompute?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MembersPaymentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jobCompute.internalValue = undefined;
            this._machineLearning.internalValue = undefined;
            this._queryCompute.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jobCompute.internalValue = value.jobCompute;
            this._machineLearning.internalValue = value.machineLearning;
            this._queryCompute.internalValue = value.queryCompute;
        }
    }

    // job_compute - computed: true, optional: true, required: false
    private _jobCompute = new JobComputePropertyOutputReference(this, "job_compute");
    public get jobCompute() {
        return this._jobCompute;
    }
    public putJobCompute(value: JobComputeProperty) {
        this._jobCompute.internalValue = value;
    }
    public resetJobCompute() {
        this._jobCompute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobComputeInput() {
        return this._jobCompute.internalValue;
    }

    // machine_learning - computed: true, optional: true, required: false
    private _machineLearning = new MachineLearningPropertyOutputReference(this, "machine_learning");
    public get machineLearning() {
        return this._machineLearning;
    }
    public putMachineLearning(value: MachineLearningProperty) {
        this._machineLearning.internalValue = value;
    }
    public resetMachineLearning() {
        this._machineLearning.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get machineLearningInput() {
        return this._machineLearning.internalValue;
    }

    // query_compute - computed: true, optional: true, required: false
    private _queryCompute = new QueryComputePropertyOutputReference(this, "query_compute");
    public get queryCompute() {
        return this._queryCompute;
    }
    public putQueryCompute(value: QueryComputeProperty) {
        this._queryCompute.internalValue = value;
    }
    public resetQueryCompute() {
        this._queryCompute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryComputeInput() {
        return this._queryCompute.internalValue;
    }
}
export interface MemberSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#account_id CcCollaboration#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#display_name CcCollaboration#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#member_abilities CcCollaboration#member_abilities}
    */
    readonly memberAbilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#ml_member_abilities CcCollaboration#ml_member_abilities}
    */
    readonly mlMemberAbilities?: MlMemberAbilitiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#payment_configuration CcCollaboration#payment_configuration}
    */
    readonly paymentConfiguration?: MembersPaymentConfigurationProperty;
}
export class MemberSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MemberSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._displayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.displayName = this._displayName;
        }
        if (this._memberAbilities !== undefined) {
            hasAnyValues = true;
            internalValueResult.memberAbilities = this._memberAbilities;
        }
        if (this._mlMemberAbilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlMemberAbilities = this._mlMemberAbilities?.internalValue;
        }
        if (this._paymentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.paymentConfiguration = this._paymentConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemberSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._displayName = undefined;
            this._memberAbilities = undefined;
            this._mlMemberAbilities.internalValue = undefined;
            this._paymentConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._displayName = value.displayName;
            this._memberAbilities = value.memberAbilities;
            this._mlMemberAbilities.internalValue = value.mlMemberAbilities;
            this._paymentConfiguration.internalValue = value.paymentConfiguration;
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

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // member_abilities - computed: true, optional: true, required: false
    private _memberAbilities?: string[]; 
    public get memberAbilities() {
        return cdktn.Fn.tolist(this.getListAttribute('member_abilities'));
    }
    public set memberAbilities(value: string[]) {
        this._memberAbilities = value;
    }
    public resetMemberAbilities() {
        this._memberAbilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memberAbilitiesInput() {
        return this._memberAbilities;
    }

    // ml_member_abilities - computed: true, optional: true, required: false
    private _mlMemberAbilities = new MlMemberAbilitiesPropertyOutputReference(this, "ml_member_abilities");
    public get mlMemberAbilities() {
        return this._mlMemberAbilities;
    }
    public putMlMemberAbilities(value: MlMemberAbilitiesProperty) {
        this._mlMemberAbilities.internalValue = value;
    }
    public resetMlMemberAbilities() {
        this._mlMemberAbilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlMemberAbilitiesInput() {
        return this._mlMemberAbilities.internalValue;
    }

    // payment_configuration - computed: true, optional: true, required: false
    private _paymentConfiguration = new MembersPaymentConfigurationPropertyOutputReference(this, "payment_configuration");
    public get paymentConfiguration() {
        return this._paymentConfiguration;
    }
    public putPaymentConfiguration(value: MembersPaymentConfigurationProperty) {
        this._paymentConfiguration.internalValue = value;
    }
    public resetPaymentConfiguration() {
        this._paymentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paymentConfigurationInput() {
        return this._paymentConfiguration.internalValue;
    }
}

export class MemberSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : MemberSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): MemberSpecificationPropertyOutputReference {
        return new MemberSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#key CcCollaboration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_collaboration#value CcCollaboration#value}
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
