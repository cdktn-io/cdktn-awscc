// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPartnerAccountProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether the partner account is linked to the AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#account_linked CcPartnerAccount#account_linked}
    */
    readonly accountLinked?: boolean | cdktn.IResolvable;
    /**
    * The partner account ID to disassociate from the AWS account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#partner_account_id CcPartnerAccount#partner_account_id}
    */
    readonly partnerAccountId?: string;
    /**
    * The partner type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#partner_type CcPartnerAccount#partner_type}
    */
    readonly partnerType?: string;
    /**
    * The Sidewalk account credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#sidewalk CcPartnerAccount#sidewalk}
    */
    readonly sidewalk?: CcPartnerAccount.SidewalkAccountInfoProperty;
    /**
    * The Sidewalk account credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#sidewalk_response CcPartnerAccount#sidewalk_response}
    */
    readonly sidewalkResponse?: CcPartnerAccount.SidewalkAccountInfoWithFingerprintProperty;
    /**
    * The Sidewalk account credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#sidewalk_update CcPartnerAccount#sidewalk_update}
    */
    readonly sidewalkUpdate?: CcPartnerAccount.SidewalkUpdateAccountProperty;
    /**
    * A list of key-value pairs that contain metadata for the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#tags CcPartnerAccount#tags}
    */
    readonly tags?: CcPartnerAccount.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account}
*/
export class CcPartnerAccount extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_partner_account";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPartnerAccount resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPartnerAccount to import
    * @param importFromId The id of the existing CcPartnerAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPartnerAccount to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_partner_account", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPartnerAccountProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPartnerAccountProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_partner_account',
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
        this._accountLinked = config.accountLinked;
        this._partnerAccountId = config.partnerAccountId;
        this._partnerType = config.partnerType;
        this._sidewalk.internalValue = config.sidewalk;
        this._sidewalkResponse.internalValue = config.sidewalkResponse;
        this._sidewalkUpdate.internalValue = config.sidewalkUpdate;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_linked - computed: true, optional: true, required: false
    private _accountLinked?: boolean | cdktn.IResolvable; 
    public get accountLinked() {
        return this.getBooleanAttribute('account_linked');
    }
    public set accountLinked(value: boolean | cdktn.IResolvable) {
        this._accountLinked = value;
    }
    public resetAccountLinked() {
        this._accountLinked = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountLinkedInput() {
        return this._accountLinked;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // fingerprint - computed: true, optional: false, required: false
    public get fingerprint() {
        return this.getStringAttribute('fingerprint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // partner_account_id - computed: true, optional: true, required: false
    private _partnerAccountId?: string; 
    public get partnerAccountId() {
        return this.getStringAttribute('partner_account_id');
    }
    public set partnerAccountId(value: string) {
        this._partnerAccountId = value;
    }
    public resetPartnerAccountId() {
        this._partnerAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partnerAccountIdInput() {
        return this._partnerAccountId;
    }

    // partner_type - computed: true, optional: true, required: false
    private _partnerType?: string; 
    public get partnerType() {
        return this.getStringAttribute('partner_type');
    }
    public set partnerType(value: string) {
        this._partnerType = value;
    }
    public resetPartnerType() {
        this._partnerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partnerTypeInput() {
        return this._partnerType;
    }

    // sidewalk - computed: true, optional: true, required: false
    private _sidewalk = new CcPartnerAccount.SidewalkAccountInfoPropertyOutputReference(this, "sidewalk");
    public get sidewalk() {
        return this._sidewalk;
    }
    public putSidewalk(value: CcPartnerAccount.SidewalkAccountInfoProperty) {
        this._sidewalk.internalValue = value;
    }
    public resetSidewalk() {
        this._sidewalk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sidewalkInput() {
        return this._sidewalk.internalValue;
    }

    // sidewalk_response - computed: true, optional: true, required: false
    private _sidewalkResponse = new CcPartnerAccount.SidewalkAccountInfoWithFingerprintPropertyOutputReference(this, "sidewalk_response");
    public get sidewalkResponse() {
        return this._sidewalkResponse;
    }
    public putSidewalkResponse(value: CcPartnerAccount.SidewalkAccountInfoWithFingerprintProperty) {
        this._sidewalkResponse.internalValue = value;
    }
    public resetSidewalkResponse() {
        this._sidewalkResponse.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sidewalkResponseInput() {
        return this._sidewalkResponse.internalValue;
    }

    // sidewalk_update - computed: true, optional: true, required: false
    private _sidewalkUpdate = new CcPartnerAccount.SidewalkUpdateAccountPropertyOutputReference(this, "sidewalk_update");
    public get sidewalkUpdate() {
        return this._sidewalkUpdate;
    }
    public putSidewalkUpdate(value: CcPartnerAccount.SidewalkUpdateAccountProperty) {
        this._sidewalkUpdate.internalValue = value;
    }
    public resetSidewalkUpdate() {
        this._sidewalkUpdate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sidewalkUpdateInput() {
        return this._sidewalkUpdate.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPartnerAccount.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPartnerAccount.TagProperty[] | cdktn.IResolvable) {
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
            account_linked: cdktn.booleanToTerraform(this._accountLinked),
            partner_account_id: cdktn.stringToTerraform(this._partnerAccountId),
            partner_type: cdktn.stringToTerraform(this._partnerType),
            sidewalk: ccPartnerAccountSidewalkAccountInfoPropertyToTerraform(this._sidewalk.internalValue),
            sidewalk_response: ccPartnerAccountSidewalkAccountInfoWithFingerprintPropertyToTerraform(this._sidewalkResponse.internalValue),
            sidewalk_update: ccPartnerAccountSidewalkUpdateAccountPropertyToTerraform(this._sidewalkUpdate.internalValue),
            tags: cdktn.listMapper(ccPartnerAccountTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_linked: {
                value: cdktn.booleanToHclTerraform(this._accountLinked),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            partner_account_id: {
                value: cdktn.stringToHclTerraform(this._partnerAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            partner_type: {
                value: cdktn.stringToHclTerraform(this._partnerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sidewalk: {
                value: ccPartnerAccountSidewalkAccountInfoPropertyToHclTerraform(this._sidewalk.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPartnerAccount.SidewalkAccountInfoProperty",
            },
            sidewalk_response: {
                value: ccPartnerAccountSidewalkAccountInfoWithFingerprintPropertyToHclTerraform(this._sidewalkResponse.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPartnerAccount.SidewalkAccountInfoWithFingerprintProperty",
            },
            sidewalk_update: {
                value: ccPartnerAccountSidewalkUpdateAccountPropertyToHclTerraform(this._sidewalkUpdate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPartnerAccount.SidewalkUpdateAccountProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPartnerAccountTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPartnerAccount.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPartnerAccountSidewalkAccountInfoPropertyToTerraform(struct?: CcPartnerAccount.SidewalkAccountInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_server_private_key: cdktn.stringToTerraform(struct!.appServerPrivateKey),
    }
}


export function ccPartnerAccountSidewalkAccountInfoPropertyToHclTerraform(struct?: CcPartnerAccount.SidewalkAccountInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_server_private_key: {
            value: cdktn.stringToHclTerraform(struct!.appServerPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartnerAccountSidewalkAccountInfoWithFingerprintPropertyToTerraform(struct?: CcPartnerAccount.SidewalkAccountInfoWithFingerprintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_id: cdktn.stringToTerraform(struct!.amazonId),
        arn: cdktn.stringToTerraform(struct!.arn),
        fingerprint: cdktn.stringToTerraform(struct!.fingerprint),
    }
}


export function ccPartnerAccountSidewalkAccountInfoWithFingerprintPropertyToHclTerraform(struct?: CcPartnerAccount.SidewalkAccountInfoWithFingerprintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_id: {
            value: cdktn.stringToHclTerraform(struct!.amazonId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fingerprint: {
            value: cdktn.stringToHclTerraform(struct!.fingerprint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartnerAccountSidewalkUpdateAccountPropertyToTerraform(struct?: CcPartnerAccount.SidewalkUpdateAccountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_server_private_key: cdktn.stringToTerraform(struct!.appServerPrivateKey),
    }
}


export function ccPartnerAccountSidewalkUpdateAccountPropertyToHclTerraform(struct?: CcPartnerAccount.SidewalkUpdateAccountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_server_private_key: {
            value: cdktn.stringToHclTerraform(struct!.appServerPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartnerAccountTagPropertyToTerraform(struct?: CcPartnerAccount.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPartnerAccountTagPropertyToHclTerraform(struct?: CcPartnerAccount.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPartnerAccount {
export interface SidewalkAccountInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#app_server_private_key CcPartnerAccount#app_server_private_key}
    */
    readonly appServerPrivateKey?: string;
}
export class SidewalkAccountInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SidewalkAccountInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appServerPrivateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appServerPrivateKey = this._appServerPrivateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SidewalkAccountInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appServerPrivateKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appServerPrivateKey = value.appServerPrivateKey;
        }
    }

    // app_server_private_key - computed: true, optional: true, required: false
    private _appServerPrivateKey?: string; 
    public get appServerPrivateKey() {
        return this.getStringAttribute('app_server_private_key');
    }
    public set appServerPrivateKey(value: string) {
        this._appServerPrivateKey = value;
    }
    public resetAppServerPrivateKey() {
        this._appServerPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appServerPrivateKeyInput() {
        return this._appServerPrivateKey;
    }
}
export interface SidewalkAccountInfoWithFingerprintProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#amazon_id CcPartnerAccount#amazon_id}
    */
    readonly amazonId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#arn CcPartnerAccount#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#fingerprint CcPartnerAccount#fingerprint}
    */
    readonly fingerprint?: string;
}
export class SidewalkAccountInfoWithFingerprintPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SidewalkAccountInfoWithFingerprintProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonId !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonId = this._amazonId;
        }
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fingerprint !== undefined) {
            hasAnyValues = true;
            internalValueResult.fingerprint = this._fingerprint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SidewalkAccountInfoWithFingerprintProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonId = undefined;
            this._arn = undefined;
            this._fingerprint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonId = value.amazonId;
            this._arn = value.arn;
            this._fingerprint = value.fingerprint;
        }
    }

    // amazon_id - computed: true, optional: true, required: false
    private _amazonId?: string; 
    public get amazonId() {
        return this.getStringAttribute('amazon_id');
    }
    public set amazonId(value: string) {
        this._amazonId = value;
    }
    public resetAmazonId() {
        this._amazonId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonIdInput() {
        return this._amazonId;
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // fingerprint - computed: true, optional: true, required: false
    private _fingerprint?: string; 
    public get fingerprint() {
        return this.getStringAttribute('fingerprint');
    }
    public set fingerprint(value: string) {
        this._fingerprint = value;
    }
    public resetFingerprint() {
        this._fingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fingerprintInput() {
        return this._fingerprint;
    }
}
export interface SidewalkUpdateAccountProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#app_server_private_key CcPartnerAccount#app_server_private_key}
    */
    readonly appServerPrivateKey?: string;
}
export class SidewalkUpdateAccountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SidewalkUpdateAccountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appServerPrivateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appServerPrivateKey = this._appServerPrivateKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SidewalkUpdateAccountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appServerPrivateKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appServerPrivateKey = value.appServerPrivateKey;
        }
    }

    // app_server_private_key - computed: true, optional: true, required: false
    private _appServerPrivateKey?: string; 
    public get appServerPrivateKey() {
        return this.getStringAttribute('app_server_private_key');
    }
    public set appServerPrivateKey(value: string) {
        this._appServerPrivateKey = value;
    }
    public resetAppServerPrivateKey() {
        this._appServerPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appServerPrivateKeyInput() {
        return this._appServerPrivateKey;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#key CcPartnerAccount#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_partner_account#value CcPartnerAccount#value}
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
