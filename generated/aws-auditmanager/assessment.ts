// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssessmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The destination in which evidence reports are stored for the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#assessment_reports_destination CcAssessment#assessment_reports_destination}
    */
    readonly assessmentReportsDestination?: CcAssessment.AssessmentReportsDestinationProperty;
    /**
    * The AWS account associated with the assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#aws_account CcAssessment#aws_account}
    */
    readonly awsAccount?: CcAssessment.AWSAccountProperty;
    /**
    * The list of delegations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#delegations CcAssessment#delegations}
    */
    readonly delegations?: CcAssessment.DelegationProperty[] | cdktn.IResolvable;
    /**
    * The description of the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#description CcAssessment#description}
    */
    readonly description?: string;
    /**
    * The identifier for the specified framework.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#framework_id CcAssessment#framework_id}
    */
    readonly frameworkId?: string;
    /**
    * The name of the related assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#name CcAssessment#name}
    */
    readonly name?: string;
    /**
    * The list of roles for the specified assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#roles CcAssessment#roles}
    */
    readonly roles?: CcAssessment.RoleProperty[] | cdktn.IResolvable;
    /**
    * The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#scope CcAssessment#scope}
    */
    readonly scope?: CcAssessment.ScopeProperty;
    /**
    * The status of the specified assessment. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#status CcAssessment#status}
    */
    readonly status?: string;
    /**
    * The tags associated with the assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#tags CcAssessment#tags}
    */
    readonly tags?: CcAssessment.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment awscc_auditmanager_assessment}
*/
export class CcAssessment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_auditmanager_assessment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssessment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssessment to import
    * @param importFromId The id of the existing CcAssessment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssessment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_auditmanager_assessment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment awscc_auditmanager_assessment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssessmentProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcAssessmentProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_auditmanager_assessment',
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
        this._assessmentReportsDestination.internalValue = config.assessmentReportsDestination;
        this._awsAccount.internalValue = config.awsAccount;
        this._delegations.internalValue = config.delegations;
        this._description = config.description;
        this._frameworkId = config.frameworkId;
        this._name = config.name;
        this._roles.internalValue = config.roles;
        this._scope.internalValue = config.scope;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // assessment_id - computed: true, optional: false, required: false
    public get assessmentId() {
        return this.getStringAttribute('assessment_id');
    }

    // assessment_reports_destination - computed: true, optional: true, required: false
    private _assessmentReportsDestination = new CcAssessment.AssessmentReportsDestinationPropertyOutputReference(this, "assessment_reports_destination");
    public get assessmentReportsDestination() {
        return this._assessmentReportsDestination;
    }
    public putAssessmentReportsDestination(value: CcAssessment.AssessmentReportsDestinationProperty) {
        this._assessmentReportsDestination.internalValue = value;
    }
    public resetAssessmentReportsDestination() {
        this._assessmentReportsDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assessmentReportsDestinationInput() {
        return this._assessmentReportsDestination.internalValue;
    }

    // aws_account - computed: true, optional: true, required: false
    private _awsAccount = new CcAssessment.AWSAccountPropertyOutputReference(this, "aws_account");
    public get awsAccount() {
        return this._awsAccount;
    }
    public putAwsAccount(value: CcAssessment.AWSAccountProperty) {
        this._awsAccount.internalValue = value;
    }
    public resetAwsAccount() {
        this._awsAccount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountInput() {
        return this._awsAccount.internalValue;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getNumberAttribute('creation_time');
    }

    // delegations - computed: true, optional: true, required: false
    private _delegations = new CcAssessment.DelegationPropertyList(this, "delegations", false);
    public get delegations() {
        return this._delegations;
    }
    public putDelegations(value: CcAssessment.DelegationProperty[] | cdktn.IResolvable) {
        this._delegations.internalValue = value;
    }
    public resetDelegations() {
        this._delegations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delegationsInput() {
        return this._delegations.internalValue;
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

    // framework_id - computed: true, optional: true, required: false
    private _frameworkId?: string; 
    public get frameworkId() {
        return this.getStringAttribute('framework_id');
    }
    public set frameworkId(value: string) {
        this._frameworkId = value;
    }
    public resetFrameworkId() {
        this._frameworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkIdInput() {
        return this._frameworkId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // roles - computed: true, optional: true, required: false
    private _roles = new CcAssessment.RolePropertyList(this, "roles", false);
    public get roles() {
        return this._roles;
    }
    public putRoles(value: CcAssessment.RoleProperty[] | cdktn.IResolvable) {
        this._roles.internalValue = value;
    }
    public resetRoles() {
        this._roles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
        return this._roles.internalValue;
    }

    // scope - computed: true, optional: true, required: false
    private _scope = new CcAssessment.ScopePropertyOutputReference(this, "scope");
    public get scope() {
        return this._scope;
    }
    public putScope(value: CcAssessment.ScopeProperty) {
        this._scope.internalValue = value;
    }
    public resetScope() {
        this._scope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAssessment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAssessment.TagProperty[] | cdktn.IResolvable) {
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
            assessment_reports_destination: ccAssessmentAssessmentReportsDestinationPropertyToTerraform(this._assessmentReportsDestination.internalValue),
            aws_account: ccAssessmentAWSAccountPropertyToTerraform(this._awsAccount.internalValue),
            delegations: cdktn.listMapper(ccAssessmentDelegationPropertyToTerraform, false)(this._delegations.internalValue),
            description: cdktn.stringToTerraform(this._description),
            framework_id: cdktn.stringToTerraform(this._frameworkId),
            name: cdktn.stringToTerraform(this._name),
            roles: cdktn.listMapper(ccAssessmentRolePropertyToTerraform, false)(this._roles.internalValue),
            scope: ccAssessmentScopePropertyToTerraform(this._scope.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccAssessmentTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assessment_reports_destination: {
                value: ccAssessmentAssessmentReportsDestinationPropertyToHclTerraform(this._assessmentReportsDestination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAssessment.AssessmentReportsDestinationProperty",
            },
            aws_account: {
                value: ccAssessmentAWSAccountPropertyToHclTerraform(this._awsAccount.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAssessment.AWSAccountProperty",
            },
            delegations: {
                value: cdktn.listMapperHcl(ccAssessmentDelegationPropertyToHclTerraform, false)(this._delegations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssessment.DelegationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            framework_id: {
                value: cdktn.stringToHclTerraform(this._frameworkId),
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
            roles: {
                value: cdktn.listMapperHcl(ccAssessmentRolePropertyToHclTerraform, false)(this._roles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssessment.RolePropertyList",
            },
            scope: {
                value: ccAssessmentScopePropertyToHclTerraform(this._scope.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAssessment.ScopeProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAssessmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAssessment.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssessmentAssessmentReportsDestinationPropertyToTerraform(struct?: CcAssessment.AssessmentReportsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
        destination_type: cdktn.stringToTerraform(struct!.destinationType),
    }
}


export function ccAssessmentAssessmentReportsDestinationPropertyToHclTerraform(struct?: CcAssessment.AssessmentReportsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_type: {
            value: cdktn.stringToHclTerraform(struct!.destinationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentAWSAccountPropertyToTerraform(struct?: CcAssessment.AWSAccountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_address: cdktn.stringToTerraform(struct!.emailAddress),
        id: cdktn.stringToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssessmentAWSAccountPropertyToHclTerraform(struct?: CcAssessment.AWSAccountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_address: {
            value: cdktn.stringToHclTerraform(struct!.emailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentDelegationPropertyToTerraform(struct?: CcAssessment.DelegationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        assessment_id: cdktn.stringToTerraform(struct!.assessmentId),
        assessment_name: cdktn.stringToTerraform(struct!.assessmentName),
        comment: cdktn.stringToTerraform(struct!.comment),
        control_set_id: cdktn.stringToTerraform(struct!.controlSetId),
        created_by: cdktn.stringToTerraform(struct!.createdBy),
        creation_time: cdktn.numberToTerraform(struct!.creationTime),
        id: cdktn.stringToTerraform(struct!.id),
        last_updated: cdktn.numberToTerraform(struct!.lastUpdated),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        role_type: cdktn.stringToTerraform(struct!.roleType),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccAssessmentDelegationPropertyToHclTerraform(struct?: CcAssessment.DelegationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        assessment_id: {
            value: cdktn.stringToHclTerraform(struct!.assessmentId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        assessment_name: {
            value: cdktn.stringToHclTerraform(struct!.assessmentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        control_set_id: {
            value: cdktn.stringToHclTerraform(struct!.controlSetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_by: {
            value: cdktn.stringToHclTerraform(struct!.createdBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        creation_time: {
            value: cdktn.numberToHclTerraform(struct!.creationTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_updated: {
            value: cdktn.numberToHclTerraform(struct!.lastUpdated),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_type: {
            value: cdktn.stringToHclTerraform(struct!.roleType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentRolePropertyToTerraform(struct?: CcAssessment.RoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        role_type: cdktn.stringToTerraform(struct!.roleType),
    }
}


export function ccAssessmentRolePropertyToHclTerraform(struct?: CcAssessment.RoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_type: {
            value: cdktn.stringToHclTerraform(struct!.roleType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentAwsAccountsPropertyToTerraform(struct?: CcAssessment.AwsAccountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_address: cdktn.stringToTerraform(struct!.emailAddress),
        id: cdktn.stringToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAssessmentAwsAccountsPropertyToHclTerraform(struct?: CcAssessment.AwsAccountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_address: {
            value: cdktn.stringToHclTerraform(struct!.emailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentAWSServicePropertyToTerraform(struct?: CcAssessment.AWSServiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        service_name: cdktn.stringToTerraform(struct!.serviceName),
    }
}


export function ccAssessmentAWSServicePropertyToHclTerraform(struct?: CcAssessment.AWSServiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentScopePropertyToTerraform(struct?: CcAssessment.ScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_accounts: cdktn.listMapper(ccAssessmentAwsAccountsPropertyToTerraform, false)(struct!.awsAccounts),
        aws_services: cdktn.listMapper(ccAssessmentAWSServicePropertyToTerraform, false)(struct!.awsServices),
    }
}


export function ccAssessmentScopePropertyToHclTerraform(struct?: CcAssessment.ScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_accounts: {
            value: cdktn.listMapperHcl(ccAssessmentAwsAccountsPropertyToHclTerraform, false)(struct!.awsAccounts),
            isBlock: true,
            type: "list",
            storageClassType: "AwsAccountsPropertyList",
        },
        aws_services: {
            value: cdktn.listMapperHcl(ccAssessmentAWSServicePropertyToHclTerraform, false)(struct!.awsServices),
            isBlock: true,
            type: "list",
            storageClassType: "AWSServicePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssessmentTagPropertyToTerraform(struct?: CcAssessment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssessmentTagPropertyToHclTerraform(struct?: CcAssessment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAssessment {
export interface AssessmentReportsDestinationProperty {
    /**
    * The URL of the specified Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#destination CcAssessment#destination}
    */
    readonly destination?: string;
    /**
    * The destination type, such as Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#destination_type CcAssessment#destination_type}
    */
    readonly destinationType?: string;
}
export class AssessmentReportsDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssessmentReportsDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._destinationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationType = this._destinationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssessmentReportsDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
            this._destinationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
            this._destinationType = value.destinationType;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // destination_type - computed: true, optional: true, required: false
    private _destinationType?: string; 
    public get destinationType() {
        return this.getStringAttribute('destination_type');
    }
    public set destinationType(value: string) {
        this._destinationType = value;
    }
    public resetDestinationType() {
        this._destinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTypeInput() {
        return this._destinationType;
    }
}
export interface AWSAccountProperty {
    /**
    * The unique identifier for the email account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#email_address CcAssessment#email_address}
    */
    readonly emailAddress?: string;
    /**
    * The identifier for the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#id CcAssessment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#name CcAssessment#name}
    */
    readonly name?: string;
}
export class AWSAccountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AWSAccountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddress = this._emailAddress;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AWSAccountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailAddress = undefined;
            this._id = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailAddress = value.emailAddress;
            this._id = value.id;
            this._name = value.name;
        }
    }

    // email_address - computed: true, optional: true, required: false
    private _emailAddress?: string; 
    public get emailAddress() {
        return this.getStringAttribute('email_address');
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }
    public resetEmailAddress() {
        this._emailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress;
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
}
export interface DelegationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#assessment_id CcAssessment#assessment_id}
    */
    readonly assessmentId?: string;
    /**
    * The name of the related assessment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#assessment_name CcAssessment#assessment_name}
    */
    readonly assessmentName?: string;
    /**
    * The comment related to the delegation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#comment CcAssessment#comment}
    */
    readonly comment?: string;
    /**
    * The identifier for the specified control set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#control_set_id CcAssessment#control_set_id}
    */
    readonly controlSetId?: string;
    /**
    * The IAM user or role that performed the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#created_by CcAssessment#created_by}
    */
    readonly createdBy?: string;
    /**
    * The sequence of characters that identifies when the event occurred.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#creation_time CcAssessment#creation_time}
    */
    readonly creationTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#id CcAssessment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The sequence of characters that identifies when the event occurred.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#last_updated CcAssessment#last_updated}
    */
    readonly lastUpdated?: number;
    /**
    * The Amazon Resource Name (ARN) of the IAM user or role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#role_arn CcAssessment#role_arn}
    */
    readonly roleArn?: string;
    /**
    *  The IAM role type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#role_type CcAssessment#role_type}
    */
    readonly roleType?: string;
    /**
    * The status of the delegation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#status CcAssessment#status}
    */
    readonly status?: string;
}
export class DelegationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DelegationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assessmentId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assessmentId = this._assessmentId;
        }
        if (this._assessmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.assessmentName = this._assessmentName;
        }
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._controlSetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlSetId = this._controlSetId;
        }
        if (this._createdBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdBy = this._createdBy;
        }
        if (this._creationTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.creationTime = this._creationTime;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._lastUpdated !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastUpdated = this._lastUpdated;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._roleType !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleType = this._roleType;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DelegationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assessmentId = undefined;
            this._assessmentName = undefined;
            this._comment = undefined;
            this._controlSetId = undefined;
            this._createdBy = undefined;
            this._creationTime = undefined;
            this._id = undefined;
            this._lastUpdated = undefined;
            this._roleArn = undefined;
            this._roleType = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assessmentId = value.assessmentId;
            this._assessmentName = value.assessmentName;
            this._comment = value.comment;
            this._controlSetId = value.controlSetId;
            this._createdBy = value.createdBy;
            this._creationTime = value.creationTime;
            this._id = value.id;
            this._lastUpdated = value.lastUpdated;
            this._roleArn = value.roleArn;
            this._roleType = value.roleType;
            this._status = value.status;
        }
    }

    // assessment_id - computed: true, optional: true, required: false
    private _assessmentId?: string; 
    public get assessmentId() {
        return this.getStringAttribute('assessment_id');
    }
    public set assessmentId(value: string) {
        this._assessmentId = value;
    }
    public resetAssessmentId() {
        this._assessmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assessmentIdInput() {
        return this._assessmentId;
    }

    // assessment_name - computed: true, optional: true, required: false
    private _assessmentName?: string; 
    public get assessmentName() {
        return this.getStringAttribute('assessment_name');
    }
    public set assessmentName(value: string) {
        this._assessmentName = value;
    }
    public resetAssessmentName() {
        this._assessmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assessmentNameInput() {
        return this._assessmentName;
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // control_set_id - computed: true, optional: true, required: false
    private _controlSetId?: string; 
    public get controlSetId() {
        return this.getStringAttribute('control_set_id');
    }
    public set controlSetId(value: string) {
        this._controlSetId = value;
    }
    public resetControlSetId() {
        this._controlSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlSetIdInput() {
        return this._controlSetId;
    }

    // created_by - computed: true, optional: true, required: false
    private _createdBy?: string; 
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }
    public set createdBy(value: string) {
        this._createdBy = value;
    }
    public resetCreatedBy() {
        this._createdBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdByInput() {
        return this._createdBy;
    }

    // creation_time - computed: true, optional: true, required: false
    private _creationTime?: number; 
    public get creationTime() {
        return this.getNumberAttribute('creation_time');
    }
    public set creationTime(value: number) {
        this._creationTime = value;
    }
    public resetCreationTime() {
        this._creationTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationTimeInput() {
        return this._creationTime;
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

    // last_updated - computed: true, optional: true, required: false
    private _lastUpdated?: number; 
    public get lastUpdated() {
        return this.getNumberAttribute('last_updated');
    }
    public set lastUpdated(value: number) {
        this._lastUpdated = value;
    }
    public resetLastUpdated() {
        this._lastUpdated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUpdatedInput() {
        return this._lastUpdated;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // role_type - computed: true, optional: true, required: false
    private _roleType?: string; 
    public get roleType() {
        return this.getStringAttribute('role_type');
    }
    public set roleType(value: string) {
        this._roleType = value;
    }
    public resetRoleType() {
        this._roleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleTypeInput() {
        return this._roleType;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class DelegationPropertyList extends cdktn.ComplexList {
    public internalValue? : DelegationProperty[] | cdktn.IResolvable

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
    public get(index: number): DelegationPropertyOutputReference {
        return new DelegationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RoleProperty {
    /**
    * The Amazon Resource Name (ARN) of the IAM user or role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#role_arn CcAssessment#role_arn}
    */
    readonly roleArn?: string;
    /**
    *  The IAM role type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#role_type CcAssessment#role_type}
    */
    readonly roleType?: string;
}
export class RolePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RoleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._roleType !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleType = this._roleType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._roleType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._roleType = value.roleType;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // role_type - computed: true, optional: true, required: false
    private _roleType?: string; 
    public get roleType() {
        return this.getStringAttribute('role_type');
    }
    public set roleType(value: string) {
        this._roleType = value;
    }
    public resetRoleType() {
        this._roleType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleTypeInput() {
        return this._roleType;
    }
}

export class RolePropertyList extends cdktn.ComplexList {
    public internalValue? : RoleProperty[] | cdktn.IResolvable

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
    public get(index: number): RolePropertyOutputReference {
        return new RolePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AwsAccountsProperty {
    /**
    * The unique identifier for the email account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#email_address CcAssessment#email_address}
    */
    readonly emailAddress?: string;
    /**
    * The identifier for the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#id CcAssessment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the specified AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#name CcAssessment#name}
    */
    readonly name?: string;
}
export class AwsAccountsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AwsAccountsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddress = this._emailAddress;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsAccountsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailAddress = undefined;
            this._id = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailAddress = value.emailAddress;
            this._id = value.id;
            this._name = value.name;
        }
    }

    // email_address - computed: true, optional: true, required: false
    private _emailAddress?: string; 
    public get emailAddress() {
        return this.getStringAttribute('email_address');
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }
    public resetEmailAddress() {
        this._emailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress;
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
}

export class AwsAccountsPropertyList extends cdktn.ComplexList {
    public internalValue? : AwsAccountsProperty[] | cdktn.IResolvable

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
    public get(index: number): AwsAccountsPropertyOutputReference {
        return new AwsAccountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AWSServiceProperty {
    /**
    * The name of the AWS service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#service_name CcAssessment#service_name}
    */
    readonly serviceName?: string;
}
export class AWSServicePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AWSServiceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AWSServiceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serviceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serviceName = value.serviceName;
        }
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }
}

export class AWSServicePropertyList extends cdktn.ComplexList {
    public internalValue? : AWSServiceProperty[] | cdktn.IResolvable

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
    public get(index: number): AWSServicePropertyOutputReference {
        return new AWSServicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScopeProperty {
    /**
    * The AWS accounts included in scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#aws_accounts CcAssessment#aws_accounts}
    */
    readonly awsAccounts?: AwsAccountsProperty[] | cdktn.IResolvable;
    /**
    * The AWS services included in scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#aws_services CcAssessment#aws_services}
    */
    readonly awsServices?: AWSServiceProperty[] | cdktn.IResolvable;
}
export class ScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsAccounts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsAccounts = this._awsAccounts?.internalValue;
        }
        if (this._awsServices?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsServices = this._awsServices?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsAccounts.internalValue = undefined;
            this._awsServices.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsAccounts.internalValue = value.awsAccounts;
            this._awsServices.internalValue = value.awsServices;
        }
    }

    // aws_accounts - computed: true, optional: true, required: false
    private _awsAccounts = new AwsAccountsPropertyList(this, "aws_accounts", false);
    public get awsAccounts() {
        return this._awsAccounts;
    }
    public putAwsAccounts(value: AwsAccountsProperty[] | cdktn.IResolvable) {
        this._awsAccounts.internalValue = value;
    }
    public resetAwsAccounts() {
        this._awsAccounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountsInput() {
        return this._awsAccounts.internalValue;
    }

    // aws_services - computed: true, optional: true, required: false
    private _awsServices = new AWSServicePropertyList(this, "aws_services", false);
    public get awsServices() {
        return this._awsServices;
    }
    public putAwsServices(value: AWSServiceProperty[] | cdktn.IResolvable) {
        this._awsServices.internalValue = value;
    }
    public resetAwsServices() {
        this._awsServices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsServicesInput() {
        return this._awsServices.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#key CcAssessment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/auditmanager_assessment#value CcAssessment#value}
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
