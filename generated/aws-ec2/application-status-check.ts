// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationStatusCheckProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether this check is included in the rolled-up application status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#aggregation CcApplicationStatusCheck#aggregation}
    */
    readonly aggregation?: string;
    /**
    * The network interface device index used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#device_index CcApplicationStatusCheck#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * The number of consecutive failed probes required to mark the instance unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#failure_threshold CcApplicationStatusCheck#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * The source/destination network paths used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#health_check_paths CcApplicationStatusCheck#health_check_paths}
    */
    readonly healthCheckPaths?: CcApplicationStatusCheck.HealthCheckPathsProperty[] | cdktn.IResolvable;
    /**
    * Seconds to wait after instance launch before beginning health checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds CcApplicationStatusCheck#initialization_grace_period_seconds}
    */
    readonly initializationGracePeriodSeconds?: number;
    /**
    * The interval, in seconds, between health check probes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#interval CcApplicationStatusCheck#interval}
    */
    readonly interval?: number;
    /**
    * The IP scope used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#ip_scope CcApplicationStatusCheck#ip_scope}
    */
    readonly ipScope?: string;
    /**
    * The IP version used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#ip_version CcApplicationStatusCheck#ip_version}
    */
    readonly ipVersion?: string;
    /**
    * The HTTP path used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#path CcApplicationStatusCheck#path}
    */
    readonly path?: string;
    /**
    * The port used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#port CcApplicationStatusCheck#port}
    */
    readonly port: number;
    /**
    * The network protocol used for the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#protocol CcApplicationStatusCheck#protocol}
    */
    readonly protocol: string;
    /**
    * The HTTP status codes considered successful (e.g., "200-299").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#status_code_matcher CcApplicationStatusCheck#status_code_matcher}
    */
    readonly statusCodeMatcher?: string;
    /**
    * The number of consecutive successful probes required to mark the instance healthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#success_threshold CcApplicationStatusCheck#success_threshold}
    */
    readonly successThreshold?: number;
    /**
    * Tags to apply to the application status check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#tags CcApplicationStatusCheck#tags}
    */
    readonly tags?: CcApplicationStatusCheck.TagsProperty[] | cdktn.IResolvable;
    /**
    * The timeout, in seconds, for each health check probe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#timeout CcApplicationStatusCheck#timeout}
    */
    readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check}
*/
export class CcApplicationStatusCheck extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_application_status_check";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationStatusCheck resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationStatusCheck to import
    * @param importFromId The id of the existing CcApplicationStatusCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationStatusCheck to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_application_status_check", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationStatusCheckProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationStatusCheckProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_application_status_check',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._aggregation = config.aggregation;
        this._deviceIndex = config.deviceIndex;
        this._failureThreshold = config.failureThreshold;
        this._healthCheckPaths.internalValue = config.healthCheckPaths;
        this._initializationGracePeriodSeconds = config.initializationGracePeriodSeconds;
        this._interval = config.interval;
        this._ipScope = config.ipScope;
        this._ipVersion = config.ipVersion;
        this._path = config.path;
        this._port = config.port;
        this._protocol = config.protocol;
        this._statusCodeMatcher = config.statusCodeMatcher;
        this._successThreshold = config.successThreshold;
        this._tags.internalValue = config.tags;
        this._timeout = config.timeout;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aggregation - computed: true, optional: true, required: false
    private _aggregation?: string; 
    public get aggregation() {
        return this.getStringAttribute('aggregation');
    }
    public set aggregation(value: string) {
        this._aggregation = value;
    }
    public resetAggregation() {
        this._aggregation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationInput() {
        return this._aggregation;
    }

    // application_status_check_id - computed: true, optional: false, required: false
    public get applicationStatusCheckId() {
        return this.getStringAttribute('application_status_check_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // device_index - computed: true, optional: true, required: false
    private _deviceIndex?: number; 
    public get deviceIndex() {
        return this.getNumberAttribute('device_index');
    }
    public set deviceIndex(value: number) {
        this._deviceIndex = value;
    }
    public resetDeviceIndex() {
        this._deviceIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIndexInput() {
        return this._deviceIndex;
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

    // health_check_paths - computed: true, optional: true, required: false
    private _healthCheckPaths = new CcApplicationStatusCheck.HealthCheckPathsPropertyList(this, "health_check_paths", false);
    public get healthCheckPaths() {
        return this._healthCheckPaths;
    }
    public putHealthCheckPaths(value: CcApplicationStatusCheck.HealthCheckPathsProperty[] | cdktn.IResolvable) {
        this._healthCheckPaths.internalValue = value;
    }
    public resetHealthCheckPaths() {
        this._healthCheckPaths.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPathsInput() {
        return this._healthCheckPaths.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // initialization_grace_period_seconds - computed: true, optional: true, required: false
    private _initializationGracePeriodSeconds?: number; 
    public get initializationGracePeriodSeconds() {
        return this.getNumberAttribute('initialization_grace_period_seconds');
    }
    public set initializationGracePeriodSeconds(value: number) {
        this._initializationGracePeriodSeconds = value;
    }
    public resetInitializationGracePeriodSeconds() {
        this._initializationGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initializationGracePeriodSecondsInput() {
        return this._initializationGracePeriodSeconds;
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // ip_scope - computed: true, optional: true, required: false
    private _ipScope?: string; 
    public get ipScope() {
        return this.getStringAttribute('ip_scope');
    }
    public set ipScope(value: string) {
        this._ipScope = value;
    }
    public resetIpScope() {
        this._ipScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipScopeInput() {
        return this._ipScope;
    }

    // ip_version - computed: true, optional: true, required: false
    private _ipVersion?: string; 
    public get ipVersion() {
        return this.getStringAttribute('ip_version');
    }
    public set ipVersion(value: string) {
        this._ipVersion = value;
    }
    public resetIpVersion() {
        this._ipVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipVersionInput() {
        return this._ipVersion;
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

    // success_threshold - computed: true, optional: true, required: false
    private _successThreshold?: number; 
    public get successThreshold() {
        return this.getNumberAttribute('success_threshold');
    }
    public set successThreshold(value: number) {
        this._successThreshold = value;
    }
    public resetSuccessThreshold() {
        this._successThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successThresholdInput() {
        return this._successThreshold;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplicationStatusCheck.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplicationStatusCheck.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aggregation: cdktn.stringToTerraform(this._aggregation),
            device_index: cdktn.numberToTerraform(this._deviceIndex),
            failure_threshold: cdktn.numberToTerraform(this._failureThreshold),
            health_check_paths: cdktn.listMapper(ccApplicationStatusCheckHealthCheckPathsPropertyToTerraform, false)(this._healthCheckPaths.internalValue),
            initialization_grace_period_seconds: cdktn.numberToTerraform(this._initializationGracePeriodSeconds),
            interval: cdktn.numberToTerraform(this._interval),
            ip_scope: cdktn.stringToTerraform(this._ipScope),
            ip_version: cdktn.stringToTerraform(this._ipVersion),
            path: cdktn.stringToTerraform(this._path),
            port: cdktn.numberToTerraform(this._port),
            protocol: cdktn.stringToTerraform(this._protocol),
            status_code_matcher: cdktn.stringToTerraform(this._statusCodeMatcher),
            success_threshold: cdktn.numberToTerraform(this._successThreshold),
            tags: cdktn.listMapper(ccApplicationStatusCheckTagsPropertyToTerraform, false)(this._tags.internalValue),
            timeout: cdktn.numberToTerraform(this._timeout),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aggregation: {
                value: cdktn.stringToHclTerraform(this._aggregation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_index: {
                value: cdktn.numberToHclTerraform(this._deviceIndex),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            failure_threshold: {
                value: cdktn.numberToHclTerraform(this._failureThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            health_check_paths: {
                value: cdktn.listMapperHcl(ccApplicationStatusCheckHealthCheckPathsPropertyToHclTerraform, false)(this._healthCheckPaths.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplicationStatusCheck.HealthCheckPathsPropertyList",
            },
            initialization_grace_period_seconds: {
                value: cdktn.numberToHclTerraform(this._initializationGracePeriodSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            interval: {
                value: cdktn.numberToHclTerraform(this._interval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ip_scope: {
                value: cdktn.stringToHclTerraform(this._ipScope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_version: {
                value: cdktn.stringToHclTerraform(this._ipVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktn.stringToHclTerraform(this._path),
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
            status_code_matcher: {
                value: cdktn.stringToHclTerraform(this._statusCodeMatcher),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            success_threshold: {
                value: cdktn.numberToHclTerraform(this._successThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationStatusCheckTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcApplicationStatusCheck.TagsPropertyList",
            },
            timeout: {
                value: cdktn.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationStatusCheckDestinationsPropertyToTerraform(struct?: CcApplicationStatusCheck.DestinationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_id: cdktn.stringToTerraform(struct!.securityGroupId),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccApplicationStatusCheckDestinationsPropertyToHclTerraform(struct?: CcApplicationStatusCheck.DestinationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_id: {
            value: cdktn.stringToHclTerraform(struct!.securityGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationStatusCheckSourcePropertyToTerraform(struct?: CcApplicationStatusCheck.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_id: cdktn.stringToTerraform(struct!.securityGroupId),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccApplicationStatusCheckSourcePropertyToHclTerraform(struct?: CcApplicationStatusCheck.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_id: {
            value: cdktn.stringToHclTerraform(struct!.securityGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationStatusCheckHealthCheckPathsPropertyToTerraform(struct?: CcApplicationStatusCheck.HealthCheckPathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccApplicationStatusCheckDestinationsPropertyToTerraform, false)(struct!.destinations),
        source: ccApplicationStatusCheckSourcePropertyToTerraform(struct!.source),
    }
}


export function ccApplicationStatusCheckHealthCheckPathsPropertyToHclTerraform(struct?: CcApplicationStatusCheck.HealthCheckPathsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccApplicationStatusCheckDestinationsPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "DestinationsPropertyList",
        },
        source: {
            value: ccApplicationStatusCheckSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationStatusCheckTagsPropertyToTerraform(struct?: CcApplicationStatusCheck.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationStatusCheckTagsPropertyToHclTerraform(struct?: CcApplicationStatusCheck.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcApplicationStatusCheck {
export interface DestinationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#security_group_id CcApplicationStatusCheck#security_group_id}
    */
    readonly securityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#subnet_id CcApplicationStatusCheck#subnet_id}
    */
    readonly subnetId?: string;
}
export class DestinationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DestinationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupId = this._securityGroupId;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupId = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupId = value.securityGroupId;
            this._subnetId = value.subnetId;
        }
    }

    // security_group_id - computed: true, optional: true, required: false
    private _securityGroupId?: string; 
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
    public set securityGroupId(value: string) {
        this._securityGroupId = value;
    }
    public resetSecurityGroupId() {
        this._securityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdInput() {
        return this._securityGroupId;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}

export class DestinationsPropertyList extends cdktn.ComplexList {
    public internalValue? : DestinationsProperty[] | cdktn.IResolvable

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
    public get(index: number): DestinationsPropertyOutputReference {
        return new DestinationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#security_group_id CcApplicationStatusCheck#security_group_id}
    */
    readonly securityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#subnet_id CcApplicationStatusCheck#subnet_id}
    */
    readonly subnetId?: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupId = this._securityGroupId;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupId = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupId = value.securityGroupId;
            this._subnetId = value.subnetId;
        }
    }

    // security_group_id - computed: true, optional: true, required: false
    private _securityGroupId?: string; 
    public get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
    public set securityGroupId(value: string) {
        this._securityGroupId = value;
    }
    public resetSecurityGroupId() {
        this._securityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdInput() {
        return this._securityGroupId;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}
export interface HealthCheckPathsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#destinations CcApplicationStatusCheck#destinations}
    */
    readonly destinations?: DestinationsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#source CcApplicationStatusCheck#source}
    */
    readonly source?: SourceProperty;
}
export class HealthCheckPathsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HealthCheckPathsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckPathsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
            this._source.internalValue = value.source;
        }
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new DestinationsPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: DestinationsProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source = new SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: SourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}

export class HealthCheckPathsPropertyList extends cdktn.ComplexList {
    public internalValue? : HealthCheckPathsProperty[] | cdktn.IResolvable

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
    public get(index: number): HealthCheckPathsPropertyOutputReference {
        return new HealthCheckPathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#key CcApplicationStatusCheck#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/ec2_application_status_check#value CcApplicationStatusCheck#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
