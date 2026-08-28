// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTargetGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#health_check_enabled CcTargetGroup#health_check_enabled}
    */
    readonly healthCheckEnabled?: boolean | cdktn.IResolvable;
    /**
    * The approximate amount of time, in seconds, between health checks of an individual target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#health_check_interval_seconds CcTargetGroup#health_check_interval_seconds}
    */
    readonly healthCheckIntervalSeconds?: number;
    /**
    * [HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#health_check_path CcTargetGroup#health_check_path}
    */
    readonly healthCheckPath?: string;
    /**
    * The port the load balancer uses when performing health checks on targets. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#health_check_port CcTargetGroup#health_check_port}
    */
    readonly healthCheckPort?: string;
    /**
    * The protocol the load balancer uses when performing health checks on targets. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#health_check_protocol CcTargetGroup#health_check_protocol}
    */
    readonly healthCheckProtocol?: string;
    /**
    * The amount of time, in seconds, during which no response from a target means a failed health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#health_check_timeout_seconds CcTargetGroup#health_check_timeout_seconds}
    */
    readonly healthCheckTimeoutSeconds?: number;
    /**
    * The number of consecutive health checks successes required before considering an unhealthy target healthy. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#healthy_threshold_count CcTargetGroup#healthy_threshold_count}
    */
    readonly healthyThresholdCount?: number;
    /**
    * The type of IP address used for this target group. The possible values are ipv4 and ipv6. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#ip_address_type CcTargetGroup#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#matcher CcTargetGroup#matcher}
    */
    readonly matcher?: CcTargetGroup.MatcherProperty;
    /**
    * The name of the target group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#name CcTargetGroup#name}
    */
    readonly name?: string;
    /**
    * The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#port CcTargetGroup#port}
    */
    readonly port?: number;
    /**
    * The protocol to use for routing traffic to the targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#protocol CcTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#protocol_version CcTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * The tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#tags CcTargetGroup#tags}
    */
    readonly tags?: CcTargetGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * The port that the target control agent uses to communicate the available capacity of targets to the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#target_control_port CcTargetGroup#target_control_port}
    */
    readonly targetControlPort?: number;
    /**
    * The attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#target_group_attributes CcTargetGroup#target_group_attributes}
    */
    readonly targetGroupAttributes?: CcTargetGroup.TargetGroupAttributeProperty[] | cdktn.IResolvable;
    /**
    * The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#target_type CcTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * The targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#targets CcTargetGroup#targets}
    */
    readonly targets?: CcTargetGroup.TargetDescriptionProperty[] | cdktn.IResolvable;
    /**
    * The number of consecutive health check failures required before considering a target unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#unhealthy_threshold_count CcTargetGroup#unhealthy_threshold_count}
    */
    readonly unhealthyThresholdCount?: number;
    /**
    * The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#vpc_id CcTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}
*/
export class CcTargetGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancingv2_target_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTargetGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTargetGroup to import
    * @param importFromId The id of the existing CcTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTargetGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_target_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTargetGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTargetGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancingv2_target_group',
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
        this._healthCheckEnabled = config.healthCheckEnabled;
        this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
        this._healthCheckPath = config.healthCheckPath;
        this._healthCheckPort = config.healthCheckPort;
        this._healthCheckProtocol = config.healthCheckProtocol;
        this._healthCheckTimeoutSeconds = config.healthCheckTimeoutSeconds;
        this._healthyThresholdCount = config.healthyThresholdCount;
        this._ipAddressType = config.ipAddressType;
        this._matcher.internalValue = config.matcher;
        this._name = config.name;
        this._port = config.port;
        this._protocol = config.protocol;
        this._protocolVersion = config.protocolVersion;
        this._tags.internalValue = config.tags;
        this._targetControlPort = config.targetControlPort;
        this._targetGroupAttributes.internalValue = config.targetGroupAttributes;
        this._targetType = config.targetType;
        this._targets.internalValue = config.targets;
        this._unhealthyThresholdCount = config.unhealthyThresholdCount;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // health_check_enabled - computed: true, optional: true, required: false
    private _healthCheckEnabled?: boolean | cdktn.IResolvable; 
    public get healthCheckEnabled() {
        return this.getBooleanAttribute('health_check_enabled');
    }
    public set healthCheckEnabled(value: boolean | cdktn.IResolvable) {
        this._healthCheckEnabled = value;
    }
    public resetHealthCheckEnabled() {
        this._healthCheckEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckEnabledInput() {
        return this._healthCheckEnabled;
    }

    // health_check_interval_seconds - computed: true, optional: true, required: false
    private _healthCheckIntervalSeconds?: number; 
    public get healthCheckIntervalSeconds() {
        return this.getNumberAttribute('health_check_interval_seconds');
    }
    public set healthCheckIntervalSeconds(value: number) {
        this._healthCheckIntervalSeconds = value;
    }
    public resetHealthCheckIntervalSeconds() {
        this._healthCheckIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckIntervalSecondsInput() {
        return this._healthCheckIntervalSeconds;
    }

    // health_check_path - computed: true, optional: true, required: false
    private _healthCheckPath?: string; 
    public get healthCheckPath() {
        return this.getStringAttribute('health_check_path');
    }
    public set healthCheckPath(value: string) {
        this._healthCheckPath = value;
    }
    public resetHealthCheckPath() {
        this._healthCheckPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPathInput() {
        return this._healthCheckPath;
    }

    // health_check_port - computed: true, optional: true, required: false
    private _healthCheckPort?: string; 
    public get healthCheckPort() {
        return this.getStringAttribute('health_check_port');
    }
    public set healthCheckPort(value: string) {
        this._healthCheckPort = value;
    }
    public resetHealthCheckPort() {
        this._healthCheckPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPortInput() {
        return this._healthCheckPort;
    }

    // health_check_protocol - computed: true, optional: true, required: false
    private _healthCheckProtocol?: string; 
    public get healthCheckProtocol() {
        return this.getStringAttribute('health_check_protocol');
    }
    public set healthCheckProtocol(value: string) {
        this._healthCheckProtocol = value;
    }
    public resetHealthCheckProtocol() {
        this._healthCheckProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckProtocolInput() {
        return this._healthCheckProtocol;
    }

    // health_check_timeout_seconds - computed: true, optional: true, required: false
    private _healthCheckTimeoutSeconds?: number; 
    public get healthCheckTimeoutSeconds() {
        return this.getNumberAttribute('health_check_timeout_seconds');
    }
    public set healthCheckTimeoutSeconds(value: number) {
        this._healthCheckTimeoutSeconds = value;
    }
    public resetHealthCheckTimeoutSeconds() {
        this._healthCheckTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckTimeoutSecondsInput() {
        return this._healthCheckTimeoutSeconds;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // load_balancer_arns - computed: true, optional: false, required: false
    public get loadBalancerArns() {
        return this.getListAttribute('load_balancer_arns');
    }

    // matcher - computed: true, optional: true, required: false
    private _matcher = new CcTargetGroup.MatcherPropertyOutputReference(this, "matcher");
    public get matcher() {
        return this._matcher;
    }
    public putMatcher(value: CcTargetGroup.MatcherProperty) {
        this._matcher.internalValue = value;
    }
    public resetMatcher() {
        this._matcher.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matcherInput() {
        return this._matcher.internalValue;
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

    // protocol_version - computed: true, optional: true, required: false
    private _protocolVersion?: string; 
    public get protocolVersion() {
        return this.getStringAttribute('protocol_version');
    }
    public set protocolVersion(value: string) {
        this._protocolVersion = value;
    }
    public resetProtocolVersion() {
        this._protocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolVersionInput() {
        return this._protocolVersion;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTargetGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTargetGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_control_port - computed: true, optional: true, required: false
    private _targetControlPort?: number; 
    public get targetControlPort() {
        return this.getNumberAttribute('target_control_port');
    }
    public set targetControlPort(value: number) {
        this._targetControlPort = value;
    }
    public resetTargetControlPort() {
        this._targetControlPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetControlPortInput() {
        return this._targetControlPort;
    }

    // target_group_arn - computed: true, optional: false, required: false
    public get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }

    // target_group_attributes - computed: true, optional: true, required: false
    private _targetGroupAttributes = new CcTargetGroup.TargetGroupAttributePropertyList(this, "target_group_attributes", true);
    public get targetGroupAttributes() {
        return this._targetGroupAttributes;
    }
    public putTargetGroupAttributes(value: CcTargetGroup.TargetGroupAttributeProperty[] | cdktn.IResolvable) {
        this._targetGroupAttributes.internalValue = value;
    }
    public resetTargetGroupAttributes() {
        this._targetGroupAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupAttributesInput() {
        return this._targetGroupAttributes.internalValue;
    }

    // target_group_full_name - computed: true, optional: false, required: false
    public get targetGroupFullName() {
        return this.getStringAttribute('target_group_full_name');
    }

    // target_group_name - computed: true, optional: false, required: false
    public get targetGroupName() {
        return this.getStringAttribute('target_group_name');
    }

    // target_type - computed: true, optional: true, required: false
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    public resetTargetType() {
        this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }

    // targets - computed: true, optional: true, required: false
    private _targets = new CcTargetGroup.TargetDescriptionPropertyList(this, "targets", true);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcTargetGroup.TargetDescriptionProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    public resetTargets() {
        this._targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
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

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
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
            health_check_enabled: cdktn.booleanToTerraform(this._healthCheckEnabled),
            health_check_interval_seconds: cdktn.numberToTerraform(this._healthCheckIntervalSeconds),
            health_check_path: cdktn.stringToTerraform(this._healthCheckPath),
            health_check_port: cdktn.stringToTerraform(this._healthCheckPort),
            health_check_protocol: cdktn.stringToTerraform(this._healthCheckProtocol),
            health_check_timeout_seconds: cdktn.numberToTerraform(this._healthCheckTimeoutSeconds),
            healthy_threshold_count: cdktn.numberToTerraform(this._healthyThresholdCount),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            matcher: ccTargetGroupMatcherPropertyToTerraform(this._matcher.internalValue),
            name: cdktn.stringToTerraform(this._name),
            port: cdktn.numberToTerraform(this._port),
            protocol: cdktn.stringToTerraform(this._protocol),
            protocol_version: cdktn.stringToTerraform(this._protocolVersion),
            tags: cdktn.listMapper(ccTargetGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            target_control_port: cdktn.numberToTerraform(this._targetControlPort),
            target_group_attributes: cdktn.listMapper(ccTargetGroupTargetGroupAttributePropertyToTerraform, false)(this._targetGroupAttributes.internalValue),
            target_type: cdktn.stringToTerraform(this._targetType),
            targets: cdktn.listMapper(ccTargetGroupTargetDescriptionPropertyToTerraform, false)(this._targets.internalValue),
            unhealthy_threshold_count: cdktn.numberToTerraform(this._unhealthyThresholdCount),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            health_check_enabled: {
                value: cdktn.booleanToHclTerraform(this._healthCheckEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            health_check_interval_seconds: {
                value: cdktn.numberToHclTerraform(this._healthCheckIntervalSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            health_check_path: {
                value: cdktn.stringToHclTerraform(this._healthCheckPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check_port: {
                value: cdktn.stringToHclTerraform(this._healthCheckPort),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check_protocol: {
                value: cdktn.stringToHclTerraform(this._healthCheckProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check_timeout_seconds: {
                value: cdktn.numberToHclTerraform(this._healthCheckTimeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            healthy_threshold_count: {
                value: cdktn.numberToHclTerraform(this._healthyThresholdCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            matcher: {
                value: ccTargetGroupMatcherPropertyToHclTerraform(this._matcher.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTargetGroup.MatcherProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            protocol_version: {
                value: cdktn.stringToHclTerraform(this._protocolVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTargetGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTargetGroup.TagPropertyList",
            },
            target_control_port: {
                value: cdktn.numberToHclTerraform(this._targetControlPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_group_attributes: {
                value: cdktn.listMapperHcl(ccTargetGroupTargetGroupAttributePropertyToHclTerraform, false)(this._targetGroupAttributes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTargetGroup.TargetGroupAttributePropertyList",
            },
            target_type: {
                value: cdktn.stringToHclTerraform(this._targetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            targets: {
                value: cdktn.listMapperHcl(ccTargetGroupTargetDescriptionPropertyToHclTerraform, false)(this._targets.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTargetGroup.TargetDescriptionPropertyList",
            },
            unhealthy_threshold_count: {
                value: cdktn.numberToHclTerraform(this._unhealthyThresholdCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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

export function ccTargetGroupMatcherPropertyToTerraform(struct?: CcTargetGroup.MatcherProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        grpc_code: cdktn.stringToTerraform(struct!.grpcCode),
        http_code: cdktn.stringToTerraform(struct!.httpCode),
    }
}


export function ccTargetGroupMatcherPropertyToHclTerraform(struct?: CcTargetGroup.MatcherProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        grpc_code: {
            value: cdktn.stringToHclTerraform(struct!.grpcCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_code: {
            value: cdktn.stringToHclTerraform(struct!.httpCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTargetGroupTagPropertyToTerraform(struct?: CcTargetGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTargetGroupTagPropertyToHclTerraform(struct?: CcTargetGroup.TagProperty | cdktn.IResolvable): any {
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


export function ccTargetGroupTargetGroupAttributePropertyToTerraform(struct?: CcTargetGroup.TargetGroupAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTargetGroupTargetGroupAttributePropertyToHclTerraform(struct?: CcTargetGroup.TargetGroupAttributeProperty | cdktn.IResolvable): any {
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


export function ccTargetGroupTargetDescriptionPropertyToTerraform(struct?: CcTargetGroup.TargetDescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        id: cdktn.stringToTerraform(struct!.id),
        port: cdktn.numberToTerraform(struct!.port),
        quic_server_id: cdktn.stringToTerraform(struct!.quicServerId),
    }
}


export function ccTargetGroupTargetDescriptionPropertyToHclTerraform(struct?: CcTargetGroup.TargetDescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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
        quic_server_id: {
            value: cdktn.stringToHclTerraform(struct!.quicServerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTargetGroup {
export interface MatcherProperty {
    /**
    * You can specify values between 0 and 99. You can specify multiple values, or a range of values. The default value is 12.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#grpc_code CcTargetGroup#grpc_code}
    */
    readonly grpcCode?: string;
    /**
    * For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values or a range of values. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#http_code CcTargetGroup#http_code}
    */
    readonly httpCode?: string;
}
export class MatcherPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatcherProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._grpcCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.grpcCode = this._grpcCode;
        }
        if (this._httpCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpCode = this._httpCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatcherProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._grpcCode = undefined;
            this._httpCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._grpcCode = value.grpcCode;
            this._httpCode = value.httpCode;
        }
    }

    // grpc_code - computed: true, optional: true, required: false
    private _grpcCode?: string; 
    public get grpcCode() {
        return this.getStringAttribute('grpc_code');
    }
    public set grpcCode(value: string) {
        this._grpcCode = value;
    }
    public resetGrpcCode() {
        this._grpcCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcCodeInput() {
        return this._grpcCode;
    }

    // http_code - computed: true, optional: true, required: false
    private _httpCode?: string; 
    public get httpCode() {
        return this.getStringAttribute('http_code');
    }
    public set httpCode(value: string) {
        this._httpCode = value;
    }
    public resetHttpCode() {
        this._httpCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpCodeInput() {
        return this._httpCode;
    }
}
export interface TagProperty {
    /**
    * The value for the tag. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#key CcTargetGroup#key}
    */
    readonly key?: string;
    /**
    * The key name of the tag. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#value CcTargetGroup#value}
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
export interface TargetGroupAttributeProperty {
    /**
    * The value of the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#key CcTargetGroup#key}
    */
    readonly key?: string;
    /**
    * The name of the attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#value CcTargetGroup#value}
    */
    readonly value?: string;
}
export class TargetGroupAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupAttributeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TargetGroupAttributeProperty | cdktn.IResolvable | undefined) {
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

export class TargetGroupAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupAttributePropertyOutputReference {
        return new TargetGroupAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetDescriptionProperty {
    /**
    * An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#availability_zone CcTargetGroup#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#id CcTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#port CcTargetGroup#port}
    */
    readonly port?: number;
    /**
    * The Server ID used by targets when using QUIC or TCP_QUIC protocols.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancingv2_target_group#quic_server_id CcTargetGroup#quic_server_id}
    */
    readonly quicServerId?: string;
}
export class TargetDescriptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetDescriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._quicServerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.quicServerId = this._quicServerId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetDescriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._id = undefined;
            this._port = undefined;
            this._quicServerId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._id = value.id;
            this._port = value.port;
            this._quicServerId = value.quicServerId;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
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

    // quic_server_id - computed: true, optional: true, required: false
    private _quicServerId?: string; 
    public get quicServerId() {
        return this.getStringAttribute('quic_server_id');
    }
    public set quicServerId(value: string) {
        this._quicServerId = value;
    }
    public resetQuicServerId() {
        this._quicServerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quicServerIdInput() {
        return this._quicServerId;
    }
}

export class TargetDescriptionPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetDescriptionProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetDescriptionPropertyOutputReference {
        return new TargetDescriptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
