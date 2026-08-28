// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocationObjectStorageProps extends cdktn.TerraformMetaArguments {
    /**
    * Optional. The access key is used if credentials are required to access the self-managed object storage server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#access_key CcLocationObjectStorage#access_key}
    */
    readonly accessKey?: string;
    /**
    * Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#agent_arns CcLocationObjectStorage#agent_arns}
    */
    readonly agentArns?: string[];
    /**
    * The name of the bucket on the self-managed object storage server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#bucket_name CcLocationObjectStorage#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#cmk_secret_config CcLocationObjectStorage#cmk_secret_config}
    */
    readonly cmkSecretConfig?: CcLocationObjectStorage.CmkSecretConfigProperty;
    /**
    * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#custom_secret_config CcLocationObjectStorage#custom_secret_config}
    */
    readonly customSecretConfig?: CcLocationObjectStorage.CustomSecretConfigProperty;
    /**
    * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#secret_key CcLocationObjectStorage#secret_key}
    */
    readonly secretKey?: string;
    /**
    * X.509 PEM content containing a certificate authority or chain to trust.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#server_certificate CcLocationObjectStorage#server_certificate}
    */
    readonly serverCertificate?: string;
    /**
    * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#server_hostname CcLocationObjectStorage#server_hostname}
    */
    readonly serverHostname?: string;
    /**
    * The port that your self-managed server accepts inbound network traffic on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#server_port CcLocationObjectStorage#server_port}
    */
    readonly serverPort?: number;
    /**
    * The protocol that the object storage server uses to communicate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#server_protocol CcLocationObjectStorage#server_protocol}
    */
    readonly serverProtocol?: string;
    /**
    * The subdirectory in the self-managed object storage server that is used to read data from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#subdirectory CcLocationObjectStorage#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#tags CcLocationObjectStorage#tags}
    */
    readonly tags?: CcLocationObjectStorage.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage awscc_datasync_location_object_storage}
*/
export class CcLocationObjectStorage extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_location_object_storage";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocationObjectStorage resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocationObjectStorage to import
    * @param importFromId The id of the existing CcLocationObjectStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocationObjectStorage to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_object_storage", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage awscc_datasync_location_object_storage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocationObjectStorageProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLocationObjectStorageProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_location_object_storage',
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
        this._accessKey = config.accessKey;
        this._agentArns = config.agentArns;
        this._bucketName = config.bucketName;
        this._cmkSecretConfig.internalValue = config.cmkSecretConfig;
        this._customSecretConfig.internalValue = config.customSecretConfig;
        this._secretKey = config.secretKey;
        this._serverCertificate = config.serverCertificate;
        this._serverHostname = config.serverHostname;
        this._serverPort = config.serverPort;
        this._serverProtocol = config.serverProtocol;
        this._subdirectory = config.subdirectory;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_key - computed: true, optional: true, required: false
    private _accessKey?: string; 
    public get accessKey() {
        return this.getStringAttribute('access_key');
    }
    public set accessKey(value: string) {
        this._accessKey = value;
    }
    public resetAccessKey() {
        this._accessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessKeyInput() {
        return this._accessKey;
    }

    // agent_arns - computed: true, optional: true, required: false
    private _agentArns?: string[]; 
    public get agentArns() {
        return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[]) {
        this._agentArns = value;
    }
    public resetAgentArns() {
        this._agentArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
        return this._agentArns;
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // cmk_secret_config - computed: true, optional: true, required: false
    private _cmkSecretConfig = new CcLocationObjectStorage.CmkSecretConfigPropertyOutputReference(this, "cmk_secret_config");
    public get cmkSecretConfig() {
        return this._cmkSecretConfig;
    }
    public putCmkSecretConfig(value: CcLocationObjectStorage.CmkSecretConfigProperty) {
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
    private _customSecretConfig = new CcLocationObjectStorage.CustomSecretConfigPropertyOutputReference(this, "custom_secret_config");
    public get customSecretConfig() {
        return this._customSecretConfig;
    }
    public putCustomSecretConfig(value: CcLocationObjectStorage.CustomSecretConfigProperty) {
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

    // location_arn - computed: true, optional: false, required: false
    public get locationArn() {
        return this.getStringAttribute('location_arn');
    }

    // location_uri - computed: true, optional: false, required: false
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }

    // managed_secret_config - computed: true, optional: false, required: false
    private _managedSecretConfig = new CcLocationObjectStorage.ManagedSecretConfigPropertyOutputReference(this, "managed_secret_config");
    public get managedSecretConfig() {
        return this._managedSecretConfig;
    }

    // secret_key - computed: true, optional: true, required: false
    private _secretKey?: string; 
    public get secretKey() {
        return this.getStringAttribute('secret_key');
    }
    public set secretKey(value: string) {
        this._secretKey = value;
    }
    public resetSecretKey() {
        this._secretKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretKeyInput() {
        return this._secretKey;
    }

    // server_certificate - computed: true, optional: true, required: false
    private _serverCertificate?: string; 
    public get serverCertificate() {
        return this.getStringAttribute('server_certificate');
    }
    public set serverCertificate(value: string) {
        this._serverCertificate = value;
    }
    public resetServerCertificate() {
        this._serverCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverCertificateInput() {
        return this._serverCertificate;
    }

    // server_hostname - computed: true, optional: true, required: false
    private _serverHostname?: string; 
    public get serverHostname() {
        return this.getStringAttribute('server_hostname');
    }
    public set serverHostname(value: string) {
        this._serverHostname = value;
    }
    public resetServerHostname() {
        this._serverHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverHostnameInput() {
        return this._serverHostname;
    }

    // server_port - computed: true, optional: true, required: false
    private _serverPort?: number; 
    public get serverPort() {
        return this.getNumberAttribute('server_port');
    }
    public set serverPort(value: number) {
        this._serverPort = value;
    }
    public resetServerPort() {
        this._serverPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverPortInput() {
        return this._serverPort;
    }

    // server_protocol - computed: true, optional: true, required: false
    private _serverProtocol?: string; 
    public get serverProtocol() {
        return this.getStringAttribute('server_protocol');
    }
    public set serverProtocol(value: string) {
        this._serverProtocol = value;
    }
    public resetServerProtocol() {
        this._serverProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverProtocolInput() {
        return this._serverProtocol;
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
    private _tags = new CcLocationObjectStorage.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocationObjectStorage.TagProperty[] | cdktn.IResolvable) {
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
            access_key: cdktn.stringToTerraform(this._accessKey),
            agent_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._agentArns),
            bucket_name: cdktn.stringToTerraform(this._bucketName),
            cmk_secret_config: ccLocationObjectStorageCmkSecretConfigPropertyToTerraform(this._cmkSecretConfig.internalValue),
            custom_secret_config: ccLocationObjectStorageCustomSecretConfigPropertyToTerraform(this._customSecretConfig.internalValue),
            secret_key: cdktn.stringToTerraform(this._secretKey),
            server_certificate: cdktn.stringToTerraform(this._serverCertificate),
            server_hostname: cdktn.stringToTerraform(this._serverHostname),
            server_port: cdktn.numberToTerraform(this._serverPort),
            server_protocol: cdktn.stringToTerraform(this._serverProtocol),
            subdirectory: cdktn.stringToTerraform(this._subdirectory),
            tags: cdktn.listMapper(ccLocationObjectStorageTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_key: {
                value: cdktn.stringToHclTerraform(this._accessKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._agentArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            bucket_name: {
                value: cdktn.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cmk_secret_config: {
                value: ccLocationObjectStorageCmkSecretConfigPropertyToHclTerraform(this._cmkSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationObjectStorage.CmkSecretConfigProperty",
            },
            custom_secret_config: {
                value: ccLocationObjectStorageCustomSecretConfigPropertyToHclTerraform(this._customSecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLocationObjectStorage.CustomSecretConfigProperty",
            },
            secret_key: {
                value: cdktn.stringToHclTerraform(this._secretKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_certificate: {
                value: cdktn.stringToHclTerraform(this._serverCertificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_hostname: {
                value: cdktn.stringToHclTerraform(this._serverHostname),
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
            server_protocol: {
                value: cdktn.stringToHclTerraform(this._serverProtocol),
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
                value: cdktn.listMapperHcl(ccLocationObjectStorageTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocationObjectStorage.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocationObjectStorageCmkSecretConfigPropertyToTerraform(struct?: CcLocationObjectStorage.CmkSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccLocationObjectStorageCmkSecretConfigPropertyToHclTerraform(struct?: CcLocationObjectStorage.CmkSecretConfigProperty | cdktn.IResolvable): any {
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


export function ccLocationObjectStorageCustomSecretConfigPropertyToTerraform(struct?: CcLocationObjectStorage.CustomSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_access_role_arn: cdktn.stringToTerraform(struct!.secretAccessRoleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccLocationObjectStorageCustomSecretConfigPropertyToHclTerraform(struct?: CcLocationObjectStorage.CustomSecretConfigProperty | cdktn.IResolvable): any {
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


export function ccLocationObjectStorageManagedSecretConfigPropertyToTerraform(struct?: CcLocationObjectStorage.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccLocationObjectStorageManagedSecretConfigPropertyToHclTerraform(struct?: CcLocationObjectStorage.ManagedSecretConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccLocationObjectStorageTagPropertyToTerraform(struct?: CcLocationObjectStorage.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocationObjectStorageTagPropertyToHclTerraform(struct?: CcLocationObjectStorage.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocationObjectStorage {
export interface CmkSecretConfigProperty {
    /**
    * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#kms_key_arn CcLocationObjectStorage#kms_key_arn}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#secret_access_role_arn CcLocationObjectStorage#secret_access_role_arn}
    */
    readonly secretAccessRoleArn?: string;
    /**
    * Specifies the ARN for a customer created AWS Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#secret_arn CcLocationObjectStorage#secret_arn}
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
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#key CcLocationObjectStorage#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_location_object_storage#value CcLocationObjectStorage#value}
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
