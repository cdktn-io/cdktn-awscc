// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationHDFSProps extends cdktn.TerraformMetaArguments {
    /**
    * ARN(s) of the agent(s) to use for an HDFS location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#agent_arns CcLocationHDFS#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * The authentication mode used to determine identity of user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#authentication_type CcLocationHDFS#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#block_size CcLocationHDFS#block_size}
    */
    readonly blockSize?: number;
    /**
    * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#cmk_secret_config CcLocationHDFS#cmk_secret_config}
    */
    readonly cmkSecretConfig?: CcLocationHDFS.CmkSecretConfigProperty;
    /**
    * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#custom_secret_config CcLocationHDFS#custom_secret_config}
    */
    readonly customSecretConfig?: CcLocationHDFS.CustomSecretConfigProperty;
    /**
    * The Base64 string representation of the Keytab file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_keytab CcLocationHDFS#kerberos_keytab}
    */
    readonly kerberosKeytab?: string;
    /**
    * The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_krb_5_conf CcLocationHDFS#kerberos_krb_5_conf}
    */
    readonly kerberosKrb5Conf?: string;
    /**
    * The unique identity, or principal, to which Kerberos can assign tickets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kerberos_principal CcLocationHDFS#kerberos_principal}
    */
    readonly kerberosPrincipal?: string;
    /**
    * The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri CcLocationHDFS#kms_key_provider_uri}
    */
    readonly kmsKeyProviderUri?: string;
    /**
    * An array of Name Node(s) of the HDFS location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#name_nodes CcLocationHDFS#name_nodes}
    */
    readonly nameNodes: CcLocationHDFS.NameNodeProperty[] | cdktn.IResolvable;
    /**
    * Configuration information for RPC Protection and Data Transfer Protection. These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#qop_configuration CcLocationHDFS#qop_configuration}
    */
    readonly qopConfiguration?: CcLocationHDFS.QopConfigurationProperty;
    /**
    * Number of copies of each block that exists inside the HDFS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#replication_factor CcLocationHDFS#replication_factor}
    */
    readonly replicationFactor?: number;
    /**
    * The user name that has read and write permissions on the specified HDFS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#simple_user CcLocationHDFS#simple_user}
    */
    readonly simpleUser?: string;
    /**
    * The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#subdirectory CcLocationHDFS#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#tags CcLocationHDFS#tags}
    */
    readonly tags?: CcLocationHDFS.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs awscc_datasync_location_hdfs}
*/
export class CcLocationHDFS extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_hdfs";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationHDFS resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationHDFS to import
    * @param importFromId The id of the existing CcLocationHDFS that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationHDFS to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_hdfs", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs awscc_datasync_location_hdfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationHDFSProps
    */
    public constructor(scope: Construct, id: string, config: CcLocationHDFSProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_hdfs',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._agentArns = config.agentArns;
        this._authenticationType = config.authenticationType;
        this._blockSize = config.blockSize;
        this._cmkSecretConfig.internalValue = config.cmkSecretConfig;
        this._customSecretConfig.internalValue = config.customSecretConfig;
        this._kerberosKeytab = config.kerberosKeytab;
        this._kerberosKrb5Conf = config.kerberosKrb5Conf;
        this._kerberosPrincipal = config.kerberosPrincipal;
        this._kmsKeyProviderUri = config.kmsKeyProviderUri;
        this._nameNodes.internalValue = config.nameNodes;
        this._qopConfiguration.internalValue = config.qopConfiguration;
        this._replicationFactor = config.replicationFactor;
        this._simpleUser = config.simpleUser;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_arns - computed: false, optional: false, required: true
    private _agentArns?: string[]; 
    public get agentArns() {
        return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[]) {
        this._agentArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
        return this._agentArns;
    }

    // authentication_type - computed: false, optional: false, required: true
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // block_size - computed: true, optional: true, required: false
    private _blockSize?: number; 
    public get blockSize() {
        return this.getNumberAttribute('block_size');
    }
    public set blockSize(value: number) {
        this._blockSize = value;
    }
    public resetBlockSize() {
        this._blockSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockSizeInput() {
        return this._blockSize;
    }

    // cmk_secret_config - computed: true, optional: true, required: false
    private _cmkSecretConfig = new CcLocationHDFS.CmkSecretConfigPropertyOutputReference(this, "cmk_secret_config");
    public get cmkSecretConfig() {
        return this._cmkSecretConfig;
    }
    public putCmkSecretConfig(value: CcLocationHDFS.CmkSecretConfigProperty) {
        this._cmkSecretConfig.internalValue = value;
    }
    public resetCmkSecretConfig() {
        this._cmkSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmkSecretConfigInput() {
        return this._cmkSecretConfig.internalValue;
    }

    // custom_secret_config - computed: true, optional: true, required: false
    private _customSecretConfig = new CcLocationHDFS.CustomSecretConfigPropertyOutputReference(this, "custom_secret_config");
    public get customSecretConfig() {
        return this._customSecretConfig;
    }
    public putCustomSecretConfig(value: CcLocationHDFS.CustomSecretConfigProperty) {
        this._customSecretConfig.internalValue = value;
    }
    public resetCustomSecretConfig() {
        this._customSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSecretConfigInput() {
        return this._customSecretConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kerberos_keytab - computed: true, optional: true, required: false
    private _kerberosKeytab?: string; 
    public get kerberosKeytab() {
        return this.getStringAttribute('kerberos_keytab');
    }
    public set kerberosKeytab(value: string) {
        this._kerberosKeytab = value;
    }
    public resetKerberosKeytab() {
        this._kerberosKeytab = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosKeytabInput() {
        return this._kerberosKeytab;
    }

    // kerberos_krb_5_conf - computed: true, optional: true, required: false
    private _kerberosKrb5Conf?: string; 
    public get kerberosKrb5Conf() {
        return this.getStringAttribute('kerberos_krb_5_conf');
    }
    public set kerberosKrb5Conf(value: string) {
        this._kerberosKrb5Conf = value;
    }
    public resetKerberosKrb5Conf() {
        this._kerberosKrb5Conf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosKrb5ConfInput() {
        return this._kerberosKrb5Conf;
    }

    // kerberos_principal - computed: true, optional: true, required: false
    private _kerberosPrincipal?: string; 
    public get kerberosPrincipal() {
        return this.getStringAttribute('kerberos_principal');
    }
    public set kerberosPrincipal(value: string) {
        this._kerberosPrincipal = value;
    }
    public resetKerberosPrincipal() {
        this._kerberosPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosPrincipalInput() {
        return this._kerberosPrincipal;
    }

    // kms_key_provider_uri - computed: true, optional: true, required: false
    private _kmsKeyProviderUri?: string; 
    public get kmsKeyProviderUri() {
        return this.getStringAttribute('kms_key_provider_uri');
    }
    public set kmsKeyProviderUri(value: string) {
        this._kmsKeyProviderUri = value;
    }
    public resetKmsKeyProviderUri() {
        this._kmsKeyProviderUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyProviderUriInput() {
        return this._kmsKeyProviderUri;
    }

    // location_arn - computed: true, optional: false, required: false
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }

    // location_uri - computed: true, optional: false, required: false
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }

    // managed_secret_config - computed: true, optional: false, required: false
    private _managedSecretConfig = new CcLocationHDFS.ManagedSecretConfigPropertyOutputReference(this, "managed_secret_config");
    public get managedSecretConfig() {
        return this._managedSecretConfig;
    }

    // name_nodes - computed: false, optional: false, required: true
    private _nameNodes = new CcLocationHDFS.NameNodePropertyList(this, "name_nodes", false);
    public get nameNodes() {
        return this._nameNodes;
    }
    public putNameNodes(value: CcLocationHDFS.NameNodeProperty[] | cdktn.IResolvable) {
        this._nameNodes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameNodesInput() {
        return this._nameNodes.internalValue;
    }

    // qop_configuration - computed: true, optional: true, required: false
    private _qopConfiguration = new CcLocationHDFS.QopConfigurationPropertyOutputReference(this, "qop_configuration");
    public get qopConfiguration() {
        return this._qopConfiguration;
    }
    public putQopConfiguration(value: CcLocationHDFS.QopConfigurationProperty) {
        this._qopConfiguration.internalValue = value;
    }
    public resetQopConfiguration() {
        this._qopConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qopConfigurationInput() {
        return this._qopConfiguration.internalValue;
    }

    // replication_factor - computed: true, optional: true, required: false
    private _replicationFactor?: number; 
    public get replicationFactor() {
        return this.getNumberAttribute('replication_factor');
    }
    public set replicationFactor(value: number) {
        this._replicationFactor = value;
    }
    public resetReplicationFactor() {
        this._replicationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationFactorInput() {
        return this._replicationFactor;
    }

    // simple_user - computed: true, optional: true, required: false
    private _simpleUser?: string; 
    public get simpleUser() {
        return this.getStringAttribute('simple_user');
    }
    public set simpleUser(value: string) {
        this._simpleUser = value;
    }
    public resetSimpleUser() {
        this._simpleUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get simpleUserInput() {
        return this._simpleUser;
    }

    // subdirectory - computed: true, optional: true, required: false
    private _subdirectory?: string; 
    public get subdirectory() {
        return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
        this._subdirectory = value;
    }
    public resetSubdirectory() {
        this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
        return this._subdirectory;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocationHDFS.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationHDFS.TagProperty[] | cdktn.IResolvable) {
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
            agent_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._agentArns),
            authentication_type: cdktn.stringToTerraform(this._authenticationType),
            block_size: cdktn.numberToTerraform(this._blockSize),
            cmk_secret_config: ccLocationHDFSCmkSecretConfigPropertyToTerraform(this._cmkSecretConfig.internalValue),
            custom_secret_config: ccLocationHDFSCustomSecretConfigPropertyToTerraform(this._customSecretConfig.internalValue),
            kerberos_keytab: cdktn.stringToTerraform(this._kerberosKeytab),
            kerberos_krb_5_conf: cdktn.stringToTerraform(this._kerberosKrb5Conf),
            kerberos_principal: cdktn.stringToTerraform(this._kerberosPrincipal),
            kms_key_provider_uri: cdktn.stringToTerraform(this._kmsKeyProviderUri),
            name_nodes: cdktn.listMapper(ccLocationHDFSNameNodePropertyToTerraform, false)(this._nameNodes.internalValue),
            qop_configuration: ccLocationHDFSQopConfigurationPropertyToTerraform(this._qopConfiguration.internalValue),
            replication_factor: cdktn.numberToTerraform(this._replicationFactor),
            simple_user: cdktn.stringToTerraform(this._simpleUser),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationHDFSTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._agentArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            authentication_type: {
                value: cdktn.stringToHclTerraform(this._authenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            block_size: {
                value: cdktn.numberToHclTerraform(this._blockSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cmk_secret_config: {
                value: ccLocationHDFSCmkSecretConfigPropertyToHclTerraform(this._cmkSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationHDFS.CmkSecretConfigProperty",
            },
            custom_secret_config: {
                value: ccLocationHDFSCustomSecretConfigPropertyToHclTerraform(this._customSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationHDFS.CustomSecretConfigProperty",
            },
            kerberos_keytab: {
                value: cdktn.stringToHclTerraform(this._kerberosKeytab),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kerberos_krb_5_conf: {
                value: cdktn.stringToHclTerraform(this._kerberosKrb5Conf),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kerberos_principal: {
                value: cdktn.stringToHclTerraform(this._kerberosPrincipal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_provider_uri: {
                value: cdktn.stringToHclTerraform(this._kmsKeyProviderUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name_nodes: {
                value: cdktn.listMapperHcl(ccLocationHDFSNameNodePropertyToHclTerraform, false)(this._nameNodes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLocationHDFS.NameNodePropertyList",
            },
            qop_configuration: {
                value: ccLocationHDFSQopConfigurationPropertyToHclTerraform(this._qopConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationHDFS.QopConfigurationProperty",
            },
            replication_factor: {
                value: cdktn.numberToHclTerraform(this._replicationFactor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            simple_user: {
                value: cdktn.stringToHclTerraform(this._simpleUser),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subdirectory: {
                value: cdktn.stringToHclTerraform(this._subdirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocationHDFSTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationHDFS.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationHDFSCmkSecretConfigPropertyToTerraform(struct?: CcLocationHDFS.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccLocationHDFSCmkSecretConfigPropertyToHclTerraform(struct?: CcLocationHDFS.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationHDFSCustomSecretConfigPropertyToTerraform(struct?: CcLocationHDFS.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_access_role_arn: cdktn.stringToTerraform(struct!.secretAccessRoleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccLocationHDFSCustomSecretConfigPropertyToHclTerraform(struct?: CcLocationHDFS.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretAccessRoleArn),
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


export function ccLocationHDFSManagedSecretConfigPropertyToTerraform(struct?: CcLocationHDFS.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLocationHDFSManagedSecretConfigPropertyToHclTerraform(struct?: CcLocationHDFS.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLocationHDFSNameNodePropertyToTerraform(struct?: CcLocationHDFS.NameNodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hostname: cdktn.stringToTerraform(struct!.hostname),
        port: cdktn.numberToTerraform(struct!.port),
    }
}


export function ccLocationHDFSNameNodePropertyToHclTerraform(struct?: CcLocationHDFS.NameNodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hostname: {
            value: cdktn.stringToHclTerraform(struct!.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationHDFSQopConfigurationPropertyToTerraform(struct?: CcLocationHDFS.QopConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_transfer_protection: cdktn.stringToTerraform(struct!.dataTransferProtection),
        rpc_protection: cdktn.stringToTerraform(struct!.rpcProtection),
    }
}


export function ccLocationHDFSQopConfigurationPropertyToHclTerraform(struct?: CcLocationHDFS.QopConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_transfer_protection: {
            value: cdktn.stringToHclTerraform(struct!.dataTransferProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rpc_protection: {
            value: cdktn.stringToHclTerraform(struct!.rpcProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLocationHDFSTagPropertyToTerraform(struct?: CcLocationHDFS.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationHDFSTagPropertyToHclTerraform(struct?: CcLocationHDFS.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationHDFS {
export interface CmkSecretConfigProperty {
    /**
    * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#kms_key_arn CcLocationHDFS#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class CmkSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CmkSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CmkSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
        }
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface CustomSecretConfigProperty {
    /**
    * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#secret_access_role_arn CcLocationHDFS#secret_access_role_arn}
    */
    readonly secretAccessRoleArn?: string;
    /**
    * Specifies the ARN for a customer created AWS Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#secret_arn CcLocationHDFS#secret_arn}
    */
    readonly secretArn?: string;
}
export class CustomSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessRoleArn = this._secretAccessRoleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretAccessRoleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretAccessRoleArn = value.secretAccessRoleArn;
            this._secretArn = value.secretArn;
        }
    }

    // secret_access_role_arn - computed: true, optional: true, required: false
    private _secretAccessRoleArn?: string; 
    public get secretAccessRoleArn() {
        return this.getStringAttribute('secret_access_role_arn');
    }
    public set secretAccessRoleArn(value: string) {
        this._secretAccessRoleArn = value;
    }
    public resetSecretAccessRoleArn() {
        this._secretAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretAccessRoleArnInput() {
        return this._secretAccessRoleArn;
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
export interface ManagedSecretConfigProperty {
}
export class ManagedSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedSecretConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedSecretConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface NameNodeProperty {
    /**
    * The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#hostname CcLocationHDFS#hostname}
    */
    readonly hostname: string;
    /**
    * The port on which the Name Node is listening on for client requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#port CcLocationHDFS#port}
    */
    readonly port: number;
}
export class NameNodePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NameNodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NameNodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostname = undefined;
            this._port = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostname = value.hostname;
            this._port = value.port;
        }
    }

    // hostname - computed: false, optional: false, required: true
    private _hostname?: string; 
    public get hostname() {
        return this.getStringAttribute('hostname');
    }
    public set hostname(value: string) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
        return this._hostname;
    }

    // port - computed: false, optional: false, required: true
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }
}

export class NameNodePropertyList extends cdktn.ComplexList {
    public internalValue? : NameNodeProperty[] | cdktn.IResolvable

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
    public get(index: number): NameNodePropertyOutputReference {
        return new NameNodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QopConfigurationProperty {
    /**
    * Configuration for Data Transfer Protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#data_transfer_protection CcLocationHDFS#data_transfer_protection}
    */
    readonly dataTransferProtection?: string;
    /**
    * Configuration for RPC Protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#rpc_protection CcLocationHDFS#rpc_protection}
    */
    readonly rpcProtection?: string;
}
export class QopConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QopConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataTransferProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTransferProtection = this._dataTransferProtection;
        }
        if (this._rpcProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpcProtection = this._rpcProtection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QopConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataTransferProtection = undefined;
            this._rpcProtection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataTransferProtection = value.dataTransferProtection;
            this._rpcProtection = value.rpcProtection;
        }
    }

    // data_transfer_protection - computed: true, optional: true, required: false
    private _dataTransferProtection?: string; 
    public get dataTransferProtection() {
        return this.getStringAttribute('data_transfer_protection');
    }
    public set dataTransferProtection(value: string) {
        this._dataTransferProtection = value;
    }
    public resetDataTransferProtection() {
        this._dataTransferProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTransferProtectionInput() {
        return this._dataTransferProtection;
    }

    // rpc_protection - computed: true, optional: true, required: false
    private _rpcProtection?: string; 
    public get rpcProtection() {
        return this.getStringAttribute('rpc_protection');
    }
    public set rpcProtection(value: string) {
        this._rpcProtection = value;
    }
    public resetRpcProtection() {
        this._rpcProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rpcProtectionInput() {
        return this._rpcProtection;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#key CcLocationHDFS#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_location_hdfs#value CcLocationHDFS#value}
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
