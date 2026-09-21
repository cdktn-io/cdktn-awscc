// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExperimentRunProps extends cdktn.TerraformMetaArguments {
    /**
    * The application name or ID used to create the experiment run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#application_identifier CcExperimentRun#application_identifier}
    */
    readonly applicationIdentifier: string;
    /**
    * Description of the experiment run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#description CcExperimentRun#description}
    */
    readonly description?: string;
    /**
    * The experiment definition name or ID used to create the experiment run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#experiment_definition_identifier CcExperimentRun#experiment_definition_identifier}
    */
    readonly experimentDefinitionIdentifier: string;
    /**
    * Percentage of traffic exposed to the experiment (0-100).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#exposure_percentage CcExperimentRun#exposure_percentage}
    */
    readonly exposurePercentage: number;
    /**
    * Tags to associate with the experiment run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#tags CcExperimentRun#tags}
    */
    readonly tags?: CcExperimentRun.TagsProperty[] | cdktn.IResolvable;
    /**
    * Treatment overrides for specific entities.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#treatment_overrides CcExperimentRun#treatment_overrides}
    */
    readonly treatmentOverrides?: CcExperimentRun.TreatmentOverridesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run awscc_appconfig_experiment_run}
*/
export class CcExperimentRun extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_experiment_run";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExperimentRun resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExperimentRun to import
    * @param importFromId The id of the existing CcExperimentRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExperimentRun to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_experiment_run", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run awscc_appconfig_experiment_run} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExperimentRunProps
    */
    public constructor(scope: Construct, id: string, config: CcExperimentRunProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_experiment_run',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._applicationIdentifier = config.applicationIdentifier;
        this._description = config.description;
        this._experimentDefinitionIdentifier = config.experimentDefinitionIdentifier;
        this._exposurePercentage = config.exposurePercentage;
        this._tags.internalValue = config.tags;
        this._treatmentOverrides.internalValue = config.treatmentOverrides;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }

    // application_identifier - computed: false, optional: false, required: true
    private _applicationIdentifier?: string; 
    public get applicationIdentifier() {
        return this.getStringAttribute('application_identifier');
    }
    public set applicationIdentifier(value: string) {
        this._applicationIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdentifierInput() {
        return this._applicationIdentifier;
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

    // experiment_definition_id - computed: true, optional: false, required: false
    public get experimentDefinitionId() {
        return this.getStringAttribute('experiment_definition_id');
    }

    // experiment_definition_identifier - computed: false, optional: false, required: true
    private _experimentDefinitionIdentifier?: string; 
    public get experimentDefinitionIdentifier() {
        return this.getStringAttribute('experiment_definition_identifier');
    }
    public set experimentDefinitionIdentifier(value: string) {
        this._experimentDefinitionIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get experimentDefinitionIdentifierInput() {
        return this._experimentDefinitionIdentifier;
    }

    // exposure_percentage - computed: false, optional: false, required: true
    private _exposurePercentage?: number; 
    public get exposurePercentage() {
        return this.getNumberAttribute('exposure_percentage');
    }
    public set exposurePercentage(value: number) {
        this._exposurePercentage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exposurePercentageInput() {
        return this._exposurePercentage;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // run - computed: true, optional: false, required: false
    public get run() {
        return this.getStringAttribute('run');
    }

    // started_at - computed: true, optional: false, required: false
    public get startedAt() {
        return this.getStringAttribute('started_at');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcExperimentRun.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcExperimentRun.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // treatment_overrides - computed: true, optional: true, required: false
    private _treatmentOverrides = new CcExperimentRun.TreatmentOverridesPropertyOutputReference(this, "treatment_overrides");
    public get treatmentOverrides() {
        return this._treatmentOverrides;
    }
    public putTreatmentOverrides(value: CcExperimentRun.TreatmentOverridesProperty) {
        this._treatmentOverrides.internalValue = value;
    }
    public resetTreatmentOverrides() {
        this._treatmentOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get treatmentOverridesInput() {
        return this._treatmentOverrides.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_identifier: cdktn.stringToTerraform(this._applicationIdentifier),
            description: cdktn.stringToTerraform(this._description),
            experiment_definition_identifier: cdktn.stringToTerraform(this._experimentDefinitionIdentifier),
            exposure_percentage: cdktn.numberToTerraform(this._exposurePercentage),
            tags: cdktn.listMapper(ccExperimentRunTagsPropertyToTerraform, false)(this._tags.internalValue),
            treatment_overrides: ccExperimentRunTreatmentOverridesPropertyToTerraform(this._treatmentOverrides.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_identifier: {
                value: cdktn.stringToHclTerraform(this._applicationIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            experiment_definition_identifier: {
                value: cdktn.stringToHclTerraform(this._experimentDefinitionIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exposure_percentage: {
                value: cdktn.numberToHclTerraform(this._exposurePercentage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccExperimentRunTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcExperimentRun.TagsPropertyList",
            },
            treatment_overrides: {
                value: ccExperimentRunTreatmentOverridesPropertyToHclTerraform(this._treatmentOverrides.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperimentRun.TreatmentOverridesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExperimentRunTagsPropertyToTerraform(struct?: CcExperimentRun.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExperimentRunTagsPropertyToHclTerraform(struct?: CcExperimentRun.TagsProperty | cdktn.IResolvable): any {
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


export function ccExperimentRunTreatmentOverridesPropertyToTerraform(struct?: CcExperimentRun.TreatmentOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inline: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.inline),
    }
}


export function ccExperimentRunTreatmentOverridesPropertyToHclTerraform(struct?: CcExperimentRun.TreatmentOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inline: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.inline),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcExperimentRun {
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#key CcExperimentRun#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#value CcExperimentRun#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TreatmentOverridesProperty {
    /**
    * Map of entity ID to treatment key (t1, t2, ..., or c for control).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/appconfig_experiment_run#inline CcExperimentRun#inline}
    */
    readonly inline?: { [key: string]: string };
}
export class TreatmentOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TreatmentOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inline !== undefined) {
            hasAnyValues = true;
            internalValueResult.inline = this._inline;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TreatmentOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inline = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inline = value.inline;
        }
    }

    // inline - computed: true, optional: true, required: false
    private _inline?: { [key: string]: string }; 
    public get inline() {
        return this.getStringMapAttribute('inline');
    }
    public set inline(value: { [key: string]: string }) {
        this._inline = value;
    }
    public resetInline() {
        this._inline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineInput() {
        return this._inline;
    }
}
}
