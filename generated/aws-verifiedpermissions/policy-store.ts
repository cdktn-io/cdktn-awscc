// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#deletion_protection CcPolicyStore#deletion_protection}
    */
    readonly deletionProtection?: CcPolicyStore.DeletionProtectionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#description CcPolicyStore#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#encryption_settings CcPolicyStore#encryption_settings}
    */
    readonly encryptionSettings?: CcPolicyStore.EncryptionSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#schema CcPolicyStore#schema}
    */
    readonly schema?: CcPolicyStore.SchemaDefinitionProperty;
    /**
    * The tags to add to the policy store
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#tags CcPolicyStore#tags}
    */
    readonly tags?: CcPolicyStore.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#validation_settings CcPolicyStore#validation_settings}
    */
    readonly validationSettings: CcPolicyStore.ValidationSettingsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}
*/
export class CcPolicyStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_verifiedpermissions_policy_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyStore to import
    * @param importFromId The id of the existing CcPolicyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyStoreProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyStoreProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_verifiedpermissions_policy_store',
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
        this._deletionProtection.internalValue = config.deletionProtection;
        this._description = config.description;
        this._encryptionSettings.internalValue = config.encryptionSettings;
        this._schema.internalValue = config.schema;
        this._tags.internalValue = config.tags;
        this._validationSettings.internalValue = config.validationSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection = new CcPolicyStore.DeletionProtectionPropertyOutputReference(this, "deletion_protection");
    public get deletionProtection() {
        return this._deletionProtection;
    }
    public putDeletionProtection(value: CcPolicyStore.DeletionProtectionProperty) {
        this._deletionProtection.internalValue = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection.internalValue;
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

    // encryption_settings - computed: true, optional: true, required: false
    private _encryptionSettings = new CcPolicyStore.EncryptionSettingsPropertyOutputReference(this, "encryption_settings");
    public get encryptionSettings() {
        return this._encryptionSettings;
    }
    public putEncryptionSettings(value: CcPolicyStore.EncryptionSettingsProperty) {
        this._encryptionSettings.internalValue = value;
    }
    public resetEncryptionSettings() {
        this._encryptionSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionSettingsInput() {
        return this._encryptionSettings.internalValue;
    }

    // encryption_state - computed: true, optional: false, required: false
    private _encryptionState = new CcPolicyStore.EncryptionStatePropertyOutputReference(this, "encryption_state");
    public get encryptionState() {
        return this._encryptionState;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_store_id - computed: true, optional: false, required: false
    public get policyStoreId() {
        return this.getStringAttribute('policy_store_id');
    }

    // schema - computed: true, optional: true, required: false
    private _schema = new CcPolicyStore.SchemaDefinitionPropertyOutputReference(this, "schema");
    public get schema() {
        return this._schema;
    }
    public putSchema(value: CcPolicyStore.SchemaDefinitionProperty) {
        this._schema.internalValue = value;
    }
    public resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPolicyStore.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPolicyStore.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // validation_settings - computed: false, optional: false, required: true
    private _validationSettings = new CcPolicyStore.ValidationSettingsPropertyOutputReference(this, "validation_settings");
    public get validationSettings() {
        return this._validationSettings;
    }
    public putValidationSettings(value: CcPolicyStore.ValidationSettingsProperty) {
        this._validationSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get validationSettingsInput() {
        return this._validationSettings.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deletion_protection: ccPolicyStoreDeletionProtectionPropertyToTerraform(this._deletionProtection.internalValue),
            description: cdktn.stringToTerraform(this._description),
            encryption_settings: ccPolicyStoreEncryptionSettingsPropertyToTerraform(this._encryptionSettings.internalValue),
            schema: ccPolicyStoreSchemaDefinitionPropertyToTerraform(this._schema.internalValue),
            tags: cdktn.listMapper(ccPolicyStoreTagPropertyToTerraform, false)(this._tags.internalValue),
            validation_settings: ccPolicyStoreValidationSettingsPropertyToTerraform(this._validationSettings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deletion_protection: {
                value: ccPolicyStoreDeletionProtectionPropertyToHclTerraform(this._deletionProtection.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicyStore.DeletionProtectionProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_settings: {
                value: ccPolicyStoreEncryptionSettingsPropertyToHclTerraform(this._encryptionSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicyStore.EncryptionSettingsProperty",
            },
            schema: {
                value: ccPolicyStoreSchemaDefinitionPropertyToHclTerraform(this._schema.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicyStore.SchemaDefinitionProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPolicyStoreTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPolicyStore.TagPropertyList",
            },
            validation_settings: {
                value: ccPolicyStoreValidationSettingsPropertyToHclTerraform(this._validationSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicyStore.ValidationSettingsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyStoreDeletionProtectionPropertyToTerraform(struct?: CcPolicyStore.DeletionProtectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccPolicyStoreDeletionProtectionPropertyToHclTerraform(struct?: CcPolicyStore.DeletionProtectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyStoreKmsEncryptionSettingsPropertyToTerraform(struct?: CcPolicyStore.KmsEncryptionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.encryptionContext),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccPolicyStoreKmsEncryptionSettingsPropertyToHclTerraform(struct?: CcPolicyStore.KmsEncryptionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_context: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.encryptionContext),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyStoreEncryptionSettingsPropertyToTerraform(struct?: CcPolicyStore.EncryptionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default: cdktn.stringToTerraform(struct!.default),
        kms_encryption_settings: ccPolicyStoreKmsEncryptionSettingsPropertyToTerraform(struct!.kmsEncryptionSettings),
    }
}


export function ccPolicyStoreEncryptionSettingsPropertyToHclTerraform(struct?: CcPolicyStore.EncryptionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default: {
            value: cdktn.stringToHclTerraform(struct!.default),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_encryption_settings: {
            value: ccPolicyStoreKmsEncryptionSettingsPropertyToHclTerraform(struct!.kmsEncryptionSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "KmsEncryptionSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyStoreKmsEncryptionStatePropertyToTerraform(struct?: CcPolicyStore.KmsEncryptionStateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPolicyStoreKmsEncryptionStatePropertyToHclTerraform(struct?: CcPolicyStore.KmsEncryptionStateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPolicyStoreEncryptionStatePropertyToTerraform(struct?: CcPolicyStore.EncryptionStateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPolicyStoreEncryptionStatePropertyToHclTerraform(struct?: CcPolicyStore.EncryptionStateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPolicyStoreSchemaDefinitionPropertyToTerraform(struct?: CcPolicyStore.SchemaDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cedar_json: cdktn.stringToTerraform(struct!.cedarJson),
    }
}


export function ccPolicyStoreSchemaDefinitionPropertyToHclTerraform(struct?: CcPolicyStore.SchemaDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cedar_json: {
            value: cdktn.stringToHclTerraform(struct!.cedarJson),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyStoreTagPropertyToTerraform(struct?: CcPolicyStore.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPolicyStoreTagPropertyToHclTerraform(struct?: CcPolicyStore.TagProperty | cdktn.IResolvable): any {
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


export function ccPolicyStoreValidationSettingsPropertyToTerraform(struct?: CcPolicyStore.ValidationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccPolicyStoreValidationSettingsPropertyToHclTerraform(struct?: CcPolicyStore.ValidationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPolicyStore {
export interface DeletionProtectionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#mode CcPolicyStore#mode}
    */
    readonly mode?: string;
}
export class DeletionProtectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeletionProtectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeletionProtectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface KmsEncryptionSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#encryption_context CcPolicyStore#encryption_context}
    */
    readonly encryptionContext?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#key CcPolicyStore#key}
    */
    readonly key?: string;
}
export class KmsEncryptionSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KmsEncryptionSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionContext = this._encryptionContext;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KmsEncryptionSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionContext = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionContext = value.encryptionContext;
            this._key = value.key;
        }
    }

    // encryption_context - computed: true, optional: true, required: false
    private _encryptionContext?: { [key: string]: string }; 
    public get encryptionContext() {
        return this.getStringMapAttribute('encryption_context');
    }
    public set encryptionContext(value: { [key: string]: string }) {
        this._encryptionContext = value;
    }
    public resetEncryptionContext() {
        this._encryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionContextInput() {
        return this._encryptionContext;
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
}
export interface EncryptionSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#default CcPolicyStore#default}
    */
    readonly default?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings CcPolicyStore#kms_encryption_settings}
    */
    readonly kmsEncryptionSettings?: KmsEncryptionSettingsProperty;
}
export class EncryptionSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._default !== undefined) {
            hasAnyValues = true;
            internalValueResult.default = this._default;
        }
        if (this._kmsEncryptionSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsEncryptionSettings = this._kmsEncryptionSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._default = undefined;
            this._kmsEncryptionSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._default = value.default;
            this._kmsEncryptionSettings.internalValue = value.kmsEncryptionSettings;
        }
    }

    // default - computed: true, optional: true, required: false
    private _default?: string; 
    public get default() {
        return this.getStringAttribute('default');
    }
    public set default(value: string) {
        this._default = value;
    }
    public resetDefault() {
        this._default = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInput() {
        return this._default;
    }

    // kms_encryption_settings - computed: true, optional: true, required: false
    private _kmsEncryptionSettings = new KmsEncryptionSettingsPropertyOutputReference(this, "kms_encryption_settings");
    public get kmsEncryptionSettings() {
        return this._kmsEncryptionSettings;
    }
    public putKmsEncryptionSettings(value: KmsEncryptionSettingsProperty) {
        this._kmsEncryptionSettings.internalValue = value;
    }
    public resetKmsEncryptionSettings() {
        this._kmsEncryptionSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptionSettingsInput() {
        return this._kmsEncryptionSettings.internalValue;
    }
}
export interface KmsEncryptionStateProperty {
}
export class KmsEncryptionStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KmsEncryptionStateProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KmsEncryptionStateProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // encryption_context - computed: true, optional: false, required: false
    private _encryptionContext = new cdktn.StringMap(this, "encryption_context");
    public get encryptionContext() {
        return this._encryptionContext;
    }

    // key - computed: true, optional: false, required: false
    public get key() {
        return this.getStringAttribute('key');
    }
}
export interface EncryptionStateProperty {
}
export class EncryptionStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionStateProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionStateProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // default - computed: true, optional: false, required: false
    public get default() {
        return this.getStringAttribute('default');
    }

    // kms_encryption_state - computed: true, optional: false, required: false
    private _kmsEncryptionState = new KmsEncryptionStatePropertyOutputReference(this, "kms_encryption_state");
    public get kmsEncryptionState() {
        return this._kmsEncryptionState;
    }
}
export interface SchemaDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#cedar_json CcPolicyStore#cedar_json}
    */
    readonly cedarJson?: string;
}
export class SchemaDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cedarJson !== undefined) {
            hasAnyValues = true;
            internalValueResult.cedarJson = this._cedarJson;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cedarJson = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cedarJson = value.cedarJson;
        }
    }

    // cedar_json - computed: true, optional: true, required: false
    private _cedarJson?: string; 
    public get cedarJson() {
        return this.getStringAttribute('cedar_json');
    }
    public set cedarJson(value: string) {
        this._cedarJson = value;
    }
    public resetCedarJson() {
        this._cedarJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cedarJsonInput() {
        return this._cedarJson;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#key CcPolicyStore#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#value CcPolicyStore#value}
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
export interface ValidationSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#mode CcPolicyStore#mode}
    */
    readonly mode: string;
}
export class ValidationSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }

    // mode - computed: false, optional: false, required: true
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
}
