// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * Findings filter description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#description CcFilter#description}
    */
    readonly description?: string;
    /**
    * Findings filter action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#filter_action CcFilter#filter_action}
    */
    readonly filterAction: string;
    /**
    * Findings filter criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#filter_criteria CcFilter#filter_criteria}
    */
    readonly filterCriteria: CcFilter.FilterCriteriaProperty;
    /**
    * Findings filter name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#name CcFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#tags CcFilter#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter awscc_inspectorv2_filter}
*/
export class CcFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspectorv2_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFilter to import
    * @param importFromId The id of the existing CcFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter awscc_inspectorv2_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspectorv2_filter',
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
        this._filterAction = config.filterAction;
        this._filterCriteria.internalValue = config.filterCriteria;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // filter_action - computed: false, optional: false, required: true
    private _filterAction?: string; 
    public get filterAction() {
        return this.getStringAttribute('filter_action');
    }
    public set filterAction(value: string) {
        this._filterAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterActionInput() {
        return this._filterAction;
    }

    // filter_criteria - computed: false, optional: false, required: true
    private _filterCriteria = new CcFilter.FilterCriteriaPropertyOutputReference(this, "filter_criteria");
    public get filterCriteria() {
        return this._filterCriteria;
    }
    public putFilterCriteria(value: CcFilter.FilterCriteriaProperty) {
        this._filterCriteria.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterCriteriaInput() {
        return this._filterCriteria.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
            description: cdktn.stringToTerraform(this._description),
            filter_action: cdktn.stringToTerraform(this._filterAction),
            filter_criteria: ccFilterFilterCriteriaPropertyToTerraform(this._filterCriteria.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
            filter_action: {
                value: cdktn.stringToHclTerraform(this._filterAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_criteria: {
                value: ccFilterFilterCriteriaPropertyToHclTerraform(this._filterCriteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFilter.FilterCriteriaProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccFilterStringFilterPropertyToTerraform(struct?: CcFilter.StringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterStringFilterPropertyToHclTerraform(struct?: CcFilter.StringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterCodeVulnerabilityDetectorNamePropertyToTerraform(struct?: CcFilter.CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterCodeVulnerabilityDetectorNamePropertyToHclTerraform(struct?: CcFilter.CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterCodeVulnerabilityDetectorTagsPropertyToTerraform(struct?: CcFilter.CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterCodeVulnerabilityDetectorTagsPropertyToHclTerraform(struct?: CcFilter.CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterCodeVulnerabilityFilePathPropertyToTerraform(struct?: CcFilter.CodeVulnerabilityFilePathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterCodeVulnerabilityFilePathPropertyToHclTerraform(struct?: CcFilter.CodeVulnerabilityFilePathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterComponentIdPropertyToTerraform(struct?: CcFilter.ComponentIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterComponentIdPropertyToHclTerraform(struct?: CcFilter.ComponentIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterComponentTypePropertyToTerraform(struct?: CcFilter.ComponentTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterComponentTypePropertyToHclTerraform(struct?: CcFilter.ComponentTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEc2InstanceImageIdPropertyToTerraform(struct?: CcFilter.Ec2InstanceImageIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEc2InstanceImageIdPropertyToHclTerraform(struct?: CcFilter.Ec2InstanceImageIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEc2InstanceSubnetIdPropertyToTerraform(struct?: CcFilter.Ec2InstanceSubnetIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEc2InstanceSubnetIdPropertyToHclTerraform(struct?: CcFilter.Ec2InstanceSubnetIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEc2InstanceVpcIdPropertyToTerraform(struct?: CcFilter.Ec2InstanceVpcIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEc2InstanceVpcIdPropertyToHclTerraform(struct?: CcFilter.Ec2InstanceVpcIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEcrImageArchitecturePropertyToTerraform(struct?: CcFilter.EcrImageArchitectureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEcrImageArchitecturePropertyToHclTerraform(struct?: CcFilter.EcrImageArchitectureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEcrImageHashPropertyToTerraform(struct?: CcFilter.EcrImageHashProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEcrImageHashPropertyToHclTerraform(struct?: CcFilter.EcrImageHashProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterDateFilterPropertyToTerraform(struct?: CcFilter.DateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
        start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
    }
}


export function ccFilterDateFilterPropertyToHclTerraform(struct?: CcFilter.DateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.endInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.startInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterEcrImageRegistryPropertyToTerraform(struct?: CcFilter.EcrImageRegistryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEcrImageRegistryPropertyToHclTerraform(struct?: CcFilter.EcrImageRegistryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEcrImageRepositoryNamePropertyToTerraform(struct?: CcFilter.EcrImageRepositoryNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEcrImageRepositoryNamePropertyToHclTerraform(struct?: CcFilter.EcrImageRepositoryNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEcrImageTagsPropertyToTerraform(struct?: CcFilter.EcrImageTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterEcrImageTagsPropertyToHclTerraform(struct?: CcFilter.EcrImageTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterNumberFilterPropertyToTerraform(struct?: CcFilter.NumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
        upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
    }
}


export function ccFilterNumberFilterPropertyToHclTerraform(struct?: CcFilter.NumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lower_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        upper_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.upperInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterExploitAvailablePropertyToTerraform(struct?: CcFilter.ExploitAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterExploitAvailablePropertyToHclTerraform(struct?: CcFilter.ExploitAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterFindingArnPropertyToTerraform(struct?: CcFilter.FindingArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterFindingArnPropertyToHclTerraform(struct?: CcFilter.FindingArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterFindingStatusPropertyToTerraform(struct?: CcFilter.FindingStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterFindingStatusPropertyToHclTerraform(struct?: CcFilter.FindingStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterFindingTypePropertyToTerraform(struct?: CcFilter.FindingTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterFindingTypePropertyToHclTerraform(struct?: CcFilter.FindingTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterFirstObservedAtPropertyToTerraform(struct?: CcFilter.FirstObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
        start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
    }
}


export function ccFilterFirstObservedAtPropertyToHclTerraform(struct?: CcFilter.FirstObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.endInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.startInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterFixAvailablePropertyToTerraform(struct?: CcFilter.FixAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterFixAvailablePropertyToHclTerraform(struct?: CcFilter.FixAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterInspectorScorePropertyToTerraform(struct?: CcFilter.InspectorScoreProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
        upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
    }
}


export function ccFilterInspectorScorePropertyToHclTerraform(struct?: CcFilter.InspectorScoreProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lower_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        upper_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.upperInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterLambdaFunctionExecutionRoleArnPropertyToTerraform(struct?: CcFilter.LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterLambdaFunctionExecutionRoleArnPropertyToHclTerraform(struct?: CcFilter.LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterLambdaFunctionLastModifiedAtPropertyToTerraform(struct?: CcFilter.LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
        start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
    }
}


export function ccFilterLambdaFunctionLastModifiedAtPropertyToHclTerraform(struct?: CcFilter.LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.endInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.startInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterLambdaFunctionLayersPropertyToTerraform(struct?: CcFilter.LambdaFunctionLayersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterLambdaFunctionLayersPropertyToHclTerraform(struct?: CcFilter.LambdaFunctionLayersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterLambdaFunctionNamePropertyToTerraform(struct?: CcFilter.LambdaFunctionNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterLambdaFunctionNamePropertyToHclTerraform(struct?: CcFilter.LambdaFunctionNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterLambdaFunctionRuntimePropertyToTerraform(struct?: CcFilter.LambdaFunctionRuntimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterLambdaFunctionRuntimePropertyToHclTerraform(struct?: CcFilter.LambdaFunctionRuntimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterLastObservedAtPropertyToTerraform(struct?: CcFilter.LastObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
        start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
    }
}


export function ccFilterLastObservedAtPropertyToHclTerraform(struct?: CcFilter.LastObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.endInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.startInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterNetworkProtocolPropertyToTerraform(struct?: CcFilter.NetworkProtocolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterNetworkProtocolPropertyToHclTerraform(struct?: CcFilter.NetworkProtocolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterPortRangeFilterPropertyToTerraform(struct?: CcFilter.PortRangeFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        begin_inclusive: cdktn.numberToTerraform(struct!.beginInclusive),
        end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
    }
}


export function ccFilterPortRangeFilterPropertyToHclTerraform(struct?: CcFilter.PortRangeFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        begin_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.beginInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        end_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.endInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterRelatedVulnerabilitiesPropertyToTerraform(struct?: CcFilter.RelatedVulnerabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterRelatedVulnerabilitiesPropertyToHclTerraform(struct?: CcFilter.RelatedVulnerabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterResourceIdPropertyToTerraform(struct?: CcFilter.ResourceIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterResourceIdPropertyToHclTerraform(struct?: CcFilter.ResourceIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterMapFilterPropertyToTerraform(struct?: CcFilter.MapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterMapFilterPropertyToHclTerraform(struct?: CcFilter.MapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccFilterResourceTypePropertyToTerraform(struct?: CcFilter.ResourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterResourceTypePropertyToHclTerraform(struct?: CcFilter.ResourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterSeverityPropertyToTerraform(struct?: CcFilter.SeverityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterSeverityPropertyToHclTerraform(struct?: CcFilter.SeverityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterTitlePropertyToTerraform(struct?: CcFilter.TitleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterTitlePropertyToHclTerraform(struct?: CcFilter.TitleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterUpdatedAtPropertyToTerraform(struct?: CcFilter.UpdatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
        start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
    }
}


export function ccFilterUpdatedAtPropertyToHclTerraform(struct?: CcFilter.UpdatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.endInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.startInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterVendorSeverityPropertyToTerraform(struct?: CcFilter.VendorSeverityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterVendorSeverityPropertyToHclTerraform(struct?: CcFilter.VendorSeverityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterVulnerabilityIdPropertyToTerraform(struct?: CcFilter.VulnerabilityIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterVulnerabilityIdPropertyToHclTerraform(struct?: CcFilter.VulnerabilityIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterVulnerabilitySourcePropertyToTerraform(struct?: CcFilter.VulnerabilitySourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterVulnerabilitySourcePropertyToHclTerraform(struct?: CcFilter.VulnerabilitySourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterArchitecturePropertyToTerraform(struct?: CcFilter.ArchitectureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterArchitecturePropertyToHclTerraform(struct?: CcFilter.ArchitectureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterEpochPropertyToTerraform(struct?: CcFilter.EpochProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
        upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
    }
}


export function ccFilterEpochPropertyToHclTerraform(struct?: CcFilter.EpochProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lower_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        upper_inclusive: {
            value: cdktn.numberToHclTerraform(struct!.upperInclusive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterFilePathPropertyToTerraform(struct?: CcFilter.FilePathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterFilePathPropertyToHclTerraform(struct?: CcFilter.FilePathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterNamePropertyToTerraform(struct?: CcFilter.NameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterNamePropertyToHclTerraform(struct?: CcFilter.NameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterReleasePropertyToTerraform(struct?: CcFilter.ReleaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterReleasePropertyToHclTerraform(struct?: CcFilter.ReleaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterSourceLambdaLayerArnPropertyToTerraform(struct?: CcFilter.SourceLambdaLayerArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterSourceLambdaLayerArnPropertyToHclTerraform(struct?: CcFilter.SourceLambdaLayerArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterSourceLayerHashPropertyToTerraform(struct?: CcFilter.SourceLayerHashProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterSourceLayerHashPropertyToHclTerraform(struct?: CcFilter.SourceLayerHashProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterVersionPropertyToTerraform(struct?: CcFilter.VersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFilterVersionPropertyToHclTerraform(struct?: CcFilter.VersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccFilterPackageFilterPropertyToTerraform(struct?: CcFilter.PackageFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        architecture: ccFilterArchitecturePropertyToTerraform(struct!.architecture),
        epoch: ccFilterEpochPropertyToTerraform(struct!.epoch),
        file_path: ccFilterFilePathPropertyToTerraform(struct!.filePath),
        name: ccFilterNamePropertyToTerraform(struct!.name),
        release: ccFilterReleasePropertyToTerraform(struct!.release),
        source_lambda_layer_arn: ccFilterSourceLambdaLayerArnPropertyToTerraform(struct!.sourceLambdaLayerArn),
        source_layer_hash: ccFilterSourceLayerHashPropertyToTerraform(struct!.sourceLayerHash),
        version: ccFilterVersionPropertyToTerraform(struct!.version),
    }
}


export function ccFilterPackageFilterPropertyToHclTerraform(struct?: CcFilter.PackageFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        architecture: {
            value: ccFilterArchitecturePropertyToHclTerraform(struct!.architecture),
            isBlock: true,
            type: "struct",
            storageClassType: "ArchitectureProperty",
        },
        epoch: {
            value: ccFilterEpochPropertyToHclTerraform(struct!.epoch),
            isBlock: true,
            type: "struct",
            storageClassType: "EpochProperty",
        },
        file_path: {
            value: ccFilterFilePathPropertyToHclTerraform(struct!.filePath),
            isBlock: true,
            type: "struct",
            storageClassType: "FilePathProperty",
        },
        name: {
            value: ccFilterNamePropertyToHclTerraform(struct!.name),
            isBlock: true,
            type: "struct",
            storageClassType: "NameProperty",
        },
        release: {
            value: ccFilterReleasePropertyToHclTerraform(struct!.release),
            isBlock: true,
            type: "struct",
            storageClassType: "ReleaseProperty",
        },
        source_lambda_layer_arn: {
            value: ccFilterSourceLambdaLayerArnPropertyToHclTerraform(struct!.sourceLambdaLayerArn),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceLambdaLayerArnProperty",
        },
        source_layer_hash: {
            value: ccFilterSourceLayerHashPropertyToHclTerraform(struct!.sourceLayerHash),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceLayerHashProperty",
        },
        version: {
            value: ccFilterVersionPropertyToHclTerraform(struct!.version),
            isBlock: true,
            type: "struct",
            storageClassType: "VersionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFilterFilterCriteriaPropertyToTerraform(struct?: CcFilter.FilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_account_id: cdktn.listMapper(ccFilterStringFilterPropertyToTerraform, false)(struct!.awsAccountId),
        code_vulnerability_detector_name: cdktn.listMapper(ccFilterCodeVulnerabilityDetectorNamePropertyToTerraform, false)(struct!.codeVulnerabilityDetectorName),
        code_vulnerability_detector_tags: cdktn.listMapper(ccFilterCodeVulnerabilityDetectorTagsPropertyToTerraform, false)(struct!.codeVulnerabilityDetectorTags),
        code_vulnerability_file_path: cdktn.listMapper(ccFilterCodeVulnerabilityFilePathPropertyToTerraform, false)(struct!.codeVulnerabilityFilePath),
        component_id: cdktn.listMapper(ccFilterComponentIdPropertyToTerraform, false)(struct!.componentId),
        component_type: cdktn.listMapper(ccFilterComponentTypePropertyToTerraform, false)(struct!.componentType),
        ec_2_instance_image_id: cdktn.listMapper(ccFilterEc2InstanceImageIdPropertyToTerraform, false)(struct!.ec2InstanceImageId),
        ec_2_instance_subnet_id: cdktn.listMapper(ccFilterEc2InstanceSubnetIdPropertyToTerraform, false)(struct!.ec2InstanceSubnetId),
        ec_2_instance_vpc_id: cdktn.listMapper(ccFilterEc2InstanceVpcIdPropertyToTerraform, false)(struct!.ec2InstanceVpcId),
        ecr_image_architecture: cdktn.listMapper(ccFilterEcrImageArchitecturePropertyToTerraform, false)(struct!.ecrImageArchitecture),
        ecr_image_hash: cdktn.listMapper(ccFilterEcrImageHashPropertyToTerraform, false)(struct!.ecrImageHash),
        ecr_image_pushed_at: cdktn.listMapper(ccFilterDateFilterPropertyToTerraform, false)(struct!.ecrImagePushedAt),
        ecr_image_registry: cdktn.listMapper(ccFilterEcrImageRegistryPropertyToTerraform, false)(struct!.ecrImageRegistry),
        ecr_image_repository_name: cdktn.listMapper(ccFilterEcrImageRepositoryNamePropertyToTerraform, false)(struct!.ecrImageRepositoryName),
        ecr_image_tags: cdktn.listMapper(ccFilterEcrImageTagsPropertyToTerraform, false)(struct!.ecrImageTags),
        epss_score: cdktn.listMapper(ccFilterNumberFilterPropertyToTerraform, false)(struct!.epssScore),
        exploit_available: cdktn.listMapper(ccFilterExploitAvailablePropertyToTerraform, false)(struct!.exploitAvailable),
        finding_arn: cdktn.listMapper(ccFilterFindingArnPropertyToTerraform, false)(struct!.findingArn),
        finding_status: cdktn.listMapper(ccFilterFindingStatusPropertyToTerraform, false)(struct!.findingStatus),
        finding_type: cdktn.listMapper(ccFilterFindingTypePropertyToTerraform, false)(struct!.findingType),
        first_observed_at: cdktn.listMapper(ccFilterFirstObservedAtPropertyToTerraform, false)(struct!.firstObservedAt),
        fix_available: cdktn.listMapper(ccFilterFixAvailablePropertyToTerraform, false)(struct!.fixAvailable),
        inspector_score: cdktn.listMapper(ccFilterInspectorScorePropertyToTerraform, false)(struct!.inspectorScore),
        lambda_function_execution_role_arn: cdktn.listMapper(ccFilterLambdaFunctionExecutionRoleArnPropertyToTerraform, false)(struct!.lambdaFunctionExecutionRoleArn),
        lambda_function_last_modified_at: cdktn.listMapper(ccFilterLambdaFunctionLastModifiedAtPropertyToTerraform, false)(struct!.lambdaFunctionLastModifiedAt),
        lambda_function_layers: cdktn.listMapper(ccFilterLambdaFunctionLayersPropertyToTerraform, false)(struct!.lambdaFunctionLayers),
        lambda_function_name: cdktn.listMapper(ccFilterLambdaFunctionNamePropertyToTerraform, false)(struct!.lambdaFunctionName),
        lambda_function_runtime: cdktn.listMapper(ccFilterLambdaFunctionRuntimePropertyToTerraform, false)(struct!.lambdaFunctionRuntime),
        last_observed_at: cdktn.listMapper(ccFilterLastObservedAtPropertyToTerraform, false)(struct!.lastObservedAt),
        network_protocol: cdktn.listMapper(ccFilterNetworkProtocolPropertyToTerraform, false)(struct!.networkProtocol),
        port_range: cdktn.listMapper(ccFilterPortRangeFilterPropertyToTerraform, false)(struct!.portRange),
        related_vulnerabilities: cdktn.listMapper(ccFilterRelatedVulnerabilitiesPropertyToTerraform, false)(struct!.relatedVulnerabilities),
        resource_id: cdktn.listMapper(ccFilterResourceIdPropertyToTerraform, false)(struct!.resourceId),
        resource_tags: cdktn.listMapper(ccFilterMapFilterPropertyToTerraform, false)(struct!.resourceTags),
        resource_type: cdktn.listMapper(ccFilterResourceTypePropertyToTerraform, false)(struct!.resourceType),
        severity: cdktn.listMapper(ccFilterSeverityPropertyToTerraform, false)(struct!.severity),
        title: cdktn.listMapper(ccFilterTitlePropertyToTerraform, false)(struct!.title),
        updated_at: cdktn.listMapper(ccFilterUpdatedAtPropertyToTerraform, false)(struct!.updatedAt),
        vendor_severity: cdktn.listMapper(ccFilterVendorSeverityPropertyToTerraform, false)(struct!.vendorSeverity),
        vulnerability_id: cdktn.listMapper(ccFilterVulnerabilityIdPropertyToTerraform, false)(struct!.vulnerabilityId),
        vulnerability_source: cdktn.listMapper(ccFilterVulnerabilitySourcePropertyToTerraform, false)(struct!.vulnerabilitySource),
        vulnerable_packages: cdktn.listMapper(ccFilterPackageFilterPropertyToTerraform, false)(struct!.vulnerablePackages),
    }
}


export function ccFilterFilterCriteriaPropertyToHclTerraform(struct?: CcFilter.FilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_account_id: {
            value: cdktn.listMapperHcl(ccFilterStringFilterPropertyToHclTerraform, false)(struct!.awsAccountId),
            isBlock: true,
            type: "list",
            storageClassType: "StringFilterPropertyList",
        },
        code_vulnerability_detector_name: {
            value: cdktn.listMapperHcl(ccFilterCodeVulnerabilityDetectorNamePropertyToHclTerraform, false)(struct!.codeVulnerabilityDetectorName),
            isBlock: true,
            type: "list",
            storageClassType: "CodeVulnerabilityDetectorNamePropertyList",
        },
        code_vulnerability_detector_tags: {
            value: cdktn.listMapperHcl(ccFilterCodeVulnerabilityDetectorTagsPropertyToHclTerraform, false)(struct!.codeVulnerabilityDetectorTags),
            isBlock: true,
            type: "list",
            storageClassType: "CodeVulnerabilityDetectorTagsPropertyList",
        },
        code_vulnerability_file_path: {
            value: cdktn.listMapperHcl(ccFilterCodeVulnerabilityFilePathPropertyToHclTerraform, false)(struct!.codeVulnerabilityFilePath),
            isBlock: true,
            type: "list",
            storageClassType: "CodeVulnerabilityFilePathPropertyList",
        },
        component_id: {
            value: cdktn.listMapperHcl(ccFilterComponentIdPropertyToHclTerraform, false)(struct!.componentId),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentIdPropertyList",
        },
        component_type: {
            value: cdktn.listMapperHcl(ccFilterComponentTypePropertyToHclTerraform, false)(struct!.componentType),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentTypePropertyList",
        },
        ec_2_instance_image_id: {
            value: cdktn.listMapperHcl(ccFilterEc2InstanceImageIdPropertyToHclTerraform, false)(struct!.ec2InstanceImageId),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2InstanceImageIdPropertyList",
        },
        ec_2_instance_subnet_id: {
            value: cdktn.listMapperHcl(ccFilterEc2InstanceSubnetIdPropertyToHclTerraform, false)(struct!.ec2InstanceSubnetId),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2InstanceSubnetIdPropertyList",
        },
        ec_2_instance_vpc_id: {
            value: cdktn.listMapperHcl(ccFilterEc2InstanceVpcIdPropertyToHclTerraform, false)(struct!.ec2InstanceVpcId),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2InstanceVpcIdPropertyList",
        },
        ecr_image_architecture: {
            value: cdktn.listMapperHcl(ccFilterEcrImageArchitecturePropertyToHclTerraform, false)(struct!.ecrImageArchitecture),
            isBlock: true,
            type: "list",
            storageClassType: "EcrImageArchitecturePropertyList",
        },
        ecr_image_hash: {
            value: cdktn.listMapperHcl(ccFilterEcrImageHashPropertyToHclTerraform, false)(struct!.ecrImageHash),
            isBlock: true,
            type: "list",
            storageClassType: "EcrImageHashPropertyList",
        },
        ecr_image_pushed_at: {
            value: cdktn.listMapperHcl(ccFilterDateFilterPropertyToHclTerraform, false)(struct!.ecrImagePushedAt),
            isBlock: true,
            type: "list",
            storageClassType: "DateFilterPropertyList",
        },
        ecr_image_registry: {
            value: cdktn.listMapperHcl(ccFilterEcrImageRegistryPropertyToHclTerraform, false)(struct!.ecrImageRegistry),
            isBlock: true,
            type: "list",
            storageClassType: "EcrImageRegistryPropertyList",
        },
        ecr_image_repository_name: {
            value: cdktn.listMapperHcl(ccFilterEcrImageRepositoryNamePropertyToHclTerraform, false)(struct!.ecrImageRepositoryName),
            isBlock: true,
            type: "list",
            storageClassType: "EcrImageRepositoryNamePropertyList",
        },
        ecr_image_tags: {
            value: cdktn.listMapperHcl(ccFilterEcrImageTagsPropertyToHclTerraform, false)(struct!.ecrImageTags),
            isBlock: true,
            type: "list",
            storageClassType: "EcrImageTagsPropertyList",
        },
        epss_score: {
            value: cdktn.listMapperHcl(ccFilterNumberFilterPropertyToHclTerraform, false)(struct!.epssScore),
            isBlock: true,
            type: "list",
            storageClassType: "NumberFilterPropertyList",
        },
        exploit_available: {
            value: cdktn.listMapperHcl(ccFilterExploitAvailablePropertyToHclTerraform, false)(struct!.exploitAvailable),
            isBlock: true,
            type: "list",
            storageClassType: "ExploitAvailablePropertyList",
        },
        finding_arn: {
            value: cdktn.listMapperHcl(ccFilterFindingArnPropertyToHclTerraform, false)(struct!.findingArn),
            isBlock: true,
            type: "list",
            storageClassType: "FindingArnPropertyList",
        },
        finding_status: {
            value: cdktn.listMapperHcl(ccFilterFindingStatusPropertyToHclTerraform, false)(struct!.findingStatus),
            isBlock: true,
            type: "list",
            storageClassType: "FindingStatusPropertyList",
        },
        finding_type: {
            value: cdktn.listMapperHcl(ccFilterFindingTypePropertyToHclTerraform, false)(struct!.findingType),
            isBlock: true,
            type: "list",
            storageClassType: "FindingTypePropertyList",
        },
        first_observed_at: {
            value: cdktn.listMapperHcl(ccFilterFirstObservedAtPropertyToHclTerraform, false)(struct!.firstObservedAt),
            isBlock: true,
            type: "list",
            storageClassType: "FirstObservedAtPropertyList",
        },
        fix_available: {
            value: cdktn.listMapperHcl(ccFilterFixAvailablePropertyToHclTerraform, false)(struct!.fixAvailable),
            isBlock: true,
            type: "list",
            storageClassType: "FixAvailablePropertyList",
        },
        inspector_score: {
            value: cdktn.listMapperHcl(ccFilterInspectorScorePropertyToHclTerraform, false)(struct!.inspectorScore),
            isBlock: true,
            type: "list",
            storageClassType: "InspectorScorePropertyList",
        },
        lambda_function_execution_role_arn: {
            value: cdktn.listMapperHcl(ccFilterLambdaFunctionExecutionRoleArnPropertyToHclTerraform, false)(struct!.lambdaFunctionExecutionRoleArn),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionExecutionRoleArnPropertyList",
        },
        lambda_function_last_modified_at: {
            value: cdktn.listMapperHcl(ccFilterLambdaFunctionLastModifiedAtPropertyToHclTerraform, false)(struct!.lambdaFunctionLastModifiedAt),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionLastModifiedAtPropertyList",
        },
        lambda_function_layers: {
            value: cdktn.listMapperHcl(ccFilterLambdaFunctionLayersPropertyToHclTerraform, false)(struct!.lambdaFunctionLayers),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionLayersPropertyList",
        },
        lambda_function_name: {
            value: cdktn.listMapperHcl(ccFilterLambdaFunctionNamePropertyToHclTerraform, false)(struct!.lambdaFunctionName),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionNamePropertyList",
        },
        lambda_function_runtime: {
            value: cdktn.listMapperHcl(ccFilterLambdaFunctionRuntimePropertyToHclTerraform, false)(struct!.lambdaFunctionRuntime),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionRuntimePropertyList",
        },
        last_observed_at: {
            value: cdktn.listMapperHcl(ccFilterLastObservedAtPropertyToHclTerraform, false)(struct!.lastObservedAt),
            isBlock: true,
            type: "list",
            storageClassType: "LastObservedAtPropertyList",
        },
        network_protocol: {
            value: cdktn.listMapperHcl(ccFilterNetworkProtocolPropertyToHclTerraform, false)(struct!.networkProtocol),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkProtocolPropertyList",
        },
        port_range: {
            value: cdktn.listMapperHcl(ccFilterPortRangeFilterPropertyToHclTerraform, false)(struct!.portRange),
            isBlock: true,
            type: "list",
            storageClassType: "PortRangeFilterPropertyList",
        },
        related_vulnerabilities: {
            value: cdktn.listMapperHcl(ccFilterRelatedVulnerabilitiesPropertyToHclTerraform, false)(struct!.relatedVulnerabilities),
            isBlock: true,
            type: "list",
            storageClassType: "RelatedVulnerabilitiesPropertyList",
        },
        resource_id: {
            value: cdktn.listMapperHcl(ccFilterResourceIdPropertyToHclTerraform, false)(struct!.resourceId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceIdPropertyList",
        },
        resource_tags: {
            value: cdktn.listMapperHcl(ccFilterMapFilterPropertyToHclTerraform, false)(struct!.resourceTags),
            isBlock: true,
            type: "list",
            storageClassType: "MapFilterPropertyList",
        },
        resource_type: {
            value: cdktn.listMapperHcl(ccFilterResourceTypePropertyToHclTerraform, false)(struct!.resourceType),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceTypePropertyList",
        },
        severity: {
            value: cdktn.listMapperHcl(ccFilterSeverityPropertyToHclTerraform, false)(struct!.severity),
            isBlock: true,
            type: "list",
            storageClassType: "SeverityPropertyList",
        },
        title: {
            value: cdktn.listMapperHcl(ccFilterTitlePropertyToHclTerraform, false)(struct!.title),
            isBlock: true,
            type: "list",
            storageClassType: "TitlePropertyList",
        },
        updated_at: {
            value: cdktn.listMapperHcl(ccFilterUpdatedAtPropertyToHclTerraform, false)(struct!.updatedAt),
            isBlock: true,
            type: "list",
            storageClassType: "UpdatedAtPropertyList",
        },
        vendor_severity: {
            value: cdktn.listMapperHcl(ccFilterVendorSeverityPropertyToHclTerraform, false)(struct!.vendorSeverity),
            isBlock: true,
            type: "list",
            storageClassType: "VendorSeverityPropertyList",
        },
        vulnerability_id: {
            value: cdktn.listMapperHcl(ccFilterVulnerabilityIdPropertyToHclTerraform, false)(struct!.vulnerabilityId),
            isBlock: true,
            type: "list",
            storageClassType: "VulnerabilityIdPropertyList",
        },
        vulnerability_source: {
            value: cdktn.listMapperHcl(ccFilterVulnerabilitySourcePropertyToHclTerraform, false)(struct!.vulnerabilitySource),
            isBlock: true,
            type: "list",
            storageClassType: "VulnerabilitySourcePropertyList",
        },
        vulnerable_packages: {
            value: cdktn.listMapperHcl(ccFilterPackageFilterPropertyToHclTerraform, false)(struct!.vulnerablePackages),
            isBlock: true,
            type: "list",
            storageClassType: "PackageFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFilter {
export interface StringFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class StringFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StringFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class StringFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : StringFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): StringFilterPropertyOutputReference {
        return new StringFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CodeVulnerabilityDetectorNameProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class CodeVulnerabilityDetectorNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeVulnerabilityDetectorNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class CodeVulnerabilityDetectorNamePropertyList extends cdktn.ComplexList {
    public internalValue? : CodeVulnerabilityDetectorNameProperty[] | cdktn.IResolvable

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
    public get(index: number): CodeVulnerabilityDetectorNamePropertyOutputReference {
        return new CodeVulnerabilityDetectorNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CodeVulnerabilityDetectorTagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class CodeVulnerabilityDetectorTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeVulnerabilityDetectorTagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class CodeVulnerabilityDetectorTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : CodeVulnerabilityDetectorTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): CodeVulnerabilityDetectorTagsPropertyOutputReference {
        return new CodeVulnerabilityDetectorTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CodeVulnerabilityFilePathProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class CodeVulnerabilityFilePathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CodeVulnerabilityFilePathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeVulnerabilityFilePathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class CodeVulnerabilityFilePathPropertyList extends cdktn.ComplexList {
    public internalValue? : CodeVulnerabilityFilePathProperty[] | cdktn.IResolvable

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
    public get(index: number): CodeVulnerabilityFilePathPropertyOutputReference {
        return new CodeVulnerabilityFilePathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentIdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ComponentIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComponentIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentIdPropertyOutputReference {
        return new ComponentIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ComponentTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComponentTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentTypePropertyOutputReference {
        return new ComponentTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ec2InstanceImageIdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class Ec2InstanceImageIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ec2InstanceImageIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2InstanceImageIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class Ec2InstanceImageIdPropertyList extends cdktn.ComplexList {
    public internalValue? : Ec2InstanceImageIdProperty[] | cdktn.IResolvable

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
    public get(index: number): Ec2InstanceImageIdPropertyOutputReference {
        return new Ec2InstanceImageIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ec2InstanceSubnetIdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class Ec2InstanceSubnetIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ec2InstanceSubnetIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2InstanceSubnetIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class Ec2InstanceSubnetIdPropertyList extends cdktn.ComplexList {
    public internalValue? : Ec2InstanceSubnetIdProperty[] | cdktn.IResolvable

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
    public get(index: number): Ec2InstanceSubnetIdPropertyOutputReference {
        return new Ec2InstanceSubnetIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ec2InstanceVpcIdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class Ec2InstanceVpcIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ec2InstanceVpcIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2InstanceVpcIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class Ec2InstanceVpcIdPropertyList extends cdktn.ComplexList {
    public internalValue? : Ec2InstanceVpcIdProperty[] | cdktn.IResolvable

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
    public get(index: number): Ec2InstanceVpcIdPropertyOutputReference {
        return new Ec2InstanceVpcIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcrImageArchitectureProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class EcrImageArchitecturePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcrImageArchitectureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrImageArchitectureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class EcrImageArchitecturePropertyList extends cdktn.ComplexList {
    public internalValue? : EcrImageArchitectureProperty[] | cdktn.IResolvable

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
    public get(index: number): EcrImageArchitecturePropertyOutputReference {
        return new EcrImageArchitecturePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcrImageHashProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class EcrImageHashPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcrImageHashProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrImageHashProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class EcrImageHashPropertyList extends cdktn.ComplexList {
    public internalValue? : EcrImageHashProperty[] | cdktn.IResolvable

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
    public get(index: number): EcrImageHashPropertyOutputReference {
        return new EcrImageHashPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DateFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#end_inclusive CcFilter#end_inclusive}
    */
    readonly endInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#start_inclusive CcFilter#start_inclusive}
    */
    readonly startInclusive?: number;
}
export class DateFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DateFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.endInclusive = this._endInclusive;
        }
        if (this._startInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInclusive = this._startInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DateFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endInclusive = undefined;
            this._startInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endInclusive = value.endInclusive;
            this._startInclusive = value.startInclusive;
        }
    }

    // end_inclusive - computed: true, optional: true, required: false
    private _endInclusive?: number; 
    public get endInclusive() {
        return this.getNumberAttribute('end_inclusive');
    }
    public set endInclusive(value: number) {
        this._endInclusive = value;
    }
    public resetEndInclusive() {
        this._endInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInclusiveInput() {
        return this._endInclusive;
    }

    // start_inclusive - computed: true, optional: true, required: false
    private _startInclusive?: number; 
    public get startInclusive() {
        return this.getNumberAttribute('start_inclusive');
    }
    public set startInclusive(value: number) {
        this._startInclusive = value;
    }
    public resetStartInclusive() {
        this._startInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInclusiveInput() {
        return this._startInclusive;
    }
}

export class DateFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : DateFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): DateFilterPropertyOutputReference {
        return new DateFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcrImageRegistryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class EcrImageRegistryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcrImageRegistryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrImageRegistryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class EcrImageRegistryPropertyList extends cdktn.ComplexList {
    public internalValue? : EcrImageRegistryProperty[] | cdktn.IResolvable

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
    public get(index: number): EcrImageRegistryPropertyOutputReference {
        return new EcrImageRegistryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcrImageRepositoryNameProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class EcrImageRepositoryNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcrImageRepositoryNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrImageRepositoryNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class EcrImageRepositoryNamePropertyList extends cdktn.ComplexList {
    public internalValue? : EcrImageRepositoryNameProperty[] | cdktn.IResolvable

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
    public get(index: number): EcrImageRepositoryNamePropertyOutputReference {
        return new EcrImageRepositoryNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcrImageTagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class EcrImageTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcrImageTagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrImageTagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class EcrImageTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : EcrImageTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): EcrImageTagsPropertyOutputReference {
        return new EcrImageTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NumberFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lower_inclusive CcFilter#lower_inclusive}
    */
    readonly lowerInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#upper_inclusive CcFilter#upper_inclusive}
    */
    readonly upperInclusive?: number;
}
export class NumberFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NumberFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lowerInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowerInclusive = this._lowerInclusive;
        }
        if (this._upperInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.upperInclusive = this._upperInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NumberFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lowerInclusive = undefined;
            this._upperInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lowerInclusive = value.lowerInclusive;
            this._upperInclusive = value.upperInclusive;
        }
    }

    // lower_inclusive - computed: true, optional: true, required: false
    private _lowerInclusive?: number; 
    public get lowerInclusive() {
        return this.getNumberAttribute('lower_inclusive');
    }
    public set lowerInclusive(value: number) {
        this._lowerInclusive = value;
    }
    public resetLowerInclusive() {
        this._lowerInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowerInclusiveInput() {
        return this._lowerInclusive;
    }

    // upper_inclusive - computed: true, optional: true, required: false
    private _upperInclusive?: number; 
    public get upperInclusive() {
        return this.getNumberAttribute('upper_inclusive');
    }
    public set upperInclusive(value: number) {
        this._upperInclusive = value;
    }
    public resetUpperInclusive() {
        this._upperInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upperInclusiveInput() {
        return this._upperInclusive;
    }
}

export class NumberFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : NumberFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): NumberFilterPropertyOutputReference {
        return new NumberFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExploitAvailableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ExploitAvailablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExploitAvailableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExploitAvailableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ExploitAvailablePropertyList extends cdktn.ComplexList {
    public internalValue? : ExploitAvailableProperty[] | cdktn.IResolvable

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
    public get(index: number): ExploitAvailablePropertyOutputReference {
        return new ExploitAvailablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingArnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class FindingArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingArnPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingArnProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingArnPropertyOutputReference {
        return new FindingArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingStatusProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class FindingStatusPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingStatusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingStatusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingStatusPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingStatusProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingStatusPropertyOutputReference {
        return new FindingStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class FindingTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingTypePropertyList extends cdktn.ComplexList {
    public internalValue? : FindingTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingTypePropertyOutputReference {
        return new FindingTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FirstObservedAtProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#end_inclusive CcFilter#end_inclusive}
    */
    readonly endInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#start_inclusive CcFilter#start_inclusive}
    */
    readonly startInclusive?: number;
}
export class FirstObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FirstObservedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.endInclusive = this._endInclusive;
        }
        if (this._startInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInclusive = this._startInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirstObservedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endInclusive = undefined;
            this._startInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endInclusive = value.endInclusive;
            this._startInclusive = value.startInclusive;
        }
    }

    // end_inclusive - computed: true, optional: true, required: false
    private _endInclusive?: number; 
    public get endInclusive() {
        return this.getNumberAttribute('end_inclusive');
    }
    public set endInclusive(value: number) {
        this._endInclusive = value;
    }
    public resetEndInclusive() {
        this._endInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInclusiveInput() {
        return this._endInclusive;
    }

    // start_inclusive - computed: true, optional: true, required: false
    private _startInclusive?: number; 
    public get startInclusive() {
        return this.getNumberAttribute('start_inclusive');
    }
    public set startInclusive(value: number) {
        this._startInclusive = value;
    }
    public resetStartInclusive() {
        this._startInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInclusiveInput() {
        return this._startInclusive;
    }
}

export class FirstObservedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : FirstObservedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): FirstObservedAtPropertyOutputReference {
        return new FirstObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FixAvailableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class FixAvailablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FixAvailableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FixAvailableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FixAvailablePropertyList extends cdktn.ComplexList {
    public internalValue? : FixAvailableProperty[] | cdktn.IResolvable

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
    public get(index: number): FixAvailablePropertyOutputReference {
        return new FixAvailablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InspectorScoreProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lower_inclusive CcFilter#lower_inclusive}
    */
    readonly lowerInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#upper_inclusive CcFilter#upper_inclusive}
    */
    readonly upperInclusive?: number;
}
export class InspectorScorePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InspectorScoreProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lowerInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowerInclusive = this._lowerInclusive;
        }
        if (this._upperInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.upperInclusive = this._upperInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InspectorScoreProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lowerInclusive = undefined;
            this._upperInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lowerInclusive = value.lowerInclusive;
            this._upperInclusive = value.upperInclusive;
        }
    }

    // lower_inclusive - computed: true, optional: true, required: false
    private _lowerInclusive?: number; 
    public get lowerInclusive() {
        return this.getNumberAttribute('lower_inclusive');
    }
    public set lowerInclusive(value: number) {
        this._lowerInclusive = value;
    }
    public resetLowerInclusive() {
        this._lowerInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowerInclusiveInput() {
        return this._lowerInclusive;
    }

    // upper_inclusive - computed: true, optional: true, required: false
    private _upperInclusive?: number; 
    public get upperInclusive() {
        return this.getNumberAttribute('upper_inclusive');
    }
    public set upperInclusive(value: number) {
        this._upperInclusive = value;
    }
    public resetUpperInclusive() {
        this._upperInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upperInclusiveInput() {
        return this._upperInclusive;
    }
}

export class InspectorScorePropertyList extends cdktn.ComplexList {
    public internalValue? : InspectorScoreProperty[] | cdktn.IResolvable

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
    public get(index: number): InspectorScorePropertyOutputReference {
        return new InspectorScorePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaFunctionExecutionRoleArnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class LambdaFunctionExecutionRoleArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaFunctionExecutionRoleArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class LambdaFunctionExecutionRoleArnPropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaFunctionExecutionRoleArnProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaFunctionExecutionRoleArnPropertyOutputReference {
        return new LambdaFunctionExecutionRoleArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaFunctionLastModifiedAtProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#end_inclusive CcFilter#end_inclusive}
    */
    readonly endInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#start_inclusive CcFilter#start_inclusive}
    */
    readonly startInclusive?: number;
}
export class LambdaFunctionLastModifiedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.endInclusive = this._endInclusive;
        }
        if (this._startInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInclusive = this._startInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaFunctionLastModifiedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endInclusive = undefined;
            this._startInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endInclusive = value.endInclusive;
            this._startInclusive = value.startInclusive;
        }
    }

    // end_inclusive - computed: true, optional: true, required: false
    private _endInclusive?: number; 
    public get endInclusive() {
        return this.getNumberAttribute('end_inclusive');
    }
    public set endInclusive(value: number) {
        this._endInclusive = value;
    }
    public resetEndInclusive() {
        this._endInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInclusiveInput() {
        return this._endInclusive;
    }

    // start_inclusive - computed: true, optional: true, required: false
    private _startInclusive?: number; 
    public get startInclusive() {
        return this.getNumberAttribute('start_inclusive');
    }
    public set startInclusive(value: number) {
        this._startInclusive = value;
    }
    public resetStartInclusive() {
        this._startInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInclusiveInput() {
        return this._startInclusive;
    }
}

export class LambdaFunctionLastModifiedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaFunctionLastModifiedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaFunctionLastModifiedAtPropertyOutputReference {
        return new LambdaFunctionLastModifiedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaFunctionLayersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class LambdaFunctionLayersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaFunctionLayersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaFunctionLayersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class LambdaFunctionLayersPropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaFunctionLayersProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaFunctionLayersPropertyOutputReference {
        return new LambdaFunctionLayersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaFunctionNameProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class LambdaFunctionNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaFunctionNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaFunctionNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class LambdaFunctionNamePropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaFunctionNameProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaFunctionNamePropertyOutputReference {
        return new LambdaFunctionNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaFunctionRuntimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class LambdaFunctionRuntimePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaFunctionRuntimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaFunctionRuntimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class LambdaFunctionRuntimePropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaFunctionRuntimeProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaFunctionRuntimePropertyOutputReference {
        return new LambdaFunctionRuntimePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LastObservedAtProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#end_inclusive CcFilter#end_inclusive}
    */
    readonly endInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#start_inclusive CcFilter#start_inclusive}
    */
    readonly startInclusive?: number;
}
export class LastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LastObservedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.endInclusive = this._endInclusive;
        }
        if (this._startInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInclusive = this._startInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LastObservedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endInclusive = undefined;
            this._startInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endInclusive = value.endInclusive;
            this._startInclusive = value.startInclusive;
        }
    }

    // end_inclusive - computed: true, optional: true, required: false
    private _endInclusive?: number; 
    public get endInclusive() {
        return this.getNumberAttribute('end_inclusive');
    }
    public set endInclusive(value: number) {
        this._endInclusive = value;
    }
    public resetEndInclusive() {
        this._endInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInclusiveInput() {
        return this._endInclusive;
    }

    // start_inclusive - computed: true, optional: true, required: false
    private _startInclusive?: number; 
    public get startInclusive() {
        return this.getNumberAttribute('start_inclusive');
    }
    public set startInclusive(value: number) {
        this._startInclusive = value;
    }
    public resetStartInclusive() {
        this._startInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInclusiveInput() {
        return this._startInclusive;
    }
}

export class LastObservedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : LastObservedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): LastObservedAtPropertyOutputReference {
        return new LastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkProtocolProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class NetworkProtocolPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkProtocolProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkProtocolProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NetworkProtocolPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkProtocolProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkProtocolPropertyOutputReference {
        return new NetworkProtocolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PortRangeFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#begin_inclusive CcFilter#begin_inclusive}
    */
    readonly beginInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#end_inclusive CcFilter#end_inclusive}
    */
    readonly endInclusive?: number;
}
export class PortRangeFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortRangeFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._beginInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.beginInclusive = this._beginInclusive;
        }
        if (this._endInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.endInclusive = this._endInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortRangeFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._beginInclusive = undefined;
            this._endInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._beginInclusive = value.beginInclusive;
            this._endInclusive = value.endInclusive;
        }
    }

    // begin_inclusive - computed: true, optional: true, required: false
    private _beginInclusive?: number; 
    public get beginInclusive() {
        return this.getNumberAttribute('begin_inclusive');
    }
    public set beginInclusive(value: number) {
        this._beginInclusive = value;
    }
    public resetBeginInclusive() {
        this._beginInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get beginInclusiveInput() {
        return this._beginInclusive;
    }

    // end_inclusive - computed: true, optional: true, required: false
    private _endInclusive?: number; 
    public get endInclusive() {
        return this.getNumberAttribute('end_inclusive');
    }
    public set endInclusive(value: number) {
        this._endInclusive = value;
    }
    public resetEndInclusive() {
        this._endInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInclusiveInput() {
        return this._endInclusive;
    }
}

export class PortRangeFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : PortRangeFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): PortRangeFilterPropertyOutputReference {
        return new PortRangeFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelatedVulnerabilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class RelatedVulnerabilitiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RelatedVulnerabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelatedVulnerabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class RelatedVulnerabilitiesPropertyList extends cdktn.ComplexList {
    public internalValue? : RelatedVulnerabilitiesProperty[] | cdktn.IResolvable

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
    public get(index: number): RelatedVulnerabilitiesPropertyOutputReference {
        return new RelatedVulnerabilitiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceIdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ResourceIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceIdPropertyOutputReference {
        return new ResourceIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MapFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#key CcFilter#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class MapFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MapFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
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

    public set internalValue(value: MapFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
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
            this._comparison = value.comparison;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class MapFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : MapFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): MapFilterPropertyOutputReference {
        return new MapFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTypePropertyOutputReference {
        return new ResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SeverityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class SeverityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SeverityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SeverityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class SeverityPropertyList extends cdktn.ComplexList {
    public internalValue? : SeverityProperty[] | cdktn.IResolvable

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
    public get(index: number): SeverityPropertyOutputReference {
        return new SeverityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TitleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class TitlePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TitleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TitleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class TitlePropertyList extends cdktn.ComplexList {
    public internalValue? : TitleProperty[] | cdktn.IResolvable

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
    public get(index: number): TitlePropertyOutputReference {
        return new TitlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UpdatedAtProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#end_inclusive CcFilter#end_inclusive}
    */
    readonly endInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#start_inclusive CcFilter#start_inclusive}
    */
    readonly startInclusive?: number;
}
export class UpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UpdatedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.endInclusive = this._endInclusive;
        }
        if (this._startInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.startInclusive = this._startInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdatedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endInclusive = undefined;
            this._startInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endInclusive = value.endInclusive;
            this._startInclusive = value.startInclusive;
        }
    }

    // end_inclusive - computed: true, optional: true, required: false
    private _endInclusive?: number; 
    public get endInclusive() {
        return this.getNumberAttribute('end_inclusive');
    }
    public set endInclusive(value: number) {
        this._endInclusive = value;
    }
    public resetEndInclusive() {
        this._endInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInclusiveInput() {
        return this._endInclusive;
    }

    // start_inclusive - computed: true, optional: true, required: false
    private _startInclusive?: number; 
    public get startInclusive() {
        return this.getNumberAttribute('start_inclusive');
    }
    public set startInclusive(value: number) {
        this._startInclusive = value;
    }
    public resetStartInclusive() {
        this._startInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInclusiveInput() {
        return this._startInclusive;
    }
}

export class UpdatedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : UpdatedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): UpdatedAtPropertyOutputReference {
        return new UpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VendorSeverityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class VendorSeverityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VendorSeverityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VendorSeverityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class VendorSeverityPropertyList extends cdktn.ComplexList {
    public internalValue? : VendorSeverityProperty[] | cdktn.IResolvable

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
    public get(index: number): VendorSeverityPropertyOutputReference {
        return new VendorSeverityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VulnerabilityIdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class VulnerabilityIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VulnerabilityIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VulnerabilityIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class VulnerabilityIdPropertyList extends cdktn.ComplexList {
    public internalValue? : VulnerabilityIdProperty[] | cdktn.IResolvable

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
    public get(index: number): VulnerabilityIdPropertyOutputReference {
        return new VulnerabilityIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VulnerabilitySourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class VulnerabilitySourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VulnerabilitySourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VulnerabilitySourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class VulnerabilitySourcePropertyList extends cdktn.ComplexList {
    public internalValue? : VulnerabilitySourceProperty[] | cdktn.IResolvable

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
    public get(index: number): VulnerabilitySourcePropertyOutputReference {
        return new VulnerabilitySourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ArchitectureProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ArchitecturePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArchitectureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArchitectureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface EpochProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lower_inclusive CcFilter#lower_inclusive}
    */
    readonly lowerInclusive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#upper_inclusive CcFilter#upper_inclusive}
    */
    readonly upperInclusive?: number;
}
export class EpochPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EpochProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lowerInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowerInclusive = this._lowerInclusive;
        }
        if (this._upperInclusive !== undefined) {
            hasAnyValues = true;
            internalValueResult.upperInclusive = this._upperInclusive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EpochProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lowerInclusive = undefined;
            this._upperInclusive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lowerInclusive = value.lowerInclusive;
            this._upperInclusive = value.upperInclusive;
        }
    }

    // lower_inclusive - computed: true, optional: true, required: false
    private _lowerInclusive?: number; 
    public get lowerInclusive() {
        return this.getNumberAttribute('lower_inclusive');
    }
    public set lowerInclusive(value: number) {
        this._lowerInclusive = value;
    }
    public resetLowerInclusive() {
        this._lowerInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowerInclusiveInput() {
        return this._lowerInclusive;
    }

    // upper_inclusive - computed: true, optional: true, required: false
    private _upperInclusive?: number; 
    public get upperInclusive() {
        return this.getNumberAttribute('upper_inclusive');
    }
    public set upperInclusive(value: number) {
        this._upperInclusive = value;
    }
    public resetUpperInclusive() {
        this._upperInclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upperInclusiveInput() {
        return this._upperInclusive;
    }
}
export interface FilePathProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class FilePathPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilePathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilePathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface NameProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class NamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface ReleaseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class ReleasePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReleaseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReleaseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface SourceLambdaLayerArnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class SourceLambdaLayerArnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceLambdaLayerArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceLambdaLayerArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface SourceLayerHashProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class SourceLayerHashPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceLayerHashProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceLayerHashProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface VersionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#comparison CcFilter#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#value CcFilter#value}
    */
    readonly value?: string;
}
export class VersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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
export interface PackageFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#architecture CcFilter#architecture}
    */
    readonly architecture?: ArchitectureProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#epoch CcFilter#epoch}
    */
    readonly epoch?: EpochProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#file_path CcFilter#file_path}
    */
    readonly filePath?: FilePathProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#name CcFilter#name}
    */
    readonly name?: NameProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#release CcFilter#release}
    */
    readonly release?: ReleaseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#source_lambda_layer_arn CcFilter#source_lambda_layer_arn}
    */
    readonly sourceLambdaLayerArn?: SourceLambdaLayerArnProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#source_layer_hash CcFilter#source_layer_hash}
    */
    readonly sourceLayerHash?: SourceLayerHashProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#version CcFilter#version}
    */
    readonly version?: VersionProperty;
}
export class PackageFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PackageFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._architecture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.architecture = this._architecture?.internalValue;
        }
        if (this._epoch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.epoch = this._epoch?.internalValue;
        }
        if (this._filePath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filePath = this._filePath?.internalValue;
        }
        if (this._name?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name?.internalValue;
        }
        if (this._release?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.release = this._release?.internalValue;
        }
        if (this._sourceLambdaLayerArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceLambdaLayerArn = this._sourceLambdaLayerArn?.internalValue;
        }
        if (this._sourceLayerHash?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceLayerHash = this._sourceLayerHash?.internalValue;
        }
        if (this._version?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PackageFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._architecture.internalValue = undefined;
            this._epoch.internalValue = undefined;
            this._filePath.internalValue = undefined;
            this._name.internalValue = undefined;
            this._release.internalValue = undefined;
            this._sourceLambdaLayerArn.internalValue = undefined;
            this._sourceLayerHash.internalValue = undefined;
            this._version.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._architecture.internalValue = value.architecture;
            this._epoch.internalValue = value.epoch;
            this._filePath.internalValue = value.filePath;
            this._name.internalValue = value.name;
            this._release.internalValue = value.release;
            this._sourceLambdaLayerArn.internalValue = value.sourceLambdaLayerArn;
            this._sourceLayerHash.internalValue = value.sourceLayerHash;
            this._version.internalValue = value.version;
        }
    }

    // architecture - computed: true, optional: true, required: false
    private _architecture = new ArchitecturePropertyOutputReference(this, "architecture");
    public get architecture() {
        return this._architecture;
    }
    public putArchitecture(value: ArchitectureProperty) {
        this._architecture.internalValue = value;
    }
    public resetArchitecture() {
        this._architecture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architectureInput() {
        return this._architecture.internalValue;
    }

    // epoch - computed: true, optional: true, required: false
    private _epoch = new EpochPropertyOutputReference(this, "epoch");
    public get epoch() {
        return this._epoch;
    }
    public putEpoch(value: EpochProperty) {
        this._epoch.internalValue = value;
    }
    public resetEpoch() {
        this._epoch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get epochInput() {
        return this._epoch.internalValue;
    }

    // file_path - computed: true, optional: true, required: false
    private _filePath = new FilePathPropertyOutputReference(this, "file_path");
    public get filePath() {
        return this._filePath;
    }
    public putFilePath(value: FilePathProperty) {
        this._filePath.internalValue = value;
    }
    public resetFilePath() {
        this._filePath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filePathInput() {
        return this._filePath.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name = new NamePropertyOutputReference(this, "name");
    public get name() {
        return this._name;
    }
    public putName(value: NameProperty) {
        this._name.internalValue = value;
    }
    public resetName() {
        this._name.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name.internalValue;
    }

    // release - computed: true, optional: true, required: false
    private _release = new ReleasePropertyOutputReference(this, "release");
    public get release() {
        return this._release;
    }
    public putRelease(value: ReleaseProperty) {
        this._release.internalValue = value;
    }
    public resetRelease() {
        this._release.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get releaseInput() {
        return this._release.internalValue;
    }

    // source_lambda_layer_arn - computed: true, optional: true, required: false
    private _sourceLambdaLayerArn = new SourceLambdaLayerArnPropertyOutputReference(this, "source_lambda_layer_arn");
    public get sourceLambdaLayerArn() {
        return this._sourceLambdaLayerArn;
    }
    public putSourceLambdaLayerArn(value: SourceLambdaLayerArnProperty) {
        this._sourceLambdaLayerArn.internalValue = value;
    }
    public resetSourceLambdaLayerArn() {
        this._sourceLambdaLayerArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLambdaLayerArnInput() {
        return this._sourceLambdaLayerArn.internalValue;
    }

    // source_layer_hash - computed: true, optional: true, required: false
    private _sourceLayerHash = new SourceLayerHashPropertyOutputReference(this, "source_layer_hash");
    public get sourceLayerHash() {
        return this._sourceLayerHash;
    }
    public putSourceLayerHash(value: SourceLayerHashProperty) {
        this._sourceLayerHash.internalValue = value;
    }
    public resetSourceLayerHash() {
        this._sourceLayerHash.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLayerHashInput() {
        return this._sourceLayerHash.internalValue;
    }

    // version - computed: true, optional: true, required: false
    private _version = new VersionPropertyOutputReference(this, "version");
    public get version() {
        return this._version;
    }
    public putVersion(value: VersionProperty) {
        this._version.internalValue = value;
    }
    public resetVersion() {
        this._version.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version.internalValue;
    }
}

export class PackageFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : PackageFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): PackageFilterPropertyOutputReference {
        return new PackageFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#aws_account_id CcFilter#aws_account_id}
    */
    readonly awsAccountId?: StringFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#code_vulnerability_detector_name CcFilter#code_vulnerability_detector_name}
    */
    readonly codeVulnerabilityDetectorName?: CodeVulnerabilityDetectorNameProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#code_vulnerability_detector_tags CcFilter#code_vulnerability_detector_tags}
    */
    readonly codeVulnerabilityDetectorTags?: CodeVulnerabilityDetectorTagsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#code_vulnerability_file_path CcFilter#code_vulnerability_file_path}
    */
    readonly codeVulnerabilityFilePath?: CodeVulnerabilityFilePathProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#component_id CcFilter#component_id}
    */
    readonly componentId?: ComponentIdProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#component_type CcFilter#component_type}
    */
    readonly componentType?: ComponentTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ec_2_instance_image_id CcFilter#ec_2_instance_image_id}
    */
    readonly ec2InstanceImageId?: Ec2InstanceImageIdProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ec_2_instance_subnet_id CcFilter#ec_2_instance_subnet_id}
    */
    readonly ec2InstanceSubnetId?: Ec2InstanceSubnetIdProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ec_2_instance_vpc_id CcFilter#ec_2_instance_vpc_id}
    */
    readonly ec2InstanceVpcId?: Ec2InstanceVpcIdProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ecr_image_architecture CcFilter#ecr_image_architecture}
    */
    readonly ecrImageArchitecture?: EcrImageArchitectureProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ecr_image_hash CcFilter#ecr_image_hash}
    */
    readonly ecrImageHash?: EcrImageHashProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ecr_image_pushed_at CcFilter#ecr_image_pushed_at}
    */
    readonly ecrImagePushedAt?: DateFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ecr_image_registry CcFilter#ecr_image_registry}
    */
    readonly ecrImageRegistry?: EcrImageRegistryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ecr_image_repository_name CcFilter#ecr_image_repository_name}
    */
    readonly ecrImageRepositoryName?: EcrImageRepositoryNameProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#ecr_image_tags CcFilter#ecr_image_tags}
    */
    readonly ecrImageTags?: EcrImageTagsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#epss_score CcFilter#epss_score}
    */
    readonly epssScore?: NumberFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#exploit_available CcFilter#exploit_available}
    */
    readonly exploitAvailable?: ExploitAvailableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#finding_arn CcFilter#finding_arn}
    */
    readonly findingArn?: FindingArnProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#finding_status CcFilter#finding_status}
    */
    readonly findingStatus?: FindingStatusProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#finding_type CcFilter#finding_type}
    */
    readonly findingType?: FindingTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#first_observed_at CcFilter#first_observed_at}
    */
    readonly firstObservedAt?: FirstObservedAtProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#fix_available CcFilter#fix_available}
    */
    readonly fixAvailable?: FixAvailableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#inspector_score CcFilter#inspector_score}
    */
    readonly inspectorScore?: InspectorScoreProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lambda_function_execution_role_arn CcFilter#lambda_function_execution_role_arn}
    */
    readonly lambdaFunctionExecutionRoleArn?: LambdaFunctionExecutionRoleArnProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lambda_function_last_modified_at CcFilter#lambda_function_last_modified_at}
    */
    readonly lambdaFunctionLastModifiedAt?: LambdaFunctionLastModifiedAtProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lambda_function_layers CcFilter#lambda_function_layers}
    */
    readonly lambdaFunctionLayers?: LambdaFunctionLayersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lambda_function_name CcFilter#lambda_function_name}
    */
    readonly lambdaFunctionName?: LambdaFunctionNameProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#lambda_function_runtime CcFilter#lambda_function_runtime}
    */
    readonly lambdaFunctionRuntime?: LambdaFunctionRuntimeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#last_observed_at CcFilter#last_observed_at}
    */
    readonly lastObservedAt?: LastObservedAtProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#network_protocol CcFilter#network_protocol}
    */
    readonly networkProtocol?: NetworkProtocolProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#port_range CcFilter#port_range}
    */
    readonly portRange?: PortRangeFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#related_vulnerabilities CcFilter#related_vulnerabilities}
    */
    readonly relatedVulnerabilities?: RelatedVulnerabilitiesProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#resource_id CcFilter#resource_id}
    */
    readonly resourceId?: ResourceIdProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#resource_tags CcFilter#resource_tags}
    */
    readonly resourceTags?: MapFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#resource_type CcFilter#resource_type}
    */
    readonly resourceType?: ResourceTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#severity CcFilter#severity}
    */
    readonly severity?: SeverityProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#title CcFilter#title}
    */
    readonly title?: TitleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#updated_at CcFilter#updated_at}
    */
    readonly updatedAt?: UpdatedAtProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#vendor_severity CcFilter#vendor_severity}
    */
    readonly vendorSeverity?: VendorSeverityProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#vulnerability_id CcFilter#vulnerability_id}
    */
    readonly vulnerabilityId?: VulnerabilityIdProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#vulnerability_source CcFilter#vulnerability_source}
    */
    readonly vulnerabilitySource?: VulnerabilitySourceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_filter#vulnerable_packages CcFilter#vulnerable_packages}
    */
    readonly vulnerablePackages?: PackageFilterProperty[] | cdktn.IResolvable;
}
export class FilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsAccountId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
        }
        if (this._codeVulnerabilityDetectorName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeVulnerabilityDetectorName = this._codeVulnerabilityDetectorName?.internalValue;
        }
        if (this._codeVulnerabilityDetectorTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeVulnerabilityDetectorTags = this._codeVulnerabilityDetectorTags?.internalValue;
        }
        if (this._codeVulnerabilityFilePath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeVulnerabilityFilePath = this._codeVulnerabilityFilePath?.internalValue;
        }
        if (this._componentId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentId = this._componentId?.internalValue;
        }
        if (this._componentType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentType = this._componentType?.internalValue;
        }
        if (this._ec2InstanceImageId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2InstanceImageId = this._ec2InstanceImageId?.internalValue;
        }
        if (this._ec2InstanceSubnetId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2InstanceSubnetId = this._ec2InstanceSubnetId?.internalValue;
        }
        if (this._ec2InstanceVpcId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2InstanceVpcId = this._ec2InstanceVpcId?.internalValue;
        }
        if (this._ecrImageArchitecture?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImageArchitecture = this._ecrImageArchitecture?.internalValue;
        }
        if (this._ecrImageHash?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImageHash = this._ecrImageHash?.internalValue;
        }
        if (this._ecrImagePushedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImagePushedAt = this._ecrImagePushedAt?.internalValue;
        }
        if (this._ecrImageRegistry?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImageRegistry = this._ecrImageRegistry?.internalValue;
        }
        if (this._ecrImageRepositoryName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImageRepositoryName = this._ecrImageRepositoryName?.internalValue;
        }
        if (this._ecrImageTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImageTags = this._ecrImageTags?.internalValue;
        }
        if (this._epssScore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.epssScore = this._epssScore?.internalValue;
        }
        if (this._exploitAvailable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exploitAvailable = this._exploitAvailable?.internalValue;
        }
        if (this._findingArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingArn = this._findingArn?.internalValue;
        }
        if (this._findingStatus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingStatus = this._findingStatus?.internalValue;
        }
        if (this._findingType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingType = this._findingType?.internalValue;
        }
        if (this._firstObservedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
        }
        if (this._fixAvailable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixAvailable = this._fixAvailable?.internalValue;
        }
        if (this._inspectorScore?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inspectorScore = this._inspectorScore?.internalValue;
        }
        if (this._lambdaFunctionExecutionRoleArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionExecutionRoleArn = this._lambdaFunctionExecutionRoleArn?.internalValue;
        }
        if (this._lambdaFunctionLastModifiedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionLastModifiedAt = this._lambdaFunctionLastModifiedAt?.internalValue;
        }
        if (this._lambdaFunctionLayers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionLayers = this._lambdaFunctionLayers?.internalValue;
        }
        if (this._lambdaFunctionName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionName = this._lambdaFunctionName?.internalValue;
        }
        if (this._lambdaFunctionRuntime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionRuntime = this._lambdaFunctionRuntime?.internalValue;
        }
        if (this._lastObservedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
        }
        if (this._networkProtocol?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
        }
        if (this._portRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portRange = this._portRange?.internalValue;
        }
        if (this._relatedVulnerabilities?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relatedVulnerabilities = this._relatedVulnerabilities?.internalValue;
        }
        if (this._resourceId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId?.internalValue;
        }
        if (this._resourceTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags?.internalValue;
        }
        if (this._resourceType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType?.internalValue;
        }
        if (this._severity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.severity = this._severity?.internalValue;
        }
        if (this._title?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title?.internalValue;
        }
        if (this._updatedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt?.internalValue;
        }
        if (this._vendorSeverity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vendorSeverity = this._vendorSeverity?.internalValue;
        }
        if (this._vulnerabilityId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vulnerabilityId = this._vulnerabilityId?.internalValue;
        }
        if (this._vulnerabilitySource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vulnerabilitySource = this._vulnerabilitySource?.internalValue;
        }
        if (this._vulnerablePackages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vulnerablePackages = this._vulnerablePackages?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsAccountId.internalValue = undefined;
            this._codeVulnerabilityDetectorName.internalValue = undefined;
            this._codeVulnerabilityDetectorTags.internalValue = undefined;
            this._codeVulnerabilityFilePath.internalValue = undefined;
            this._componentId.internalValue = undefined;
            this._componentType.internalValue = undefined;
            this._ec2InstanceImageId.internalValue = undefined;
            this._ec2InstanceSubnetId.internalValue = undefined;
            this._ec2InstanceVpcId.internalValue = undefined;
            this._ecrImageArchitecture.internalValue = undefined;
            this._ecrImageHash.internalValue = undefined;
            this._ecrImagePushedAt.internalValue = undefined;
            this._ecrImageRegistry.internalValue = undefined;
            this._ecrImageRepositoryName.internalValue = undefined;
            this._ecrImageTags.internalValue = undefined;
            this._epssScore.internalValue = undefined;
            this._exploitAvailable.internalValue = undefined;
            this._findingArn.internalValue = undefined;
            this._findingStatus.internalValue = undefined;
            this._findingType.internalValue = undefined;
            this._firstObservedAt.internalValue = undefined;
            this._fixAvailable.internalValue = undefined;
            this._inspectorScore.internalValue = undefined;
            this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
            this._lambdaFunctionLastModifiedAt.internalValue = undefined;
            this._lambdaFunctionLayers.internalValue = undefined;
            this._lambdaFunctionName.internalValue = undefined;
            this._lambdaFunctionRuntime.internalValue = undefined;
            this._lastObservedAt.internalValue = undefined;
            this._networkProtocol.internalValue = undefined;
            this._portRange.internalValue = undefined;
            this._relatedVulnerabilities.internalValue = undefined;
            this._resourceId.internalValue = undefined;
            this._resourceTags.internalValue = undefined;
            this._resourceType.internalValue = undefined;
            this._severity.internalValue = undefined;
            this._title.internalValue = undefined;
            this._updatedAt.internalValue = undefined;
            this._vendorSeverity.internalValue = undefined;
            this._vulnerabilityId.internalValue = undefined;
            this._vulnerabilitySource.internalValue = undefined;
            this._vulnerablePackages.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsAccountId.internalValue = value.awsAccountId;
            this._codeVulnerabilityDetectorName.internalValue = value.codeVulnerabilityDetectorName;
            this._codeVulnerabilityDetectorTags.internalValue = value.codeVulnerabilityDetectorTags;
            this._codeVulnerabilityFilePath.internalValue = value.codeVulnerabilityFilePath;
            this._componentId.internalValue = value.componentId;
            this._componentType.internalValue = value.componentType;
            this._ec2InstanceImageId.internalValue = value.ec2InstanceImageId;
            this._ec2InstanceSubnetId.internalValue = value.ec2InstanceSubnetId;
            this._ec2InstanceVpcId.internalValue = value.ec2InstanceVpcId;
            this._ecrImageArchitecture.internalValue = value.ecrImageArchitecture;
            this._ecrImageHash.internalValue = value.ecrImageHash;
            this._ecrImagePushedAt.internalValue = value.ecrImagePushedAt;
            this._ecrImageRegistry.internalValue = value.ecrImageRegistry;
            this._ecrImageRepositoryName.internalValue = value.ecrImageRepositoryName;
            this._ecrImageTags.internalValue = value.ecrImageTags;
            this._epssScore.internalValue = value.epssScore;
            this._exploitAvailable.internalValue = value.exploitAvailable;
            this._findingArn.internalValue = value.findingArn;
            this._findingStatus.internalValue = value.findingStatus;
            this._findingType.internalValue = value.findingType;
            this._firstObservedAt.internalValue = value.firstObservedAt;
            this._fixAvailable.internalValue = value.fixAvailable;
            this._inspectorScore.internalValue = value.inspectorScore;
            this._lambdaFunctionExecutionRoleArn.internalValue = value.lambdaFunctionExecutionRoleArn;
            this._lambdaFunctionLastModifiedAt.internalValue = value.lambdaFunctionLastModifiedAt;
            this._lambdaFunctionLayers.internalValue = value.lambdaFunctionLayers;
            this._lambdaFunctionName.internalValue = value.lambdaFunctionName;
            this._lambdaFunctionRuntime.internalValue = value.lambdaFunctionRuntime;
            this._lastObservedAt.internalValue = value.lastObservedAt;
            this._networkProtocol.internalValue = value.networkProtocol;
            this._portRange.internalValue = value.portRange;
            this._relatedVulnerabilities.internalValue = value.relatedVulnerabilities;
            this._resourceId.internalValue = value.resourceId;
            this._resourceTags.internalValue = value.resourceTags;
            this._resourceType.internalValue = value.resourceType;
            this._severity.internalValue = value.severity;
            this._title.internalValue = value.title;
            this._updatedAt.internalValue = value.updatedAt;
            this._vendorSeverity.internalValue = value.vendorSeverity;
            this._vulnerabilityId.internalValue = value.vulnerabilityId;
            this._vulnerabilitySource.internalValue = value.vulnerabilitySource;
            this._vulnerablePackages.internalValue = value.vulnerablePackages;
        }
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId = new StringFilterPropertyList(this, "aws_account_id", false);
    public get awsAccountId() {
        return this._awsAccountId;
    }
    public putAwsAccountId(value: StringFilterProperty[] | cdktn.IResolvable) {
        this._awsAccountId.internalValue = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId.internalValue;
    }

    // code_vulnerability_detector_name - computed: true, optional: true, required: false
    private _codeVulnerabilityDetectorName = new CodeVulnerabilityDetectorNamePropertyList(this, "code_vulnerability_detector_name", false);
    public get codeVulnerabilityDetectorName() {
        return this._codeVulnerabilityDetectorName;
    }
    public putCodeVulnerabilityDetectorName(value: CodeVulnerabilityDetectorNameProperty[] | cdktn.IResolvable) {
        this._codeVulnerabilityDetectorName.internalValue = value;
    }
    public resetCodeVulnerabilityDetectorName() {
        this._codeVulnerabilityDetectorName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeVulnerabilityDetectorNameInput() {
        return this._codeVulnerabilityDetectorName.internalValue;
    }

    // code_vulnerability_detector_tags - computed: true, optional: true, required: false
    private _codeVulnerabilityDetectorTags = new CodeVulnerabilityDetectorTagsPropertyList(this, "code_vulnerability_detector_tags", false);
    public get codeVulnerabilityDetectorTags() {
        return this._codeVulnerabilityDetectorTags;
    }
    public putCodeVulnerabilityDetectorTags(value: CodeVulnerabilityDetectorTagsProperty[] | cdktn.IResolvable) {
        this._codeVulnerabilityDetectorTags.internalValue = value;
    }
    public resetCodeVulnerabilityDetectorTags() {
        this._codeVulnerabilityDetectorTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeVulnerabilityDetectorTagsInput() {
        return this._codeVulnerabilityDetectorTags.internalValue;
    }

    // code_vulnerability_file_path - computed: true, optional: true, required: false
    private _codeVulnerabilityFilePath = new CodeVulnerabilityFilePathPropertyList(this, "code_vulnerability_file_path", false);
    public get codeVulnerabilityFilePath() {
        return this._codeVulnerabilityFilePath;
    }
    public putCodeVulnerabilityFilePath(value: CodeVulnerabilityFilePathProperty[] | cdktn.IResolvable) {
        this._codeVulnerabilityFilePath.internalValue = value;
    }
    public resetCodeVulnerabilityFilePath() {
        this._codeVulnerabilityFilePath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeVulnerabilityFilePathInput() {
        return this._codeVulnerabilityFilePath.internalValue;
    }

    // component_id - computed: true, optional: true, required: false
    private _componentId = new ComponentIdPropertyList(this, "component_id", false);
    public get componentId() {
        return this._componentId;
    }
    public putComponentId(value: ComponentIdProperty[] | cdktn.IResolvable) {
        this._componentId.internalValue = value;
    }
    public resetComponentId() {
        this._componentId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentIdInput() {
        return this._componentId.internalValue;
    }

    // component_type - computed: true, optional: true, required: false
    private _componentType = new ComponentTypePropertyList(this, "component_type", false);
    public get componentType() {
        return this._componentType;
    }
    public putComponentType(value: ComponentTypeProperty[] | cdktn.IResolvable) {
        this._componentType.internalValue = value;
    }
    public resetComponentType() {
        this._componentType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentTypeInput() {
        return this._componentType.internalValue;
    }

    // ec_2_instance_image_id - computed: true, optional: true, required: false
    private _ec2InstanceImageId = new Ec2InstanceImageIdPropertyList(this, "ec_2_instance_image_id", false);
    public get ec2InstanceImageId() {
        return this._ec2InstanceImageId;
    }
    public putEc2InstanceImageId(value: Ec2InstanceImageIdProperty[] | cdktn.IResolvable) {
        this._ec2InstanceImageId.internalValue = value;
    }
    public resetEc2InstanceImageId() {
        this._ec2InstanceImageId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceImageIdInput() {
        return this._ec2InstanceImageId.internalValue;
    }

    // ec_2_instance_subnet_id - computed: true, optional: true, required: false
    private _ec2InstanceSubnetId = new Ec2InstanceSubnetIdPropertyList(this, "ec_2_instance_subnet_id", false);
    public get ec2InstanceSubnetId() {
        return this._ec2InstanceSubnetId;
    }
    public putEc2InstanceSubnetId(value: Ec2InstanceSubnetIdProperty[] | cdktn.IResolvable) {
        this._ec2InstanceSubnetId.internalValue = value;
    }
    public resetEc2InstanceSubnetId() {
        this._ec2InstanceSubnetId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceSubnetIdInput() {
        return this._ec2InstanceSubnetId.internalValue;
    }

    // ec_2_instance_vpc_id - computed: true, optional: true, required: false
    private _ec2InstanceVpcId = new Ec2InstanceVpcIdPropertyList(this, "ec_2_instance_vpc_id", false);
    public get ec2InstanceVpcId() {
        return this._ec2InstanceVpcId;
    }
    public putEc2InstanceVpcId(value: Ec2InstanceVpcIdProperty[] | cdktn.IResolvable) {
        this._ec2InstanceVpcId.internalValue = value;
    }
    public resetEc2InstanceVpcId() {
        this._ec2InstanceVpcId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceVpcIdInput() {
        return this._ec2InstanceVpcId.internalValue;
    }

    // ecr_image_architecture - computed: true, optional: true, required: false
    private _ecrImageArchitecture = new EcrImageArchitecturePropertyList(this, "ecr_image_architecture", false);
    public get ecrImageArchitecture() {
        return this._ecrImageArchitecture;
    }
    public putEcrImageArchitecture(value: EcrImageArchitectureProperty[] | cdktn.IResolvable) {
        this._ecrImageArchitecture.internalValue = value;
    }
    public resetEcrImageArchitecture() {
        this._ecrImageArchitecture.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImageArchitectureInput() {
        return this._ecrImageArchitecture.internalValue;
    }

    // ecr_image_hash - computed: true, optional: true, required: false
    private _ecrImageHash = new EcrImageHashPropertyList(this, "ecr_image_hash", false);
    public get ecrImageHash() {
        return this._ecrImageHash;
    }
    public putEcrImageHash(value: EcrImageHashProperty[] | cdktn.IResolvable) {
        this._ecrImageHash.internalValue = value;
    }
    public resetEcrImageHash() {
        this._ecrImageHash.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImageHashInput() {
        return this._ecrImageHash.internalValue;
    }

    // ecr_image_pushed_at - computed: true, optional: true, required: false
    private _ecrImagePushedAt = new DateFilterPropertyList(this, "ecr_image_pushed_at", false);
    public get ecrImagePushedAt() {
        return this._ecrImagePushedAt;
    }
    public putEcrImagePushedAt(value: DateFilterProperty[] | cdktn.IResolvable) {
        this._ecrImagePushedAt.internalValue = value;
    }
    public resetEcrImagePushedAt() {
        this._ecrImagePushedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImagePushedAtInput() {
        return this._ecrImagePushedAt.internalValue;
    }

    // ecr_image_registry - computed: true, optional: true, required: false
    private _ecrImageRegistry = new EcrImageRegistryPropertyList(this, "ecr_image_registry", false);
    public get ecrImageRegistry() {
        return this._ecrImageRegistry;
    }
    public putEcrImageRegistry(value: EcrImageRegistryProperty[] | cdktn.IResolvable) {
        this._ecrImageRegistry.internalValue = value;
    }
    public resetEcrImageRegistry() {
        this._ecrImageRegistry.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImageRegistryInput() {
        return this._ecrImageRegistry.internalValue;
    }

    // ecr_image_repository_name - computed: true, optional: true, required: false
    private _ecrImageRepositoryName = new EcrImageRepositoryNamePropertyList(this, "ecr_image_repository_name", false);
    public get ecrImageRepositoryName() {
        return this._ecrImageRepositoryName;
    }
    public putEcrImageRepositoryName(value: EcrImageRepositoryNameProperty[] | cdktn.IResolvable) {
        this._ecrImageRepositoryName.internalValue = value;
    }
    public resetEcrImageRepositoryName() {
        this._ecrImageRepositoryName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImageRepositoryNameInput() {
        return this._ecrImageRepositoryName.internalValue;
    }

    // ecr_image_tags - computed: true, optional: true, required: false
    private _ecrImageTags = new EcrImageTagsPropertyList(this, "ecr_image_tags", false);
    public get ecrImageTags() {
        return this._ecrImageTags;
    }
    public putEcrImageTags(value: EcrImageTagsProperty[] | cdktn.IResolvable) {
        this._ecrImageTags.internalValue = value;
    }
    public resetEcrImageTags() {
        this._ecrImageTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImageTagsInput() {
        return this._ecrImageTags.internalValue;
    }

    // epss_score - computed: true, optional: true, required: false
    private _epssScore = new NumberFilterPropertyList(this, "epss_score", false);
    public get epssScore() {
        return this._epssScore;
    }
    public putEpssScore(value: NumberFilterProperty[] | cdktn.IResolvable) {
        this._epssScore.internalValue = value;
    }
    public resetEpssScore() {
        this._epssScore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get epssScoreInput() {
        return this._epssScore.internalValue;
    }

    // exploit_available - computed: true, optional: true, required: false
    private _exploitAvailable = new ExploitAvailablePropertyList(this, "exploit_available", false);
    public get exploitAvailable() {
        return this._exploitAvailable;
    }
    public putExploitAvailable(value: ExploitAvailableProperty[] | cdktn.IResolvable) {
        this._exploitAvailable.internalValue = value;
    }
    public resetExploitAvailable() {
        this._exploitAvailable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exploitAvailableInput() {
        return this._exploitAvailable.internalValue;
    }

    // finding_arn - computed: true, optional: true, required: false
    private _findingArn = new FindingArnPropertyList(this, "finding_arn", false);
    public get findingArn() {
        return this._findingArn;
    }
    public putFindingArn(value: FindingArnProperty[] | cdktn.IResolvable) {
        this._findingArn.internalValue = value;
    }
    public resetFindingArn() {
        this._findingArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingArnInput() {
        return this._findingArn.internalValue;
    }

    // finding_status - computed: true, optional: true, required: false
    private _findingStatus = new FindingStatusPropertyList(this, "finding_status", false);
    public get findingStatus() {
        return this._findingStatus;
    }
    public putFindingStatus(value: FindingStatusProperty[] | cdktn.IResolvable) {
        this._findingStatus.internalValue = value;
    }
    public resetFindingStatus() {
        this._findingStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingStatusInput() {
        return this._findingStatus.internalValue;
    }

    // finding_type - computed: true, optional: true, required: false
    private _findingType = new FindingTypePropertyList(this, "finding_type", false);
    public get findingType() {
        return this._findingType;
    }
    public putFindingType(value: FindingTypeProperty[] | cdktn.IResolvable) {
        this._findingType.internalValue = value;
    }
    public resetFindingType() {
        this._findingType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingTypeInput() {
        return this._findingType.internalValue;
    }

    // first_observed_at - computed: true, optional: true, required: false
    private _firstObservedAt = new FirstObservedAtPropertyList(this, "first_observed_at", false);
    public get firstObservedAt() {
        return this._firstObservedAt;
    }
    public putFirstObservedAt(value: FirstObservedAtProperty[] | cdktn.IResolvable) {
        this._firstObservedAt.internalValue = value;
    }
    public resetFirstObservedAt() {
        this._firstObservedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstObservedAtInput() {
        return this._firstObservedAt.internalValue;
    }

    // fix_available - computed: true, optional: true, required: false
    private _fixAvailable = new FixAvailablePropertyList(this, "fix_available", false);
    public get fixAvailable() {
        return this._fixAvailable;
    }
    public putFixAvailable(value: FixAvailableProperty[] | cdktn.IResolvable) {
        this._fixAvailable.internalValue = value;
    }
    public resetFixAvailable() {
        this._fixAvailable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixAvailableInput() {
        return this._fixAvailable.internalValue;
    }

    // inspector_score - computed: true, optional: true, required: false
    private _inspectorScore = new InspectorScorePropertyList(this, "inspector_score", false);
    public get inspectorScore() {
        return this._inspectorScore;
    }
    public putInspectorScore(value: InspectorScoreProperty[] | cdktn.IResolvable) {
        this._inspectorScore.internalValue = value;
    }
    public resetInspectorScore() {
        this._inspectorScore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inspectorScoreInput() {
        return this._inspectorScore.internalValue;
    }

    // lambda_function_execution_role_arn - computed: true, optional: true, required: false
    private _lambdaFunctionExecutionRoleArn = new LambdaFunctionExecutionRoleArnPropertyList(this, "lambda_function_execution_role_arn", false);
    public get lambdaFunctionExecutionRoleArn() {
        return this._lambdaFunctionExecutionRoleArn;
    }
    public putLambdaFunctionExecutionRoleArn(value: LambdaFunctionExecutionRoleArnProperty[] | cdktn.IResolvable) {
        this._lambdaFunctionExecutionRoleArn.internalValue = value;
    }
    public resetLambdaFunctionExecutionRoleArn() {
        this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionExecutionRoleArnInput() {
        return this._lambdaFunctionExecutionRoleArn.internalValue;
    }

    // lambda_function_last_modified_at - computed: true, optional: true, required: false
    private _lambdaFunctionLastModifiedAt = new LambdaFunctionLastModifiedAtPropertyList(this, "lambda_function_last_modified_at", false);
    public get lambdaFunctionLastModifiedAt() {
        return this._lambdaFunctionLastModifiedAt;
    }
    public putLambdaFunctionLastModifiedAt(value: LambdaFunctionLastModifiedAtProperty[] | cdktn.IResolvable) {
        this._lambdaFunctionLastModifiedAt.internalValue = value;
    }
    public resetLambdaFunctionLastModifiedAt() {
        this._lambdaFunctionLastModifiedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionLastModifiedAtInput() {
        return this._lambdaFunctionLastModifiedAt.internalValue;
    }

    // lambda_function_layers - computed: true, optional: true, required: false
    private _lambdaFunctionLayers = new LambdaFunctionLayersPropertyList(this, "lambda_function_layers", false);
    public get lambdaFunctionLayers() {
        return this._lambdaFunctionLayers;
    }
    public putLambdaFunctionLayers(value: LambdaFunctionLayersProperty[] | cdktn.IResolvable) {
        this._lambdaFunctionLayers.internalValue = value;
    }
    public resetLambdaFunctionLayers() {
        this._lambdaFunctionLayers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionLayersInput() {
        return this._lambdaFunctionLayers.internalValue;
    }

    // lambda_function_name - computed: true, optional: true, required: false
    private _lambdaFunctionName = new LambdaFunctionNamePropertyList(this, "lambda_function_name", false);
    public get lambdaFunctionName() {
        return this._lambdaFunctionName;
    }
    public putLambdaFunctionName(value: LambdaFunctionNameProperty[] | cdktn.IResolvable) {
        this._lambdaFunctionName.internalValue = value;
    }
    public resetLambdaFunctionName() {
        this._lambdaFunctionName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionNameInput() {
        return this._lambdaFunctionName.internalValue;
    }

    // lambda_function_runtime - computed: true, optional: true, required: false
    private _lambdaFunctionRuntime = new LambdaFunctionRuntimePropertyList(this, "lambda_function_runtime", false);
    public get lambdaFunctionRuntime() {
        return this._lambdaFunctionRuntime;
    }
    public putLambdaFunctionRuntime(value: LambdaFunctionRuntimeProperty[] | cdktn.IResolvable) {
        this._lambdaFunctionRuntime.internalValue = value;
    }
    public resetLambdaFunctionRuntime() {
        this._lambdaFunctionRuntime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionRuntimeInput() {
        return this._lambdaFunctionRuntime.internalValue;
    }

    // last_observed_at - computed: true, optional: true, required: false
    private _lastObservedAt = new LastObservedAtPropertyList(this, "last_observed_at", false);
    public get lastObservedAt() {
        return this._lastObservedAt;
    }
    public putLastObservedAt(value: LastObservedAtProperty[] | cdktn.IResolvable) {
        this._lastObservedAt.internalValue = value;
    }
    public resetLastObservedAt() {
        this._lastObservedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastObservedAtInput() {
        return this._lastObservedAt.internalValue;
    }

    // network_protocol - computed: true, optional: true, required: false
    private _networkProtocol = new NetworkProtocolPropertyList(this, "network_protocol", false);
    public get networkProtocol() {
        return this._networkProtocol;
    }
    public putNetworkProtocol(value: NetworkProtocolProperty[] | cdktn.IResolvable) {
        this._networkProtocol.internalValue = value;
    }
    public resetNetworkProtocol() {
        this._networkProtocol.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkProtocolInput() {
        return this._networkProtocol.internalValue;
    }

    // port_range - computed: true, optional: true, required: false
    private _portRange = new PortRangeFilterPropertyList(this, "port_range", false);
    public get portRange() {
        return this._portRange;
    }
    public putPortRange(value: PortRangeFilterProperty[] | cdktn.IResolvable) {
        this._portRange.internalValue = value;
    }
    public resetPortRange() {
        this._portRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangeInput() {
        return this._portRange.internalValue;
    }

    // related_vulnerabilities - computed: true, optional: true, required: false
    private _relatedVulnerabilities = new RelatedVulnerabilitiesPropertyList(this, "related_vulnerabilities", false);
    public get relatedVulnerabilities() {
        return this._relatedVulnerabilities;
    }
    public putRelatedVulnerabilities(value: RelatedVulnerabilitiesProperty[] | cdktn.IResolvable) {
        this._relatedVulnerabilities.internalValue = value;
    }
    public resetRelatedVulnerabilities() {
        this._relatedVulnerabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relatedVulnerabilitiesInput() {
        return this._relatedVulnerabilities.internalValue;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId = new ResourceIdPropertyList(this, "resource_id", false);
    public get resourceId() {
        return this._resourceId;
    }
    public putResourceId(value: ResourceIdProperty[] | cdktn.IResolvable) {
        this._resourceId.internalValue = value;
    }
    public resetResourceId() {
        this._resourceId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId.internalValue;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new MapFilterPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: MapFilterProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType = new ResourceTypePropertyList(this, "resource_type", false);
    public get resourceType() {
        return this._resourceType;
    }
    public putResourceType(value: ResourceTypeProperty[] | cdktn.IResolvable) {
        this._resourceType.internalValue = value;
    }
    public resetResourceType() {
        this._resourceType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType.internalValue;
    }

    // severity - computed: true, optional: true, required: false
    private _severity = new SeverityPropertyList(this, "severity", false);
    public get severity() {
        return this._severity;
    }
    public putSeverity(value: SeverityProperty[] | cdktn.IResolvable) {
        this._severity.internalValue = value;
    }
    public resetSeverity() {
        this._severity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
        return this._severity.internalValue;
    }

    // title - computed: true, optional: true, required: false
    private _title = new TitlePropertyList(this, "title", false);
    public get title() {
        return this._title;
    }
    public putTitle(value: TitleProperty[] | cdktn.IResolvable) {
        this._title.internalValue = value;
    }
    public resetTitle() {
        this._title.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title.internalValue;
    }

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt = new UpdatedAtPropertyList(this, "updated_at", false);
    public get updatedAt() {
        return this._updatedAt;
    }
    public putUpdatedAt(value: UpdatedAtProperty[] | cdktn.IResolvable) {
        this._updatedAt.internalValue = value;
    }
    public resetUpdatedAt() {
        this._updatedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt.internalValue;
    }

    // vendor_severity - computed: true, optional: true, required: false
    private _vendorSeverity = new VendorSeverityPropertyList(this, "vendor_severity", false);
    public get vendorSeverity() {
        return this._vendorSeverity;
    }
    public putVendorSeverity(value: VendorSeverityProperty[] | cdktn.IResolvable) {
        this._vendorSeverity.internalValue = value;
    }
    public resetVendorSeverity() {
        this._vendorSeverity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vendorSeverityInput() {
        return this._vendorSeverity.internalValue;
    }

    // vulnerability_id - computed: true, optional: true, required: false
    private _vulnerabilityId = new VulnerabilityIdPropertyList(this, "vulnerability_id", false);
    public get vulnerabilityId() {
        return this._vulnerabilityId;
    }
    public putVulnerabilityId(value: VulnerabilityIdProperty[] | cdktn.IResolvable) {
        this._vulnerabilityId.internalValue = value;
    }
    public resetVulnerabilityId() {
        this._vulnerabilityId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vulnerabilityIdInput() {
        return this._vulnerabilityId.internalValue;
    }

    // vulnerability_source - computed: true, optional: true, required: false
    private _vulnerabilitySource = new VulnerabilitySourcePropertyList(this, "vulnerability_source", false);
    public get vulnerabilitySource() {
        return this._vulnerabilitySource;
    }
    public putVulnerabilitySource(value: VulnerabilitySourceProperty[] | cdktn.IResolvable) {
        this._vulnerabilitySource.internalValue = value;
    }
    public resetVulnerabilitySource() {
        this._vulnerabilitySource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vulnerabilitySourceInput() {
        return this._vulnerabilitySource.internalValue;
    }

    // vulnerable_packages - computed: true, optional: true, required: false
    private _vulnerablePackages = new PackageFilterPropertyList(this, "vulnerable_packages", false);
    public get vulnerablePackages() {
        return this._vulnerablePackages;
    }
    public putVulnerablePackages(value: PackageFilterProperty[] | cdktn.IResolvable) {
        this._vulnerablePackages.internalValue = value;
    }
    public resetVulnerablePackages() {
        this._vulnerablePackages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vulnerablePackagesInput() {
        return this._vulnerablePackages.internalValue;
    }
}
}
