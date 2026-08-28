// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPublicKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration information about a public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key#public_key_config CcPublicKey#public_key_config}
    */
    readonly publicKeyConfig: CcPublicKey.PublicKeyConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key awscc_cloudfront_public_key}
*/
export class CcPublicKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_public_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPublicKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPublicKey to import
    * @param importFromId The id of the existing CcPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPublicKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_public_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key awscc_cloudfront_public_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPublicKeyProps
    */
    public constructor(scope: Construct, id: string, config: CcPublicKeyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_public_key',
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
        this._publicKeyConfig.internalValue = config.publicKeyConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // public_key_config - computed: false, optional: false, required: true
    private _publicKeyConfig = new CcPublicKey.PublicKeyConfigPropertyOutputReference(this, "public_key_config");
    public get publicKeyConfig() {
        return this._publicKeyConfig;
    }
    public putPublicKeyConfig(value: CcPublicKey.PublicKeyConfigProperty) {
        this._publicKeyConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeyConfigInput() {
        return this._publicKeyConfig.internalValue;
    }

    // public_key_id - computed: true, optional: false, required: false
    public get publicKeyId() {
        return this.getStringAttribute('public_key_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            public_key_config: ccPublicKeyPublicKeyConfigPropertyToTerraform(this._publicKeyConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            public_key_config: {
                value: ccPublicKeyPublicKeyConfigPropertyToHclTerraform(this._publicKeyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPublicKey.PublicKeyConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPublicKeyPublicKeyConfigPropertyToTerraform(struct?: CcPublicKey.PublicKeyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        caller_reference: cdktn.stringToTerraform(struct!.callerReference),
        comment: cdktn.stringToTerraform(struct!.comment),
        encoded_key: cdktn.stringToTerraform(struct!.encodedKey),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPublicKeyPublicKeyConfigPropertyToHclTerraform(struct?: CcPublicKey.PublicKeyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        caller_reference: {
            value: cdktn.stringToHclTerraform(struct!.callerReference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encoded_key: {
            value: cdktn.stringToHclTerraform(struct!.encodedKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPublicKey {
export interface PublicKeyConfigProperty {
    /**
    * A string included in the request to help make sure that the request can't be replayed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key#caller_reference CcPublicKey#caller_reference}
    */
    readonly callerReference: string;
    /**
    * A comment to describe the public key. The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key#comment CcPublicKey#comment}
    */
    readonly comment?: string;
    /**
    * The public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key#encoded_key CcPublicKey#encoded_key}
    */
    readonly encodedKey: string;
    /**
    * A name to help identify the public key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_public_key#name CcPublicKey#name}
    */
    readonly name: string;
}
export class PublicKeyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicKeyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._callerReference !== undefined) {
            hasAnyValues = true;
            internalValueResult.callerReference = this._callerReference;
        }
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._encodedKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.encodedKey = this._encodedKey;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicKeyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._callerReference = undefined;
            this._comment = undefined;
            this._encodedKey = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._callerReference = value.callerReference;
            this._comment = value.comment;
            this._encodedKey = value.encodedKey;
            this._name = value.name;
        }
    }

    // caller_reference - computed: false, optional: false, required: true
    private _callerReference?: string; 
    public get callerReference() {
        return this.getStringAttribute('caller_reference');
    }
    public set callerReference(value: string) {
        this._callerReference = value;
    }
    // Temporarily expose input value. Use with caution.
    public get callerReferenceInput() {
        return this._callerReference;
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // encoded_key - computed: false, optional: false, required: true
    private _encodedKey?: string; 
    public get encodedKey() {
        return this.getStringAttribute('encoded_key');
    }
    public set encodedKey(value: string) {
        this._encodedKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encodedKeyInput() {
        return this._encodedKey;
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
}
}
