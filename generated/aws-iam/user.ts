// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of group names to which you want to add the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#groups CcUser#groups}
    */
    readonly groups?: string[];
    /**
    * Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the console.
    *  You can use the CLI, the AWS API, or the *Users* page in the IAM console to create a password for any IAM user. Use [ChangePassword](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html) to update your own existing password in the *My Security Credentials* page in the console.
    *  For more information about managing passwords, see [Managing passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#login_profile CcUser#login_profile}
    */
    readonly loginProfile?: CcUser.LoginProfileProperty;
    /**
    * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the user.
    *  For more information about ARNs, see [Amazon Resource Names (ARNs) and Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#managed_policy_arns CcUser#managed_policy_arns}
    */
    readonly managedPolicyArns?: string[];
    /**
    * The path for the user name. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
    *  This parameter is optional. If it is not included, it defaults to a slash (/).
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#path CcUser#path}
    */
    readonly path?: string;
    /**
    * The ARN of the managed policy that is used to set the permissions boundary for the user.
    *  A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
    *  For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#permissions_boundary CcUser#permissions_boundary}
    */
    readonly permissionsBoundary?: string;
    /**
    * Adds or updates an inline policy document that is embedded in the specified IAM user. To view AWS::IAM::User snippets, see [Declaring an User Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-user).
    *   The name of each policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail. 
    *   For information about limits on the number of inline policies that you can embed in a user, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#policies CcUser#policies}
    */
    readonly policies?: CcUser.PolicyProperty[] | cdktn.IResolvable;
    /**
    * A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
    *   If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#tags CcUser#tags}
    */
    readonly tags?: CcUser.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the user to create. Do not include the path in this value.
    *  This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both "John" and "john".
    *  If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.
    *  If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
    *   Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#user_name CcUser#user_name}
    */
    readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user awscc_iam_user}
*/
export class CcUser extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_user";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUser resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUser to import
    * @param importFromId The id of the existing CcUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUser to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_user", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user awscc_iam_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcUserProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_user',
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
        this._groups = config.groups;
        this._loginProfile.internalValue = config.loginProfile;
        this._managedPolicyArns = config.managedPolicyArns;
        this._path = config.path;
        this._permissionsBoundary = config.permissionsBoundary;
        this._policies.internalValue = config.policies;
        this._tags.internalValue = config.tags;
        this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // groups - computed: true, optional: true, required: false
    private _groups?: string[]; 
    public get groups() {
        return this.getListAttribute('groups');
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

    // login_profile - computed: true, optional: true, required: false
    private _loginProfile = new CcUser.LoginProfilePropertyOutputReference(this, "login_profile");
    public get loginProfile() {
        return this._loginProfile;
    }
    public putLoginProfile(value: CcUser.LoginProfileProperty) {
        this._loginProfile.internalValue = value;
    }
    public resetLoginProfile() {
        this._loginProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loginProfileInput() {
        return this._loginProfile.internalValue;
    }

    // managed_policy_arns - computed: true, optional: true, required: false
    private _managedPolicyArns?: string[]; 
    public get managedPolicyArns() {
        return cdktn.Fn.tolist(this.getListAttribute('managed_policy_arns'));
    }
    public set managedPolicyArns(value: string[]) {
        this._managedPolicyArns = value;
    }
    public resetManagedPolicyArns() {
        this._managedPolicyArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedPolicyArnsInput() {
        return this._managedPolicyArns;
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

    // permissions_boundary - computed: true, optional: true, required: false
    private _permissionsBoundary?: string; 
    public get permissionsBoundary() {
        return this.getStringAttribute('permissions_boundary');
    }
    public set permissionsBoundary(value: string) {
        this._permissionsBoundary = value;
    }
    public resetPermissionsBoundary() {
        this._permissionsBoundary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsBoundaryInput() {
        return this._permissionsBoundary;
    }

    // policies - computed: true, optional: true, required: false
    private _policies = new CcUser.PolicyPropertyList(this, "policies", false);
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: CcUser.PolicyProperty[] | cdktn.IResolvable) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcUser.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcUser.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_name - computed: true, optional: true, required: false
    private _userName?: string; 
    public get userName() {
        return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
        this._userName = value;
    }
    public resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
        return this._userName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._groups),
            login_profile: ccUserLoginProfilePropertyToTerraform(this._loginProfile.internalValue),
            managed_policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedPolicyArns),
            path: cdktn.stringToTerraform(this._path),
            permissions_boundary: cdktn.stringToTerraform(this._permissionsBoundary),
            policies: cdktn.listMapper(ccUserPolicyPropertyToTerraform, false)(this._policies.internalValue),
            tags: cdktn.listMapper(ccUserTagPropertyToTerraform, false)(this._tags.internalValue),
            user_name: cdktn.stringToTerraform(this._userName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._groups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            login_profile: {
                value: ccUserLoginProfilePropertyToHclTerraform(this._loginProfile.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUser.LoginProfileProperty",
            },
            managed_policy_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._managedPolicyArns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            path: {
                value: cdktn.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions_boundary: {
                value: cdktn.stringToHclTerraform(this._permissionsBoundary),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policies: {
                value: cdktn.listMapperHcl(ccUserPolicyPropertyToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.PolicyPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccUserTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUser.TagPropertyList",
            },
            user_name: {
                value: cdktn.stringToHclTerraform(this._userName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserLoginProfilePropertyToTerraform(struct?: CcUser.LoginProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        password_reset_required: cdktn.booleanToTerraform(struct!.passwordResetRequired),
    }
}


export function ccUserLoginProfilePropertyToHclTerraform(struct?: CcUser.LoginProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password_reset_required: {
            value: cdktn.booleanToHclTerraform(struct!.passwordResetRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPolicyPropertyToTerraform(struct?: CcUser.PolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
        policy_name: cdktn.stringToTerraform(struct!.policyName),
    }
}


export function ccUserPolicyPropertyToHclTerraform(struct?: CcUser.PolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_document: {
            value: cdktn.stringToHclTerraform(struct!.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_name: {
            value: cdktn.stringToHclTerraform(struct!.policyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserTagPropertyToTerraform(struct?: CcUser.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserTagPropertyToHclTerraform(struct?: CcUser.TagProperty | cdktn.IResolvable): any {
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


export namespace CcUser {
export interface LoginProfileProperty {
    /**
    * The user's password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#password CcUser#password}
    */
    readonly password?: string;
    /**
    * Specifies whether the user is required to set a new password on next sign-in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#password_reset_required CcUser#password_reset_required}
    */
    readonly passwordResetRequired?: boolean | cdktn.IResolvable;
}
export class LoginProfilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoginProfileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._passwordResetRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordResetRequired = this._passwordResetRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoginProfileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._passwordResetRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._passwordResetRequired = value.passwordResetRequired;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // password_reset_required - computed: true, optional: true, required: false
    private _passwordResetRequired?: boolean | cdktn.IResolvable; 
    public get passwordResetRequired() {
        return this.getBooleanAttribute('password_reset_required');
    }
    public set passwordResetRequired(value: boolean | cdktn.IResolvable) {
        this._passwordResetRequired = value;
    }
    public resetPasswordResetRequired() {
        this._passwordResetRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordResetRequiredInput() {
        return this._passwordResetRequired;
    }
}
export interface PolicyProperty {
    /**
    * The entire contents of the policy that defines permissions. For more information, see [Overview of JSON policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#policy_document CcUser#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * The friendly name (not ARN) identifying the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#policy_name CcUser#policy_name}
    */
    readonly policyName?: string;
}
export class PolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDocument = this._policyDocument;
        }
        if (this._policyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyName = this._policyName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyDocument = undefined;
            this._policyName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyDocument = value.policyDocument;
            this._policyName = value.policyName;
        }
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_name - computed: true, optional: true, required: false
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    public resetPolicyName() {
        this._policyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }
}

export class PolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): PolicyPropertyOutputReference {
        return new PolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name that can be used to look up or retrieve the associated value. For example, ``Department`` or ``Cost Center`` are common choices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#key CcUser#key}
    */
    readonly key?: string;
    /**
    * The value associated with this tag. For example, tags with a key name of ``Department`` could have values such as ``Human Resources``, ``Accounting``, and ``Support``. Tags with a key name of ``Cost Center`` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_user#value CcUser#value}
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
