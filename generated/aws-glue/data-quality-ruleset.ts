// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataQualityRulesetProps extends cdktn.TerraformMetaArguments {
    /**
    * A unique token for idempotency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#client_token CcDataQualityRuleset#client_token}
    */
    readonly clientToken?: string;
    /**
    * A description of the data quality ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#description CcDataQualityRuleset#description}
    */
    readonly description?: string;
    /**
    * A unique name for the data quality ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#name CcDataQualityRuleset#name}
    */
    readonly name: string;
    /**
    * A Data Quality Definition Language (DQDL) ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#ruleset CcDataQualityRuleset#ruleset}
    */
    readonly ruleset?: string;
    /**
    * A map of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#tags CcDataQualityRuleset#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * An object representing an AWS Glue table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#target_table CcDataQualityRuleset#target_table}
    */
    readonly targetTable?: CcDataQualityRuleset.DataQualityTargetTableProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset awscc_glue_data_quality_ruleset}
*/
export class CcDataQualityRuleset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_data_quality_ruleset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataQualityRuleset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataQualityRuleset to import
    * @param importFromId The id of the existing CcDataQualityRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataQualityRuleset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_data_quality_ruleset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset awscc_glue_data_quality_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataQualityRulesetProps
    */
    public constructor(scope: Construct, id: string, config: CcDataQualityRulesetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_data_quality_ruleset',
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
        this._clientToken = config.clientToken;
        this._description = config.description;
        this._name = config.name;
        this._ruleset = config.ruleset;
        this._tags = config.tags;
        this._targetTable.internalValue = config.targetTable;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_token - computed: true, optional: true, required: false
    private _clientToken?: string; 
    public get clientToken() {
        return this.getStringAttribute('client_token');
    }
    public set clientToken(value: string) {
        this._clientToken = value;
    }
    public resetClientToken() {
        this._clientToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientTokenInput() {
        return this._clientToken;
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

    // ruleset - computed: true, optional: true, required: false
    private _ruleset?: string; 
    public get ruleset() {
        return this.getStringAttribute('ruleset');
    }
    public set ruleset(value: string) {
        this._ruleset = value;
    }
    public resetRuleset() {
        this._ruleset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesetInput() {
        return this._ruleset;
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

    // target_table - computed: true, optional: true, required: false
    private _targetTable = new CcDataQualityRuleset.DataQualityTargetTablePropertyOutputReference(this, "target_table");
    public get targetTable() {
        return this._targetTable;
    }
    public putTargetTable(value: CcDataQualityRuleset.DataQualityTargetTableProperty) {
        this._targetTable.internalValue = value;
    }
    public resetTargetTable() {
        this._targetTable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTableInput() {
        return this._targetTable.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_token: cdktn.stringToTerraform(this._clientToken),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            ruleset: cdktn.stringToTerraform(this._ruleset),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target_table: ccDataQualityRulesetDataQualityTargetTablePropertyToTerraform(this._targetTable.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_token: {
                value: cdktn.stringToHclTerraform(this._clientToken),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ruleset: {
                value: cdktn.stringToHclTerraform(this._ruleset),
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
            target_table: {
                value: ccDataQualityRulesetDataQualityTargetTablePropertyToHclTerraform(this._targetTable.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataQualityRuleset.DataQualityTargetTableProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataQualityRulesetDataQualityTargetTablePropertyToTerraform(struct?: CcDataQualityRuleset.DataQualityTargetTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDataQualityRulesetDataQualityTargetTablePropertyToHclTerraform(struct?: CcDataQualityRuleset.DataQualityTargetTableProperty | cdktn.IResolvable): any {
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
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataQualityRuleset {
export interface DataQualityTargetTableProperty {
    /**
    * The name of the database where the AWS Glue table exists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#database_name CcDataQualityRuleset#database_name}
    */
    readonly databaseName?: string;
    /**
    * The name of the AWS Glue table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_data_quality_ruleset#table_name CcDataQualityRuleset#table_name}
    */
    readonly tableName?: string;
}
export class DataQualityTargetTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataQualityTargetTableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataQualityTargetTableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._tableName = value.tableName;
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

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
}
