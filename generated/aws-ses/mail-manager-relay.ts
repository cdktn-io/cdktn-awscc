// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMailManagerRelayProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#authentication CcMailManagerRelay#authentication}
    */
    readonly authentication: CcMailManagerRelay.RelayAuthenticationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#relay_name CcMailManagerRelay#relay_name}
    */
    readonly relayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#server_name CcMailManagerRelay#server_name}
    */
    readonly serverName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#server_port CcMailManagerRelay#server_port}
    */
    readonly serverPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#tags CcMailManagerRelay#tags}
    */
    readonly tags?: CcMailManagerRelay.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay awscc_ses_mail_manager_relay}
*/
export class CcMailManagerRelay extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_mail_manager_relay";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMailManagerRelay resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMailManagerRelay to import
    * @param importFromId The id of the existing CcMailManagerRelay that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMailManagerRelay to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_relay", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay awscc_ses_mail_manager_relay} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMailManagerRelayProps
    */
    public constructor(scope: Construct, id: string, config: CcMailManagerRelayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_mail_manager_relay',
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
        this._authentication.internalValue = config.authentication;
        this._relayName = config.relayName;
        this._serverName = config.serverName;
        this._serverPort = config.serverPort;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authentication - computed: false, optional: false, required: true
    private _authentication = new CcMailManagerRelay.RelayAuthenticationPropertyOutputReference(this, "authentication");
    public get authentication() {
        return this._authentication;
    }
    public putAuthentication(value: CcMailManagerRelay.RelayAuthenticationProperty) {
        this._authentication.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationInput() {
        return this._authentication.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // relay_arn - computed: true, optional: false, required: false
    public get relayArn() {
        return this.getStringAttribute('relay_arn');
    }

    // relay_id - computed: true, optional: false, required: false
    public get relayId() {
        return this.getStringAttribute('relay_id');
    }

    // relay_name - computed: true, optional: true, required: false
    private _relayName?: string; 
    public get relayName() {
        return this.getStringAttribute('relay_name');
    }
    public set relayName(value: string) {
        this._relayName = value;
    }
    public resetRelayName() {
        this._relayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relayNameInput() {
        return this._relayName;
    }

    // server_name - computed: false, optional: false, required: true
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // server_port - computed: false, optional: false, required: true
    private _serverPort?: number; 
    public get serverPort() {
        return this.getNumberAttribute('server_port');
    }
    public set serverPort(value: number) {
        this._serverPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverPortInput() {
        return this._serverPort;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMailManagerRelay.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMailManagerRelay.TagProperty[] | cdktn.IResolvable) {
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
            authentication: ccMailManagerRelayRelayAuthenticationPropertyToTerraform(this._authentication.internalValue),
            relay_name: cdktn.stringToTerraform(this._relayName),
            server_name: cdktn.stringToTerraform(this._serverName),
            server_port: cdktn.numberToTerraform(this._serverPort),
            tags: cdktn.listMapper(ccMailManagerRelayTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authentication: {
                value: ccMailManagerRelayRelayAuthenticationPropertyToHclTerraform(this._authentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMailManagerRelay.RelayAuthenticationProperty",
            },
            relay_name: {
                value: cdktn.stringToHclTerraform(this._relayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_name: {
                value: cdktn.stringToHclTerraform(this._serverName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_port: {
                value: cdktn.numberToHclTerraform(this._serverPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMailManagerRelayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMailManagerRelay.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMailManagerRelayRelayAuthenticationPropertyToTerraform(struct?: CcMailManagerRelay.RelayAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        no_authentication: cdktn.stringToTerraform(struct!.noAuthentication),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccMailManagerRelayRelayAuthenticationPropertyToHclTerraform(struct?: CcMailManagerRelay.RelayAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        no_authentication: {
            value: cdktn.stringToHclTerraform(struct!.noAuthentication),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMailManagerRelayTagPropertyToTerraform(struct?: CcMailManagerRelay.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMailManagerRelayTagPropertyToHclTerraform(struct?: CcMailManagerRelay.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMailManagerRelay {
export interface RelayAuthenticationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#no_authentication CcMailManagerRelay#no_authentication}
    */
    readonly noAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#secret_arn CcMailManagerRelay#secret_arn}
    */
    readonly secretArn?: string;
}
export class RelayAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RelayAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._noAuthentication !== undefined) {
            hasAnyValues = true;
            internalValueResult.noAuthentication = this._noAuthentication;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelayAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._noAuthentication = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._noAuthentication = value.noAuthentication;
            this._secretArn = value.secretArn;
        }
    }

    // no_authentication - computed: true, optional: true, required: false
    private _noAuthentication?: string; 
    public get noAuthentication() {
        return this.getStringAttribute('no_authentication');
    }
    public set noAuthentication(value: string) {
        this._noAuthentication = value;
    }
    public resetNoAuthentication() {
        this._noAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noAuthenticationInput() {
        return this._noAuthentication;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#key CcMailManagerRelay#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_mail_manager_relay#value CcMailManagerRelay#value}
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
