// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSimulationProps extends cdktn.TerraformMetaArguments {
    /**
    * The maximum running time of the simulation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#maximum_duration CcSimulation#maximum_duration}
    */
    readonly maximumDuration?: string;
    /**
    * The name of the simulation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#name CcSimulation#name}
    */
    readonly name: string;
    /**
    * Role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#role_arn CcSimulation#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#schema_s3_location CcSimulation#schema_s3_location}
    */
    readonly schemaS3Location?: CcSimulation.S3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#snapshot_s3_location CcSimulation#snapshot_s3_location}
    */
    readonly snapshotS3Location?: CcSimulation.SnapshotS3LocationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation}
*/
export class CcSimulation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_simspaceweaver_simulation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSimulation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSimulation to import
    * @param importFromId The id of the existing CcSimulation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSimulation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_simspaceweaver_simulation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSimulationProps
    */
    public constructor(scope: Construct, id: string, config: CcSimulationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_simspaceweaver_simulation',
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
        this._maximumDuration = config.maximumDuration;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._schemaS3Location.internalValue = config.schemaS3Location;
        this._snapshotS3Location.internalValue = config.snapshotS3Location;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // describe_payload - computed: true, optional: false, required: false
    public get describePayload() {
        return this.getStringAttribute('describe_payload');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // maximum_duration - computed: true, optional: true, required: false
    private _maximumDuration?: string; 
    public get maximumDuration() {
        return this.getStringAttribute('maximum_duration');
    }
    public set maximumDuration(value: string) {
        this._maximumDuration = value;
    }
    public resetMaximumDuration() {
        this._maximumDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumDurationInput() {
        return this._maximumDuration;
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

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // schema_s3_location - computed: true, optional: true, required: false
    private _schemaS3Location = new CcSimulation.S3LocationPropertyOutputReference(this, "schema_s3_location");
    public get schemaS3Location() {
        return this._schemaS3Location;
    }
    public putSchemaS3Location(value: CcSimulation.S3LocationProperty) {
        this._schemaS3Location.internalValue = value;
    }
    public resetSchemaS3Location() {
        this._schemaS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaS3LocationInput() {
        return this._schemaS3Location.internalValue;
    }

    // snapshot_s3_location - computed: true, optional: true, required: false
    private _snapshotS3Location = new CcSimulation.SnapshotS3LocationPropertyOutputReference(this, "snapshot_s3_location");
    public get snapshotS3Location() {
        return this._snapshotS3Location;
    }
    public putSnapshotS3Location(value: CcSimulation.SnapshotS3LocationProperty) {
        this._snapshotS3Location.internalValue = value;
    }
    public resetSnapshotS3Location() {
        this._snapshotS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotS3LocationInput() {
        return this._snapshotS3Location.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            maximum_duration: cdktn.stringToTerraform(this._maximumDuration),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            schema_s3_location: ccSimulationS3LocationPropertyToTerraform(this._schemaS3Location.internalValue),
            snapshot_s3_location: ccSimulationSnapshotS3LocationPropertyToTerraform(this._snapshotS3Location.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            maximum_duration: {
                value: cdktn.stringToHclTerraform(this._maximumDuration),
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
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schema_s3_location: {
                value: ccSimulationS3LocationPropertyToHclTerraform(this._schemaS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSimulation.S3LocationProperty",
            },
            snapshot_s3_location: {
                value: ccSimulationSnapshotS3LocationPropertyToHclTerraform(this._snapshotS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSimulation.SnapshotS3LocationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSimulationS3LocationPropertyToTerraform(struct?: CcSimulation.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        object_key: cdktn.stringToTerraform(struct!.objectKey),
    }
}


export function ccSimulationS3LocationPropertyToHclTerraform(struct?: CcSimulation.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_key: {
            value: cdktn.stringToHclTerraform(struct!.objectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSimulationSnapshotS3LocationPropertyToTerraform(struct?: CcSimulation.SnapshotS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        object_key: cdktn.stringToTerraform(struct!.objectKey),
    }
}


export function ccSimulationSnapshotS3LocationPropertyToHclTerraform(struct?: CcSimulation.SnapshotS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_key: {
            value: cdktn.stringToHclTerraform(struct!.objectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSimulation {
export interface S3LocationProperty {
    /**
    * The Schema S3 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#bucket_name CcSimulation#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#object_key CcSimulation#object_key}
    */
    readonly objectKey?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._objectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectKey = this._objectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._objectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._objectKey = value.objectKey;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // object_key - computed: true, optional: true, required: false
    private _objectKey?: string; 
    public get objectKey() {
        return this.getStringAttribute('object_key');
    }
    public set objectKey(value: string) {
        this._objectKey = value;
    }
    public resetObjectKey() {
        this._objectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectKeyInput() {
        return this._objectKey;
    }
}
export interface SnapshotS3LocationProperty {
    /**
    * The Schema S3 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#bucket_name CcSimulation#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/simspaceweaver_simulation#object_key CcSimulation#object_key}
    */
    readonly objectKey?: string;
}
export class SnapshotS3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnapshotS3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._objectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectKey = this._objectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnapshotS3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._objectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._objectKey = value.objectKey;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // object_key - computed: true, optional: true, required: false
    private _objectKey?: string; 
    public get objectKey() {
        return this.getStringAttribute('object_key');
    }
    public set objectKey(value: string) {
        this._objectKey = value;
    }
    public resetObjectKey() {
        this._objectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectKeyInput() {
        return this._objectKey;
    }
}
}
