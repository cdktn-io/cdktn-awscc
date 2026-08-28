// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the cluster of the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#cluster_id CcQueue#cluster_id}
    */
    readonly clusterId: string;
    /**
    * The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#compute_node_group_configurations CcQueue#compute_node_group_configurations}
    */
    readonly computeNodeGroupConfigurations?: CcQueue.ComputeNodeGroupConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The name that identifies the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#name CcQueue#name}
    */
    readonly name?: string;
    /**
    * The Slurm configuration for the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#slurm_configuration CcQueue#slurm_configuration}
    */
    readonly slurmConfiguration?: CcQueue.SlurmConfigurationProperty;
    /**
    * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#tags CcQueue#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue awscc_pcs_queue}
*/
export class CcQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcs_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueue to import
    * @param importFromId The id of the existing CcQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcs_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue awscc_pcs_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueProps
    */
    public constructor(scope: Construct, id: string, config: CcQueueProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcs_queue',
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
        this._clusterId = config.clusterId;
        this._computeNodeGroupConfigurations.internalValue = config.computeNodeGroupConfigurations;
        this._name = config.name;
        this._slurmConfiguration.internalValue = config.slurmConfiguration;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
        return this._clusterId;
    }

    // compute_node_group_configurations - computed: true, optional: true, required: false
    private _computeNodeGroupConfigurations = new CcQueue.ComputeNodeGroupConfigurationPropertyList(this, "compute_node_group_configurations", false);
    public get computeNodeGroupConfigurations() {
        return this._computeNodeGroupConfigurations;
    }
    public putComputeNodeGroupConfigurations(value: CcQueue.ComputeNodeGroupConfigurationProperty[] | cdktn.IResolvable) {
        this._computeNodeGroupConfigurations.internalValue = value;
    }
    public resetComputeNodeGroupConfigurations() {
        this._computeNodeGroupConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeNodeGroupConfigurationsInput() {
        return this._computeNodeGroupConfigurations.internalValue;
    }

    // error_info - computed: true, optional: false, required: false
    private _errorInfo = new CcQueue.ErrorInfoPropertyList(this, "error_info", false);
    public get errorInfo() {
        return this._errorInfo;
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

    // queue_id - computed: true, optional: false, required: false
    public get queueId() {
        return this.getStringAttribute('queue_id');
    }

    // slurm_configuration - computed: true, optional: true, required: false
    private _slurmConfiguration = new CcQueue.SlurmConfigurationPropertyOutputReference(this, "slurm_configuration");
    public get slurmConfiguration() {
        return this._slurmConfiguration;
    }
    public putSlurmConfiguration(value: CcQueue.SlurmConfigurationProperty) {
        this._slurmConfiguration.internalValue = value;
    }
    public resetSlurmConfiguration() {
        this._slurmConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmConfigurationInput() {
        return this._slurmConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
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
            cluster_id: cdktn.stringToTerraform(this._clusterId),
            compute_node_group_configurations: cdktn.listMapper(ccQueueComputeNodeGroupConfigurationPropertyToTerraform, false)(this._computeNodeGroupConfigurations.internalValue),
            name: cdktn.stringToTerraform(this._name),
            slurm_configuration: ccQueueSlurmConfigurationPropertyToTerraform(this._slurmConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_id: {
                value: cdktn.stringToHclTerraform(this._clusterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_node_group_configurations: {
                value: cdktn.listMapperHcl(ccQueueComputeNodeGroupConfigurationPropertyToHclTerraform, false)(this._computeNodeGroupConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcQueue.ComputeNodeGroupConfigurationPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            slurm_configuration: {
                value: ccQueueSlurmConfigurationPropertyToHclTerraform(this._slurmConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQueue.SlurmConfigurationProperty",
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

export function ccQueueComputeNodeGroupConfigurationPropertyToTerraform(struct?: CcQueue.ComputeNodeGroupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_node_group_id: cdktn.stringToTerraform(struct!.computeNodeGroupId),
    }
}


export function ccQueueComputeNodeGroupConfigurationPropertyToHclTerraform(struct?: CcQueue.ComputeNodeGroupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_node_group_id: {
            value: cdktn.stringToHclTerraform(struct!.computeNodeGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueErrorInfoPropertyToTerraform(struct?: CcQueue.ErrorInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccQueueErrorInfoPropertyToHclTerraform(struct?: CcQueue.ErrorInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccQueueSlurmCustomSettingPropertyToTerraform(struct?: CcQueue.SlurmCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccQueueSlurmCustomSettingPropertyToHclTerraform(struct?: CcQueue.SlurmCustomSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueSlurmConfigurationPropertyToTerraform(struct?: CcQueue.SlurmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        slurm_custom_settings: cdktn.listMapper(ccQueueSlurmCustomSettingPropertyToTerraform, false)(struct!.slurmCustomSettings),
    }
}


export function ccQueueSlurmConfigurationPropertyToHclTerraform(struct?: CcQueue.SlurmConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        slurm_custom_settings: {
            value: cdktn.listMapperHcl(ccQueueSlurmCustomSettingPropertyToHclTerraform, false)(struct!.slurmCustomSettings),
            isBlock: true,
            type: "list",
            storageClassType: "SlurmCustomSettingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcQueue {
export interface ComputeNodeGroupConfigurationProperty {
    /**
    * The compute node group ID for the compute node group configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#compute_node_group_id CcQueue#compute_node_group_id}
    */
    readonly computeNodeGroupId?: string;
}
export class ComputeNodeGroupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComputeNodeGroupConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeNodeGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeNodeGroupId = this._computeNodeGroupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeNodeGroupConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeNodeGroupId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeNodeGroupId = value.computeNodeGroupId;
        }
    }

    // compute_node_group_id - computed: true, optional: true, required: false
    private _computeNodeGroupId?: string; 
    public get computeNodeGroupId() {
        return this.getStringAttribute('compute_node_group_id');
    }
    public set computeNodeGroupId(value: string) {
        this._computeNodeGroupId = value;
    }
    public resetComputeNodeGroupId() {
        this._computeNodeGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeNodeGroupIdInput() {
        return this._computeNodeGroupId;
    }
}

export class ComputeNodeGroupConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ComputeNodeGroupConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ComputeNodeGroupConfigurationPropertyOutputReference {
        return new ComputeNodeGroupConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ErrorInfoProperty {
}
export class ErrorInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ErrorInfoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorInfoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getStringAttribute('code');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}

export class ErrorInfoPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ErrorInfoPropertyOutputReference {
        return new ErrorInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SlurmCustomSettingProperty {
    /**
    * AWS PCS supports configuration of the Slurm parameters for queues:.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#parameter_name CcQueue#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * The value for the configured Slurm setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#parameter_value CcQueue#parameter_value}
    */
    readonly parameterValue?: string;
}
export class SlurmCustomSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SlurmCustomSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmCustomSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class SlurmCustomSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : SlurmCustomSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): SlurmCustomSettingPropertyOutputReference {
        return new SlurmCustomSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SlurmConfigurationProperty {
    /**
    * Custom Slurm parameters that directly map to Slurm configuration settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/pcs_queue#slurm_custom_settings CcQueue#slurm_custom_settings}
    */
    readonly slurmCustomSettings?: SlurmCustomSettingProperty[] | cdktn.IResolvable;
}
export class SlurmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlurmConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._slurmCustomSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmCustomSettings = this._slurmCustomSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlurmConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._slurmCustomSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._slurmCustomSettings.internalValue = value.slurmCustomSettings;
        }
    }

    // slurm_custom_settings - computed: true, optional: true, required: false
    private _slurmCustomSettings = new SlurmCustomSettingPropertyList(this, "slurm_custom_settings", false);
    public get slurmCustomSettings() {
        return this._slurmCustomSettings;
    }
    public putSlurmCustomSettings(value: SlurmCustomSettingProperty[] | cdktn.IResolvable) {
        this._slurmCustomSettings.internalValue = value;
    }
    public resetSlurmCustomSettings() {
        this._slurmCustomSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmCustomSettingsInput() {
        return this._slurmCustomSettings.internalValue;
    }
}
}
