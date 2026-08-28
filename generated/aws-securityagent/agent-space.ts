// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentSpaceProps extends cdktn.TerraformMetaArguments {
    /**
    * AWS resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#aws_resources CcAgentSpace#aws_resources}
    */
    readonly awsResources?: CcAgentSpace.AWSResourcesProperty;
    /**
    * Details of code review settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#code_review_settings CcAgentSpace#code_review_settings}
    */
    readonly codeReviewSettings?: CcAgentSpace.CodeReviewSettingsProperty;
    /**
    * Description of the agent space
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#description CcAgentSpace#description}
    */
    readonly description?: string;
    /**
    * Integrated Resources configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#integrated_resources CcAgentSpace#integrated_resources}
    */
    readonly integratedResources?: CcAgentSpace.IntegratedResourceProperty[] | cdktn.IResolvable;
    /**
    * Identifier of the KMS key used to encrypt data. Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#kms_key_id CcAgentSpace#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Name of the agent space
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name CcAgentSpace#name}
    */
    readonly name: string;
    /**
    * Tags for the agent space
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#tags CcAgentSpace#tags}
    */
    readonly tags?: CcAgentSpace.TagProperty[] | cdktn.IResolvable;
    /**
    * List of target domain identifiers registered with the agent space
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#target_domain_ids CcAgentSpace#target_domain_ids}
    */
    readonly targetDomainIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space awscc_securityagent_agent_space}
*/
export class CcAgentSpace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityagent_agent_space";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentSpace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentSpace to import
    * @param importFromId The id of the existing CcAgentSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentSpace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_agent_space", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space awscc_securityagent_agent_space} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentSpaceProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentSpaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityagent_agent_space',
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
        this._awsResources.internalValue = config.awsResources;
        this._codeReviewSettings.internalValue = config.codeReviewSettings;
        this._description = config.description;
        this._integratedResources.internalValue = config.integratedResources;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._targetDomainIds = config.targetDomainIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_space_id - computed: true, optional: false, required: false
    public get agentSpaceId() {
        return this.getStringAttribute('agent_space_id');
    }

    // aws_resources - computed: true, optional: true, required: false
    private _awsResources = new CcAgentSpace.AWSResourcesPropertyOutputReference(this, "aws_resources");
    public get awsResources() {
        return this._awsResources;
    }
    public putAwsResources(value: CcAgentSpace.AWSResourcesProperty) {
        this._awsResources.internalValue = value;
    }
    public resetAwsResources() {
        this._awsResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsResourcesInput() {
        return this._awsResources.internalValue;
    }

    // code_review_settings - computed: true, optional: true, required: false
    private _codeReviewSettings = new CcAgentSpace.CodeReviewSettingsPropertyOutputReference(this, "code_review_settings");
    public get codeReviewSettings() {
        return this._codeReviewSettings;
    }
    public putCodeReviewSettings(value: CcAgentSpace.CodeReviewSettingsProperty) {
        this._codeReviewSettings.internalValue = value;
    }
    public resetCodeReviewSettings() {
        this._codeReviewSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeReviewSettingsInput() {
        return this._codeReviewSettings.internalValue;
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

    // integrated_resources - computed: true, optional: true, required: false
    private _integratedResources = new CcAgentSpace.IntegratedResourcePropertyList(this, "integrated_resources", false);
    public get integratedResources() {
        return this._integratedResources;
    }
    public putIntegratedResources(value: CcAgentSpace.IntegratedResourceProperty[] | cdktn.IResolvable) {
        this._integratedResources.internalValue = value;
    }
    public resetIntegratedResources() {
        this._integratedResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integratedResourcesInput() {
        return this._integratedResources.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAgentSpace.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAgentSpace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_domain_ids - computed: true, optional: true, required: false
    private _targetDomainIds?: string[]; 
    public get targetDomainIds() {
        return this.getListAttribute('target_domain_ids');
    }
    public set targetDomainIds(value: string[]) {
        this._targetDomainIds = value;
    }
    public resetTargetDomainIds() {
        this._targetDomainIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDomainIdsInput() {
        return this._targetDomainIds;
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
            aws_resources: ccAgentSpaceAWSResourcesPropertyToTerraform(this._awsResources.internalValue),
            code_review_settings: ccAgentSpaceCodeReviewSettingsPropertyToTerraform(this._codeReviewSettings.internalValue),
            description: cdktn.stringToTerraform(this._description),
            integrated_resources: cdktn.listMapper(ccAgentSpaceIntegratedResourcePropertyToTerraform, false)(this._integratedResources.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccAgentSpaceTagPropertyToTerraform, false)(this._tags.internalValue),
            target_domain_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetDomainIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_resources: {
                value: ccAgentSpaceAWSResourcesPropertyToHclTerraform(this._awsResources.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgentSpace.AWSResourcesProperty",
            },
            code_review_settings: {
                value: ccAgentSpaceCodeReviewSettingsPropertyToHclTerraform(this._codeReviewSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgentSpace.CodeReviewSettingsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integrated_resources: {
                value: cdktn.listMapperHcl(ccAgentSpaceIntegratedResourcePropertyToHclTerraform, false)(this._integratedResources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgentSpace.IntegratedResourcePropertyList",
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
            tags: {
                value: cdktn.listMapperHcl(ccAgentSpaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAgentSpace.TagPropertyList",
            },
            target_domain_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetDomainIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentSpaceVpcConfigPropertyToTerraform(struct?: CcAgentSpace.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupArns),
        subnet_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetArns),
        vpc_arn: cdktn.stringToTerraform(struct!.vpcArn),
    }
}


export function ccAgentSpaceVpcConfigPropertyToHclTerraform(struct?: CcAgentSpace.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceAWSResourcesPropertyToTerraform(struct?: CcAgentSpace.AWSResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.iamRoles),
        lambda_function_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lambdaFunctionArns),
        log_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logGroups),
        s3_buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.s3Buckets),
        secret_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secretArns),
        vpcs: cdktn.listMapper(ccAgentSpaceVpcConfigPropertyToTerraform, false)(struct!.vpcs),
    }
}


export function ccAgentSpaceAWSResourcesPropertyToHclTerraform(struct?: CcAgentSpace.AWSResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam_roles: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.iamRoles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        lambda_function_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lambdaFunctionArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        log_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        s3_buckets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.s3Buckets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        secret_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.secretArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpcs: {
            value: cdktn.listMapperHcl(ccAgentSpaceVpcConfigPropertyToHclTerraform, false)(struct!.vpcs),
            isBlock: true,
            type: "list",
            storageClassType: "VpcConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceCodeReviewSettingsPropertyToTerraform(struct?: CcAgentSpace.CodeReviewSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        controls_scanning: cdktn.booleanToTerraform(struct!.controlsScanning),
        general_purpose_scanning: cdktn.booleanToTerraform(struct!.generalPurposeScanning),
    }
}


export function ccAgentSpaceCodeReviewSettingsPropertyToHclTerraform(struct?: CcAgentSpace.CodeReviewSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        controls_scanning: {
            value: cdktn.booleanToHclTerraform(struct!.controlsScanning),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        general_purpose_scanning: {
            value: cdktn.booleanToHclTerraform(struct!.generalPurposeScanning),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceBitbucketCapabilitiesPropertyToTerraform(struct?: CcAgentSpace.BitbucketCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        leave_comments: cdktn.booleanToTerraform(struct!.leaveComments),
        remediate_code: cdktn.booleanToTerraform(struct!.remediateCode),
    }
}


export function ccAgentSpaceBitbucketCapabilitiesPropertyToHclTerraform(struct?: CcAgentSpace.BitbucketCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        leave_comments: {
            value: cdktn.booleanToHclTerraform(struct!.leaveComments),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remediate_code: {
            value: cdktn.booleanToHclTerraform(struct!.remediateCode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceBitbucketRepositoryPropertyToTerraform(struct?: CcAgentSpace.BitbucketRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        workspace: cdktn.stringToTerraform(struct!.workspace),
    }
}


export function ccAgentSpaceBitbucketRepositoryPropertyToHclTerraform(struct?: CcAgentSpace.BitbucketRepositoryProperty | cdktn.IResolvable): any {
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
        workspace: {
            value: cdktn.stringToHclTerraform(struct!.workspace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceConfluenceCapabilitiesPropertyToTerraform(struct?: CcAgentSpace.ConfluenceCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        create_document: cdktn.booleanToTerraform(struct!.createDocument),
        fetch_document: cdktn.booleanToTerraform(struct!.fetchDocument),
        update_document: cdktn.booleanToTerraform(struct!.updateDocument),
    }
}


export function ccAgentSpaceConfluenceCapabilitiesPropertyToHclTerraform(struct?: CcAgentSpace.ConfluenceCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        create_document: {
            value: cdktn.booleanToHclTerraform(struct!.createDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        fetch_document: {
            value: cdktn.booleanToHclTerraform(struct!.fetchDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        update_document: {
            value: cdktn.booleanToHclTerraform(struct!.updateDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceConfluenceDocumentPropertyToTerraform(struct?: CcAgentSpace.ConfluenceDocumentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        page_id: cdktn.stringToTerraform(struct!.pageId),
        space_key: cdktn.stringToTerraform(struct!.spaceKey),
        space_title: cdktn.stringToTerraform(struct!.spaceTitle),
        title: cdktn.stringToTerraform(struct!.title),
    }
}


export function ccAgentSpaceConfluenceDocumentPropertyToHclTerraform(struct?: CcAgentSpace.ConfluenceDocumentProperty | cdktn.IResolvable): any {
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
        page_id: {
            value: cdktn.stringToHclTerraform(struct!.pageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        space_key: {
            value: cdktn.stringToHclTerraform(struct!.spaceKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        space_title: {
            value: cdktn.stringToHclTerraform(struct!.spaceTitle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceGitHubCapabilitiesPropertyToTerraform(struct?: CcAgentSpace.GitHubCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        leave_comments: cdktn.booleanToTerraform(struct!.leaveComments),
        remediate_code: cdktn.booleanToTerraform(struct!.remediateCode),
    }
}


export function ccAgentSpaceGitHubCapabilitiesPropertyToHclTerraform(struct?: CcAgentSpace.GitHubCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        leave_comments: {
            value: cdktn.booleanToHclTerraform(struct!.leaveComments),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remediate_code: {
            value: cdktn.booleanToHclTerraform(struct!.remediateCode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceGitHubRepositoryPropertyToTerraform(struct?: CcAgentSpace.GitHubRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        owner: cdktn.stringToTerraform(struct!.owner),
    }
}


export function ccAgentSpaceGitHubRepositoryPropertyToHclTerraform(struct?: CcAgentSpace.GitHubRepositoryProperty | cdktn.IResolvable): any {
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
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceGitLabCapabilitiesPropertyToTerraform(struct?: CcAgentSpace.GitLabCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        leave_comments: cdktn.booleanToTerraform(struct!.leaveComments),
        remediate_code: cdktn.booleanToTerraform(struct!.remediateCode),
    }
}


export function ccAgentSpaceGitLabCapabilitiesPropertyToHclTerraform(struct?: CcAgentSpace.GitLabCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        leave_comments: {
            value: cdktn.booleanToHclTerraform(struct!.leaveComments),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remediate_code: {
            value: cdktn.booleanToHclTerraform(struct!.remediateCode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceGitLabRepositoryPropertyToTerraform(struct?: CcAgentSpace.GitLabRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccAgentSpaceGitLabRepositoryPropertyToHclTerraform(struct?: CcAgentSpace.GitLabRepositoryProperty | cdktn.IResolvable): any {
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
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceProviderResourcesPropertyToTerraform(struct?: CcAgentSpace.ProviderResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bitbucket_capabilities: ccAgentSpaceBitbucketCapabilitiesPropertyToTerraform(struct!.bitbucketCapabilities),
        bitbucket_repository: ccAgentSpaceBitbucketRepositoryPropertyToTerraform(struct!.bitbucketRepository),
        confluence_capabilities: ccAgentSpaceConfluenceCapabilitiesPropertyToTerraform(struct!.confluenceCapabilities),
        confluence_document: ccAgentSpaceConfluenceDocumentPropertyToTerraform(struct!.confluenceDocument),
        git_hub_capabilities: ccAgentSpaceGitHubCapabilitiesPropertyToTerraform(struct!.gitHubCapabilities),
        git_hub_repository: ccAgentSpaceGitHubRepositoryPropertyToTerraform(struct!.gitHubRepository),
        git_lab_capabilities: ccAgentSpaceGitLabCapabilitiesPropertyToTerraform(struct!.gitLabCapabilities),
        git_lab_repository: ccAgentSpaceGitLabRepositoryPropertyToTerraform(struct!.gitLabRepository),
    }
}


export function ccAgentSpaceProviderResourcesPropertyToHclTerraform(struct?: CcAgentSpace.ProviderResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bitbucket_capabilities: {
            value: ccAgentSpaceBitbucketCapabilitiesPropertyToHclTerraform(struct!.bitbucketCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "BitbucketCapabilitiesProperty",
        },
        bitbucket_repository: {
            value: ccAgentSpaceBitbucketRepositoryPropertyToHclTerraform(struct!.bitbucketRepository),
            isBlock: true,
            type: "struct",
            storageClassType: "BitbucketRepositoryProperty",
        },
        confluence_capabilities: {
            value: ccAgentSpaceConfluenceCapabilitiesPropertyToHclTerraform(struct!.confluenceCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfluenceCapabilitiesProperty",
        },
        confluence_document: {
            value: ccAgentSpaceConfluenceDocumentPropertyToHclTerraform(struct!.confluenceDocument),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfluenceDocumentProperty",
        },
        git_hub_capabilities: {
            value: ccAgentSpaceGitHubCapabilitiesPropertyToHclTerraform(struct!.gitHubCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "GitHubCapabilitiesProperty",
        },
        git_hub_repository: {
            value: ccAgentSpaceGitHubRepositoryPropertyToHclTerraform(struct!.gitHubRepository),
            isBlock: true,
            type: "struct",
            storageClassType: "GitHubRepositoryProperty",
        },
        git_lab_capabilities: {
            value: ccAgentSpaceGitLabCapabilitiesPropertyToHclTerraform(struct!.gitLabCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "GitLabCapabilitiesProperty",
        },
        git_lab_repository: {
            value: ccAgentSpaceGitLabRepositoryPropertyToHclTerraform(struct!.gitLabRepository),
            isBlock: true,
            type: "struct",
            storageClassType: "GitLabRepositoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceIntegratedResourcePropertyToTerraform(struct?: CcAgentSpace.IntegratedResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        integration: cdktn.stringToTerraform(struct!.integration),
        provider_resources: cdktn.listMapper(ccAgentSpaceProviderResourcesPropertyToTerraform, false)(struct!.providerResources),
    }
}


export function ccAgentSpaceIntegratedResourcePropertyToHclTerraform(struct?: CcAgentSpace.IntegratedResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        integration: {
            value: cdktn.stringToHclTerraform(struct!.integration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider_resources: {
            value: cdktn.listMapperHcl(ccAgentSpaceProviderResourcesPropertyToHclTerraform, false)(struct!.providerResources),
            isBlock: true,
            type: "list",
            storageClassType: "ProviderResourcesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceTagPropertyToTerraform(struct?: CcAgentSpace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAgentSpaceTagPropertyToHclTerraform(struct?: CcAgentSpace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAgentSpace {
export interface VpcConfigProperty {
    /**
    * List of security group ARNs in the customer VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#security_group_arns CcAgentSpace#security_group_arns}
    */
    readonly securityGroupArns?: string[];
    /**
    * List of subnet ARNs in the customer VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#subnet_arns CcAgentSpace#subnet_arns}
    */
    readonly subnetArns?: string[];
    /**
    * ARN of the customer VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#vpc_arn CcAgentSpace#vpc_arn}
    */
    readonly vpcArn?: string;
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupArns = this._securityGroupArns;
        }
        if (this._subnetArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetArns = this._subnetArns;
        }
        if (this._vpcArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcArn = this._vpcArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupArns = undefined;
            this._subnetArns = undefined;
            this._vpcArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupArns = value.securityGroupArns;
            this._subnetArns = value.subnetArns;
            this._vpcArn = value.vpcArn;
        }
    }

    // security_group_arns - computed: true, optional: true, required: false
    private _securityGroupArns?: string[]; 
    public get securityGroupArns() {
        return this.getListAttribute('security_group_arns');
    }
    public set securityGroupArns(value: string[]) {
        this._securityGroupArns = value;
    }
    public resetSecurityGroupArns() {
        this._securityGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupArnsInput() {
        return this._securityGroupArns;
    }

    // subnet_arns - computed: true, optional: true, required: false
    private _subnetArns?: string[]; 
    public get subnetArns() {
        return this.getListAttribute('subnet_arns');
    }
    public set subnetArns(value: string[]) {
        this._subnetArns = value;
    }
    public resetSubnetArns() {
        this._subnetArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetArnsInput() {
        return this._subnetArns;
    }

    // vpc_arn - computed: true, optional: true, required: false
    private _vpcArn?: string; 
    public get vpcArn() {
        return this.getStringAttribute('vpc_arn');
    }
    public set vpcArn(value: string) {
        this._vpcArn = value;
    }
    public resetVpcArn() {
        this._vpcArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcArnInput() {
        return this._vpcArn;
    }
}

export class VpcConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : VpcConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): VpcConfigPropertyOutputReference {
        return new VpcConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AWSResourcesProperty {
    /**
    * IAM role ARNs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#iam_roles CcAgentSpace#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Lambda function ARNs used to retrieve tester credentials for pentests
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#lambda_function_arns CcAgentSpace#lambda_function_arns}
    */
    readonly lambdaFunctionArns?: string[];
    /**
    * CloudWatch log group ARNs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#log_groups CcAgentSpace#log_groups}
    */
    readonly logGroups?: string[];
    /**
    * S3 bucket ARNs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#s3_buckets CcAgentSpace#s3_buckets}
    */
    readonly s3Buckets?: string[];
    /**
    * SecretsManager secret ARNs used to store tester credentials for pentests
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#secret_arns CcAgentSpace#secret_arns}
    */
    readonly secretArns?: string[];
    /**
    * VPC configurations
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#vpcs CcAgentSpace#vpcs}
    */
    readonly vpcs?: VpcConfigProperty[] | cdktn.IResolvable;
}
export class AWSResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AWSResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iamRoles !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamRoles = this._iamRoles;
        }
        if (this._lambdaFunctionArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionArns = this._lambdaFunctionArns;
        }
        if (this._logGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroups = this._logGroups;
        }
        if (this._s3Buckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Buckets = this._s3Buckets;
        }
        if (this._secretArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArns = this._secretArns;
        }
        if (this._vpcs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcs = this._vpcs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AWSResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iamRoles = undefined;
            this._lambdaFunctionArns = undefined;
            this._logGroups = undefined;
            this._s3Buckets = undefined;
            this._secretArns = undefined;
            this._vpcs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iamRoles = value.iamRoles;
            this._lambdaFunctionArns = value.lambdaFunctionArns;
            this._logGroups = value.logGroups;
            this._s3Buckets = value.s3Buckets;
            this._secretArns = value.secretArns;
            this._vpcs.internalValue = value.vpcs;
        }
    }

    // iam_roles - computed: true, optional: true, required: false
    private _iamRoles?: string[]; 
    public get iamRoles() {
        return this.getListAttribute('iam_roles');
    }
    public set iamRoles(value: string[]) {
        this._iamRoles = value;
    }
    public resetIamRoles() {
        this._iamRoles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRolesInput() {
        return this._iamRoles;
    }

    // lambda_function_arns - computed: true, optional: true, required: false
    private _lambdaFunctionArns?: string[]; 
    public get lambdaFunctionArns() {
        return this.getListAttribute('lambda_function_arns');
    }
    public set lambdaFunctionArns(value: string[]) {
        this._lambdaFunctionArns = value;
    }
    public resetLambdaFunctionArns() {
        this._lambdaFunctionArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionArnsInput() {
        return this._lambdaFunctionArns;
    }

    // log_groups - computed: true, optional: true, required: false
    private _logGroups?: string[]; 
    public get logGroups() {
        return this.getListAttribute('log_groups');
    }
    public set logGroups(value: string[]) {
        this._logGroups = value;
    }
    public resetLogGroups() {
        this._logGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupsInput() {
        return this._logGroups;
    }

    // s3_buckets - computed: true, optional: true, required: false
    private _s3Buckets?: string[]; 
    public get s3Buckets() {
        return this.getListAttribute('s3_buckets');
    }
    public set s3Buckets(value: string[]) {
        this._s3Buckets = value;
    }
    public resetS3Buckets() {
        this._s3Buckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketsInput() {
        return this._s3Buckets;
    }

    // secret_arns - computed: true, optional: true, required: false
    private _secretArns?: string[]; 
    public get secretArns() {
        return this.getListAttribute('secret_arns');
    }
    public set secretArns(value: string[]) {
        this._secretArns = value;
    }
    public resetSecretArns() {
        this._secretArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnsInput() {
        return this._secretArns;
    }

    // vpcs - computed: true, optional: true, required: false
    private _vpcs = new VpcConfigPropertyList(this, "vpcs", false);
    public get vpcs() {
        return this._vpcs;
    }
    public putVpcs(value: VpcConfigProperty[] | cdktn.IResolvable) {
        this._vpcs.internalValue = value;
    }
    public resetVpcs() {
        this._vpcs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcsInput() {
        return this._vpcs.internalValue;
    }
}
export interface CodeReviewSettingsProperty {
    /**
    * Whether Controls are utilized for code review analysis
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#controls_scanning CcAgentSpace#controls_scanning}
    */
    readonly controlsScanning?: boolean | cdktn.IResolvable;
    /**
    * Whether general purpose analysis is performed for code review
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#general_purpose_scanning CcAgentSpace#general_purpose_scanning}
    */
    readonly generalPurposeScanning?: boolean | cdktn.IResolvable;
}
export class CodeReviewSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeReviewSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._controlsScanning !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlsScanning = this._controlsScanning;
        }
        if (this._generalPurposeScanning !== undefined) {
            hasAnyValues = true;
            internalValueResult.generalPurposeScanning = this._generalPurposeScanning;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeReviewSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._controlsScanning = undefined;
            this._generalPurposeScanning = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._controlsScanning = value.controlsScanning;
            this._generalPurposeScanning = value.generalPurposeScanning;
        }
    }

    // controls_scanning - computed: true, optional: true, required: false
    private _controlsScanning?: boolean | cdktn.IResolvable; 
    public get controlsScanning() {
        return this.getBooleanAttribute('controls_scanning');
    }
    public set controlsScanning(value: boolean | cdktn.IResolvable) {
        this._controlsScanning = value;
    }
    public resetControlsScanning() {
        this._controlsScanning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlsScanningInput() {
        return this._controlsScanning;
    }

    // general_purpose_scanning - computed: true, optional: true, required: false
    private _generalPurposeScanning?: boolean | cdktn.IResolvable; 
    public get generalPurposeScanning() {
        return this.getBooleanAttribute('general_purpose_scanning');
    }
    public set generalPurposeScanning(value: boolean | cdktn.IResolvable) {
        this._generalPurposeScanning = value;
    }
    public resetGeneralPurposeScanning() {
        this._generalPurposeScanning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generalPurposeScanningInput() {
        return this._generalPurposeScanning;
    }
}
export interface BitbucketCapabilitiesProperty {
    /**
    * Enables Code Review in the repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#leave_comments CcAgentSpace#leave_comments}
    */
    readonly leaveComments?: boolean | cdktn.IResolvable;
    /**
    * Enables creation of pull requests with automated fixes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#remediate_code CcAgentSpace#remediate_code}
    */
    readonly remediateCode?: boolean | cdktn.IResolvable;
}
export class BitbucketCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BitbucketCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._leaveComments !== undefined) {
            hasAnyValues = true;
            internalValueResult.leaveComments = this._leaveComments;
        }
        if (this._remediateCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.remediateCode = this._remediateCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BitbucketCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._leaveComments = undefined;
            this._remediateCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._leaveComments = value.leaveComments;
            this._remediateCode = value.remediateCode;
        }
    }

    // leave_comments - computed: true, optional: true, required: false
    private _leaveComments?: boolean | cdktn.IResolvable; 
    public get leaveComments() {
        return this.getBooleanAttribute('leave_comments');
    }
    public set leaveComments(value: boolean | cdktn.IResolvable) {
        this._leaveComments = value;
    }
    public resetLeaveComments() {
        this._leaveComments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get leaveCommentsInput() {
        return this._leaveComments;
    }

    // remediate_code - computed: true, optional: true, required: false
    private _remediateCode?: boolean | cdktn.IResolvable; 
    public get remediateCode() {
        return this.getBooleanAttribute('remediate_code');
    }
    public set remediateCode(value: boolean | cdktn.IResolvable) {
        this._remediateCode = value;
    }
    public resetRemediateCode() {
        this._remediateCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remediateCodeInput() {
        return this._remediateCode;
    }
}
export interface BitbucketRepositoryProperty {
    /**
    * Bitbucket repository name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name CcAgentSpace#name}
    */
    readonly name?: string;
    /**
    * Bitbucket workspace slug owning the repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#workspace CcAgentSpace#workspace}
    */
    readonly workspace?: string;
}
export class BitbucketRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BitbucketRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._workspace !== undefined) {
            hasAnyValues = true;
            internalValueResult.workspace = this._workspace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BitbucketRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._workspace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._workspace = value.workspace;
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

    // workspace - computed: true, optional: true, required: false
    private _workspace?: string; 
    public get workspace() {
        return this.getStringAttribute('workspace');
    }
    public set workspace(value: string) {
        this._workspace = value;
    }
    public resetWorkspace() {
        this._workspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceInput() {
        return this._workspace;
    }
}
export interface ConfluenceCapabilitiesProperty {
    /**
    * Enables creation of new Confluence documents in the same space
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#create_document CcAgentSpace#create_document}
    */
    readonly createDocument?: boolean | cdktn.IResolvable;
    /**
    * Enables read access to the document content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#fetch_document CcAgentSpace#fetch_document}
    */
    readonly fetchDocument?: boolean | cdktn.IResolvable;
    /**
    * Enables updates to the document
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#update_document CcAgentSpace#update_document}
    */
    readonly updateDocument?: boolean | cdktn.IResolvable;
}
export class ConfluenceCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfluenceCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDocument = this._createDocument;
        }
        if (this._fetchDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.fetchDocument = this._fetchDocument;
        }
        if (this._updateDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDocument = this._updateDocument;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfluenceCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createDocument = undefined;
            this._fetchDocument = undefined;
            this._updateDocument = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createDocument = value.createDocument;
            this._fetchDocument = value.fetchDocument;
            this._updateDocument = value.updateDocument;
        }
    }

    // create_document - computed: true, optional: true, required: false
    private _createDocument?: boolean | cdktn.IResolvable; 
    public get createDocument() {
        return this.getBooleanAttribute('create_document');
    }
    public set createDocument(value: boolean | cdktn.IResolvable) {
        this._createDocument = value;
    }
    public resetCreateDocument() {
        this._createDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDocumentInput() {
        return this._createDocument;
    }

    // fetch_document - computed: true, optional: true, required: false
    private _fetchDocument?: boolean | cdktn.IResolvable; 
    public get fetchDocument() {
        return this.getBooleanAttribute('fetch_document');
    }
    public set fetchDocument(value: boolean | cdktn.IResolvable) {
        this._fetchDocument = value;
    }
    public resetFetchDocument() {
        this._fetchDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fetchDocumentInput() {
        return this._fetchDocument;
    }

    // update_document - computed: true, optional: true, required: false
    private _updateDocument?: boolean | cdktn.IResolvable; 
    public get updateDocument() {
        return this.getBooleanAttribute('update_document');
    }
    public set updateDocument(value: boolean | cdktn.IResolvable) {
        this._updateDocument = value;
    }
    public resetUpdateDocument() {
        this._updateDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDocumentInput() {
        return this._updateDocument;
    }
}
export interface ConfluenceDocumentProperty {
    /**
    * Customer-supplied logical name for the Confluence document
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name CcAgentSpace#name}
    */
    readonly name?: string;
    /**
    * Confluence page identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#page_id CcAgentSpace#page_id}
    */
    readonly pageId?: string;
    /**
    * Confluence space key containing the document
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#space_key CcAgentSpace#space_key}
    */
    readonly spaceKey?: string;
    /**
    * Read-only human-readable title of the containing space, populated from service-side metadata
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#space_title CcAgentSpace#space_title}
    */
    readonly spaceTitle?: string;
    /**
    * Read-only human-readable title of the page, populated from service-side metadata
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#title CcAgentSpace#title}
    */
    readonly title?: string;
}
export class ConfluenceDocumentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfluenceDocumentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._pageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.pageId = this._pageId;
        }
        if (this._spaceKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceKey = this._spaceKey;
        }
        if (this._spaceTitle !== undefined) {
            hasAnyValues = true;
            internalValueResult.spaceTitle = this._spaceTitle;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfluenceDocumentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._pageId = undefined;
            this._spaceKey = undefined;
            this._spaceTitle = undefined;
            this._title = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._pageId = value.pageId;
            this._spaceKey = value.spaceKey;
            this._spaceTitle = value.spaceTitle;
            this._title = value.title;
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

    // page_id - computed: true, optional: true, required: false
    private _pageId?: string; 
    public get pageId() {
        return this.getStringAttribute('page_id');
    }
    public set pageId(value: string) {
        this._pageId = value;
    }
    public resetPageId() {
        this._pageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pageIdInput() {
        return this._pageId;
    }

    // space_key - computed: true, optional: true, required: false
    private _spaceKey?: string; 
    public get spaceKey() {
        return this.getStringAttribute('space_key');
    }
    public set spaceKey(value: string) {
        this._spaceKey = value;
    }
    public resetSpaceKey() {
        this._spaceKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceKeyInput() {
        return this._spaceKey;
    }

    // space_title - computed: true, optional: true, required: false
    private _spaceTitle?: string; 
    public get spaceTitle() {
        return this.getStringAttribute('space_title');
    }
    public set spaceTitle(value: string) {
        this._spaceTitle = value;
    }
    public resetSpaceTitle() {
        this._spaceTitle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceTitleInput() {
        return this._spaceTitle;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }
}
export interface GitHubCapabilitiesProperty {
    /**
    * Enables Code Review in the repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#leave_comments CcAgentSpace#leave_comments}
    */
    readonly leaveComments?: boolean | cdktn.IResolvable;
    /**
    * Enables creation of pull requests with automated fixes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#remediate_code CcAgentSpace#remediate_code}
    */
    readonly remediateCode?: boolean | cdktn.IResolvable;
}
export class GitHubCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitHubCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._leaveComments !== undefined) {
            hasAnyValues = true;
            internalValueResult.leaveComments = this._leaveComments;
        }
        if (this._remediateCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.remediateCode = this._remediateCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitHubCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._leaveComments = undefined;
            this._remediateCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._leaveComments = value.leaveComments;
            this._remediateCode = value.remediateCode;
        }
    }

    // leave_comments - computed: true, optional: true, required: false
    private _leaveComments?: boolean | cdktn.IResolvable; 
    public get leaveComments() {
        return this.getBooleanAttribute('leave_comments');
    }
    public set leaveComments(value: boolean | cdktn.IResolvable) {
        this._leaveComments = value;
    }
    public resetLeaveComments() {
        this._leaveComments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get leaveCommentsInput() {
        return this._leaveComments;
    }

    // remediate_code - computed: true, optional: true, required: false
    private _remediateCode?: boolean | cdktn.IResolvable; 
    public get remediateCode() {
        return this.getBooleanAttribute('remediate_code');
    }
    public set remediateCode(value: boolean | cdktn.IResolvable) {
        this._remediateCode = value;
    }
    public resetRemediateCode() {
        this._remediateCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remediateCodeInput() {
        return this._remediateCode;
    }
}
export interface GitHubRepositoryProperty {
    /**
    * GitHub repository name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name CcAgentSpace#name}
    */
    readonly name?: string;
    /**
    * GitHub repository owner (user or organization)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#owner CcAgentSpace#owner}
    */
    readonly owner?: string;
}
export class GitHubRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitHubRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitHubRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._owner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._owner = value.owner;
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

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }
}
export interface GitLabCapabilitiesProperty {
    /**
    * Enables Code Review in the repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#leave_comments CcAgentSpace#leave_comments}
    */
    readonly leaveComments?: boolean | cdktn.IResolvable;
    /**
    * Enables creation of merge requests with automated fixes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#remediate_code CcAgentSpace#remediate_code}
    */
    readonly remediateCode?: boolean | cdktn.IResolvable;
}
export class GitLabCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitLabCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._leaveComments !== undefined) {
            hasAnyValues = true;
            internalValueResult.leaveComments = this._leaveComments;
        }
        if (this._remediateCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.remediateCode = this._remediateCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitLabCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._leaveComments = undefined;
            this._remediateCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._leaveComments = value.leaveComments;
            this._remediateCode = value.remediateCode;
        }
    }

    // leave_comments - computed: true, optional: true, required: false
    private _leaveComments?: boolean | cdktn.IResolvable; 
    public get leaveComments() {
        return this.getBooleanAttribute('leave_comments');
    }
    public set leaveComments(value: boolean | cdktn.IResolvable) {
        this._leaveComments = value;
    }
    public resetLeaveComments() {
        this._leaveComments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get leaveCommentsInput() {
        return this._leaveComments;
    }

    // remediate_code - computed: true, optional: true, required: false
    private _remediateCode?: boolean | cdktn.IResolvable; 
    public get remediateCode() {
        return this.getBooleanAttribute('remediate_code');
    }
    public set remediateCode(value: boolean | cdktn.IResolvable) {
        this._remediateCode = value;
    }
    public resetRemediateCode() {
        this._remediateCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remediateCodeInput() {
        return this._remediateCode;
    }
}
export interface GitLabRepositoryProperty {
    /**
    * GitLab project name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#name CcAgentSpace#name}
    */
    readonly name?: string;
    /**
    * GitLab project namespace (user, group, or subgroup path)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#namespace CcAgentSpace#namespace}
    */
    readonly namespace?: string;
}
export class GitLabRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GitLabRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GitLabRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._namespace = value.namespace;
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

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface ProviderResourcesProperty {
    /**
    * Bitbucket repository capabilities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#bitbucket_capabilities CcAgentSpace#bitbucket_capabilities}
    */
    readonly bitbucketCapabilities?: BitbucketCapabilitiesProperty;
    /**
    * Bitbucket repository details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#bitbucket_repository CcAgentSpace#bitbucket_repository}
    */
    readonly bitbucketRepository?: BitbucketRepositoryProperty;
    /**
    * Confluence document capabilities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#confluence_capabilities CcAgentSpace#confluence_capabilities}
    */
    readonly confluenceCapabilities?: ConfluenceCapabilitiesProperty;
    /**
    * Confluence document details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#confluence_document CcAgentSpace#confluence_document}
    */
    readonly confluenceDocument?: ConfluenceDocumentProperty;
    /**
    * GitHub repository capabilities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_hub_capabilities CcAgentSpace#git_hub_capabilities}
    */
    readonly gitHubCapabilities?: GitHubCapabilitiesProperty;
    /**
    * GitHub repository details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_hub_repository CcAgentSpace#git_hub_repository}
    */
    readonly gitHubRepository?: GitHubRepositoryProperty;
    /**
    * GitLab repository capabilities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_lab_capabilities CcAgentSpace#git_lab_capabilities}
    */
    readonly gitLabCapabilities?: GitLabCapabilitiesProperty;
    /**
    * GitLab repository details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#git_lab_repository CcAgentSpace#git_lab_repository}
    */
    readonly gitLabRepository?: GitLabRepositoryProperty;
}
export class ProviderResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProviderResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bitbucketCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitbucketCapabilities = this._bitbucketCapabilities?.internalValue;
        }
        if (this._bitbucketRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bitbucketRepository = this._bitbucketRepository?.internalValue;
        }
        if (this._confluenceCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.confluenceCapabilities = this._confluenceCapabilities?.internalValue;
        }
        if (this._confluenceDocument?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.confluenceDocument = this._confluenceDocument?.internalValue;
        }
        if (this._gitHubCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitHubCapabilities = this._gitHubCapabilities?.internalValue;
        }
        if (this._gitHubRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitHubRepository = this._gitHubRepository?.internalValue;
        }
        if (this._gitLabCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitLabCapabilities = this._gitLabCapabilities?.internalValue;
        }
        if (this._gitLabRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitLabRepository = this._gitLabRepository?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bitbucketCapabilities.internalValue = undefined;
            this._bitbucketRepository.internalValue = undefined;
            this._confluenceCapabilities.internalValue = undefined;
            this._confluenceDocument.internalValue = undefined;
            this._gitHubCapabilities.internalValue = undefined;
            this._gitHubRepository.internalValue = undefined;
            this._gitLabCapabilities.internalValue = undefined;
            this._gitLabRepository.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bitbucketCapabilities.internalValue = value.bitbucketCapabilities;
            this._bitbucketRepository.internalValue = value.bitbucketRepository;
            this._confluenceCapabilities.internalValue = value.confluenceCapabilities;
            this._confluenceDocument.internalValue = value.confluenceDocument;
            this._gitHubCapabilities.internalValue = value.gitHubCapabilities;
            this._gitHubRepository.internalValue = value.gitHubRepository;
            this._gitLabCapabilities.internalValue = value.gitLabCapabilities;
            this._gitLabRepository.internalValue = value.gitLabRepository;
        }
    }

    // bitbucket_capabilities - computed: true, optional: true, required: false
    private _bitbucketCapabilities = new BitbucketCapabilitiesPropertyOutputReference(this, "bitbucket_capabilities");
    public get bitbucketCapabilities() {
        return this._bitbucketCapabilities;
    }
    public putBitbucketCapabilities(value: BitbucketCapabilitiesProperty) {
        this._bitbucketCapabilities.internalValue = value;
    }
    public resetBitbucketCapabilities() {
        this._bitbucketCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitbucketCapabilitiesInput() {
        return this._bitbucketCapabilities.internalValue;
    }

    // bitbucket_repository - computed: true, optional: true, required: false
    private _bitbucketRepository = new BitbucketRepositoryPropertyOutputReference(this, "bitbucket_repository");
    public get bitbucketRepository() {
        return this._bitbucketRepository;
    }
    public putBitbucketRepository(value: BitbucketRepositoryProperty) {
        this._bitbucketRepository.internalValue = value;
    }
    public resetBitbucketRepository() {
        this._bitbucketRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitbucketRepositoryInput() {
        return this._bitbucketRepository.internalValue;
    }

    // confluence_capabilities - computed: true, optional: true, required: false
    private _confluenceCapabilities = new ConfluenceCapabilitiesPropertyOutputReference(this, "confluence_capabilities");
    public get confluenceCapabilities() {
        return this._confluenceCapabilities;
    }
    public putConfluenceCapabilities(value: ConfluenceCapabilitiesProperty) {
        this._confluenceCapabilities.internalValue = value;
    }
    public resetConfluenceCapabilities() {
        this._confluenceCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confluenceCapabilitiesInput() {
        return this._confluenceCapabilities.internalValue;
    }

    // confluence_document - computed: true, optional: true, required: false
    private _confluenceDocument = new ConfluenceDocumentPropertyOutputReference(this, "confluence_document");
    public get confluenceDocument() {
        return this._confluenceDocument;
    }
    public putConfluenceDocument(value: ConfluenceDocumentProperty) {
        this._confluenceDocument.internalValue = value;
    }
    public resetConfluenceDocument() {
        this._confluenceDocument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confluenceDocumentInput() {
        return this._confluenceDocument.internalValue;
    }

    // git_hub_capabilities - computed: true, optional: true, required: false
    private _gitHubCapabilities = new GitHubCapabilitiesPropertyOutputReference(this, "git_hub_capabilities");
    public get gitHubCapabilities() {
        return this._gitHubCapabilities;
    }
    public putGitHubCapabilities(value: GitHubCapabilitiesProperty) {
        this._gitHubCapabilities.internalValue = value;
    }
    public resetGitHubCapabilities() {
        this._gitHubCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitHubCapabilitiesInput() {
        return this._gitHubCapabilities.internalValue;
    }

    // git_hub_repository - computed: true, optional: true, required: false
    private _gitHubRepository = new GitHubRepositoryPropertyOutputReference(this, "git_hub_repository");
    public get gitHubRepository() {
        return this._gitHubRepository;
    }
    public putGitHubRepository(value: GitHubRepositoryProperty) {
        this._gitHubRepository.internalValue = value;
    }
    public resetGitHubRepository() {
        this._gitHubRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitHubRepositoryInput() {
        return this._gitHubRepository.internalValue;
    }

    // git_lab_capabilities - computed: true, optional: true, required: false
    private _gitLabCapabilities = new GitLabCapabilitiesPropertyOutputReference(this, "git_lab_capabilities");
    public get gitLabCapabilities() {
        return this._gitLabCapabilities;
    }
    public putGitLabCapabilities(value: GitLabCapabilitiesProperty) {
        this._gitLabCapabilities.internalValue = value;
    }
    public resetGitLabCapabilities() {
        this._gitLabCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitLabCapabilitiesInput() {
        return this._gitLabCapabilities.internalValue;
    }

    // git_lab_repository - computed: true, optional: true, required: false
    private _gitLabRepository = new GitLabRepositoryPropertyOutputReference(this, "git_lab_repository");
    public get gitLabRepository() {
        return this._gitLabRepository;
    }
    public putGitLabRepository(value: GitLabRepositoryProperty) {
        this._gitLabRepository.internalValue = value;
    }
    public resetGitLabRepository() {
        this._gitLabRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitLabRepositoryInput() {
        return this._gitLabRepository.internalValue;
    }
}

export class ProviderResourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : ProviderResourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): ProviderResourcesPropertyOutputReference {
        return new ProviderResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IntegratedResourceProperty {
    /**
    * Unique identifier of the Provider Integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#integration CcAgentSpace#integration}
    */
    readonly integration?: string;
    /**
    * List of selected Resources from the Integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#provider_resources CcAgentSpace#provider_resources}
    */
    readonly providerResources?: ProviderResourcesProperty[] | cdktn.IResolvable;
}
export class IntegratedResourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntegratedResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._integration !== undefined) {
            hasAnyValues = true;
            internalValueResult.integration = this._integration;
        }
        if (this._providerResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerResources = this._providerResources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegratedResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._integration = undefined;
            this._providerResources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._integration = value.integration;
            this._providerResources.internalValue = value.providerResources;
        }
    }

    // integration - computed: true, optional: true, required: false
    private _integration?: string; 
    public get integration() {
        return this.getStringAttribute('integration');
    }
    public set integration(value: string) {
        this._integration = value;
    }
    public resetIntegration() {
        this._integration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationInput() {
        return this._integration;
    }

    // provider_resources - computed: true, optional: true, required: false
    private _providerResources = new ProviderResourcesPropertyList(this, "provider_resources", false);
    public get providerResources() {
        return this._providerResources;
    }
    public putProviderResources(value: ProviderResourcesProperty[] | cdktn.IResolvable) {
        this._providerResources.internalValue = value;
    }
    public resetProviderResources() {
        this._providerResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerResourcesInput() {
        return this._providerResources.internalValue;
    }
}

export class IntegratedResourcePropertyList extends cdktn.ComplexList {
    public internalValue? : IntegratedResourceProperty[] | cdktn.IResolvable

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
    public get(index: number): IntegratedResourcePropertyOutputReference {
        return new IntegratedResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#key CcAgentSpace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_agent_space#value CcAgentSpace#value}
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
