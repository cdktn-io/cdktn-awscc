// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The bandwidth of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#bandwidth CcConnection#bandwidth}
    */
    readonly bandwidth: string;
    /**
    * The name of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#connection_name CcConnection#connection_name}
    */
    readonly connectionName: string;
    /**
    * The ID or ARN of the LAG to associate the connection with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#lag_id CcConnection#lag_id}
    */
    readonly lagId?: string;
    /**
    * The location of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#location CcConnection#location}
    */
    readonly location: string;
    /**
    * The name of the service provider associated with the requested connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#provider_name CcConnection#provider_name}
    */
    readonly providerName?: string;
    /**
    * Indicates whether you want the connection to support MAC Security (MACsec).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#request_mac_sec CcConnection#request_mac_sec}
    */
    readonly requestMacSec?: boolean | cdktn.IResolvable;
    /**
    * The tags associated with the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#tags CcConnection#tags}
    */
    readonly tags?: CcConnection.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection awscc_directconnect_connection}
*/
export class CcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_directconnect_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnection to import
    * @param importFromId The id of the existing CcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection awscc_directconnect_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_directconnect_connection',
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
        this._bandwidth = config.bandwidth;
        this._connectionName = config.connectionName;
        this._lagId = config.lagId;
        this._location = config.location;
        this._providerName = config.providerName;
        this._requestMacSec = config.requestMacSec;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bandwidth - computed: false, optional: false, required: true
    private _bandwidth?: string; 
    public get bandwidth() {
        return this.getStringAttribute('bandwidth');
    }
    public set bandwidth(value: string) {
        this._bandwidth = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
        return this._bandwidth;
    }

    // connection_arn - computed: true, optional: false, required: false
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }

    // connection_id - computed: true, optional: false, required: false
    public get connectionId() {
        return this.getStringAttribute('connection_id');
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

    // connection_state - computed: true, optional: false, required: false
    public get connectionState() {
        return this.getStringAttribute('connection_state');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lag_id - computed: true, optional: true, required: false
    private _lagId?: string; 
    public get lagId() {
        return this.getStringAttribute('lag_id');
    }
    public set lagId(value: string) {
        this._lagId = value;
    }
    public resetLagId() {
        this._lagId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lagIdInput() {
        return this._lagId;
    }

    // location - computed: false, optional: false, required: true
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
    }

    // provider_name - computed: true, optional: true, required: false
    private _providerName?: string; 
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
        this._providerName = value;
    }
    public resetProviderName() {
        this._providerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName;
    }

    // request_mac_sec - computed: true, optional: true, required: false
    private _requestMacSec?: boolean | cdktn.IResolvable; 
    public get requestMacSec() {
        return this.getBooleanAttribute('request_mac_sec');
    }
    public set requestMacSec(value: boolean | cdktn.IResolvable) {
        this._requestMacSec = value;
    }
    public resetRequestMacSec() {
        this._requestMacSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMacSecInput() {
        return this._requestMacSec;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnection.TagPropertyList(this, "tags", true);
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
            bandwidth: cdktn.stringToTerraform(this._bandwidth),
            connection_name: cdktn.stringToTerraform(this._connectionName),
            lag_id: cdktn.stringToTerraform(this._lagId),
            location: cdktn.stringToTerraform(this._location),
            provider_name: cdktn.stringToTerraform(this._providerName),
            request_mac_sec: cdktn.booleanToTerraform(this._requestMacSec),
            tags: cdktn.listMapper(ccConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bandwidth: {
                value: cdktn.stringToHclTerraform(this._bandwidth),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_name: {
                value: cdktn.stringToHclTerraform(this._connectionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lag_id: {
                value: cdktn.stringToHclTerraform(this._lagId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location: {
                value: cdktn.stringToHclTerraform(this._location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provider_name: {
                value: cdktn.stringToHclTerraform(this._providerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_mac_sec: {
                value: cdktn.booleanToHclTerraform(this._requestMacSec),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_connection#value CcConnection#value}
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
