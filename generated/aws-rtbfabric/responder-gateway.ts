// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResponderGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn CcResponderGateway#acm_certificate_arn}
    */
    readonly acmCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#description CcResponderGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#domain_name CcResponderGateway#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#gateway_type CcResponderGateway#gateway_type}
    */
    readonly gatewayType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#listener_config CcResponderGateway#listener_config}
    */
    readonly listenerConfig?: CcResponderGateway.ListenerConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration CcResponderGateway#managed_endpoint_configuration}
    */
    readonly managedEndpointConfiguration?: CcResponderGateway.ManagedEndpointConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#port CcResponderGateway#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#protocol CcResponderGateway#protocol}
    */
    readonly protocol: string;
    /**
    * The ID of one or more security groups in order to create a gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#security_group_ids CcResponderGateway#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * The ID of one or more subnets in order to create a gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#subnet_ids CcResponderGateway#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Tags to assign to the Responder Gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#tags CcResponderGateway#tags}
    */
    readonly tags?: CcResponderGateway.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration CcResponderGateway#trust_store_configuration}
    */
    readonly trustStoreConfiguration?: CcResponderGateway.TrustStoreConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#vpc_id CcResponderGateway#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}
*/
export class CcResponderGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rtbfabric_responder_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResponderGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResponderGateway to import
    * @param importFromId The id of the existing CcResponderGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResponderGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_responder_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResponderGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcResponderGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rtbfabric_responder_gateway',
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
        this._acmCertificateArn = config.acmCertificateArn;
        this._description = config.description;
        this._domainName = config.domainName;
        this._gatewayType = config.gatewayType;
        this._listenerConfig.internalValue = config.listenerConfig;
        this._managedEndpointConfiguration.internalValue = config.managedEndpointConfiguration;
        this._port = config.port;
        this._protocol = config.protocol;
        this._securityGroupIds = config.securityGroupIds;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._trustStoreConfiguration.internalValue = config.trustStoreConfiguration;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acm_certificate_arn - computed: true, optional: true, required: false
    private _acmCertificateArn?: string; 
    public get acmCertificateArn() {
        return this.getStringAttribute('acm_certificate_arn');
    }
    public set acmCertificateArn(value: string) {
        this._acmCertificateArn = value;
    }
    public resetAcmCertificateArn() {
        this._acmCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmCertificateArnInput() {
        return this._acmCertificateArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // certificate_association_status - computed: true, optional: false, required: false
    public get certificateAssociationStatus() {
        return this.getStringAttribute('certificate_association_status');
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
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

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // external_inbound_endpoint - computed: true, optional: false, required: false
    public get externalInboundEndpoint() {
        return this.getStringAttribute('external_inbound_endpoint');
    }

    // gateway_id - computed: true, optional: false, required: false
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }

    // gateway_type - computed: true, optional: true, required: false
    private _gatewayType?: string; 
    public get gatewayType() {
        return this.getStringAttribute('gateway_type');
    }
    public set gatewayType(value: string) {
        this._gatewayType = value;
    }
    public resetGatewayType() {
        this._gatewayType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayTypeInput() {
        return this._gatewayType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // listener_config - computed: true, optional: true, required: false
    private _listenerConfig = new CcResponderGateway.ListenerConfigPropertyOutputReference(this, "listener_config");
    public get listenerConfig() {
        return this._listenerConfig;
    }
    public putListenerConfig(value: CcResponderGateway.ListenerConfigProperty) {
        this._listenerConfig.internalValue = value;
    }
    public resetListenerConfig() {
        this._listenerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerConfigInput() {
        return this._listenerConfig.internalValue;
    }

    // managed_endpoint_configuration - computed: true, optional: true, required: false
    private _managedEndpointConfiguration = new CcResponderGateway.ManagedEndpointConfigurationPropertyOutputReference(this, "managed_endpoint_configuration");
    public get managedEndpointConfiguration() {
        return this._managedEndpointConfiguration;
    }
    public putManagedEndpointConfiguration(value: CcResponderGateway.ManagedEndpointConfigurationProperty) {
        this._managedEndpointConfiguration.internalValue = value;
    }
    public resetManagedEndpointConfiguration() {
        this._managedEndpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedEndpointConfigurationInput() {
        return this._managedEndpointConfiguration.internalValue;
    }

    // port - computed: false, optional: false, required: true
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // responder_gateway_status - computed: true, optional: false, required: false
    public get responderGatewayStatus() {
        return this.getStringAttribute('responder_gateway_status');
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResponderGateway.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResponderGateway.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trust_store_configuration - computed: true, optional: true, required: false
    private _trustStoreConfiguration = new CcResponderGateway.TrustStoreConfigurationPropertyOutputReference(this, "trust_store_configuration");
    public get trustStoreConfiguration() {
        return this._trustStoreConfiguration;
    }
    public putTrustStoreConfiguration(value: CcResponderGateway.TrustStoreConfigurationProperty) {
        this._trustStoreConfiguration.internalValue = value;
    }
    public resetTrustStoreConfiguration() {
        this._trustStoreConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustStoreConfigurationInput() {
        return this._trustStoreConfiguration.internalValue;
    }

    // updated_timestamp - computed: true, optional: false, required: false
    public get updatedTimestamp() {
        return this.getStringAttribute('updated_timestamp');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            acm_certificate_arn: cdktn.stringToTerraform(this._acmCertificateArn),
            description: cdktn.stringToTerraform(this._description),
            domain_name: cdktn.stringToTerraform(this._domainName),
            gateway_type: cdktn.stringToTerraform(this._gatewayType),
            listener_config: ccResponderGatewayListenerConfigPropertyToTerraform(this._listenerConfig.internalValue),
            managed_endpoint_configuration: ccResponderGatewayManagedEndpointConfigurationPropertyToTerraform(this._managedEndpointConfiguration.internalValue),
            port: cdktn.numberToTerraform(this._port),
            protocol: cdktn.stringToTerraform(this._protocol),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccResponderGatewayTagPropertyToTerraform, false)(this._tags.internalValue),
            trust_store_configuration: ccResponderGatewayTrustStoreConfigurationPropertyToTerraform(this._trustStoreConfiguration.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            acm_certificate_arn: {
                value: cdktn.stringToHclTerraform(this._acmCertificateArn),
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
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_type: {
                value: cdktn.stringToHclTerraform(this._gatewayType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            listener_config: {
                value: ccResponderGatewayListenerConfigPropertyToHclTerraform(this._listenerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResponderGateway.ListenerConfigProperty",
            },
            managed_endpoint_configuration: {
                value: ccResponderGatewayManagedEndpointConfigurationPropertyToHclTerraform(this._managedEndpointConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResponderGateway.ManagedEndpointConfigurationProperty",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResponderGatewayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcResponderGateway.TagPropertyList",
            },
            trust_store_configuration: {
                value: ccResponderGatewayTrustStoreConfigurationPropertyToHclTerraform(this._trustStoreConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResponderGateway.TrustStoreConfigurationProperty",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResponderGatewayListenerConfigPropertyToTerraform(struct?: CcResponderGateway.ListenerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    }
}


export function ccResponderGatewayListenerConfigPropertyToHclTerraform(struct?: CcResponderGateway.ListenerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        protocols: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponderGatewayHealthCheckConfigPropertyToTerraform(struct?: CcResponderGateway.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        healthy_threshold_count: cdktn.numberToTerraform(struct!.healthyThresholdCount),
        interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
        path: cdktn.stringToTerraform(struct!.path),
        port: cdktn.numberToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        status_code_matcher: cdktn.stringToTerraform(struct!.statusCodeMatcher),
        timeout_ms: cdktn.numberToTerraform(struct!.timeoutMs),
        unhealthy_threshold_count: cdktn.numberToTerraform(struct!.unhealthyThresholdCount),
    }
}


export function ccResponderGatewayHealthCheckConfigPropertyToHclTerraform(struct?: CcResponderGateway.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        healthy_threshold_count: {
            value: cdktn.numberToHclTerraform(struct!.healthyThresholdCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_seconds: {
            value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code_matcher: {
            value: cdktn.stringToHclTerraform(struct!.statusCodeMatcher),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_ms: {
            value: cdktn.numberToHclTerraform(struct!.timeoutMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unhealthy_threshold_count: {
            value: cdktn.numberToHclTerraform(struct!.unhealthyThresholdCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponderGatewayAutoScalingGroupsConfigurationPropertyToTerraform(struct?: CcResponderGateway.AutoScalingGroupsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_group_name_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.autoScalingGroupNameList),
        health_check_config: ccResponderGatewayHealthCheckConfigPropertyToTerraform(struct!.healthCheckConfig),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccResponderGatewayAutoScalingGroupsConfigurationPropertyToHclTerraform(struct?: CcResponderGateway.AutoScalingGroupsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_group_name_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.autoScalingGroupNameList),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        health_check_config: {
            value: ccResponderGatewayHealthCheckConfigPropertyToHclTerraform(struct!.healthCheckConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HealthCheckConfigProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponderGatewayEksEndpointsConfigurationPropertyToTerraform(struct?: CcResponderGateway.EksEndpointsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_api_server_ca_certificate_chain: cdktn.stringToTerraform(struct!.clusterApiServerCaCertificateChain),
        cluster_api_server_endpoint_uri: cdktn.stringToTerraform(struct!.clusterApiServerEndpointUri),
        cluster_name: cdktn.stringToTerraform(struct!.clusterName),
        endpoints_resource_name: cdktn.stringToTerraform(struct!.endpointsResourceName),
        endpoints_resource_namespace: cdktn.stringToTerraform(struct!.endpointsResourceNamespace),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccResponderGatewayEksEndpointsConfigurationPropertyToHclTerraform(struct?: CcResponderGateway.EksEndpointsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_api_server_ca_certificate_chain: {
            value: cdktn.stringToHclTerraform(struct!.clusterApiServerCaCertificateChain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_api_server_endpoint_uri: {
            value: cdktn.stringToHclTerraform(struct!.clusterApiServerEndpointUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_name: {
            value: cdktn.stringToHclTerraform(struct!.clusterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoints_resource_name: {
            value: cdktn.stringToHclTerraform(struct!.endpointsResourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoints_resource_namespace: {
            value: cdktn.stringToHclTerraform(struct!.endpointsResourceNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponderGatewayManagedEndpointConfigurationPropertyToTerraform(struct?: CcResponderGateway.ManagedEndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_groups_configuration: ccResponderGatewayAutoScalingGroupsConfigurationPropertyToTerraform(struct!.autoScalingGroupsConfiguration),
        eks_endpoints_configuration: ccResponderGatewayEksEndpointsConfigurationPropertyToTerraform(struct!.eksEndpointsConfiguration),
    }
}


export function ccResponderGatewayManagedEndpointConfigurationPropertyToHclTerraform(struct?: CcResponderGateway.ManagedEndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_groups_configuration: {
            value: ccResponderGatewayAutoScalingGroupsConfigurationPropertyToHclTerraform(struct!.autoScalingGroupsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoScalingGroupsConfigurationProperty",
        },
        eks_endpoints_configuration: {
            value: ccResponderGatewayEksEndpointsConfigurationPropertyToHclTerraform(struct!.eksEndpointsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EksEndpointsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponderGatewayTagPropertyToTerraform(struct?: CcResponderGateway.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResponderGatewayTagPropertyToHclTerraform(struct?: CcResponderGateway.TagProperty | cdktn.IResolvable): any {
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


export function ccResponderGatewayTrustStoreConfigurationPropertyToTerraform(struct?: CcResponderGateway.TrustStoreConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_authority_certificates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityCertificates),
    }
}


export function ccResponderGatewayTrustStoreConfigurationPropertyToHclTerraform(struct?: CcResponderGateway.TrustStoreConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_authority_certificates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateAuthorityCertificates),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResponderGateway {
export interface ListenerConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#protocols CcResponderGateway#protocols}
    */
    readonly protocols?: string[];
}
export class ListenerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ListenerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ListenerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._protocols = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._protocols = value.protocols;
        }
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: string[]; 
    public get protocols() {
        return this.getListAttribute('protocols');
    }
    public set protocols(value: string[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }
}
export interface HealthCheckConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count CcResponderGateway#healthy_threshold_count}
    */
    readonly healthyThresholdCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#interval_seconds CcResponderGateway#interval_seconds}
    */
    readonly intervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#path CcResponderGateway#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#port CcResponderGateway#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#protocol CcResponderGateway#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher CcResponderGateway#status_code_matcher}
    */
    readonly statusCodeMatcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#timeout_ms CcResponderGateway#timeout_ms}
    */
    readonly timeoutMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count CcResponderGateway#unhealthy_threshold_count}
    */
    readonly unhealthyThresholdCount?: number;
}
export class HealthCheckConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthyThresholdCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
        }
        if (this._intervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalSeconds = this._intervalSeconds;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._statusCodeMatcher !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCodeMatcher = this._statusCodeMatcher;
        }
        if (this._timeoutMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutMs = this._timeoutMs;
        }
        if (this._unhealthyThresholdCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthyThresholdCount = undefined;
            this._intervalSeconds = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._statusCodeMatcher = undefined;
            this._timeoutMs = undefined;
            this._unhealthyThresholdCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthyThresholdCount = value.healthyThresholdCount;
            this._intervalSeconds = value.intervalSeconds;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._statusCodeMatcher = value.statusCodeMatcher;
            this._timeoutMs = value.timeoutMs;
            this._unhealthyThresholdCount = value.unhealthyThresholdCount;
        }
    }

    // healthy_threshold_count - computed: true, optional: true, required: false
    private _healthyThresholdCount?: number; 
    public get healthyThresholdCount() {
        return this.getNumberAttribute('healthy_threshold_count');
    }
    public set healthyThresholdCount(value: number) {
        this._healthyThresholdCount = value;
    }
    public resetHealthyThresholdCount() {
        this._healthyThresholdCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdCountInput() {
        return this._healthyThresholdCount;
    }

    // interval_seconds - computed: true, optional: true, required: false
    private _intervalSeconds?: number; 
    public get intervalSeconds() {
        return this.getNumberAttribute('interval_seconds');
    }
    public set intervalSeconds(value: number) {
        this._intervalSeconds = value;
    }
    public resetIntervalSeconds() {
        this._intervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalSecondsInput() {
        return this._intervalSeconds;
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

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // status_code_matcher - computed: true, optional: true, required: false
    private _statusCodeMatcher?: string; 
    public get statusCodeMatcher() {
        return this.getStringAttribute('status_code_matcher');
    }
    public set statusCodeMatcher(value: string) {
        this._statusCodeMatcher = value;
    }
    public resetStatusCodeMatcher() {
        this._statusCodeMatcher = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeMatcherInput() {
        return this._statusCodeMatcher;
    }

    // timeout_ms - computed: true, optional: true, required: false
    private _timeoutMs?: number; 
    public get timeoutMs() {
        return this.getNumberAttribute('timeout_ms');
    }
    public set timeoutMs(value: number) {
        this._timeoutMs = value;
    }
    public resetTimeoutMs() {
        this._timeoutMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMsInput() {
        return this._timeoutMs;
    }

    // unhealthy_threshold_count - computed: true, optional: true, required: false
    private _unhealthyThresholdCount?: number; 
    public get unhealthyThresholdCount() {
        return this.getNumberAttribute('unhealthy_threshold_count');
    }
    public set unhealthyThresholdCount(value: number) {
        this._unhealthyThresholdCount = value;
    }
    public resetUnhealthyThresholdCount() {
        this._unhealthyThresholdCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdCountInput() {
        return this._unhealthyThresholdCount;
    }
}
export interface AutoScalingGroupsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list CcResponderGateway#auto_scaling_group_name_list}
    */
    readonly autoScalingGroupNameList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#health_check_config CcResponderGateway#health_check_config}
    */
    readonly healthCheckConfig?: HealthCheckConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#role_arn CcResponderGateway#role_arn}
    */
    readonly roleArn?: string;
}
export class AutoScalingGroupsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingGroupsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingGroupNameList !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingGroupNameList = this._autoScalingGroupNameList;
        }
        if (this._healthCheckConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthCheckConfig = this._healthCheckConfig?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingGroupsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingGroupNameList = undefined;
            this._healthCheckConfig.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingGroupNameList = value.autoScalingGroupNameList;
            this._healthCheckConfig.internalValue = value.healthCheckConfig;
            this._roleArn = value.roleArn;
        }
    }

    // auto_scaling_group_name_list - computed: true, optional: true, required: false
    private _autoScalingGroupNameList?: string[]; 
    public get autoScalingGroupNameList() {
        return cdktn.Fn.tolist(this.getListAttribute('auto_scaling_group_name_list'));
    }
    public set autoScalingGroupNameList(value: string[]) {
        this._autoScalingGroupNameList = value;
    }
    public resetAutoScalingGroupNameList() {
        this._autoScalingGroupNameList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupNameListInput() {
        return this._autoScalingGroupNameList;
    }

    // health_check_config - computed: true, optional: true, required: false
    private _healthCheckConfig = new HealthCheckConfigPropertyOutputReference(this, "health_check_config");
    public get healthCheckConfig() {
        return this._healthCheckConfig;
    }
    public putHealthCheckConfig(value: HealthCheckConfigProperty) {
        this._healthCheckConfig.internalValue = value;
    }
    public resetHealthCheckConfig() {
        this._healthCheckConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckConfigInput() {
        return this._healthCheckConfig.internalValue;
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
}
export interface EksEndpointsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain CcResponderGateway#cluster_api_server_ca_certificate_chain}
    */
    readonly clusterApiServerCaCertificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri CcResponderGateway#cluster_api_server_endpoint_uri}
    */
    readonly clusterApiServerEndpointUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#cluster_name CcResponderGateway#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name CcResponderGateway#endpoints_resource_name}
    */
    readonly endpointsResourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace CcResponderGateway#endpoints_resource_namespace}
    */
    readonly endpointsResourceNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#role_arn CcResponderGateway#role_arn}
    */
    readonly roleArn?: string;
}
export class EksEndpointsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EksEndpointsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterApiServerCaCertificateChain !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterApiServerCaCertificateChain = this._clusterApiServerCaCertificateChain;
        }
        if (this._clusterApiServerEndpointUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterApiServerEndpointUri = this._clusterApiServerEndpointUri;
        }
        if (this._clusterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterName = this._clusterName;
        }
        if (this._endpointsResourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointsResourceName = this._endpointsResourceName;
        }
        if (this._endpointsResourceNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointsResourceNamespace = this._endpointsResourceNamespace;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EksEndpointsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterApiServerCaCertificateChain = undefined;
            this._clusterApiServerEndpointUri = undefined;
            this._clusterName = undefined;
            this._endpointsResourceName = undefined;
            this._endpointsResourceNamespace = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterApiServerCaCertificateChain = value.clusterApiServerCaCertificateChain;
            this._clusterApiServerEndpointUri = value.clusterApiServerEndpointUri;
            this._clusterName = value.clusterName;
            this._endpointsResourceName = value.endpointsResourceName;
            this._endpointsResourceNamespace = value.endpointsResourceNamespace;
            this._roleArn = value.roleArn;
        }
    }

    // cluster_api_server_ca_certificate_chain - computed: true, optional: true, required: false
    private _clusterApiServerCaCertificateChain?: string; 
    public get clusterApiServerCaCertificateChain() {
        return this.getStringAttribute('cluster_api_server_ca_certificate_chain');
    }
    public set clusterApiServerCaCertificateChain(value: string) {
        this._clusterApiServerCaCertificateChain = value;
    }
    public resetClusterApiServerCaCertificateChain() {
        this._clusterApiServerCaCertificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterApiServerCaCertificateChainInput() {
        return this._clusterApiServerCaCertificateChain;
    }

    // cluster_api_server_endpoint_uri - computed: true, optional: true, required: false
    private _clusterApiServerEndpointUri?: string; 
    public get clusterApiServerEndpointUri() {
        return this.getStringAttribute('cluster_api_server_endpoint_uri');
    }
    public set clusterApiServerEndpointUri(value: string) {
        this._clusterApiServerEndpointUri = value;
    }
    public resetClusterApiServerEndpointUri() {
        this._clusterApiServerEndpointUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterApiServerEndpointUriInput() {
        return this._clusterApiServerEndpointUri;
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

    // endpoints_resource_name - computed: true, optional: true, required: false
    private _endpointsResourceName?: string; 
    public get endpointsResourceName() {
        return this.getStringAttribute('endpoints_resource_name');
    }
    public set endpointsResourceName(value: string) {
        this._endpointsResourceName = value;
    }
    public resetEndpointsResourceName() {
        this._endpointsResourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointsResourceNameInput() {
        return this._endpointsResourceName;
    }

    // endpoints_resource_namespace - computed: true, optional: true, required: false
    private _endpointsResourceNamespace?: string; 
    public get endpointsResourceNamespace() {
        return this.getStringAttribute('endpoints_resource_namespace');
    }
    public set endpointsResourceNamespace(value: string) {
        this._endpointsResourceNamespace = value;
    }
    public resetEndpointsResourceNamespace() {
        this._endpointsResourceNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointsResourceNamespaceInput() {
        return this._endpointsResourceNamespace;
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
}
export interface ManagedEndpointConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration CcResponderGateway#auto_scaling_groups_configuration}
    */
    readonly autoScalingGroupsConfiguration?: AutoScalingGroupsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration CcResponderGateway#eks_endpoints_configuration}
    */
    readonly eksEndpointsConfiguration?: EksEndpointsConfigurationProperty;
}
export class ManagedEndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedEndpointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingGroupsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingGroupsConfiguration = this._autoScalingGroupsConfiguration?.internalValue;
        }
        if (this._eksEndpointsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eksEndpointsConfiguration = this._eksEndpointsConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedEndpointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingGroupsConfiguration.internalValue = undefined;
            this._eksEndpointsConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingGroupsConfiguration.internalValue = value.autoScalingGroupsConfiguration;
            this._eksEndpointsConfiguration.internalValue = value.eksEndpointsConfiguration;
        }
    }

    // auto_scaling_groups_configuration - computed: true, optional: true, required: false
    private _autoScalingGroupsConfiguration = new AutoScalingGroupsConfigurationPropertyOutputReference(this, "auto_scaling_groups_configuration");
    public get autoScalingGroupsConfiguration() {
        return this._autoScalingGroupsConfiguration;
    }
    public putAutoScalingGroupsConfiguration(value: AutoScalingGroupsConfigurationProperty) {
        this._autoScalingGroupsConfiguration.internalValue = value;
    }
    public resetAutoScalingGroupsConfiguration() {
        this._autoScalingGroupsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupsConfigurationInput() {
        return this._autoScalingGroupsConfiguration.internalValue;
    }

    // eks_endpoints_configuration - computed: true, optional: true, required: false
    private _eksEndpointsConfiguration = new EksEndpointsConfigurationPropertyOutputReference(this, "eks_endpoints_configuration");
    public get eksEndpointsConfiguration() {
        return this._eksEndpointsConfiguration;
    }
    public putEksEndpointsConfiguration(value: EksEndpointsConfigurationProperty) {
        this._eksEndpointsConfiguration.internalValue = value;
    }
    public resetEksEndpointsConfiguration() {
        this._eksEndpointsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eksEndpointsConfigurationInput() {
        return this._eksEndpointsConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#key CcResponderGateway#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#value CcResponderGateway#value}
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
export interface TrustStoreConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates CcResponderGateway#certificate_authority_certificates}
    */
    readonly certificateAuthorityCertificates?: string[];
}
export class TrustStoreConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrustStoreConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateAuthorityCertificates !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityCertificates = this._certificateAuthorityCertificates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrustStoreConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateAuthorityCertificates = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateAuthorityCertificates = value.certificateAuthorityCertificates;
        }
    }

    // certificate_authority_certificates - computed: true, optional: true, required: false
    private _certificateAuthorityCertificates?: string[]; 
    public get certificateAuthorityCertificates() {
        return cdktn.Fn.tolist(this.getListAttribute('certificate_authority_certificates'));
    }
    public set certificateAuthorityCertificates(value: string[]) {
        this._certificateAuthorityCertificates = value;
    }
    public resetCertificateAuthorityCertificates() {
        this._certificateAuthorityCertificates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityCertificatesInput() {
        return this._certificateAuthorityCertificates;
    }
}
}
