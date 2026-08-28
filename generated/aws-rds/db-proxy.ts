// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBProxyProps extends cdktn.TerraformMetaArguments {
    /**
    * The authorization mechanism that the proxy uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#auth CcDBProxy#auth}
    */
    readonly auth?: CcDBProxy.AuthFormatProperty[] | cdktn.IResolvable;
    /**
    * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#db_proxy_name CcDBProxy#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Whether the proxy includes detailed information about SQL statements in its logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#debug_logging CcDBProxy#debug_logging}
    */
    readonly debugLogging?: boolean | cdktn.IResolvable;
    /**
    * The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#default_auth_scheme CcDBProxy#default_auth_scheme}
    */
    readonly defaultAuthScheme?: string;
    /**
    * The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#endpoint_network_type CcDBProxy#endpoint_network_type}
    */
    readonly endpointNetworkType?: string;
    /**
    * The kinds of databases that the proxy can connect to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#engine_family CcDBProxy#engine_family}
    */
    readonly engineFamily: string;
    /**
    * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#idle_client_timeout CcDBProxy#idle_client_timeout}
    */
    readonly idleClientTimeout?: number;
    /**
    * A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#require_tls CcDBProxy#require_tls}
    */
    readonly requireTls?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#role_arn CcDBProxy#role_arn}
    */
    readonly roleArn: string;
    /**
    * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#tags CcDBProxy#tags}
    */
    readonly tags?: CcDBProxy.TagFormatProperty[] | cdktn.IResolvable;
    /**
    * The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#target_connection_network_type CcDBProxy#target_connection_network_type}
    */
    readonly targetConnectionNetworkType?: string;
    /**
    * VPC security group IDs to associate with the new proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#vpc_security_group_ids CcDBProxy#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * VPC subnet IDs to associate with the new proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#vpc_subnet_ids CcDBProxy#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy awscc_rds_db_proxy}
*/
export class CcDBProxy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_db_proxy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBProxy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBProxy to import
    * @param importFromId The id of the existing CcDBProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBProxy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_proxy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy awscc_rds_db_proxy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBProxyProps
    */
    public constructor(scope: Construct, id: string, config: CcDBProxyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_proxy',
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
        this._auth.internalValue = config.auth;
        this._dbProxyName = config.dbProxyName;
        this._debugLogging = config.debugLogging;
        this._defaultAuthScheme = config.defaultAuthScheme;
        this._endpointNetworkType = config.endpointNetworkType;
        this._engineFamily = config.engineFamily;
        this._idleClientTimeout = config.idleClientTimeout;
        this._requireTls = config.requireTls;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._targetConnectionNetworkType = config.targetConnectionNetworkType;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._vpcSubnetIds = config.vpcSubnetIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auth - computed: true, optional: true, required: false
    private _auth = new CcDBProxy.AuthFormatPropertyList(this, "auth", false);
    public get auth() {
        return this._auth;
    }
    public putAuth(value: CcDBProxy.AuthFormatProperty[] | cdktn.IResolvable) {
        this._auth.internalValue = value;
    }
    public resetAuth() {
        this._auth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authInput() {
        return this._auth.internalValue;
    }

    // db_proxy_arn - computed: true, optional: false, required: false
    public get dbProxyArn() {
        return this.getStringAttribute('db_proxy_arn');
    }

    // db_proxy_name - computed: false, optional: false, required: true
    private _dbProxyName?: string; 
    public get dbProxyName() {
        return this.getStringAttribute('db_proxy_name');
    }
    public set dbProxyName(value: string) {
        this._dbProxyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbProxyNameInput() {
        return this._dbProxyName;
    }

    // debug_logging - computed: true, optional: true, required: false
    private _debugLogging?: boolean | cdktn.IResolvable; 
    public get debugLogging() {
        return this.getBooleanAttribute('debug_logging');
    }
    public set debugLogging(value: boolean | cdktn.IResolvable) {
        this._debugLogging = value;
    }
    public resetDebugLogging() {
        this._debugLogging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get debugLoggingInput() {
        return this._debugLogging;
    }

    // default_auth_scheme - computed: true, optional: true, required: false
    private _defaultAuthScheme?: string; 
    public get defaultAuthScheme() {
        return this.getStringAttribute('default_auth_scheme');
    }
    public set defaultAuthScheme(value: string) {
        this._defaultAuthScheme = value;
    }
    public resetDefaultAuthScheme() {
        this._defaultAuthScheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultAuthSchemeInput() {
        return this._defaultAuthScheme;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // endpoint_network_type - computed: true, optional: true, required: false
    private _endpointNetworkType?: string; 
    public get endpointNetworkType() {
        return this.getStringAttribute('endpoint_network_type');
    }
    public set endpointNetworkType(value: string) {
        this._endpointNetworkType = value;
    }
    public resetEndpointNetworkType() {
        this._endpointNetworkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNetworkTypeInput() {
        return this._endpointNetworkType;
    }

    // engine_family - computed: false, optional: false, required: true
    private _engineFamily?: string; 
    public get engineFamily() {
        return this.getStringAttribute('engine_family');
    }
    public set engineFamily(value: string) {
        this._engineFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineFamilyInput() {
        return this._engineFamily;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idle_client_timeout - computed: true, optional: true, required: false
    private _idleClientTimeout?: number; 
    public get idleClientTimeout() {
        return this.getNumberAttribute('idle_client_timeout');
    }
    public set idleClientTimeout(value: number) {
        this._idleClientTimeout = value;
    }
    public resetIdleClientTimeout() {
        this._idleClientTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleClientTimeoutInput() {
        return this._idleClientTimeout;
    }

    // require_tls - computed: true, optional: true, required: false
    private _requireTls?: boolean | cdktn.IResolvable; 
    public get requireTls() {
        return this.getBooleanAttribute('require_tls');
    }
    public set requireTls(value: boolean | cdktn.IResolvable) {
        this._requireTls = value;
    }
    public resetRequireTls() {
        this._requireTls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireTlsInput() {
        return this._requireTls;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDBProxy.TagFormatPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDBProxy.TagFormatProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_connection_network_type - computed: true, optional: true, required: false
    private _targetConnectionNetworkType?: string; 
    public get targetConnectionNetworkType() {
        return this.getStringAttribute('target_connection_network_type');
    }
    public set targetConnectionNetworkType(value: string) {
        this._targetConnectionNetworkType = value;
    }
    public resetTargetConnectionNetworkType() {
        this._targetConnectionNetworkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetConnectionNetworkTypeInput() {
        return this._targetConnectionNetworkType;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[]; 
    public get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[]) {
        this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }

    // vpc_subnet_ids - computed: false, optional: false, required: true
    private _vpcSubnetIds?: string[]; 
    public get vpcSubnetIds() {
        return this.getListAttribute('vpc_subnet_ids');
    }
    public set vpcSubnetIds(value: string[]) {
        this._vpcSubnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSubnetIdsInput() {
        return this._vpcSubnetIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth: cdktn.listMapper(ccDBProxyAuthFormatPropertyToTerraform, false)(this._auth.internalValue),
            db_proxy_name: cdktn.stringToTerraform(this._dbProxyName),
            debug_logging: cdktn.booleanToTerraform(this._debugLogging),
            default_auth_scheme: cdktn.stringToTerraform(this._defaultAuthScheme),
            endpoint_network_type: cdktn.stringToTerraform(this._endpointNetworkType),
            engine_family: cdktn.stringToTerraform(this._engineFamily),
            idle_client_timeout: cdktn.numberToTerraform(this._idleClientTimeout),
            require_tls: cdktn.booleanToTerraform(this._requireTls),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccDBProxyTagFormatPropertyToTerraform, false)(this._tags.internalValue),
            target_connection_network_type: cdktn.stringToTerraform(this._targetConnectionNetworkType),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
            vpc_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSubnetIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auth: {
                value: cdktn.listMapperHcl(ccDBProxyAuthFormatPropertyToHclTerraform, false)(this._auth.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBProxy.AuthFormatPropertyList",
            },
            db_proxy_name: {
                value: cdktn.stringToHclTerraform(this._dbProxyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            debug_logging: {
                value: cdktn.booleanToHclTerraform(this._debugLogging),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            default_auth_scheme: {
                value: cdktn.stringToHclTerraform(this._defaultAuthScheme),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_network_type: {
                value: cdktn.stringToHclTerraform(this._endpointNetworkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_family: {
                value: cdktn.stringToHclTerraform(this._engineFamily),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idle_client_timeout: {
                value: cdktn.numberToHclTerraform(this._idleClientTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            require_tls: {
                value: cdktn.booleanToHclTerraform(this._requireTls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDBProxyTagFormatPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBProxy.TagFormatPropertyList",
            },
            target_connection_network_type: {
                value: cdktn.stringToHclTerraform(this._targetConnectionNetworkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            vpc_subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSubnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDBProxyAuthFormatPropertyToTerraform(struct?: CcDBProxy.AuthFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_scheme: cdktn.stringToTerraform(struct!.authScheme),
        client_password_auth_type: cdktn.stringToTerraform(struct!.clientPasswordAuthType),
        description: cdktn.stringToTerraform(struct!.description),
        iam_auth: cdktn.stringToTerraform(struct!.iamAuth),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccDBProxyAuthFormatPropertyToHclTerraform(struct?: CcDBProxy.AuthFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_scheme: {
            value: cdktn.stringToHclTerraform(struct!.authScheme),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_password_auth_type: {
            value: cdktn.stringToHclTerraform(struct!.clientPasswordAuthType),
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
        iam_auth: {
            value: cdktn.stringToHclTerraform(struct!.iamAuth),
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


export function ccDBProxyTagFormatPropertyToTerraform(struct?: CcDBProxy.TagFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBProxyTagFormatPropertyToHclTerraform(struct?: CcDBProxy.TagFormatProperty | cdktn.IResolvable): any {
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


export namespace CcDBProxy {
export interface AuthFormatProperty {
    /**
    * The type of authentication that the proxy uses for connections from the proxy to the underlying database. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#auth_scheme CcDBProxy#auth_scheme}
    */
    readonly authScheme?: string;
    /**
    * The type of authentication the proxy uses for connections from clients.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#client_password_auth_type CcDBProxy#client_password_auth_type}
    */
    readonly clientPasswordAuthType?: string;
    /**
    * A user-specified description about the authentication used by a proxy to log in as a specific database user. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#description CcDBProxy#description}
    */
    readonly description?: string;
    /**
    * Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#iam_auth CcDBProxy#iam_auth}
    */
    readonly iamAuth?: string;
    /**
    * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#secret_arn CcDBProxy#secret_arn}
    */
    readonly secretArn?: string;
}
export class AuthFormatPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authScheme !== undefined) {
            hasAnyValues = true;
            internalValueResult.authScheme = this._authScheme;
        }
        if (this._clientPasswordAuthType !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientPasswordAuthType = this._clientPasswordAuthType;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._iamAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamAuth = this._iamAuth;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authScheme = undefined;
            this._clientPasswordAuthType = undefined;
            this._description = undefined;
            this._iamAuth = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authScheme = value.authScheme;
            this._clientPasswordAuthType = value.clientPasswordAuthType;
            this._description = value.description;
            this._iamAuth = value.iamAuth;
            this._secretArn = value.secretArn;
        }
    }

    // auth_scheme - computed: true, optional: true, required: false
    private _authScheme?: string; 
    public get authScheme() {
        return this.getStringAttribute('auth_scheme');
    }
    public set authScheme(value: string) {
        this._authScheme = value;
    }
    public resetAuthScheme() {
        this._authScheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authSchemeInput() {
        return this._authScheme;
    }

    // client_password_auth_type - computed: true, optional: true, required: false
    private _clientPasswordAuthType?: string; 
    public get clientPasswordAuthType() {
        return this.getStringAttribute('client_password_auth_type');
    }
    public set clientPasswordAuthType(value: string) {
        this._clientPasswordAuthType = value;
    }
    public resetClientPasswordAuthType() {
        this._clientPasswordAuthType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientPasswordAuthTypeInput() {
        return this._clientPasswordAuthType;
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

    // iam_auth - computed: true, optional: true, required: false
    private _iamAuth?: string; 
    public get iamAuth() {
        return this.getStringAttribute('iam_auth');
    }
    public set iamAuth(value: string) {
        this._iamAuth = value;
    }
    public resetIamAuth() {
        this._iamAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamAuthInput() {
        return this._iamAuth;
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

export class AuthFormatPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthFormatProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthFormatPropertyOutputReference {
        return new AuthFormatPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagFormatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#key CcDBProxy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rds_db_proxy#value CcDBProxy#value}
    */
    readonly value?: string;
}
export class TagFormatPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagFormatProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagFormatProperty | cdktn.IResolvable | undefined) {
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

export class TagFormatPropertyList extends cdktn.ComplexList {
    public internalValue? : TagFormatProperty[] | cdktn.IResolvable

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
    public get(index: number): TagFormatPropertyOutputReference {
        return new TagFormatPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
