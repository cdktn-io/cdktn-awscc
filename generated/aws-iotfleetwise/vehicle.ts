// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVehicleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#association_behavior CcVehicle#association_behavior}
    */
    readonly associationBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#attributes CcVehicle#attributes}
    */
    readonly attributes?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#decoder_manifest_arn CcVehicle#decoder_manifest_arn}
    */
    readonly decoderManifestArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#model_manifest_arn CcVehicle#model_manifest_arn}
    */
    readonly modelManifestArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#name CcVehicle#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#state_templates CcVehicle#state_templates}
    */
    readonly stateTemplates?: CcVehicle.StateTemplateAssociationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#tags CcVehicle#tags}
    */
    readonly tags?: CcVehicle.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle}
*/
export class CcVehicle extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotfleetwise_vehicle";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVehicle resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVehicle to import
    * @param importFromId The id of the existing CcVehicle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVehicle to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_vehicle", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVehicleProps
    */
    public constructor(scope: Construct, id: string, config: CcVehicleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotfleetwise_vehicle',
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
        this._associationBehavior = config.associationBehavior;
        this._attributes = config.attributes;
        this._decoderManifestArn = config.decoderManifestArn;
        this._modelManifestArn = config.modelManifestArn;
        this._name = config.name;
        this._stateTemplates.internalValue = config.stateTemplates;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // association_behavior - computed: true, optional: true, required: false
    private _associationBehavior?: string; 
    public get associationBehavior() {
        return this.getStringAttribute('association_behavior');
    }
    public set associationBehavior(value: string) {
        this._associationBehavior = value;
    }
    public resetAssociationBehavior() {
        this._associationBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationBehaviorInput() {
        return this._associationBehavior;
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes?: { [key: string]: string }; 
    public get attributes() {
        return this.getStringMapAttribute('attributes');
    }
    public set attributes(value: { [key: string]: string }) {
        this._attributes = value;
    }
    public resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // decoder_manifest_arn - computed: false, optional: false, required: true
    private _decoderManifestArn?: string; 
    public get decoderManifestArn() {
        return this.getStringAttribute('decoder_manifest_arn');
    }
    public set decoderManifestArn(value: string) {
        this._decoderManifestArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get decoderManifestArnInput() {
        return this._decoderManifestArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modification_time - computed: true, optional: false, required: false
    public get lastModificationTime() {
        return this.getStringAttribute('last_modification_time');
    }

    // model_manifest_arn - computed: false, optional: false, required: true
    private _modelManifestArn?: string; 
    public get modelManifestArn() {
        return this.getStringAttribute('model_manifest_arn');
    }
    public set modelManifestArn(value: string) {
        this._modelManifestArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelManifestArnInput() {
        return this._modelManifestArn;
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

    // state_templates - computed: true, optional: true, required: false
    private _stateTemplates = new CcVehicle.StateTemplateAssociationPropertyList(this, "state_templates", true);
    public get stateTemplates() {
        return this._stateTemplates;
    }
    public putStateTemplates(value: CcVehicle.StateTemplateAssociationProperty[] | cdktn.IResolvable) {
        this._stateTemplates.internalValue = value;
    }
    public resetStateTemplates() {
        this._stateTemplates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateTemplatesInput() {
        return this._stateTemplates.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVehicle.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVehicle.TagProperty[] | cdktn.IResolvable) {
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
            association_behavior: cdktn.stringToTerraform(this._associationBehavior),
            attributes: cdktn.hashMapper(cdktn.stringToTerraform)(this._attributes),
            decoder_manifest_arn: cdktn.stringToTerraform(this._decoderManifestArn),
            model_manifest_arn: cdktn.stringToTerraform(this._modelManifestArn),
            name: cdktn.stringToTerraform(this._name),
            state_templates: cdktn.listMapper(ccVehicleStateTemplateAssociationPropertyToTerraform, false)(this._stateTemplates.internalValue),
            tags: cdktn.listMapper(ccVehicleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            association_behavior: {
                value: cdktn.stringToHclTerraform(this._associationBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            attributes: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._attributes),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            decoder_manifest_arn: {
                value: cdktn.stringToHclTerraform(this._decoderManifestArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_manifest_arn: {
                value: cdktn.stringToHclTerraform(this._modelManifestArn),
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
            state_templates: {
                value: cdktn.listMapperHcl(ccVehicleStateTemplateAssociationPropertyToHclTerraform, false)(this._stateTemplates.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVehicle.StateTemplateAssociationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVehicleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVehicle.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVehicleTimePeriodPropertyToTerraform(struct?: CcVehicle.TimePeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVehicleTimePeriodPropertyToHclTerraform(struct?: CcVehicle.TimePeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVehiclePeriodicStateTemplateUpdateStrategyPropertyToTerraform(struct?: CcVehicle.PeriodicStateTemplateUpdateStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state_template_update_rate: ccVehicleTimePeriodPropertyToTerraform(struct!.stateTemplateUpdateRate),
    }
}


export function ccVehiclePeriodicStateTemplateUpdateStrategyPropertyToHclTerraform(struct?: CcVehicle.PeriodicStateTemplateUpdateStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state_template_update_rate: {
            value: ccVehicleTimePeriodPropertyToHclTerraform(struct!.stateTemplateUpdateRate),
            isBlock: true,
            type: "struct",
            storageClassType: "TimePeriodProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVehicleStateTemplateUpdateStrategyPropertyToTerraform(struct?: CcVehicle.StateTemplateUpdateStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_change: cdktn.stringToTerraform(struct!.onChange),
        periodic: ccVehiclePeriodicStateTemplateUpdateStrategyPropertyToTerraform(struct!.periodic),
    }
}


export function ccVehicleStateTemplateUpdateStrategyPropertyToHclTerraform(struct?: CcVehicle.StateTemplateUpdateStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_change: {
            value: cdktn.stringToHclTerraform(struct!.onChange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        periodic: {
            value: ccVehiclePeriodicStateTemplateUpdateStrategyPropertyToHclTerraform(struct!.periodic),
            isBlock: true,
            type: "struct",
            storageClassType: "PeriodicStateTemplateUpdateStrategyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVehicleStateTemplateAssociationPropertyToTerraform(struct?: CcVehicle.StateTemplateAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identifier: cdktn.stringToTerraform(struct!.identifier),
        state_template_update_strategy: ccVehicleStateTemplateUpdateStrategyPropertyToTerraform(struct!.stateTemplateUpdateStrategy),
    }
}


export function ccVehicleStateTemplateAssociationPropertyToHclTerraform(struct?: CcVehicle.StateTemplateAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identifier: {
            value: cdktn.stringToHclTerraform(struct!.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_template_update_strategy: {
            value: ccVehicleStateTemplateUpdateStrategyPropertyToHclTerraform(struct!.stateTemplateUpdateStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "StateTemplateUpdateStrategyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVehicleTagPropertyToTerraform(struct?: CcVehicle.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVehicleTagPropertyToHclTerraform(struct?: CcVehicle.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVehicle {
export interface TimePeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#unit CcVehicle#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#value CcVehicle#value}
    */
    readonly value?: number;
}
export class TimePeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimePeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimePeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface PeriodicStateTemplateUpdateStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#state_template_update_rate CcVehicle#state_template_update_rate}
    */
    readonly stateTemplateUpdateRate?: TimePeriodProperty;
}
export class PeriodicStateTemplateUpdateStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PeriodicStateTemplateUpdateStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stateTemplateUpdateRate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateTemplateUpdateRate = this._stateTemplateUpdateRate?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PeriodicStateTemplateUpdateStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stateTemplateUpdateRate.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stateTemplateUpdateRate.internalValue = value.stateTemplateUpdateRate;
        }
    }

    // state_template_update_rate - computed: true, optional: true, required: false
    private _stateTemplateUpdateRate = new TimePeriodPropertyOutputReference(this, "state_template_update_rate");
    public get stateTemplateUpdateRate() {
        return this._stateTemplateUpdateRate;
    }
    public putStateTemplateUpdateRate(value: TimePeriodProperty) {
        this._stateTemplateUpdateRate.internalValue = value;
    }
    public resetStateTemplateUpdateRate() {
        this._stateTemplateUpdateRate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateTemplateUpdateRateInput() {
        return this._stateTemplateUpdateRate.internalValue;
    }
}
export interface StateTemplateUpdateStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#on_change CcVehicle#on_change}
    */
    readonly onChange?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#periodic CcVehicle#periodic}
    */
    readonly periodic?: PeriodicStateTemplateUpdateStrategyProperty;
}
export class StateTemplateUpdateStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StateTemplateUpdateStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onChange !== undefined) {
            hasAnyValues = true;
            internalValueResult.onChange = this._onChange;
        }
        if (this._periodic?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodic = this._periodic?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StateTemplateUpdateStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onChange = undefined;
            this._periodic.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onChange = value.onChange;
            this._periodic.internalValue = value.periodic;
        }
    }

    // on_change - computed: true, optional: true, required: false
    private _onChange?: string; 
    public get onChange() {
        return this.getStringAttribute('on_change');
    }
    public set onChange(value: string) {
        this._onChange = value;
    }
    public resetOnChange() {
        this._onChange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onChangeInput() {
        return this._onChange;
    }

    // periodic - computed: true, optional: true, required: false
    private _periodic = new PeriodicStateTemplateUpdateStrategyPropertyOutputReference(this, "periodic");
    public get periodic() {
        return this._periodic;
    }
    public putPeriodic(value: PeriodicStateTemplateUpdateStrategyProperty) {
        this._periodic.internalValue = value;
    }
    public resetPeriodic() {
        this._periodic.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodicInput() {
        return this._periodic.internalValue;
    }
}
export interface StateTemplateAssociationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#identifier CcVehicle#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#state_template_update_strategy CcVehicle#state_template_update_strategy}
    */
    readonly stateTemplateUpdateStrategy?: StateTemplateUpdateStrategyProperty;
}
export class StateTemplateAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StateTemplateAssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifier = this._identifier;
        }
        if (this._stateTemplateUpdateStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateTemplateUpdateStrategy = this._stateTemplateUpdateStrategy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StateTemplateAssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identifier = undefined;
            this._stateTemplateUpdateStrategy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identifier = value.identifier;
            this._stateTemplateUpdateStrategy.internalValue = value.stateTemplateUpdateStrategy;
        }
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    public resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
    }

    // state_template_update_strategy - computed: true, optional: true, required: false
    private _stateTemplateUpdateStrategy = new StateTemplateUpdateStrategyPropertyOutputReference(this, "state_template_update_strategy");
    public get stateTemplateUpdateStrategy() {
        return this._stateTemplateUpdateStrategy;
    }
    public putStateTemplateUpdateStrategy(value: StateTemplateUpdateStrategyProperty) {
        this._stateTemplateUpdateStrategy.internalValue = value;
    }
    public resetStateTemplateUpdateStrategy() {
        this._stateTemplateUpdateStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateTemplateUpdateStrategyInput() {
        return this._stateTemplateUpdateStrategy.internalValue;
    }
}

export class StateTemplateAssociationPropertyList extends cdktn.ComplexList {
    public internalValue? : StateTemplateAssociationProperty[] | cdktn.IResolvable

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
    public get(index: number): StateTemplateAssociationPropertyOutputReference {
        return new StateTemplateAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#key CcVehicle#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotfleetwise_vehicle#value CcVehicle#value}
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
