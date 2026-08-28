// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMlflowAppProps extends cdktn.TerraformMetaArguments {
    /**
    * The S3 URI for a general purpose bucket to use as the MLflow App artifact store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#artifact_store_uri CcMlflowApp#artifact_store_uri}
    */
    readonly artifactStoreUri: string;
    /**
    * Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#model_registration_mode CcMlflowApp#model_registration_mode}
    */
    readonly modelRegistrationMode?: string;
    /**
    * The name of the MLflow App.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#name CcMlflowApp#name}
    */
    readonly name: string;
    /**
    * The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#role_arn CcMlflowApp#role_arn}
    */
    readonly roleArn: string;
    /**
    * Tags to associate with the MLflow App.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#tags CcMlflowApp#tags}
    */
    readonly tags?: CcMlflowApp.TagProperty[] | cdktn.IResolvable;
    /**
    * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: Tue:03:30.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start CcMlflowApp#weekly_maintenance_window_start}
    */
    readonly weeklyMaintenanceWindowStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app awscc_sagemaker_mlflow_app}
*/
export class CcMlflowApp extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_mlflow_app";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMlflowApp resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMlflowApp to import
    * @param importFromId The id of the existing CcMlflowApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMlflowApp to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_mlflow_app", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app awscc_sagemaker_mlflow_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMlflowAppProps
    */
    public constructor(scope: Construct, id: string, config: CcMlflowAppProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_mlflow_app',
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
        this._artifactStoreUri = config.artifactStoreUri;
        this._modelRegistrationMode = config.modelRegistrationMode;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

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

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // mlflow_app_id - computed: true, optional: false, required: false
    public get mlflowAppId() {
        return this.getStringAttribute('mlflow_app_id');
    }

    // mlflow_version - computed: true, optional: false, required: false
    public get mlflowVersion() {
        return this.getStringAttribute('mlflow_version');
    }

    // model_registration_mode - computed: true, optional: true, required: false
    private _modelRegistrationMode?: string; 
    public get modelRegistrationMode() {
        return this.getStringAttribute('model_registration_mode');
    }
    public set modelRegistrationMode(value: string) {
        this._modelRegistrationMode = value;
    }
    public resetModelRegistrationMode() {
        this._modelRegistrationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelRegistrationModeInput() {
        return this._modelRegistrationMode;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMlflowApp.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMlflowApp.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            model_registration_mode: cdktn.stringToTerraform(this._modelRegistrationMode),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccMlflowAppTagPropertyToTerraform, false)(this._tags.internalValue),
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
            model_registration_mode: {
                value: cdktn.stringToHclTerraform(this._modelRegistrationMode),
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
            tags: {
                value: cdktn.listMapperHcl(ccMlflowAppTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMlflowApp.TagPropertyList",
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

export function ccMlflowAppTagPropertyToTerraform(struct?: CcMlflowApp.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMlflowAppTagPropertyToHclTerraform(struct?: CcMlflowApp.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMlflowApp {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#key CcMlflowApp#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_mlflow_app#value CcMlflowApp#value}
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
