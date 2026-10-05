// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRedshiftIdcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The type of application being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#application_type CcRedshiftIdcApplication#application_type}
    */
    readonly applicationType?: string;
    /**
    * The token issuer list for the Amazon Redshift IAM Identity Center application instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorized_token_issuer_list CcRedshiftIdcApplication#authorized_token_issuer_list}
    */
    readonly authorizedTokenIssuerList?: CcRedshiftIdcApplication.AuthorizedTokenIssuerListProperty[] | cdktn.IResolvable;
    /**
    * The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. It has the required permissions to be assumed and invoke the IDC Identity Center API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#iam_role_arn CcRedshiftIdcApplication#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#idc_display_name CcRedshiftIdcApplication#idc_display_name}
    */
    readonly idcDisplayName: string;
    /**
    * The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#idc_instance_arn CcRedshiftIdcApplication#idc_instance_arn}
    */
    readonly idcInstanceArn: string;
    /**
    * The namespace for the Amazon Redshift IAM Identity Center application instance. It determines which managed application verifies the connection token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#identity_namespace CcRedshiftIdcApplication#identity_namespace}
    */
    readonly identityNamespace?: string;
    /**
    * The name of the Redshift application in IAM Identity Center.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#redshift_idc_application_name CcRedshiftIdcApplication#redshift_idc_application_name}
    */
    readonly redshiftIdcApplicationName: string;
    /**
    * A collection of service integrations for the Redshift IAM Identity Center application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#service_integrations CcRedshiftIdcApplication#service_integrations}
    */
    readonly serviceIntegrations?: CcRedshiftIdcApplication.ServiceIntegrationsProperty[] | cdktn.IResolvable;
    /**
    * A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#sso_tag_keys CcRedshiftIdcApplication#sso_tag_keys}
    */
    readonly ssoTagKeys?: string[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#tags CcRedshiftIdcApplication#tags}
    */
    readonly tags?: CcRedshiftIdcApplication.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}
*/
export class CcRedshiftIdcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_redshift_idc_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRedshiftIdcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRedshiftIdcApplication to import
    * @param importFromId The id of the existing CcRedshiftIdcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRedshiftIdcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_redshift_idc_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRedshiftIdcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcRedshiftIdcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_redshift_idc_application',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._applicationType = config.applicationType;
        this._authorizedTokenIssuerList.internalValue = config.authorizedTokenIssuerList;
        this._iamRoleArn = config.iamRoleArn;
        this._idcDisplayName = config.idcDisplayName;
        this._idcInstanceArn = config.idcInstanceArn;
        this._identityNamespace = config.identityNamespace;
        this._redshiftIdcApplicationName = config.redshiftIdcApplicationName;
        this._serviceIntegrations.internalValue = config.serviceIntegrations;
        this._ssoTagKeys = config.ssoTagKeys;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_type - computed: true, optional: true, required: false
    private _applicationType?: string; 
    public get applicationType() {
        return this.getStringAttribute('application_type');
    }
    public set applicationType(value: string) {
        this._applicationType = value;
    }
    public resetApplicationType() {
        this._applicationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationTypeInput() {
        return this._applicationType;
    }

    // authorized_token_issuer_list - computed: true, optional: true, required: false
    private _authorizedTokenIssuerList = new CcRedshiftIdcApplication.AuthorizedTokenIssuerListPropertyList(this, "authorized_token_issuer_list", false);
    public get authorizedTokenIssuerList() {
        return this._authorizedTokenIssuerList;
    }
    public putAuthorizedTokenIssuerList(value: CcRedshiftIdcApplication.AuthorizedTokenIssuerListProperty[] | cdktn.IResolvable) {
        this._authorizedTokenIssuerList.internalValue = value;
    }
    public resetAuthorizedTokenIssuerList() {
        this._authorizedTokenIssuerList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizedTokenIssuerListInput() {
        return this._authorizedTokenIssuerList.internalValue;
    }

    // iam_role_arn - computed: false, optional: false, required: true
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idc_display_name - computed: false, optional: false, required: true
    private _idcDisplayName?: string; 
    public get idcDisplayName() {
        return this.getStringAttribute('idc_display_name');
    }
    public set idcDisplayName(value: string) {
        this._idcDisplayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idcDisplayNameInput() {
        return this._idcDisplayName;
    }

    // idc_instance_arn - computed: false, optional: false, required: true
    private _idcInstanceArn?: string; 
    public get idcInstanceArn() {
        return this.getStringAttribute('idc_instance_arn');
    }
    public set idcInstanceArn(value: string) {
        this._idcInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInstanceArnInput() {
        return this._idcInstanceArn;
    }

    // idc_managed_application_arn - computed: true, optional: false, required: false
    public get idcManagedApplicationArn() {
        return this.getStringAttribute('idc_managed_application_arn');
    }

    // idc_onboard_status - computed: true, optional: false, required: false
    public get idcOnboardStatus() {
        return this.getStringAttribute('idc_onboard_status');
    }

    // identity_namespace - computed: true, optional: true, required: false
    private _identityNamespace?: string; 
    public get identityNamespace() {
        return this.getStringAttribute('identity_namespace');
    }
    public set identityNamespace(value: string) {
        this._identityNamespace = value;
    }
    public resetIdentityNamespace() {
        this._identityNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityNamespaceInput() {
        return this._identityNamespace;
    }

    // redshift_idc_application_arn - computed: true, optional: false, required: false
    public get redshiftIdcApplicationArn() {
        return this.getStringAttribute('redshift_idc_application_arn');
    }

    // redshift_idc_application_name - computed: false, optional: false, required: true
    private _redshiftIdcApplicationName?: string; 
    public get redshiftIdcApplicationName() {
        return this.getStringAttribute('redshift_idc_application_name');
    }
    public set redshiftIdcApplicationName(value: string) {
        this._redshiftIdcApplicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftIdcApplicationNameInput() {
        return this._redshiftIdcApplicationName;
    }

    // service_integrations - computed: true, optional: true, required: false
    private _serviceIntegrations = new CcRedshiftIdcApplication.ServiceIntegrationsPropertyList(this, "service_integrations", false);
    public get serviceIntegrations() {
        return this._serviceIntegrations;
    }
    public putServiceIntegrations(value: CcRedshiftIdcApplication.ServiceIntegrationsProperty[] | cdktn.IResolvable) {
        this._serviceIntegrations.internalValue = value;
    }
    public resetServiceIntegrations() {
        this._serviceIntegrations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIntegrationsInput() {
        return this._serviceIntegrations.internalValue;
    }

    // sso_tag_keys - computed: true, optional: true, required: false
    private _ssoTagKeys?: string[]; 
    public get ssoTagKeys() {
        return this.getListAttribute('sso_tag_keys');
    }
    public set ssoTagKeys(value: string[]) {
        this._ssoTagKeys = value;
    }
    public resetSsoTagKeys() {
        this._ssoTagKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssoTagKeysInput() {
        return this._ssoTagKeys;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRedshiftIdcApplication.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRedshiftIdcApplication.TagsProperty[] | cdktn.IResolvable) {
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
            application_type: cdktn.stringToTerraform(this._applicationType),
            authorized_token_issuer_list: cdktn.listMapper(ccRedshiftIdcApplicationAuthorizedTokenIssuerListPropertyToTerraform, false)(this._authorizedTokenIssuerList.internalValue),
            iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
            idc_display_name: cdktn.stringToTerraform(this._idcDisplayName),
            idc_instance_arn: cdktn.stringToTerraform(this._idcInstanceArn),
            identity_namespace: cdktn.stringToTerraform(this._identityNamespace),
            redshift_idc_application_name: cdktn.stringToTerraform(this._redshiftIdcApplicationName),
            service_integrations: cdktn.listMapper(ccRedshiftIdcApplicationServiceIntegrationsPropertyToTerraform, false)(this._serviceIntegrations.internalValue),
            sso_tag_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ssoTagKeys),
            tags: cdktn.listMapper(ccRedshiftIdcApplicationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_type: {
                value: cdktn.stringToHclTerraform(this._applicationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorized_token_issuer_list: {
                value: cdktn.listMapperHcl(ccRedshiftIdcApplicationAuthorizedTokenIssuerListPropertyToHclTerraform, false)(this._authorizedTokenIssuerList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRedshiftIdcApplication.AuthorizedTokenIssuerListPropertyList",
            },
            iam_role_arn: {
                value: cdktn.stringToHclTerraform(this._iamRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idc_display_name: {
                value: cdktn.stringToHclTerraform(this._idcDisplayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idc_instance_arn: {
                value: cdktn.stringToHclTerraform(this._idcInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_namespace: {
                value: cdktn.stringToHclTerraform(this._identityNamespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            redshift_idc_application_name: {
                value: cdktn.stringToHclTerraform(this._redshiftIdcApplicationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_integrations: {
                value: cdktn.listMapperHcl(ccRedshiftIdcApplicationServiceIntegrationsPropertyToHclTerraform, false)(this._serviceIntegrations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRedshiftIdcApplication.ServiceIntegrationsPropertyList",
            },
            sso_tag_keys: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ssoTagKeys),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRedshiftIdcApplicationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRedshiftIdcApplication.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRedshiftIdcApplicationAuthorizedTokenIssuerListPropertyToTerraform(struct?: CcRedshiftIdcApplication.AuthorizedTokenIssuerListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorized_audiences_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.authorizedAudiencesList),
        trusted_token_issuer_arn: cdktn.stringToTerraform(struct!.trustedTokenIssuerArn),
    }
}


export function ccRedshiftIdcApplicationAuthorizedTokenIssuerListPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.AuthorizedTokenIssuerListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorized_audiences_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.authorizedAudiencesList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        trusted_token_issuer_arn: {
            value: cdktn.stringToHclTerraform(struct!.trustedTokenIssuerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationLakeFormationQueryPropertyToTerraform(struct?: CcRedshiftIdcApplication.LakeFormationQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization: cdktn.stringToTerraform(struct!.authorization),
    }
}


export function ccRedshiftIdcApplicationLakeFormationQueryPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.LakeFormationQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization: {
            value: cdktn.stringToHclTerraform(struct!.authorization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationLakeFormationPropertyToTerraform(struct?: CcRedshiftIdcApplication.LakeFormationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lake_formation_query: ccRedshiftIdcApplicationLakeFormationQueryPropertyToTerraform(struct!.lakeFormationQuery),
    }
}


export function ccRedshiftIdcApplicationLakeFormationPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.LakeFormationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lake_formation_query: {
            value: ccRedshiftIdcApplicationLakeFormationQueryPropertyToHclTerraform(struct!.lakeFormationQuery),
            isBlock: true,
            type: "struct",
            storageClassType: "LakeFormationQueryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationConnectPropertyToTerraform(struct?: CcRedshiftIdcApplication.ConnectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization: cdktn.stringToTerraform(struct!.authorization),
    }
}


export function ccRedshiftIdcApplicationConnectPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.ConnectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization: {
            value: cdktn.stringToHclTerraform(struct!.authorization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationRedshiftPropertyToTerraform(struct?: CcRedshiftIdcApplication.RedshiftProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connect: ccRedshiftIdcApplicationConnectPropertyToTerraform(struct!.connect),
    }
}


export function ccRedshiftIdcApplicationRedshiftPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.RedshiftProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connect: {
            value: ccRedshiftIdcApplicationConnectPropertyToHclTerraform(struct!.connect),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationReadWriteAccessPropertyToTerraform(struct?: CcRedshiftIdcApplication.ReadWriteAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization: cdktn.stringToTerraform(struct!.authorization),
    }
}


export function ccRedshiftIdcApplicationReadWriteAccessPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.ReadWriteAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization: {
            value: cdktn.stringToHclTerraform(struct!.authorization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationS3AccessGrantsPropertyToTerraform(struct?: CcRedshiftIdcApplication.S3AccessGrantsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_write_access: ccRedshiftIdcApplicationReadWriteAccessPropertyToTerraform(struct!.readWriteAccess),
    }
}


export function ccRedshiftIdcApplicationS3AccessGrantsPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.S3AccessGrantsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_write_access: {
            value: ccRedshiftIdcApplicationReadWriteAccessPropertyToHclTerraform(struct!.readWriteAccess),
            isBlock: true,
            type: "struct",
            storageClassType: "ReadWriteAccessProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationServiceIntegrationsPropertyToTerraform(struct?: CcRedshiftIdcApplication.ServiceIntegrationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lake_formation: cdktn.listMapper(ccRedshiftIdcApplicationLakeFormationPropertyToTerraform, false)(struct!.lakeFormation),
        redshift: cdktn.listMapper(ccRedshiftIdcApplicationRedshiftPropertyToTerraform, false)(struct!.redshift),
        s3_access_grants: cdktn.listMapper(ccRedshiftIdcApplicationS3AccessGrantsPropertyToTerraform, false)(struct!.s3AccessGrants),
    }
}


export function ccRedshiftIdcApplicationServiceIntegrationsPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.ServiceIntegrationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lake_formation: {
            value: cdktn.listMapperHcl(ccRedshiftIdcApplicationLakeFormationPropertyToHclTerraform, false)(struct!.lakeFormation),
            isBlock: true,
            type: "list",
            storageClassType: "LakeFormationPropertyList",
        },
        redshift: {
            value: cdktn.listMapperHcl(ccRedshiftIdcApplicationRedshiftPropertyToHclTerraform, false)(struct!.redshift),
            isBlock: true,
            type: "list",
            storageClassType: "RedshiftPropertyList",
        },
        s3_access_grants: {
            value: cdktn.listMapperHcl(ccRedshiftIdcApplicationS3AccessGrantsPropertyToHclTerraform, false)(struct!.s3AccessGrants),
            isBlock: true,
            type: "list",
            storageClassType: "S3AccessGrantsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRedshiftIdcApplicationTagsPropertyToTerraform(struct?: CcRedshiftIdcApplication.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRedshiftIdcApplicationTagsPropertyToHclTerraform(struct?: CcRedshiftIdcApplication.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcRedshiftIdcApplication {
export interface AuthorizedTokenIssuerListProperty {
    /**
    * The list of audiences for the authorized token issuer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorized_audiences_list CcRedshiftIdcApplication#authorized_audiences_list}
    */
    readonly authorizedAudiencesList?: string[];
    /**
    * The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#trusted_token_issuer_arn CcRedshiftIdcApplication#trusted_token_issuer_arn}
    */
    readonly trustedTokenIssuerArn?: string;
}
export class AuthorizedTokenIssuerListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthorizedTokenIssuerListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizedAudiencesList !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizedAudiencesList = this._authorizedAudiencesList;
        }
        if (this._trustedTokenIssuerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustedTokenIssuerArn = this._trustedTokenIssuerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizedTokenIssuerListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizedAudiencesList = undefined;
            this._trustedTokenIssuerArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizedAudiencesList = value.authorizedAudiencesList;
            this._trustedTokenIssuerArn = value.trustedTokenIssuerArn;
        }
    }

    // authorized_audiences_list - computed: true, optional: true, required: false
    private _authorizedAudiencesList?: string[]; 
    public get authorizedAudiencesList() {
        return this.getListAttribute('authorized_audiences_list');
    }
    public set authorizedAudiencesList(value: string[]) {
        this._authorizedAudiencesList = value;
    }
    public resetAuthorizedAudiencesList() {
        this._authorizedAudiencesList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizedAudiencesListInput() {
        return this._authorizedAudiencesList;
    }

    // trusted_token_issuer_arn - computed: true, optional: true, required: false
    private _trustedTokenIssuerArn?: string; 
    public get trustedTokenIssuerArn() {
        return this.getStringAttribute('trusted_token_issuer_arn');
    }
    public set trustedTokenIssuerArn(value: string) {
        this._trustedTokenIssuerArn = value;
    }
    public resetTrustedTokenIssuerArn() {
        this._trustedTokenIssuerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedTokenIssuerArnInput() {
        return this._trustedTokenIssuerArn;
    }
}

export class AuthorizedTokenIssuerListPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthorizedTokenIssuerListProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthorizedTokenIssuerListPropertyOutputReference {
        return new AuthorizedTokenIssuerListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LakeFormationQueryProperty {
    /**
    * Determines whether the query scope is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorization CcRedshiftIdcApplication#authorization}
    */
    readonly authorization?: string;
}
export class LakeFormationQueryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LakeFormationQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorization !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorization = this._authorization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LakeFormationQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorization = value.authorization;
        }
    }

    // authorization - computed: true, optional: true, required: false
    private _authorization?: string; 
    public get authorization() {
        return this.getStringAttribute('authorization');
    }
    public set authorization(value: string) {
        this._authorization = value;
    }
    public resetAuthorization() {
        this._authorization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationInput() {
        return this._authorization;
    }
}
export interface LakeFormationProperty {
    /**
    * The Lake Formation scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#lake_formation_query CcRedshiftIdcApplication#lake_formation_query}
    */
    readonly lakeFormationQuery?: LakeFormationQueryProperty;
}
export class LakeFormationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LakeFormationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lakeFormationQuery?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lakeFormationQuery = this._lakeFormationQuery?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LakeFormationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lakeFormationQuery.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lakeFormationQuery.internalValue = value.lakeFormationQuery;
        }
    }

    // lake_formation_query - computed: true, optional: true, required: false
    private _lakeFormationQuery = new LakeFormationQueryPropertyOutputReference(this, "lake_formation_query");
    public get lakeFormationQuery() {
        return this._lakeFormationQuery;
    }
    public putLakeFormationQuery(value: LakeFormationQueryProperty) {
        this._lakeFormationQuery.internalValue = value;
    }
    public resetLakeFormationQuery() {
        this._lakeFormationQuery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lakeFormationQueryInput() {
        return this._lakeFormationQuery.internalValue;
    }
}

export class LakeFormationPropertyList extends cdktn.ComplexList {
    public internalValue? : LakeFormationProperty[] | cdktn.IResolvable

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
    public get(index: number): LakeFormationPropertyOutputReference {
        return new LakeFormationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConnectProperty {
    /**
    * Determines whether the Amazon Redshift connect integration is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorization CcRedshiftIdcApplication#authorization}
    */
    readonly authorization?: string;
}
export class ConnectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorization !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorization = this._authorization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorization = value.authorization;
        }
    }

    // authorization - computed: true, optional: true, required: false
    private _authorization?: string; 
    public get authorization() {
        return this.getStringAttribute('authorization');
    }
    public set authorization(value: string) {
        this._authorization = value;
    }
    public resetAuthorization() {
        this._authorization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationInput() {
        return this._authorization;
    }
}
export interface RedshiftProperty {
    /**
    * The Amazon Redshift connect integration scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#connect CcRedshiftIdcApplication#connect}
    */
    readonly connect?: ConnectProperty;
}
export class RedshiftPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RedshiftProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connect?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connect = this._connect?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connect.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connect.internalValue = value.connect;
        }
    }

    // connect - computed: true, optional: true, required: false
    private _connect = new ConnectPropertyOutputReference(this, "connect");
    public get connect() {
        return this._connect;
    }
    public putConnect(value: ConnectProperty) {
        this._connect.internalValue = value;
    }
    public resetConnect() {
        this._connect.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectInput() {
        return this._connect.internalValue;
    }
}

export class RedshiftPropertyList extends cdktn.ComplexList {
    public internalValue? : RedshiftProperty[] | cdktn.IResolvable

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
    public get(index: number): RedshiftPropertyOutputReference {
        return new RedshiftPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReadWriteAccessProperty {
    /**
    * Determines whether the read/write scope is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#authorization CcRedshiftIdcApplication#authorization}
    */
    readonly authorization?: string;
}
export class ReadWriteAccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadWriteAccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorization !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorization = this._authorization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadWriteAccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorization = value.authorization;
        }
    }

    // authorization - computed: true, optional: true, required: false
    private _authorization?: string; 
    public get authorization() {
        return this.getStringAttribute('authorization');
    }
    public set authorization(value: string) {
        this._authorization = value;
    }
    public resetAuthorization() {
        this._authorization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationInput() {
        return this._authorization;
    }
}
export interface S3AccessGrantsProperty {
    /**
    * The S3 Access Grants scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#read_write_access CcRedshiftIdcApplication#read_write_access}
    */
    readonly readWriteAccess?: ReadWriteAccessProperty;
}
export class S3AccessGrantsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): S3AccessGrantsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readWriteAccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readWriteAccess = this._readWriteAccess?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3AccessGrantsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readWriteAccess.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readWriteAccess.internalValue = value.readWriteAccess;
        }
    }

    // read_write_access - computed: true, optional: true, required: false
    private _readWriteAccess = new ReadWriteAccessPropertyOutputReference(this, "read_write_access");
    public get readWriteAccess() {
        return this._readWriteAccess;
    }
    public putReadWriteAccess(value: ReadWriteAccessProperty) {
        this._readWriteAccess.internalValue = value;
    }
    public resetReadWriteAccess() {
        this._readWriteAccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readWriteAccessInput() {
        return this._readWriteAccess.internalValue;
    }
}

export class S3AccessGrantsPropertyList extends cdktn.ComplexList {
    public internalValue? : S3AccessGrantsProperty[] | cdktn.IResolvable

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
    public get(index: number): S3AccessGrantsPropertyOutputReference {
        return new S3AccessGrantsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceIntegrationsProperty {
    /**
    * A list of scopes set up for Lake Formation integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#lake_formation CcRedshiftIdcApplication#lake_formation}
    */
    readonly lakeFormation?: LakeFormationProperty[] | cdktn.IResolvable;
    /**
    * A list of scopes set up for Amazon Redshift integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#redshift CcRedshiftIdcApplication#redshift}
    */
    readonly redshift?: RedshiftProperty[] | cdktn.IResolvable;
    /**
    * A list of scopes set up for S3 Access Grants integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#s3_access_grants CcRedshiftIdcApplication#s3_access_grants}
    */
    readonly s3AccessGrants?: S3AccessGrantsProperty[] | cdktn.IResolvable;
}
export class ServiceIntegrationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServiceIntegrationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lakeFormation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lakeFormation = this._lakeFormation?.internalValue;
        }
        if (this._redshift?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshift = this._redshift?.internalValue;
        }
        if (this._s3AccessGrants?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3AccessGrants = this._s3AccessGrants?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceIntegrationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lakeFormation.internalValue = undefined;
            this._redshift.internalValue = undefined;
            this._s3AccessGrants.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lakeFormation.internalValue = value.lakeFormation;
            this._redshift.internalValue = value.redshift;
            this._s3AccessGrants.internalValue = value.s3AccessGrants;
        }
    }

    // lake_formation - computed: true, optional: true, required: false
    private _lakeFormation = new LakeFormationPropertyList(this, "lake_formation", false);
    public get lakeFormation() {
        return this._lakeFormation;
    }
    public putLakeFormation(value: LakeFormationProperty[] | cdktn.IResolvable) {
        this._lakeFormation.internalValue = value;
    }
    public resetLakeFormation() {
        this._lakeFormation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lakeFormationInput() {
        return this._lakeFormation.internalValue;
    }

    // redshift - computed: true, optional: true, required: false
    private _redshift = new RedshiftPropertyList(this, "redshift", false);
    public get redshift() {
        return this._redshift;
    }
    public putRedshift(value: RedshiftProperty[] | cdktn.IResolvable) {
        this._redshift.internalValue = value;
    }
    public resetRedshift() {
        this._redshift.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftInput() {
        return this._redshift.internalValue;
    }

    // s3_access_grants - computed: true, optional: true, required: false
    private _s3AccessGrants = new S3AccessGrantsPropertyList(this, "s3_access_grants", false);
    public get s3AccessGrants() {
        return this._s3AccessGrants;
    }
    public putS3AccessGrants(value: S3AccessGrantsProperty[] | cdktn.IResolvable) {
        this._s3AccessGrants.internalValue = value;
    }
    public resetS3AccessGrants() {
        this._s3AccessGrants.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AccessGrantsInput() {
        return this._s3AccessGrants.internalValue;
    }
}

export class ServiceIntegrationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ServiceIntegrationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ServiceIntegrationsPropertyOutputReference {
        return new ServiceIntegrationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#key CcRedshiftIdcApplication#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/redshift_redshift_idc_application#value CcRedshiftIdcApplication#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
