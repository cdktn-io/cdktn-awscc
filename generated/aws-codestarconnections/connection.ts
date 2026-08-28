// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the connection. Connection names must be unique in an AWS user account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#connection_name CcConnection#connection_name}
    */
    readonly connectionName: string;
    /**
    * The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#host_arn CcConnection#host_arn}
    */
    readonly hostArn?: string;
    /**
    * The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#provider_type CcConnection#provider_type}
    */
    readonly providerType?: string;
    /**
    * Specifies the tags applied to a connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#tags CcConnection#tags}
    */
    readonly tags?: CcConnection.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection awscc_codestarconnections_connection}
*/
export class CcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codestarconnections_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnection to import
    * @param importFromId The id of the existing CcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codestarconnections_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection awscc_codestarconnections_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codestarconnections_connection',
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
        this._connectionName = config.connectionName;
        this._hostArn = config.hostArn;
        this._providerType = config.providerType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_arn - computed: true, optional: false, required: false
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }

    // connection_name - computed: false, optional: false, required: true
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // connection_status - computed: true, optional: false, required: false
    public get connectionStatus() {
        return this.getStringAttribute('connection_status');
    }

    // host_arn - computed: true, optional: true, required: false
    private _hostArn?: string; 
    public get hostArn() {
        return this.getStringAttribute('host_arn');
    }
    public set hostArn(value: string) {
        this._hostArn = value;
    }
    public resetHostArn() {
        this._hostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostArnInput() {
        return this._hostArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // provider_type - computed: true, optional: true, required: false
    private _providerType?: string; 
    public get providerType() {
        return this.getStringAttribute('provider_type');
    }
    public set providerType(value: string) {
        this._providerType = value;
    }
    public resetProviderType() {
        this._providerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerTypeInput() {
        return this._providerType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnection.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnection.TagProperty[] | cdktn.IResolvable) {
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
            connection_name: cdktn.stringToTerraform(this._connectionName),
            host_arn: cdktn.stringToTerraform(this._hostArn),
            provider_type: cdktn.stringToTerraform(this._providerType),
            tags: cdktn.listMapper(ccConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_name: {
                value: cdktn.stringToHclTerraform(this._connectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host_arn: {
                value: cdktn.stringToHclTerraform(this._hostArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provider_type: {
                value: cdktn.stringToHclTerraform(this._providerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConnection.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectionTagPropertyToTerraform(struct?: CcConnection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionTagPropertyToHclTerraform(struct?: CcConnection.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConnection {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_connection#value CcConnection#value}
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
