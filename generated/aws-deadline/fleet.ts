// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFleetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#configuration CcFleet#configuration}
    */
    readonly configuration: CcFleet.FleetConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#description CcFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#display_name CcFleet#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#farm_id CcFleet#farm_id}
    */
    readonly farmId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#host_configuration CcFleet#host_configuration}
    */
    readonly hostConfiguration?: CcFleet.HostConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max_worker_count CcFleet#max_worker_count}
    */
    readonly maxWorkerCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min_worker_count CcFleet#min_worker_count}
    */
    readonly minWorkerCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#role_arn CcFleet#role_arn}
    */
    readonly roleArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#tags CcFleet#tags}
    */
    readonly tags?: CcFleet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet awscc_deadline_fleet}
*/
export class CcFleet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_fleet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFleet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFleet to import
    * @param importFromId The id of the existing CcFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFleet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_fleet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet awscc_deadline_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFleetProps
    */
    public constructor(scope: Construct, id: string, config: CcFleetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_fleet',
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
        this._configuration.internalValue = config.configuration;
        this._description = config.description;
        this._displayName = config.displayName;
        this._farmId = config.farmId;
        this._hostConfiguration.internalValue = config.hostConfiguration;
        this._maxWorkerCount = config.maxWorkerCount;
        this._minWorkerCount = config.minWorkerCount;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capabilities - computed: true, optional: false, required: false
    private _capabilities = new CcFleet.CapabilitiesPropertyOutputReference(this, "capabilities");
    public get capabilities() {
        return this._capabilities;
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcFleet.FleetConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcFleet.FleetConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // farm_id - computed: false, optional: false, required: true
    private _farmId?: string; 
    public get farmId() {
        return this.getStringAttribute('farm_id');
    }
    public set farmId(value: string) {
        this._farmId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get farmIdInput() {
        return this._farmId;
    }

    // fleet_id - computed: true, optional: false, required: false
    public get fleetId() {
        return this.getStringAttribute('fleet_id');
    }

    // host_configuration - computed: true, optional: true, required: false
    private _hostConfiguration = new CcFleet.HostConfigurationPropertyOutputReference(this, "host_configuration");
    public get hostConfiguration() {
        return this._hostConfiguration;
    }
    public putHostConfiguration(value: CcFleet.HostConfigurationProperty) {
        this._hostConfiguration.internalValue = value;
    }
    public resetHostConfiguration() {
        this._hostConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostConfigurationInput() {
        return this._hostConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_worker_count - computed: false, optional: false, required: true
    private _maxWorkerCount?: number; 
    public get maxWorkerCount() {
        return this.getNumberAttribute('max_worker_count');
    }
    public set maxWorkerCount(value: number) {
        this._maxWorkerCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWorkerCountInput() {
        return this._maxWorkerCount;
    }

    // min_worker_count - computed: true, optional: true, required: false
    private _minWorkerCount?: number; 
    public get minWorkerCount() {
        return this.getNumberAttribute('min_worker_count');
    }
    public set minWorkerCount(value: number) {
        this._minWorkerCount = value;
    }
    public resetMinWorkerCount() {
        this._minWorkerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minWorkerCountInput() {
        return this._minWorkerCount;
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

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFleet.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFleet.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // worker_count - computed: true, optional: false, required: false
    public get workerCount() {
        return this.getNumberAttribute('worker_count');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration: ccFleetFleetConfigurationPropertyToTerraform(this._configuration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            farm_id: cdktn.stringToTerraform(this._farmId),
            host_configuration: ccFleetHostConfigurationPropertyToTerraform(this._hostConfiguration.internalValue),
            max_worker_count: cdktn.numberToTerraform(this._maxWorkerCount),
            min_worker_count: cdktn.numberToTerraform(this._minWorkerCount),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccFleetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccFleetFleetConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.FleetConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            farm_id: {
                value: cdktn.stringToHclTerraform(this._farmId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host_configuration: {
                value: ccFleetHostConfigurationPropertyToHclTerraform(this._hostConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.HostConfigurationProperty",
            },
            max_worker_count: {
                value: cdktn.numberToHclTerraform(this._maxWorkerCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_worker_count: {
                value: cdktn.numberToHclTerraform(this._minWorkerCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFleetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFleet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFleetAmountsPropertyToTerraform(struct?: CcFleet.AmountsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccFleetAmountsPropertyToHclTerraform(struct?: CcFleet.AmountsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccFleetAttributesPropertyToTerraform(struct?: CcFleet.AttributesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccFleetAttributesPropertyToHclTerraform(struct?: CcFleet.AttributesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccFleetCapabilitiesPropertyToTerraform(struct?: CcFleet.CapabilitiesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccFleetCapabilitiesPropertyToHclTerraform(struct?: CcFleet.CapabilitiesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccFleetCustomerManagedAutoScalingConfigurationPropertyToTerraform(struct?: CcFleet.CustomerManagedAutoScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_out_workers_per_minute: cdktn.numberToTerraform(struct!.scaleOutWorkersPerMinute),
        standby_worker_count: cdktn.numberToTerraform(struct!.standbyWorkerCount),
        worker_idle_duration_seconds: cdktn.numberToTerraform(struct!.workerIdleDurationSeconds),
    }
}


export function ccFleetCustomerManagedAutoScalingConfigurationPropertyToHclTerraform(struct?: CcFleet.CustomerManagedAutoScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scale_out_workers_per_minute: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutWorkersPerMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        standby_worker_count: {
            value: cdktn.numberToHclTerraform(struct!.standbyWorkerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        worker_idle_duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.workerIdleDurationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetAcceleratorCountRangePropertyToTerraform(struct?: CcFleet.AcceleratorCountRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetAcceleratorCountRangePropertyToHclTerraform(struct?: CcFleet.AcceleratorCountRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetAcceleratorTotalMemoryMiBRangePropertyToTerraform(struct?: CcFleet.AcceleratorTotalMemoryMiBRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetAcceleratorTotalMemoryMiBRangePropertyToHclTerraform(struct?: CcFleet.AcceleratorTotalMemoryMiBRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetFleetAmountCapabilityPropertyToTerraform(struct?: CcFleet.FleetAmountCapabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccFleetFleetAmountCapabilityPropertyToHclTerraform(struct?: CcFleet.FleetAmountCapabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetFleetAttributeCapabilityPropertyToTerraform(struct?: CcFleet.FleetAttributeCapabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccFleetFleetAttributeCapabilityPropertyToHclTerraform(struct?: CcFleet.FleetAttributeCapabilityProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetMemoryMiBRangePropertyToTerraform(struct?: CcFleet.MemoryMiBRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetMemoryMiBRangePropertyToHclTerraform(struct?: CcFleet.MemoryMiBRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetVCpuCountRangePropertyToTerraform(struct?: CcFleet.VCpuCountRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetVCpuCountRangePropertyToHclTerraform(struct?: CcFleet.VCpuCountRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetCustomerManagedWorkerCapabilitiesPropertyToTerraform(struct?: CcFleet.CustomerManagedWorkerCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccFleetAcceleratorCountRangePropertyToTerraform(struct!.acceleratorCount),
        accelerator_total_memory_mi_b: ccFleetAcceleratorTotalMemoryMiBRangePropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        cpu_architecture_type: cdktn.stringToTerraform(struct!.cpuArchitectureType),
        custom_amounts: cdktn.listMapper(ccFleetFleetAmountCapabilityPropertyToTerraform, false)(struct!.customAmounts),
        custom_attributes: cdktn.listMapper(ccFleetFleetAttributeCapabilityPropertyToTerraform, false)(struct!.customAttributes),
        memory_mi_b: ccFleetMemoryMiBRangePropertyToTerraform(struct!.memoryMiB),
        os_family: cdktn.stringToTerraform(struct!.osFamily),
        v_cpu_count: ccFleetVCpuCountRangePropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccFleetCustomerManagedWorkerCapabilitiesPropertyToHclTerraform(struct?: CcFleet.CustomerManagedWorkerCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccFleetAcceleratorCountRangePropertyToHclTerraform(struct!.acceleratorCount),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorCountRangeProperty",
        },
        accelerator_total_memory_mi_b: {
            value: ccFleetAcceleratorTotalMemoryMiBRangePropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorTotalMemoryMiBRangeProperty",
        },
        accelerator_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cpu_architecture_type: {
            value: cdktn.stringToHclTerraform(struct!.cpuArchitectureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_amounts: {
            value: cdktn.listMapperHcl(ccFleetFleetAmountCapabilityPropertyToHclTerraform, false)(struct!.customAmounts),
            isBlock: true,
            type: "list",
            storageClassType: "FleetAmountCapabilityPropertyList",
        },
        custom_attributes: {
            value: cdktn.listMapperHcl(ccFleetFleetAttributeCapabilityPropertyToHclTerraform, false)(struct!.customAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "FleetAttributeCapabilityPropertyList",
        },
        memory_mi_b: {
            value: ccFleetMemoryMiBRangePropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBRangeProperty",
        },
        os_family: {
            value: cdktn.stringToHclTerraform(struct!.osFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        v_cpu_count: {
            value: ccFleetVCpuCountRangePropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetCustomerManagedFleetConfigurationPropertyToTerraform(struct?: CcFleet.CustomerManagedFleetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_configuration: ccFleetCustomerManagedAutoScalingConfigurationPropertyToTerraform(struct!.autoScalingConfiguration),
        mode: cdktn.stringToTerraform(struct!.mode),
        storage_profile_id: cdktn.stringToTerraform(struct!.storageProfileId),
        tag_propagation_mode: cdktn.stringToTerraform(struct!.tagPropagationMode),
        worker_capabilities: ccFleetCustomerManagedWorkerCapabilitiesPropertyToTerraform(struct!.workerCapabilities),
    }
}


export function ccFleetCustomerManagedFleetConfigurationPropertyToHclTerraform(struct?: CcFleet.CustomerManagedFleetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_configuration: {
            value: ccFleetCustomerManagedAutoScalingConfigurationPropertyToHclTerraform(struct!.autoScalingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerManagedAutoScalingConfigurationProperty",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.storageProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_propagation_mode: {
            value: cdktn.stringToHclTerraform(struct!.tagPropagationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        worker_capabilities: {
            value: ccFleetCustomerManagedWorkerCapabilitiesPropertyToHclTerraform(struct!.workerCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerManagedWorkerCapabilitiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetServiceManagedEc2AutoScalingConfigurationPropertyToTerraform(struct?: CcFleet.ServiceManagedEc2AutoScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_out_workers_per_minute: cdktn.numberToTerraform(struct!.scaleOutWorkersPerMinute),
        standby_worker_count: cdktn.numberToTerraform(struct!.standbyWorkerCount),
        worker_idle_duration_seconds: cdktn.numberToTerraform(struct!.workerIdleDurationSeconds),
    }
}


export function ccFleetServiceManagedEc2AutoScalingConfigurationPropertyToHclTerraform(struct?: CcFleet.ServiceManagedEc2AutoScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scale_out_workers_per_minute: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutWorkersPerMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        standby_worker_count: {
            value: cdktn.numberToHclTerraform(struct!.standbyWorkerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        worker_idle_duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.workerIdleDurationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetCountPropertyToTerraform(struct?: CcFleet.CountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetCountPropertyToHclTerraform(struct?: CcFleet.CountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetAcceleratorSelectionPropertyToTerraform(struct?: CcFleet.AcceleratorSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        runtime: cdktn.stringToTerraform(struct!.runtime),
    }
}


export function ccFleetAcceleratorSelectionPropertyToHclTerraform(struct?: CcFleet.AcceleratorSelectionProperty | cdktn.IResolvable): any {
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
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetAcceleratorCapabilitiesPropertyToTerraform(struct?: CcFleet.AcceleratorCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: ccFleetCountPropertyToTerraform(struct!.count),
        selections: cdktn.listMapper(ccFleetAcceleratorSelectionPropertyToTerraform, false)(struct!.selections),
    }
}


export function ccFleetAcceleratorCapabilitiesPropertyToHclTerraform(struct?: CcFleet.AcceleratorCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        count: {
            value: ccFleetCountPropertyToHclTerraform(struct!.count),
            isBlock: true,
            type: "struct",
            storageClassType: "CountProperty",
        },
        selections: {
            value: cdktn.listMapperHcl(ccFleetAcceleratorSelectionPropertyToHclTerraform, false)(struct!.selections),
            isBlock: true,
            type: "list",
            storageClassType: "AcceleratorSelectionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetCustomAmountsPropertyToTerraform(struct?: CcFleet.CustomAmountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccFleetCustomAmountsPropertyToHclTerraform(struct?: CcFleet.CustomAmountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetCustomAttributesPropertyToTerraform(struct?: CcFleet.CustomAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccFleetCustomAttributesPropertyToHclTerraform(struct?: CcFleet.CustomAttributesProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetMemoryMiBPropertyToTerraform(struct?: CcFleet.MemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetMemoryMiBPropertyToHclTerraform(struct?: CcFleet.MemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetEc2EbsVolumePropertyToTerraform(struct?: CcFleet.Ec2EbsVolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iops: cdktn.numberToTerraform(struct!.iops),
        size_gi_b: cdktn.numberToTerraform(struct!.sizeGiB),
        throughput_mi_b: cdktn.numberToTerraform(struct!.throughputMiB),
    }
}


export function ccFleetEc2EbsVolumePropertyToHclTerraform(struct?: CcFleet.Ec2EbsVolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iops: {
            value: cdktn.numberToHclTerraform(struct!.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throughput_mi_b: {
            value: cdktn.numberToHclTerraform(struct!.throughputMiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetVCpuCountPropertyToTerraform(struct?: CcFleet.VCpuCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccFleetVCpuCountPropertyToHclTerraform(struct?: CcFleet.VCpuCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetServiceManagedEc2InstanceCapabilitiesPropertyToTerraform(struct?: CcFleet.ServiceManagedEc2InstanceCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_capabilities: ccFleetAcceleratorCapabilitiesPropertyToTerraform(struct!.acceleratorCapabilities),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        cpu_architecture_type: cdktn.stringToTerraform(struct!.cpuArchitectureType),
        custom_amounts: cdktn.listMapper(ccFleetCustomAmountsPropertyToTerraform, false)(struct!.customAmounts),
        custom_attributes: cdktn.listMapper(ccFleetCustomAttributesPropertyToTerraform, false)(struct!.customAttributes),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        memory_mi_b: ccFleetMemoryMiBPropertyToTerraform(struct!.memoryMiB),
        os_family: cdktn.stringToTerraform(struct!.osFamily),
        root_ebs_volume: ccFleetEc2EbsVolumePropertyToTerraform(struct!.rootEbsVolume),
        v_cpu_count: ccFleetVCpuCountPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccFleetServiceManagedEc2InstanceCapabilitiesPropertyToHclTerraform(struct?: CcFleet.ServiceManagedEc2InstanceCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_capabilities: {
            value: ccFleetAcceleratorCapabilitiesPropertyToHclTerraform(struct!.acceleratorCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorCapabilitiesProperty",
        },
        allowed_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cpu_architecture_type: {
            value: cdktn.stringToHclTerraform(struct!.cpuArchitectureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_amounts: {
            value: cdktn.listMapperHcl(ccFleetCustomAmountsPropertyToHclTerraform, false)(struct!.customAmounts),
            isBlock: true,
            type: "list",
            storageClassType: "CustomAmountsPropertyList",
        },
        custom_attributes: {
            value: cdktn.listMapperHcl(ccFleetCustomAttributesPropertyToHclTerraform, false)(struct!.customAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "CustomAttributesPropertyList",
        },
        excluded_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        memory_mi_b: {
            value: ccFleetMemoryMiBPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBProperty",
        },
        os_family: {
            value: cdktn.stringToHclTerraform(struct!.osFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_ebs_volume: {
            value: ccFleetEc2EbsVolumePropertyToHclTerraform(struct!.rootEbsVolume),
            isBlock: true,
            type: "struct",
            storageClassType: "Ec2EbsVolumeProperty",
        },
        v_cpu_count: {
            value: ccFleetVCpuCountPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetServiceManagedEc2InstanceMarketOptionsPropertyToTerraform(struct?: CcFleet.ServiceManagedEc2InstanceMarketOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccFleetServiceManagedEc2InstanceMarketOptionsPropertyToHclTerraform(struct?: CcFleet.ServiceManagedEc2InstanceMarketOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccFleetPersistentVolumeConfigurationPropertyToTerraform(struct?: CcFleet.PersistentVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iops: cdktn.numberToTerraform(struct!.iops),
        last_used_ttl_hours: cdktn.numberToTerraform(struct!.lastUsedTtlHours),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
        size_gi_b: cdktn.numberToTerraform(struct!.sizeGiB),
        throughput_mi_b: cdktn.numberToTerraform(struct!.throughputMiB),
    }
}


export function ccFleetPersistentVolumeConfigurationPropertyToHclTerraform(struct?: CcFleet.PersistentVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iops: {
            value: cdktn.numberToHclTerraform(struct!.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last_used_ttl_hours: {
            value: cdktn.numberToHclTerraform(struct!.lastUsedTtlHours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throughput_mi_b: {
            value: cdktn.numberToHclTerraform(struct!.throughputMiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetVpcConfigurationPropertyToTerraform(struct?: CcFleet.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceConfigurationArns),
    }
}


export function ccFleetVpcConfigurationPropertyToHclTerraform(struct?: CcFleet.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceConfigurationArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetServiceManagedEc2FleetConfigurationPropertyToTerraform(struct?: CcFleet.ServiceManagedEc2FleetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_configuration: ccFleetServiceManagedEc2AutoScalingConfigurationPropertyToTerraform(struct!.autoScalingConfiguration),
        instance_capabilities: ccFleetServiceManagedEc2InstanceCapabilitiesPropertyToTerraform(struct!.instanceCapabilities),
        instance_market_options: ccFleetServiceManagedEc2InstanceMarketOptionsPropertyToTerraform(struct!.instanceMarketOptions),
        persistent_volume_configuration: ccFleetPersistentVolumeConfigurationPropertyToTerraform(struct!.persistentVolumeConfiguration),
        storage_profile_id: cdktn.stringToTerraform(struct!.storageProfileId),
        vpc_configuration: ccFleetVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccFleetServiceManagedEc2FleetConfigurationPropertyToHclTerraform(struct?: CcFleet.ServiceManagedEc2FleetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_configuration: {
            value: ccFleetServiceManagedEc2AutoScalingConfigurationPropertyToHclTerraform(struct!.autoScalingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceManagedEc2AutoScalingConfigurationProperty",
        },
        instance_capabilities: {
            value: ccFleetServiceManagedEc2InstanceCapabilitiesPropertyToHclTerraform(struct!.instanceCapabilities),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceManagedEc2InstanceCapabilitiesProperty",
        },
        instance_market_options: {
            value: ccFleetServiceManagedEc2InstanceMarketOptionsPropertyToHclTerraform(struct!.instanceMarketOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceManagedEc2InstanceMarketOptionsProperty",
        },
        persistent_volume_configuration: {
            value: ccFleetPersistentVolumeConfigurationPropertyToHclTerraform(struct!.persistentVolumeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PersistentVolumeConfigurationProperty",
        },
        storage_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.storageProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_configuration: {
            value: ccFleetVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetFleetConfigurationPropertyToTerraform(struct?: CcFleet.FleetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_managed: ccFleetCustomerManagedFleetConfigurationPropertyToTerraform(struct!.customerManaged),
        service_managed_ec_2: ccFleetServiceManagedEc2FleetConfigurationPropertyToTerraform(struct!.serviceManagedEc2),
    }
}


export function ccFleetFleetConfigurationPropertyToHclTerraform(struct?: CcFleet.FleetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_managed: {
            value: ccFleetCustomerManagedFleetConfigurationPropertyToHclTerraform(struct!.customerManaged),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerManagedFleetConfigurationProperty",
        },
        service_managed_ec_2: {
            value: ccFleetServiceManagedEc2FleetConfigurationPropertyToHclTerraform(struct!.serviceManagedEc2),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceManagedEc2FleetConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetHostConfigurationPropertyToTerraform(struct?: CcFleet.HostConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        script_body: cdktn.stringToTerraform(struct!.scriptBody),
        script_timeout_seconds: cdktn.numberToTerraform(struct!.scriptTimeoutSeconds),
    }
}


export function ccFleetHostConfigurationPropertyToHclTerraform(struct?: CcFleet.HostConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        script_body: {
            value: cdktn.stringToHclTerraform(struct!.scriptBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.scriptTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetTagPropertyToTerraform(struct?: CcFleet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFleetTagPropertyToHclTerraform(struct?: CcFleet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFleet {
export interface AmountsProperty {
}
export class AmountsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AmountsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmountsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // max - computed: true, optional: false, required: false
    public get max() {
        return this.getNumberAttribute('max');
    }

    // min - computed: true, optional: false, required: false
    public get min() {
        return this.getNumberAttribute('min');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}

export class AmountsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): AmountsPropertyOutputReference {
        return new AmountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AttributesProperty {
}
export class AttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // values - computed: true, optional: false, required: false
    public get values() {
        return this.getListAttribute('values');
    }
}

export class AttributesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): AttributesPropertyOutputReference {
        return new AttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapabilitiesProperty {
}
export class CapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapabilitiesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapabilitiesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // amounts - computed: true, optional: false, required: false
    private _amounts = new AmountsPropertyList(this, "amounts", false);
    public get amounts() {
        return this._amounts;
    }

    // attributes - computed: true, optional: false, required: false
    private _attributes = new AttributesPropertyList(this, "attributes", false);
    public get attributes() {
        return this._attributes;
    }
}
export interface CustomerManagedAutoScalingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#scale_out_workers_per_minute CcFleet#scale_out_workers_per_minute}
    */
    readonly scaleOutWorkersPerMinute?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#standby_worker_count CcFleet#standby_worker_count}
    */
    readonly standbyWorkerCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#worker_idle_duration_seconds CcFleet#worker_idle_duration_seconds}
    */
    readonly workerIdleDurationSeconds?: number;
}
export class CustomerManagedAutoScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerManagedAutoScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scaleOutWorkersPerMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutWorkersPerMinute = this._scaleOutWorkersPerMinute;
        }
        if (this._standbyWorkerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.standbyWorkerCount = this._standbyWorkerCount;
        }
        if (this._workerIdleDurationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerIdleDurationSeconds = this._workerIdleDurationSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerManagedAutoScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scaleOutWorkersPerMinute = undefined;
            this._standbyWorkerCount = undefined;
            this._workerIdleDurationSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scaleOutWorkersPerMinute = value.scaleOutWorkersPerMinute;
            this._standbyWorkerCount = value.standbyWorkerCount;
            this._workerIdleDurationSeconds = value.workerIdleDurationSeconds;
        }
    }

    // scale_out_workers_per_minute - computed: true, optional: true, required: false
    private _scaleOutWorkersPerMinute?: number; 
    public get scaleOutWorkersPerMinute() {
        return this.getNumberAttribute('scale_out_workers_per_minute');
    }
    public set scaleOutWorkersPerMinute(value: number) {
        this._scaleOutWorkersPerMinute = value;
    }
    public resetScaleOutWorkersPerMinute() {
        this._scaleOutWorkersPerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutWorkersPerMinuteInput() {
        return this._scaleOutWorkersPerMinute;
    }

    // standby_worker_count - computed: true, optional: true, required: false
    private _standbyWorkerCount?: number; 
    public get standbyWorkerCount() {
        return this.getNumberAttribute('standby_worker_count');
    }
    public set standbyWorkerCount(value: number) {
        this._standbyWorkerCount = value;
    }
    public resetStandbyWorkerCount() {
        this._standbyWorkerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standbyWorkerCountInput() {
        return this._standbyWorkerCount;
    }

    // worker_idle_duration_seconds - computed: true, optional: true, required: false
    private _workerIdleDurationSeconds?: number; 
    public get workerIdleDurationSeconds() {
        return this.getNumberAttribute('worker_idle_duration_seconds');
    }
    public set workerIdleDurationSeconds(value: number) {
        this._workerIdleDurationSeconds = value;
    }
    public resetWorkerIdleDurationSeconds() {
        this._workerIdleDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerIdleDurationSecondsInput() {
        return this._workerIdleDurationSeconds;
    }
}
export interface AcceleratorCountRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class AcceleratorCountRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorCountRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorCountRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface AcceleratorTotalMemoryMiBRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class AcceleratorTotalMemoryMiBRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorTotalMemoryMiBRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorTotalMemoryMiBRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface FleetAmountCapabilityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#name CcFleet#name}
    */
    readonly name?: string;
}
export class FleetAmountCapabilityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FleetAmountCapabilityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FleetAmountCapabilityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
            this._name = value.name;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
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
}

export class FleetAmountCapabilityPropertyList extends cdktn.ComplexList {
    public internalValue? : FleetAmountCapabilityProperty[] | cdktn.IResolvable

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
    public get(index: number): FleetAmountCapabilityPropertyOutputReference {
        return new FleetAmountCapabilityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FleetAttributeCapabilityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#name CcFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#values CcFleet#values}
    */
    readonly values?: string[];
}
export class FleetAttributeCapabilityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FleetAttributeCapabilityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FleetAttributeCapabilityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class FleetAttributeCapabilityPropertyList extends cdktn.ComplexList {
    public internalValue? : FleetAttributeCapabilityProperty[] | cdktn.IResolvable

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
    public get(index: number): FleetAttributeCapabilityPropertyOutputReference {
        return new FleetAttributeCapabilityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryMiBRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class MemoryMiBRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryMiBRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryMiBRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface VCpuCountRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class VCpuCountRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VCpuCountRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VCpuCountRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface CustomerManagedWorkerCapabilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#accelerator_count CcFleet#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#accelerator_total_memory_mi_b CcFleet#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#accelerator_types CcFleet#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#cpu_architecture_type CcFleet#cpu_architecture_type}
    */
    readonly cpuArchitectureType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#custom_amounts CcFleet#custom_amounts}
    */
    readonly customAmounts?: FleetAmountCapabilityProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#custom_attributes CcFleet#custom_attributes}
    */
    readonly customAttributes?: FleetAttributeCapabilityProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#memory_mi_b CcFleet#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#os_family CcFleet#os_family}
    */
    readonly osFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#v_cpu_count CcFleet#v_cpu_count}
    */
    readonly vCpuCount?: VCpuCountRangeProperty;
}
export class CustomerManagedWorkerCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerManagedWorkerCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceleratorCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorCount = this._acceleratorCount?.internalValue;
        }
        if (this._acceleratorTotalMemoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorTotalMemoryMiB = this._acceleratorTotalMemoryMiB?.internalValue;
        }
        if (this._acceleratorTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorTypes = this._acceleratorTypes;
        }
        if (this._cpuArchitectureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuArchitectureType = this._cpuArchitectureType;
        }
        if (this._customAmounts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAmounts = this._customAmounts?.internalValue;
        }
        if (this._customAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAttributes = this._customAttributes?.internalValue;
        }
        if (this._memoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryMiB = this._memoryMiB?.internalValue;
        }
        if (this._osFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.osFamily = this._osFamily;
        }
        if (this._vCpuCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpuCount = this._vCpuCount?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerManagedWorkerCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorCount.internalValue = undefined;
            this._acceleratorTotalMemoryMiB.internalValue = undefined;
            this._acceleratorTypes = undefined;
            this._cpuArchitectureType = undefined;
            this._customAmounts.internalValue = undefined;
            this._customAttributes.internalValue = undefined;
            this._memoryMiB.internalValue = undefined;
            this._osFamily = undefined;
            this._vCpuCount.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorCount.internalValue = value.acceleratorCount;
            this._acceleratorTotalMemoryMiB.internalValue = value.acceleratorTotalMemoryMiB;
            this._acceleratorTypes = value.acceleratorTypes;
            this._cpuArchitectureType = value.cpuArchitectureType;
            this._customAmounts.internalValue = value.customAmounts;
            this._customAttributes.internalValue = value.customAttributes;
            this._memoryMiB.internalValue = value.memoryMiB;
            this._osFamily = value.osFamily;
            this._vCpuCount.internalValue = value.vCpuCount;
        }
    }

    // accelerator_count - computed: true, optional: true, required: false
    private _acceleratorCount = new AcceleratorCountRangePropertyOutputReference(this, "accelerator_count");
    public get acceleratorCount() {
        return this._acceleratorCount;
    }
    public putAcceleratorCount(value: AcceleratorCountRangeProperty) {
        this._acceleratorCount.internalValue = value;
    }
    public resetAcceleratorCount() {
        this._acceleratorCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorCountInput() {
        return this._acceleratorCount.internalValue;
    }

    // accelerator_total_memory_mi_b - computed: true, optional: true, required: false
    private _acceleratorTotalMemoryMiB = new AcceleratorTotalMemoryMiBRangePropertyOutputReference(this, "accelerator_total_memory_mi_b");
    public get acceleratorTotalMemoryMiB() {
        return this._acceleratorTotalMemoryMiB;
    }
    public putAcceleratorTotalMemoryMiB(value: AcceleratorTotalMemoryMiBRangeProperty) {
        this._acceleratorTotalMemoryMiB.internalValue = value;
    }
    public resetAcceleratorTotalMemoryMiB() {
        this._acceleratorTotalMemoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTotalMemoryMiBInput() {
        return this._acceleratorTotalMemoryMiB.internalValue;
    }

    // accelerator_types - computed: true, optional: true, required: false
    private _acceleratorTypes?: string[]; 
    public get acceleratorTypes() {
        return this.getListAttribute('accelerator_types');
    }
    public set acceleratorTypes(value: string[]) {
        this._acceleratorTypes = value;
    }
    public resetAcceleratorTypes() {
        this._acceleratorTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTypesInput() {
        return this._acceleratorTypes;
    }

    // cpu_architecture_type - computed: true, optional: true, required: false
    private _cpuArchitectureType?: string; 
    public get cpuArchitectureType() {
        return this.getStringAttribute('cpu_architecture_type');
    }
    public set cpuArchitectureType(value: string) {
        this._cpuArchitectureType = value;
    }
    public resetCpuArchitectureType() {
        this._cpuArchitectureType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuArchitectureTypeInput() {
        return this._cpuArchitectureType;
    }

    // custom_amounts - computed: true, optional: true, required: false
    private _customAmounts = new FleetAmountCapabilityPropertyList(this, "custom_amounts", false);
    public get customAmounts() {
        return this._customAmounts;
    }
    public putCustomAmounts(value: FleetAmountCapabilityProperty[] | cdktn.IResolvable) {
        this._customAmounts.internalValue = value;
    }
    public resetCustomAmounts() {
        this._customAmounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAmountsInput() {
        return this._customAmounts.internalValue;
    }

    // custom_attributes - computed: true, optional: true, required: false
    private _customAttributes = new FleetAttributeCapabilityPropertyList(this, "custom_attributes", false);
    public get customAttributes() {
        return this._customAttributes;
    }
    public putCustomAttributes(value: FleetAttributeCapabilityProperty[] | cdktn.IResolvable) {
        this._customAttributes.internalValue = value;
    }
    public resetCustomAttributes() {
        this._customAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAttributesInput() {
        return this._customAttributes.internalValue;
    }

    // memory_mi_b - computed: true, optional: true, required: false
    private _memoryMiB = new MemoryMiBRangePropertyOutputReference(this, "memory_mi_b");
    public get memoryMiB() {
        return this._memoryMiB;
    }
    public putMemoryMiB(value: MemoryMiBRangeProperty) {
        this._memoryMiB.internalValue = value;
    }
    public resetMemoryMiB() {
        this._memoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryMiBInput() {
        return this._memoryMiB.internalValue;
    }

    // os_family - computed: true, optional: true, required: false
    private _osFamily?: string; 
    public get osFamily() {
        return this.getStringAttribute('os_family');
    }
    public set osFamily(value: string) {
        this._osFamily = value;
    }
    public resetOsFamily() {
        this._osFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get osFamilyInput() {
        return this._osFamily;
    }

    // v_cpu_count - computed: true, optional: true, required: false
    private _vCpuCount = new VCpuCountRangePropertyOutputReference(this, "v_cpu_count");
    public get vCpuCount() {
        return this._vCpuCount;
    }
    public putVCpuCount(value: VCpuCountRangeProperty) {
        this._vCpuCount.internalValue = value;
    }
    public resetVCpuCount() {
        this._vCpuCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuCountInput() {
        return this._vCpuCount.internalValue;
    }
}
export interface CustomerManagedFleetConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#auto_scaling_configuration CcFleet#auto_scaling_configuration}
    */
    readonly autoScalingConfiguration?: CustomerManagedAutoScalingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#mode CcFleet#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#storage_profile_id CcFleet#storage_profile_id}
    */
    readonly storageProfileId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#tag_propagation_mode CcFleet#tag_propagation_mode}
    */
    readonly tagPropagationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#worker_capabilities CcFleet#worker_capabilities}
    */
    readonly workerCapabilities?: CustomerManagedWorkerCapabilitiesProperty;
}
export class CustomerManagedFleetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerManagedFleetConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingConfiguration = this._autoScalingConfiguration?.internalValue;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._storageProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageProfileId = this._storageProfileId;
        }
        if (this._tagPropagationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagPropagationMode = this._tagPropagationMode;
        }
        if (this._workerCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerCapabilities = this._workerCapabilities?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerManagedFleetConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingConfiguration.internalValue = undefined;
            this._mode = undefined;
            this._storageProfileId = undefined;
            this._tagPropagationMode = undefined;
            this._workerCapabilities.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingConfiguration.internalValue = value.autoScalingConfiguration;
            this._mode = value.mode;
            this._storageProfileId = value.storageProfileId;
            this._tagPropagationMode = value.tagPropagationMode;
            this._workerCapabilities.internalValue = value.workerCapabilities;
        }
    }

    // auto_scaling_configuration - computed: true, optional: true, required: false
    private _autoScalingConfiguration = new CustomerManagedAutoScalingConfigurationPropertyOutputReference(this, "auto_scaling_configuration");
    public get autoScalingConfiguration() {
        return this._autoScalingConfiguration;
    }
    public putAutoScalingConfiguration(value: CustomerManagedAutoScalingConfigurationProperty) {
        this._autoScalingConfiguration.internalValue = value;
    }
    public resetAutoScalingConfiguration() {
        this._autoScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingConfigurationInput() {
        return this._autoScalingConfiguration.internalValue;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // storage_profile_id - computed: true, optional: true, required: false
    private _storageProfileId?: string; 
    public get storageProfileId() {
        return this.getStringAttribute('storage_profile_id');
    }
    public set storageProfileId(value: string) {
        this._storageProfileId = value;
    }
    public resetStorageProfileId() {
        this._storageProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageProfileIdInput() {
        return this._storageProfileId;
    }

    // tag_propagation_mode - computed: true, optional: true, required: false
    private _tagPropagationMode?: string; 
    public get tagPropagationMode() {
        return this.getStringAttribute('tag_propagation_mode');
    }
    public set tagPropagationMode(value: string) {
        this._tagPropagationMode = value;
    }
    public resetTagPropagationMode() {
        this._tagPropagationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagPropagationModeInput() {
        return this._tagPropagationMode;
    }

    // worker_capabilities - computed: true, optional: true, required: false
    private _workerCapabilities = new CustomerManagedWorkerCapabilitiesPropertyOutputReference(this, "worker_capabilities");
    public get workerCapabilities() {
        return this._workerCapabilities;
    }
    public putWorkerCapabilities(value: CustomerManagedWorkerCapabilitiesProperty) {
        this._workerCapabilities.internalValue = value;
    }
    public resetWorkerCapabilities() {
        this._workerCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerCapabilitiesInput() {
        return this._workerCapabilities.internalValue;
    }
}
export interface ServiceManagedEc2AutoScalingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#scale_out_workers_per_minute CcFleet#scale_out_workers_per_minute}
    */
    readonly scaleOutWorkersPerMinute?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#standby_worker_count CcFleet#standby_worker_count}
    */
    readonly standbyWorkerCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#worker_idle_duration_seconds CcFleet#worker_idle_duration_seconds}
    */
    readonly workerIdleDurationSeconds?: number;
}
export class ServiceManagedEc2AutoScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceManagedEc2AutoScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scaleOutWorkersPerMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutWorkersPerMinute = this._scaleOutWorkersPerMinute;
        }
        if (this._standbyWorkerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.standbyWorkerCount = this._standbyWorkerCount;
        }
        if (this._workerIdleDurationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerIdleDurationSeconds = this._workerIdleDurationSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceManagedEc2AutoScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scaleOutWorkersPerMinute = undefined;
            this._standbyWorkerCount = undefined;
            this._workerIdleDurationSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scaleOutWorkersPerMinute = value.scaleOutWorkersPerMinute;
            this._standbyWorkerCount = value.standbyWorkerCount;
            this._workerIdleDurationSeconds = value.workerIdleDurationSeconds;
        }
    }

    // scale_out_workers_per_minute - computed: true, optional: true, required: false
    private _scaleOutWorkersPerMinute?: number; 
    public get scaleOutWorkersPerMinute() {
        return this.getNumberAttribute('scale_out_workers_per_minute');
    }
    public set scaleOutWorkersPerMinute(value: number) {
        this._scaleOutWorkersPerMinute = value;
    }
    public resetScaleOutWorkersPerMinute() {
        this._scaleOutWorkersPerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutWorkersPerMinuteInput() {
        return this._scaleOutWorkersPerMinute;
    }

    // standby_worker_count - computed: true, optional: true, required: false
    private _standbyWorkerCount?: number; 
    public get standbyWorkerCount() {
        return this.getNumberAttribute('standby_worker_count');
    }
    public set standbyWorkerCount(value: number) {
        this._standbyWorkerCount = value;
    }
    public resetStandbyWorkerCount() {
        this._standbyWorkerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standbyWorkerCountInput() {
        return this._standbyWorkerCount;
    }

    // worker_idle_duration_seconds - computed: true, optional: true, required: false
    private _workerIdleDurationSeconds?: number; 
    public get workerIdleDurationSeconds() {
        return this.getNumberAttribute('worker_idle_duration_seconds');
    }
    public set workerIdleDurationSeconds(value: number) {
        this._workerIdleDurationSeconds = value;
    }
    public resetWorkerIdleDurationSeconds() {
        this._workerIdleDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerIdleDurationSecondsInput() {
        return this._workerIdleDurationSeconds;
    }
}
export interface CountProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class CountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface AcceleratorSelectionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#name CcFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#runtime CcFleet#runtime}
    */
    readonly runtime?: string;
}
export class AcceleratorSelectionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AcceleratorSelectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorSelectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._runtime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._runtime = value.runtime;
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

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }
}

export class AcceleratorSelectionPropertyList extends cdktn.ComplexList {
    public internalValue? : AcceleratorSelectionProperty[] | cdktn.IResolvable

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
    public get(index: number): AcceleratorSelectionPropertyOutputReference {
        return new AcceleratorSelectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AcceleratorCapabilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#count CcFleet#count}
    */
    readonly count?: CountProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#selections CcFleet#selections}
    */
    readonly selections?: AcceleratorSelectionProperty[] | cdktn.IResolvable;
}
export class AcceleratorCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count?.internalValue;
        }
        if (this._selections?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selections = this._selections?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count.internalValue = undefined;
            this._selections.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count.internalValue = value.count;
            this._selections.internalValue = value.selections;
        }
    }

    // count - computed: true, optional: true, required: false
    private _count = new CountPropertyOutputReference(this, "count");
    public get count() {
        return this._count;
    }
    public putCount(value: CountProperty) {
        this._count.internalValue = value;
    }
    public resetCount() {
        this._count.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count.internalValue;
    }

    // selections - computed: true, optional: true, required: false
    private _selections = new AcceleratorSelectionPropertyList(this, "selections", false);
    public get selections() {
        return this._selections;
    }
    public putSelections(value: AcceleratorSelectionProperty[] | cdktn.IResolvable) {
        this._selections.internalValue = value;
    }
    public resetSelections() {
        this._selections.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionsInput() {
        return this._selections.internalValue;
    }
}
export interface CustomAmountsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#name CcFleet#name}
    */
    readonly name?: string;
}
export class CustomAmountsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomAmountsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomAmountsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
            this._name = value.name;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
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
}

export class CustomAmountsPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomAmountsProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomAmountsPropertyOutputReference {
        return new CustomAmountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomAttributesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#name CcFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#values CcFleet#values}
    */
    readonly values?: string[];
}
export class CustomAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class CustomAttributesPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomAttributesProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomAttributesPropertyOutputReference {
        return new CustomAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MemoryMiBProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class MemoryMiBPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryMiBProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryMiBProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface Ec2EbsVolumeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#iops CcFleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#size_gi_b CcFleet#size_gi_b}
    */
    readonly sizeGiB?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#throughput_mi_b CcFleet#throughput_mi_b}
    */
    readonly throughputMiB?: number;
}
export class Ec2EbsVolumePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Ec2EbsVolumeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._sizeGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeGiB = this._sizeGiB;
        }
        if (this._throughputMiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughputMiB = this._throughputMiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2EbsVolumeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iops = undefined;
            this._sizeGiB = undefined;
            this._throughputMiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iops = value.iops;
            this._sizeGiB = value.sizeGiB;
            this._throughputMiB = value.throughputMiB;
        }
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
    }

    // size_gi_b - computed: true, optional: true, required: false
    private _sizeGiB?: number; 
    public get sizeGiB() {
        return this.getNumberAttribute('size_gi_b');
    }
    public set sizeGiB(value: number) {
        this._sizeGiB = value;
    }
    public resetSizeGiB() {
        this._sizeGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeGiBInput() {
        return this._sizeGiB;
    }

    // throughput_mi_b - computed: true, optional: true, required: false
    private _throughputMiB?: number; 
    public get throughputMiB() {
        return this.getNumberAttribute('throughput_mi_b');
    }
    public set throughputMiB(value: number) {
        this._throughputMiB = value;
    }
    public resetThroughputMiB() {
        this._throughputMiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputMiBInput() {
        return this._throughputMiB;
    }
}
export interface VCpuCountProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#max CcFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#min CcFleet#min}
    */
    readonly min?: number;
}
export class VCpuCountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VCpuCountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VCpuCountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface ServiceManagedEc2InstanceCapabilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#accelerator_capabilities CcFleet#accelerator_capabilities}
    */
    readonly acceleratorCapabilities?: AcceleratorCapabilitiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#allowed_instance_types CcFleet#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#cpu_architecture_type CcFleet#cpu_architecture_type}
    */
    readonly cpuArchitectureType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#custom_amounts CcFleet#custom_amounts}
    */
    readonly customAmounts?: CustomAmountsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#custom_attributes CcFleet#custom_attributes}
    */
    readonly customAttributes?: CustomAttributesProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#excluded_instance_types CcFleet#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#memory_mi_b CcFleet#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#os_family CcFleet#os_family}
    */
    readonly osFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#root_ebs_volume CcFleet#root_ebs_volume}
    */
    readonly rootEbsVolume?: Ec2EbsVolumeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#v_cpu_count CcFleet#v_cpu_count}
    */
    readonly vCpuCount?: VCpuCountProperty;
}
export class ServiceManagedEc2InstanceCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceManagedEc2InstanceCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceleratorCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorCapabilities = this._acceleratorCapabilities?.internalValue;
        }
        if (this._allowedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
        }
        if (this._cpuArchitectureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuArchitectureType = this._cpuArchitectureType;
        }
        if (this._customAmounts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAmounts = this._customAmounts?.internalValue;
        }
        if (this._customAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAttributes = this._customAttributes?.internalValue;
        }
        if (this._excludedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
        }
        if (this._memoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryMiB = this._memoryMiB?.internalValue;
        }
        if (this._osFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.osFamily = this._osFamily;
        }
        if (this._rootEbsVolume?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootEbsVolume = this._rootEbsVolume?.internalValue;
        }
        if (this._vCpuCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpuCount = this._vCpuCount?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceManagedEc2InstanceCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorCapabilities.internalValue = undefined;
            this._allowedInstanceTypes = undefined;
            this._cpuArchitectureType = undefined;
            this._customAmounts.internalValue = undefined;
            this._customAttributes.internalValue = undefined;
            this._excludedInstanceTypes = undefined;
            this._memoryMiB.internalValue = undefined;
            this._osFamily = undefined;
            this._rootEbsVolume.internalValue = undefined;
            this._vCpuCount.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorCapabilities.internalValue = value.acceleratorCapabilities;
            this._allowedInstanceTypes = value.allowedInstanceTypes;
            this._cpuArchitectureType = value.cpuArchitectureType;
            this._customAmounts.internalValue = value.customAmounts;
            this._customAttributes.internalValue = value.customAttributes;
            this._excludedInstanceTypes = value.excludedInstanceTypes;
            this._memoryMiB.internalValue = value.memoryMiB;
            this._osFamily = value.osFamily;
            this._rootEbsVolume.internalValue = value.rootEbsVolume;
            this._vCpuCount.internalValue = value.vCpuCount;
        }
    }

    // accelerator_capabilities - computed: true, optional: true, required: false
    private _acceleratorCapabilities = new AcceleratorCapabilitiesPropertyOutputReference(this, "accelerator_capabilities");
    public get acceleratorCapabilities() {
        return this._acceleratorCapabilities;
    }
    public putAcceleratorCapabilities(value: AcceleratorCapabilitiesProperty) {
        this._acceleratorCapabilities.internalValue = value;
    }
    public resetAcceleratorCapabilities() {
        this._acceleratorCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorCapabilitiesInput() {
        return this._acceleratorCapabilities.internalValue;
    }

    // allowed_instance_types - computed: true, optional: true, required: false
    private _allowedInstanceTypes?: string[]; 
    public get allowedInstanceTypes() {
        return this.getListAttribute('allowed_instance_types');
    }
    public set allowedInstanceTypes(value: string[]) {
        this._allowedInstanceTypes = value;
    }
    public resetAllowedInstanceTypes() {
        this._allowedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedInstanceTypesInput() {
        return this._allowedInstanceTypes;
    }

    // cpu_architecture_type - computed: true, optional: true, required: false
    private _cpuArchitectureType?: string; 
    public get cpuArchitectureType() {
        return this.getStringAttribute('cpu_architecture_type');
    }
    public set cpuArchitectureType(value: string) {
        this._cpuArchitectureType = value;
    }
    public resetCpuArchitectureType() {
        this._cpuArchitectureType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuArchitectureTypeInput() {
        return this._cpuArchitectureType;
    }

    // custom_amounts - computed: true, optional: true, required: false
    private _customAmounts = new CustomAmountsPropertyList(this, "custom_amounts", false);
    public get customAmounts() {
        return this._customAmounts;
    }
    public putCustomAmounts(value: CustomAmountsProperty[] | cdktn.IResolvable) {
        this._customAmounts.internalValue = value;
    }
    public resetCustomAmounts() {
        this._customAmounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAmountsInput() {
        return this._customAmounts.internalValue;
    }

    // custom_attributes - computed: true, optional: true, required: false
    private _customAttributes = new CustomAttributesPropertyList(this, "custom_attributes", false);
    public get customAttributes() {
        return this._customAttributes;
    }
    public putCustomAttributes(value: CustomAttributesProperty[] | cdktn.IResolvable) {
        this._customAttributes.internalValue = value;
    }
    public resetCustomAttributes() {
        this._customAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAttributesInput() {
        return this._customAttributes.internalValue;
    }

    // excluded_instance_types - computed: true, optional: true, required: false
    private _excludedInstanceTypes?: string[]; 
    public get excludedInstanceTypes() {
        return this.getListAttribute('excluded_instance_types');
    }
    public set excludedInstanceTypes(value: string[]) {
        this._excludedInstanceTypes = value;
    }
    public resetExcludedInstanceTypes() {
        this._excludedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedInstanceTypesInput() {
        return this._excludedInstanceTypes;
    }

    // memory_mi_b - computed: true, optional: true, required: false
    private _memoryMiB = new MemoryMiBPropertyOutputReference(this, "memory_mi_b");
    public get memoryMiB() {
        return this._memoryMiB;
    }
    public putMemoryMiB(value: MemoryMiBProperty) {
        this._memoryMiB.internalValue = value;
    }
    public resetMemoryMiB() {
        this._memoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryMiBInput() {
        return this._memoryMiB.internalValue;
    }

    // os_family - computed: true, optional: true, required: false
    private _osFamily?: string; 
    public get osFamily() {
        return this.getStringAttribute('os_family');
    }
    public set osFamily(value: string) {
        this._osFamily = value;
    }
    public resetOsFamily() {
        this._osFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get osFamilyInput() {
        return this._osFamily;
    }

    // root_ebs_volume - computed: true, optional: true, required: false
    private _rootEbsVolume = new Ec2EbsVolumePropertyOutputReference(this, "root_ebs_volume");
    public get rootEbsVolume() {
        return this._rootEbsVolume;
    }
    public putRootEbsVolume(value: Ec2EbsVolumeProperty) {
        this._rootEbsVolume.internalValue = value;
    }
    public resetRootEbsVolume() {
        this._rootEbsVolume.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootEbsVolumeInput() {
        return this._rootEbsVolume.internalValue;
    }

    // v_cpu_count - computed: true, optional: true, required: false
    private _vCpuCount = new VCpuCountPropertyOutputReference(this, "v_cpu_count");
    public get vCpuCount() {
        return this._vCpuCount;
    }
    public putVCpuCount(value: VCpuCountProperty) {
        this._vCpuCount.internalValue = value;
    }
    public resetVCpuCount() {
        this._vCpuCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuCountInput() {
        return this._vCpuCount.internalValue;
    }
}
export interface ServiceManagedEc2InstanceMarketOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#type CcFleet#type}
    */
    readonly type?: string;
}
export class ServiceManagedEc2InstanceMarketOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceManagedEc2InstanceMarketOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceManagedEc2InstanceMarketOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
        }
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
export interface PersistentVolumeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#iops CcFleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#last_used_ttl_hours CcFleet#last_used_ttl_hours}
    */
    readonly lastUsedTtlHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#mount_path CcFleet#mount_path}
    */
    readonly mountPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#size_gi_b CcFleet#size_gi_b}
    */
    readonly sizeGiB?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#throughput_mi_b CcFleet#throughput_mi_b}
    */
    readonly throughputMiB?: number;
}
export class PersistentVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PersistentVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._lastUsedTtlHours !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastUsedTtlHours = this._lastUsedTtlHours;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        if (this._sizeGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeGiB = this._sizeGiB;
        }
        if (this._throughputMiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughputMiB = this._throughputMiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PersistentVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iops = undefined;
            this._lastUsedTtlHours = undefined;
            this._mountPath = undefined;
            this._sizeGiB = undefined;
            this._throughputMiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iops = value.iops;
            this._lastUsedTtlHours = value.lastUsedTtlHours;
            this._mountPath = value.mountPath;
            this._sizeGiB = value.sizeGiB;
            this._throughputMiB = value.throughputMiB;
        }
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
    }

    // last_used_ttl_hours - computed: true, optional: true, required: false
    private _lastUsedTtlHours?: number; 
    public get lastUsedTtlHours() {
        return this.getNumberAttribute('last_used_ttl_hours');
    }
    public set lastUsedTtlHours(value: number) {
        this._lastUsedTtlHours = value;
    }
    public resetLastUsedTtlHours() {
        this._lastUsedTtlHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUsedTtlHoursInput() {
        return this._lastUsedTtlHours;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }

    // size_gi_b - computed: true, optional: true, required: false
    private _sizeGiB?: number; 
    public get sizeGiB() {
        return this.getNumberAttribute('size_gi_b');
    }
    public set sizeGiB(value: number) {
        this._sizeGiB = value;
    }
    public resetSizeGiB() {
        this._sizeGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeGiBInput() {
        return this._sizeGiB;
    }

    // throughput_mi_b - computed: true, optional: true, required: false
    private _throughputMiB?: number; 
    public get throughputMiB() {
        return this.getNumberAttribute('throughput_mi_b');
    }
    public set throughputMiB(value: number) {
        this._throughputMiB = value;
    }
    public resetThroughputMiB() {
        this._throughputMiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputMiBInput() {
        return this._throughputMiB;
    }
}
export interface VpcConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#resource_configuration_arns CcFleet#resource_configuration_arns}
    */
    readonly resourceConfigurationArns?: string[];
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationArns = this._resourceConfigurationArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationArns = value.resourceConfigurationArns;
        }
    }

    // resource_configuration_arns - computed: true, optional: true, required: false
    private _resourceConfigurationArns?: string[]; 
    public get resourceConfigurationArns() {
        return this.getListAttribute('resource_configuration_arns');
    }
    public set resourceConfigurationArns(value: string[]) {
        this._resourceConfigurationArns = value;
    }
    public resetResourceConfigurationArns() {
        this._resourceConfigurationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationArnsInput() {
        return this._resourceConfigurationArns;
    }
}
export interface ServiceManagedEc2FleetConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#auto_scaling_configuration CcFleet#auto_scaling_configuration}
    */
    readonly autoScalingConfiguration?: ServiceManagedEc2AutoScalingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#instance_capabilities CcFleet#instance_capabilities}
    */
    readonly instanceCapabilities?: ServiceManagedEc2InstanceCapabilitiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#instance_market_options CcFleet#instance_market_options}
    */
    readonly instanceMarketOptions?: ServiceManagedEc2InstanceMarketOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#persistent_volume_configuration CcFleet#persistent_volume_configuration}
    */
    readonly persistentVolumeConfiguration?: PersistentVolumeConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#storage_profile_id CcFleet#storage_profile_id}
    */
    readonly storageProfileId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#vpc_configuration CcFleet#vpc_configuration}
    */
    readonly vpcConfiguration?: VpcConfigurationProperty;
}
export class ServiceManagedEc2FleetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceManagedEc2FleetConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingConfiguration = this._autoScalingConfiguration?.internalValue;
        }
        if (this._instanceCapabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCapabilities = this._instanceCapabilities?.internalValue;
        }
        if (this._instanceMarketOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMarketOptions = this._instanceMarketOptions?.internalValue;
        }
        if (this._persistentVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.persistentVolumeConfiguration = this._persistentVolumeConfiguration?.internalValue;
        }
        if (this._storageProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageProfileId = this._storageProfileId;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceManagedEc2FleetConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingConfiguration.internalValue = undefined;
            this._instanceCapabilities.internalValue = undefined;
            this._instanceMarketOptions.internalValue = undefined;
            this._persistentVolumeConfiguration.internalValue = undefined;
            this._storageProfileId = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingConfiguration.internalValue = value.autoScalingConfiguration;
            this._instanceCapabilities.internalValue = value.instanceCapabilities;
            this._instanceMarketOptions.internalValue = value.instanceMarketOptions;
            this._persistentVolumeConfiguration.internalValue = value.persistentVolumeConfiguration;
            this._storageProfileId = value.storageProfileId;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // auto_scaling_configuration - computed: true, optional: true, required: false
    private _autoScalingConfiguration = new ServiceManagedEc2AutoScalingConfigurationPropertyOutputReference(this, "auto_scaling_configuration");
    public get autoScalingConfiguration() {
        return this._autoScalingConfiguration;
    }
    public putAutoScalingConfiguration(value: ServiceManagedEc2AutoScalingConfigurationProperty) {
        this._autoScalingConfiguration.internalValue = value;
    }
    public resetAutoScalingConfiguration() {
        this._autoScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingConfigurationInput() {
        return this._autoScalingConfiguration.internalValue;
    }

    // instance_capabilities - computed: true, optional: true, required: false
    private _instanceCapabilities = new ServiceManagedEc2InstanceCapabilitiesPropertyOutputReference(this, "instance_capabilities");
    public get instanceCapabilities() {
        return this._instanceCapabilities;
    }
    public putInstanceCapabilities(value: ServiceManagedEc2InstanceCapabilitiesProperty) {
        this._instanceCapabilities.internalValue = value;
    }
    public resetInstanceCapabilities() {
        this._instanceCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCapabilitiesInput() {
        return this._instanceCapabilities.internalValue;
    }

    // instance_market_options - computed: true, optional: true, required: false
    private _instanceMarketOptions = new ServiceManagedEc2InstanceMarketOptionsPropertyOutputReference(this, "instance_market_options");
    public get instanceMarketOptions() {
        return this._instanceMarketOptions;
    }
    public putInstanceMarketOptions(value: ServiceManagedEc2InstanceMarketOptionsProperty) {
        this._instanceMarketOptions.internalValue = value;
    }
    public resetInstanceMarketOptions() {
        this._instanceMarketOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMarketOptionsInput() {
        return this._instanceMarketOptions.internalValue;
    }

    // persistent_volume_configuration - computed: true, optional: true, required: false
    private _persistentVolumeConfiguration = new PersistentVolumeConfigurationPropertyOutputReference(this, "persistent_volume_configuration");
    public get persistentVolumeConfiguration() {
        return this._persistentVolumeConfiguration;
    }
    public putPersistentVolumeConfiguration(value: PersistentVolumeConfigurationProperty) {
        this._persistentVolumeConfiguration.internalValue = value;
    }
    public resetPersistentVolumeConfiguration() {
        this._persistentVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get persistentVolumeConfigurationInput() {
        return this._persistentVolumeConfiguration.internalValue;
    }

    // storage_profile_id - computed: true, optional: true, required: false
    private _storageProfileId?: string; 
    public get storageProfileId() {
        return this.getStringAttribute('storage_profile_id');
    }
    public set storageProfileId(value: string) {
        this._storageProfileId = value;
    }
    public resetStorageProfileId() {
        this._storageProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageProfileIdInput() {
        return this._storageProfileId;
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: VpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
export interface FleetConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#customer_managed CcFleet#customer_managed}
    */
    readonly customerManaged?: CustomerManagedFleetConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#service_managed_ec_2 CcFleet#service_managed_ec_2}
    */
    readonly serviceManagedEc2?: ServiceManagedEc2FleetConfigurationProperty;
}
export class FleetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FleetConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerManaged?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerManaged = this._customerManaged?.internalValue;
        }
        if (this._serviceManagedEc2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceManagedEc2 = this._serviceManagedEc2?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FleetConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerManaged.internalValue = undefined;
            this._serviceManagedEc2.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerManaged.internalValue = value.customerManaged;
            this._serviceManagedEc2.internalValue = value.serviceManagedEc2;
        }
    }

    // customer_managed - computed: true, optional: true, required: false
    private _customerManaged = new CustomerManagedFleetConfigurationPropertyOutputReference(this, "customer_managed");
    public get customerManaged() {
        return this._customerManaged;
    }
    public putCustomerManaged(value: CustomerManagedFleetConfigurationProperty) {
        this._customerManaged.internalValue = value;
    }
    public resetCustomerManaged() {
        this._customerManaged.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedInput() {
        return this._customerManaged.internalValue;
    }

    // service_managed_ec_2 - computed: true, optional: true, required: false
    private _serviceManagedEc2 = new ServiceManagedEc2FleetConfigurationPropertyOutputReference(this, "service_managed_ec_2");
    public get serviceManagedEc2() {
        return this._serviceManagedEc2;
    }
    public putServiceManagedEc2(value: ServiceManagedEc2FleetConfigurationProperty) {
        this._serviceManagedEc2.internalValue = value;
    }
    public resetServiceManagedEc2() {
        this._serviceManagedEc2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceManagedEc2Input() {
        return this._serviceManagedEc2.internalValue;
    }
}
export interface HostConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#script_body CcFleet#script_body}
    */
    readonly scriptBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#script_timeout_seconds CcFleet#script_timeout_seconds}
    */
    readonly scriptTimeoutSeconds?: number;
}
export class HostConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scriptBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptBody = this._scriptBody;
        }
        if (this._scriptTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptTimeoutSeconds = this._scriptTimeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scriptBody = undefined;
            this._scriptTimeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scriptBody = value.scriptBody;
            this._scriptTimeoutSeconds = value.scriptTimeoutSeconds;
        }
    }

    // script_body - computed: true, optional: true, required: false
    private _scriptBody?: string; 
    public get scriptBody() {
        return this.getStringAttribute('script_body');
    }
    public set scriptBody(value: string) {
        this._scriptBody = value;
    }
    public resetScriptBody() {
        this._scriptBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptBodyInput() {
        return this._scriptBody;
    }

    // script_timeout_seconds - computed: true, optional: true, required: false
    private _scriptTimeoutSeconds?: number; 
    public get scriptTimeoutSeconds() {
        return this.getNumberAttribute('script_timeout_seconds');
    }
    public set scriptTimeoutSeconds(value: number) {
        this._scriptTimeoutSeconds = value;
    }
    public resetScriptTimeoutSeconds() {
        this._scriptTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptTimeoutSecondsInput() {
        return this._scriptTimeoutSeconds;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#key CcFleet#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_fleet#value CcFleet#value}
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
