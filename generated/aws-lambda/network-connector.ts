// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#configuration CcNetworkConnector#configuration}
    */
    readonly configuration: CcNetworkConnector.ConfigProperty;
    /**
    * A unique name for the network connector within your account and Region. Must be 1 to 64 alphanumeric characters, hyphens, or underscores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#name CcNetworkConnector#name}
    */
    readonly name?: string;
    /**
    * The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. This role must have permissions for ec2:CreateNetworkInterface and related describe operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#operator_role CcNetworkConnector#operator_role}
    */
    readonly operatorRole?: string;
    /**
    * A list of tags to apply to the network connector. Use tags to categorize network connectors for cost allocation, access control, or operational management.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#tags CcNetworkConnector#tags}
    */
    readonly tags?: CcNetworkConnector.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector awscc_lambda_network_connector}
*/
export class CcNetworkConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_network_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkConnector to import
    * @param importFromId The id of the existing CcNetworkConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_network_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector awscc_lambda_network_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_network_connector',
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
        this._configuration.internalValue = config.configuration;
        this._name = config.name;
        this._operatorRole = config.operatorRole;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcNetworkConnector.ConfigPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcNetworkConnector.ConfigProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
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

    // operator_role - computed: true, optional: true, required: false
    private _operatorRole?: string; 
    public get operatorRole() {
        return this.getStringAttribute('operator_role');
    }
    public set operatorRole(value: string) {
        this._operatorRole = value;
    }
    public resetOperatorRole() {
        this._operatorRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorRoleInput() {
        return this._operatorRole;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkConnector.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkConnector.TagProperty[] | cdktn.IResolvable) {
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
            configuration: ccNetworkConnectorConfigPropertyToTerraform(this._configuration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            operator_role: cdktn.stringToTerraform(this._operatorRole),
            tags: cdktn.listMapper(ccNetworkConnectorTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccNetworkConnectorConfigPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkConnector.ConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            operator_role: {
                value: cdktn.stringToHclTerraform(this._operatorRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkConnectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcNetworkConnector.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkConnectorVpcEgressConfigurationPropertyToTerraform(struct?: CcNetworkConnector.VpcEgressConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        associated_compute_resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.associatedComputeResourceTypes),
        network_protocol: cdktn.stringToTerraform(struct!.networkProtocol),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccNetworkConnectorVpcEgressConfigurationPropertyToHclTerraform(struct?: CcNetworkConnector.VpcEgressConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        associated_compute_resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.associatedComputeResourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        network_protocol: {
            value: cdktn.stringToHclTerraform(struct!.networkProtocol),
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


export function ccNetworkConnectorConfigPropertyToTerraform(struct?: CcNetworkConnector.ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_egress_configuration: ccNetworkConnectorVpcEgressConfigurationPropertyToTerraform(struct!.vpcEgressConfiguration),
    }
}


export function ccNetworkConnectorConfigPropertyToHclTerraform(struct?: CcNetworkConnector.ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_egress_configuration: {
            value: ccNetworkConnectorVpcEgressConfigurationPropertyToHclTerraform(struct!.vpcEgressConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcEgressConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkConnectorTagPropertyToTerraform(struct?: CcNetworkConnector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkConnectorTagPropertyToHclTerraform(struct?: CcNetworkConnector.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNetworkConnector {
export interface VpcEgressConfigurationProperty {
    /**
    * The types of Lambda compute resources that can use this connector. Currently, only MicroVm is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#associated_compute_resource_types CcNetworkConnector#associated_compute_resource_types}
    */
    readonly associatedComputeResourceTypes: string[];
    /**
    * The network protocol for the connector. Specify IPv4 for IPv4-only networking, or DualStack for both IPv4 and IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#network_protocol CcNetworkConnector#network_protocol}
    */
    readonly networkProtocol?: string;
    /**
    * The IDs of the VPC security groups to attach to the ENIs. Specify 0 to 5 security groups. All security groups must be in the same VPC as the subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#security_group_ids CcNetworkConnector#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs). Specify 1 to 16 subnets. All subnets must be in the same VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#subnet_ids CcNetworkConnector#subnet_ids}
    */
    readonly subnetIds: string[];
}
export class VpcEgressConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEgressConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associatedComputeResourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.associatedComputeResourceTypes = this._associatedComputeResourceTypes;
        }
        if (this._networkProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkProtocol = this._networkProtocol;
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

    public set internalValue(value: VpcEgressConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associatedComputeResourceTypes = undefined;
            this._networkProtocol = undefined;
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
            this._associatedComputeResourceTypes = value.associatedComputeResourceTypes;
            this._networkProtocol = value.networkProtocol;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // associated_compute_resource_types - computed: false, optional: false, required: true
    private _associatedComputeResourceTypes?: string[]; 
    public get associatedComputeResourceTypes() {
        return this.getListAttribute('associated_compute_resource_types');
    }
    public set associatedComputeResourceTypes(value: string[]) {
        this._associatedComputeResourceTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedComputeResourceTypesInput() {
        return this._associatedComputeResourceTypes;
    }

    // network_protocol - computed: true, optional: true, required: false
    private _networkProtocol?: string; 
    public get networkProtocol() {
        return this.getStringAttribute('network_protocol');
    }
    public set networkProtocol(value: string) {
        this._networkProtocol = value;
    }
    public resetNetworkProtocol() {
        this._networkProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkProtocolInput() {
        return this._networkProtocol;
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

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface ConfigProperty {
    /**
    * The VPC egress configuration for the network connector. Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#vpc_egress_configuration CcNetworkConnector#vpc_egress_configuration}
    */
    readonly vpcEgressConfiguration: VpcEgressConfigurationProperty;
}
export class ConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcEgressConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEgressConfiguration = this._vpcEgressConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcEgressConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcEgressConfiguration.internalValue = value.vpcEgressConfiguration;
        }
    }

    // vpc_egress_configuration - computed: false, optional: false, required: true
    private _vpcEgressConfiguration = new VpcEgressConfigurationPropertyOutputReference(this, "vpc_egress_configuration");
    public get vpcEgressConfiguration() {
        return this._vpcEgressConfiguration;
    }
    public putVpcEgressConfiguration(value: VpcEgressConfigurationProperty) {
        this._vpcEgressConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEgressConfigurationInput() {
        return this._vpcEgressConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#key CcNetworkConnector#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_network_connector#value CcNetworkConnector#value}
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
