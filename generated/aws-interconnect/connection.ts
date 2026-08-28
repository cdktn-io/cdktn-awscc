// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#activation_key CcConnection#activation_key}
    */
    readonly activationKey?: string;
    /**
    * The logical attachment point in your AWS network where the managed connection will be connected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#attach_point CcConnection#attach_point}
    */
    readonly attachPoint: CcConnection.AttachPointProperty;
    /**
    * The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#bandwidth CcConnection#bandwidth}
    */
    readonly bandwidth?: string;
    /**
    * A description of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#description CcConnection#description}
    */
    readonly description?: string;
    /**
    * The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#environment_id CcConnection#environment_id}
    */
    readonly environmentId?: string;
    /**
    * The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#remote_account CcConnection#remote_account}
    */
    readonly remoteAccount?: CcConnection.RemoteAccountProperty;
    /**
    * Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#remote_owner_account CcConnection#remote_owner_account}
    */
    readonly remoteOwnerAccount?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#tags CcConnection#tags}
    */
    readonly tags?: CcConnection.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection awscc_interconnect_connection}
*/
export class CcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_interconnect_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnection to import
    * @param importFromId The id of the existing CcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_interconnect_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection awscc_interconnect_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_interconnect_connection',
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
        this._activationKey = config.activationKey;
        this._attachPoint.internalValue = config.attachPoint;
        this._bandwidth = config.bandwidth;
        this._description = config.description;
        this._environmentId = config.environmentId;
        this._remoteAccount.internalValue = config.remoteAccount;
        this._remoteOwnerAccount = config.remoteOwnerAccount;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_key - computed: true, optional: true, required: false
    private _activationKey?: string; 
    public get activationKey() {
        return this.getStringAttribute('activation_key');
    }
    public set activationKey(value: string) {
        this._activationKey = value;
    }
    public resetActivationKey() {
        this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activationKeyInput() {
        return this._activationKey;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attach_point - computed: false, optional: false, required: true
    private _attachPoint = new CcConnection.AttachPointPropertyOutputReference(this, "attach_point");
    public get attachPoint() {
        return this._attachPoint;
    }
    public putAttachPoint(value: CcConnection.AttachPointProperty) {
        this._attachPoint.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attachPointInput() {
        return this._attachPoint.internalValue;
    }

    // bandwidth - computed: true, optional: true, required: false
    private _bandwidth?: string; 
    public get bandwidth() {
        return this.getStringAttribute('bandwidth');
    }
    public set bandwidth(value: string) {
        this._bandwidth = value;
    }
    public resetBandwidth() {
        this._bandwidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
        return this._bandwidth;
    }

    // billing_tier - computed: true, optional: false, required: false
    public get billingTier() {
        return this.getNumberAttribute('billing_tier');
    }

    // connection_id - computed: true, optional: false, required: false
    public get connectionId() {
        return this.getStringAttribute('connection_id');
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

    // environment_id - computed: true, optional: true, required: false
    private _environmentId?: string; 
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }
    public set environmentId(value: string) {
        this._environmentId = value;
    }
    public resetEnvironmentId() {
        this._environmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdInput() {
        return this._environmentId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner_account - computed: true, optional: false, required: false
    public get ownerAccount() {
        return this.getStringAttribute('owner_account');
    }

    // provider_name - computed: true, optional: false, required: false
    private _providerName = new CcConnection.ProviderNamePropertyOutputReference(this, "provider_name");
    public get providerName() {
        return this._providerName;
    }

    // remote_account - computed: true, optional: true, required: false
    private _remoteAccount = new CcConnection.RemoteAccountPropertyOutputReference(this, "remote_account");
    public get remoteAccount() {
        return this._remoteAccount;
    }
    public putRemoteAccount(value: CcConnection.RemoteAccountProperty) {
        this._remoteAccount.internalValue = value;
    }
    public resetRemoteAccount() {
        this._remoteAccount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteAccountInput() {
        return this._remoteAccount.internalValue;
    }

    // remote_owner_account - computed: true, optional: true, required: false
    private _remoteOwnerAccount?: string; 
    public get remoteOwnerAccount() {
        return this.getStringAttribute('remote_owner_account');
    }
    public set remoteOwnerAccount(value: string) {
        this._remoteOwnerAccount = value;
    }
    public resetRemoteOwnerAccount() {
        this._remoteOwnerAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteOwnerAccountInput() {
        return this._remoteOwnerAccount;
    }

    // shared_id - computed: true, optional: false, required: false
    public get sharedId() {
        return this.getStringAttribute('shared_id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
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

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            activation_key: cdktn.stringToTerraform(this._activationKey),
            attach_point: ccConnectionAttachPointPropertyToTerraform(this._attachPoint.internalValue),
            bandwidth: cdktn.stringToTerraform(this._bandwidth),
            description: cdktn.stringToTerraform(this._description),
            environment_id: cdktn.stringToTerraform(this._environmentId),
            remote_account: ccConnectionRemoteAccountPropertyToTerraform(this._remoteAccount.internalValue),
            remote_owner_account: cdktn.stringToTerraform(this._remoteOwnerAccount),
            tags: cdktn.listMapper(ccConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            activation_key: {
                value: cdktn.stringToHclTerraform(this._activationKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            attach_point: {
                value: ccConnectionAttachPointPropertyToHclTerraform(this._attachPoint.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.AttachPointProperty",
            },
            bandwidth: {
                value: cdktn.stringToHclTerraform(this._bandwidth),
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
            environment_id: {
                value: cdktn.stringToHclTerraform(this._environmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remote_account: {
                value: ccConnectionRemoteAccountPropertyToHclTerraform(this._remoteAccount.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.RemoteAccountProperty",
            },
            remote_owner_account: {
                value: cdktn.stringToHclTerraform(this._remoteOwnerAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccConnectionAttachPointPropertyToTerraform(struct?: CcConnection.AttachPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        direct_connect_gateway: cdktn.stringToTerraform(struct!.directConnectGateway),
    }
}


export function ccConnectionAttachPointPropertyToHclTerraform(struct?: CcConnection.AttachPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direct_connect_gateway: {
            value: cdktn.stringToHclTerraform(struct!.directConnectGateway),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionProviderNamePropertyToTerraform(struct?: CcConnection.ProviderNameProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectionProviderNamePropertyToHclTerraform(struct?: CcConnection.ProviderNameProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectionRemoteAccountPropertyToTerraform(struct?: CcConnection.RemoteAccountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        identifier: cdktn.stringToTerraform(struct!.identifier),
    }
}


export function ccConnectionRemoteAccountPropertyToHclTerraform(struct?: CcConnection.RemoteAccountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        identifier: {
            value: cdktn.stringToHclTerraform(struct!.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface AttachPointProperty {
    /**
    * The ARN of the resource to attach to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#arn CcConnection#arn}
    */
    readonly arn?: string;
    /**
    * The ID of the Direct Connect Gateway to attach to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#direct_connect_gateway CcConnection#direct_connect_gateway}
    */
    readonly directConnectGateway?: string;
}
export class AttachPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttachPointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._directConnectGateway !== undefined) {
            hasAnyValues = true;
            internalValueResult.directConnectGateway = this._directConnectGateway;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttachPointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._directConnectGateway = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._directConnectGateway = value.directConnectGateway;
        }
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

    // direct_connect_gateway - computed: true, optional: true, required: false
    private _directConnectGateway?: string; 
    public get directConnectGateway() {
        return this.getStringAttribute('direct_connect_gateway');
    }
    public set directConnectGateway(value: string) {
        this._directConnectGateway = value;
    }
    public resetDirectConnectGateway() {
        this._directConnectGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directConnectGatewayInput() {
        return this._directConnectGateway;
    }
}
export interface ProviderNameProperty {
}
export class ProviderNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderNameProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderNameProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cloud_service_provider - computed: true, optional: false, required: false
    public get cloudServiceProvider() {
        return this.getStringAttribute('cloud_service_provider');
    }

    // last_mile_provider - computed: true, optional: false, required: false
    public get lastMileProvider() {
        return this.getStringAttribute('last_mile_provider');
    }
}
export interface RemoteAccountProperty {
    /**
    * The identifier of the remote account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#identifier CcConnection#identifier}
    */
    readonly identifier?: string;
}
export class RemoteAccountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RemoteAccountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._identifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifier = this._identifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RemoteAccountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._identifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._identifier = value.identifier;
        }
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    public resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/interconnect_connection#value CcConnection#value}
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
