// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointAccessProps extends cdktn.TerraformMetaArguments {
    /**
    * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access#cluster_identifier CcEndpointAccess#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * The name of the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access#endpoint_name CcEndpointAccess#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * The AWS account ID of the owner of the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access#resource_owner CcEndpointAccess#resource_owner}
    */
    readonly resourceOwner?: string;
    /**
    * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access#subnet_group_name CcEndpointAccess#subnet_group_name}
    */
    readonly subnetGroupName: string;
    /**
    * A list of vpc security group ids to apply to the created endpoint access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access#vpc_security_group_ids CcEndpointAccess#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access awscc_redshift_endpoint_access}
*/
export class CcEndpointAccess extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_endpoint_access";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpointAccess resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpointAccess to import
    * @param importFromId The id of the existing CcEndpointAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpointAccess to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_endpoint_access", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_access awscc_redshift_endpoint_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointAccessProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointAccessProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_endpoint_access',
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
        this._clusterIdentifier = config.clusterIdentifier;
        this._endpointName = config.endpointName;
        this._resourceOwner = config.resourceOwner;
        this._subnetGroupName = config.subnetGroupName;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // endpoint_create_time - computed: true, optional: false, required: false
    public get endpointCreateTime() {
        return this.getStringAttribute('endpoint_create_time');
    }

    // endpoint_name - computed: false, optional: false, required: true
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // endpoint_status - computed: true, optional: false, required: false
    public get endpointStatus() {
        return this.getStringAttribute('endpoint_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // resource_owner - computed: true, optional: true, required: false
    private _resourceOwner?: string; 
    public get resourceOwner() {
        return this.getStringAttribute('resource_owner');
    }
    public set resourceOwner(value: string) {
        this._resourceOwner = value;
    }
    public resetResourceOwner() {
        this._resourceOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceOwnerInput() {
        return this._resourceOwner;
    }

    // subnet_group_name - computed: false, optional: false, required: true
    private _subnetGroupName?: string; 
    public get subnetGroupName() {
        return this.getStringAttribute('subnet_group_name');
    }
    public set subnetGroupName(value: string) {
        this._subnetGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetGroupNameInput() {
        return this._subnetGroupName;
    }

    // vpc_endpoint - computed: true, optional: false, required: false
    private _vpcEndpoint = new CcEndpointAccess.VpcEndpointPropertyOutputReference(this, "vpc_endpoint");
    public get vpcEndpoint() {
        return this._vpcEndpoint;
    }

    // vpc_security_group_ids - computed: false, optional: false, required: true
    private _vpcSecurityGroupIds?: string[]; 
    public get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[]) {
        this._vpcSecurityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }

    // vpc_security_groups - computed: true, optional: false, required: false
    private _vpcSecurityGroups = new CcEndpointAccess.VpcSecurityGroupsPropertyList(this, "vpc_security_groups", false);
    public get vpcSecurityGroups() {
        return this._vpcSecurityGroups;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_identifier: cdktn.stringToTerraform(this._clusterIdentifier),
            endpoint_name: cdktn.stringToTerraform(this._endpointName),
            resource_owner: cdktn.stringToTerraform(this._resourceOwner),
            subnet_group_name: cdktn.stringToTerraform(this._subnetGroupName),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_name: {
                value: cdktn.stringToHclTerraform(this._endpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_owner: {
                value: cdktn.stringToHclTerraform(this._resourceOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._subnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointAccessNetworkInterfacesPropertyToTerraform(struct?: CcEndpointAccess.NetworkInterfacesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEndpointAccessNetworkInterfacesPropertyToHclTerraform(struct?: CcEndpointAccess.NetworkInterfacesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccEndpointAccessVpcEndpointPropertyToTerraform(struct?: CcEndpointAccess.VpcEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEndpointAccessVpcEndpointPropertyToHclTerraform(struct?: CcEndpointAccess.VpcEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccEndpointAccessVpcSecurityGroupsPropertyToTerraform(struct?: CcEndpointAccess.VpcSecurityGroupsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccEndpointAccessVpcSecurityGroupsPropertyToHclTerraform(struct?: CcEndpointAccess.VpcSecurityGroupsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcEndpointAccess {
export interface NetworkInterfacesProperty {
}
export class NetworkInterfacesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkInterfacesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfacesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }

    // private_ip_address - computed: true, optional: false, required: false
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
}

export class NetworkInterfacesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): NetworkInterfacesPropertyOutputReference {
        return new NetworkInterfacesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcEndpointProperty {
}
export class VpcEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // network_interfaces - computed: true, optional: false, required: false
    private _networkInterfaces = new NetworkInterfacesPropertyList(this, "network_interfaces", false);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }

    // vpc_endpoint_id - computed: true, optional: false, required: false
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
}
export interface VpcSecurityGroupsProperty {
}
export class VpcSecurityGroupsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VpcSecurityGroupsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcSecurityGroupsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // vpc_security_group_id - computed: true, optional: false, required: false
    public get vpcSecurityGroupId() {
        return this.getStringAttribute('vpc_security_group_id');
    }
}

export class VpcSecurityGroupsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): VpcSecurityGroupsPropertyOutputReference {
        return new VpcSecurityGroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
