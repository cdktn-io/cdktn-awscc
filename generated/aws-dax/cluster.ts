// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones CcCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type CcCluster#cluster_endpoint_encryption_type}
    */
    readonly clusterEndpointEncryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name CcCluster#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description CcCluster#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn CcCluster#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type CcCluster#network_type}
    */
    readonly networkType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type CcCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn CcCluster#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name CcCluster#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window CcCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor CcCluster#replication_factor}
    */
    readonly replicationFactor: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification CcCluster#sse_specification}
    */
    readonly sseSpecification?: CcCluster.SSESpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name CcCluster#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags CcCluster#tags}
    */
    readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster awscc_dax_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dax_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dax_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster awscc_dax_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dax_cluster',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._availabilityZones = config.availabilityZones;
        this._clusterEndpointEncryptionType = config.clusterEndpointEncryptionType;
        this._clusterName = config.clusterName;
        this._description = config.description;
        this._iamRoleArn = config.iamRoleArn;
        this._networkType = config.networkType;
        this._nodeType = config.nodeType;
        this._notificationTopicArn = config.notificationTopicArn;
        this._parameterGroupName = config.parameterGroupName;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._replicationFactor = config.replicationFactor;
        this._securityGroupIds = config.securityGroupIds;
        this._sseSpecification.internalValue = config.sseSpecification;
        this._subnetGroupName = config.subnetGroupName;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: true, required: false
    private _availabilityZones?: string[]; 
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
        this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
        return this._availabilityZones;
    }

    // cluster_discovery_endpoint - computed: true, optional: false, required: false
    public get clusterDiscoveryEndpoint() {
        return this.getStringAttribute('cluster_discovery_endpoint');
    }

    // cluster_discovery_endpoint_url - computed: true, optional: false, required: false
    public get clusterDiscoveryEndpointUrl() {
        return this.getStringAttribute('cluster_discovery_endpoint_url');
    }

    // cluster_endpoint_encryption_type - computed: true, optional: true, required: false
    private _clusterEndpointEncryptionType?: string; 
    public get clusterEndpointEncryptionType() {
        return this.getStringAttribute('cluster_endpoint_encryption_type');
    }
    public set clusterEndpointEncryptionType(value: string) {
        this._clusterEndpointEncryptionType = value;
    }
    public resetClusterEndpointEncryptionType() {
        this._clusterEndpointEncryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterEndpointEncryptionTypeInput() {
        return this._clusterEndpointEncryptionType;
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
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

    // iam_role_arn - computed: false, optional: false, required: true
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // node_type - computed: false, optional: false, required: true
    private _nodeType?: string; 
    public get nodeType() {
        return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string) {
        this._nodeType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
        return this._nodeType;
    }

    // notification_topic_arn - computed: true, optional: true, required: false
    private _notificationTopicArn?: string; 
    public get notificationTopicArn() {
        return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string) {
        this._notificationTopicArn = value;
    }
    public resetNotificationTopicArn() {
        this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTopicArnInput() {
        return this._notificationTopicArn;
    }

    // parameter_group_name - computed: true, optional: true, required: false
    private _parameterGroupName?: string; 
    public get parameterGroupName() {
        return this.getStringAttribute('parameter_group_name');
    }
    public set parameterGroupName(value: string) {
        this._parameterGroupName = value;
    }
    public resetParameterGroupName() {
        this._parameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterGroupNameInput() {
        return this._parameterGroupName;
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string; 
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string) {
        this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }

    // replication_factor - computed: false, optional: false, required: true
    private _replicationFactor?: number; 
    public get replicationFactor() {
        return this.getNumberAttribute('replication_factor');
    }
    public set replicationFactor(value: number) {
        this._replicationFactor = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationFactorInput() {
        return this._replicationFactor;
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

    // sse_specification - computed: true, optional: true, required: false
    private _sseSpecification = new CcCluster.SSESpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: CcCluster.SSESpecificationProperty) {
        this._sseSpecification.internalValue = value;
    }
    public resetSseSpecification() {
        this._sseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseSpecificationInput() {
        return this._sseSpecification.internalValue;
    }

    // subnet_group_name - computed: true, optional: true, required: false
    private _subnetGroupName?: string; 
    public get subnetGroupName() {
        return this.getStringAttribute('subnet_group_name');
    }
    public set subnetGroupName(value: string) {
        this._subnetGroupName = value;
    }
    public resetSubnetGroupName() {
        this._subnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetGroupNameInput() {
        return this._subnetGroupName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
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
            availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
            cluster_endpoint_encryption_type: cdktn.stringToTerraform(this._clusterEndpointEncryptionType),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            description: cdktn.stringToTerraform(this._description),
            iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
            network_type: cdktn.stringToTerraform(this._networkType),
            node_type: cdktn.stringToTerraform(this._nodeType),
            notification_topic_arn: cdktn.stringToTerraform(this._notificationTopicArn),
            parameter_group_name: cdktn.stringToTerraform(this._parameterGroupName),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            replication_factor: cdktn.numberToTerraform(this._replicationFactor),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            sse_specification: ccClusterSSESpecificationPropertyToTerraform(this._sseSpecification.internalValue),
            subnet_group_name: cdktn.stringToTerraform(this._subnetGroupName),
            tags: cdktn.stringToTerraform(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zones: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cluster_endpoint_encryption_type: {
                value: cdktn.stringToHclTerraform(this._clusterEndpointEncryptionType),
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
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_role_arn: {
                value: cdktn.stringToHclTerraform(this._iamRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_type: {
                value: cdktn.stringToHclTerraform(this._nodeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_topic_arn: {
                value: cdktn.stringToHclTerraform(this._notificationTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._parameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_maintenance_window: {
                value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_factor: {
                value: cdktn.numberToHclTerraform(this._replicationFactor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            sse_specification: {
                value: ccClusterSSESpecificationPropertyToHclTerraform(this._sseSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.SSESpecificationProperty",
            },
            subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._subnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterSSESpecificationPropertyToTerraform(struct?: CcCluster.SSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sse_enabled: cdktn.booleanToTerraform(struct!.sseEnabled),
    }
}


export function ccClusterSSESpecificationPropertyToHclTerraform(struct?: CcCluster.SSESpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sse_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.sseEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCluster {
export interface SSESpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled CcCluster#sse_enabled}
    */
    readonly sseEnabled?: boolean | cdktn.IResolvable;
}
export class SSESpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SSESpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sseEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseEnabled = this._sseEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SSESpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sseEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sseEnabled = value.sseEnabled;
        }
    }

    // sse_enabled - computed: true, optional: true, required: false
    private _sseEnabled?: boolean | cdktn.IResolvable; 
    public get sseEnabled() {
        return this.getBooleanAttribute('sse_enabled');
    }
    public set sseEnabled(value: boolean | cdktn.IResolvable) {
        this._sseEnabled = value;
    }
    public resetSseEnabled() {
        this._sseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseEnabledInput() {
        return this._sseEnabled;
    }
}
}
