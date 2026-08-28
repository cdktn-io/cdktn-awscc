// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntegrationProps extends cdktn.TerraformMetaArguments {
    /**
    * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#additional_encryption_context CcIntegration#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: { [key: string]: string };
    /**
    * The name of the integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#integration_name CcIntegration#integration_name}
    */
    readonly integrationName?: string;
    /**
    * An KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default AWS owned KMS key is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#kms_key_id CcIntegration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The Amazon Resource Name (ARN) of the database to use as the source for replication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#source_arn CcIntegration#source_arn}
    */
    readonly sourceArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#tags CcIntegration#tags}
    */
    readonly tags?: CcIntegration.TagProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#target_arn CcIntegration#target_arn}
    */
    readonly targetArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration awscc_redshift_integration}
*/
export class CcIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntegration to import
    * @param importFromId The id of the existing CcIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration awscc_redshift_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntegrationProps
    */
    public constructor(scope: Construct, id: string, config: CcIntegrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_integration',
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
        this._additionalEncryptionContext = config.additionalEncryptionContext;
        this._integrationName = config.integrationName;
        this._kmsKeyId = config.kmsKeyId;
        this._sourceArn = config.sourceArn;
        this._tags.internalValue = config.tags;
        this._targetArn = config.targetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_encryption_context - computed: true, optional: true, required: false
    private _additionalEncryptionContext?: { [key: string]: string }; 
    public get additionalEncryptionContext() {
        return this.getStringMapAttribute('additional_encryption_context');
    }
    public set additionalEncryptionContext(value: { [key: string]: string }) {
        this._additionalEncryptionContext = value;
    }
    public resetAdditionalEncryptionContext() {
        this._additionalEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalEncryptionContextInput() {
        return this._additionalEncryptionContext;
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // integration_arn - computed: true, optional: false, required: false
    public get integrationArn() {
        return this.getStringAttribute('integration_arn');
    }

    // integration_name - computed: true, optional: true, required: false
    private _integrationName?: string; 
    public get integrationName() {
        return this.getStringAttribute('integration_name');
    }
    public set integrationName(value: string) {
        this._integrationName = value;
    }
    public resetIntegrationName() {
        this._integrationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationNameInput() {
        return this._integrationName;
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

    // source_arn - computed: false, optional: false, required: true
    private _sourceArn?: string; 
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string) {
        this._sourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
        return this._sourceArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIntegration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIntegration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_arn - computed: false, optional: false, required: true
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
            integration_name: cdktn.stringToTerraform(this._integrationName),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            source_arn: cdktn.stringToTerraform(this._sourceArn),
            tags: cdktn.listMapper(ccIntegrationTagPropertyToTerraform, false)(this._tags.internalValue),
            target_arn: cdktn.stringToTerraform(this._targetArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_encryption_context: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalEncryptionContext),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            integration_name: {
                value: cdktn.stringToHclTerraform(this._integrationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_arn: {
                value: cdktn.stringToHclTerraform(this._sourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIntegrationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIntegration.TagPropertyList",
            },
            target_arn: {
                value: cdktn.stringToHclTerraform(this._targetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntegrationTagPropertyToTerraform(struct?: CcIntegration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIntegrationTagPropertyToHclTerraform(struct?: CcIntegration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIntegration {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#key CcIntegration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_integration#value CcIntegration#value}
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
