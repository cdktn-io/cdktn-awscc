// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSignalCatalogProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#description CcSignalCatalog#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#name CcSignalCatalog#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#node_counts CcSignalCatalog#node_counts}
    */
    readonly nodeCounts?: CcSignalCatalog.NodeCountsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#nodes CcSignalCatalog#nodes}
    */
    readonly nodes?: CcSignalCatalog.NodeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#tags CcSignalCatalog#tags}
    */
    readonly tags?: CcSignalCatalog.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}
*/
export class CcSignalCatalog extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotfleetwise_signal_catalog";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSignalCatalog resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSignalCatalog to import
    * @param importFromId The id of the existing CcSignalCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSignalCatalog to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_signal_catalog", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSignalCatalogProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSignalCatalogProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotfleetwise_signal_catalog',
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
        this._description = config.description;
        this._name = config.name;
        this._nodeCounts.internalValue = config.nodeCounts;
        this._nodes.internalValue = config.nodes;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modification_time - computed: true, optional: false, required: false
    public get lastModificationTime() {
        return this.getStringAttribute('last_modification_time');
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

    // node_counts - computed: true, optional: true, required: false
    private _nodeCounts = new CcSignalCatalog.NodeCountsPropertyOutputReference(this, "node_counts");
    public get nodeCounts() {
        return this._nodeCounts;
    }
    public putNodeCounts(value: CcSignalCatalog.NodeCountsProperty) {
        this._nodeCounts.internalValue = value;
    }
    public resetNodeCounts() {
        this._nodeCounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeCountsInput() {
        return this._nodeCounts.internalValue;
    }

    // nodes - computed: true, optional: true, required: false
    private _nodes = new CcSignalCatalog.NodePropertyList(this, "nodes", true);
    public get nodes() {
        return this._nodes;
    }
    public putNodes(value: CcSignalCatalog.NodeProperty[] | cdktn.IResolvable) {
        this._nodes.internalValue = value;
    }
    public resetNodes() {
        this._nodes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodesInput() {
        return this._nodes.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSignalCatalog.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSignalCatalog.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            node_counts: ccSignalCatalogNodeCountsPropertyToTerraform(this._nodeCounts.internalValue),
            nodes: cdktn.listMapper(ccSignalCatalogNodePropertyToTerraform, false)(this._nodes.internalValue),
            tags: cdktn.listMapper(ccSignalCatalogTagPropertyToTerraform, false)(this._tags.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_counts: {
                value: ccSignalCatalogNodeCountsPropertyToHclTerraform(this._nodeCounts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSignalCatalog.NodeCountsProperty",
            },
            nodes: {
                value: cdktn.listMapperHcl(ccSignalCatalogNodePropertyToHclTerraform, false)(this._nodes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSignalCatalog.NodePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSignalCatalogTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSignalCatalog.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSignalCatalogNodeCountsPropertyToTerraform(struct?: CcSignalCatalog.NodeCountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSignalCatalogNodeCountsPropertyToHclTerraform(struct?: CcSignalCatalog.NodeCountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccSignalCatalogActuatorPropertyToTerraform(struct?: CcSignalCatalog.ActuatorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        assigned_value: cdktn.stringToTerraform(struct!.assignedValue),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        description: cdktn.stringToTerraform(struct!.description),
        fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccSignalCatalogActuatorPropertyToHclTerraform(struct?: CcSignalCatalog.ActuatorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        assigned_value: {
            value: cdktn.stringToHclTerraform(struct!.assignedValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fully_qualified_name: {
            value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSignalCatalogAttributePropertyToTerraform(struct?: CcSignalCatalog.AttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        assigned_value: cdktn.stringToTerraform(struct!.assignedValue),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        description: cdktn.stringToTerraform(struct!.description),
        fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccSignalCatalogAttributePropertyToHclTerraform(struct?: CcSignalCatalog.AttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        assigned_value: {
            value: cdktn.stringToHclTerraform(struct!.assignedValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fully_qualified_name: {
            value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSignalCatalogBranchPropertyToTerraform(struct?: CcSignalCatalog.BranchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
    }
}


export function ccSignalCatalogBranchPropertyToHclTerraform(struct?: CcSignalCatalog.BranchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fully_qualified_name: {
            value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSignalCatalogSensorPropertyToTerraform(struct?: CcSignalCatalog.SensorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        description: cdktn.stringToTerraform(struct!.description),
        fully_qualified_name: cdktn.stringToTerraform(struct!.fullyQualifiedName),
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccSignalCatalogSensorPropertyToHclTerraform(struct?: CcSignalCatalog.SensorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fully_qualified_name: {
            value: cdktn.stringToHclTerraform(struct!.fullyQualifiedName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSignalCatalogNodePropertyToTerraform(struct?: CcSignalCatalog.NodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actuator: ccSignalCatalogActuatorPropertyToTerraform(struct!.actuator),
        attribute: ccSignalCatalogAttributePropertyToTerraform(struct!.attribute),
        branch: ccSignalCatalogBranchPropertyToTerraform(struct!.branch),
        sensor: ccSignalCatalogSensorPropertyToTerraform(struct!.sensor),
    }
}


export function ccSignalCatalogNodePropertyToHclTerraform(struct?: CcSignalCatalog.NodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actuator: {
            value: ccSignalCatalogActuatorPropertyToHclTerraform(struct!.actuator),
            isBlock: true,
            type: "struct",
            storageClassType: "ActuatorProperty",
        },
        attribute: {
            value: ccSignalCatalogAttributePropertyToHclTerraform(struct!.attribute),
            isBlock: true,
            type: "struct",
            storageClassType: "AttributeProperty",
        },
        branch: {
            value: ccSignalCatalogBranchPropertyToHclTerraform(struct!.branch),
            isBlock: true,
            type: "struct",
            storageClassType: "BranchProperty",
        },
        sensor: {
            value: ccSignalCatalogSensorPropertyToHclTerraform(struct!.sensor),
            isBlock: true,
            type: "struct",
            storageClassType: "SensorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSignalCatalogTagPropertyToTerraform(struct?: CcSignalCatalog.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSignalCatalogTagPropertyToHclTerraform(struct?: CcSignalCatalog.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSignalCatalog {
export interface NodeCountsProperty {
}
export class NodeCountsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeCountsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeCountsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // total_actuators - computed: true, optional: false, required: false
    public get totalActuators() {
        return this.getNumberAttribute('total_actuators');
    }

    // total_attributes - computed: true, optional: false, required: false
    public get totalAttributes() {
        return this.getNumberAttribute('total_attributes');
    }

    // total_branches - computed: true, optional: false, required: false
    public get totalBranches() {
        return this.getNumberAttribute('total_branches');
    }

    // total_nodes - computed: true, optional: false, required: false
    public get totalNodes() {
        return this.getNumberAttribute('total_nodes');
    }

    // total_sensors - computed: true, optional: false, required: false
    public get totalSensors() {
        return this.getNumberAttribute('total_sensors');
    }
}
export interface ActuatorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#allowed_values CcSignalCatalog#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#assigned_value CcSignalCatalog#assigned_value}
    */
    readonly assignedValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#data_type CcSignalCatalog#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#description CcSignalCatalog#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name CcSignalCatalog#fully_qualified_name}
    */
    readonly fullyQualifiedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#max CcSignalCatalog#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#min CcSignalCatalog#min}
    */
    readonly min?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#unit CcSignalCatalog#unit}
    */
    readonly unit?: string;
}
export class ActuatorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActuatorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._assignedValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.assignedValue = this._assignedValue;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._fullyQualifiedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
        }
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActuatorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._assignedValue = undefined;
            this._dataType = undefined;
            this._description = undefined;
            this._fullyQualifiedName = undefined;
            this._max = undefined;
            this._min = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._assignedValue = value.assignedValue;
            this._dataType = value.dataType;
            this._description = value.description;
            this._fullyQualifiedName = value.fullyQualifiedName;
            this._max = value.max;
            this._min = value.min;
            this._unit = value.unit;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // assigned_value - computed: true, optional: true, required: false
    private _assignedValue?: string; 
    public get assignedValue() {
        return this.getStringAttribute('assigned_value');
    }
    public set assignedValue(value: string) {
        this._assignedValue = value;
    }
    public resetAssignedValue() {
        this._assignedValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignedValueInput() {
        return this._assignedValue;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
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

    // fully_qualified_name - computed: true, optional: true, required: false
    private _fullyQualifiedName?: string; 
    public get fullyQualifiedName() {
        return this.getStringAttribute('fully_qualified_name');
    }
    public set fullyQualifiedName(value: string) {
        this._fullyQualifiedName = value;
    }
    public resetFullyQualifiedName() {
        this._fullyQualifiedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullyQualifiedNameInput() {
        return this._fullyQualifiedName;
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

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface AttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#allowed_values CcSignalCatalog#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#assigned_value CcSignalCatalog#assigned_value}
    */
    readonly assignedValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#data_type CcSignalCatalog#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#default_value CcSignalCatalog#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#description CcSignalCatalog#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name CcSignalCatalog#fully_qualified_name}
    */
    readonly fullyQualifiedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#max CcSignalCatalog#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#min CcSignalCatalog#min}
    */
    readonly min?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#unit CcSignalCatalog#unit}
    */
    readonly unit?: string;
}
export class AttributePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._assignedValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.assignedValue = this._assignedValue;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._fullyQualifiedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
        }
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._assignedValue = undefined;
            this._dataType = undefined;
            this._defaultValue = undefined;
            this._description = undefined;
            this._fullyQualifiedName = undefined;
            this._max = undefined;
            this._min = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._assignedValue = value.assignedValue;
            this._dataType = value.dataType;
            this._defaultValue = value.defaultValue;
            this._description = value.description;
            this._fullyQualifiedName = value.fullyQualifiedName;
            this._max = value.max;
            this._min = value.min;
            this._unit = value.unit;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // assigned_value - computed: true, optional: true, required: false
    private _assignedValue?: string; 
    public get assignedValue() {
        return this.getStringAttribute('assigned_value');
    }
    public set assignedValue(value: string) {
        this._assignedValue = value;
    }
    public resetAssignedValue() {
        this._assignedValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignedValueInput() {
        return this._assignedValue;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // fully_qualified_name - computed: true, optional: true, required: false
    private _fullyQualifiedName?: string; 
    public get fullyQualifiedName() {
        return this.getStringAttribute('fully_qualified_name');
    }
    public set fullyQualifiedName(value: string) {
        this._fullyQualifiedName = value;
    }
    public resetFullyQualifiedName() {
        this._fullyQualifiedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullyQualifiedNameInput() {
        return this._fullyQualifiedName;
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

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface BranchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#description CcSignalCatalog#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name CcSignalCatalog#fully_qualified_name}
    */
    readonly fullyQualifiedName?: string;
}
export class BranchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BranchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._fullyQualifiedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BranchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._fullyQualifiedName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._fullyQualifiedName = value.fullyQualifiedName;
        }
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

    // fully_qualified_name - computed: true, optional: true, required: false
    private _fullyQualifiedName?: string; 
    public get fullyQualifiedName() {
        return this.getStringAttribute('fully_qualified_name');
    }
    public set fullyQualifiedName(value: string) {
        this._fullyQualifiedName = value;
    }
    public resetFullyQualifiedName() {
        this._fullyQualifiedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullyQualifiedNameInput() {
        return this._fullyQualifiedName;
    }
}
export interface SensorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#allowed_values CcSignalCatalog#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#data_type CcSignalCatalog#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#description CcSignalCatalog#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name CcSignalCatalog#fully_qualified_name}
    */
    readonly fullyQualifiedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#max CcSignalCatalog#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#min CcSignalCatalog#min}
    */
    readonly min?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#unit CcSignalCatalog#unit}
    */
    readonly unit?: string;
}
export class SensorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SensorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._fullyQualifiedName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullyQualifiedName = this._fullyQualifiedName;
        }
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SensorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._dataType = undefined;
            this._description = undefined;
            this._fullyQualifiedName = undefined;
            this._max = undefined;
            this._min = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._dataType = value.dataType;
            this._description = value.description;
            this._fullyQualifiedName = value.fullyQualifiedName;
            this._max = value.max;
            this._min = value.min;
            this._unit = value.unit;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
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

    // fully_qualified_name - computed: true, optional: true, required: false
    private _fullyQualifiedName?: string; 
    public get fullyQualifiedName() {
        return this.getStringAttribute('fully_qualified_name');
    }
    public set fullyQualifiedName(value: string) {
        this._fullyQualifiedName = value;
    }
    public resetFullyQualifiedName() {
        this._fullyQualifiedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullyQualifiedNameInput() {
        return this._fullyQualifiedName;
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

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface NodeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#actuator CcSignalCatalog#actuator}
    */
    readonly actuator?: ActuatorProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#attribute CcSignalCatalog#attribute}
    */
    readonly attribute?: AttributeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#branch CcSignalCatalog#branch}
    */
    readonly branch?: BranchProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#sensor CcSignalCatalog#sensor}
    */
    readonly sensor?: SensorProperty;
}
export class NodePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actuator?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actuator = this._actuator?.internalValue;
        }
        if (this._attribute?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute?.internalValue;
        }
        if (this._branch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.branch = this._branch?.internalValue;
        }
        if (this._sensor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensor = this._sensor?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actuator.internalValue = undefined;
            this._attribute.internalValue = undefined;
            this._branch.internalValue = undefined;
            this._sensor.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actuator.internalValue = value.actuator;
            this._attribute.internalValue = value.attribute;
            this._branch.internalValue = value.branch;
            this._sensor.internalValue = value.sensor;
        }
    }

    // actuator - computed: true, optional: true, required: false
    private _actuator = new ActuatorPropertyOutputReference(this, "actuator");
    public get actuator() {
        return this._actuator;
    }
    public putActuator(value: ActuatorProperty) {
        this._actuator.internalValue = value;
    }
    public resetActuator() {
        this._actuator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actuatorInput() {
        return this._actuator.internalValue;
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute = new AttributePropertyOutputReference(this, "attribute");
    public get attribute() {
        return this._attribute;
    }
    public putAttribute(value: AttributeProperty) {
        this._attribute.internalValue = value;
    }
    public resetAttribute() {
        this._attribute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute.internalValue;
    }

    // branch - computed: true, optional: true, required: false
    private _branch = new BranchPropertyOutputReference(this, "branch");
    public get branch() {
        return this._branch;
    }
    public putBranch(value: BranchProperty) {
        this._branch.internalValue = value;
    }
    public resetBranch() {
        this._branch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchInput() {
        return this._branch.internalValue;
    }

    // sensor - computed: true, optional: true, required: false
    private _sensor = new SensorPropertyOutputReference(this, "sensor");
    public get sensor() {
        return this._sensor;
    }
    public putSensor(value: SensorProperty) {
        this._sensor.internalValue = value;
    }
    public resetSensor() {
        this._sensor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sensorInput() {
        return this._sensor.internalValue;
    }
}

export class NodePropertyList extends cdktn.ComplexList {
    public internalValue? : NodeProperty[] | cdktn.IResolvable

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
    public get(index: number): NodePropertyOutputReference {
        return new NodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#key CcSignalCatalog#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_signal_catalog#value CcSignalCatalog#value}
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
