// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGroupingConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions CcGroupingConfiguration#grouping_attribute_definitions}
    */
    readonly groupingAttributeDefinitions: CcGroupingConfiguration.GroupingAttributeDefinitionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration awscc_applicationsignals_grouping_configuration}
*/
export class CcGroupingConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_applicationsignals_grouping_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGroupingConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGroupingConfiguration to import
    * @param importFromId The id of the existing CcGroupingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGroupingConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationsignals_grouping_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration awscc_applicationsignals_grouping_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGroupingConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcGroupingConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_applicationsignals_grouping_configuration',
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
        this._groupingAttributeDefinitions.internalValue = config.groupingAttributeDefinitions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // grouping_attribute_definitions - computed: false, optional: false, required: true
    private _groupingAttributeDefinitions = new CcGroupingConfiguration.GroupingAttributeDefinitionPropertyList(this, "grouping_attribute_definitions", false);
    public get groupingAttributeDefinitions() {
        return this._groupingAttributeDefinitions;
    }
    public putGroupingAttributeDefinitions(value: CcGroupingConfiguration.GroupingAttributeDefinitionProperty[] | cdktn.IResolvable) {
        this._groupingAttributeDefinitions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupingAttributeDefinitionsInput() {
        return this._groupingAttributeDefinitions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
            grouping_attribute_definitions: cdktn.listMapper(ccGroupingConfigurationGroupingAttributeDefinitionPropertyToTerraform, false)(this._groupingAttributeDefinitions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            grouping_attribute_definitions: {
                value: cdktn.listMapperHcl(ccGroupingConfigurationGroupingAttributeDefinitionPropertyToHclTerraform, false)(this._groupingAttributeDefinitions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGroupingConfiguration.GroupingAttributeDefinitionPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGroupingConfigurationGroupingAttributeDefinitionPropertyToTerraform(struct?: CcGroupingConfiguration.GroupingAttributeDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_grouping_value: cdktn.stringToTerraform(struct!.defaultGroupingValue),
        grouping_name: cdktn.stringToTerraform(struct!.groupingName),
        grouping_source_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupingSourceKeys),
    }
}


export function ccGroupingConfigurationGroupingAttributeDefinitionPropertyToHclTerraform(struct?: CcGroupingConfiguration.GroupingAttributeDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_grouping_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultGroupingValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grouping_name: {
            value: cdktn.stringToHclTerraform(struct!.groupingName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grouping_source_keys: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupingSourceKeys),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGroupingConfiguration {
export interface GroupingAttributeDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration#default_grouping_value CcGroupingConfiguration#default_grouping_value}
    */
    readonly defaultGroupingValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration#grouping_name CcGroupingConfiguration#grouping_name}
    */
    readonly groupingName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys CcGroupingConfiguration#grouping_source_keys}
    */
    readonly groupingSourceKeys: string[];
}
export class GroupingAttributeDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GroupingAttributeDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultGroupingValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultGroupingValue = this._defaultGroupingValue;
        }
        if (this._groupingName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupingName = this._groupingName;
        }
        if (this._groupingSourceKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupingSourceKeys = this._groupingSourceKeys;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupingAttributeDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultGroupingValue = undefined;
            this._groupingName = undefined;
            this._groupingSourceKeys = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultGroupingValue = value.defaultGroupingValue;
            this._groupingName = value.groupingName;
            this._groupingSourceKeys = value.groupingSourceKeys;
        }
    }

    // default_grouping_value - computed: true, optional: true, required: false
    private _defaultGroupingValue?: string; 
    public get defaultGroupingValue() {
        return this.getStringAttribute('default_grouping_value');
    }
    public set defaultGroupingValue(value: string) {
        this._defaultGroupingValue = value;
    }
    public resetDefaultGroupingValue() {
        this._defaultGroupingValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultGroupingValueInput() {
        return this._defaultGroupingValue;
    }

    // grouping_name - computed: false, optional: false, required: true
    private _groupingName?: string; 
    public get groupingName() {
        return this.getStringAttribute('grouping_name');
    }
    public set groupingName(value: string) {
        this._groupingName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupingNameInput() {
        return this._groupingName;
    }

    // grouping_source_keys - computed: false, optional: false, required: true
    private _groupingSourceKeys?: string[]; 
    public get groupingSourceKeys() {
        return this.getListAttribute('grouping_source_keys');
    }
    public set groupingSourceKeys(value: string[]) {
        this._groupingSourceKeys = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupingSourceKeysInput() {
        return this._groupingSourceKeys;
    }
}

export class GroupingAttributeDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : GroupingAttributeDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): GroupingAttributeDefinitionPropertyOutputReference {
        return new GroupingAttributeDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
