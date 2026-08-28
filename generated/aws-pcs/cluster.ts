// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * The name that identifies the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#name CcCluster#name}
    */
    readonly name?: string;
    /**
    * The networking configuration for the cluster's control plane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#networking CcCluster#networking}
    */
    readonly networking: CcCluster.NetworkingProperty;
    /**
    * The cluster management and job scheduling software associated with the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#scheduler CcCluster#scheduler}
    */
    readonly scheduler: CcCluster.SchedulerProperty;
    /**
    * The size of the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#size CcCluster#size}
    */
    readonly size: string;
    /**
    * Additional options related to the Slurm scheduler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#slurm_configuration CcCluster#slurm_configuration}
    */
    readonly slurmConfiguration?: CcCluster.SlurmConfigurationProperty;
    /**
    * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#tags CcCluster#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster awscc_pcs_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcs_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcs_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster awscc_pcs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcs_cluster',
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
        this._name = config.name;
        this._networking.internalValue = config.networking;
        this._scheduler.internalValue = config.scheduler;
        this._size = config.size;
        this._slurmConfiguration.internalValue = config.slurmConfiguration;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cluster_id - computed: true, optional: false, required: false
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }

    // endpoints - computed: true, optional: false, required: false
    private _endpoints = new CcCluster.EndpointsPropertyList(this, "endpoints", false);
    public get endpoints() {
        return this._endpoints;
    }

    // error_info - computed: true, optional: false, required: false
    private _errorInfo = new CcCluster.ErrorInfoPropertyList(this, "error_info", false);
    public get errorInfo() {
        return this._errorInfo;
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

    // networking - computed: false, optional: false, required: true
    private _networking = new CcCluster.NetworkingPropertyOutputReference(this, "networking");
    public get networking() {
        return this._networking;
    }
    public putNetworking(value: CcCluster.NetworkingProperty) {
        this._networking.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkingInput() {
        return this._networking.internalValue;
    }

    // scheduler - computed: false, optional: false, required: true
    private _scheduler = new CcCluster.SchedulerPropertyOutputReference(this, "scheduler");
    public get scheduler() {
        return this._scheduler;
    }
    public putScheduler(value: CcCluster.SchedulerProperty) {
        this._scheduler.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulerInput() {
        return this._scheduler.internalValue;
    }

    // size - computed: false, optional: false, required: true
    private _size?: string; 
    public get size() {
        return this.getStringAttribute('size');
    }
    public set size(value: string) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
    }

    // slurm_configuration - computed: true, optional: true, required: false
    private _slurmConfiguration = new CcCluster.SlurmConfigurationPropertyOutputReference(this, "slurm_configuration");
    public get slurmConfiguration() {
        return this._slurmConfiguration;
    }
    public putSlurmConfiguration(value: CcCluster.SlurmConfigurationProperty) {
        this._slurmConfiguration.internalValue = value;
    }
    public resetSlurmConfiguration() {
        this._slurmConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmConfigurationInput() {
        return this._slurmConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            networking: ccClusterNetworkingPropertyToTerraform(this._networking.internalValue),
            scheduler: ccClusterSchedulerPropertyToTerraform(this._scheduler.internalValue),
            size: cdktn.stringToTerraform(this._size),
            slurm_configuration: ccClusterSlurmConfigurationPropertyToTerraform(this._slurmConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            networking: {
                value: ccClusterNetworkingPropertyToHclTerraform(this._networking.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.NetworkingProperty",
            },
            scheduler: {
                value: ccClusterSchedulerPropertyToHclTerraform(this._scheduler.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.SchedulerProperty",
            },
            size: {
                value: cdktn.stringToHclTerraform(this._size),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            slurm_configuration: {
                value: ccClusterSlurmConfigurationPropertyToHclTerraform(this._slurmConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.SlurmConfigurationProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterEndpointsPropertyToTerraform(struct?: CcCluster.EndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccClusterEndpointsPropertyToHclTerraform(struct?: CcCluster.EndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccClusterErrorInfoPropertyToTerraform(struct?: CcCluster.ErrorInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccClusterErrorInfoPropertyToHclTerraform(struct?: CcCluster.ErrorInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccClusterNetworkingPropertyToTerraform(struct?: CcCluster.NetworkingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_type: cdktn.stringToTerraform(struct!.networkType),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccClusterNetworkingPropertyToHclTerraform(struct?: CcCluster.NetworkingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_type: {
            value: cdktn.stringToHclTerraform(struct!.networkType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSchedulerPropertyToTerraform(struct?: CcCluster.SchedulerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccClusterSchedulerPropertyToHclTerraform(struct?: CcCluster.SchedulerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterAccountingPropertyToTerraform(struct?: CcCluster.AccountingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_purge_time_in_days: cdktn.numberToTerraform(struct!.defaultPurgeTimeInDays),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccClusterAccountingPropertyToHclTerraform(struct?: CcCluster.AccountingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_purge_time_in_days: {
            value: cdktn.numberToHclTerraform(struct!.defaultPurgeTimeInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterAuthKeyPropertyToTerraform(struct?: CcCluster.AuthKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        secret_version: cdktn.stringToTerraform(struct!.secretVersion),
    }
}


export function ccClusterAuthKeyPropertyToHclTerraform(struct?: CcCluster.AuthKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_version: {
            value: cdktn.stringToHclTerraform(struct!.secretVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterCgroupCustomSettingPropertyToTerraform(struct?: CcCluster.CgroupCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccClusterCgroupCustomSettingPropertyToHclTerraform(struct?: CcCluster.CgroupCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterJwtKeyPropertyToTerraform(struct?: CcCluster.JwtKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        secret_version: cdktn.stringToTerraform(struct!.secretVersion),
    }
}


export function ccClusterJwtKeyPropertyToHclTerraform(struct?: CcCluster.JwtKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_version: {
            value: cdktn.stringToHclTerraform(struct!.secretVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterJwtAuthPropertyToTerraform(struct?: CcCluster.JwtAuthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        jwt_key: ccClusterJwtKeyPropertyToTerraform(struct!.jwtKey),
    }
}


export function ccClusterJwtAuthPropertyToHclTerraform(struct?: CcCluster.JwtAuthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        jwt_key: {
            value: ccClusterJwtKeyPropertyToHclTerraform(struct!.jwtKey),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtKeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSlurmCustomSettingPropertyToTerraform(struct?: CcCluster.SlurmCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccClusterSlurmCustomSettingPropertyToHclTerraform(struct?: CcCluster.SlurmCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSlurmRestPropertyToTerraform(struct?: CcCluster.SlurmRestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccClusterSlurmRestPropertyToHclTerraform(struct?: CcCluster.SlurmRestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSlurmdbdCustomSettingPropertyToTerraform(struct?: CcCluster.SlurmdbdCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccClusterSlurmdbdCustomSettingPropertyToHclTerraform(struct?: CcCluster.SlurmdbdCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSlurmConfigurationPropertyToTerraform(struct?: CcCluster.SlurmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accounting: ccClusterAccountingPropertyToTerraform(struct!.accounting),
        auth_key: ccClusterAuthKeyPropertyToTerraform(struct!.authKey),
        cgroup_custom_settings: cdktn.listMapper(ccClusterCgroupCustomSettingPropertyToTerraform, false)(struct!.cgroupCustomSettings),
        jwt_auth: ccClusterJwtAuthPropertyToTerraform(struct!.jwtAuth),
        scale_down_idle_time_in_seconds: cdktn.numberToTerraform(struct!.scaleDownIdleTimeInSeconds),
        slurm_custom_settings: cdktn.listMapper(ccClusterSlurmCustomSettingPropertyToTerraform, false)(struct!.slurmCustomSettings),
        slurm_rest: ccClusterSlurmRestPropertyToTerraform(struct!.slurmRest),
        slurmdbd_custom_settings: cdktn.listMapper(ccClusterSlurmdbdCustomSettingPropertyToTerraform, false)(struct!.slurmdbdCustomSettings),
    }
}


export function ccClusterSlurmConfigurationPropertyToHclTerraform(struct?: CcCluster.SlurmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accounting: {
            value: ccClusterAccountingPropertyToHclTerraform(struct!.accounting),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountingProperty",
        },
        auth_key: {
            value: ccClusterAuthKeyPropertyToHclTerraform(struct!.authKey),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthKeyProperty",
        },
        cgroup_custom_settings: {
            value: cdktn.listMapperHcl(ccClusterCgroupCustomSettingPropertyToHclTerraform, false)(struct!.cgroupCustomSettings),
            isBlock: true,
            type: "list",
            storageClassType: "CgroupCustomSettingPropertyList",
        },
        jwt_auth: {
            value: ccClusterJwtAuthPropertyToHclTerraform(struct!.jwtAuth),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtAuthProperty",
        },
        scale_down_idle_time_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.scaleDownIdleTimeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        slurm_custom_settings: {
            value: cdktn.listMapperHcl(ccClusterSlurmCustomSettingPropertyToHclTerraform, false)(struct!.slurmCustomSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SlurmCustomSettingPropertyList",
        },
        slurm_rest: {
            value: ccClusterSlurmRestPropertyToHclTerraform(struct!.slurmRest),
            isBlock: true,
            type: "struct",
            storageClassType: "SlurmRestProperty",
        },
        slurmdbd_custom_settings: {
            value: cdktn.listMapperHcl(ccClusterSlurmdbdCustomSettingPropertyToHclTerraform, false)(struct!.slurmdbdCustomSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SlurmdbdCustomSettingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCluster {
export interface EndpointsProperty {
}
export class EndpointsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): EndpointsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // ipv_6_address - computed: true, optional: false, required: false
    public get ipv6Address() {
        return this.getStringAttribute('ipv_6_address');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }

    // private_ip_address - computed: true, optional: false, required: false
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }

    // public_ip_address - computed: true, optional: false, required: false
    public get publicIpAddress() {
        return this.getStringAttribute('public_ip_address');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}

export class EndpointsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): EndpointsPropertyOutputReference {
        return new EndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ErrorInfoProperty {
}
export class ErrorInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ErrorInfoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorInfoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getStringAttribute('code');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}

export class ErrorInfoPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ErrorInfoPropertyOutputReference {
        return new ErrorInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkingProperty {
    /**
    * The IP of the cluster (IPV4 or IPV6)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#network_type CcCluster#network_type}
    */
    readonly networkType?: string;
    /**
    * The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#subnet_ids CcCluster#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class NetworkingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkType !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkType = this._networkType;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkType = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkType = value.networkType;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // network_type - computed: true, optional: true, required: false
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    public resetNetworkType() {
        this._networkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface SchedulerProperty {
    /**
    * The software AWS PCS uses to manage cluster scaling and job scheduling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#type CcCluster#type}
    */
    readonly type: string;
    /**
    * The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#version CcCluster#version}
    */
    readonly version: string;
}
export class SchedulerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._version = value.version;
        }
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

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface AccountingProperty {
    /**
    * The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#default_purge_time_in_days CcCluster#default_purge_time_in_days}
    */
    readonly defaultPurgeTimeInDays?: number;
    /**
    * The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#mode CcCluster#mode}
    */
    readonly mode?: string;
}
export class AccountingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultPurgeTimeInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultPurgeTimeInDays = this._defaultPurgeTimeInDays;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultPurgeTimeInDays = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultPurgeTimeInDays = value.defaultPurgeTimeInDays;
            this._mode = value.mode;
        }
    }

    // default_purge_time_in_days - computed: true, optional: true, required: false
    private _defaultPurgeTimeInDays?: number; 
    public get defaultPurgeTimeInDays() {
        return this.getNumberAttribute('default_purge_time_in_days');
    }
    public set defaultPurgeTimeInDays(value: number) {
        this._defaultPurgeTimeInDays = value;
    }
    public resetDefaultPurgeTimeInDays() {
        this._defaultPurgeTimeInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultPurgeTimeInDaysInput() {
        return this._defaultPurgeTimeInDays;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface AuthKeyProperty {
    /**
    * The Amazon Resource Name (ARN) of the the shared Slurm key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#secret_arn CcCluster#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The version of the shared Slurm key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#secret_version CcCluster#secret_version}
    */
    readonly secretVersion?: string;
}
export class AuthKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._secretVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretVersion = this._secretVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretArn = undefined;
            this._secretVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretArn = value.secretArn;
            this._secretVersion = value.secretVersion;
        }
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }

    // secret_version - computed: true, optional: true, required: false
    private _secretVersion?: string; 
    public get secretVersion() {
        return this.getStringAttribute('secret_version');
    }
    public set secretVersion(value: string) {
        this._secretVersion = value;
    }
    public resetSecretVersion() {
        this._secretVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretVersionInput() {
        return this._secretVersion;
    }
}
export interface CgroupCustomSettingProperty {
    /**
    * The cgroup.conf parameter name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#parameter_name CcCluster#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * The value for the cgroup.conf parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#parameter_value CcCluster#parameter_value}
    */
    readonly parameterValue?: string;
}
export class CgroupCustomSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CgroupCustomSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CgroupCustomSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class CgroupCustomSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : CgroupCustomSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): CgroupCustomSettingPropertyOutputReference {
        return new CgroupCustomSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JwtKeyProperty {
    /**
    * The Amazon Resource Name (ARN) of the JWT key secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#secret_arn CcCluster#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The version of the JWT key secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#secret_version CcCluster#secret_version}
    */
    readonly secretVersion?: string;
}
export class JwtKeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._secretVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretVersion = this._secretVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretArn = undefined;
            this._secretVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretArn = value.secretArn;
            this._secretVersion = value.secretVersion;
        }
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }

    // secret_version - computed: true, optional: true, required: false
    private _secretVersion?: string; 
    public get secretVersion() {
        return this.getStringAttribute('secret_version');
    }
    public set secretVersion(value: string) {
        this._secretVersion = value;
    }
    public resetSecretVersion() {
        this._secretVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretVersionInput() {
        return this._secretVersion;
    }
}
export interface JwtAuthProperty {
    /**
    * JWT key configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#jwt_key CcCluster#jwt_key}
    */
    readonly jwtKey?: JwtKeyProperty;
}
export class JwtAuthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtAuthProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jwtKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtKey = this._jwtKey?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtAuthProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jwtKey.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jwtKey.internalValue = value.jwtKey;
        }
    }

    // jwt_key - computed: true, optional: true, required: false
    private _jwtKey = new JwtKeyPropertyOutputReference(this, "jwt_key");
    public get jwtKey() {
        return this._jwtKey;
    }
    public putJwtKey(value: JwtKeyProperty) {
        this._jwtKey.internalValue = value;
    }
    public resetJwtKey() {
        this._jwtKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtKeyInput() {
        return this._jwtKey.internalValue;
    }
}
export interface SlurmCustomSettingProperty {
    /**
    * AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#parameter_name CcCluster#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * The value for the configured Slurm setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#parameter_value CcCluster#parameter_value}
    */
    readonly parameterValue?: string;
}
export class SlurmCustomSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SlurmCustomSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmCustomSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class SlurmCustomSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : SlurmCustomSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): SlurmCustomSettingPropertyOutputReference {
        return new SlurmCustomSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SlurmRestProperty {
    /**
    * The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#mode CcCluster#mode}
    */
    readonly mode?: string;
}
export class SlurmRestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlurmRestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmRestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface SlurmdbdCustomSettingProperty {
    /**
    * The slurmdbd.conf parameter name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#parameter_name CcCluster#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * The value for the slurmdbd.conf parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#parameter_value CcCluster#parameter_value}
    */
    readonly parameterValue?: string;
}
export class SlurmdbdCustomSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SlurmdbdCustomSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmdbdCustomSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class SlurmdbdCustomSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : SlurmdbdCustomSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): SlurmdbdCustomSettingPropertyOutputReference {
        return new SlurmdbdCustomSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SlurmConfigurationProperty {
    /**
    * The accounting configuration includes configurable settings for Slurm accounting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#accounting CcCluster#accounting}
    */
    readonly accounting?: AccountingProperty;
    /**
    * The shared Slurm key for authentication, also known as the cluster secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#auth_key CcCluster#auth_key}
    */
    readonly authKey?: AuthKeyProperty;
    /**
    * Additional cgroup-specific configuration that directly maps to cgroup.conf settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#cgroup_custom_settings CcCluster#cgroup_custom_settings}
    */
    readonly cgroupCustomSettings?: CgroupCustomSettingProperty[] | cdktn.IResolvable;
    /**
    * JWT authentication configuration for Slurm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#jwt_auth CcCluster#jwt_auth}
    */
    readonly jwtAuth?: JwtAuthProperty;
    /**
    * The time before an idle node is scaled down.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#scale_down_idle_time_in_seconds CcCluster#scale_down_idle_time_in_seconds}
    */
    readonly scaleDownIdleTimeInSeconds?: number;
    /**
    * Additional Slurm-specific configuration that directly maps to Slurm settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#slurm_custom_settings CcCluster#slurm_custom_settings}
    */
    readonly slurmCustomSettings?: SlurmCustomSettingProperty[] | cdktn.IResolvable;
    /**
    * The SlurmRest configuration includes configurable settings for Slurm Rest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#slurm_rest CcCluster#slurm_rest}
    */
    readonly slurmRest?: SlurmRestProperty;
    /**
    * Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_cluster#slurmdbd_custom_settings CcCluster#slurmdbd_custom_settings}
    */
    readonly slurmdbdCustomSettings?: SlurmdbdCustomSettingProperty[] | cdktn.IResolvable;
}
export class SlurmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlurmConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accounting?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accounting = this._accounting?.internalValue;
        }
        if (this._authKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authKey = this._authKey?.internalValue;
        }
        if (this._cgroupCustomSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cgroupCustomSettings = this._cgroupCustomSettings?.internalValue;
        }
        if (this._jwtAuth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtAuth = this._jwtAuth?.internalValue;
        }
        if (this._scaleDownIdleTimeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleDownIdleTimeInSeconds = this._scaleDownIdleTimeInSeconds;
        }
        if (this._slurmCustomSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmCustomSettings = this._slurmCustomSettings?.internalValue;
        }
        if (this._slurmRest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmRest = this._slurmRest?.internalValue;
        }
        if (this._slurmdbdCustomSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmdbdCustomSettings = this._slurmdbdCustomSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accounting.internalValue = undefined;
            this._authKey.internalValue = undefined;
            this._cgroupCustomSettings.internalValue = undefined;
            this._jwtAuth.internalValue = undefined;
            this._scaleDownIdleTimeInSeconds = undefined;
            this._slurmCustomSettings.internalValue = undefined;
            this._slurmRest.internalValue = undefined;
            this._slurmdbdCustomSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accounting.internalValue = value.accounting;
            this._authKey.internalValue = value.authKey;
            this._cgroupCustomSettings.internalValue = value.cgroupCustomSettings;
            this._jwtAuth.internalValue = value.jwtAuth;
            this._scaleDownIdleTimeInSeconds = value.scaleDownIdleTimeInSeconds;
            this._slurmCustomSettings.internalValue = value.slurmCustomSettings;
            this._slurmRest.internalValue = value.slurmRest;
            this._slurmdbdCustomSettings.internalValue = value.slurmdbdCustomSettings;
        }
    }

    // accounting - computed: true, optional: true, required: false
    private _accounting = new AccountingPropertyOutputReference(this, "accounting");
    public get accounting() {
        return this._accounting;
    }
    public putAccounting(value: AccountingProperty) {
        this._accounting.internalValue = value;
    }
    public resetAccounting() {
        this._accounting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountingInput() {
        return this._accounting.internalValue;
    }

    // auth_key - computed: true, optional: true, required: false
    private _authKey = new AuthKeyPropertyOutputReference(this, "auth_key");
    public get authKey() {
        return this._authKey;
    }
    public putAuthKey(value: AuthKeyProperty) {
        this._authKey.internalValue = value;
    }
    public resetAuthKey() {
        this._authKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authKeyInput() {
        return this._authKey.internalValue;
    }

    // cgroup_custom_settings - computed: true, optional: true, required: false
    private _cgroupCustomSettings = new CgroupCustomSettingPropertyList(this, "cgroup_custom_settings", false);
    public get cgroupCustomSettings() {
        return this._cgroupCustomSettings;
    }
    public putCgroupCustomSettings(value: CgroupCustomSettingProperty[] | cdktn.IResolvable) {
        this._cgroupCustomSettings.internalValue = value;
    }
    public resetCgroupCustomSettings() {
        this._cgroupCustomSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cgroupCustomSettingsInput() {
        return this._cgroupCustomSettings.internalValue;
    }

    // jwt_auth - computed: true, optional: true, required: false
    private _jwtAuth = new JwtAuthPropertyOutputReference(this, "jwt_auth");
    public get jwtAuth() {
        return this._jwtAuth;
    }
    public putJwtAuth(value: JwtAuthProperty) {
        this._jwtAuth.internalValue = value;
    }
    public resetJwtAuth() {
        this._jwtAuth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtAuthInput() {
        return this._jwtAuth.internalValue;
    }

    // scale_down_idle_time_in_seconds - computed: true, optional: true, required: false
    private _scaleDownIdleTimeInSeconds?: number; 
    public get scaleDownIdleTimeInSeconds() {
        return this.getNumberAttribute('scale_down_idle_time_in_seconds');
    }
    public set scaleDownIdleTimeInSeconds(value: number) {
        this._scaleDownIdleTimeInSeconds = value;
    }
    public resetScaleDownIdleTimeInSeconds() {
        this._scaleDownIdleTimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleDownIdleTimeInSecondsInput() {
        return this._scaleDownIdleTimeInSeconds;
    }

    // slurm_custom_settings - computed: true, optional: true, required: false
    private _slurmCustomSettings = new SlurmCustomSettingPropertyList(this, "slurm_custom_settings", false);
    public get slurmCustomSettings() {
        return this._slurmCustomSettings;
    }
    public putSlurmCustomSettings(value: SlurmCustomSettingProperty[] | cdktn.IResolvable) {
        this._slurmCustomSettings.internalValue = value;
    }
    public resetSlurmCustomSettings() {
        this._slurmCustomSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmCustomSettingsInput() {
        return this._slurmCustomSettings.internalValue;
    }

    // slurm_rest - computed: true, optional: true, required: false
    private _slurmRest = new SlurmRestPropertyOutputReference(this, "slurm_rest");
    public get slurmRest() {
        return this._slurmRest;
    }
    public putSlurmRest(value: SlurmRestProperty) {
        this._slurmRest.internalValue = value;
    }
    public resetSlurmRest() {
        this._slurmRest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmRestInput() {
        return this._slurmRest.internalValue;
    }

    // slurmdbd_custom_settings - computed: true, optional: true, required: false
    private _slurmdbdCustomSettings = new SlurmdbdCustomSettingPropertyList(this, "slurmdbd_custom_settings", false);
    public get slurmdbdCustomSettings() {
        return this._slurmdbdCustomSettings;
    }
    public putSlurmdbdCustomSettings(value: SlurmdbdCustomSettingProperty[] | cdktn.IResolvable) {
        this._slurmdbdCustomSettings.internalValue = value;
    }
    public resetSlurmdbdCustomSettings() {
        this._slurmdbdCustomSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmdbdCustomSettingsInput() {
        return this._slurmdbdCustomSettings.internalValue;
    }
}
}
