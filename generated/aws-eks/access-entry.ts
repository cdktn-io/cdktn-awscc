// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccessEntryProps extends cdktn.TerraformMetaArguments {
    /**
    * An array of access policies that are associated with the access entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#access_policies CcAccessEntry#access_policies}
    */
    readonly accessPolicies?: CcAccessEntry.AccessPolicyProperty[] | cdktn.IResolvable;
    /**
    * The cluster that the access entry is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#cluster_name CcAccessEntry#cluster_name}
    */
    readonly clusterName: string;
    /**
    * The Kubernetes groups that the access entry is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#kubernetes_groups CcAccessEntry#kubernetes_groups}
    */
    readonly kubernetesGroups?: string[];
    /**
    * The principal ARN that the access entry is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#principal_arn CcAccessEntry#principal_arn}
    */
    readonly principalArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#tags CcAccessEntry#tags}
    */
    readonly tags?: CcAccessEntry.TagProperty[] | cdktn.IResolvable;
    /**
    * The node type to associate with the access entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#type CcAccessEntry#type}
    */
    readonly type?: string;
    /**
    * The Kubernetes user that the access entry is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#username CcAccessEntry#username}
    */
    readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry awscc_eks_access_entry}
*/
export class CcAccessEntry extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eks_access_entry";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccessEntry resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccessEntry to import
    * @param importFromId The id of the existing CcAccessEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccessEntry to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_access_entry", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry awscc_eks_access_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccessEntryProps
    */
    public constructor(scope: Construct, id: string, config: CcAccessEntryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eks_access_entry',
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
        this._accessPolicies.internalValue = config.accessPolicies;
        this._clusterName = config.clusterName;
        this._kubernetesGroups = config.kubernetesGroups;
        this._principalArn = config.principalArn;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._username = config.username;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_entry_arn - computed: true, optional: false, required: false
    public get accessEntryArn() {
        return this.getStringAttribute('access_entry_arn');
    }

    // access_policies - computed: true, optional: true, required: false
    private _accessPolicies = new CcAccessEntry.AccessPolicyPropertyList(this, "access_policies", true);
    public get accessPolicies() {
        return this._accessPolicies;
    }
    public putAccessPolicies(value: CcAccessEntry.AccessPolicyProperty[] | cdktn.IResolvable) {
        this._accessPolicies.internalValue = value;
    }
    public resetAccessPolicies() {
        this._accessPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPoliciesInput() {
        return this._accessPolicies.internalValue;
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kubernetes_groups - computed: true, optional: true, required: false
    private _kubernetesGroups?: string[]; 
    public get kubernetesGroups() {
        return cdktn.Fn.tolist(this.getListAttribute('kubernetes_groups'));
    }
    public set kubernetesGroups(value: string[]) {
        this._kubernetesGroups = value;
    }
    public resetKubernetesGroups() {
        this._kubernetesGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubernetesGroupsInput() {
        return this._kubernetesGroups;
    }

    // principal_arn - computed: false, optional: false, required: true
    private _principalArn?: string; 
    public get principalArn() {
        return this.getStringAttribute('principal_arn');
    }
    public set principalArn(value: string) {
        this._principalArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalArnInput() {
        return this._principalArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAccessEntry.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAccessEntry.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_policies: cdktn.listMapper(ccAccessEntryAccessPolicyPropertyToTerraform, false)(this._accessPolicies.internalValue),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            kubernetes_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._kubernetesGroups),
            principal_arn: cdktn.stringToTerraform(this._principalArn),
            tags: cdktn.listMapper(ccAccessEntryTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            username: cdktn.stringToTerraform(this._username),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_policies: {
                value: cdktn.listMapperHcl(ccAccessEntryAccessPolicyPropertyToHclTerraform, false)(this._accessPolicies.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAccessEntry.AccessPolicyPropertyList",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kubernetes_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._kubernetesGroups),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            principal_arn: {
                value: cdktn.stringToHclTerraform(this._principalArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAccessEntryTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAccessEntry.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktn.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccessEntryAccessScopePropertyToTerraform(struct?: CcAccessEntry.AccessScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAccessEntryAccessScopePropertyToHclTerraform(struct?: CcAccessEntry.AccessScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        namespaces: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
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


export function ccAccessEntryAccessPolicyPropertyToTerraform(struct?: CcAccessEntry.AccessPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_scope: ccAccessEntryAccessScopePropertyToTerraform(struct!.accessScope),
        policy_arn: cdktn.stringToTerraform(struct!.policyArn),
    }
}


export function ccAccessEntryAccessPolicyPropertyToHclTerraform(struct?: CcAccessEntry.AccessPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_scope: {
            value: ccAccessEntryAccessScopePropertyToHclTerraform(struct!.accessScope),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessScopeProperty",
        },
        policy_arn: {
            value: cdktn.stringToHclTerraform(struct!.policyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessEntryTagPropertyToTerraform(struct?: CcAccessEntry.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAccessEntryTagPropertyToHclTerraform(struct?: CcAccessEntry.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAccessEntry {
export interface AccessScopeProperty {
    /**
    * The namespaces to associate with the access scope. Only specify if Type is set to 'namespace'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#namespaces CcAccessEntry#namespaces}
    */
    readonly namespaces?: string[];
    /**
    * The type of the access scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#type CcAccessEntry#type}
    */
    readonly type?: string;
}
export class AccessScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._namespaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaces = this._namespaces;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespaces = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespaces = value.namespaces;
            this._type = value.type;
        }
    }

    // namespaces - computed: true, optional: true, required: false
    private _namespaces?: string[]; 
    public get namespaces() {
        return cdktn.Fn.tolist(this.getListAttribute('namespaces'));
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
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
export interface AccessPolicyProperty {
    /**
    * The access scope of the access policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#access_scope CcAccessEntry#access_scope}
    */
    readonly accessScope?: AccessScopeProperty;
    /**
    * The ARN of the access policy to add to the access entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#policy_arn CcAccessEntry#policy_arn}
    */
    readonly policyArn?: string;
}
export class AccessPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessScope?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessScope = this._accessScope?.internalValue;
        }
        if (this._policyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyArn = this._policyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessScope.internalValue = undefined;
            this._policyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessScope.internalValue = value.accessScope;
            this._policyArn = value.policyArn;
        }
    }

    // access_scope - computed: true, optional: true, required: false
    private _accessScope = new AccessScopePropertyOutputReference(this, "access_scope");
    public get accessScope() {
        return this._accessScope;
    }
    public putAccessScope(value: AccessScopeProperty) {
        this._accessScope.internalValue = value;
    }
    public resetAccessScope() {
        this._accessScope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessScopeInput() {
        return this._accessScope.internalValue;
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
}

export class AccessPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessPolicyPropertyOutputReference {
        return new AccessPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#key CcAccessEntry#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_access_entry#value CcAccessEntry#value}
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
