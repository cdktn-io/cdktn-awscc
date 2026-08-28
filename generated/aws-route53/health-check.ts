// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHealthCheckProps extends cdktn.TerraformMetaArguments {
    /**
    * A complex type that contains information about the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#health_check_config CcHealthCheck#health_check_config}
    */
    readonly healthCheckConfig: CcHealthCheck.HealthCheckConfigProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#health_check_tags CcHealthCheck#health_check_tags}
    */
    readonly healthCheckTags?: CcHealthCheck.HealthCheckTagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check awscc_route53_health_check}
*/
export class CcHealthCheck extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_health_check";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHealthCheck resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHealthCheck to import
    * @param importFromId The id of the existing CcHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHealthCheck to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_health_check", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check awscc_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHealthCheckProps
    */
    public constructor(scope: Construct, id: string, config: CcHealthCheckProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_health_check',
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
        this._healthCheckConfig.internalValue = config.healthCheckConfig;
        this._healthCheckTags.internalValue = config.healthCheckTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // health_check_config - computed: false, optional: false, required: true
    private _healthCheckConfig = new CcHealthCheck.HealthCheckConfigPropertyOutputReference(this, "health_check_config");
    public get healthCheckConfig() {
        return this._healthCheckConfig;
    }
    public putHealthCheckConfig(value: CcHealthCheck.HealthCheckConfigProperty) {
        this._healthCheckConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckConfigInput() {
        return this._healthCheckConfig.internalValue;
    }

    // health_check_id - computed: true, optional: false, required: false
    public get healthCheckId() {
        return this.getStringAttribute('health_check_id');
    }

    // health_check_tags - computed: true, optional: true, required: false
    private _healthCheckTags = new CcHealthCheck.HealthCheckTagPropertyList(this, "health_check_tags", true);
    public get healthCheckTags() {
        return this._healthCheckTags;
    }
    public putHealthCheckTags(value: CcHealthCheck.HealthCheckTagProperty[] | cdktn.IResolvable) {
        this._healthCheckTags.internalValue = value;
    }
    public resetHealthCheckTags() {
        this._healthCheckTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckTagsInput() {
        return this._healthCheckTags.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            health_check_config: ccHealthCheckHealthCheckConfigPropertyToTerraform(this._healthCheckConfig.internalValue),
            health_check_tags: cdktn.listMapper(ccHealthCheckHealthCheckTagPropertyToTerraform, false)(this._healthCheckTags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            health_check_config: {
                value: ccHealthCheckHealthCheckConfigPropertyToHclTerraform(this._healthCheckConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcHealthCheck.HealthCheckConfigProperty",
            },
            health_check_tags: {
                value: cdktn.listMapperHcl(ccHealthCheckHealthCheckTagPropertyToHclTerraform, false)(this._healthCheckTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcHealthCheck.HealthCheckTagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccHealthCheckAlarmIdentifierPropertyToTerraform(struct?: CcHealthCheck.AlarmIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccHealthCheckAlarmIdentifierPropertyToHclTerraform(struct?: CcHealthCheck.AlarmIdentifierProperty | cdktn.IResolvable): any {
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
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccHealthCheckHealthCheckConfigPropertyToTerraform(struct?: CcHealthCheck.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_identifier: ccHealthCheckAlarmIdentifierPropertyToTerraform(struct!.alarmIdentifier),
        child_health_checks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.childHealthChecks),
        enable_sni: cdktn.booleanToTerraform(struct!.enableSni),
        failure_threshold: cdktn.numberToTerraform(struct!.failureThreshold),
        fully_qualified_domain_name: cdktn.stringToTerraform(struct!.fullyQualifiedDomainName),
        health_threshold: cdktn.numberToTerraform(struct!.healthThreshold),
        insufficient_data_health_status: cdktn.stringToTerraform(struct!.insufficientDataHealthStatus),
        inverted: cdktn.booleanToTerraform(struct!.inverted),
        ip_address: cdktn.stringToTerraform(struct!.ipAddress),
        measure_latency: cdktn.booleanToTerraform(struct!.measureLatency),
        port: cdktn.numberToTerraform(struct!.port),
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
        request_interval: cdktn.numberToTerraform(struct!.requestInterval),
        resource_path: cdktn.stringToTerraform(struct!.resourcePath),
        routing_control_arn: cdktn.stringToTerraform(struct!.routingControlArn),
        search_string: cdktn.stringToTerraform(struct!.searchString),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccHealthCheckHealthCheckConfigPropertyToHclTerraform(struct?: CcHealthCheck.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_identifier: {
            value: ccHealthCheckAlarmIdentifierPropertyToHclTerraform(struct!.alarmIdentifier),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmIdentifierProperty",
        },
        child_health_checks: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.childHealthChecks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enable_sni: {
            value: cdktn.booleanToHclTerraform(struct!.enableSni),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        failure_threshold: {
            value: cdktn.numberToHclTerraform(struct!.failureThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        fully_qualified_domain_name: {
            value: cdktn.stringToHclTerraform(struct!.fullyQualifiedDomainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        health_threshold: {
            value: cdktn.numberToHclTerraform(struct!.healthThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        insufficient_data_health_status: {
            value: cdktn.stringToHclTerraform(struct!.insufficientDataHealthStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inverted: {
            value: cdktn.booleanToHclTerraform(struct!.inverted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ip_address: {
            value: cdktn.stringToHclTerraform(struct!.ipAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        measure_latency: {
            value: cdktn.booleanToHclTerraform(struct!.measureLatency),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        request_interval: {
            value: cdktn.numberToHclTerraform(struct!.requestInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_path: {
            value: cdktn.stringToHclTerraform(struct!.resourcePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_control_arn: {
            value: cdktn.stringToHclTerraform(struct!.routingControlArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search_string: {
            value: cdktn.stringToHclTerraform(struct!.searchString),
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


export function ccHealthCheckHealthCheckTagPropertyToTerraform(struct?: CcHealthCheck.HealthCheckTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccHealthCheckHealthCheckTagPropertyToHclTerraform(struct?: CcHealthCheck.HealthCheckTagProperty | cdktn.IResolvable): any {
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


export namespace CcHealthCheck {
export interface AlarmIdentifierProperty {
    /**
    * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#name CcHealthCheck#name}
    */
    readonly name?: string;
    /**
    * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#region CcHealthCheck#region}
    */
    readonly region?: string;
}
export class AlarmIdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._region = value.region;
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

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface HealthCheckConfigProperty {
    /**
    * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#alarm_identifier CcHealthCheck#alarm_identifier}
    */
    readonly alarmIdentifier?: AlarmIdentifierProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#child_health_checks CcHealthCheck#child_health_checks}
    */
    readonly childHealthChecks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#enable_sni CcHealthCheck#enable_sni}
    */
    readonly enableSni?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#failure_threshold CcHealthCheck#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#fully_qualified_domain_name CcHealthCheck#fully_qualified_domain_name}
    */
    readonly fullyQualifiedDomainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#health_threshold CcHealthCheck#health_threshold}
    */
    readonly healthThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#insufficient_data_health_status CcHealthCheck#insufficient_data_health_status}
    */
    readonly insufficientDataHealthStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#inverted CcHealthCheck#inverted}
    */
    readonly inverted?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#ip_address CcHealthCheck#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#measure_latency CcHealthCheck#measure_latency}
    */
    readonly measureLatency?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#port CcHealthCheck#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#regions CcHealthCheck#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#request_interval CcHealthCheck#request_interval}
    */
    readonly requestInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#resource_path CcHealthCheck#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#routing_control_arn CcHealthCheck#routing_control_arn}
    */
    readonly routingControlArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#search_string CcHealthCheck#search_string}
    */
    readonly searchString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#type CcHealthCheck#type}
    */
    readonly type: string;
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
        if (this._alarmIdentifier?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmIdentifier = this._alarmIdentifier?.internalValue;
        }
        if (this._childHealthChecks !== undefined) {
            hasAnyValues = true;
            internalValueResult.childHealthChecks = this._childHealthChecks;
        }
        if (this._enableSni !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableSni = this._enableSni;
        }
        if (this._failureThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureThreshold = this._failureThreshold;
        }
        if (this._fullyQualifiedDomainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullyQualifiedDomainName = this._fullyQualifiedDomainName;
        }
        if (this._healthThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthThreshold = this._healthThreshold;
        }
        if (this._insufficientDataHealthStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.insufficientDataHealthStatus = this._insufficientDataHealthStatus;
        }
        if (this._inverted !== undefined) {
            hasAnyValues = true;
            internalValueResult.inverted = this._inverted;
        }
        if (this._ipAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddress = this._ipAddress;
        }
        if (this._measureLatency !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureLatency = this._measureLatency;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        if (this._requestInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestInterval = this._requestInterval;
        }
        if (this._resourcePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePath = this._resourcePath;
        }
        if (this._routingControlArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingControlArn = this._routingControlArn;
        }
        if (this._searchString !== undefined) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmIdentifier.internalValue = undefined;
            this._childHealthChecks = undefined;
            this._enableSni = undefined;
            this._failureThreshold = undefined;
            this._fullyQualifiedDomainName = undefined;
            this._healthThreshold = undefined;
            this._insufficientDataHealthStatus = undefined;
            this._inverted = undefined;
            this._ipAddress = undefined;
            this._measureLatency = undefined;
            this._port = undefined;
            this._regions = undefined;
            this._requestInterval = undefined;
            this._resourcePath = undefined;
            this._routingControlArn = undefined;
            this._searchString = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmIdentifier.internalValue = value.alarmIdentifier;
            this._childHealthChecks = value.childHealthChecks;
            this._enableSni = value.enableSni;
            this._failureThreshold = value.failureThreshold;
            this._fullyQualifiedDomainName = value.fullyQualifiedDomainName;
            this._healthThreshold = value.healthThreshold;
            this._insufficientDataHealthStatus = value.insufficientDataHealthStatus;
            this._inverted = value.inverted;
            this._ipAddress = value.ipAddress;
            this._measureLatency = value.measureLatency;
            this._port = value.port;
            this._regions = value.regions;
            this._requestInterval = value.requestInterval;
            this._resourcePath = value.resourcePath;
            this._routingControlArn = value.routingControlArn;
            this._searchString = value.searchString;
            this._type = value.type;
        }
    }

    // alarm_identifier - computed: true, optional: true, required: false
    private _alarmIdentifier = new AlarmIdentifierPropertyOutputReference(this, "alarm_identifier");
    public get alarmIdentifier() {
        return this._alarmIdentifier;
    }
    public putAlarmIdentifier(value: AlarmIdentifierProperty) {
        this._alarmIdentifier.internalValue = value;
    }
    public resetAlarmIdentifier() {
        this._alarmIdentifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmIdentifierInput() {
        return this._alarmIdentifier.internalValue;
    }

    // child_health_checks - computed: true, optional: true, required: false
    private _childHealthChecks?: string[]; 
    public get childHealthChecks() {
        return this.getListAttribute('child_health_checks');
    }
    public set childHealthChecks(value: string[]) {
        this._childHealthChecks = value;
    }
    public resetChildHealthChecks() {
        this._childHealthChecks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childHealthChecksInput() {
        return this._childHealthChecks;
    }

    // enable_sni - computed: true, optional: true, required: false
    private _enableSni?: boolean | cdktn.IResolvable; 
    public get enableSni() {
        return this.getBooleanAttribute('enable_sni');
    }
    public set enableSni(value: boolean | cdktn.IResolvable) {
        this._enableSni = value;
    }
    public resetEnableSni() {
        this._enableSni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSniInput() {
        return this._enableSni;
    }

    // failure_threshold - computed: true, optional: true, required: false
    private _failureThreshold?: number; 
    public get failureThreshold() {
        return this.getNumberAttribute('failure_threshold');
    }
    public set failureThreshold(value: number) {
        this._failureThreshold = value;
    }
    public resetFailureThreshold() {
        this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureThresholdInput() {
        return this._failureThreshold;
    }

    // fully_qualified_domain_name - computed: true, optional: true, required: false
    private _fullyQualifiedDomainName?: string; 
    public get fullyQualifiedDomainName() {
        return this.getStringAttribute('fully_qualified_domain_name');
    }
    public set fullyQualifiedDomainName(value: string) {
        this._fullyQualifiedDomainName = value;
    }
    public resetFullyQualifiedDomainName() {
        this._fullyQualifiedDomainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullyQualifiedDomainNameInput() {
        return this._fullyQualifiedDomainName;
    }

    // health_threshold - computed: true, optional: true, required: false
    private _healthThreshold?: number; 
    public get healthThreshold() {
        return this.getNumberAttribute('health_threshold');
    }
    public set healthThreshold(value: number) {
        this._healthThreshold = value;
    }
    public resetHealthThreshold() {
        this._healthThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthThresholdInput() {
        return this._healthThreshold;
    }

    // insufficient_data_health_status - computed: true, optional: true, required: false
    private _insufficientDataHealthStatus?: string; 
    public get insufficientDataHealthStatus() {
        return this.getStringAttribute('insufficient_data_health_status');
    }
    public set insufficientDataHealthStatus(value: string) {
        this._insufficientDataHealthStatus = value;
    }
    public resetInsufficientDataHealthStatus() {
        this._insufficientDataHealthStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insufficientDataHealthStatusInput() {
        return this._insufficientDataHealthStatus;
    }

    // inverted - computed: true, optional: true, required: false
    private _inverted?: boolean | cdktn.IResolvable; 
    public get inverted() {
        return this.getBooleanAttribute('inverted');
    }
    public set inverted(value: boolean | cdktn.IResolvable) {
        this._inverted = value;
    }
    public resetInverted() {
        this._inverted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertedInput() {
        return this._inverted;
    }

    // ip_address - computed: true, optional: true, required: false
    private _ipAddress?: string; 
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
        this._ipAddress = value;
    }
    public resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
        return this._ipAddress;
    }

    // measure_latency - computed: true, optional: true, required: false
    private _measureLatency?: boolean | cdktn.IResolvable; 
    public get measureLatency() {
        return this.getBooleanAttribute('measure_latency');
    }
    public set measureLatency(value: boolean | cdktn.IResolvable) {
        this._measureLatency = value;
    }
    public resetMeasureLatency() {
        this._measureLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureLatencyInput() {
        return this._measureLatency;
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

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return this.getListAttribute('regions');
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // request_interval - computed: true, optional: true, required: false
    private _requestInterval?: number; 
    public get requestInterval() {
        return this.getNumberAttribute('request_interval');
    }
    public set requestInterval(value: number) {
        this._requestInterval = value;
    }
    public resetRequestInterval() {
        this._requestInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestIntervalInput() {
        return this._requestInterval;
    }

    // resource_path - computed: true, optional: true, required: false
    private _resourcePath?: string; 
    public get resourcePath() {
        return this.getStringAttribute('resource_path');
    }
    public set resourcePath(value: string) {
        this._resourcePath = value;
    }
    public resetResourcePath() {
        this._resourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePathInput() {
        return this._resourcePath;
    }

    // routing_control_arn - computed: true, optional: true, required: false
    private _routingControlArn?: string; 
    public get routingControlArn() {
        return this.getStringAttribute('routing_control_arn');
    }
    public set routingControlArn(value: string) {
        this._routingControlArn = value;
    }
    public resetRoutingControlArn() {
        this._routingControlArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingControlArnInput() {
        return this._routingControlArn;
    }

    // search_string - computed: true, optional: true, required: false
    private _searchString?: string; 
    public get searchString() {
        return this.getStringAttribute('search_string');
    }
    public set searchString(value: string) {
        this._searchString = value;
    }
    public resetSearchString() {
        this._searchString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get searchStringInput() {
        return this._searchString;
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
}
export interface HealthCheckTagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#key CcHealthCheck#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53_health_check#value CcHealthCheck#value}
    */
    readonly value?: string;
}
export class HealthCheckTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HealthCheckTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: HealthCheckTagProperty | cdktn.IResolvable | undefined) {
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

export class HealthCheckTagPropertyList extends cdktn.ComplexList {
    public internalValue? : HealthCheckTagProperty[] | cdktn.IResolvable

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
    public get(index: number): HealthCheckTagPropertyOutputReference {
        return new HealthCheckTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
