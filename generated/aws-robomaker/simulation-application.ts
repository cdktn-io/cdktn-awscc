// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSimulationApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The current revision id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#current_revision_id CcSimulationApplication#current_revision_id}
    */
    readonly currentRevisionId?: string;
    /**
    * The URI of the Docker image for the robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#environment CcSimulationApplication#environment}
    */
    readonly environment?: string;
    /**
    * The name of the simulation application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#name CcSimulationApplication#name}
    */
    readonly name?: string;
    /**
    * The rendering engine for the simulation application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#rendering_engine CcSimulationApplication#rendering_engine}
    */
    readonly renderingEngine?: CcSimulationApplication.RenderingEngineProperty;
    /**
    * The robot software suite used by the simulation application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#robot_software_suite CcSimulationApplication#robot_software_suite}
    */
    readonly robotSoftwareSuite: CcSimulationApplication.RobotSoftwareSuiteProperty;
    /**
    * The simulation software suite used by the simulation application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#simulation_software_suite CcSimulationApplication#simulation_software_suite}
    */
    readonly simulationSoftwareSuite: CcSimulationApplication.SimulationSoftwareSuiteProperty;
    /**
    * The sources of the simulation application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#sources CcSimulationApplication#sources}
    */
    readonly sources?: CcSimulationApplication.SourceConfigProperty[] | cdktn.IResolvable;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#tags CcSimulationApplication#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application awscc_robomaker_simulation_application}
*/
export class CcSimulationApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_robomaker_simulation_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSimulationApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSimulationApplication to import
    * @param importFromId The id of the existing CcSimulationApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSimulationApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_robomaker_simulation_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application awscc_robomaker_simulation_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSimulationApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcSimulationApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_robomaker_simulation_application',
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
        this._currentRevisionId = config.currentRevisionId;
        this._environment = config.environment;
        this._name = config.name;
        this._renderingEngine.internalValue = config.renderingEngine;
        this._robotSoftwareSuite.internalValue = config.robotSoftwareSuite;
        this._simulationSoftwareSuite.internalValue = config.simulationSoftwareSuite;
        this._sources.internalValue = config.sources;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // current_revision_id - computed: true, optional: true, required: false
    private _currentRevisionId?: string; 
    public get currentRevisionId() {
        return this.getStringAttribute('current_revision_id');
    }
    public set currentRevisionId(value: string) {
        this._currentRevisionId = value;
    }
    public resetCurrentRevisionId() {
        this._currentRevisionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentRevisionIdInput() {
        return this._currentRevisionId;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: string; 
    public get environment() {
        return this.getStringAttribute('environment');
    }
    public set environment(value: string) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
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

    // rendering_engine - computed: true, optional: true, required: false
    private _renderingEngine = new CcSimulationApplication.RenderingEnginePropertyOutputReference(this, "rendering_engine");
    public get renderingEngine() {
        return this._renderingEngine;
    }
    public putRenderingEngine(value: CcSimulationApplication.RenderingEngineProperty) {
        this._renderingEngine.internalValue = value;
    }
    public resetRenderingEngine() {
        this._renderingEngine.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renderingEngineInput() {
        return this._renderingEngine.internalValue;
    }

    // robot_software_suite - computed: false, optional: false, required: true
    private _robotSoftwareSuite = new CcSimulationApplication.RobotSoftwareSuitePropertyOutputReference(this, "robot_software_suite");
    public get robotSoftwareSuite() {
        return this._robotSoftwareSuite;
    }
    public putRobotSoftwareSuite(value: CcSimulationApplication.RobotSoftwareSuiteProperty) {
        this._robotSoftwareSuite.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get robotSoftwareSuiteInput() {
        return this._robotSoftwareSuite.internalValue;
    }

    // simulation_software_suite - computed: false, optional: false, required: true
    private _simulationSoftwareSuite = new CcSimulationApplication.SimulationSoftwareSuitePropertyOutputReference(this, "simulation_software_suite");
    public get simulationSoftwareSuite() {
        return this._simulationSoftwareSuite;
    }
    public putSimulationSoftwareSuite(value: CcSimulationApplication.SimulationSoftwareSuiteProperty) {
        this._simulationSoftwareSuite.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get simulationSoftwareSuiteInput() {
        return this._simulationSoftwareSuite.internalValue;
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new CcSimulationApplication.SourceConfigPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: CcSimulationApplication.SourceConfigProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    public resetSources() {
        this._sources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
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
            current_revision_id: cdktn.stringToTerraform(this._currentRevisionId),
            environment: cdktn.stringToTerraform(this._environment),
            name: cdktn.stringToTerraform(this._name),
            rendering_engine: ccSimulationApplicationRenderingEnginePropertyToTerraform(this._renderingEngine.internalValue),
            robot_software_suite: ccSimulationApplicationRobotSoftwareSuitePropertyToTerraform(this._robotSoftwareSuite.internalValue),
            simulation_software_suite: ccSimulationApplicationSimulationSoftwareSuitePropertyToTerraform(this._simulationSoftwareSuite.internalValue),
            sources: cdktn.listMapper(ccSimulationApplicationSourceConfigPropertyToTerraform, false)(this._sources.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            current_revision_id: {
                value: cdktn.stringToHclTerraform(this._currentRevisionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment: {
                value: cdktn.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rendering_engine: {
                value: ccSimulationApplicationRenderingEnginePropertyToHclTerraform(this._renderingEngine.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSimulationApplication.RenderingEngineProperty",
            },
            robot_software_suite: {
                value: ccSimulationApplicationRobotSoftwareSuitePropertyToHclTerraform(this._robotSoftwareSuite.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSimulationApplication.RobotSoftwareSuiteProperty",
            },
            simulation_software_suite: {
                value: ccSimulationApplicationSimulationSoftwareSuitePropertyToHclTerraform(this._simulationSoftwareSuite.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSimulationApplication.SimulationSoftwareSuiteProperty",
            },
            sources: {
                value: cdktn.listMapperHcl(ccSimulationApplicationSourceConfigPropertyToHclTerraform, false)(this._sources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSimulationApplication.SourceConfigPropertyList",
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

export function ccSimulationApplicationRenderingEnginePropertyToTerraform(struct?: CcSimulationApplication.RenderingEngineProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccSimulationApplicationRenderingEnginePropertyToHclTerraform(struct?: CcSimulationApplication.RenderingEngineProperty | cdktn.IResolvable): any {
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


export function ccSimulationApplicationRobotSoftwareSuitePropertyToTerraform(struct?: CcSimulationApplication.RobotSoftwareSuiteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccSimulationApplicationRobotSoftwareSuitePropertyToHclTerraform(struct?: CcSimulationApplication.RobotSoftwareSuiteProperty | cdktn.IResolvable): any {
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


export function ccSimulationApplicationSimulationSoftwareSuitePropertyToTerraform(struct?: CcSimulationApplication.SimulationSoftwareSuiteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccSimulationApplicationSimulationSoftwareSuitePropertyToHclTerraform(struct?: CcSimulationApplication.SimulationSoftwareSuiteProperty | cdktn.IResolvable): any {
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


export function ccSimulationApplicationSourceConfigPropertyToTerraform(struct?: CcSimulationApplication.SourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        architecture: cdktn.stringToTerraform(struct!.architecture),
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccSimulationApplicationSourceConfigPropertyToHclTerraform(struct?: CcSimulationApplication.SourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        architecture: {
            value: cdktn.stringToHclTerraform(struct!.architecture),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSimulationApplication {
export interface RenderingEngineProperty {
    /**
    * The name of the rendering engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#name CcSimulationApplication#name}
    */
    readonly name?: string;
    /**
    * The version of the rendering engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#version CcSimulationApplication#version}
    */
    readonly version?: string;
}
export class RenderingEnginePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RenderingEngineProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RenderingEngineProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._version = value.version;
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

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface RobotSoftwareSuiteProperty {
    /**
    * The name of the robot software suite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#name CcSimulationApplication#name}
    */
    readonly name: string;
    /**
    * The version of the robot software suite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#version CcSimulationApplication#version}
    */
    readonly version?: string;
}
export class RobotSoftwareSuitePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RobotSoftwareSuiteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RobotSoftwareSuiteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._version = value.version;
        }
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface SimulationSoftwareSuiteProperty {
    /**
    * The name of the simulation software suite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#name CcSimulationApplication#name}
    */
    readonly name: string;
    /**
    * The version of the simulation software suite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#version CcSimulationApplication#version}
    */
    readonly version?: string;
}
export class SimulationSoftwareSuitePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SimulationSoftwareSuiteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SimulationSoftwareSuiteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._version = value.version;
        }
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface SourceConfigProperty {
    /**
    * The target processor architecture for the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#architecture CcSimulationApplication#architecture}
    */
    readonly architecture?: string;
    /**
    * The Amazon S3 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#s3_bucket CcSimulationApplication#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * The s3 object key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_simulation_application#s3_key CcSimulationApplication#s3_key}
    */
    readonly s3Key?: string;
}
export class SourceConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._architecture !== undefined) {
            hasAnyValues = true;
            internalValueResult.architecture = this._architecture;
        }
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._architecture = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._architecture = value.architecture;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
        }
    }

    // architecture - computed: true, optional: true, required: false
    private _architecture?: string; 
    public get architecture() {
        return this.getStringAttribute('architecture');
    }
    public set architecture(value: string) {
        this._architecture = value;
    }
    public resetArchitecture() {
        this._architecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architectureInput() {
        return this._architecture;
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}

export class SourceConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceConfigPropertyOutputReference {
        return new SourceConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
