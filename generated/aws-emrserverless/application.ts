// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The cpu architecture of an application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#architecture CcApplication#architecture}
    */
    readonly architecture?: string;
    /**
    * Configuration for Auto Start of Application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#auto_start_configuration CcApplication#auto_start_configuration}
    */
    readonly autoStartConfiguration?: CcApplication.AutoStartConfigurationProperty;
    /**
    * Configuration for Auto Stop of Application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#auto_stop_configuration CcApplication#auto_stop_configuration}
    */
    readonly autoStopConfiguration?: CcApplication.AutoStopConfigurationProperty;
    /**
    * The image configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#image_configuration CcApplication#image_configuration}
    */
    readonly imageConfiguration?: CcApplication.ImageConfigurationInputProperty;
    /**
    * Initial capacity initialized when an Application is started.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#initial_capacity CcApplication#initial_capacity}
    */
    readonly initialCapacity?: CcApplication.InitialCapacityConfigKeyValuePairProperty[] | cdktn.IResolvable;
    /**
    * Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#maximum_capacity CcApplication#maximum_capacity}
    */
    readonly maximumCapacity?: CcApplication.MaximumAllowedResourcesProperty;
    /**
    * User friendly Application name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#name CcApplication#name}
    */
    readonly name?: string;
    /**
    * Network Configuration for customer VPC connectivity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#network_configuration CcApplication#network_configuration}
    */
    readonly networkConfiguration?: CcApplication.NetworkConfigurationProperty;
    /**
    * EMR release label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#release_label CcApplication#release_label}
    */
    readonly releaseLabel: string;
    /**
    * Tag map with key and value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of the application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#type CcApplication#type}
    */
    readonly type: string;
    /**
    * The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#worker_type_specifications CcApplication#worker_type_specifications}
    */
    readonly workerTypeSpecifications?: { [key: string]: CcApplication.WorkerTypeSpecificationInputProperty } | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application awscc_emrserverless_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_emrserverless_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_emrserverless_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application awscc_emrserverless_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_emrserverless_application',
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
        this._architecture = config.architecture;
        this._autoStartConfiguration.internalValue = config.autoStartConfiguration;
        this._autoStopConfiguration.internalValue = config.autoStopConfiguration;
        this._imageConfiguration.internalValue = config.imageConfiguration;
        this._initialCapacity.internalValue = config.initialCapacity;
        this._maximumCapacity.internalValue = config.maximumCapacity;
        this._name = config.name;
        this._networkConfiguration.internalValue = config.networkConfiguration;
        this._releaseLabel = config.releaseLabel;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._workerTypeSpecifications.internalValue = config.workerTypeSpecifications;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
        return this.getStringAttribute('application_id');
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_start_configuration - computed: true, optional: true, required: false
    private _autoStartConfiguration = new CcApplication.AutoStartConfigurationPropertyOutputReference(this, "auto_start_configuration");
    public get autoStartConfiguration() {
        return this._autoStartConfiguration;
    }
    public putAutoStartConfiguration(value: CcApplication.AutoStartConfigurationProperty) {
        this._autoStartConfiguration.internalValue = value;
    }
    public resetAutoStartConfiguration() {
        this._autoStartConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoStartConfigurationInput() {
        return this._autoStartConfiguration.internalValue;
    }

    // auto_stop_configuration - computed: true, optional: true, required: false
    private _autoStopConfiguration = new CcApplication.AutoStopConfigurationPropertyOutputReference(this, "auto_stop_configuration");
    public get autoStopConfiguration() {
        return this._autoStopConfiguration;
    }
    public putAutoStopConfiguration(value: CcApplication.AutoStopConfigurationProperty) {
        this._autoStopConfiguration.internalValue = value;
    }
    public resetAutoStopConfiguration() {
        this._autoStopConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoStopConfigurationInput() {
        return this._autoStopConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_configuration - computed: true, optional: true, required: false
    private _imageConfiguration = new CcApplication.ImageConfigurationInputPropertyOutputReference(this, "image_configuration");
    public get imageConfiguration() {
        return this._imageConfiguration;
    }
    public putImageConfiguration(value: CcApplication.ImageConfigurationInputProperty) {
        this._imageConfiguration.internalValue = value;
    }
    public resetImageConfiguration() {
        this._imageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigurationInput() {
        return this._imageConfiguration.internalValue;
    }

    // initial_capacity - computed: true, optional: true, required: false
    private _initialCapacity = new CcApplication.InitialCapacityConfigKeyValuePairPropertyList(this, "initial_capacity", true);
    public get initialCapacity() {
        return this._initialCapacity;
    }
    public putInitialCapacity(value: CcApplication.InitialCapacityConfigKeyValuePairProperty[] | cdktn.IResolvable) {
        this._initialCapacity.internalValue = value;
    }
    public resetInitialCapacity() {
        this._initialCapacity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialCapacityInput() {
        return this._initialCapacity.internalValue;
    }

    // maximum_capacity - computed: true, optional: true, required: false
    private _maximumCapacity = new CcApplication.MaximumAllowedResourcesPropertyOutputReference(this, "maximum_capacity");
    public get maximumCapacity() {
        return this._maximumCapacity;
    }
    public putMaximumCapacity(value: CcApplication.MaximumAllowedResourcesProperty) {
        this._maximumCapacity.internalValue = value;
    }
    public resetMaximumCapacity() {
        this._maximumCapacity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumCapacityInput() {
        return this._maximumCapacity.internalValue;
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

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new CcApplication.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: CcApplication.NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // release_label - computed: false, optional: false, required: true
    private _releaseLabel?: string; 
    public get releaseLabel() {
        return this.getStringAttribute('release_label');
    }
    public set releaseLabel(value: string) {
        this._releaseLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get releaseLabelInput() {
        return this._releaseLabel;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplication.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplication.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // worker_type_specifications - computed: true, optional: true, required: false
    private _workerTypeSpecifications = new CcApplication.WorkerTypeSpecificationInputPropertyMap(this, "worker_type_specifications");
    public get workerTypeSpecifications() {
        return this._workerTypeSpecifications;
    }
    public putWorkerTypeSpecifications(value: { [key: string]: CcApplication.WorkerTypeSpecificationInputProperty } | cdktn.IResolvable) {
        this._workerTypeSpecifications.internalValue = value;
    }
    public resetWorkerTypeSpecifications() {
        this._workerTypeSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeSpecificationsInput() {
        return this._workerTypeSpecifications.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            architecture: cdktn.stringToTerraform(this._architecture),
            auto_start_configuration: ccApplicationAutoStartConfigurationPropertyToTerraform(this._autoStartConfiguration.internalValue),
            auto_stop_configuration: ccApplicationAutoStopConfigurationPropertyToTerraform(this._autoStopConfiguration.internalValue),
            image_configuration: ccApplicationImageConfigurationInputPropertyToTerraform(this._imageConfiguration.internalValue),
            initial_capacity: cdktn.listMapper(ccApplicationInitialCapacityConfigKeyValuePairPropertyToTerraform, false)(this._initialCapacity.internalValue),
            maximum_capacity: ccApplicationMaximumAllowedResourcesPropertyToTerraform(this._maximumCapacity.internalValue),
            name: cdktn.stringToTerraform(this._name),
            network_configuration: ccApplicationNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
            release_label: cdktn.stringToTerraform(this._releaseLabel),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            worker_type_specifications: cdktn.hashMapper(ccApplicationWorkerTypeSpecificationInputPropertyToTerraform)(this._workerTypeSpecifications.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            architecture: {
                value: cdktn.stringToHclTerraform(this._architecture),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_start_configuration: {
                value: ccApplicationAutoStartConfigurationPropertyToHclTerraform(this._autoStartConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.AutoStartConfigurationProperty",
            },
            auto_stop_configuration: {
                value: ccApplicationAutoStopConfigurationPropertyToHclTerraform(this._autoStopConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.AutoStopConfigurationProperty",
            },
            image_configuration: {
                value: ccApplicationImageConfigurationInputPropertyToHclTerraform(this._imageConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.ImageConfigurationInputProperty",
            },
            initial_capacity: {
                value: cdktn.listMapperHcl(ccApplicationInitialCapacityConfigKeyValuePairPropertyToHclTerraform, false)(this._initialCapacity.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcApplication.InitialCapacityConfigKeyValuePairPropertyList",
            },
            maximum_capacity: {
                value: ccApplicationMaximumAllowedResourcesPropertyToHclTerraform(this._maximumCapacity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.MaximumAllowedResourcesProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_configuration: {
                value: ccApplicationNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.NetworkConfigurationProperty",
            },
            release_label: {
                value: cdktn.stringToHclTerraform(this._releaseLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcApplication.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            worker_type_specifications: {
                value: cdktn.hashMapperHcl(ccApplicationWorkerTypeSpecificationInputPropertyToHclTerraform)(this._workerTypeSpecifications.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcApplication.WorkerTypeSpecificationInputPropertyMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationAutoStartConfigurationPropertyToTerraform(struct?: CcApplication.AutoStartConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccApplicationAutoStartConfigurationPropertyToHclTerraform(struct?: CcApplication.AutoStartConfigurationProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationAutoStopConfigurationPropertyToTerraform(struct?: CcApplication.AutoStopConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        idle_timeout_minutes: cdktn.numberToTerraform(struct!.idleTimeoutMinutes),
    }
}


export function ccApplicationAutoStopConfigurationPropertyToHclTerraform(struct?: CcApplication.AutoStopConfigurationProperty | cdktn.IResolvable): any {
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
        idle_timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationImageConfigurationInputPropertyToTerraform(struct?: CcApplication.ImageConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
    }
}


export function ccApplicationImageConfigurationInputPropertyToHclTerraform(struct?: CcApplication.ImageConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationWorkerConfigurationPropertyToTerraform(struct?: CcApplication.WorkerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: cdktn.stringToTerraform(struct!.cpu),
        disk: cdktn.stringToTerraform(struct!.disk),
        memory: cdktn.stringToTerraform(struct!.memory),
    }
}


export function ccApplicationWorkerConfigurationPropertyToHclTerraform(struct?: CcApplication.WorkerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: cdktn.stringToHclTerraform(struct!.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disk: {
            value: cdktn.stringToHclTerraform(struct!.disk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktn.stringToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationInitialCapacityConfigPropertyToTerraform(struct?: CcApplication.InitialCapacityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        worker_configuration: ccApplicationWorkerConfigurationPropertyToTerraform(struct!.workerConfiguration),
        worker_count: cdktn.numberToTerraform(struct!.workerCount),
    }
}


export function ccApplicationInitialCapacityConfigPropertyToHclTerraform(struct?: CcApplication.InitialCapacityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        worker_configuration: {
            value: ccApplicationWorkerConfigurationPropertyToHclTerraform(struct!.workerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerConfigurationProperty",
        },
        worker_count: {
            value: cdktn.numberToHclTerraform(struct!.workerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationInitialCapacityConfigKeyValuePairPropertyToTerraform(struct?: CcApplication.InitialCapacityConfigKeyValuePairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: ccApplicationInitialCapacityConfigPropertyToTerraform(struct!.value),
    }
}


export function ccApplicationInitialCapacityConfigKeyValuePairPropertyToHclTerraform(struct?: CcApplication.InitialCapacityConfigKeyValuePairProperty | cdktn.IResolvable): any {
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
            value: ccApplicationInitialCapacityConfigPropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "InitialCapacityConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationMaximumAllowedResourcesPropertyToTerraform(struct?: CcApplication.MaximumAllowedResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: cdktn.stringToTerraform(struct!.cpu),
        disk: cdktn.stringToTerraform(struct!.disk),
        memory: cdktn.stringToTerraform(struct!.memory),
    }
}


export function ccApplicationMaximumAllowedResourcesPropertyToHclTerraform(struct?: CcApplication.MaximumAllowedResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: cdktn.stringToHclTerraform(struct!.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disk: {
            value: cdktn.stringToHclTerraform(struct!.disk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktn.stringToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationNetworkConfigurationPropertyToTerraform(struct?: CcApplication.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccApplicationNetworkConfigurationPropertyToHclTerraform(struct?: CcApplication.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationTagPropertyToTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationTagPropertyToHclTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
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


export function ccApplicationImageConfigurationPropertyToTerraform(struct?: CcApplication.ImageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
    }
}


export function ccApplicationImageConfigurationPropertyToHclTerraform(struct?: CcApplication.ImageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationWorkerTypeSpecificationInputPropertyToTerraform(struct?: CcApplication.WorkerTypeSpecificationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_configuration: ccApplicationImageConfigurationPropertyToTerraform(struct!.imageConfiguration),
    }
}


export function ccApplicationWorkerTypeSpecificationInputPropertyToHclTerraform(struct?: CcApplication.WorkerTypeSpecificationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_configuration: {
            value: ccApplicationImageConfigurationPropertyToHclTerraform(struct!.imageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcApplication {
export interface AutoStartConfigurationProperty {
    /**
    * If set to true, the Application will automatically start. Defaults to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#enabled CcApplication#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class AutoStartConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoStartConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoStartConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface AutoStopConfigurationProperty {
    /**
    * If set to true, the Application will automatically stop after being idle. Defaults to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#enabled CcApplication#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#idle_timeout_minutes CcApplication#idle_timeout_minutes}
    */
    readonly idleTimeoutMinutes?: number;
}
export class AutoStopConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoStopConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._idleTimeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeoutMinutes = this._idleTimeoutMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoStopConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._idleTimeoutMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._idleTimeoutMinutes = value.idleTimeoutMinutes;
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

    // idle_timeout_minutes - computed: true, optional: true, required: false
    private _idleTimeoutMinutes?: number; 
    public get idleTimeoutMinutes() {
        return this.getNumberAttribute('idle_timeout_minutes');
    }
    public set idleTimeoutMinutes(value: number) {
        this._idleTimeoutMinutes = value;
    }
    public resetIdleTimeoutMinutes() {
        this._idleTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutMinutesInput() {
        return this._idleTimeoutMinutes;
    }
}
export interface ImageConfigurationInputProperty {
    /**
    * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#image_uri CcApplication#image_uri}
    */
    readonly imageUri?: string;
}
export class ImageConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageUri = value.imageUri;
        }
    }

    // image_uri - computed: true, optional: true, required: false
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    public resetImageUri() {
        this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
    }
}
export interface WorkerConfigurationProperty {
    /**
    * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#cpu CcApplication#cpu}
    */
    readonly cpu?: string;
    /**
    * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#disk CcApplication#disk}
    */
    readonly disk?: string;
    /**
    * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#memory CcApplication#memory}
    */
    readonly memory?: string;
}
export class WorkerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._disk !== undefined) {
            hasAnyValues = true;
            internalValueResult.disk = this._disk;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpu = undefined;
            this._disk = undefined;
            this._memory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpu = value.cpu;
            this._disk = value.disk;
            this._memory = value.memory;
        }
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu?: string; 
    public get cpu() {
        return this.getStringAttribute('cpu');
    }
    public set cpu(value: string) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // disk - computed: true, optional: true, required: false
    private _disk?: string; 
    public get disk() {
        return this.getStringAttribute('disk');
    }
    public set disk(value: string) {
        this._disk = value;
    }
    public resetDisk() {
        this._disk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskInput() {
        return this._disk;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: string; 
    public get memory() {
        return this.getStringAttribute('memory');
    }
    public set memory(value: string) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }
}
export interface InitialCapacityConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#worker_configuration CcApplication#worker_configuration}
    */
    readonly workerConfiguration?: WorkerConfigurationProperty;
    /**
    * Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#worker_count CcApplication#worker_count}
    */
    readonly workerCount?: number;
}
export class InitialCapacityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InitialCapacityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerConfiguration = this._workerConfiguration?.internalValue;
        }
        if (this._workerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerCount = this._workerCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InitialCapacityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workerConfiguration.internalValue = undefined;
            this._workerCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workerConfiguration.internalValue = value.workerConfiguration;
            this._workerCount = value.workerCount;
        }
    }

    // worker_configuration - computed: true, optional: true, required: false
    private _workerConfiguration = new WorkerConfigurationPropertyOutputReference(this, "worker_configuration");
    public get workerConfiguration() {
        return this._workerConfiguration;
    }
    public putWorkerConfiguration(value: WorkerConfigurationProperty) {
        this._workerConfiguration.internalValue = value;
    }
    public resetWorkerConfiguration() {
        this._workerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerConfigurationInput() {
        return this._workerConfiguration.internalValue;
    }

    // worker_count - computed: true, optional: true, required: false
    private _workerCount?: number; 
    public get workerCount() {
        return this.getNumberAttribute('worker_count');
    }
    public set workerCount(value: number) {
        this._workerCount = value;
    }
    public resetWorkerCount() {
        this._workerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerCountInput() {
        return this._workerCount;
    }
}
export interface InitialCapacityConfigKeyValuePairProperty {
    /**
    * Worker type for an analytics framework.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#value CcApplication#value}
    */
    readonly value?: InitialCapacityConfigProperty;
}
export class InitialCapacityConfigKeyValuePairPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InitialCapacityConfigKeyValuePairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InitialCapacityConfigKeyValuePairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new InitialCapacityConfigPropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: InitialCapacityConfigProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class InitialCapacityConfigKeyValuePairPropertyList extends cdktn.ComplexList {
    public internalValue? : InitialCapacityConfigKeyValuePairProperty[] | cdktn.IResolvable

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
    public get(index: number): InitialCapacityConfigKeyValuePairPropertyOutputReference {
        return new InitialCapacityConfigKeyValuePairPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MaximumAllowedResourcesProperty {
    /**
    * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#cpu CcApplication#cpu}
    */
    readonly cpu?: string;
    /**
    * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#disk CcApplication#disk}
    */
    readonly disk?: string;
    /**
    * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#memory CcApplication#memory}
    */
    readonly memory?: string;
}
export class MaximumAllowedResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaximumAllowedResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._disk !== undefined) {
            hasAnyValues = true;
            internalValueResult.disk = this._disk;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaximumAllowedResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpu = undefined;
            this._disk = undefined;
            this._memory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpu = value.cpu;
            this._disk = value.disk;
            this._memory = value.memory;
        }
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu?: string; 
    public get cpu() {
        return this.getStringAttribute('cpu');
    }
    public set cpu(value: string) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // disk - computed: true, optional: true, required: false
    private _disk?: string; 
    public get disk() {
        return this.getStringAttribute('disk');
    }
    public set disk(value: string) {
        this._disk = value;
    }
    public resetDisk() {
        this._disk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskInput() {
        return this._disk;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: string; 
    public get memory() {
        return this.getStringAttribute('memory');
    }
    public set memory(value: string) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * The ID of the security groups in the VPC to which you want to connect your job or application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#security_group_ids CcApplication#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your job or application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#subnet_ids CcApplication#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface TagProperty {
    /**
    * The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#value CcApplication#value}
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
export interface ImageConfigurationProperty {
    /**
    * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#image_uri CcApplication#image_uri}
    */
    readonly imageUri?: string;
}
export class ImageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageUri = value.imageUri;
        }
    }

    // image_uri - computed: true, optional: true, required: false
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    public resetImageUri() {
        this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
    }
}
export interface WorkerTypeSpecificationInputProperty {
    /**
    * The image configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/emrserverless_application#image_configuration CcApplication#image_configuration}
    */
    readonly imageConfiguration?: ImageConfigurationProperty;
}
export class WorkerTypeSpecificationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): WorkerTypeSpecificationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageConfiguration = this._imageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkerTypeSpecificationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageConfiguration.internalValue = value.imageConfiguration;
        }
    }

    // image_configuration - computed: true, optional: true, required: false
    private _imageConfiguration = new ImageConfigurationPropertyOutputReference(this, "image_configuration");
    public get imageConfiguration() {
        return this._imageConfiguration;
    }
    public putImageConfiguration(value: ImageConfigurationProperty) {
        this._imageConfiguration.internalValue = value;
    }
    public resetImageConfiguration() {
        this._imageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigurationInput() {
        return this._imageConfiguration.internalValue;
    }
}

export class WorkerTypeSpecificationInputPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: WorkerTypeSpecificationInputProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): WorkerTypeSpecificationInputPropertyOutputReference {
        return new WorkerTypeSpecificationInputPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
