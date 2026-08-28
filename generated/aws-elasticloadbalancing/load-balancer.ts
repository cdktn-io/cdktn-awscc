// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoadBalancerProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about where and how access logs are stored for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#access_logging_policy CcLoadBalancer#access_logging_policy}
    */
    readonly accessLoggingPolicy?: CcLoadBalancer.AccessLoggingPolicyProperty;
    /**
    * Information about a policy for application-controlled session stickiness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#app_cookie_stickiness_policy CcLoadBalancer#app_cookie_stickiness_policy}
    */
    readonly appCookieStickinessPolicy?: CcLoadBalancer.AppCookieStickinessPolicyProperty[] | cdktn.IResolvable;
    /**
    * The Availability Zones for a load balancer in a default VPC. For a load balancer in a nondefault VPC, specify Subnets instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#availability_zones CcLoadBalancer#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#connection_draining_policy CcLoadBalancer#connection_draining_policy}
    */
    readonly connectionDrainingPolicy?: CcLoadBalancer.ConnectionDrainingPolicyProperty;
    /**
    * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#connection_settings CcLoadBalancer#connection_settings}
    */
    readonly connectionSettings?: CcLoadBalancer.ConnectionSettingsProperty;
    /**
    * If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#cross_zone CcLoadBalancer#cross_zone}
    */
    readonly crossZone?: boolean | cdktn.IResolvable;
    /**
    * The health check settings to use when evaluating the health of your EC2 instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#health_check CcLoadBalancer#health_check}
    */
    readonly healthCheck?: CcLoadBalancer.HealthCheckProperty;
    /**
    * The IDs of the instances for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#instances CcLoadBalancer#instances}
    */
    readonly instances?: string[];
    /**
    * Information about a policy for duration-based session stickiness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#lb_cookie_stickiness_policy CcLoadBalancer#lb_cookie_stickiness_policy}
    */
    readonly lbCookieStickinessPolicy?: CcLoadBalancer.LBCookieStickinessPolicyProperty[] | cdktn.IResolvable;
    /**
    * The Listeners for the load balancer. You can specify at most one listener per port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#listeners CcLoadBalancer#listeners}
    */
    readonly listeners: CcLoadBalancer.ListenersProperty[] | cdktn.IResolvable;
    /**
    * The name of the load balancer. This name must be unique within your set of load balancers for the region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#load_balancer_name CcLoadBalancer#load_balancer_name}
    */
    readonly loadBalancerName?: string;
    /**
    * The policies defined for your Classic Load Balancer. Specify only back-end server policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#policies CcLoadBalancer#policies}
    */
    readonly policies?: CcLoadBalancer.PoliciesProperty[] | cdktn.IResolvable;
    /**
    * The type of load balancer. Valid only for load balancers in a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#scheme CcLoadBalancer#scheme}
    */
    readonly scheme?: string;
    /**
    * The security groups for the load balancer. Valid only for load balancers in a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#security_groups CcLoadBalancer#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#subnets CcLoadBalancer#subnets}
    */
    readonly subnets?: string[];
    /**
    * The tags associated with a load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#tags CcLoadBalancer#tags}
    */
    readonly tags?: CcLoadBalancer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}
*/
export class CcLoadBalancer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancing_load_balancer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLoadBalancer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLoadBalancer to import
    * @param importFromId The id of the existing CcLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLoadBalancer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancing_load_balancer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoadBalancerProps
    */
    public constructor(scope: Construct, id: string, config: CcLoadBalancerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancing_load_balancer',
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
        this._accessLoggingPolicy.internalValue = config.accessLoggingPolicy;
        this._appCookieStickinessPolicy.internalValue = config.appCookieStickinessPolicy;
        this._availabilityZones = config.availabilityZones;
        this._connectionDrainingPolicy.internalValue = config.connectionDrainingPolicy;
        this._connectionSettings.internalValue = config.connectionSettings;
        this._crossZone = config.crossZone;
        this._healthCheck.internalValue = config.healthCheck;
        this._instances = config.instances;
        this._lbCookieStickinessPolicy.internalValue = config.lbCookieStickinessPolicy;
        this._listeners.internalValue = config.listeners;
        this._loadBalancerName = config.loadBalancerName;
        this._policies.internalValue = config.policies;
        this._scheme = config.scheme;
        this._securityGroups = config.securityGroups;
        this._subnets = config.subnets;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_logging_policy - computed: true, optional: true, required: false
    private _accessLoggingPolicy = new CcLoadBalancer.AccessLoggingPolicyPropertyOutputReference(this, "access_logging_policy");
    public get accessLoggingPolicy() {
        return this._accessLoggingPolicy;
    }
    public putAccessLoggingPolicy(value: CcLoadBalancer.AccessLoggingPolicyProperty) {
        this._accessLoggingPolicy.internalValue = value;
    }
    public resetAccessLoggingPolicy() {
        this._accessLoggingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLoggingPolicyInput() {
        return this._accessLoggingPolicy.internalValue;
    }

    // app_cookie_stickiness_policy - computed: true, optional: true, required: false
    private _appCookieStickinessPolicy = new CcLoadBalancer.AppCookieStickinessPolicyPropertyList(this, "app_cookie_stickiness_policy", false);
    public get appCookieStickinessPolicy() {
        return this._appCookieStickinessPolicy;
    }
    public putAppCookieStickinessPolicy(value: CcLoadBalancer.AppCookieStickinessPolicyProperty[] | cdktn.IResolvable) {
        this._appCookieStickinessPolicy.internalValue = value;
    }
    public resetAppCookieStickinessPolicy() {
        this._appCookieStickinessPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appCookieStickinessPolicyInput() {
        return this._appCookieStickinessPolicy.internalValue;
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

    // canonical_hosted_zone_name - computed: true, optional: false, required: false
    public get canonicalHostedZoneName() {
        return this.getStringAttribute('canonical_hosted_zone_name');
    }

    // canonical_hosted_zone_name_id - computed: true, optional: false, required: false
    public get canonicalHostedZoneNameId() {
        return this.getStringAttribute('canonical_hosted_zone_name_id');
    }

    // connection_draining_policy - computed: true, optional: true, required: false
    private _connectionDrainingPolicy = new CcLoadBalancer.ConnectionDrainingPolicyPropertyOutputReference(this, "connection_draining_policy");
    public get connectionDrainingPolicy() {
        return this._connectionDrainingPolicy;
    }
    public putConnectionDrainingPolicy(value: CcLoadBalancer.ConnectionDrainingPolicyProperty) {
        this._connectionDrainingPolicy.internalValue = value;
    }
    public resetConnectionDrainingPolicy() {
        this._connectionDrainingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionDrainingPolicyInput() {
        return this._connectionDrainingPolicy.internalValue;
    }

    // connection_settings - computed: true, optional: true, required: false
    private _connectionSettings = new CcLoadBalancer.ConnectionSettingsPropertyOutputReference(this, "connection_settings");
    public get connectionSettings() {
        return this._connectionSettings;
    }
    public putConnectionSettings(value: CcLoadBalancer.ConnectionSettingsProperty) {
        this._connectionSettings.internalValue = value;
    }
    public resetConnectionSettings() {
        this._connectionSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionSettingsInput() {
        return this._connectionSettings.internalValue;
    }

    // cross_zone - computed: true, optional: true, required: false
    private _crossZone?: boolean | cdktn.IResolvable; 
    public get crossZone() {
        return this.getBooleanAttribute('cross_zone');
    }
    public set crossZone(value: boolean | cdktn.IResolvable) {
        this._crossZone = value;
    }
    public resetCrossZone() {
        this._crossZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossZoneInput() {
        return this._crossZone;
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }

    // health_check - computed: true, optional: true, required: false
    private _healthCheck = new CcLoadBalancer.HealthCheckPropertyOutputReference(this, "health_check");
    public get healthCheck() {
        return this._healthCheck;
    }
    public putHealthCheck(value: CcLoadBalancer.HealthCheckProperty) {
        this._healthCheck.internalValue = value;
    }
    public resetHealthCheck() {
        this._healthCheck.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
        return this._healthCheck.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instances - computed: true, optional: true, required: false
    private _instances?: string[]; 
    public get instances() {
        return this.getListAttribute('instances');
    }
    public set instances(value: string[]) {
        this._instances = value;
    }
    public resetInstances() {
        this._instances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancesInput() {
        return this._instances;
    }

    // lb_cookie_stickiness_policy - computed: true, optional: true, required: false
    private _lbCookieStickinessPolicy = new CcLoadBalancer.LBCookieStickinessPolicyPropertyList(this, "lb_cookie_stickiness_policy", false);
    public get lbCookieStickinessPolicy() {
        return this._lbCookieStickinessPolicy;
    }
    public putLbCookieStickinessPolicy(value: CcLoadBalancer.LBCookieStickinessPolicyProperty[] | cdktn.IResolvable) {
        this._lbCookieStickinessPolicy.internalValue = value;
    }
    public resetLbCookieStickinessPolicy() {
        this._lbCookieStickinessPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lbCookieStickinessPolicyInput() {
        return this._lbCookieStickinessPolicy.internalValue;
    }

    // listeners - computed: false, optional: false, required: true
    private _listeners = new CcLoadBalancer.ListenersPropertyList(this, "listeners", false);
    public get listeners() {
        return this._listeners;
    }
    public putListeners(value: CcLoadBalancer.ListenersProperty[] | cdktn.IResolvable) {
        this._listeners.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenersInput() {
        return this._listeners.internalValue;
    }

    // load_balancer_name - computed: true, optional: true, required: false
    private _loadBalancerName?: string; 
    public get loadBalancerName() {
        return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
        this._loadBalancerName = value;
    }
    public resetLoadBalancerName() {
        this._loadBalancerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
        return this._loadBalancerName;
    }

    // policies - computed: true, optional: true, required: false
    private _policies = new CcLoadBalancer.PoliciesPropertyList(this, "policies", false);
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: CcLoadBalancer.PoliciesProperty[] | cdktn.IResolvable) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }

    // scheme - computed: true, optional: true, required: false
    private _scheme?: string; 
    public get scheme() {
        return this.getStringAttribute('scheme');
    }
    public set scheme(value: string) {
        this._scheme = value;
    }
    public resetScheme() {
        this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemeInput() {
        return this._scheme;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
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

    // source_security_group - computed: true, optional: false, required: false
    private _sourceSecurityGroup = new CcLoadBalancer.SourceSecurityGroupPropertyOutputReference(this, "source_security_group");
    public get sourceSecurityGroup() {
        return this._sourceSecurityGroup;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLoadBalancer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLoadBalancer.TagProperty[] | cdktn.IResolvable) {
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
            access_logging_policy: ccLoadBalancerAccessLoggingPolicyPropertyToTerraform(this._accessLoggingPolicy.internalValue),
            app_cookie_stickiness_policy: cdktn.listMapper(ccLoadBalancerAppCookieStickinessPolicyPropertyToTerraform, false)(this._appCookieStickinessPolicy.internalValue),
            availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
            connection_draining_policy: ccLoadBalancerConnectionDrainingPolicyPropertyToTerraform(this._connectionDrainingPolicy.internalValue),
            connection_settings: ccLoadBalancerConnectionSettingsPropertyToTerraform(this._connectionSettings.internalValue),
            cross_zone: cdktn.booleanToTerraform(this._crossZone),
            health_check: ccLoadBalancerHealthCheckPropertyToTerraform(this._healthCheck.internalValue),
            instances: cdktn.listMapper(cdktn.stringToTerraform, false)(this._instances),
            lb_cookie_stickiness_policy: cdktn.listMapper(ccLoadBalancerLBCookieStickinessPolicyPropertyToTerraform, false)(this._lbCookieStickinessPolicy.internalValue),
            listeners: cdktn.listMapper(ccLoadBalancerListenersPropertyToTerraform, false)(this._listeners.internalValue),
            load_balancer_name: cdktn.stringToTerraform(this._loadBalancerName),
            policies: cdktn.listMapper(ccLoadBalancerPoliciesPropertyToTerraform, false)(this._policies.internalValue),
            scheme: cdktn.stringToTerraform(this._scheme),
            security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
            subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnets),
            tags: cdktn.listMapper(ccLoadBalancerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_logging_policy: {
                value: ccLoadBalancerAccessLoggingPolicyPropertyToHclTerraform(this._accessLoggingPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoadBalancer.AccessLoggingPolicyProperty",
            },
            app_cookie_stickiness_policy: {
                value: cdktn.listMapperHcl(ccLoadBalancerAppCookieStickinessPolicyPropertyToHclTerraform, false)(this._appCookieStickinessPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoadBalancer.AppCookieStickinessPolicyPropertyList",
            },
            availability_zones: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            connection_draining_policy: {
                value: ccLoadBalancerConnectionDrainingPolicyPropertyToHclTerraform(this._connectionDrainingPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoadBalancer.ConnectionDrainingPolicyProperty",
            },
            connection_settings: {
                value: ccLoadBalancerConnectionSettingsPropertyToHclTerraform(this._connectionSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoadBalancer.ConnectionSettingsProperty",
            },
            cross_zone: {
                value: cdktn.booleanToHclTerraform(this._crossZone),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            health_check: {
                value: ccLoadBalancerHealthCheckPropertyToHclTerraform(this._healthCheck.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoadBalancer.HealthCheckProperty",
            },
            instances: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._instances),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            lb_cookie_stickiness_policy: {
                value: cdktn.listMapperHcl(ccLoadBalancerLBCookieStickinessPolicyPropertyToHclTerraform, false)(this._lbCookieStickinessPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoadBalancer.LBCookieStickinessPolicyPropertyList",
            },
            listeners: {
                value: cdktn.listMapperHcl(ccLoadBalancerListenersPropertyToHclTerraform, false)(this._listeners.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoadBalancer.ListenersPropertyList",
            },
            load_balancer_name: {
                value: cdktn.stringToHclTerraform(this._loadBalancerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policies: {
                value: cdktn.listMapperHcl(ccLoadBalancerPoliciesPropertyToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoadBalancer.PoliciesPropertyList",
            },
            scheme: {
                value: cdktn.stringToHclTerraform(this._scheme),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subnets: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnets),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLoadBalancerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLoadBalancer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLoadBalancerAccessLoggingPolicyPropertyToTerraform(struct?: CcLoadBalancer.AccessLoggingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        emit_interval: cdktn.numberToTerraform(struct!.emitInterval),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
        s3_bucket_prefix: cdktn.stringToTerraform(struct!.s3BucketPrefix),
    }
}


export function ccLoadBalancerAccessLoggingPolicyPropertyToHclTerraform(struct?: CcLoadBalancer.AccessLoggingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        emit_interval: {
            value: cdktn.numberToHclTerraform(struct!.emitInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerAppCookieStickinessPolicyPropertyToTerraform(struct?: CcLoadBalancer.AppCookieStickinessPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cookie_name: cdktn.stringToTerraform(struct!.cookieName),
        policy_name: cdktn.stringToTerraform(struct!.policyName),
    }
}


export function ccLoadBalancerAppCookieStickinessPolicyPropertyToHclTerraform(struct?: CcLoadBalancer.AppCookieStickinessPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cookie_name: {
            value: cdktn.stringToHclTerraform(struct!.cookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_name: {
            value: cdktn.stringToHclTerraform(struct!.policyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerConnectionDrainingPolicyPropertyToTerraform(struct?: CcLoadBalancer.ConnectionDrainingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        timeout: cdktn.numberToTerraform(struct!.timeout),
    }
}


export function ccLoadBalancerConnectionDrainingPolicyPropertyToHclTerraform(struct?: CcLoadBalancer.ConnectionDrainingPolicyProperty | cdktn.IResolvable): any {
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
        timeout: {
            value: cdktn.numberToHclTerraform(struct!.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerConnectionSettingsPropertyToTerraform(struct?: CcLoadBalancer.ConnectionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_timeout: cdktn.numberToTerraform(struct!.idleTimeout),
    }
}


export function ccLoadBalancerConnectionSettingsPropertyToHclTerraform(struct?: CcLoadBalancer.ConnectionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_timeout: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerHealthCheckPropertyToTerraform(struct?: CcLoadBalancer.HealthCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        healthy_threshold: cdktn.stringToTerraform(struct!.healthyThreshold),
        interval: cdktn.stringToTerraform(struct!.interval),
        target: cdktn.stringToTerraform(struct!.target),
        timeout: cdktn.stringToTerraform(struct!.timeout),
        unhealthy_threshold: cdktn.stringToTerraform(struct!.unhealthyThreshold),
    }
}


export function ccLoadBalancerHealthCheckPropertyToHclTerraform(struct?: CcLoadBalancer.HealthCheckProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        healthy_threshold: {
            value: cdktn.stringToHclTerraform(struct!.healthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        interval: {
            value: cdktn.stringToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktn.stringToHclTerraform(struct!.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unhealthy_threshold: {
            value: cdktn.stringToHclTerraform(struct!.unhealthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerLBCookieStickinessPolicyPropertyToTerraform(struct?: CcLoadBalancer.LBCookieStickinessPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cookie_expiration_period: cdktn.stringToTerraform(struct!.cookieExpirationPeriod),
        policy_name: cdktn.stringToTerraform(struct!.policyName),
    }
}


export function ccLoadBalancerLBCookieStickinessPolicyPropertyToHclTerraform(struct?: CcLoadBalancer.LBCookieStickinessPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cookie_expiration_period: {
            value: cdktn.stringToHclTerraform(struct!.cookieExpirationPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_name: {
            value: cdktn.stringToHclTerraform(struct!.policyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerListenersPropertyToTerraform(struct?: CcLoadBalancer.ListenersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_port: cdktn.stringToTerraform(struct!.instancePort),
        instance_protocol: cdktn.stringToTerraform(struct!.instanceProtocol),
        load_balancer_port: cdktn.stringToTerraform(struct!.loadBalancerPort),
        policy_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policyNames),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        ssl_certificate_id: cdktn.stringToTerraform(struct!.sslCertificateId),
    }
}


export function ccLoadBalancerListenersPropertyToHclTerraform(struct?: CcLoadBalancer.ListenersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_port: {
            value: cdktn.stringToHclTerraform(struct!.instancePort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_protocol: {
            value: cdktn.stringToHclTerraform(struct!.instanceProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        load_balancer_port: {
            value: cdktn.stringToHclTerraform(struct!.loadBalancerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policyNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_certificate_id: {
            value: cdktn.stringToHclTerraform(struct!.sslCertificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerPolicyItemPropertyToTerraform(struct?: CcLoadBalancer.PolicyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLoadBalancerPolicyItemPropertyToHclTerraform(struct?: CcLoadBalancer.PolicyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccLoadBalancerPoliciesPropertyToTerraform(struct?: CcLoadBalancer.PoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.listMapper(ccLoadBalancerPolicyItemPropertyToTerraform, false)(struct!.attributes),
        instance_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instancePorts),
        load_balancer_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.loadBalancerPorts),
        policy_name: cdktn.stringToTerraform(struct!.policyName),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
    }
}


export function ccLoadBalancerPoliciesPropertyToHclTerraform(struct?: CcLoadBalancer.PoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.listMapperHcl(ccLoadBalancerPolicyItemPropertyToHclTerraform, false)(struct!.attributes),
            isBlock: true,
            type: "list",
            storageClassType: "PolicyItemPropertyList",
        },
        instance_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instancePorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        load_balancer_ports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.loadBalancerPorts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        policy_name: {
            value: cdktn.stringToHclTerraform(struct!.policyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_type: {
            value: cdktn.stringToHclTerraform(struct!.policyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoadBalancerSourceSecurityGroupPropertyToTerraform(struct?: CcLoadBalancer.SourceSecurityGroupProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLoadBalancerSourceSecurityGroupPropertyToHclTerraform(struct?: CcLoadBalancer.SourceSecurityGroupProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLoadBalancerTagPropertyToTerraform(struct?: CcLoadBalancer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLoadBalancerTagPropertyToHclTerraform(struct?: CcLoadBalancer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLoadBalancer {
export interface AccessLoggingPolicyProperty {
    /**
    * The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.
    * 
    * Default: 60 minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#emit_interval CcLoadBalancer#emit_interval}
    */
    readonly emitInterval?: number;
    /**
    * Specifies whether access logs are enabled for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#enabled CcLoadBalancer#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the Amazon S3 bucket where the access logs are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_name CcLoadBalancer#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. If the prefix is not provided, the log is placed at the root level of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_prefix CcLoadBalancer#s3_bucket_prefix}
    */
    readonly s3BucketPrefix?: string;
}
export class AccessLoggingPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessLoggingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emitInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.emitInterval = this._emitInterval;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._s3BucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketPrefix = this._s3BucketPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessLoggingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emitInterval = undefined;
            this._enabled = undefined;
            this._s3BucketName = undefined;
            this._s3BucketPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emitInterval = value.emitInterval;
            this._enabled = value.enabled;
            this._s3BucketName = value.s3BucketName;
            this._s3BucketPrefix = value.s3BucketPrefix;
        }
    }

    // emit_interval - computed: true, optional: true, required: false
    private _emitInterval?: number; 
    public get emitInterval() {
        return this.getNumberAttribute('emit_interval');
    }
    public set emitInterval(value: number) {
        this._emitInterval = value;
    }
    public resetEmitInterval() {
        this._emitInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emitIntervalInput() {
        return this._emitInterval;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }

    // s3_bucket_prefix - computed: true, optional: true, required: false
    private _s3BucketPrefix?: string; 
    public get s3BucketPrefix() {
        return this.getStringAttribute('s3_bucket_prefix');
    }
    public set s3BucketPrefix(value: string) {
        this._s3BucketPrefix = value;
    }
    public resetS3BucketPrefix() {
        this._s3BucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketPrefixInput() {
        return this._s3BucketPrefix;
    }
}
export interface AppCookieStickinessPolicyProperty {
    /**
    * The name of the application cookie used for stickiness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#cookie_name CcLoadBalancer#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#policy_name CcLoadBalancer#policy_name}
    */
    readonly policyName?: string;
}
export class AppCookieStickinessPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AppCookieStickinessPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieName = this._cookieName;
        }
        if (this._policyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyName = this._policyName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppCookieStickinessPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cookieName = undefined;
            this._policyName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cookieName = value.cookieName;
            this._policyName = value.policyName;
        }
    }

    // cookie_name - computed: true, optional: true, required: false
    private _cookieName?: string; 
    public get cookieName() {
        return this.getStringAttribute('cookie_name');
    }
    public set cookieName(value: string) {
        this._cookieName = value;
    }
    public resetCookieName() {
        this._cookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieNameInput() {
        return this._cookieName;
    }

    // policy_name - computed: true, optional: true, required: false
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    public resetPolicyName() {
        this._policyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }
}

export class AppCookieStickinessPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : AppCookieStickinessPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): AppCookieStickinessPolicyPropertyOutputReference {
        return new AppCookieStickinessPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConnectionDrainingPolicyProperty {
    /**
    * Specifies whether connection draining is enabled for the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#enabled CcLoadBalancer#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#timeout CcLoadBalancer#timeout}
    */
    readonly timeout?: number;
}
export class ConnectionDrainingPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionDrainingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionDrainingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._timeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._timeout = value.timeout;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }
}
export interface ConnectionSettingsProperty {
    /**
    * The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#idle_timeout CcLoadBalancer#idle_timeout}
    */
    readonly idleTimeout?: number;
}
export class ConnectionSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeout = this._idleTimeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleTimeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleTimeout = value.idleTimeout;
        }
    }

    // idle_timeout - computed: true, optional: true, required: false
    private _idleTimeout?: number; 
    public get idleTimeout() {
        return this.getNumberAttribute('idle_timeout');
    }
    public set idleTimeout(value: number) {
        this._idleTimeout = value;
    }
    public resetIdleTimeout() {
        this._idleTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInput() {
        return this._idleTimeout;
    }
}
export interface HealthCheckProperty {
    /**
    * The number of consecutive health checks successes required before moving the instance to the `Healthy` state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#healthy_threshold CcLoadBalancer#healthy_threshold}
    */
    readonly healthyThreshold?: string;
    /**
    * The approximate interval, in seconds, between health checks of an individual instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#interval CcLoadBalancer#interval}
    */
    readonly interval?: string;
    /**
    * The instance being checked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#target CcLoadBalancer#target}
    */
    readonly target?: string;
    /**
    * The amount of time, in seconds, during which no response means a failed health check.
    * 
    * This value must be less than the `Interval` value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#timeout CcLoadBalancer#timeout}
    */
    readonly timeout?: string;
    /**
    * The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#unhealthy_threshold CcLoadBalancer#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: string;
}
export class HealthCheckPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        if (this._unhealthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthyThreshold = undefined;
            this._interval = undefined;
            this._target = undefined;
            this._timeout = undefined;
            this._unhealthyThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthyThreshold = value.healthyThreshold;
            this._interval = value.interval;
            this._target = value.target;
            this._timeout = value.timeout;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }

    // healthy_threshold - computed: true, optional: true, required: false
    private _healthyThreshold?: string; 
    public get healthyThreshold() {
        return this.getStringAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: string) {
        this._healthyThreshold = value;
    }
    public resetHealthyThreshold() {
        this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
        return this._healthyThreshold;
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: string; 
    public get interval() {
        return this.getStringAttribute('interval');
    }
    public set interval(value: string) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: string; 
    public get timeout() {
        return this.getStringAttribute('timeout');
    }
    public set timeout(value: string) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }

    // unhealthy_threshold - computed: true, optional: true, required: false
    private _unhealthyThreshold?: string; 
    public get unhealthyThreshold() {
        return this.getStringAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: string) {
        this._unhealthyThreshold = value;
    }
    public resetUnhealthyThreshold() {
        this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
export interface LBCookieStickinessPolicyProperty {
    /**
    * The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#cookie_expiration_period CcLoadBalancer#cookie_expiration_period}
    */
    readonly cookieExpirationPeriod?: string;
    /**
    * The name of the policy. This name must be unique within the set of policies for this load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#policy_name CcLoadBalancer#policy_name}
    */
    readonly policyName?: string;
}
export class LBCookieStickinessPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LBCookieStickinessPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cookieExpirationPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieExpirationPeriod = this._cookieExpirationPeriod;
        }
        if (this._policyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyName = this._policyName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LBCookieStickinessPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cookieExpirationPeriod = undefined;
            this._policyName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cookieExpirationPeriod = value.cookieExpirationPeriod;
            this._policyName = value.policyName;
        }
    }

    // cookie_expiration_period - computed: true, optional: true, required: false
    private _cookieExpirationPeriod?: string; 
    public get cookieExpirationPeriod() {
        return this.getStringAttribute('cookie_expiration_period');
    }
    public set cookieExpirationPeriod(value: string) {
        this._cookieExpirationPeriod = value;
    }
    public resetCookieExpirationPeriod() {
        this._cookieExpirationPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieExpirationPeriodInput() {
        return this._cookieExpirationPeriod;
    }

    // policy_name - computed: true, optional: true, required: false
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    public resetPolicyName() {
        this._policyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }
}

export class LBCookieStickinessPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : LBCookieStickinessPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): LBCookieStickinessPolicyPropertyOutputReference {
        return new LBCookieStickinessPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ListenersProperty {
    /**
    * The port on which the instance is listening.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#instance_port CcLoadBalancer#instance_port}
    */
    readonly instancePort: string;
    /**
    * The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.
    * 
    * If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.
    * 
    * If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.
    * 
    * If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#instance_protocol CcLoadBalancer#instance_protocol}
    */
    readonly instanceProtocol?: string;
    /**
    * The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#load_balancer_port CcLoadBalancer#load_balancer_port}
    */
    readonly loadBalancerPort: string;
    /**
    * The names of the policies to associate with the listener.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#policy_names CcLoadBalancer#policy_names}
    */
    readonly policyNames?: string[];
    /**
    * The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#protocol CcLoadBalancer#protocol}
    */
    readonly protocol: string;
    /**
    * The Amazon Resource Name (ARN) of the server certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#ssl_certificate_id CcLoadBalancer#ssl_certificate_id}
    */
    readonly sslCertificateId?: string;
}
export class ListenersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ListenersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instancePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePort = this._instancePort;
        }
        if (this._instanceProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceProtocol = this._instanceProtocol;
        }
        if (this._loadBalancerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadBalancerPort = this._loadBalancerPort;
        }
        if (this._policyNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyNames = this._policyNames;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._sslCertificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslCertificateId = this._sslCertificateId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ListenersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instancePort = undefined;
            this._instanceProtocol = undefined;
            this._loadBalancerPort = undefined;
            this._policyNames = undefined;
            this._protocol = undefined;
            this._sslCertificateId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instancePort = value.instancePort;
            this._instanceProtocol = value.instanceProtocol;
            this._loadBalancerPort = value.loadBalancerPort;
            this._policyNames = value.policyNames;
            this._protocol = value.protocol;
            this._sslCertificateId = value.sslCertificateId;
        }
    }

    // instance_port - computed: false, optional: false, required: true
    private _instancePort?: string; 
    public get instancePort() {
        return this.getStringAttribute('instance_port');
    }
    public set instancePort(value: string) {
        this._instancePort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePortInput() {
        return this._instancePort;
    }

    // instance_protocol - computed: true, optional: true, required: false
    private _instanceProtocol?: string; 
    public get instanceProtocol() {
        return this.getStringAttribute('instance_protocol');
    }
    public set instanceProtocol(value: string) {
        this._instanceProtocol = value;
    }
    public resetInstanceProtocol() {
        this._instanceProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProtocolInput() {
        return this._instanceProtocol;
    }

    // load_balancer_port - computed: false, optional: false, required: true
    private _loadBalancerPort?: string; 
    public get loadBalancerPort() {
        return this.getStringAttribute('load_balancer_port');
    }
    public set loadBalancerPort(value: string) {
        this._loadBalancerPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerPortInput() {
        return this._loadBalancerPort;
    }

    // policy_names - computed: true, optional: true, required: false
    private _policyNames?: string[]; 
    public get policyNames() {
        return this.getListAttribute('policy_names');
    }
    public set policyNames(value: string[]) {
        this._policyNames = value;
    }
    public resetPolicyNames() {
        this._policyNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNamesInput() {
        return this._policyNames;
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

    // ssl_certificate_id - computed: true, optional: true, required: false
    private _sslCertificateId?: string; 
    public get sslCertificateId() {
        return this.getStringAttribute('ssl_certificate_id');
    }
    public set sslCertificateId(value: string) {
        this._sslCertificateId = value;
    }
    public resetSslCertificateId() {
        this._sslCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslCertificateIdInput() {
        return this._sslCertificateId;
    }
}

export class ListenersPropertyList extends cdktn.ComplexList {
    public internalValue? : ListenersProperty[] | cdktn.IResolvable

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
    public get(index: number): ListenersPropertyOutputReference {
        return new ListenersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PolicyItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#name CcLoadBalancer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#value CcLoadBalancer#value}
    */
    readonly value?: string;
}
export class PolicyItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PolicyItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class PolicyItemPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyItemProperty[] | cdktn.IResolvable

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
    public get(index: number): PolicyItemPropertyOutputReference {
        return new PolicyItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PoliciesProperty {
    /**
    * The policy attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#attributes CcLoadBalancer#attributes}
    */
    readonly attributes?: PolicyItemProperty[] | cdktn.IResolvable;
    /**
    * The instance ports for the policy. Required only for some policy types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#instance_ports CcLoadBalancer#instance_ports}
    */
    readonly instancePorts?: string[];
    /**
    * The load balancer ports for the policy. Required only for some policy types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#load_balancer_ports CcLoadBalancer#load_balancer_ports}
    */
    readonly loadBalancerPorts?: string[];
    /**
    * The name of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#policy_name CcLoadBalancer#policy_name}
    */
    readonly policyName?: string;
    /**
    * The name of the policy type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#policy_type CcLoadBalancer#policy_type}
    */
    readonly policyType?: string;
}
export class PoliciesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes?.internalValue;
        }
        if (this._instancePorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePorts = this._instancePorts;
        }
        if (this._loadBalancerPorts !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadBalancerPorts = this._loadBalancerPorts;
        }
        if (this._policyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyName = this._policyName;
        }
        if (this._policyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyType = this._policyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes.internalValue = undefined;
            this._instancePorts = undefined;
            this._loadBalancerPorts = undefined;
            this._policyName = undefined;
            this._policyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes.internalValue = value.attributes;
            this._instancePorts = value.instancePorts;
            this._loadBalancerPorts = value.loadBalancerPorts;
            this._policyName = value.policyName;
            this._policyType = value.policyType;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes = new PolicyItemPropertyList(this, "attributes", false);
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: PolicyItemProperty[] | cdktn.IResolvable) {
        this._attributes.internalValue = value;
    }
    public resetAttributes() {
        this._attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }

    // instance_ports - computed: true, optional: true, required: false
    private _instancePorts?: string[]; 
    public get instancePorts() {
        return this.getListAttribute('instance_ports');
    }
    public set instancePorts(value: string[]) {
        this._instancePorts = value;
    }
    public resetInstancePorts() {
        this._instancePorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePortsInput() {
        return this._instancePorts;
    }

    // load_balancer_ports - computed: true, optional: true, required: false
    private _loadBalancerPorts?: string[]; 
    public get loadBalancerPorts() {
        return this.getListAttribute('load_balancer_ports');
    }
    public set loadBalancerPorts(value: string[]) {
        this._loadBalancerPorts = value;
    }
    public resetLoadBalancerPorts() {
        this._loadBalancerPorts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerPortsInput() {
        return this._loadBalancerPorts;
    }

    // policy_name - computed: true, optional: true, required: false
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    public resetPolicyName() {
        this._policyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }
}

export class PoliciesPropertyList extends cdktn.ComplexList {
    public internalValue? : PoliciesProperty[] | cdktn.IResolvable

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
    public get(index: number): PoliciesPropertyOutputReference {
        return new PoliciesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceSecurityGroupProperty {
}
export class SourceSecurityGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceSecurityGroupProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceSecurityGroupProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // group_name - computed: true, optional: false, required: false
    public get groupName() {
        return this.getStringAttribute('group_name');
    }

    // owner_alias - computed: true, optional: false, required: false
    public get ownerAlias() {
        return this.getStringAttribute('owner_alias');
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#key CcLoadBalancer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticloadbalancing_load_balancer#value CcLoadBalancer#value}
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
