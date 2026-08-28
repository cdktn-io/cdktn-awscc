// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRobotApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The revision ID of robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#current_revision_id CcRobotApplication#current_revision_id}
    */
    readonly currentRevisionId?: string;
    /**
    * The URI of the Docker image for the robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#environment CcRobotApplication#environment}
    */
    readonly environment?: string;
    /**
    * The name of the robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#name CcRobotApplication#name}
    */
    readonly name?: string;
    /**
    * The robot software suite used by the robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#robot_software_suite CcRobotApplication#robot_software_suite}
    */
    readonly robotSoftwareSuite: CcRobotApplication.RobotSoftwareSuiteProperty;
    /**
    * The sources of the robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#sources CcRobotApplication#sources}
    */
    readonly sources?: CcRobotApplication.SourceConfigProperty[] | cdktn.IResolvable;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#tags CcRobotApplication#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application awscc_robomaker_robot_application}
*/
export class CcRobotApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_robomaker_robot_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRobotApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRobotApplication to import
    * @param importFromId The id of the existing CcRobotApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRobotApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_robomaker_robot_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application awscc_robomaker_robot_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRobotApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcRobotApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_robomaker_robot_application',
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
        this._currentRevisionId = config.currentRevisionId;
        this._environment = config.environment;
        this._name = config.name;
        this._robotSoftwareSuite.internalValue = config.robotSoftwareSuite;
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

    // robot_software_suite - computed: false, optional: false, required: true
    private _robotSoftwareSuite = new CcRobotApplication.RobotSoftwareSuitePropertyOutputReference(this, "robot_software_suite");
    public get robotSoftwareSuite() {
        return this._robotSoftwareSuite;
    }
    public putRobotSoftwareSuite(value: CcRobotApplication.RobotSoftwareSuiteProperty) {
        this._robotSoftwareSuite.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get robotSoftwareSuiteInput() {
        return this._robotSoftwareSuite.internalValue;
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new CcRobotApplication.SourceConfigPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: CcRobotApplication.SourceConfigProperty[] | cdktn.IResolvable) {
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
            robot_software_suite: ccRobotApplicationRobotSoftwareSuitePropertyToTerraform(this._robotSoftwareSuite.internalValue),
            sources: cdktn.listMapper(ccRobotApplicationSourceConfigPropertyToTerraform, false)(this._sources.internalValue),
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
            robot_software_suite: {
                value: ccRobotApplicationRobotSoftwareSuitePropertyToHclTerraform(this._robotSoftwareSuite.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRobotApplication.RobotSoftwareSuiteProperty",
            },
            sources: {
                value: cdktn.listMapperHcl(ccRobotApplicationSourceConfigPropertyToHclTerraform, false)(this._sources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRobotApplication.SourceConfigPropertyList",
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

export function ccRobotApplicationRobotSoftwareSuitePropertyToTerraform(struct?: CcRobotApplication.RobotSoftwareSuiteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccRobotApplicationRobotSoftwareSuitePropertyToHclTerraform(struct?: CcRobotApplication.RobotSoftwareSuiteProperty | cdktn.IResolvable): any {
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


export function ccRobotApplicationSourceConfigPropertyToTerraform(struct?: CcRobotApplication.SourceConfigProperty | cdktn.IResolvable): any {
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


export function ccRobotApplicationSourceConfigPropertyToHclTerraform(struct?: CcRobotApplication.SourceConfigProperty | cdktn.IResolvable): any {
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


export namespace CcRobotApplication {
export interface RobotSoftwareSuiteProperty {
    /**
    * The name of robot software suite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#name CcRobotApplication#name}
    */
    readonly name: string;
    /**
    * The version of robot software suite.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#version CcRobotApplication#version}
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
export interface SourceConfigProperty {
    /**
    * The architecture of robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#architecture CcRobotApplication#architecture}
    */
    readonly architecture?: string;
    /**
    * The Arn of the S3Bucket that stores the robot application source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#s3_bucket CcRobotApplication#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * The s3 key of robot application source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/robomaker_robot_application#s3_key CcRobotApplication#s3_key}
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
