// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the active date for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#active_date CcCertificate#active_date}
    */
    readonly activeDate?: string;
    /**
    * Specifies the certificate body to be imported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#certificate CcCertificate#certificate}
    */
    readonly certificate: string;
    /**
    * Specifies the certificate chain to be imported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#certificate_chain CcCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * A textual description for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#description CcCertificate#description}
    */
    readonly description?: string;
    /**
    * Specifies the inactive date for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#inactive_date CcCertificate#inactive_date}
    */
    readonly inactiveDate?: string;
    /**
    * Specifies the private key for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#private_key CcCertificate#private_key}
    */
    readonly privateKey?: string;
    /**
    * Key-value pairs that can be used to group and search for certificates. Tags are metadata attached to certificates for any purpose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#tags CcCertificate#tags}
    */
    readonly tags?: CcCertificate.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies the usage type for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#usage CcCertificate#usage}
    */
    readonly usage: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate awscc_transfer_certificate}
*/
export class CcCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transfer_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCertificate to import
    * @param importFromId The id of the existing CcCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate awscc_transfer_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcCertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transfer_certificate',
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
        this._activeDate = config.activeDate;
        this._certificate = config.certificate;
        this._certificateChain = config.certificateChain;
        this._description = config.description;
        this._inactiveDate = config.inactiveDate;
        this._privateKey = config.privateKey;
        this._tags.internalValue = config.tags;
        this._usage = config.usage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active_date - computed: true, optional: true, required: false
    private _activeDate?: string; 
    public get activeDate() {
        return this.getStringAttribute('active_date');
    }
    public set activeDate(value: string) {
        this._activeDate = value;
    }
    public resetActiveDate() {
        this._activeDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDateInput() {
        return this._activeDate;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // certificate - computed: false, optional: false, required: true
    private _certificate?: string; 
    public get certificate() {
        return this.getStringAttribute('certificate');
    }
    public set certificate(value: string) {
        this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
        return this._certificate;
    }

    // certificate_chain - computed: true, optional: true, required: false
    private _certificateChain?: string; 
    public get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
        this._certificateChain = value;
    }
    public resetCertificateChain() {
        this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
        return this._certificateChain;
    }

    // certificate_id - computed: true, optional: false, required: false
    public get certificateId() {
        return this.getStringAttribute('certificate_id');
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

    // inactive_date - computed: true, optional: true, required: false
    private _inactiveDate?: string; 
    public get inactiveDate() {
        return this.getStringAttribute('inactive_date');
    }
    public set inactiveDate(value: string) {
        this._inactiveDate = value;
    }
    public resetInactiveDate() {
        this._inactiveDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inactiveDateInput() {
        return this._inactiveDate;
    }

    // not_after_date - computed: true, optional: false, required: false
    public get notAfterDate() {
        return this.getStringAttribute('not_after_date');
    }

    // not_before_date - computed: true, optional: false, required: false
    public get notBeforeDate() {
        return this.getStringAttribute('not_before_date');
    }

    // private_key - computed: true, optional: true, required: false
    private _privateKey?: string; 
    public get privateKey() {
        return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
        this._privateKey = value;
    }
    public resetPrivateKey() {
        this._privateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
        return this._privateKey;
    }

    // serial - computed: true, optional: false, required: false
    public get serial() {
        return this.getStringAttribute('serial');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCertificate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCertificate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // usage - computed: false, optional: false, required: true
    private _usage?: string; 
    public get usage() {
        return this.getStringAttribute('usage');
    }
    public set usage(value: string) {
        this._usage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usageInput() {
        return this._usage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            active_date: cdktn.stringToTerraform(this._activeDate),
            certificate: cdktn.stringToTerraform(this._certificate),
            certificate_chain: cdktn.stringToTerraform(this._certificateChain),
            description: cdktn.stringToTerraform(this._description),
            inactive_date: cdktn.stringToTerraform(this._inactiveDate),
            private_key: cdktn.stringToTerraform(this._privateKey),
            tags: cdktn.listMapper(ccCertificateTagPropertyToTerraform, false)(this._tags.internalValue),
            usage: cdktn.stringToTerraform(this._usage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            active_date: {
                value: cdktn.stringToHclTerraform(this._activeDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate: {
                value: cdktn.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_chain: {
                value: cdktn.stringToHclTerraform(this._certificateChain),
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
            inactive_date: {
                value: cdktn.stringToHclTerraform(this._inactiveDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_key: {
                value: cdktn.stringToHclTerraform(this._privateKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCertificateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCertificate.TagPropertyList",
            },
            usage: {
                value: cdktn.stringToHclTerraform(this._usage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCertificateTagPropertyToTerraform(struct?: CcCertificate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCertificateTagPropertyToHclTerraform(struct?: CcCertificate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCertificate {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#key CcCertificate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_certificate#value CcCertificate#value}
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
