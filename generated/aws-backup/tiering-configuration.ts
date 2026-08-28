// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTieringConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#backup_vault_name CcTieringConfiguration#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#resource_selection CcTieringConfiguration#resource_selection}
    */
    readonly resourceSelection: CcTieringConfiguration.ResourceSelectionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#tiering_configuration_name CcTieringConfiguration#tiering_configuration_name}
    */
    readonly tieringConfigurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#tiering_configuration_tags CcTieringConfiguration#tiering_configuration_tags}
    */
    readonly tieringConfigurationTags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration awscc_backup_tiering_configuration}
*/
export class CcTieringConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_tiering_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTieringConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTieringConfiguration to import
    * @param importFromId The id of the existing CcTieringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTieringConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_tiering_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration awscc_backup_tiering_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTieringConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcTieringConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_tiering_configuration',
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
        this._backupVaultName = config.backupVaultName;
        this._resourceSelection.internalValue = config.resourceSelection;
        this._tieringConfigurationName = config.tieringConfigurationName;
        this._tieringConfigurationTags = config.tieringConfigurationTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // backup_vault_name - computed: false, optional: false, required: true
    private _backupVaultName?: string; 
    public get backupVaultName() {
        return this.getStringAttribute('backup_vault_name');
    }
    public set backupVaultName(value: string) {
        this._backupVaultName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVaultNameInput() {
        return this._backupVaultName;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // resource_selection - computed: false, optional: false, required: true
    private _resourceSelection = new CcTieringConfiguration.ResourceSelectionPropertyList(this, "resource_selection", false);
    public get resourceSelection() {
        return this._resourceSelection;
    }
    public putResourceSelection(value: CcTieringConfiguration.ResourceSelectionProperty[] | cdktn.IResolvable) {
        this._resourceSelection.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSelectionInput() {
        return this._resourceSelection.internalValue;
    }

    // tiering_configuration_arn - computed: true, optional: false, required: false
    public get tieringConfigurationArn() {
        return this.getStringAttribute('tiering_configuration_arn');
    }

    // tiering_configuration_name - computed: false, optional: false, required: true
    private _tieringConfigurationName?: string; 
    public get tieringConfigurationName() {
        return this.getStringAttribute('tiering_configuration_name');
    }
    public set tieringConfigurationName(value: string) {
        this._tieringConfigurationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tieringConfigurationNameInput() {
        return this._tieringConfigurationName;
    }

    // tiering_configuration_tags - computed: true, optional: true, required: false
    private _tieringConfigurationTags?: { [key: string]: string }; 
    public get tieringConfigurationTags() {
        return this.getStringMapAttribute('tiering_configuration_tags');
    }
    public set tieringConfigurationTags(value: { [key: string]: string }) {
        this._tieringConfigurationTags = value;
    }
    public resetTieringConfigurationTags() {
        this._tieringConfigurationTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tieringConfigurationTagsInput() {
        return this._tieringConfigurationTags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            backup_vault_name: cdktn.stringToTerraform(this._backupVaultName),
            resource_selection: cdktn.listMapper(ccTieringConfigurationResourceSelectionPropertyToTerraform, false)(this._resourceSelection.internalValue),
            tiering_configuration_name: cdktn.stringToTerraform(this._tieringConfigurationName),
            tiering_configuration_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tieringConfigurationTags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            backup_vault_name: {
                value: cdktn.stringToHclTerraform(this._backupVaultName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_selection: {
                value: cdktn.listMapperHcl(ccTieringConfigurationResourceSelectionPropertyToHclTerraform, false)(this._resourceSelection.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTieringConfiguration.ResourceSelectionPropertyList",
            },
            tiering_configuration_name: {
                value: cdktn.stringToHclTerraform(this._tieringConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tiering_configuration_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tieringConfigurationTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTieringConfigurationResourceSelectionPropertyToTerraform(struct?: CcTieringConfiguration.ResourceSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
        tiering_down_settings_in_days: cdktn.numberToTerraform(struct!.tieringDownSettingsInDays),
    }
}


export function ccTieringConfigurationResourceSelectionPropertyToHclTerraform(struct?: CcTieringConfiguration.ResourceSelectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tiering_down_settings_in_days: {
            value: cdktn.numberToHclTerraform(struct!.tieringDownSettingsInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTieringConfiguration {
export interface ResourceSelectionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#resource_type CcTieringConfiguration#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#resources CcTieringConfiguration#resources}
    */
    readonly resources: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days CcTieringConfiguration#tiering_down_settings_in_days}
    */
    readonly tieringDownSettingsInDays: number;
}
export class ResourceSelectionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceSelectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        if (this._tieringDownSettingsInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.tieringDownSettingsInDays = this._tieringDownSettingsInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceSelectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._resources = undefined;
            this._tieringDownSettingsInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._resources = value.resources;
            this._tieringDownSettingsInDays = value.tieringDownSettingsInDays;
        }
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // resources - computed: false, optional: false, required: true
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }

    // tiering_down_settings_in_days - computed: false, optional: false, required: true
    private _tieringDownSettingsInDays?: number; 
    public get tieringDownSettingsInDays() {
        return this.getNumberAttribute('tiering_down_settings_in_days');
    }
    public set tieringDownSettingsInDays(value: number) {
        this._tieringDownSettingsInDays = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tieringDownSettingsInDaysInput() {
        return this._tieringDownSettingsInDays;
    }
}

export class ResourceSelectionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceSelectionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceSelectionPropertyOutputReference {
        return new ResourceSelectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
