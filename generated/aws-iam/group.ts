// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the group to create. Do not include the path in this value.
    *  The group name must be unique within the account. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins". If you don't specify a name, CFN generates a unique physical ID and uses that ID for the group name.
    *   If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *   If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
    *   Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#group_name CcGroup#group_name}
    */
    readonly groupName?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM policy you want to attach.
    *  For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#managed_policy_arns CcGroup#managed_policy_arns}
    */
    readonly managedPolicyArns?: string[];
    /**
    * The path to the group. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
    *  This parameter is optional. If it is not included, it defaults to a slash (/).
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#path CcGroup#path}
    */
    readonly path?: string;
    /**
    * Adds or updates an inline policy document that is embedded in the specified IAM group. To view AWS::IAM::Group snippets, see [Declaring an Group Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-group).
    *   The name of each inline policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail. 
    *   For information about limits on the number of inline policies that you can embed in a group, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#policies CcGroup#policies}
    */
    readonly policies?: CcGroup.PolicyProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group awscc_iam_group}
*/
export class CcGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGroup to import
    * @param importFromId The id of the existing CcGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group awscc_iam_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_group',
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
        this._groupName = config.groupName;
        this._managedPolicyArns = config.managedPolicyArns;
        this._path = config.path;
        this._policies.internalValue = config.policies;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // policies - computed: true, optional: true, required: false
    private _policies = new CcGroup.PolicyPropertyList(this, "policies", false);
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: CcGroup.PolicyProperty[] | cdktn.IResolvable) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            group_name: cdktn.stringToTerraform(this._groupName),
            managed_policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedPolicyArns),
            path: cdktn.stringToTerraform(this._path),
            policies: cdktn.listMapper(ccGroupPolicyPropertyToTerraform, false)(this._policies.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            group_name: {
                value: cdktn.stringToHclTerraform(this._groupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            policies: {
                value: cdktn.listMapperHcl(ccGroupPolicyPropertyToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGroup.PolicyPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGroupPolicyPropertyToTerraform(struct?: CcGroup.PolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
        policy_name: cdktn.stringToTerraform(struct!.policyName),
    }
}


export function ccGroupPolicyPropertyToHclTerraform(struct?: CcGroup.PolicyProperty | cdktn.IResolvable): any {
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


export namespace CcGroup {
export interface PolicyProperty {
    /**
    * The policy document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#policy_document CcGroup#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * The friendly name (not ARN) identifying the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group#policy_name CcGroup#policy_name}
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
}
