// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPodIdentityAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The cluster that the pod identity association is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#cluster_name CcPodIdentityAssociation#cluster_name}
    */
    readonly clusterName: string;
    /**
    * The Disable Session Tags of the pod identity association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#disable_session_tags CcPodIdentityAssociation#disable_session_tags}
    */
    readonly disableSessionTags?: boolean | cdktn.IResolvable;
    /**
    * The Kubernetes namespace that the pod identity association is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#namespace CcPodIdentityAssociation#namespace}
    */
    readonly namespace: string;
    /**
    * The policy of the pod identity association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#policy CcPodIdentityAssociation#policy}
    */
    readonly policy?: string;
    /**
    * The IAM role ARN that the pod identity association is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#role_arn CcPodIdentityAssociation#role_arn}
    */
    readonly roleArn: string;
    /**
    * The Kubernetes service account that the pod identity association is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#service_account CcPodIdentityAssociation#service_account}
    */
    readonly serviceAccount: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#tags CcPodIdentityAssociation#tags}
    */
    readonly tags?: CcPodIdentityAssociation.TagProperty[] | cdktn.IResolvable;
    /**
    * The Target Role Arn of the pod identity association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#target_role_arn CcPodIdentityAssociation#target_role_arn}
    */
    readonly targetRoleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association awscc_eks_pod_identity_association}
*/
export class CcPodIdentityAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eks_pod_identity_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPodIdentityAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPodIdentityAssociation to import
    * @param importFromId The id of the existing CcPodIdentityAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPodIdentityAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_pod_identity_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association awscc_eks_pod_identity_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPodIdentityAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcPodIdentityAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eks_pod_identity_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._clusterName = config.clusterName;
        this._disableSessionTags = config.disableSessionTags;
        this._namespace = config.namespace;
        this._policy = config.policy;
        this._roleArn = config.roleArn;
        this._serviceAccount = config.serviceAccount;
        this._tags.internalValue = config.tags;
        this._targetRoleArn = config.targetRoleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_arn - computed: true, optional: false, required: false
    public get associationArn() {
        return this.getStringAttribute('association_arn');
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
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

    // disable_session_tags - computed: true, optional: true, required: false
    private _disableSessionTags?: boolean | cdktn.IResolvable; 
    public get disableSessionTags() {
        return this.getBooleanAttribute('disable_session_tags');
    }
    public set disableSessionTags(value: boolean | cdktn.IResolvable) {
        this._disableSessionTags = value;
    }
    public resetDisableSessionTags() {
        this._disableSessionTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableSessionTagsInput() {
        return this._disableSessionTags;
    }

    // external_id - computed: true, optional: false, required: false
    public get externalId() {
        return this.getStringAttribute('external_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // namespace - computed: false, optional: false, required: true
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // service_account - computed: false, optional: false, required: true
    private _serviceAccount?: string; 
    public get serviceAccount() {
        return this.getStringAttribute('service_account');
    }
    public set serviceAccount(value: string) {
        this._serviceAccount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountInput() {
        return this._serviceAccount;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPodIdentityAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPodIdentityAssociation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_role_arn - computed: true, optional: true, required: false
    private _targetRoleArn?: string; 
    public get targetRoleArn() {
        return this.getStringAttribute('target_role_arn');
    }
    public set targetRoleArn(value: string) {
        this._targetRoleArn = value;
    }
    public resetTargetRoleArn() {
        this._targetRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRoleArnInput() {
        return this._targetRoleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            disable_session_tags: cdktn.booleanToTerraform(this._disableSessionTags),
            namespace: cdktn.stringToTerraform(this._namespace),
            policy: cdktn.stringToTerraform(this._policy),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            service_account: cdktn.stringToTerraform(this._serviceAccount),
            tags: cdktn.listMapper(ccPodIdentityAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
            target_role_arn: cdktn.stringToTerraform(this._targetRoleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_session_tags: {
                value: cdktn.booleanToHclTerraform(this._disableSessionTags),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            namespace: {
                value: cdktn.stringToHclTerraform(this._namespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_account: {
                value: cdktn.stringToHclTerraform(this._serviceAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPodIdentityAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPodIdentityAssociation.TagPropertyList",
            },
            target_role_arn: {
                value: cdktn.stringToHclTerraform(this._targetRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPodIdentityAssociationTagPropertyToTerraform(struct?: CcPodIdentityAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPodIdentityAssociationTagPropertyToHclTerraform(struct?: CcPodIdentityAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPodIdentityAssociation {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#key CcPodIdentityAssociation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_pod_identity_association#value CcPodIdentityAssociation#value}
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
