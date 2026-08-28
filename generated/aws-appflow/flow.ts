// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#description CcFlow#description}
    */
    readonly description?: string;
    /**
    * List of Destination connectors of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#destination_flow_config_list CcFlow#destination_flow_config_list}
    */
    readonly destinationFlowConfigList: CcFlow.DestinationFlowConfigProperty[] | cdktn.IResolvable;
    /**
    * Name of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#flow_name CcFlow#flow_name}
    */
    readonly flowName: string;
    /**
    * Flow activation status for Scheduled- and Event-triggered flows
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#flow_status CcFlow#flow_status}
    */
    readonly flowStatus?: string;
    /**
    * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#kms_arn CcFlow#kms_arn}
    */
    readonly kmsArn?: string;
    /**
    * Configurations of metadata catalog of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#metadata_catalog_config CcFlow#metadata_catalog_config}
    */
    readonly metadataCatalogConfig?: CcFlow.MetadataCatalogConfigProperty;
    /**
    * Configurations of Source connector of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#source_flow_config CcFlow#source_flow_config}
    */
    readonly sourceFlowConfig: CcFlow.SourceFlowConfigProperty;
    /**
    * List of Tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#tags CcFlow#tags}
    */
    readonly tags?: CcFlow.TagProperty[] | cdktn.IResolvable;
    /**
    * List of tasks for the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#tasks CcFlow#tasks}
    */
    readonly tasks: CcFlow.TaskProperty[] | cdktn.IResolvable;
    /**
    * Trigger settings of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#trigger_config CcFlow#trigger_config}
    */
    readonly triggerConfig: CcFlow.TriggerConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow awscc_appflow_flow}
*/
export class CcFlow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appflow_flow";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlow to import
    * @param importFromId The id of the existing CcFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_flow", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow awscc_appflow_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appflow_flow',
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
        this._description = config.description;
        this._destinationFlowConfigList.internalValue = config.destinationFlowConfigList;
        this._flowName = config.flowName;
        this._flowStatus = config.flowStatus;
        this._kmsArn = config.kmsArn;
        this._metadataCatalogConfig.internalValue = config.metadataCatalogConfig;
        this._sourceFlowConfig.internalValue = config.sourceFlowConfig;
        this._tags.internalValue = config.tags;
        this._tasks.internalValue = config.tasks;
        this._triggerConfig.internalValue = config.triggerConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // destination_flow_config_list - computed: false, optional: false, required: true
    private _destinationFlowConfigList = new CcFlow.DestinationFlowConfigPropertyList(this, "destination_flow_config_list", false);
    public get destinationFlowConfigList() {
        return this._destinationFlowConfigList;
    }
    public putDestinationFlowConfigList(value: CcFlow.DestinationFlowConfigProperty[] | cdktn.IResolvable) {
        this._destinationFlowConfigList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationFlowConfigListInput() {
        return this._destinationFlowConfigList.internalValue;
    }

    // flow_arn - computed: true, optional: false, required: false
    public get flowArn() {
        return this.getStringAttribute('flow_arn');
    }

    // flow_name - computed: false, optional: false, required: true
    private _flowName?: string; 
    public get flowName() {
        return this.getStringAttribute('flow_name');
    }
    public set flowName(value: string) {
        this._flowName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get flowNameInput() {
        return this._flowName;
    }

    // flow_status - computed: true, optional: true, required: false
    private _flowStatus?: string; 
    public get flowStatus() {
        return this.getStringAttribute('flow_status');
    }
    public set flowStatus(value: string) {
        this._flowStatus = value;
    }
    public resetFlowStatus() {
        this._flowStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowStatusInput() {
        return this._flowStatus;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_arn - computed: true, optional: true, required: false
    private _kmsArn?: string; 
    public get kmsArn() {
        return this.getStringAttribute('kms_arn');
    }
    public set kmsArn(value: string) {
        this._kmsArn = value;
    }
    public resetKmsArn() {
        this._kmsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsArnInput() {
        return this._kmsArn;
    }

    // metadata_catalog_config - computed: true, optional: true, required: false
    private _metadataCatalogConfig = new CcFlow.MetadataCatalogConfigPropertyOutputReference(this, "metadata_catalog_config");
    public get metadataCatalogConfig() {
        return this._metadataCatalogConfig;
    }
    public putMetadataCatalogConfig(value: CcFlow.MetadataCatalogConfigProperty) {
        this._metadataCatalogConfig.internalValue = value;
    }
    public resetMetadataCatalogConfig() {
        this._metadataCatalogConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataCatalogConfigInput() {
        return this._metadataCatalogConfig.internalValue;
    }

    // source_flow_config - computed: false, optional: false, required: true
    private _sourceFlowConfig = new CcFlow.SourceFlowConfigPropertyOutputReference(this, "source_flow_config");
    public get sourceFlowConfig() {
        return this._sourceFlowConfig;
    }
    public putSourceFlowConfig(value: CcFlow.SourceFlowConfigProperty) {
        this._sourceFlowConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFlowConfigInput() {
        return this._sourceFlowConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFlow.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFlow.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tasks - computed: false, optional: false, required: true
    private _tasks = new CcFlow.TaskPropertyList(this, "tasks", false);
    public get tasks() {
        return this._tasks;
    }
    public putTasks(value: CcFlow.TaskProperty[] | cdktn.IResolvable) {
        this._tasks.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tasksInput() {
        return this._tasks.internalValue;
    }

    // trigger_config - computed: false, optional: false, required: true
    private _triggerConfig = new CcFlow.TriggerConfigPropertyOutputReference(this, "trigger_config");
    public get triggerConfig() {
        return this._triggerConfig;
    }
    public putTriggerConfig(value: CcFlow.TriggerConfigProperty) {
        this._triggerConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerConfigInput() {
        return this._triggerConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            destination_flow_config_list: cdktn.listMapper(ccFlowDestinationFlowConfigPropertyToTerraform, false)(this._destinationFlowConfigList.internalValue),
            flow_name: cdktn.stringToTerraform(this._flowName),
            flow_status: cdktn.stringToTerraform(this._flowStatus),
            kms_arn: cdktn.stringToTerraform(this._kmsArn),
            metadata_catalog_config: ccFlowMetadataCatalogConfigPropertyToTerraform(this._metadataCatalogConfig.internalValue),
            source_flow_config: ccFlowSourceFlowConfigPropertyToTerraform(this._sourceFlowConfig.internalValue),
            tags: cdktn.listMapper(ccFlowTagPropertyToTerraform, false)(this._tags.internalValue),
            tasks: cdktn.listMapper(ccFlowTaskPropertyToTerraform, false)(this._tasks.internalValue),
            trigger_config: ccFlowTriggerConfigPropertyToTerraform(this._triggerConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_flow_config_list: {
                value: cdktn.listMapperHcl(ccFlowDestinationFlowConfigPropertyToHclTerraform, false)(this._destinationFlowConfigList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlow.DestinationFlowConfigPropertyList",
            },
            flow_name: {
                value: cdktn.stringToHclTerraform(this._flowName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flow_status: {
                value: cdktn.stringToHclTerraform(this._flowStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_arn: {
                value: cdktn.stringToHclTerraform(this._kmsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata_catalog_config: {
                value: ccFlowMetadataCatalogConfigPropertyToHclTerraform(this._metadataCatalogConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlow.MetadataCatalogConfigProperty",
            },
            source_flow_config: {
                value: ccFlowSourceFlowConfigPropertyToHclTerraform(this._sourceFlowConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlow.SourceFlowConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFlowTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlow.TagPropertyList",
            },
            tasks: {
                value: cdktn.listMapperHcl(ccFlowTaskPropertyToHclTerraform, false)(this._tasks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlow.TaskPropertyList",
            },
            trigger_config: {
                value: ccFlowTriggerConfigPropertyToHclTerraform(this._triggerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlow.TriggerConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFlowErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.ErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.ErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowCustomConnectorDestinationPropertiesPropertyToTerraform(struct?: CcFlow.CustomConnectorDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customProperties),
        entity_name: cdktn.stringToTerraform(struct!.entityName),
        error_handling_config: ccFlowErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
        write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    }
}


export function ccFlowCustomConnectorDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.CustomConnectorDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        entity_name: {
            value: cdktn.stringToHclTerraform(struct!.entityName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_handling_config: {
            value: ccFlowErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ErrorHandlingConfigProperty",
        },
        id_field_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        write_operation_type: {
            value: cdktn.stringToHclTerraform(struct!.writeOperationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowEventBridgeDestinationPropertiesPropertyToTerraform(struct?: CcFlow.EventBridgeDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowEventBridgeDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.EventBridgeDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowLookoutMetricsDestinationPropertiesPropertyToTerraform(struct?: CcFlow.LookoutMetricsDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowLookoutMetricsDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.LookoutMetricsDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowMarketoDestinationPropertiesPropertyToTerraform(struct?: CcFlow.MarketoDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowMarketoDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.MarketoDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowRedshiftDestinationPropertiesPropertyToTerraform(struct?: CcFlow.RedshiftDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        intermediate_bucket_name: cdktn.stringToTerraform(struct!.intermediateBucketName),
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowRedshiftDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.RedshiftDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty",
        },
        intermediate_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.intermediateBucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowAggregationConfigPropertyToTerraform(struct?: CcFlow.AggregationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
        target_file_size: cdktn.numberToTerraform(struct!.targetFileSize),
    }
}


export function ccFlowAggregationConfigPropertyToHclTerraform(struct?: CcFlow.AggregationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_type: {
            value: cdktn.stringToHclTerraform(struct!.aggregationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_file_size: {
            value: cdktn.numberToHclTerraform(struct!.targetFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowPrefixConfigPropertyToTerraform(struct?: CcFlow.PrefixConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path_prefix_hierarchy: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathPrefixHierarchy),
        prefix_format: cdktn.stringToTerraform(struct!.prefixFormat),
        prefix_type: cdktn.stringToTerraform(struct!.prefixType),
    }
}


export function ccFlowPrefixConfigPropertyToHclTerraform(struct?: CcFlow.PrefixConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path_prefix_hierarchy: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathPrefixHierarchy),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prefix_format: {
            value: cdktn.stringToHclTerraform(struct!.prefixFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix_type: {
            value: cdktn.stringToHclTerraform(struct!.prefixType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowS3OutputFormatConfigPropertyToTerraform(struct?: CcFlow.S3OutputFormatConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_config: ccFlowAggregationConfigPropertyToTerraform(struct!.aggregationConfig),
        file_type: cdktn.stringToTerraform(struct!.fileType),
        prefix_config: ccFlowPrefixConfigPropertyToTerraform(struct!.prefixConfig),
        preserve_source_data_typing: cdktn.booleanToTerraform(struct!.preserveSourceDataTyping),
    }
}


export function ccFlowS3OutputFormatConfigPropertyToHclTerraform(struct?: CcFlow.S3OutputFormatConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_config: {
            value: ccFlowAggregationConfigPropertyToHclTerraform(struct!.aggregationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AggregationConfigProperty",
        },
        file_type: {
            value: cdktn.stringToHclTerraform(struct!.fileType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix_config: {
            value: ccFlowPrefixConfigPropertyToHclTerraform(struct!.prefixConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrefixConfigProperty",
        },
        preserve_source_data_typing: {
            value: cdktn.booleanToHclTerraform(struct!.preserveSourceDataTyping),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowS3DestinationPropertiesPropertyToTerraform(struct?: CcFlow.S3DestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        s3_output_format_config: ccFlowS3OutputFormatConfigPropertyToTerraform(struct!.s3OutputFormatConfig),
    }
}


export function ccFlowS3DestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.S3DestinationPropertiesProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_format_config: {
            value: ccFlowS3OutputFormatConfigPropertyToHclTerraform(struct!.s3OutputFormatConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3OutputFormatConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSalesforceDestinationPropertiesPropertyToTerraform(struct?: CcFlow.SalesforceDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_transfer_api: cdktn.stringToTerraform(struct!.dataTransferApi),
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
        object: cdktn.stringToTerraform(struct!.object),
        write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    }
}


export function ccFlowSalesforceDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.SalesforceDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_transfer_api: {
            value: cdktn.stringToHclTerraform(struct!.dataTransferApi),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty",
        },
        id_field_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        write_operation_type: {
            value: cdktn.stringToHclTerraform(struct!.writeOperationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSuccessResponseHandlingConfigPropertyToTerraform(struct?: CcFlow.SuccessResponseHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    }
}


export function ccFlowSuccessResponseHandlingConfigPropertyToHclTerraform(struct?: CcFlow.SuccessResponseHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSAPODataDestinationPropertiesPropertyToTerraform(struct?: CcFlow.SAPODataDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
        object_path: cdktn.stringToTerraform(struct!.objectPath),
        success_response_handling_config: ccFlowSuccessResponseHandlingConfigPropertyToTerraform(struct!.successResponseHandlingConfig),
        write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    }
}


export function ccFlowSAPODataDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.SAPODataDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty",
        },
        id_field_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        object_path: {
            value: cdktn.stringToHclTerraform(struct!.objectPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success_response_handling_config: {
            value: ccFlowSuccessResponseHandlingConfigPropertyToHclTerraform(struct!.successResponseHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SuccessResponseHandlingConfigProperty",
        },
        write_operation_type: {
            value: cdktn.stringToHclTerraform(struct!.writeOperationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSnowflakeDestinationPropertiesPropertyToTerraform(struct?: CcFlow.SnowflakeDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        intermediate_bucket_name: cdktn.stringToTerraform(struct!.intermediateBucketName),
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowSnowflakeDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.SnowflakeDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty",
        },
        intermediate_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.intermediateBucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
        target_file_size: cdktn.numberToTerraform(struct!.targetFileSize),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_type: {
            value: cdktn.stringToHclTerraform(struct!.aggregationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_file_size: {
            value: cdktn.numberToHclTerraform(struct!.targetFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path_prefix_hierarchy: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathPrefixHierarchy),
        prefix_format: cdktn.stringToTerraform(struct!.prefixFormat),
        prefix_type: cdktn.stringToTerraform(struct!.prefixType),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path_prefix_hierarchy: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathPrefixHierarchy),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prefix_format: {
            value: cdktn.stringToHclTerraform(struct!.prefixFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix_type: {
            value: cdktn.stringToHclTerraform(struct!.prefixType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowUpsolverS3OutputFormatConfigPropertyToTerraform(struct?: CcFlow.UpsolverS3OutputFormatConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToTerraform(struct!.aggregationConfig),
        file_type: cdktn.stringToTerraform(struct!.fileType),
        prefix_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToTerraform(struct!.prefixConfig),
    }
}


export function ccFlowUpsolverS3OutputFormatConfigPropertyToHclTerraform(struct?: CcFlow.UpsolverS3OutputFormatConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyToHclTerraform(struct!.aggregationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty",
        },
        file_type: {
            value: cdktn.stringToHclTerraform(struct!.fileType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyToHclTerraform(struct!.prefixConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowUpsolverDestinationPropertiesPropertyToTerraform(struct?: CcFlow.UpsolverDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        s3_output_format_config: ccFlowUpsolverS3OutputFormatConfigPropertyToTerraform(struct!.s3OutputFormatConfig),
    }
}


export function ccFlowUpsolverDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.UpsolverDestinationPropertiesProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_format_config: {
            value: ccFlowUpsolverS3OutputFormatConfigPropertyToHclTerraform(struct!.s3OutputFormatConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "UpsolverS3OutputFormatConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        fail_on_first_error: cdktn.booleanToTerraform(struct!.failOnFirstError),
    }
}


export function ccFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_first_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnFirstError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowZendeskDestinationPropertiesPropertyToTerraform(struct?: CcFlow.ZendeskDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_handling_config: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToTerraform(struct!.errorHandlingConfig),
        id_field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.idFieldNames),
        object: cdktn.stringToTerraform(struct!.object),
        write_operation_type: cdktn.stringToTerraform(struct!.writeOperationType),
    }
}


export function ccFlowZendeskDestinationPropertiesPropertyToHclTerraform(struct?: CcFlow.ZendeskDestinationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_handling_config: {
            value: ccFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyToHclTerraform(struct!.errorHandlingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty",
        },
        id_field_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.idFieldNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        write_operation_type: {
            value: cdktn.stringToHclTerraform(struct!.writeOperationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationConnectorPropertiesPropertyToTerraform(struct?: CcFlow.DestinationConnectorPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_connector: ccFlowCustomConnectorDestinationPropertiesPropertyToTerraform(struct!.customConnector),
        event_bridge: ccFlowEventBridgeDestinationPropertiesPropertyToTerraform(struct!.eventBridge),
        lookout_metrics: ccFlowLookoutMetricsDestinationPropertiesPropertyToTerraform(struct!.lookoutMetrics),
        marketo: ccFlowMarketoDestinationPropertiesPropertyToTerraform(struct!.marketo),
        redshift: ccFlowRedshiftDestinationPropertiesPropertyToTerraform(struct!.redshift),
        s3: ccFlowS3DestinationPropertiesPropertyToTerraform(struct!.s3),
        salesforce: ccFlowSalesforceDestinationPropertiesPropertyToTerraform(struct!.salesforce),
        sapo_data: ccFlowSAPODataDestinationPropertiesPropertyToTerraform(struct!.sapoData),
        snowflake: ccFlowSnowflakeDestinationPropertiesPropertyToTerraform(struct!.snowflake),
        upsolver: ccFlowUpsolverDestinationPropertiesPropertyToTerraform(struct!.upsolver),
        zendesk: ccFlowZendeskDestinationPropertiesPropertyToTerraform(struct!.zendesk),
    }
}


export function ccFlowDestinationConnectorPropertiesPropertyToHclTerraform(struct?: CcFlow.DestinationConnectorPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_connector: {
            value: ccFlowCustomConnectorDestinationPropertiesPropertyToHclTerraform(struct!.customConnector),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomConnectorDestinationPropertiesProperty",
        },
        event_bridge: {
            value: ccFlowEventBridgeDestinationPropertiesPropertyToHclTerraform(struct!.eventBridge),
            isBlock: true,
            type: "struct",
            storageClassType: "EventBridgeDestinationPropertiesProperty",
        },
        lookout_metrics: {
            value: ccFlowLookoutMetricsDestinationPropertiesPropertyToHclTerraform(struct!.lookoutMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "LookoutMetricsDestinationPropertiesProperty",
        },
        marketo: {
            value: ccFlowMarketoDestinationPropertiesPropertyToHclTerraform(struct!.marketo),
            isBlock: true,
            type: "struct",
            storageClassType: "MarketoDestinationPropertiesProperty",
        },
        redshift: {
            value: ccFlowRedshiftDestinationPropertiesPropertyToHclTerraform(struct!.redshift),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftDestinationPropertiesProperty",
        },
        s3: {
            value: ccFlowS3DestinationPropertiesPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DestinationPropertiesProperty",
        },
        salesforce: {
            value: ccFlowSalesforceDestinationPropertiesPropertyToHclTerraform(struct!.salesforce),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceDestinationPropertiesProperty",
        },
        sapo_data: {
            value: ccFlowSAPODataDestinationPropertiesPropertyToHclTerraform(struct!.sapoData),
            isBlock: true,
            type: "struct",
            storageClassType: "SAPODataDestinationPropertiesProperty",
        },
        snowflake: {
            value: ccFlowSnowflakeDestinationPropertiesPropertyToHclTerraform(struct!.snowflake),
            isBlock: true,
            type: "struct",
            storageClassType: "SnowflakeDestinationPropertiesProperty",
        },
        upsolver: {
            value: ccFlowUpsolverDestinationPropertiesPropertyToHclTerraform(struct!.upsolver),
            isBlock: true,
            type: "struct",
            storageClassType: "UpsolverDestinationPropertiesProperty",
        },
        zendesk: {
            value: ccFlowZendeskDestinationPropertiesPropertyToHclTerraform(struct!.zendesk),
            isBlock: true,
            type: "struct",
            storageClassType: "ZendeskDestinationPropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDestinationFlowConfigPropertyToTerraform(struct?: CcFlow.DestinationFlowConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_version: cdktn.stringToTerraform(struct!.apiVersion),
        connector_profile_name: cdktn.stringToTerraform(struct!.connectorProfileName),
        connector_type: cdktn.stringToTerraform(struct!.connectorType),
        destination_connector_properties: ccFlowDestinationConnectorPropertiesPropertyToTerraform(struct!.destinationConnectorProperties),
    }
}


export function ccFlowDestinationFlowConfigPropertyToHclTerraform(struct?: CcFlow.DestinationFlowConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_version: {
            value: cdktn.stringToHclTerraform(struct!.apiVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connector_profile_name: {
            value: cdktn.stringToHclTerraform(struct!.connectorProfileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connector_type: {
            value: cdktn.stringToHclTerraform(struct!.connectorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_connector_properties: {
            value: ccFlowDestinationConnectorPropertiesPropertyToHclTerraform(struct!.destinationConnectorProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationConnectorPropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowGlueDataCatalogPropertyToTerraform(struct?: CcFlow.GlueDataCatalogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        table_prefix: cdktn.stringToTerraform(struct!.tablePrefix),
    }
}


export function ccFlowGlueDataCatalogPropertyToHclTerraform(struct?: CcFlow.GlueDataCatalogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_prefix: {
            value: cdktn.stringToHclTerraform(struct!.tablePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowMetadataCatalogConfigPropertyToTerraform(struct?: CcFlow.MetadataCatalogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_data_catalog: ccFlowGlueDataCatalogPropertyToTerraform(struct!.glueDataCatalog),
    }
}


export function ccFlowMetadataCatalogConfigPropertyToHclTerraform(struct?: CcFlow.MetadataCatalogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_data_catalog: {
            value: ccFlowGlueDataCatalogPropertyToHclTerraform(struct!.glueDataCatalog),
            isBlock: true,
            type: "struct",
            storageClassType: "GlueDataCatalogProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowIncrementalPullConfigPropertyToTerraform(struct?: CcFlow.IncrementalPullConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        datetime_type_field_name: cdktn.stringToTerraform(struct!.datetimeTypeFieldName),
    }
}


export function ccFlowIncrementalPullConfigPropertyToHclTerraform(struct?: CcFlow.IncrementalPullConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        datetime_type_field_name: {
            value: cdktn.stringToHclTerraform(struct!.datetimeTypeFieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowAmplitudeSourcePropertiesPropertyToTerraform(struct?: CcFlow.AmplitudeSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowAmplitudeSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.AmplitudeSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDataTransferApiPropertyToTerraform(struct?: CcFlow.DataTransferApiProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccFlowDataTransferApiPropertyToHclTerraform(struct?: CcFlow.DataTransferApiProperty | cdktn.IResolvable): any {
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


export function ccFlowCustomConnectorSourcePropertiesPropertyToTerraform(struct?: CcFlow.CustomConnectorSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customProperties),
        data_transfer_api: ccFlowDataTransferApiPropertyToTerraform(struct!.dataTransferApi),
        entity_name: cdktn.stringToTerraform(struct!.entityName),
    }
}


export function ccFlowCustomConnectorSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.CustomConnectorSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        data_transfer_api: {
            value: ccFlowDataTransferApiPropertyToHclTerraform(struct!.dataTransferApi),
            isBlock: true,
            type: "struct",
            storageClassType: "DataTransferApiProperty",
        },
        entity_name: {
            value: cdktn.stringToHclTerraform(struct!.entityName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDatadogSourcePropertiesPropertyToTerraform(struct?: CcFlow.DatadogSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowDatadogSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.DatadogSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowDynatraceSourcePropertiesPropertyToTerraform(struct?: CcFlow.DynatraceSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowDynatraceSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.DynatraceSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowGoogleAnalyticsSourcePropertiesPropertyToTerraform(struct?: CcFlow.GoogleAnalyticsSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowGoogleAnalyticsSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.GoogleAnalyticsSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowInforNexusSourcePropertiesPropertyToTerraform(struct?: CcFlow.InforNexusSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowInforNexusSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.InforNexusSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowMarketoSourcePropertiesPropertyToTerraform(struct?: CcFlow.MarketoSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowMarketoSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.MarketoSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowPardotSourcePropertiesPropertyToTerraform(struct?: CcFlow.PardotSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowPardotSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.PardotSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowS3InputFormatConfigPropertyToTerraform(struct?: CcFlow.S3InputFormatConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_input_file_type: cdktn.stringToTerraform(struct!.s3InputFileType),
    }
}


export function ccFlowS3InputFormatConfigPropertyToHclTerraform(struct?: CcFlow.S3InputFormatConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_input_file_type: {
            value: cdktn.stringToHclTerraform(struct!.s3InputFileType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowS3SourcePropertiesPropertyToTerraform(struct?: CcFlow.S3SourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        s3_input_format_config: ccFlowS3InputFormatConfigPropertyToTerraform(struct!.s3InputFormatConfig),
    }
}


export function ccFlowS3SourcePropertiesPropertyToHclTerraform(struct?: CcFlow.S3SourcePropertiesProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_input_format_config: {
            value: ccFlowS3InputFormatConfigPropertyToHclTerraform(struct!.s3InputFormatConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3InputFormatConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSalesforceSourcePropertiesPropertyToTerraform(struct?: CcFlow.SalesforceSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_transfer_api: cdktn.stringToTerraform(struct!.dataTransferApi),
        enable_dynamic_field_update: cdktn.booleanToTerraform(struct!.enableDynamicFieldUpdate),
        include_deleted_records: cdktn.booleanToTerraform(struct!.includeDeletedRecords),
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowSalesforceSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.SalesforceSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_transfer_api: {
            value: cdktn.stringToHclTerraform(struct!.dataTransferApi),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_dynamic_field_update: {
            value: cdktn.booleanToHclTerraform(struct!.enableDynamicFieldUpdate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_deleted_records: {
            value: cdktn.booleanToHclTerraform(struct!.includeDeletedRecords),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSAPODataPaginationConfigPropertyToTerraform(struct?: CcFlow.SAPODataPaginationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_page_size: cdktn.numberToTerraform(struct!.maxPageSize),
    }
}


export function ccFlowSAPODataPaginationConfigPropertyToHclTerraform(struct?: CcFlow.SAPODataPaginationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_page_size: {
            value: cdktn.numberToHclTerraform(struct!.maxPageSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSAPODataParallelismConfigPropertyToTerraform(struct?: CcFlow.SAPODataParallelismConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_parallelism: cdktn.numberToTerraform(struct!.maxParallelism),
    }
}


export function ccFlowSAPODataParallelismConfigPropertyToHclTerraform(struct?: CcFlow.SAPODataParallelismConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_parallelism: {
            value: cdktn.numberToHclTerraform(struct!.maxParallelism),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSAPODataSourcePropertiesPropertyToTerraform(struct?: CcFlow.SAPODataSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_path: cdktn.stringToTerraform(struct!.objectPath),
        pagination_config: ccFlowSAPODataPaginationConfigPropertyToTerraform(struct!.paginationConfig),
        parallelism_config: ccFlowSAPODataParallelismConfigPropertyToTerraform(struct!.parallelismConfig),
    }
}


export function ccFlowSAPODataSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.SAPODataSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_path: {
            value: cdktn.stringToHclTerraform(struct!.objectPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pagination_config: {
            value: ccFlowSAPODataPaginationConfigPropertyToHclTerraform(struct!.paginationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SAPODataPaginationConfigProperty",
        },
        parallelism_config: {
            value: ccFlowSAPODataParallelismConfigPropertyToHclTerraform(struct!.parallelismConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SAPODataParallelismConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowServiceNowSourcePropertiesPropertyToTerraform(struct?: CcFlow.ServiceNowSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowServiceNowSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.ServiceNowSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSingularSourcePropertiesPropertyToTerraform(struct?: CcFlow.SingularSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowSingularSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.SingularSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSlackSourcePropertiesPropertyToTerraform(struct?: CcFlow.SlackSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowSlackSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.SlackSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowTrendmicroSourcePropertiesPropertyToTerraform(struct?: CcFlow.TrendmicroSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowTrendmicroSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.TrendmicroSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowVeevaSourcePropertiesPropertyToTerraform(struct?: CcFlow.VeevaSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        document_type: cdktn.stringToTerraform(struct!.documentType),
        include_all_versions: cdktn.booleanToTerraform(struct!.includeAllVersions),
        include_renditions: cdktn.booleanToTerraform(struct!.includeRenditions),
        include_source_files: cdktn.booleanToTerraform(struct!.includeSourceFiles),
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowVeevaSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.VeevaSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        document_type: {
            value: cdktn.stringToHclTerraform(struct!.documentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_all_versions: {
            value: cdktn.booleanToHclTerraform(struct!.includeAllVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_renditions: {
            value: cdktn.booleanToHclTerraform(struct!.includeRenditions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_source_files: {
            value: cdktn.booleanToHclTerraform(struct!.includeSourceFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowZendeskSourcePropertiesPropertyToTerraform(struct?: CcFlow.ZendeskSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object: cdktn.stringToTerraform(struct!.object),
    }
}


export function ccFlowZendeskSourcePropertiesPropertyToHclTerraform(struct?: CcFlow.ZendeskSourcePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSourceConnectorPropertiesPropertyToTerraform(struct?: CcFlow.SourceConnectorPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amplitude: ccFlowAmplitudeSourcePropertiesPropertyToTerraform(struct!.amplitude),
        custom_connector: ccFlowCustomConnectorSourcePropertiesPropertyToTerraform(struct!.customConnector),
        datadog: ccFlowDatadogSourcePropertiesPropertyToTerraform(struct!.datadog),
        dynatrace: ccFlowDynatraceSourcePropertiesPropertyToTerraform(struct!.dynatrace),
        google_analytics: ccFlowGoogleAnalyticsSourcePropertiesPropertyToTerraform(struct!.googleAnalytics),
        infor_nexus: ccFlowInforNexusSourcePropertiesPropertyToTerraform(struct!.inforNexus),
        marketo: ccFlowMarketoSourcePropertiesPropertyToTerraform(struct!.marketo),
        pardot: ccFlowPardotSourcePropertiesPropertyToTerraform(struct!.pardot),
        s3: ccFlowS3SourcePropertiesPropertyToTerraform(struct!.s3),
        salesforce: ccFlowSalesforceSourcePropertiesPropertyToTerraform(struct!.salesforce),
        sapo_data: ccFlowSAPODataSourcePropertiesPropertyToTerraform(struct!.sapoData),
        service_now: ccFlowServiceNowSourcePropertiesPropertyToTerraform(struct!.serviceNow),
        singular: ccFlowSingularSourcePropertiesPropertyToTerraform(struct!.singular),
        slack: ccFlowSlackSourcePropertiesPropertyToTerraform(struct!.slack),
        trendmicro: ccFlowTrendmicroSourcePropertiesPropertyToTerraform(struct!.trendmicro),
        veeva: ccFlowVeevaSourcePropertiesPropertyToTerraform(struct!.veeva),
        zendesk: ccFlowZendeskSourcePropertiesPropertyToTerraform(struct!.zendesk),
    }
}


export function ccFlowSourceConnectorPropertiesPropertyToHclTerraform(struct?: CcFlow.SourceConnectorPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amplitude: {
            value: ccFlowAmplitudeSourcePropertiesPropertyToHclTerraform(struct!.amplitude),
            isBlock: true,
            type: "struct",
            storageClassType: "AmplitudeSourcePropertiesProperty",
        },
        custom_connector: {
            value: ccFlowCustomConnectorSourcePropertiesPropertyToHclTerraform(struct!.customConnector),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomConnectorSourcePropertiesProperty",
        },
        datadog: {
            value: ccFlowDatadogSourcePropertiesPropertyToHclTerraform(struct!.datadog),
            isBlock: true,
            type: "struct",
            storageClassType: "DatadogSourcePropertiesProperty",
        },
        dynatrace: {
            value: ccFlowDynatraceSourcePropertiesPropertyToHclTerraform(struct!.dynatrace),
            isBlock: true,
            type: "struct",
            storageClassType: "DynatraceSourcePropertiesProperty",
        },
        google_analytics: {
            value: ccFlowGoogleAnalyticsSourcePropertiesPropertyToHclTerraform(struct!.googleAnalytics),
            isBlock: true,
            type: "struct",
            storageClassType: "GoogleAnalyticsSourcePropertiesProperty",
        },
        infor_nexus: {
            value: ccFlowInforNexusSourcePropertiesPropertyToHclTerraform(struct!.inforNexus),
            isBlock: true,
            type: "struct",
            storageClassType: "InforNexusSourcePropertiesProperty",
        },
        marketo: {
            value: ccFlowMarketoSourcePropertiesPropertyToHclTerraform(struct!.marketo),
            isBlock: true,
            type: "struct",
            storageClassType: "MarketoSourcePropertiesProperty",
        },
        pardot: {
            value: ccFlowPardotSourcePropertiesPropertyToHclTerraform(struct!.pardot),
            isBlock: true,
            type: "struct",
            storageClassType: "PardotSourcePropertiesProperty",
        },
        s3: {
            value: ccFlowS3SourcePropertiesPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3SourcePropertiesProperty",
        },
        salesforce: {
            value: ccFlowSalesforceSourcePropertiesPropertyToHclTerraform(struct!.salesforce),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceSourcePropertiesProperty",
        },
        sapo_data: {
            value: ccFlowSAPODataSourcePropertiesPropertyToHclTerraform(struct!.sapoData),
            isBlock: true,
            type: "struct",
            storageClassType: "SAPODataSourcePropertiesProperty",
        },
        service_now: {
            value: ccFlowServiceNowSourcePropertiesPropertyToHclTerraform(struct!.serviceNow),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowSourcePropertiesProperty",
        },
        singular: {
            value: ccFlowSingularSourcePropertiesPropertyToHclTerraform(struct!.singular),
            isBlock: true,
            type: "struct",
            storageClassType: "SingularSourcePropertiesProperty",
        },
        slack: {
            value: ccFlowSlackSourcePropertiesPropertyToHclTerraform(struct!.slack),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackSourcePropertiesProperty",
        },
        trendmicro: {
            value: ccFlowTrendmicroSourcePropertiesPropertyToHclTerraform(struct!.trendmicro),
            isBlock: true,
            type: "struct",
            storageClassType: "TrendmicroSourcePropertiesProperty",
        },
        veeva: {
            value: ccFlowVeevaSourcePropertiesPropertyToHclTerraform(struct!.veeva),
            isBlock: true,
            type: "struct",
            storageClassType: "VeevaSourcePropertiesProperty",
        },
        zendesk: {
            value: ccFlowZendeskSourcePropertiesPropertyToHclTerraform(struct!.zendesk),
            isBlock: true,
            type: "struct",
            storageClassType: "ZendeskSourcePropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSourceFlowConfigPropertyToTerraform(struct?: CcFlow.SourceFlowConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_version: cdktn.stringToTerraform(struct!.apiVersion),
        connector_profile_name: cdktn.stringToTerraform(struct!.connectorProfileName),
        connector_type: cdktn.stringToTerraform(struct!.connectorType),
        incremental_pull_config: ccFlowIncrementalPullConfigPropertyToTerraform(struct!.incrementalPullConfig),
        source_connector_properties: ccFlowSourceConnectorPropertiesPropertyToTerraform(struct!.sourceConnectorProperties),
    }
}


export function ccFlowSourceFlowConfigPropertyToHclTerraform(struct?: CcFlow.SourceFlowConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_version: {
            value: cdktn.stringToHclTerraform(struct!.apiVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connector_profile_name: {
            value: cdktn.stringToHclTerraform(struct!.connectorProfileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connector_type: {
            value: cdktn.stringToHclTerraform(struct!.connectorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        incremental_pull_config: {
            value: ccFlowIncrementalPullConfigPropertyToHclTerraform(struct!.incrementalPullConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "IncrementalPullConfigProperty",
        },
        source_connector_properties: {
            value: ccFlowSourceConnectorPropertiesPropertyToHclTerraform(struct!.sourceConnectorProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceConnectorPropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowTagPropertyToTerraform(struct?: CcFlow.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowTagPropertyToHclTerraform(struct?: CcFlow.TagProperty | cdktn.IResolvable): any {
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


export function ccFlowConnectorOperatorPropertyToTerraform(struct?: CcFlow.ConnectorOperatorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amplitude: cdktn.stringToTerraform(struct!.amplitude),
        custom_connector: cdktn.stringToTerraform(struct!.customConnector),
        datadog: cdktn.stringToTerraform(struct!.datadog),
        dynatrace: cdktn.stringToTerraform(struct!.dynatrace),
        google_analytics: cdktn.stringToTerraform(struct!.googleAnalytics),
        infor_nexus: cdktn.stringToTerraform(struct!.inforNexus),
        marketo: cdktn.stringToTerraform(struct!.marketo),
        pardot: cdktn.stringToTerraform(struct!.pardot),
        s3: cdktn.stringToTerraform(struct!.s3),
        salesforce: cdktn.stringToTerraform(struct!.salesforce),
        sapo_data: cdktn.stringToTerraform(struct!.sapoData),
        service_now: cdktn.stringToTerraform(struct!.serviceNow),
        singular: cdktn.stringToTerraform(struct!.singular),
        slack: cdktn.stringToTerraform(struct!.slack),
        trendmicro: cdktn.stringToTerraform(struct!.trendmicro),
        veeva: cdktn.stringToTerraform(struct!.veeva),
        zendesk: cdktn.stringToTerraform(struct!.zendesk),
    }
}


export function ccFlowConnectorOperatorPropertyToHclTerraform(struct?: CcFlow.ConnectorOperatorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amplitude: {
            value: cdktn.stringToHclTerraform(struct!.amplitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_connector: {
            value: cdktn.stringToHclTerraform(struct!.customConnector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        datadog: {
            value: cdktn.stringToHclTerraform(struct!.datadog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynatrace: {
            value: cdktn.stringToHclTerraform(struct!.dynatrace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        google_analytics: {
            value: cdktn.stringToHclTerraform(struct!.googleAnalytics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        infor_nexus: {
            value: cdktn.stringToHclTerraform(struct!.inforNexus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        marketo: {
            value: cdktn.stringToHclTerraform(struct!.marketo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pardot: {
            value: cdktn.stringToHclTerraform(struct!.pardot),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3: {
            value: cdktn.stringToHclTerraform(struct!.s3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        salesforce: {
            value: cdktn.stringToHclTerraform(struct!.salesforce),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sapo_data: {
            value: cdktn.stringToHclTerraform(struct!.sapoData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_now: {
            value: cdktn.stringToHclTerraform(struct!.serviceNow),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        singular: {
            value: cdktn.stringToHclTerraform(struct!.singular),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        slack: {
            value: cdktn.stringToHclTerraform(struct!.slack),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trendmicro: {
            value: cdktn.stringToHclTerraform(struct!.trendmicro),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        veeva: {
            value: cdktn.stringToHclTerraform(struct!.veeva),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zendesk: {
            value: cdktn.stringToHclTerraform(struct!.zendesk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowTaskPropertiesObjectPropertyToTerraform(struct?: CcFlow.TaskPropertiesObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowTaskPropertiesObjectPropertyToHclTerraform(struct?: CcFlow.TaskPropertiesObjectProperty | cdktn.IResolvable): any {
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


export function ccFlowTaskPropertyToTerraform(struct?: CcFlow.TaskProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connector_operator: ccFlowConnectorOperatorPropertyToTerraform(struct!.connectorOperator),
        destination_field: cdktn.stringToTerraform(struct!.destinationField),
        source_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceFields),
        task_properties: cdktn.listMapper(ccFlowTaskPropertiesObjectPropertyToTerraform, false)(struct!.taskProperties),
        task_type: cdktn.stringToTerraform(struct!.taskType),
    }
}


export function ccFlowTaskPropertyToHclTerraform(struct?: CcFlow.TaskProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connector_operator: {
            value: ccFlowConnectorOperatorPropertyToHclTerraform(struct!.connectorOperator),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorOperatorProperty",
        },
        destination_field: {
            value: cdktn.stringToHclTerraform(struct!.destinationField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_fields: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceFields),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        task_properties: {
            value: cdktn.listMapperHcl(ccFlowTaskPropertiesObjectPropertyToHclTerraform, false)(struct!.taskProperties),
            isBlock: true,
            type: "list",
            storageClassType: "TaskPropertiesObjectPropertyList",
        },
        task_type: {
            value: cdktn.stringToHclTerraform(struct!.taskType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowScheduledTriggerPropertiesPropertyToTerraform(struct?: CcFlow.ScheduledTriggerPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_pull_mode: cdktn.stringToTerraform(struct!.dataPullMode),
        first_execution_from: cdktn.numberToTerraform(struct!.firstExecutionFrom),
        flow_error_deactivation_threshold: cdktn.numberToTerraform(struct!.flowErrorDeactivationThreshold),
        schedule_end_time: cdktn.numberToTerraform(struct!.scheduleEndTime),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
        schedule_offset: cdktn.numberToTerraform(struct!.scheduleOffset),
        schedule_start_time: cdktn.numberToTerraform(struct!.scheduleStartTime),
        time_zone: cdktn.stringToTerraform(struct!.timeZone),
    }
}


export function ccFlowScheduledTriggerPropertiesPropertyToHclTerraform(struct?: CcFlow.ScheduledTriggerPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_pull_mode: {
            value: cdktn.stringToHclTerraform(struct!.dataPullMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        first_execution_from: {
            value: cdktn.numberToHclTerraform(struct!.firstExecutionFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        flow_error_deactivation_threshold: {
            value: cdktn.numberToHclTerraform(struct!.flowErrorDeactivationThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        schedule_end_time: {
            value: cdktn.numberToHclTerraform(struct!.scheduleEndTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_offset: {
            value: cdktn.numberToHclTerraform(struct!.scheduleOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        schedule_start_time: {
            value: cdktn.numberToHclTerraform(struct!.scheduleStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        time_zone: {
            value: cdktn.stringToHclTerraform(struct!.timeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowTriggerConfigPropertyToTerraform(struct?: CcFlow.TriggerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        trigger_properties: ccFlowScheduledTriggerPropertiesPropertyToTerraform(struct!.triggerProperties),
        trigger_type: cdktn.stringToTerraform(struct!.triggerType),
    }
}


export function ccFlowTriggerConfigPropertyToHclTerraform(struct?: CcFlow.TriggerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        trigger_properties: {
            value: ccFlowScheduledTriggerPropertiesPropertyToHclTerraform(struct!.triggerProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduledTriggerPropertiesProperty",
        },
        trigger_type: {
            value: cdktn.stringToHclTerraform(struct!.triggerType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFlow {
export interface ErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class ErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface CustomConnectorDestinationPropertiesProperty {
    /**
    * A map for properties for custom connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#custom_properties CcFlow#custom_properties}
    */
    readonly customProperties?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#entity_name CcFlow#entity_name}
    */
    readonly entityName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: ErrorHandlingConfigProperty;
    /**
    * List of fields used as ID when performing a write operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#id_field_names CcFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#write_operation_type CcFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
}
export class CustomConnectorDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomConnectorDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.customProperties = this._customProperties;
        }
        if (this._entityName !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityName = this._entityName;
        }
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._idFieldNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.idFieldNames = this._idFieldNames;
        }
        if (this._writeOperationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeOperationType = this._writeOperationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomConnectorDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customProperties = undefined;
            this._entityName = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._idFieldNames = undefined;
            this._writeOperationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customProperties = value.customProperties;
            this._entityName = value.entityName;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._idFieldNames = value.idFieldNames;
            this._writeOperationType = value.writeOperationType;
        }
    }

    // custom_properties - computed: true, optional: true, required: false
    private _customProperties?: { [key: string]: string }; 
    public get customProperties() {
        return this.getStringMapAttribute('custom_properties');
    }
    public set customProperties(value: { [key: string]: string }) {
        this._customProperties = value;
    }
    public resetCustomProperties() {
        this._customProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPropertiesInput() {
        return this._customProperties;
    }

    // entity_name - computed: true, optional: true, required: false
    private _entityName?: string; 
    public get entityName() {
        return this.getStringAttribute('entity_name');
    }
    public set entityName(value: string) {
        this._entityName = value;
    }
    public resetEntityName() {
        this._entityName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityNameInput() {
        return this._entityName;
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new ErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: ErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // id_field_names - computed: true, optional: true, required: false
    private _idFieldNames?: string[]; 
    public get idFieldNames() {
        return this.getListAttribute('id_field_names');
    }
    public set idFieldNames(value: string[]) {
        this._idFieldNames = value;
    }
    public resetIdFieldNames() {
        this._idFieldNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idFieldNamesInput() {
        return this._idFieldNames;
    }

    // write_operation_type - computed: true, optional: true, required: false
    private _writeOperationType?: string; 
    public get writeOperationType() {
        return this.getStringAttribute('write_operation_type');
    }
    public set writeOperationType(value: string) {
        this._writeOperationType = value;
    }
    public resetWriteOperationType() {
        this._writeOperationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOperationTypeInput() {
        return this._writeOperationType;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface EventBridgeDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class EventBridgeDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBridgeDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBridgeDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._object = value.object;
        }
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface LookoutMetricsDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class LookoutMetricsDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LookoutMetricsDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LookoutMetricsDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface MarketoDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class MarketoDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarketoDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarketoDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._object = value.object;
        }
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface RedshiftDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#intermediate_bucket_name CcFlow#intermediate_bucket_name}
    */
    readonly intermediateBucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class RedshiftDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._intermediateBucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.intermediateBucketName = this._intermediateBucketName;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketPrefix = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._intermediateBucketName = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketPrefix = value.bucketPrefix;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._intermediateBucketName = value.intermediateBucketName;
            this._object = value.object;
        }
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // intermediate_bucket_name - computed: true, optional: true, required: false
    private _intermediateBucketName?: string; 
    public get intermediateBucketName() {
        return this.getStringAttribute('intermediate_bucket_name');
    }
    public set intermediateBucketName(value: string) {
        this._intermediateBucketName = value;
    }
    public resetIntermediateBucketName() {
        this._intermediateBucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intermediateBucketNameInput() {
        return this._intermediateBucketName;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface AggregationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#aggregation_type CcFlow#aggregation_type}
    */
    readonly aggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#target_file_size CcFlow#target_file_size}
    */
    readonly targetFileSize?: number;
}
export class AggregationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AggregationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationType = this._aggregationType;
        }
        if (this._targetFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetFileSize = this._targetFileSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AggregationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationType = undefined;
            this._targetFileSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationType = value.aggregationType;
            this._targetFileSize = value.targetFileSize;
        }
    }

    // aggregation_type - computed: true, optional: true, required: false
    private _aggregationType?: string; 
    public get aggregationType() {
        return this.getStringAttribute('aggregation_type');
    }
    public set aggregationType(value: string) {
        this._aggregationType = value;
    }
    public resetAggregationType() {
        this._aggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationTypeInput() {
        return this._aggregationType;
    }

    // target_file_size - computed: true, optional: true, required: false
    private _targetFileSize?: number; 
    public get targetFileSize() {
        return this.getNumberAttribute('target_file_size');
    }
    public set targetFileSize(value: number) {
        this._targetFileSize = value;
    }
    public resetTargetFileSize() {
        this._targetFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetFileSizeInput() {
        return this._targetFileSize;
    }
}
export interface PrefixConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#path_prefix_hierarchy CcFlow#path_prefix_hierarchy}
    */
    readonly pathPrefixHierarchy?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#prefix_format CcFlow#prefix_format}
    */
    readonly prefixFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#prefix_type CcFlow#prefix_type}
    */
    readonly prefixType?: string;
}
export class PrefixConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrefixConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pathPrefixHierarchy !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathPrefixHierarchy = this._pathPrefixHierarchy;
        }
        if (this._prefixFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixFormat = this._prefixFormat;
        }
        if (this._prefixType !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixType = this._prefixType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrefixConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pathPrefixHierarchy = undefined;
            this._prefixFormat = undefined;
            this._prefixType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pathPrefixHierarchy = value.pathPrefixHierarchy;
            this._prefixFormat = value.prefixFormat;
            this._prefixType = value.prefixType;
        }
    }

    // path_prefix_hierarchy - computed: true, optional: true, required: false
    private _pathPrefixHierarchy?: string[]; 
    public get pathPrefixHierarchy() {
        return this.getListAttribute('path_prefix_hierarchy');
    }
    public set pathPrefixHierarchy(value: string[]) {
        this._pathPrefixHierarchy = value;
    }
    public resetPathPrefixHierarchy() {
        this._pathPrefixHierarchy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixHierarchyInput() {
        return this._pathPrefixHierarchy;
    }

    // prefix_format - computed: true, optional: true, required: false
    private _prefixFormat?: string; 
    public get prefixFormat() {
        return this.getStringAttribute('prefix_format');
    }
    public set prefixFormat(value: string) {
        this._prefixFormat = value;
    }
    public resetPrefixFormat() {
        this._prefixFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixFormatInput() {
        return this._prefixFormat;
    }

    // prefix_type - computed: true, optional: true, required: false
    private _prefixType?: string; 
    public get prefixType() {
        return this.getStringAttribute('prefix_type');
    }
    public set prefixType(value: string) {
        this._prefixType = value;
    }
    public resetPrefixType() {
        this._prefixType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixTypeInput() {
        return this._prefixType;
    }
}
export interface S3OutputFormatConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#aggregation_config CcFlow#aggregation_config}
    */
    readonly aggregationConfig?: AggregationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#file_type CcFlow#file_type}
    */
    readonly fileType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#prefix_config CcFlow#prefix_config}
    */
    readonly prefixConfig?: PrefixConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#preserve_source_data_typing CcFlow#preserve_source_data_typing}
    */
    readonly preserveSourceDataTyping?: boolean | cdktn.IResolvable;
}
export class S3OutputFormatConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3OutputFormatConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationConfig = this._aggregationConfig?.internalValue;
        }
        if (this._fileType !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileType = this._fileType;
        }
        if (this._prefixConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixConfig = this._prefixConfig?.internalValue;
        }
        if (this._preserveSourceDataTyping !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveSourceDataTyping = this._preserveSourceDataTyping;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3OutputFormatConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationConfig.internalValue = undefined;
            this._fileType = undefined;
            this._prefixConfig.internalValue = undefined;
            this._preserveSourceDataTyping = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationConfig.internalValue = value.aggregationConfig;
            this._fileType = value.fileType;
            this._prefixConfig.internalValue = value.prefixConfig;
            this._preserveSourceDataTyping = value.preserveSourceDataTyping;
        }
    }

    // aggregation_config - computed: true, optional: true, required: false
    private _aggregationConfig = new AggregationConfigPropertyOutputReference(this, "aggregation_config");
    public get aggregationConfig() {
        return this._aggregationConfig;
    }
    public putAggregationConfig(value: AggregationConfigProperty) {
        this._aggregationConfig.internalValue = value;
    }
    public resetAggregationConfig() {
        this._aggregationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationConfigInput() {
        return this._aggregationConfig.internalValue;
    }

    // file_type - computed: true, optional: true, required: false
    private _fileType?: string; 
    public get fileType() {
        return this.getStringAttribute('file_type');
    }
    public set fileType(value: string) {
        this._fileType = value;
    }
    public resetFileType() {
        this._fileType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileTypeInput() {
        return this._fileType;
    }

    // prefix_config - computed: true, optional: true, required: false
    private _prefixConfig = new PrefixConfigPropertyOutputReference(this, "prefix_config");
    public get prefixConfig() {
        return this._prefixConfig;
    }
    public putPrefixConfig(value: PrefixConfigProperty) {
        this._prefixConfig.internalValue = value;
    }
    public resetPrefixConfig() {
        this._prefixConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixConfigInput() {
        return this._prefixConfig.internalValue;
    }

    // preserve_source_data_typing - computed: true, optional: true, required: false
    private _preserveSourceDataTyping?: boolean | cdktn.IResolvable; 
    public get preserveSourceDataTyping() {
        return this.getBooleanAttribute('preserve_source_data_typing');
    }
    public set preserveSourceDataTyping(value: boolean | cdktn.IResolvable) {
        this._preserveSourceDataTyping = value;
    }
    public resetPreserveSourceDataTyping() {
        this._preserveSourceDataTyping = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveSourceDataTypingInput() {
        return this._preserveSourceDataTyping;
    }
}
export interface S3DestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3_output_format_config CcFlow#s3_output_format_config}
    */
    readonly s3OutputFormatConfig?: S3OutputFormatConfigProperty;
}
export class S3DestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._s3OutputFormatConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputFormatConfig = this._s3OutputFormatConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._s3OutputFormatConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._s3OutputFormatConfig.internalValue = value.s3OutputFormatConfig;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // s3_output_format_config - computed: true, optional: true, required: false
    private _s3OutputFormatConfig = new S3OutputFormatConfigPropertyOutputReference(this, "s3_output_format_config");
    public get s3OutputFormatConfig() {
        return this._s3OutputFormatConfig;
    }
    public putS3OutputFormatConfig(value: S3OutputFormatConfigProperty) {
        this._s3OutputFormatConfig.internalValue = value;
    }
    public resetS3OutputFormatConfig() {
        this._s3OutputFormatConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputFormatConfigInput() {
        return this._s3OutputFormatConfig.internalValue;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface SalesforceDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#data_transfer_api CcFlow#data_transfer_api}
    */
    readonly dataTransferApi?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty;
    /**
    * List of fields used as ID when performing a write operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#id_field_names CcFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#write_operation_type CcFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
}
export class SalesforceDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataTransferApi !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTransferApi = this._dataTransferApi;
        }
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._idFieldNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.idFieldNames = this._idFieldNames;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        if (this._writeOperationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeOperationType = this._writeOperationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataTransferApi = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._idFieldNames = undefined;
            this._object = undefined;
            this._writeOperationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataTransferApi = value.dataTransferApi;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._idFieldNames = value.idFieldNames;
            this._object = value.object;
            this._writeOperationType = value.writeOperationType;
        }
    }

    // data_transfer_api - computed: true, optional: true, required: false
    private _dataTransferApi?: string; 
    public get dataTransferApi() {
        return this.getStringAttribute('data_transfer_api');
    }
    public set dataTransferApi(value: string) {
        this._dataTransferApi = value;
    }
    public resetDataTransferApi() {
        this._dataTransferApi = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTransferApiInput() {
        return this._dataTransferApi;
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // id_field_names - computed: true, optional: true, required: false
    private _idFieldNames?: string[]; 
    public get idFieldNames() {
        return this.getListAttribute('id_field_names');
    }
    public set idFieldNames(value: string[]) {
        this._idFieldNames = value;
    }
    public resetIdFieldNames() {
        this._idFieldNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idFieldNamesInput() {
        return this._idFieldNames;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }

    // write_operation_type - computed: true, optional: true, required: false
    private _writeOperationType?: string; 
    public get writeOperationType() {
        return this.getStringAttribute('write_operation_type');
    }
    public set writeOperationType(value: string) {
        this._writeOperationType = value;
    }
    public resetWriteOperationType() {
        this._writeOperationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOperationTypeInput() {
        return this._writeOperationType;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface SuccessResponseHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
}
export class SuccessResponseHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuccessResponseHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuccessResponseHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }
}
export interface SAPODataDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty;
    /**
    * List of fields used as ID when performing a write operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#id_field_names CcFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object_path CcFlow#object_path}
    */
    readonly objectPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#success_response_handling_config CcFlow#success_response_handling_config}
    */
    readonly successResponseHandlingConfig?: SuccessResponseHandlingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#write_operation_type CcFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
}
export class SAPODataDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAPODataDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._idFieldNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.idFieldNames = this._idFieldNames;
        }
        if (this._objectPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectPath = this._objectPath;
        }
        if (this._successResponseHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.successResponseHandlingConfig = this._successResponseHandlingConfig?.internalValue;
        }
        if (this._writeOperationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeOperationType = this._writeOperationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAPODataDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._idFieldNames = undefined;
            this._objectPath = undefined;
            this._successResponseHandlingConfig.internalValue = undefined;
            this._writeOperationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._idFieldNames = value.idFieldNames;
            this._objectPath = value.objectPath;
            this._successResponseHandlingConfig.internalValue = value.successResponseHandlingConfig;
            this._writeOperationType = value.writeOperationType;
        }
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // id_field_names - computed: true, optional: true, required: false
    private _idFieldNames?: string[]; 
    public get idFieldNames() {
        return this.getListAttribute('id_field_names');
    }
    public set idFieldNames(value: string[]) {
        this._idFieldNames = value;
    }
    public resetIdFieldNames() {
        this._idFieldNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idFieldNamesInput() {
        return this._idFieldNames;
    }

    // object_path - computed: true, optional: true, required: false
    private _objectPath?: string; 
    public get objectPath() {
        return this.getStringAttribute('object_path');
    }
    public set objectPath(value: string) {
        this._objectPath = value;
    }
    public resetObjectPath() {
        this._objectPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectPathInput() {
        return this._objectPath;
    }

    // success_response_handling_config - computed: true, optional: true, required: false
    private _successResponseHandlingConfig = new SuccessResponseHandlingConfigPropertyOutputReference(this, "success_response_handling_config");
    public get successResponseHandlingConfig() {
        return this._successResponseHandlingConfig;
    }
    public putSuccessResponseHandlingConfig(value: SuccessResponseHandlingConfigProperty) {
        this._successResponseHandlingConfig.internalValue = value;
    }
    public resetSuccessResponseHandlingConfig() {
        this._successResponseHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successResponseHandlingConfigInput() {
        return this._successResponseHandlingConfig.internalValue;
    }

    // write_operation_type - computed: true, optional: true, required: false
    private _writeOperationType?: string; 
    public get writeOperationType() {
        return this.getStringAttribute('write_operation_type');
    }
    public set writeOperationType(value: string) {
        this._writeOperationType = value;
    }
    public resetWriteOperationType() {
        this._writeOperationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOperationTypeInput() {
        return this._writeOperationType;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface SnowflakeDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#intermediate_bucket_name CcFlow#intermediate_bucket_name}
    */
    readonly intermediateBucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class SnowflakeDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnowflakeDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._intermediateBucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.intermediateBucketName = this._intermediateBucketName;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketPrefix = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._intermediateBucketName = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketPrefix = value.bucketPrefix;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._intermediateBucketName = value.intermediateBucketName;
            this._object = value.object;
        }
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // intermediate_bucket_name - computed: true, optional: true, required: false
    private _intermediateBucketName?: string; 
    public get intermediateBucketName() {
        return this.getStringAttribute('intermediate_bucket_name');
    }
    public set intermediateBucketName(value: string) {
        this._intermediateBucketName = value;
    }
    public resetIntermediateBucketName() {
        this._intermediateBucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intermediateBucketNameInput() {
        return this._intermediateBucketName;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#aggregation_type CcFlow#aggregation_type}
    */
    readonly aggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#target_file_size CcFlow#target_file_size}
    */
    readonly targetFileSize?: number;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationType = this._aggregationType;
        }
        if (this._targetFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetFileSize = this._targetFileSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationType = undefined;
            this._targetFileSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationType = value.aggregationType;
            this._targetFileSize = value.targetFileSize;
        }
    }

    // aggregation_type - computed: true, optional: true, required: false
    private _aggregationType?: string; 
    public get aggregationType() {
        return this.getStringAttribute('aggregation_type');
    }
    public set aggregationType(value: string) {
        this._aggregationType = value;
    }
    public resetAggregationType() {
        this._aggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationTypeInput() {
        return this._aggregationType;
    }

    // target_file_size - computed: true, optional: true, required: false
    private _targetFileSize?: number; 
    public get targetFileSize() {
        return this.getNumberAttribute('target_file_size');
    }
    public set targetFileSize(value: number) {
        this._targetFileSize = value;
    }
    public resetTargetFileSize() {
        this._targetFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetFileSizeInput() {
        return this._targetFileSize;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#path_prefix_hierarchy CcFlow#path_prefix_hierarchy}
    */
    readonly pathPrefixHierarchy?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#prefix_format CcFlow#prefix_format}
    */
    readonly prefixFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#prefix_type CcFlow#prefix_type}
    */
    readonly prefixType?: string;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pathPrefixHierarchy !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathPrefixHierarchy = this._pathPrefixHierarchy;
        }
        if (this._prefixFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixFormat = this._prefixFormat;
        }
        if (this._prefixType !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixType = this._prefixType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pathPrefixHierarchy = undefined;
            this._prefixFormat = undefined;
            this._prefixType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pathPrefixHierarchy = value.pathPrefixHierarchy;
            this._prefixFormat = value.prefixFormat;
            this._prefixType = value.prefixType;
        }
    }

    // path_prefix_hierarchy - computed: true, optional: true, required: false
    private _pathPrefixHierarchy?: string[]; 
    public get pathPrefixHierarchy() {
        return this.getListAttribute('path_prefix_hierarchy');
    }
    public set pathPrefixHierarchy(value: string[]) {
        this._pathPrefixHierarchy = value;
    }
    public resetPathPrefixHierarchy() {
        this._pathPrefixHierarchy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPrefixHierarchyInput() {
        return this._pathPrefixHierarchy;
    }

    // prefix_format - computed: true, optional: true, required: false
    private _prefixFormat?: string; 
    public get prefixFormat() {
        return this.getStringAttribute('prefix_format');
    }
    public set prefixFormat(value: string) {
        this._prefixFormat = value;
    }
    public resetPrefixFormat() {
        this._prefixFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixFormatInput() {
        return this._prefixFormat;
    }

    // prefix_type - computed: true, optional: true, required: false
    private _prefixType?: string; 
    public get prefixType() {
        return this.getStringAttribute('prefix_type');
    }
    public set prefixType(value: string) {
        this._prefixType = value;
    }
    public resetPrefixType() {
        this._prefixType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixTypeInput() {
        return this._prefixType;
    }
}
export interface UpsolverS3OutputFormatConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#aggregation_config CcFlow#aggregation_config}
    */
    readonly aggregationConfig?: DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#file_type CcFlow#file_type}
    */
    readonly fileType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#prefix_config CcFlow#prefix_config}
    */
    readonly prefixConfig?: DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty;
}
export class UpsolverS3OutputFormatConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpsolverS3OutputFormatConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationConfig = this._aggregationConfig?.internalValue;
        }
        if (this._fileType !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileType = this._fileType;
        }
        if (this._prefixConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixConfig = this._prefixConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpsolverS3OutputFormatConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationConfig.internalValue = undefined;
            this._fileType = undefined;
            this._prefixConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationConfig.internalValue = value.aggregationConfig;
            this._fileType = value.fileType;
            this._prefixConfig.internalValue = value.prefixConfig;
        }
    }

    // aggregation_config - computed: true, optional: true, required: false
    private _aggregationConfig = new DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigPropertyOutputReference(this, "aggregation_config");
    public get aggregationConfig() {
        return this._aggregationConfig;
    }
    public putAggregationConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigProperty) {
        this._aggregationConfig.internalValue = value;
    }
    public resetAggregationConfig() {
        this._aggregationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationConfigInput() {
        return this._aggregationConfig.internalValue;
    }

    // file_type - computed: true, optional: true, required: false
    private _fileType?: string; 
    public get fileType() {
        return this.getStringAttribute('file_type');
    }
    public set fileType(value: string) {
        this._fileType = value;
    }
    public resetFileType() {
        this._fileType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileTypeInput() {
        return this._fileType;
    }

    // prefix_config - computed: true, optional: true, required: false
    private _prefixConfig = new DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigPropertyOutputReference(this, "prefix_config");
    public get prefixConfig() {
        return this._prefixConfig;
    }
    public putPrefixConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigProperty) {
        this._prefixConfig.internalValue = value;
    }
    public resetPrefixConfig() {
        this._prefixConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixConfigInput() {
        return this._prefixConfig.internalValue;
    }
}
export interface UpsolverDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3_output_format_config CcFlow#s3_output_format_config}
    */
    readonly s3OutputFormatConfig?: UpsolverS3OutputFormatConfigProperty;
}
export class UpsolverDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpsolverDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._s3OutputFormatConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputFormatConfig = this._s3OutputFormatConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpsolverDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._s3OutputFormatConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._s3OutputFormatConfig.internalValue = value.s3OutputFormatConfig;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // s3_output_format_config - computed: true, optional: true, required: false
    private _s3OutputFormatConfig = new UpsolverS3OutputFormatConfigPropertyOutputReference(this, "s3_output_format_config");
    public get s3OutputFormatConfig() {
        return this._s3OutputFormatConfig;
    }
    public putS3OutputFormatConfig(value: UpsolverS3OutputFormatConfigProperty) {
        this._s3OutputFormatConfig.internalValue = value;
    }
    public resetS3OutputFormatConfig() {
        this._s3OutputFormatConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputFormatConfigInput() {
        return this._s3OutputFormatConfig.internalValue;
    }
}
export interface DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#fail_on_first_error CcFlow#fail_on_first_error}
    */
    readonly failOnFirstError?: boolean | cdktn.IResolvable;
}
export class DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._failOnFirstError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnFirstError = this._failOnFirstError;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._failOnFirstError = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._failOnFirstError = value.failOnFirstError;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // fail_on_first_error - computed: true, optional: true, required: false
    private _failOnFirstError?: boolean | cdktn.IResolvable; 
    public get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
    public set failOnFirstError(value: boolean | cdktn.IResolvable) {
        this._failOnFirstError = value;
    }
    public resetFailOnFirstError() {
        this._failOnFirstError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnFirstErrorInput() {
        return this._failOnFirstError;
    }
}
export interface ZendeskDestinationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#error_handling_config CcFlow#error_handling_config}
    */
    readonly errorHandlingConfig?: DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty;
    /**
    * List of fields used as ID when performing a write operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#id_field_names CcFlow#id_field_names}
    */
    readonly idFieldNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#write_operation_type CcFlow#write_operation_type}
    */
    readonly writeOperationType?: string;
}
export class ZendeskDestinationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZendeskDestinationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorHandlingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
        }
        if (this._idFieldNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.idFieldNames = this._idFieldNames;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        if (this._writeOperationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeOperationType = this._writeOperationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZendeskDestinationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = undefined;
            this._idFieldNames = undefined;
            this._object = undefined;
            this._writeOperationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
            this._idFieldNames = value.idFieldNames;
            this._object = value.object;
            this._writeOperationType = value.writeOperationType;
        }
    }

    // error_handling_config - computed: true, optional: true, required: false
    private _errorHandlingConfig = new DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigPropertyOutputReference(this, "error_handling_config");
    public get errorHandlingConfig() {
        return this._errorHandlingConfig;
    }
    public putErrorHandlingConfig(value: DestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigProperty) {
        this._errorHandlingConfig.internalValue = value;
    }
    public resetErrorHandlingConfig() {
        this._errorHandlingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorHandlingConfigInput() {
        return this._errorHandlingConfig.internalValue;
    }

    // id_field_names - computed: true, optional: true, required: false
    private _idFieldNames?: string[]; 
    public get idFieldNames() {
        return this.getListAttribute('id_field_names');
    }
    public set idFieldNames(value: string[]) {
        this._idFieldNames = value;
    }
    public resetIdFieldNames() {
        this._idFieldNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idFieldNamesInput() {
        return this._idFieldNames;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }

    // write_operation_type - computed: true, optional: true, required: false
    private _writeOperationType?: string; 
    public get writeOperationType() {
        return this.getStringAttribute('write_operation_type');
    }
    public set writeOperationType(value: string) {
        this._writeOperationType = value;
    }
    public resetWriteOperationType() {
        this._writeOperationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOperationTypeInput() {
        return this._writeOperationType;
    }
}
export interface DestinationConnectorPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#custom_connector CcFlow#custom_connector}
    */
    readonly customConnector?: CustomConnectorDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#event_bridge CcFlow#event_bridge}
    */
    readonly eventBridge?: EventBridgeDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#lookout_metrics CcFlow#lookout_metrics}
    */
    readonly lookoutMetrics?: LookoutMetricsDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#marketo CcFlow#marketo}
    */
    readonly marketo?: MarketoDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#redshift CcFlow#redshift}
    */
    readonly redshift?: RedshiftDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3 CcFlow#s3}
    */
    readonly s3?: S3DestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#salesforce CcFlow#salesforce}
    */
    readonly salesforce?: SalesforceDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#sapo_data CcFlow#sapo_data}
    */
    readonly sapoData?: SAPODataDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#snowflake CcFlow#snowflake}
    */
    readonly snowflake?: SnowflakeDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#upsolver CcFlow#upsolver}
    */
    readonly upsolver?: UpsolverDestinationPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#zendesk CcFlow#zendesk}
    */
    readonly zendesk?: ZendeskDestinationPropertiesProperty;
}
export class DestinationConnectorPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConnectorPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customConnector?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customConnector = this._customConnector?.internalValue;
        }
        if (this._eventBridge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBridge = this._eventBridge?.internalValue;
        }
        if (this._lookoutMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lookoutMetrics = this._lookoutMetrics?.internalValue;
        }
        if (this._marketo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketo = this._marketo?.internalValue;
        }
        if (this._redshift?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshift = this._redshift?.internalValue;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        if (this._salesforce?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforce = this._salesforce?.internalValue;
        }
        if (this._sapoData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapoData = this._sapoData?.internalValue;
        }
        if (this._snowflake?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflake = this._snowflake?.internalValue;
        }
        if (this._upsolver?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.upsolver = this._upsolver?.internalValue;
        }
        if (this._zendesk?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.zendesk = this._zendesk?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConnectorPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customConnector.internalValue = undefined;
            this._eventBridge.internalValue = undefined;
            this._lookoutMetrics.internalValue = undefined;
            this._marketo.internalValue = undefined;
            this._redshift.internalValue = undefined;
            this._s3.internalValue = undefined;
            this._salesforce.internalValue = undefined;
            this._sapoData.internalValue = undefined;
            this._snowflake.internalValue = undefined;
            this._upsolver.internalValue = undefined;
            this._zendesk.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customConnector.internalValue = value.customConnector;
            this._eventBridge.internalValue = value.eventBridge;
            this._lookoutMetrics.internalValue = value.lookoutMetrics;
            this._marketo.internalValue = value.marketo;
            this._redshift.internalValue = value.redshift;
            this._s3.internalValue = value.s3;
            this._salesforce.internalValue = value.salesforce;
            this._sapoData.internalValue = value.sapoData;
            this._snowflake.internalValue = value.snowflake;
            this._upsolver.internalValue = value.upsolver;
            this._zendesk.internalValue = value.zendesk;
        }
    }

    // custom_connector - computed: true, optional: true, required: false
    private _customConnector = new CustomConnectorDestinationPropertiesPropertyOutputReference(this, "custom_connector");
    public get customConnector() {
        return this._customConnector;
    }
    public putCustomConnector(value: CustomConnectorDestinationPropertiesProperty) {
        this._customConnector.internalValue = value;
    }
    public resetCustomConnector() {
        this._customConnector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConnectorInput() {
        return this._customConnector.internalValue;
    }

    // event_bridge - computed: true, optional: true, required: false
    private _eventBridge = new EventBridgeDestinationPropertiesPropertyOutputReference(this, "event_bridge");
    public get eventBridge() {
        return this._eventBridge;
    }
    public putEventBridge(value: EventBridgeDestinationPropertiesProperty) {
        this._eventBridge.internalValue = value;
    }
    public resetEventBridge() {
        this._eventBridge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeInput() {
        return this._eventBridge.internalValue;
    }

    // lookout_metrics - computed: true, optional: true, required: false
    private _lookoutMetrics = new LookoutMetricsDestinationPropertiesPropertyOutputReference(this, "lookout_metrics");
    public get lookoutMetrics() {
        return this._lookoutMetrics;
    }
    public putLookoutMetrics(value: LookoutMetricsDestinationPropertiesProperty) {
        this._lookoutMetrics.internalValue = value;
    }
    public resetLookoutMetrics() {
        this._lookoutMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lookoutMetricsInput() {
        return this._lookoutMetrics.internalValue;
    }

    // marketo - computed: true, optional: true, required: false
    private _marketo = new MarketoDestinationPropertiesPropertyOutputReference(this, "marketo");
    public get marketo() {
        return this._marketo;
    }
    public putMarketo(value: MarketoDestinationPropertiesProperty) {
        this._marketo.internalValue = value;
    }
    public resetMarketo() {
        this._marketo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketoInput() {
        return this._marketo.internalValue;
    }

    // redshift - computed: true, optional: true, required: false
    private _redshift = new RedshiftDestinationPropertiesPropertyOutputReference(this, "redshift");
    public get redshift() {
        return this._redshift;
    }
    public putRedshift(value: RedshiftDestinationPropertiesProperty) {
        this._redshift.internalValue = value;
    }
    public resetRedshift() {
        this._redshift.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftInput() {
        return this._redshift.internalValue;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3DestinationPropertiesPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3DestinationPropertiesProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }

    // salesforce - computed: true, optional: true, required: false
    private _salesforce = new SalesforceDestinationPropertiesPropertyOutputReference(this, "salesforce");
    public get salesforce() {
        return this._salesforce;
    }
    public putSalesforce(value: SalesforceDestinationPropertiesProperty) {
        this._salesforce.internalValue = value;
    }
    public resetSalesforce() {
        this._salesforce.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceInput() {
        return this._salesforce.internalValue;
    }

    // sapo_data - computed: true, optional: true, required: false
    private _sapoData = new SAPODataDestinationPropertiesPropertyOutputReference(this, "sapo_data");
    public get sapoData() {
        return this._sapoData;
    }
    public putSapoData(value: SAPODataDestinationPropertiesProperty) {
        this._sapoData.internalValue = value;
    }
    public resetSapoData() {
        this._sapoData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapoDataInput() {
        return this._sapoData.internalValue;
    }

    // snowflake - computed: true, optional: true, required: false
    private _snowflake = new SnowflakeDestinationPropertiesPropertyOutputReference(this, "snowflake");
    public get snowflake() {
        return this._snowflake;
    }
    public putSnowflake(value: SnowflakeDestinationPropertiesProperty) {
        this._snowflake.internalValue = value;
    }
    public resetSnowflake() {
        this._snowflake.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeInput() {
        return this._snowflake.internalValue;
    }

    // upsolver - computed: true, optional: true, required: false
    private _upsolver = new UpsolverDestinationPropertiesPropertyOutputReference(this, "upsolver");
    public get upsolver() {
        return this._upsolver;
    }
    public putUpsolver(value: UpsolverDestinationPropertiesProperty) {
        this._upsolver.internalValue = value;
    }
    public resetUpsolver() {
        this._upsolver.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upsolverInput() {
        return this._upsolver.internalValue;
    }

    // zendesk - computed: true, optional: true, required: false
    private _zendesk = new ZendeskDestinationPropertiesPropertyOutputReference(this, "zendesk");
    public get zendesk() {
        return this._zendesk;
    }
    public putZendesk(value: ZendeskDestinationPropertiesProperty) {
        this._zendesk.internalValue = value;
    }
    public resetZendesk() {
        this._zendesk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zendeskInput() {
        return this._zendesk.internalValue;
    }
}
export interface DestinationFlowConfigProperty {
    /**
    * The API version that the destination connector uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#api_version CcFlow#api_version}
    */
    readonly apiVersion?: string;
    /**
    * Name of destination connector profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#connector_profile_name CcFlow#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Destination connector type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#connector_type CcFlow#connector_type}
    */
    readonly connectorType: string;
    /**
    * Destination connector details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#destination_connector_properties CcFlow#destination_connector_properties}
    */
    readonly destinationConnectorProperties: DestinationConnectorPropertiesProperty;
}
export class DestinationFlowConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DestinationFlowConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiVersion = this._apiVersion;
        }
        if (this._connectorProfileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorProfileName = this._connectorProfileName;
        }
        if (this._connectorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorType = this._connectorType;
        }
        if (this._destinationConnectorProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationConnectorProperties = this._destinationConnectorProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationFlowConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiVersion = undefined;
            this._connectorProfileName = undefined;
            this._connectorType = undefined;
            this._destinationConnectorProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiVersion = value.apiVersion;
            this._connectorProfileName = value.connectorProfileName;
            this._connectorType = value.connectorType;
            this._destinationConnectorProperties.internalValue = value.destinationConnectorProperties;
        }
    }

    // api_version - computed: true, optional: true, required: false
    private _apiVersion?: string; 
    public get apiVersion() {
        return this.getStringAttribute('api_version');
    }
    public set apiVersion(value: string) {
        this._apiVersion = value;
    }
    public resetApiVersion() {
        this._apiVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiVersionInput() {
        return this._apiVersion;
    }

    // connector_profile_name - computed: true, optional: true, required: false
    private _connectorProfileName?: string; 
    public get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    public set connectorProfileName(value: string) {
        this._connectorProfileName = value;
    }
    public resetConnectorProfileName() {
        this._connectorProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProfileNameInput() {
        return this._connectorProfileName;
    }

    // connector_type - computed: false, optional: false, required: true
    private _connectorType?: string; 
    public get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    public set connectorType(value: string) {
        this._connectorType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorTypeInput() {
        return this._connectorType;
    }

    // destination_connector_properties - computed: false, optional: false, required: true
    private _destinationConnectorProperties = new DestinationConnectorPropertiesPropertyOutputReference(this, "destination_connector_properties");
    public get destinationConnectorProperties() {
        return this._destinationConnectorProperties;
    }
    public putDestinationConnectorProperties(value: DestinationConnectorPropertiesProperty) {
        this._destinationConnectorProperties.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConnectorPropertiesInput() {
        return this._destinationConnectorProperties.internalValue;
    }
}

export class DestinationFlowConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : DestinationFlowConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): DestinationFlowConfigPropertyOutputReference {
        return new DestinationFlowConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GlueDataCatalogProperty {
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#database_name CcFlow#database_name}
    */
    readonly databaseName?: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#role_arn CcFlow#role_arn}
    */
    readonly roleArn?: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#table_prefix CcFlow#table_prefix}
    */
    readonly tablePrefix?: string;
}
export class GlueDataCatalogPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlueDataCatalogProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tablePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.tablePrefix = this._tablePrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueDataCatalogProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._roleArn = undefined;
            this._tablePrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._roleArn = value.roleArn;
            this._tablePrefix = value.tablePrefix;
        }
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // table_prefix - computed: true, optional: true, required: false
    private _tablePrefix?: string; 
    public get tablePrefix() {
        return this.getStringAttribute('table_prefix');
    }
    public set tablePrefix(value: string) {
        this._tablePrefix = value;
    }
    public resetTablePrefix() {
        this._tablePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tablePrefixInput() {
        return this._tablePrefix;
    }
}
export interface MetadataCatalogConfigProperty {
    /**
    * Configurations of glue data catalog of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#glue_data_catalog CcFlow#glue_data_catalog}
    */
    readonly glueDataCatalog?: GlueDataCatalogProperty;
}
export class MetadataCatalogConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataCatalogConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueDataCatalog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueDataCatalog = this._glueDataCatalog?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataCatalogConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueDataCatalog.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueDataCatalog.internalValue = value.glueDataCatalog;
        }
    }

    // glue_data_catalog - computed: true, optional: true, required: false
    private _glueDataCatalog = new GlueDataCatalogPropertyOutputReference(this, "glue_data_catalog");
    public get glueDataCatalog() {
        return this._glueDataCatalog;
    }
    public putGlueDataCatalog(value: GlueDataCatalogProperty) {
        this._glueDataCatalog.internalValue = value;
    }
    public resetGlueDataCatalog() {
        this._glueDataCatalog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueDataCatalogInput() {
        return this._glueDataCatalog.internalValue;
    }
}
export interface IncrementalPullConfigProperty {
    /**
    * Name of the datetime/timestamp data type field to be used for importing incremental records from the source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#datetime_type_field_name CcFlow#datetime_type_field_name}
    */
    readonly datetimeTypeFieldName?: string;
}
export class IncrementalPullConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IncrementalPullConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._datetimeTypeFieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.datetimeTypeFieldName = this._datetimeTypeFieldName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncrementalPullConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datetimeTypeFieldName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datetimeTypeFieldName = value.datetimeTypeFieldName;
        }
    }

    // datetime_type_field_name - computed: true, optional: true, required: false
    private _datetimeTypeFieldName?: string; 
    public get datetimeTypeFieldName() {
        return this.getStringAttribute('datetime_type_field_name');
    }
    public set datetimeTypeFieldName(value: string) {
        this._datetimeTypeFieldName = value;
    }
    public resetDatetimeTypeFieldName() {
        this._datetimeTypeFieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datetimeTypeFieldNameInput() {
        return this._datetimeTypeFieldName;
    }
}
export interface AmplitudeSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class AmplitudeSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmplitudeSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmplitudeSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface DataTransferApiProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#name CcFlow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#type CcFlow#type}
    */
    readonly type?: string;
}
export class DataTransferApiPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataTransferApiProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataTransferApiProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface CustomConnectorSourcePropertiesProperty {
    /**
    * A map for properties for custom connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#custom_properties CcFlow#custom_properties}
    */
    readonly customProperties?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#data_transfer_api CcFlow#data_transfer_api}
    */
    readonly dataTransferApi?: DataTransferApiProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#entity_name CcFlow#entity_name}
    */
    readonly entityName?: string;
}
export class CustomConnectorSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomConnectorSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.customProperties = this._customProperties;
        }
        if (this._dataTransferApi?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTransferApi = this._dataTransferApi?.internalValue;
        }
        if (this._entityName !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityName = this._entityName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomConnectorSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customProperties = undefined;
            this._dataTransferApi.internalValue = undefined;
            this._entityName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customProperties = value.customProperties;
            this._dataTransferApi.internalValue = value.dataTransferApi;
            this._entityName = value.entityName;
        }
    }

    // custom_properties - computed: true, optional: true, required: false
    private _customProperties?: { [key: string]: string }; 
    public get customProperties() {
        return this.getStringMapAttribute('custom_properties');
    }
    public set customProperties(value: { [key: string]: string }) {
        this._customProperties = value;
    }
    public resetCustomProperties() {
        this._customProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPropertiesInput() {
        return this._customProperties;
    }

    // data_transfer_api - computed: true, optional: true, required: false
    private _dataTransferApi = new DataTransferApiPropertyOutputReference(this, "data_transfer_api");
    public get dataTransferApi() {
        return this._dataTransferApi;
    }
    public putDataTransferApi(value: DataTransferApiProperty) {
        this._dataTransferApi.internalValue = value;
    }
    public resetDataTransferApi() {
        this._dataTransferApi.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTransferApiInput() {
        return this._dataTransferApi.internalValue;
    }

    // entity_name - computed: true, optional: true, required: false
    private _entityName?: string; 
    public get entityName() {
        return this.getStringAttribute('entity_name');
    }
    public set entityName(value: string) {
        this._entityName = value;
    }
    public resetEntityName() {
        this._entityName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityNameInput() {
        return this._entityName;
    }
}
export interface DatadogSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class DatadogSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatadogSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatadogSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface DynatraceSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class DynatraceSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface GoogleAnalyticsSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class GoogleAnalyticsSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GoogleAnalyticsSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GoogleAnalyticsSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface InforNexusSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class InforNexusSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InforNexusSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InforNexusSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface MarketoSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class MarketoSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarketoSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarketoSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface PardotSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class PardotSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PardotSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PardotSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface S3InputFormatConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3_input_file_type CcFlow#s3_input_file_type}
    */
    readonly s3InputFileType?: string;
}
export class S3InputFormatConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3InputFormatConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3InputFileType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputFileType = this._s3InputFileType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3InputFormatConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3InputFileType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3InputFileType = value.s3InputFileType;
        }
    }

    // s3_input_file_type - computed: true, optional: true, required: false
    private _s3InputFileType?: string; 
    public get s3InputFileType() {
        return this.getStringAttribute('s3_input_file_type');
    }
    public set s3InputFileType(value: string) {
        this._s3InputFileType = value;
    }
    public resetS3InputFileType() {
        this._s3InputFileType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputFileTypeInput() {
        return this._s3InputFileType;
    }
}
export interface S3SourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_name CcFlow#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#bucket_prefix CcFlow#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3_input_format_config CcFlow#s3_input_format_config}
    */
    readonly s3InputFormatConfig?: S3InputFormatConfigProperty;
}
export class S3SourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3SourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._s3InputFormatConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputFormatConfig = this._s3InputFormatConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3SourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._s3InputFormatConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._s3InputFormatConfig.internalValue = value.s3InputFormatConfig;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // s3_input_format_config - computed: true, optional: true, required: false
    private _s3InputFormatConfig = new S3InputFormatConfigPropertyOutputReference(this, "s3_input_format_config");
    public get s3InputFormatConfig() {
        return this._s3InputFormatConfig;
    }
    public putS3InputFormatConfig(value: S3InputFormatConfigProperty) {
        this._s3InputFormatConfig.internalValue = value;
    }
    public resetS3InputFormatConfig() {
        this._s3InputFormatConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputFormatConfigInput() {
        return this._s3InputFormatConfig.internalValue;
    }
}
export interface SalesforceSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#data_transfer_api CcFlow#data_transfer_api}
    */
    readonly dataTransferApi?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#enable_dynamic_field_update CcFlow#enable_dynamic_field_update}
    */
    readonly enableDynamicFieldUpdate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#include_deleted_records CcFlow#include_deleted_records}
    */
    readonly includeDeletedRecords?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class SalesforceSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataTransferApi !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTransferApi = this._dataTransferApi;
        }
        if (this._enableDynamicFieldUpdate !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableDynamicFieldUpdate = this._enableDynamicFieldUpdate;
        }
        if (this._includeDeletedRecords !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeDeletedRecords = this._includeDeletedRecords;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataTransferApi = undefined;
            this._enableDynamicFieldUpdate = undefined;
            this._includeDeletedRecords = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataTransferApi = value.dataTransferApi;
            this._enableDynamicFieldUpdate = value.enableDynamicFieldUpdate;
            this._includeDeletedRecords = value.includeDeletedRecords;
            this._object = value.object;
        }
    }

    // data_transfer_api - computed: true, optional: true, required: false
    private _dataTransferApi?: string; 
    public get dataTransferApi() {
        return this.getStringAttribute('data_transfer_api');
    }
    public set dataTransferApi(value: string) {
        this._dataTransferApi = value;
    }
    public resetDataTransferApi() {
        this._dataTransferApi = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTransferApiInput() {
        return this._dataTransferApi;
    }

    // enable_dynamic_field_update - computed: true, optional: true, required: false
    private _enableDynamicFieldUpdate?: boolean | cdktn.IResolvable; 
    public get enableDynamicFieldUpdate() {
        return this.getBooleanAttribute('enable_dynamic_field_update');
    }
    public set enableDynamicFieldUpdate(value: boolean | cdktn.IResolvable) {
        this._enableDynamicFieldUpdate = value;
    }
    public resetEnableDynamicFieldUpdate() {
        this._enableDynamicFieldUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDynamicFieldUpdateInput() {
        return this._enableDynamicFieldUpdate;
    }

    // include_deleted_records - computed: true, optional: true, required: false
    private _includeDeletedRecords?: boolean | cdktn.IResolvable; 
    public get includeDeletedRecords() {
        return this.getBooleanAttribute('include_deleted_records');
    }
    public set includeDeletedRecords(value: boolean | cdktn.IResolvable) {
        this._includeDeletedRecords = value;
    }
    public resetIncludeDeletedRecords() {
        this._includeDeletedRecords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeDeletedRecordsInput() {
        return this._includeDeletedRecords;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface SAPODataPaginationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#max_page_size CcFlow#max_page_size}
    */
    readonly maxPageSize?: number;
}
export class SAPODataPaginationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAPODataPaginationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxPageSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPageSize = this._maxPageSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAPODataPaginationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxPageSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxPageSize = value.maxPageSize;
        }
    }

    // max_page_size - computed: true, optional: true, required: false
    private _maxPageSize?: number; 
    public get maxPageSize() {
        return this.getNumberAttribute('max_page_size');
    }
    public set maxPageSize(value: number) {
        this._maxPageSize = value;
    }
    public resetMaxPageSize() {
        this._maxPageSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPageSizeInput() {
        return this._maxPageSize;
    }
}
export interface SAPODataParallelismConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#max_parallelism CcFlow#max_parallelism}
    */
    readonly maxParallelism?: number;
}
export class SAPODataParallelismConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAPODataParallelismConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxParallelism !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxParallelism = this._maxParallelism;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAPODataParallelismConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxParallelism = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxParallelism = value.maxParallelism;
        }
    }

    // max_parallelism - computed: true, optional: true, required: false
    private _maxParallelism?: number; 
    public get maxParallelism() {
        return this.getNumberAttribute('max_parallelism');
    }
    public set maxParallelism(value: number) {
        this._maxParallelism = value;
    }
    public resetMaxParallelism() {
        this._maxParallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxParallelismInput() {
        return this._maxParallelism;
    }
}
export interface SAPODataSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object_path CcFlow#object_path}
    */
    readonly objectPath?: string;
    /**
    * SAP Source connector page size
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#pagination_config CcFlow#pagination_config}
    */
    readonly paginationConfig?: SAPODataPaginationConfigProperty;
    /**
    * SAP Source connector parallelism factor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#parallelism_config CcFlow#parallelism_config}
    */
    readonly parallelismConfig?: SAPODataParallelismConfigProperty;
}
export class SAPODataSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAPODataSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectPath = this._objectPath;
        }
        if (this._paginationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.paginationConfig = this._paginationConfig?.internalValue;
        }
        if (this._parallelismConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelismConfig = this._parallelismConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAPODataSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectPath = undefined;
            this._paginationConfig.internalValue = undefined;
            this._parallelismConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectPath = value.objectPath;
            this._paginationConfig.internalValue = value.paginationConfig;
            this._parallelismConfig.internalValue = value.parallelismConfig;
        }
    }

    // object_path - computed: true, optional: true, required: false
    private _objectPath?: string; 
    public get objectPath() {
        return this.getStringAttribute('object_path');
    }
    public set objectPath(value: string) {
        this._objectPath = value;
    }
    public resetObjectPath() {
        this._objectPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectPathInput() {
        return this._objectPath;
    }

    // pagination_config - computed: true, optional: true, required: false
    private _paginationConfig = new SAPODataPaginationConfigPropertyOutputReference(this, "pagination_config");
    public get paginationConfig() {
        return this._paginationConfig;
    }
    public putPaginationConfig(value: SAPODataPaginationConfigProperty) {
        this._paginationConfig.internalValue = value;
    }
    public resetPaginationConfig() {
        this._paginationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paginationConfigInput() {
        return this._paginationConfig.internalValue;
    }

    // parallelism_config - computed: true, optional: true, required: false
    private _parallelismConfig = new SAPODataParallelismConfigPropertyOutputReference(this, "parallelism_config");
    public get parallelismConfig() {
        return this._parallelismConfig;
    }
    public putParallelismConfig(value: SAPODataParallelismConfigProperty) {
        this._parallelismConfig.internalValue = value;
    }
    public resetParallelismConfig() {
        this._parallelismConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelismConfigInput() {
        return this._parallelismConfig.internalValue;
    }
}
export interface ServiceNowSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class ServiceNowSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface SingularSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class SingularSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingularSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingularSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface SlackSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class SlackSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface TrendmicroSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class TrendmicroSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrendmicroSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrendmicroSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface VeevaSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#document_type CcFlow#document_type}
    */
    readonly documentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#include_all_versions CcFlow#include_all_versions}
    */
    readonly includeAllVersions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#include_renditions CcFlow#include_renditions}
    */
    readonly includeRenditions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#include_source_files CcFlow#include_source_files}
    */
    readonly includeSourceFiles?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class VeevaSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VeevaSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._documentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentType = this._documentType;
        }
        if (this._includeAllVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeAllVersions = this._includeAllVersions;
        }
        if (this._includeRenditions !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeRenditions = this._includeRenditions;
        }
        if (this._includeSourceFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSourceFiles = this._includeSourceFiles;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VeevaSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._documentType = undefined;
            this._includeAllVersions = undefined;
            this._includeRenditions = undefined;
            this._includeSourceFiles = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._documentType = value.documentType;
            this._includeAllVersions = value.includeAllVersions;
            this._includeRenditions = value.includeRenditions;
            this._includeSourceFiles = value.includeSourceFiles;
            this._object = value.object;
        }
    }

    // document_type - computed: true, optional: true, required: false
    private _documentType?: string; 
    public get documentType() {
        return this.getStringAttribute('document_type');
    }
    public set documentType(value: string) {
        this._documentType = value;
    }
    public resetDocumentType() {
        this._documentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentTypeInput() {
        return this._documentType;
    }

    // include_all_versions - computed: true, optional: true, required: false
    private _includeAllVersions?: boolean | cdktn.IResolvable; 
    public get includeAllVersions() {
        return this.getBooleanAttribute('include_all_versions');
    }
    public set includeAllVersions(value: boolean | cdktn.IResolvable) {
        this._includeAllVersions = value;
    }
    public resetIncludeAllVersions() {
        this._includeAllVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeAllVersionsInput() {
        return this._includeAllVersions;
    }

    // include_renditions - computed: true, optional: true, required: false
    private _includeRenditions?: boolean | cdktn.IResolvable; 
    public get includeRenditions() {
        return this.getBooleanAttribute('include_renditions');
    }
    public set includeRenditions(value: boolean | cdktn.IResolvable) {
        this._includeRenditions = value;
    }
    public resetIncludeRenditions() {
        this._includeRenditions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeRenditionsInput() {
        return this._includeRenditions;
    }

    // include_source_files - computed: true, optional: true, required: false
    private _includeSourceFiles?: boolean | cdktn.IResolvable; 
    public get includeSourceFiles() {
        return this.getBooleanAttribute('include_source_files');
    }
    public set includeSourceFiles(value: boolean | cdktn.IResolvable) {
        this._includeSourceFiles = value;
    }
    public resetIncludeSourceFiles() {
        this._includeSourceFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSourceFilesInput() {
        return this._includeSourceFiles;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface ZendeskSourcePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#object CcFlow#object}
    */
    readonly object?: string;
}
export class ZendeskSourcePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZendeskSourcePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZendeskSourcePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._object = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._object = value.object;
        }
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }
}
export interface SourceConnectorPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#amplitude CcFlow#amplitude}
    */
    readonly amplitude?: AmplitudeSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#custom_connector CcFlow#custom_connector}
    */
    readonly customConnector?: CustomConnectorSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#datadog CcFlow#datadog}
    */
    readonly datadog?: DatadogSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#dynatrace CcFlow#dynatrace}
    */
    readonly dynatrace?: DynatraceSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#google_analytics CcFlow#google_analytics}
    */
    readonly googleAnalytics?: GoogleAnalyticsSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#infor_nexus CcFlow#infor_nexus}
    */
    readonly inforNexus?: InforNexusSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#marketo CcFlow#marketo}
    */
    readonly marketo?: MarketoSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#pardot CcFlow#pardot}
    */
    readonly pardot?: PardotSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3 CcFlow#s3}
    */
    readonly s3?: S3SourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#salesforce CcFlow#salesforce}
    */
    readonly salesforce?: SalesforceSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#sapo_data CcFlow#sapo_data}
    */
    readonly sapoData?: SAPODataSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#service_now CcFlow#service_now}
    */
    readonly serviceNow?: ServiceNowSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#singular CcFlow#singular}
    */
    readonly singular?: SingularSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#slack CcFlow#slack}
    */
    readonly slack?: SlackSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#trendmicro CcFlow#trendmicro}
    */
    readonly trendmicro?: TrendmicroSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#veeva CcFlow#veeva}
    */
    readonly veeva?: VeevaSourcePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#zendesk CcFlow#zendesk}
    */
    readonly zendesk?: ZendeskSourcePropertiesProperty;
}
export class SourceConnectorPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceConnectorPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amplitude?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amplitude = this._amplitude?.internalValue;
        }
        if (this._customConnector?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customConnector = this._customConnector?.internalValue;
        }
        if (this._datadog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datadog = this._datadog?.internalValue;
        }
        if (this._dynatrace?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynatrace = this._dynatrace?.internalValue;
        }
        if (this._googleAnalytics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
        }
        if (this._inforNexus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inforNexus = this._inforNexus?.internalValue;
        }
        if (this._marketo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketo = this._marketo?.internalValue;
        }
        if (this._pardot?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pardot = this._pardot?.internalValue;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        if (this._salesforce?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforce = this._salesforce?.internalValue;
        }
        if (this._sapoData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapoData = this._sapoData?.internalValue;
        }
        if (this._serviceNow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow?.internalValue;
        }
        if (this._singular?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singular = this._singular?.internalValue;
        }
        if (this._slack?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slack = this._slack?.internalValue;
        }
        if (this._trendmicro?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trendmicro = this._trendmicro?.internalValue;
        }
        if (this._veeva?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.veeva = this._veeva?.internalValue;
        }
        if (this._zendesk?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.zendesk = this._zendesk?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConnectorPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amplitude.internalValue = undefined;
            this._customConnector.internalValue = undefined;
            this._datadog.internalValue = undefined;
            this._dynatrace.internalValue = undefined;
            this._googleAnalytics.internalValue = undefined;
            this._inforNexus.internalValue = undefined;
            this._marketo.internalValue = undefined;
            this._pardot.internalValue = undefined;
            this._s3.internalValue = undefined;
            this._salesforce.internalValue = undefined;
            this._sapoData.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
            this._singular.internalValue = undefined;
            this._slack.internalValue = undefined;
            this._trendmicro.internalValue = undefined;
            this._veeva.internalValue = undefined;
            this._zendesk.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amplitude.internalValue = value.amplitude;
            this._customConnector.internalValue = value.customConnector;
            this._datadog.internalValue = value.datadog;
            this._dynatrace.internalValue = value.dynatrace;
            this._googleAnalytics.internalValue = value.googleAnalytics;
            this._inforNexus.internalValue = value.inforNexus;
            this._marketo.internalValue = value.marketo;
            this._pardot.internalValue = value.pardot;
            this._s3.internalValue = value.s3;
            this._salesforce.internalValue = value.salesforce;
            this._sapoData.internalValue = value.sapoData;
            this._serviceNow.internalValue = value.serviceNow;
            this._singular.internalValue = value.singular;
            this._slack.internalValue = value.slack;
            this._trendmicro.internalValue = value.trendmicro;
            this._veeva.internalValue = value.veeva;
            this._zendesk.internalValue = value.zendesk;
        }
    }

    // amplitude - computed: true, optional: true, required: false
    private _amplitude = new AmplitudeSourcePropertiesPropertyOutputReference(this, "amplitude");
    public get amplitude() {
        return this._amplitude;
    }
    public putAmplitude(value: AmplitudeSourcePropertiesProperty) {
        this._amplitude.internalValue = value;
    }
    public resetAmplitude() {
        this._amplitude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amplitudeInput() {
        return this._amplitude.internalValue;
    }

    // custom_connector - computed: true, optional: true, required: false
    private _customConnector = new CustomConnectorSourcePropertiesPropertyOutputReference(this, "custom_connector");
    public get customConnector() {
        return this._customConnector;
    }
    public putCustomConnector(value: CustomConnectorSourcePropertiesProperty) {
        this._customConnector.internalValue = value;
    }
    public resetCustomConnector() {
        this._customConnector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConnectorInput() {
        return this._customConnector.internalValue;
    }

    // datadog - computed: true, optional: true, required: false
    private _datadog = new DatadogSourcePropertiesPropertyOutputReference(this, "datadog");
    public get datadog() {
        return this._datadog;
    }
    public putDatadog(value: DatadogSourcePropertiesProperty) {
        this._datadog.internalValue = value;
    }
    public resetDatadog() {
        this._datadog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datadogInput() {
        return this._datadog.internalValue;
    }

    // dynatrace - computed: true, optional: true, required: false
    private _dynatrace = new DynatraceSourcePropertiesPropertyOutputReference(this, "dynatrace");
    public get dynatrace() {
        return this._dynatrace;
    }
    public putDynatrace(value: DynatraceSourcePropertiesProperty) {
        this._dynatrace.internalValue = value;
    }
    public resetDynatrace() {
        this._dynatrace.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynatraceInput() {
        return this._dynatrace.internalValue;
    }

    // google_analytics - computed: true, optional: true, required: false
    private _googleAnalytics = new GoogleAnalyticsSourcePropertiesPropertyOutputReference(this, "google_analytics");
    public get googleAnalytics() {
        return this._googleAnalytics;
    }
    public putGoogleAnalytics(value: GoogleAnalyticsSourcePropertiesProperty) {
        this._googleAnalytics.internalValue = value;
    }
    public resetGoogleAnalytics() {
        this._googleAnalytics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleAnalyticsInput() {
        return this._googleAnalytics.internalValue;
    }

    // infor_nexus - computed: true, optional: true, required: false
    private _inforNexus = new InforNexusSourcePropertiesPropertyOutputReference(this, "infor_nexus");
    public get inforNexus() {
        return this._inforNexus;
    }
    public putInforNexus(value: InforNexusSourcePropertiesProperty) {
        this._inforNexus.internalValue = value;
    }
    public resetInforNexus() {
        this._inforNexus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inforNexusInput() {
        return this._inforNexus.internalValue;
    }

    // marketo - computed: true, optional: true, required: false
    private _marketo = new MarketoSourcePropertiesPropertyOutputReference(this, "marketo");
    public get marketo() {
        return this._marketo;
    }
    public putMarketo(value: MarketoSourcePropertiesProperty) {
        this._marketo.internalValue = value;
    }
    public resetMarketo() {
        this._marketo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketoInput() {
        return this._marketo.internalValue;
    }

    // pardot - computed: true, optional: true, required: false
    private _pardot = new PardotSourcePropertiesPropertyOutputReference(this, "pardot");
    public get pardot() {
        return this._pardot;
    }
    public putPardot(value: PardotSourcePropertiesProperty) {
        this._pardot.internalValue = value;
    }
    public resetPardot() {
        this._pardot.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pardotInput() {
        return this._pardot.internalValue;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3SourcePropertiesPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3SourcePropertiesProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }

    // salesforce - computed: true, optional: true, required: false
    private _salesforce = new SalesforceSourcePropertiesPropertyOutputReference(this, "salesforce");
    public get salesforce() {
        return this._salesforce;
    }
    public putSalesforce(value: SalesforceSourcePropertiesProperty) {
        this._salesforce.internalValue = value;
    }
    public resetSalesforce() {
        this._salesforce.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceInput() {
        return this._salesforce.internalValue;
    }

    // sapo_data - computed: true, optional: true, required: false
    private _sapoData = new SAPODataSourcePropertiesPropertyOutputReference(this, "sapo_data");
    public get sapoData() {
        return this._sapoData;
    }
    public putSapoData(value: SAPODataSourcePropertiesProperty) {
        this._sapoData.internalValue = value;
    }
    public resetSapoData() {
        this._sapoData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapoDataInput() {
        return this._sapoData.internalValue;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow = new ServiceNowSourcePropertiesPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
    public putServiceNow(value: ServiceNowSourcePropertiesProperty) {
        this._serviceNow.internalValue = value;
    }
    public resetServiceNow() {
        this._serviceNow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
        return this._serviceNow.internalValue;
    }

    // singular - computed: true, optional: true, required: false
    private _singular = new SingularSourcePropertiesPropertyOutputReference(this, "singular");
    public get singular() {
        return this._singular;
    }
    public putSingular(value: SingularSourcePropertiesProperty) {
        this._singular.internalValue = value;
    }
    public resetSingular() {
        this._singular.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singularInput() {
        return this._singular.internalValue;
    }

    // slack - computed: true, optional: true, required: false
    private _slack = new SlackSourcePropertiesPropertyOutputReference(this, "slack");
    public get slack() {
        return this._slack;
    }
    public putSlack(value: SlackSourcePropertiesProperty) {
        this._slack.internalValue = value;
    }
    public resetSlack() {
        this._slack.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackInput() {
        return this._slack.internalValue;
    }

    // trendmicro - computed: true, optional: true, required: false
    private _trendmicro = new TrendmicroSourcePropertiesPropertyOutputReference(this, "trendmicro");
    public get trendmicro() {
        return this._trendmicro;
    }
    public putTrendmicro(value: TrendmicroSourcePropertiesProperty) {
        this._trendmicro.internalValue = value;
    }
    public resetTrendmicro() {
        this._trendmicro.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trendmicroInput() {
        return this._trendmicro.internalValue;
    }

    // veeva - computed: true, optional: true, required: false
    private _veeva = new VeevaSourcePropertiesPropertyOutputReference(this, "veeva");
    public get veeva() {
        return this._veeva;
    }
    public putVeeva(value: VeevaSourcePropertiesProperty) {
        this._veeva.internalValue = value;
    }
    public resetVeeva() {
        this._veeva.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get veevaInput() {
        return this._veeva.internalValue;
    }

    // zendesk - computed: true, optional: true, required: false
    private _zendesk = new ZendeskSourcePropertiesPropertyOutputReference(this, "zendesk");
    public get zendesk() {
        return this._zendesk;
    }
    public putZendesk(value: ZendeskSourcePropertiesProperty) {
        this._zendesk.internalValue = value;
    }
    public resetZendesk() {
        this._zendesk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zendeskInput() {
        return this._zendesk.internalValue;
    }
}
export interface SourceFlowConfigProperty {
    /**
    * The API version that the destination connector uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#api_version CcFlow#api_version}
    */
    readonly apiVersion?: string;
    /**
    * Name of source connector profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#connector_profile_name CcFlow#connector_profile_name}
    */
    readonly connectorProfileName?: string;
    /**
    * Type of source connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#connector_type CcFlow#connector_type}
    */
    readonly connectorType: string;
    /**
    * Configuration for scheduled incremental data pull
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#incremental_pull_config CcFlow#incremental_pull_config}
    */
    readonly incrementalPullConfig?: IncrementalPullConfigProperty;
    /**
    * Source connector details required to query a connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#source_connector_properties CcFlow#source_connector_properties}
    */
    readonly sourceConnectorProperties: SourceConnectorPropertiesProperty;
}
export class SourceFlowConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceFlowConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiVersion = this._apiVersion;
        }
        if (this._connectorProfileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorProfileName = this._connectorProfileName;
        }
        if (this._connectorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorType = this._connectorType;
        }
        if (this._incrementalPullConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.incrementalPullConfig = this._incrementalPullConfig?.internalValue;
        }
        if (this._sourceConnectorProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceConnectorProperties = this._sourceConnectorProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceFlowConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiVersion = undefined;
            this._connectorProfileName = undefined;
            this._connectorType = undefined;
            this._incrementalPullConfig.internalValue = undefined;
            this._sourceConnectorProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiVersion = value.apiVersion;
            this._connectorProfileName = value.connectorProfileName;
            this._connectorType = value.connectorType;
            this._incrementalPullConfig.internalValue = value.incrementalPullConfig;
            this._sourceConnectorProperties.internalValue = value.sourceConnectorProperties;
        }
    }

    // api_version - computed: true, optional: true, required: false
    private _apiVersion?: string; 
    public get apiVersion() {
        return this.getStringAttribute('api_version');
    }
    public set apiVersion(value: string) {
        this._apiVersion = value;
    }
    public resetApiVersion() {
        this._apiVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiVersionInput() {
        return this._apiVersion;
    }

    // connector_profile_name - computed: true, optional: true, required: false
    private _connectorProfileName?: string; 
    public get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    public set connectorProfileName(value: string) {
        this._connectorProfileName = value;
    }
    public resetConnectorProfileName() {
        this._connectorProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProfileNameInput() {
        return this._connectorProfileName;
    }

    // connector_type - computed: false, optional: false, required: true
    private _connectorType?: string; 
    public get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    public set connectorType(value: string) {
        this._connectorType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorTypeInput() {
        return this._connectorType;
    }

    // incremental_pull_config - computed: true, optional: true, required: false
    private _incrementalPullConfig = new IncrementalPullConfigPropertyOutputReference(this, "incremental_pull_config");
    public get incrementalPullConfig() {
        return this._incrementalPullConfig;
    }
    public putIncrementalPullConfig(value: IncrementalPullConfigProperty) {
        this._incrementalPullConfig.internalValue = value;
    }
    public resetIncrementalPullConfig() {
        this._incrementalPullConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incrementalPullConfigInput() {
        return this._incrementalPullConfig.internalValue;
    }

    // source_connector_properties - computed: false, optional: false, required: true
    private _sourceConnectorProperties = new SourceConnectorPropertiesPropertyOutputReference(this, "source_connector_properties");
    public get sourceConnectorProperties() {
        return this._sourceConnectorProperties;
    }
    public putSourceConnectorProperties(value: SourceConnectorPropertiesProperty) {
        this._sourceConnectorProperties.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConnectorPropertiesInput() {
        return this._sourceConnectorProperties.internalValue;
    }
}
export interface TagProperty {
    /**
    * A string used to identify this tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#key CcFlow#key}
    */
    readonly key?: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#value CcFlow#value}
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
export interface ConnectorOperatorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#amplitude CcFlow#amplitude}
    */
    readonly amplitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#custom_connector CcFlow#custom_connector}
    */
    readonly customConnector?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#datadog CcFlow#datadog}
    */
    readonly datadog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#dynatrace CcFlow#dynatrace}
    */
    readonly dynatrace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#google_analytics CcFlow#google_analytics}
    */
    readonly googleAnalytics?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#infor_nexus CcFlow#infor_nexus}
    */
    readonly inforNexus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#marketo CcFlow#marketo}
    */
    readonly marketo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#pardot CcFlow#pardot}
    */
    readonly pardot?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#s3 CcFlow#s3}
    */
    readonly s3?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#salesforce CcFlow#salesforce}
    */
    readonly salesforce?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#sapo_data CcFlow#sapo_data}
    */
    readonly sapoData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#service_now CcFlow#service_now}
    */
    readonly serviceNow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#singular CcFlow#singular}
    */
    readonly singular?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#slack CcFlow#slack}
    */
    readonly slack?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#trendmicro CcFlow#trendmicro}
    */
    readonly trendmicro?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#veeva CcFlow#veeva}
    */
    readonly veeva?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#zendesk CcFlow#zendesk}
    */
    readonly zendesk?: string;
}
export class ConnectorOperatorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorOperatorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amplitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.amplitude = this._amplitude;
        }
        if (this._customConnector !== undefined) {
            hasAnyValues = true;
            internalValueResult.customConnector = this._customConnector;
        }
        if (this._datadog !== undefined) {
            hasAnyValues = true;
            internalValueResult.datadog = this._datadog;
        }
        if (this._dynatrace !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynatrace = this._dynatrace;
        }
        if (this._googleAnalytics !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleAnalytics = this._googleAnalytics;
        }
        if (this._inforNexus !== undefined) {
            hasAnyValues = true;
            internalValueResult.inforNexus = this._inforNexus;
        }
        if (this._marketo !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketo = this._marketo;
        }
        if (this._pardot !== undefined) {
            hasAnyValues = true;
            internalValueResult.pardot = this._pardot;
        }
        if (this._s3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3;
        }
        if (this._salesforce !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforce = this._salesforce;
        }
        if (this._sapoData !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapoData = this._sapoData;
        }
        if (this._serviceNow !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow;
        }
        if (this._singular !== undefined) {
            hasAnyValues = true;
            internalValueResult.singular = this._singular;
        }
        if (this._slack !== undefined) {
            hasAnyValues = true;
            internalValueResult.slack = this._slack;
        }
        if (this._trendmicro !== undefined) {
            hasAnyValues = true;
            internalValueResult.trendmicro = this._trendmicro;
        }
        if (this._veeva !== undefined) {
            hasAnyValues = true;
            internalValueResult.veeva = this._veeva;
        }
        if (this._zendesk !== undefined) {
            hasAnyValues = true;
            internalValueResult.zendesk = this._zendesk;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorOperatorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amplitude = undefined;
            this._customConnector = undefined;
            this._datadog = undefined;
            this._dynatrace = undefined;
            this._googleAnalytics = undefined;
            this._inforNexus = undefined;
            this._marketo = undefined;
            this._pardot = undefined;
            this._s3 = undefined;
            this._salesforce = undefined;
            this._sapoData = undefined;
            this._serviceNow = undefined;
            this._singular = undefined;
            this._slack = undefined;
            this._trendmicro = undefined;
            this._veeva = undefined;
            this._zendesk = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amplitude = value.amplitude;
            this._customConnector = value.customConnector;
            this._datadog = value.datadog;
            this._dynatrace = value.dynatrace;
            this._googleAnalytics = value.googleAnalytics;
            this._inforNexus = value.inforNexus;
            this._marketo = value.marketo;
            this._pardot = value.pardot;
            this._s3 = value.s3;
            this._salesforce = value.salesforce;
            this._sapoData = value.sapoData;
            this._serviceNow = value.serviceNow;
            this._singular = value.singular;
            this._slack = value.slack;
            this._trendmicro = value.trendmicro;
            this._veeva = value.veeva;
            this._zendesk = value.zendesk;
        }
    }

    // amplitude - computed: true, optional: true, required: false
    private _amplitude?: string; 
    public get amplitude() {
        return this.getStringAttribute('amplitude');
    }
    public set amplitude(value: string) {
        this._amplitude = value;
    }
    public resetAmplitude() {
        this._amplitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amplitudeInput() {
        return this._amplitude;
    }

    // custom_connector - computed: true, optional: true, required: false
    private _customConnector?: string; 
    public get customConnector() {
        return this.getStringAttribute('custom_connector');
    }
    public set customConnector(value: string) {
        this._customConnector = value;
    }
    public resetCustomConnector() {
        this._customConnector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConnectorInput() {
        return this._customConnector;
    }

    // datadog - computed: true, optional: true, required: false
    private _datadog?: string; 
    public get datadog() {
        return this.getStringAttribute('datadog');
    }
    public set datadog(value: string) {
        this._datadog = value;
    }
    public resetDatadog() {
        this._datadog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datadogInput() {
        return this._datadog;
    }

    // dynatrace - computed: true, optional: true, required: false
    private _dynatrace?: string; 
    public get dynatrace() {
        return this.getStringAttribute('dynatrace');
    }
    public set dynatrace(value: string) {
        this._dynatrace = value;
    }
    public resetDynatrace() {
        this._dynatrace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynatraceInput() {
        return this._dynatrace;
    }

    // google_analytics - computed: true, optional: true, required: false
    private _googleAnalytics?: string; 
    public get googleAnalytics() {
        return this.getStringAttribute('google_analytics');
    }
    public set googleAnalytics(value: string) {
        this._googleAnalytics = value;
    }
    public resetGoogleAnalytics() {
        this._googleAnalytics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleAnalyticsInput() {
        return this._googleAnalytics;
    }

    // infor_nexus - computed: true, optional: true, required: false
    private _inforNexus?: string; 
    public get inforNexus() {
        return this.getStringAttribute('infor_nexus');
    }
    public set inforNexus(value: string) {
        this._inforNexus = value;
    }
    public resetInforNexus() {
        this._inforNexus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inforNexusInput() {
        return this._inforNexus;
    }

    // marketo - computed: true, optional: true, required: false
    private _marketo?: string; 
    public get marketo() {
        return this.getStringAttribute('marketo');
    }
    public set marketo(value: string) {
        this._marketo = value;
    }
    public resetMarketo() {
        this._marketo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketoInput() {
        return this._marketo;
    }

    // pardot - computed: true, optional: true, required: false
    private _pardot?: string; 
    public get pardot() {
        return this.getStringAttribute('pardot');
    }
    public set pardot(value: string) {
        this._pardot = value;
    }
    public resetPardot() {
        this._pardot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pardotInput() {
        return this._pardot;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3?: string; 
    public get s3() {
        return this.getStringAttribute('s3');
    }
    public set s3(value: string) {
        this._s3 = value;
    }
    public resetS3() {
        this._s3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3;
    }

    // salesforce - computed: true, optional: true, required: false
    private _salesforce?: string; 
    public get salesforce() {
        return this.getStringAttribute('salesforce');
    }
    public set salesforce(value: string) {
        this._salesforce = value;
    }
    public resetSalesforce() {
        this._salesforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceInput() {
        return this._salesforce;
    }

    // sapo_data - computed: true, optional: true, required: false
    private _sapoData?: string; 
    public get sapoData() {
        return this.getStringAttribute('sapo_data');
    }
    public set sapoData(value: string) {
        this._sapoData = value;
    }
    public resetSapoData() {
        this._sapoData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapoDataInput() {
        return this._sapoData;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow?: string; 
    public get serviceNow() {
        return this.getStringAttribute('service_now');
    }
    public set serviceNow(value: string) {
        this._serviceNow = value;
    }
    public resetServiceNow() {
        this._serviceNow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
        return this._serviceNow;
    }

    // singular - computed: true, optional: true, required: false
    private _singular?: string; 
    public get singular() {
        return this.getStringAttribute('singular');
    }
    public set singular(value: string) {
        this._singular = value;
    }
    public resetSingular() {
        this._singular = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singularInput() {
        return this._singular;
    }

    // slack - computed: true, optional: true, required: false
    private _slack?: string; 
    public get slack() {
        return this.getStringAttribute('slack');
    }
    public set slack(value: string) {
        this._slack = value;
    }
    public resetSlack() {
        this._slack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackInput() {
        return this._slack;
    }

    // trendmicro - computed: true, optional: true, required: false
    private _trendmicro?: string; 
    public get trendmicro() {
        return this.getStringAttribute('trendmicro');
    }
    public set trendmicro(value: string) {
        this._trendmicro = value;
    }
    public resetTrendmicro() {
        this._trendmicro = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trendmicroInput() {
        return this._trendmicro;
    }

    // veeva - computed: true, optional: true, required: false
    private _veeva?: string; 
    public get veeva() {
        return this.getStringAttribute('veeva');
    }
    public set veeva(value: string) {
        this._veeva = value;
    }
    public resetVeeva() {
        this._veeva = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get veevaInput() {
        return this._veeva;
    }

    // zendesk - computed: true, optional: true, required: false
    private _zendesk?: string; 
    public get zendesk() {
        return this.getStringAttribute('zendesk');
    }
    public set zendesk(value: string) {
        this._zendesk = value;
    }
    public resetZendesk() {
        this._zendesk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zendeskInput() {
        return this._zendesk;
    }
}
export interface TaskPropertiesObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#key CcFlow#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#value CcFlow#value}
    */
    readonly value?: string;
}
export class TaskPropertiesObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TaskPropertiesObjectProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TaskPropertiesObjectProperty | cdktn.IResolvable | undefined) {
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

export class TaskPropertiesObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : TaskPropertiesObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): TaskPropertiesObjectPropertyOutputReference {
        return new TaskPropertiesObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TaskProperty {
    /**
    * Operation to be performed on provided source fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#connector_operator CcFlow#connector_operator}
    */
    readonly connectorOperator?: ConnectorOperatorProperty;
    /**
    * A field value on which source field should be validated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#destination_field CcFlow#destination_field}
    */
    readonly destinationField?: string;
    /**
    * Source fields on which particular task will be applied
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#source_fields CcFlow#source_fields}
    */
    readonly sourceFields: string[];
    /**
    * A Map used to store task related info
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#task_properties CcFlow#task_properties}
    */
    readonly taskProperties?: TaskPropertiesObjectProperty[] | cdktn.IResolvable;
    /**
    * Type of task
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#task_type CcFlow#task_type}
    */
    readonly taskType: string;
}
export class TaskPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TaskProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectorOperator?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOperator = this._connectorOperator?.internalValue;
        }
        if (this._destinationField !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationField = this._destinationField;
        }
        if (this._sourceFields !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceFields = this._sourceFields;
        }
        if (this._taskProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskProperties = this._taskProperties?.internalValue;
        }
        if (this._taskType !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskType = this._taskType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TaskProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectorOperator.internalValue = undefined;
            this._destinationField = undefined;
            this._sourceFields = undefined;
            this._taskProperties.internalValue = undefined;
            this._taskType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectorOperator.internalValue = value.connectorOperator;
            this._destinationField = value.destinationField;
            this._sourceFields = value.sourceFields;
            this._taskProperties.internalValue = value.taskProperties;
            this._taskType = value.taskType;
        }
    }

    // connector_operator - computed: true, optional: true, required: false
    private _connectorOperator = new ConnectorOperatorPropertyOutputReference(this, "connector_operator");
    public get connectorOperator() {
        return this._connectorOperator;
    }
    public putConnectorOperator(value: ConnectorOperatorProperty) {
        this._connectorOperator.internalValue = value;
    }
    public resetConnectorOperator() {
        this._connectorOperator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOperatorInput() {
        return this._connectorOperator.internalValue;
    }

    // destination_field - computed: true, optional: true, required: false
    private _destinationField?: string; 
    public get destinationField() {
        return this.getStringAttribute('destination_field');
    }
    public set destinationField(value: string) {
        this._destinationField = value;
    }
    public resetDestinationField() {
        this._destinationField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationFieldInput() {
        return this._destinationField;
    }

    // source_fields - computed: false, optional: false, required: true
    private _sourceFields?: string[]; 
    public get sourceFields() {
        return this.getListAttribute('source_fields');
    }
    public set sourceFields(value: string[]) {
        this._sourceFields = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceFieldsInput() {
        return this._sourceFields;
    }

    // task_properties - computed: true, optional: true, required: false
    private _taskProperties = new TaskPropertiesObjectPropertyList(this, "task_properties", false);
    public get taskProperties() {
        return this._taskProperties;
    }
    public putTaskProperties(value: TaskPropertiesObjectProperty[] | cdktn.IResolvable) {
        this._taskProperties.internalValue = value;
    }
    public resetTaskProperties() {
        this._taskProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskPropertiesInput() {
        return this._taskProperties.internalValue;
    }

    // task_type - computed: false, optional: false, required: true
    private _taskType?: string; 
    public get taskType() {
        return this.getStringAttribute('task_type');
    }
    public set taskType(value: string) {
        this._taskType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskTypeInput() {
        return this._taskType;
    }
}

export class TaskPropertyList extends cdktn.ComplexList {
    public internalValue? : TaskProperty[] | cdktn.IResolvable

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
    public get(index: number): TaskPropertyOutputReference {
        return new TaskPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScheduledTriggerPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#data_pull_mode CcFlow#data_pull_mode}
    */
    readonly dataPullMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#first_execution_from CcFlow#first_execution_from}
    */
    readonly firstExecutionFrom?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#flow_error_deactivation_threshold CcFlow#flow_error_deactivation_threshold}
    */
    readonly flowErrorDeactivationThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#schedule_end_time CcFlow#schedule_end_time}
    */
    readonly scheduleEndTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#schedule_expression CcFlow#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#schedule_offset CcFlow#schedule_offset}
    */
    readonly scheduleOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#schedule_start_time CcFlow#schedule_start_time}
    */
    readonly scheduleStartTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#time_zone CcFlow#time_zone}
    */
    readonly timeZone?: string;
}
export class ScheduledTriggerPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduledTriggerPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataPullMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataPullMode = this._dataPullMode;
        }
        if (this._firstExecutionFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstExecutionFrom = this._firstExecutionFrom;
        }
        if (this._flowErrorDeactivationThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowErrorDeactivationThreshold = this._flowErrorDeactivationThreshold;
        }
        if (this._scheduleEndTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleEndTime = this._scheduleEndTime;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        if (this._scheduleOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleOffset = this._scheduleOffset;
        }
        if (this._scheduleStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleStartTime = this._scheduleStartTime;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduledTriggerPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataPullMode = undefined;
            this._firstExecutionFrom = undefined;
            this._flowErrorDeactivationThreshold = undefined;
            this._scheduleEndTime = undefined;
            this._scheduleExpression = undefined;
            this._scheduleOffset = undefined;
            this._scheduleStartTime = undefined;
            this._timeZone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataPullMode = value.dataPullMode;
            this._firstExecutionFrom = value.firstExecutionFrom;
            this._flowErrorDeactivationThreshold = value.flowErrorDeactivationThreshold;
            this._scheduleEndTime = value.scheduleEndTime;
            this._scheduleExpression = value.scheduleExpression;
            this._scheduleOffset = value.scheduleOffset;
            this._scheduleStartTime = value.scheduleStartTime;
            this._timeZone = value.timeZone;
        }
    }

    // data_pull_mode - computed: true, optional: true, required: false
    private _dataPullMode?: string; 
    public get dataPullMode() {
        return this.getStringAttribute('data_pull_mode');
    }
    public set dataPullMode(value: string) {
        this._dataPullMode = value;
    }
    public resetDataPullMode() {
        this._dataPullMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataPullModeInput() {
        return this._dataPullMode;
    }

    // first_execution_from - computed: true, optional: true, required: false
    private _firstExecutionFrom?: number; 
    public get firstExecutionFrom() {
        return this.getNumberAttribute('first_execution_from');
    }
    public set firstExecutionFrom(value: number) {
        this._firstExecutionFrom = value;
    }
    public resetFirstExecutionFrom() {
        this._firstExecutionFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstExecutionFromInput() {
        return this._firstExecutionFrom;
    }

    // flow_error_deactivation_threshold - computed: true, optional: true, required: false
    private _flowErrorDeactivationThreshold?: number; 
    public get flowErrorDeactivationThreshold() {
        return this.getNumberAttribute('flow_error_deactivation_threshold');
    }
    public set flowErrorDeactivationThreshold(value: number) {
        this._flowErrorDeactivationThreshold = value;
    }
    public resetFlowErrorDeactivationThreshold() {
        this._flowErrorDeactivationThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowErrorDeactivationThresholdInput() {
        return this._flowErrorDeactivationThreshold;
    }

    // schedule_end_time - computed: true, optional: true, required: false
    private _scheduleEndTime?: number; 
    public get scheduleEndTime() {
        return this.getNumberAttribute('schedule_end_time');
    }
    public set scheduleEndTime(value: number) {
        this._scheduleEndTime = value;
    }
    public resetScheduleEndTime() {
        this._scheduleEndTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleEndTimeInput() {
        return this._scheduleEndTime;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // schedule_offset - computed: true, optional: true, required: false
    private _scheduleOffset?: number; 
    public get scheduleOffset() {
        return this.getNumberAttribute('schedule_offset');
    }
    public set scheduleOffset(value: number) {
        this._scheduleOffset = value;
    }
    public resetScheduleOffset() {
        this._scheduleOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleOffsetInput() {
        return this._scheduleOffset;
    }

    // schedule_start_time - computed: true, optional: true, required: false
    private _scheduleStartTime?: number; 
    public get scheduleStartTime() {
        return this.getNumberAttribute('schedule_start_time');
    }
    public set scheduleStartTime(value: number) {
        this._scheduleStartTime = value;
    }
    public resetScheduleStartTime() {
        this._scheduleStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleStartTimeInput() {
        return this._scheduleStartTime;
    }

    // time_zone - computed: true, optional: true, required: false
    private _timeZone?: string; 
    public get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    public set timeZone(value: string) {
        this._timeZone = value;
    }
    public resetTimeZone() {
        this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneInput() {
        return this._timeZone;
    }
}
export interface TriggerConfigProperty {
    /**
    * Details required based on the type of trigger
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#trigger_properties CcFlow#trigger_properties}
    */
    readonly triggerProperties?: ScheduledTriggerPropertiesProperty;
    /**
    * Trigger type of the flow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_flow#trigger_type CcFlow#trigger_type}
    */
    readonly triggerType: string;
}
export class TriggerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TriggerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._triggerProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggerProperties = this._triggerProperties?.internalValue;
        }
        if (this._triggerType !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggerType = this._triggerType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TriggerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._triggerProperties.internalValue = undefined;
            this._triggerType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._triggerProperties.internalValue = value.triggerProperties;
            this._triggerType = value.triggerType;
        }
    }

    // trigger_properties - computed: true, optional: true, required: false
    private _triggerProperties = new ScheduledTriggerPropertiesPropertyOutputReference(this, "trigger_properties");
    public get triggerProperties() {
        return this._triggerProperties;
    }
    public putTriggerProperties(value: ScheduledTriggerPropertiesProperty) {
        this._triggerProperties.internalValue = value;
    }
    public resetTriggerProperties() {
        this._triggerProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerPropertiesInput() {
        return this._triggerProperties.internalValue;
    }

    // trigger_type - computed: false, optional: false, required: true
    private _triggerType?: string; 
    public get triggerType() {
        return this.getStringAttribute('trigger_type');
    }
    public set triggerType(value: string) {
        this._triggerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerTypeInput() {
        return this._triggerType;
    }
}
}
