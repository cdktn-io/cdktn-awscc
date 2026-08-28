// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdMappingTableProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#description CcIdMappingTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CcIdMappingTable#input_reference_config}
    */
    readonly inputReferenceConfig: CcIdMappingTable.IdMappingTableInputReferenceConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CcIdMappingTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CcIdMappingTable#membership_identifier}
    */
    readonly membershipIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#name CcIdMappingTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#tags CcIdMappingTable#tags}
    */
    readonly tags?: CcIdMappingTable.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table awscc_cleanrooms_id_mapping_table}
*/
export class CcIdMappingTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanrooms_id_mapping_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdMappingTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdMappingTable to import
    * @param importFromId The id of the existing CcIdMappingTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdMappingTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_id_mapping_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table awscc_cleanrooms_id_mapping_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdMappingTableProps
    */
    public constructor(scope: Construct, id: string, config: CcIdMappingTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanrooms_id_mapping_table',
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
        this._inputReferenceConfig.internalValue = config.inputReferenceConfig;
        this._kmsKeyArn = config.kmsKeyArn;
        this._membershipIdentifier = config.membershipIdentifier;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // collaboration_arn - computed: true, optional: false, required: false
    public get collaborationArn() {
        return this.getStringAttribute('collaboration_arn');
    }

    // collaboration_identifier - computed: true, optional: false, required: false
    public get collaborationIdentifier() {
        return this.getStringAttribute('collaboration_identifier');
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

    // id_mapping_table_identifier - computed: true, optional: false, required: false
    public get idMappingTableIdentifier() {
        return this.getStringAttribute('id_mapping_table_identifier');
    }

    // input_reference_config - computed: false, optional: false, required: true
    private _inputReferenceConfig = new CcIdMappingTable.IdMappingTableInputReferenceConfigPropertyOutputReference(this, "input_reference_config");
    public get inputReferenceConfig() {
        return this._inputReferenceConfig;
    }
    public putInputReferenceConfig(value: CcIdMappingTable.IdMappingTableInputReferenceConfigProperty) {
        this._inputReferenceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputReferenceConfigInput() {
        return this._inputReferenceConfig.internalValue;
    }

    // input_reference_properties - computed: true, optional: false, required: false
    private _inputReferenceProperties = new CcIdMappingTable.InputReferencePropertiesPropertyOutputReference(this, "input_reference_properties");
    public get inputReferenceProperties() {
        return this._inputReferenceProperties;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // membership_arn - computed: true, optional: false, required: false
    public get membershipArn() {
        return this.getStringAttribute('membership_arn');
    }

    // membership_identifier - computed: false, optional: false, required: true
    private _membershipIdentifier?: string; 
    public get membershipIdentifier() {
        return this.getStringAttribute('membership_identifier');
    }
    public set membershipIdentifier(value: string) {
        this._membershipIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get membershipIdentifierInput() {
        return this._membershipIdentifier;
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
    private _tags = new CcIdMappingTable.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIdMappingTable.TagProperty[] | cdktn.IResolvable) {
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
            input_reference_config: ccIdMappingTableIdMappingTableInputReferenceConfigPropertyToTerraform(this._inputReferenceConfig.internalValue),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccIdMappingTableTagPropertyToTerraform, false)(this._tags.internalValue),
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
            input_reference_config: {
                value: ccIdMappingTableIdMappingTableInputReferenceConfigPropertyToHclTerraform(this._inputReferenceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIdMappingTable.IdMappingTableInputReferenceConfigProperty",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            membership_identifier: {
                value: cdktn.stringToHclTerraform(this._membershipIdentifier),
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
            tags: {
                value: cdktn.listMapperHcl(ccIdMappingTableTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIdMappingTable.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIdMappingTableIdMappingTableInputReferenceConfigPropertyToTerraform(struct?: CcIdMappingTable.IdMappingTableInputReferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_reference_arn: cdktn.stringToTerraform(struct!.inputReferenceArn),
        manage_resource_policies: cdktn.booleanToTerraform(struct!.manageResourcePolicies),
    }
}


export function ccIdMappingTableIdMappingTableInputReferenceConfigPropertyToHclTerraform(struct?: CcIdMappingTable.IdMappingTableInputReferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_reference_arn: {
            value: cdktn.stringToHclTerraform(struct!.inputReferenceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manage_resource_policies: {
            value: cdktn.booleanToHclTerraform(struct!.manageResourcePolicies),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdMappingTableIdMappingTableInputSourcePropertyToTerraform(struct?: CcIdMappingTable.IdMappingTableInputSourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccIdMappingTableIdMappingTableInputSourcePropertyToHclTerraform(struct?: CcIdMappingTable.IdMappingTableInputSourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccIdMappingTableInputReferencePropertiesPropertyToTerraform(struct?: CcIdMappingTable.InputReferencePropertiesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccIdMappingTableInputReferencePropertiesPropertyToHclTerraform(struct?: CcIdMappingTable.InputReferencePropertiesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccIdMappingTableTagPropertyToTerraform(struct?: CcIdMappingTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdMappingTableTagPropertyToHclTerraform(struct?: CcIdMappingTable.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIdMappingTable {
export interface IdMappingTableInputReferenceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#input_reference_arn CcIdMappingTable#input_reference_arn}
    */
    readonly inputReferenceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#manage_resource_policies CcIdMappingTable#manage_resource_policies}
    */
    readonly manageResourcePolicies: boolean | cdktn.IResolvable;
}
export class IdMappingTableInputReferenceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdMappingTableInputReferenceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputReferenceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputReferenceArn = this._inputReferenceArn;
        }
        if (this._manageResourcePolicies !== undefined) {
            hasAnyValues = true;
            internalValueResult.manageResourcePolicies = this._manageResourcePolicies;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdMappingTableInputReferenceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputReferenceArn = undefined;
            this._manageResourcePolicies = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputReferenceArn = value.inputReferenceArn;
            this._manageResourcePolicies = value.manageResourcePolicies;
        }
    }

    // input_reference_arn - computed: false, optional: false, required: true
    private _inputReferenceArn?: string; 
    public get inputReferenceArn() {
        return this.getStringAttribute('input_reference_arn');
    }
    public set inputReferenceArn(value: string) {
        this._inputReferenceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputReferenceArnInput() {
        return this._inputReferenceArn;
    }

    // manage_resource_policies - computed: false, optional: false, required: true
    private _manageResourcePolicies?: boolean | cdktn.IResolvable; 
    public get manageResourcePolicies() {
        return this.getBooleanAttribute('manage_resource_policies');
    }
    public set manageResourcePolicies(value: boolean | cdktn.IResolvable) {
        this._manageResourcePolicies = value;
    }
    // Temporarily expose input value. Use with caution.
    public get manageResourcePoliciesInput() {
        return this._manageResourcePolicies;
    }
}
export interface IdMappingTableInputSourceProperty {
}
export class IdMappingTableInputSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IdMappingTableInputSourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdMappingTableInputSourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // id_namespace_association_id - computed: true, optional: false, required: false
    public get idNamespaceAssociationId() {
        return this.getStringAttribute('id_namespace_association_id');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}

export class IdMappingTableInputSourcePropertyList extends cdktn.ComplexList {

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
    public get(index: number): IdMappingTableInputSourcePropertyOutputReference {
        return new IdMappingTableInputSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputReferencePropertiesProperty {
}
export class InputReferencePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputReferencePropertiesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputReferencePropertiesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // id_mapping_table_input_source - computed: true, optional: false, required: false
    private _idMappingTableInputSource = new IdMappingTableInputSourcePropertyList(this, "id_mapping_table_input_source", false);
    public get idMappingTableInputSource() {
        return this._idMappingTableInputSource;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#key CcIdMappingTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#value CcIdMappingTable#value}
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
