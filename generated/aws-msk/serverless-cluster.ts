// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServerlessClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#client_authentication CcServerlessCluster#client_authentication}
    */
    readonly clientAuthentication: CcServerlessCluster.ClientAuthenticationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#cluster_name CcServerlessCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#tags CcServerlessCluster#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#vpc_configs CcServerlessCluster#vpc_configs}
    */
    readonly vpcConfigs: CcServerlessCluster.VpcConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster awscc_msk_serverless_cluster}
*/
export class CcServerlessCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_serverless_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServerlessCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServerlessCluster to import
    * @param importFromId The id of the existing CcServerlessCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServerlessCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_serverless_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster awscc_msk_serverless_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServerlessClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcServerlessClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_serverless_cluster',
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
        this._clientAuthentication.internalValue = config.clientAuthentication;
        this._clusterName = config.clusterName;
        this._tags = config.tags;
        this._vpcConfigs.internalValue = config.vpcConfigs;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // client_authentication - computed: false, optional: false, required: true
    private _clientAuthentication = new CcServerlessCluster.ClientAuthenticationPropertyOutputReference(this, "client_authentication");
    public get clientAuthentication() {
        return this._clientAuthentication;
    }
    public putClientAuthentication(value: CcServerlessCluster.ClientAuthenticationProperty) {
        this._clientAuthentication.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationInput() {
        return this._clientAuthentication.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // vpc_configs - computed: false, optional: false, required: true
    private _vpcConfigs = new CcServerlessCluster.VpcConfigPropertyList(this, "vpc_configs", true);
    public get vpcConfigs() {
        return this._vpcConfigs;
    }
    public putVpcConfigs(value: CcServerlessCluster.VpcConfigProperty[] | cdktn.IResolvable) {
        this._vpcConfigs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigsInput() {
        return this._vpcConfigs.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_authentication: ccServerlessClusterClientAuthenticationPropertyToTerraform(this._clientAuthentication.internalValue),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            vpc_configs: cdktn.listMapper(ccServerlessClusterVpcConfigPropertyToTerraform, false)(this._vpcConfigs.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_authentication: {
                value: ccServerlessClusterClientAuthenticationPropertyToHclTerraform(this._clientAuthentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServerlessCluster.ClientAuthenticationProperty",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            vpc_configs: {
                value: cdktn.listMapperHcl(ccServerlessClusterVpcConfigPropertyToHclTerraform, false)(this._vpcConfigs.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServerlessCluster.VpcConfigPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServerlessClusterIamPropertyToTerraform(struct?: CcServerlessCluster.IamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccServerlessClusterIamPropertyToHclTerraform(struct?: CcServerlessCluster.IamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerlessClusterSaslPropertyToTerraform(struct?: CcServerlessCluster.SaslProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam: ccServerlessClusterIamPropertyToTerraform(struct!.iam),
    }
}


export function ccServerlessClusterSaslPropertyToHclTerraform(struct?: CcServerlessCluster.SaslProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam: {
            value: ccServerlessClusterIamPropertyToHclTerraform(struct!.iam),
            isBlock: true,
            type: "struct",
            storageClassType: "IamProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerlessClusterClientAuthenticationPropertyToTerraform(struct?: CcServerlessCluster.ClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sasl: ccServerlessClusterSaslPropertyToTerraform(struct!.sasl),
    }
}


export function ccServerlessClusterClientAuthenticationPropertyToHclTerraform(struct?: CcServerlessCluster.ClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sasl: {
            value: ccServerlessClusterSaslPropertyToHclTerraform(struct!.sasl),
            isBlock: true,
            type: "struct",
            storageClassType: "SaslProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServerlessClusterVpcConfigPropertyToTerraform(struct?: CcServerlessCluster.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccServerlessClusterVpcConfigPropertyToHclTerraform(struct?: CcServerlessCluster.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcServerlessCluster {
export interface IamProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#enabled CcServerlessCluster#enabled}
    */
    readonly enabled: boolean | cdktn.IResolvable;
}
export class IamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface SaslProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#iam CcServerlessCluster#iam}
    */
    readonly iam: IamProperty;
}
export class SaslPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SaslProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iam?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SaslProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iam.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iam.internalValue = value.iam;
        }
    }

    // iam - computed: false, optional: false, required: true
    private _iam = new IamPropertyOutputReference(this, "iam");
    public get iam() {
        return this._iam;
    }
    public putIam(value: IamProperty) {
        this._iam.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
        return this._iam.internalValue;
    }
}
export interface ClientAuthenticationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#sasl CcServerlessCluster#sasl}
    */
    readonly sasl: SaslProperty;
}
export class ClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sasl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sasl = this._sasl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sasl.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sasl.internalValue = value.sasl;
        }
    }

    // sasl - computed: false, optional: false, required: true
    private _sasl = new SaslPropertyOutputReference(this, "sasl");
    public get sasl() {
        return this._sasl;
    }
    public putSasl(value: SaslProperty) {
        this._sasl.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get saslInput() {
        return this._sasl.internalValue;
    }
}
export interface VpcConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#security_groups CcServerlessCluster#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_serverless_cluster#subnet_ids CcServerlessCluster#subnet_ids}
    */
    readonly subnetIds: string[];
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
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
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
}
