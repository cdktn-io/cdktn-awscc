// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the alias name. This value must begin with ``alias/`` followed by a name, such as ``alias/ExampleAlias``. 
    *   If you change the value of the ``AliasName`` property, the existing alias is deleted and a new alias is created for the specified KMS key. This change can disrupt applications that use the alias. It can also allow or deny access to a KMS key affected by attribute-based access control (ABAC).
    *   The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with ``alias/aws/``. The ``alias/aws/`` prefix is reserved for [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_alias#alias_name CcAlias#alias_name}
    */
    readonly aliasName: string;
    /**
    * Associates the alias with the specified [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk). The KMS key must be in the same AWS-account and Region.
    *  A valid key ID is required. If you supply a null or empty string value, this operation returns an error.
    *  For help finding the key ID and ARN, see [Finding the key ID and ARN](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn) in the *Developer Guide*.
    *  Specify the key ID or the key ARN of the KMS key.
    *  For example:
    *   +  Key ID: ``1234abcd-12ab-34cd-56ef-1234567890ab``
    *   +  Key ARN: ``arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab``
    *   
    *  To get the key ID and key ARN for a KMS key, use [ListKeys](https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html) or [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_alias#target_key_id CcAlias#target_key_id}
    */
    readonly targetKeyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_alias awscc_kms_alias}
*/
export class CcAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_kms_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlias to import
    * @param importFromId The id of the existing CcAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kms_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_alias awscc_kms_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_kms_alias',
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
        this._aliasName = config.aliasName;
        this._targetKeyId = config.targetKeyId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_name - computed: false, optional: false, required: true
    private _aliasName?: string; 
    public get aliasName() {
        return this.getStringAttribute('alias_name');
    }
    public set aliasName(value: string) {
        this._aliasName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasNameInput() {
        return this._aliasName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // target_key_id - computed: false, optional: false, required: true
    private _targetKeyId?: string; 
    public get targetKeyId() {
        return this.getStringAttribute('target_key_id');
    }
    public set targetKeyId(value: string) {
        this._targetKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetKeyIdInput() {
        return this._targetKeyId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias_name: cdktn.stringToTerraform(this._aliasName),
            target_key_id: cdktn.stringToTerraform(this._targetKeyId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias_name: {
                value: cdktn.stringToHclTerraform(this._aliasName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_key_id: {
                value: cdktn.stringToHclTerraform(this._targetKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAlias {
}
