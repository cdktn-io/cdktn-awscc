// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMicrosoftADProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias CcMicrosoftAD#create_alias}
    */
    readonly createAlias?: boolean | cdktn.IResolvable;
    /**
    * AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition CcMicrosoftAD#edition}
    */
    readonly edition?: string;
    /**
    * Whether to enable single sign-on for a Microsoft Active Directory in AWS. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso CcMicrosoftAD#enable_sso}
    */
    readonly enableSso?: boolean | cdktn.IResolvable;
    /**
    * The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name CcMicrosoftAD#name}
    */
    readonly name: string;
    /**
    * The password for the default administrative user named Admin. If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password CcMicrosoftAD#password}
    */
    readonly password?: string;
    /**
    * The NetBIOS name for your domain, such as CORP. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name CcMicrosoftAD#short_name}
    */
    readonly shortName?: string;
    /**
    * Specifies the VPC settings of the Microsoft AD directory server in AWS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings CcMicrosoftAD#vpc_settings}
    */
    readonly vpcSettings: CcMicrosoftAD.VpcSettingsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}
*/
export class CcMicrosoftAD extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_directoryservice_microsoft_ad";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMicrosoftAD resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMicrosoftAD to import
    * @param importFromId The id of the existing CcMicrosoftAD that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMicrosoftAD to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directoryservice_microsoft_ad", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMicrosoftADProps
    */
    public constructor(scope: Construct, id: string, config: CcMicrosoftADProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_directoryservice_microsoft_ad',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._createAlias = config.createAlias;
        this._edition = config.edition;
        this._enableSso = config.enableSso;
        this._name = config.name;
        this._password = config.password;
        this._shortName = config.shortName;
        this._vpcSettings.internalValue = config.vpcSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    public get alias() {
        return this.getStringAttribute('alias');
    }

    // create_alias - computed: true, optional: true, required: false
    private _createAlias?: boolean | cdktn.IResolvable; 
    public get createAlias() {
        return this.getBooleanAttribute('create_alias');
    }
    public set createAlias(value: boolean | cdktn.IResolvable) {
        this._createAlias = value;
    }
    public resetCreateAlias() {
        this._createAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAliasInput() {
        return this._createAlias;
    }

    // directory_id - computed: true, optional: false, required: false
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
        return this.getListAttribute('dns_ip_addresses');
    }

    // edition - computed: true, optional: true, required: false
    private _edition?: string; 
    public get edition() {
        return this.getStringAttribute('edition');
    }
    public set edition(value: string) {
        this._edition = value;
    }
    public resetEdition() {
        this._edition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get editionInput() {
        return this._edition;
    }

    // enable_sso - computed: true, optional: true, required: false
    private _enableSso?: boolean | cdktn.IResolvable; 
    public get enableSso() {
        return this.getBooleanAttribute('enable_sso');
    }
    public set enableSso(value: boolean | cdktn.IResolvable) {
        this._enableSso = value;
    }
    public resetEnableSso() {
        this._enableSso = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSsoInput() {
        return this._enableSso;
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

    // short_name - computed: true, optional: true, required: false
    private _shortName?: string; 
    public get shortName() {
        return this.getStringAttribute('short_name');
    }
    public set shortName(value: string) {
        this._shortName = value;
    }
    public resetShortName() {
        this._shortName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shortNameInput() {
        return this._shortName;
    }

    // vpc_settings - computed: false, optional: false, required: true
    private _vpcSettings = new CcMicrosoftAD.VpcSettingsPropertyOutputReference(this, "vpc_settings");
    public get vpcSettings() {
        return this._vpcSettings;
    }
    public putVpcSettings(value: CcMicrosoftAD.VpcSettingsProperty) {
        this._vpcSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSettingsInput() {
        return this._vpcSettings.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            create_alias: cdktn.booleanToTerraform(this._createAlias),
            edition: cdktn.stringToTerraform(this._edition),
            enable_sso: cdktn.booleanToTerraform(this._enableSso),
            name: cdktn.stringToTerraform(this._name),
            password: cdktn.stringToTerraform(this._password),
            short_name: cdktn.stringToTerraform(this._shortName),
            vpc_settings: ccMicrosoftADVpcSettingsPropertyToTerraform(this._vpcSettings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            create_alias: {
                value: cdktn.booleanToHclTerraform(this._createAlias),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            edition: {
                value: cdktn.stringToHclTerraform(this._edition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_sso: {
                value: cdktn.booleanToHclTerraform(this._enableSso),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            password: {
                value: cdktn.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            short_name: {
                value: cdktn.stringToHclTerraform(this._shortName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_settings: {
                value: ccMicrosoftADVpcSettingsPropertyToHclTerraform(this._vpcSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMicrosoftAD.VpcSettingsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMicrosoftADVpcSettingsPropertyToTerraform(struct?: CcMicrosoftAD.VpcSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccMicrosoftADVpcSettingsPropertyToHclTerraform(struct?: CcMicrosoftAD.VpcSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMicrosoftAD {
export interface VpcSettingsProperty {
    /**
    * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids CcMicrosoftAD#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * The identifier of the VPC in which to create the directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id CcMicrosoftAD#vpc_id}
    */
    readonly vpcId: string;
}
export class VpcSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subnetIds = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subnetIds = value.subnetIds;
            this._vpcId = value.vpcId;
        }
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
}
