// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecretProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#description CcSecret#description}
    */
    readonly description?: string;
    /**
    * A structure that specifies how to generate a password to encrypt and store in the secret. To include a specific string in the secret, use ``SecretString`` instead. If you omit both ``GenerateSecretString`` and ``SecretString``, you create an empty secret. When you make a change to this property, a new secret version is created.
    *  We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#generate_secret_string CcSecret#generate_secret_string}
    */
    readonly generateSecretString?: CcSecret.GenerateSecretStringProperty;
    /**
    * The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by ``alias/``, for example ``alias/aws/secretsmanager``. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
    *  To use a KMS key in a different account, use the key ARN or the alias ARN.
    *  If you don't specify this value, then Secrets Manager uses the key ``aws/secretsmanager``. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
    *  If the secret is in a different AWS account from the credentials calling the API, then you can't use ``aws/secretsmanager`` to encrypt the secret, and you must create and use a customer managed KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#kms_key_id CcSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the new secret.
    *  The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
    *  Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#name CcSecret#name}
    */
    readonly name?: string;
    /**
    * A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#replica_regions CcSecret#replica_regions}
    */
    readonly replicaRegions?: CcSecret.ReplicaRegionProperty[] | cdktn.IResolvable;
    /**
    * The text to encrypt and store in the secret. We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use ``GenerateSecretString`` instead. If you omit both ``GenerateSecretString`` and ``SecretString``, you create an empty secret. When you make a change to this property, a new secret version is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#secret_string CcSecret#secret_string}
    */
    readonly secretString?: string;
    /**
    * A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:
    *   ``[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`` 
    *  Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
    *  Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret. 
    *  If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an ``Access Denied`` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
    *  For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
    *  The following restrictions apply to tags:
    *   +  Maximum number of tags per secret: 50
    *   +  Maximum key length: 127 Unicode characters in UTF-8
    *   +  Maximum value length: 255 Unicode characters in UTF-8
    *   +  Tag keys and values are case sensitive.
    *   +  Do not use the ``aws:`` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
    *   +  If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#tags CcSecret#tags}
    */
    readonly tags?: CcSecret.TagProperty[] | cdktn.IResolvable;
    /**
    * The exact string that identifies the third-party partner that holds the external secret. For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#type CcSecret#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret awscc_secretsmanager_secret}
*/
export class CcSecret extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_secretsmanager_secret";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecret resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecret to import
    * @param importFromId The id of the existing CcSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecret to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_secretsmanager_secret", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret awscc_secretsmanager_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecretProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSecretProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_secretsmanager_secret',
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
        this._description = config.description;
        this._generateSecretString.internalValue = config.generateSecretString;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._replicaRegions.internalValue = config.replicaRegions;
        this._secretString = config.secretString;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // generate_secret_string - computed: true, optional: true, required: false
    private _generateSecretString = new CcSecret.GenerateSecretStringPropertyOutputReference(this, "generate_secret_string");
    public get generateSecretString() {
        return this._generateSecretString;
    }
    public putGenerateSecretString(value: CcSecret.GenerateSecretStringProperty) {
        this._generateSecretString.internalValue = value;
    }
    public resetGenerateSecretString() {
        this._generateSecretString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generateSecretStringInput() {
        return this._generateSecretString.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // replica_regions - computed: true, optional: true, required: false
    private _replicaRegions = new CcSecret.ReplicaRegionPropertyList(this, "replica_regions", false);
    public get replicaRegions() {
        return this._replicaRegions;
    }
    public putReplicaRegions(value: CcSecret.ReplicaRegionProperty[] | cdktn.IResolvable) {
        this._replicaRegions.internalValue = value;
    }
    public resetReplicaRegions() {
        this._replicaRegions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaRegionsInput() {
        return this._replicaRegions.internalValue;
    }

    // secret_id - computed: true, optional: false, required: false
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }

    // secret_string - computed: true, optional: true, required: false
    private _secretString?: string; 
    public get secretString() {
        return this.getStringAttribute('secret_string');
    }
    public set secretString(value: string) {
        this._secretString = value;
    }
    public resetSecretString() {
        this._secretString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretStringInput() {
        return this._secretString;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSecret.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSecret.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            generate_secret_string: ccSecretGenerateSecretStringPropertyToTerraform(this._generateSecretString.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            replica_regions: cdktn.listMapper(ccSecretReplicaRegionPropertyToTerraform, false)(this._replicaRegions.internalValue),
            secret_string: cdktn.stringToTerraform(this._secretString),
            tags: cdktn.listMapper(ccSecretTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
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
            generate_secret_string: {
                value: ccSecretGenerateSecretStringPropertyToHclTerraform(this._generateSecretString.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSecret.GenerateSecretStringProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            replica_regions: {
                value: cdktn.listMapperHcl(ccSecretReplicaRegionPropertyToHclTerraform, false)(this._replicaRegions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecret.ReplicaRegionPropertyList",
            },
            secret_string: {
                value: cdktn.stringToHclTerraform(this._secretString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSecretTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSecret.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecretGenerateSecretStringPropertyToTerraform(struct?: CcSecret.GenerateSecretStringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude_characters: cdktn.stringToTerraform(struct!.excludeCharacters),
        exclude_lowercase: cdktn.booleanToTerraform(struct!.excludeLowercase),
        exclude_numbers: cdktn.booleanToTerraform(struct!.excludeNumbers),
        exclude_punctuation: cdktn.booleanToTerraform(struct!.excludePunctuation),
        exclude_uppercase: cdktn.booleanToTerraform(struct!.excludeUppercase),
        generate_string_key: cdktn.stringToTerraform(struct!.generateStringKey),
        include_space: cdktn.booleanToTerraform(struct!.includeSpace),
        password_length: cdktn.numberToTerraform(struct!.passwordLength),
        require_each_included_type: cdktn.booleanToTerraform(struct!.requireEachIncludedType),
        secret_string_template: cdktn.stringToTerraform(struct!.secretStringTemplate),
    }
}


export function ccSecretGenerateSecretStringPropertyToHclTerraform(struct?: CcSecret.GenerateSecretStringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude_characters: {
            value: cdktn.stringToHclTerraform(struct!.excludeCharacters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclude_lowercase: {
            value: cdktn.booleanToHclTerraform(struct!.excludeLowercase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exclude_numbers: {
            value: cdktn.booleanToHclTerraform(struct!.excludeNumbers),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exclude_punctuation: {
            value: cdktn.booleanToHclTerraform(struct!.excludePunctuation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exclude_uppercase: {
            value: cdktn.booleanToHclTerraform(struct!.excludeUppercase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        generate_string_key: {
            value: cdktn.stringToHclTerraform(struct!.generateStringKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_space: {
            value: cdktn.booleanToHclTerraform(struct!.includeSpace),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        password_length: {
            value: cdktn.numberToHclTerraform(struct!.passwordLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        require_each_included_type: {
            value: cdktn.booleanToHclTerraform(struct!.requireEachIncludedType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        secret_string_template: {
            value: cdktn.stringToHclTerraform(struct!.secretStringTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecretReplicaRegionPropertyToTerraform(struct?: CcSecret.ReplicaRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccSecretReplicaRegionPropertyToHclTerraform(struct?: CcSecret.ReplicaRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecretTagPropertyToTerraform(struct?: CcSecret.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSecretTagPropertyToHclTerraform(struct?: CcSecret.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSecret {
export interface GenerateSecretStringProperty {
    /**
    * A string of the characters that you don't want in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_characters CcSecret#exclude_characters}
    */
    readonly excludeCharacters?: string;
    /**
    * Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_lowercase CcSecret#exclude_lowercase}
    */
    readonly excludeLowercase?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_numbers CcSecret#exclude_numbers}
    */
    readonly excludeNumbers?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to exclude the following punctuation characters from the password: ``! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_punctuation CcSecret#exclude_punctuation}
    */
    readonly excludePunctuation?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_uppercase CcSecret#exclude_uppercase}
    */
    readonly excludeUppercase?: boolean | cdktn.IResolvable;
    /**
    * The JSON key name for the key/value pair, where the value is the generated password. This pair is added to the JSON structure specified by the ``SecretStringTemplate`` parameter. If you specify this parameter, then you must also specify ``SecretStringTemplate``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#generate_string_key CcSecret#generate_string_key}
    */
    readonly generateStringKey?: string;
    /**
    * Specifies whether to include the space character. If you include this switch, the password can contain space characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#include_space CcSecret#include_space}
    */
    readonly includeSpace?: boolean | cdktn.IResolvable;
    /**
    * The length of the password. If you don't include this parameter, the default length is 32 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#password_length CcSecret#password_length}
    */
    readonly passwordLength?: number;
    /**
    * Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#require_each_included_type CcSecret#require_each_included_type}
    */
    readonly requireEachIncludedType?: boolean | cdktn.IResolvable;
    /**
    * A template that the generated string must match. When you make a change to this property, a new secret version is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#secret_string_template CcSecret#secret_string_template}
    */
    readonly secretStringTemplate?: string;
}
export class GenerateSecretStringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GenerateSecretStringProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludeCharacters !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeCharacters = this._excludeCharacters;
        }
        if (this._excludeLowercase !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeLowercase = this._excludeLowercase;
        }
        if (this._excludeNumbers !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeNumbers = this._excludeNumbers;
        }
        if (this._excludePunctuation !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludePunctuation = this._excludePunctuation;
        }
        if (this._excludeUppercase !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeUppercase = this._excludeUppercase;
        }
        if (this._generateStringKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.generateStringKey = this._generateStringKey;
        }
        if (this._includeSpace !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSpace = this._includeSpace;
        }
        if (this._passwordLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordLength = this._passwordLength;
        }
        if (this._requireEachIncludedType !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireEachIncludedType = this._requireEachIncludedType;
        }
        if (this._secretStringTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretStringTemplate = this._secretStringTemplate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GenerateSecretStringProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeCharacters = undefined;
            this._excludeLowercase = undefined;
            this._excludeNumbers = undefined;
            this._excludePunctuation = undefined;
            this._excludeUppercase = undefined;
            this._generateStringKey = undefined;
            this._includeSpace = undefined;
            this._passwordLength = undefined;
            this._requireEachIncludedType = undefined;
            this._secretStringTemplate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeCharacters = value.excludeCharacters;
            this._excludeLowercase = value.excludeLowercase;
            this._excludeNumbers = value.excludeNumbers;
            this._excludePunctuation = value.excludePunctuation;
            this._excludeUppercase = value.excludeUppercase;
            this._generateStringKey = value.generateStringKey;
            this._includeSpace = value.includeSpace;
            this._passwordLength = value.passwordLength;
            this._requireEachIncludedType = value.requireEachIncludedType;
            this._secretStringTemplate = value.secretStringTemplate;
        }
    }

    // exclude_characters - computed: true, optional: true, required: false
    private _excludeCharacters?: string; 
    public get excludeCharacters() {
        return this.getStringAttribute('exclude_characters');
    }
    public set excludeCharacters(value: string) {
        this._excludeCharacters = value;
    }
    public resetExcludeCharacters() {
        this._excludeCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeCharactersInput() {
        return this._excludeCharacters;
    }

    // exclude_lowercase - computed: true, optional: true, required: false
    private _excludeLowercase?: boolean | cdktn.IResolvable; 
    public get excludeLowercase() {
        return this.getBooleanAttribute('exclude_lowercase');
    }
    public set excludeLowercase(value: boolean | cdktn.IResolvable) {
        this._excludeLowercase = value;
    }
    public resetExcludeLowercase() {
        this._excludeLowercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeLowercaseInput() {
        return this._excludeLowercase;
    }

    // exclude_numbers - computed: true, optional: true, required: false
    private _excludeNumbers?: boolean | cdktn.IResolvable; 
    public get excludeNumbers() {
        return this.getBooleanAttribute('exclude_numbers');
    }
    public set excludeNumbers(value: boolean | cdktn.IResolvable) {
        this._excludeNumbers = value;
    }
    public resetExcludeNumbers() {
        this._excludeNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeNumbersInput() {
        return this._excludeNumbers;
    }

    // exclude_punctuation - computed: true, optional: true, required: false
    private _excludePunctuation?: boolean | cdktn.IResolvable; 
    public get excludePunctuation() {
        return this.getBooleanAttribute('exclude_punctuation');
    }
    public set excludePunctuation(value: boolean | cdktn.IResolvable) {
        this._excludePunctuation = value;
    }
    public resetExcludePunctuation() {
        this._excludePunctuation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludePunctuationInput() {
        return this._excludePunctuation;
    }

    // exclude_uppercase - computed: true, optional: true, required: false
    private _excludeUppercase?: boolean | cdktn.IResolvable; 
    public get excludeUppercase() {
        return this.getBooleanAttribute('exclude_uppercase');
    }
    public set excludeUppercase(value: boolean | cdktn.IResolvable) {
        this._excludeUppercase = value;
    }
    public resetExcludeUppercase() {
        this._excludeUppercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeUppercaseInput() {
        return this._excludeUppercase;
    }

    // generate_string_key - computed: true, optional: true, required: false
    private _generateStringKey?: string; 
    public get generateStringKey() {
        return this.getStringAttribute('generate_string_key');
    }
    public set generateStringKey(value: string) {
        this._generateStringKey = value;
    }
    public resetGenerateStringKey() {
        this._generateStringKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generateStringKeyInput() {
        return this._generateStringKey;
    }

    // include_space - computed: true, optional: true, required: false
    private _includeSpace?: boolean | cdktn.IResolvable; 
    public get includeSpace() {
        return this.getBooleanAttribute('include_space');
    }
    public set includeSpace(value: boolean | cdktn.IResolvable) {
        this._includeSpace = value;
    }
    public resetIncludeSpace() {
        this._includeSpace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSpaceInput() {
        return this._includeSpace;
    }

    // password_length - computed: true, optional: true, required: false
    private _passwordLength?: number; 
    public get passwordLength() {
        return this.getNumberAttribute('password_length');
    }
    public set passwordLength(value: number) {
        this._passwordLength = value;
    }
    public resetPasswordLength() {
        this._passwordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordLengthInput() {
        return this._passwordLength;
    }

    // require_each_included_type - computed: true, optional: true, required: false
    private _requireEachIncludedType?: boolean | cdktn.IResolvable; 
    public get requireEachIncludedType() {
        return this.getBooleanAttribute('require_each_included_type');
    }
    public set requireEachIncludedType(value: boolean | cdktn.IResolvable) {
        this._requireEachIncludedType = value;
    }
    public resetRequireEachIncludedType() {
        this._requireEachIncludedType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEachIncludedTypeInput() {
        return this._requireEachIncludedType;
    }

    // secret_string_template - computed: true, optional: true, required: false
    private _secretStringTemplate?: string; 
    public get secretStringTemplate() {
        return this.getStringAttribute('secret_string_template');
    }
    public set secretStringTemplate(value: string) {
        this._secretStringTemplate = value;
    }
    public resetSecretStringTemplate() {
        this._secretStringTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretStringTemplateInput() {
        return this._secretStringTemplate;
    }
}
export interface ReplicaRegionProperty {
    /**
    * The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses ``aws/secretsmanager``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#kms_key_id CcSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * A string that represents a ``Region``, for example "us-east-1".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#region CcSecret#region}
    */
    readonly region?: string;
}
export class ReplicaRegionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicaRegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaRegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._region = value.region;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}

export class ReplicaRegionPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicaRegionProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicaRegionPropertyOutputReference {
        return new ReplicaRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key identifier, or name, of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#key CcSecret#key}
    */
    readonly key?: string;
    /**
    * The string value associated with the key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#value CcSecret#value}
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
