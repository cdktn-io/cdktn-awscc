// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataIntegrationProps extends cdktn.TerraformMetaArguments {
    /**
    * The data integration description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#description CcDataIntegration#description}
    */
    readonly description?: string;
    /**
    * The configuration for what files should be pulled from the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#file_configuration CcDataIntegration#file_configuration}
    */
    readonly fileConfiguration?: CcDataIntegration.FileConfigurationProperty;
    /**
    * The KMS key of the data integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#kms_key CcDataIntegration#kms_key}
    */
    readonly kmsKey: string;
    /**
    * The name of the data integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#name CcDataIntegration#name}
    */
    readonly name: string;
    /**
    * The configuration for what data should be pulled from the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#object_configuration CcDataIntegration#object_configuration}
    */
    readonly objectConfiguration?: { [key: string]: { [key: string]: string[] } | cdktn.IResolvable } | cdktn.IResolvable;
    /**
    * The name of the data and how often it should be pulled from the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#schedule_config CcDataIntegration#schedule_config}
    */
    readonly scheduleConfig?: CcDataIntegration.ScheduleConfigProperty;
    /**
    * The URI of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#source_uri CcDataIntegration#source_uri}
    */
    readonly sourceUri: string;
    /**
    * The tags (keys and values) associated with the data integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#tags CcDataIntegration#tags}
    */
    readonly tags?: CcDataIntegration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration awscc_appintegrations_data_integration}
*/
export class CcDataIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appintegrations_data_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataIntegration to import
    * @param importFromId The id of the existing CcDataIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appintegrations_data_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration awscc_appintegrations_data_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataIntegrationProps
    */
    public constructor(scope: Construct, id: string, config: CcDataIntegrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appintegrations_data_integration',
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
        this._fileConfiguration.internalValue = config.fileConfiguration;
        this._kmsKey = config.kmsKey;
        this._name = config.name;
        this._objectConfiguration = config.objectConfiguration;
        this._scheduleConfig.internalValue = config.scheduleConfig;
        this._sourceUri = config.sourceUri;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_integration_arn - computed: true, optional: false, required: false
    public get dataIntegrationArn() {
        return this.getStringAttribute('data_integration_arn');
    }

    // data_integration_id - computed: true, optional: false, required: false
    public get dataIntegrationId() {
        return this.getStringAttribute('data_integration_id');
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

    // file_configuration - computed: true, optional: true, required: false
    private _fileConfiguration = new CcDataIntegration.FileConfigurationPropertyOutputReference(this, "file_configuration");
    public get fileConfiguration() {
        return this._fileConfiguration;
    }
    public putFileConfiguration(value: CcDataIntegration.FileConfigurationProperty) {
        this._fileConfiguration.internalValue = value;
    }
    public resetFileConfiguration() {
        this._fileConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileConfigurationInput() {
        return this._fileConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key - computed: false, optional: false, required: true
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
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

    // object_configuration - computed: true, optional: true, required: false
    private _objectConfiguration?: { [key: string]: { [key: string]: string[] } | cdktn.IResolvable } | cdktn.IResolvable; 
    public get objectConfiguration() {
        return this.interpolationForAttribute('object_configuration');
    }
    public set objectConfiguration(value: { [key: string]: { [key: string]: string[] } | cdktn.IResolvable } | cdktn.IResolvable) {
        this._objectConfiguration = value;
    }
    public resetObjectConfiguration() {
        this._objectConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectConfigurationInput() {
        return this._objectConfiguration;
    }

    // schedule_config - computed: true, optional: true, required: false
    private _scheduleConfig = new CcDataIntegration.ScheduleConfigPropertyOutputReference(this, "schedule_config");
    public get scheduleConfig() {
        return this._scheduleConfig;
    }
    public putScheduleConfig(value: CcDataIntegration.ScheduleConfigProperty) {
        this._scheduleConfig.internalValue = value;
    }
    public resetScheduleConfig() {
        this._scheduleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleConfigInput() {
        return this._scheduleConfig.internalValue;
    }

    // source_uri - computed: false, optional: false, required: true
    private _sourceUri?: string; 
    public get sourceUri() {
        return this.getStringAttribute('source_uri');
    }
    public set sourceUri(value: string) {
        this._sourceUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceUriInput() {
        return this._sourceUri;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataIntegration.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataIntegration.TagProperty[] | cdktn.IResolvable) {
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
            file_configuration: ccDataIntegrationFileConfigurationPropertyToTerraform(this._fileConfiguration.internalValue),
            kms_key: cdktn.stringToTerraform(this._kmsKey),
            name: cdktn.stringToTerraform(this._name),
            object_configuration: cdktn.hashMapper(cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false)))(this._objectConfiguration),
            schedule_config: ccDataIntegrationScheduleConfigPropertyToTerraform(this._scheduleConfig.internalValue),
            source_uri: cdktn.stringToTerraform(this._sourceUri),
            tags: cdktn.listMapper(ccDataIntegrationTagPropertyToTerraform, false)(this._tags.internalValue),
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
            file_configuration: {
                value: ccDataIntegrationFileConfigurationPropertyToHclTerraform(this._fileConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataIntegration.FileConfigurationProperty",
            },
            kms_key: {
                value: cdktn.stringToHclTerraform(this._kmsKey),
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
            object_configuration: {
                value: cdktn.hashMapperHcl(cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)))(this._objectConfiguration),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMapMap",
            },
            schedule_config: {
                value: ccDataIntegrationScheduleConfigPropertyToHclTerraform(this._scheduleConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataIntegration.ScheduleConfigProperty",
            },
            source_uri: {
                value: cdktn.stringToHclTerraform(this._sourceUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataIntegrationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataIntegration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataIntegrationFileConfigurationPropertyToTerraform(struct?: CcDataIntegration.FileConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.filters),
        folders: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.folders),
    }
}


export function ccDataIntegrationFileConfigurationPropertyToHclTerraform(struct?: CcDataIntegration.FileConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.filters),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        folders: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.folders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationScheduleConfigPropertyToTerraform(struct?: CcDataIntegration.ScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        first_execution_from: cdktn.stringToTerraform(struct!.firstExecutionFrom),
        object: cdktn.stringToTerraform(struct!.object),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    }
}


export function ccDataIntegrationScheduleConfigPropertyToHclTerraform(struct?: CcDataIntegration.ScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        first_execution_from: {
            value: cdktn.stringToHclTerraform(struct!.firstExecutionFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object: {
            value: cdktn.stringToHclTerraform(struct!.object),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataIntegrationTagPropertyToTerraform(struct?: CcDataIntegration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataIntegrationTagPropertyToHclTerraform(struct?: CcDataIntegration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataIntegration {
export interface FileConfigurationProperty {
    /**
    * Restrictions for what files should be pulled from the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#filters CcDataIntegration#filters}
    */
    readonly filters?: { [key: string]: string[] } | cdktn.IResolvable;
    /**
    * Identifiers for the source folders to pull all files from recursively.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#folders CcDataIntegration#folders}
    */
    readonly folders?: string[];
}
export class FileConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FileConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters;
        }
        if (this._folders !== undefined) {
            hasAnyValues = true;
            internalValueResult.folders = this._folders;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters = undefined;
            this._folders = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters = value.filters;
            this._folders = value.folders;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get filters() {
        return this.interpolationForAttribute('filters');
    }
    public set filters(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._filters = value;
    }
    public resetFilters() {
        this._filters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters;
    }

    // folders - computed: true, optional: true, required: false
    private _folders?: string[]; 
    public get folders() {
        return this.getListAttribute('folders');
    }
    public set folders(value: string[]) {
        this._folders = value;
    }
    public resetFolders() {
        this._folders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get foldersInput() {
        return this._folders;
    }
}
export interface ScheduleConfigProperty {
    /**
    * The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#first_execution_from CcDataIntegration#first_execution_from}
    */
    readonly firstExecutionFrom?: string;
    /**
    * The name of the object to pull from the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#object CcDataIntegration#object}
    */
    readonly object?: string;
    /**
    * How often the data should be pulled from data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#schedule_expression CcDataIntegration#schedule_expression}
    */
    readonly scheduleExpression?: string;
}
export class ScheduleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firstExecutionFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstExecutionFrom = this._firstExecutionFrom;
        }
        if (this._object !== undefined) {
            hasAnyValues = true;
            internalValueResult.object = this._object;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firstExecutionFrom = undefined;
            this._object = undefined;
            this._scheduleExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firstExecutionFrom = value.firstExecutionFrom;
            this._object = value.object;
            this._scheduleExpression = value.scheduleExpression;
        }
    }

    // first_execution_from - computed: true, optional: true, required: false
    private _firstExecutionFrom?: string; 
    public get firstExecutionFrom() {
        return this.getStringAttribute('first_execution_from');
    }
    public set firstExecutionFrom(value: string) {
        this._firstExecutionFrom = value;
    }
    public resetFirstExecutionFrom() {
        this._firstExecutionFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstExecutionFromInput() {
        return this._firstExecutionFrom;
    }

    // object - computed: true, optional: true, required: false
    private _object?: string; 
    public get object() {
        return this.getStringAttribute('object');
    }
    public set object(value: string) {
        this._object = value;
    }
    public resetObject() {
        this._object = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectInput() {
        return this._object;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }
}
export interface TagProperty {
    /**
    * A key to identify the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#key CcDataIntegration#key}
    */
    readonly key?: string;
    /**
    * Corresponding tag value for the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#value CcDataIntegration#value}
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
