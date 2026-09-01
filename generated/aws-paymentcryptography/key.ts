// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#derive_key_usage CcKey#derive_key_usage}
    */
    readonly deriveKeyUsage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#enabled CcKey#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#exportable CcKey#exportable}
    */
    readonly exportable: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key_attributes CcKey#key_attributes}
    */
    readonly keyAttributes: CcKey.KeyAttributesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key_check_value_algorithm CcKey#key_check_value_algorithm}
    */
    readonly keyCheckValueAlgorithm?: string;
    /**
    * The resource-based policy attached to the key, in JSON format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#policy CcKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#replication_regions CcKey#replication_regions}
    */
    readonly replicationRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#tags CcKey#tags}
    */
    readonly tags?: CcKey.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key awscc_paymentcryptography_key}
*/
export class CcKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_paymentcryptography_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKey to import
    * @param importFromId The id of the existing CcKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_paymentcryptography_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key awscc_paymentcryptography_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKeyProps
    */
    public constructor(scope: Construct, id: string, config: CcKeyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_paymentcryptography_key',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._deriveKeyUsage = config.deriveKeyUsage;
        this._enabled = config.enabled;
        this._exportable = config.exportable;
        this._keyAttributes.internalValue = config.keyAttributes;
        this._keyCheckValueAlgorithm = config.keyCheckValueAlgorithm;
        this._policy = config.policy;
        this._replicationRegions = config.replicationRegions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // derive_key_usage - computed: true, optional: true, required: false
    private _deriveKeyUsage?: string; 
    public get deriveKeyUsage() {
        return this.getStringAttribute('derive_key_usage');
    }
    public set deriveKeyUsage(value: string) {
        this._deriveKeyUsage = value;
    }
    public resetDeriveKeyUsage() {
        this._deriveKeyUsage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deriveKeyUsageInput() {
        return this._deriveKeyUsage;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // exportable - computed: false, optional: false, required: true
    private _exportable?: boolean | cdktn.IResolvable; 
    public get exportable() {
        return this.getBooleanAttribute('exportable');
    }
    public set exportable(value: boolean | cdktn.IResolvable) {
        this._exportable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exportableInput() {
        return this._exportable;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_attributes - computed: false, optional: false, required: true
    private _keyAttributes = new CcKey.KeyAttributesPropertyOutputReference(this, "key_attributes");
    public get keyAttributes() {
        return this._keyAttributes;
    }
    public putKeyAttributes(value: CcKey.KeyAttributesProperty) {
        this._keyAttributes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyAttributesInput() {
        return this._keyAttributes.internalValue;
    }

    // key_check_value_algorithm - computed: true, optional: true, required: false
    private _keyCheckValueAlgorithm?: string; 
    public get keyCheckValueAlgorithm() {
        return this.getStringAttribute('key_check_value_algorithm');
    }
    public set keyCheckValueAlgorithm(value: string) {
        this._keyCheckValueAlgorithm = value;
    }
    public resetKeyCheckValueAlgorithm() {
        this._keyCheckValueAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyCheckValueAlgorithmInput() {
        return this._keyCheckValueAlgorithm;
    }

    // key_identifier - computed: true, optional: false, required: false
    public get keyIdentifier() {
        return this.getStringAttribute('key_identifier');
    }

    // key_origin - computed: true, optional: false, required: false
    public get keyOrigin() {
        return this.getStringAttribute('key_origin');
    }

    // key_state - computed: true, optional: false, required: false
    public get keyState() {
        return this.getStringAttribute('key_state');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // replication_regions - computed: true, optional: true, required: false
    private _replicationRegions?: string[]; 
    public get replicationRegions() {
        return this.getListAttribute('replication_regions');
    }
    public set replicationRegions(value: string[]) {
        this._replicationRegions = value;
    }
    public resetReplicationRegions() {
        this._replicationRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationRegionsInput() {
        return this._replicationRegions;
    }

    // replication_status - computed: true, optional: false, required: false
    private _replicationStatus = new CcKey.ReplicationStatusPropertyMap(this, "replication_status");
    public get replicationStatus() {
        return this._replicationStatus;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcKey.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcKey.TagProperty[] | cdktn.IResolvable) {
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
            derive_key_usage: cdktn.stringToTerraform(this._deriveKeyUsage),
            enabled: cdktn.booleanToTerraform(this._enabled),
            exportable: cdktn.booleanToTerraform(this._exportable),
            key_attributes: ccKeyKeyAttributesPropertyToTerraform(this._keyAttributes.internalValue),
            key_check_value_algorithm: cdktn.stringToTerraform(this._keyCheckValueAlgorithm),
            policy: cdktn.stringToTerraform(this._policy),
            replication_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._replicationRegions),
            tags: cdktn.listMapper(ccKeyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            derive_key_usage: {
                value: cdktn.stringToHclTerraform(this._deriveKeyUsage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exportable: {
                value: cdktn.booleanToHclTerraform(this._exportable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_attributes: {
                value: ccKeyKeyAttributesPropertyToHclTerraform(this._keyAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKey.KeyAttributesProperty",
            },
            key_check_value_algorithm: {
                value: cdktn.stringToHclTerraform(this._keyCheckValueAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_regions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._replicationRegions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccKeyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcKey.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKeyKeyModesOfUsePropertyToTerraform(struct?: CcKey.KeyModesOfUseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decrypt: cdktn.booleanToTerraform(struct!.decrypt),
        derive_key: cdktn.booleanToTerraform(struct!.deriveKey),
        encrypt: cdktn.booleanToTerraform(struct!.encrypt),
        generate: cdktn.booleanToTerraform(struct!.generate),
        no_restrictions: cdktn.booleanToTerraform(struct!.noRestrictions),
        sign: cdktn.booleanToTerraform(struct!.sign),
        unwrap: cdktn.booleanToTerraform(struct!.unwrap),
        verify: cdktn.booleanToTerraform(struct!.verify),
        wrap: cdktn.booleanToTerraform(struct!.wrap),
    }
}


export function ccKeyKeyModesOfUsePropertyToHclTerraform(struct?: CcKey.KeyModesOfUseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decrypt: {
            value: cdktn.booleanToHclTerraform(struct!.decrypt),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        derive_key: {
            value: cdktn.booleanToHclTerraform(struct!.deriveKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encrypt: {
            value: cdktn.booleanToHclTerraform(struct!.encrypt),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        generate: {
            value: cdktn.booleanToHclTerraform(struct!.generate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_restrictions: {
            value: cdktn.booleanToHclTerraform(struct!.noRestrictions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sign: {
            value: cdktn.booleanToHclTerraform(struct!.sign),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        unwrap: {
            value: cdktn.booleanToHclTerraform(struct!.unwrap),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        verify: {
            value: cdktn.booleanToHclTerraform(struct!.verify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        wrap: {
            value: cdktn.booleanToHclTerraform(struct!.wrap),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKeyKeyAttributesPropertyToTerraform(struct?: CcKey.KeyAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_algorithm: cdktn.stringToTerraform(struct!.keyAlgorithm),
        key_class: cdktn.stringToTerraform(struct!.keyClass),
        key_modes_of_use: ccKeyKeyModesOfUsePropertyToTerraform(struct!.keyModesOfUse),
        key_usage: cdktn.stringToTerraform(struct!.keyUsage),
    }
}


export function ccKeyKeyAttributesPropertyToHclTerraform(struct?: CcKey.KeyAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.keyAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_class: {
            value: cdktn.stringToHclTerraform(struct!.keyClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_modes_of_use: {
            value: ccKeyKeyModesOfUsePropertyToHclTerraform(struct!.keyModesOfUse),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyModesOfUseProperty",
        },
        key_usage: {
            value: cdktn.stringToHclTerraform(struct!.keyUsage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKeyReplicationStatusPropertyToTerraform(struct?: CcKey.ReplicationStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccKeyReplicationStatusPropertyToHclTerraform(struct?: CcKey.ReplicationStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccKeyTagPropertyToTerraform(struct?: CcKey.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccKeyTagPropertyToHclTerraform(struct?: CcKey.TagProperty | cdktn.IResolvable): any {
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


export namespace CcKey {
export interface KeyModesOfUseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#decrypt CcKey#decrypt}
    */
    readonly decrypt?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#derive_key CcKey#derive_key}
    */
    readonly deriveKey?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#encrypt CcKey#encrypt}
    */
    readonly encrypt?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#generate CcKey#generate}
    */
    readonly generate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#no_restrictions CcKey#no_restrictions}
    */
    readonly noRestrictions?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#sign CcKey#sign}
    */
    readonly sign?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#unwrap CcKey#unwrap}
    */
    readonly unwrap?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#verify CcKey#verify}
    */
    readonly verify?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#wrap CcKey#wrap}
    */
    readonly wrap?: boolean | cdktn.IResolvable;
}
export class KeyModesOfUsePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyModesOfUseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decrypt !== undefined) {
            hasAnyValues = true;
            internalValueResult.decrypt = this._decrypt;
        }
        if (this._deriveKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.deriveKey = this._deriveKey;
        }
        if (this._encrypt !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypt = this._encrypt;
        }
        if (this._generate !== undefined) {
            hasAnyValues = true;
            internalValueResult.generate = this._generate;
        }
        if (this._noRestrictions !== undefined) {
            hasAnyValues = true;
            internalValueResult.noRestrictions = this._noRestrictions;
        }
        if (this._sign !== undefined) {
            hasAnyValues = true;
            internalValueResult.sign = this._sign;
        }
        if (this._unwrap !== undefined) {
            hasAnyValues = true;
            internalValueResult.unwrap = this._unwrap;
        }
        if (this._verify !== undefined) {
            hasAnyValues = true;
            internalValueResult.verify = this._verify;
        }
        if (this._wrap !== undefined) {
            hasAnyValues = true;
            internalValueResult.wrap = this._wrap;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyModesOfUseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decrypt = undefined;
            this._deriveKey = undefined;
            this._encrypt = undefined;
            this._generate = undefined;
            this._noRestrictions = undefined;
            this._sign = undefined;
            this._unwrap = undefined;
            this._verify = undefined;
            this._wrap = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decrypt = value.decrypt;
            this._deriveKey = value.deriveKey;
            this._encrypt = value.encrypt;
            this._generate = value.generate;
            this._noRestrictions = value.noRestrictions;
            this._sign = value.sign;
            this._unwrap = value.unwrap;
            this._verify = value.verify;
            this._wrap = value.wrap;
        }
    }

    // decrypt - computed: true, optional: true, required: false
    private _decrypt?: boolean | cdktn.IResolvable; 
    public get decrypt() {
        return this.getBooleanAttribute('decrypt');
    }
    public set decrypt(value: boolean | cdktn.IResolvable) {
        this._decrypt = value;
    }
    public resetDecrypt() {
        this._decrypt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptInput() {
        return this._decrypt;
    }

    // derive_key - computed: true, optional: true, required: false
    private _deriveKey?: boolean | cdktn.IResolvable; 
    public get deriveKey() {
        return this.getBooleanAttribute('derive_key');
    }
    public set deriveKey(value: boolean | cdktn.IResolvable) {
        this._deriveKey = value;
    }
    public resetDeriveKey() {
        this._deriveKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deriveKeyInput() {
        return this._deriveKey;
    }

    // encrypt - computed: true, optional: true, required: false
    private _encrypt?: boolean | cdktn.IResolvable; 
    public get encrypt() {
        return this.getBooleanAttribute('encrypt');
    }
    public set encrypt(value: boolean | cdktn.IResolvable) {
        this._encrypt = value;
    }
    public resetEncrypt() {
        this._encrypt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptInput() {
        return this._encrypt;
    }

    // generate - computed: true, optional: true, required: false
    private _generate?: boolean | cdktn.IResolvable; 
    public get generate() {
        return this.getBooleanAttribute('generate');
    }
    public set generate(value: boolean | cdktn.IResolvable) {
        this._generate = value;
    }
    public resetGenerate() {
        this._generate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generateInput() {
        return this._generate;
    }

    // no_restrictions - computed: true, optional: true, required: false
    private _noRestrictions?: boolean | cdktn.IResolvable; 
    public get noRestrictions() {
        return this.getBooleanAttribute('no_restrictions');
    }
    public set noRestrictions(value: boolean | cdktn.IResolvable) {
        this._noRestrictions = value;
    }
    public resetNoRestrictions() {
        this._noRestrictions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noRestrictionsInput() {
        return this._noRestrictions;
    }

    // sign - computed: true, optional: true, required: false
    private _sign?: boolean | cdktn.IResolvable; 
    public get sign() {
        return this.getBooleanAttribute('sign');
    }
    public set sign(value: boolean | cdktn.IResolvable) {
        this._sign = value;
    }
    public resetSign() {
        this._sign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signInput() {
        return this._sign;
    }

    // unwrap - computed: true, optional: true, required: false
    private _unwrap?: boolean | cdktn.IResolvable; 
    public get unwrap() {
        return this.getBooleanAttribute('unwrap');
    }
    public set unwrap(value: boolean | cdktn.IResolvable) {
        this._unwrap = value;
    }
    public resetUnwrap() {
        this._unwrap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unwrapInput() {
        return this._unwrap;
    }

    // verify - computed: true, optional: true, required: false
    private _verify?: boolean | cdktn.IResolvable; 
    public get verify() {
        return this.getBooleanAttribute('verify');
    }
    public set verify(value: boolean | cdktn.IResolvable) {
        this._verify = value;
    }
    public resetVerify() {
        this._verify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifyInput() {
        return this._verify;
    }

    // wrap - computed: true, optional: true, required: false
    private _wrap?: boolean | cdktn.IResolvable; 
    public get wrap() {
        return this.getBooleanAttribute('wrap');
    }
    public set wrap(value: boolean | cdktn.IResolvable) {
        this._wrap = value;
    }
    public resetWrap() {
        this._wrap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wrapInput() {
        return this._wrap;
    }
}
export interface KeyAttributesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key_algorithm CcKey#key_algorithm}
    */
    readonly keyAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key_class CcKey#key_class}
    */
    readonly keyClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key_modes_of_use CcKey#key_modes_of_use}
    */
    readonly keyModesOfUse: KeyModesOfUseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key_usage CcKey#key_usage}
    */
    readonly keyUsage: string;
}
export class KeyAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAlgorithm = this._keyAlgorithm;
        }
        if (this._keyClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyClass = this._keyClass;
        }
        if (this._keyModesOfUse?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyModesOfUse = this._keyModesOfUse?.internalValue;
        }
        if (this._keyUsage !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsage = this._keyUsage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyAlgorithm = undefined;
            this._keyClass = undefined;
            this._keyModesOfUse.internalValue = undefined;
            this._keyUsage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyAlgorithm = value.keyAlgorithm;
            this._keyClass = value.keyClass;
            this._keyModesOfUse.internalValue = value.keyModesOfUse;
            this._keyUsage = value.keyUsage;
        }
    }

    // key_algorithm - computed: false, optional: false, required: true
    private _keyAlgorithm?: string; 
    public get keyAlgorithm() {
        return this.getStringAttribute('key_algorithm');
    }
    public set keyAlgorithm(value: string) {
        this._keyAlgorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyAlgorithmInput() {
        return this._keyAlgorithm;
    }

    // key_class - computed: false, optional: false, required: true
    private _keyClass?: string; 
    public get keyClass() {
        return this.getStringAttribute('key_class');
    }
    public set keyClass(value: string) {
        this._keyClass = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyClassInput() {
        return this._keyClass;
    }

    // key_modes_of_use - computed: false, optional: false, required: true
    private _keyModesOfUse = new KeyModesOfUsePropertyOutputReference(this, "key_modes_of_use");
    public get keyModesOfUse() {
        return this._keyModesOfUse;
    }
    public putKeyModesOfUse(value: KeyModesOfUseProperty) {
        this._keyModesOfUse.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyModesOfUseInput() {
        return this._keyModesOfUse.internalValue;
    }

    // key_usage - computed: false, optional: false, required: true
    private _keyUsage?: string; 
    public get keyUsage() {
        return this.getStringAttribute('key_usage');
    }
    public set keyUsage(value: string) {
        this._keyUsage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsageInput() {
        return this._keyUsage;
    }
}
export interface ReplicationStatusProperty {
}
export class ReplicationStatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ReplicationStatusProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationStatusProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }
}

export class ReplicationStatusPropertyMap extends cdktn.ComplexMap {

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ReplicationStatusPropertyOutputReference {
        return new ReplicationStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#key CcKey#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/paymentcryptography_key#value CcKey#value}
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
