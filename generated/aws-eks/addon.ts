// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAddonProps extends cdktn.TerraformMetaArguments {
    /**
    * Name of Addon
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#addon_name CcAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Version of Addon
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#addon_version CcAddon#addon_version}
    */
    readonly addonVersion?: string;
    /**
    * Name of Cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#cluster_name CcAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * The configuration values to use with the add-on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#configuration_values CcAddon#configuration_values}
    */
    readonly configurationValues?: string;
    /**
    * The custom namespace configuration to use with the add-on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#namespace_config CcAddon#namespace_config}
    */
    readonly namespaceConfig?: CcAddon.NamespaceConfigProperty;
    /**
    * An array of pod identities to apply to this add-on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#pod_identity_associations CcAddon#pod_identity_associations}
    */
    readonly podIdentityAssociations?: CcAddon.PodIdentityAssociationProperty[] | cdktn.IResolvable;
    /**
    * PreserveOnDelete parameter value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#preserve_on_delete CcAddon#preserve_on_delete}
    */
    readonly preserveOnDelete?: boolean | cdktn.IResolvable;
    /**
    * Resolve parameter value conflicts
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#resolve_conflicts CcAddon#resolve_conflicts}
    */
    readonly resolveConflicts?: string;
    /**
    * IAM role to bind to the add-on's service account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#service_account_role_arn CcAddon#service_account_role_arn}
    */
    readonly serviceAccountRoleArn?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#tags CcAddon#tags}
    */
    readonly tags?: CcAddon.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon awscc_eks_addon}
*/
export class CcAddon extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eks_addon";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAddon resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAddon to import
    * @param importFromId The id of the existing CcAddon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAddon to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_addon", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon awscc_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAddonProps
    */
    public constructor(scope: Construct, id: string, config: CcAddonProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eks_addon',
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
        this._addonName = config.addonName;
        this._addonVersion = config.addonVersion;
        this._clusterName = config.clusterName;
        this._configurationValues = config.configurationValues;
        this._namespaceConfig.internalValue = config.namespaceConfig;
        this._podIdentityAssociations.internalValue = config.podIdentityAssociations;
        this._preserveOnDelete = config.preserveOnDelete;
        this._resolveConflicts = config.resolveConflicts;
        this._serviceAccountRoleArn = config.serviceAccountRoleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // addon_name - computed: false, optional: false, required: true
    private _addonName?: string; 
    public get addonName() {
        return this.getStringAttribute('addon_name');
    }
    public set addonName(value: string) {
        this._addonName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addonNameInput() {
        return this._addonName;
    }

    // addon_version - computed: true, optional: true, required: false
    private _addonVersion?: string; 
    public get addonVersion() {
        return this.getStringAttribute('addon_version');
    }
    public set addonVersion(value: string) {
        this._addonVersion = value;
    }
    public resetAddonVersion() {
        this._addonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addonVersionInput() {
        return this._addonVersion;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // configuration_values - computed: true, optional: true, required: false
    private _configurationValues?: string; 
    public get configurationValues() {
        return this.getStringAttribute('configuration_values');
    }
    public set configurationValues(value: string) {
        this._configurationValues = value;
    }
    public resetConfigurationValues() {
        this._configurationValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationValuesInput() {
        return this._configurationValues;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // namespace_config - computed: true, optional: true, required: false
    private _namespaceConfig = new CcAddon.NamespaceConfigPropertyOutputReference(this, "namespace_config");
    public get namespaceConfig() {
        return this._namespaceConfig;
    }
    public putNamespaceConfig(value: CcAddon.NamespaceConfigProperty) {
        this._namespaceConfig.internalValue = value;
    }
    public resetNamespaceConfig() {
        this._namespaceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceConfigInput() {
        return this._namespaceConfig.internalValue;
    }

    // pod_identity_associations - computed: true, optional: true, required: false
    private _podIdentityAssociations = new CcAddon.PodIdentityAssociationPropertyList(this, "pod_identity_associations", true);
    public get podIdentityAssociations() {
        return this._podIdentityAssociations;
    }
    public putPodIdentityAssociations(value: CcAddon.PodIdentityAssociationProperty[] | cdktn.IResolvable) {
        this._podIdentityAssociations.internalValue = value;
    }
    public resetPodIdentityAssociations() {
        this._podIdentityAssociations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get podIdentityAssociationsInput() {
        return this._podIdentityAssociations.internalValue;
    }

    // preserve_on_delete - computed: true, optional: true, required: false
    private _preserveOnDelete?: boolean | cdktn.IResolvable; 
    public get preserveOnDelete() {
        return this.getBooleanAttribute('preserve_on_delete');
    }
    public set preserveOnDelete(value: boolean | cdktn.IResolvable) {
        this._preserveOnDelete = value;
    }
    public resetPreserveOnDelete() {
        this._preserveOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveOnDeleteInput() {
        return this._preserveOnDelete;
    }

    // resolve_conflicts - computed: true, optional: true, required: false
    private _resolveConflicts?: string; 
    public get resolveConflicts() {
        return this.getStringAttribute('resolve_conflicts');
    }
    public set resolveConflicts(value: string) {
        this._resolveConflicts = value;
    }
    public resetResolveConflicts() {
        this._resolveConflicts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolveConflictsInput() {
        return this._resolveConflicts;
    }

    // service_account_role_arn - computed: true, optional: true, required: false
    private _serviceAccountRoleArn?: string; 
    public get serviceAccountRoleArn() {
        return this.getStringAttribute('service_account_role_arn');
    }
    public set serviceAccountRoleArn(value: string) {
        this._serviceAccountRoleArn = value;
    }
    public resetServiceAccountRoleArn() {
        this._serviceAccountRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountRoleArnInput() {
        return this._serviceAccountRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAddon.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAddon.TagProperty[] | cdktn.IResolvable) {
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
            addon_name: cdktn.stringToTerraform(this._addonName),
            addon_version: cdktn.stringToTerraform(this._addonVersion),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            configuration_values: cdktn.stringToTerraform(this._configurationValues),
            namespace_config: ccAddonNamespaceConfigPropertyToTerraform(this._namespaceConfig.internalValue),
            pod_identity_associations: cdktn.listMapper(ccAddonPodIdentityAssociationPropertyToTerraform, false)(this._podIdentityAssociations.internalValue),
            preserve_on_delete: cdktn.booleanToTerraform(this._preserveOnDelete),
            resolve_conflicts: cdktn.stringToTerraform(this._resolveConflicts),
            service_account_role_arn: cdktn.stringToTerraform(this._serviceAccountRoleArn),
            tags: cdktn.listMapper(ccAddonTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            addon_name: {
                value: cdktn.stringToHclTerraform(this._addonName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            addon_version: {
                value: cdktn.stringToHclTerraform(this._addonVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration_values: {
                value: cdktn.stringToHclTerraform(this._configurationValues),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace_config: {
                value: ccAddonNamespaceConfigPropertyToHclTerraform(this._namespaceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAddon.NamespaceConfigProperty",
            },
            pod_identity_associations: {
                value: cdktn.listMapperHcl(ccAddonPodIdentityAssociationPropertyToHclTerraform, false)(this._podIdentityAssociations.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAddon.PodIdentityAssociationPropertyList",
            },
            preserve_on_delete: {
                value: cdktn.booleanToHclTerraform(this._preserveOnDelete),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            resolve_conflicts: {
                value: cdktn.stringToHclTerraform(this._resolveConflicts),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_account_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceAccountRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAddonTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAddon.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAddonNamespaceConfigPropertyToTerraform(struct?: CcAddon.NamespaceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccAddonNamespaceConfigPropertyToHclTerraform(struct?: CcAddon.NamespaceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccAddonPodIdentityAssociationPropertyToTerraform(struct?: CcAddon.PodIdentityAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    }
}


export function ccAddonPodIdentityAssociationPropertyToHclTerraform(struct?: CcAddon.PodIdentityAssociationProperty | cdktn.IResolvable): any {
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
        service_account: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAddonTagPropertyToTerraform(struct?: CcAddon.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAddonTagPropertyToHclTerraform(struct?: CcAddon.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAddon {
export interface NamespaceConfigProperty {
    /**
    * The custom namespace for creating the add-on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#namespace CcAddon#namespace}
    */
    readonly namespace?: string;
}
export class NamespaceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NamespaceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NamespaceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespace = value.namespace;
        }
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
export interface PodIdentityAssociationProperty {
    /**
    * The IAM role ARN that the pod identity association is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#role_arn CcAddon#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The Kubernetes service account that the pod identity association is created for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#service_account CcAddon#service_account}
    */
    readonly serviceAccount?: string;
}
export class PodIdentityAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PodIdentityAssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._serviceAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccount = this._serviceAccount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PodIdentityAssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._serviceAccount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._serviceAccount = value.serviceAccount;
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

    // service_account - computed: true, optional: true, required: false
    private _serviceAccount?: string; 
    public get serviceAccount() {
        return this.getStringAttribute('service_account');
    }
    public set serviceAccount(value: string) {
        this._serviceAccount = value;
    }
    public resetServiceAccount() {
        this._serviceAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountInput() {
        return this._serviceAccount;
    }
}

export class PodIdentityAssociationPropertyList extends cdktn.ComplexList {
    public internalValue? : PodIdentityAssociationProperty[] | cdktn.IResolvable

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
    public get(index: number): PodIdentityAssociationPropertyOutputReference {
        return new PodIdentityAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#key CcAddon#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_addon#value CcAddon#value}
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
