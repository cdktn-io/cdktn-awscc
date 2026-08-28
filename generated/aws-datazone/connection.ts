// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * AWS Location of project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#aws_location CcConnection#aws_location}
    */
    readonly awsLocation?: CcConnection.AwsLocationProperty;
    /**
    * The configurations of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#configurations CcConnection#configurations}
    */
    readonly configurations?: CcConnection.ConnectionConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The description of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#description CcConnection#description}
    */
    readonly description?: string;
    /**
    * The identifier of the domain in which the connection is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#domain_identifier CcConnection#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Specifies whether the trusted identity propagation is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#enable_trusted_identity_propagation CcConnection#enable_trusted_identity_propagation}
    */
    readonly enableTrustedIdentityPropagation?: boolean | cdktn.IResolvable;
    /**
    * The identifier of the environment in which the connection is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#environment_identifier CcConnection#environment_identifier}
    */
    readonly environmentIdentifier?: string;
    /**
    * The name of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#name CcConnection#name}
    */
    readonly name: string;
    /**
    * The identifier of the project in which the connection should be created. If 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#project_identifier CcConnection#project_identifier}
    */
    readonly projectIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#props CcConnection#props}
    */
    readonly props?: CcConnection.ConnectionPropertiesInputProperty;
    /**
    * The scope of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#scope CcConnection#scope}
    */
    readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection awscc_datazone_connection}
*/
export class CcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnection to import
    * @param importFromId The id of the existing CcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection awscc_datazone_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_connection',
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
        this._awsLocation.internalValue = config.awsLocation;
        this._configurations.internalValue = config.configurations;
        this._description = config.description;
        this._domainIdentifier = config.domainIdentifier;
        this._enableTrustedIdentityPropagation = config.enableTrustedIdentityPropagation;
        this._environmentIdentifier = config.environmentIdentifier;
        this._name = config.name;
        this._projectIdentifier = config.projectIdentifier;
        this._props.internalValue = config.props;
        this._scope = config.scope;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_location - computed: true, optional: true, required: false
    private _awsLocation = new CcConnection.AwsLocationPropertyOutputReference(this, "aws_location");
    public get awsLocation() {
        return this._awsLocation;
    }
    public putAwsLocation(value: CcConnection.AwsLocationProperty) {
        this._awsLocation.internalValue = value;
    }
    public resetAwsLocation() {
        this._awsLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsLocationInput() {
        return this._awsLocation.internalValue;
    }

    // configurations - computed: true, optional: true, required: false
    private _configurations = new CcConnection.ConnectionConfigurationPropertyList(this, "configurations", false);
    public get configurations() {
        return this._configurations;
    }
    public putConfigurations(value: CcConnection.ConnectionConfigurationProperty[] | cdktn.IResolvable) {
        this._configurations.internalValue = value;
    }
    public resetConfigurations() {
        this._configurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationsInput() {
        return this._configurations.internalValue;
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

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // domain_unit_id - computed: true, optional: false, required: false
    public get domainUnitId() {
        return this.getStringAttribute('domain_unit_id');
    }

    // enable_trusted_identity_propagation - computed: true, optional: true, required: false
    private _enableTrustedIdentityPropagation?: boolean | cdktn.IResolvable; 
    public get enableTrustedIdentityPropagation() {
        return this.getBooleanAttribute('enable_trusted_identity_propagation');
    }
    public set enableTrustedIdentityPropagation(value: boolean | cdktn.IResolvable) {
        this._enableTrustedIdentityPropagation = value;
    }
    public resetEnableTrustedIdentityPropagation() {
        this._enableTrustedIdentityPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTrustedIdentityPropagationInput() {
        return this._enableTrustedIdentityPropagation;
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_identifier - computed: true, optional: true, required: false
    private _environmentIdentifier?: string; 
    public get environmentIdentifier() {
        return this.getStringAttribute('environment_identifier');
    }
    public set environmentIdentifier(value: string) {
        this._environmentIdentifier = value;
    }
    public resetEnvironmentIdentifier() {
        this._environmentIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdentifierInput() {
        return this._environmentIdentifier;
    }

    // environment_user_role - computed: true, optional: false, required: false
    public get environmentUserRole() {
        return this.getStringAttribute('environment_user_role');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // project_id - computed: true, optional: false, required: false
    public get projectId() {
        return this.getStringAttribute('project_id');
    }

    // project_identifier - computed: true, optional: true, required: false
    private _projectIdentifier?: string; 
    public get projectIdentifier() {
        return this.getStringAttribute('project_identifier');
    }
    public set projectIdentifier(value: string) {
        this._projectIdentifier = value;
    }
    public resetProjectIdentifier() {
        this._projectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdentifierInput() {
        return this._projectIdentifier;
    }

    // props - computed: true, optional: true, required: false
    private _props = new CcConnection.ConnectionPropertiesInputPropertyOutputReference(this, "props");
    public get props() {
        return this._props;
    }
    public putProps(value: CcConnection.ConnectionPropertiesInputProperty) {
        this._props.internalValue = value;
    }
    public resetProps() {
        this._props.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propsInput() {
        return this._props.internalValue;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
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
            aws_location: ccConnectionAwsLocationPropertyToTerraform(this._awsLocation.internalValue),
            configurations: cdktn.listMapper(ccConnectionConnectionConfigurationPropertyToTerraform, false)(this._configurations.internalValue),
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            enable_trusted_identity_propagation: cdktn.booleanToTerraform(this._enableTrustedIdentityPropagation),
            environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
            name: cdktn.stringToTerraform(this._name),
            project_identifier: cdktn.stringToTerraform(this._projectIdentifier),
            props: ccConnectionConnectionPropertiesInputPropertyToTerraform(this._props.internalValue),
            scope: cdktn.stringToTerraform(this._scope),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_location: {
                value: ccConnectionAwsLocationPropertyToHclTerraform(this._awsLocation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.AwsLocationProperty",
            },
            configurations: {
                value: cdktn.listMapperHcl(ccConnectionConnectionConfigurationPropertyToHclTerraform, false)(this._configurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConnection.ConnectionConfigurationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_trusted_identity_propagation: {
                value: cdktn.booleanToHclTerraform(this._enableTrustedIdentityPropagation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            environment_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentIdentifier),
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
            project_identifier: {
                value: cdktn.stringToHclTerraform(this._projectIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            props: {
                value: ccConnectionConnectionPropertiesInputPropertyToHclTerraform(this._props.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.ConnectionPropertiesInputProperty",
            },
            scope: {
                value: cdktn.stringToHclTerraform(this._scope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectionAwsLocationPropertyToTerraform(struct?: CcConnection.AwsLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_role: cdktn.stringToTerraform(struct!.accessRole),
        aws_account_id: cdktn.stringToTerraform(struct!.awsAccountId),
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        iam_connection_id: cdktn.stringToTerraform(struct!.iamConnectionId),
    }
}


export function ccConnectionAwsLocationPropertyToHclTerraform(struct?: CcConnection.AwsLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_role: {
            value: cdktn.stringToHclTerraform(struct!.accessRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_account_id: {
            value: cdktn.stringToHclTerraform(struct!.awsAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_connection_id: {
            value: cdktn.stringToHclTerraform(struct!.iamConnectionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionConnectionConfigurationPropertyToTerraform(struct?: CcConnection.ConnectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        classification: cdktn.stringToTerraform(struct!.classification),
        properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    }
}


export function ccConnectionConnectionConfigurationPropertyToHclTerraform(struct?: CcConnection.ConnectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        classification: {
            value: cdktn.stringToHclTerraform(struct!.classification),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionAmazonQPropertiesInputPropertyToTerraform(struct?: CcConnection.AmazonQPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_mode: cdktn.stringToTerraform(struct!.authMode),
        is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
        profile_arn: cdktn.stringToTerraform(struct!.profileArn),
    }
}


export function ccConnectionAmazonQPropertiesInputPropertyToHclTerraform(struct?: CcConnection.AmazonQPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_mode: {
            value: cdktn.stringToHclTerraform(struct!.authMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.profileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionAthenaPropertiesInputPropertyToTerraform(struct?: CcConnection.AthenaPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        workgroup_name: cdktn.stringToTerraform(struct!.workgroupName),
    }
}


export function ccConnectionAthenaPropertiesInputPropertyToHclTerraform(struct?: CcConnection.AthenaPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        workgroup_name: {
            value: cdktn.stringToHclTerraform(struct!.workgroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionBasicAuthenticationCredentialsPropertyToTerraform(struct?: CcConnection.BasicAuthenticationCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        user_name: cdktn.stringToTerraform(struct!.userName),
    }
}


export function ccConnectionBasicAuthenticationCredentialsPropertyToHclTerraform(struct?: CcConnection.BasicAuthenticationCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name: {
            value: cdktn.stringToHclTerraform(struct!.userName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionAuthorizationCodePropertiesPropertyToTerraform(struct?: CcConnection.AuthorizationCodePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code: cdktn.stringToTerraform(struct!.authorizationCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectionAuthorizationCodePropertiesPropertyToHclTerraform(struct?: CcConnection.AuthorizationCodePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code: {
            value: cdktn.stringToHclTerraform(struct!.authorizationCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionOAuth2ClientApplicationPropertyToTerraform(struct?: CcConnection.OAuth2ClientApplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_managed_client_application_reference: cdktn.stringToTerraform(struct!.awsManagedClientApplicationReference),
        user_managed_client_application_client_id: cdktn.stringToTerraform(struct!.userManagedClientApplicationClientId),
    }
}


export function ccConnectionOAuth2ClientApplicationPropertyToHclTerraform(struct?: CcConnection.OAuth2ClientApplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_managed_client_application_reference: {
            value: cdktn.stringToHclTerraform(struct!.awsManagedClientApplicationReference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_managed_client_application_client_id: {
            value: cdktn.stringToHclTerraform(struct!.userManagedClientApplicationClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionGlueOAuth2CredentialsPropertyToTerraform(struct?: CcConnection.GlueOAuth2CredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        jwt_token: cdktn.stringToTerraform(struct!.jwtToken),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
        user_managed_client_application_client_secret: cdktn.stringToTerraform(struct!.userManagedClientApplicationClientSecret),
    }
}


export function ccConnectionGlueOAuth2CredentialsPropertyToHclTerraform(struct?: CcConnection.GlueOAuth2CredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_token: {
            value: cdktn.stringToHclTerraform(struct!.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jwt_token: {
            value: cdktn.stringToHclTerraform(struct!.jwtToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh_token: {
            value: cdktn.stringToHclTerraform(struct!.refreshToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_managed_client_application_client_secret: {
            value: cdktn.stringToHclTerraform(struct!.userManagedClientApplicationClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionOAuth2PropertiesPropertyToTerraform(struct?: CcConnection.OAuth2PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code_properties: ccConnectionAuthorizationCodePropertiesPropertyToTerraform(struct!.authorizationCodeProperties),
        o_auth_2_client_application: ccConnectionOAuth2ClientApplicationPropertyToTerraform(struct!.oAuth2ClientApplication),
        o_auth_2_credentials: ccConnectionGlueOAuth2CredentialsPropertyToTerraform(struct!.oAuth2Credentials),
        o_auth_2_grant_type: cdktn.stringToTerraform(struct!.oAuth2GrantType),
        token_url: cdktn.stringToTerraform(struct!.tokenUrl),
        token_url_parameters_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tokenUrlParametersMap),
    }
}


export function ccConnectionOAuth2PropertiesPropertyToHclTerraform(struct?: CcConnection.OAuth2PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code_properties: {
            value: ccConnectionAuthorizationCodePropertiesPropertyToHclTerraform(struct!.authorizationCodeProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodePropertiesProperty",
        },
        o_auth_2_client_application: {
            value: ccConnectionOAuth2ClientApplicationPropertyToHclTerraform(struct!.oAuth2ClientApplication),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2ClientApplicationProperty",
        },
        o_auth_2_credentials: {
            value: ccConnectionGlueOAuth2CredentialsPropertyToHclTerraform(struct!.oAuth2Credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "GlueOAuth2CredentialsProperty",
        },
        o_auth_2_grant_type: {
            value: cdktn.stringToHclTerraform(struct!.oAuth2GrantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_url_parameters_map: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tokenUrlParametersMap),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionAuthenticationConfigurationInputPropertyToTerraform(struct?: CcConnection.AuthenticationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        basic_authentication_credentials: ccConnectionBasicAuthenticationCredentialsPropertyToTerraform(struct!.basicAuthenticationCredentials),
        custom_authentication_credentials: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customAuthenticationCredentials),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        o_auth_2_properties: ccConnectionOAuth2PropertiesPropertyToTerraform(struct!.oAuth2Properties),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccConnectionAuthenticationConfigurationInputPropertyToHclTerraform(struct?: CcConnection.AuthenticationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        basic_authentication_credentials: {
            value: ccConnectionBasicAuthenticationCredentialsPropertyToHclTerraform(struct!.basicAuthenticationCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "BasicAuthenticationCredentialsProperty",
        },
        custom_authentication_credentials: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customAuthenticationCredentials),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_2_properties: {
            value: ccConnectionOAuth2PropertiesPropertyToHclTerraform(struct!.oAuth2Properties),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2PropertiesProperty",
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


export function ccConnectionPhysicalConnectionRequirementsPropertyToTerraform(struct?: CcConnection.PhysicalConnectionRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        security_group_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIdList),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
        subnet_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIdList),
    }
}


export function ccConnectionPhysicalConnectionRequirementsPropertyToHclTerraform(struct?: CcConnection.PhysicalConnectionRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionGlueConnectionInputPropertyToTerraform(struct?: CcConnection.GlueConnectionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        athena_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.athenaProperties),
        authentication_configuration: ccConnectionAuthenticationConfigurationInputPropertyToTerraform(struct!.authenticationConfiguration),
        connection_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.connectionProperties),
        connection_type: cdktn.stringToTerraform(struct!.connectionType),
        description: cdktn.stringToTerraform(struct!.description),
        match_criteria: cdktn.stringToTerraform(struct!.matchCriteria),
        name: cdktn.stringToTerraform(struct!.name),
        physical_connection_requirements: ccConnectionPhysicalConnectionRequirementsPropertyToTerraform(struct!.physicalConnectionRequirements),
        python_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.pythonProperties),
        spark_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkProperties),
        validate_credentials: cdktn.booleanToTerraform(struct!.validateCredentials),
        validate_for_compute_environments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.validateForComputeEnvironments),
    }
}


export function ccConnectionGlueConnectionInputPropertyToHclTerraform(struct?: CcConnection.GlueConnectionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        athena_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.athenaProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        authentication_configuration: {
            value: ccConnectionAuthenticationConfigurationInputPropertyToHclTerraform(struct!.authenticationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticationConfigurationInputProperty",
        },
        connection_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.connectionProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        connection_type: {
            value: cdktn.stringToHclTerraform(struct!.connectionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match_criteria: {
            value: cdktn.stringToHclTerraform(struct!.matchCriteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        physical_connection_requirements: {
            value: ccConnectionPhysicalConnectionRequirementsPropertyToHclTerraform(struct!.physicalConnectionRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "PhysicalConnectionRequirementsProperty",
        },
        python_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.pythonProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        spark_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        validate_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.validateCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        validate_for_compute_environments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.validateForComputeEnvironments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionGluePropertiesInputPropertyToTerraform(struct?: CcConnection.GluePropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_connection_input: ccConnectionGlueConnectionInputPropertyToTerraform(struct!.glueConnectionInput),
    }
}


export function ccConnectionGluePropertiesInputPropertyToHclTerraform(struct?: CcConnection.GluePropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_connection_input: {
            value: ccConnectionGlueConnectionInputPropertyToHclTerraform(struct!.glueConnectionInput),
            isBlock: true,
            type: "struct",
            storageClassType: "GlueConnectionInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionHyperPodPropertiesInputPropertyToTerraform(struct?: CcConnection.HyperPodPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    }
}


export function ccConnectionHyperPodPropertiesInputPropertyToHclTerraform(struct?: CcConnection.HyperPodPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_name: {
            value: cdktn.stringToHclTerraform(struct!.clusterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionIamPropertiesInputPropertyToTerraform(struct?: CcConnection.IamPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_lineage_sync_enabled: cdktn.booleanToTerraform(struct!.glueLineageSyncEnabled),
    }
}


export function ccConnectionIamPropertiesInputPropertyToHclTerraform(struct?: CcConnection.IamPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_lineage_sync_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.glueLineageSyncEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionLakehousePropertiesInputPropertyToTerraform(struct?: CcConnection.LakehousePropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_lineage_sync_enabled: cdktn.booleanToTerraform(struct!.glueLineageSyncEnabled),
    }
}


export function ccConnectionLakehousePropertiesInputPropertyToHclTerraform(struct?: CcConnection.LakehousePropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_lineage_sync_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.glueLineageSyncEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionMlflowPropertiesInputPropertyToTerraform(struct?: CcConnection.MlflowPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tracking_server_arn: cdktn.stringToTerraform(struct!.trackingServerArn),
    }
}


export function ccConnectionMlflowPropertiesInputPropertyToHclTerraform(struct?: CcConnection.MlflowPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tracking_server_arn: {
            value: cdktn.stringToHclTerraform(struct!.trackingServerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionUsernamePasswordPropertyToTerraform(struct?: CcConnection.UsernamePasswordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectionUsernamePasswordPropertyToHclTerraform(struct?: CcConnection.UsernamePasswordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionRedshiftCredentialsPropertyToTerraform(struct?: CcConnection.RedshiftCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        username_password: ccConnectionUsernamePasswordPropertyToTerraform(struct!.usernamePassword),
    }
}


export function ccConnectionRedshiftCredentialsPropertyToHclTerraform(struct?: CcConnection.RedshiftCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username_password: {
            value: ccConnectionUsernamePasswordPropertyToHclTerraform(struct!.usernamePassword),
            isBlock: true,
            type: "struct",
            storageClassType: "UsernamePasswordProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionLineageSyncSchedulePropertyToTerraform(struct?: CcConnection.LineageSyncScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule: cdktn.stringToTerraform(struct!.schedule),
    }
}


export function ccConnectionLineageSyncSchedulePropertyToHclTerraform(struct?: CcConnection.LineageSyncScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule: {
            value: cdktn.stringToHclTerraform(struct!.schedule),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionRedshiftLineageSyncConfigurationInputPropertyToTerraform(struct?: CcConnection.RedshiftLineageSyncConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        schedule: ccConnectionLineageSyncSchedulePropertyToTerraform(struct!.schedule),
    }
}


export function ccConnectionRedshiftLineageSyncConfigurationInputPropertyToHclTerraform(struct?: CcConnection.RedshiftLineageSyncConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        schedule: {
            value: ccConnectionLineageSyncSchedulePropertyToHclTerraform(struct!.schedule),
            isBlock: true,
            type: "struct",
            storageClassType: "LineageSyncScheduleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionRedshiftStoragePropertiesPropertyToTerraform(struct?: CcConnection.RedshiftStoragePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_name: cdktn.stringToTerraform(struct!.clusterName),
        workgroup_name: cdktn.stringToTerraform(struct!.workgroupName),
    }
}


export function ccConnectionRedshiftStoragePropertiesPropertyToHclTerraform(struct?: CcConnection.RedshiftStoragePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_name: {
            value: cdktn.stringToHclTerraform(struct!.clusterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workgroup_name: {
            value: cdktn.stringToHclTerraform(struct!.workgroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionRedshiftPropertiesInputPropertyToTerraform(struct?: CcConnection.RedshiftPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credentials: ccConnectionRedshiftCredentialsPropertyToTerraform(struct!.credentials),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        host: cdktn.stringToTerraform(struct!.host),
        lineage_sync: ccConnectionRedshiftLineageSyncConfigurationInputPropertyToTerraform(struct!.lineageSync),
        port: cdktn.numberToTerraform(struct!.port),
        storage: ccConnectionRedshiftStoragePropertiesPropertyToTerraform(struct!.storage),
    }
}


export function ccConnectionRedshiftPropertiesInputPropertyToHclTerraform(struct?: CcConnection.RedshiftPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credentials: {
            value: ccConnectionRedshiftCredentialsPropertyToHclTerraform(struct!.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftCredentialsProperty",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lineage_sync: {
            value: ccConnectionRedshiftLineageSyncConfigurationInputPropertyToHclTerraform(struct!.lineageSync),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftLineageSyncConfigurationInputProperty",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage: {
            value: ccConnectionRedshiftStoragePropertiesPropertyToHclTerraform(struct!.storage),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftStoragePropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionS3PropertiesInputPropertyToTerraform(struct?: CcConnection.S3PropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        register_s3_access_grant_location: cdktn.booleanToTerraform(struct!.registerS3AccessGrantLocation),
        s3_access_grant_location_id: cdktn.stringToTerraform(struct!.s3AccessGrantLocationId),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccConnectionS3PropertiesInputPropertyToHclTerraform(struct?: CcConnection.S3PropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        register_s3_access_grant_location: {
            value: cdktn.booleanToHclTerraform(struct!.registerS3AccessGrantLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        s3_access_grant_location_id: {
            value: cdktn.stringToHclTerraform(struct!.s3AccessGrantLocationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionSparkEmrPropertiesInputPropertyToTerraform(struct?: CcConnection.SparkEmrPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_arn: cdktn.stringToTerraform(struct!.computeArn),
        instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
        java_virtual_env: cdktn.stringToTerraform(struct!.javaVirtualEnv),
        log_uri: cdktn.stringToTerraform(struct!.logUri),
        managed_endpoint_arn: cdktn.stringToTerraform(struct!.managedEndpointArn),
        python_virtual_env: cdktn.stringToTerraform(struct!.pythonVirtualEnv),
        runtime_role: cdktn.stringToTerraform(struct!.runtimeRole),
        trusted_certificates_s3_uri: cdktn.stringToTerraform(struct!.trustedCertificatesS3Uri),
    }
}


export function ccConnectionSparkEmrPropertiesInputPropertyToHclTerraform(struct?: CcConnection.SparkEmrPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_arn: {
            value: cdktn.stringToHclTerraform(struct!.computeArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.instanceProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        java_virtual_env: {
            value: cdktn.stringToHclTerraform(struct!.javaVirtualEnv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_uri: {
            value: cdktn.stringToHclTerraform(struct!.logUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_endpoint_arn: {
            value: cdktn.stringToHclTerraform(struct!.managedEndpointArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        python_virtual_env: {
            value: cdktn.stringToHclTerraform(struct!.pythonVirtualEnv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime_role: {
            value: cdktn.stringToHclTerraform(struct!.runtimeRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trusted_certificates_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.trustedCertificatesS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionSparkGlueArgsPropertyToTerraform(struct?: CcConnection.SparkGlueArgsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection: cdktn.stringToTerraform(struct!.connection),
    }
}


export function ccConnectionSparkGlueArgsPropertyToHclTerraform(struct?: CcConnection.SparkGlueArgsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection: {
            value: cdktn.stringToHclTerraform(struct!.connection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionSparkGluePropertiesInputPropertyToTerraform(struct?: CcConnection.SparkGluePropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_args: ccConnectionSparkGlueArgsPropertyToTerraform(struct!.additionalArgs),
        glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
        glue_version: cdktn.stringToTerraform(struct!.glueVersion),
        idle_timeout: cdktn.numberToTerraform(struct!.idleTimeout),
        java_virtual_env: cdktn.stringToTerraform(struct!.javaVirtualEnv),
        number_of_workers: cdktn.numberToTerraform(struct!.numberOfWorkers),
        python_virtual_env: cdktn.stringToTerraform(struct!.pythonVirtualEnv),
        worker_type: cdktn.stringToTerraform(struct!.workerType),
    }
}


export function ccConnectionSparkGluePropertiesInputPropertyToHclTerraform(struct?: CcConnection.SparkGluePropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_args: {
            value: ccConnectionSparkGlueArgsPropertyToHclTerraform(struct!.additionalArgs),
            isBlock: true,
            type: "struct",
            storageClassType: "SparkGlueArgsProperty",
        },
        glue_connection_name: {
            value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        glue_version: {
            value: cdktn.stringToHclTerraform(struct!.glueVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        idle_timeout: {
            value: cdktn.numberToHclTerraform(struct!.idleTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        java_virtual_env: {
            value: cdktn.stringToHclTerraform(struct!.javaVirtualEnv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        number_of_workers: {
            value: cdktn.numberToHclTerraform(struct!.numberOfWorkers),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        python_virtual_env: {
            value: cdktn.stringToHclTerraform(struct!.pythonVirtualEnv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        worker_type: {
            value: cdktn.stringToHclTerraform(struct!.workerType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionWorkflowsMwaaPropertiesInputPropertyToTerraform(struct?: CcConnection.WorkflowsMwaaPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mwaa_environment_name: cdktn.stringToTerraform(struct!.mwaaEnvironmentName),
    }
}


export function ccConnectionWorkflowsMwaaPropertiesInputPropertyToHclTerraform(struct?: CcConnection.WorkflowsMwaaPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mwaa_environment_name: {
            value: cdktn.stringToHclTerraform(struct!.mwaaEnvironmentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionConnectionPropertiesInputPropertyToTerraform(struct?: CcConnection.ConnectionPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_q_properties: ccConnectionAmazonQPropertiesInputPropertyToTerraform(struct!.amazonQProperties),
        athena_properties: ccConnectionAthenaPropertiesInputPropertyToTerraform(struct!.athenaProperties),
        glue_properties: ccConnectionGluePropertiesInputPropertyToTerraform(struct!.glueProperties),
        hyper_pod_properties: ccConnectionHyperPodPropertiesInputPropertyToTerraform(struct!.hyperPodProperties),
        iam_properties: ccConnectionIamPropertiesInputPropertyToTerraform(struct!.iamProperties),
        lakehouse_properties: ccConnectionLakehousePropertiesInputPropertyToTerraform(struct!.lakehouseProperties),
        mlflow_properties: ccConnectionMlflowPropertiesInputPropertyToTerraform(struct!.mlflowProperties),
        redshift_properties: ccConnectionRedshiftPropertiesInputPropertyToTerraform(struct!.redshiftProperties),
        s3_properties: ccConnectionS3PropertiesInputPropertyToTerraform(struct!.s3Properties),
        spark_emr_properties: ccConnectionSparkEmrPropertiesInputPropertyToTerraform(struct!.sparkEmrProperties),
        spark_glue_properties: ccConnectionSparkGluePropertiesInputPropertyToTerraform(struct!.sparkGlueProperties),
        workflows_mwaa_properties: ccConnectionWorkflowsMwaaPropertiesInputPropertyToTerraform(struct!.workflowsMwaaProperties),
        workflows_serverless_properties: cdktn.stringToTerraform(struct!.workflowsServerlessProperties),
    }
}


export function ccConnectionConnectionPropertiesInputPropertyToHclTerraform(struct?: CcConnection.ConnectionPropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_q_properties: {
            value: ccConnectionAmazonQPropertiesInputPropertyToHclTerraform(struct!.amazonQProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonQPropertiesInputProperty",
        },
        athena_properties: {
            value: ccConnectionAthenaPropertiesInputPropertyToHclTerraform(struct!.athenaProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "AthenaPropertiesInputProperty",
        },
        glue_properties: {
            value: ccConnectionGluePropertiesInputPropertyToHclTerraform(struct!.glueProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "GluePropertiesInputProperty",
        },
        hyper_pod_properties: {
            value: ccConnectionHyperPodPropertiesInputPropertyToHclTerraform(struct!.hyperPodProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "HyperPodPropertiesInputProperty",
        },
        iam_properties: {
            value: ccConnectionIamPropertiesInputPropertyToHclTerraform(struct!.iamProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "IamPropertiesInputProperty",
        },
        lakehouse_properties: {
            value: ccConnectionLakehousePropertiesInputPropertyToHclTerraform(struct!.lakehouseProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "LakehousePropertiesInputProperty",
        },
        mlflow_properties: {
            value: ccConnectionMlflowPropertiesInputPropertyToHclTerraform(struct!.mlflowProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "MlflowPropertiesInputProperty",
        },
        redshift_properties: {
            value: ccConnectionRedshiftPropertiesInputPropertyToHclTerraform(struct!.redshiftProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftPropertiesInputProperty",
        },
        s3_properties: {
            value: ccConnectionS3PropertiesInputPropertyToHclTerraform(struct!.s3Properties),
            isBlock: true,
            type: "struct",
            storageClassType: "S3PropertiesInputProperty",
        },
        spark_emr_properties: {
            value: ccConnectionSparkEmrPropertiesInputPropertyToHclTerraform(struct!.sparkEmrProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "SparkEmrPropertiesInputProperty",
        },
        spark_glue_properties: {
            value: ccConnectionSparkGluePropertiesInputPropertyToHclTerraform(struct!.sparkGlueProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "SparkGluePropertiesInputProperty",
        },
        workflows_mwaa_properties: {
            value: ccConnectionWorkflowsMwaaPropertiesInputPropertyToHclTerraform(struct!.workflowsMwaaProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkflowsMwaaPropertiesInputProperty",
        },
        workflows_serverless_properties: {
            value: cdktn.stringToHclTerraform(struct!.workflowsServerlessProperties),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnection {
export interface AwsLocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#access_role CcConnection#access_role}
    */
    readonly accessRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#aws_account_id CcConnection#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#aws_region CcConnection#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#iam_connection_id CcConnection#iam_connection_id}
    */
    readonly iamConnectionId?: string;
}
export class AwsLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessRole = this._accessRole;
        }
        if (this._awsAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsAccountId = this._awsAccountId;
        }
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._iamConnectionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamConnectionId = this._iamConnectionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessRole = undefined;
            this._awsAccountId = undefined;
            this._awsRegion = undefined;
            this._iamConnectionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessRole = value.accessRole;
            this._awsAccountId = value.awsAccountId;
            this._awsRegion = value.awsRegion;
            this._iamConnectionId = value.iamConnectionId;
        }
    }

    // access_role - computed: true, optional: true, required: false
    private _accessRole?: string; 
    public get accessRole() {
        return this.getStringAttribute('access_role');
    }
    public set accessRole(value: string) {
        this._accessRole = value;
    }
    public resetAccessRole() {
        this._accessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRoleInput() {
        return this._accessRole;
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // iam_connection_id - computed: true, optional: true, required: false
    private _iamConnectionId?: string; 
    public get iamConnectionId() {
        return this.getStringAttribute('iam_connection_id');
    }
    public set iamConnectionId(value: string) {
        this._iamConnectionId = value;
    }
    public resetIamConnectionId() {
        this._iamConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamConnectionIdInput() {
        return this._iamConnectionId;
    }
}
export interface ConnectionConfigurationProperty {
    /**
    * The classification of the connection configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#classification CcConnection#classification}
    */
    readonly classification?: string;
    /**
    * Property Map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#properties CcConnection#properties}
    */
    readonly properties?: { [key: string]: string };
}
export class ConnectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConnectionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classification !== undefined) {
            hasAnyValues = true;
            internalValueResult.classification = this._classification;
        }
        if (this._properties !== undefined) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classification = undefined;
            this._properties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classification = value.classification;
            this._properties = value.properties;
        }
    }

    // classification - computed: true, optional: true, required: false
    private _classification?: string; 
    public get classification() {
        return this.getStringAttribute('classification');
    }
    public set classification(value: string) {
        this._classification = value;
    }
    public resetClassification() {
        this._classification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationInput() {
        return this._classification;
    }

    // properties - computed: true, optional: true, required: false
    private _properties?: { [key: string]: string }; 
    public get properties() {
        return this.getStringMapAttribute('properties');
    }
    public set properties(value: { [key: string]: string }) {
        this._properties = value;
    }
    public resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties;
    }
}

export class ConnectionConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ConnectionConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ConnectionConfigurationPropertyOutputReference {
        return new ConnectionConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AmazonQPropertiesInputProperty {
    /**
    * The authentication mode of the connection's AmazonQ properties
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#auth_mode CcConnection#auth_mode}
    */
    readonly authMode?: string;
    /**
    * Specifies whether Amazon Q is enabled for the connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#is_enabled CcConnection#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#profile_arn CcConnection#profile_arn}
    */
    readonly profileArn?: string;
}
export class AmazonQPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonQPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMode = this._authMode;
        }
        if (this._isEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEnabled = this._isEnabled;
        }
        if (this._profileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileArn = this._profileArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonQPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMode = undefined;
            this._isEnabled = undefined;
            this._profileArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMode = value.authMode;
            this._isEnabled = value.isEnabled;
            this._profileArn = value.profileArn;
        }
    }

    // auth_mode - computed: true, optional: true, required: false
    private _authMode?: string; 
    public get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    public set authMode(value: string) {
        this._authMode = value;
    }
    public resetAuthMode() {
        this._authMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authModeInput() {
        return this._authMode;
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }

    // profile_arn - computed: true, optional: true, required: false
    private _profileArn?: string; 
    public get profileArn() {
        return this.getStringAttribute('profile_arn');
    }
    public set profileArn(value: string) {
        this._profileArn = value;
    }
    public resetProfileArn() {
        this._profileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileArnInput() {
        return this._profileArn;
    }
}
export interface AthenaPropertiesInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#workgroup_name CcConnection#workgroup_name}
    */
    readonly workgroupName?: string;
}
export class AthenaPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AthenaPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workgroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.workgroupName = this._workgroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AthenaPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workgroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workgroupName = value.workgroupName;
        }
    }

    // workgroup_name - computed: true, optional: true, required: false
    private _workgroupName?: string; 
    public get workgroupName() {
        return this.getStringAttribute('workgroup_name');
    }
    public set workgroupName(value: string) {
        this._workgroupName = value;
    }
    public resetWorkgroupName() {
        this._workgroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupNameInput() {
        return this._workgroupName;
    }
}
export interface BasicAuthenticationCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#password CcConnection#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#user_name CcConnection#user_name}
    */
    readonly userName?: string;
}
export class BasicAuthenticationCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthenticationCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._userName !== undefined) {
            hasAnyValues = true;
            internalValueResult.userName = this._userName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BasicAuthenticationCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._userName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._userName = value.userName;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // user_name - computed: true, optional: true, required: false
    private _userName?: string; 
    public get userName() {
        return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
        this._userName = value;
    }
    public resetUserName() {
        this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
        return this._userName;
    }
}
export interface AuthorizationCodePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#authorization_code CcConnection#authorization_code}
    */
    readonly authorizationCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#redirect_uri CcConnection#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class AuthorizationCodePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCode = this._authorizationCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCode = value.authorizationCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // authorization_code - computed: true, optional: true, required: false
    private _authorizationCode?: string; 
    public get authorizationCode() {
        return this.getStringAttribute('authorization_code');
    }
    public set authorizationCode(value: string) {
        this._authorizationCode = value;
    }
    public resetAuthorizationCode() {
        this._authorizationCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeInput() {
        return this._authorizationCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface OAuth2ClientApplicationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#aws_managed_client_application_reference CcConnection#aws_managed_client_application_reference}
    */
    readonly awsManagedClientApplicationReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#user_managed_client_application_client_id CcConnection#user_managed_client_application_client_id}
    */
    readonly userManagedClientApplicationClientId?: string;
}
export class OAuth2ClientApplicationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuth2ClientApplicationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsManagedClientApplicationReference !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsManagedClientApplicationReference = this._awsManagedClientApplicationReference;
        }
        if (this._userManagedClientApplicationClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userManagedClientApplicationClientId = this._userManagedClientApplicationClientId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2ClientApplicationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsManagedClientApplicationReference = undefined;
            this._userManagedClientApplicationClientId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsManagedClientApplicationReference = value.awsManagedClientApplicationReference;
            this._userManagedClientApplicationClientId = value.userManagedClientApplicationClientId;
        }
    }

    // aws_managed_client_application_reference - computed: true, optional: true, required: false
    private _awsManagedClientApplicationReference?: string; 
    public get awsManagedClientApplicationReference() {
        return this.getStringAttribute('aws_managed_client_application_reference');
    }
    public set awsManagedClientApplicationReference(value: string) {
        this._awsManagedClientApplicationReference = value;
    }
    public resetAwsManagedClientApplicationReference() {
        this._awsManagedClientApplicationReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsManagedClientApplicationReferenceInput() {
        return this._awsManagedClientApplicationReference;
    }

    // user_managed_client_application_client_id - computed: true, optional: true, required: false
    private _userManagedClientApplicationClientId?: string; 
    public get userManagedClientApplicationClientId() {
        return this.getStringAttribute('user_managed_client_application_client_id');
    }
    public set userManagedClientApplicationClientId(value: string) {
        this._userManagedClientApplicationClientId = value;
    }
    public resetUserManagedClientApplicationClientId() {
        this._userManagedClientApplicationClientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userManagedClientApplicationClientIdInput() {
        return this._userManagedClientApplicationClientId;
    }
}
export interface GlueOAuth2CredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#access_token CcConnection#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#jwt_token CcConnection#jwt_token}
    */
    readonly jwtToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#refresh_token CcConnection#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#user_managed_client_application_client_secret CcConnection#user_managed_client_application_client_secret}
    */
    readonly userManagedClientApplicationClientSecret?: string;
}
export class GlueOAuth2CredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlueOAuth2CredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._jwtToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtToken = this._jwtToken;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        if (this._userManagedClientApplicationClientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.userManagedClientApplicationClientSecret = this._userManagedClientApplicationClientSecret;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueOAuth2CredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._jwtToken = undefined;
            this._refreshToken = undefined;
            this._userManagedClientApplicationClientSecret = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._jwtToken = value.jwtToken;
            this._refreshToken = value.refreshToken;
            this._userManagedClientApplicationClientSecret = value.userManagedClientApplicationClientSecret;
        }
    }

    // access_token - computed: true, optional: true, required: false
    private _accessToken?: string; 
    public get accessToken() {
        return this.getStringAttribute('access_token');
    }
    public set accessToken(value: string) {
        this._accessToken = value;
    }
    public resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenInput() {
        return this._accessToken;
    }

    // jwt_token - computed: true, optional: true, required: false
    private _jwtToken?: string; 
    public get jwtToken() {
        return this.getStringAttribute('jwt_token');
    }
    public set jwtToken(value: string) {
        this._jwtToken = value;
    }
    public resetJwtToken() {
        this._jwtToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtTokenInput() {
        return this._jwtToken;
    }

    // refresh_token - computed: true, optional: true, required: false
    private _refreshToken?: string; 
    public get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
    public set refreshToken(value: string) {
        this._refreshToken = value;
    }
    public resetRefreshToken() {
        this._refreshToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTokenInput() {
        return this._refreshToken;
    }

    // user_managed_client_application_client_secret - computed: true, optional: true, required: false
    private _userManagedClientApplicationClientSecret?: string; 
    public get userManagedClientApplicationClientSecret() {
        return this.getStringAttribute('user_managed_client_application_client_secret');
    }
    public set userManagedClientApplicationClientSecret(value: string) {
        this._userManagedClientApplicationClientSecret = value;
    }
    public resetUserManagedClientApplicationClientSecret() {
        this._userManagedClientApplicationClientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userManagedClientApplicationClientSecretInput() {
        return this._userManagedClientApplicationClientSecret;
    }
}
export interface OAuth2PropertiesProperty {
    /**
    * Authorization Code Properties
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#authorization_code_properties CcConnection#authorization_code_properties}
    */
    readonly authorizationCodeProperties?: AuthorizationCodePropertiesProperty;
    /**
    * OAuth2 Client Application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#o_auth_2_client_application CcConnection#o_auth_2_client_application}
    */
    readonly oAuth2ClientApplication?: OAuth2ClientApplicationProperty;
    /**
    * Glue OAuth2 Credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#o_auth_2_credentials CcConnection#o_auth_2_credentials}
    */
    readonly oAuth2Credentials?: GlueOAuth2CredentialsProperty;
    /**
    * OAuth2 Grant Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#o_auth_2_grant_type CcConnection#o_auth_2_grant_type}
    */
    readonly oAuth2GrantType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#token_url CcConnection#token_url}
    */
    readonly tokenUrl?: string;
    /**
    * The token URL parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#token_url_parameters_map CcConnection#token_url_parameters_map}
    */
    readonly tokenUrlParametersMap?: { [key: string]: string };
}
export class OAuth2PropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuth2PropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationCodeProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeProperties = this._authorizationCodeProperties?.internalValue;
        }
        if (this._oAuth2ClientApplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2ClientApplication = this._oAuth2ClientApplication?.internalValue;
        }
        if (this._oAuth2Credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2Credentials = this._oAuth2Credentials?.internalValue;
        }
        if (this._oAuth2GrantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2GrantType = this._oAuth2GrantType;
        }
        if (this._tokenUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl;
        }
        if (this._tokenUrlParametersMap !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrlParametersMap = this._tokenUrlParametersMap;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2PropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCodeProperties.internalValue = undefined;
            this._oAuth2ClientApplication.internalValue = undefined;
            this._oAuth2Credentials.internalValue = undefined;
            this._oAuth2GrantType = undefined;
            this._tokenUrl = undefined;
            this._tokenUrlParametersMap = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCodeProperties.internalValue = value.authorizationCodeProperties;
            this._oAuth2ClientApplication.internalValue = value.oAuth2ClientApplication;
            this._oAuth2Credentials.internalValue = value.oAuth2Credentials;
            this._oAuth2GrantType = value.oAuth2GrantType;
            this._tokenUrl = value.tokenUrl;
            this._tokenUrlParametersMap = value.tokenUrlParametersMap;
        }
    }

    // authorization_code_properties - computed: true, optional: true, required: false
    private _authorizationCodeProperties = new AuthorizationCodePropertiesPropertyOutputReference(this, "authorization_code_properties");
    public get authorizationCodeProperties() {
        return this._authorizationCodeProperties;
    }
    public putAuthorizationCodeProperties(value: AuthorizationCodePropertiesProperty) {
        this._authorizationCodeProperties.internalValue = value;
    }
    public resetAuthorizationCodeProperties() {
        this._authorizationCodeProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodePropertiesInput() {
        return this._authorizationCodeProperties.internalValue;
    }

    // o_auth_2_client_application - computed: true, optional: true, required: false
    private _oAuth2ClientApplication = new OAuth2ClientApplicationPropertyOutputReference(this, "o_auth_2_client_application");
    public get oAuth2ClientApplication() {
        return this._oAuth2ClientApplication;
    }
    public putOAuth2ClientApplication(value: OAuth2ClientApplicationProperty) {
        this._oAuth2ClientApplication.internalValue = value;
    }
    public resetOAuth2ClientApplication() {
        this._oAuth2ClientApplication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2ClientApplicationInput() {
        return this._oAuth2ClientApplication.internalValue;
    }

    // o_auth_2_credentials - computed: true, optional: true, required: false
    private _oAuth2Credentials = new GlueOAuth2CredentialsPropertyOutputReference(this, "o_auth_2_credentials");
    public get oAuth2Credentials() {
        return this._oAuth2Credentials;
    }
    public putOAuth2Credentials(value: GlueOAuth2CredentialsProperty) {
        this._oAuth2Credentials.internalValue = value;
    }
    public resetOAuth2Credentials() {
        this._oAuth2Credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2CredentialsInput() {
        return this._oAuth2Credentials.internalValue;
    }

    // o_auth_2_grant_type - computed: true, optional: true, required: false
    private _oAuth2GrantType?: string; 
    public get oAuth2GrantType() {
        return this.getStringAttribute('o_auth_2_grant_type');
    }
    public set oAuth2GrantType(value: string) {
        this._oAuth2GrantType = value;
    }
    public resetOAuth2GrantType() {
        this._oAuth2GrantType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2GrantTypeInput() {
        return this._oAuth2GrantType;
    }

    // token_url - computed: true, optional: true, required: false
    private _tokenUrl?: string; 
    public get tokenUrl() {
        return this.getStringAttribute('token_url');
    }
    public set tokenUrl(value: string) {
        this._tokenUrl = value;
    }
    public resetTokenUrl() {
        this._tokenUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlInput() {
        return this._tokenUrl;
    }

    // token_url_parameters_map - computed: true, optional: true, required: false
    private _tokenUrlParametersMap?: { [key: string]: string }; 
    public get tokenUrlParametersMap() {
        return this.getStringMapAttribute('token_url_parameters_map');
    }
    public set tokenUrlParametersMap(value: { [key: string]: string }) {
        this._tokenUrlParametersMap = value;
    }
    public resetTokenUrlParametersMap() {
        this._tokenUrlParametersMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlParametersMapInput() {
        return this._tokenUrlParametersMap;
    }
}
export interface AuthenticationConfigurationInputProperty {
    /**
    * Authentication Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#authentication_type CcConnection#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Basic Authentication Credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#basic_authentication_credentials CcConnection#basic_authentication_credentials}
    */
    readonly basicAuthenticationCredentials?: BasicAuthenticationCredentialsProperty;
    /**
    * Credential Map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#custom_authentication_credentials CcConnection#custom_authentication_credentials}
    */
    readonly customAuthenticationCredentials?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#kms_key_arn CcConnection#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * OAuth2 Properties
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#o_auth_2_properties CcConnection#o_auth_2_properties}
    */
    readonly oAuth2Properties?: OAuth2PropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#secret_arn CcConnection#secret_arn}
    */
    readonly secretArn?: string;
}
export class AuthenticationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._basicAuthenticationCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthenticationCredentials = this._basicAuthenticationCredentials?.internalValue;
        }
        if (this._customAuthenticationCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAuthenticationCredentials = this._customAuthenticationCredentials;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._oAuth2Properties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2Properties = this._oAuth2Properties?.internalValue;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._basicAuthenticationCredentials.internalValue = undefined;
            this._customAuthenticationCredentials = undefined;
            this._kmsKeyArn = undefined;
            this._oAuth2Properties.internalValue = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._basicAuthenticationCredentials.internalValue = value.basicAuthenticationCredentials;
            this._customAuthenticationCredentials = value.customAuthenticationCredentials;
            this._kmsKeyArn = value.kmsKeyArn;
            this._oAuth2Properties.internalValue = value.oAuth2Properties;
            this._secretArn = value.secretArn;
        }
    }

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // basic_authentication_credentials - computed: true, optional: true, required: false
    private _basicAuthenticationCredentials = new BasicAuthenticationCredentialsPropertyOutputReference(this, "basic_authentication_credentials");
    public get basicAuthenticationCredentials() {
        return this._basicAuthenticationCredentials;
    }
    public putBasicAuthenticationCredentials(value: BasicAuthenticationCredentialsProperty) {
        this._basicAuthenticationCredentials.internalValue = value;
    }
    public resetBasicAuthenticationCredentials() {
        this._basicAuthenticationCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthenticationCredentialsInput() {
        return this._basicAuthenticationCredentials.internalValue;
    }

    // custom_authentication_credentials - computed: true, optional: true, required: false
    private _customAuthenticationCredentials?: { [key: string]: string }; 
    public get customAuthenticationCredentials() {
        return this.getStringMapAttribute('custom_authentication_credentials');
    }
    public set customAuthenticationCredentials(value: { [key: string]: string }) {
        this._customAuthenticationCredentials = value;
    }
    public resetCustomAuthenticationCredentials() {
        this._customAuthenticationCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAuthenticationCredentialsInput() {
        return this._customAuthenticationCredentials;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // o_auth_2_properties - computed: true, optional: true, required: false
    private _oAuth2Properties = new OAuth2PropertiesPropertyOutputReference(this, "o_auth_2_properties");
    public get oAuth2Properties() {
        return this._oAuth2Properties;
    }
    public putOAuth2Properties(value: OAuth2PropertiesProperty) {
        this._oAuth2Properties.internalValue = value;
    }
    public resetOAuth2Properties() {
        this._oAuth2Properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2PropertiesInput() {
        return this._oAuth2Properties.internalValue;
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
export interface PhysicalConnectionRequirementsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#availability_zone CcConnection#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#security_group_id_list CcConnection#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#subnet_id CcConnection#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#subnet_id_list CcConnection#subnet_id_list}
    */
    readonly subnetIdList?: string[];
}
export class PhysicalConnectionRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PhysicalConnectionRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._securityGroupIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIdList = this._securityGroupIdList;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        if (this._subnetIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIdList = this._subnetIdList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhysicalConnectionRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._securityGroupIdList = undefined;
            this._subnetId = undefined;
            this._subnetIdList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._securityGroupIdList = value.securityGroupIdList;
            this._subnetId = value.subnetId;
            this._subnetIdList = value.subnetIdList;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // security_group_id_list - computed: true, optional: true, required: false
    private _securityGroupIdList?: string[]; 
    public get securityGroupIdList() {
        return this.getListAttribute('security_group_id_list');
    }
    public set securityGroupIdList(value: string[]) {
        this._securityGroupIdList = value;
    }
    public resetSecurityGroupIdList() {
        this._securityGroupIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdListInput() {
        return this._securityGroupIdList;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // subnet_id_list - computed: true, optional: true, required: false
    private _subnetIdList?: string[]; 
    public get subnetIdList() {
        return this.getListAttribute('subnet_id_list');
    }
    public set subnetIdList(value: string[]) {
        this._subnetIdList = value;
    }
    public resetSubnetIdList() {
        this._subnetIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdListInput() {
        return this._subnetIdList;
    }
}
export interface GlueConnectionInputProperty {
    /**
    * Property Map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#athena_properties CcConnection#athena_properties}
    */
    readonly athenaProperties?: { [key: string]: string };
    /**
    * Authentication Configuration Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#authentication_configuration CcConnection#authentication_configuration}
    */
    readonly authenticationConfiguration?: AuthenticationConfigurationInputProperty;
    /**
    * Connection Properties
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#connection_properties CcConnection#connection_properties}
    */
    readonly connectionProperties?: { [key: string]: string };
    /**
    * Glue Connection Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#connection_type CcConnection#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#description CcConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#match_criteria CcConnection#match_criteria}
    */
    readonly matchCriteria?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#name CcConnection#name}
    */
    readonly name?: string;
    /**
    * Physical Connection Requirements
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#physical_connection_requirements CcConnection#physical_connection_requirements}
    */
    readonly physicalConnectionRequirements?: PhysicalConnectionRequirementsProperty;
    /**
    * Property Map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#python_properties CcConnection#python_properties}
    */
    readonly pythonProperties?: { [key: string]: string };
    /**
    * Property Map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#spark_properties CcConnection#spark_properties}
    */
    readonly sparkProperties?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#validate_credentials CcConnection#validate_credentials}
    */
    readonly validateCredentials?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#validate_for_compute_environments CcConnection#validate_for_compute_environments}
    */
    readonly validateForComputeEnvironments?: string[];
}
export class GlueConnectionInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlueConnectionInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._athenaProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaProperties = this._athenaProperties;
        }
        if (this._authenticationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
        }
        if (this._connectionProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionProperties = this._connectionProperties;
        }
        if (this._connectionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionType = this._connectionType;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._matchCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchCriteria = this._matchCriteria;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._physicalConnectionRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.physicalConnectionRequirements = this._physicalConnectionRequirements?.internalValue;
        }
        if (this._pythonProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.pythonProperties = this._pythonProperties;
        }
        if (this._sparkProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkProperties = this._sparkProperties;
        }
        if (this._validateCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.validateCredentials = this._validateCredentials;
        }
        if (this._validateForComputeEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.validateForComputeEnvironments = this._validateForComputeEnvironments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueConnectionInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._athenaProperties = undefined;
            this._authenticationConfiguration.internalValue = undefined;
            this._connectionProperties = undefined;
            this._connectionType = undefined;
            this._description = undefined;
            this._matchCriteria = undefined;
            this._name = undefined;
            this._physicalConnectionRequirements.internalValue = undefined;
            this._pythonProperties = undefined;
            this._sparkProperties = undefined;
            this._validateCredentials = undefined;
            this._validateForComputeEnvironments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._athenaProperties = value.athenaProperties;
            this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
            this._connectionProperties = value.connectionProperties;
            this._connectionType = value.connectionType;
            this._description = value.description;
            this._matchCriteria = value.matchCriteria;
            this._name = value.name;
            this._physicalConnectionRequirements.internalValue = value.physicalConnectionRequirements;
            this._pythonProperties = value.pythonProperties;
            this._sparkProperties = value.sparkProperties;
            this._validateCredentials = value.validateCredentials;
            this._validateForComputeEnvironments = value.validateForComputeEnvironments;
        }
    }

    // athena_properties - computed: true, optional: true, required: false
    private _athenaProperties?: { [key: string]: string }; 
    public get athenaProperties() {
        return this.getStringMapAttribute('athena_properties');
    }
    public set athenaProperties(value: { [key: string]: string }) {
        this._athenaProperties = value;
    }
    public resetAthenaProperties() {
        this._athenaProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaPropertiesInput() {
        return this._athenaProperties;
    }

    // authentication_configuration - computed: true, optional: true, required: false
    private _authenticationConfiguration = new AuthenticationConfigurationInputPropertyOutputReference(this, "authentication_configuration");
    public get authenticationConfiguration() {
        return this._authenticationConfiguration;
    }
    public putAuthenticationConfiguration(value: AuthenticationConfigurationInputProperty) {
        this._authenticationConfiguration.internalValue = value;
    }
    public resetAuthenticationConfiguration() {
        this._authenticationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigurationInput() {
        return this._authenticationConfiguration.internalValue;
    }

    // connection_properties - computed: true, optional: true, required: false
    private _connectionProperties?: { [key: string]: string }; 
    public get connectionProperties() {
        return this.getStringMapAttribute('connection_properties');
    }
    public set connectionProperties(value: { [key: string]: string }) {
        this._connectionProperties = value;
    }
    public resetConnectionProperties() {
        this._connectionProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPropertiesInput() {
        return this._connectionProperties;
    }

    // connection_type - computed: true, optional: true, required: false
    private _connectionType?: string; 
    public get connectionType() {
        return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string) {
        this._connectionType = value;
    }
    public resetConnectionType() {
        this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
        return this._connectionType;
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

    // match_criteria - computed: true, optional: true, required: false
    private _matchCriteria?: string; 
    public get matchCriteria() {
        return this.getStringAttribute('match_criteria');
    }
    public set matchCriteria(value: string) {
        this._matchCriteria = value;
    }
    public resetMatchCriteria() {
        this._matchCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchCriteriaInput() {
        return this._matchCriteria;
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

    // physical_connection_requirements - computed: true, optional: true, required: false
    private _physicalConnectionRequirements = new PhysicalConnectionRequirementsPropertyOutputReference(this, "physical_connection_requirements");
    public get physicalConnectionRequirements() {
        return this._physicalConnectionRequirements;
    }
    public putPhysicalConnectionRequirements(value: PhysicalConnectionRequirementsProperty) {
        this._physicalConnectionRequirements.internalValue = value;
    }
    public resetPhysicalConnectionRequirements() {
        this._physicalConnectionRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get physicalConnectionRequirementsInput() {
        return this._physicalConnectionRequirements.internalValue;
    }

    // python_properties - computed: true, optional: true, required: false
    private _pythonProperties?: { [key: string]: string }; 
    public get pythonProperties() {
        return this.getStringMapAttribute('python_properties');
    }
    public set pythonProperties(value: { [key: string]: string }) {
        this._pythonProperties = value;
    }
    public resetPythonProperties() {
        this._pythonProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonPropertiesInput() {
        return this._pythonProperties;
    }

    // spark_properties - computed: true, optional: true, required: false
    private _sparkProperties?: { [key: string]: string }; 
    public get sparkProperties() {
        return this.getStringMapAttribute('spark_properties');
    }
    public set sparkProperties(value: { [key: string]: string }) {
        this._sparkProperties = value;
    }
    public resetSparkProperties() {
        this._sparkProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkPropertiesInput() {
        return this._sparkProperties;
    }

    // validate_credentials - computed: true, optional: true, required: false
    private _validateCredentials?: boolean | cdktn.IResolvable; 
    public get validateCredentials() {
        return this.getBooleanAttribute('validate_credentials');
    }
    public set validateCredentials(value: boolean | cdktn.IResolvable) {
        this._validateCredentials = value;
    }
    public resetValidateCredentials() {
        this._validateCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateCredentialsInput() {
        return this._validateCredentials;
    }

    // validate_for_compute_environments - computed: true, optional: true, required: false
    private _validateForComputeEnvironments?: string[]; 
    public get validateForComputeEnvironments() {
        return this.getListAttribute('validate_for_compute_environments');
    }
    public set validateForComputeEnvironments(value: string[]) {
        this._validateForComputeEnvironments = value;
    }
    public resetValidateForComputeEnvironments() {
        this._validateForComputeEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateForComputeEnvironmentsInput() {
        return this._validateForComputeEnvironments;
    }
}
export interface GluePropertiesInputProperty {
    /**
    * Glue Connection Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#glue_connection_input CcConnection#glue_connection_input}
    */
    readonly glueConnectionInput?: GlueConnectionInputProperty;
}
export class GluePropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GluePropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueConnectionInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueConnectionInput = this._glueConnectionInput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GluePropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueConnectionInput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueConnectionInput.internalValue = value.glueConnectionInput;
        }
    }

    // glue_connection_input - computed: true, optional: true, required: false
    private _glueConnectionInput = new GlueConnectionInputPropertyOutputReference(this, "glue_connection_input");
    public get glueConnectionInput() {
        return this._glueConnectionInput;
    }
    public putGlueConnectionInput(value: GlueConnectionInputProperty) {
        this._glueConnectionInput.internalValue = value;
    }
    public resetGlueConnectionInput() {
        this._glueConnectionInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueConnectionInputInput() {
        return this._glueConnectionInput.internalValue;
    }
}
export interface HyperPodPropertiesInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#cluster_name CcConnection#cluster_name}
    */
    readonly clusterName?: string;
}
export class HyperPodPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HyperPodPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterName = this._clusterName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HyperPodPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterName = value.clusterName;
        }
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }
}
export interface IamPropertiesInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#glue_lineage_sync_enabled CcConnection#glue_lineage_sync_enabled}
    */
    readonly glueLineageSyncEnabled?: boolean | cdktn.IResolvable;
}
export class IamPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueLineageSyncEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueLineageSyncEnabled = this._glueLineageSyncEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueLineageSyncEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueLineageSyncEnabled = value.glueLineageSyncEnabled;
        }
    }

    // glue_lineage_sync_enabled - computed: true, optional: true, required: false
    private _glueLineageSyncEnabled?: boolean | cdktn.IResolvable; 
    public get glueLineageSyncEnabled() {
        return this.getBooleanAttribute('glue_lineage_sync_enabled');
    }
    public set glueLineageSyncEnabled(value: boolean | cdktn.IResolvable) {
        this._glueLineageSyncEnabled = value;
    }
    public resetGlueLineageSyncEnabled() {
        this._glueLineageSyncEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueLineageSyncEnabledInput() {
        return this._glueLineageSyncEnabled;
    }
}
export interface LakehousePropertiesInputProperty {
    /**
    * Specifies whether Glue lineage sync is enabled for the lakehouse connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#glue_lineage_sync_enabled CcConnection#glue_lineage_sync_enabled}
    */
    readonly glueLineageSyncEnabled?: boolean | cdktn.IResolvable;
}
export class LakehousePropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LakehousePropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueLineageSyncEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueLineageSyncEnabled = this._glueLineageSyncEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LakehousePropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueLineageSyncEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueLineageSyncEnabled = value.glueLineageSyncEnabled;
        }
    }

    // glue_lineage_sync_enabled - computed: true, optional: true, required: false
    private _glueLineageSyncEnabled?: boolean | cdktn.IResolvable; 
    public get glueLineageSyncEnabled() {
        return this.getBooleanAttribute('glue_lineage_sync_enabled');
    }
    public set glueLineageSyncEnabled(value: boolean | cdktn.IResolvable) {
        this._glueLineageSyncEnabled = value;
    }
    public resetGlueLineageSyncEnabled() {
        this._glueLineageSyncEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueLineageSyncEnabledInput() {
        return this._glueLineageSyncEnabled;
    }
}
export interface MlflowPropertiesInputProperty {
    /**
    * The ARN of the MLflow tracking server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#tracking_server_arn CcConnection#tracking_server_arn}
    */
    readonly trackingServerArn?: string;
}
export class MlflowPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MlflowPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._trackingServerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trackingServerArn = this._trackingServerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MlflowPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._trackingServerArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._trackingServerArn = value.trackingServerArn;
        }
    }

    // tracking_server_arn - computed: true, optional: true, required: false
    private _trackingServerArn?: string; 
    public get trackingServerArn() {
        return this.getStringAttribute('tracking_server_arn');
    }
    public set trackingServerArn(value: string) {
        this._trackingServerArn = value;
    }
    public resetTrackingServerArn() {
        this._trackingServerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackingServerArnInput() {
        return this._trackingServerArn;
    }
}
export interface UsernamePasswordProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#password CcConnection#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#username CcConnection#username}
    */
    readonly username?: string;
}
export class UsernamePasswordPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UsernamePasswordProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UsernamePasswordProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface RedshiftCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#secret_arn CcConnection#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The username and password to be used for authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#username_password CcConnection#username_password}
    */
    readonly usernamePassword?: UsernamePasswordProperty;
}
export class RedshiftCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._usernamePassword?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretArn = undefined;
            this._usernamePassword.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretArn = value.secretArn;
            this._usernamePassword.internalValue = value.usernamePassword;
        }
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

    // username_password - computed: true, optional: true, required: false
    private _usernamePassword = new UsernamePasswordPropertyOutputReference(this, "username_password");
    public get usernamePassword() {
        return this._usernamePassword;
    }
    public putUsernamePassword(value: UsernamePasswordProperty) {
        this._usernamePassword.internalValue = value;
    }
    public resetUsernamePassword() {
        this._usernamePassword.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernamePasswordInput() {
        return this._usernamePassword.internalValue;
    }
}
export interface LineageSyncScheduleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#schedule CcConnection#schedule}
    */
    readonly schedule?: string;
}
export class LineageSyncSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LineageSyncScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._schedule !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LineageSyncScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._schedule = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._schedule = value.schedule;
        }
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule?: string; 
    public get schedule() {
        return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
        this._schedule = value;
    }
    public resetSchedule() {
        this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule;
    }
}
export interface RedshiftLineageSyncConfigurationInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#enabled CcConnection#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Lineage Sync Schedule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#schedule CcConnection#schedule}
    */
    readonly schedule?: LineageSyncScheduleProperty;
}
export class RedshiftLineageSyncConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftLineageSyncConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._schedule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftLineageSyncConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._schedule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._schedule.internalValue = value.schedule;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule = new LineageSyncSchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: LineageSyncScheduleProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }
}
export interface RedshiftStoragePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#cluster_name CcConnection#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#workgroup_name CcConnection#workgroup_name}
    */
    readonly workgroupName?: string;
}
export class RedshiftStoragePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftStoragePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterName = this._clusterName;
        }
        if (this._workgroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.workgroupName = this._workgroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftStoragePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterName = undefined;
            this._workgroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterName = value.clusterName;
            this._workgroupName = value.workgroupName;
        }
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // workgroup_name - computed: true, optional: true, required: false
    private _workgroupName?: string; 
    public get workgroupName() {
        return this.getStringAttribute('workgroup_name');
    }
    public set workgroupName(value: string) {
        this._workgroupName = value;
    }
    public resetWorkgroupName() {
        this._workgroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupNameInput() {
        return this._workgroupName;
    }
}
export interface RedshiftPropertiesInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#credentials CcConnection#credentials}
    */
    readonly credentials?: RedshiftCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#database_name CcConnection#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#host CcConnection#host}
    */
    readonly host?: string;
    /**
    * Redshift Lineage Sync Configuration Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#lineage_sync CcConnection#lineage_sync}
    */
    readonly lineageSync?: RedshiftLineageSyncConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#port CcConnection#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#storage CcConnection#storage}
    */
    readonly storage?: RedshiftStoragePropertiesProperty;
}
export class RedshiftPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials?.internalValue;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._lineageSync?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lineageSync = this._lineageSync?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._storage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storage = this._storage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentials.internalValue = undefined;
            this._databaseName = undefined;
            this._host = undefined;
            this._lineageSync.internalValue = undefined;
            this._port = undefined;
            this._storage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentials.internalValue = value.credentials;
            this._databaseName = value.databaseName;
            this._host = value.host;
            this._lineageSync.internalValue = value.lineageSync;
            this._port = value.port;
            this._storage.internalValue = value.storage;
        }
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new RedshiftCredentialsPropertyOutputReference(this, "credentials");
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: RedshiftCredentialsProperty) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // lineage_sync - computed: true, optional: true, required: false
    private _lineageSync = new RedshiftLineageSyncConfigurationInputPropertyOutputReference(this, "lineage_sync");
    public get lineageSync() {
        return this._lineageSync;
    }
    public putLineageSync(value: RedshiftLineageSyncConfigurationInputProperty) {
        this._lineageSync.internalValue = value;
    }
    public resetLineageSync() {
        this._lineageSync.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lineageSyncInput() {
        return this._lineageSync.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // storage - computed: true, optional: true, required: false
    private _storage = new RedshiftStoragePropertiesPropertyOutputReference(this, "storage");
    public get storage() {
        return this._storage;
    }
    public putStorage(value: RedshiftStoragePropertiesProperty) {
        this._storage.internalValue = value;
    }
    public resetStorage() {
        this._storage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageInput() {
        return this._storage.internalValue;
    }
}
export interface S3PropertiesInputProperty {
    /**
    * Specifies whether to register the S3 Access Grant location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#register_s3_access_grant_location CcConnection#register_s3_access_grant_location}
    */
    readonly registerS3AccessGrantLocation?: boolean | cdktn.IResolvable;
    /**
    * The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#s3_access_grant_location_id CcConnection#s3_access_grant_location_id}
    */
    readonly s3AccessGrantLocationId?: string;
    /**
    * The Amazon S3 URI that's part of the Amazon S3 properties of a connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#s3_uri CcConnection#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3PropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3PropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._registerS3AccessGrantLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.registerS3AccessGrantLocation = this._registerS3AccessGrantLocation;
        }
        if (this._s3AccessGrantLocationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3AccessGrantLocationId = this._s3AccessGrantLocationId;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3PropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._registerS3AccessGrantLocation = undefined;
            this._s3AccessGrantLocationId = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._registerS3AccessGrantLocation = value.registerS3AccessGrantLocation;
            this._s3AccessGrantLocationId = value.s3AccessGrantLocationId;
            this._s3Uri = value.s3Uri;
        }
    }

    // register_s3_access_grant_location - computed: true, optional: true, required: false
    private _registerS3AccessGrantLocation?: boolean | cdktn.IResolvable; 
    public get registerS3AccessGrantLocation() {
        return this.getBooleanAttribute('register_s3_access_grant_location');
    }
    public set registerS3AccessGrantLocation(value: boolean | cdktn.IResolvable) {
        this._registerS3AccessGrantLocation = value;
    }
    public resetRegisterS3AccessGrantLocation() {
        this._registerS3AccessGrantLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registerS3AccessGrantLocationInput() {
        return this._registerS3AccessGrantLocation;
    }

    // s3_access_grant_location_id - computed: true, optional: true, required: false
    private _s3AccessGrantLocationId?: string; 
    public get s3AccessGrantLocationId() {
        return this.getStringAttribute('s3_access_grant_location_id');
    }
    public set s3AccessGrantLocationId(value: string) {
        this._s3AccessGrantLocationId = value;
    }
    public resetS3AccessGrantLocationId() {
        this._s3AccessGrantLocationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AccessGrantLocationIdInput() {
        return this._s3AccessGrantLocationId;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface SparkEmrPropertiesInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#compute_arn CcConnection#compute_arn}
    */
    readonly computeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#instance_profile_arn CcConnection#instance_profile_arn}
    */
    readonly instanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#java_virtual_env CcConnection#java_virtual_env}
    */
    readonly javaVirtualEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#log_uri CcConnection#log_uri}
    */
    readonly logUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#managed_endpoint_arn CcConnection#managed_endpoint_arn}
    */
    readonly managedEndpointArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#python_virtual_env CcConnection#python_virtual_env}
    */
    readonly pythonVirtualEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#runtime_role CcConnection#runtime_role}
    */
    readonly runtimeRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#trusted_certificates_s3_uri CcConnection#trusted_certificates_s3_uri}
    */
    readonly trustedCertificatesS3Uri?: string;
}
export class SparkEmrPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SparkEmrPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeArn = this._computeArn;
        }
        if (this._instanceProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceProfileArn = this._instanceProfileArn;
        }
        if (this._javaVirtualEnv !== undefined) {
            hasAnyValues = true;
            internalValueResult.javaVirtualEnv = this._javaVirtualEnv;
        }
        if (this._logUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.logUri = this._logUri;
        }
        if (this._managedEndpointArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedEndpointArn = this._managedEndpointArn;
        }
        if (this._pythonVirtualEnv !== undefined) {
            hasAnyValues = true;
            internalValueResult.pythonVirtualEnv = this._pythonVirtualEnv;
        }
        if (this._runtimeRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeRole = this._runtimeRole;
        }
        if (this._trustedCertificatesS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.trustedCertificatesS3Uri = this._trustedCertificatesS3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SparkEmrPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeArn = undefined;
            this._instanceProfileArn = undefined;
            this._javaVirtualEnv = undefined;
            this._logUri = undefined;
            this._managedEndpointArn = undefined;
            this._pythonVirtualEnv = undefined;
            this._runtimeRole = undefined;
            this._trustedCertificatesS3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeArn = value.computeArn;
            this._instanceProfileArn = value.instanceProfileArn;
            this._javaVirtualEnv = value.javaVirtualEnv;
            this._logUri = value.logUri;
            this._managedEndpointArn = value.managedEndpointArn;
            this._pythonVirtualEnv = value.pythonVirtualEnv;
            this._runtimeRole = value.runtimeRole;
            this._trustedCertificatesS3Uri = value.trustedCertificatesS3Uri;
        }
    }

    // compute_arn - computed: true, optional: true, required: false
    private _computeArn?: string; 
    public get computeArn() {
        return this.getStringAttribute('compute_arn');
    }
    public set computeArn(value: string) {
        this._computeArn = value;
    }
    public resetComputeArn() {
        this._computeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeArnInput() {
        return this._computeArn;
    }

    // instance_profile_arn - computed: true, optional: true, required: false
    private _instanceProfileArn?: string; 
    public get instanceProfileArn() {
        return this.getStringAttribute('instance_profile_arn');
    }
    public set instanceProfileArn(value: string) {
        this._instanceProfileArn = value;
    }
    public resetInstanceProfileArn() {
        this._instanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileArnInput() {
        return this._instanceProfileArn;
    }

    // java_virtual_env - computed: true, optional: true, required: false
    private _javaVirtualEnv?: string; 
    public get javaVirtualEnv() {
        return this.getStringAttribute('java_virtual_env');
    }
    public set javaVirtualEnv(value: string) {
        this._javaVirtualEnv = value;
    }
    public resetJavaVirtualEnv() {
        this._javaVirtualEnv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get javaVirtualEnvInput() {
        return this._javaVirtualEnv;
    }

    // log_uri - computed: true, optional: true, required: false
    private _logUri?: string; 
    public get logUri() {
        return this.getStringAttribute('log_uri');
    }
    public set logUri(value: string) {
        this._logUri = value;
    }
    public resetLogUri() {
        this._logUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logUriInput() {
        return this._logUri;
    }

    // managed_endpoint_arn - computed: true, optional: true, required: false
    private _managedEndpointArn?: string; 
    public get managedEndpointArn() {
        return this.getStringAttribute('managed_endpoint_arn');
    }
    public set managedEndpointArn(value: string) {
        this._managedEndpointArn = value;
    }
    public resetManagedEndpointArn() {
        this._managedEndpointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedEndpointArnInput() {
        return this._managedEndpointArn;
    }

    // python_virtual_env - computed: true, optional: true, required: false
    private _pythonVirtualEnv?: string; 
    public get pythonVirtualEnv() {
        return this.getStringAttribute('python_virtual_env');
    }
    public set pythonVirtualEnv(value: string) {
        this._pythonVirtualEnv = value;
    }
    public resetPythonVirtualEnv() {
        this._pythonVirtualEnv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonVirtualEnvInput() {
        return this._pythonVirtualEnv;
    }

    // runtime_role - computed: true, optional: true, required: false
    private _runtimeRole?: string; 
    public get runtimeRole() {
        return this.getStringAttribute('runtime_role');
    }
    public set runtimeRole(value: string) {
        this._runtimeRole = value;
    }
    public resetRuntimeRole() {
        this._runtimeRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeRoleInput() {
        return this._runtimeRole;
    }

    // trusted_certificates_s3_uri - computed: true, optional: true, required: false
    private _trustedCertificatesS3Uri?: string; 
    public get trustedCertificatesS3Uri() {
        return this.getStringAttribute('trusted_certificates_s3_uri');
    }
    public set trustedCertificatesS3Uri(value: string) {
        this._trustedCertificatesS3Uri = value;
    }
    public resetTrustedCertificatesS3Uri() {
        this._trustedCertificatesS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedCertificatesS3UriInput() {
        return this._trustedCertificatesS3Uri;
    }
}
export interface SparkGlueArgsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#connection CcConnection#connection}
    */
    readonly connection?: string;
}
export class SparkGlueArgsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SparkGlueArgsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connection !== undefined) {
            hasAnyValues = true;
            internalValueResult.connection = this._connection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SparkGlueArgsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connection = value.connection;
        }
    }

    // connection - computed: true, optional: true, required: false
    private _connection?: string; 
    public get connection() {
        return this.getStringAttribute('connection');
    }
    public set connection(value: string) {
        this._connection = value;
    }
    public resetConnection() {
        this._connection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionInput() {
        return this._connection;
    }
}
export interface SparkGluePropertiesInputProperty {
    /**
    * Spark Glue Args.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#additional_args CcConnection#additional_args}
    */
    readonly additionalArgs?: SparkGlueArgsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#glue_connection_name CcConnection#glue_connection_name}
    */
    readonly glueConnectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#glue_version CcConnection#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#idle_timeout CcConnection#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#java_virtual_env CcConnection#java_virtual_env}
    */
    readonly javaVirtualEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#number_of_workers CcConnection#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#python_virtual_env CcConnection#python_virtual_env}
    */
    readonly pythonVirtualEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#worker_type CcConnection#worker_type}
    */
    readonly workerType?: string;
}
export class SparkGluePropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SparkGluePropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalArgs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalArgs = this._additionalArgs?.internalValue;
        }
        if (this._glueConnectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueConnectionName = this._glueConnectionName;
        }
        if (this._glueVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueVersion = this._glueVersion;
        }
        if (this._idleTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleTimeout = this._idleTimeout;
        }
        if (this._javaVirtualEnv !== undefined) {
            hasAnyValues = true;
            internalValueResult.javaVirtualEnv = this._javaVirtualEnv;
        }
        if (this._numberOfWorkers !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfWorkers = this._numberOfWorkers;
        }
        if (this._pythonVirtualEnv !== undefined) {
            hasAnyValues = true;
            internalValueResult.pythonVirtualEnv = this._pythonVirtualEnv;
        }
        if (this._workerType !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerType = this._workerType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SparkGluePropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalArgs.internalValue = undefined;
            this._glueConnectionName = undefined;
            this._glueVersion = undefined;
            this._idleTimeout = undefined;
            this._javaVirtualEnv = undefined;
            this._numberOfWorkers = undefined;
            this._pythonVirtualEnv = undefined;
            this._workerType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalArgs.internalValue = value.additionalArgs;
            this._glueConnectionName = value.glueConnectionName;
            this._glueVersion = value.glueVersion;
            this._idleTimeout = value.idleTimeout;
            this._javaVirtualEnv = value.javaVirtualEnv;
            this._numberOfWorkers = value.numberOfWorkers;
            this._pythonVirtualEnv = value.pythonVirtualEnv;
            this._workerType = value.workerType;
        }
    }

    // additional_args - computed: true, optional: true, required: false
    private _additionalArgs = new SparkGlueArgsPropertyOutputReference(this, "additional_args");
    public get additionalArgs() {
        return this._additionalArgs;
    }
    public putAdditionalArgs(value: SparkGlueArgsProperty) {
        this._additionalArgs.internalValue = value;
    }
    public resetAdditionalArgs() {
        this._additionalArgs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalArgsInput() {
        return this._additionalArgs.internalValue;
    }

    // glue_connection_name - computed: true, optional: true, required: false
    private _glueConnectionName?: string; 
    public get glueConnectionName() {
        return this.getStringAttribute('glue_connection_name');
    }
    public set glueConnectionName(value: string) {
        this._glueConnectionName = value;
    }
    public resetGlueConnectionName() {
        this._glueConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueConnectionNameInput() {
        return this._glueConnectionName;
    }

    // glue_version - computed: true, optional: true, required: false
    private _glueVersion?: string; 
    public get glueVersion() {
        return this.getStringAttribute('glue_version');
    }
    public set glueVersion(value: string) {
        this._glueVersion = value;
    }
    public resetGlueVersion() {
        this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueVersionInput() {
        return this._glueVersion;
    }

    // idle_timeout - computed: true, optional: true, required: false
    private _idleTimeout?: number; 
    public get idleTimeout() {
        return this.getNumberAttribute('idle_timeout');
    }
    public set idleTimeout(value: number) {
        this._idleTimeout = value;
    }
    public resetIdleTimeout() {
        this._idleTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleTimeoutInput() {
        return this._idleTimeout;
    }

    // java_virtual_env - computed: true, optional: true, required: false
    private _javaVirtualEnv?: string; 
    public get javaVirtualEnv() {
        return this.getStringAttribute('java_virtual_env');
    }
    public set javaVirtualEnv(value: string) {
        this._javaVirtualEnv = value;
    }
    public resetJavaVirtualEnv() {
        this._javaVirtualEnv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get javaVirtualEnvInput() {
        return this._javaVirtualEnv;
    }

    // number_of_workers - computed: true, optional: true, required: false
    private _numberOfWorkers?: number; 
    public get numberOfWorkers() {
        return this.getNumberAttribute('number_of_workers');
    }
    public set numberOfWorkers(value: number) {
        this._numberOfWorkers = value;
    }
    public resetNumberOfWorkers() {
        this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfWorkersInput() {
        return this._numberOfWorkers;
    }

    // python_virtual_env - computed: true, optional: true, required: false
    private _pythonVirtualEnv?: string; 
    public get pythonVirtualEnv() {
        return this.getStringAttribute('python_virtual_env');
    }
    public set pythonVirtualEnv(value: string) {
        this._pythonVirtualEnv = value;
    }
    public resetPythonVirtualEnv() {
        this._pythonVirtualEnv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonVirtualEnvInput() {
        return this._pythonVirtualEnv;
    }

    // worker_type - computed: true, optional: true, required: false
    private _workerType?: string; 
    public get workerType() {
        return this.getStringAttribute('worker_type');
    }
    public set workerType(value: string) {
        this._workerType = value;
    }
    public resetWorkerType() {
        this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerTypeInput() {
        return this._workerType;
    }
}
export interface WorkflowsMwaaPropertiesInputProperty {
    /**
    * The name of the MWAA environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#mwaa_environment_name CcConnection#mwaa_environment_name}
    */
    readonly mwaaEnvironmentName?: string;
}
export class WorkflowsMwaaPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkflowsMwaaPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mwaaEnvironmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.mwaaEnvironmentName = this._mwaaEnvironmentName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowsMwaaPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mwaaEnvironmentName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mwaaEnvironmentName = value.mwaaEnvironmentName;
        }
    }

    // mwaa_environment_name - computed: true, optional: true, required: false
    private _mwaaEnvironmentName?: string; 
    public get mwaaEnvironmentName() {
        return this.getStringAttribute('mwaa_environment_name');
    }
    public set mwaaEnvironmentName(value: string) {
        this._mwaaEnvironmentName = value;
    }
    public resetMwaaEnvironmentName() {
        this._mwaaEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mwaaEnvironmentNameInput() {
        return this._mwaaEnvironmentName;
    }
}
export interface ConnectionPropertiesInputProperty {
    /**
    * Amazon Q properties of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#amazon_q_properties CcConnection#amazon_q_properties}
    */
    readonly amazonQProperties?: AmazonQPropertiesInputProperty;
    /**
    * Athena Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#athena_properties CcConnection#athena_properties}
    */
    readonly athenaProperties?: AthenaPropertiesInputProperty;
    /**
    * Glue Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#glue_properties CcConnection#glue_properties}
    */
    readonly glueProperties?: GluePropertiesInputProperty;
    /**
    * HyperPod Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#hyper_pod_properties CcConnection#hyper_pod_properties}
    */
    readonly hyperPodProperties?: HyperPodPropertiesInputProperty;
    /**
    * IAM Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#iam_properties CcConnection#iam_properties}
    */
    readonly iamProperties?: IamPropertiesInputProperty;
    /**
    * Lakehouse Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#lakehouse_properties CcConnection#lakehouse_properties}
    */
    readonly lakehouseProperties?: LakehousePropertiesInputProperty;
    /**
    * MLflow Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#mlflow_properties CcConnection#mlflow_properties}
    */
    readonly mlflowProperties?: MlflowPropertiesInputProperty;
    /**
    * Redshift Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#redshift_properties CcConnection#redshift_properties}
    */
    readonly redshiftProperties?: RedshiftPropertiesInputProperty;
    /**
    * S3 Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#s3_properties CcConnection#s3_properties}
    */
    readonly s3Properties?: S3PropertiesInputProperty;
    /**
    * Spark EMR Properties Input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#spark_emr_properties CcConnection#spark_emr_properties}
    */
    readonly sparkEmrProperties?: SparkEmrPropertiesInputProperty;
    /**
    * Spark Glue Properties Input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#spark_glue_properties CcConnection#spark_glue_properties}
    */
    readonly sparkGlueProperties?: SparkGluePropertiesInputProperty;
    /**
    * Workflows MWAA Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#workflows_mwaa_properties CcConnection#workflows_mwaa_properties}
    */
    readonly workflowsMwaaProperties?: WorkflowsMwaaPropertiesInputProperty;
    /**
    * Workflows Serverless Properties Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_connection#workflows_serverless_properties CcConnection#workflows_serverless_properties}
    */
    readonly workflowsServerlessProperties?: string;
}
export class ConnectionPropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionPropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonQProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonQProperties = this._amazonQProperties?.internalValue;
        }
        if (this._athenaProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaProperties = this._athenaProperties?.internalValue;
        }
        if (this._glueProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueProperties = this._glueProperties?.internalValue;
        }
        if (this._hyperPodProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hyperPodProperties = this._hyperPodProperties?.internalValue;
        }
        if (this._iamProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamProperties = this._iamProperties?.internalValue;
        }
        if (this._lakehouseProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lakehouseProperties = this._lakehouseProperties?.internalValue;
        }
        if (this._mlflowProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlflowProperties = this._mlflowProperties?.internalValue;
        }
        if (this._redshiftProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftProperties = this._redshiftProperties?.internalValue;
        }
        if (this._s3Properties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Properties = this._s3Properties?.internalValue;
        }
        if (this._sparkEmrProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkEmrProperties = this._sparkEmrProperties?.internalValue;
        }
        if (this._sparkGlueProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkGlueProperties = this._sparkGlueProperties?.internalValue;
        }
        if (this._workflowsMwaaProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowsMwaaProperties = this._workflowsMwaaProperties?.internalValue;
        }
        if (this._workflowsServerlessProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowsServerlessProperties = this._workflowsServerlessProperties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionPropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonQProperties.internalValue = undefined;
            this._athenaProperties.internalValue = undefined;
            this._glueProperties.internalValue = undefined;
            this._hyperPodProperties.internalValue = undefined;
            this._iamProperties.internalValue = undefined;
            this._lakehouseProperties.internalValue = undefined;
            this._mlflowProperties.internalValue = undefined;
            this._redshiftProperties.internalValue = undefined;
            this._s3Properties.internalValue = undefined;
            this._sparkEmrProperties.internalValue = undefined;
            this._sparkGlueProperties.internalValue = undefined;
            this._workflowsMwaaProperties.internalValue = undefined;
            this._workflowsServerlessProperties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonQProperties.internalValue = value.amazonQProperties;
            this._athenaProperties.internalValue = value.athenaProperties;
            this._glueProperties.internalValue = value.glueProperties;
            this._hyperPodProperties.internalValue = value.hyperPodProperties;
            this._iamProperties.internalValue = value.iamProperties;
            this._lakehouseProperties.internalValue = value.lakehouseProperties;
            this._mlflowProperties.internalValue = value.mlflowProperties;
            this._redshiftProperties.internalValue = value.redshiftProperties;
            this._s3Properties.internalValue = value.s3Properties;
            this._sparkEmrProperties.internalValue = value.sparkEmrProperties;
            this._sparkGlueProperties.internalValue = value.sparkGlueProperties;
            this._workflowsMwaaProperties.internalValue = value.workflowsMwaaProperties;
            this._workflowsServerlessProperties = value.workflowsServerlessProperties;
        }
    }

    // amazon_q_properties - computed: true, optional: true, required: false
    private _amazonQProperties = new AmazonQPropertiesInputPropertyOutputReference(this, "amazon_q_properties");
    public get amazonQProperties() {
        return this._amazonQProperties;
    }
    public putAmazonQProperties(value: AmazonQPropertiesInputProperty) {
        this._amazonQProperties.internalValue = value;
    }
    public resetAmazonQProperties() {
        this._amazonQProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonQPropertiesInput() {
        return this._amazonQProperties.internalValue;
    }

    // athena_properties - computed: true, optional: true, required: false
    private _athenaProperties = new AthenaPropertiesInputPropertyOutputReference(this, "athena_properties");
    public get athenaProperties() {
        return this._athenaProperties;
    }
    public putAthenaProperties(value: AthenaPropertiesInputProperty) {
        this._athenaProperties.internalValue = value;
    }
    public resetAthenaProperties() {
        this._athenaProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaPropertiesInput() {
        return this._athenaProperties.internalValue;
    }

    // glue_properties - computed: true, optional: true, required: false
    private _glueProperties = new GluePropertiesInputPropertyOutputReference(this, "glue_properties");
    public get glueProperties() {
        return this._glueProperties;
    }
    public putGlueProperties(value: GluePropertiesInputProperty) {
        this._glueProperties.internalValue = value;
    }
    public resetGlueProperties() {
        this._glueProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gluePropertiesInput() {
        return this._glueProperties.internalValue;
    }

    // hyper_pod_properties - computed: true, optional: true, required: false
    private _hyperPodProperties = new HyperPodPropertiesInputPropertyOutputReference(this, "hyper_pod_properties");
    public get hyperPodProperties() {
        return this._hyperPodProperties;
    }
    public putHyperPodProperties(value: HyperPodPropertiesInputProperty) {
        this._hyperPodProperties.internalValue = value;
    }
    public resetHyperPodProperties() {
        this._hyperPodProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hyperPodPropertiesInput() {
        return this._hyperPodProperties.internalValue;
    }

    // iam_properties - computed: true, optional: true, required: false
    private _iamProperties = new IamPropertiesInputPropertyOutputReference(this, "iam_properties");
    public get iamProperties() {
        return this._iamProperties;
    }
    public putIamProperties(value: IamPropertiesInputProperty) {
        this._iamProperties.internalValue = value;
    }
    public resetIamProperties() {
        this._iamProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamPropertiesInput() {
        return this._iamProperties.internalValue;
    }

    // lakehouse_properties - computed: true, optional: true, required: false
    private _lakehouseProperties = new LakehousePropertiesInputPropertyOutputReference(this, "lakehouse_properties");
    public get lakehouseProperties() {
        return this._lakehouseProperties;
    }
    public putLakehouseProperties(value: LakehousePropertiesInputProperty) {
        this._lakehouseProperties.internalValue = value;
    }
    public resetLakehouseProperties() {
        this._lakehouseProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lakehousePropertiesInput() {
        return this._lakehouseProperties.internalValue;
    }

    // mlflow_properties - computed: true, optional: true, required: false
    private _mlflowProperties = new MlflowPropertiesInputPropertyOutputReference(this, "mlflow_properties");
    public get mlflowProperties() {
        return this._mlflowProperties;
    }
    public putMlflowProperties(value: MlflowPropertiesInputProperty) {
        this._mlflowProperties.internalValue = value;
    }
    public resetMlflowProperties() {
        this._mlflowProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlflowPropertiesInput() {
        return this._mlflowProperties.internalValue;
    }

    // redshift_properties - computed: true, optional: true, required: false
    private _redshiftProperties = new RedshiftPropertiesInputPropertyOutputReference(this, "redshift_properties");
    public get redshiftProperties() {
        return this._redshiftProperties;
    }
    public putRedshiftProperties(value: RedshiftPropertiesInputProperty) {
        this._redshiftProperties.internalValue = value;
    }
    public resetRedshiftProperties() {
        this._redshiftProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftPropertiesInput() {
        return this._redshiftProperties.internalValue;
    }

    // s3_properties - computed: true, optional: true, required: false
    private _s3Properties = new S3PropertiesInputPropertyOutputReference(this, "s3_properties");
    public get s3Properties() {
        return this._s3Properties;
    }
    public putS3Properties(value: S3PropertiesInputProperty) {
        this._s3Properties.internalValue = value;
    }
    public resetS3Properties() {
        this._s3Properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3PropertiesInput() {
        return this._s3Properties.internalValue;
    }

    // spark_emr_properties - computed: true, optional: true, required: false
    private _sparkEmrProperties = new SparkEmrPropertiesInputPropertyOutputReference(this, "spark_emr_properties");
    public get sparkEmrProperties() {
        return this._sparkEmrProperties;
    }
    public putSparkEmrProperties(value: SparkEmrPropertiesInputProperty) {
        this._sparkEmrProperties.internalValue = value;
    }
    public resetSparkEmrProperties() {
        this._sparkEmrProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkEmrPropertiesInput() {
        return this._sparkEmrProperties.internalValue;
    }

    // spark_glue_properties - computed: true, optional: true, required: false
    private _sparkGlueProperties = new SparkGluePropertiesInputPropertyOutputReference(this, "spark_glue_properties");
    public get sparkGlueProperties() {
        return this._sparkGlueProperties;
    }
    public putSparkGlueProperties(value: SparkGluePropertiesInputProperty) {
        this._sparkGlueProperties.internalValue = value;
    }
    public resetSparkGlueProperties() {
        this._sparkGlueProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkGluePropertiesInput() {
        return this._sparkGlueProperties.internalValue;
    }

    // workflows_mwaa_properties - computed: true, optional: true, required: false
    private _workflowsMwaaProperties = new WorkflowsMwaaPropertiesInputPropertyOutputReference(this, "workflows_mwaa_properties");
    public get workflowsMwaaProperties() {
        return this._workflowsMwaaProperties;
    }
    public putWorkflowsMwaaProperties(value: WorkflowsMwaaPropertiesInputProperty) {
        this._workflowsMwaaProperties.internalValue = value;
    }
    public resetWorkflowsMwaaProperties() {
        this._workflowsMwaaProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowsMwaaPropertiesInput() {
        return this._workflowsMwaaProperties.internalValue;
    }

    // workflows_serverless_properties - computed: true, optional: true, required: false
    private _workflowsServerlessProperties?: string; 
    public get workflowsServerlessProperties() {
        return this.getStringAttribute('workflows_serverless_properties');
    }
    public set workflowsServerlessProperties(value: string) {
        this._workflowsServerlessProperties = value;
    }
    public resetWorkflowsServerlessProperties() {
        this._workflowsServerlessProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowsServerlessPropertiesInput() {
        return this._workflowsServerlessProperties;
    }
}
}
