// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMlflowTrackingServerProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon S3 URI for MLFlow Tracking Server artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri CcMlflowTrackingServer#artifact_store_uri}
    */
    readonly artifactStoreUri: string;
    /**
    * A flag to enable Automatic SageMaker Model Registration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration CcMlflowTrackingServer#automatic_model_registration}
    */
    readonly automaticModelRegistration?: boolean | cdktn.IResolvable;
    /**
    * The MLFlow Version used on the MLFlow Tracking Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version CcMlflowTrackingServer#mlflow_version}
    */
    readonly mlflowVersion?: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn CcMlflowTrackingServer#role_arn}
    */
    readonly roleArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#tags CcMlflowTrackingServer#tags}
    */
    readonly tags?: CcMlflowTrackingServer.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the MLFlow Tracking Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name CcMlflowTrackingServer#tracking_server_name}
    */
    readonly trackingServerName: string;
    /**
    * The size of the MLFlow Tracking Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size CcMlflowTrackingServer#tracking_server_size}
    */
    readonly trackingServerSize?: string;
    /**
    * The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start CcMlflowTrackingServer#weekly_maintenance_window_start}
    */
    readonly weeklyMaintenanceWindowStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server awscc_sagemaker_mlflow_tracking_server}
*/
export class CcMlflowTrackingServer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_mlflow_tracking_server";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMlflowTrackingServer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMlflowTrackingServer to import
    * @param importFromId The id of the existing CcMlflowTrackingServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMlflowTrackingServer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_mlflow_tracking_server", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server awscc_sagemaker_mlflow_tracking_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMlflowTrackingServerProps
    */
    public constructor(scope: Construct, id: string, config: CcMlflowTrackingServerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_mlflow_tracking_server',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._artifactStoreUri = config.artifactStoreUri;
        this._automaticModelRegistration = config.automaticModelRegistration;
        this._mlflowVersion = config.mlflowVersion;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._trackingServerName = config.trackingServerName;
        this._trackingServerSize = config.trackingServerSize;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // artifact_store_uri - computed: false, optional: false, required: true
    private _artifactStoreUri?: string; 
    public get artifactStoreUri() {
        return this.getStringAttribute('artifact_store_uri');
    }
    public set artifactStoreUri(value: string) {
        this._artifactStoreUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactStoreUriInput() {
        return this._artifactStoreUri;
    }

    // automatic_model_registration - computed: true, optional: true, required: false
    private _automaticModelRegistration?: boolean | cdktn.IResolvable; 
    public get automaticModelRegistration() {
        return this.getBooleanAttribute('automatic_model_registration');
    }
    public set automaticModelRegistration(value: boolean | cdktn.IResolvable) {
        this._automaticModelRegistration = value;
    }
    public resetAutomaticModelRegistration() {
        this._automaticModelRegistration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticModelRegistrationInput() {
        return this._automaticModelRegistration;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mlflow_version - computed: true, optional: true, required: false
    private _mlflowVersion?: string; 
    public get mlflowVersion() {
        return this.getStringAttribute('mlflow_version');
    }
    public set mlflowVersion(value: string) {
        this._mlflowVersion = value;
    }
    public resetMlflowVersion() {
        this._mlflowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlflowVersionInput() {
        return this._mlflowVersion;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMlflowTrackingServer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMlflowTrackingServer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tracking_server_arn - computed: true, optional: false, required: false
    public get trackingServerArn() {
        return this.getStringAttribute('tracking_server_arn');
    }

    // tracking_server_name - computed: false, optional: false, required: true
    private _trackingServerName?: string; 
    public get trackingServerName() {
        return this.getStringAttribute('tracking_server_name');
    }
    public set trackingServerName(value: string) {
        this._trackingServerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trackingServerNameInput() {
        return this._trackingServerName;
    }

    // tracking_server_size - computed: true, optional: true, required: false
    private _trackingServerSize?: string; 
    public get trackingServerSize() {
        return this.getStringAttribute('tracking_server_size');
    }
    public set trackingServerSize(value: string) {
        this._trackingServerSize = value;
    }
    public resetTrackingServerSize() {
        this._trackingServerSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackingServerSizeInput() {
        return this._trackingServerSize;
    }

    // weekly_maintenance_window_start - computed: true, optional: true, required: false
    private _weeklyMaintenanceWindowStart?: string; 
    public get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
    }
    public set weeklyMaintenanceWindowStart(value: string) {
        this._weeklyMaintenanceWindowStart = value;
    }
    public resetWeeklyMaintenanceWindowStart() {
        this._weeklyMaintenanceWindowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklyMaintenanceWindowStartInput() {
        return this._weeklyMaintenanceWindowStart;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            artifact_store_uri: cdktn.stringToTerraform(this._artifactStoreUri),
            automatic_model_registration: cdktn.booleanToTerraform(this._automaticModelRegistration),
            mlflow_version: cdktn.stringToTerraform(this._mlflowVersion),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccMlflowTrackingServerTagPropertyToTerraform, false)(this._tags.internalValue),
            tracking_server_name: cdktn.stringToTerraform(this._trackingServerName),
            tracking_server_size: cdktn.stringToTerraform(this._trackingServerSize),
            weekly_maintenance_window_start: cdktn.stringToTerraform(this._weeklyMaintenanceWindowStart),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            artifact_store_uri: {
                value: cdktn.stringToHclTerraform(this._artifactStoreUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automatic_model_registration: {
                value: cdktn.booleanToHclTerraform(this._automaticModelRegistration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mlflow_version: {
                value: cdktn.stringToHclTerraform(this._mlflowVersion),
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
            tags: {
                value: cdktn.listMapperHcl(ccMlflowTrackingServerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMlflowTrackingServer.TagPropertyList",
            },
            tracking_server_name: {
                value: cdktn.stringToHclTerraform(this._trackingServerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tracking_server_size: {
                value: cdktn.stringToHclTerraform(this._trackingServerSize),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            weekly_maintenance_window_start: {
                value: cdktn.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMlflowTrackingServerTagPropertyToTerraform(struct?: CcMlflowTrackingServer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMlflowTrackingServerTagPropertyToHclTerraform(struct?: CcMlflowTrackingServer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMlflowTrackingServer {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#key CcMlflowTrackingServer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_mlflow_tracking_server#value CcMlflowTrackingServer#value}
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
