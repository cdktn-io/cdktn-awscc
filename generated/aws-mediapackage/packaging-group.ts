// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPackagingGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * CDN Authorization
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#authorization CcPackagingGroup#authorization}
    */
    readonly authorization?: CcPackagingGroup.AuthorizationProperty;
    /**
    * The configuration parameters for egress access logging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#egress_access_logs CcPackagingGroup#egress_access_logs}
    */
    readonly egressAccessLogs?: CcPackagingGroup.LogConfigurationProperty;
    /**
    * The ID of the PackagingGroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#packaging_group_id CcPackagingGroup#packaging_group_id}
    */
    readonly packagingGroupId: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#tags CcPackagingGroup#tags}
    */
    readonly tags?: CcPackagingGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group}
*/
export class CcPackagingGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediapackage_packaging_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPackagingGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPackagingGroup to import
    * @param importFromId The id of the existing CcPackagingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPackagingGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackage_packaging_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPackagingGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcPackagingGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediapackage_packaging_group',
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
        this._authorization.internalValue = config.authorization;
        this._egressAccessLogs.internalValue = config.egressAccessLogs;
        this._packagingGroupId = config.packagingGroupId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authorization - computed: true, optional: true, required: false
    private _authorization = new CcPackagingGroup.AuthorizationPropertyOutputReference(this, "authorization");
    public get authorization() {
        return this._authorization;
    }
    public putAuthorization(value: CcPackagingGroup.AuthorizationProperty) {
        this._authorization.internalValue = value;
    }
    public resetAuthorization() {
        this._authorization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationInput() {
        return this._authorization.internalValue;
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }

    // egress_access_logs - computed: true, optional: true, required: false
    private _egressAccessLogs = new CcPackagingGroup.LogConfigurationPropertyOutputReference(this, "egress_access_logs");
    public get egressAccessLogs() {
        return this._egressAccessLogs;
    }
    public putEgressAccessLogs(value: CcPackagingGroup.LogConfigurationProperty) {
        this._egressAccessLogs.internalValue = value;
    }
    public resetEgressAccessLogs() {
        this._egressAccessLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressAccessLogsInput() {
        return this._egressAccessLogs.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // packaging_group_id - computed: false, optional: false, required: true
    private _packagingGroupId?: string; 
    public get packagingGroupId() {
        return this.getStringAttribute('packaging_group_id');
    }
    public set packagingGroupId(value: string) {
        this._packagingGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingGroupIdInput() {
        return this._packagingGroupId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPackagingGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPackagingGroup.TagProperty[] | cdktn.IResolvable) {
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
            authorization: ccPackagingGroupAuthorizationPropertyToTerraform(this._authorization.internalValue),
            egress_access_logs: ccPackagingGroupLogConfigurationPropertyToTerraform(this._egressAccessLogs.internalValue),
            packaging_group_id: cdktn.stringToTerraform(this._packagingGroupId),
            tags: cdktn.listMapper(ccPackagingGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authorization: {
                value: ccPackagingGroupAuthorizationPropertyToHclTerraform(this._authorization.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPackagingGroup.AuthorizationProperty",
            },
            egress_access_logs: {
                value: ccPackagingGroupLogConfigurationPropertyToHclTerraform(this._egressAccessLogs.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPackagingGroup.LogConfigurationProperty",
            },
            packaging_group_id: {
                value: cdktn.stringToHclTerraform(this._packagingGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPackagingGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPackagingGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPackagingGroupAuthorizationPropertyToTerraform(struct?: CcPackagingGroup.AuthorizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cdn_identifier_secret: cdktn.stringToTerraform(struct!.cdnIdentifierSecret),
        secrets_role_arn: cdktn.stringToTerraform(struct!.secretsRoleArn),
    }
}


export function ccPackagingGroupAuthorizationPropertyToHclTerraform(struct?: CcPackagingGroup.AuthorizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cdn_identifier_secret: {
            value: cdktn.stringToHclTerraform(struct!.cdnIdentifierSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackagingGroupLogConfigurationPropertyToTerraform(struct?: CcPackagingGroup.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    }
}


export function ccPackagingGroupLogConfigurationPropertyToHclTerraform(struct?: CcPackagingGroup.LogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackagingGroupTagPropertyToTerraform(struct?: CcPackagingGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPackagingGroupTagPropertyToHclTerraform(struct?: CcPackagingGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPackagingGroup {
export interface AuthorizationProperty {
    /**
    * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#cdn_identifier_secret CcPackagingGroup#cdn_identifier_secret}
    */
    readonly cdnIdentifierSecret?: string;
    /**
    * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#secrets_role_arn CcPackagingGroup#secrets_role_arn}
    */
    readonly secretsRoleArn?: string;
}
export class AuthorizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cdnIdentifierSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdnIdentifierSecret = this._cdnIdentifierSecret;
        }
        if (this._secretsRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsRoleArn = this._secretsRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cdnIdentifierSecret = undefined;
            this._secretsRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cdnIdentifierSecret = value.cdnIdentifierSecret;
            this._secretsRoleArn = value.secretsRoleArn;
        }
    }

    // cdn_identifier_secret - computed: true, optional: true, required: false
    private _cdnIdentifierSecret?: string; 
    public get cdnIdentifierSecret() {
        return this.getStringAttribute('cdn_identifier_secret');
    }
    public set cdnIdentifierSecret(value: string) {
        this._cdnIdentifierSecret = value;
    }
    public resetCdnIdentifierSecret() {
        this._cdnIdentifierSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdnIdentifierSecretInput() {
        return this._cdnIdentifierSecret;
    }

    // secrets_role_arn - computed: true, optional: true, required: false
    private _secretsRoleArn?: string; 
    public get secretsRoleArn() {
        return this.getStringAttribute('secrets_role_arn');
    }
    public set secretsRoleArn(value: string) {
        this._secretsRoleArn = value;
    }
    public resetSecretsRoleArn() {
        this._secretsRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsRoleArnInput() {
        return this._secretsRoleArn;
    }
}
export interface LogConfigurationProperty {
    /**
    * Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#log_group_name CcPackagingGroup#log_group_name}
    */
    readonly logGroupName?: string;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupName = value.logGroupName;
        }
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#key CcPackagingGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackage_packaging_group#value CcPackagingGroup#value}
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
