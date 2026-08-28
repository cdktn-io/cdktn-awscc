// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCapabilityProps extends cdktn.TerraformMetaArguments {
    /**
    * A unique name for the capability. The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#capability_name CcCapability#capability_name}
    */
    readonly capabilityName: string;
    /**
    * The name of the EKS cluster where you want to create the capability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#cluster_name CcCapability#cluster_name}
    */
    readonly clusterName: string;
    /**
    * The configuration settings for the capability. The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#configuration CcCapability#configuration}
    */
    readonly configuration?: CcCapability.CapabilityConfigurationProperty;
    /**
    * Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#delete_propagation_policy CcCapability#delete_propagation_policy}
    */
    readonly deletePropagationPolicy: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#role_arn CcCapability#role_arn}
    */
    readonly roleArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#tags CcCapability#tags}
    */
    readonly tags?: CcCapability.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of capability to create. Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#type CcCapability#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability awscc_eks_capability}
*/
export class CcCapability extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eks_capability";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCapability resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCapability to import
    * @param importFromId The id of the existing CcCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCapability to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_capability", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability awscc_eks_capability} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCapabilityProps
    */
    public constructor(scope: Construct, id: string, config: CcCapabilityProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eks_capability',
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
        this._capabilityName = config.capabilityName;
        this._clusterName = config.clusterName;
        this._configuration.internalValue = config.configuration;
        this._deletePropagationPolicy = config.deletePropagationPolicy;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capability_name - computed: false, optional: false, required: true
    private _capabilityName?: string; 
    public get capabilityName() {
        return this.getStringAttribute('capability_name');
    }
    public set capabilityName(value: string) {
        this._capabilityName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilityNameInput() {
        return this._capabilityName;
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

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CcCapability.CapabilityConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcCapability.CapabilityConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // delete_propagation_policy - computed: false, optional: false, required: true
    private _deletePropagationPolicy?: string; 
    public get deletePropagationPolicy() {
        return this.getStringAttribute('delete_propagation_policy');
    }
    public set deletePropagationPolicy(value: string) {
        this._deletePropagationPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deletePropagationPolicyInput() {
        return this._deletePropagationPolicy;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCapability.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCapability.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capability_name: cdktn.stringToTerraform(this._capabilityName),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            configuration: ccCapabilityCapabilityConfigurationPropertyToTerraform(this._configuration.internalValue),
            delete_propagation_policy: cdktn.stringToTerraform(this._deletePropagationPolicy),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccCapabilityTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capability_name: {
                value: cdktn.stringToHclTerraform(this._capabilityName),
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
            configuration: {
                value: ccCapabilityCapabilityConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapability.CapabilityConfigurationProperty",
            },
            delete_propagation_policy: {
                value: cdktn.stringToHclTerraform(this._deletePropagationPolicy),
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
            tags: {
                value: cdktn.listMapperHcl(ccCapabilityTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCapability.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCapabilityAwsIdcPropertyToTerraform(struct?: CcCapability.AwsIdcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idc_instance_arn: cdktn.stringToTerraform(struct!.idcInstanceArn),
        idc_region: cdktn.stringToTerraform(struct!.idcRegion),
    }
}


export function ccCapabilityAwsIdcPropertyToHclTerraform(struct?: CcCapability.AwsIdcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idc_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.idcInstanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        idc_region: {
            value: cdktn.stringToHclTerraform(struct!.idcRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapabilityNetworkAccessPropertyToTerraform(struct?: CcCapability.NetworkAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpce_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpceIds),
    }
}


export function ccCapabilityNetworkAccessPropertyToHclTerraform(struct?: CcCapability.NetworkAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpce_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpceIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapabilitySsoIdentityPropertyToTerraform(struct?: CcCapability.SsoIdentityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccCapabilitySsoIdentityPropertyToHclTerraform(struct?: CcCapability.SsoIdentityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccCapabilityArgoCdRoleMappingPropertyToTerraform(struct?: CcCapability.ArgoCdRoleMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identities: cdktn.listMapper(ccCapabilitySsoIdentityPropertyToTerraform, false)(struct!.identities),
        role: cdktn.stringToTerraform(struct!.role),
    }
}


export function ccCapabilityArgoCdRoleMappingPropertyToHclTerraform(struct?: CcCapability.ArgoCdRoleMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identities: {
            value: cdktn.listMapperHcl(ccCapabilitySsoIdentityPropertyToHclTerraform, false)(struct!.identities),
            isBlock: true,
            type: "list",
            storageClassType: "SsoIdentityPropertyList",
        },
        role: {
            value: cdktn.stringToHclTerraform(struct!.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapabilityArgoCdPropertyToTerraform(struct?: CcCapability.ArgoCdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_idc: ccCapabilityAwsIdcPropertyToTerraform(struct!.awsIdc),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        network_access: ccCapabilityNetworkAccessPropertyToTerraform(struct!.networkAccess),
        rbac_role_mappings: cdktn.listMapper(ccCapabilityArgoCdRoleMappingPropertyToTerraform, false)(struct!.rbacRoleMappings),
    }
}


export function ccCapabilityArgoCdPropertyToHclTerraform(struct?: CcCapability.ArgoCdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_idc: {
            value: ccCapabilityAwsIdcPropertyToHclTerraform(struct!.awsIdc),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsIdcProperty",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_access: {
            value: ccCapabilityNetworkAccessPropertyToHclTerraform(struct!.networkAccess),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkAccessProperty",
        },
        rbac_role_mappings: {
            value: cdktn.listMapperHcl(ccCapabilityArgoCdRoleMappingPropertyToHclTerraform, false)(struct!.rbacRoleMappings),
            isBlock: true,
            type: "list",
            storageClassType: "ArgoCdRoleMappingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapabilityCapabilityConfigurationPropertyToTerraform(struct?: CcCapability.CapabilityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ack: cdktn.stringToTerraform(struct!.ack),
        argo_cd: ccCapabilityArgoCdPropertyToTerraform(struct!.argoCd),
    }
}


export function ccCapabilityCapabilityConfigurationPropertyToHclTerraform(struct?: CcCapability.CapabilityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ack: {
            value: cdktn.stringToHclTerraform(struct!.ack),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        argo_cd: {
            value: ccCapabilityArgoCdPropertyToHclTerraform(struct!.argoCd),
            isBlock: true,
            type: "struct",
            storageClassType: "ArgoCdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapabilityTagPropertyToTerraform(struct?: CcCapability.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCapabilityTagPropertyToHclTerraform(struct?: CcCapability.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCapability {
export interface AwsIdcProperty {
    /**
    * The ARN of the IAM Identity Center instance to use for authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#idc_instance_arn CcCapability#idc_instance_arn}
    */
    readonly idcInstanceArn?: string;
    /**
    * The Region where your IAM Identity Center instance is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#idc_region CcCapability#idc_region}
    */
    readonly idcRegion?: string;
}
export class AwsIdcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsIdcProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idcInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.idcInstanceArn = this._idcInstanceArn;
        }
        if (this._idcRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.idcRegion = this._idcRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsIdcProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idcInstanceArn = undefined;
            this._idcRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idcInstanceArn = value.idcInstanceArn;
            this._idcRegion = value.idcRegion;
        }
    }

    // idc_instance_arn - computed: true, optional: true, required: false
    private _idcInstanceArn?: string; 
    public get idcInstanceArn() {
        return this.getStringAttribute('idc_instance_arn');
    }
    public set idcInstanceArn(value: string) {
        this._idcInstanceArn = value;
    }
    public resetIdcInstanceArn() {
        this._idcInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInstanceArnInput() {
        return this._idcInstanceArn;
    }

    // idc_managed_application_arn - computed: true, optional: false, required: false
    public get idcManagedApplicationArn() {
        return this.getStringAttribute('idc_managed_application_arn');
    }

    // idc_region - computed: true, optional: true, required: false
    private _idcRegion?: string; 
    public get idcRegion() {
        return this.getStringAttribute('idc_region');
    }
    public set idcRegion(value: string) {
        this._idcRegion = value;
    }
    public resetIdcRegion() {
        this._idcRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcRegionInput() {
        return this._idcRegion;
    }
}
export interface NetworkAccessProperty {
    /**
    * A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#vpce_ids CcCapability#vpce_ids}
    */
    readonly vpceIds?: string[];
}
export class NetworkAccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkAccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpceIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpceIds = this._vpceIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkAccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpceIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpceIds = value.vpceIds;
        }
    }

    // vpce_ids - computed: true, optional: true, required: false
    private _vpceIds?: string[]; 
    public get vpceIds() {
        return this.getListAttribute('vpce_ids');
    }
    public set vpceIds(value: string[]) {
        this._vpceIds = value;
    }
    public resetVpceIds() {
        this._vpceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpceIdsInput() {
        return this._vpceIds;
    }
}
export interface SsoIdentityProperty {
    /**
    * The unique identifier of the IAM Identity Center user or group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#id CcCapability#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The type of identity. Valid values are SSO_USER or SSO_GROUP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#type CcCapability#type}
    */
    readonly type?: string;
}
export class SsoIdentityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SsoIdentityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsoIdentityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._type = value.type;
        }
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

export class SsoIdentityPropertyList extends cdktn.ComplexList {
    public internalValue? : SsoIdentityProperty[] | cdktn.IResolvable

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
    public get(index: number): SsoIdentityPropertyOutputReference {
        return new SsoIdentityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ArgoCdRoleMappingProperty {
    /**
    * A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#identities CcCapability#identities}
    */
    readonly identities?: SsoIdentityProperty[] | cdktn.IResolvable;
    /**
    * The Argo CD role to assign. Valid values are: ADMIN (full administrative access to Argo CD), EDITOR (edit access to Argo CD resources), or VIEWER (read-only access to Argo CD resources).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#role CcCapability#role}
    */
    readonly role?: string;
}
export class ArgoCdRoleMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ArgoCdRoleMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.identities = this._identities?.internalValue;
        }
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArgoCdRoleMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identities.internalValue = undefined;
            this._role = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identities.internalValue = value.identities;
            this._role = value.role;
        }
    }

    // identities - computed: true, optional: true, required: false
    private _identities = new SsoIdentityPropertyList(this, "identities", false);
    public get identities() {
        return this._identities;
    }
    public putIdentities(value: SsoIdentityProperty[] | cdktn.IResolvable) {
        this._identities.internalValue = value;
    }
    public resetIdentities() {
        this._identities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identitiesInput() {
        return this._identities.internalValue;
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }
}

export class ArgoCdRoleMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : ArgoCdRoleMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): ArgoCdRoleMappingPropertyOutputReference {
        return new ArgoCdRoleMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ArgoCdProperty {
    /**
    * Configuration for integrating Argo CD with IAM Identity Center. This allows you to use your organization's identity provider for authentication to Argo CD.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#aws_idc CcCapability#aws_idc}
    */
    readonly awsIdc?: AwsIdcProperty;
    /**
    * The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#namespace CcCapability#namespace}
    */
    readonly namespace?: string;
    /**
    * Configuration for network access to the Argo CD capability's managed API server endpoint. By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#network_access CcCapability#network_access}
    */
    readonly networkAccess?: NetworkAccessProperty;
    /**
    * A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles. Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#rbac_role_mappings CcCapability#rbac_role_mappings}
    */
    readonly rbacRoleMappings?: ArgoCdRoleMappingProperty[] | cdktn.IResolvable;
}
export class ArgoCdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArgoCdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsIdc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsIdc = this._awsIdc?.internalValue;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._networkAccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkAccess = this._networkAccess?.internalValue;
        }
        if (this._rbacRoleMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rbacRoleMappings = this._rbacRoleMappings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArgoCdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsIdc.internalValue = undefined;
            this._namespace = undefined;
            this._networkAccess.internalValue = undefined;
            this._rbacRoleMappings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsIdc.internalValue = value.awsIdc;
            this._namespace = value.namespace;
            this._networkAccess.internalValue = value.networkAccess;
            this._rbacRoleMappings.internalValue = value.rbacRoleMappings;
        }
    }

    // aws_idc - computed: true, optional: true, required: false
    private _awsIdc = new AwsIdcPropertyOutputReference(this, "aws_idc");
    public get awsIdc() {
        return this._awsIdc;
    }
    public putAwsIdc(value: AwsIdcProperty) {
        this._awsIdc.internalValue = value;
    }
    public resetAwsIdc() {
        this._awsIdc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsIdcInput() {
        return this._awsIdc.internalValue;
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

    // network_access - computed: true, optional: true, required: false
    private _networkAccess = new NetworkAccessPropertyOutputReference(this, "network_access");
    public get networkAccess() {
        return this._networkAccess;
    }
    public putNetworkAccess(value: NetworkAccessProperty) {
        this._networkAccess.internalValue = value;
    }
    public resetNetworkAccess() {
        this._networkAccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkAccessInput() {
        return this._networkAccess.internalValue;
    }

    // rbac_role_mappings - computed: true, optional: true, required: false
    private _rbacRoleMappings = new ArgoCdRoleMappingPropertyList(this, "rbac_role_mappings", false);
    public get rbacRoleMappings() {
        return this._rbacRoleMappings;
    }
    public putRbacRoleMappings(value: ArgoCdRoleMappingProperty[] | cdktn.IResolvable) {
        this._rbacRoleMappings.internalValue = value;
    }
    public resetRbacRoleMappings() {
        this._rbacRoleMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rbacRoleMappingsInput() {
        return this._rbacRoleMappings.internalValue;
    }

    // server_url - computed: true, optional: false, required: false
    public get serverUrl() {
        return this.getStringAttribute('server_url');
    }
}
export interface CapabilityConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#ack CcCapability#ack}
    */
    readonly ack?: string;
    /**
    * Configuration settings for an Argo CD capability. This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#argo_cd CcCapability#argo_cd}
    */
    readonly argoCd?: ArgoCdProperty;
}
export class CapabilityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapabilityConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ack !== undefined) {
            hasAnyValues = true;
            internalValueResult.ack = this._ack;
        }
        if (this._argoCd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.argoCd = this._argoCd?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapabilityConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ack = undefined;
            this._argoCd.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ack = value.ack;
            this._argoCd.internalValue = value.argoCd;
        }
    }

    // ack - computed: true, optional: true, required: false
    private _ack?: string; 
    public get ack() {
        return this.getStringAttribute('ack');
    }
    public set ack(value: string) {
        this._ack = value;
    }
    public resetAck() {
        this._ack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ackInput() {
        return this._ack;
    }

    // argo_cd - computed: true, optional: true, required: false
    private _argoCd = new ArgoCdPropertyOutputReference(this, "argo_cd");
    public get argoCd() {
        return this._argoCd;
    }
    public putArgoCd(value: ArgoCdProperty) {
        this._argoCd.internalValue = value;
    }
    public resetArgoCd() {
        this._argoCd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argoCdInput() {
        return this._argoCd.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#key CcCapability#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/eks_capability#value CcCapability#value}
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
