// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnomalyMonitorProps extends cdktn.TerraformMetaArguments {
    /**
    * The dimensions to evaluate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#monitor_dimension CcAnomalyMonitor#monitor_dimension}
    */
    readonly monitorDimension?: string;
    /**
    * The name of the monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#monitor_name CcAnomalyMonitor#monitor_name}
    */
    readonly monitorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#monitor_specification CcAnomalyMonitor#monitor_specification}
    */
    readonly monitorSpecification?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#monitor_type CcAnomalyMonitor#monitor_type}
    */
    readonly monitorType: string;
    /**
    * Tags to assign to monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#resource_tags CcAnomalyMonitor#resource_tags}
    */
    readonly resourceTags?: CcAnomalyMonitor.ResourceTagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor awscc_ce_anomaly_monitor}
*/
export class CcAnomalyMonitor extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ce_anomaly_monitor";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnomalyMonitor resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnomalyMonitor to import
    * @param importFromId The id of the existing CcAnomalyMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnomalyMonitor to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ce_anomaly_monitor", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor awscc_ce_anomaly_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnomalyMonitorProps
    */
    public constructor(scope: Construct, id: string, config: CcAnomalyMonitorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ce_anomaly_monitor',
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
        this._monitorDimension = config.monitorDimension;
        this._monitorName = config.monitorName;
        this._monitorSpecification = config.monitorSpecification;
        this._monitorType = config.monitorType;
        this._resourceTags.internalValue = config.resourceTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // dimensional_value_count - computed: true, optional: false, required: false
    public get dimensionalValueCount() {
        return this.getNumberAttribute('dimensional_value_count');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_evaluated_date - computed: true, optional: false, required: false
    public get lastEvaluatedDate() {
        return this.getStringAttribute('last_evaluated_date');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }

    // monitor_arn - computed: true, optional: false, required: false
    public get monitorArn() {
        return this.getStringAttribute('monitor_arn');
    }

    // monitor_dimension - computed: true, optional: true, required: false
    private _monitorDimension?: string; 
    public get monitorDimension() {
        return this.getStringAttribute('monitor_dimension');
    }
    public set monitorDimension(value: string) {
        this._monitorDimension = value;
    }
    public resetMonitorDimension() {
        this._monitorDimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorDimensionInput() {
        return this._monitorDimension;
    }

    // monitor_name - computed: false, optional: false, required: true
    private _monitorName?: string; 
    public get monitorName() {
        return this.getStringAttribute('monitor_name');
    }
    public set monitorName(value: string) {
        this._monitorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorNameInput() {
        return this._monitorName;
    }

    // monitor_specification - computed: true, optional: true, required: false
    private _monitorSpecification?: string; 
    public get monitorSpecification() {
        return this.getStringAttribute('monitor_specification');
    }
    public set monitorSpecification(value: string) {
        this._monitorSpecification = value;
    }
    public resetMonitorSpecification() {
        this._monitorSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorSpecificationInput() {
        return this._monitorSpecification;
    }

    // monitor_type - computed: false, optional: false, required: true
    private _monitorType?: string; 
    public get monitorType() {
        return this.getStringAttribute('monitor_type');
    }
    public set monitorType(value: string) {
        this._monitorType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorTypeInput() {
        return this._monitorType;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcAnomalyMonitor.ResourceTagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcAnomalyMonitor.ResourceTagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            monitor_dimension: cdktn.stringToTerraform(this._monitorDimension),
            monitor_name: cdktn.stringToTerraform(this._monitorName),
            monitor_specification: cdktn.stringToTerraform(this._monitorSpecification),
            monitor_type: cdktn.stringToTerraform(this._monitorType),
            resource_tags: cdktn.listMapper(ccAnomalyMonitorResourceTagPropertyToTerraform, false)(this._resourceTags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            monitor_dimension: {
                value: cdktn.stringToHclTerraform(this._monitorDimension),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_name: {
                value: cdktn.stringToHclTerraform(this._monitorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_specification: {
                value: cdktn.stringToHclTerraform(this._monitorSpecification),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_type: {
                value: cdktn.stringToHclTerraform(this._monitorType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccAnomalyMonitorResourceTagPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnomalyMonitor.ResourceTagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnomalyMonitorResourceTagPropertyToTerraform(struct?: CcAnomalyMonitor.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalyMonitorResourceTagPropertyToHclTerraform(struct?: CcAnomalyMonitor.ResourceTagProperty | cdktn.IResolvable): any {
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


export namespace CcAnomalyMonitor {
export interface ResourceTagProperty {
    /**
    * The key name for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#key CcAnomalyMonitor#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ce_anomaly_monitor#value CcAnomalyMonitor#value}
    */
    readonly value?: string;
}
export class ResourceTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
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

export class ResourceTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagPropertyOutputReference {
        return new ResourceTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
