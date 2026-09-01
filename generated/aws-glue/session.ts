// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSessionProps extends cdktn.TerraformMetaArguments {
    /**
    * The SessionCommand that runs the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#command CcSession#command}
    */
    readonly command: CcSession.SessionCommandProperty;
    /**
    * Specifies the connections used by the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections CcSession#connections}
    */
    readonly connections?: CcSession.ConnectionsListProperty;
    /**
    * A map array of key-value pairs. Max is 75 pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#default_arguments CcSession#default_arguments}
    */
    readonly defaultArguments?: { [key: string]: string };
    /**
    * The description of the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#description CcSession#description}
    */
    readonly description?: string;
    /**
    * The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#glue_version CcSession#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * The number of minutes when idle before session times out. Default is the value of Timeout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#idle_timeout CcSession#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * The number of Glue data processing units (DPUs) that can be allocated when the job runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#max_capacity CcSession#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The number of workers of a defined WorkerType to use for the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#number_of_workers CcSession#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * The origin of the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#request_origin CcSession#request_origin}
    */
    readonly requestOrigin?: string;
    /**
    * The IAM Role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#role CcSession#role}
    */
    readonly role: string;
    /**
    * The name of the SecurityConfiguration structure to be used with the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#security_configuration CcSession#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * The ID of the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#session_id CcSession#session_id}
    */
    readonly sessionId: string;
    /**
    * The tags belonging to the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#tags CcSession#tags}
    */
    readonly tags?: CcSession.TagProperty[] | cdktn.IResolvable;
    /**
    * The number of minutes before session times out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#timeout CcSession#timeout}
    */
    readonly timeout?: number;
    /**
    * The type of predefined worker that is allocated when a session runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#worker_type CcSession#worker_type}
    */
    readonly workerType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session awscc_glue_session}
*/
export class CcSession extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_session";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSession resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSession to import
    * @param importFromId The id of the existing CcSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSession to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_session", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session awscc_glue_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSessionProps
    */
    public constructor(scope: Construct, id: string, config: CcSessionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_session',
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
        this._command.internalValue = config.command;
        this._connections.internalValue = config.connections;
        this._defaultArguments = config.defaultArguments;
        this._description = config.description;
        this._glueVersion = config.glueVersion;
        this._idleTimeout = config.idleTimeout;
        this._maxCapacity = config.maxCapacity;
        this._numberOfWorkers = config.numberOfWorkers;
        this._requestOrigin = config.requestOrigin;
        this._role = config.role;
        this._securityConfiguration = config.securityConfiguration;
        this._sessionId = config.sessionId;
        this._tags.internalValue = config.tags;
        this._timeout = config.timeout;
        this._workerType = config.workerType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // command - computed: false, optional: false, required: true
    private _command = new CcSession.SessionCommandPropertyOutputReference(this, "command");
    public get command() {
        return this._command;
    }
    public putCommand(value: CcSession.SessionCommandProperty) {
        this._command.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command.internalValue;
    }

    // connections - computed: true, optional: true, required: false
    private _connections = new CcSession.ConnectionsListPropertyOutputReference(this, "connections");
    public get connections() {
        return this._connections;
    }
    public putConnections(value: CcSession.ConnectionsListProperty) {
        this._connections.internalValue = value;
    }
    public resetConnections() {
        this._connections.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsInput() {
        return this._connections.internalValue;
    }

    // created_on - computed: true, optional: false, required: false
    public get createdOn() {
        return this.getStringAttribute('created_on');
    }

    // default_arguments - computed: true, optional: true, required: false
    private _defaultArguments?: { [key: string]: string }; 
    public get defaultArguments() {
        return this.getStringMapAttribute('default_arguments');
    }
    public set defaultArguments(value: { [key: string]: string }) {
        this._defaultArguments = value;
    }
    public resetDefaultArguments() {
        this._defaultArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultArgumentsInput() {
        return this._defaultArguments;
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

    // glue_version - computed: true, optional: true, required: false
    private _glueVersion?: string; 
    public get glueVersion() {
        return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string) {
        this._glueVersion = value;
    }
    public resetGlueVersion() {
        this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
        return this._glueVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // number_of_workers - computed: true, optional: true, required: false
    private _numberOfWorkers?: number; 
    public get numberOfWorkers() {
        return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number) {
        this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
        this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
        return this._numberOfWorkers;
    }

    // progress - computed: true, optional: false, required: false
    public get progress() {
        return this.getNumberAttribute('progress');
    }

    // request_origin - computed: true, optional: true, required: false
    private _requestOrigin?: string; 
    public get requestOrigin() {
        return this.getStringAttribute('request_origin');
    }
    public set requestOrigin(value: string) {
        this._requestOrigin = value;
    }
    public resetRequestOrigin() {
        this._requestOrigin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestOriginInput() {
        return this._requestOrigin;
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // security_configuration - computed: true, optional: true, required: false
    private _securityConfiguration?: string; 
    public get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string) {
        this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
        this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
        return this._securityConfiguration;
    }

    // session_id - computed: false, optional: false, required: true
    private _sessionId?: string; 
    public get sessionId() {
        return this.getStringAttribute('session_id');
    }
    public set sessionId(value: string) {
        this._sessionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionIdInput() {
        return this._sessionId;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSession.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSession.TagProperty[] | cdktn.IResolvable) {
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

    // worker_type - computed: true, optional: true, required: false
    private _workerType?: string; 
    public get workerType() {
        return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string) {
        this._workerType = value;
    }
    public resetWorkerType() {
        this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
        return this._workerType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            command: ccSessionSessionCommandPropertyToTerraform(this._command.internalValue),
            connections: ccSessionConnectionsListPropertyToTerraform(this._connections.internalValue),
            default_arguments: cdktn.hashMapper(cdktn.stringToTerraform)(this._defaultArguments),
            description: cdktn.stringToTerraform(this._description),
            glue_version: cdktn.stringToTerraform(this._glueVersion),
            idle_timeout: cdktn.numberToTerraform(this._idleTimeout),
            max_capacity: cdktn.numberToTerraform(this._maxCapacity),
            number_of_workers: cdktn.numberToTerraform(this._numberOfWorkers),
            request_origin: cdktn.stringToTerraform(this._requestOrigin),
            role: cdktn.stringToTerraform(this._role),
            security_configuration: cdktn.stringToTerraform(this._securityConfiguration),
            session_id: cdktn.stringToTerraform(this._sessionId),
            tags: cdktn.listMapper(ccSessionTagPropertyToTerraform, false)(this._tags.internalValue),
            timeout: cdktn.numberToTerraform(this._timeout),
            worker_type: cdktn.stringToTerraform(this._workerType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            command: {
                value: ccSessionSessionCommandPropertyToHclTerraform(this._command.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSession.SessionCommandProperty",
            },
            connections: {
                value: ccSessionConnectionsListPropertyToHclTerraform(this._connections.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSession.ConnectionsListProperty",
            },
            default_arguments: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._defaultArguments),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            glue_version: {
                value: cdktn.stringToHclTerraform(this._glueVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idle_timeout: {
                value: cdktn.numberToHclTerraform(this._idleTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_capacity: {
                value: cdktn.numberToHclTerraform(this._maxCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            number_of_workers: {
                value: cdktn.numberToHclTerraform(this._numberOfWorkers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            request_origin: {
                value: cdktn.stringToHclTerraform(this._requestOrigin),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_configuration: {
                value: cdktn.stringToHclTerraform(this._securityConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_id: {
                value: cdktn.stringToHclTerraform(this._sessionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSessionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSession.TagPropertyList",
            },
            timeout: {
                value: cdktn.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            worker_type: {
                value: cdktn.stringToHclTerraform(this._workerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSessionSessionCommandPropertyToTerraform(struct?: CcSession.SessionCommandProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        python_version: cdktn.stringToTerraform(struct!.pythonVersion),
    }
}


export function ccSessionSessionCommandPropertyToHclTerraform(struct?: CcSession.SessionCommandProperty | cdktn.IResolvable): any {
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
        python_version: {
            value: cdktn.stringToHclTerraform(struct!.pythonVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSessionConnectionsListPropertyToTerraform(struct?: CcSession.ConnectionsListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connections: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.connections),
    }
}


export function ccSessionConnectionsListPropertyToHclTerraform(struct?: CcSession.ConnectionsListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connections: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.connections),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSessionTagPropertyToTerraform(struct?: CcSession.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSessionTagPropertyToHclTerraform(struct?: CcSession.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSession {
export interface SessionCommandProperty {
    /**
    * Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#name CcSession#name}
    */
    readonly name?: string;
    /**
    * Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#python_version CcSession#python_version}
    */
    readonly pythonVersion?: string;
}
export class SessionCommandPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionCommandProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._pythonVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.pythonVersion = this._pythonVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionCommandProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._pythonVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._pythonVersion = value.pythonVersion;
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

    // python_version - computed: true, optional: true, required: false
    private _pythonVersion?: string; 
    public get pythonVersion() {
        return this.getStringAttribute('python_version');
    }
    public set pythonVersion(value: string) {
        this._pythonVersion = value;
    }
    public resetPythonVersion() {
        this._pythonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonVersionInput() {
        return this._pythonVersion;
    }
}
export interface ConnectionsListProperty {
    /**
    * A list of connection names used by the session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections CcSession#connections}
    */
    readonly connections?: string[];
}
export class ConnectionsListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionsListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connections !== undefined) {
            hasAnyValues = true;
            internalValueResult.connections = this._connections;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionsListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connections = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connections = value.connections;
        }
    }

    // connections - computed: true, optional: true, required: false
    private _connections?: string[]; 
    public get connections() {
        return this.getListAttribute('connections');
    }
    public set connections(value: string[]) {
        this._connections = value;
    }
    public resetConnections() {
        this._connections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsInput() {
        return this._connections;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#key CcSession#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#value CcSession#value}
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
