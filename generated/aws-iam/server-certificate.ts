// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServerCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#certificate_body CcServerCertificate#certificate_body}
    */
    readonly certificateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#certificate_chain CcServerCertificate#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#path CcServerCertificate#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#private_key CcServerCertificate#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#server_certificate_name CcServerCertificate#server_certificate_name}
    */
    readonly serverCertificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#tags CcServerCertificate#tags}
    */
    readonly tags?: CcServerCertificate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate awscc_iam_server_certificate}
*/
export class CcServerCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_server_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServerCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServerCertificate to import
    * @param importFromId The id of the existing CcServerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServerCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_server_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate awscc_iam_server_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServerCertificateProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServerCertificateProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_server_certificate',
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
        this._certificateBody = config.certificateBody;
        this._certificateChain = config.certificateChain;
        this._path = config.path;
        this._privateKey = config.privateKey;
        this._serverCertificateName = config.serverCertificateName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // certificate_body - computed: true, optional: true, required: false
    private _certificateBody?: string; 
    public get certificateBody() {
        return this.getStringAttribute('certificate_body');
    }
    public set certificateBody(value: string) {
        this._certificateBody = value;
    }
    public resetCertificateBody() {
        this._certificateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateBodyInput() {
        return this._certificateBody;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
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

    // server_certificate_name - computed: true, optional: true, required: false
    private _serverCertificateName?: string; 
    public get serverCertificateName() {
        return this.getStringAttribute('server_certificate_name');
    }
    public set serverCertificateName(value: string) {
        this._serverCertificateName = value;
    }
    public resetServerCertificateName() {
        this._serverCertificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateNameInput() {
        return this._serverCertificateName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServerCertificate.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServerCertificate.TagProperty[] | cdktn.IResolvable) {
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
            certificate_body: cdktn.stringToTerraform(this._certificateBody),
            certificate_chain: cdktn.stringToTerraform(this._certificateChain),
            path: cdktn.stringToTerraform(this._path),
            private_key: cdktn.stringToTerraform(this._privateKey),
            server_certificate_name: cdktn.stringToTerraform(this._serverCertificateName),
            tags: cdktn.listMapper(ccServerCertificateTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_body: {
                value: cdktn.stringToHclTerraform(this._certificateBody),
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
            path: {
                value: cdktn.stringToHclTerraform(this._path),
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
            server_certificate_name: {
                value: cdktn.stringToHclTerraform(this._serverCertificateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServerCertificateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcServerCertificate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServerCertificateTagPropertyToTerraform(struct?: CcServerCertificate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServerCertificateTagPropertyToHclTerraform(struct?: CcServerCertificate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServerCertificate {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#key CcServerCertificate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_server_certificate#value CcServerCertificate#value}
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
