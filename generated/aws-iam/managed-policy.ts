// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcManagedPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A friendly description of the policy.
    *  Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
    *  The policy description is immutable. After a value is assigned, it cannot be changed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#description CcManagedPolicy#description}
    */
    readonly description?: string;
    /**
    * The name (friendly name, not ARN) of the group to attach the policy to.
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#groups CcManagedPolicy#groups}
    */
    readonly groups?: string[];
    /**
    * The friendly name of the policy.
    *   If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *   If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
    *   Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#managed_policy_name CcManagedPolicy#managed_policy_name}
    */
    readonly managedPolicyName?: string;
    /**
    * The path for the policy.
    *  For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
    *  This parameter is optional. If it is not included, it defaults to a slash (/).
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
    *   You cannot use an asterisk (*) in the path name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#path CcManagedPolicy#path}
    */
    readonly path?: string;
    /**
    * The JSON policy document that you want to use as the content for the new policy.
    *  You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
    *  The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
    *  To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the *IAM User Guide*. 
    *  The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
    *   +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
    *   +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
    *   +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#policy_document CcManagedPolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * The name (friendly name, not ARN) of the role to attach the policy to.
    *  This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
    *   If an external policy (such as ``AWS::IAM::Policy`` or ``AWS::IAM::ManagedPolicy``) has a ``Ref`` to a role and if a resource (such as ``AWS::ECS::Service``) also has a ``Ref`` to the same role, add a ``DependsOn`` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an ``AWS::ECS::Service`` resource, the ``DependsOn`` attribute ensures that CFN deletes the ``AWS::ECS::Service`` resource before deleting its role's policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#roles CcManagedPolicy#roles}
    */
    readonly roles?: string[];
    /**
    * The name (friendly name, not ARN) of the IAM user to attach the policy to.
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#users CcManagedPolicy#users}
    */
    readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy awscc_iam_managed_policy}
*/
export class CcManagedPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_managed_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcManagedPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcManagedPolicy to import
    * @param importFromId The id of the existing CcManagedPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcManagedPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_managed_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_managed_policy awscc_iam_managed_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcManagedPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcManagedPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_managed_policy',
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
        this._description = config.description;
        this._groups = config.groups;
        this._managedPolicyName = config.managedPolicyName;
        this._path = config.path;
        this._policyDocument = config.policyDocument;
        this._roles = config.roles;
        this._users = config.users;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attachment_count - computed: true, optional: false, required: false
    public get attachmentCount() {
        return this.getNumberAttribute('attachment_count');
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
        return this.getStringAttribute('create_date');
    }

    // default_version_id - computed: true, optional: false, required: false
    public get defaultVersionId() {
        return this.getStringAttribute('default_version_id');
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

    // groups - computed: true, optional: true, required: false
    private _groups?: string[]; 
    public get groups() {
        return cdktn.Fn.tolist(this.getListAttribute('groups'));
    }
    public set groups(value: string[]) {
        this._groups = value;
    }
    public resetGroups() {
        this._groups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
        return this._groups;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_attachable - computed: true, optional: false, required: false
    public get isAttachable() {
        return this.getBooleanAttribute('is_attachable');
    }

    // managed_policy_name - computed: true, optional: true, required: false
    private _managedPolicyName?: string; 
    public get managedPolicyName() {
        return this.getStringAttribute('managed_policy_name');
    }
    public set managedPolicyName(value: string) {
        this._managedPolicyName = value;
    }
    public resetManagedPolicyName() {
        this._managedPolicyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedPolicyNameInput() {
        return this._managedPolicyName;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // permissions_boundary_usage_count - computed: true, optional: false, required: false
    public get permissionsBoundaryUsageCount() {
        return this.getNumberAttribute('permissions_boundary_usage_count');
    }

    // policy_arn - computed: true, optional: false, required: false
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }

    // roles - computed: true, optional: true, required: false
    private _roles?: string[]; 
    public get roles() {
        return cdktn.Fn.tolist(this.getListAttribute('roles'));
    }
    public set roles(value: string[]) {
        this._roles = value;
    }
    public resetRoles() {
        this._roles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
        return this._roles;
    }

    // update_date - computed: true, optional: false, required: false
    public get updateDate() {
        return this.getStringAttribute('update_date');
    }

    // users - computed: true, optional: true, required: false
    private _users?: string[]; 
    public get users() {
        return cdktn.Fn.tolist(this.getListAttribute('users'));
    }
    public set users(value: string[]) {
        this._users = value;
    }
    public resetUsers() {
        this._users = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usersInput() {
        return this._users;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._groups),
            managed_policy_name: cdktn.stringToTerraform(this._managedPolicyName),
            path: cdktn.stringToTerraform(this._path),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._roles),
            users: cdktn.listMapper(cdktn.stringToTerraform, false)(this._users),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._groups),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            managed_policy_name: {
                value: cdktn.stringToHclTerraform(this._managedPolicyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktn.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            roles: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._roles),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            users: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._users),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcManagedPolicy {
}
